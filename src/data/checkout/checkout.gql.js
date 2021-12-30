import { gql } from '@apollo/client';
import {
    AppliedCouponsFragment,
    AvailablePaymentMethodsFragment,
    BillingAddressFragment,
    EmailFragment,
    GiftMessageFragment,
    ItemPricesFragment,
    ItemsFragment,
    MultiShippingFragment,
    PriceSummaryFragment,
    ProductListingFragment,
    SelectedPaymentMethodFragment,
    ShippingAddressesFragment,
    OrderConfirmationPageFragment,
    ShippingAddressItemFragment
} from './checkoutFragments.gql';

export const GET_COUNTRIES = gql`
query countries {
    countries {
        available_regions {
            id code name
        }
        full_name_english
        full_name_locale
        id
        three_letter_abbreviation
        two_letter_abbreviation
    }
}
`

export const PLACE_ORDER = gql`
    mutation placeOrder($cartId: String!) {
        placeOrder(input: { cart_id: $cartId }) @connection(key: "placeOrder") {
            order {
                order_number
            }
        }
    }
`;

export const GET_CHECKOUT_DETAILS = gql`
    query getCheckoutDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            is_virtual
            total_quantity  
            ...multiShippingFragment  
            ...appliedCouponsFragment    
            ...availablePaymentMethodsFragment
            ...billingAddressFragment
            ...emailFragment
            ...giftMessageFragment    
            ...itemsFragment
            ...priceSummaryFragment
            ...selectedPaymentMethodFragment
            ...shippingAddressesFragment 
        }
    }
    ${AppliedCouponsFragment}
    ${AvailablePaymentMethodsFragment}
    ${BillingAddressFragment}
    ${EmailFragment}
    ${GiftMessageFragment}
    ${ItemsFragment}
    ${PriceSummaryFragment}
    ${SelectedPaymentMethodFragment}
    ${ShippingAddressesFragment}
    ${ItemPricesFragment}
    ${ProductListingFragment}
    ${MultiShippingFragment}
`;

export const SET_STORE_PICKUP_SHIPPING_ADDRESS = gql`
    mutation setStorePickupShippingAddressesOnCart($cartId: String!) {
        setStorePickupShippingAddressesOnCart(input:{ cart_id:$cartId }){
            cart {
                id
                is_virtual
                total_quantity  
                ...multiShippingFragment  
                ...appliedCouponsFragment    
                ...availablePaymentMethodsFragment
                ...billingAddressFragment
                ...emailFragment
                ...giftMessageFragment    
                ...itemsFragment
                ...priceSummaryFragment
                ...selectedPaymentMethodFragment
                ...shippingAddressesFragment 
            }
        }
    }
    ${AppliedCouponsFragment}
    ${AvailablePaymentMethodsFragment}
    ${BillingAddressFragment}
    ${EmailFragment}
    ${GiftMessageFragment}
    ${ItemsFragment}
    ${PriceSummaryFragment}
    ${SelectedPaymentMethodFragment}
    ${ShippingAddressesFragment}
    ${ItemPricesFragment}
    ${ProductListingFragment}
    ${MultiShippingFragment}
`

export const SET_GUEST_EMAIL = gql`
    mutation setGuestEmailOnCart($cartId: String!, $email: String!){
        setGuestEmailOnCart(input: {
            cart_id: $cartId
            email: $email
        }) {
            cart {
                email
            }
        }
    }
`;

// A query to fetch order details _right_ before we submit, so that we can pass
// data to the order confirmation page.
export const GET_ORDER_DETAILS = gql`
    query getOrderDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...OrderConfirmationPageFragment
        }
    }
    ${OrderConfirmationPageFragment}
`;

export const CREATE_CART = gql`
    # This mutation will return a masked cart id. If a bearer token is provided for
    # a logged in user it will return the cart id for that user.
    mutation createCart {
        cartId: createEmptyCart
    }
`;



export const GET_CUSTOMER = gql`
    query GetCustomerForCheckout {
        customer {
            id
            default_shipping
            firstname
        }
    }
`;

export const EMAIL_EXIST_GQL = gql`
    query isEmailAvailable($email: String!){
        isEmailAvailable(email:$email) {
            is_email_available
        }
    }
`

export const SET_SHIPPING_ADDRESS_GQL = gql`
mutation setShippingAddressesOnCart($input:SetShippingAddressesOnCartInput){
    setShippingAddressesOnCart(
        input: $input
    ) {
        cart {
            shipping_addresses {
                ...shippingAddressItemFragment
            }
        }
    }
}
${ShippingAddressItemFragment}
`


export const SET_SHIPPING_METHOD_ON_CART = gql`
mutation setShippingMethodsOnCart($input:SetShippingMethodsOnCartInput){
    setShippingMethodsOnCart(
      input: $input
    ) {
        cart {
            ...shippingAddressesFragment 
        }
    }
}
${ShippingAddressesFragment}
`


export const SET_BILLING_ADDRESS_GQL = gql`
mutation setBillingAddressOnCart($input:SetBillingAddressOnCartInput){
    setBillingAddressOnCart(
        input: $input
    ) {
        cart {
           ...billingAddressFragment
           ...shippingAddressesFragment 
        }
    }
}
${BillingAddressFragment}
${ShippingAddressesFragment}
`

export const SET_PAYMENT_METHOD_ON_CART = gql`
mutation setPaymentMethodOnCart($input:SetPaymentMethodOnCartInput){
    setPaymentMethodOnCart(input: $input) {
        cart {
            selected_payment_method {
                code
                title
            }
            ...shippingAddressesFragment 
        }
    }
}
${ShippingAddressesFragment}
`

export const MERGE_CART_MUTATION = gql`
    mutation MergeCartsAfterSignIn(
        $sourceCartId: String!
        $destinationCartId: String!
    ) {
        mergeCarts(
            source_cart_id: $sourceCartId
            destination_cart_id: $destinationCartId
        ){
             id
            is_virtual
            total_quantity  
            ...multiShippingFragment  
            ...appliedCouponsFragment    
            ...availablePaymentMethodsFragment
            ...billingAddressFragment
            ...emailFragment
            ...giftMessageFragment    
            ...itemsFragment
            ...priceSummaryFragment
            ...selectedPaymentMethodFragment
            ...shippingAddressesFragment 
        }
    }
    ${AppliedCouponsFragment}
    ${AvailablePaymentMethodsFragment}
    ${BillingAddressFragment}
    ${EmailFragment}
    ${GiftMessageFragment}
    ${ItemsFragment}
    ${PriceSummaryFragment}
    ${SelectedPaymentMethodFragment}
    ${ShippingAddressesFragment}
    ${ItemPricesFragment}
    ${ProductListingFragment}
    ${MultiShippingFragment}
`

export const PAYPAL_GENERATE_TOKEN = gql`
mutation createPaypalExpressToken($cartId: String!){
    createPaypalExpressToken(
      input: {
        cart_id: $cartId
        code: "paypal_express"
        express_button: true
        urls: {
          return_url: "paypal/action/return.html"
          cancel_url: "paypal/action/cancel.html"
        }
      }
    ) {
      token
      paypal_urls {
        start
        edit
      }
    }
  }
`

export default {
    getCountries: GET_COUNTRIES,
    setGuestCartEmail: SET_GUEST_EMAIL,
    createCartMutation: CREATE_CART,
    getCheckoutDetailsQuery: GET_CHECKOUT_DETAILS,
    setStorePickupShippingAdressMutation: SET_STORE_PICKUP_SHIPPING_ADDRESS,
    getCustomerQuery: GET_CUSTOMER,
    getOrderDetailsQuery: GET_ORDER_DETAILS,
    placeOrderMutation: PLACE_ORDER,
    emailAvailableCheckQuery: EMAIL_EXIST_GQL,
    setShippingAddressMutation: SET_SHIPPING_ADDRESS_GQL,
    setBillingAddressMutation: SET_BILLING_ADDRESS_GQL,
    setShippingMethodMutation: SET_SHIPPING_METHOD_ON_CART,
    setPaymentMethodMutation: SET_PAYMENT_METHOD_ON_CART,
    mergeCartMutation: MERGE_CART_MUTATION,

    generatePayPalTokenMutation: PAYPAL_GENERATE_TOKEN
};
