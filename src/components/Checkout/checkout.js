import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

import { useUserContext } from '@magento/peregrine/lib/context/user'
import { useCheckout } from '../../data/checkout/hooks/checkout.hook'
import { useStyle } from '../../venia/classify'

import defaultClasses from './checkout.css'
import EmailStep from './EmailStep'
import SplitOrder from '../SplitOrder'
// import CheckoutAddressStep from './AddressStep'

export default connect(store => ({
    isMultiShipping: store.checkout.isMultiShipping,
    multiShipping: store.checkout.multi_shipping
}))(({ isMultiShipping, multiShipping, dispatch }) => {
    const [{ isSignedIn }] = useUserContext()
    const { isDefaultStore } = useCheckout()

    const classes = useStyle(defaultClasses)

    return (
        <div className={classes.root}>
            <h1>Checkout</h1>

            {isMultiShipping && (
                <SplitOrder data={multiShipping} />
            )}
            {!isSignedIn && (
                <EmailStep enabled={true} />
            )}
        </div>
    )
})