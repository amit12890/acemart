import React, { useCallback } from 'react'
import { func, oneOfType, bool, string, array } from 'prop-types'

import RadioButton from '../../RadioButton'

import { get, size } from 'lodash'



const CheckoutListStep = props => {
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
        let isActive = mapValue(item) === mapValue(initialValues)
        return (
            <div className="field choice checkout-choice required" key={mapKey(item)} onClick={() => onItemClick(item)}>
                <div className="option-choice custom-radio-field">
                    <RadioButton isActive={isActive} />
                </div>
                <div className="delivery-methods-details">
                    <div className="method-label">{mapLabel(item)}</div>
                </div>

            </div>
        )
    }, [])

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
        return (
            <div className="block block-checkout payment-options">
                <div className="block-title">
                    {title}
                </div>
                <div className="block-content">
                    <div className="checkout-payment-methods">
                        <fieldset className="fieldset">
                            {data.map((item, index) => renderItemsParam ? renderItemsParam(item, index, onItemClick) : renderItem(item, index))}
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}

CheckoutListStep.propTypes = {
    mapLabel: func.isRequired,
    mapKey: func.isRequired,
    mapValue: func.isRequired,
    renderItem: oneOfType([bool, func]),
    title: string.isRequired,
    data: array.isRequired,
    onItemClick: func.isRequired
}

CheckoutListStep.defaultProps = {
    renderItem: false
}

export default React.memo(CheckoutListStep)