import React from 'react';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import Mask from '@magento/venia-ui/lib/components/Mask';

import Button from '../Button';
import { useStyle } from '../../classify';
import defaultClasses from './californiaPopup.css';

export default function UnavailablePopup(props) {
    const { closeUnavailablePopup, isPopupVisible } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <Mask
                    isActive={isPopupVisible}
                    dismiss={closeUnavailablePopup}
                />
                <div className={classes.root}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.modalHeader}>
                            <div className={classes.modalClose}>
                                <Button onClick={closeUnavailablePopup}>
                                    <i className={classes.iconWrapper}>
                                        <svg
                                            className={classes.svgIcon}
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                        >
                                            <title>remove</title>
                                            <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z" />
                                        </svg>
                                    </i>
                                </Button>
                            </div>
                        </div>
                        <div className={classes.content}>
                            <div className={classes.heading}>
                                Why can't I purchase this product for store
                                pickup?
                            </div>
                            <div className={classes.contentContainer}>
                                <div className={classes.propContent}>
                                    <p>
                                        Special order items that are
                                        drop-shipped from the factory directly
                                        to your address are not currently
                                        eligible for store pickup. Because there
                                        is an additional cost that factories
                                        charge in order to ship these products
                                        direct, we cannot at this time offer
                                        these items for FREE store pickup.
                                    </p>
                                    <p>
                                        We still offer these products for sale
                                        online, and can ship them direct to your
                                        location for a minimal shipping fee.
                                        Additional delivery options are also
                                        available on items that ship LTL Freight
                                        from the manufacturer, and you can
                                        select from these options during
                                        checkout.
                                    </p>
                                    <p>
                                        To purchase this item for direct
                                        shipment, simply change your store to
                                        Acemart.com.
                                    </p>
                                    <p>
                                        For additional information or to place
                                        an order over the phone, please contact
                                        Customer Service at 1-888-898-8079. Our
                                        representatives are available to assist
                                        you Monday through Friday 7:30am -
                                        5:30pm CST. Thanks for being an Ace Mart
                                        customer!
                                    </p>
                                    <p>Customer Service 1-888-898-8079</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}
