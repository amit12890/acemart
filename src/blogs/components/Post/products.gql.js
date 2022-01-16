import gql from 'graphql-tag';

const GET_RELATED_PRODUCTS_QUERY = gql`
    query getRelatedProducts ($relatedProducts: [String]) {
        products(filter: { sku: { in: $relatedProducts} }) {
            items {
                __typename
                id
                name
                product_name
                sku uom mpn
                url_key
                url_suffix
                url_rewrites {
                    url
                    parameters {
                        name
                        value
                    }
                }
                small_image {
                    url
                }
                price {
                    regularPrice {
                        amount {
                            currency
                            value
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
