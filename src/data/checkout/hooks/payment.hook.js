import React, { useCallback } from 'react'

import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import { useCartContext } from '@magento/peregrine/lib/context/cart'

import gql from '../checkout.gql'
import { updateCheckoutField } from '../checkout.action'
import { get } from 'lodash'

const {
    setPaymentMethodMutation,
    generatePayPalTokenMutation
} = gql


export const useCheckoutPayment = () => {
    const dispatch = useDispatch()
    const [{ cartId }] = useCartContext()

    const [setPaymentMethod, { loading: settingPaymentMethod }] = useMutation(setPaymentMethodMutation, {
        onCompleted: (data) => {
            // console.log("-----------[log]------------","payment method set successfully",data)
            let selected_payment_method = get(data, "setPaymentMethodOnCart.cart.selected_payment_method", {})
            let shipping_addresses = get(data, "setPaymentMethodOnCart.cart.shipping_addresses", {})
            dispatch(updateCheckoutField({ selected_payment_method, shipping_addresses }))
        }
    })

    /**
     * set payment method in cart
     * cartId will be taken directly form reducer
     * @param {String} paymentCode => payment code
     * @param {*} handlers => { onCompleted , onError }
     */
    const setPaymentMethodOnCart = useCallback((paymentCode) => {
        if (settingPaymentMethod) return
        console.log("variable", {
            input: {
                cart_id: cartId,
                payment_method: {
                    code: paymentCode
                }
            }
        })

        setPaymentMethod({
            variables: {
                input: {
                    cart_id: cartId,
                    payment_method: {
                        code: paymentCode
                    }
                }
            }
        })
    }, [settingPaymentMethod, cartId])

    return {
        setPaymentMethodOnCart,
        settingPaymentMethod
    }
}

export const usePayPal = () => {
    const dispatch = useDispatch()
    const [{ cartId }] = useCartContext()

    const [generatePayPalToken, { loading: generatingToken, data: paypalData }] = useMutation(generatePayPalTokenMutation, {
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
            // console.log("-----------[log]------------","payment method set successfully",data)
            let selected_payment_method = get(data, "setPaymentMethodOnCart.cart.selected_payment_method", {})
            let shipping_addresses = get(data, "setPaymentMethodOnCart.cart.shipping_addresses", {})
            dispatch(updateCheckoutField({ selected_payment_method, shipping_addresses }))
        }
    })

    const handleGeneratePayPalToken = useCallback(() => {
        generatePayPalToken({
            variables: {
                cartId
            }
        })
    }, [cartId])

    return {
        handleGeneratePayPalToken,
        paypalData
    }
}