import { useCallback, useState, useEffect, useMemo } from "react"
import { useQuery, useLazyQuery } from '@apollo/client';
import { concat, get, size, map, find, set } from 'lodash';
import { GET_QUESTION_ANSWER, GET_PRODUCTS_BY_SKU } from './questionAnswer.gql';
import { useLocation, useHistory } from 'react-router-dom';
import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';

const DEFAULT_PAGE_LIMIT = 10;
const DEFAULT_PAGE = 1;

export const useMyQuestionAnswer = () => {

    const history = useHistory();
    // get the URL query parameters.
    const location = useLocation();
    const { pathname, search } = location;
    const limit = getSearchParam('limit', location) || DEFAULT_PAGE_LIMIT;
    const ansPage = getSearchParam('ansPage', location) || DEFAULT_PAGE;
    const quePage = getSearchParam('quePage', location) || DEFAULT_PAGE;

    const [runProductQuery, queryProductResponse] = useLazyQuery(GET_PRODUCTS_BY_SKU)

    const [runQuery, queryResponse] = useLazyQuery(GET_QUESTION_ANSWER, {
        onCompleted: (data) => {
            let skus = []
            skus = map(get(data, "customerAnswer.items", []), "sku")
            skus = concat(skus, map(get(data, "customerQuestions.items", []), "sku"))
            if(skus.length) {
                runProductQuery({ variables: { skus } })
            }
        }
    })

    useEffect(() => {
        runQuery({
            variables: {
                pageSize: Number(limit),
                queCurrentPage: Number(quePage),
                ansCurrentPage: Number(ansPage),
            },
        })
    }, [limit, ansPage, quePage])

    const { data, loading, error } = queryResponse;
    const { data: products, loading: productLoading, error: productError } = queryProductResponse;

    const setPageSizeHandler = useCallback((pageSize) => {
        const nextParams = new URLSearchParams(search);
        nextParams.set("limit", pageSize);
        nextParams.set("quePage", DEFAULT_PAGE);
        nextParams.set("ansPage", DEFAULT_PAGE);
        history.push({ pathname, search: nextParams.toString() });
    }, [history, pathname, search])

    const setQuePage = useCallback((page) => {
        const nextParams = new URLSearchParams(search);
        nextParams.set("quePage", page);
        history.push({ pathname, search: nextParams.toString() });
    }, [history, pathname, search])

    const setAnsPage = useCallback((page) => {
        const nextParams = new URLSearchParams(search);
        nextParams.set("ansPage", page);
        history.push({ pathname, search: nextParams.toString() });
    }, [history, pathname, search])

    const questions = useMemo(() => {
        const questionMainList = get(data, "customerQuestions.items", [])
        let questionList = size(questionMainList) ? [...questionMainList] : []

        if(questionList.length && products && products.products) {
            const productList = get(products, "products.items", [])
            if(productList.length) {
                for (let index = 0; index < questionList.length; index++) {
                    const que = questionList[index];
                    const relatedProduct = find(productList, ["sku", que.sku])
                    if(relatedProduct) {
                        questionList[index] = {
                            ...que,
                            url_rewrites: relatedProduct.url_rewrites
                        }
                    }
                }
            }
        }
        return questionList;
    }, [data, products])
    const queTotalPage = get(data, "customerQuestions.total_pages", 1)

    const answers = useMemo(() => {
        const answerMainList = get(data, "customerAnswer.items", [])
        let answerList = size(answerMainList) ? [...answerMainList] : []

        if(answerList.length && products && products.products) {
            const productList = get(products, "products.items", [])
            if(productList.length) {
                for (let index = 0; index < answerList.length; index++) {
                    const ans = answerList[index];
                    const relatedProduct = find(productList, ["sku", ans.sku])
                    if(relatedProduct) {
                        answerList[index] = {
                            ...ans,
                            url_rewrites: relatedProduct.url_rewrites
                        }
                    }
                }
            }
        }
        return answerList;
    }, [data, products])

    const ansTotalPage= get(data, "customerAnswer.total_pages", 1)

    return {
        questions,
        answers,
        loading,
        error,
        setPageSize: setPageSizeHandler,
        pageSize: Number(limit),
        quePage: Number(quePage),
        setQuePage,
        queTotalPage: Number(queTotalPage),
        ansPage: Number(ansPage),
        setAnsPage,
        ansTotalPage: Number(ansTotalPage),
    }
}