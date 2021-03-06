import React, { useCallback, useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { useUserContext } from '@magento/peregrine/lib/context/user'
import { useCheckout, useCheckoutAddresses, usePlaceOrder, useShippingMethods } from '../../data/checkout/hooks/checkout.hook'
import { useStyle } from '../../venia/classify'
import { useAddressBookPage } from '../../venia/components/AddressBookPage/useAddressBookPage'

import EmailStep from './EmailStep'
import SplitOrder from '../SplitOrder'
import AddressStep from './AddressStep'
import ShippingMethodsStep from './ShippingMethodsStep'
import PaymentListStep from './PaymentListStep'

import defaultClasses from './checkout.css'
import { get, isMatch, size } from 'lodash'
import { useCheckoutPayment, usePayPal } from '../../data/checkout/hooks/payment.hook'
import ReviewCheckout from './ReviewCheckout'
import CartSummary from './CartSummary'
import CartItemList from './CartItemList'
import LoadingIndicator from '../../venia/components/LoadingIndicator'
import StorePickupInfo from './StorePickupInfo'
import { useStoreSwitcher } from '../../magento/peregrine/talons/Header/useStoreSwitcher'
import { MOCKED_ADDRESS } from '../../magento/peregrine/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm'
import { updateCheckoutField } from '../../data/checkout/checkout.action'
import ShippingFees from './ShippingFees'


const deliveryMessage = "Please note: due to high volume, carriers are currently experiencing extended transmit time delays. Please allow an additional 2-3 days for delivery. Store pickup options are not affected by this transit delay"

export default connect(store => ({
    fetching: store.checkout.fetching,
    login_and_fetching: store.checkout.login_and_fetching,
    isMultiShipping: store.checkout.isMultiShipping,
    multiShipping: store.checkout.multi_shipping,
    email: store.checkout.email,
    shipping_addresses: store.checkout.shipping_addresses,
    selected_payment_method: store.checkout.selected_payment_method,
    billing_address: store.checkout.billing_address,
    available_payment_methods: store.checkout.available_payment_methods,
    pickup_date_time: store.checkout.pickup_date_time,
    selected_shipping_fees: store.checkout.selected_shipping_fees,
    paypal: store.checkout.paypal,
    orderNumber: store.checkout.orderNumber
}))(({
    fetching,
    isMultiShipping,
    multiShipping,
    email,
    shipping_addresses,
    selected_payment_method,
    billing_address,
    available_payment_methods,
    orderNumber,
    login_and_fetching,
    paypal,
    pickup_date_time,
    selected_shipping_fees,
    dispatch
}) => {
    const history = useHistory()
    const [{ isSignedIn }] = useUserContext()
    const { isDefaultStore, fetchCheckout, currentStoreConfig } = useCheckout()

    const {
        customerAddresses,
        settingShippingAddress,
        settingBillingAddress,
        setBillingAddressOnCart,
        setShippingAddressOnCart
    } = useCheckoutAddresses()

    const { setShippingMethodOnCart, settingShippingMethod } = useShippingMethods()
    const { setPaymentMethodOnCart, settingPaymentMethod } = useCheckoutPayment()
    const { handleGeneratePayPalToken } = usePayPal()

    const { placeOrder, placingOrder } = usePlaceOrder()

    const classes = useStyle(defaultClasses)
    const [showReviewCheckout, setReviewCheckout] = useState(false)

    /**
     * when comming from cart page by estimating address it will set firstname, lastname ,city,telephone as its value 
     */
    const isMockAddress = isMatch(shipping_addresses[0], MOCKED_ADDRESS)

    const shippingFees = get(shipping_addresses, "0.shipping_fees.0", [])
    const hasShippingFees = size(shippingFees) > 0
    //if shipping fess edsti then its requried
    const isShippingFeesSelected = hasShippingFees ? size(selected_shipping_fees) > 0 : true
    let isEmailAdded = size(email) > 0
    let isShippingAddressSelected = size(shipping_addresses) > 0 && !settingShippingAddress && !isMockAddress
    let isShippingMethodSelected = size(get(shipping_addresses[0], "selected_shipping_method.method_title", '')) > 0 && !settingShippingMethod && isShippingAddressSelected
    // shipping method and email address add dependancy added
    let isBillingAddressSelected = size(billing_address) > 0 && !settingBillingAddress && isShippingAddressSelected && isEmailAdded && isShippingFeesSelected
    let isPaymentMethodSelected = size(selected_payment_method) > 0 && !settingPaymentMethod && isBillingAddressSelected
    let enablePlaceOrderButton = isShippingAddressSelected && isBillingAddressSelected && isPaymentMethodSelected && isShippingMethodSelected && isEmailAdded


    let existBillingAddress = billing_address
    let initBillinAddress = {}
    if (size(existBillingAddress) > 0) {
        initBillinAddress = existBillingAddress
    }

    useEffect(() => {
        if (size(orderNumber) > 0) {
            history.push('/checkout/success')
        }
    }, [orderNumber])

    if (fetching || login_and_fetching) {
        return (
            <div className={classes.root}>
                <div className={classes.mainContent}>
                    <LoadingIndicator>
                        <FormattedMessage
                            id={'checkout.loading'}
                            defaultMessage={'Fetching Checkout...'}
                        />
                    </LoadingIndicator>
                </div>
            </div>
        )
    }

    if (showReviewCheckout) {
        return (
            <ReviewCheckout
                isDefaultStore={isDefaultStore}
                placingOrder={placingOrder}
                goBack={() => { setReviewCheckout(false) }}
                onPlaceOrderButtonPress={() => {
                    if (get(selected_payment_method, "code", '') === 'paypal_express') {
                        window.open(get(paypal, "paypal_urls.start", ""), '_self')
                    } else {
                        placeOrder()
                    }
                }}
                setPaymentMethodOnCart={setPaymentMethodOnCart}
                placingOrder={placingOrder}
                storeInfo={currentStoreConfig} />
        )
    }

    return (
        <div className={classes.root}>
            <div className={classes.mainContent}>
                <div className={classes.pageTitleWrapper}>
                    <h1 className={classes.title}>Checkout</h1>
                </div>
                <div className={classes.mainContentWrapper}>
                    <div className={classes.main}>

                        {isMultiShipping && (
                            <SplitOrder data={multiShipping} />
                        )}

                        <EmailStep enabled={true} />

                        {isDefaultStore ? (
                            <AddressStep
                                enabled={isEmailAdded}
                                data={customerAddresses}
                                title={"Shipping Address"}
                                setting={settingShippingAddress}
                                initialValues={shipping_addresses[0]}
                                onApplyAddress={(address, isNewAddress = false) => {
                                    if (settingShippingAddress) return

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

                                    // addres object will pass by default 
                                    // let addressData = [{
                                    //     customer_address_id: get(address, "id", null),
                                    //     address
                                    // }]
                                    setShippingAddressOnCart(addressData)

                                    // set billing and shipping same when default store code is set
                                    if (isDefaultStore) {
                                        /**
                                         * during the time of shipping cart saving by default bill address will be saved
                                         * so by default billing and shipping address will remain same
                                         */
                                        setBillingAddressOnCart({
                                            ...addressData[0],
                                            same_as_shipping: true
                                        })
                                    }
                                }}
                                isShippingStep={true}
                                isUserLoggedIn={isSignedIn}
                                showSameAsButton={false}
                                isDefaultStore={isDefaultStore}
                                setting={settingShippingAddress}
                                isMockAddress={isMockAddress} />
                        ) : (
                            <StorePickupInfo
                                enabled={true}
                                storeInfo={currentStoreConfig}
                                pickupDate={pickup_date_time} />
                        )}

                        <ShippingMethodsStep
                            enabled={isShippingAddressSelected}
                            title="Shipping Method"
                            data={get(shipping_addresses[0], "available_shipping_methods", [])}
                            initialValues={get(shipping_addresses[0], "selected_shipping_method", {})}
                            onItemClick={(shippingMethod) => {
                                setShippingMethodOnCart([
                                    {
                                        carrier_code: get(shippingMethod, "carrier_code", ''),
                                        method_code: get(shippingMethod, "method_code", '')
                                    }
                                ])
                            }}
                            isDefaultStore={isDefaultStore}
                            loading={settingShippingMethod} />

                        {hasShippingFees && (
                            <ShippingFees
                                data={shippingFees}
                                onApplyPress={(selectedShippingFees) => {
                                    dispatch(updateCheckoutField({ selected_shipping_fees: selectedShippingFees }))
                                }}
                                appliedShippingFees={selected_shipping_fees} />
                        )}
                        <AddressStep
                            enabled={isShippingMethodSelected}
                            data={customerAddresses}
                            title="Billing Address"
                            setting={settingBillingAddress}
                            initialValues={initBillinAddress}
                            onApplyAddress={(address, isNewAddress = false) => {
                                let selectedShippingAddress = shipping_addresses[0]
                                let variables = null
                                if (isNewAddress) {
                                    variables = {
                                        customer_address_id: null,
                                        address,
                                        same_as_shipping: isDefaultStore && get(address, "id", 0) === get(selectedShippingAddress, "id", 0)
                                    }
                                } else {
                                    variables = {
                                        customer_address_id: get(address, "id", ''),
                                        same_as_shipping: isDefaultStore && get(address, "id", 0) === get(selectedShippingAddress, "id", 0)
                                    }
                                }
                                setBillingAddressOnCart(variables)
                            }}
                            isUserLoggedIn={isSignedIn}
                            showSameAsButton={isDefaultStore}
                            onSameAsButtonClick={() => {
                                let selectedShippingAddress = shipping_addresses[0]
                                let variables = null
                                // same as shipping only work if its default store code
                                if (get(selectedShippingAddress, "customer_address_id", null) == null) {
                                    variables = {
                                        address: {
                                            region_id: selectedShippingAddress.region.region_id,
                                            region: selectedShippingAddress.region.code, // pass whole region object
                                            country_code: selectedShippingAddress.country.code, // pass only country id
                                            street: selectedShippingAddress.street, // street array
                                            telephone: selectedShippingAddress.telephone,
                                            postcode: selectedShippingAddress.postcode,
                                            city: selectedShippingAddress.city,
                                            firstname: selectedShippingAddress.firstname,
                                            lastname: selectedShippingAddress.lastname,
                                        },
                                        same_as_shipping: isDefaultStore,
                                        use_for_shipping: false
                                    }
                                } else {
                                    variables = {
                                        customer_address_id: Number(selectedShippingAddress.customer_address_id),
                                        same_as_shipping: isDefaultStore,
                                        use_for_shipping: false
                                    }
                                }
                                setBillingAddressOnCart(variables)
                            }} />

                        <PaymentListStep
                            enabled={isBillingAddressSelected && isShippingMethodSelected}
                            title="Payment Method"
                            data={available_payment_methods}
                            initialValues={selected_payment_method}
                            onItemClick={(paymentOpt) => {
                                const code = get(paymentOpt, "code", '')
                                if (code === 'paypal_express') {
                                    handleGeneratePayPalToken()
                                } else if (code === 'md_firstdata') {
                                    // it will contianer { code , md_firstdata }
                                    setPaymentMethodOnCart(paymentOpt)
                                    return
                                }
                                setPaymentMethodOnCart({ code })
                            }}
                            isDefaultStore={isDefaultStore}
                            loading={settingPaymentMethod}
                            isMultiShipping={isMultiShipping}
                            resetPaymentSelection={() => {
                                dispatch(updateCheckoutField({ selected_payment_method: {} }))
                            }} />

                        <div className={classes.deliveryMessage}>
                            {deliveryMessage}
                        </div>
                        {enablePlaceOrderButton && (
                            <div className={classes.primaryButtonWrapper}>
                                <div onClick={() => {
                                    setReviewCheckout(true)
                                    globalThis.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: 'smooth'
                                    })
                                }}
                                    className={classes.primaryButton}>
                                    Review Order
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={classes.checkoutSidebar} >
                        <CartSummary
                            refetchCheckout={fetchCheckout} />
                        <CartItemList />
                    </div>
                </div>
            </div>
        </div>

    )
})