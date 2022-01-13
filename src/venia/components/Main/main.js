import React from 'react';
import { bool, shape, string } from 'prop-types';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import { useScrollLock } from '@magento/peregrine';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Footer from '../Footer';
import Header from '../Header';
import CheckoutHeader from '../CheckoutHeader';
import defaultClasses from './main.css';
import { join } from 'lodash';


const Main = props => {
    const { children, isMasked } = props;
    const isCMS = useSelector(store => store.appState.isCMS)
    let { pathname } = useLocation();
    const classes = useStyle(defaultClasses, props.classes);

    const rootClass = isMasked ? classes.root_masked : classes.root;
    let pageClass = [];

    if (isMasked) {
        pageClass = [classes.page_masked]
    } else {
        pageClass = [classes.page]
    }
    // custom flag added to to apply class on parent
    if (isCMS) {
        pageClass = [...pageClass, classes.cms_page]
    }
    // for checkout page show different header and no footer
    const showCheckoutLayout = pathname === "/checkout" || pathname === "/checkout/"
    // add specific class for checkout
    if (showCheckoutLayout) {
        pageClass = [...pageClass, classes.checkout_page]
    }
    useScrollLock(isMasked);

    return (
        <main className={rootClass}>
            {showCheckoutLayout ?
                <CheckoutHeader />
                :
                <Header />
            }
            <div className={pageClass.join(" ")}>{children}</div>
            {!showCheckoutLayout && <Footer />}
        </main>
    );
};

export default Main;

Main.propTypes = {
    classes: shape({
        page: string,
        page_masked: string,
        root: string,
        root_masked: string
    }),
    isMasked: bool
};
