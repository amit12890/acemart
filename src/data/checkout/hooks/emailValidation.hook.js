
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useLazyQuery, useMutation } from '@apollo/client'
import gql from '../checkout.gql'

import { parseGraphQLError } from '../../../data.utils'

import { get, size } from 'lodash'
import { updateCheckoutField } from '../checkout.action'

const { emailAvailableCheckQuery, setGuestCartEmail } = gql

export const useEmailStep = (props) => {
    const dispatch = useDispatch()
    // graphql call
    const [checkEmailExist, { loading, data }] = useLazyQuery(
        emailAvailableCheckQuery,
        {
            fetchPolicy: 'cache-and-network'
        }
    )

    const checkEmailAvailable = useCallback((email) => {
        checkEmailExist({ email })
    }, [])

    const [setGuestEmailMutation, { loading: settingEmail, data: guestEmailData, error: guestEmailErr }] = useMutation(setGuestCartEmail, {
        onCompleted: (data) => {
            // console.log("-----------[log]------------", "set email on cart successfully", data)
            let guestEmail = get(data, "setGuestEmailOnCart.cart.email", [])
            // save all items after merging
            dispatch(updateCheckoutField({ email: guestEmail }))
        }
    })

    const setGuestEmailOnCart = useCallback((cartId, email) => {
        setGuestEmailMutation({
            variables: { cartId, email }
        })
    }, [])

    return {
        loading,
        settingEmail,
        isEmailAvailable: get(data, "isEmailAvailable.is_email_available", false),
        checkEmailAvailable,
        setGuestEmailOnCart
    }
}