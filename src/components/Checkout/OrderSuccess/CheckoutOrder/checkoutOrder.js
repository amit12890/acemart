import React, { useEffect } from 'react'

import { get } from 'lodash'

import { useCheckoutSuccess } from '../../../../data/checkout/hooks/checkout.hook'
import BarCode from 'react-barcode'
import { format } from 'date-fns'


export default ({ orderNumber }) => {
    const { fetchCheckoutSuccess, data } = useCheckoutSuccess()
    console.log("🚀 ~ file: checkoutOrder.js ~ line 8 ~ data", data)
    useEffect(() => {
        fetchCheckoutSuccess({
            variables: {
                incrementId: orderNumber
            }
        })
    }, [orderNumber])

    const incrementId = get(data, "increment_id", "")
    const pickupDate = get(data, "pickup_datetime", "")
    const billingInfo = get(data, "billing_address", {})
    const shippingInfo = get(data, "shipping_address", {})
    const items = get(data, "items", [])
    console.log("🚀 ~ file: checkoutOrder.js ~ line 26 ~ items", items)
    return (
        <div>
            <div>{incrementId}</div>
            <div>Estimated Piclup date: {pickupDate}</div>

            <div>
                <BarCode value={incrementId} />
            </div>

            <div style={{
                display: 'flex'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div>Billing information</div>
                    <div>
                        <div>{get(billingInfo, "firstname", "")} {get(billingInfo, "lastname", "")}</div>
                        <div>
                            {get(billingInfo, "street", []).join(", ")}
                        </div>
                        <div>
                            <span>{get(billingInfo, "city", "")} {get(billingInfo, "region", "")},  {get(billingInfo, "postcode", "")}</span>
                        </div>
                        <div>
                            {get(billingInfo, "telephone", "")}
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div>Shipping information</div>
                    <div>
                        <div>{get(shippingInfo, "firstname", "")} {get(shippingInfo, "lastname", "")}</div>
                        <div>
                            {(get(shippingInfo, "street", [])).join(", ")}
                        </div>
                        <div>
                            <span>{get(shippingInfo, "city", "")} {get(shippingInfo, "region", "")},  {get(shippingInfo, "postcode", "")}</span>
                        </div>
                        <div>
                            {get(shippingInfo, "telephone", "")}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>items</div>
                <div>product details</div>
                {items.map(((item) => {
                    return (
                        <div key={item.id}>
                            <div>
                                {get(item, "produdct_name", "")}
                            </div>
                            <div>
                                {get(item, "quantity_ordered", "")}
                            </div>
                            <div>
                                {get(item, "product_sku", "")}
                            </div>
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}