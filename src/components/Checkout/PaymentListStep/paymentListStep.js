import React, { useCallback } from 'react'
import { func, oneOfType, bool, string, array } from 'prop-types'

import RadioButton from '../../RadioButton'

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './shippingMethodStep.css'

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


    const renderItem = useCallback((item, index) => {
        let isActive = item.code === get(initialValues, "code", "")
        return (
            <div className={[classes.field, classes.choice].join(" ")} key={item.code} onClick={() => onItemClick(item)}>
                <div className={[classes.optionChoice, classes.customRadio].join(" ")}>
                    <RadioButton isActive={isActive} />
                </div>
                <div className={classes.methodDetails}>
                    <div className={classes.methodLabel}>{get(item, "title", "")}</div>
                </div>

            </div>
        )
    }, [initialValues])


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