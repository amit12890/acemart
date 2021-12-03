import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { size } from 'lodash';

import { useStyle } from '../../venia/classify';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import defaultClasses from './wishlistPopup.css';

import { useApiData } from '../../data.utils';
import Button from '../../venia/components/Button';
import { apiAddToWishlist } from '../../url.utils';


const WishlistCopyProductPopup = props => {
    const { wishlists, refreshWishlist, closeWishlistPopup, productId, productQty = 1,
        btnText = "Copy Item" } = props;
    const [selectedWishlist, setSelectedWishlist] = useState(null);


    const { callApi: addToWishlist, response: addResponse,
        loading: addToWishlistLoading, error: addToWishlistError } = useApiData({
            method: "post", isLazy: true,
            // refresh wishlist data on success
            onSuccess: () => { refreshWishlist(); closeWishlistPopup(); }
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
            <div className={classes.listItemWrapper}>
                {wishlists.map((wishlist) => (
                    <div className={classes.listItem} key={wishlist.multi_wishlist_id}>
                        <label>
                            <input
                                name={wishlist.wishlist_name}
                                type="checkbox"
                                checked={!!selectedWishlist &&
                                    wishlist.multi_wishlist_id === selectedWishlist}
                                onChange={() => setSelectedWishlist(wishlist.multi_wishlist_id)} />
                            <span className={classes.itemLabel}>{wishlist.wishlist_name}</span>
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
                            <h1 className={classes.heading}>
                                Please choose a Wish List for the selected product:
                            </h1>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default WishlistCopyProductPopup;
