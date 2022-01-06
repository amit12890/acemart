import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { StoreTitle } from '@magento/venia-ui/lib/components/Head';
import { get } from 'lodash';
import CartItemList from '../CartItemList';
import { FormattedMessage, useIntl } from 'react-intl';
import { useStyle } from '../../../venia/classify';
import defaultClasses from './orderSuccess.css'
import { resetCheckout } from '../../../data/checkout/checkout.action';


export default connect(store => {
    return {
        order_number: store.checkout.orderNumber,
        user_email: store.checkout.email,
        shipping_addresses: store.checkout.shipping_addresses,
        cart_items: store.checkout.items
    }
})(React.memo(({
    order_number,
    user_email,
    shipping_addresses,
    cart_items,
    dispatch
}) => {

    const [orderNumber, setOrderNumber] = useState(order_number)
    const [selectedShippingAddress, setSelectedShippingAddress] = useState(shipping_addresses[0])
    const [email, setEmail] = useState(user_email)
    const [cartItems, setCartItems] = useState(cart_items)


    useEffect(() => {
        console.log("clearing checkout reducer....")
        dispatch(resetCheckout())
    }, [])
    const classes = useStyle(defaultClasses)
    const { formatMessage } = useIntl();
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