import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useUserContext } from '@magento/peregrine/lib/context/user';

import { useStyle } from '../../venia/classify';
import SignIn from '../../venia/components/SignIn';
import CreateAccount from '../../venia/components/CreateAccount';
import ForgotPassword from '../../venia/components/ForgotPassword';
import defaultClasses from './authenticationPage.css';

import {
    LOGIN_URL,
    SIGNUP_URL,
    FORGOT_PASSWORD_URL,
    ACCOUNT_PAGE_URL,
} from "./constants";

const AuthenticationPage = (props) => {
    const { auth: authType } = useParams();
    const history = useHistory();
    const [{ isSignedIn }] = useUserContext();

    const classes = useStyle(defaultClasses, props.classes);

    const handleForgotPassword = useCallback(() => {
        history.push(FORGOT_PASSWORD_URL);
    }, []);

    const handleCancel = useCallback(() => {
        history.push(LOGIN_URL);
    }, []);

    const handleCreateAccount = useCallback(() => {
        history.push(SIGNUP_URL);
    }, []);
    // called after user signUp
    const handleAccountCreation = useCallback(() => {
        history.push(ACCOUNT_PAGE_URL);
    }, []);

    let content;
    if (isSignedIn) {
        content = (
            <div>Your are already logged In</div>
        )
    } else {
        // show auth alternate pages
        switch (authType) {
            case 'forgotpassword': {
                content = (
                    <ForgotPassword
                        onCancel={handleCancel}
                    />
                );
    
                break;
            }
            case 'create': {
                content = (
                    <CreateAccount
                        isCancelButtonHidden={false}
                        onSubmit={handleAccountCreation}
                        onCancel={handleCancel}
                    />
                );
    
                break;
            }
            case 'login':
            default: {
                content = (
                    <SignIn
                        showCreateAccount={handleCreateAccount}
                        showForgotPassword={handleForgotPassword}
                    />
                );
    
                break;
            }
        }
    }

    return (
        <div className={classes.wrapper}>
            {content}
        </div>
    );
}

export default AuthenticationPage