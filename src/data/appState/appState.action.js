export const SET_WISHLIST_SESSION = 'SET_WISHLIST_SESSION'
export const RESET_WISHLIST_SESSION = 'RESET_WISHLIST_SESSION'
export const UDPATE_APP_STATE = 'UDPATE_APP_STATE'

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