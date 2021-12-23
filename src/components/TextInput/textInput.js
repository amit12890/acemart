import React, { useRef, useEffect } from 'react'
import { string } from 'prop-types'

import { size, get, has } from 'lodash'



const TextInput = props => {
    /**
     * render textinput field
     *  its wrapper component which will handle input box, label and error message
     */
    const textInputRef = useRef(null)
    const { htmlFor, containerClass, label, errorMessage, className, innerRef, ...restProps } = props

    let isError = size(errorMessage) > 0


    return (
        <div className={containerClass}>
            {size(label) > 0 &&
                <label className="label" htmlFor={htmlFor}>
                    <span>{label}</span>
                </label>
            }
            <div className="control">
                <input
                    ref={innerRef ? innerRef : textInputRef}
                    id={htmlFor}
                    className={`${className} ${isError ? "mage-error" : ""}`}
                    {...restProps} />
                {isError &&
                    <div htmlFor={htmlFor} generated={"true"} className="mage-error">{errorMessage}</div>
                }
            </div>
        </div>
    )
}

TextInput.propTypes = {
    htmlFor: string,
    containerClass: string, // apply to parent class
    label: string,
    errorMessage: string // if it is empty then div will not be displayed
}

TextInput.defaultProps = {
    htmlFor: '',
    containerClass: '',
    label: '',
    errorMessage: '',
    innerRef: false
}

export default TextInput