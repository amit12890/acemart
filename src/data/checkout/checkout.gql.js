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
            ...selectedPaymentMethodFragment
            ...shippingAddressesFragment 
        }
    }
}
${ShippingAddressesFragment}
${SelectedPaymentMethodFragment}
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
mutation createPaypalExpressToken($cartId: String!, $returnUrl: String!, $cancelUrl: String!){
    createPaypalExpressToken(
      input: {
        cart_id: $cartId
        code: "paypal_express"
        express_button: true
        urls: {
          success_url: $returnUrl
          return_url: $returnUrl
          cancel_url: $cancelUrl
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

export const ORDER_SUCCESS_QUERY = gql`
query successOrderPage($incrementId:String!) {
    successOrderPage(increment_id:$incrementId) {
        id 
        increment_id
        order_date
        status
        shipping_method
        pickup_datetime
        customer_email
        carrier
        store_information {
            city
            hours
            state
            store_name
            street
            telephone
            zip
        }
        payment_methods {
            name            
            additional_data {
                name
                value
            }
        }
        shipping_address {
            firstname
            lastname
            middlename
            street
            city
            region
            postcode
            country_code
            company
            telephone
        }
        billing_address {
            firstname
            lastname
            middlename
            street
            city
            region
            postcode
            country_code
            company
            telephone
        }
        items {
            id
            product_name
            product_sku
            product_sale_price {
                currency
                value
            }
            quantity_ordered
        }
        total{
            subtotal {
                currency
                value
            }
            grand_total {
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
            discounts {
                amount {
                    currency
                    value
                }
                label
            }
        }
        comments {
            timestamp
            message
        }
    }
}
`

export const UPLOAD_BARCODE = gql`
mutation BarcodeUpload($file:String!,$orderId:String!) {
	BarcodeUpload(
		input: {
			base64_encoded_file: $file,
            order_id : $orderId
        }
    ){
        url_key
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

    generatePayPalTokenMutation: PAYPAL_GENERATE_TOKEN,
    orderSuccessQuery: ORDER_SUCCESS_QUERY,
    uploadBarCodeMutation: UPLOAD_BARCODE
};
