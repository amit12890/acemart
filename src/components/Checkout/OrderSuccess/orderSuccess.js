import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { StoreTitle } from '@magento/venia-ui/lib/components/Head';
import { forEach, get, size, split } from 'lodash';
import CartItemList from '../CartItemList';
import { FormattedMessage, useIntl } from 'react-intl';
import { useStyle } from '../../../venia/classify';
import defaultClasses from './orderSuccess.css'
import { resetCheckout } from '../../../data/checkout/checkout.action';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator'
import { useHistory, useLocation } from 'react-router-dom';
import { useCheckoutPayment } from '../../../data/checkout/hooks/payment.hook'
import { useCheckoutSuccess } from '../../../data/checkout/hooks/checkout.hook';
import CheckoutOrder from './CheckoutOrder';


export default connect(store => {
    return {
        order_number: '14000000252-1 , 14000000252-2' || store.checkout.orderNumber
    }
})(React.memo(({
    order_number,
    dispatch
}) => {
    const history = useHistory()
    const classes = useStyle(defaultClasses)
    const { setPaymentMethodOnCart, settingPaymentMethod, placingOrder } = useCheckoutPayment()
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
    const paypal_response = {
        token: searchParams.get('token'),
        payerId: searchParams.get('PayerID')
    }

    const initorderNumbers = size(order_number) > 0 ? split(order_number, ",") : []
    const [orderNumbers, setOrderNumbers] = useState(initorderNumbers)
    console.log("🚀 ~ file: orderSuccess.js ~ line 38 ~ orderNumbers", orderNumbers)

    useEffect(() => {
        if (size(initorderNumbers) > 0 && size(orderNumbers) === 0) {
            setOrderNumbers(initorderNumbers)
        }
    }, [initorderNumbers, orderNumbers])

    useEffect(() => {
        if (size(paypal_response.payerId) > 0 && size(orderNumbers) === 0) {
            console.log("setting payment on cart....")
            setPaymentMethodOnCart({
                code: "paypal_express",
                paypal_express: {
                    payer_id: get(paypal_response, "payerId", ""),
                    token: get(paypal_response, "token", "")
                }
            })
        }
    }, [paypal_response.payerId, orderNumbers])


    const goToHome = useCallback((e) => {
        e.preventDefault()
        history.replace('/')
    }, [])


    const { formatMessage } = useIntl();

    if (settingPaymentMethod || placingOrder) {
        return (
            <LoadingIndicator>
                <FormattedMessage
                    id={'checkout.success.loading'}
                    defaultMessage={'Placing Order...'}
                />
            </LoadingIndicator>
        )
    }

    return (
        <div className={classes.root}>
            <StoreTitle>
                {formatMessage({
                    id: 'checkoutPage.titleReceipt',
                    defaultMessage: 'Receipt'
                })}
            </StoreTitle>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>Thank you for Your Purchase!</h1>
                <p>Thank you for your order!,  We'll email you an order confirmation and updates as your order is processed to <strong>(email)</strong>. Your order details are below</p>
            </div>
            {orderNumbers.map((number) => {
                return (
                    <div className={classes.orderItemsWrapper}>
                        <CheckoutOrder
                            orderNumber={number.trim()}
                            onCheckoutOrderFetched={() => {
                                dispatch(resetCheckout())
                            }}
                            classes={classes} />
                    </div>
                )
            })}
            <div className={classes.primaryButtonWrapper}>
                <div className={classes.primaryButton} onClick={goToHome}>
                    Continue Shopping
                </div>
            </div>
            <div className={classes.footerNotes}>
                <div className={classes.notes}>
                    <p>You can track your order status by creating an account. </p>
                    <p><strong>Email Address:</strong> nikhil.solanki+qa@magedelight.com</p>
                </div>
                <div className={classes.primaryButton}>
                    Create Account
                </div>
            </div>

        </div>
    )
}))