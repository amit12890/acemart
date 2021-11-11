import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { get, find, size } from 'lodash';

import { useStyle } from '../../venia/classify';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import Wishlist from './wishlist';
import defaultClasses from './wishlistPage.css';

import EditWishlist from './editWishlist';
import CreateWishlist from './createWishlist';
import { useApiData } from '../../data.utils';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { GET_CUSTOMER_DETAILS } from '@magento/venia-ui/lib/components/AccountChip/accountChip.gql';


const WishlistPage = props => {
    const [{ isSignedIn: isUserSignedIn }] = useUserContext();
    const [selectedWishlist, setSelectedWishlist] = useState(null);
    const { data: customerData, loading: loadingCustomerDetails } = useQuery(GET_CUSTOMER_DETAILS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !isUserSignedIn
    });
    // response shape : Array of {multi_wishlist_id, customer_id, wishlist_name}
    const {callApi: getWishlist, response: wishlists, loading, error} = useApiData({
        isLazy: true,
        onSuccess: (data) => {
            if (!selectedWishlist && !!size(data)) {
                setSelectedWishlist(data[0])
            }
        }
    })

    const refreshWishlist = useCallback(() => {
        getWishlist(
            `https://dev-acemart.magedelight.magentoprojects.net/rest/V1/bsscommerce/multiwishlist/getlist/${customerData.customer.id}`
        );
    }, [getWishlist, customerData])

    useEffect(() => {
        if (!!customerData)
            refreshWishlist();
    }, [loadingCustomerDetails, customerData])

    const classes = useStyle(defaultClasses, props.classes);
    const wishlistTabs = useMemo(() => {
        if (loading || loadingCustomerDetails) return null
        if (wishlists.length === 0) {
            return <Wishlist />;
        }

        return wishlists.map((wishlist) => (
            <div key={wishlist.multi_wishlist_id}
                onClick={() => setSelectedWishlist(wishlist)}
            >
                <div>{wishlist.wishlist_name}</div>
            </div>
        ));
    }, [wishlists, loading, loadingCustomerDetails]);

    if (loading || loadingCustomerDetails) {
        return fullPageLoadingIndicator;
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
                    <EditWishlist key={`${selectedWishlist.multi_wishlist_id}-${selectedWishlist.wishlist_name}`}
                        refreshWishlist={refreshWishlist}
                        customerId={get(customerData, 'customer.id', null)}
                        multi_wishlist_id={selectedWishlist.multi_wishlist_id}
                        name={selectedWishlist.wishlist_name} />
                }
            </Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>
                Wishlist
            </h1>
            {content}
        </div>
    );
};

export default WishlistPage;
