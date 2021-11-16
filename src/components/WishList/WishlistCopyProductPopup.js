import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { size } from 'lodash';

import { useStyle } from '../../venia/classify';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import defaultClasses from './wishlistPopup.css';

import { useApiData } from '../../data.utils';
import Button from '../../venia/components/Button';
import { apiAddToWishlist } from '../../url.utils';


const WishlistCopyProductPopup = props => {
    const { wishlists, refreshWishlist, closeWishlistPopup, productId, productQty = 1 ,
        btnText = "Copy Item"} = props;
    const [selectedWishlist, setSelectedWishlist] = useState(null);


    const { callApi: addToWishlist, response: addResponse,
        loading: addToWishlistLoading, error: addToWishlistError } = useApiData({
        method: "post", isLazy: true,
        // refresh wishlist data on success
        onSuccess: () => {refreshWishlist(); closeWishlistPopup();}
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

    const classes = useStyle(defaultClasses, props.classes);
    const wishlistTabs = useMemo(() => {
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

                {addToWishlistLoading ?
                    <Button disabled>Loading...</Button>
                    :
                    <Button onClick={handleSubmit}>{btnText}</Button>
                }
            </div>
        )
    }, [wishlists, addToWishlistLoading, handleSubmit]);

    let content;
    if (addToWishlistError) {
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
            <div className={classes.root}>
                <h1 className={classes.heading}>
                    Please choose a Wish List for the selected product:
                </h1>
                {content}
                <Button onClick={closeWishlistPopup}>Close</Button>
            </div>
        </Portal>
    );
};

export default WishlistCopyProductPopup;
