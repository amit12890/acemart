import { get } from 'lodash'
import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { useStyle } from '@magento/venia-ui/lib/classify';
import AddressListItem from '../AddressListItem'
import CartItemList from '../CartItemList'
import CartSummary from '../CartSummary'

import defaultClasses from './reviewCheckout.css'


export default connect((store) => {
    return {
        shipping_addresses: store.checkout.shipping_addresses,
        billing_address: store.checkout.billing_address,
        selected_payment_method: store.checkout.selected_payment_method
    }
})(({
    isDefaultStore,
    shipping_addresses,
    billing_address,
    selected_payment_method,
    onPlaceOrderButtonPress,
    goBack,
    dispatch
}) => {
    const classes = useStyle(defaultClasses)

    const selected_shipping_method = get(shipping_addresses[0], "selected_shipping_method", [])

    return (
        <div className={classes.page}>
            <div className={classes.container}>
                {/* Shipping address */}
                <div className={classes.block}>
                    <div className={classes.header}>
                        <p>{isDefaultStore ? "Shipping address" : "Pickup From"}</p>
                    </div>
                    <div className={classes.contentBlock}>
                        <AddressListItem address={shipping_addresses[0]} containerClass="address" />
                    </div>
                </div>
                {/* Shipping method */}
                <div className={classes.block}>
                    <div className={classes.header}>
                        <p>Shipping Method</p>
                    </div>
                    <div className={[classes.contentBlock, classes.shippingMethod].join(" ")}>
                        <p>{get(selected_shipping_method, "carrier_title", "")}</p>
                        <p>{get(selected_shipping_method, "method_title", "")}</p>
                    </div>
                </div>
                {/* billing address */}
                <div className={classes.block}>
                    <div className={classes.header}>
                        <p>Billing Address</p>
                    </div>
                    <div className={classes.contentBlock}>
                        <AddressListItem address={billing_address} containerClass="address" />
                    </div>
                </div>
                {/* Payment method method */}
                <div className={classes.block}>
                    <div className={classes.header}>
                        <p>Payment Option</p>
                    </div>
                    <div className={[classes.contentBlock, classes.shippingMethod].join(" ")}>
                        <p>{get(selected_payment_method, "title", "")}</p>
                    </div>
                </div>
                <div className={classes.primaryButtonWrapper}>
                    <div onClick={goBack}
                        className={classes.secondaryButton}>
                        Edit Checkout
                    </div>
                    <div onClick={onPlaceOrderButtonPress}
                        className={classes.primaryButton}>
                        Place Order
                    </div>
                </div>
            </div>
            <div>
                <CartSummary />
                <CartItemList />
            </div>
        </div >
    )
})