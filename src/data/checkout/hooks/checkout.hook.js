import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useApolloClient, useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { get } from 'lodash'

import { useStoreSwitcher } from '../../../magento/peregrine/talons/Header/useStoreSwitcher'
import { useCartContext } from '@magento/peregrine/lib/context/cart'

import { checkoutFetched, fetchingCheckout, resetCheckout, updateCheckoutField } from '../checkout.action'

import addressGql from '../../../venia/components/AddressBookPage/addressBookPage.gql'
import gql from '../checkout.gql'
import orderRowGql from '../../../magento/peregrine/talons/OrderHistoryPage/orderRow.gql'
import { useUserContext } from '@magento/peregrine/lib/context/user'
import { clearCartDataFromCache } from '@magento/peregrine/lib/Apollo/clearCartDataFromCache'
import { removeCart } from '@magento/peregrine/lib/store/actions/cart/asyncActions'

const {
    getCountries,
    getCheckoutDetailsQuery,
    setStorePickupShippingAdressMutation,
    setShippingAddressMutation,
    setBillingAddressMutation,
    setShippingMethodMutation,
    placeOrderMutation,
    createCartMutation,
    orderSuccessQuery,
    uploadBarCodeMutation,
    setShippingFeesMutation
} = gql

const { getCustomerAddressesQuery } = addressGql
const { getProductThumbnailsQuery } = orderRowGql


//============================================================================================================================
// CHECKOUT DETAILS
//============================================================================================================================


export const useCheckout = () => {
    const dispatch = useDispatch()
    const fetching = useSelector(store => store.checkout.fetching)
    const [{ cartId }] = useCartContext()

    // as based on this checkout graphql will be called
    const { currentStoreName, availableStores, currentStoreConfig } = useStoreSwitcher()
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
            const checkoutData = get(data, "cart", {})
            console.log("🚀 ~ file: checkout.hook.js ~ line 61 ~ useCheckout ~ checkoutData", checkoutData)
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


    const fetchCheckout = useCallback(() => {
        if (isDefaultStore) {
            fetchCheckoutDetails()
        } else {
            setStorePickupAndFetchDetails()
        }
    }, [isDefaultStore])

    return {
        isDefaultStore,
        currentStoreConfig,
        fetchCheckout
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
            let shipping_addresses = get(data, "setShippingAddressesOnCart.cart.shipping_addresses", [])
            dispatch(updateCheckoutField({ shipping_addresses }))
        }
    })


    const [setBillingAddress, { loading: settingBillingAddress }] = useMutation(setBillingAddressMutation, {
        onCompleted: (data) => {
            let billing_address = get(data, "setBillingAddressOnCart.cart.billing_address", {})
            let shipping_addresses = get(data, "setBillingAddressOnCart.cart.shipping_addresses", {})
            dispatch(updateCheckoutField({ billing_address, shipping_addresses }))
        }
    })


    const setShippingAddressOnCart = useCallback((address) => {
        if (!settingShippingAddress) {
            setShippingAddress({
                variables: {
                    input: {
                        cart_id: cartId,
                        shipping_addresses: address
                    }
                }
            })
        }
    }, [cartId, settingShippingAddress])

    /**
     * set billing method on cart
     * cartId will be taken directly form reducer
     * @param {Object} addressData => { customer_address_id , address }
     * @param {*} handlers => { onCompleted , onError }
     */
    const setBillingAddressOnCart = useCallback((address) => {
        if (!settingBillingAddress) {
            setBillingAddress({
                variables: {
                    input: {
                        cart_id: cartId,
                        billing_address: address,
                    }
                }
            })
        }
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
            let shipping_addresses = get(data, "setShippingMethodsOnCart.cart.shipping_addresses", [])
            dispatch(updateCheckoutField({ shipping_addresses }))
        }
    })

    /**
     * set shipping method on cart
     * cartId will be taken directly form reducer
     */
    const setShippingMethodOnCart = useCallback((shippingMethods) => {
        if (!settingShippingMethod) {
            let data = {
                input: {
                    cart_id: cartId,
                    shipping_methods: shippingMethods
                }
            }
            setShippingMethod({
                variables: data
            })
        }
    }, [cartId, settingShippingMethod])

    return {
        setShippingMethodOnCart,
        settingShippingMethod
    }
}

export const useShippingFees = () => {
    const dispatch = useDispatch()

    const [{ cartId }] = useCartContext()

    const [setShippingFees, { loading: settingShippingFees }] = useMutation(setShippingFeesMutation, {
        onCompleted: (data) => {
            let cart = get(data, "setShippingFeesOnCart.cart", {})
            dispatch(updateCheckoutField({ ...cart }))
        }
    })

    const handleShippingFees = useCallback((id, options) => {
        if (!settingShippingFees) {
            setShippingFees({
                variables: {
                    cartId, id, options
                }
            })
        }
    }, [settingShippingFees, cartId])

    return {
        handleShippingFees,
        settingShippingFees
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

    const [orderPlace, { loading: placingOrder, data }] = useMutation(placeOrderMutation, {
        onCompleted: async (data) => {
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
        if (!placingOrder) {
            orderPlace({ variables: { cartId } })
        }
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


export const useCheckoutSuccess = () => {


    const [fetchOrderItemsMoreInfo, { data: productData, loading }] = useLazyQuery(getProductThumbnailsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    const [fetchCheckoutSuccess, { loading: checkoutSuccessFetching, data: successData }] = useLazyQuery(orderSuccessQuery, {
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            const items = get(data, "successOrderPage.items", {})
            const urlKeys = items.map(item => item.product_url_key).sort()
            fetchOrderItemsMoreInfo({
                variables: {
                    urlKeys
                }
            })
        }
    })

    const [uploadBarCode, { loading: uploading, called: apiCalled, data }] = useMutation(uploadBarCodeMutation)

    const handleUploadBarCode = useCallback((base64, orderNumber) => {
        if (!apiCalled && !uploading) {
            uploadBarCode({
                variables: {
                    file: base64,
                    orderId: orderNumber
                }
            })
        }
    }, [apiCalled, uploading])

    return {
        fetchCheckoutSuccess,
        handleUploadBarCode,
        checkoutSuccessFetching,
        data: get(successData, "successOrderPage", {}),
        productData: get(productData, "products.items", [])
    }
}