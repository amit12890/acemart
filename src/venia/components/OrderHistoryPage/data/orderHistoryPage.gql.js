import { gql } from '@apollo/client';

const CustomerOrdersFragment = gql`
    fragment CustomerOrdersFragment on CustomerOrders {
        items {
            billing_address {
                city
                country_code
                firstname
                lastname
                postcode
                region
                street
                telephone
            }
            id
            invoices {
                id number
                items {
                    id
                    product_name
                    product_sku
                    product_sale_price { currency value }
                    quantity_invoiced
                }
            }
            items {
                id
                product_name
                product_sale_price {
                    currency
                    value
                }
                product_sku
                product_url_key
                selected_options {
                    label
                    value
                }
                quantity_ordered
            }
            number
            order_date
            payment_methods {
                name
                type
                additional_data {
                    name
                    value
                }
            }
            shipments {
                id number
                tracking {
                    carrier
                    title
                    number
                }
                items {
                    product_name
                    product_sku
                    quantity_shipped
                }
            }
            shipping_address {
                city
                country_code
                firstname
                lastname
                postcode
                region
                street
                telephone
            }
            shipping_method
            status
            total {
                discounts {
                    amount {
                        currency
                        value
                    }
                }
                grand_total {
                    currency
                    value
                }
                subtotal {
                    currency
                    value
                }
                total_shipping {
                    currency
                    value
                }
                total_tax {
                    currency
                    value
                }
            }
        }
        page_info {
            current_page
            total_pages
        }
        total_count
    }
`;

export const GET_CUSTOMER_ORDERS = gql`
    query GetCustomerOrders(
        $filter: CustomerOrdersFilterInput
        $pageSize: Int!
    ) {
        customer {
            id
            orders(filter: $filter, pageSize: $pageSize) {
                ...CustomerOrdersFragment
            }
        }
    }
    ${CustomerOrdersFragment}
`;

export const GET_REPORDER_ITEMS = gql`
mutation ReorderItems($orderNumber: String!) {
    reorderItems(orderNumber: $orderNumber) {
      cart {
        id
        items {
          uid
          product {
            sku
          }
          quantity
          prices {
            price {
              value
            }
          }
        }
      }
      userInputErrors {
        code
        message
        path
      }
    }
  }  
`

export default {
    getCustomerOrdersQuery: GET_CUSTOMER_ORDERS,
    reOrderItemsMutation: GET_REPORDER_ITEMS
};
