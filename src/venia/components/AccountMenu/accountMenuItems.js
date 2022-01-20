import React, { useCallback } from 'react';
import { func, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { get } from "lodash";

import { useAccountChip } from '@magento/peregrine/lib/talons/AccountChip/useAccountChip';
import { GET_CUSTOMER_DETAILS } from '@magento/venia-ui/lib/components/AccountChip/accountChip.gql';

import { useStyle } from '../../classify';

import {
    accountPageUrl,
    addressBookPage,
    myOrderListPage,
    myWishlistPage
} from '../../../url.utils';
import defaultClasses from './accountMenuItems.css';

const AccountMenuItems = props => {
    const { onSignOut: handleSignOut, signingOut, onNavigate } = props;
    const talonProps = useAccountChip({
        queries: {
            getCustomerDetailsQuery: GET_CUSTOMER_DETAILS
        }
    });
    const { currentUser, isLoadingUserName, isUserSignedIn } = talonProps;

    let headerText = 'Welcome back';
    if (!isLoadingUserName) {
        headerText = `Welcome back, ${get(currentUser, "firstname", "")}`;
    }

    const menuItems = [
        {
            name: 'My Account',
            id: 'accountMenu.myAccount',
            url: accountPageUrl()
        },
        {
            name: 'Order History',
            id: 'accountMenu.orderHistoryLink',
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
        if(!!onNavigate) onNavigate();
    }, [onNavigate])

    const menu = menuItems.map(item => {
        return (
            <Link className={classes.link} key={item.name} to={item.url} onClick={handleRedirect}>
                <FormattedMessage id={item.id} defaultMessage={item.name} />
            </Link>
        );
    });

    return (
        <div className={classes.root}>
            <div className={classes.welcomeMessage}>{headerText}</div>
            {menu}
            {!!handleSignOut && (
                <button
                    className={classes.signOut}
                    onClick={handleSignOut}
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
