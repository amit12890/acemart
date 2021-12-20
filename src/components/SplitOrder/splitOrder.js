import React from 'react'
import { get } from 'lodash'

import { useStyle } from '../../venia/classify'
import defaultClasses from './splitOrder.css'
import SplitOrderItem from './SplitOrderItem'

/**
 * render block of multishipping
 * 
 * Parent
 *  vania -> CheckoutPage
 */
export default ({ data }) => {
    const classes = useStyle(defaultClasses)
    console.log("🚀 ~ file: splitOrder.js ~ line 10 ~ data", data)
    const bops = get(data, "bops", {})
    const boss = get(data, "boss", {})
    const bopsItems = get(bops, "items", [])
    const bossItems = get(boss, "items", [])
    return (
        <div>
            <div style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                border: '0.5px solid black',
                padding: 16
            }}>
                <span>{get(bops, "label", "")}</span>
                <span>{get(bops, "pickup", "")}</span>
            </div>
            <div>
                {bopsItems.map((item) => {
                    return (
                        <SplitOrderItem
                            item={item}
                            key={item.item_id} />
                    )
                })}
            </div>
            <div style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                border: '0.5px solid black',
                padding: 16
            }}>
                <span>{get(boss, "label", "")}</span>
                <span>{get(boss, "pickup", "")}</span>
            </div>
            <div>
                {bossItems.map((item) => {
                    return (
                        <SplitOrderItem
                            item={item}
                            key={item.item_id} />
                    )
                })}
            </div>
        </div>
    )
}

