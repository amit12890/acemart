import React, { useCallback, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import { useCartContext } from '@magento/peregrine/lib/context/cart'

import gql from '../checkout.gql'
import { updateCheckoutField } from '../checkout.action'
import { get, has, size } from 'lodash'
import { usePlaceOrder } from './checkout.hook'
import { FRONT_END_HOST_URL, HOST_URL } from '../../../url.utils'

const {
    setPaymentMethodMutation,
    generatePayPalTokenMutation
} = gql


export const useCheckoutPayment = () => {
    const dispatch = useDispatch()
    const [{ cartId }] = useCartContext()
    const { placeOrder, placingOrder } = usePlaceOrder()
    const [hasToken, setToken] = useState(false)

    const [setPaymentMethod, { loading: settingPaymentMethod }] = useMutation(setPaymentMethodMutation, {
        onCompleted: (data) => {
            console.log("-----------[log]------------", "payment method set successfully", data)
            let selected_payment_method = get(data, "setPaymentMethodOnCart.cart.selected_payment_method", {})
            let shipping_addresses = get(data, "setPaymentMethodOnCart.cart.shipping_addresses", {})
            dispatch(updateCheckoutField({ selected_payment_method, shipping_addresses }))
            if (hasToken) {
                console.log("placing order.....")
                placeOrder()
            }
        }
    })

    /**
     * set payment method in cart
     * cartId will be taken directly form reducer
     * @param {String} paymentCode => payment code
     * @param {*} handlers => { onCompleted , onError }
     */
    const setPaymentMethodOnCart = useCallback((selectedPaymentMethod) => {
        console.log("🚀 ~ file: payment.hook.js ~ line 44 ~ setPaymentMethodOnCart ~ selectedPaymentMethod", selectedPaymentMethod)
        if (settingPaymentMethod) return
        console.log("variable", {
            input: {
                cart_id: cartId,
                payment_method: selectedPaymentMethod
            }
        })
        setToken(size(get(selectedPaymentMethod, "paypal_express.token", "")) > 0)
        setPaymentMethod({
            variables: {
                input: {
                    cart_id: cartId,
                    payment_method: selectedPaymentMethod
                }
            }
        })
    }, [settingPaymentMethod, cartId])

    return {
        setPaymentMethodOnCart,
        settingPaymentMethod,
        placingOrder
    }
}

export const usePayPal = () => {
    const dispatch = useDispatch()
    const [{ cartId }] = useCartContext()

    const [setPaymentMethod, { loading: generatingToken }] = useMutation(generatePayPalTokenMutation, {
        onCompleted: (data) => {
            // console.log("-----------[log]------------","payment method set successfully",data)
            let paypal = get(data, "createPaypalExpressToken", {})
            dispatch(updateCheckoutField({ paypal }))
        }
    })

    const handleGeneratePayPalToken = useCallback(() => {
        let url
        if (process.env.NODE_ENV === 'development') {
            url = "http://0.0.0.0:10000"
        } else {
            url = FRONT_END_HOST_URL
        }
        const returnUrl = `${url}/checkout/success`
        const cancelUrl = `${url}/checkout`
        setPaymentMethod({
            variables: {
                cartId,
                returnUrl,
                cancelUrl
            }
        })
    }, [cartId])

    return {
        handleGeneratePayPalToken,
        generatingToken
    }
}