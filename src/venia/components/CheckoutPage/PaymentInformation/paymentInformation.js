import React, { useCallback } from 'react'

import { Circle, CheckCircle } from 'react-feather'

import { get, size } from 'lodash'

/**
 * parent
 *      CheckoutPage
 */
export default ({ data, selectedPayment }) => {
    console.log("🚀 ~ file: paymentInformation.js ~ line 8 ~ data", data)

    const paymentInfoItem = useCallback((item) => {
        const isActive = get(item, "code", '') === get(selectedPayment, "code", '')
        return (
            <div style={{
                padding: 16,
                display: 'flex'
            }}>
                {isActive ? (
                    <div>
                        <Circle />
                    </div>
                ) : (
                    <div>
                        <CheckCircle />
                    </div>
                )}
                <div style={{
                    marginLeft: 16
                }}>
                    {get(item, "title", "")}
                </div>
            </div>
        )
    }, [])

    if (size(data) === 0) return null
    return (
        <div>
            <div style={{
                padding: 16
            }}>
                Payment Information
            </div>
            {data.map(paymentInfoItem)}
        </div >
    )
}