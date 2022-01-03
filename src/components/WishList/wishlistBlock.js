import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { size, get } from 'lodash';

import { useStyle } from '../../venia/classify';
import defaultClasses from './wishlistPage.css';

import { useApiData } from '../../data.utils';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { GET_CUSTOMER_DETAILS } from '@magento/venia-ui/lib/components/AccountChip/accountChip.gql';
import { apiGetWishlistData, myWishlistPage } from '../../url.utils';
import { REMOVE_PRODUCTS_FROM_WISHLIST } from '@magento/peregrine/lib/talons/WishlistPage/wishlistItem.gql';
import { Link } from 'react-router-dom';
import { replaceSpecialChars } from "../../app.utils"
import Price from '../../venia/components/Price';
import { GET_STORE_CONFIG_DATA } from '../../magento/peregrine/talons/Header/storeSwitcher.gql';

const WishlistPage = props => {
    const [{ isSignedIn: isUserSignedIn }] = useUserContext();
    const [selectedWishlist, setSelectedWishlist] = useState(null);

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

    const refreshWishlist = useCallback(() => {
        getWishlist(apiGetWishlistData(customerData.customer.id))
    }, [getWishlist, customerData])

    useEffect(() => {
        if (!!customerData)
            refreshWishlist();
    }, [loadingCustomerDetails, customerData])

    const classes = useStyle(defaultClasses, props.classes);

    const finalWishlist = useMemo(() => {
        const itemList = []
        if (wishlists && Array.isArray(wishlists)) {
            for (let index = 0; index < wishlists.length; index++) {
                itemList.push(...wishlists[index].product)
            }
        }
        return itemList
    }, [wishlists]);

    let content;
    if (error) {
        const errorElement =
            <p className={classes.fetchError}>
                Something went wrong. Please refresh and try again.
            </p>;

        content = <div className={classes.errorContainer}>{errorElement}</div>;
    } else {
        content = (
            <ProductListing
                wishlists={finalWishlist}
                refreshWishlist={refreshWishlist}
                defaultCurrency={defaultCurrency}
            />
        )
    }

    return (
        <div className={classes.wishListBlock}>
            <div className={classes.blockTitle}>
                <strong>My Wish List</strong> {finalWishlist.length ? `( ${finalWishlist.length} items)` : ""}
            </div>
            <div className={classes.blockContent}>
                {content}
            </div>
            {isUserSignedIn ?
                <div className={classes.blockAction}>
                    <Link to={myWishlistPage()}>
                        <i className={classes.iconWrapper}>
                            <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>arrow-right-thin</title>
                                <path d="M25.875 14l-9.719-9.719 2.281-2.25 13.563 13.563-13.563 13.594-2.281-2.281 9.719-9.719h-25.875v-3.188h25.875z"></path>
                            </svg>
                        </i>
                        <span>Go to Wish List</span>
                    </Link>
                </div>
                :
                null
            }
        </div>
    );
};

export default WishlistPage;


const ProductListing = props => {
    const { wishlists, refreshWishlist, defaultCurrency } = props;

    const classes = useStyle(defaultClasses, props.classes);
    const [removingItemId, setRemovingItemId] = useState(null);

    const [
        removeProductFromWishlist,
        {
            error: removeProductError,
            loading: removeProductLoading
        }
    ] = useMutation(REMOVE_PRODUCTS_FROM_WISHLIST);

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

    const itemList = wishlists.slice(0, 3)

    if (!size(itemList)) {
        return (
            <div className={classes.emptyWishlist}>No Items added to this wishlist.</div>
        )
    }

    return (
        <div className={classes.blockItemsWrapper}>
            <div className={classes.blocktemsList}>
                {itemList.map((item) => {
                    const { product, wishlist_item_id, wishlist_id } = item
                    const { name, price, small_image, request_path } = product
                    return (
                        <div key={wishlist_item_id} className={classes.listItem}>
                            <div className={classes.listItemInfo}>
                                <Link to={`/${request_path}`}>
                                    <div className={classes.listItemImageContainer}>
                                        <div className={classes.listItemImage}>
                                            <img src={small_image} />
                                        </div>
                                    </div>
                                </Link>
                                <div className={classes.listItemDetails}>
                                    <Link to={`/${request_path}`}>
                                        <div className={classes.listItemName}>
                                            {replaceSpecialChars(name)}
                                        </div>
                                    </Link>
                                    <div className={classes.listItemPrice}>
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

                                    <div className={classes.ItemQuickActions}>
                                        <div className={[classes.action, classes.edit].join(" ")}
                                            onClick={() => handleRemoveProduct(wishlist_id, wishlist_item_id)}>
                                            {removingItemId === wishlist_item_id
                                                ? <span>Loading...</span>
                                                : (
                                                    <span>
                                                        <i className={classes.iconWrapper}>
                                                            <svg className={[classes.svgIcon, classes.deleteIcon].join(" ")} width="32" height="32" viewBox="0 0 32 32">
                                                                <title>remove</title>
                                                                <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"></path>
                                                            </svg>
                                                        </i>
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}