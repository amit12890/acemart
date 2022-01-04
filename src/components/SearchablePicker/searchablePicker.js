import React, { useState, useEffect, useCallback } from 'react'
import { func, array, object, string, oneOfType } from 'prop-types'

import { size, get, find } from 'lodash'
import { mergeClasses } from '@magento/venia-ui/lib/classify'
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './searchablePicker.css'



const SearchablePicker = props => {

    const classes = useStyle(defaultClasses)
    /**
     * render dropdown based on  data
     */
    const { options, mapLabel, mapValue, keyExtractor, initialValues, labelClass, labelStyle, label, onPickerValueChange, containerClass, dropdownClass } = props
    let mapInitValue = mapValue(initialValues)
    // get value for mapValue conditions
    const [selectedValue, setSelectedValue] = useState(mapInitValue)

    useEffect(() => {
        if (selectedValue != mapInitValue) {
            setSelectedValue(mapInitValue)
        }
    }, [mapInitValue])

    const onDropdownValueChange = (event) => {
        let selectedValue = event.target.value
        setSelectedValue(selectedValue)
        let selectedObject = find(options, (opt) => mapValue(opt) == selectedValue)
        onPickerValueChange(selectedObject)
    }

    return (
        <div className={containerClass}>
            <label className={labelClass} style={labelStyle}>
                <span>{label}</span>
            </label>
            <div className={classes.control}>
                <select
                    className={dropdownClass}
                    value={selectedValue}
                    onChange={onDropdownValueChange}>
                    {options.map((opt, index) => {
                        let label = mapLabel(opt)
                        let value = mapValue(opt)
                        let key = keyExtractor(opt)
                        return (
                            <option value={value} key={key}>{label}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}


SearchablePicker.propTypes = {
    label: string,
    labelClass: string,
    containerClass: string,
    labelStyle: object,
    options: array.isRequired,
    mapLabel: func.isRequired,
    mapValue: func.isRequired,
    onPickerValueChange: func.isRequired,
    initialValues: object, // to select previous dropdown value
    dropdownClass: string
}

SearchablePicker.defaultValues = {
    initialValues: {},
    label: '',
    labelClass: '',
    labelStyle: {},
    containerClass: '',
    dropdownClass: ''
}


export default SearchablePicker