import React, { useState, useEffect, useRef, useCallback } from 'react'

import SearchablePicker from '../../SearchablePicker'
import TextInput from '../../TextInput'
import Checkbox from '../../Checkbox'
import LoadingButton from '../../LoadingButton'

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './addressForm.css'

// import { useCustomerAddressData } from '@vihasshah/ktpl-lib-v2'

import { get, size, trim, join } from 'lodash'
import { transpileCheckoutAddressRegion, findCountryByCode, emptyCheck, findCountryById } from '../../../app.utils'
import { useCountries } from '../../../data/checkout/hooks/checkout.hook'




const CheckoutAddressForm = props => {

    const classes = useStyle(defaultClasses)

    /**
     * render address form for checkout 
     * 
     * Parent 
     *      AddressStep
     */
    const { isUserLoggedIn, initialValues, onSaveAddress, setting, isShippingStep, toggleForm, onSameAsButtonClick, showSameAsButton } = props

    const { countries: countryData } = useCountries()

    const [firstname, setFirstname] = useState(get(initialValues, "firstname", ''))
    const [lastname, setLastname] = useState(get(initialValues, "lastname", ''))
    const [mobile, setMobile] = useState(get(initialValues, "telephone", ''))
    const [street, setStreet] = useState(get(initialValues, "street", ['', '']))
    const [city, setCity] = useState(get(initialValues, "city", ''))
    const [zip, setZip] = useState(get(initialValues, "postcode", ''))
    const [country, setCountry] = useState({}) // selected raw country object
    const [region, setRegion] = useState(transpileCheckoutAddressRegion(get(initialValues, "region", {}))) // selected raw region objects
    const [saveInAddressBook, setSaveInAddressBook] = useState(get(initialValues, "save_in_address_book", false))
    const [errors, setErrors] = useState({})


    // set selected country after successfully fetching data of country
    useEffect(() => {
        setFirstname(get(initialValues, "firstname", ''))
        setLastname(get(initialValues, "lastname", ''))
        setMobile(get(initialValues, "telephone", ''))
        setStreet(get(initialValues, "street", ['', '']))
        setCity(get(initialValues, "city", ''))
        setZip(get(initialValues, "postcode", ''))
        setRegion(transpileCheckoutAddressRegion(get(initialValues, "region", {})))
        if (size(countryData) > 0) {
            let country = findCountryByCode(get(initialValues, "country.code", 'US'), countryData)
            setCountry(country)
        }
        setSaveInAddressBook(get(initialValues, "save_in_address_book", false))
    }, [initialValues])

    useEffect(() => {
        if (size(countryData) > 0) {
            let country = findCountryByCode('US', countryData)
            setCountry(country)
        }
    }, [countryData])


    let availableRegions = get(country, "available_regions", [])
    let hasCountryRegions = size(availableRegions) > 0
    let isEditMode = size(initialValues) > 0
    let showEmail = !isUserLoggedIn && isShippingStep

    const changeStreet = (value, index) => {
        let updatedStreet = [...street]
        updatedStreet[index] = value
        setStreet(updatedStreet)
    }


    //=======================================================================================================================================================
    // MUTATION OPERATIONS (SET ADDRESS ON CART , SET EMAIL ON CART)
    //=======================================================================================================================================================


    const submitForm = useCallback((e) => {
        e.preventDefault()
        // street array will join for validation but default array structure will pass to add or update operation
        let mergeStreet = trim(join(street, ""))
        let emptyErrors = emptyCheck({
            firstname,
            lastname,
            mobile,
            street: mergeStreet,
            city,
            zip,
            region: get(region, "name", ''),
            country: get(country, "id", "US")
        })

        if (size(emptyErrors) > 0) {
            setErrors(emptyErrors)
            return
        }
        setErrors({})
        let data = {
            region_id: get(region, "id", ""),
            region: region.code || 'CA',
            country_code: country.id || 'US', // pass only country id
            street, // street array
            telephone: String(mobile),
            postcode: String(zip),
            city,
            firstname,
            lastname,
            save_in_address_book: saveInAddressBook,
        }

        onSaveAddress(data)
    }, [
        region, country,
        street, mobile, zip, city,
        firstname, lastname, saveInAddressBook
    ])


    return (
        <div className={classes.blockContent}>
            <div className={classes.formAddressEdit}>
                <fieldset className={[classes.fieldset, classes.billingFieldset].join(" ")}>
                    {showSameAsButton && (
                        <div className={[classes.actionToolbar, classes.TopActionToolbar, classes.billingActionToolbar].join(" ")}>
                            <div className={classes.secondary}>
                                <button className={[classes.action, classes.secondary].join(" ")} onClick={onSameAsButtonClick}><span>Same as Shipping Address</span></button>
                            </div>
                        </div>
                    )}

                    {/* 
                    ==================================================================================
                        FIRSTNAME , LASTNAME , MOBILE
                    ==================================================================================
                    */}
                    <TextInput
                        containerClass={[classes.field, classes.firstName].join(" ")}
                        label="First Name*"
                        type="text"
                        className="input-text required-entry"
                        value={firstname}
                        labelClasses={classes.fieldLabel}
                        controlClasses={classes.control}
                        onChange={(e) => setFirstname(e.target.value)}
                        name="firstname"
                        htmlFor="firstname"
                        errorMessage={get(errors, "firstname", '')} />

                    <TextInput
                        containerClass={[classes.field, classes.lastName].join(" ")}
                        label="Last Name*"
                        type="text"
                        className="input-text required-entry"
                        value={lastname}
                        labelClasses={classes.fieldLabel}
                        controlClasses={classes.control}
                        onChange={(e) => setLastname(e.target.value)}
                        name="lastname"
                        htmlFor="lastname"
                        errorMessage={get(errors, "lastname", '')} />

                    <TextInput
                        containerClass={[classes.field, classes.telephone].join(" ")}
                        label="Mobile*"
                        type="text"
                        className="input-text required-entry"
                        value={mobile}
                        labelClasses={classes.fieldLabel}
                        controlClasses={classes.control}
                        onChange={(e) => setMobile(e.target.value)}
                        name="mobile"
                        htmlFor="mobile"
                        errorMessage={get(errors, "mobile", '')} />

                    {/* 
                    ==================================================================================
                        STREET 1 , STREET 2 , CITY
                    ==================================================================================
                    */}

                    <TextInput
                        containerClass={[classes.field, classes.street, classes.streetLine1].join(" ")}
                        label="Street*"
                        type="text"
                        className="input-text required-entry"
                        value={street[0]}
                        labelClasses={classes.fieldLabel}
                        controlClasses={classes.control}
                        onChange={(e) => changeStreet(e.target.value, 0)}
                        name="street[0]"
                        htmlFor="street[0]"
                        errorMessage={get(errors, "street", '')} />

                    <TextInput
                        containerClass={[classes.field, classes.street, classes.streetLine2].join(" ")}
                        type="text"
                        className="input-text required-entry"
                        value={street[1]}
                        labelClasses={classes.fieldLabel}
                        controlClasses={classes.control}
                        onChange={(e) => changeStreet(e.target.value, 1)}
                        name="street[1]"
                        htmlFor="street[1]" />

                    <TextInput
                        containerClass={[classes.field, classes.city].join(" ")}
                        label="City*"
                        type="text"
                        className="input-text required-entry"
                        value={city}
                        labelClasses={classes.fieldLabel}
                        controlClasses={classes.control}
                        onChange={(e) => setCity(e.target.value)}
                        name="city"
                        htmlFor="city"
                        labelClass={classes.label}
                        errorMessage={get(errors, "city", '')} />

                    {/* 
                    ==================================================================================
                        COUNTRY AND ITS AVAIALBE REGIONS
                    ==================================================================================
                    */}

                    <SearchablePicker
                        label="Country*"
                        containerClass={[classes.field, classes.country].join(" ")}
                        labelClass={classes.label}
                        controlClasses={classes.control}
                        dropdownClass={classes.select}
                        initialValues={{ ...country }}
                        options={countryData}
                        mapLabel={(country) => get(country, "full_name_locale", '--') == null ? get(country, 'id', '') : get(country, 'full_name_locale', '')}
                        mapValue={(country) => get(country, 'id', '')}
                        keyExtractor={(country) => get(country, 'id', '') + get(country, "full_name_locale", '--')}
                        onPickerValueChange={(selectedCountry) => {
                            setCountry(selectedCountry)
                            // reset region if country is changed
                            if (selectedCountry.id !== country.id) {
                                setRegion({})
                            }
                        }} />

                    {hasCountryRegions ? (

                        <SearchablePicker
                            label="Region*"
                            containerClass={[classes.field, classes.state].join(" ")}
                            labelClass={classes.label}
                            controlClasses={classes.control}
                            dropdownClass={classes.select}
                            initialValues={region}
                            options={availableRegions}
                            mapLabel={(region) => get(region, "name", null) == null ? region.code : region.name}
                            mapValue={(region) => get(region, "code", '')}
                            keyExtractor={(region) => get(region, "code", '') + " " + get(region, "id", '')}
                            onPickerValueChange={(selectedRegion) => {
                                setRegion(selectedRegion)
                            }} />
                    ) : (
                        <TextInput
                            containerClass={[classes.field, classes.region].join(" ")}
                            label="Region*"
                            type="text"
                            className="input-text required-entry"
                            value={get(region, "name", '')}
                            labelClasses={classes.fieldLabel}
                            controlClasses={classes.control}
                            onChange={(e) => setRegion({
                                id: 0,
                                code: e.target.value,
                                name: e.target.value
                            })}
                            name="region"
                            htmlFor="region"
                            errorMessage={get(errors, "region", '')} />
                    )
                    }

                    {/* 
                    ==================================================================================
                        ZIP AND BUTTONS
                    ==================================================================================
                    */}

                    <TextInput
                        containerClass={[classes.field, classes.zip].join(" ")}
                        label="Zip*"
                        type="text"
                        className="input-text required-entry"
                        value={zip}
                        labelClasses={classes.fieldLabel}
                        controlClasses={classes.control}
                        onChange={(e) => setZip(e.target.value)}
                        name="zip"
                        htmlFor="zip"
                        errorMessage={get(errors, "zip", '')} />

                    {isUserLoggedIn &&
                        <div className={classes.field}>
                            <Checkbox
                                checked={saveInAddressBook}
                                onChange={() => setSaveInAddressBook(!saveInAddressBook)}
                                label="Save in Address Book" />
                        </div>
                    }
                </fieldset>

                <div className={classes.actionToolbar}>
                    <div className={classes.primary}>
                        {setting ? (
                            <LoadingButton classes={{ wrapper: classes.loadingButton }} />
                        ) : (
                            <button className={[classes.action, classes.secondary].join(" ")} onClick={submitForm}>
                                <span>Delivery To This Address</span>
                            </button>
                        )}
                    </div>
                    {isUserLoggedIn &&
                        <div className={classes.secondary}>
                            <button className={[classes.action, classes.cancel].join(" ")} onClick={toggleForm}><span>Cancel</span></button>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default React.memo(CheckoutAddressForm)