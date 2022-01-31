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
    myWishlistSharePage,
    newsletterPage,
    reviewPage,
    accountQandAPage
} from '../../url.utils';
import { useStyle } from '../../venia/classify';
import defaultClasses from './accountPage.css';
import EditAccountInfo from './editAccountInfo';
import NewsletterSubscription from './newsletterSubscription';
import AddressBookPage from '../../venia/components/AddressBookPage/addressBookPage';
import OrderHistoryPage from '../../venia/components/OrderHistoryPage/orderHistoryPage';
import AccountInformation from './accountInformation';
import WishlistPage from '../WishList';
import WishlistSharePage from '../WishList/wishlistSharePage';
import OrderDetailsPage from './orderDetailsPage';
import CompareListBlock from '../CompareListPage/compareListBlock';
import WishlistBlock from '../WishList/wishlistBlock';
import ReviewPage from "./myReviewPage";
import QuestionAnswerPage from './questionAnswerPage';
import { useWindowSize } from '../../magento/peregrine/talons/ProductImageCarousel/useWindowSize';


const AccountPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);
    const path = useLocation().pathname;
    console.log("🚀 ~ file: accountPage.js ~ line 40 ~ AccountPage ~ path", path)
    const [{ isSignedIn }] = useUserContext();
    const { isMobile } = useWindowSize();

    if (!isSignedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.sidebar_wrapper}>
                {isMobile ? null : <AccountSideBar activeUrl={path} />}
                <CompareListBlock />
                <WishlistBlock />
            </div>
            <div className={classes.content_wrapper}>
                <Switch>
                    <Route exact path={accountPageUrl()}>
                        <AccountInformation />
                    </Route>
                    <Route path={myWishlistSharePage()}>
                        <WishlistSharePage />
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
                    <Route exact path={accountQandAPage()}>
                        <QuestionAnswerPage />
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