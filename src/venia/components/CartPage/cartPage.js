import React, { useEffect, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Check, AlertCircle as AlertCircleIcon } from 'react-feather';
import { useCartPage } from '@magento/peregrine/lib/talons/CartPage/useCartPage';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { Link } from 'react-router-dom';
import { useToasts } from '@magento/peregrine';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { useQuery, useMutation } from '@apollo/client';
import { get } from 'lodash';
import { useProductListing } from '../../../magento/peregrine/talons/CartPage/useProductListing';

import Icon from '../Icon';
import { Title } from '@magento/venia-ui/lib/components/Head';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import StockStatusMessage from '@magento/venia-ui/lib/components/StockStatusMessage';
import Button from '../Button';
import PriceAdjustments from './PriceAdjustments';
import ProductListing from './ProductListing';
import PriceSummary from './PriceSummary';
import CrossSellProducts from './crossSellProducts';
import defaultClasses from './cartPage.css';
import {
    GET_CART_DETAILS,
    GET_STORE_CONFIG_DATA,
    REMOVE_ALL_ITEM_CART
} from './cartPage.gql';
import { ProductListingFragment } from './ProductListing/productListingFragments';
import { gql } from '@apollo/client';
import { checkOutOfStockItem } from '../../../app.utils';


const DEFAULT_STORE_NAME = "Acemart.com";
const DEFAULT_STORE_CODE = "default";

const CheckIcon = <Icon size={20} src={Check} />;

const errorIcon = (
    <Icon
        src={AlertCircleIcon}
        attrs={{
            width: 18
        }}
    />
);

export const GET_PRODUCT_LISTING = gql`
    query getProductListing($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...ProductListingFragment
        }
    }
    ${ProductListingFragment}
`;

/**
 * Structural page component for the shopping cart.
 * This is the main component used in the `/cart` route in Venia.
 * It uses child components to render the different pieces of the cart page.
 *
 * @see {@link https://venia.magento.com/cart}
 *
 * @param {Object} props
 * @param {Object} props.classes CSS className overrides for the component.
 * See [cartPage.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/cartPage.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import CartPage from "@magento/venia-ui/lib/components/CartPage";
 */
const CartPage = props => {
    const [{ cartId }] = useCartContext();

    const talonProps = useCartPage({
        queries: {
            getCartDetails: GET_CART_DETAILS
        }
    });
    const {
        cartItems,
        hasItems,
        isCartUpdating,
        fetchCartDetails,
        onAddToWishlistSuccess,
        setIsCartUpdating,
        shouldShowLoadingIndicator,
        wishlistSuccessProps
    } = talonProps;

    const productTalonProps = useProductListing({
        queries: {
            getProductListing: GET_PRODUCT_LISTING
        }
    });
    const { isLoading, items, error: productFetchError } = productTalonProps;

    const [, { addToast }] = useToasts();

    const { loading, error, data } = useQuery(GET_STORE_CONFIG_DATA);
    const [
        removeAllItemFromCart,
        {
            error: removeAllItemFromCartError,
            loading: removeAllItemFromCartLoading
        }
    ] = useMutation(REMOVE_ALL_ITEM_CART, {
        onCompleted: data => {
            addToast({
                type: 'success',
                icon: CheckIcon,
                message: 'Cart cleared successfully.',
                dismissable: true,
                timeout: 3000
            });
        }
    });

    const classes = useStyle(defaultClasses, props.classes);

    const { formatMessage } = useIntl();

    useEffect(() => {
        if (wishlistSuccessProps) {
            addToast({ ...wishlistSuccessProps, icon: CheckIcon });
        }
    }, [addToast, wishlistSuccessProps]);

    const hasOutOfStockItem = checkOutOfStockItem(cartItems || [])

    const handleRemoveCart = useCallback(async () => {
        try {
            const { data } = await removeAllItemFromCart({
                variables: { cartId }
            });
        } catch (error) {
            addToast({
                type: 'error',
                icon: errorIcon,
                message: 'Failed to clear cart.',
                dismissable: true,
                timeout: 10000
            });
        }
    }, [cartId]);

    if (shouldShowLoadingIndicator || loading) {
        return fullPageLoadingIndicator;
    }

    // use is shopping on acemart
    const isShoppingSite =
        get(data, 'storeConfig.code') === DEFAULT_STORE_CODE;

    const productListing = hasItems ? (
        <ProductListing
            onAddToWishlistSuccess={onAddToWishlistSuccess}
            setIsCartUpdating={setIsCartUpdating}
            fetchCartDetails={fetchCartDetails}
            {...productTalonProps}
        />
    ) : productFetchError ? (
        <div className={classes.emptyCart}>
            <h3>Failed to fetch product list</h3>
        </div>
    ) : (
        <div className={classes.emptyCart}>
            <h3>
                <FormattedMessage
                    id={'am.cartPage.emptyCart'}
                    defaultMessage={'You have no items in your Shopping cart.'}
                />
            </h3>
            <p>
                <Link
                    to={resourceUrl('/')}
                    className={classes.action}
                >
                    click here</Link>
                &nbsp;to continue shopping</p>
        </div>
    );

    const priceAdjustments = hasItems ? (
        <PriceAdjustments
            isShoppingSite={isShoppingSite}
            setIsCartUpdating={setIsCartUpdating}
        />
    ) : null;

    const priceSummary = hasItems ? (
        <PriceSummary isUpdating={isCartUpdating} hasOutOfStockItem={hasOutOfStockItem} />
    ) : null;

    return (
        <div className={classes.root}>
            <Title>
                {formatMessage({
                    id: 'am.cartPage.title',
                    defaultMessage: 'Shopping Cart'
                })}
            </Title>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    <FormattedMessage
                        id={'am.cartPage.heading'}
                        defaultMessage={'Shopping Cart'}
                    />
                </h1>
                <div className={classes.stockStatusMessageContainer}>
                    <StockStatusMessage cartItems={cartItems} />
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.items_container}>
                    <div className={classes.productListingWrapper}>
                        {productListing}
                    </div>
                    <div className={classes.cartActions}>
                        {/* <div className={classes.buttonContinue}> 
                            <Link
                                to={resourceUrl('/')}
                                className={classes.action}
                            >
                                <i className={classes.iconWrapper}>
                                    <svg
                                        className={classes.svgIcon}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="32"
                                        viewBox="0 0 12 32"
                                    >
                                        <title>previous</title>
                                        <path d="M11.188 10q0 0.094-0.047 0.219t-0.109 0.188l-7.031 7.031 7.031 7q0.063 0.094 0.109 0.203t0.047 0.203q0 0.125-0.047 0.234t-0.109 0.203l-0.906 0.875q-0.094 0.094-0.203 0.141t-0.203 0.047q-0.125 0-0.234-0.047t-0.172-0.141l-8.344-8.313q-0.063-0.094-0.109-0.203t-0.047-0.203q0-0.125 0.047-0.234t0.109-0.172l8.344-8.344q0.063-0.063 0.172-0.109t0.234-0.047q0.094 0 0.203 0.047t0.203 0.109l0.906 0.906q0.063 0.063 0.109 0.172t0.047 0.234v0z" />
                                    </svg>
                                </i>
                                <span>Continue Shopping</span>
                            </Link>
                        </div> */}
                        {hasItems && (
                            <div className={classes.buttonClearCart}>
                                <Button onClick={handleRemoveCart}>
                                    <span>
                                        {removeAllItemFromCartLoading
                                            ? 'Loading...'
                                            : 'Clear Shopping Cart'}
                                    </span>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                <div className={classes.summary_container}>
                    <div className={classes.summary_contents}>
                        <div className={classes.price_adjustments_container}>
                            {priceAdjustments}
                        </div>
                        {priceSummary}
                    </div>
                </div>
            </div>

            <CrossSellProducts
                isLoading={isLoading}
                items={items}
            />
        </div>
    );
};

export default CartPage;
