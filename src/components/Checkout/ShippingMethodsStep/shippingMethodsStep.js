import React, { useCallback } from 'react'
import { func, oneOfType, bool, string, array } from 'prop-types'

import RadioButton from '../../RadioButton'

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './shippingMethodStep.css'

import { get, size } from 'lodash'



const ShippingMethodStep = props => {

    const classes = useStyle(defaultClasses)
    /**
     * render list component will  
     */
    const {
        enabled,
        title,
        renderItem: renderItemsParam = false,
        data,
        onItemClick,
        mapLabel,
        mapKey,
        mapValue,
        initialValues,
        isDefaultStore
    } = props

    const renderItem = useCallback((item, index) => {
        let isActive = get(item, "method_code", '') === get(initialValues, "method_code", '')
        return (
            <div className={[classes.field, classes.choice].join(" ")} key={get(item, "method_code", '')} onClick={() => onItemClick(item)}>
                <div className={[classes.optionChoice, classes.customRadio].join(" ")}>
                    <RadioButton isActive={isActive} />
                </div>
                <div className={classes.methodDetails}>
                    <div className={classes.methodLabel}>{get(item, "method_title", '')}</div>
                </div>

            </div>
        )
    }, [initialValues])

    const renderStorePickupItem = useCallback((item) => {
        let isActive = get(item, "method_code", '') === get(initialValues, "method_code", '')

        const additional_information = get(item, "additional_information", "")
        return (
            <div className={[classes.field, classes.choice].join(" ")} key={get(item, "method_code", '')} onClick={() => onItemClick(item)}>
                <div className={[classes.optionChoice, classes.customRadio].join(" ")}>
                    <RadioButton isActive={isActive} />
                </div>
                <div className={classes.methodDetails}>
                    <div className={classes.addressDetails}>
                        <div className={classes.storeName}>
                            {get(additional_information, "storename", '')}
                        </div>
                        <div className={classes.storeAddress}>
                            <span className={classes.street}>{get(additional_information, "street", '')}</span>
                            <span className={classes.additionalInfo}>{`${get(additional_information, "city", '')},${get(additional_information, "state", '')} ${get(additional_information, "additional_information.zip", '')}`}</span>
                        </div>
                        <div className={classes.storeHours}>
                            <strong>Open from:</strong>
                            <span>{get(additional_information, "hours", "")}</span>
                        </div>
                    </div>
                    <div className={classes.distance}>
                        {get(additional_information, "distance", "")}
                    </div>
                    <div className={classes.estimateDetails}>
                        <div className={classes.pickupDate}>Estimated Pickup date:</div>
                        <div className={classes.pickup}>{get(additional_information, "pickup", "")}</div>
                        <div className={classes.freePickup}>Free Pickup at Store</div>
                    </div>
                </div>

            </div >
        )
    }, [initialValues])


    // let mappedValue = mapValue(initialValues)
    if (!enabled) {
        return (
            <div className="block block-checkout inactive">
                <div className="block-title">
                    {title}
                </div>
            </div>
        )
    }

    if (size(data) === 0) {
        return (
            <div className="no-data-found">
                No Data Found
            </div>
        )
    }


    /**
     * if default store code is not selected then it must be store pickup only
     * and user is not allowed to change its value
     * 
     * else it will show the list of methods but in list there is carrier code "storepick"
     * then it will be displayed with seperate UI
     */
    if (!isDefaultStore) {
        return (
            <div className={[classes.block, classes.paymentOptions].join(" ")}>
                <div className={classes.blockTitle}>
                    <strong>{title}</strong>
                </div>
                <div className={classes.blockcontent}>
                    <div className={classes.paymentMethods}>
                        <fieldset className={classes.fieldset}>
                            {renderItem(initialValues, 0)}
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    } else {
        const storePickupData = [], normalMethodData = []
        data.map((item) => {
            const carrier_code = get(item, "carrier_code", "")
            if (carrier_code === 'storepickup') {
                storePickupData.push(item)
            } else {
                normalMethodData.push(item)
            }
        })
        const hasStorePickupData = size(storePickupData) > 0
        return (
            <div className={[classes.block, classes.paymentOptions].join(" ")}>
                {hasStorePickupData && (
                    <>
                        <div className={classes.blockTitle}>
                            <strong>Store Pickup</strong>
                        </div>
                        <div className={classes.blockcontent}>
                            <div className={classes.paymentMethods}>
                                <fieldset className={classes.fieldset}>
                                    {storePickupData.map(renderStorePickupItem)}
                                </fieldset>
                            </div>
                        </div>
                    </>
                )}
                <div className={classes.blockTitle}>
                    <strong> {title}</strong>
                </div>
                <div className={classes.blockcontent}>
                    <div className={classes.paymentMethods}>
                        <fieldset className={classes.fieldset}>
                            {normalMethodData.map(renderItem)}
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}

ShippingMethodStep.propTypes = {
    mapLabel: func.isRequired,
    mapKey: func.isRequired,
    mapValue: func.isRequired,
    renderItem: oneOfType([bool, func]),
    title: string.isRequired,
    data: array.isRequired,
    onItemClick: func.isRequired
}

ShippingMethodStep.defaultProps = {
    renderItem: false
}

export default React.memo(ShippingMethodStep)