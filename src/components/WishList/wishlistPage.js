import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { get, size, map } from 'lodash';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import Mask from '@magento/venia-ui/lib/components/Mask';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { GET_CUSTOMER_DETAILS } from '@magento/venia-ui/lib/components/AccountChip/accountChip.gql';
import { REMOVE_PRODUCTS_FROM_WISHLIST } from '@magento/peregrine/lib/talons/WishlistPage/wishlistItem.gql';
import { Title } from '@magento/venia-ui/lib/components/Head';

import Wishlist from './wishlist';
import defaultClasses from './wishlistPage.css';
import EditWishlist from './editWishlist';
import CreateWishlist from './createWishlist';
import { useApiData } from '../../data.utils';
import { accountPageUrl, apiGetWishlistData, apiUpdateProductWishlist, myWishlistSharePage } from '../../url.utils';
import WishlistCopyProductPopup from './WishlistCopyProductPopup';
import WishlistMoveProductPopup from './WishlistMoveProductPopup';
import { replaceSpecialChars } from "../../app.utils"
import { useStyle } from '../../venia/classify';
import Price from '../../venia/components/Price';
import Button from '../../venia/components/Button';
import AddToCart from '../../venia/components/CartPage/addToCart';
import AddAllToCart from '../../venia/components/CartPage/addAllToCart';
import { GET_STORE_CONFIG_DATA } from '../../magento/peregrine/talons/Header/storeSwitcher.gql';
import { useToasts } from '@magento/peregrine';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { CheckCircle as CheckIcon } from 'react-feather';

const successIcon = (
    <Icon
        src={CheckIcon}
        attrs={{
            width: 18
        }}
    />
);

const WishlistPage = props => {
    const { formatMessage } = useIntl();
    const [{ isSignedIn: isUserSignedIn }] = useUserContext();
    const [selectedWishlist, setSelectedWishlist] = useState(null);
    const [wishlistItemsConfig, setWishlistItemsConfig] = useState(new Map());
    const [_, { addToast }] = useToasts();

    const queryRes = useQuery(GET_STORE_CONFIG_DATA);
    const defaultCurrency = get(queryRes, "data.storeConfig.default_display_currency_code", "");

    const { data: customerData, loading: loadingCustomerDetails } = useQuery(GET_CUSTOMER_DETAILS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !isUserSignedIn
    });
    // response shape : Array of {multi_wishlist_id, customer_id, wishlist_name}
    const { callApi: getWishlist, response: wishlists, loading, error } = useApiData({
        isLazy: true,
        onSuccess: (data) => {
            if (size(data)) {
                setSelectedWishlist(data[0])
            }
        }
    })

    const { callApi: updateWishlist, loading: updateLoading } = useApiData({
        method: "POST",
        isLazy: true,
        onSuccess: (data) => {
            refreshWishlist()
            addToast({
                type: 'success',
                icon: successIcon,
                message: 'Products has been updated in your Wish List',
                dismissable: true,
                timeout: 3000
            });
        }
    })

    const refreshWishlist = useCallback(() => {
        getWishlist(apiGetWishlistData(customerData.customer.id))
    }, [getWishlist, customerData])

    const handleUpdateWishlist = useCallback(() => {
        let wishlist_item = []
        for (const value of wishlistItemsConfig.values()) {
            wishlist_item.push(value)
        }
        updateWishlist(apiUpdateProductWishlist(), { wishlist_item })
    }, [wishlistItemsConfig])

    useEffect(() => {
        if (!!customerData)
            refreshWishlist();
    }, [loadingCustomerDetails, customerData])

    const classes = useStyle(defaultClasses, props.classes);
    let wishlistTabs;
    if (loading || loadingCustomerDetails) {
        wishlistTabs = <LoadingIndicator />;
    }
    else if (size(wishlists) === 0) {
        wishlistTabs = <Wishlist />;
    }
    else if (error) {
        wishlistTabs = <div />;
    }
    else {
        wishlistTabs = (
            <div className={classes.tabsContainer}>
                {(!!size(wishlists)) && wishlists.map((wishlist) => {
                    const selectedWishListId = !!selectedWishlist ? selectedWishlist.multi_wishlist_id : null;
                    return (
                        <div
                            className={`${classes.tabsItem} ${wishlist.multi_wishlist_id === selectedWishListId
                                ? classes.tabsItem_active : ""
                                }`}
                            key={wishlist.multi_wishlist_id}
                            onClick={() => {
                                setSelectedWishlist(wishlist)
                                setWishlistItemsConfig(new Set())
                        }}>
                            <div className={classes.itemSwitch}>
                                {wishlist.wishlist_name}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    let content;
    if (error) {
        const errorElement =
            <p className={classes.fetchError}>
                Something went wrong. Please refresh and try again.
            </p>;

        content = <div className={classes.errorContainer}>{errorElement}</div>;
    } else {
        content = (
            <Fragment>
                <CreateWishlist customerId={get(customerData, 'customer.id', null)}
                    refreshWishlist={refreshWishlist} />
                {wishlistTabs}

                {!!selectedWishlist &&
                    <div className={classes.wishlistPageWrapper}>
                        {selectedWishlist.multi_wishlist_id ?
                            <EditWishlist key={`${selectedWishlist.multi_wishlist_id}-${selectedWishlist.wishlist_name}`}
                                refreshWishlist={refreshWishlist}
                                customerId={get(customerData, 'customer.id', null)}
                                multi_wishlist_id={selectedWishlist.multi_wishlist_id}
                                name={selectedWishlist.wishlist_name} />
                            :
                            null
                        }
                        <div className={classes.wishlistGridWrapper}>
                            <ProductListing defaultCurrency={defaultCurrency}
                                selectedWishlist={selectedWishlist}
                                wishlists={wishlists}
                                refreshWishlist={refreshWishlist}
                                wishlistItemsConfig={wishlistItemsConfig}
                                setWishlistItemsConfig={setWishlistItemsConfig}
                            />
                        </div>
                        {get(selectedWishlist, 'product.length', 0) ? 
                            <div className={classes.actionsToolbarWrapper}>
                                <Button priority="low" onClick={handleUpdateWishlist} disabled={updateLoading}>
                                    {updateLoading ? "Loading..." : "UPDATE WISH LIST"}
                                </Button>
                                <Link to={myWishlistSharePage(selectedWishlist.multi_wishlist_id)}>
                                    <Button priority="low">SHARE WISH LIST</Button>
                                </Link>
                                <AddAllToCartWrapper selectedWishlist={selectedWishlist} />
                            </div>
                            :
                            null
                        }

                    </div>
                }
            </Fragment >
        );
    }

    return (
        <div className={classes.root}>
            <Title>{formatMessage({ id: "wishlistPage.title" })}</Title>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    Wishlist
                </h1>
            </div>
            {content}
            <div>
                <Link to={accountPageUrl()}>
                    <Button>BACK</Button>
                </Link>
            </div>
        </div>
    );
};

export default WishlistPage;


const ProductListing = props => {
    const { 
        selectedWishlist, 
        wishlists, 
        refreshWishlist, 
        defaultCurrency,
        wishlistItemsConfig,
        setWishlistItemsConfig
    } = props;

    const showActions = size(wishlists) > 1
    // { productId, productQty }
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [removingItemId, setRemovingItemId] = useState(null);
    // null | copy | move
    const [actionType, setActionType] = useState(null);
    const classes = useStyle(defaultClasses, props.classes);
    const [
        removeProductFromWishlist,
        {
            error: removeProductError,
            loading: removeProductLoading
        }
    ] = useMutation(REMOVE_PRODUCTS_FROM_WISHLIST);

    const handlePopupClose = useCallback(() => {
        setSelectedProduct(null);
        setActionType(null);
    }, [setSelectedProduct, setActionType]);

    const handleRemoveProduct = useCallback(async (wishlistId, itemId) => {
        if (removeProductLoading) return;
        setRemovingItemId(itemId)
        await removeProductFromWishlist({
            variables: {
                wishlistId: wishlistId,
                wishlistItemsId: [itemId]
            }
        });
        setRemovingItemId(null)
        await refreshWishlist();
    }, [removeProductLoading, removeProductFromWishlist])

    const itemList = get(selectedWishlist, 'product', [])

    if (!size(itemList)) {
        return (
            <div className={classes.emptyWishlist}>No Items added to this wishlist.</div>
        )
    }

    return (
        <div className={classes.galleryItemsWrapper}>
            <Mask isActive={!!selectedProduct} />
            <div className={classes.galleryItemsGrid}>
                {itemList.map((item) => {
                    const { product, qty, description, wishlist_item_id, wishlist_id, product_id } = item
                    const { name, price, small_image, request_path, sku } = product
                    const productName = replaceSpecialChars(name)
                    return (
                        <div key={wishlist_item_id} className={classes.galleryItem}>
                            <div className={classes.galleryItemInfo}>
                                <Link to={`/${request_path}`}>
                                    <div className={classes.galleryItemImageContainer}>
                                        <div className={classes.galleryItemImage}>
                                            <img src={small_image} />
                                        </div>
                                    </div>
                                </Link>

                                <div className={classes.galleryItemDetails}>
                                    <Link to={`/${request_path}`}>
                                        <div className={classes.itemName}>
                                            {productName}
                                        </div>
                                    </Link>
                                    <div className={classes.itemPrice}>
                                        <Price
                                            currencyCode={defaultCurrency}
                                            value={price}
                                            classes={{
                                                currency: classes.currency,
                                                decimal: classes.decimal,
                                                fraction: classes.fraction
                                            }}
                                        />
                                    </div>
                                    <div className={classes.itemComment}>
                                        <textarea className={classes.textarea}
                                            defaultValue={description || ""}
                                            placeholder='Comment'
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                const qtyValue = wishlistItemsConfig.has(wishlist_item_id)
                                                    ? wishlistItemsConfig.get(wishlist_item_id).qty
                                                    : qty
                                                wishlistItemsConfig.set(wishlist_item_id, {
                                                    "item_id" : wishlist_item_id,
                                                    "qty": qtyValue,
                                                    "description": value,
                                                    "multi_wishlist_id": selectedWishlist.multi_wishlist_id
                                                })
                                                setWishlistItemsConfig(wishlistItemsConfig)
                                            }}
                                        />
                                    </div>

                                    <AddToCartBlock 
                                        classes={classes} 
                                        sku={sku} qty={qty} 
                                        onQtyChange={(newQty) => {
                                            const descriptionValue = wishlistItemsConfig.has(wishlist_item_id)
                                                ? wishlistItemsConfig.get(wishlist_item_id).description
                                                : description
                                            wishlistItemsConfig.set(wishlist_item_id, {
                                                "item_id" : wishlist_item_id,
                                                "qty": newQty,
                                                "description": descriptionValue,
                                                "multi_wishlist_id": selectedWishlist.multi_wishlist_id
                                            })
                                            setWishlistItemsConfig(wishlistItemsConfig)
                                        }}
                                    />

                                    <div className={classes.productItemQuickActions}>
                                        <div className={[classes.action, classes.delete].join(" ")}
                                            onClick={() => handleRemoveProduct(wishlist_id, wishlist_item_id)}>
                                            <span>
                                                {removingItemId === wishlist_item_id
                                                    ? <div>Loading...</div>
                                                    : (
                                                        <i className={classes.iconWrapper}>
                                                            <svg className={[classes.svgIcon, classes.deleteIcon].join(" ")} width="32" height="32" viewBox="0 0 32 32">
                                                                <title>remove</title>
                                                                <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"></path>
                                                            </svg>
                                                        </i>
                                                    )
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    {showActions ?
                                        <div className={classes.productItemActions}>
                                            <div className={classes.action} onClick={() => {
                                                setSelectedProduct({ 
                                                    productId: product_id,
                                                    productQty: qty,
                                                    currentWishlistId: selectedWishlist.multi_wishlist_id,
                                                    productName
                                                });
                                                setActionType("copy");
                                            }}>
                                                <span>Copy</span></div>
                                            <div className={classes.action} onClick={() => {
                                                setSelectedProduct({
                                                    productId: wishlist_item_id,
                                                    productQty: qty,
                                                    currentWishlistId: selectedWishlist.multi_wishlist_id,
                                                    productName
                                                });
                                                setActionType("move");
                                            }}>
                                                <span>Move</span></div>
                                        </div>
                                        :
                                        null
                                    }
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
            {(!!selectedProduct && actionType === "copy") &&
                <WishlistCopyProductPopup closeWishlistPopup={handlePopupClose}
                    wishlists={wishlists} refreshWishlist={refreshWishlist} {...selectedProduct} />
            }

            {(!!selectedProduct && actionType === "move") &&
                <WishlistMoveProductPopup closeWishlistPopup={handlePopupClose}
                    wishlists={wishlists} refreshWishlist={refreshWishlist} {...selectedProduct} />
            }
        </div>
    )
}

const AddToCartBlock = ({ classes, qty, sku, onQtyChange }) => {
    const [value, setValue] = useState(qty)

    return (
        <div>
            <div className={classes.itemQty}>
                <span className={classes.qtyLabel}>Qty</span>
                <input
                    className={classes.qtyValue}
                    type="number"
                    placeholder="Enter quantity"
                    defaultValue={value}
                    value={value}
                    onChange={e => {
                        setValue(e.target.value)
                        onQtyChange(e.target.value)
                    }}
                />
            </div>
            <AddToCart
                sku={sku}
                quantity={Number(value)}
                Child={() =>
                    <Button
                        priority="high"
                        type="submit"
                    >
                        Add to Cart
                    </Button>
                }
                Loader={() =>
                    <Button
                        priority="high"
                        disabled
                    >
                        Add to Cart
                </Button>}
            />
        </div>
    )
}

const AddAllToCartWrapper = props => {
    const { selectedWishlist } = props
    const products = get(selectedWishlist, 'product', [])
    
    const cartItems = useMemo(() => {
        return map(products, (data) => ({
            sku: data.product.sku,
            quantity: 1,
        }))
    }, [products])

    if(cartItems.length) {
        return (
            <AddAllToCart 
                cartItems={cartItems}
                Child={()=>
                    <Button
                        priority="low"
                        type="submit"
                    >
                        ADD ALL TO CART
                    </Button>
                }
                Loader={() =>
                    <Button
                        priority="low"
                        disabled
                    >
                        ADD ALL TO CART
                    </Button>
                }
            />
        )
    }
    return null;
}