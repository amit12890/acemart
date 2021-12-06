import { gql } from '@apollo/client';

export const UserCompareListFragment = gql`
    fragment UserCompareListFragment on CompareList {
        uid item_count
        items {
            uid
            product {
                id sku
                name uom availability
                brand_name
                capacity
                ship_info
                prod_dimensions
                mpn material
                manufacturer
                country_of_origin
                color
                certifications
                connection
                electrical
                energy_consume
                prod_temp
                output
                description { html }
                short_description { html }
                image { url label }
                url_rewrites {
                    url
                    parameters {
                      name
                      value
                    }
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

export const GET_CUSTOMER_COMPARE_LIST = gql`
    query customer {
        customer {
            id email
            compare_list {
                uid
                ...UserCompareListFragment
            }
        }
    }
    ${UserCompareListFragment}
`;

export const GET_GUEST_COMPARE_LIST = gql`
    query compareList($uid:ID!){
        compareList(uid:$uid){
            ...UserCompareListFragment
        }
    }
    ${UserCompareListFragment}
`

export const CREATE_COMPARE_LIST = gql`
    mutation createCompareList(
        $input: CreateCompareListInput
    ) {
        createCompareList(input: $input) {
            uid
            ...UserCompareListFragment
        }
    }
    ${UserCompareListFragment}
`;

export const REMOVE_ITEM_FROM_COMPARE_LIST = gql`
    mutation removeProductsFromCompareList(
        $input: RemoveProductsFromCompareListInput
    ) {
        removeProductsFromCompareList(input: $input) {
            uid
            ...UserCompareListFragment
        }
    }
    ${UserCompareListFragment}
`;