import { size } from 'lodash'
import React, { useCallback, useState } from 'react'
import { useStyle } from '../../venia/classify'

import defaultClasses from './checkoutGuestInput.css'

/**
 * parent
 *     CheckoutPage
 */
export default ({ onSave, initialValue, loading }) => {
    const classes = useStyle(defaultClasses)
    const hasInitialEmail = size(initialValue) > 0
    const [email, setEmail] = useState(initialValue)
    const [isEditable, setEditable] = useState(false)

    const onChange = useCallback((e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }, [])

    const toggleEdit = useCallback((e) => {
        e.preventDefault()
        setEditable(!isEditable)
    }, [isEditable])

    if (hasInitialEmail && !isEditable) {
        return (
            <div className={classes.summaryWrapper}>
                <div className={classes.textWrapper}>
                    <div>Email</div>
                    <div>{email}</div>
                </div>
                <button
                    onClick={toggleEdit}>
                    Edit
                </button>

            </div>
        )
    } else {
        return (
            <div className={classes.summaryWrapper}>
                <div className={classes.textWrapper}>
                    <div>Email</div>
                    <input
                        value={email}
                        onChange={onChange}
                        placeholder='Enter your email' />
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        if (isEditable) {
                            setEditable(false)
                        }
                        if (!loading) {
                            onSave(email)
                        }
                    }}>
                    Save
                </button>
            </div>
        )
    }
}