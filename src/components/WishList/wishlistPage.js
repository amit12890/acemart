import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { get, size } from 'lodash';

import { useStyle } from '../../venia/classify';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import Wishlist from './wishlist';
import defaultClasses from './wishlistPage.css';

import EditWishlist from './editWishlist';
import CreateWishlist from './createWishlist';
import { useApiData } from '../../data.utils';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { GET_CUSTOMER_DETAILS } from '@magento/venia-ui/lib/components/AccountChip/accountChip.gql';
import { apiGetWishlistData } from '../../url.utils';


const WishlistPage = props => {
    const [{ isSignedIn: isUserSignedIn }] = useUserContext();
    const [selectedWishlist, setSelectedWishlist] = useState(null);
    console.log("🚀 ~ file: WishlistPage.js ~ line 21 ~ selectedWishlist", selectedWishlist)
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
    const wishlistTabs = useMemo(() => {
        if (loading || loadingCustomerDetails)
            return <LoadingIndicator />;
        if (wishlists.length === 0) {
            return <Wishlist />;
        }

        return (
            <div className={classes.tabsContainer}>
                {wishlists.map((wishlist) => (
                    <div
                        className={classes.tabsItem}
                        key={wishlist.multi_wishlist_id}
                        onClick={() => setSelectedWishlist(wishlist)}>
                        <div className={classes.itemSwitch}>
                            {wishlist.wishlist_name}
                        </div>
                    </div>
                ))}
            </div>
        )
    }, [wishlists, loading, loadingCustomerDetails]);

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

                    <ProductListing wishlist={selectedWishlist} />
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
    const {wishlist} = props;
    const classes = useStyle(defaultClasses, props.classes);
    const itemList = get(wishlist, 'product', [])

    if (!size(itemList)) {
        return (
            <div>No Items added to this wishlist.</div>
        )
    }

    return (
        <div>
        {itemList.map((item) => {
            const {product, qty, wishlist_item_id} = item
            const {name, price, small_image, short_description} = product
            return (
                <div key={wishlist_item_id} className={classes.galleryItemsWrapper}>
                    <div className={classes.galleryItem}>
                        <div className={classes.galleryItemImage}>
                            <img src={small_image} />
                        </div>

                        <div className={classes.galleryItemDetails}>
                            <div className={classes.itemName}>{name}</div>
                            <div className={classes.itemPrice}>{price}</div>
                            <div className={classes.itemComment}>{short_description}</div>
                            <div className={classes.itemQty}>{qty}</div>
                            <div className={classes.addtocartActions}>Add to cart</div>

                            <div className={classes.productItemActions}>
                                <div className={classes.action}><span>Edit</span></div>
                                <div className={classes.action}><span>Copy</span></div>
                                <div className={classes.action}><span>move</span></div>
                                <div className={classes.action}><span>Remove</span></div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })}
        </div>
    )
}