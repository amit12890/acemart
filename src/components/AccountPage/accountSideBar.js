import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import { useStyle } from '../../venia/classify';

import defaultClasses from './accountSideBar.css';

const AccountSideBar = props => {

    const sidebarItems = [
        {
            name: 'My Account',
            id: 0,
            url: '/customer/account/'
        },
        {
            name: 'My Orders',
            id: 1,
            url: '/sales/order/history/'
        },
        {
            name: 'My Wish List',
            id: 2,
            url: '/wishlist/'
        },
        {
            name: 'Address Book',
            id: 3,
            url: '/customer/address/'
        },
        {
            name: 'Account Information',
            id: 4,
            url: '/customer/account/edit/'
        },
        {
            name: 'Stored Payment Methods',
            id: 5,
            url: '/vault/cards/listaction/'
        },
        {
            name: 'My Product Reviews',
            id: 6,
            url: '/review/customer/'
        },
        {
            name: 'Newsletter Subscription',
            id: 7,
            url: '/newsletter/manage/'
        },
        {
            name: 'Questions/Answers',
            id: 8,
            url: '/itorisproductQa/customer/'
        },
    ];

    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <ul>
            {sidebarItems.map(item => {
                const linkClass = item.url === props.activeUrl ?
                    [classes.link, classes.link_active].join(" ") : classes.link
                return (
                    <li key={item.id} className={[classes.navItem, classes.item].join(" ")}>
                        <Link className={linkClass} to={item.url}>
                           <span>{item.name}</span>
                        </Link>
                    </li>
                );
            })}
            </ul>
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
