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
    fetching: false,
    fetched: false,
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

    // shipping method will be added in shipping address only
    available_shipping_methods: [],

    selected_payment_method: {},
    available_payment_methods: [],

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
            const { multi_shipping, ...restPayload } = action.payload
            const isMultiShipping = size(multi_shipping.boss) > 0
            return {
                ...state,
                fetching: false,
                fetched: true,
                ...restPayload,
                isMultiShipping,
                multi_shipping
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