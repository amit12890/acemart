import React, { useCallback, useEffect, useState } from 'react'
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

    const initialCode = get(initialValues, "code", "")

    const [selectedPaymentCode, setSelectedPaymentCode] = useState(initialCode)

    useEffect(() => {
        setSelectedPaymentCode(initialCode)
    }, [initialCode])


    const renderItem = useCallback((item, index) => {
        let isActive = item.code === selectedPaymentCode
        return (
            <div
                className="field choice checkout-choice required"
                key={item.code}
                onClick={() => {
                    setSelectedPaymentCode(item.code)
                    onItemClick(item)
                }}>
                <div className="option-choice custom-radio-field">
                    <RadioButton isActive={isActive} />
                </div>
                <div className="delivery-methods-details">
                    <div className="method-label">{get(item, "title", "")}</div>
                </div>
            </div>
        )
    }, [selectedPaymentCode])

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
    renderItem: oneOfType([bool, func]),
    title: string.isRequired,
    data: array.isRequired,
    onItemClick: func.isRequired
}

PaymentListStep.defaultProps = {
    renderItem: false
}

export default React.memo(PaymentListStep)