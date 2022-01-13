import React, { useState, useEffect, useCallback } from 'react'

import TextInput from '../../TextInput'
import AddressListItem from '../AddressListItem'
import AddressForm from '../AddressForm'
import RadioButton from '../../RadioButton'

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './addressStep.css'
import LoadingIndicator from '../../../venia/components/LoadingIndicator'


import { get, size, find } from 'lodash'
import { FormattedMessage } from 'react-intl'



/**
 * render address list initially and render form if user clicks on add new address
 * 
 * Parent
 *      Checkout
 */
const AddressStep = props => {

    const classes = useStyle(defaultClasses)
    const {
        enabled,
        title,
        onApplyAddress,
        data,
        loading,
        showSameAsButton,
        onSameAsButtonClick,
        initialValues,
        isShippingStep,
        isUserLoggedIn,
        setting,
        isDefaultStore
    } = props
    console.log("🚀 ~ file: addressStep.js ~ line 41 ~ data", data)

    let initCustomerAddressId = get(initialValues, "customer_address_id", -1)
    let isNewAddress = get(initialValues, "customer_address_id", -1) == null

    if (initCustomerAddressId == -1) {
        if (isShippingStep) {
            let defaultShipping = find(data, (address) => address.default_shipping == true)
            initCustomerAddressId = get(defaultShipping, "id", -1)
        } else {
            let defaultShipping = find(data, (address) => address.default_billing == true)
            initCustomerAddressId = get(defaultShipping, "id", -1)
        }
    }


    const [selectedAddressId, setAddressId] = useState(initCustomerAddressId)
    console.log("🚀 ~ file: addressStep.js ~ line 57 ~ selectedAddressId", selectedAddressId)
    const [showAddressForm, setFormVisibility] = useState(isNewAddress)
    const [editMode, setInEditMode] = useState(size(initialValues) === 0)

    useEffect(() => {
        setInEditMode(size(initialValues) === 0)
        setAddressId(initCustomerAddressId)
        let isNewAddress = initCustomerAddressId == null
        setFormVisibility(isNewAddress)
    }, [initialValues, isNewAddress, initCustomerAddressId])


    const changeAddressSelection = (newId) => setAddressId(newId === selectedAddressId ? -1 : newId)
    const toggleEditMode = (forceFlag = false) => forceFlag ? setInEditMode(forceFlag) : setInEditMode(!editMode)
    let hasAddresses = size(data) > 0

    const submitForm = useCallback((e) => {
        e.preventDefault()
        let selectedAddressObj = {}
        if (selectedAddressId != -1 || !showAddressForm) {
            selectedAddressObj = find(data, (address) => address.id == selectedAddressId)
        }
        toggleEditMode()
        onApplyAddress(selectedAddressObj, showAddressForm)
    }, [selectedAddressId, showAddressForm, data])



    const sameAddress = useCallback(() => {
        onSameAsButtonClick()
        toggleEditMode()
    }, [])
    //==================================================================================================================================================================================================================
    // RENDER METHODS
    //==================================================================================================================================================================================================================

    /**
     * render diff UI is email is not presented in cart
     */
    if (!enabled) {
        return (
            <div className={classes.block}>
                <div className={classes.blockTitle}>
                    {title}
                </div>
            </div>
        )
    }

    const renderAddButton = () => {
        if (size(initialValues) > 0 && get(initialValues, "customer_address_id", null) == null) {
            return (
                <button className={classes.action}
                    onClick={(e) => {
                        e.preventDefault()
                        setFormVisibility(true)
                    }}>
                    <span>Edit Current Address</span>
                </button>
            )
        } else {
            return (
                <button className={classes.action}
                    onClick={(e) => {
                        e.preventDefault()
                        setFormVisibility(true)
                    }}>
                    <span>Add New Address</span>
                </button>
            )
        }

    }


    const renderAddressList = () => {
        if (!hasAddresses) {
            setFormVisibility(true)
            return (
                <div>
                    No Addresses Found
                </div>
            )
        }
        return (
            <div className={classes.blockContent}>
                <fieldset className={classes.fieldset}>

                    {hasAddresses ?
                        (
                            data.map((address, index) => {
                                let isSelected = get(address, "id", -1) == selectedAddressId
                                return (

                                    <div className={[classes.field, classes.choice].join(" ")}
                                        key={address.id + " " + index}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            changeAddressSelection(address.id)
                                            console.log("🚀 ~ file: addressStep.js ~ line 154 ~ data.map ~ address.id", address.id)
                                        }}>
                                        <div className={classes.control}>
                                            <div className={classes.deliveryAddressDetails}>
                                                <AddressListItem address={address}
                                                    containerClass={classes.address} />
                                            </div>
                                            <div className={classes.radioButtonWrapper}>
                                                <RadioButton isActive={isSelected} />
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        ) : (
                            <div className={classes.block}>
                                <div className={classes.blockContent}>

                                    <div className={classes.noResult}>
                                        No Addresses Found
                                    </div>
                                </div>
                            </div>

                        )
                    }
                    {showSameAsButton && (
                        <div className={[classes.actionToolbar, classes.sameAsShipping].join(" ")}>
                            <div className={classes.secondary}>
                                <button className={[classes.action, classes.secondaryButton].join(" ")} onClick={sameAddress}><span>Same as Shipping Address</span></button>
                            </div>
                        </div>
                    )}

                    <div className={[classes.actionToolbar, classes.primaryAction].join(" ")}>
                        <button className={[classes.action, classes.secondaryButton].join(" ")} onClick={submitForm}>
                            <span>Delivery To This Address</span>
                        </button>
                        {renderAddButton()}
                    </div>


                </fieldset>
            </div>
        )
    }

    /**
    * render diff UI is email is not presented in cart
    */
    if (!enabled) {
        return (
            <div className="block block-checkout inactive">
                <div className="block-title">
                    {title}
                </div>
            </div>
        )
    }

    if (!editMode) {
        let hasInitValue = size(initialValues) > 0
        return (
            <div className={classes.block}>
                <div className={classes.blockTitle}>
                    {title}
                </div>
                {setting ? (
                    <LoadingIndicator>
                        <FormattedMessage
                            id={`${isShippingStep ? "shippingAddress" : "billingAddress"}.setting`}
                            defaultMessage={`Saving ${isShippingStep ? 'Shipping' : 'Billing'} Address...`}
                        />
                    </LoadingIndicator>
                ) : (
                    <div className={classes.blockContent}>
                        {hasInitValue &&
                            <AddressListItem address={initialValues}
                                containerClass={classes.address} />
                        }
                        {/* 
                            user should only be able to change or edit shipping adderess if 
                            it has default store is not selected
                        */}
                        {(isDefaultStore || !isShippingStep) && (
                            <div className={classes.actionToolbar}>
                                <div className={classes.secondary}>
                                    <button
                                        className={[classes.action, classes.secondaryButton].join(" ")}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            toggleEditMode(true)
                                        }}>
                                        <span>{hasInitValue ? " Change" : "Add"}</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }


    return (
        <div className={classes.block}>
            <div className={classes.blockTitle}>
                {title}
            </div>
            {/* 
                this loading wll be set when user is loggedin
            */}
            {setting ? (
                <LoadingIndicator>
                    <FormattedMessage
                        id={`${isShippingStep ? "shippingAddress" : "billingAddress"}.setting`}
                        defaultMessage={`Saving ${isShippingStep ? 'Shipping' : 'Billing'} Address...`}
                    />
                </LoadingIndicator>
            ) : (
                <div className={classes.blockContent}>
                    {showAddressForm || !isUserLoggedIn ? (
                        <AddressForm
                            isUserLoggedIn={isUserLoggedIn}
                            initialValues={get(initialValues, "customer_address_id", null) == null ? initialValues : {}}
                            setting={setting}
                            isShippingStep={isShippingStep}
                            onSaveAddress={(address) => {
                                console.log("=====> this is called")
                                toggleEditMode(false)
                                onApplyAddress(address, true)
                                setFormVisibility(false)
                            }}
                            showSameAsButton={showSameAsButton}
                            onSameAsButtonClick={sameAddress}
                            toggleForm={() => setFormVisibility(false)} />
                    ) : renderAddressList()}
                </div>
            )}
        </div>
    )
}

export default AddressStep