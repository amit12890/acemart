import React from 'react';
import { useLocation } from 'react-router';
import { bool, shape, string } from 'prop-types';
import { useScrollLock } from '@magento/peregrine';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Footer from '../Footer';
import Header from '../Header';
import CheckoutHeader from '../CheckoutHeader';
import defaultClasses from './main.css';


const Main = props => {
    const { children, isMasked } = props;
    let { pathname } = useLocation();
    const classes = useStyle(defaultClasses, props.classes);

    const rootClass = isMasked ? classes.root_masked : classes.root;
    const pageClass = isMasked ? classes.page_masked : classes.page;
    // for checkout page show different header and no footer
    const showCheckoutLayout = pathname === "/checkout" || pathname === "/checkout/"

    useScrollLock(isMasked);

    return (
        <main className={rootClass}>
            {showCheckoutLayout ?
                <CheckoutHeader />
                :
                <Header />
            }
            <div className={pageClass}>{children}</div>
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
