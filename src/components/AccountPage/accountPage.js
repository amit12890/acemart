import React from 'react';

import AccountMenuItems from "../../venia/components/AccountMenu/accountMenuItems";

import { useStyle } from '../../venia/classify';
import defaultClasses from './accountPage.css';

const AccountPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.wrapper}>
            <AccountMenuItems />
        </div>
    );
}

export default AccountPage