import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from 'informed';
import { func, shape, string, bool } from 'prop-types';
import { Redirect } from 'react-router-dom';
import zxcvbn from 'zxcvbn';

import { useStyle } from '../../classify';
import { useCreateAccount } from '@magento/peregrine/lib/talons/CreateAccount/useCreateAccount';
import combine from '@magento/venia-ui/lib/util/combineValidators';
import {
    hasLengthAtLeast,
    isRequired,
    validatePassword
} from '@magento/venia-ui/lib/util/formValidators';
import Button from '../Button';
import Checkbox from '@magento/venia-ui/lib/components/Checkbox';
import Field from '../Field';
import TextInput from '../TextInput';
import Password from '../Password';
import defaultClasses from './createAccount.css';
import FormError from '@magento/venia-ui/lib/components/FormError';
import PasswordStrengthMeter from './passwordStrengthMeter';


const CreateAccount = props => {
    const [passwordScore, setPasswordScore] = useState(0);
    const [showPassScore, setShowPassScore] = useState(false);

    const talonProps = useCreateAccount({
        initialValues: props.initialValues,
        onSubmit: props.onSubmit,
        onCancel: props.onCancel
    });

    const {
        errors,
        handleCancel,
        handleSubmit,
        isDisabled,
        isSignedIn,
        initialValues
    } = talonProps;
    const { formatMessage } = useIntl();
    const classes = useStyle(defaultClasses, props.classes);

    if (isSignedIn) {
        return <Redirect to="/" />;
    }

    const handlePasswordUpdate = (e) => {
        const passwordText = e.target.value || "";
        if (passwordText.length) {
            setPasswordScore(zxcvbn(passwordText).score);
            setShowPassScore(true);
        } else {
            setPasswordScore(0);
            setShowPassScore(false);
        }
    }

    const cancelButton = props.isCancelButtonHidden ? null : (
        <Button
            className={classes.cancelButton}
            disabled={isDisabled}
            type="button"
            priority="low"
            onClick={handleCancel}
        >
            <FormattedMessage
                id={'createAccount.cancelText'}
                defaultMessage={'Cancel'}
            />
        </Button>
    );

    const submitButton = (
        <Button
            className={classes.submitButton}
            disabled={isDisabled}
            type="submit"
            priority="high"
        >
            <FormattedMessage
                id={'createAccount.createAccountText'}
                defaultMessage={'Create an Account'}
            />
        </Button>
    );

    return (
        <Form
            className={classes.root}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            <h1 className={classes.title}>
                <FormattedMessage
                    id={'createAccount.createAccountText'}
                    defaultMessage={'Create an Account'}
                />
            </h1>
            <div className={classes.loginContainer}>
               
                <FormError errors={Array.from(errors.values())} />
                <div className={classes.createAccountBlock}>
                <Field
                    label={formatMessage({
                        id: 'createAccount.firstNameText',
                        defaultMessage: 'First Name'
                    })}
                >
                    <TextInput
                        field="customer.firstname"
                        autoComplete="given-name"
                        validate={isRequired}
                        validateOnBlur
                        mask={value => value && value.trim()}
                        maskOnBlur={true}
                    />
                </Field>
                <Field
                    label={formatMessage({
                        id: 'createAccount.lastNameText',
                        defaultMessage: 'Last Name'
                    })}
                >
                    <TextInput
                        field="customer.lastname"
                        autoComplete="family-name"
                        validate={isRequired}
                        validateOnBlur
                        mask={value => value && value.trim()}
                        maskOnBlur={true}
                    />
                </Field>
                <Field
                    label={formatMessage({
                        id: 'createAccount.emailText',
                        defaultMessage: 'Email'
                    })}
                >
                    <TextInput
                        field="customer.email"
                        autoComplete="email"
                        validate={isRequired}
                        validateOnBlur
                        mask={value => value && value.trim()}
                        maskOnBlur={true}
                    />
                </Field>
                <Password
                    autoComplete="new-password"
                    fieldName="password"
                    onChange={handlePasswordUpdate}
                    isToggleButtonHidden={false}
                    label={formatMessage({
                        id: 'createAccount.passwordText',
                        defaultMessage: 'Password'
                    })}
                    validate={combine([
                        isRequired,
                        [hasLengthAtLeast, 8],
                        validatePassword
                    ])}
                    validateOnBlur
                    mask={value => value && value.trim()}
                    maskOnBlur={true}
                />

                {showPassScore && <PasswordStrengthMeter score={passwordScore} />}
                
                <div className={classes.subscribe}>
                    <Checkbox
                        field="subscribe"
                        id="subscribe"
                        label={formatMessage({
                            id: 'createAccount.subscribeText',
                            defaultMessage: 'Subscribe to news and updates'
                        })}
                    />
                </div>
                <div className={classes.actions}>
                    {submitButton}
                    {cancelButton}
                </div>
            </div>
        </div>
        </Form>
    );
};

CreateAccount.propTypes = {
    classes: shape({
        actions: string,
        lead: string,
        root: string,
        subscribe: string
    }),
    initialValues: shape({
        email: string,
        firstName: string,
        lastName: string
    }),
    isCancelButtonHidden: bool,
    onSubmit: func,
    onCancel: func
};

CreateAccount.defaultProps = {
    onCancel: () => {},
    isCancelButtonHidden: true
};

export default CreateAccount;
