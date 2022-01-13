import { gql } from '@apollo/client';

export const GET_QUESTION_ANSWER = gql`
query getQuestionAnswer(
    $pageSize: Int
    $currentPage: Int
) {
    customerQuestions(currentPage:$currentPage, pageSize:$pageSize) {
        items {
            answers
            content
            created_datetime
            id
            product_id
            product_name
            sku
            status
        }
        total_count
        total_pages
    }
    customerAnswer(currentPage:$currentPage, pageSize:$pageSize) {
        items {
            content            
            created_datetime
            id            
            product_id
            product_name
            question
            sku
            status
        }
        total_count
        total_pages
    }
}
`;

