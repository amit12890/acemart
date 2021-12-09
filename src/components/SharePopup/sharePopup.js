import React from 'react';
import { useLocation } from 'react-router';

import { Portal } from '@magento/venia-ui/lib/components/Portal';
import Mask from '@magento/venia-ui/lib/components/Mask';
import Button from '../../venia/components/Button';
import Image from '../../venia/components/Image';

import iconFacebook from '../../assets/facebook.svg';
import iconTwitter from '../../assets/twitter.svg';
import iconPinterest from '../../assets/pinterest.svg';
import iconLinkedIn from '../../assets/linkedIn.svg';
import iconEmail from '../../assets/email.svg';

import { useStyle } from '../../venia/classify';
import defaultClasses from './sharePopup.css';

import { HOST_URL } from '../../url.utils';


const SharePopup = props => {
    const { closeSharePopup, productId, isPopupVisible } = props;
    let { productPath } = useLocation();
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <Mask isActive={isPopupVisible} dismiss={closeSharePopup} />
                <div className={classes.root}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.modalHeader}>
                            <div className={classes.modalClose}>
                                <Button onClick={closeSharePopup}>
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
                                Share This Item
                            </div>
                            <div className={classes.shareButtons}>
                                <div className={classes.shareItemWraper}>
                                    <div className={classes.shareItem}>
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${HOST_URL}${productPath}&quote=Ace%20Mart%20Restauant%20Supply`}
                                        className={classes.shareLink}>
                                            <Image
                                                src={iconFacebook}
                                                width="25"
                                            />
                                            <span>Share this on Facebook</span>
                                        </a>
                                    </div>

                                    <div className={classes.shareItem}>
                                        <a href="#" className={classes.shareLink}>
                                            <Image
                                                src={iconTwitter}
                                                width="25"
                                            />
                                            <span>Tweet this on Twitter</span>
                                        </a>
                                    </div>

                                    <div className={classes.shareItem}>
                                        <a href="#" className={classes.shareLink}>
                                            <Image
                                                src={iconPinterest}
                                                width="25"
                                            />
                                            <span>Pin this on Pinterest</span>
                                        </a>
                                    </div>

                                    <div className={classes.shareItem}>
                                        <a href="#" className={classes.shareLink}>
                                            <Image
                                                src={iconLinkedIn}
                                                width="25"
                                            />
                                            <span>Share it on LinkedIn</span>
                                        </a>
                                    </div>

                                    <div className={classes.shareItem}>
                                        <a href="#" className={classes.shareLink}>
                                            <Image
                                                src={iconEmail}
                                                width="25"
                                            />
                                            <span>Email This Information</span>
                                        </a>
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

export default SharePopup;
