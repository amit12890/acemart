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

import { logoUrl, FRONT_END_HOST_URL } from '../../url.utils';

function objectToGetParams(object) {
    const params = Object.entries(object)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(
                    String(value)
                )}`
        );

    return params.length > 0 ? `?${params.join('&')}` : '';
}

const facebookLink = pathname => {
    const pdpUrl = `${FRONT_END_HOST_URL}${pathname}`;

    return (
        'https://www.facebook.com/sharer/sharer.php' +
        objectToGetParams({
            u: pdpUrl,
            quote: 'Ace Mart Restauant Supply'
        })
    );
};

const twitterLink = pathname => {
    const pdpUrl = `${FRONT_END_HOST_URL}${pathname}`;
    return (
        'https://twitter.com/share' +
        objectToGetParams({
            url: pdpUrl,
            text: 'Ace Mart Restauant Supply'
        })
    );
};

function linkedinLink(pathname) {
    const pdpUrl = `${FRONT_END_HOST_URL}${pathname}`;

    return (
        'https://linkedin.com/shareArticle' +
        objectToGetParams({
            url: pdpUrl,
            mini: 'true',
            title: 'Ace Mart Restauant Supply',
            summary: "Come check out Ace Mart Restaurant Supply",
            source: FRONT_END_HOST_URL
        })
    );
}

function pinterestLink(pathname, image) {
    const pdpUrl = `${FRONT_END_HOST_URL}${pathname}`;

    return (
        'https://pinterest.com/pin/create/button/' +
        objectToGetParams({
            url: pdpUrl,
            media: image ? image : logoUrl(),
            description: "Come check out Ace Mart Restaurant Supply",
        })
    );
}

const SharePopup = props => {
    const { closeSharePopup, productId, isPopupVisible, productMainImageUrl } = props;
    const { pathname } = useLocation();
    const classes = useStyle(defaultClasses, props.classes);
    const pdpUrl = `${FRONT_END_HOST_URL}${pathname}`;

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
                                        <a
                                            href={facebookLink(pathname)}
                                            target="_blank"
                                            title="Share on Facebook"
                                            className={classes.shareLink}
                                        >
                                            <Image
                                                src={iconFacebook}
                                                width="25"
                                            />
                                            <span>Share this on Facebook</span>
                                        </a>
                                    </div>

                                    <div className={classes.shareItem}>
                                        <a
                                            href={twitterLink(pathname)}
                                            target="_blank"
                                            title="Tweet"
                                            className={classes.shareLink}
                                        >
                                            <Image
                                                src={iconTwitter}
                                                width="25"
                                            />
                                            <span>Tweet this on Twitter</span>
                                        </a>
                                    </div>

                                    <div className={classes.shareItem}>
                                        <a
                                            href={pinterestLink(pathname, productMainImageUrl)}
                                            target="_blank"
                                            title="Pin it"
                                            className={classes.shareLink}
                                        >
                                            <Image
                                                src={iconPinterest}
                                                width="25"
                                            />
                                            <span>Pin this on Pinterest</span>
                                        </a>
                                    </div>

                                    <div className={classes.shareItem}>
                                        <a
                                            href={linkedinLink(pathname)}
                                            target="_blank"
                                            title="Share on LinkedIn"
                                            className={classes.shareLink}
                                        >
                                            <Image
                                                src={iconLinkedIn}
                                                width="25"
                                            />
                                            <span>Share it on LinkedIn</span>
                                        </a>
                                    </div>

                                    <div className={classes.shareItem}>
                                        <a
                                            href={`mailto:?subject=Ace%20Mart%20Restauant%20Supply&body=Come%20check%20out%20Ace%20Mart%20Restaurant%20Supply:${pdpUrl}`}
                                            target="_blank"
                                            title="Send email"
                                            className={classes.shareLink}
                                        >
                                            <Image src={iconEmail} width="25" />
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
