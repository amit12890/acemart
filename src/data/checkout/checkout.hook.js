import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useLazyQuery, useMutation } from '@apollo/client'
import { get } from 'lodash'

import { useStoreSwitcher } from '@magento/peregrine/lib/talons/Header/useStoreSwitcher'
import { useCartContext } from '@magento/peregrine/lib/context/cart'

import { checkoutFetched, fetchingCheckout, setInitTestData } from './checkout.action'

import gql from './checkout.gql'


const { getCheckoutDetailsQuery, setStorePickupShippingAdressMutation } = gql



export const useCheckout = () => {
    const dispatch = useDispatch()
    const [{ cartId }] = useCartContext()
    console.log("🚀 ~ file: checkout.hook.js ~ line 20 ~ useCheckout ~ cartId", cartId)
    // as based on this checkout graphql will be called
    const { currentStoreName, availableStores } = useStoreSwitcher()
    const defaultStoreName = get(availableStores.get('default'), "storeName", "")
    const isDefaultStore = defaultStoreName === currentStoreName

    const [fetchCheckoutDetails, {
        loading
    }] = useLazyQuery(getCheckoutDetailsQuery, {
        variables: {
            cartId
        },
        onCompleted: (data) => {
            console.log("🚀 ~ file: checkout.hook.js ~ line 31 ~ useCheckout ~ data", data)
            const checkoutData = get(data, "cart", {})
            dispatch(checkoutFetched(checkoutData))
        }
    })

    const [setStorePickupAndFetchDetails, {
        loading: storePickupNetworkStatus
    }] = useMutation(setStorePickupShippingAdressMutation, {
        variables: {
            cartId
        },
        onCompleted: (data) => {
            console.log("🚀 ~ file: checkout.hook.js ~ line 50 ~ useCheckout ~ data", data)
            dispatch(checkoutFetched(get(data, "setStorePickupShippingAddressesOnCart.cart", {})))
        }
    })

    useEffect(() => {
        if (loading || storePickupNetworkStatus) {
            dispatch(fetchingCheckout())
        }
    }, [loading, storePickupNetworkStatus])

    useEffect(() => {
        if (isDefaultStore) {
            // below dispatch is test
            dispatch(setInitTestData())
            fetchCheckoutDetails()
        } else {
            dispatch(setInitTestData())
            setStorePickupAndFetchDetails()
        }
    }, [isDefaultStore])

    return {
        fetchCheckout: isDefaultStore ? fetchCheckoutDetails : setStorePickupAndFetchDetails,
        isDefaultStore
    }
}