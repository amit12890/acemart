import React from 'react';
import { Redirect, Switch, Route, useLocation } from 'react-router-dom';
import { useUserContext } from '@magento/peregrine/lib/context/user';

import AccountSideBar from './accountSideBar';

import {
    accountPageUrl,
    addressBookPage,
    editAccountInfo,
    editAccountPassword,
    myOrderDetailsPage,
    myOrderListPage,
    myWishlistPage,
    newsletterPage,
    reviewPage,
    myWishlistSharePage
} from '../../url.utils';
import { useStyle } from '../../venia/classify';
import defaultClasses from './accountPage.css';
import EditAccountInfo from './editAccountInfo';
import NewsletterSubscription from './newsletterSubscription';
import AddressBookPage from '../../venia/components/AddressBookPage/addressBookPage';
import OrderHistoryPage from '../../venia/components/OrderHistoryPage/orderHistoryPage';
import AccountInformation from './accountInformation';
import WishlistPage from '../WishList';
import OrderDetailsPage from './orderDetailsPage';
import CompareListBlock from '../CompareListPage/compareListBlock';
import WishlistBlock from '../WishList/wishlistBlock';
import ReviewPage from "./myReviewPage";

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
                <CompareListBlock />
                <WishlistBlock />
            </div>
            <div className={classes.content_wrapper}>
                <Switch>
                    <Route exact path={accountPageUrl()}>
                        <AccountInformation />
                    </Route>
                    <Route exact path={myWishlistPage()}>
                        <WishlistPage />
                    </Route>
                    <Route exact path={myOrderListPage()}>
                        <OrderHistoryPage />
                    </Route>
                    <Route exact path={editAccountInfo()}>
                        <EditAccountInfo path={path} />
                    </Route>
                    <Route exact path={editAccountPassword()}>
                        <EditAccountInfo path={path} />
                    </Route>
                    <Route exact path={newsletterPage()}>
                        <NewsletterSubscription />
                    </Route>
                    <Route path={addressBookPage()}>
                        <AddressBookPage path={path} />
                    </Route>
                    <Route path={myOrderDetailsPage()}>
                        <OrderDetailsPage />
                    </Route>
                    <Route path={reviewPage()}>
                        <ReviewPage />
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