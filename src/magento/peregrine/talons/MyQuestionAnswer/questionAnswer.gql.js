import { gql } from '@apollo/client';

export const GET_QUESTION_ANSWER = gql`
query getQuestionAnswer(
    $pageSize: Int
    $queCurrentPage: Int
    $ansCurrentPage: Int
) {
    customerQuestions(currentPage:$queCurrentPage, pageSize:$pageSize) {
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
    customerAnswer(currentPage:$ansCurrentPage, pageSize:$pageSize) {
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

