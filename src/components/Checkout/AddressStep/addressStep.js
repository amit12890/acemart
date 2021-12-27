import React, { useState, useEffect, useCallback } from 'react'

import AddressListItem from '../AddressListItem'
import AddressForm from '../AddressForm'
import RadioButton from '../../RadioButton'


import { get, size, find } from 'lodash'



/**
 * render address list initially and render form if user clicks on add new address
 * 
 * Parent
 *      Checkout
 */
const AddressStep = props => {
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
    const [showAddressForm, setFormVisibility] = useState(isNewAddress)
    const [editMode, setInEditMode] = useState(size(initialValues) === 0)

    useEffect(() => {
        setInEditMode(size(initialValues) === 0)
        setAddressId(get(initialValues, "customer_address_id", -1))
        let isNewAddress = get(initialValues, "customer_address_id", -1) == null
        setFormVisibility(isNewAddress)
    }, [initialValues])


    const changeAddressSelection = (newId) => setAddressId(newId === selectedAddressId ? -1 : newId)
    const toggleEditMode = (forceFlag = false) => forceFlag ? setInEditMode(forceFlag) : setInEditMode(!editMode)
    let hasAddresses = size(data) > 0

    const submitForm = useCallback((e) => {
        e.preventDefault()

        console.log("🚀 ~ file: addressStep.js ~ line 69 ~ submitForm ~ isNewAddress", isNewAddress)
        let selectedAddressObj = {}
        if (selectedAddressId != -1 || !isNewAddress) {
            console.log("🚀 ~ file: addressStep.js ~ line 69 ~ submitForm ~ selectedAddressId", selectedAddressId)
            selectedAddressObj = find(data, (address) => address.id === selectedAddressId)
        }
        console.log("🚀 ~ file: addressStep.js ~ line 70 ~ submitForm ~ selectedAddressObj", selectedAddressObj)
        onApplyAddress(selectedAddressObj)
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
            <div className="block block-checkout inactive">
                <div className="block-title">
                    {title}
                </div>
            </div>
        )
    }


    const renderAddButton = () => {
        if (size(initialValues) > 0 && get(initialValues, "customer_address_id", null) == null) {
            return (

                <button className="action secondary edit"
                    onClick={(e) => {
                        e.preventDefault()
                    }}>
                    <span>Edit Current Address</span>
                </button>

            )
        } else {
            return (
                <button className="action secondary new"
                    onClick={(e) => {
                        e.preventDefault()
                        setFormVisibility(true)
                    }}>
                    <span>Add New Address</span>
                </button>

            )
        }

    }

    const sameAddress = () => {
        onSameAsButtonClick()
        toggleEditMode()
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
            <div className="block-content">
                <fieldset className="fieldset">

                    {hasAddresses ?
                        (
                            data.map((address, index) => {
                                let isSelected = get(address, "id", -1) == selectedAddressId
                                return (

                                    <div
                                        className="field address-list-field choice checkout-choice"
                                        key={address.id + " " + index}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            changeAddressSelection(address.id)
                                        }}>
                                        <div className="option-choice custom-radio-field">
                                            <RadioButton isActive={isSelected} />
                                        </div>
                                        <div className="delivery-address-details">
                                            <AddressListItem address={address} containerClass="address" />
                                        </div>
                                    </div>

                                )
                            })
                        ) : (
                            <div className="block block-dashboard-addresses">
                                <div className="block-content">
                                    <div className="no-result">
                                        No Addresses Found
                                    </div>
                                </div>
                            </div>

                        )
                    }
                    {showSameAsButton && (
                        <div className="actions-toolbar">
                            <div className="secondary">
                                <button className="action submit secondary" onClick={sameAddress}><span>Same as Shipping Address</span></button>
                            </div>
                        </div>
                    )}

                    <div className="actions-toolbar actions-toolbar-delivery-address">
                        <div className="primary">
                            <button className="action primary delivery-address" onClick={submitForm}>
                                <span>{isShippingStep ? 'Delivery To This Address' : 'Use This Address'}</span>
                            </button>
                        </div>
                        <div className="secondary">
                            {renderAddButton()}
                        </div>
                    </div>


                </fieldset>
            </div>
        )
    }


    if (!editMode) {
        let hasInitValue = size(initialValues) > 0
        return (
            <div className={`block block-checkout ${isShippingStep ? "delivery-address" : "billing-address"}`}>
                <div className="block-title">
                    {title}
                </div>
                {hasInitValue &&
                    <AddressListItem address={initialValues} containerClass="address" />
                }
                {/* 
                    user should only be able to change or edit shipping adderess if 
                    it has default store is not selected
                */}
                {(isDefaultStore || !isShippingStep) && (
                    <div className="actions-toolbar">
                        <div className="secondary">
                            <button
                                className="action submit secondary"
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
        )
    }


    return (
        <div className={`block block-checkout ${isShippingStep ? "delivery-address" : "billing-address"}`}>
            <div className="block-title">
                {title}
            </div>
            {showAddressForm || !isUserLoggedIn ? (
                <AddressForm
                    isUserLoggedIn={isUserLoggedIn}
                    initialValues={get(initialValues, "customer_address_id", -1) == null ? initialValues : {}}
                    setting={setting}
                    isShippingStep={isShippingStep}
                    onSaveAddress={(address) => {
                        console.log("🚀 ~ file: addressStep.js ~ line 251 ~ address", address)
                        toggleEditMode(false)
                        onApplyAddress(address, true)
                        setFormVisibility(false)
                    }}
                    showSameAsButton={showSameAsButton}
                    onSameAsButtonClick={sameAddress}
                    toggleForm={() => setFormVisibility(false)} />
            ) : renderAddressList()}
        </div>
    )
}

export default AddressStep