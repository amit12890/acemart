import React from 'react'
import { connect } from 'react-redux'

import { StoreTitle } from '@magento/venia-ui/lib/components/Head';
import { get } from 'lodash';
import CartItemList from '../CartItemList';
import { FormattedMessage } from 'react-intl';


export default connect(store => {
    return {
        orderNumber: store.checkout.orderNumber,
        email: store.checkout.email,
        shipping_addresses: store.checkout.shipping_addresses,
    }
})(React.memo(({
    orderNumber,
    email,
    shipping_addresses
}) => {

    const selectedShippingAddress = shipping_addresses[0]
    console.log("🚀 ~ file: orderSuccess.js ~ line 18 ~ selectedShippingAddress", selectedShippingAddress)
    const selectedShippingMethod = get(shipping_addresses[0], "available_shipping_methods", [])

    const firstname = get(selectedShippingAddress, "firstname", "")
    const lastname = get(selectedShippingAddress, "lastname", "")
    const city = get(selectedShippingAddress, "city", "")
    const region = get(selectedShippingAddress, "region.label", "")
    const postcode = get(selectedShippingAddress, "postcode", "")
    const country = get(selectedShippingAddress, "country.label", "")
    const streetRows = selectedShippingAddress.street && selectedShippingAddress.street.map((row, index) => {
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
                    <CartItemList />
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