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