import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { get, size } from 'lodash';

import { useStyle } from '../../venia/classify';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import defaultClasses from './wishlistPopup.css';

import CreateWishlist from './createWishlist';
import { useApiData } from '../../data.utils';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { GET_CUSTOMER_DETAILS } from '@magento/venia-ui/lib/components/AccountChip/accountChip.gql';
import Button from '../../venia/components/Button';
import { apiAddToWishlist, apiGetWishlistData } from '../../url.utils';


const WishlistPopup = props => {
    const { closeWishlistPopup, productId, productQty = 1 } = props;
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
    })

    const refreshWishlist = useCallback(() => {
        getWishlist(apiGetWishlistData(customerData.customer.id));
    }, [getWishlist, customerData])

    const { callApi: addToWishlist, response: addResponse, loading: addToWishlistLoading, error: addToWishlistError } = useApiData({
        method: "post", isLazy: true,
    })

    const handleSubmit = useCallback(async () => {
        const data = { product_id: productId, qty: productQty };
        if (!!selectedWishlist) {
            await addToWishlist(
                apiAddToWishlist(selectedWishlist),
                data,
            )
        }
    }, [selectedWishlist, productId, productQty])

    useEffect(() => {
        if (!!customerData)
            refreshWishlist();
    }, [loadingCustomerDetails, customerData])

    const classes = useStyle(defaultClasses, props.classes);
    const wishlistTabs = useMemo(() => {
        if (loading || loadingCustomerDetails)
            return <LoadingIndicator />;
        if (size(wishlists) === 0)
            return <div>You have no wishlist to choose from !!</div>

        return (
            <div>
                {wishlists.map((wishlist) => (
                    <div key={wishlist.multi_wishlist_id}>
                        <label>
                            <input
                                name={wishlist.wishlist_name}
                                type="checkbox"
                                checked={!!selectedWishlist &&
                                    wishlist.multi_wishlist_id === selectedWishlist}
                                onChange={() => setSelectedWishlist(wishlist.multi_wishlist_id)} />
                            {wishlist.wishlist_name}
                        </label>
                    </div>
                ))}
                <CreateWishlist customerId={get(customerData, 'customer.id', null)}
                    refreshWishlist={refreshWishlist} />

                {addToWishlistLoading ?
                    <Button disabled>Loading...</Button>
                    :
                    <Button onClick={handleSubmit}>Add To Wishlist</Button>
                }
            </div>
        )
    }, [wishlists, loading, addToWishlistLoading, customerData, loadingCustomerDetails, handleSubmit]);

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
                {wishlistTabs}
            </Fragment>
        );
    }

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <div className={classes.root}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.modalHeader}>
                            <div className={classes.modalClose}>
                                <Button onClick={closeWishlistPopup}>
                                    <i className={classes.iconWrapper}>
                                        <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <title>remove</title>
                                            <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"></path>
                                        </svg>
                                    </i>
                                </Button>
                            </div>
                        </div>
                        <div className={classes.content}>
                            <div className={classes.heading}>
                                Please choose a Wish List for the selected product:
                            </div>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default WishlistPopup;
