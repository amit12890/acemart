import { RESET_WISHLIST_SESSION, SET_WISHLIST_SESSION } from "./appState.action"

const INIT_STATE = {
    wishlist_session: {}
}

export const appStateReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_WISHLIST_SESSION: {
            return {
                ...state,
                wishlist_session: action.payload
            }
        }
        case RESET_WISHLIST_SESSION: {
            return {
                ...state,
                wishlist_session: {}
            }
        }
        default: {
            return state
        }
    }
}