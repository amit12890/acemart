import React, { Fragment, Suspense, useState, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import { Form } from 'informed';
import { Info } from 'react-feather';
import { get, size } from 'lodash';
import { Link } from 'react-router-dom';

import Price from '@magento/venia-ui/lib/components/Price';
import Mask from '@magento/venia-ui/lib/components/Mask';
import FormError from '@magento/venia-ui/lib/components/FormError';
import { useProductFullDetail } from '@magento/peregrine/lib/talons/ProductFullDetail/useProductFullDetail';
import { isProductConfigurable } from '@magento/peregrine/lib/util/isProductConfigurable';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { QuantityFields } from '@magento/venia-ui/lib/components/CartPage/ProductListing/quantity';

import { useStyle } from '../../classify';
import productLabel from '../../../assets/labelSprite.png';
import Breadcrumbs from '../Breadcrumbs';
import Button from '../Button';
import RichText from '../RichText';
import WishlistPopup from '../../../components/WishList/wishlistPopup';
import AddItemsToCompareList from '../../../components/CompareListPage/addItemsToCompareList';
import Gallery from '../Gallery';
import Carousel from '../ProductImageCarousel';

import { productSpecsheetUrl, productSpecsheetLogoUrl } from '../../../url.utils';
import defaultClasses from './productFullDetail.css';

const style = {
    '--productLabel': `url("${productLabel}")`
};

const WishlistButton = React.lazy(() => import('../Wishlist/AddToListButton'));
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
    console.log('line 39 ~ props', props);
    const { product } = props;
    const [showWishlistPopup, setShowWishlistPopup] = useState(false);

    const talonProps = useProductFullDetail({ product });
    console.log('line 43 ~ talonProps', talonProps);

    const openWishlistPopup = useCallback(() => {
        setShowWishlistPopup(true);
    }, [setShowWishlistPopup]);
    const closeWishlistPopup = useCallback(() => {
        setShowWishlistPopup(false);
    }, [setShowWishlistPopup]);

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

    const additionalInformation = get(
        product,
        'additional_information.data',
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
        <Button disabled={isAddToCartDisabled} priority="high" type="submit">
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

    return (
        <Fragment>
            {breadcrumbs}
            <Mask isActive={showWishlistPopup} />
            <div className={classes.productViewWrapper}>
                <section className={classes.productInfoSection}>
                    <div className={classes.productMedia}>
                        {/* Carousel */}
                        <Carousel images={mediaGalleryEntries} />
                    </div>
                    <div className={classes.productInfo}>
                        {/* Product Name */}
                        <h1 className={classes.productName}>
                            {productDetails.name}
                        </h1>

                        {/* Product SKU and Model Number */}
                        <div className={classes.piSectionRow}>
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
                                    Sample Model Number
                                </span>
                            </div>
                        </div>

                        {/* Product Price */}
                        <div className={classes.piSectionRow}>
                            <div className={classes.priceBox}>
                                <Price
                                    currencyCode={productDetails.price.currency}
                                    value={productDetails.price.value}
                                />
                                <span className={classes.unit}>
                                    / {product.uom}
                                </span>
                            </div>
                        </div>

                        {/* Product Stock Avialability */}
                        <div className={classes.piSectionRow}>
                            <div className={classes.stock}>
                                {product.availability} In Stock
                            </div>
                        </div>

                        {/* Product Label */}
                        <div className={classes.piSectionRow}>
                            <div className={classes.labelWrapper}>
                                <div
                                    className={[
                                        classes.labelItem,
                                        classes.onSale
                                    ].join(' ')}
                                    style={style}
                                >
                                    <span />
                                </div>
                                <div className={classes.labelHelper}>
                                    <span>What's this</span>
                                </div>
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
                        <div className={classes.piSectionRow}>
                            <div className={classes.productReview}>
                                <span>Review Goes Here</span>
                            </div>
                        </div>

                        {/* Product  Short Additional Info  */}
                        <div className={classes.piSectionRow}>
                            <div className={classes.shortAdditionalInof}>
                                <span>
                                    Short additional Information Goes Here
                                </span>
                            </div>
                        </div>

                        {/* Product  Video  */}
                        {product.youtube_filename && (
                            <div className={classes.piSectionRow}>
                                <div className={classes.productVideo}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${product.youtube_filename
                                            }`}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={classes.productAction}>
                        <Form onSubmit={handleAddToCart}>
                            {/* form */}
                            <div>
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

                                {/* Product Stock Avialability */}
                                <div className={classes.apSectionRow}>
                                    <div className={classes.stock}>
                                        {product.availability} In Stock
                                    </div>
                                </div>

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

                                {/* Store Locator */}
                                <div className={classes.apSectionRow}>
                                    <div className={classes.storeLocator}>
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
                                        <strong>Check Your Local Store</strong>
                                    </div>
                                </div>

                                {/* Product selling Instruction*/}
                                <div className={classes.apSectionRow}>
                                    <div className={classes.sellingInstruction}>
                                        <span>
                                            We reserve the right to limit
                                            purchases on items in high demand
                                            due to current supply chain issues
                                        </span>
                                    </div>
                                </div>

                                {/* Product Shipping Infor */}
                                <div className={classes.apSectionRow}>
                                    <div className={classes.shippingInfo}>
                                        <span>
                                            Usually ships from our warehouse in
                                            Schertz, TX within 1-2 business
                                            days.
                                        </span>
                                    </div>
                                </div>

                                {/* Product Add To Links */}
                                <div className={classes.apSectionRow}>
                                    <div className={classes.addToLinks}>
                                        <div
                                            className={[
                                                classes.action,
                                                classes.toWishList
                                            ].join(' ')}
                                        >
                                            <Suspense fallback={null}>
                                                <WishlistButton
                                                    {...wishlistButtonProps}
                                                />
                                            </Suspense>
                                        </div>

                                        <div
                                            className={[
                                                classes.action,
                                                classes.toCompare
                                            ].join(' ')}
                                        >
                                            <Button onClick={openWishlistPopup}>
                                                Add to wishlist
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
                                                        Add to Compare
                                                    </Button>
                                                )}
                                                Loader={() => (
                                                    <div>Loading....</div>
                                                )}
                                            />
                                        </div>

                                        <div
                                            className={[
                                                classes.action,
                                                classes.toCompare
                                            ].join(' ')}
                                        >
                                            <Button>Share this item</Button>
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
                                                Print this page
                                            </Button>
                                        </div>
                                        {product.specsheet && (
                                            <div>
                                                <img src={productSpecsheetLogoUrl()} />
                                                <Link
                                                    to={productSpecsheetUrl(product.specsheet)}
                                                    target="_blank"
                                                >
                                                    Specsheet
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <FormError
                                classes={{
                                    root: classes.formErrors
                                }}
                                errors={errors.get('form') || []}
                            />
                        </Form>
                    </div>
                </section>
                <div>
                    {/* details */}
                    <section className={classes.description}>
                        <h2 className={classes.descriptionTitle}>
                            <FormattedMessage
                                id={'productFullDetail.productDescription'}
                                defaultMessage={'DESCRIPTION'}
                            />
                        </h2>
                        <RichText content={productDetails.description} />
                    </section>
                    <section className={classes.description}>
                        <h2 className={classes.descriptionTitle}>
                            <FormattedMessage
                                id={'productFullDetail.additionalInformation'}
                                defaultMessage={'ADDITIONAL INFORMATION'}
                            />
                        </h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>SKU</td>
                                    <td>{productDetails.sku}</td>
                                </tr>
                                {additionalInformation.map(info => {
                                    return (
                                        <tr>
                                            <td>{info.label}</td>
                                            <td>
                                                <RichText
                                                    content={info.value}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </section>
                    <section className={classes.description}>
                        <h2 className={classes.descriptionTitle}>
                            <FormattedMessage
                                id={'productFullDetail.questions'}
                                defaultMessage={'QUESTIONS AND ANSWERS'}
                            />
                        </h2>
                    </section>
                    {!!size(upsellProducts) && (
                        <section className={classes.gallery}>
                            <strong>
                                We found other products you might like!
                            </strong>
                            <Gallery items={upsellProducts} />
                        </section>
                    )}
                    {!!size(relatedProducts) && (
                        <section className={classes.gallery}>
                            <strong>We found other related products</strong>
                            <Gallery items={relatedProducts} />
                        </section>
                    )}
                </div>
            </div>
            {showWishlistPopup && (
                <WishlistPopup
                    productId={product.id}
                    productQty={wishlistButtonProps.item.quantity}
                    closeWishlistPopup={closeWishlistPopup}
                />
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
