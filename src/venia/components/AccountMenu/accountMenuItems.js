import React, { useCallback } from 'react';
import { func, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { get } from 'lodash';

import { useAccountChip } from '@magento/peregrine/lib/talons/AccountChip/useAccountChip';
import { GET_CUSTOMER_DETAILS } from '@magento/venia-ui/lib/components/AccountChip/accountChip.gql';

import { useStyle } from '../../classify';

import {
    accountPageUrl,
    accountQandAPage,
    addressBookPage,
    editAccountInfo,
    myOrderListPage,
    myWishlistPage,
    newsletterPage,
    reviewPage
} from '../../../url.utils';
import defaultClasses from './accountMenuItems.css';
import { useDispatch } from 'react-redux';
import { resetCompareList } from '../../../data/compare/compare.action';
import { resetCheckout } from '../../../data/checkout/checkout.action';
import { useWindowSize } from '../../../magento/peregrine/talons/ProductImageCarousel/useWindowSize';

const AccountMenuItems = props => {
    const { onSignOut: handleSignOut, signingOut, onNavigate } = props;
    const { isMobile } = useWindowSize();
    const dispatch = useDispatch()
    const { isMobile } = useWindowSize();
    const talonProps = useAccountChip({
        queries: {
            getCustomerDetailsQuery: GET_CUSTOMER_DETAILS
        }
    });
    const { currentUser, isLoadingUserName, isUserSignedIn } = talonProps;

    let headerText = 'Welcome back';
    if (!isLoadingUserName) {
        headerText = `Welcome back, ${get(currentUser, 'firstname', '')}`;
    }

    const menuItems = isMobile
        ? [
            {
                name: 'My Account',
                id: 'accountMenu.myAccount',
                url: accountPageUrl()
            },
            {
                name: 'My Orders',
                id: 'accountMenu.myOrders',
                url: myOrderListPage()
            },
            {
                name: 'My Wish List',
                id: 'accountMenu.myWishlist',
                url: myWishlistPage()
            },
            {
                name: 'Address Book',
                id: 'accountMenu.addressBook',
                url: addressBookPage()
            },
            {
                name: 'Account Information',
                id: 'accountMenu.accountInformation',
                url: editAccountInfo()
            },
            {
                name: 'My Product Reviews',
                id: 'accountMenu.myProductReviews',
                url: reviewPage()
            },
            {
                name: 'Newsletter Subscription',
                id: 'accountMenu.newsletterSubscription',
                url: newsletterPage()
            },
            {
                name: 'Questions/Answers',
                id: 'accountMenu.questionsAnswers',
                url: accountQandAPage()
            }
        ]
        : [
            {
                name: 'My Account',
                id: 'accountMenu.myAccount',
                url: accountPageUrl()
            },
            {
                name: 'Order History',
                id: 'accountMenu.orderHistory',
                url: myOrderListPage()
            },
            {
                name: 'Manage Addresses',
                id: 'accountMenu.manageAddresses',
                url: addressBookPage()
            },
            {
                name: 'View Wishlists',
                id: 'accountMenu.viewWishlists',
                url: myWishlistPage()
            }
        ];

    const classes = useStyle(defaultClasses, props.classes);

    const handleRedirect = useCallback(() => {
        if (!!onNavigate) onNavigate();
    }, [onNavigate])

    const onSignOutPress = useCallback(() => {
        dispatch(resetCompareList())
        dispatch(resetCheckout())
        handleSignOut()
    }, [])

    const menu = menuItems.map(item => {
        return (
            <Link
                className={classes.link}
                key={item.name}
                to={item.url}
                onClick={handleRedirect}
            >
                <FormattedMessage id={item.id} defaultMessage={item.name} />
            </Link>
        );
    });

    return (
        <div className={classes.root}>
            {isMobile ? null : (
                <div className={classes.welcomeMessage}>{headerText}</div>
            )}
            {menu}
            {!!handleSignOut && (
                <button
                    className={classes.signOut}
                    onClick={onSignOutPress}
                    type="button"
                >
                    {signingOut ? (
                        'Loading...'
                    ) : (
                        <FormattedMessage
                            id={'accountMenu.LogoutButtonText'}
                            defaultMessage={'Logout'}
                        />
                    )}
                </button>
            )}
        </div>
    );
};

export default AccountMenuItems;

AccountMenuItems.propTypes = {
    classes: shape({
        link: string,
        signOut: string
    }),
    // if parent don't pass onSignOut prop don't show extra signOut button
    onSignOut: func
};
