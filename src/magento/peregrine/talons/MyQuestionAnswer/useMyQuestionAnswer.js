import { useQuery } from '@apollo/client';
import { get, size } from 'lodash';
import { GET_QUESTION_ANSWER } from './questionAnswer.gql';
import { useCallback, useState } from "react"
export const useMyQuestionAnswer = () => {

    const [pageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const { data, loading, error, refetch } = useQuery(GET_QUESTION_ANSWER, {
        variables: {
            pageSize,
            currentPage
        },
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    const setPageSizeHandler = useCallback((pageSize) => {
        refetch({
            pageSize,
            currentPage
        })
        setPageSize(pageSize)
    }, [currentPage])

    let questions = get(data, "customerQuestions.items", [])
    questions = size(questions) ? questions : []

    let answers = get(data, "customerAnswer.items", [])
    answers = size(answers) ? answers : []

    return {
        questions,
        answers,
        loading,
        error,
        setPageSize: setPageSizeHandler,
        pageSize,
        currentPage
    }
}