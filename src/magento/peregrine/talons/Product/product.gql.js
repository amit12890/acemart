import { gql } from '@apollo/client';

import { ProductDetailsFragment, ProductBasicDetailsFragment } from './productDetailFragment.gql';

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
                    ...ProductBasicDetailsFragment
                }
                related_products {
                    ...ProductBasicDetailsFragment
                }
            }
        }
    }
    ${ProductDetailsFragment}
    ${ProductBasicDetailsFragment}
`;

export default {
    getStoreConfigData: GET_STORE_CONFIG_DATA,
    getProductDetailQuery: GET_PRODUCT_DETAIL_QUERY
};
