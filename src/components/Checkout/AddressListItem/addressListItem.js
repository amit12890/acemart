import React from 'react'

import { get, join, size, isObject, isArray } from 'lodash'

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './addressListItem.css'

/**
 * render address list item 
 * 
 * Parent
 *      1. Checkout
 *      2. CheckoutAddressListModal
 */
const AddressListItem = props => {
    const classes = useStyle(defaultClasses)

    const { address, containerClass, textStyle } = props

    const regionInString = (address) => {
        let region = get(address, "region", {})
        if (isObject(region)) {
            return get(region, "label", "")
        }
        return region
    }

    let street = get(address, "street", [])


    const renderStreet = () => {
        if (isArray(street)) {
            return street.map((item, index) => (
                <React.Fragment key={index}>
                    <span key={item + index}>{item}</span>
                    <br />
                </React.Fragment>
            ))
        }
        return (
            <React.Fragment>
                <span className={classes.street}>{street}</span>
                <br />
            </React.Fragment>
        )
    }


    return (
        <div className={containerClass}>
            <span className={classes.name}>{get(address, "firstname", '')} {get(address, "lastname", '')}</span><br />
            {renderStreet()}
            {size(regionInString(address)) > 0 &&
                <React.Fragment>
                    <span className={classes.region}>{regionInString(address)}</span>
                    <br />
                </React.Fragment>
            }
            <span className={classes.city}>{get(address, "city", '')}</span><br />
            <span className={classes.telephone}>{get(address, "telephone", '')}</span><br />
        </div>
    )
}

AddressListItem.defaultProps = {
    containerClass: '',
    textStyle: {}
}



export default AddressListItem