import React from 'react'
import { get } from 'lodash'

import { useStyle } from '../../../venia/classify'
import defaultClasses from './splitOrderItem.css'
import Image from '../../../venia/components/Image'
import Price from '../../../venia/components/Price'

/**
 * render block of multishipping item
 * 
 * parent
 *      SplitOrder
 */
export default ({ item, isLast }) => {
    const classes = useStyle(defaultClasses)
    const productName = get(item, "product.product_name", "")
    const productImage = get(item, "product.small_image.url", "")
    const sku = get(item, "product.sku", "")
    const qty = get(item, "qty", "")
    const price = get(item, "price", "")
    const subTotal = get(item, "sub_total", "")
    const currencyCode = get(item, "currency_code", 'USD')
    const itemBlockClass = isLast ? classes.itemBlock : [classes.itemBlock, classes.bottomBorder].join(" ")
    return (
        <div className={[classes.itemBlock, classes.bottomBorder].join(" ")}>
            <div>
                <Image
                    src={productImage}
                    width={60}
                    height={60} />
            </div>
            <div className={classes.itemTextWrapper}>
                <div className={classes.title}>
                    {productName}
                </div>
                <div className={classes.sku}>
                    {sku}
                </div>
                <strong>
                    <Price
                        currencyCode={currencyCode}
                        value={price} />
                </strong>
            </div>
            <div className={classes.priceBlock}>
                <div className={classes.priceBlockCell}>
                    <Price
                        currencyCode={currencyCode}
                        value={price} />
                </div>
                <div className={classes.priceBlockCell}>{qty}</div>
                <div className={classes.priceBlockCell}>
                    <Price
                        currencyCode={currencyCode}
                        value={subTotal} />
                </div>
            </div>
        </div>
    )
}

