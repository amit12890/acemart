import React from 'react';
import { func, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import {
    MY_ACCOUNT_URL,
    MY_WISHLIST_URL,
    MY_ORDERS_LIST_URL,
} from '../../../components/AccountPage/constants';

import { useStyle } from '../../classify';

import defaultClasses from './accountMenuItems.css';

const AccountMenuItems = props => {
    const { onSignOut: handleSignOut } = props;

    const menuItems = [
        {
            name: 'My Account',
            id: 'accountMenu.myAccount',
            url: MY_ACCOUNT_URL
        },
        {
            name: 'Order History',
            id: 'accountMenu.orderHistoryLink',
            url: MY_ORDERS_LIST_URL
        },
        {
            name: 'Manage Addresses',
            id: 'accountMenu.manageAddresses',
            url: '/customer/account/edit/'
        },
        {
            name: 'View Wishlists',
            id: 'accountMenu.viewWishlists',
            url: MY_WISHLIST_URL
        }
    ];

    const classes = useStyle(defaultClasses, props.classes);

    const menu = menuItems.map(item => {
        return (
            <Link className={classes.link} key={item.name} to={item.url}>
                <FormattedMessage id={item.id} defaultMessage={item.name} />
            </Link>
        );
    });

    return (
        <div className={classes.root}>
            {menu}
            {!!handleSignOut &&
                <button
                    className={classes.signOut}
                    onClick={handleSignOut}
                    type="button"
                >
                    <FormattedMessage
                        id={'accountMenu.LogoutButtonText'}
                        defaultMessage={'Logout'}
                    />
                </button>
            }
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
