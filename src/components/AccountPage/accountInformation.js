import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Redirect, useHistory } from 'react-router-dom';
import { useAccountInformationPage } from '@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage';

import { useStyle } from '../../venia/classify';
import Button from '../../venia/components/Button';
import { Message } from '../../venia/components/Field';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import AccountAddressBlock from './accountAddressBlock';
import AccountNewsletterBlock from './accountNewsletterBlock';

import defaultClasses from './accountInformation.css';
import AccountInformationPageOperations from './accountInformation.gql.js';
import { EDIT_ACCOUNT_INFO, EDIT_ACCOUNT_PASSWROD } from './constants';


const AccountInformation = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const history = useHistory()

    const talonProps = useAccountInformationPage({
        ...AccountInformationPageOperations
    });

    const {
        initialValues,
        isSignedIn,
        loadDataError
    } = talonProps;

    const goToAccountInfoEdit = useCallback(() => {
        history.push(EDIT_ACCOUNT_INFO)
    }, [])
    const goToAccountInfoEditPassword = useCallback(() => {
        history.push(EDIT_ACCOUNT_PASSWROD)
    }, [])

    if (!isSignedIn) {
        return <Redirect to="/" />;
    }

    const errorMessage = loadDataError ? (
        <Message>
            <FormattedMessage
                id={'accountInformationPage.errorTryAgain'}
                defaultMessage={
                    'Something went wrong. Please refresh and try again.'
                }
            />
        </Message>
    ) : null;

    let pageContent = null;
    if (!initialValues) {
        return fullPageLoadingIndicator;
    } else {
        const { customer } = initialValues;
        const customerName = `${customer.firstname} ${customer.lastname}`;

        pageContent = (
            <div className={classes.accountInfoWrapper}>
                <div className={classes.accountDetails}>
                    <div className={classes.lineItemsContainer}>
                        <span className={classes.nameLabel}>
                            <FormattedMessage
                                id={'global.name'}
                                defaultMessage={'Name'}
                            />
                        </span>
                        <span className={classes.nameValue}>
                            {customerName}
                        </span>
                        <span className={classes.emailLabel}>
                            <FormattedMessage
                                id={'global.email'}
                                defaultMessage={'Email'}
                            />
                        </span>
                        <span className={classes.emailValue}>
                            {customer.email}
                        </span>
                    </div>
                    <div className={classes.editButtonContainer}>
                        <Button
                            className={classes.editInformationButton}
                            disabled={false}
                            onClick={goToAccountInfoEdit}
                            priority="normal"
                        >
                            Edit
                        </Button>
                        <Button
                            className={classes.editInformationButton}
                            disabled={false}
                            onClick={goToAccountInfoEditPassword}
                            priority="normal"
                        >
                            Change Password
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                <FormattedMessage
                    id={'accountInformationPage.accountInformation'}
                    defaultMessage={'Account Information'}
                />
            </h1>
            {errorMessage ? errorMessage : pageContent}

            <AccountNewsletterBlock />
            <AccountAddressBlock />
        </div>
    );
};

export default AccountInformation;
