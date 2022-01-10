import React from 'react'
import { get, size } from 'lodash'

import { useStyle } from '../../venia/classify'
import defaultClasses from './splitOrder.css'
import SplitOrderItem from './SplitOrderItem'
import WarningBlock from '../WarningBlock'
import OrderPriceBlock from './OrderPriceBlock'


const top_label = "No all of the items for your order are available for immediate pickup from your selected store location. Some items will be shipped to your store location and will be ready for pickup according to the estimated pickup dates shown below."
const bottom_label = "Multishipping checkout with PayPal is currently not supported"
/**
 * render block of multishipping
 * 
 * Parent
 *  vania -> CheckoutPage, Checkout
 */
export default ({ data, disableWarnings = false }) => {
    const classes = useStyle(defaultClasses)
    const bops = get(data, "bops", {})
    console.log("🚀 ~ file: splitOrder.js ~ line 21 ~ bops", bops)
    const bopsCurrencyCode = get(bops, "currency_code", "")
    const bopsSubtotal = get(bops, "sub_total", "")
    const bopsTax = get(bops, "tax", "")
    const bopsGrandTotal = get(bops, "total", "")
    const boss = get(data, "boss", {})
    const bossCurrencyCode = get(boss, "currency_code", "")
    const bossSubtotal = get(boss, "sub_total", "")
    const bossTax = get(boss, "tax", "")
    const bossGrandTotal = get(boss, "total", "")
    const bopsItems = get(bops, "items", [])
    const bossItems = get(boss, "items", [])
    const orderListStyle = disableWarnings ? '' : classes.orderList
    return (
        <div className={classes.splitOrderBlock}>
            {!disableWarnings && (
                <WarningBlock label={top_label} />
            )}
            <div className={orderListStyle}>
                <div className={classes.orderRow}>
                    <span>{get(bops, "label", "")}</span>
                    <span>Estimated Pickup: {get(bops, "pickup", "")}</span>
                </div>
                <div className={classes.bopsList}>
                    <div className={classes.headerBlock}>
                        <div className={classes.headerContent}></div>
                        <div className={classes.headerRow}>
                            <div className={classes.headerTitleCell}>
                                Price
                            </div>
                            <div className={classes.headerTitleCell}>
                                Qty
                            </div>
                            <div className={classes.headerTitleCell}>
                                Sub Total
                            </div>
                        </div>
                    </div>
                    {bopsItems.map((item, index) => {
                        return (
                            <SplitOrderItem
                                item={item}
                                key={item.item_id}
                                isLast={index === size(bopsItems) - 1} />
                        )
                    })}
                    <OrderPriceBlock
                        currencyCode={bopsCurrencyCode}
                        subTotal={bopsSubtotal}
                        tax={bopsTax}
                        grandTotal={bopsGrandTotal} />
                </div>
                <div className={classes.orderRow}>
                    <span>{get(boss, "label", "")}</span>
                    <span>Estimated Pickup: {get(boss, "pickup", "")}</span>
                </div>
                <div>
                    <div className={classes.headerBlock}>
                        <div className={classes.headerContent}></div>
                        <div className={classes.headerRow}>
                            <div className={classes.headerTitleCell}>
                                Price
                            </div>
                            <div className={classes.headerTitleCell}>
                                Qty
                            </div>
                            <div className={classes.headerTitleCell}>
                                Sub Total
                            </div>
                        </div>
                    </div>
                    {bossItems.map((item, index) => {
                        return (
                            <SplitOrderItem
                                item={item}
                                key={item.item_id}
                                isLast={index === size(bopsItems) - 1} />
                        )
                    })}
                    <OrderPriceBlock
                        currencyCode={bossCurrencyCode}
                        subTotal={bossSubtotal}
                        tax={bossTax}
                        grandTotal={bossGrandTotal} />
                </div>
            </div>
            {!disableWarnings && (
                <WarningBlock label={bottom_label} />
            )}
        </div>
    )
}

