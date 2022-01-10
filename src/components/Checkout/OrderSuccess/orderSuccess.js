import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { StoreTitle } from '@magento/venia-ui/lib/components/Head';
import { forEach, get, size, split } from 'lodash';
import CartItemList from '../CartItemList';
import { FormattedMessage, useIntl } from 'react-intl';
import { useStyle } from '../../../venia/classify';
import defaultClasses from './orderSuccess.css'
import { resetCheckout } from '../../../data/checkout/checkout.action';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator'
import { useLocation } from 'react-router-dom';
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
        <div>
            <StoreTitle>
                {formatMessage({
                    id: 'checkoutPage.titleReceipt',
                    defaultMessage: 'Receipt'
                })}
            </StoreTitle>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    <span className={classes.base}>
                        Thank you
                    </span>
                    <span className={classes.subtitle}>
                        for your order!
                    </span>
                </h1>
            </div>
            {orderNumbers.map((number) => {
                return (
                    <CheckoutOrder
                        orderNumber={number.trim()}
                        onCheckoutOrderFetched={() => {
                            dispatch(resetCheckout())
                        }}
                        classes={classes} />
                )
            })}
            <div className={classes.primaryButtonWrapper}>
                <div className={classes.primaryButton}>
                    Continue Shopping
                </div>
            </div>
        </div>
    )

    console.log("🚀 ~ file: orderSuccess.js ~ line 18 ~ selectedShippingAddress", selectedShippingAddress)
    const selectedShippingMethod = get(selectedShippingAddress, "available_shipping_methods", [])

    const firstname = get(selectedShippingAddress, "firstname", "")
    const lastname = get(selectedShippingAddress, "lastname", "")
    const city = get(selectedShippingAddress, "city", "")
    const region = get(selectedShippingAddress, "region.label", "")
    const postcode = get(selectedShippingAddress, "postcode", "")
    const country = get(selectedShippingAddress, "country.label", "")
    const streetRows = get(selectedShippingAddress, "street", false) && selectedShippingAddress.street.map((row, index) => {
        return (
            <span key={index} className={classes.addressStreet}>
                {row}
            </span>
        );
    });

    const shippingMethod = get(selectedShippingMethod, "method_title", "")

    const nameString = `${firstname} ${lastname}`;
    const additionalAddressString = `${city}, ${region} ${postcode} ${country}`;

    return (
        <div className={classes.root}>
            <StoreTitle>
                {formatMessage({
                    id: 'checkoutPage.titleReceipt',
                    defaultMessage: 'Receipt'
                })}
            </StoreTitle>
            <div className={classes.mainContainer}>
                <div className={classes.pageTitleWrapper}>
                    <h1 className={classes.title}>
                        <span className={classes.base}>
                            Thank you
                        </span>
                        <span className={classes.subtitle}>
                            for your order!
                        </span>
                    </h1>
                </div>
                <div className={classes.orderNumber}>
                    <FormattedMessage
                        id={'checkoutPage.orderNumber'}
                        defaultMessage={'Order Number'}
                        values={{ orderNumber }}
                    />
                </div>
                <div className={classes.shippingInfoHeading}>
                    <FormattedMessage
                        id={'global.shippingInformation'}
                        defaultMessage={'Shipping Information'}
                    />
                </div>
                <div className={classes.shippingInfo}>
                    <span className={classes.email}>{email}</span>
                    <span className={classes.name}>{nameString}</span>
                    {streetRows}
                    <span className={classes.addressAdditional}>
                        {additionalAddressString}
                    </span>
                </div>
                <div className={classes.shippingMethodHeading}>
                    <FormattedMessage
                        id={'global.shippingMethod'}
                        defaultMessage={'Shipping Method'}
                    />
                </div>
                <div className={classes.shippingMethod}>{shippingMethod}</div>
                <div className={classes.itemsReview}>
                    <CartItemList data={cartItems} />
                </div>
                <div className={classes.additionalText}>
                    <FormattedMessage
                        id={'checkoutPage.additionalText'}
                        defaultMessage={
                            'You will also receive an email with the details and we will let you know when your order has shipped.'
                        }
                    />
                </div>

                <div className={classes.primaryButtonWrapper}>
                    <div className={classes.primaryButton}>
                        Continue Shopping
                    </div>
                </div>
            </div>
        </div>
    )
}))