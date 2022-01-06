import React, { useCallback, useEffect, useState } from 'react'
import { func, oneOfType, bool, string, array } from 'prop-types'

import RadioButton from '../../RadioButton'

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './paymentListStep.css'

import { get, size } from 'lodash'


const PaymentListStep = props => {

    const classes = useStyle(defaultClasses)
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
            <div className={[classes.field, classes.choice].join(" ")}
                key={item.code}
                onClick={() => {
                    setSelectedPaymentCode(item.code)
                    onItemClick(item)
                }}
            >
                <div className={[classes.optionChoice, classes.customRadio].join(" ")}>
                    <RadioButton isActive={isActive} />
                </div>
                <div className={classes.methodDetails}>
                    <div className={classes.methodLabel}>{get(item, "title", "")}</div>
                </div>
            </div>
        )
    }, [selectedPaymentCode])


    // let mappedValue = mapValue(initialValues)
    if (!enabled) {
        return (

            <div className={[classes.block, classes.paymentMethod].join(" ")}>
                <div className={classes.blockTitle}>
                    <strong>{title}</strong>
                </div>
            </div>
        )
    }

    if (size(data) === 0) {
        return (
            <div className={[classes.block, classes.paymentMethod].join(" ")}>
                <div className={classes.blockcontent}>
                    No Data Found
                </div>
            </div>

        )
    }

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

        <div className={[classes.block, classes.paymentOptions].join(" ")}>
            <div className={classes.blockTitle}>
                <strong>{title}</strong>
            </div>

            <div className={classes.blockcontent}>
                <div className={classes.paymentMethods}>

                    <fieldset className={classes.fieldset}>
                        {data.map(renderItem)}
                    </fieldset>
                </div>
            </div>
        </div >
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