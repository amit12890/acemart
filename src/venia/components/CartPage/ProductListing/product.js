import React, { useMemo, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useProduct } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProduct';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import Price from '@magento/venia-ui/lib/components/Price';

import { useStyle } from '../../../classify';
import Image from '../../Image';
import ProductOptions from '../..//LegacyMiniCart/productOptions';
import Section from '../../LegacyMiniCart/section';
import Quantity from './quantity';

import defaultClasses from './product.css';

import { CartPageFragment } from '../cartPageFragments.gql';
import { AvailableShippingMethodsCartFragment } from '../PriceAdjustments/ShippingMethods/shippingMethodsFragments.gql';

import { useUserContext } from '@magento/peregrine/lib/context/user';
import WishlistPopup from '../../../../components/WishList/wishlistPopup';
import RichText from '../../RichText';
import Button from '../../Button';

const IMAGE_SIZE = 100;

const Product = props => {
    const { item } = props;

    const [{ isSignedIn }] = useUserContext();
    const { formatMessage } = useIntl();

    const [showWishlistPopup, setShowWishlistPopup] = useState(false);

    const talonProps = useProduct({
        operations: {
            removeItemMutation: REMOVE_ITEM_MUTATION,
            updateItemQuantityMutation: UPDATE_QUANTITY_MUTATION
        },
        ...props
    });

    const {
        addToWishlistProps,
        errorMessage,
        handleEditItem,
        handleRemoveFromCart,
        handleUpdateItemQuantity,
        isEditable,
        product,
        isProductUpdating
    } = talonProps;

    const {
        currency,
        image,
        name,
        options,
        quantity,
        stockStatus,
        unitPrice,
        urlKey,
        urlSuffix
    } = product;

    const { uom, ship_info } = item.product

    const classes = useStyle(defaultClasses, props.classes);

    const openWishlistPopup = useCallback(() => {
        setShowWishlistPopup(true);
    }, [setShowWishlistPopup]);

    const closeWishlistPopup = useCallback(() => {
        setShowWishlistPopup(false);
    }, [setShowWishlistPopup]);

    const itemClassName = isProductUpdating
        ? classes.item_disabled
        : classes.item;

    const editItemSection = isEditable ? (
        <Section
            text={formatMessage({
                id: 'product.editItem',
                defaultMessage: 'Edit item'
            })}
            onClick={handleEditItem}
            icon="Edit2"
            classes={{
                text: classes.sectionText
            }}
        />
    ) : null;

    const itemLink = useMemo(
        () => resourceUrl(`/${urlKey}${urlSuffix || ''}`),
        [urlKey, urlSuffix]
    );

    const stockStatusMessage =
        stockStatus === 'OUT_OF_STOCK'
            ? formatMessage({
                id: 'product.outOfStock',
                defaultMessage: 'Out-of-stock'
            })
            : '';

    return (
        <>
            <li className={classes.root}>
                <span className={classes.errorText}>{errorMessage}</span>
                <div className={itemClassName}>
                    <Link to={itemLink} className={classes.imageContainer}>
                        <Image
                            alt={name}
                            classes={{
                                root: classes.imageRoot,
                                image: classes.image
                            }}
                            width={IMAGE_SIZE}
                            resource={image}
                        />
                    </Link>
                    <div className={classes.details}>
                        <div className={classes.leftBlock}>
                            <div className={classes.name}>
                                <Link to={itemLink}><RichText content={name} /></Link>
                            </div>
                            <div className={classes.sku}>
                                SKU goes here
                            </div>

                            <ProductOptions
                                options={options}
                                classes={{
                                    options: classes.options,
                                    optionLabel: classes.optionLabel
                                }}
                            />
                            <span className={classes.stockStatusMessage}>
                                {stockStatusMessage}
                            </span>
                            {ship_info &&  // extra note about shipping delays
                                <div>
                                    {ship_info}
                                </div>
                            }
                            <div className={classes.quantity}>
                                <Quantity
                                    itemId={item.id}
                                    initialValue={quantity}
                                    onChange={handleUpdateItemQuantity}
                                />

                            </div>
                        </div>
                        <div className={classes.rightBlock}>
                            <div className={classes.price}>
                                <div className={classes.colHead}>Price</div>
                                <div className={classes.priceWrapper}>
                                    <Price currencyCode={currency} value={unitPrice} /> / {uom}
                                </div>
                            </div>
                            <div className={classes.subTotal}>
                                <div className={classes.colHead}>Subtotal</div>
                                <div className={classes.priceWrapper}>
                                    <Price currencyCode={currency} value={unitPrice * quantity} /> / {item.product.uom}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.cartItemActions}>
                    {isSignedIn &&
                        <div className={classes.addToList}>
                            <div className={classes.toWishlist} onClick={openWishlistPopup}>
                                Move to wishlist
                            </div>
                        </div>
                    }
                    <Button
                        onClick={handleRemoveFromCart}
                        priority="high"
                        classes={{
                            root: classes.root
                        }}
                    >
                        {formatMessage({
                            id: 'am.product.removeFromCart',
                            defaultMessage: 'Remove Item'
                        })}
                    </Button>
                </div>
            </li>
            {showWishlistPopup && (
                <WishlistPopup
                    isPopupVisible={showWishlistPopup}
                    productId={item.product.id}
                    productQty={quantity}
                    closeWishlistPopup={closeWishlistPopup}
                />
            )}
        </>
    );
};

export default Product;

export const REMOVE_ITEM_MUTATION = gql`
    mutation removeItem($cartId: String!, $itemId: Int!) {
        removeItemFromCart(input: { cart_id: $cartId, cart_item_id: $itemId })
            @connection(key: "removeItemFromCart") {
            cart {
                id
                ...CartPageFragment
                ...AvailableShippingMethodsCartFragment
            }
        }
    }
    ${CartPageFragment}
    ${AvailableShippingMethodsCartFragment}
`;

export const UPDATE_QUANTITY_MUTATION = gql`
    mutation updateItemQuantity(
        $cartId: String!
        $itemId: Int!
        $quantity: Float!
    ) {
        updateCartItems(
            input: {
                cart_id: $cartId
                cart_items: [{ cart_item_id: $itemId, quantity: $quantity }]
            }
        ) @connection(key: "updateCartItems") {
            cart {
                id
                ...CartPageFragment
                ...AvailableShippingMethodsCartFragment
            }
        }
    }
    ${CartPageFragment}
    ${AvailableShippingMethodsCartFragment}
`;
