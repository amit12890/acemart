import { gql } from '@apollo/client';

export const getProductStoreLocatorData = gql`
query getAvailableProductStoresData($productId:Int){
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
        store_locator_info(productId:$productId) {
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
            temporary_closure
            fax
            driving_directions
            is_distribution_center
            store_lat
            store_long
            qty
            stock_status
        }
        __typename
    }
}
`