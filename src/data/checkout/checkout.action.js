import TEST_DATA from './splitOrderCheckout.data.json'

export const CHECKOUT_FETCHING = 'CHECKOUT_FETCHING'
export const CHECKOUT_FETCHED = 'CHECKOUT_FETCHED'
export const CHECKOUT_FETCH_ERROR = 'CHECKOUT_FETCH_ERROR'
export const UPDATE_CHECKOUT_FIELD = 'UPDATE_CHECKOUT_FIELD'
export const UPDATE_CHECKOUT_PRICES = 'UPDATE_CHECKOUT_PRICES'

export const ACTION_LOADING = 'ACTION_LOADING'
export const ACTION_COMPLETE = 'ACTION_COMPLETE'

export const RESET_CHCEKOUT = 'RESET_CHCEKOUT'

export const CHECKOUT_STEP = {
    EMAIL: 0,
    SHIPPING_ADDRESS: 1,
    SHIPPING_METHOD: 2,
    BILLING_ADDRESS: 3,
    PAYMENT: 4
}

export const fetchingCheckout = () => ({
    type: CHECKOUT_FETCHING
})

export const checkoutFetched = (payload) => ({
    type: CHECKOUT_FETCHED,
    payload
})

export const checkoutFetchError = (payload) => ({
    type: CHECKOUT_FETCH_ERROR
})

export const loginAndFetchingCheckout = () => ({
    type: UPDATE_CHECKOUT_FIELD,
    payload: { login_and_fetching: true }
})

export const loginAndFetchCheckoutComplete = (payload = {}) => ({
    type: UPDATE_CHECKOUT_FIELD,
    payload: {
        login_and_fetching: false,
        ...payload
    }
})


/**
 * 
 * @param {Object} payload 
 */
export const updateCheckoutField = (payload) => ({
    type: UPDATE_CHECKOUT_FIELD,
    payload
})

export const updateCheckoutPrices = (payload) => ({
    type: UPDATE_CHECKOUT_PRICES,
    payload
})

export const actionLoading = (identifier) => ({
    type: ACTION_LOADING,
    payload: identifier
})

export const actionComplete = () => ({
    type: ACTION_COMPLETE
})

export const resetCheckout = () => ({
    type: RESET_CHCEKOUT
})