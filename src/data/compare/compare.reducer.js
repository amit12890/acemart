import { UPDATE_COMPARE_LIST } from "./compare.action"

const INIT_STATE = {
    uid: "",
    items: [],
    item_count: 0
}

export const compareReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case UPDATE_COMPARE_LIST: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
}