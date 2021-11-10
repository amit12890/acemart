import { gql } from '@apollo/client';

export const UserCompareListFragment = gql`
    fragment UserCompareListFragment on CompareList {
        uid item_count
        items {
            uid
            product {
                sku uom availability brand
                description { html } short_description { html }
                
            }
        }
    }
`;

export const GET_CUSTOMER_COMPARE_LIST = gql`
    query customer {
        customer {
            id
            compare_list {
                uid
                ...UserCompareListFragment
            }
        }
    }
    ${UserCompareListFragment}
`;

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