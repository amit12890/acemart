import { gql } from '@apollo/client';

export const getProductQuestions = gql`
query getProductQuestions($productId: String) {
    questions (product_id: $productId) {
        items {
            id
            nickname
            content
            answer {
                id
                nickname
                content
            }
        }
    }
}
`

export const addQuestionMutation = gql`
mutation addQuestion(
    $product_id: Int!
    $status: Int!
    $per_page: Int!
    $nickname_question: String!
    $question: String!
    $notify: Int!
    $notify_email: String!
    $newsletter: Int!
    $newsletter_email: String!
){
    addQuestion(
        input: 
        {
            product_id: $product_id
            status: $status
            per_page: $per_page
            nickname_question: $nickname_question
            question: $question
            notify: $notify
            notify_email: $notify_email
            newsletter: $newsletter
            newsletter_email: $newsletter_email
        }
    ) {
        success 
    }
}
`

export const addAnswerMutation = gql`
mutation addAnswer(
    $question_id: Int!
    $status: Int!
    $nickname_answer: String!
    $answer: String!
    $newsletter: Int!
    $newsletter_email: String!
){
    addAnswer (
        input: 
        {
            question_id: $question_id
            status: $status
            nickname_answer: $nickname_answer
            answer: $answer
            newsletter: $newsletter
            newsletter_email: $newsletter_email
        }
    ) {
        success 
    }
}
`

export const reportQuestionMutation = gql`
mutation reportQuestion($question_id: Int!) {
    reportQuestion( input: { id: $question_id } ) {
        success
    }
}
`

export const reportAnswerMutation = gql`
mutation reportAnswer($ans_id: Int!) {
    reportAnswer( input: { id: $ans_id } ) {
        success
    }
}
`

export const questionRatingPlusMutation = gql`
mutation questionRatingPlus($question_id: Int!) {
    questionRatingPlus( input: { id: $question_id } ) {
        success count
    }
}
`

export const questionRatingMinusMutation = gql`
mutation questionRatingMinus($question_id: Int!) {
    questionRatingMinus( input: { id: $question_id } ) {
        success count
    }
}
`

export const answerRatingPlusMutation = gql`
mutation answerRatingPlus($ans_id: Int!) {
    answerRatingPlus( input: { id: $ans_id } ) {
        success count
    }
}
`

export const answerRatingMinusMutation = gql`
mutation answerRatingMinus($ans_id: Int!) {
    answerRatingMinus( input: { id: $ans_id } ) {
        success count
    }
}
`
