import React, { Fragment } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { ArrowLeft as ArrowLeftIcon, X as CloseIcon } from 'react-feather';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import Icon from '@magento/venia-ui/lib/components/Icon';
import Trigger from '@magento/venia-ui/lib/components/Trigger';
import defaultClasses from '@magento/venia-ui/lib/components/Navigation/navHeader.css';
import AccountChip from '@magento/venia-ui/lib/components/AccountChip';

import { useAuthSidebarHeader } from '../../hooks/useAuthSidebarHeader';

const titles = {
    CREATE_ACCOUNT: 'Create Account',
    FORGOT_PASSWORD: 'Forgot Password',
    MY_ACCOUNT: 'My Account',
    SIGN_IN: 'Sign In',
    MENU: 'Main Menu'
};

const AuthSidebarHeader = props => {
    const { isTopLevel, onBack, onClose, view } = props;

    const talonProps = useAuthSidebarHeader({
        isTopLevel,
        onBack,
        onClose,
        view
    });

    const { handleClose, handleBack, isTopLevelMenu } = talonProps;

    const classes = mergeClasses(defaultClasses, props.classes);

    let titleElement;
    if (['MY_ACCOUNT', 'SIGN_IN'].includes(view)) {
        titleElement = <AccountChip fallbackText={'Account'} />;
    } else {
        const title = titles[view] || titles.MENU;
        titleElement = <span>{title}</span>;
    }

    const triggerButton = !isTopLevelMenu ? (
        <Trigger key="backButton" action={handleBack}>
            <Icon src={ArrowLeftIcon} />
        </Trigger>
    ) : (
        <Trigger key="closeButton" action={handleClose}>
            <Icon src={CloseIcon} />
        </Trigger>
    );

    return (
        <Fragment>
            {triggerButton}
            <h2 key="title" className={classes.title}>
                {titleElement}
            </h2>
        </Fragment>
    );
};

export default AuthSidebarHeader;

AuthSidebarHeader.propTypes = {
    classes: shape({
        title: string
    }),
    isTopLevel: bool,
    onBack: func.isRequired,
    onClose: func.isRequired,
    view: string.isRequired
};
