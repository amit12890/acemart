import React, { useMemo } from 'react';
import { shape, string, arrayOf, number } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Printer } from 'react-feather';
import { useStyle } from '@magento/venia-ui/lib/classify';

import BillingInformation from './billingInformation';
import Items from './items';
import PaymentMethod from './paymentMethod';
import ShippingInformation from './shippingInformation';
import ShippingMethod from './shippingMethod';
import OrderTotal from './orderTotal';
import Icon from '../../Icon';
import Button from '../../Button';

import defaultClasses from './orderDetails.css';
import { Link } from 'react-router-dom';
import { myOrderDetailsPage } from '../../../../url.utils';
import { size } from 'lodash-es';

const OrderDetails = props => {
    const { classes: propClasses, imagesData, tab, orderData } = props;
    const {
        id,
        billing_address,
        items,
        invoices,
        payment_methods,
        shipping_address,
        shipping_method,
        shipments,
        total
    } = orderData;
        console.log("🚀 ~ file: orderDetails.js ~ line 32 ~ shipments", shipments)
        console.log("🚀 ~ file: orderDetails.js ~ line 32 ~ invoices", invoices)

    const hasInvoice = !!invoices.length;
    const hasShipment = !!shipments.length;
    const classes = useStyle(defaultClasses, propClasses);

    const shippingMethodData = {
        shippingMethod: shipping_method,
        shipments
    };

    let activeTabIndex = 0
    const content = useMemo(() => {
        switch (tab) {
            case "invoice":
                if (hasInvoice) {
                        activeTabIndex = 1
                        return (
                            <div className={classes.contentWrapper}>
                                <div className={[classes.itemsContainer, classes.invoiceContainer].join(" ")}>
                                    <div className={classes.actionsToolbar}> 
                                        <Link className={classes.printLink}>
                                            <span>Print All Invoices</span>
                                        </Link>
                                    </div>
                                    <div className={classes.orderTitle}> 
                                        <strong>Invoice #000000003</strong>
                                        <Link className={classes.printLink}>
                                            <span>Print Invoices</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className={classes.orderTotalContainer}> 
                                    <OrderTotal data={total} />
                                </div>
                            </div>
                        );
                    }
            case "shipping":
                if (hasShipment) {
                    activeTabIndex = 2
                    return (
                        <div className={classes.contentWrapper}>

                        <div className={classes.itemsContainer}>
                                Shipping Content here
                        </div>

                            
                            <div className={classes.orderTotalContainer}> 
                            <OrderTotal data={total} />
                        </div>
                        </div>
                    );
                    }
            default: {
                activeTabIndex = 0
                return(
                    <div className={classes.contentWrapper}>
                        <div className={classes.itemsContainer}>
                            <Items data={{ imagesData, items }} />
                        </div>
                        <div className={classes.orderTotalContainer}>
                            <OrderTotal data={total} />
                        </div>
                    </div>
                )
            }
        }
    }, [tab, orderData])

    return (
        <div className={classes.root}>
            <div className={classes.shippingInformationContainer}>
                <ShippingInformation data={shipping_address} />
            </div>
            <div className={classes.shippingMethodContainer}>
                <ShippingMethod data={shippingMethodData} />
            </div>
            <div className={classes.billingInformationContainer}>
                <BillingInformation data={billing_address} />
            </div>
            <div className={classes.paymentMethodContainer}>
                <PaymentMethod data={payment_methods} />
            </div>

            <div className={classes.tabsContainer}>
                <div className={[classes.tabsItem,activeTabIndex === 0 ? classes.active : ""].join(" ")}>
                    <Link className={classes.itemSwitch} to={myOrderDetailsPage("view", id)}>
                        <div className={classes.tabs}>Items Ordered</div>
                    </Link>
                </div>
                <div className={[classes.tabsItem,activeTabIndex === 1 ? classes.active : ""].join(" ")}>
                {hasInvoice &&
                    <Link className={classes.itemSwitch} to={myOrderDetailsPage("invoice", id)}>
                        <div className={classes.tabs}>Invoices</div>
                    </Link>
                }
                </div>
                <div className={[classes.tabsItem,activeTabIndex === 2 ? classes.active : ""].join(" ")}>
                {hasShipment &&
                    <Link className={classes.itemSwitch} to={myOrderDetailsPage("shipping", id)}>
                        <div className={classes.tabs}>Order Shipments</div>
                    </Link>
                }
                </div>
            </div>
            {content}
            <div className={classes.buttons}>
                <Button
                    className={classes.printButton}
                    priority="high"
                    onClick={() => {
                        // TODO will be implemented in PWA-978
                        console.log('Printing Receipt');
                    }}
                >
                    <Icon src={Printer} />
                    <span className={classes.printLabel}>
                        <FormattedMessage
                            id="orderDetails.printLabel"
                            defaultMessage="Print Receipt"
                        />
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default OrderDetails;

OrderDetails.propTypes = {
    classes: shape({
        root: string,
        shippingInformationContainer: string,
        shippingMethodContainer: string,
        billingInformationContainer: string,
        paymentMethodContainer: string,
        itemsContainer: string,
        orderTotalContainer: string,
        printButton: string,
        printLabel: string
    }),
    imagesData: shape({
        id: number,
        sku: string,
        thumbnail: shape({
            url: string
        }),
        url_key: string,
        url_suffix: string
    }),
    orderData: shape({
        billing_address: shape({
            city: string,
            country_code: string,
            firstname: string,
            lastname: string,
            postcode: string,
            region_id: string,
            street: arrayOf(string)
        }),
        items: arrayOf(
            shape({
                id: string,
                product_name: string,
                product_sale_price: shape({
                    currency: string,
                    value: number
                }),
                product_sku: string,
                selected_options: arrayOf(
                    shape({
                        label: string,
                        value: string
                    })
                ),
                quantity_ordered: number
            })
        ),
        payment_methods: arrayOf(
            shape({
                type: string,
                additional_data: arrayOf(
                    shape({
                        name: string,
                        value: string
                    })
                )
            })
        ),
        shipping_address: shape({
            city: string,
            country_code: string,
            firstname: string,
            lastname: string,
            postcode: string,
            region_id: string,
            street: arrayOf(string),
            telephone: string
        }),
        shipping_method: string,
        shipments: arrayOf(
            shape({
                id: string,
                tracking: arrayOf(
                    shape({
                        carrier: string,
                        number: string
                    })
                )
            })
        ),
        total: shape({
            discounts: arrayOf(
                shape({
                    amount: shape({
                        currency: string,
                        value: number
                    })
                })
            ),
            grand_total: shape({
                currency: string,
                value: number
            }),
            subtotal: shape({
                currency: string,
                value: number
            }),
            total_tax: shape({
                currency: string,
                value: number
            }),
            total_shipping: shape({
                currency: string,
                value: number
            })
        })
    })
};
