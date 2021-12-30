import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useApolloClient, useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { get } from 'lodash'

import { useStoreSwitcher } from '@magento/peregrine/lib/talons/Header/useStoreSwitcher'
import { useCartContext } from '@magento/peregrine/lib/context/cart'

import { checkoutFetched, fetchingCheckout, updateCheckoutField } from '../checkout.action'

import addressGql from '../../../venia/components/AddressBookPage/addressBookPage.gql'
import gql from '../checkout.gql'
import { useUserContext } from '@magento/peregrine/lib/context/user'
import { clearCartDataFromCache } from '@magento/peregrine/lib/Apollo/clearCartDataFromCache'
import { removeCart } from '@magento/peregrine/lib/store/actions/cart/asyncActions'

import checkoutData from '../checkout-response-with-storepickup.json'

const {
    getCountries,
    getCheckoutDetailsQuery,
    setStorePickupShippingAdressMutation,
    setShippingAddressMutation,
    setBillingAddressMutation,
    setShippingMethodMutation,
    placeOrderMutation,
    createCartMutation
} = gql

const { getCustomerAddressesQuery } = addressGql


//============================================================================================================================
// CHECKOUT DETAILS
//============================================================================================================================


export const useCheckout = () => {
    const dispatch = useDispatch()
    const fetching = useSelector(store => store.checkout.fetching)
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
        fetchPolicy: 'network-only',
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
        fetchPolicy: 'network-only',
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
        //TODO REMOVE TEST DATA
        // dispatch(checkoutFetched({
        //     ...checkoutData.data.cart
        // }))
        // return
        if (isDefaultStore) {
            console.log("fetching default......")
            fetchCheckoutDetails()
        } else {
            console.log("set pickup store......")
            setStorePickupAndFetchDetails()
        }
    }, [isDefaultStore])

    return {
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
            let shipping_addresses = get(data, "setShippingAddressesOnCart.cart.shipping_addresses", [])
            dispatch(updateCheckoutField({ shipping_addresses }))
        }
    })


    const [setBillingAddress, { loading: settingBillingAddress }] = useMutation(setBillingAddressMutation, {
        onCompleted: (data) => {
            // console.log("-----------[log]------------", "billing address set successfully", data)
            let billing_address = get(data, "setBillingAddressOnCart.cart.billing_address", {})
            let shipping_addresses = get(data, "setBillingAddressOnCart.cart.shipping_addresses", {})
            dispatch(updateCheckoutField({ billing_address, shipping_addresses }))
        }
    })


    const setShippingAddressOnCart = useCallback((address) => {
        if (settingShippingAddress) return
        console.log("setShippingAddressOnCart", {
            variables: {
                input: {
                    cart_id: cartId,
                    shipping_addresses: address
                }
            }
        })
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
                billing_address: address
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
            console.log("-----------[log]------------", "shipping method set successfully", data)
            let shipping_addresses = get(data, "setShippingMethodsOnCart.cart.shipping_addresses", [])
            dispatch(updateCheckoutField({ shipping_addresses }))
        }
    })

    /**
     * set shipping method on cart
     * cartId will be taken directly form reducer
     */
    const setShippingMethodOnCart = useCallback((shippingMethods) => {
        if (settingShippingMethod) return
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
    const apolloClient = useApolloClient();

    const [{ cartId }, { createCart, removeCart }] = useCartContext()
    const [{ isSignedIn }] = useUserContext()

    const [fetchCartId] = useMutation(createCartMutation);

    const [orderPlace, { loading: placingOrder }] = useMutation(placeOrderMutation, {
        onCompleted: async (data) => {
            // console.log("-----------[log]------------", "order placed successfully", data)
            let orderNumber = get(data, "placeOrder.order.order_number", 0)
            dispatch(updateCheckoutField({ orderNumber }))
            await removeCart();
            await clearCartDataFromCache(apolloClient);

            await createCart({
                fetchCartId
            });
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

export const useCountries = () => {
    const { data } = useQuery(getCountries, { nextFetchPolicy: 'cache-first' })
    return {
        countries: get(data, "countries", [])
    }
}