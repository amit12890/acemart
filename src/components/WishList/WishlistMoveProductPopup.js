import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { size } from 'lodash';

import { useStyle } from '../../venia/classify';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import defaultClasses from './wishlistPopup.css';

import { useApiData } from '../../data.utils';
import Button from '../../venia/components/Button';
import { apiUpdateProductWishlist } from '../../url.utils';


const WishlistMoveProductPopup = props => {
    const { wishlists, refreshWishlist, closeWishlistPopup, productId, productQty = 1 ,
        btnText = "Move Item"} = props;
    const [selectedWishlist, setSelectedWishlist] = useState(null);

    const { callApi: moveToWishlist, response: moveResponse,
        loading: moveToWishlistLoading, error: moveToWishlistError } = useApiData({
            method: "post", isLazy: true,
            onSuccess: () => {refreshWishlist(); closeWishlistPopup();}
    })

    const handleSubmit = useCallback(async () => {
        if (!!selectedWishlist) {
            const data = {
                "wishlist_item": {
                    "0": {
                        "item_id" : productId,
                        "qty": productQty,
                        "multi_wishlist_id": selectedWishlist
                    }
                }
            }
            await moveToWishlist(
                apiUpdateProductWishlist(),
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

                {moveToWishlistLoading ?
                    <Button disabled>Loading...</Button>
                    :
                    <Button onClick={handleSubmit}>{btnText}</Button>
                }
            </div>
        )
    }, [wishlists, moveToWishlistLoading, handleSubmit]);

    let content;
    if (moveToWishlistError) {
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

export default WishlistMoveProductPopup;
