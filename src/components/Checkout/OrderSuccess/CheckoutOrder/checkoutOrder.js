import React, { useEffect } from 'react'

import { get, size } from 'lodash'

import { useCheckoutSuccess } from '../../../../data/checkout/hooks/checkout.hook'
import BarCode from 'react-barcode'
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { useStyle } from '@magento/venia-ui/lib/classify'
import defaultClasses from './checkoutOrder.css'


export default React.memo(({ orderNumber, onCheckoutOrderFetched, classes: propsClasses }) => {
    const classes = useStyle(propsClasses, defaultClasses)
    const { fetchCheckoutSuccess, data, checkoutSuccessFetching } = useCheckoutSuccess()
    console.log("🚀 ~ file: checkoutOrder.js ~ line 14 ~ data", data)

    useEffect(() => {
        fetchCheckoutSuccess({
            variables: {
                incrementId: orderNumber
            }
        })
    }, [orderNumber])

    useEffect(() => {
        if (!checkoutSuccessFetching && size(data) > 0) {
            onCheckoutOrderFetched()
        }
    }, [checkoutSuccessFetching, data])

    const incrementId = get(data, "increment_id", "")
    const pickupDate = get(data, "pickup_datetime", "")
    const billingInfo = get(data, "billing_address", {})
    const shippingInfo = get(data, "shipping_address", {})
    const items = get(data, "items", [])
    const shippingStreet = get(shippingInfo, "street", [])
    const billingStreet = get(billingInfo, "street", [])
    console.log("🚀 ~ file: checkoutOrder.js ~ line 26 ~ items", items)

    if (checkoutSuccessFetching) {
        return (
            <LoadingIndicator />
        )
    }
    return (
        <div>
            <div className={classes.orderNumber}>{incrementId}</div>
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
                        {size(billingStreet) === 2 ? (
                            <div>
                                {billingStreet.join(", ")}
                            </div>
                        ) : (
                            <div>
                                {get(billingInfo, "street[0]", '')}
                            </div>
                        )}
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
                        {size(shippingStreet) === 2 ? (
                            <div>
                                {shippingStreet.join(", ")}
                            </div>
                        ) : (
                            <div>
                                {get(shippingInfo, "street[0]", '')}
                            </div>
                        )}
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
})