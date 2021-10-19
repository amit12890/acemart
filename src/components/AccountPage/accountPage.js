import React from 'react';

import AccountSideBar from './accountSideBar';

import { useStyle } from '../../venia/classify';
import defaultClasses from './accountPage.css';

const AccountPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.wrapper}>
            <div className={classes.sidebar_wrapper}>
                <AccountSideBar />
            </div>
            <div className={classes.content_wrapper}>
                This is going to be account content
            </div>
        </div>
    );
}

export default AccountPage