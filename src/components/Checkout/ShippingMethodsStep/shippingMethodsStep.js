import React, { useCallback } from 'react'
import { func, oneOfType, bool, string, array } from 'prop-types'

import RadioButton from '../../RadioButton'

import { get, size } from 'lodash'



const ShippingMethodStep = props => {
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

    const renderItem = useCallback((item, index) => {
        let isActive = get(item, "method_code", '') === get(initialValues, "method_code", '')
        return (
            <div className="field choice checkout-choice required" key={get(item, "method_code", '')} onClick={() => onItemClick(item)}>
                <div className="option-choice custom-radio-field">
                    <RadioButton isActive={isActive} />
                </div>
                <div className="delivery-methods-details">
                    <div className="method-label">{get(item, "method_title", '')}</div>
                </div>

            </div>
        )
    }, [initialValues])

    const renderStorePickupItem = useCallback((item) => {
        let isActive = get(item, "method_code", '') === get(initialValues, "method_code", '')

        const additional_information = get(item, "additional_information", "")
        return (
            <div className="field choice checkout-choice required" key={get(item, "method_code", '')} onClick={() => onItemClick(item)}>
                <div className="option-choice custom-radio-field">
                    <RadioButton isActive={isActive} />
                </div>
                <div className="delivery-methods-details" style={{ display: 'flex' }}>
                    <div style={{
                        display: 'flex',
                        flex: 1
                    }}>
                        <div className="method-label">{get(additional_information, "storename", '')}</div>
                        <div>
                            <span>{get(additional_information, "street", '')}</span>
                            <span>{`${get(additional_information, "city", '')},${get(additional_information, "state", '')} ${get(additional_information, "additional_information.zip", '')}`}</span>
                        </div>
                        <div>Open from:{get(additional_information, "hours", "")}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flex: 0.5
                    }}>
                        {get(additional_information, "distance", "")}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 0.5
                    }}>
                        <div>Estimated Pickup date:</div>
                        <div>{get(additional_information, "pickup", "")}</div>
                        <div>Free Pickup at Store</div>
                    </div>
                </div>

            </div>
        )
    }, [initialValues])

    /**
     * if default store code is not selected then it must be store pickup only
     * and user is not allowed to change its value
     * 
     * else it will show the list of methods but in list there is carrier code "storepick"
     * then it will be displayed with seperate UI
     */
    if (!isDefaultStore) {
        return (
            <div className="block block-checkout payment-options">
                <div className="block-title">
                    {title}
                </div>
                <div className="block-content">
                    <div className="checkout-payment-methods">
                        <fieldset className="fieldset">
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
            <div className="block block-checkout payment-options">
                {hasStorePickupData && (
                    <>
                        <div className="block-title">
                            Store Pickup
                        </div>
                        <div className="block-content">
                            <div className="checkout-payment-methods">
                                <fieldset className="fieldset">
                                    {storePickupData.map(renderStorePickupItem)}
                                </fieldset>
                            </div>
                        </div>
                    </>
                )}
                <div className="block-title">
                    {title}
                </div>
                <div className="block-content">
                    <div className="checkout-payment-methods">
                        <fieldset className="fieldset">
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