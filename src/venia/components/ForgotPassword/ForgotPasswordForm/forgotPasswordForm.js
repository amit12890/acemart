import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { func, shape, string } from 'prop-types';
import { Form } from 'informed';

import { useStyle } from '../../../classify';
import Button from '../../Button';
import Field from '../../Field';
import TextInput from '../../TextInput';
import defaultClasses from './forgotPasswordForm.css';
import combine from '@magento/venia-ui/lib/util/combineValidators';
import { isValidEmail } from '../../../../app.utils';
import { isRequired } from '../../../util/formValidators';

const ForgotPasswordForm = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const { initialValues, isResettingPassword, onSubmit, onCancel } = props;

    const { formatMessage } = useIntl();

    return (
        <Form
            className={classes.root}
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <Field
                label={formatMessage({
                    id: 'am.forgotPasswordForm.emailAddressText',
                    defaultMessage: 'Email'
                })}
                showStar
            >
                <TextInput
                    autoComplete="email"
                    field="email"
                    validate={combine([isRequired, isValidEmail])}
                />
            </Field>
            <div className={classes.buttonContainer}>
                <Button
                    className={classes.submitButton}
                    disabled={isResettingPassword}
                    type="submit"
                    priority="high"
                >
                    <FormattedMessage
                        id={'forgotPasswordForm.submitButtonText.resetPassword'}
                        defaultMessage={'Reset My Password'}
                    />
                </Button>
                <Button
                    className={classes.cancelButton}
                    disabled={isResettingPassword}
                    type="button"
                    priority="low"
                    onClick={onCancel}
                >
                    Go Back
                </Button>
            </div>
        </Form>
    );
};

ForgotPasswordForm.propTypes = {
    classes: shape({
        form: string,
        buttonContainer: string
    }),
    initialValues: shape({
        email: string
    }),
    onCancel: func.isRequired,
    onSubmit: func.isRequired
};

ForgotPasswordForm.defaultProps = {
    initialValues: {}
};

export default ForgotPasswordForm;
