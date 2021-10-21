import React, { Fragment, Suspense } from 'react';
import { shape, string } from 'prop-types';
import { Link, Route } from 'react-router-dom';

import Logo from '../Logo';
import AccountTrigger from './accountTrigger';
import CartTrigger from './cartTrigger';
import NavTrigger from './navTrigger';
import SearchTrigger from './searchTrigger';
import OnlineIndicator from './onlineIndicator';
import { useHeader } from '@magento/peregrine/lib/talons/Header/useHeader';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';

import { useStyle } from '../../classify';
import defaultClasses from './header.css';
import PageLoadingIndicator from '@magento/venia-ui/lib/components/PageLoadingIndicator';
import StoreSwitcher from './storeSwitcher';
import CurrencySwitcher from './currencySwitcher';
import MegaMenu from '../MegaMenu';

const SearchBar = React.lazy(() => import('@magento/venia-ui/lib/components/SearchBar'));

const Header = props => {
    const {
        handleSearchTriggerClick,
        hasBeenOffline,
        isOnline,
        isPageLoading,
        isSearchOpen,
        searchRef,
        searchTriggerRef
    } = useHeader();

    const classes = useStyle(defaultClasses, props.classes);
    const rootClass = isSearchOpen ? classes.open : classes.closed;
    const searchBarFallback = (
        <div className={classes.searchFallback} ref={searchRef}>
            <div className={classes.input}>
                <div className={classes.loader} />
            </div>
        </div>
    );
    const searchBar = isSearchOpen ? (
        <Suspense fallback={searchBarFallback}>
            <Route>
                <SearchBar isOpen={isSearchOpen} ref={searchRef} />
            </Route>
        </Suspense>
    ) : null;
    const pageLoadingIndicator = isPageLoading ? (
        <PageLoadingIndicator />
    ) : null;

    return (
        <Fragment>  

            <div className={classes.switchersContainer}>
                <div className={classes.switchers}>
                    <StoreSwitcher />
                    <CurrencySwitcher />
                </div>
            </div>
            <header className={rootClass}>
                <div className={[classes.panelWrapper, classes.headerNotice].join(" ")}>
                    <div className={[classes.panelBody, classes.pageTop].join(" ")}>
                        <p>
                            <Link
                                to={resourceUrl('/careers')}
                                className={classes.action}
                            >
                            <span>NOW HIRING – CLICK HERE TO JOIN OUR TEAM!</span>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={[classes.panelWrapper, classes.topMenuWrapper].join(" ")}>
                    <div className={[classes.panelBody, classes.topMenuContainer].join(" ")}>
                        <div className={[classes.menuItem, classes.leftMenu].join(" ")}>
                            <ul>
                                <li>
                                    <Link
                                        to={resourceUrl('/')}
                                        className={classes.action}
                                    >
                                        <i className={classes.icon}>
                                            <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                                                <title>back</title>
                                                <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                                            </svg>
                                        </i> 
                                        <span>Supply Chain Issues</span>
                                    </Link> 
                                </li>
                            </ul>
                        </div>

                        <div className={[classes.menuItem, classes.rightMenu].join(" ")}>
                            <ul className={[classes.links, classes.rightLinks].join("")} >
                                <li>
                                    <Link
                                        to={resourceUrl('/')}
                                        className={classes.action}
                                    >
                                        <i className={classes.icon}>
                                            <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                                                <title>back</title>
                                                <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                                            </svg>
                                        </i> 
                                        <span>Ace Mart Advantage</span>
                                    </Link> 
                                </li>

                                <li>
                                    <Link
                                        to={resourceUrl('/')}
                                        className={classes.action}
                                    >
                                        <i className={classes.icon}>
                                            <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                                                <title>back</title>
                                                <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                                            </svg>
                                        </i> 
                                        <span>Financing</span>
                                    </Link> 
                                </li>

                                <li>
                                    <Link
                                        to={resourceUrl('/')}
                                        className={classes.action}
                                    >
                                        <i className={classes.icon}>
                                            <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                                                <title>back</title>
                                                <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                                            </svg>
                                        </i> 
                                        <span>Contact</span>
                                    </Link> 
                                </li>

                                <li>
                                    <Link
                                        to={resourceUrl('/')}
                                        className={classes.action}
                                    >
                                        <i className={classes.icon}>
                                            <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                                                <title>back</title>
                                                <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                                            </svg>
                                        </i> 
                                        <span>Careers</span>
                                    </Link> 
                                </li>   

                                <li>
                                    <Link
                                        to={resourceUrl('/')}
                                        className={classes.action}
                                    >
                                        <i className={classes.icon}>
                                            <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                                                <title>back</title>
                                                <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                                            </svg>
                                        </i> 
                                        <span>Resources</span>
                                    </Link> 
                                </li>                                                              

                            </ul>
                        </div>
                    </div>

                </div>
                <div className={[classes.panelWrapper, classes.toolbarWrapper].join(" ")}>
                    <div className={[classes.panelBody, classes.toolbarContainer].join(" ")}>
                        <div className={classes.toolbar}>
                            <div className={classes.primaryActions}>
                                <NavTrigger />
                            </div>
                            {pageLoadingIndicator}
                            <OnlineIndicator
                                hasBeenOffline={hasBeenOffline}
                                isOnline={isOnline}
                            />
                            <Link
                                to={resourceUrl('/')}
                                className={classes.logoContainer}
                            >
                                <Logo classes={{ logo: classes.logo }} />
                            </Link>
                            
                            <div className={classes.secondaryActions}>
                                <SearchTrigger
                                    onClick={handleSearchTriggerClick}
                                    ref={searchTriggerRef}
                                />
                                <AccountTrigger />
                                <CartTrigger />
                            </div>
                        </div>
                    </div>
                </div>
                {searchBar}
            </header>
            <div className={classes.navContainer}>
                <MegaMenu />
            </div>
        </Fragment>
    );
};

Header.propTypes = {
    classes: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        toolbar: string,
        switchers: string,
        switchersContainer: string
    })
};

export default Header;
