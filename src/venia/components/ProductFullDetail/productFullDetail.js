import React, { Fragment, Suspense, useState, useCallback, useMemo, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { arrayOf, bool, number, shape, string } from 'prop-types';
import { Form } from 'informed';
import { Info } from 'react-feather';
import { get, size, filter, orderBy, camelCase } from 'lodash';
import { Link, useHistory } from 'react-router-dom';

import Price from '../Price';
import FormError from '@magento/venia-ui/lib/components/FormError';
import { useProductFullDetail } from "../../../magento/peregrine/talons/ProductFullDetail/useProductFullDetail";
import { isProductConfigurable } from '@magento/peregrine/lib/util/isProductConfigurable';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { QuantityFields } from './quantity';

import { useStyle } from '../../classify';
import productLabel from '../../../assets/labelSprite.png';
import Breadcrumbs from '../Breadcrumbs';
import Button from '../Button';
import RichText from '../RichText';
import WishlistPopup from '../../../components/WishList/wishlistPopup';
import AddItemsToCompareList from '../../../components/CompareListPage/addItemsToCompareList';
import GalleryGrid from '../GalleryGrid';
import Carousel from '../ProductImageCarousel';
import SharePopup from '../../../components/SharePopup';
import LabelsPopup from '../../../components/LabelsPopup';

import Image from '../Image';
import smallWarning from '../../../assets/small_warning.png';

import { productSpecsheetUrl, productSpecsheetLogoUrl, loginPage } from '../../../url.utils';
import defaultClasses from './productFullDetail.css';
import StoreLocator from '../../../components/StoreLocator';
import ProductReview from "../../../@amasty/amAdvancedReviews"
import RatingMini from "../../../@amasty/components/Rating/rating_mini"
import RelatedPosts from './relatedPosts';
import ProductQuestions from '../../../components/ProductQuestions';
import CaliforniaPopup from "./californiaPopup"
import LoadingButton from '../../../components/LoadingButton';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useWishlistSession } from '../../../data/appState/appState.hook';
import { toLower } from 'lodash-es';
import { useStoreSwitcher } from '@magento/peregrine/lib/talons/Header/useStoreSwitcher';

const style = {
    '--productLabel': `url("${productLabel}")`
};

const Options = React.lazy(() => import('../ProductOptions'));

// Correlate a GQL error message to a field. GQL could return a longer error
// string but it may contain contextual info such as product id. We can use
// parts of the string to check for which field to apply the error.
const ERROR_MESSAGE_TO_FIELD_MAPPING = {
    'The requested qty is not available': 'quantity',
    'Product that you are trying to add is not available.': 'quantity',
    "The product that was requested doesn't exist.": 'quantity'
};

// Field level error messages for rendering.
const ERROR_FIELD_TO_MESSAGE_MAPPING = {
    quantity: 'The requested quantity is not available.'
};

const ProductFullDetail = props => {
    const { product } = props;

    const { id, pos_stock_manage, only_x_left_in_stock,
        mpn, uom, productLabel, media_gallery
    } = product;

    const history = useHistory()
    const [{ isSignedIn }] = useUserContext()
    const { addProductToWishlistSession } = useWishlistSession()
    const [showWishlistPopup, setShowWishlistPopup] = useState(false);
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [showStoreLocatorPopup, setStoreLocatorPopup] = useState(false)
    const [showLabelsPopup, setLabelsPopup] = useState(false)
    const [showCaliforniaPopup, setCaliforniaPopup] = useState(false)

    const reviewRef = useRef(null)

    const { handleSwitchStore } = useStoreSwitcher()
    const talonProps = useProductFullDetail({ product });

    // handlers for wishlist popup
    const openWishlistPopup = useCallback(() => {
        if (isSignedIn) {
            setShowWishlistPopup(true)
        } else {
            history.push(loginPage())
            addProductToWishlistSession(product)
        }
    }, [setShowWishlistPopup, isSignedIn, product, addProductToWishlistSession]);
    const closeWishlistPopup = useCallback(() => {
        setShowWishlistPopup(false);
    }, [setShowWishlistPopup]);

    // handlers for share popup
    const openSharePopup = useCallback(() => {
        setShowSharePopup(true);
    }, [setShowSharePopup]);
    const closeSharePopup = useCallback(() => {
        setShowSharePopup(false);
    }, [setShowSharePopup]);

    // handlers for storelocator popup
    const openStoreLocatorPopup = useCallback(() => {
        setStoreLocatorPopup(true);
    }, [setStoreLocatorPopup]);

    const closeStoreLocatorPopup = useCallback(() => {
        setStoreLocatorPopup(false);
    }, [setStoreLocatorPopup]);

    // handlers for storelocator popup
    const openCaliforniaPopup = useCallback(() => {
        setCaliforniaPopup(true);
    }, [setCaliforniaPopup]);

    const closeCaliforniaPopup = useCallback(() => {
        setCaliforniaPopup(false);
    }, [setCaliforniaPopup]);

    // handlers for Labels popup
    const openLabelsPopup = useCallback(() => {
        setLabelsPopup(true);
    }, [setLabelsPopup]);

    const closeLabelsPopup = useCallback(() => {
        setLabelsPopup(false);
    }, [setLabelsPopup]);

    const handleFirstReviewClick = useCallback(() => {
        reviewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [reviewRef])

    const {
        breadcrumbCategoryId,
        errorMessage,
        handleAddToCart,
        handleSelectionChange,
        isAddToCartDisabled,
        isSupportedProductType,
        mediaGalleryEntries,
        productDetails,
        wishlistButtonProps
    } = talonProps;
    const { formatMessage } = useIntl();

    const classes = useStyle(defaultClasses, props.classes);

    const options = isProductConfigurable(product) ? (
        <Suspense fallback={fullPageLoadingIndicator}>
            <Options
                onSelectionChange={handleSelectionChange}
                options={product.configurable_options}
            />
        </Suspense>
    ) : null;

    const breadcrumbs = breadcrumbCategoryId ? (
        <Breadcrumbs
            categoryId={breadcrumbCategoryId}
            currentProduct={productDetails.name}
        />
    ) : null;

    const processedProductLabels = useMemo(() => {
        let resultLabels = filter(productLabel.items, ["status", 1]);
        resultLabels = orderBy(resultLabels, ['priority'], ['asc']);
        return resultLabels
    }, [productLabel.items])

    const additionalInformation = get(
        product,
        'additional_information.data',
        []
    );

    const moreInformation = get(
        product,
        'more_information.data',
        []
    );

    const priceTiers = get(
        product,
        'price_tiers',
        []
    );

    // Fill a map with field/section -> error.
    const errors = new Map();
    if (errorMessage) {
        Object.keys(ERROR_MESSAGE_TO_FIELD_MAPPING).forEach(key => {
            if (errorMessage.includes(key)) {
                const target = ERROR_MESSAGE_TO_FIELD_MAPPING[key];
                const message = ERROR_FIELD_TO_MESSAGE_MAPPING[target];
                errors.set(target, message);
            }
        });

        // Handle cases where a user token is invalid or expired. Preferably
        // this would be handled elsewhere with an error code and not a string.
        if (errorMessage.includes('The current user cannot')) {
            errors.set('form', [
                new Error(
                    formatMessage({
                        id: 'productFullDetail.errorToken',
                        defaultMessage:
                            'There was a problem with your cart. Please sign in again and try adding the item once more.'
                    })
                )
            ]);
        }

        // Handle cases where a cart wasn't created properly.
        if (
            errorMessage.includes('Variable "$cartId" got invalid value null')
        ) {
            errors.set('form', [
                new Error(
                    formatMessage({
                        id: 'productFullDetail.errorCart',
                        defaultMessage:
                            'There was a problem with your cart. Please refresh the page and try adding the item once more.'
                    })
                )
            ]);
        }

        // An unknown error should still present a readable message.
        if (!errors.size) {
            errors.set('form', [
                new Error(
                    formatMessage({
                        id: 'productFullDetail.errorUnknown',
                        defaultMessage:
                            'Could not add item to cart. Please check required options and try again.'
                    })
                )
            ]);
        }
    }

    const cartActionContent = isSupportedProductType ? (
        <Button
            disabled={isAddToCartDisabled}
            priority="high"
            type="submit">
            <FormattedMessage
                id={'productFullDetail.cartAction'}
                defaultMessage={'Add to Cart'}
            />
        </Button>
    ) : (
        <div className={classes.unavailableContainer}>
            <Info />
            <p>
                <FormattedMessage
                    id={'productFullDetail.unavailableProduct'}
                    defaultMessage={
                        'This product is currently unavailable for purchase.'
                    }
                />
            </p>
        </div>
    );

    const upsellProducts = get(product, 'upsell_products', []);
    const relatedProducts = get(product, 'related_products', []);
    /**
    * render availablity of in grey porttion
    */
    const renderAvailability = useCallback(() => {
        const storeFinalLabel = get(pos_stock_manage, "stock_final_label", "")
        if (toLower(pos_stock_manage.stock_label) === "unavailable") {
            return (
                <div className={classes.piSectionRow}>
                    <div
                        className={classes.stockAvailability}
                        style={{ borderBottomWidth: 0 }}>
                        This item is unavailable for store pickup.&nbsp;
                        <span
                            className={classes.clickHere}
                            onClick={(e) => {
                                e.preventDefault()
                                handleSwitchStore("default")
                            }}>
                            Click here
                        </span>
                        &nbsp;to ship direct.
                    </div>
                </div>
            )
        } else if (size(storeFinalLabel) > 0) {
            return (
                <div className={classes.piSectionRow}>
                    <div className={classes.instock}>
                        {get(pos_stock_manage, "stock_final_label", "")}
                    </div>
                </div>
            )
        } else {
            return (
                <div className={classes.piSectionRow}>
                    <div
                        className={classes.stockAvailability}
                        style={{ borderBottomWidth: 0 }}>
                        {get(pos_stock_manage, "stock_label", "")}
                    </div>
                </div>
            )
        }
    }, [pos_stock_manage])

    /**
     * render availablity of store pickup in side gray portion
     */
    const renderSideAvailability = useCallback(() => {
        if (toLower(pos_stock_manage.stock_label) === "unavailable") {
            return (
                <>
                    <div className={classes.stockAvailability}>
                        This item is unavailable for store pickup.&nbsp;
                        <span
                            className={classes.clickHere}
                            onClick={(e) => {
                                e.preventDefault()
                                handleSwitchStore("default")
                            }}>
                            Click here
                        </span>
                        &nbsp;to ship direct.
                    </div>
                    <div className={classes.apSectionRow}>
                        <div className={classes.stock}>
                            <span className={[classes.availability, classes.instock].join(" ")}>{pos_stock_manage.stock_final_label}</span>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    {!!pos_stock_manage.stock_label &&
                        <div className={classes.stockAvailability}>{pos_stock_manage.stock_label}</div>
                    }
                    {/* Product Stock Avialability */}
                    {!!pos_stock_manage.stock_final_label &&
                        <div className={classes.apSectionRow}>
                            <div className={classes.stock}>
                                <span className={[classes.availability, classes.instock].join(" ")}>{pos_stock_manage.stock_final_label}</span>
                            </div>
                        </div>
                    }
                </>
            )
        }
    }, [pos_stock_manage])

    return (
        <Fragment>
            {breadcrumbs}
            <div className={classes.productViewWrapper}>
                <section className={[classes.productViewSection, classes.productView].join(" ")}>
                    <div className={classes.productMedia}>
                        {/* Carousel */}
                        <Carousel
                            images={mediaGalleryEntries}
                            media_gallery={media_gallery}
                            allowFullScreen
                        />
                    </div>
                    <div className={classes.productInfo}>
                        {/* Product Name */}
                        <h1 className={classes.productName}>
                            <RichText content={product.product_name} />
                        </h1>

                        {/* Product SKU and Model Number */}
                        <div className={classes.piSectionRow}>
                            <div className={classes.attributeWrapper}>
                                <div
                                    className={[
                                        classes.attributeContainer,
                                        classes.sku
                                    ].join(' ')}
                                >
                                    <span className={classes.attributeLabel}>
                                        Sku
                                    </span>
                                    <span className={classes.attributeValue}>
                                        {productDetails.sku}
                                    </span>
                                </div>
                                <div
                                    className={[
                                        classes.attributeContainer,
                                        classes.modelNumber
                                    ].join(' ')}
                                >
                                    <span className={classes.attributeLabel}>
                                        Model Number
                                    </span>
                                    <span className={classes.attributeValue}>
                                        {mpn}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Product Price */}
                        <div className={classes.piSectionRow}>
                            <div className={classes.priceBox}>
                                <Price
                                    currencyCode={productDetails.price.currency}
                                    value={productDetails.price.value}
                                    classes={{
                                        currency: classes.currency,
                                        decimal: classes.decimal,
                                        fraction: classes.fraction
                                    }}
                                />
                                <span className={classes.unit}>
                                    / {uom}
                                </span>
                            </div>
                        </div>

                        {/* Product Stock Avialability */}
                        {renderAvailability()}

                        {/* Product Label */}
                        <div className={classes.piSectionRow}>
                            <div className={classes.labelWrapper}>
                                {processedProductLabels.map((labelObj, i) => {
                                    return (
                                        <div key={i}
                                            className={[classes.labelItem, classes[camelCase(labelObj.labelname)]].join(" ")}
                                            style={style}
                                        >
                                            <span>{camelCase(labelObj.labelname)}</span>
                                        </div>
                                    )
                                })}
                                {!!size(processedProductLabels) &&
                                    <div className={classes.labelHelper}>
                                        <span onClick={openLabelsPopup}>What's this?</span>
                                    </div>
                                }
                            </div>
                        </div>

                        {/* Finance Offer */}
                        {productDetails.price.value > 500 && (
                            <div className={classes.piSectionRow}>
                                <div className={classes.finance}>
                                    <i className={classes.iconWrapper}>
                                        <svg
                                            className={classes.svgIcon}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="34"
                                            height="32"
                                            viewBox="0 0 34 32"
                                        >
                                            <title>store</title>
                                            <path d="M32 30v-2h-2v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-2v2h-2v2h34v-2h-2zM16 0h2l16 10v2h-34v-2z" />
                                        </svg>
                                    </i>
                                    <strong>
                                        {'Finance for as low as '}
                                        <Price
                                            currencyCode={
                                                productDetails.price.currency
                                            }
                                            value={
                                                productDetails.price.value /
                                                39.5
                                            }
                                        />
                                        /month
                                    </strong>
                                </div>
                            </div>
                        )}

                        {/* Product Review   */}
                        {!!product.review_count ?
                            <div className={classes.piSectionRow}>
                                <div className={classes.productReview} onClick={handleFirstReviewClick}>
                                    <RatingMini percent={product.rating_summary} value={product.review_count} />
                                </div>
                            </div>
                            :
                            <div className={classes.reviewShort} onClick={handleFirstReviewClick}>
                                Be the first to review this product
                            </div>
                        }


                        {/* Product  Short Additional Info  */}
                        <div className={classes.piSectionRow}>
                            <div className={classes.shortAdditionalInof}>
                                <div className={classes.tableWrapper}>
                                    <table className={[classes.data, classes.table, classes.shortAdditional].join(" ")}>
                                        <tbody>
                                            {moreInformation.map((info, mInd) => {
                                                return (
                                                    <tr key={mInd}>
                                                        <th scope="row" className={[classes.col, classes.label].join(" ")}>{info.label}</th>
                                                        <td data-th={info.label} className={[classes.col, classes.data].join(" ")}>
                                                            <RichText
                                                                content={info.value}
                                                            />
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Product  Video  */}
                        {product.youtube_filename && (
                            <div className={classes.piSectionRow}>
                                <div className={classes.productVideo}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${product.youtube_filename
                                            }`}
                                        allowfullscreen="allowfullscreen"
                                        mozallowfullscreen="mozallowfullscreen"
                                        msallowfullscreen="msallowfullscreen"
                                        oallowfullscreen="oallowfullscreen"
                                        webkitallowfullscreen="webkitallowfullscreen" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right side block */}
                    <div className={classes.productAction}>
                        <div className={classes.productActionWrapper}>
                            <Form onSubmit={handleAddToCart}>
                                {/* Add to cart form */}
                                <div className={classes.paContent}>
                                    <div className={classes.apSectionRow}>
                                        <div className={classes.priceBox}>
                                            <Price
                                                currencyCode={
                                                    productDetails.price.currency
                                                }
                                                value={productDetails.price.value}
                                            />
                                            <span className={classes.unit}>
                                                / {product.uom}
                                            </span>
                                        </div>
                                    </div>

                                    {renderSideAvailability()}

                                    {!pos_stock_manage.hide_add_to_cart &&
                                        <div className={classes.apSectionRow}>
                                            <div className={classes.boxToCart}>
                                                <QuantityFields
                                                    classes={{
                                                        root: classes.quantityRoot
                                                    }}
                                                    min={1}
                                                    message={errors.get('quantity')}
                                                />
                                                {cartActionContent}
                                            </div>
                                        </div>
                                    }

                                    {/* Store Locator */}
                                    {pos_stock_manage.locate_in_store &&
                                        <div className={classes.apSectionRow}>
                                            <div className={classes.storeLocator}
                                                onClick={openStoreLocatorPopup}>
                                                <i className={classes.iconWrapper}>
                                                    <svg
                                                        className={classes.svgIcon}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 32 32"
                                                    >
                                                        <title>location</title>
                                                        <path d="M16 0q-2.063 0-3.906 0.781-1.813 0.781-3.172 2.141t-2.141 3.172q-0.781 1.844-0.781 3.906 0 3.75 1.563 7.656t3.438 7.094 3.438 5.219l1.563 2.031 1.563-2.031t3.438-5.219 3.438-7.094 1.563-7.656q0-2.063-0.781-3.906-0.781-1.813-2.141-3.172t-3.172-2.141q-1.844-0.781-3.906-0.781zM16 16q-2.5 0-4.25-1.75t-1.75-4.25 1.75-4.25 4.25-1.75 4.25 1.75 1.75 4.25-1.75 4.25-4.25 1.75z" />
                                                    </svg>
                                                </i>
                                                <strong className={classes.actionLink}>Check Your Local Store</strong>
                                            </div>
                                        </div>
                                    }

                                    {/* Product selling Instruction*/}
                                    <div className={classes.apSectionRow}>
                                        <div className={classes.sellingInstruction}>
                                            <Link
                                                to="/supply-chain"
                                                className={classes.action}
                                            >
                                                We reserve the right to limit
                                                purchases on items in high demand
                                                due to current supply chain issues
                                            </Link>

                                        </div>
                                    </div>

                                    {/* Product Shipping Infor */}
                                    <div className={classes.apSectionRow}>
                                        <div className={classes.shippingInfo}>
                                            <span>
                                                <RichText content={get(product, "pos_stock_manage.ship_time_label", "")} />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bulk Saving Info */}
                                    {!!size(priceTiers) &&
                                        <div className={classes.apSectionRow}>
                                            <div className={classes.bulkSavingInfo}>
                                                <div className={classes.bulkSavingtitle}>BULK SAVINGS</div>
                                                {priceTiers.map((tier, ind) => {
                                                    return (
                                                        <div className={classes.bulkOfferWrapper} key={ind}>
                                                            <div className={classes.tierQuantity}>
                                                                <span>Buy at least</span> <strong>{tier.quantity}</strong>
                                                            </div>
                                                            <div className={classes.tierPice}>
                                                                <Price
                                                                    currencyCode={
                                                                        tier.final_price.currency
                                                                    }
                                                                    value={tier.final_price.value}
                                                                />
                                                                <span className={classes.unit}>
                                                                    / {product.uom}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    }


                                    {/* Product Add To Links */}
                                    <div className={classes.apSectionRow}>
                                        <div className={classes.addToLinks}>

                                            <div
                                                className={[
                                                    classes.action,
                                                    classes.toCompare
                                                ].join(' ')}
                                            >
                                                <Button onClick={openWishlistPopup}>
                                                    <i className={classes.iconWrapper}>
                                                        <svg className={[classes.svgIcon, classes.wishlist].join(" ")} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                            <title>wishlist-full</title>
                                                            <path d="M23.594 2q-1.25 0-2.406 0.469t-2.141 1.25-1.766 1.781q-0.781 1.031-1.281 2.094-0.5-1.063-1.281-2.094-0.781-1-1.766-1.781t-2.141-1.25-2.406-0.469q-1.75 0-3.281 0.656t-2.672 1.797-1.797 2.672-0.656 3.281q0 3.531 1.594 5.969 1.594 2.469 3.984 4.688t5.172 4.656q2.813 2.406 5.25 5.906 2.313-3.469 5.094-5.938t5.203-4.719 4.078-4.688q1.625-2.469 1.625-5.875 0-1.75-0.656-3.281t-1.797-2.672-2.672-1.797-3.281-0.656z"></path>
                                                        </svg>
                                                    </i>
                                                    <span>Add to wishlist</span>
                                                </Button>
                                            </div>

                                            <div
                                                className={[
                                                    classes.action,
                                                    classes.toCompare
                                                ].join(' ')}
                                            >
                                                <AddItemsToCompareList
                                                    itemId={product.id}
                                                    Child={() => (
                                                        <Button>
                                                            <i className={classes.iconWrapper}>
                                                                <svg className={[classes.svgIcon, classes.wishlist].join(" ")} xmlns="http://www.w3.org/2000/svg" width="39" height="32" viewBox="0 0 39 32">
                                                                    <title>compare</title>
                                                                    <path d="M30.844 8.281l-6.844 12.563h13.719zM8 8.281l-6.844 12.563h13.688zM22.656 4.844q-0.25 0.75-0.813 1.297t-1.281 0.797v23.063h10.875q0.219 0 0.391 0.172t0.172 0.391v1.156q0 0.25-0.172 0.406t-0.391 0.156h-24q-0.25 0-0.422-0.156t-0.172-0.406v-1.156q0-0.219 0.172-0.391t0.422-0.172h10.844v-23.063q-0.719-0.25-1.281-0.797t-0.813-1.297h-8.75q-0.25 0-0.422-0.156t-0.172-0.406v-1.125q0-0.25 0.172-0.422t0.422-0.172h8.75q0.375-1 1.25-1.641t2-0.641 2 0.641 1.219 1.641h8.781q0.219 0 0.391 0.172t0.172 0.422v1.125q0 0.25-0.172 0.406t-0.391 0.156h-8.781zM19.438 5.156q0.594 0 1-0.422t0.406-1.016-0.406-1.016-1-0.422-1.016 0.422-0.422 1.016 0.422 1.016 1.016 0.422v0zM38.844 20.844q0 1.406-0.813 2.375-0.844 0.969-2.078 1.594t-2.609 0.906q-1.406 0.281-2.5 0.281-1.063 0-2.469-0.281-1.375-0.281-2.609-0.906t-2.078-1.594-0.844-2.375v0q0-0.25 1-2.125 1-1.906 2.234-4.172t2.359-4.266q1.125-2.031 1.406-2.563 0.156-0.25 0.438-0.406t0.563-0.156q0.313 0 0.594 0.156t0.406 0.406q0.313 0.531 1.438 2.563 1.125 2 2.359 4.266t2.234 4.172q0.969 1.875 0.969 2.125v0zM16 20.844q0 1.406-0.844 2.375t-2.063 1.594-2.625 0.906q-1.375 0.281-2.469 0.281t-2.469-0.281q-1.406-0.281-2.625-0.906t-2.063-1.594-0.844-2.375v0q0-0.25 1-2.125 0.969-1.906 2.203-4.172t2.391-4.266q1.125-2.031 1.406-2.563 0.156-0.25 0.422-0.406t0.578-0.156 0.578 0.156 0.422 0.406q0.281 0.531 1.406 2.563 1.156 2 2.391 4.266t2.203 4.172q1 1.875 1 2.125z"></path>
                                                                </svg>
                                                            </i>
                                                            <span>Add to Compare</span>
                                                        </Button>
                                                    )}
                                                    Loader={() => <LoadingButton />}
                                                />
                                            </div>

                                            <div
                                                className={[
                                                    classes.action,
                                                    classes.shareThis
                                                ].join(' ')}
                                            >
                                                <Button onClick={openSharePopup}>
                                                    <i className={classes.iconWrapper}>
                                                        <svg className={[classes.svgIcon, classes.shareThis].join(" ")} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                            <title>share</title>
                                                            <path d="M27 22q-1.063 0-1.984 0.406t-1.609 1.125l-13.469-6.75q0.031-0.188 0.047-0.391t0.016-0.391-0.016-0.391-0.047-0.391l13.469-6.75q0.688 0.719 1.609 1.125t1.984 0.406q2.063 0 3.531-1.469t1.469-3.531-1.469-3.531-3.531-1.469-3.531 1.469-1.469 3.531q0 0.188 0.016 0.391t0.047 0.391l-13.469 6.75q-0.688-0.719-1.609-1.125t-1.984-0.406q-2.063 0-3.531 1.469t-1.469 3.531 1.469 3.531 3.531 1.469q1.063 0 1.984-0.406t1.609-1.125l13.469 6.75q-0.031 0.188-0.047 0.391t-0.016 0.391q0 2.063 1.469 3.531t3.531 1.469 3.531-1.469 1.469-3.531-1.469-3.531-3.531-1.469z"></path>
                                                        </svg>
                                                    </i>
                                                    <span>Share this item</span>
                                                </Button>
                                            </div>
                                            <div
                                                className={[
                                                    classes.action,
                                                    classes.toCompare
                                                ].join(' ')}
                                            >
                                                <Button
                                                    onClick={() => window.print()}
                                                >

                                                    <i className={classes.iconWrapper}>
                                                        <svg className={[classes.svgIcon, classes.print].join(" ")} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                            <title>print</title>
                                                            <path d="M7 11v-6q0-0.844 0.578-1.422t1.422-0.578h15q0.844 0 1.422 0.578t0.578 1.422v6h-19zM6 27h-1q-1.25 0-2.125-0.875t-0.875-2.125v-9q0-1.25 0.875-2.125t2.125-0.875h23q1.25 0 2.125 0.875t0.875 2.125v9q0 1.25-0.875 2.125t-2.125 0.875h-1v-8h-21v8zM7 20h19v8q0 0.844-0.578 1.422t-1.422 0.578h-15q-0.844 0-1.422-0.578t-0.578-1.422v-8zM25 17q0.406 0 0.703-0.297t0.297-0.703-0.297-0.703-0.703-0.297-0.703 0.297-0.297 0.703 0.297 0.703 0.703 0.297v0zM9 23v1h15v-1h-15zM9 26v1h15v-1h-15z"></path>
                                                        </svg>
                                                    </i>
                                                    <span>Print this page</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {product.ship_info && (
                                        <div className={classes.apSectionRow}>
                                            <div className={classes.extraShipInfo}>
                                                {product.ship_info}
                                            </div>
                                        </div>
                                    )}
                                    {product.specsheet && (
                                        <div className={classes.apSectionRow}>
                                            <div className={classes.specsheet}>
                                                <div className={classes.iconPDF}>
                                                    <a href={productSpecsheetUrl(product.specsheet)} target="_blank" >
                                                        <img src={productSpecsheetLogoUrl()} />
                                                    </a>
                                                </div>
                                                <a href={productSpecsheetUrl(product.specsheet)} target="_blank" >Specsheet</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <FormError
                                    classes={{
                                        root: classes.formErrors
                                    }}
                                    errors={errors.get('form') || []}
                                />
                            </Form>
                        </div>
                    </div>
                </section>




                <section className={[classes.productViewSection, classes.productDescription].join(" ")}>
                    <div className={classes.sectionTitleWrapper}>
                        <h2 className={classes.sectionTitle}>
                            <span>
                                <FormattedMessage
                                    id={'am.productFullDetail.productDescription'}
                                    defaultMessage={'DESCRIPTION'}
                                />
                            </span>
                        </h2>
                    </div>
                    <div className={classes.sectionContent}>
                        <RichText content={productDetails.description} />
                    </div>
                    <br />
                    <div className={classes.californiaResident} onClick={openCaliforniaPopup}>
                        <div className={classes.iconWarning}>
                            <Image src={smallWarning} />
                        </div>
                        <div className={classes.warningContent}>
                            California Residents:<br />
                            Proposition 65 Information
                        </div>
                    </div>

                </section>

                <section className={[classes.productViewSection, classes.additionalInformation].join(" ")}>

                    <div className={classes.sectionTitleWrapper}>
                        <h2 className={classes.sectionTitle}>
                            <span>
                                <FormattedMessage
                                    id={'productFullDetail.additionalInformation'}
                                    defaultMessage={'ADDITIONAL INFORMATION'}
                                />
                            </span>
                        </h2>
                    </div>
                    <div className={classes.sectionContent}>
                        <div className={classes.tableWrapper}>
                            <table className={[classes.data, classes.table, classes.additional].join(" ")}>
                                <tbody>
                                    <tr>
                                        <th scope="row" className={[classes.col, classes.label].join(" ")}>SKU</th>
                                        <td data-th="SKU" className={[classes.col, classes.data].join(" ")}>{productDetails.sku}</td>
                                    </tr>
                                    {additionalInformation.map(info => {
                                        return (
                                            <tr>
                                                <th scope="row" className={[classes.col, classes.label].join(" ")}>{info.label}</th>
                                                <td data-th={info.label} className={[classes.col, classes.data].join(" ")}>
                                                    <RichText
                                                        content={info.value}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>


                <section className={[classes.productViewSection, classes.questionAnswer].join(" ")}>
                    <div className={classes.sectionTitleWrapper}>
                        <h2 className={classes.sectionTitle}>
                            <span>
                                <FormattedMessage
                                    id={'productFullDetail.questions'}
                                    defaultMessage={'QUESTIONS AND ANSWERS'}
                                />
                            </span>
                        </h2>
                    </div>
                    <div className={classes.sectionContent}>
                        <ProductQuestions productId={product.id} />
                    </div>
                </section>


                <section ref={reviewRef}
                    className={[
                        classes.productViewSection,
                        classes.productReviewSection
                    ].join(" ")}>
                    <div className={classes.sectionTitleWrapper}>
                        <h2 className={classes.sectionTitle}>
                            <span>
                                Reviews
                            </span>
                        </h2>
                        <ProductReview product={product} />
                    </div>

                </section>

                <RelatedPosts productId={product.id} />

                {!!size(upsellProducts) && (
                    <section className={[classes.productViewSection, classes.upsellProducts].join(" ")}>
                        <div className={classes.sectionTitleWrapper}>
                            <h2 className={classes.sectionSubTitle}>
                                <span>
                                    We found other products you might like!
                                </span>
                            </h2>
                        </div>
                        <div className={classes.sectionContent}>
                            <div className={classes.gallery}>
                                <GalleryGrid items={upsellProducts} />
                            </div>
                        </div>
                    </section>
                )}

                {!!size(relatedProducts) && (
                    <section className={[classes.productViewSection, classes.relatedProducts].join(" ")}>
                        <div className={classes.sectionTitleWrapper}>
                            <h2 className={classes.sectionSubTitle}>
                                <span>
                                    We found other related products
                                </span>
                            </h2>
                        </div>
                        <div className={classes.sectionContent}>
                            <div className={classes.gallery}>
                                <strong>We found other related products</strong>
                                <GalleryGrid items={relatedProducts} />
                            </div>
                        </div>
                    </section>
                )}

            </div>
            {showWishlistPopup && (
                <WishlistPopup
                    isPopupVisible={showWishlistPopup}
                    productId={product.id}
                    productQty={wishlistButtonProps.item.quantity}
                    productName={product.product_name || ''}
                    closeWishlistPopup={closeWishlistPopup}
                />
            )}
            {showSharePopup && (
                <SharePopup
                    isPopupVisible={showSharePopup}
                    productId={product.id}
                    closeSharePopup={closeSharePopup}
                />
            )}
            {showLabelsPopup && (
                <LabelsPopup
                    isPopupVisible={showLabelsPopup}
                    productId={product.id}
                    closeLabelsPopup={closeLabelsPopup}
                />
            )}
            {showStoreLocatorPopup && (
                <StoreLocator productId={id}
                    isPopupVisible={showStoreLocatorPopup}
                    closeStoreLocatorPopup={closeStoreLocatorPopup} />
            )}
            {showCaliforniaPopup && (
                <CaliforniaPopup
                    isPopupVisible={showCaliforniaPopup}
                    closeCaliforniaPopup={closeCaliforniaPopup} />
            )}
        </Fragment>
    );
};

ProductFullDetail.propTypes = {
    classes: shape({
        cartActions: string,
        description: string,
        descriptionTitle: string,
        details: string,
        detailsTitle: string,
        imageCarousel: string,
        options: string,
        productName: string,
        productPrice: string,
        quantity: string,
        quantityTitle: string,
        root: string,
        title: string,
        unavailableContainer: string
    }),
    product: shape({
        __typename: string,
        id: number,
        sku: string.isRequired,
        price: shape({
            regularPrice: shape({
                amount: shape({
                    currency: string.isRequired,
                    value: number.isRequired
                })
            }).isRequired
        }).isRequired,
        media_gallery_entries: arrayOf(
            shape({
                label: string,
                position: number,
                disabled: bool,
                file: string.isRequired
            })
        ),
        description: string
    }).isRequired
};

export default ProductFullDetail;
