import { gql } from '@apollo/client';
import { AppliedCouponsFragment, AvailablePaymentMethodsFragment, BillingAddressFragment, EmailFragment, GiftMessageFragment, ItemPricesFragment, ItemsFragment, MultiShippingFragment, PriceSummaryFragment, ProductListingFragment, SelectedPaymentMethodFragment, ShippingAddressesFragment } from './checkoutPageFragments.gql';
import { OrderConfirmationPageFragment } from './OrderConfirmationPage/orderConfirmationPageFragments.gql';

export const CREATE_CART = gql`
    # This mutation will return a masked cart id. If a bearer token is provided for
    # a logged in user it will return the cart id for that user.
    mutation createCart {
        cartId: createEmptyCart
    }
`;

export const PLACE_ORDER = gql`
    mutation placeOrder($cartId: String!) {
        placeOrder(input: { cart_id: $cartId }) @connection(key: "placeOrder") {
            order {
                order_number
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

export const GET_CUSTOMER = gql`
    query GetCustomerForCheckout {
        customer {
            id
            default_shipping
            firstname
        }
    }
`;

export default {
    createCartMutation: CREATE_CART,
    getCheckoutDetailsQuery: GET_CHECKOUT_DETAILS,
    setStorePickupShippingAdressMutation: SET_STORE_PICKUP_SHIPPING_ADDRESS,
    getCustomerQuery: GET_CUSTOMER,
    getOrderDetailsQuery: GET_ORDER_DETAILS,
    placeOrderMutation: PLACE_ORDER
};
