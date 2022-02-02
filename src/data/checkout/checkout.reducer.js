import { get, size } from "lodash"
import {
    CHECKOUT_FETCHING,
    CHECKOUT_FETCHED,
    CHECKOUT_FETCH_ERROR,
    UPDATE_CHECKOUT_FIELD,
    ACTION_LOADING,
    ACTION_COMPLETE,
    RESET_CHCEKOUT
} from "./checkout.action"



const INIT_STATE = {
    fetching: true,
    fetched: false,
    // used when user tries to login from checkout
    login_and_fetching: false,
    // for single action loading
    is_action_loading: false,
    action_loading_identifier: '',

    step: 0,
    isGuestCheckout: false,
    isMultiShipping: false,
    multi_shipping: {
        boss: null,
        bops: null
    },
    items: [],

    //it will contain shipping address and selected shipping method in cart
    // it will have index 0
    shipping_addresses: [],
    billing_address: null,
    email: null,
    prices: {},
    pickup_date_time: null,

    selected_payment_method: {},
    available_payment_methods: [],
    selected_shipping_fees: {},
    // token , paypal_urls
    paypal: {},

    orderNumber: '',
    orderId: ''
}

export const checkoutReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHECKOUT_FETCHING: {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case CHECKOUT_FETCHED: {
            const { multi_shipping, prices, ...restPayload } = action.payload
            const isMultiShipping = size(get(multi_shipping, "boss", '')) > 0

            const existing_fees_options = get(state, "selected_shipping_fees.options", [])
            const selected_shipping_fees_options = get(prices, "multifees.selected_fees", existing_fees_options)
            const selected_shipping_fees = { ...state.selected_shipping_fees, options: selected_shipping_fees_options }
            console.log("🚀 ~ file: checkout.reducer.js ~ line 79 ~ checkoutReducer ~ selected_shipping_fees", selected_shipping_fees)
            return {
                ...state,
                fetching: false,
                fetched: true,
                ...restPayload,
                isMultiShipping,
                multi_shipping,
                prices,
                selected_shipping_fees,
                // reset local payment method as you must have to re set 
                // payment method to prevent session related bugs
                selected_payment_method: {}
            }
        }
        case CHECKOUT_FETCH_ERROR: {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case UPDATE_CHECKOUT_FIELD: {
            return {
                ...state,
                ...action.payload
            }
        }
        case UPDATE_CHECKOUT_PRICES: {
            const { prices } = action.payload
            const existing_fees_options = get(state, "selected_shipping_fees.options", [])
            const selected_shipping_fees_options = get(prices, "multifees.selected_fees", existing_fees_options)
            const selected_shipping_fees = { ...state.selected_shipping_fees, options: selected_shipping_fees_options }
            console.log("🚀 ~ file: checkout.reducer.js ~ line 103 ~ checkoutReducer ~ selected_shipping_fees", selected_shipping_fees)
            return {
                prices,
                selected_shipping_fees
            }
        }

        case ACTION_LOADING: {
            return {
                ...state,
                is_action_loading: true,
                action_loading_identifier: action.payload,
            }
        }
        case ACTION_COMPLETE: {
            return {
                ...state,
                is_action_loading: true,
                action_loading_identifier: '',
            }
        }

        case RESET_CHCEKOUT: {
            return INIT_STATE
        }
        default: {
            return state
        }
    }
}