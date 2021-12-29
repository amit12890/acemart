import { gql } from '@apollo/client';

export const GET_STORE_CONFIG_DATA = gql`
    query getStoreConfigData {
        storeConfig {
            id
            code
            store_name
            store_group_name
            default_display_currency_code
            store_locator_info {
                street
                city
                zip
                state
                phone
                hours {
                    mon
                    tue
                    wed
                    thu
                    fri
                    sat
                    sun
                }
                map
                temporary_closure
                fax
                driving_directions
                is_distribution_center
                store_lat
                store_long
                qty
                stock_status
                __typename
            }
        }
    }
`;

export const GET_URL_RESOLVER_DATA = gql`
    query getUrlResolverData($url: String!) {
        urlResolver(url: $url) {
            id
            type
        }
    }
`;

export const GET_AVAILABLE_STORES_DATA = gql`
    query getAvailableStoresData {
        availableStores{
            category_url_suffix 
            code 
            default_display_currency_code 
            id 
            locale 
            product_url_suffix 
            secure_base_media_url         
            store_group_code 
            store_group_name 
            store_name 
            store_sort_order
            store_locator_info {
                street
                city
                zip
                state
                phone
                hours {
                    mon
                    tue
                    wed
                    thu
                    fri
                    sat
                    sun
                }
                map
                temporary_closure
                fax
                driving_directions
                is_distribution_center
                store_lat
                store_long
                qty
                stock_status
                __typename
            }
            __typename
        }
    }
`;

export default {
    getStoreConfigData: GET_STORE_CONFIG_DATA,
    getUrlResolverData: GET_URL_RESOLVER_DATA,
    getAvailableStoresData: GET_AVAILABLE_STORES_DATA
};
