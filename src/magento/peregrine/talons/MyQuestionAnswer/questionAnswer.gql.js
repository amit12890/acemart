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


export const GET_PRODUCTS_BY_SKU = gql`
    query getProductsBySku($skus: [String]) {
        products(filter: { sku: { in: $skus } }) {
            items {
                id
                name
                sku
                url_rewrites {
                    url
                    parameters {
                        name
                        value
                        __typename
                    }
                    __typename
                }
            }
        }
    }
`;