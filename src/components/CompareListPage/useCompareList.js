import { useCallback, useEffect } from "react";
import { useMutation } from '@apollo/client';
import {
    CREATE_COMPARE_LIST,
    GET_CUSTOMER_COMPARE_LIST,
    REMOVE_ITEM_FROM_COMPARE_LIST,
} from './compareListPage.gql';
import { get } from "lodash-es";
import { updateCompareFields } from "../../data/compare/compare.action";

import { useUserContext } from "@magento/peregrine/lib/context/user";
import { useDispatch } from "react-redux";

export const useCompareList = props => {
    const [{ isSignedIn }] = useUserContext();
    const dispatch = useDispatch()

    // create compaer list
    const [
        createCompareList,
        {
            error: addProductToCompareListError,
            loading: addProductToCompareListLoading
        }
    ] = useMutation(CREATE_COMPARE_LIST)

    const addProductToCompareList = useCallback(async (products = []) => {
        const res = await createCompareList({
            variables: {
                input: { products }
            }
        });
        console.log("🚀 ~ file: useCompareList.js ~ line 26 ~ addProductToCompareList ~ res", res)
        dispatch(updateCompareFields(get(res.data, "createCompareList", {})))
    }, [createCompareList, updateCompareFields])

    // remove item from compaer list
    const [
        removeItemsFromCompareList,
        {
            error: removeProductFromCompareListError,
            loading: removeProductFromCompareListLoading,
        }
    ] = useMutation(REMOVE_ITEM_FROM_COMPARE_LIST, {
        refetchQueries: [
            { query: GET_CUSTOMER_COMPARE_LIST },
        ]
    })

    const removeProductFromCompareList = useCallback(async (products, uid) => {
        const res = await removeItemsFromCompareList({
            variables: {
                input: { products, uid }
            }
        });
    }, [removeItemsFromCompareList])

    return {
        addProductToCompareList, addProductToCompareListError, addProductToCompareListLoading,
        removeProductFromCompareList, removeProductFromCompareListError, removeProductFromCompareListLoading,
    }
}