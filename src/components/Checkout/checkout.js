import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import { useUserContext } from '@magento/peregrine/lib/context/user'
import { useCheckout, useCheckoutAddresses, usePlaceOrder, useShippingMethods } from '../../data/checkout/hooks/checkout.hook'
import { useStyle } from '../../venia/classify'
import { useAddressBookPage } from '../../venia/components/AddressBookPage/useAddressBookPage'

import EmailStep from './EmailStep'
import SplitOrder from '../SplitOrder'
import AddressStep from './AddressStep'
import ListStep from './ListStep'
import PaymentListStep from './PaymentListStep'

import defaultClasses from './checkout.css'
import { get, size } from 'lodash'
import { useCheckoutPayment } from '../../data/checkout/hooks/payment.hook'
import ReviewCheckout from './ReviewCheckout'

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

    const { setShippingMethodOnCart } = useShippingMethods()
    const { setPaymentMethodOnCart, settingPaymentMethod } = useCheckoutPayment()
    const { placeOrder, placingOrder } = usePlaceOrder()

    const classes = useStyle(defaultClasses)

    const [showReviewCheckout, setReviewCheckout] = useState(true)

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

    if (showReviewCheckout) {
        return (
            <ReviewCheckout
                isDefaultStore={isDefaultStore}
                placingOrder={placingOrder}
                onPlaceOrderButtonPress={() => placeOrder()} />
        )
    }

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

            <ListStep
                enabled={isShippingAddressSelected}
                title="Shipping Method"
                data={get(shipping_addresses[0], "available_shipping_methods", [])}
                initialValues={get(shipping_addresses[0], "selected_shipping_method", {})}
                mapLabel={(item) => get(item, "method_title", '')}
                mapKey={(item) => get(item, "method_code", '')}
                mapValue={(item) => get(item, "method_code", '')}
                onItemClick={(shippingMethod) => {
                    setShippingMethodOnCart([
                        {
                            carrier_code: get(shippingMethod, "carrier_code", ''),
                            method_code: get(shippingMethod, "method_code", '')
                        }
                    ])
                }}
                isDefaultStore={isDefaultStore} />

            <AddressStep
                enabled={isShippingMethodSelected}
                data={customerAddresses}
                title="Billing Address"
                setting={settingBillingAddress}
                initialValues={initBillinAddress}
                onApplyAddress={(address, isNewAddress = false) => {
                    let selectedShippingAddress = get(cart, "shipping_addresses[0]", [])
                    let variables = null
                    if (isNewAddress) {
                        variables = {
                            customer_address_id: null,
                            address,
                            same_as_shipping: address.id === selectedShippingAddress.id
                        }
                    } else {
                        variables = {
                            customer_address_id: get(address, "id", ''),
                            same_as_shipping: address.id === selectedShippingAddress.id
                        }
                    }
                    setBillingAddressOnCart(variables, {
                        onCompleted: (data) => {
                            // toggleShippingAddressListModal()
                        },
                        onError: ({ message, code }) => {
                            parseErrorCode(code, () => history.push('/'))
                            showMessage(message)
                        }
                    })
                }}
                isUserLoggedIn={isSignedIn}
                showSameAsButton={!isDefaultStore}
                onSameAsButtonClick={() => {
                    let selectedShippingAddress = shipping_addresses[0]
                    let variables = null

                    if (selectedShippingAddress.customer_address_id == null) {
                        variables = {
                            address: {
                                region: selectedShippingAddress.region.code, // pass whole region object
                                country_code: selectedShippingAddress.country.code, // pass only country id
                                street: selectedShippingAddress.street, // street array
                                telephone: selectedShippingAddress.telephone,
                                postcode: selectedShippingAddress.postcode,
                                city: selectedShippingAddress.city,
                                firstname: selectedShippingAddress.firstname,
                                lastname: selectedShippingAddress.lastname,
                            },
                            same_as_shipping: true
                        }
                    } else {
                        variables = {
                            customer_address_id: selectedShippingAddress.customer_address_id,
                            same_as_shipping: true
                        }
                    }
                    setBillingAddressOnCart(variables)
                }} />


            <PaymentListStep
                enabled={true || isBillingAddressSelected && isShippingMethodSelected}
                title="Payment Method"
                data={available_payment_methods}
                initialValues={selected_payment_method}
                onItemClick={(paymentOpt) => {
                    setPaymentMethodOnCart(get(paymentOpt, "code", ''))
                }}
                isDefaultStore={isDefaultStore} />

            <div className={classes.primaryButtonWrapper}>
                <div onClick={() => setReviewCheckout(true)}
                    className={classes.primaryButton}>
                    Review Order
                </div>
            </div>
        </div>
    )
})
