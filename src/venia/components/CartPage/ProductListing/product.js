import React, { useMemo, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useProduct } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProduct';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import Price from '../../Price';

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
        urlSuffix,
    } = product;

    const { uom, ship_info, sku } = item.product

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
                            src={image}
                        />
                    </Link>
                    <div className={classes.details}>
                        <div className={classes.leftBlock}>
                            <div className={classes.name}>
                                <Link to={itemLink}><RichText content={name} /></Link>
                            </div>
                            <div className={classes.sku}>{sku}</div>

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
                    
                        <div className={classes.addToList}>
                            <div className={classes.toWishlist} onClick={openWishlistPopup}>
                                <i className={classes.iconWrapper}>
                                    <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 25 32">
                                        <title>wishlist-full</title>
                                        <path d="M23.594 2q-1.25 0-2.406 0.469t-2.141 1.25-1.766 1.781q-0.781 1.031-1.281 2.094-0.5-1.063-1.281-2.094-0.781-1-1.766-1.781t-2.141-1.25-2.406-0.469q-1.75 0-3.281 0.656t-2.672 1.797-1.797 2.672-0.656 3.281q0 3.531 1.594 5.969 1.594 2.469 3.984 4.688t5.172 4.656q2.813 2.406 5.25 5.906 2.313-3.469 5.094-5.938t5.203-4.719 4.078-4.688q1.625-2.469 1.625-5.875 0-1.75-0.656-3.281t-1.797-2.672-2.672-1.797-3.281-0.656z"></path>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    
                    <Button
                        onClick={handleRemoveFromCart}
                        priority="high"
                        classes={{
                            root: classes.root
                        }}
                    >
                        <i className={classes.iconWrapper}>
                            <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 25 32">
                                <title>trash</title>
                                <path d="M9.156 13.438v10.281q0 0.25-0.172 0.406t-0.422 0.156h-1.125q-0.25 0-0.422-0.156t-0.172-0.406v-10.281q0-0.25 0.172-0.422t0.422-0.172h1.125q0.25 0 0.422 0.172t0.172 0.422zM13.719 13.438v10.281q0 0.25-0.172 0.406t-0.391 0.156h-1.156q-0.25 0-0.406-0.156t-0.156-0.406v-10.281q0-0.25 0.156-0.422t0.406-0.172h1.156q0.219 0 0.391 0.172t0.172 0.422zM18.281 13.438v10.281q0 0.25-0.156 0.406t-0.406 0.156h-1.156q-0.219 0-0.391-0.156t-0.172-0.406v-10.281q0-0.25 0.172-0.422t0.391-0.172h1.156q0.25 0 0.406 0.172t0.156 0.422zM20.563 26.344v-16.906h-16v16.906q0 0.656 0.25 1.016t0.344 0.359h14.844q0.063 0 0.313-0.359t0.25-1.016v0zM8.563 7.156h8l-0.844-2.094q-0.031-0.063-0.141-0.125t-0.172-0.094h-5.656q-0.094 0.031-0.172 0.094t-0.141 0.125zM25.156 7.719v1.125q0 0.25-0.172 0.422t-0.422 0.172h-1.719v16.906q0 1.5-0.828 2.578t-2.016 1.078h-14.844q-1.188 0-2.031-1.047t-0.844-2.516v-17h-1.719q-0.219 0-0.391-0.172t-0.172-0.422v-1.125q0-0.25 0.172-0.406t0.391-0.156h5.531l1.25-3q0.25-0.656 0.953-1.125t1.422-0.469h5.719q0.688 0 1.391 0.469t0.984 1.125l1.25 3h5.5q0.25 0 0.422 0.156t0.172 0.406v0z"></path>
                            </svg>
                        </i>
                        {/* {formatMessage({
                            id: 'am.product.removeFromCart',
                            defaultMessage: 'Remove Item'
                        })} */}
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
