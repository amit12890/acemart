import { useCallback, useState, useEffect } from "react"
import { useQuery, useLazyQuery } from '@apollo/client';
import { get, size } from 'lodash';
import { GET_QUESTION_ANSWER } from './questionAnswer.gql';
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

    const [runQuery, queryResponse] = useLazyQuery(GET_QUESTION_ANSWER)

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

    let questions = get(data, "customerQuestions.items", [])
    questions = size(questions) ? questions : []
    const queTotalPage = get(data, "customerQuestions.total_pages", 1)

    let answers = get(data, "customerAnswer.items", [])
    answers = size(answers) ? answers : []
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