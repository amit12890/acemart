import { gql } from '@apollo/client';
import { CartPageFragment } from './cartPageFragments.gql';

export const GET_CART_DETAILS = gql`
    query GetCartDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...CartPageFragment
        }
    }
    ${CartPageFragment}
`;

export const REMOVE_ALL_ITEM_CART = gql`
    mutation removeAllItemFromCart($cartId: String!) {
        removeAllItemFromCart(input: { cart_id: $cartId }) {
            cart {
                id
                ...CartPageFragment
            }
        }
    }
    ${CartPageFragment}
`

export const GET_STORE_CONFIG_DATA = gql`
    query getStoreConfigData {
        storeConfig {
            id
            store_name
            store_group_name        
        }
    }
`;

export const GET_CART_RELATED_PRODUCTS = gql`
    query GetCartDetails($skus: [String]) {
        products(
            currentPage: 1
            pageSize: 5
            sort: { position: ASC }
            filter: {
                sku: {
                    in: $skus
                }
                category_id: { eq: "2" }
            }
        ) {
            items {
                id
                name
                product_name
                sku
                uom
                mpn
                url_key
                url_suffix
                url_rewrites {
                    url
                    parameters {
                        name
                        value
                    }
                }
                small_image { url }
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
`