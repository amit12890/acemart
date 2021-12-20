import React, { useCallback, useEffect, useState } from "react";
import { useLazyQuery, useMutation } from '@apollo/client';
import {
    ADD_PRODUCTS_TO_COMPARE_LIST,
    ASSIGN_COMPARE_LIST_TO_CUSTOMER,
    CREATE_COMPARE_LIST,
    GET_CUSTOMER_COMPARE_LIST,
    GET_GUEST_COMPARE_LIST,
    REMOVE_ITEM_FROM_COMPARE_LIST,
} from './compareListPage.gql';
import { find, get, size, last } from "lodash-es";
import {
    CheckCircle as CheckCircleIcon,
} from 'react-feather';
import { updateCompareFields } from "../../data/compare/compare.action";
import { useToasts } from '@magento/peregrine/lib/Toasts'
import Icon from '../../venia/components/Icon';

import { useUserContext } from "@magento/peregrine/lib/context/user";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { compareListPage } from "../../url.utils";


const successIcon = (
    <Icon
        src={CheckCircleIcon}
        attrs={{
            width: 18
        }}
    />
);
const successMessage = "added to compare list"

export const useCompareList = props => {
    const [{ isSignedIn }] = useUserContext();
    const dispatch = useDispatch()
    const [_, { addToast }] = useToasts()
    const uid = useSelector(store => store.compare.uid)
    const history = useHistory();

    // Get customer and guest compare list

    // data will be set to reducer only and all data will be fetched from there only
    const gqlQuery = isSignedIn ? GET_CUSTOMER_COMPARE_LIST : GET_GUEST_COMPARE_LIST
    const variables = {}
    // guest user requied uid variable
    if (!isSignedIn) {
        variables.uid = uid
    }
    // get compare list
    const [fetchCompareList, { loading: loadingCompareList, error }] = useLazyQuery(
        gqlQuery, {
        fetchPolicy: "network-only",
        onCompleted: (data) => {
            const path = isSignedIn ? "customer.compare_list" : "compareList"
            dispatch(updateCompareFields(get(data, path, {})))
        }
    });

    // create compaer list
    const [
        createCompareList,
        {
            error: createCompareListError,
            loading: createCompareListLoading
        }
    ] = useMutation(CREATE_COMPARE_LIST, {
        onCompleted: (data) => {
            const items = get(data, "createCompareList.items", [])
            const lastAddedItem = last(items)
            addToast({
                type: 'success',
                icon: successIcon,
                message: `${get(lastAddedItem, "product.name", "Product")} ${successMessage}`,
                dismissable: false,
                timeout: 10000,
                actionText: "Compare",
                onAction: () => history.push(compareListPage())
            })
        }
    })

    // add products to comparelist mutation
    const [addProductsToCompareListMutation,
        { loading: addProductToCompareListLoading,
            error: addProductToCompareListError
        }] = useMutation(ADD_PRODUCTS_TO_COMPARE_LIST, {
            onCompleted: (data) => {
                const items = get(data, "addProductsToCompareList.items", [])
                const lastAddedItem = last(items)
                addToast({
                    type: 'success',
                    icon: successIcon,
                    message: `${get(lastAddedItem, "product.name", "Product")} ${successMessage}`,
                    dismissable: false,
                    timeout: 10000,
                    actionText: "Compare",
                    onAction: () => history.push(compareListPage())
                })
            }
        })

    /**
     * if user is not logged in then create compare list gql will be called
     * else it will call addProductsToCompareList gql
     */
    const addProductToCompareList = useCallback(async (products = []) => {
        if (size(uid) === 0) {
            const res = await createCompareList({
                variables: {
                    input: { products }
                }
            });
            dispatch(updateCompareFields(get(res.data, "createCompareList", {})))
        } else {
            const addRes = await addProductsToCompareListMutation({
                variables: {
                    input: { products, uid }
                }
            })
            dispatch(updateCompareFields(get(addRes.data, "addProductsToCompareList", {})))
        }
    }, [createCompareList, updateCompareFields, uid, addProductsToCompareListMutation])

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
                input: { products, uid }
            }
        });
        dispatch(updateCompareFields(get(res.data, "removeProductsFromCompareList", {})))
    }, [removeItemsFromCompareList])


    const [assignCompareList, { loading: assigningCompareList }] = useMutation(ASSIGN_COMPARE_LIST_TO_CUSTOMER)


    return {
        addProductToCompareList, addProductToCompareListError, addProductToCompareListLoading,
        removeProductFromCompareList, removeProductFromCompareListError, removeProductFromCompareListLoading,
        createCompareListLoading, createCompareListError,
        fetchCompareList, loadingCompareList,
        assignCompareList, assigningCompareList
    }
}