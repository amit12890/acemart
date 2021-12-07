import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './checkoutHeader.css';
import { cartPage } from '../../../url.utils';

const checkoutHeader = () => {
    const classes = useStyle(defaultClasses);

    return (
        <div>
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

                    <Link className={classes.link} to={cartPage()}>
                        <i className={classes.iconWrapper}>
                            <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>Back to Cart</title>
                                <path d="M12 29q0 1.25-0.875 2.125t-2.125 0.875-2.125-0.875-0.875-2.125 0.875-2.125 2.125-0.875 2.125 0.875 0.875 2.125zM32 29q0 1.25-0.875 2.125t-2.125 0.875-2.125-0.875-0.875-2.125 0.875-2.125 2.125-0.875 2.125 0.875 0.875 2.125zM32 16v-12h-24q0-0.844-0.578-1.422t-1.422-0.578h-6v2h4l1.5 12.875q-0.688 0.563-1.094 1.375t-0.406 1.75q0 1.656 1.172 2.828t2.828 1.172h24v-2h-24q-0.844 0-1.422-0.578t-0.578-1.422v0-0.031z"></path>
                            </svg>
                        </i>
                    </Link>
                </div>

                <div>
                    <h2>Review and Payments</h2>
                </div>
            </div>
        </div>
    )
}

export default checkoutHeader;
