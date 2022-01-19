import React, { Suspense, useState } from 'react';
import { shape, string } from 'prop-types';
import { useNavigation } from '@magento/peregrine/lib/talons/Navigation/useNavigation';

import MobResourcesTab from './mobResourcesTab';
import AuthBar from '../AuthBar';
import CurrencySwitcher from '../Header/currencySwitcher';
import LoadingIndicator from '../LoadingIndicator';
import NavHeader from './navHeader';

import CategoryTree from '@magento/venia-ui/lib/components/CategoryTree';
import { useStyle } from '../../classify';
import defaultClasses from './navigation.css';

const AuthModal = React.lazy(() => import('@magento/venia-ui/lib/components/AuthModal'));


const Navigation = props => {
    const {
        catalogActions,
        categoryId,
        handleBack,
        handleClose,
        hasModal,
        isOpen,
        isTopLevel,
        setCategoryId,
        showCreateAccount,
        showForgotPassword,
        showMainMenu,
        showMyAccount,
        showSignIn,
        view
    } = useNavigation();
    const [selectedTab, onTabSelect] = useState(1)

    const classes = useStyle(defaultClasses, props.classes);
    const rootClassName = isOpen ? classes.root_open : classes.root;
    const modalClassName = hasModal ? classes.modal_open : classes.modal;
    const bodyClassName = hasModal ? classes.body_masked : classes.body;

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
                <NavHeader
                    onTabSelect={onTabSelect}
                    isTopLevel={isTopLevel}
                    onBack={handleBack}
                    view={view}
                />
            </header>
            {selectedTab === 1 ?
                <div className={bodyClassName}>
                    <CategoryTree
                        categoryId={categoryId}
                        onNavigate={handleClose}
                        setCategoryId={setCategoryId}
                        updateCategories={catalogActions.updateCategories}
                    />
                </div>
                :
                <MobResourcesTab />
            }
            <div className={classes.footer}>
                <div className={classes.switchers}>
                    <CurrencySwitcher />
                </div>
                <AuthBar
                    disabled={hasModal}
                    showMyAccount={showMyAccount}
                    showSignIn={showSignIn}
                />
            </div>
            <div className={modalClassName}>{authModal}</div>
        </aside>
    );
};

export default Navigation;

Navigation.propTypes = {
    classes: shape({
        body: string,
        form_closed: string,
        form_open: string,
        footer: string,
        header: string,
        root: string,
        root_open: string,
        signIn_closed: string,
        signIn_open: string
    })
};
