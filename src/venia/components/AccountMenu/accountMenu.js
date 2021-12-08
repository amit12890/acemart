import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { useAccountMenu } from "../../../magento/peregrine/talons/Header"

import { X as XIcon } from 'react-feather';
import Icon from '@magento/venia-ui/lib/components/Icon';

import { useStyle } from '../../classify';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import Mask from '@magento/venia-ui/lib/components/Mask';
import CreateAccount from '../CreateAccount';
import SignIn from '../SignIn';
import AccountMenuItems from './accountMenuItems';
import ForgotPassword from '../ForgotPassword';
import defaultClasses from './accountMenu.css';
import { forgotPasswordPage, signupPage } from '../../../url.utils';

const AccountMenu = React.forwardRef((props, ref) => {
    const { accountMenuIsOpen, setAccountMenuIsOpen } = props;
    const history = useHistory();
    const talonProps = useAccountMenu({
        accountMenuIsOpen,
        setAccountMenuIsOpen
    });
    const {
        view,
        username,
        signingOut,
        handleAccountCreation,
        handleSignOut,
        handleCancel,
        updateUsername
    } = talonProps;

    const handleCreateAccount = useCallback(() => {
        history.push(signupPage());
    }, []);
    const handleForgotPassword = useCallback(() => {
        history.push(forgotPasswordPage());
    }, []);
    const classes = useStyle(defaultClasses, props.classes);
    const rootClass = accountMenuIsOpen ? classes.root_open : classes.root;
    const contentsClass = accountMenuIsOpen
        ? classes.contents_open
        : classes.contents;

    let dropdownContents = null;

    switch (view) {
        case 'ACCOUNT': {
            dropdownContents = <AccountMenuItems onSignOut={handleSignOut} signingOut={signingOut}/>;

            break;
        }
        case 'FORGOT_PASSWORD': {
            dropdownContents = (
                <ForgotPassword
                    initialValues={{ email: username }}
                    onCancel={handleCancel}
                />
            );

            break;
        }
        case 'CREATE_ACCOUNT': {
            dropdownContents = (
                <CreateAccount
                    classes={{ root: classes.createAccount }}
                    initialValues={{ email: username }}
                    isCancelButtonHidden={false}
                    onSubmit={handleAccountCreation}
                    onCancel={handleCancel}
                />
            );

            break;
        }
        case 'SIGNIN':
        default: {
            dropdownContents = (
                <SignIn
                    classes={{
                        modal_active: classes.loading
                    }}
                    isPopup={true}
                    setDefaultUsername={updateUsername}
                    showCreateAccount={handleCreateAccount}
                    showForgotPassword={handleForgotPassword}
                />
            );

            break;
        }
    }

    return (
        <Portal>
            <div className={classes.portalWrapper}>
                <Mask isActive={accountMenuIsOpen} />
                <div className={rootClass}>

                    <div ref={ref} className={contentsClass}>
                        <div
                            className={classes.modalClose}
                            onClick={() => setAccountMenuIsOpen(false)}>

                            <Icon
                                src={XIcon}
                                classes={{
                                    root: classes.myRoot,
                                    icon: classes.myIcon
                                }} />

                        </div>
                        <div className={classes.modalContent}>
                            {accountMenuIsOpen ? dropdownContents : null}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
});

export default AccountMenu;

AccountMenu.propTypes = {
    classes: shape({
        root: string,
        root_open: string,
        link: string,
        contents_open: string,
        contents: string
    })
};
