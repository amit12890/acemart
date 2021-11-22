import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { get, size } from 'lodash';

import { useStyle } from '../../venia/classify';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import Wishlist from './wishlist';
import Mask from '@magento/venia-ui/lib/components/Mask';
import defaultClasses from './wishlistPage.css';

import EditWishlist from './editWishlist';
import CreateWishlist from './createWishlist';
import { useApiData } from '../../data.utils';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { GET_CUSTOMER_DETAILS } from '@magento/venia-ui/lib/components/AccountChip/accountChip.gql';
import { apiGetWishlistData } from '../../url.utils';
import WishlistCopyProductPopup from './WishlistCopyProductPopup';
import { REMOVE_PRODUCTS_FROM_WISHLIST } from '@magento/peregrine/lib/talons/WishlistPage/wishlistItem.gql';
import WishlistMoveProductPopup from './WishlistMoveProductPopup';


const WishlistPage = props => {
    const [{ isSignedIn: isUserSignedIn }] = useUserContext();
    const [selectedWishlist, setSelectedWishlist] = useState(null);

    const { data: customerData, loading: loadingCustomerDetails } = useQuery(GET_CUSTOMER_DETAILS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !isUserSignedIn
    });
    // response shape : Array of {multi_wishlist_id, customer_id, wishlist_name}
    const { callApi: getWishlist, response: wishlists, loading, error } = useApiData({
        isLazy: true,
        onSuccess: (data) => {
            if (!selectedWishlist && !!size(data)) {
                setSelectedWishlist(data[0])
            }
        }
    })

    const refreshWishlist = useCallback(() => {
        getWishlist(apiGetWishlistData(customerData.customer.id))
    }, [getWishlist, customerData])

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
                            onClick={() => setSelectedWishlist(wishlist)}>
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
                    <div>
                        <EditWishlist key={`${selectedWishlist.multi_wishlist_id}-${selectedWishlist.wishlist_name}`}
                            refreshWishlist={refreshWishlist}
                            customerId={get(customerData, 'customer.id', null)}
                            multi_wishlist_id={selectedWishlist.multi_wishlist_id}
                            name={selectedWishlist.wishlist_name} />

                        <ProductListing selectedWishlist={selectedWishlist} wishlists={wishlists}
                            refreshWishlist={refreshWishlist} />
                    </div>
                }
            </Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    Wishlist
                </h1>
            </div>
            {content}
        </div>
    );
};

export default WishlistPage;


const ProductListing = props => {
    const { selectedWishlist, wishlists, refreshWishlist } = props;
    // { productId, productQty }
    const [selectedProduct, setSelectedProduct] = useState(null);
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
        await removeProductFromWishlist({
            variables: {
                wishlistId: wishlistId,
                wishlistItemsId: [itemId]
            }
        });
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
                    const { product, qty, wishlist_item_id, wishlist_id, product_id } = item
                    const { name, price, small_image, short_description } = product
                    return (
                        <div key={wishlist_item_id} className={classes.galleryItem}>
                            <div className={classes.galleryItemInfo}>
                                <div className={classes.galleryItemImageContainer}>
                                    <div className={classes.galleryItemImage}>
                                        <img src={small_image} />
                                    </div>

                                </div>

                                <div className={classes.galleryItemDetails}>
                                    <div className={classes.itemName}>{name}</div>
                                    <div className={classes.itemPrice}>{price}</div>
                                    <div className={classes.itemComment}>
                                        <textarea className={classes.textarea}>
                                        </textarea>
                                    </div>
                                    <div className={classes.itemQty}>
                                        <span className={classes.qtyLabel}>Qty</span>
                                        <span className={classes.qtyValue}>{qty}</span></div>
                                    <div className={classes.boxCart}>

                                        Add to cart
                                    </div>

                                    <div className={classes.productItemQuickActions}>
                                        <div className={[classes.action, classes.delete].join(" ")}>
                                            <span>
                                                <i className={classes.iconWrapper}>
                                                    <svg className={[classes.svgIcon, classes.deleteIcon].join(" ")} width="32" height="32" viewBox="0 0 32 32">
                                                        <title>remove</title>
                                                        <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"></path>
                                                    </svg>
                                                </i>
                                            </span>
                                        </div>

                                        <div className={[classes.action, classes.edit].join(" ")} onClick={() => handleRemoveProduct(wishlist_id, wishlist_item_id)}>
                                            {removeProductLoading ? <span>Loading...</span> :
                                                <span>
                                                    <i className={classes.iconWrapper}>
                                                        <svg className={[classes.svgIcon, classes.editIcon].join(" ")} width="27" height="32" viewBox="0 0 27 32">
                                                            <title>edit</title>
                                                            <path d="M6.469 27.719l1.625-1.625-4.188-4.188-1.625 1.625v1.906h2.281v2.281h1.906zM15.813 11.156q0-0.188-0.109-0.297t-0.266-0.109q-0.094 0-0.172 0.031t-0.141 0.094l-9.688 9.688q-0.063 0.063-0.094 0.141t-0.031 0.141q0 0.188 0.109 0.297t0.297 0.109q0.063 0 0.141-0.031t0.172-0.094l9.656-9.688q0.063-0.063 0.094-0.141t0.031-0.141v0zM14.844 7.719l7.438 7.438-14.844 14.844h-7.438v-7.438zM27.063 9.438q0 0.438-0.188 0.859t-0.469 0.734l-2.969 2.969-7.438-7.438 2.969-2.938q0.313-0.313 0.734-0.5t0.859-0.188q0.469 0 0.891 0.188t0.734 0.5l4.219 4.188q0.281 0.313 0.469 0.734t0.188 0.891v0z"></path>
                                                        </svg>
                                                    </i>
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    <div className={classes.productItemActions}>
                                        <div className={classes.action} onClick={() => {
                                            setSelectedProduct({ productId: product_id, productQty: qty });
                                            setActionType("copy");
                                        }}>
                                            <span>Copy</span></div>
                                        <div className={classes.action} onClick={() => {
                                            setSelectedProduct({ productId: wishlist_item_id, productQty: qty });
                                            setActionType("move");
                                        }}>
                                            <span>Move</span></div>
                                    </div>
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