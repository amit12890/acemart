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

    const content = useMemo(() => {
        switch (tab) {

            case "invoice":
                if (hasInvoice)
                    return (
                        <div className={classes.contentWrapper}>
                            Invoice Content here
                        </div>
                    );

            case "shipping":
                if (hasShipment)
                    return (
                        <div className={classes.contentWrapper}>
                            Shipping Content here
                        </div>
                    );
        
            default:
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
                <Link to={myOrderDetailsPage("view", id)}>
                    <div className={classes.tabs}>Items Ordered</div>
                </Link>
                {hasInvoice &&
                    <Link to={myOrderDetailsPage("invoice", id)}>
                        <div className={classes.tabs}>Invoices</div>
                    </Link>
                }
                {hasShipment &&
                    <Link to={myOrderDetailsPage("shipping", id)}>
                        <div className={classes.tabs}>Order Shipments</div>
                    </Link>
                }
            </div>
            {content}
            <Button
                className={classes.printButton}
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
