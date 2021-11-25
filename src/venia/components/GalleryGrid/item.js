import React, { useCallback, useState } from 'react';
import { string, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import Price from '@magento/venia-ui/lib/components/Price';
import { UNCONSTRAINED_SIZE_KEY } from '@magento/peregrine/lib/talons/Image/useImage';
import { useGalleryItem } from '@magento/peregrine/lib/talons/Gallery/useGalleryItem';
import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';

import { useStyle } from '../../classify';
import Image from '../Image';
import productLabel from '../../../assets/labelSprite.png';
import defaultClasses from './item.css';

import { drop, includes, get } from 'lodash'
import AddItemsToCompareList from '../../../components/CompareListPage/addItemsToCompareList';
import WishlistPopup from '../../../components/WishList/wishlistPopup';

const style = {
    '--productLabel': `url("${productLabel}")`,
};

// The placeholder image is 4:5, so we should make sure to size our product
// images appropriately.
const IMAGE_WIDTH = 225;
const IMAGE_HEIGHT = 275;

// Gallery switches from two columns to three at 640px.
const IMAGE_WIDTHS = new Map()
    .set(640, IMAGE_WIDTH)
    .set(UNCONSTRAINED_SIZE_KEY, 840);

const ItemPlaceholder = ({ classes }) => (
    <div className={classes.root_pending}>
        <div className={classes.images_pending}>
            <Image
                alt="Placeholder for gallery item image"
                classes={{
                    image: classes.image_pending,
                    root: classes.imageContainer
                }}
                src={transparentPlaceholder}
            />
        </div>
        <div className={classes.name_pending} />
        <div className={classes.price_pending} />
    </div>
);

// TODO: remove temp image
// const getOriginalImage = (url) => {
//     if (includes(url, "/cache/")) {
//         const smallImageUrlArr = url.split("cache/")
//         const subUrl = drop(smallImageUrlArr[1].split("/")).join("/")
//         return smallImageUrlArr[0] + subUrl
//     } else {
//         return url
//     }
// }


const GalleryItem = props => {
    const { handleLinkClick, item, wishlistButtonProps } = useGalleryItem(
        props
    );
    const [showWishlistPopup, setShowWishlistPopup] = useState(false);

    const openWishlistPopup = useCallback(() => {
        setShowWishlistPopup(true)
    }, [setShowWishlistPopup])
    const closeWishlistPopup = useCallback(() => {
        setShowWishlistPopup(false)
    }, [setShowWishlistPopup])

    const classes = useStyle(defaultClasses, props.classes);

    if (!item) {
        return <ItemPlaceholder classes={classes} />;
    }

    const { id: itemId, name, price, small_image,
        url_suffix, url_rewrites,
    } = item;
    const { url: smallImageURL } = small_image;
    console.log("🚀 ~ file: item.js ~ line 85 ~ smallImageURL", smallImageURL)
    // const originalUrl = getOriginalImage(smallImageURL)

    const productLink = resourceUrl(`/${get(url_rewrites[0], "url", "")}${url_suffix || ""}`);

    return (
        <div className={classes.root}>
            <div className={classes.itemInfoWrapper}>
                <div className={classes.itemImageContainer}>
                    <Link
                        onClick={handleLinkClick}
                        to={productLink}
                        className={classes.images}
                    >
                        <Image
                            alt={name}
                            classes={{
                                image: classes.image,
                                root: classes.imageContainer
                            }}
                            src={smallImageURL}
                            width={IMAGE_WIDTH}
                        />
                    </Link>
                </div>
                <div className={classes.itemDetails}>
                    <div className={classes.nameContainer}>
                        <Link
                            onClick={handleLinkClick}
                            to={productLink}
                            className={classes.name}
                        >
                            <span>{get(item, "product_name", "")}</span>
                        </Link>
                    </div>
                    <div className={classes.sku}>{get(item, "sku", "")}</div>
                    <div className={classes.price}>
                        <Price
                            value={price.regularPrice.amount.value}
                            currencyCode={price.regularPrice.amount.currency}
                        />
                        <span className={classes.unit}>{get(item, "uom", "")}</span>
                    </div>
                    <div className={classes.productInner}>
                        <div className={classes.productActions}>
                            <div className={classes.actionsContainer}>
                                <i className={classes.iconWrapper}>
                                    <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>cart</title>
                                        <path d="M12 29q0 1.25-0.875 2.125t-2.125 0.875-2.125-0.875-0.875-2.125 0.875-2.125 2.125-0.875 2.125 0.875 0.875 2.125zM32 29q0 1.25-0.875 2.125t-2.125 0.875-2.125-0.875-0.875-2.125 0.875-2.125 2.125-0.875 2.125 0.875 0.875 2.125zM32 16v-12h-24q0-0.844-0.578-1.422t-1.422-0.578h-6v2h4l1.5 12.875q-0.688 0.563-1.094 1.375t-0.406 1.75q0 1.656 1.172 2.828t2.828 1.172h24v-2h-24q-0.844 0-1.422-0.578t-0.578-1.422v0-0.031z"></path>
                                    </svg>
                                </i>
                            </div>
                            <div className={classes.actionsContainer} onClick={openWishlistPopup}>
                                <i className={classes.iconWrapper}>
                                    <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>wishlist-full</title>
                                        <path d="M23.594 2q-1.25 0-2.406 0.469t-2.141 1.25-1.766 1.781q-0.781 1.031-1.281 2.094-0.5-1.063-1.281-2.094-0.781-1-1.766-1.781t-2.141-1.25-2.406-0.469q-1.75 0-3.281 0.656t-2.672 1.797-1.797 2.672-0.656 3.281q0 3.531 1.594 5.969 1.594 2.469 3.984 4.688t5.172 4.656q2.813 2.406 5.25 5.906 2.313-3.469 5.094-5.938t5.203-4.719 4.078-4.688q1.625-2.469 1.625-5.875 0-1.75-0.656-3.281t-1.797-2.672-2.672-1.797-3.281-0.656z"></path>
                                    </svg>
                                </i>

                            </div>
                            <div className={classes.actionsContainer}>
                                <AddItemsToCompareList itemId={itemId} Child={() =>
                                    <i className={classes.iconWrapper}>
                                        <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="39" height="32" viewBox="0 0 39 32">
                                            <title>compare</title>
                                            <path d="M30.844 8.281l-6.844 12.563h13.719zM8 8.281l-6.844 12.563h13.688zM22.656 4.844q-0.25 0.75-0.813 1.297t-1.281 0.797v23.063h10.875q0.219 0 0.391 0.172t0.172 0.391v1.156q0 0.25-0.172 0.406t-0.391 0.156h-24q-0.25 0-0.422-0.156t-0.172-0.406v-1.156q0-0.219 0.172-0.391t0.422-0.172h10.844v-23.063q-0.719-0.25-1.281-0.797t-0.813-1.297h-8.75q-0.25 0-0.422-0.156t-0.172-0.406v-1.125q0-0.25 0.172-0.422t0.422-0.172h8.75q0.375-1 1.25-1.641t2-0.641 2 0.641 1.219 1.641h8.781q0.219 0 0.391 0.172t0.172 0.422v1.125q0 0.25-0.172 0.406t-0.391 0.156h-8.781zM19.438 5.156q0.594 0 1-0.422t0.406-1.016-0.406-1.016-1-0.422-1.016 0.422-0.422 1.016 0.422 1.016 1.016 0.422v0zM38.844 20.844q0 1.406-0.813 2.375-0.844 0.969-2.078 1.594t-2.609 0.906q-1.406 0.281-2.5 0.281-1.063 0-2.469-0.281-1.375-0.281-2.609-0.906t-2.078-1.594-0.844-2.375v0q0-0.25 1-2.125 1-1.906 2.234-4.172t2.359-4.266q1.125-2.031 1.406-2.563 0.156-0.25 0.438-0.406t0.563-0.156q0.313 0 0.594 0.156t0.406 0.406q0.313 0.531 1.438 2.563 1.125 2 2.359 4.266t2.234 4.172q0.969 1.875 0.969 2.125v0zM16 20.844q0 1.406-0.844 2.375t-2.063 1.594-2.625 0.906q-1.375 0.281-2.469 0.281t-2.469-0.281q-1.406-0.281-2.625-0.906t-2.063-1.594-0.844-2.375v0q0-0.25 1-2.125 0.969-1.906 2.203-4.172t2.391-4.266q1.125-2.031 1.406-2.563 0.156-0.25 0.422-0.406t0.578-0.156 0.578 0.156 0.422 0.406q0.281 0.531 1.406 2.563 1.156 2 2.391 4.266t2.203 4.172q1 1.875 1 2.125z"></path>
                                        </svg>
                                    </i>
                                }
                                    Loader={() => <div className={classes.actionsContainer}>Loading....</div>}
                                />
                            </div>
                            {showWishlistPopup &&
                                <>
                                    <WishlistPopup
                                        isPopupVisible={showWishlistPopup}
                                        productId={item.id}
                                        productQty={wishlistButtonProps.item.quantity}
                                        closeWishlistPopup={closeWishlistPopup} />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

GalleryItem.propTypes = {
    classes: shape({
        image: string,
        imageContainer: string,
        imagePlaceholder: string,
        image_pending: string,
        images: string,
        images_pending: string,
        name: string,
        name_pending: string,
        price: string,
        price_pending: string,
        root: string,
        root_pending: string
    }),
    item: shape({
        id: number.isRequired,
        name: string.isRequired,
        small_image: shape({
            url: string.isRequired
        }),
        url_key: string.isRequired,
        price: shape({
            regularPrice: shape({
                amount: shape({
                    value: number.isRequired,
                    currency: string.isRequired
                }).isRequired
            }).isRequired
        }).isRequired
    }),
    storeConfig: shape({
        magento_wishlist_general_is_enabled: string.isRequired
    })
};

export default GalleryItem;
