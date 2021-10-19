import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom'

import AccountSideBar from './accountSideBar';
import UserAccount from './userAccount';
import UserWishlist from './userWishlist';
import UserOrderList from './UserOrderList';

import { 
    MY_ACCOUNT_URL,
    MY_WISHLIST_URL,
    MY_ORDERS_LIST_URL,
} from './constants';
import { useStyle } from '../../venia/classify';
import defaultClasses from './accountPage.css';

const AccountPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);
    const path = useLocation().pathname;

    const content = useMemo(() => {
        switch (path) {
            case MY_ACCOUNT_URL:
                return <UserAccount />

            case MY_WISHLIST_URL:
                return <UserWishlist />

            case MY_ORDERS_LIST_URL:
                return <UserOrderList />
        
            default:
                return <div>Page Not Found</div>
        }
    }, [path])

    return (
        <div className={classes.wrapper}>
            <div className={classes.sidebar_wrapper}>
                <AccountSideBar />
            </div>
            <div className={classes.content_wrapper}>
                {content}
            </div>
        </div>
    );
}

export default AccountPage