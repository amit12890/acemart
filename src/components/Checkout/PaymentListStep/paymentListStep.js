import React, { useCallback, useEffect, useState } from 'react'
import { func, oneOfType, bool, string, array } from 'prop-types'

import RadioButton from '../../RadioButton'

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './paymentListStep.css'
import { FormattedMessage } from 'react-intl'
import LoadingIndicator from '../../../venia/components/LoadingIndicator'
import { get, includes, size } from 'lodash'
import CardForm from '../CardForm';

/**
 * render list component will  
 * 
 * Parent
 *      Checkout
 */
const PaymentListStep = props => {

    const classes = useStyle(defaultClasses)

    const {
        enabled,
        title,
        data,
        onItemClick,
        initialValues,
        isDefaultStore,
        isMultiShipping,
        resetPaymentSelection,
        loading
    } = props

    const initialCode = get(initialValues, "code", "")

    let filteredData = data
    if (isMultiShipping) {
        filteredData = data.filter((item) => !includes(item.code, "paypal"))
    }
    const [selectedPaymentCode, setSelectedPaymentCode] = useState(initialCode)
    const [showCardForm, setCardFormVisibility] = useState(false)

    useEffect(() => {
        setSelectedPaymentCode(initialCode)
    }, [initialCode])


    const toggleCardForm = useCallback(() => {
        setCardFormVisibility(!showCardForm)
    }, [showCardForm])


    const renderItem = useCallback((item, index) => {
        let isActive = item.code === selectedPaymentCode
        return (
            <div className={[classes.field, classes.choice].join(" ")}
                key={item.code}
                onClick={() => {
                    if (item.code === "md_firstdata") {
                        setSelectedPaymentCode(item.code)
                        toggleCardForm()
                    } else {
                        setSelectedPaymentCode(item.code)
                        onItemClick(item)
                    }
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

    if (loading) {
        return (
            <div className={[classes.block, classes.paymentOptions].join(" ")}>
                <div className={classes.blockTitle}>
                    <strong>{title}</strong>
                </div>
                <div className={classes.blockcontent}>
                    <LoadingIndicator>
                        <FormattedMessage
                            id={'paymentMethod.setting'}
                            defaultMessage={'Saving Payment Method...'}
                        />
                    </LoadingIndicator>
                </div>
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
                    {showCardForm ? (
                        <CardForm
                            onSave={(cardInfo) => {
                                // currently toggleling card form
                                toggleCardForm()
                                onItemClick({
                                    code: selectedPaymentCode,
                                    md_firstdata: cardInfo
                                })
                            }}
                            toggleCardForm={toggleCardForm}
                            onCancel={() => {
                                console.log("here")
                                setSelectedPaymentCode('')
                                resetPaymentSelection()
                                toggleCardForm()
                            }} />
                    ) : (
                        <fieldset className={classes.fieldset}>
                            {filteredData.map(renderItem)}
                        </fieldset>
                    )}
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