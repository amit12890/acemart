import {
    RESET_WISHLIST_SESSION,
    SET_WISHLIST_SESSION,
    UDPATE_APP_STATE,
    UPDATE_MOBILE_SEARCH_VISIBILITY
} from './appState.action';

const INIT_STATE = {
    wishlist_session: {},
    isCMS: false,
    showMobileSearch: false
};

export const appStateReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_WISHLIST_SESSION: {
            return {
                ...state,
                wishlist_session: action.payload
            };
        }
        case RESET_WISHLIST_SESSION: {
            return {
                ...state,
                wishlist_session: {}
            };
        }
        case UDPATE_APP_STATE: {
            return {
                ...state,
                ...action.payload
            };
        }
        case UPDATE_MOBILE_SEARCH_VISIBILITY: {
            // PAYLOAD WILL BE BOOLEAN
            return {
                ...state,
                showMobileSearch: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
