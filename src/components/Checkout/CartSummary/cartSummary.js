import React, { Suspense, useEffect } from 'react'
import { connect } from 'react-redux'

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './cartSummary.css'

import { get, size } from 'lodash'
import { Accordion, Section } from '../../../venia/components/Accordion';
import CouponCode from '../../../venia/components/CartPage/PriceAdjustments/CouponCode';
import LoadingIndicator from '../../../venia/components/LoadingIndicator';
import { formatMessage } from '@formatjs/intl';

export default connect(store => {

    return {
        prices: store.checkout.prices,
        shipping_addresses: store.checkout.shipping_addresses
    }
})(React.memo(({
    shipping_addresses,
    prices,
    refetchCheckout,
    dispatch
}) => {
    const classes = useStyle(defaultClasses)
    let discounts = get(prices, "discounts", [])
    let appliedTaxes = get(prices, "applied_taxes", [])
    let selectedShippingMethod = get(shipping_addresses[0], "selected_shipping_method", {})

    return (
        <div className={[classes.block, classes.orderSummary].join(" ")}>
            <div className={classes.blockcontent}>
                <Accordion canOpenMultiple={true}>
                    <Section
                        id={'coupon_code'}
                        title={"Apply Discount Code"}
                    >
                        <Suspense fallback={<LoadingIndicator />}>
                            <CouponCode
                                setIsCartUpdating={() => { }}
                                postSubmit={() => {
                                    refetchCheckout()
                                }} />
                        </Suspense>
                    </Section>
                </Accordion>
                <div id="cart-totals" className={classes.orderTotalWrapper}>
                    <div className={classes.orderTotal}>
                        <div className={classes.orderTotalItems}>
                            <div className={classes.mark}>Subtotal</div>
                            <div className={classes.amount}>
                                <span className={classes.price}>${get(prices, "subtotal_excluding_tax.value", '')}</span>
                            </div>
                        </div>
                        {size(discounts) > 0 &&
                            discounts.map((disc, index) => {
                                return (
                                    <div className={classes.orderTotalItems} key={disc.label + index}>
                                        <div className={classes.mark}>
                                            <div className={classes.markTitle}>{get(disc, "label", "")}</div>
                                            <span className={classes.coupon}></span>
                                        </div>
                                        <div className={classes.amount}>
                                            <span><span className={classes.price}>-${get(disc, "amount.value", '0')}</span></span>
                                        </div>
                                    </div>
                                )
                            })

                        }
                        {size(appliedTaxes) > 0 &&
                            appliedTaxes.map((tax, index) => {
                                console.log("🚀 ~ file: cartSummary.js ~ line 73 ~ appliedTaxes.map ~ tax", tax)
                                const label = tax.__typename === "CartTaxItem" ? "Tax" : tax.label
                                return (
                                    <div className={classes.orderTotalItems}>
                                        <div className={classes.mark}>{label}</div>
                                        <div className={classes.amount}>
                                            <span className={classes.price}>${get(tax, "amount.value", '')}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {size(selectedShippingMethod.amount.value) > 0 &&
                            <div className={classes.orderTotalItems}>
                                <div className={classes.mark}>
                                    <div className={classes.markTitle}>Shipping</div>
                                    <span className={classes.methodTitle}>
                                        {get(selectedShippingMethod, "method_title", "")}</span>
                                </div>
                                <div className={classes.amount}>
                                    <span className={classes.price}>${get(selectedShippingMethod, "amount.value", '')}</span>
                                </div>
                            </div>
                        }

                        <div className={classes.orderTotalItems}>
                            <div className={classes.totalLabel}>
                                <strong>Order Total</strong>
                            </div>
                            <div className={classes.totalPrice}>
                                <strong>
                                    <span className={classes.price}>${get(prices, "grand_total.value", '')}</span>
                                </strong>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div >
    )
}))