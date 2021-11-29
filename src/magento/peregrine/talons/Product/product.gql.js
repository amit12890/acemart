import { gql } from '@apollo/client';

import { ProductDetailsFragment } from './productDetailFragment.gql';

export const GET_STORE_CONFIG_DATA = gql`
    query getStoreConfigData {
        storeConfig {
            id
            product_url_suffix
        }
    }
`;

export const GET_PRODUCT_DETAIL_QUERY = gql`
    query getProductDetailForProductPage($urlKey: String!) {
        products(filter: { sku: { eq: $urlKey } }) {
            items {
                id
                ...ProductDetailsFragment
                upsell_products {
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
                related_products {
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
    }
    ${ProductDetailsFragment}
`;

export default {
    getStoreConfigData: GET_STORE_CONFIG_DATA,
    getProductDetailQuery: GET_PRODUCT_DETAIL_QUERY
};
