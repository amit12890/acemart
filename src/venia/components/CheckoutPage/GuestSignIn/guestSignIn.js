import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useGuestSignIn } from '@magento/peregrine/lib/talons/CheckoutPage/GuestSignIn/useGuestSignIn';

import { useStyle } from '@magento/venia-ui/lib/classify';
import CreateAccount from '../../../../venia/components/CreateAccount';
import ForgotPassword from '../../../../venia/components/ForgotPassword';
import LinkButton from '@magento/venia-ui/lib/components/LinkButton';
import SignIn from '../../../../venia/components/SignIn';
import Button from '../../Button/button.css';
import defaultClasses from './guestSignIn.css';

const GuestSignIn = props => {
    const { isActive, toggleActiveContent } = props;

    const talonProps = useGuestSignIn({ toggleActiveContent });
    const {
        handleBackToCheckout,
        toggleCreateAccountView,
        toggleForgotPasswordView,
        view
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);

    const rootClass = isActive ? classes.root : classes.root_hidden;

    let content;
    if (view === 'SIGNIN') {
        content = (
            <SignIn
                classes={{ modal_active: undefined, root: classes.signInRoot }}
                showCreateAccount={toggleCreateAccountView}
                showForgotPassword={toggleForgotPasswordView}
            />
        );
    } else if (view === 'FORGOT_PASSWORD') {
        content = (
            <ForgotPassword
                classes={{ root: classes.forgotPasswordRoot }}
                onCancel={toggleForgotPasswordView}
            />
        );
    } else if (view === 'CREATE_ACCOUNT') {
        content = (
            <CreateAccount
                classes={{ root: classes.createAccountRoot }}
                isCancelButtonHidden={false}
                onCancel={toggleCreateAccountView}
            />
        );
    }

    return (
        <div className={rootClass}>
            {/* <h1 className={classes.header}>
                <FormattedMessage
                    id="checkoutPage.guestSignIn.header"
                    defaultMessage="Account Sign-in"
                />
            </h1> */}
            <div className={classes.contentContainer}>
                {content}
            </div>
            <LinkButton className={classes.backToCheckout} onClick={handleBackToCheckout}>
                <i className={classes.iconWrapper}>
                    <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>arrow-right-thin</title>
                        <path d="M25.875 14l-9.719-9.719 2.281-2.25 13.563 13.563-13.563 13.594-2.281-2.281 9.719-9.719h-25.875v-3.188h25.875z"></path>
                    </svg>
                </i>
                <FormattedMessage
                    id="checkoutPage.guestSignIn.backToCheckout"
                    defaultMessage="Back to Checkout"
                />
            </LinkButton>
        </div>
    );
};

export default GuestSignIn;

GuestSignIn.propTypes = {
    classes: shape({
        root: string,
        root_hidden: string,
        header: string,
        contentContainer: string,
        signInRoot: string,
        forgotPasswordRoot: string,
        createAccountRoot: string
    }),
    isActive: bool.isRequired,
    toggleActiveContent: func.isRequired
};
