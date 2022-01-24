import React, { useEffect } from 'react'

import { find, get, includes, size, toLower } from 'lodash'

import { useCheckoutSuccess } from '../../../../data/checkout/hooks/checkout.hook'
import BarCode from 'react-barcode'
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator'
import Price from '../../../../venia/components/Price'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { useStyle } from '@magento/venia-ui/lib/classify'
import defaultClasses from './checkoutOrder.css'
import { replaceSpecialChars, textToBase64Barcode } from '../../../../app.utils'


export default React.memo(({ orderNumber, onCheckoutOrderFetched, classes: propsClasses, onEmailChange, isDefaultStore }) => {
    const classes = useStyle(propsClasses, defaultClasses)
    const { fetchCheckoutSuccess, data, checkoutSuccessFetching, handleUploadBarCode, productData } = useCheckoutSuccess()

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

    // in ref website storepickup flag added like this
    const isStorePickup = includes(toLower(get(data, "shipping_method", "")), "storepickup")
    const incrementId = get(data, "increment_id", "")

    // only if its store pick then generate barcode to base64 and upload to server
    useEffect(() => {
        if (size(incrementId) > 0 && isStorePickup) {
            const base64 = textToBase64Barcode(orderNumber)
            handleUploadBarCode(base64, orderNumber)
        }
    }, [incrementId, isStorePickup])

    const pickupDate = get(data, "pickup_datetime", null)
    const billingInfo = get(data, "billing_address", {})
    const shippingInfo = get(data, "shipping_address", {})
    const storeInformation = get(data, "store_information", {})
    const items = get(data, "items", [])
    const billingStreet = get(billingInfo, "street", [])

    const shipping = get(data, "total.total_shipping.value", 0)
    const isFreeShipping = shipping == 0

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
                    {!!pickupDate && isStorePickup && (
                        <div className={classes.estimateddate}><strong>Estimated Pickup date: </strong>{pickupDate}</div>
                    )}
                </div>
                {isStorePickup && (
                    <div className={classes.panelRight}>
                        <div className={classes.barcodeWrapper}>
                            <BarCode
                                value={incrementId}
                                height={30}
                                width={1}
                                fontSize={16} />
                        </div>
                    </div>
                )}
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
                                <span>{get(billingInfo, "city", "")}, {get(billingInfo, "region", "")}  {get(billingInfo, "postcode", "")}</span>
                            </div>
                            <div className={classes.telephone}>
                                {get(billingInfo, "telephone", "")}
                            </div>
                        </div>
                    </div>

                    {isStorePickup ? (
                        <StorePickupInformation store_information={storeInformation} classes={classes} />
                    ) : (
                        <ShippingInformation shippingInfo={shippingInfo} classes={classes} />
                    )}
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
                        let moreProductInfo = {}
                        if (size(productData) > 0) {
                            moreProductInfo = find(productData, ["sku", item.product_sku])
                        }
                        return (
                            <ProductItem
                                moreProductInfo={moreProductInfo}
                                item={item}
                                key={item.id}
                                classes={classes} />
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

const ShippingInformation = ({ shippingInfo, classes }) => {
    const shippingStreet = get(shippingInfo, "street", [])
    return (
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
    )
}

const StorePickupInformation = ({ store_information, classes }) => {
    return (
        <div className={[classes.block, classes.shipping].join(" ")}>
            <div className={classes.blockTitle}>
                Store Pickup information
            </div>
            <div className={classes.blockContent}>
                <div className={classes.name}>
                    {get(store_information, "store_name", "")}
                </div>
                <div className={classes.street}>
                    {get(store_information, "street", '')}
                </div>
                <div className={classes.city}>
                    <span>{get(store_information, "city", "")}, {get(store_information, "state", "")}  {get(store_information, "postcode", "")}</span>
                </div>
                <div className={classes.telephone}>
                    {get(store_information, "telephone", "")}
                </div>
            </div>
        </div>
    )
}

const ProductItem = ({ item, moreProductInfo, classes }) => {
    const thumbnailUrl = get(moreProductInfo, "thumbnail.url", "")
    return (
        <div className={classes.tablebody}>
            {size(thumbnailUrl) > 0 && (
                <div className={classes.imageWrapper}>
                    <img src={thumbnailUrl} />
                </div>
            )}
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
}