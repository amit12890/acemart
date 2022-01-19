import React, { useEffect } from 'react'

import { get, size } from 'lodash'

import { useCheckoutSuccess } from '../../../../data/checkout/hooks/checkout.hook'
import BarCode from 'react-barcode'
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator'
import Price from '../../../../venia/components/Price'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { useStyle } from '@magento/venia-ui/lib/classify'
import defaultClasses from './checkoutOrder.css'
import { replaceSpecialChars } from '../../../../app.utils'


export default React.memo(({ orderNumber, onCheckoutOrderFetched, classes: propsClasses, onEmailChange, isDefaultStore }) => {
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
    const pickupDate = get(data, "pickup_datetime", null)
    console.log("🚀 ~ file: checkoutOrder.js ~ line 40 ~ React.memo ~ pickupDate", pickupDate)
    const billingInfo = get(data, "billing_address", {})
    const shippingInfo = get(data, "shipping_address", {})
    const items = get(data, "items", [])
    const shippingStreet = get(shippingInfo, "street", [])
    const billingStreet = get(billingInfo, "street", [])

    const shipping = get(data, "total.total_shipping.value", 0)
    const isFreeShipping = shipping == 0
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
                    {!!pickupDate && !isDefaultStore && (
                        <div className={classes.estimateddate}><strong>Estimated Pickup date: </strong>{pickupDate}</div>
                    )}
                </div>
                <div className={classes.panelRight}>
                    <div className={classes.barcodeWrapper}>
                        <BarCode
                            value={incrementId}
                            height={30}
                            width={1}
                            fontSize={16} />
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
                                <span>{get(shippingInfo, "city", "")}, {get(shippingInfo, "region", "")}  {get(shippingInfo, "postcode", "")}</span>
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
                                    <div className={classes.productName}>{replaceSpecialChars(get(item, "product_name", ""))}</div>
                                    <div className={classes.sku}>{get(item, "product_sku", "")}</div>
                                </div>
                                <div className={classes.price}>
                                    <Price
                                        currencyCode={get(item, "product_sale_price.currency", "USD")}
                                        value={get(item, "product_sale_price.value", 0)} />
                                </div>
                                <div className={classes.qty}>
                                    {get(item, "quantity_ordered", "1")}
                                </div>
                                <div className={classes.subtotal}>
                                    <Price
                                        currencyCode={get(item, "product_sale_price.currency", "USD")}
                                        value={get(item, "product_sale_price.value", 0)} />
                                </div>
                            </div>
                        )
                    }))}
                    <div className={classes.tableFooter}>
                        <div className={classes.tableRow}>
                            <div className={classes.mark}>
                                <span>Subtotal:</span>
                            </div>
                            <div className={classes.value}>
                                <Price
                                    currencyCode={get(data, "total.subtotal.currency", "USD")}
                                    value={get(data, "total.subtotal.value", 0)} />
                            </div>
                        </div>
                        <div className={classes.tableRow}>
                            <div className={classes.mark}>
                                <span>Shipping:</span>
                            </div>
                            <div className={classes.value}>
                                {isFreeShipping ? (
                                    "Free"
                                ) : (
                                    <Price
                                        currencyCode={get(data, "total.total_shipping.currency", "USD")}
                                        value={get(data, "total.total_shipping.value", 0)} />
                                )}
                            </div>
                        </div>
                        <div className={classes.tableRow}>
                            <div className={classes.mark}>
                                <span>Tax:</span>
                            </div>
                            <div className={classes.value}>
                                <Price
                                    currencyCode={get(data, "total.total_tax.currency", "USD")}
                                    value={get(data, "total.total_tax.value", 0)} />
                            </div>
                        </div>
                        <div className={classes.tableRow}>
                            <div className={classes.mark}>
                                <span>Total:</span>
                            </div>
                            <div className={classes.value}>
                                <Price
                                    currencyCode={get(data, "total.grand_total.currency", "USD")}
                                    value={get(data, "total.grand_total.value", 0)} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
})