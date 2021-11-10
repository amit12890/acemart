import { useCallback } from "react";
import {
    CREATE_COMPARE_LIST,
    GET_CUSTOMER_COMPARE_LIST,
    REMOVE_ITEM_FROM_COMPARE_LIST,
} from './compareListPage.gql';

export const useCompareList = props => {
    const compareListUid = props.uid;

    // create compaer list
    const [
        createCompareList,
        {
            error: addProductToCompareListError,
            loading: addProductToCompareListLoading
        }
    ] = useMutation(CREATE_COMPARE_LIST)

    const addProductToCompareList = useCallback(async (products=[]) => {
        const res = await createCompareList({
            variables: {
                input: {products}
            }
        });
        console.log("🚀 ~ file: compareListPage.js ~ line 61 ~ useEffect ~ res", res);
    }, [createCompareList])

    // remove item from compaer list
    const [
        removeItemsFromCompareList,
        {
            error: removeProductFromCompareListError,
            loading: removeProductFromCompareListLoading,
        }
    ] = useMutation(REMOVE_ITEM_FROM_COMPARE_LIST)

    useEffect(async () => {
        const res = await removeItemsFromCompareList({
            variables: {
                input: {products: [88491], uid: "AXg4vwl7K9AYGsOYFN94eJ8y1oiH7Ibe"}
            }
        });
        console.log("🚀 ~ file: compareListPage.js ~ line 61 ~ useEffect ~ res", res);
    }, [])

    return {
        addProductToCompareList, addProductToCompareListError, addProductToCompareListLoading,
        removeProductFromCompareList, removeProductFromCompareListError, removeProductFromCompareListLoading,
    }
}