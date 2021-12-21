import { gql } from '@apollo/client';

export const GET_CUSTOMER_REVIEWS = gql`
    query GetCustomerReviews($pageSize: Int, $currentPage: Int) {
        customer{    
            reviews(pageSize: $pageSize, currentPage: $currentPage) {
                items {
                review_id
                average_rating
                created_at
                nickname
                product {
                    name
                    sku
                    id
                }
                images {
                    resized_path
                    full_path
                }
                ratings_breakdown {
                    name
                    value
                }
                summary
                text
                }
                page_info {
                    current_page
                    page_size
                    total_pages
                }
            }
        }
    }
`;
