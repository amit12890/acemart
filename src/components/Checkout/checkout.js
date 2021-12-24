import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

import { useUserContext } from '@magento/peregrine/lib/context/user'
import { useCheckout, useCheckoutAddresses } from '../../data/checkout/hooks/checkout.hook'
import { useStyle } from '../../venia/classify'
import { useAddressBookPage } from '../../venia/components/AddressBookPage/useAddressBookPage'

import defaultClasses from './checkout.css'
import EmailStep from './EmailStep'
import SplitOrder from '../SplitOrder'
import { get, size } from 'lodash'
import AddressStep from './AddressStep'

export default connect(store => ({
    isMultiShipping: store.checkout.isMultiShipping,
    multiShipping: store.checkout.multi_shipping,
    email: store.checkout.email,
    shipping_addresses: store.checkout.shipping_addresses,
    selected_payment_method: store.checkout.selected_payment_method,
    billing_address: store.checkout.billing_address,
    available_payment_methods: store.checkout.available_payment_methods
}))(({
    isMultiShipping,
    multiShipping,
    email,
    shipping_addresses,
    selected_payment_method,
    billing_address,
    available_payment_methods,
    dispatch
}) => {

    const [{ isSignedIn }] = useUserContext()
    const { isDefaultStore } = useCheckout()

    const {
        customerAddresses,
        settingShippingAddress,
        settingBillingAddress,
        setBillingAddressOnCart,
        setShippingAddressOnCart
    } = useCheckoutAddresses()

    const classes = useStyle(defaultClasses)

    let isEmailAdded = size(email) > 0
    let isShippingAddressSelected = size(shipping_addresses) > 0
    let isShippingMethodSelected = size(get(shipping_addresses[0], "selected_shipping_method.method_title", '')) > 0
    let isBillingAddressSelected = size(billing_address) > 0
    let isPaymentMethodSelected = size(selected_payment_method) > 0
    let enablePlaceOrderButton = isShippingAddressSelected && isBillingAddressSelected && isPaymentMethodSelected && isShippingMethodSelected

    let existBillingAddress = billing_address
    let initBillinAddress = {}
    if (size(existBillingAddress) > 0) {
        initBillinAddress = existBillingAddress
    } else if (!isMultiShipping) {
        initBillinAddress = shipping_addresses
    }
    let paymentMethods = available_payment_methods

    return (
        <div className={classes.root}>
            <h1>Checkout</h1>

            {isMultiShipping && (
                <SplitOrder data={multiShipping} />
            )}
            {!isSignedIn && (
                <EmailStep enabled={true} />
            )}
            <AddressStep
                enabled={isEmailAdded}
                data={customerAddresses}
                title="Shipping Address"
                setting={settingShippingAddress}
                initialValues={shipping_addresses[0]}
                onApplyAddress={(address, isNewAddress = false) => {
                    let addressData = null
                    if (isNewAddress) {
                        addressData = [{
                            customer_address_id: null,
                            address
                        }]
                    } else {
                        addressData = [{
                            customer_address_id: get(address, "id", '')
                        }]
                    }
                    setShippingAddressOnCart(addressData)
                    /**
                     * during the time of shipping cart saving by default bill address will be saved
                     * so by default billing and shipping address will remain same
                     */
                    setBillingAddressOnCart({
                        ...addressData[0],
                        same_as_shipping: true
                    })
                }}
                isShippingStep={true}
                isUserLoggedIn={isSignedIn}
                showSameAsButton={false}
                isDefaultStore={isDefaultStore} />
        </div>
    )
})