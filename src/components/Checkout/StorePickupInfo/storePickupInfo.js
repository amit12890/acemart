import React from 'react'

import defaultClasses from './storePickupInfo.css'
import addressClasses from '../AddressStep/addressStep.css'
import { useStyle } from '@magento/venia-ui/lib/classify'
import { get } from 'lodash'

export default ({ enabled, storeInfo, showFullInfo = true }) => {

    const classes = useStyle(addressClasses, defaultClasses)

    if (!enabled) {
        return (
            <div className={classes.block}>
                <div className={classes.blockTitle}>
                    Store Pickup
                </div>
            </div>
        )
    } else {
        return (
            <div className={classes.block}>
                <div className={classes.blockTitle}>
                    Store Pickup
                </div>
                <div className={[classes.address, classes.horizontal].join(" ")}>
                    <div className={classes.addressTextWrapper}>
                        <p className={classes.name}>{get(storeInfo, "store_name", '')}</p>
                        <p className={classes.street}>{get(storeInfo, "store_locator_info.street", '')}</p>
                        <p className={classes.city}>{get(storeInfo, "store_locator_info.city", '')}, {get(storeInfo, "store_locator_info.state", '')} {get(storeInfo, "store_locator_info.zip", '')}</p>
                        <p className={classes.telephone}>{get(storeInfo, "store_locator_info.phone", '')}</p>
                    </div>
                    {showFullInfo && (
                        <div className={classes.timings}>
                            <p><span>Mon-Fri: </span>{get(storeInfo, "store_locator_info.hours.mon", []).join(" to ")}</p>
                            <p><span>Sat: </span>{get(storeInfo, "store_locator_info.hours.sat", []).join(" to ")}</p>
                            <p><span>Sun: </span>{get(storeInfo, "store_locator_info.hours.sun", []).join("")}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}