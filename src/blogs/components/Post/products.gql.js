import gql from 'graphql-tag';

const GET_RELATED_PRODUCTS_QUERY = gql`
    query getRelatedProducts ($relatedProducts: [String]) {
        products(filter: { sku: { in: $relatedProducts} }) {
            items {
                id
                name
                url_key
                url_suffix
                image {
                    url
                }
                price_range {
                    minimum_price {
                        regular_price {
                            value
                            currency
                        }
                    }
                }
            }
        }
    }
`;

export default {
    queries: {
        getRelatedProductsQuery: GET_RELATED_PRODUCTS_QUERY
    }
};
