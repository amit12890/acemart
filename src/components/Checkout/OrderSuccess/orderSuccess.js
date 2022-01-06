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
        order_number: "6000000277-1 , 6000000277-2" || store.checkout.orderNumber
    }
})(React.memo(({
    order_number,
    dispatch
}) => {
    const { setPaymentMethodOnCart, settingPaymentMethod } = useCheckoutPayment()
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
    const paypal_response = {
        token: searchParams.get('token'),
        payerId: searchParams.get('PayerID')
    }

    const [orderNumber, setOrderNumber] = useState(order_number)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (size(paypal_response.payerId) > 0 && size(order_number) === 0 && !loading) {
            setLoading(true)
            console.log("setting payment on cart....")
            setPaymentMethodOnCart({
                code: "paypal_express",
                paypal_express: {
                    payer_id: get(paypal_response, "payerId", ""),
                    token: get(paypal_response, "token", "")
                }
            })
        }
    }, [paypal_response, order_number, loading])

    const classes = useStyle(defaultClasses)
    const { formatMessage } = useIntl();

    if (loading) {
        return (
            <LoadingIndicator>
                <FormattedMessage
                    id={'checkout.success.loading'}
                    defaultMessage={'Placing Order...'}
                />
            </LoadingIndicator>
        )
    }

    const orderNumbers = split(order_number, ",")
    console.log("🚀 ~ file: orderSuccess.js ~ line 83 ~ orderNumbers", orderNumbers)
    return (
        <div>
            {orderNumbers.map((number) => {
                return (
                    <CheckoutOrder orderNumber={number.trim()} />
                )
            })}
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
                <h2 className={classes.heading}>
                    <FormattedMessage
                        id={'checkoutPage.thankYou'}
                        defaultMessage={'Thank you for your order!'}
                    />
                </h2>
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
            </div>
        </div>
    )
}))