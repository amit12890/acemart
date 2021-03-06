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
                price {
                    regularPrice {
                        amount {
                            currency
                            value
                        }
                    }
                }
                price_range {    
                    maximum_price {
                        final_price {
                            currency
                            value
                        }
                        regular_price {
                            currency
                            value
                        }
                        discount {
                            amount_off
                            percent_off
                        }
                    }
                    minimum_price {
                        final_price {
                            currency
                            value
                        }
                        regular_price {
                            currency
                            value
                        }
                        discount {
                            amount_off
                            percent_off
                        }
                    }
                }
                rating_summary
                review_count
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
            uid
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

export const ADD_PRODUCTS_TO_COMPARE_LIST = gql`
    mutation addProductsToCompareList(
        $input: AddProductsToCompareListInput
    ) {
        addProductsToCompareList(input: $input) {
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

export const ASSIGN_COMPARE_LIST_TO_CUSTOMER = gql`
mutation assignCompareListToCustomer($uid: ID!) {
    assignCompareListToCustomer(uid:$uid){
        result
        compare_list{
            ...UserCompareListFragment
        }
    }
}
${UserCompareListFragment}
`