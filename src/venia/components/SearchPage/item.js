import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { size, split, camelCase, unescape } from 'lodash-es';

import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';
import Price from '../Price';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { UNCONSTRAINED_SIZE_KEY } from '@magento/peregrine/lib/talons/Image/useImage';

import RichText from '../RichText';
import Image from '../Image';
import RatingMini from '../../../@amasty/components/Rating/rating_mini';
import AddItemsToCompareList from '../../../components/CompareListPage/addItemsToCompareList';
import WishlistPopup from '../../../components/WishList/wishlistPopup';
import LoadingButtonSmall from '../../../components/LoadingButtonSmall';

import productLabelImage from '../../../assets/labelSprite.png';
import defaultClasses from './item.css';

const style = {
    '--productLabel': `url("${productLabelImage}")`
};

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

export default function Item(props) {
    const classes = useStyle(defaultClasses, props.classes);

    if (!props.item) {
        return <ItemPlaceholder classes={classes} />;
    }

    const {
        name,
        sku,
        bulletpoints,
        price,
        uom,
        baseless_url,
        stickers,
        imageUrl,
        num_reviews,
        rating,
        uid,
        mage2_id
    } = props.item;
    const productLink = baseless_url ? `/${baseless_url}` : '#';

    const showReviewBlock = !isNaN(Number(num_reviews));

    const [showWishlistPopup, setShowWishlistPopup] = useState(false);

    const openWishlistPopup = useCallback((e) => {
        setShowWishlistPopup(true);
    }, []);

    const closeWishlistPopup = useCallback((e) => {
        setShowWishlistPopup(false);
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.itemImageContainer}>
                <Link to={productLink} className={classes.images}>
                    <Image
                        alt={name}
                        classes={{
                            image: classes.image,
                            root: classes.imageContainer
                        }}
                        height={IMAGE_HEIGHT}
                        src={imageUrl}
                        widths={IMAGE_WIDTHS}
                    />
                </Link>
            </div>
            <div className={classes.itemDetails}>
                <div className={classes.nameContainer}>
                    <Link
                        to={productLink}
                        className={classes.name}
                    >
                        <RichText content={unescape(name)} />
                    </Link>
                </div>
                <div className={classes.sku}>{sku}</div>
                {showReviewBlock && (
                    <div>
                        <RatingMini
                            percent={rating}
                            value={Number(num_reviews)}
                            addReviewLink={
                                <Link to={productLink}>
                                    <span>add your review</span>
                                </Link>
                            }
                        />
                    </div>
                )}
                <div className={classes.productInner}>

                    <div className={classes.productOptionsWrapper}>
                        {bulletpoints.map((points, ind) => {
                            const [title, content] = split(points, ':');
                            return (
                                <div className={classes.productOptions} key={ind}>
                                    <strong className={[classes.col, classes.label].join(" ")}>
                                        {title}
                                    </strong>
                                    <div className={[classes.col, classes.data].join(" ")}>
                                        <RichText content={content} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                </div>
            </div>
            <div className={classes.itemActions}>
                <div className={classes.price}>
                    <Price
                        currencyCode={'USD'}
                        value={price}
                        classes={{
                            currency: classes.currency
                        }}
                    />
                    <span className={classes.unit}>{uom}</span>
                </div>
                <div className={classes.productActions}>
                    <Link to={productLink}>
                        <div className={classes.viewMore}>
                            <span>View More</span>
                        </div>
                    </Link>

                    {size(stickers) && (
                        <div className={classes.labelWrapper}>
                            {stickers.map((sticker, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={[
                                            classes.labelItem,
                                            classes[camelCase(sticker)]
                                        ].join(' ')}
                                        style={style}
                                    >
                                        <span>{camelCase(sticker)}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <div className={classes.actionsContainer}>
                        <div className={classes.addTo} onClick={openWishlistPopup}>
                            <div className={classes.addToWarapper}>
                                <i className={classes.iconWrapper}>
                                    <svg
                                        className={[classes.svgIcon, classes.iconWishlist].join(" ")}
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                    >
                                        <title>wishlist-full</title>
                                        <path d="M23.594 2q-1.25 0-2.406 0.469t-2.141 1.25-1.766 1.781q-0.781 1.031-1.281 2.094-0.5-1.063-1.281-2.094-0.781-1-1.766-1.781t-2.141-1.25-2.406-0.469q-1.75 0-3.281 0.656t-2.672 1.797-1.797 2.672-0.656 3.281q0 3.531 1.594 5.969 1.594 2.469 3.984 4.688t5.172 4.656q2.813 2.406 5.25 5.906 2.313-3.469 5.094-5.938t5.203-4.719 4.078-4.688q1.625-2.469 1.625-5.875 0-1.75-0.656-3.281t-1.797-2.672-2.672-1.797-3.281-0.656z" />
                                    </svg>
                                </i>
                                <span className={classes.addToLabel}>Add to Wishlist</span>
                            </div>
                        </div>

                        <div className={classes.addTo}>
                            <AddItemsToCompareList
                                itemId={mage2_id}
                                Child={() => (
                                    <div className={classes.addToWarapper}>
                                        <i className={classes.iconWrapper}>
                                            <svg
                                                className={classes.svgIcon}
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="39"
                                                height="32"
                                                viewBox="0 0 39 32"
                                            >
                                                <title>compare</title>
                                                <path d="M30.844 8.281l-6.844 12.563h13.719zM8 8.281l-6.844 12.563h13.688zM22.656 4.844q-0.25 0.75-0.813 1.297t-1.281 0.797v23.063h10.875q0.219 0 0.391 0.172t0.172 0.391v1.156q0 0.25-0.172 0.406t-0.391 0.156h-24q-0.25 0-0.422-0.156t-0.172-0.406v-1.156q0-0.219 0.172-0.391t0.422-0.172h10.844v-23.063q-0.719-0.25-1.281-0.797t-0.813-1.297h-8.75q-0.25 0-0.422-0.156t-0.172-0.406v-1.125q0-0.25 0.172-0.422t0.422-0.172h8.75q0.375-1 1.25-1.641t2-0.641 2 0.641 1.219 1.641h8.781q0.219 0 0.391 0.172t0.172 0.422v1.125q0 0.25-0.172 0.406t-0.391 0.156h-8.781zM19.438 5.156q0.594 0 1-0.422t0.406-1.016-0.406-1.016-1-0.422-1.016 0.422-0.422 1.016 0.422 1.016 1.016 0.422v0zM38.844 20.844q0 1.406-0.813 2.375-0.844 0.969-2.078 1.594t-2.609 0.906q-1.406 0.281-2.5 0.281-1.063 0-2.469-0.281-1.375-0.281-2.609-0.906t-2.078-1.594-0.844-2.375v0q0-0.25 1-2.125 1-1.906 2.234-4.172t2.359-4.266q1.125-2.031 1.406-2.563 0.156-0.25 0.438-0.406t0.563-0.156q0.313 0 0.594 0.156t0.406 0.406q0.313 0.531 1.438 2.563 1.125 2 2.359 4.266t2.234 4.172q0.969 1.875 0.969 2.125v0zM16 20.844q0 1.406-0.844 2.375t-2.063 1.594-2.625 0.906q-1.375 0.281-2.469 0.281t-2.469-0.281q-1.406-0.281-2.625-0.906t-2.063-1.594-0.844-2.375v0q0-0.25 1-2.125 0.969-1.906 2.203-4.172t2.391-4.266q1.125-2.031 1.406-2.563 0.156-0.25 0.422-0.406t0.578-0.156 0.578 0.156 0.422 0.406q0.281 0.531 1.406 2.563 1.156 2 2.391 4.266t2.203 4.172q1 1.875 1 2.125z" />
                                            </svg>
                                        </i>
                                        <span className={classes.addToLabel}>Add to Compare</span>
                                    </div>
                                )}
                                Loader={() => <LoadingButtonSmall />}
                            />
                        </div>
                        {showWishlistPopup && (
                            <WishlistPopup
                                isPopupVisible={showWishlistPopup}
                                productId={mage2_id}
                                productQty={1}
                                productName={name}
                                closeWishlistPopup={closeWishlistPopup}
                            />
                        )}
                    </div>


                </div>

            </div>
        </div>
    );
}
