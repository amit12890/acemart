import React from 'react'
import { connect } from 'react-redux'

import { get, size } from 'lodash'

export default connect(store => {
    return {
        prices: store.checkout.prices,
        shipping_addresses: store.checkout.shipping_addresses
    }
})(React.memo(({
    shipping_addresses,
    prices,
    dispatch
}) => {

    let discounts = get(prices, "discounts", [])
    let appliedTaxes = get(prices, "applied_taxes", [])
    let selectedShippingMethod = get(shipping_addresses[0], "selected_shipping_method", {})

    return (
        <div>
            <strong className="summary title">Order Summary</strong>
            <div id="cart-totals" className="cart-totals">

                <div className="table-wrapper">
                    <table className="data table totals">
                        <caption className="table-caption">Total</caption>
                        <tbody>
                            <tr className="totals sub">
                                <th className="mark">Subtotal</th>
                                <td className="amount">
                                    <span className="price" data-th="Subtotal">${get(prices, "subtotal_excluding_tax.value", '')}</span>
                                </td>
                            </tr>
                            {size(discounts) > 0 &&
                                discounts.map((disc, index) => {
                                    return (
                                        <tr className="totals" key={disc.label + index}>
                                            <th colSpan="1" className="mark" scope="row">
                                                <span className="title">{get(disc, "label", "")}</span>
                                                <span className="discount coupon"></span>
                                            </th>
                                            <td className="amount" data-th="Discount">
                                                <span><span className="price">-${get(disc, "amount.value", '0')}</span></span>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                            {size(appliedTaxes) > 0 &&
                                appliedTaxes.map((tax, index) => {
                                    return (
                                        <tr className="totals-tax">
                                            <th className="mark" colSpan="1" scope="row">{get(tax, "label", '')}</th>
                                            <td className="amount" data-th="Tax">
                                                <span className="price">${get(tax, "amount.value", '')}</span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                            {size(selectedShippingMethod) > 0 &&
                                <tr className="totals-tax">
                                    <th className="mark" colSpan="1" scope="row">Shipping {get(selectedShippingMethod, "carrier_title", "")} - {get(selectedShippingMethod, "method_title", "")}</th>
                                    <td className="amount" data-th="Tax">
                                        <span className="price">${get(selectedShippingMethod, "amount.value", '')}</span>
                                    </td>
                                </tr>
                            }

                            <tr className="grand totals">
                                <th className="mark" scope="row">
                                    <strong style={{ fontWeight: 'bold' }}>Order Total</strong>
                                </th>
                                <td className="amount" data-th="Order Total">
                                    <strong><span className="price">${get(prices, "grand_total.value", '')}</span></strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}))