import React, { useCallback } from 'react'
import { func, oneOfType, bool, string, array } from 'prop-types'

import RadioButton from '../../RadioButton'

import { get, size } from 'lodash'



const PaymentListStep = props => {
    /**
     * render list component will  
     */
    const {
        enabled,
        title,
        data,
        onItemClick,
        initialValues,
        isDefaultStore
    } = props
    console.log("🚀 ~ file: PaymentListStep.js ~ line 22 ~ enabled", enabled)


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
        let isActive = item.code === get(initialValues, "code", "")
        return (
            <div className="field choice checkout-choice required" key={item.code} onClick={() => onItemClick(item)}>
                <div className="option-choice custom-radio-field">
                    <RadioButton isActive={isActive} />
                </div>
                <div className="delivery-methods-details">
                    <div className="method-label">{get(item, "title", "")}</div>
                </div>

            </div>
        )
    }, [initialValues])

    // if (!isDefaultStore) {
    //     return (
    //         <div className="block block-checkout payment-options">
    //             <div className="block-title">
    //                 {title}
    //             </div>
    //             <div className="block-content">
    //                 <div className="checkout-payment-methods">
    //                     <fieldset className="fieldset">
    //                         {renderItem(initialValues, 0)}
    //                     </fieldset>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // } else {
    return (
        <div className="block block-checkout payment-options">
            <div className="block-title">
                {title}
            </div>
            <div className="block-content">
                <div className="checkout-payment-methods">
                    <fieldset className="fieldset">
                        {data.map(renderItem)}
                    </fieldset>
                </div>
            </div>
        </div>
    )
    // }
}

PaymentListStep.propTypes = {
    mapLabel: func.isRequired,
    mapKey: func.isRequired,
    mapValue: func.isRequired,
    renderItem: oneOfType([bool, func]),
    title: string.isRequired,
    data: array.isRequired,
    onItemClick: func.isRequired
}

PaymentListStep.defaultProps = {
    renderItem: false
}

export default React.memo(PaymentListStep)