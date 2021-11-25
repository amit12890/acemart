import React from 'react';

import { Portal } from '@magento/venia-ui/lib/components/Portal';

import Image from '../../venia/components/Image';

import mapImage from '../../assets/map.jpg';

import Button from '../../venia/components/Button';
import { useStyle } from '../../venia/classify';

import Mask from '@magento/venia-ui/lib/components/Mask';
import { Link } from 'react-router-dom';
import defaultClasses from './storeLocator.css';

const StoreLocator = props => {
    const { closeStoreLocatorPopup, productId, isPopupVisible } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <Mask isActive={isPopupVisible} dismiss={closeStoreLocatorPopup} />
                <div className={classes.root}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.modalHeader}>
                            <div className={classes.modalClose}>
                                <Button onClick={closeStoreLocatorPopup}>
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
                                Check A Different Store
                            </div>

                            <div className={classes.contentContainer}>
                                <div className={classes.tabsContainer}>
                                    <div className={[classes.tabsItem, classes.tabArea, classes.active].join(" ")}>
                                        <Link className={classes.itemSwitch}>
                                            <div className={classes.switchContent}>
                                                <span className={classes.tabLabel}>Area</span>
                                                <span className={classes.tabValue}>Austin</span>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className={[classes.tabsItem, classes.tabStore].join(" ")}>
                                        <Link className={classes.itemSwitch}>
                                            <div className={classes.switchContent}>
                                                <span className={classes.tabLabel}>Store</span>
                                                <span className={classes.tabValue}>South Austin</span>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className={[classes.tabsItem, classes.tabStock].join(" ")}>
                                        <Link className={classes.itemSwitch}>
                                            <div className={classes.switchContent}>
                                                <span className={classes.tabLabel}>in Stock</span>
                                                <span className={classes.tabValue}>11</span>
                                            </div>
                                        </Link>
                                    </div>

                                </div>

                                <div className={classes.tabsContent}>
                                    <div className={[classes.tabsItemContent, classes.tabContentArea].join(" ")}>
                                        <div className={[classes.instructions, classes.storeInfo].join(" ")}>
                                            <p>First, select an area to pick a store and check stock.</p>
                                        </div>
                                        <div className={classes.areas}>
                                            <div className={classes.areaSwitcher}>
                                                <span>Austin</span>
                                            </div>

                                            <div className={classes.areaSwitcher}>
                                                <span>Austin</span>
                                            </div>

                                            <div className={classes.areaSwitcher}>
                                                <span>Austin</span>
                                            </div>

                                            <div className={classes.areaSwitcher}>
                                                <span>Austin</span>
                                            </div>

                                        </div>
                                    </div>


                                    <div className={[classes.tabsItemContent, classes.tabContentStore].join(" ")}>
                                        <div className={[classes.instructions, classes.storeInfo].join(" ")}>
                                            <p>Now select a store.</p>
                                        </div>
                                        <div className={classes.selectStoreWrapper}>
                                            <div className={classes.mapContainer}>
                                                <Image src={mapImage} />
                                            </div>

                                            <div className={classes.storeListContainer}>
                                                <div className={classes.listItem}>
                                                    <div className={classes.listLabel}><span>A</span></div>
                                                    <div className={classes.storeAddressWrapper}>
                                                        <h4 className={classes.storeName}>North Austin</h4>
                                                        <div className={classes.storeAddress}>
                                                            <p>9411 N Lamar Blvd, Ste 200</p>
                                                            <p>Austin, TX 78753</p>
                                                        </div>
                                                        <div className={classes.stockInfo}>
                                                            <span className={classes.stockLabel}>Qty.</span>
                                                            <strong className={classes.stockvalue}>10</strong>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className={classes.listItem}>
                                                    <div className={classes.listLabel}><span>A</span></div>
                                                    <div className={classes.storeAddressWrapper}>
                                                        <h4 className={classes.storeName}>South Austin</h4>
                                                        <div className={classes.storeAddress}>
                                                            <p>9411 N Lamar Blvd, Ste 200</p>
                                                            <p>Austin, TX 78753</p>
                                                        </div>
                                                        <div className={classes.stockInfo}>
                                                            <span className={classes.stockLabel}>Qty.</span>
                                                            <strong className={classes.stockvalue}>10</strong>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className={[classes.tabsItemContent, classes.tabContentStock].join(" ")}>
                                        <div className={[classes.instructions, classes.stockInfo].join(" ")}>
                                            <p className={classes.qtyInfo}><strong><span>11</span> in stock at this Location</strong></p>
                                            <p className={classes.callInfo}>Call <a href="tel:5124828700">512-482-8700</a> to verify stock</p>
                                        </div>
                                        <div className={classes.stocks}>
                                            <div className={classes.storeAddressHours}>
                                                <div className={classes.storeAddressWrapper}>
                                                    <div className={classes.storeAddress}>
                                                        <p>9411 N Lamar Blvd, Ste 200</p>
                                                        <p>Austin, TX 78753</p>
                                                    </div>
                                                    <div className={classes.storeDirection}>
                                                        <a href="#" target="_blank">
                                                            <i className={classes.iconWrapper}>
                                                                <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32">
                                                                    <title>car</title>
                                                                    <path d="M8.563 19.719q0-1.188-0.828-2.031t-2.016-0.844-2.031 0.844-0.844 2.031 0.844 2.016 2.031 0.828 2.016-0.828 0.828-2.016zM9.219 14h18.125l-1.563-6.375q-0.063-0.156-0.266-0.313t-0.359-0.156h-13.719q-0.156 0-0.375 0.156t-0.25 0.313zM33.719 19.719q0-1.188-0.844-2.031t-2.031-0.844q-1.156 0-2 0.844t-0.844 2.031 0.844 2.016 2 0.828q1.188 0 2.031-0.828t0.844-2.016zM36.563 18v6.844q0 0.25-0.156 0.422t-0.406 0.172h-1.719v2.281q0 1.406-1 2.422t-2.438 1.016q-1.406 0-2.406-1.016t-1-2.422v-2.281h-18.281v2.281q0 1.406-1.016 2.422t-2.422 1.016q-1.438 0-2.438-1.016t-1-2.422v-2.281h-1.719q-0.219 0-0.391-0.172t-0.172-0.422v-6.844q0-1.656 1.172-2.828t2.828-1.172h0.5l1.875-7.469q0.406-1.688 1.859-2.828t3.203-1.141h13.719q1.719 0 3.172 1.141t1.859 2.828l1.875 7.469h0.5q1.656 0 2.828 1.172t1.172 2.828v0z"></path>
                                                                </svg>
                                                            </i>


                                                            Driving Directions

                                                        </a>
                                                    </div>

                                                </div>
                                                <div className={classes.storeHours}>
                                                    <p>Mon-Fri 8:30 am to 5:30 pm </p>
                                                    <p>Sat 9:00 am to 2:00 pm </p>
                                                    <p>Sun closed </p>
                                                </div>
                                            </div>
                                            <div className={classes.shopStore}>
                                                <a href="#"><span>Shop This Store</span></a>
                                            </div>
                                            <div className={classes.storeNotes}>
                                                <p>*All products are sold on a first come, first served basis for in-store purchase and pickup only </p>
                                                <p>Quantities are subject to change without notice. Product availability is not guaranteed. We highly recommend that you call to verify the information shown above before visiting the store.</p>
                                            </div>


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

export default StoreLocator;
