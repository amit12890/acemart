import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { gql } from '@apollo/client';
import Price from '../../Price';
import { usePriceSummary } from '@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary';
import Button from '../../Button';
import { useStyle } from '../../../classify';
import defaultClasses from './priceSummary.css';
import DiscountSummary from './discountSummary';
import GiftCardSummary from './giftCardSummary';
import ShippingSummary from './shippingSummary';
import TaxSummary from './taxSummary';
import { PriceSummaryFragment } from '@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql';
import { useRouteMatch } from 'react-router-dom';


const GET_PRICE_SUMMARY = gql`
    query getPriceSummary($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...PriceSummaryFragment
        }
    }
    ${PriceSummaryFragment}
`;

/**
 * A child component of the CartPage component.
 * This component fetches and renders cart data, such as subtotal, discounts applied,
 * gift cards applied, tax, shipping, and cart total.
 *
 * @param {Object} props
 * @param {Object} props.classes CSS className overrides.
 * See [priceSummary.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import PriceSummary from "@magento/venia-ui/lib/components/CartPage/PriceSummary";
 */
const PriceSummary = props => {
    const { isUpdating, hasOutOfStockItem } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = usePriceSummary({
        queries: {
            getPriceSummary: GET_PRICE_SUMMARY
        }
    });

    const {
        handleProceedToCheckout,
        hasError,
        hasItems,
        isLoading,
        flatData
    } = talonProps;
    // created own isCheckout as in magento as route our cart page also has checkout keyword
    const isCart = useRouteMatch('/checkout/cart')
    const { formatMessage } = useIntl();

    if (hasError) {
        return (
            <div className={classes.root}>
                <span className={classes.errorText}>
                    <FormattedMessage
                        id={'priceSummary.errorText'}
                        defaultMessage={
                            'Something went wrong. Please refresh and try again.'
                        }
                    />
                </span>
            </div>
        );
    } else if (!hasItems) {
        return null;
    }

    const { subtotal, total, discounts, giftCards, taxes, shipping } = flatData;

    const isPriceUpdating = isUpdating || isLoading;
    const priceClass = isPriceUpdating ? classes.priceUpdating : classes.price;
    const totalPriceClass = isPriceUpdating
        ? classes.priceUpdating
        : classes.totalPrice;

    const totalPriceLabel = !isCart
        ? formatMessage({
            id: 'am.priceSummary.total',
            defaultMessage: 'Total'
        })
        : formatMessage({
            id: 'am.priceSummary.estimatedTotal',
            defaultMessage: 'Total'
        });

    const proceedToCheckoutButton = isCart ? (
        <div className={classes.checkoutButton_container}>
            <Button
                disabled={isPriceUpdating || hasOutOfStockItem}
                priority={'high'}
                onClick={handleProceedToCheckout}
            >
                <FormattedMessage
                    id={'priceSummary.checkoutButton'}
                    defaultMessage={'Proceed to Checkout'}
                />
            </Button>
        </div>
    ) : null;

    return (
        <div className={classes.root}>
            <div className={classes.lineItems}>
                <div className={classes.summaryItem}>
                    <span className={classes.lineItemLabel}>
                        <FormattedMessage
                            id={'priceSummary.lineItemLabel'}
                            defaultMessage={'Subtotal'}
                        />
                    </span>
                    <span className={priceClass}>
                        <Price
                            value={subtotal.value}
                            currencyCode={subtotal.currency}
                        />
                    </span>
                </div>
                <DiscountSummary
                    classes={{
                        lineItemLabel: classes.lineItemLabel,
                        price: priceClass
                    }}
                    data={discounts}
                />
                <GiftCardSummary
                    classes={{
                        lineItemLabel: classes.lineItemLabel,
                        price: priceClass
                    }}
                    data={giftCards}
                />
                <TaxSummary
                    classes={{
                        lineItemLabel: classes.lineItemLabel,
                        price: priceClass
                    }}
                    data={taxes}
                    isCheckout={!isCart}
                />
                <ShippingSummary
                    classes={{
                        lineItemLabel: classes.lineItemLabel,
                        price: priceClass
                    }}
                    data={shipping}
                    isCheckout={!isCart}
                />
                <div className={classes.summaryItem}>
                    <span className={classes.totalLabel}>{totalPriceLabel}</span>
                    <span className={totalPriceClass}>
                        <Price value={total.value} currencyCode={total.currency} />
                    </span>
                </div>
            </div>
            {proceedToCheckoutButton}
        </div>
    );
};

export default PriceSummary;
