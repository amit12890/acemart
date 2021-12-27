import React, { useCallback } from 'react'

import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import { useCartContext } from '@magento/peregrine/lib/context/cart'

import gql from '../checkout.gql'
import { updateCheckoutField } from '../checkout.action'
import { get } from 'lodash'

const { setPaymentMethodMutation } = gql


export const useCheckoutPayment = () => {
    const dispatch = useDispatch()
    const [{ cartId }] = useCartContext()

    const [setPaymentMethod, { loading: settingPaymentMethod }] = useMutation(setPaymentMethodMutation, {
        onCompleted: (data) => {
            // console.log("-----------[log]------------","payment method set successfully",data)
            let selected_payment_method = get(data, "setPaymentMethodOnCart.cart.selected_payment_method", {})
            dispatch(updateCheckoutField({ selected_payment_method }))
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