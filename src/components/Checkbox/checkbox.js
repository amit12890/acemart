import React from 'react'
import { bool, func, string } from 'prop-types'

import defaultClasses from './checkbox.css'
import { useStyle } from '../../venia/classify'



const Checkbox = props => {
    const { checked, onChange, label } = props
    const classes = useStyle(defaultClasses)
    return (
        <div className={classes.checkbox} onClick={onChange}>
            {
                checked ? (
                    <svg className="checkbox checked" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>filled-checked</title>
                        <path d="M25.333 4h-18.667c-1.473 0-2.667 1.193-2.667 2.667v18.667c0 1.473 1.193 2.667 2.667 2.667h18.667c1.473 0 2.667-1.193 2.667-2.667v-18.667c0-1.473-1.193-2.667-2.667-2.667zM13.333 22.667l-6.667-6.667 1.887-1.887 4.78 4.78 10.113-10.113 1.887 1.887-12 12z"></path>
                    </svg>

                ) : (
                    <svg className="checkbox empty" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>empty-checked</title>
                        <path d="M25.333 6.667v18.667h-18.667v-18.667h18.667zM25.333 4h-18.667c-1.473 0-2.667 1.193-2.667 2.667v18.667c0 1.473 1.193 2.667 2.667 2.667h18.667c1.473 0 2.667-1.193 2.667-2.667v-18.667c0-1.473-1.193-2.667-2.667-2.667z"></path>
                    </svg>
                )
            }
            <label>
                <span>{label}</span>
            </label>
        </div>
    )
}

Checkbox.propTypes = {
    checked: bool.isRequired,
    onChange: func.isRequired,
    label: string.isRequired
}

export default Checkbox