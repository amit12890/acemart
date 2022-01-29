import React from 'react';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import Mask from '@magento/venia-ui/lib/components/Mask';

import Button from '../Button';
import { useStyle } from '../../classify';
import defaultClasses from './californiaPopup.css';

export default function UnavailablePopup(props) {
    const { onClose, isPopupVisible } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <Mask
                    isActive={isPopupVisible}
                    dismiss={onClose}
                />
                <div className={classes.root}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.modalHeader}>
                            <div className={classes.modalClose}>
                                <Button onClick={onClose}>
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
                                Why can't I purchase this product for direct shipping?
                            </div>
                            <div className={[classes.stockAvailablityPopup, classes.stockAvailablityPopup].join(" ")}>
                                <p>Certain products, such as hazardous or bulky items, are difficult to ship safely and cost-effectively and thus cannot be
                                    ordered through our website. We can offer these products over the phone, but they are required to ship on a pallet via a
                                    freight carrier. Customers may purchase these items at one of our store locations in Texas for both convenience and savings
                                    on shipping costs.</p>
                                <p>Additionally, some products may be temporarily unavailable for purchase online during times of high demand to allow all of
                                    our customers an opportunity to purchase the item.</p>
                                <p>We are actively working on finding ways to offer these products for sale online in order to better serve you. We apologize
                                    for any inconvenience this may cause.</p>
                                <p>For additional information or to place an order over the phone, please contact Customer Service at <strong className={classes.linkBlue} >1-888-898-8079</strong>. Our representatives are available to assist you
                                    Monday through Friday <strong className={classes.linkRed}>7:30am - 5:30pm CST</strong>. Thanks for being an Ace
                                    Mart customer!</p>
                                <p><strong className={classes.linkBlue}>Customer Service 1-888-898-8079</strong></p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}
