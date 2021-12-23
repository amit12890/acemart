import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { setInitTestData } from '../../data/checkout/checkout.action'
import { useCheckout } from '../../data/checkout/checkout.hook'
import { useStyle } from '../../venia/classify'

import defaultClasses from './checkout.css'

export default () => {
    const { isDefaultStore } = useCheckout()

    const checkout = useSelector(store => store.checkout)
    console.log("🚀 ~ file: checkout.js ~ line 11 ~ checkout", checkout)

    const classes = useStyle(defaultClasses)

    useEffect(() => {
    }, [])

    return (
        <div className={classes.root}>
            <h1>Checkout</h1>
        </div>
    )
}