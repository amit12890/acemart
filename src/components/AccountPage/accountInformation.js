import React, { useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
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
import { editAccountInfo, editAccountPassword } from '../../url.utils';
import { Title } from '@magento/venia-ui/lib/components/Head';


const AccountInformation = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const history = useHistory()
    const { formatMessage } = useIntl();

    const talonProps = useAccountInformationPage({
        ...AccountInformationPageOperations
    });

    const {
        initialValues,
        isSignedIn,
        loadDataError
    } = talonProps;

    const goToAccountInfoEdit = useCallback(() => {
        history.push(editAccountInfo())
    }, [])
    const goToAccountInfoEditPassword = useCallback(() => {
        history.push(editAccountPassword())
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
            <div className={classes.panelWrapper}>
                <div className={classes.panelBody}>
                    <h2 className={classes.panelBodyTitle}>Account Information</h2>
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
                                <i className={classes.iconWrapper}>
                                    <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>edit</title>
                                        <path d="M15.844 21.438l2.094-2.094-2.719-2.688-2.063 2.063v1h1.688v1.719h1zM23.719 8.563q-0.125-0.125-0.297-0.109t-0.297 0.141l-6.25 6.25q-0.125 0.125-0.125 0.297t0.094 0.297q0.125 0.125 0.297 0.109t0.297-0.141l6.25-6.25q0.125-0.125 0.141-0.297t-0.109-0.297zM25.156 19.188v3.375q0 2.125-1.516 3.641t-3.641 1.516h-14.844q-2.156 0-3.656-1.516t-1.5-3.641v-14.844q0-2.125 1.5-3.641t3.656-1.516h14.844q0.531 0 1.063 0.109t1.031 0.359q0.125 0.031 0.203 0.141t0.109 0.266q0.031 0.125-0.016 0.266t-0.141 0.234l-0.875 0.875q-0.125 0.125-0.281 0.172t-0.281-0.016q-0.219-0.063-0.422-0.094t-0.391-0.031h-14.844q-1.188 0-2.031 0.844t-0.844 2.031v14.844q0 1.188 0.844 2.031t2.031 0.844h14.844q1.188 0 2.016-0.844t0.828-2.031v-2.25q0-0.094 0.047-0.203t0.141-0.172l1.125-1.156q0.125-0.125 0.297-0.156t0.328 0.031 0.266 0.203 0.109 0.328v0zM23.438 6l5.125 5.156-12 12h-5.125v-5.156zM31.344 8.344l-1.625 1.656-5.156-5.156 1.656-1.625q0.5-0.5 1.219-0.5t1.219 0.5l2.688 2.719q0.5 0.5 0.5 1.219t-0.5 1.188v0z"></path>
                                    </svg>
                                </i>
                                <span>Edit</span>
                            </Button>
                            <Button
                                className={classes.editInformationButton}
                                disabled={false}
                                onClick={goToAccountInfoEditPassword}
                                priority="normal"
                            >
                                <i className={classes.iconWrapper}>
                                    <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>edit</title>
                                        <path d="M15.844 21.438l2.094-2.094-2.719-2.688-2.063 2.063v1h1.688v1.719h1zM23.719 8.563q-0.125-0.125-0.297-0.109t-0.297 0.141l-6.25 6.25q-0.125 0.125-0.125 0.297t0.094 0.297q0.125 0.125 0.297 0.109t0.297-0.141l6.25-6.25q0.125-0.125 0.141-0.297t-0.109-0.297zM25.156 19.188v3.375q0 2.125-1.516 3.641t-3.641 1.516h-14.844q-2.156 0-3.656-1.516t-1.5-3.641v-14.844q0-2.125 1.5-3.641t3.656-1.516h14.844q0.531 0 1.063 0.109t1.031 0.359q0.125 0.031 0.203 0.141t0.109 0.266q0.031 0.125-0.016 0.266t-0.141 0.234l-0.875 0.875q-0.125 0.125-0.281 0.172t-0.281-0.016q-0.219-0.063-0.422-0.094t-0.391-0.031h-14.844q-1.188 0-2.031 0.844t-0.844 2.031v14.844q0 1.188 0.844 2.031t2.031 0.844h14.844q1.188 0 2.016-0.844t0.828-2.031v-2.25q0-0.094 0.047-0.203t0.141-0.172l1.125-1.156q0.125-0.125 0.297-0.156t0.328 0.031 0.266 0.203 0.109 0.328v0zM23.438 6l5.125 5.156-12 12h-5.125v-5.156zM31.344 8.344l-1.625 1.656-5.156-5.156 1.656-1.625q0.5-0.5 1.219-0.5t1.219 0.5l2.688 2.719q0.5 0.5 0.5 1.219t-0.5 1.188v0z"></path>
                                    </svg>
                                </i>
                                <span>Change Password</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <Title>{formatMessage({ id: "accountInformation.title" })}</Title>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    <FormattedMessage
                        id={'accountInformationPage.myAccount'}
                        defaultMessage={'My Account'}
                    />
                </h1>
            </div>
            {errorMessage ? errorMessage : pageContent}
            <div className={classes.panelWrapper}>
                <div className={classes.panelBody}>
                    <AccountNewsletterBlock />
                </div>
            </div>
            <div className={classes.panelWrapper}>
                <div className={classes.panelBody}>
                    <AccountAddressBlock />
                </div>
            </div>
        </div>
    );
};

export default AccountInformation;
