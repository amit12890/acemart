import React from 'react';

import { Portal } from '@magento/venia-ui/lib/components/Portal';
import Mask from '@magento/venia-ui/lib/components/Mask';

import Image from '../../venia/components/Image';
import labelSale from '../../assets/sale.png';
import labelFreeShipping from '../../assets/free-shipping.png';
import labelonlinePrice from '../../assets/online-price.png';
import labelBulkSaving from '../../assets/bulk-savings.png';
import labelNewItem from '../../assets/new-item.png';
import labelStorePickup from '../../assets/store-pickup.png';
;

import Button from '../../venia/components/Button';
import { useStyle } from '../../venia/classify';

import defaultClasses from './labelsPopup.css';

const LabelsPopup = props => {
    const { closeLabelsPopup, productId, isPopupVisible } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <Mask isActive={isPopupVisible} dismiss={closeLabelsPopup} />
                <div className={classes.root}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.modalHeader}>
                            <div className={classes.modalClose}>
                                <Button onClick={closeLabelsPopup}>
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
                                Product Labels
                            </div>
                            <div className={classes.contentContainer}>
                                <div className={classes.labelInfoWrapper}>
                                    <div className={classes.labelItem}>
                                        <div className={classes.labelItemImage}>
                                            <Image
                                                alt="Sale"
                                                width="63"
                                                height="63"
                                                src={labelSale}
                                            />
                                        </div>
                                        <div className={classes.labelInfo}>
                                            <p><strong>On Sale</strong> – Item is currently on sale. This sale price may also be available in-stores.</p>
                                        </div>
                                    </div>

                                    <div className={classes.labelItem}>
                                        <div className={classes.labelItemImage}>
                                            <Image
                                                alt="Bulk Savings"
                                                width="63"
                                                height="63"
                                                src={labelBulkSaving}
                                            />
                                        </div>
                                        <div className={classes.labelInfo}>
                                            <p><strong>Bulk Savings</strong> – Item offers price discounts when purchased in specific quantities.</p>
                                        </div>
                                    </div>

                                    <div className={classes.labelItem}>
                                        <div className={classes.labelItemImage}>
                                            <Image
                                                alt="Free Shipping"
                                                width="63"
                                                height="63"
                                                src={labelFreeShipping}
                                            />
                                        </div>
                                        <div className={classes.labelInfo}>
                                            <p><strong>Free Shipping</strong> – Item qualifies for free Standard Shipping.</p>
                                        </div>
                                    </div>

                                    <div className={classes.labelItem}>
                                        <div className={classes.labelItemImage}>
                                            <Image
                                                alt="New Item"
                                                width="63"
                                                height="63"
                                                src={labelNewItem}
                                            />
                                        </div>
                                        <div className={classes.labelInfo}>
                                            <p><strong>New Item</strong> – Item has been recently added to our product catalog.</p>
                                        </div>
                                    </div>


                                    <div className={classes.labelItem}>
                                        <div className={classes.labelItemImage}>
                                            <Image
                                                alt="Online Price"
                                                width="63"
                                                height="63"
                                                src={labelonlinePrice}
                                            />
                                        </div>
                                        <div className={classes.labelInfo}>
                                            <p><strong>Online Price</strong> – Item features an online-only price. This price is not available in-stores.</p>
                                        </div>
                                    </div>

                                    <div className={classes.labelItem}>
                                        <div className={classes.labelItemImage}>
                                            <Image
                                                alt="Store Pickup"
                                                width="63"
                                                height="63"
                                                src={labelStorePickup}
                                            />
                                        </div>
                                        <div className={classes.labelInfo}>
                                            <p><strong>Store Pickup</strong> – Item is available for Store Pickup via either Ship to Store or Pickup at Store. Curbside Delivery also available.</p>
                                        </div>
                                    </div>







                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default LabelsPopup;
