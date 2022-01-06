import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import PaypalExpressBtn from 'react-paypal-express-checkout'
import { get } from 'lodash'

import { useStyle } from '../../../venia/classify'
import AddressListItem from '../AddressListItem'
import CartItemList from '../CartItemList'
import CartSummary from '../CartSummary'

import defaultClasses from './reviewCheckout.css'
import { useCheckoutPayment } from '../../../data/checkout/hooks/payment.hook'

import BarCode from 'react-barcode'
// import PayPalButton from '../../PayPalButton'


const paypal_client = {
    sandbox: 'AbQv7VN-6ZoDUuQtksqW0xARAk-eoTME6VZNtxoOMA3mX-Bx2H7ijWa2bNgrcJql9BpMLFXlB_PiCGQS',
    production: 'aa',
}


export default connect((store) => {
    return {
        shipping_addresses: store.checkout.shipping_addresses,
        billing_address: store.checkout.billing_address,
        selected_payment_method: store.checkout.selected_payment_method,
        prices: store.checkout.prices,
        paypalClientId: get(store.checkout, "paypal.token", "")
    }
})(({
    isDefaultStore,
    shipping_addresses,
    billing_address,
    selected_payment_method,
    onPlaceOrderButtonPress,
    goBack,
    setPaymentMethodOnCart,
    paypalClientId,
    prices,
    dispatch
}) => {
    console.log("🚀 ~ file: reviewCheckout.js ~ line 47 ~ connect ~ selected_payment_method", selected_payment_method)
    const classes = useStyle(defaultClasses)

    const selected_shipping_method = get(shipping_addresses[0], "selected_shipping_method", [])
    const showPaypalExpressButton = get(selected_payment_method, "code", '') === 'paypal_express'
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
                    {/* {showPaypalExpressButton ? (
                        <div style={{
                            width: 200,
                            height: 200,
                            border: '1px solid black'
                        }}>
                            <PaypalExpressBtn
                                client={paypal_client}
                                currency={'USD'}
                                total={get(prices, "grand_total.value", 0)}
                                onSuccess={(res) => {
                                    if (res.paid) {
                                        console.log("🚀 ~ file: paymentListStep.js ~ line 81 ~ renderItem ~ res", res)
                                        console.log("varaible data =====> ", {
                                            code: "paypal_express",
                                            paypal_express: {
                                                payer_id: get(res, "payerID", ""),
                                                token: get(res, "paymentToken", "")
                                            }
                                        })
                                        setPaymentMethodOnCart({
                                            code: "paypal_express",
                                            paypal_express: {
                                                payer_id: get(res, "payerID", ""),
                                                token: get(res, "paymentToken", "")
                                            }
                                        })
                                    }
                                }}
                                onError={(err) => {
                                    console.log("🚀 ~ file: paymentListStep.js ~ line 84 ~ renderItem ~ err", err)
                                }}
                                onCancel={(cancel) => {
                                    console.log("🚀 ~ file: paymentListStep.js ~ line 87 ~ renderItem ~ cancel", cancel)
                                }} />
                            <PayPalButton
                                currency={"USD"}
                                amount={get(prices, "grand_total.value", 0)}
                                clientId={paypalClientId} />
                        </div>
                    ) : (
                        <div onClick={onPlaceOrderButtonPress}
                            className={classes.primaryButton}>
                            Place Order
                        </div>
                    )} */}
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
        </div>
    )
})