import React, { Fragment, useMemo } from 'react';
import { useWishlistPage } from '@magento/peregrine/lib/talons/WishlistPage/useWishlistPage';
import { deriveErrorMessage } from '@magento/peregrine/lib/util/deriveErrorMessage';

import { useStyle } from '../../venia/classify';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import Wishlist from './wishlist';
import defaultClasses from './wishlistPage.css';

import CreateWishlist from './createWishlist';

const WishlistPage = props => {
    const talonProps = useWishlistPage();
    const {
        errors,
        loading,
        shouldRenderVisibilityToggle,
        wishlists
    } = talonProps;
    const error = errors.get('getCustomerWishlistQuery');

    const classes = useStyle(defaultClasses, props.classes);
    const WISHLIST_DISABLED_MESSAGE = 'The wishlist is not currently available.'
    const wishlistElements = useMemo(() => {
        if (wishlists.length === 0) {
            return <Wishlist />;
        }

        return wishlists.map((wishlist, index) => (
            <Wishlist
                key={wishlist.id}
                isCollapsed={index !== 0}
                data={wishlist}
                shouldRenderVisibilityToggle={shouldRenderVisibilityToggle}
            />
        ));
    }, [shouldRenderVisibilityToggle, wishlists]);

    if (loading && !error) {
        return fullPageLoadingIndicator;
    }

    let content;
    if (error) {
        const derivedErrorMessage = deriveErrorMessage([error]);
        const errorElement =
            derivedErrorMessage === WISHLIST_DISABLED_MESSAGE ? (
                <p>
                    <FormattedMessage
                        id={'wishlistPage.disabledMessage'}
                        defaultMessage={
                            'Sorry, this feature has been disabled.'
                        }
                    />
                </p>
            ) : (
                <p className={classes.fetchError}>
                    Something went wrong. Please refresh and try again.
                </p>
            );

        content = <div className={classes.errorContainer}>{errorElement}</div>;
    } else {
        content = (
            <Fragment>
                <CreateWishlist />
                {wishlistElements}
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
