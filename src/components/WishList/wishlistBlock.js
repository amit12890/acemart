import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { size } from 'lodash';

import { useStyle } from '../../venia/classify';
import defaultClasses from './wishlistPage.css';

import { useApiData } from '../../data.utils';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { GET_CUSTOMER_DETAILS } from '@magento/venia-ui/lib/components/AccountChip/accountChip.gql';
import { apiGetWishlistData, myWishlistPage } from '../../url.utils';
import { REMOVE_PRODUCTS_FROM_WISHLIST } from '@magento/peregrine/lib/talons/WishlistPage/wishlistItem.gql';
import { Link } from 'react-router-dom';


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

    const finalWishlist = useMemo(() => {
        const itemList = []
        if(wishlists && Array.isArray(wishlists)) {
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
            />
        )
    }

    return (
        <div>
            <div>My Wish List {finalWishlist.length ? `( ${finalWishlist.length} items)` : ""}</div>
            <div>
                {content}
            </div>
            <div>
                <Link to={myWishlistPage()}>Go to Wish List</Link>
            </div>
        </div>
    );
};

export default WishlistPage;


const ProductListing = props => {
    const { wishlists, refreshWishlist } = props;

    const classes = useStyle(defaultClasses, props.classes);

    const [
        removeProductFromWishlist,
        {
            error: removeProductError,
            loading: removeProductLoading
        }
    ] = useMutation(REMOVE_PRODUCTS_FROM_WISHLIST);

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

    const itemList = wishlists.slice(0, 3)

    if (!size(itemList)) {
        return (
            <div className={classes.emptyWishlist}>No Items added to this wishlist.</div>
        )
    }

    return (
        <div className={classes.galleryItemsWrapper}>
            <div className={classes.galleryItemsGrid}>
                {itemList.map((item) => {
                    const { product, wishlist_item_id, wishlist_id } = item
                    const { name, price, small_image } = product
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

                                    <div className={classes.productItemQuickActions}>
                                        <div className={[classes.action, classes.edit].join(" ")} onClick={() => handleRemoveProduct(wishlist_id, wishlist_item_id)}>
                                            {removeProductLoading ? <span>Loading...</span> :
                                                <span>
                                                    <i className={classes.iconWrapper}>
                                                        <svg className={[classes.svgIcon, classes.deleteIcon].join(" ")} width="32" height="32" viewBox="0 0 32 32">
                                                            <title>remove</title>
                                                            <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"></path>
                                                        </svg>
                                                    </i>
                                                </span>
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