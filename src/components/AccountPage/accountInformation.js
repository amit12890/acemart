import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';
import { useAccountInformationPage } from '@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage';

import { useStyle } from '../../venia/classify';
import Button from '../../venia/components/Button';
import { Message } from '../../venia/components/Field';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import defaultClasses from './accountInformation.css';
import AccountInformationPageOperations from './accountInformation.gql.js';

const AccountInformation = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const talonProps = useAccountInformationPage({
        ...AccountInformationPageOperations
    });

    const {
        initialValues,
        isSignedIn,
        loadDataError
    } = talonProps;

    const showUpdateMode = () => {
        // redirect to account info form
    }

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
                        onClick={showUpdateMode}
                        priority="normal"
                    >
                        <FormattedMessage
                            id={'global.editButton'}
                            defaultMessage={'Edit'}
                        />
                    </Button>
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
        </div>
    );
};

export default AccountInformation;
