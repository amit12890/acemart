import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useLazyQuery, useMutation } from '@apollo/client'
import { get } from 'lodash'

import { useStoreSwitcher } from '@magento/peregrine/lib/talons/Header/useStoreSwitcher'
import { useCartContext } from '@magento/peregrine/lib/context/cart'

import { checkoutFetched, fetchingCheckout, setInitTestData, updateCheckoutField } from '../checkout.action'

import addressGql from '../../../venia/components/AddressBookPage/addressBookPage.gql'
import gql from '../checkout.gql'
import { useUserContext } from '@magento/peregrine/lib/context/user'


const {
    getCheckoutDetailsQuery,
    setStorePickupShippingAdressMutation,
    setShippingAddressMutation,
    setBillingAddressMutation,
    setShippingMethodMutation,
    placeOrderMutation
} = gql

const { getCustomerAddressesQuery } = addressGql


//============================================================================================================================
// CHECKOUT DETAILS
//============================================================================================================================


export const useCheckout = () => {
    const dispatch = useDispatch()
    const [{ cartId }] = useCartContext()
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
            fetchCheckoutDetails()
        } else {
            setStorePickupAndFetchDetails()
        }
    }, [isDefaultStore])

    return {
        fetchCheckout: isDefaultStore ? fetchCheckoutDetails : setStorePickupAndFetchDetails,
        isDefaultStore
    }
}


//============================================================================================================================
// CHECKOUT ADDRESS
//============================================================================================================================


export const useCheckoutAddresses = () => {
    const dispatch = useDispatch()
    const [{ cartId }] = useCartContext()
    const [{ isSignedIn }] = useUserContext()

    const [getCustomerAddresses, { data: customerAddressesData, loading }] = useLazyQuery(
        getCustomerAddressesQuery,
        {
            fetchPolicy: 'cache-and-network'
        }
    )

    useEffect(() => {
        if (isSignedIn) {
            getCustomerAddresses()
        }
    }, [isSignedIn])

    const [setShippingAddress, { loading: settingShippingAddress }] = useMutation(setShippingAddressMutation, {
        onCompleted: (data) => {
            // console.log("-----------[log]------------", "shipping address set successfully", data)
            let shippingAddresses = get(data, "setShippingAddressesOnCart.cart.shipping_addresses", [])
            dispatch(updateCheckoutField({ shipping_addresses: shippingAddresses }))
        }
    })


    const [setBillingAddress, { loading: settingBillingAddress }] = useMutation(setBillingAddressMutation, {
        onCompleted: (data) => {
            // console.log("-----------[log]------------", "billing address set successfully", data)
            let billing_address = get(data, "setBillingAddressOnCart.cart.billing_address", {})
            dispatch(updateCheckoutField({ billing_address }))
        }
    })


    const setShippingAddressOnCart = useCallback((address) => {
        if (settingShippingAddress) return
        setShippingAddress({
            variables: {
                input: {
                    cart_id: cartId,
                    shipping_addresses: address
                }
            }
        })
    }, [cartId, settingShippingAddress])

    /**
     * set billing method on cart
     * cartId will be taken directly form reducer
     * @param {Object} addressData => { customer_address_id , address }
     * @param {*} handlers => { onCompleted , onError }
     */
    const setBillingAddressOnCart = useCallback((address) => {
        console.log("variable", {
            input: {
                cart_id: cartId,
                billing_addresses: address
            }
        })
        if (settingBillingAddress) return
        setBillingAddress({
            variables: {
                input: {
                    cart_id: cartId,
                    billing_address: address,
                }
            }
        })
    }, [cartId, settingBillingAddress])

    return {
        settingShippingAddress,
        settingBillingAddress,
        setShippingAddressOnCart,
        setBillingAddressOnCart,
        getCustomerAddresses,
        customerAddresses: get(customerAddressesData, "customer.addresses", [])
    }
}


//============================================================================================================================
// CHECKOUT SHIPPING METHOD
//============================================================================================================================


export const useShippingMethods = () => {

    const dispatch = useDispatch()
    const [{ cartId }] = useCartContext()

    const [setShippingMethod, { loading: settingShippingMethod }] = useMutation(setShippingMethodMutation, {
        onCompleted: (data) => {
            // console.log("-----------[log]------------", "shipping method set successfully", data)
            let shipping_addresses = get(data, "setShippingMethodsOnCart.cart.shipping_addresses", [])
            dispatch(updateCheckoutField({ shipping_addresses }))
        }
    })

    /**
     * set shipping method on cart
     * cartId will be taken directly form reducer
     * @param {Object} addressData => { customer_address_id , address }
     */
    const setShippingMethodOnCart = useCallback((shippingMethods) => {
        if (!settingShippingMethod) return
        let data = {
            input: {
                cart_id: cartId,
                shipping_methods: shippingMethods
            }
        }
        console.log("variable", data)
        setShippingMethod({
            variables: data
        })

    }, [cartId, settingShippingMethod])

    return {
        setShippingMethodOnCart,
        settingShippingMethod
    }
}


//============================================================================================================================
// PLACE ORDER
//============================================================================================================================


export const usePlaceOrder = () => {
    const dispatch = useDispatch()

    const [{ cartId }] = useCartContext()
    const [{ isSignedIn }] = useUserContext()

    const [orderPlace, { loading: placingOrder }] = useMutation(placeOrderMutation, {
        onCompleted: (data) => {
            // console.log("-----------[log]------------", "order placed successfully", data)
            let orderNumber = get(data, "placeOrder.order.order_number", 0)
            dispatch(updateCheckoutField({ orderNumber }))
        }
    })

    const placeOrder = useCallback(() => {
        if (placingOrder) return
        orderPlace({ variables: { cartId } })
    }, [placingOrder, cartId])

    return {
        placeOrder,
        placingOrder
    }
}