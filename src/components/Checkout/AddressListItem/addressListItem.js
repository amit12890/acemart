import React from 'react'

import { get, join, size, isObject, isArray } from 'lodash'

/**
 * render address list item 
 * 
 * Parent
 *      1. Checkout
 *      2. CheckoutAddressListModal
 */
const AddressListItem = props => {

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
                <span>{street}</span>
                <br />
            </React.Fragment>
        )
    }


    return (
        <div className={containerClass}>
            <span className="name">{get(address, "firstname", '')} {get(address, "lastname", '')}</span><br />
            {renderStreet()}
            {size(regionInString(address)) > 0 &&
                <React.Fragment>
                    <span>{regionInString(address)}</span>
                    <br />
                </React.Fragment>
            }
            <span>{get(address, "city", '')}</span><br />
            <span>{get(address, "telephone", '')}</span><br />
        </div>
    )
}

AddressListItem.defaultProps = {
    containerClass: '',
    textStyle: {}
}



export default AddressListItem