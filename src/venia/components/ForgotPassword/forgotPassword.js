import React, { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { func, shape, string } from 'prop-types';

import { useForgotPassword } from '../../../magento/peregrine/talons/ForgotPassword/useForgotPassword';

import FormErrors from '../FormError';
import { useStyle } from '../../classify';
import ForgotPasswordForm from './ForgotPasswordForm';
import FormSubmissionSuccessful from './FormSubmissionSuccessful';

import forgotPasswordOperations from './forgotPassword.gql';

import defaultClasses from './forgotPassword.css';

const ForgotPassword = props => {
    const { initialValues, onCancel } = props;

    const { formatMessage } = useIntl();
    const talonProps = useForgotPassword({
        onCancel,
        ...forgotPasswordOperations
    });

    const {
        forgotPasswordEmail,
        formErrors,
        handleCancel,
        handleFormSubmit,
        hasCompleted,
        isResettingPassword
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);
    const INSTRUCTIONS = formatMessage({
        id: 'am.forgotPassword.instructions',
        defaultMessage:
            'Please enter your email address below to receive a password reset link.'
    });
    const children = hasCompleted ? (
        <FormSubmissionSuccessful email={forgotPasswordEmail} />
    ) : (
        <Fragment>
            <h1 className={classes.title}>
                <FormattedMessage
                    id={'am.forgotPassword.recoverPasswordText'}
                    defaultMessage={'Forgot Your Password'}
                />
            </h1>
            <div className={classes.loginContainer}>
                <div className={classes.forgotPasswordBlock}>
                    <p className={classes.instructions}>{INSTRUCTIONS}</p>
                    <ForgotPasswordForm
                        initialValues={initialValues}
                        isResettingPassword={isResettingPassword}
                        onSubmit={handleFormSubmit}
                        onCancel={handleCancel}
                    />
                    <FormErrors errors={formErrors} />
                </div>
            </div>
        </Fragment>
    );

    return <div className={classes.root}>{children}</div>;
};

export default ForgotPassword;

ForgotPassword.propTypes = {
    classes: shape({
        instructions: string,
        root: string
    }),
    initialValues: shape({
        email: string
    }),
    onCancel: func
};

ForgotPassword.defaultProps = {
    onCancel: () => { }
};
