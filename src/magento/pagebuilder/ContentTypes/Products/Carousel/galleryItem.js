import React, { useMemo } from 'react';
import { string, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import Price from '../../../../../venia/components/Price';
import { UNCONSTRAINED_SIZE_KEY } from '@magento/peregrine/lib/talons/Image/useImage';
import { useGalleryItem } from '@magento/peregrine/lib/talons/Gallery/useGalleryItem';
import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';
import resourceUrl from '../../../../peregrine/makeUrl';

import { useStyle } from '@magento/venia-ui/lib/classify';
// import productLabel from '../../assets/labelSprite.png';
import productLabel from '../../../../../assets/labelSprite.png';
import Image from '../../../../../venia/components/Image';
import defaultClasses from './gallaryItem.css';
import WishlistGalleryButton from '@magento/venia-ui/lib/components/Wishlist/AddToListButton';
import { drop, includes, camelCase, size, filter, orderBy, get } from 'lodash'
import { replaceSpecialChars } from '../../../../../app.utils';


const style = {
    '--productLabel': `url("${productLabel}")`,
};

// The placeholder image is 4:5, so we should make sure to size our product
// images appropriately.
const IMAGE_WIDTH = 200;
const IMAGE_HEIGHT = 200;

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
    const classes = useStyle(defaultClasses, props.classes);

    if (!item) {
        return <ItemPlaceholder classes={classes} />;
    }

    const { name, price, sku, productLabel, small_image, url_key, url_suffix, uom, url_rewrites } = item;

    if (size(url_rewrites) === 0) {
        console.log("url reqrite emoty =>>", sku)
    }
    const { url: smallImageURL } = small_image;
    // OLD CODE
    // const productLink = resourceUrl(`/${url_key}${url_suffix || ''}`);
    // for acemart specifct url rewrite for product
    const productLink = resourceUrl(`/${get(url_rewrites[0], "url", "")}`)

    const processedProductLabels = useMemo(() => {
        let resultLabels = filter(productLabel.items, ["status", 1]);
        resultLabels = orderBy(resultLabels, ['priority'], ['asc']);
        return resultLabels
    }, [productLabel.items])

    const wishlistButton = wishlistButtonProps ? (
        <WishlistGalleryButton {...wishlistButtonProps} />
    ) : null;

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
                        // src={originalUrl}
                        src={smallImageURL}
                        widths={IMAGE_WIDTHS}
                    />
                </Link>
            </div>
            <Link
                onClick={handleLinkClick}
                to={productLink}
                className={classes.name}
            >
                <span>{replaceSpecialChars(name)}</span>
            </Link>
            <div className={classes.sku}>
                <span>{sku}</span>
            </div>

            <div className={[classes.price, "price-div"].join(" ")}>
                <Price
                    value={price.regularPrice.amount.value}
                    currencyCode={price.regularPrice.amount.currency}
                />
                <span className={classes.unit}>{uom}</span>
            </div>

            {!!productLabel.totalCount &&
                <div className={classes.labelWrapper}>
                    {processedProductLabels.map((labelObj) => {
                        return (
                            <div
                                className={[classes.labelItem, classes[camelCase(labelObj.labelname)]].join(" ")}
                                style={style}>
                                <span>{camelCase(labelObj.labelname)}</span>
                            </div>
                        )
                    })}
                </div>
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
