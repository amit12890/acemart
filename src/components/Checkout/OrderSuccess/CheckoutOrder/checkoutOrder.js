import React, { useEffect } from 'react'

import { get, size } from 'lodash'

import { useCheckoutSuccess } from '../../../../data/checkout/hooks/checkout.hook'
import BarCode from 'react-barcode'
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { useStyle } from '@magento/venia-ui/lib/classify'
import defaultClasses from './checkoutOrder.css'


export default React.memo(({ orderNumber, onCheckoutOrderFetched, classes: propsClasses, onEmailChange }) => {
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
        onEmailChange(data.customer_email)
    }, [data.customer_email])

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
        <div className={classes.orderItem}>
            <div className={classes.panelHeader}>
                <div className={classes.panelLeft}>
                    <div className={classes.orderNumber}><strong>Order Number: </strong>{incrementId}</div>
                    <div className={classes.estimateddate}><strong>Estimated Pickup date: </strong>{pickupDate}</div>
                </div>
                <div className={classes.panelRight}>
                    <div className={classes.barcodeWrapper}>
                        <BarCode

                            value={incrementId} />
                    </div>
                </div>
            </div>


            <div className={classes.panelBody}>
                <div className={classes.addressWrapper}>
                    <div className={[classes.block, classes.billing].join(" ")}>
                        <div className={classes.blockTitle}>
                            Billing information
                        </div>
                        <div className={classes.blockContent}>
                            <div className={classes.name}>
                                {get(billingInfo, "firstname", "")} {get(billingInfo, "lastname", "")}
                            </div>
                            {size(billingStreet) === 2 ? (
                                <div className={classes.street}>
                                    {billingStreet.join(", ")}
                                </div>
                            ) : (
                                <div className={classes.street}>
                                    {get(billingInfo, "street[0]", '')}
                                </div>
                            )}
                            <div className={classes.city}>
                                <span>{get(billingInfo, "city", "")} {get(billingInfo, "region", "")},  {get(billingInfo, "postcode", "")}</span>
                            </div>
                            <div className={classes.telephone}>
                                {get(billingInfo, "telephone", "")}
                            </div>
                        </div>
                    </div>


                    <div className={[classes.block, classes.shipping].join(" ")}>
                        <div className={classes.blockTitle}>
                            Shipping information
                        </div>
                        <div className={classes.blockContent}>
                            <div className={classes.name}>
                                {get(shippingInfo, "firstname", "")} {get(shippingInfo, "lastname", "")}
                            </div>
                            {size(shippingStreet) === 2 ? (
                                <div className={classes.street}>
                                    {shippingStreet.join(", ")}
                                </div>
                            ) : (
                                <div className={classes.street}>
                                    {get(shippingInfo, "street[0]", '')}
                                </div>
                            )}
                            <div className={classes.city}>
                                <span>{get(shippingInfo, "city", "")} {get(shippingInfo, "region", "")},  {get(shippingInfo, "postcode", "")}</span>
                            </div>
                            <div className={classes.telephone}>
                                {get(shippingInfo, "telephone", "")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.panelFooter}>
                <div className={classes.orderItems}>Items</div>
                <div className={classes.tableWrapper}>
                    <div className={classes.tableHead}>
                        <div className={classes.productDetails}>
                            Product Details
                        </div>
                        <div className={classes.price}>
                            Item Price
                        </div>
                        <div className={classes.qty}>
                            Quantity
                        </div>
                        <div className={classes.subtotal}>
                            Extended Price
                        </div>
                    </div>
                    {items.map(((item) => {
                        return (
                            <div className={classes.tablebody} key={item.id}>
                                <div className={classes.productDetails}>
                                    <div className={classes.productName}>{get(item, "produdct_name", "")}</div>
                                    <div className={classes.sku}>{get(item, "product_sku", "")}</div>
                                </div>
                                <div className={classes.price}>
                                    13.95
                                </div>
                                <div className={classes.qty}>
                                    1
                                </div>
                                <div className={classes.subtotal}>
                                    13.95
                                </div>
                            </div>
                        )
                    }))}
                    <div className={classes.tableFooter}>
                        <div className={classes.mark}>
                            <span>Subtotal</span>
                        </div>
                        <div className={classes.value}>
                            13.95
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
})