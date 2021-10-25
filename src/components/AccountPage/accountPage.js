import React from 'react';
import { Redirect, Switch, Route, useLocation } from 'react-router-dom';
import { useUserContext } from '@magento/peregrine/lib/context/user';

import AccountSideBar from './accountSideBar';
import UserAccount from './userAccount';
import UserWishlist from './userWishlist';
import UserOrderList from './userOrderList';

import { 
    MY_ACCOUNT_URL,
    MY_WISHLIST_URL,
    MY_ORDERS_LIST_URL,
    EDIT_ACCOUNT_INFO,
    EDIT_ACCOUNT_PASSWROD,
    NEWSLETTER_URL,
    ADDRESSBOOK_PAGE_URL,
} from './constants';
import { useStyle } from '../../venia/classify';
import defaultClasses from './accountPage.css';
import EditAccountInfo from './editAccountInfo';
import NewsletterSubscription from './newsletterSubscription';
import AddressBookPage from '../../venia/components/AddressBookPage/addressBookPage';

const AccountPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);
    const path = useLocation().pathname;
    const [{ isSignedIn }] = useUserContext();

    if (!isSignedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.sidebar_wrapper}>
                <AccountSideBar activeUrl={path} />
            </div>
            <div className={classes.content_wrapper}>
                <Switch>
                    <Route exact path={MY_ACCOUNT_URL}>
                        <UserAccount />
                    </Route>
                    <Route exact path={MY_WISHLIST_URL}>
                        <UserWishlist />
                    </Route>
                    <Route exact path={MY_ORDERS_LIST_URL}>
                        <UserOrderList />
                    </Route>
                    <Route exact path={EDIT_ACCOUNT_INFO}>
                        <EditAccountInfo path={path} />
                    </Route>
                    <Route exact path={EDIT_ACCOUNT_PASSWROD}>
                        <EditAccountInfo path={path} />
                    </Route>
                    <Route exact path={NEWSLETTER_URL}>
                        <NewsletterSubscription />
                    </Route>
                    <Route path={ADDRESSBOOK_PAGE_URL}>
                        <AddressBookPage path={path} />
                    </Route>
                    <Route exact path="*">
                        <div>Page Not Found !!</div>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default AccountPage