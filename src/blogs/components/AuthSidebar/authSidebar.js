import React, { Suspense } from 'react';
import { shape, string } from 'prop-types';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import defaultClasses from '@magento/venia-ui/lib/components/Navigation/navigation.css';
import GET_CUSTOMER_QUERY from '../../queries/getCustomer.graphql';
import AuthSidebarHeader from './authSidebarHeader';
import { useAuthSidebar } from '../../hooks/useAuthSidebar';

const AuthModal = React.lazy(() => import('../AuthModal'));

const AuthSidebar = props => {
    const {
        handleBack,
        handleClose,
        hasModal,
        isOpen,
        isTopLevel,
        showCreateAccount,
        showForgotPassword,
        showMainMenu,
        showMyAccount,
        showSignIn,
        view
    } = useAuthSidebar({ customerQuery: GET_CUSTOMER_QUERY });

    const classes = mergeClasses(defaultClasses, props.classes);
    const rootClassName = isOpen ? classes.root_open : classes.root;
    const modalClassName = hasModal ? classes.modal_open : classes.modal;

    // Lazy load the auth modal because it may not be needed.
    const authModal = hasModal ? (
        <Suspense fallback={<LoadingIndicator />}>
            <AuthModal
                closeDrawer={handleClose}
                showCreateAccount={showCreateAccount}
                showForgotPassword={showForgotPassword}
                showMainMenu={showMainMenu}
                showMyAccount={showMyAccount}
                showSignIn={showSignIn}
                view={view}
            />
        </Suspense>
    ) : null;

    return (
        <aside className={rootClassName}>
            <header className={classes.header}>
                <AuthSidebarHeader isTopLevel={isTopLevel} onBack={handleBack} onClose={handleClose} view={view} />
            </header>
            <div className={modalClassName}>{authModal}</div>
        </aside>
    );
};

export default AuthSidebar;

AuthSidebar.propTypes = {
    classes: shape({
        body: string,
        form_closed: string,
        form_open: string,
        footer: string,
        header: string,
        root: string,
        root_open: string,
        signIn_closed: string,
        signIn_open: string,
        isRoot: string
    })
};
