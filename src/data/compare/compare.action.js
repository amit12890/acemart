export const UPDATE_COMPARE_LIST = "UPDATE_COMPARE_LIST"
export const RESET_COMPARE_LIST = "RESET_COMPARE_LIST"

export const updateCompareFields = (payload) => ({
    type: UPDATE_COMPARE_LIST,
    payload
})

export const resetCompareList = () => ({
    type: RESET_COMPARE_LIST
})