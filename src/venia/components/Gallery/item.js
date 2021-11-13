import React, { useCallback, useState } from 'react';
import { string, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { drop, includes } from 'lodash';
import Price from '@magento/venia-ui/lib/components/Price';
import { UNCONSTRAINED_SIZE_KEY } from '@magento/peregrine/lib/talons/Image/useImage';
import { useGalleryItem } from '@magento/peregrine/lib/talons/Gallery/useGalleryItem';
import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';

import { useStyle } from '../../classify';
import Image from '../Image';
import defaultClasses from './item.css';
<<<<<<< HEAD
import WishlistGalleryButton from '@magento/venia-ui/lib/components/Wishlist/AddToListButton';
// import WishlistGalleryButton from '../Wishlist/AddToListButton';
import { drop, includes, get } from 'lodash'
=======
>>>>>>> b579ac2855d1be5661ecdb883f1523456a4d12be
import AddItemsToCompareList from '../../../components/CompareListPage/addItemsToCompareList';
import WishlistPopup from '../../../components/WishList/wishlistPopup';

// The placeholder image is 4:5, so we should make sure to size our product
// images appropriately.
const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 375;

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
            <Link
                onClick={handleLinkClick}
                to={productLink}
                className={classes.name}
            >
                <span>{get(item, "product_name", "")}</span>
                <div>{get(item, "sku", "")}</div>
                {productDimensions && (
                    <div>Dimensions: {productDimensions}</div>
                )}
                {productNote && (
                    <div>Product Note: {productNote}</div>
                )}
                {certifications && (
                    <div>Certifications: {certifications}</div>
                )}
                {capacity && (
                    <div>Capacity: {capacity}</div>
                )}
            </Link>
            <div className={classes.price}>
                <Price
                    value={price.regularPrice.amount.value}
                    currencyCode={price.regularPrice.amount.currency}
                />
                <span> /{get(item, "uom", "")}</span>
            </div>
            <div className={classes.actionsContainer} onClick={openWishlistPopup}>
                Add To Wishlist
            </div>
            <AddItemsToCompareList itemId={itemId}
                Child={() => <div className={classes.actionsContainer}>+ add To Compare</div>}
                Loader={() => <div className={classes.actionsContainer}>Loading....</div>}
            />
            {showWishlistPopup &&
                <WishlistPopup productId={item.id} productQty={wishlistButtonProps.item.quantity}
                    closeWishlistPopup={closeWishlistPopup} />
            }
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
