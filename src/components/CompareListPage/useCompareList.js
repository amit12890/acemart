import { useCallback } from "react";
import { useMutation } from '@apollo/client';
import {
    CREATE_COMPARE_LIST,
    REMOVE_ITEM_FROM_COMPARE_LIST,
} from './compareListPage.gql';

export const useCompareList = props => {

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

    const removeProductFromCompareList = useCallback(async (products, uid) => {
        const res = await removeItemsFromCompareList({
            variables: {
                input: {products, uid}
            }
        });
        console.log("🚀 ~ file: compareListPage.js ~ line 61 ~ useEffect ~ res", res);
    }, [removeItemsFromCompareList])

    return {
        addProductToCompareList, addProductToCompareListError, addProductToCompareListLoading,
        removeProductFromCompareList, removeProductFromCompareListError, removeProductFromCompareListLoading,
    }
}