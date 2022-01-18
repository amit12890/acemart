import React from 'react'
import { useStyle } from '../../../venia/classify'
import Price from '../../../venia/components/Price'

import defaultClasses from './orderPriceBlock.css'


export default ({ currencyCode, subTotal, tax, grandTotal }) => {
    const classes = useStyle(defaultClasses)
    return (
        <div className={classes.totalPriceBlock}>
            <div className={classes.field}>
                <label>Subtotal:</label>
                <div>
                    <Price
                        currencyCode={currencyCode}
                        value={subTotal} />
                </div>
            </div>
            <div className={classes.field}>
                <label>Tax:</label>
                <div>
                    <Price
                        currencyCode={currencyCode}
                        value={tax} />
                </div>
            </div>
            <div className={[classes.field, classes.highlight].join(" ")}>
                <label>Total:</label>
                <div>
                    <Price
                        currencyCode={currencyCode}
                        value={grandTotal} />
                </div>
            </div>
        </div>
    )
}