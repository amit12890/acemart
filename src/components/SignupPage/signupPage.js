import React from 'react';

import { useStyle } from '../../venia/classify';
// import CreateAccount from '../../venia/components/CreateAccount';
import defaultClasses from './signupPage.css';

const SignupPage = (props) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.wrapper}>
            This Will be signupPage
        </div>
    );
}

export default SignupPage