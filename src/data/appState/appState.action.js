export const SET_WISHLIST_SESSION = 'SET_WISHLIST_SESSION'
export const RESET_WISHLIST_SESSION = 'RESET_WISHLIST_SESSION'
export const UDPATE_APP_STATE = 'UDPATE_APP_STATE'
export const UPDATE_MOBILE_SEARCH_VISIBILITY = "UPDATE_MOBILE_SEARCH_VISIBILITY"


/**
 * add product object to session 
 * it will reset after login or signup success
 * @param {Object} payload => product object
 */
export const addToWishlistSession = (payload) => ({
    type: SET_WISHLIST_SESSION,
    payload
})

export const resetWishlistSession = () => ({
    type: RESET_WISHLIST_SESSION
})

export const updateAppState = (payload) => ({
    type: UDPATE_APP_STATE,
    payload
})

export const showMobileSearch = () => ({
    type: UPDATE_MOBILE_SEARCH_VISIBILITY,
    payload: true
})

export const hideMobileSearch = () => ({
    type: UPDATE_MOBILE_SEARCH_VISIBILITY,
    payload: false
})