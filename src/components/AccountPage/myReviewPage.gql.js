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
                    summary
                    text
                    product {
                        name
                        sku
                        id
                        rating_summary
                        review_count
                        url_suffix
                        small_image {
                            url
                        }
                        url_rewrites {
                            url
                            parameters {
                                name
                                value
                            }
                        }
                    }
                    images {
                        resized_path
                        full_path
                    }
                    ratings_breakdown {
                        name
                        value
                    }
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
