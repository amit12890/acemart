import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { get } from 'lodash'

import { useStyle } from '../../../venia/classify'
import AddressListItem from '../AddressListItem'
import CartItemList from '../CartItemList'
import CartSummary from '../CartSummary'
import StorePickupInfo from '../StorePickupInfo'

import defaultClasses from './reviewCheckout.css'
import LoadingButton from '../../LoadingButton'
import SplitOrder from '../../SplitOrder'
import Price from '../../../venia/components/Price'


const paypal_client = {
    sandbox: 'AbQv7VN-6ZoDUuQtksqW0xARAk-eoTME6VZNtxoOMA3mX-Bx2H7ijWa2bNgrcJql9BpMLFXlB_PiCGQS',
    production: 'aa',
}


export default connect((store) => {
    return {
        shipping_addresses: store.checkout.shipping_addresses,
        billing_address: store.checkout.billing_address,
        multiShipping: store.checkout.multi_shipping,
        selected_payment_method: store.checkout.selected_payment_method,
        prices: store.checkout.prices,
        paypalClientId: get(store.checkout, "paypal.token", ""),
        isMultiShipping: store.checkout.isMultiShipping,
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
    storeInfo,
    isMultiShipping,
    multiShipping,
    placingOrder,
    dispatch
}) => {
    console.log("🚀 ~ file: reviewCheckout.js ~ line 47 ~ connect ~ selected_payment_method", selected_payment_method)
    const classes = useStyle(defaultClasses)

    const selected_shipping_method = get(shipping_addresses[0], "selected_shipping_method", [])
    const showPaypalExpressButton = get(selected_payment_method, "code", '') === 'paypal_express'
    return (
        <div className={classes.page}>
            <div className={classes.container}>
                {isMultiShipping && (
                    <SplitOrder data={multiShipping} disableWarnings={true} />
                )}
                {/* Shipping address */}
                {!isDefaultStore ? (
                    <div className={classes.block}>
                        <div className={[classes.header, classes.storePickupHeader].join(" ")}>
                            <p>Pickup From</p>
                        </div>
                        <StorePickupInfo
                            enabled={true}
                            storeInfo={storeInfo}
                            pickupDate=''
                            showFullInfo={false}
                            showTitle={false}
                            classes={{ block: classes.storePickupBlock }} />
                    </div>
                ) : (
                    <div className={classes.block}>
                        <div className={classes.header}>
                            <p>Shipping address</p>
                        </div>
                        <div className={classes.contentBlock}>
                            <AddressListItem address={shipping_addresses[0]} containerClass="address" />
                        </div>
                    </div>
                )}
                {/* Shipping method */}
                <div className={classes.block}>
                    <div className={classes.header}>
                        <p>Shipping Method</p>
                    </div>
                    <div className={[classes.contentBlock, classes.shippingMethod].join(" ")}>
                        <p>{get(selected_shipping_method, "method_title", "")}</p>
                        <div>
                            <Price
                                currencyCode={get(selected_shipping_method, "amount.currency", "USD")}
                                value={get(selected_shipping_method, "amount.value", "")} />
                        </div>
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
                    {placingOrder ? (
                        <LoadingButton classes={{ wrapper: classes.loadingButton }} />
                    ) : (
                        <div onClick={onPlaceOrderButtonPress}
                            className={classes.primaryButton}>
                            Place Order
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.sidebar}>
                <CartSummary />
                <CartItemList />
            </div>
        </div >
    )
})