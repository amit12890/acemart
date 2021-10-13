import React from 'react';

import { useStyle } from '../../venia/classify';
import defaultClasses from './accountPage.css';

const AccountPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.wrapper}>
            This Will be AccountPage
        </div>
    );
}

export default AccountPage