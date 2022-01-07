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
                    <p key={item + index}>{item}</p>

                </React.Fragment>
            ))
        }
        return (
            <React.Fragment>
                <p className={classes.street}>{street}</p>

            </React.Fragment>
        )
    }


    return (
        <div className={containerClass}>
            <p className={classes.name}>{get(address, "firstname", '')} {get(address, "lastname", '')}</p>
            {renderStreet()}
            {size(regionInString(address)) > 0 &&
                <React.Fragment>
                    <p className={classes.region}>{regionInString(address)}</p>
                </React.Fragment>
            }
            <p className={classes.city}>{get(address, "city", '')}</p>
            <p className={classes.telephone}>{get(address, "telephone", '')}</p>
        </div>
    )
}

AddressListItem.defaultProps = {
    containerClass: '',
    textStyle: {}
}



export default AddressListItem