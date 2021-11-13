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
import defaultClasses from './item.css';
import WishlistGalleryButton from '@magento/venia-ui/lib/components/Wishlist/AddToListButton';
// import WishlistGalleryButton from '../Wishlist/AddToListButton';
import { drop, includes, get } from 'lodash'
import AddItemsToCompareList from '../../../components/CompareListPage/addItemsToCompareList';
import WishlistPopup from '../../../components/WishList/wishlistPopup';

// The placeholder image is 4:5, so we should make sure to size our product
// images appropriately.
const IMAGE_WIDTH = 240;
const IMAGE_HEIGHT = 300;

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
const getOriginalImage = (url) => {
    if (includes(url, "/cache/")) {
        const smallImageUrlArr = url.split("cache/")
        const subUrl = drop(smallImageUrlArr[1].split("/")).join("/")
        return smallImageUrlArr[0] + subUrl
    } else {
        return url
    }
}


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

    const { id: itemId, name, price, small_image, url_key, url_suffix } = item;
    const { url: smallImageURL } = small_image;
    const originalUrl = getOriginalImage(smallImageURL)

    const productLink = resourceUrl(`/${url_key}${url_suffix || ''}`);
    const productDimensions = get(item, "prod_dimensions", false)
    const productNote = get(item, "prod_note", false)
    const certifications = get(item, "certifications", false)
    const capacity = get(item, "capacity", false)

    return (
        <div className={classes.root}>
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
                        height={IMAGE_HEIGHT}
                        src={originalUrl}
                        // resource={smallImageURL}
                        widths={IMAGE_WIDTHS}
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
                        <div className={classes.viewMore}>
                            <Link
                                onClick={handleLinkClick}
                                to={productLink}
                            >
                                <span>View More</span>
                            </Link>
                        </div>
                        <div className={classes.actionsContainer} onClick={openWishlistPopup}>
                            <i className={classes.iconWrapper}>
                                <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                    <title>back</title>
                                    <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                                </svg>
                            </i>

                        </div>
                        <AddItemsToCompareList itemId={itemId}
                            Child={() => <div className={classes.actionsContainer}>
                                <i className={classes.iconWrapper}>
                                    <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                        <title>back</title>
                                        <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                                    </svg>
                                </i>


                            </div>}
                            Loader={() => <div className={classes.actionsContainer}>Loading....</div>}
                        />
                        {showWishlistPopup &&
                            <WishlistPopup productId={item.id} productQty={wishlistButtonProps.item.quantity}
                                closeWishlistPopup={closeWishlistPopup} />
                        }
                    </div>

                    <div className={classes.description}>
                        {productDimensions && (
                            <div className={classes.productOptions}>
                                <strong>Dimensions:</strong>
                                {productDimensions}
                            </div>
                        )}
                        {productNote && (
                            <div className={classes.productOptions}>
                                <strong>Product Note:</strong>
                                {productNote}
                            </div>
                        )}
                        {certifications && (
                            <div className={classes.productOptions}>
                                <strong>Certifications:</strong>
                                {certifications}
                            </div>
                        )}
                        {capacity && (
                            <div className={classes.productOptions}>
                                <strong>Capacity:</strong>
                                {capacity}
                            </div>
                        )}

                    </div>

                </div>


            </div>
        </div >
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
