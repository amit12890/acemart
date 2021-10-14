import React from 'react';
import { func, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { useStyle } from '../../classify';

import defaultClasses from './accountMenuItems.css';

const AccountMenuItems = props => {
    const { onSignOut: handleSignOut } = props;

    const menuItems = [
        {
            name: 'My Account',
            id: 'accountMenu.myAccount',
            url: '/customer/account'
        },
        {
            name: 'Order History',
            id: 'accountMenu.orderHistoryLink',
            url: '/sales/order/history/'
        },
        {
            name: 'Manage Addresses',
            id: 'accountMenu.manageAddresses',
            url: '/address-book'
        },
        {
            name: 'View Wishlists',
            id: 'accountMenu.viewWishlists',
            url: 'wishlist/'
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
            <button
                className={classes.signOut}
                onClick={handleSignOut}
                type="button"
            >
                <FormattedMessage
                    id={'accountMenu.signOutButtonText'}
                    defaultMessage={'Sign Out'}
                />
            </button>
        </div>
    );
};

export default AccountMenuItems;

AccountMenuItems.propTypes = {
    classes: shape({
        link: string,
        signOut: string
    }),
    onSignOut: func
};
