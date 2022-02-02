import { useStyle } from '@magento/venia-ui/lib/classify'
import { get, includes, omit, pull, size } from 'lodash'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Icon from '../../../venia/components/Icon'
import Price from '../../../venia/components/Price'
import Checkbox from '../../Checkbox'
import LoadingButton from '../../LoadingButton'
import { Info } from 'react-feather'
import defaultClasses from './shippingFees.css'
import { useShippingFees } from '../../../data/checkout/hooks/checkout.hook'


export default ({ data, onApplyPress, appliedShippingFees }) => {
    console.log("🚀 ~ file: shippingFees.js ~ line 14 ~ appliedShippingFees", appliedShippingFees)

    const { handleShippingFees, settingShippingFees } = useShippingFees()
    const classes = useStyle(defaultClasses)
    const [selectedOptions, setSelectedOptions] = useState(get(appliedShippingFees, "options", []))
    const [error, setError] = useState('')

    const isRequired = get(data, "required", false)
    const id = get(data, "fee_id", "")


    const renderOptionItem = useCallback((item, index) => {
        const feeOptionId = get(item, "fee_option_id", -1)
        const isActive = includes(selectedOptions, feeOptionId)
        return (
            <div className={classes.itemBlock}>
                <Checkbox
                    checked={isActive}
                    onChange={() => {
                        let updateOptions = [...selectedOptions]
                        if (isActive) {
                            updateOptions = pull(updateOptions, feeOptionId)
                        } else {
                            updateOptions.push(feeOptionId)
                        }
                        console.log("🚀 ~ file: shippingFees.js ~ line 30 ~ renderOptionItem ~ updateOptions", updateOptions)
                        setSelectedOptions(updateOptions)
                    }}
                    classes={{ checkboxBlock: classes.checkbox }} />
                <div className={classes.titleWrapper}>
                    <div className={classes.title}>
                        {get(item, "title", "")} -
                    </div>
                    <Price
                        currencyCode={get(item, "price.currency", "USD")}
                        value={get(item, "price.value", 0)} />
                </div>
                <div className={classes.iconWrapper}>
                    <Icon
                        src={Info}
                        size={20} />
                </div>
            </div>
        )
    }, [selectedOptions])

    const onApply = useCallback(() => {
        if (settingShippingFees) return
        if (size(selectedOptions) === 0) {
            setError("Please select atleast one option")
            return
        }
        handleShippingFees(Number(id), selectedOptions.join(","))
        onApplyPress({ id, options: selectedOptions })
    }, [id, selectedOptions, settingShippingFees, isRequired])

    if (size(data) === 0) return null

    const title = get(data, "title", "")
    const description = get(data, "description", "")
    const options = get(data, "options", [])

    return (
        <div className={classes.block}>
            <div className={classes.blockTitle}>
                <strong>{title}</strong>
            </div>
            <div className={classes.blockcontent}>
                <div className={classes.description}>
                    {description}
                </div>
                <div>
                    {options.map(renderOptionItem)}
                </div>
            </div>
            {size(error) > 0 && (
                <div className={classes.mageError}>
                    {error}
                </div>
            )}
            <div className={classes.primary}>
                {(settingShippingFees) ? (
                    <LoadingButton classes={{ wrapper: classes.loadingButton }} />
                ) : (
                    <button
                        type="submit"
                        className={classes.action}
                        onClick={onApply}>
                        <span>Apply</span>
                    </button>
                )}
            </div>
        </div>
    )
}