import React, { Fragment, Suspense } from 'react';
import { useIntl } from 'react-intl';
import { shape, string } from 'prop-types';

import { useAccountTrigger } from '@magento/peregrine/lib/talons/Header/useAccountTrigger';
import { useStyle } from '@magento/venia-ui/lib/classify';

import AccountChip from '@magento/venia-ui/lib/components/AccountChip';

import defaultClasses from './accountTrigger.css';

const AccountMenu = React.lazy(() => import('../AccountMenu'));

/**
 * The AccountTrigger component is the call to action in the site header
 * that toggles the AccountMenu dropdown.
 *
 * @param {Object} props
 * @param {Object} props.classes - CSS classes to override element styles.
 */
const AccountTrigger = props => {
    const talonProps = useAccountTrigger();
    const {
        accountMenuIsOpen,
        accountMenuRef,
        accountMenuTriggerRef,
        setAccountMenuIsOpen,
        handleTriggerClick
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);
    const rootClassName = accountMenuIsOpen ? classes.root_open : classes.root;
    const { formatMessage } = useIntl();

    return (
        <Fragment>
            <div className={rootClassName} ref={accountMenuTriggerRef}>
                <button
                    aria-label={formatMessage({
                        id: 'accountTrigger.ariaLabel',
                        defaultMessage: 'Toggle My Account Menu'
                    })}
                    className={classes.trigger}
                    onClick={handleTriggerClick}
                >   
                    <i className={classes.iconWrapper}>
                        <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>account</title>
                            <path d="M18 22.094v-1.656q1.656-0.938 2.828-3.031t1.172-4.406q0-1.875-0.094-3.5-0.094-1.656-0.656-2.875t-1.781-1.906q-1.219-0.719-3.469-0.719t-3.469 0.719q-1.219 0.688-1.781 1.906t-0.656 2.875q-0.094 1.625-0.094 3.5 0 2.313 1.172 4.406t2.828 3.031v1.656q-2.531 0.188-4.75 0.906-2.188 0.688-3.797 1.734t-2.547 2.391q-0.906 1.375-0.906 2.875h28q0-1.5-0.906-2.875-0.938-1.344-2.547-2.391t-3.797-1.734q-2.219-0.719-4.75-0.906z"></path>                        
                        </svg>
                    </i> 
                    <AccountChip
                        fallbackText={formatMessage({
                            id: 'accountTrigger.buttonFallback.textLabel',
                            defaultMessage: 'My Account'
                        })}
                        shouldIndicateLoading={true}
                    />
                </button>
            </div>
            <Suspense fallback={null}>
                <AccountMenu
                    ref={accountMenuRef}
                    accountMenuIsOpen={accountMenuIsOpen}
                    setAccountMenuIsOpen={setAccountMenuIsOpen}
                />
            </Suspense>
        </Fragment>
    );
};

export default AccountTrigger;

AccountTrigger.propTypes = {
    classes: shape({
        root: string,
        root_open: string,
        trigger: string
    })
};
