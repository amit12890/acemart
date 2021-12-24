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
                customer_address_id
                save_in_address_book
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
            shipping_addresses {
                ...shippingAddressItemFragment
            }
        }
    }
}
${ShippingAddressItemFragment}
`


export const SET_BILLING_ADDRESS_GQL = gql`
mutation setBillingAddressOnCart($input:SetBillingAddressOnCartInput){
    setBillingAddressOnCart(
        input: $input
    ) {
        cart {
            billing_address {
                customer_address_id
                save_in_address_book
                firstname
                lastname
                company
                street
                city
                region{
                    code
                    label
                }
                postcode
                telephone
                country{
                    code
                    label
                }
            }
        }
    }
}
`

export default {
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
    setShippingMethodMutation: SET_SHIPPING_METHOD_ON_CART
};
