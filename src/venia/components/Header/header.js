import React, { Fragment, Suspense } from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { get, size } from 'lodash-es';

import Logo from '../Logo';
import AccountTrigger from './accountTrigger';
import CartTrigger from './cartTrigger';
import NavTrigger from './navTrigger';
import OnlineIndicator from './onlineIndicator';
import { useHeader } from '@magento/peregrine/lib/talons/Header/useHeader';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import Image from '../Image';
import RichContent from '../RichContent';
import CmsBlock from '@magento/venia-ui/lib/components/CmsBlock'


import { TOP_HEADERS_GQL } from './header.gql';
import { useStyle } from '../../classify';
import defaultClasses from './header.css';
import PageLoadingIndicator from '@magento/venia-ui/lib/components/PageLoadingIndicator';
import SearchBar from '../SearchBar';
import StoreSwitcher from './storeSwitcher';
import CurrencySwitcher from './currencySwitcher';
import baloonIcon from '../../../assets/balloons.png';
import truckIcon from '../../../assets/truckicon.png';
import MegaMenu from '../MegaMenu';

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

    const { loading, data } = useQuery(TOP_HEADERS_GQL)
    const topHeader1Content = get(data, "topHeader1.items[0].content", "")
    const topHeader2Content = get(data, "topHeader2.items[0].content", "")

    const classes = useStyle(defaultClasses, props.classes)
    const rootClass = isSearchOpen ? classes.open : classes.closed;
    const pageLoadingIndicator = isPageLoading ? (
        <PageLoadingIndicator />
    ) : null;


    // mapping classes with js as pagebuilder not providing css style add
    // const mapClasses = cssClasses.map((className) => {
    //     return get(classes, className, className)
    // })
    return (
        <Fragment>
            <header className={rootClass}>
                {size(topHeader1Content) > 0 && (
                    <div className={classes.topPromotion}>
                        <RichContent
                            classes={{ root: classes.test }}
                            html={topHeader1Content} />
                    </div>
                )}
                {size(topHeader2Content) > 0 && (
                    <RichContent html={topHeader2Content} />
                )}
                {/** This is top NoticeBar */}
                {/* <div className={[classes.panelWrapper, classes.headerNotice].join(" ")}>
                    <div className={[classes.panelBody, classes.pageTop].join(" ")}>
                        <p>
                            <Link
                                to={resourceUrl('/careers')}
                                className={classes.action}
                            >
                                <span className={classes.baloonIcon}>
                                    <Image
                                        width="20"
                                        height="22"
                                        src={baloonIcon}

                                    />
                                </span> <span>NOW HIRING – CLICK HERE TO JOIN OUR TEAM!</span>
                            </Link>
                        </p>
                    </div>
                </div> */}
                {/** This is top CMSMenuBar */}
                <div className={[classes.panelWrapper, classes.topMenuWrapper].join(" ")}>
                    <div className={[classes.panelBody, classes.topMenuContainer].join(" ")}>
                        <div className={[classes.menuItem, classes.leftMenu].join(" ")}>
                            <ul>
                                <li>
                                    <Link
                                        to={resourceUrl('/supply-chain')}
                                        className={classes.action}
                                    >

                                        <span className={classes.iconWrapper}>
                                            <Image
                                                width="20"
                                                height="20"
                                                src={truckIcon}

                                            />
                                        </span>
                                        <span>Supply Chain Issues</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={[classes.menuItem, classes.rightMenu].join(" ")}>
                            <ul className={[classes.links, classes.rightLinks].join("")} >
                                <li>
                                    <Link
                                        to={resourceUrl('/advantage')}
                                        className={classes.action}
                                    >
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.checkmark].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                                <title>checkmark</title>
                                                <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
                                            </svg>
                                        </i>
                                        <span>Ace Mart Advantage</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={resourceUrl('/financing')}
                                        className={classes.action}
                                    >
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.store].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                                <title>store</title>
                                                <path d="M32 30v-2h-2v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-2v2h-2v2h34v-2h-2zM16 0h2l16 10v2h-34v-2z"></path>                                            </svg>
                                        </i>
                                        <span>Financing</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={resourceUrl('/customer-service')}
                                        className={classes.action}
                                    >
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.phone].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                                <title>phone-01</title>
                                                <path d="M25.156 22.438q0 0.469-0.188 1.25t-0.375 1.219q-0.281 0.656-0.938 1.109t-1.25 0.797q-0.781 0.406-1.594 0.656t-1.719 0.25q-1.25 0-2.391-0.406t-2.297-0.844q-0.813-0.281-1.594-0.641t-1.531-0.828q-1.125-0.719-2.344-1.719t-2.375-2.141-2.156-2.359-1.688-2.344q-0.469-0.75-0.828-1.531t-0.672-1.594q-0.406-1.156-0.813-2.297t-0.406-2.391q0-0.906 0.234-1.719t0.672-1.594q0.344-0.625 0.797-1.266t1.109-0.922q0.438-0.188 1.219-0.375t1.25-0.188q0.094 0 0.188 0.016t0.188 0.047q0.281 0.094 0.547 0.594t0.391 0.75q0.438 0.781 0.859 1.547t0.859 1.516q0.219 0.344 0.531 0.766t0.313 0.828q0 0.813-1.625 1.859t-1.625 1.797q0 0.344 0.25 0.766t0.438 0.766q1.375 2.438 3.125 4.188t4.188 3.094q0.313 0.188 0.75 0.453t0.781 0.266q0.719 0 1.781-1.625t1.875-1.625q0.406 0 0.828 0.313t0.766 0.531q0.75 0.438 1.516 0.859t1.516 0.828q0.281 0.156 0.781 0.422t0.594 0.547q0.031 0.094 0.047 0.188t0.016 0.188v0z"></path>
                                            </svg>
                                        </i>
                                        <span>Contact</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={resourceUrl('/careers')}
                                        className={classes.action}
                                    >
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.career].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                                <title>career</title>
                                                <path d="M30 8h-8v-2q0-0.813-0.594-1.406t-1.406-0.594h-8q-0.813 0-1.406 0.594t-0.594 1.406v2h-8q-0.813 0-1.406 0.594t-0.594 1.406v18q0 0.813 0.594 1.406t1.406 0.594h28q0.813 0 1.406-0.594t0.594-1.406v-18q0-0.813-0.594-1.406t-1.406-0.594zM12 6v0 0h8v2h-8v-2zM30 16h-4v3q0 0.406-0.297 0.703t-0.703 0.297h-2q-0.406 0-0.703-0.297t-0.297-0.703v-3h-12v3q0 0.406-0.297 0.703t-0.703 0.297h-2q-0.406 0-0.703-0.297t-0.297-0.703v-3h-4v-2h28v2z"></path>
                                            </svg>
                                        </i>
                                        <span>Careers</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={resourceUrl('/resources')}
                                        className={classes.action}
                                    >
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 32 32">
                                                <title>resources</title>
                                                <path d="M7 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM6 10h-4v-2h4v2zM17 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM16 10h-4v-2h4v2zM23.906 5.531l-5.344 2.719q-0.375 0.188-0.5 0.578t0.031 0.766l9 17.844q0.188 0.375 0.594 0.516t0.75-0.047l5.375-2.719q0.375-0.188 0.5-0.578t-0.063-0.766l-9-17.844q-0.188-0.375-0.578-0.5t-0.766 0.031v0z"></path>
                                            </svg>
                                        </i>
                                        <span>Resources</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                {/** This is top ToolBar with search and other functions */}
                <div className={[classes.panelWrapper, classes.toolbarWrapper].join(" ")}>
                    <div className={[classes.panelBody, classes.toolbarContainer].join(" ")}>

                        <div className={classes.logowrapper}>
                            <Link
                                to={resourceUrl('/')}
                                className={classes.logoContainer}
                            >
                                <Logo classes={{ logo: classes.logo }} />
                            </Link>
                        </div>

                        <div className={classes.csContainer}>
                            <i className={classes.iconWrapper}>
                                <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                    <title>phone</title>
                                    <path d="M22 20q-1.5 1.5-2 2.75t-2 1.25-3-1.25-3-2.75-2.75-3-1.25-3 1.25-2 2.75-2q0.75-0.75 0.188-2.094t-1.688-2.656-2.438-2.281-2.063-0.969-1.781 0.938-1.969 2.063-1.594 2.063l-0.656 0.938q0 1.5 0.688 3.625 0.719 2.156 1.859 4.422t2.547 4.359q1.438 2.125 2.906 3.594t3.594 2.906q2.094 1.406 4.359 2.547t4.422 1.859q2.125 0.688 3.625 0.688l0.938-0.656t2.063-1.594 2.063-1.969 0.938-1.781-0.969-2.063-2.281-2.438-2.656-1.688-2.094 0.188z"></path>
                                </svg>
                            </i>
                            <div className={classes.csContent}>
                                <span className={classes.csLabel}>Customer Service</span>
                                <Link
                                    to={resourceUrl('/')}
                                    className={classes.csAction}
                                >
                                    <strong>888-898-8079</strong>
                                </Link>
                            </div>
                        </div>
                        <div className={classes.searchBarWrapper}>
                            <SearchBar isOpen={isSearchOpen} ref={searchRef} />
                        </div>
                        <div className={classes.storeLocationWrapper}>
                            <div className={classes.switchersContainer}>
                                <div className={classes.switchers}>
                                    <StoreSwitcher />
                                    <CurrencySwitcher />
                                </div>
                            </div>
                        </div>

                        <div className={classes.toolbar}>
                            <div className={classes.primaryActions}>
                                <NavTrigger />
                            </div>
                            {pageLoadingIndicator}
                            <OnlineIndicator
                                hasBeenOffline={hasBeenOffline}
                                isOnline={isOnline}
                            />


                            <div className={classes.secondaryActions}>
                                <AccountTrigger />
                                <CartTrigger />
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            <div className={classes.navContainer}>
                <div className={classes.navSection}>
                    <MegaMenu />
                </div>
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
