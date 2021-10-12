import React from 'react';

import { useStyle } from '../../venia/classify';
import defaultClasses from './loginPage.css';

const LoginPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.wrapper}>This will be new login page, with hot reload !!</div>
    );
}

export default LoginPage