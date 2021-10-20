import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import { useStyle } from '../../venia/classify';

import defaultClasses from './accountSideBar.css';

const AccountSideBar = props => {

    const sidebarItems = [
        {
            name: 'My Account',
            id: 'myAccount',
            url: '/customer/account/'
        },
        {
            name: 'My Orders',
            id: 'orderHistory',
            url: '/sales/order/history/'
        },
        {
            name: 'My Wish List',
            id: 'viewWishlists',
            url: '/wishlist/'
        },
        {
            name: 'Address Book',
            id: 'manageAddresses',
            url: '/customer/address/new/'
        },
        {
            name: 'Account Information',
            id: 'manageAddresses',
            url: '/customer/account/edit/'
        }
    ];

    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            {sidebarItems.map(item => {
                const linkClass = item.url === props.activeUrl ?
                    [classes.link, classes.link_active].join(" ") : classes.link
                return (
                    <Link className={linkClass} key={item.id} to={item.url}>
                        {item.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default AccountSideBar;

AccountSideBar.propTypes = {
    classes: shape({
        link: string,
    }),
    activeUrl: string,
};
