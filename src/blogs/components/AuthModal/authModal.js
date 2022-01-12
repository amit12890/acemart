import React from 'react';
import { func, shape, string } from 'prop-types';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import CreateAccount from '@magento/venia-ui/lib/components/CreateAccount';
import ForgotPassword from '@magento/venia-ui/lib/components/ForgotPassword';
import MyAccount from '@magento/venia-ui/lib/components/MyAccount';
import SignIn from '@magento/venia-ui/lib/components/SignIn';
import defaultClasses from '@magento/venia-ui/lib/components/AuthModal/authModal.css';
import { useAuthModal } from '@magento/peregrine/lib/talons/AuthModal/useAuthModal';
import SIGN_OUT_MUTATION from '../../queries/signOut.graphql';

const AuthModal = props => {
    const {
        handleCancel,
        handleCreateAccount,
        handleSignOut,
        setUsername,
        showCreateAccount,
        showForgotPassword,
        showMyAccount,
        username
    } = useAuthModal({
        ...props,
        signOutMutation: SIGN_OUT_MUTATION
    });

    let child = null;
    switch (props.view) {
        case 'CREATE_ACCOUNT': {
            child = (
                <CreateAccount
                    initialValues={{ email: username }}
                    isCancelButtonHidden={false}
                    onSubmit={handleCreateAccount}
                    onCancel={handleCancel}
                />
            );
            break;
        }
        case 'FORGOT_PASSWORD': {
            child = (
                <ForgotPassword
                    initialValues={{ email: username }}
                    onCancel={handleCancel}
                />
            );
            break;
        }
        case 'MY_ACCOUNT': {
            child = <MyAccount onSignOut={handleSignOut} />;
            break;
        }
        case 'SIGN_IN':
        default: {
            child = (
                <SignIn
                    setDefaultUsername={setUsername}
                    showCreateAccount={showCreateAccount}
                    showForgotPassword={showForgotPassword}
                    showMyAccount={showMyAccount}
                />
            );
            break;
        }
    }

    const classes = mergeClasses(defaultClasses, props.classes);
    return <div className={classes.root}>{child}</div>;
};

export default AuthModal;

AuthModal.propTypes = {
    classes: shape({
        root: string
    }),
    closeDrawer: func.isRequired,
    showCreateAccount: func.isRequired,
    showForgotPassword: func.isRequired,
    showMyAccount: func.isRequired,
    showMainMenu: func.isRequired,
    showSignIn: func.isRequired,
    view: string
};
