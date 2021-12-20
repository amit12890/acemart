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
export default ({ item }) => {
    const classes = useStyle(defaultClasses)
    console.log("🚀 ~ file: splitOrder.js ~ line 10 ~ data", item)
    const productName = get(item, "product.product_name", "")
    const productImage = get(item, "product.small_image.url", "")
    const sku = get(item, "product.sku", "")
    const qty = get(item, "qty", "")
    const price = get(item, "sub_total", "")
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <div>
                <Image
                    src={productImage}
                    width={60}
                    height={60} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                marginLeft: 16
            }}>
                <div>
                    {productName}
                </div>
                <div>
                    {sku}
                </div>
                <strong>
                    <Price
                        currencyCode='USD'
                        value={price} />
                </strong>
            </div>
            <div>
                {qty}
            </div>
        </div>
    )
}

