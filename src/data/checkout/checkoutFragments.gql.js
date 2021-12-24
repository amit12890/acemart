import { gql } from '@apollo/client';

export const MultiShippingFragment = gql`
    fragment multiShippingFragment on Cart {
        multi_shipping {
        boss {
            items {
            item_id
            product_id        
            qty
            price
            sub_total
            tax
            total        
            product {    
                id
                name
                sku
                url_key
                url_suffix
                uom
                brand
                brand_name
                product_name
                thumbnail {
                    url        
                }
                small_image {
                    url        
                }
            }
            }
            label
            pickup
        }
        bops {
            items {
            item_id
            product_id        
            qty
            price
            sub_total
            tax
            total        
            product {    
                id
                name
                sku
                url_key
                url_suffix
                uom
                brand
                brand_name
                product_name
                thumbnail {
                    url        
                }
                small_image {
                    url        
                }
            }
            }
            label
            pickup
        }
        }
    }
`
export const AppliedCouponsFragment = gql`
    fragment appliedCouponsFragment on Cart{
        applied_coupons{
        code
        }
    }
`

export const AvailablePaymentMethodsFragment = gql`
    fragment availablePaymentMethodsFragment on Cart{
        available_payment_methods{
        code
        title
        }
    }
`

export const BillingAddressFragment = gql`
    fragment billingAddressFragment on Cart{
        billing_address{
        city
        company
        country {
            code
            label
        }    
        firstname
        lastname
        postcode
        region {
            code
            label
            region_id
        }
        street
        telephone
        }
    }
`

export const EmailFragment = gql`
    fragment emailFragment on Cart {
        email
    }
`

export const GiftMessageFragment = gql`
  fragment giftMessageFragment on Cart {
    gift_message {
      from
      message
      to
    }
  }
`

export const ItemsFragment = gql`
  fragment itemsFragment on Cart{
    items {
      id
      quantity
      uid
      ...itemPricesFragment
      ...productListingFragment    
      __typename
    }
  }
`

export const ItemPricesFragment = gql`
  fragment itemPricesFragment on CartItemInterface {
    prices {
      discounts {
        amount {
          currency
          value
        }
        label
      }
      fixed_product_taxes {
        amount {
          currency
          value
        }
        label
      }
      price {
        currency
        value
      }
      row_total {
        currency
        value
      }
      row_total_including_tax {
        currency
        value
      }
      total_item_discount {
        currency
        value
      }
    }
  }
`

export const ProductListingFragment = gql`
    fragment productListingFragment on CartItemInterface {
        product {
            id
            name
            sku
            url_key
            url_suffix
            uom      
            thumbnail {
                url
            }
            small_image {
                url
            }
            stock_status
            ... on ConfigurableProduct {
            variants {
                attributes {
                        uid
                    }
                product {
                        id
                small_image {
                            url
                        }
                    }
                }
            }
        }
    }
`

export const PriceSummaryFragment = gql`
    fragment priceSummaryFragment on Cart {
        prices{
        applied_taxes {
            amount {
                    currency
                    value
                }
                label
            }    
        discounts {
            amount {
                    currency
                    value
                }
                label
            }
        grand_total {
                currency
                value
            }
        subtotal_excluding_tax {
                currency
                value
            }
        subtotal_including_tax {
                currency
                value
            }
        subtotal_with_discount_excluding_tax {
                currency
                value
            }
        }
    }
`

export const SelectedPaymentMethodFragment = gql`
    fragment selectedPaymentMethodFragment on Cart{
        selected_payment_method{
            code
            purchase_order_number
            title
        }
    }
`

export const ShippingAddressesFragment = gql`
    fragment shippingAddressesFragment on Cart{
        shipping_addresses{
        available_shipping_methods {
            amount {
                    currency
                    value
                }
                available
            base_amount {
                    currency
                    value
                }
                carrier_code
                carrier_title
                error_message
                method_code
                method_title
            price_excl_tax {
                    currency
                    value
                }
            price_incl_tax {
                    currency
                    value
                }
            }
        cart_items {
                cart_item_id
                quantity
            }
            city
            company
        country {
                code
                label
            }
            customer_notes
            firstname
            items_weight
            lastname
            postcode
        region {
                code
                label
                region_id
            }
        selected_shipping_method {
            amount {
                    currency
                    value
                }
            base_amount {
                    currency
                    value
                }
                carrier_code
                carrier_title
                method_code
                method_title
            }
            street
            telephone
        }
    }
`
export const OrderConfirmationPageFragment = gql`
    fragment OrderConfirmationPageFragment on Cart {
        id
        email
        total_quantity
        shipping_addresses {
            firstname
            lastname
            street
            city
            region {
                label
            }
            postcode
            country {
                label
            }

            selected_shipping_method {
                carrier_title
                method_title
            }
        }
    }
`;

export const ShippingAddressItemFragment = `
fragment shippingAddressItemFragment on Cart {
    firstname
    lastname
    company
    street
    city
    region {
        code
        label
    }
    postcode
    telephone
    country {
        code
        label
    }
    available_shipping_methods {
        amount {
            currency
            value
        }
        available
        carrier_code
        carrier_title
        error_message
        method_code
        method_title
        price_excl_tax {
            value
            currency
        }
        price_incl_tax {
            value
            currency
        }
    }
    selected_shipping_method {
        amount {
            value
            currency
        }
        carrier_code
        carrier_title
        method_code
        method_title
    }
}
`