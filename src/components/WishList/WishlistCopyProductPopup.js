import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { size, find } from 'lodash';

import { useStyle } from '../../venia/classify';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import defaultClasses from './wishlistPopup.css';

import { useApiData } from '../../data.utils';
import Button from '../../venia/components/Button';
import { apiAddToWishlist } from '../../url.utils';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { useToasts } from '@magento/peregrine/lib/Toasts';
import { CheckCircle as CheckCircleIcon } from 'react-feather';


const successIcon = (
    <Icon
        src={CheckCircleIcon}
        attrs={{
            width: 18
        }}
    />
);

const WishlistCopyProductPopup = props => {
    const { wishlists, refreshWishlist, closeWishlistPopup, productId, productQty = 1,
        btnText = "Copy Item", currentWishlistId, productName, description } = props;
    const [selectedWishlist, setSelectedWishlist] = useState(new Set());
    const [_, { addToast }] = useToasts();


    const { callApi: addToWishlist, response: addResponse,
        loading: addToWishlistLoading, error: addToWishlistError } = useApiData({
            method: "post", isLazy: true,
            // refresh wishlist data on success
            onSuccess: (res) => { 
                refreshWishlist(); 
                closeWishlistPopup();
                addToast({
                    type: 'success',
                    icon: successIcon,
                    message: `${productName} has been copied to selected wish list.`,
                    dismissable: true,
                    timeout: 3000
                });
            }
        })

    const handleSubmit = useCallback(async () => {
        const data = { product_id: productId, qty: productQty, description };
        const wishlistIds = [...selectedWishlist]
        let params = "?"
        for (let index = 0; index < wishlistIds.length; index++) {
            const id = wishlistIds[index];
            params = params + `wishlist_id[${index}]=${id}&`
        }
        await addToWishlist(apiAddToWishlist(params), data);

    }, [selectedWishlist, productId, productQty, description])

    const classes = useStyle(defaultClasses, props.classes);
    const wishlistTabs = useMemo(() => {
        if (size(wishlists) === 0)
            return <div>You have no wishlist to choose from !!</div>

        return (
            <div className={classes.listItemWrapper}>
                {wishlists.map((wishlist) => {
                    if(wishlist.multi_wishlist_id === currentWishlistId) {
                        return null
                    } else {
                        return (
                            <div className={classes.listItem} key={wishlist.multi_wishlist_id}>
                                <label>
                                    <input
                                        name={wishlist.wishlist_name}
                                        type="checkbox"
                                        checked={selectedWishlist.has(wishlist.multi_wishlist_id)}
                                        onChange={() => {
                                            selectedWishlist.has(wishlist.multi_wishlist_id) ?
                                            selectedWishlist.delete(wishlist.multi_wishlist_id) :
                                            selectedWishlist.add(wishlist.multi_wishlist_id)
                                            setSelectedWishlist(new Set(selectedWishlist))
                                        }}
                                    />
                                    <span className={classes.itemLabel}>{wishlist.wishlist_name}</span>
                                </label>
                            </div>
                        )
                    }
                })}

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
