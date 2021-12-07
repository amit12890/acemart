import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './checkoutHeader.css';

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
                </div>
            </div>
        </div>
    )
}

export default checkoutHeader;
