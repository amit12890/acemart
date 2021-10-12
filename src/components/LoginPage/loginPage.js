import React from 'react';

import { useStyle } from '../../venia/classify';
import SignIn from '../../venia/components/SignIn';
import defaultClasses from './loginPage.css';

const LoginPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.wrapper}><SignIn /></div>
    );
}

export default LoginPage