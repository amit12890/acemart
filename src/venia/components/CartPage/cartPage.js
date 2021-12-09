import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Check } from 'react-feather';
import { useCartPage } from '@magento/peregrine/lib/talons/CartPage/useCartPage';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { useToasts } from '@magento/peregrine';
import { useQuery } from '@apollo/client';
import { get } from "lodash";

import Icon from '../Icon';
import { StoreTitle } from '@magento/venia-ui/lib/components/Head';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import StockStatusMessage from '@magento/venia-ui/lib/components/StockStatusMessage';
import PriceAdjustments from './PriceAdjustments';
import ProductListing from './ProductListing';
import PriceSummary from './PriceSummary';
import defaultClasses from './cartPage.css';
import { GET_CART_DETAILS, GET_STORE_CONFIG_DATA } from './cartPage.gql';

const CheckIcon = <Icon size={20} src={Check} />;

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
    const talonProps = useCartPage({
        queries: {
            getCartDetails: GET_CART_DETAILS
        }
    });
    const { loading, error, data } = useQuery(GET_STORE_CONFIG_DATA);

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

    const classes = useStyle(defaultClasses, props.classes);
    const { formatMessage } = useIntl();
    const [, { addToast }] = useToasts();

    useEffect(() => {
        if (wishlistSuccessProps) {
            addToast({ ...wishlistSuccessProps, icon: CheckIcon });
        }
    }, [addToast, wishlistSuccessProps]);

    if (shouldShowLoadingIndicator || loading) {
        return fullPageLoadingIndicator;
    }

    const productListing = hasItems ? (
        <ProductListing
            onAddToWishlistSuccess={onAddToWishlistSuccess}
            setIsCartUpdating={setIsCartUpdating}
            fetchCartDetails={fetchCartDetails}
        />
    ) : (
        <h3>
            <FormattedMessage
                id={'cartPage.emptyCart'}
                defaultMessage={'There are no items in your cart.'}
            />
        </h3>
    );

    const priceAdjustments = hasItems ? (
        <PriceAdjustments setIsCartUpdating={setIsCartUpdating} />
    ) : null;

    const isShoppingSite = get(data, "storeConfig.store_group_name") === "Shopping"

    const priceSummary = hasItems ? (
        <PriceSummary isUpdating={isCartUpdating} />
    ) : null;

    return (
        <div className={classes.root}>
            <StoreTitle>
                {formatMessage({
                    id: 'am.cartPage.title',
                    defaultMessage: 'Shopping Cart'
                })}
            </StoreTitle>
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

            <section className={classes.crossSellSection}>
                <div className={classes.sectionTitleWrapper}>
                    <h2 className={classes.sectionSubTitle}>
                        <span>
                            People also bought:
                        </span>
                    </h2>
                </div>
                <div className={classes.sectionContent}>
                    <div className={classes.gallery}>
                        Product Goes Here
                    </div>
                </div>
            </section>




        </div>
    );
};

export default CartPage;
