import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from 'informed';
import { func, shape, string, bool } from 'prop-types';
import { Redirect } from 'react-router-dom';
import zxcvbn from 'zxcvbn';

import { useStyle } from '../../classify';
import { useCreateAccount } from '../../../magento/peregrine/talons/CreateAccount/useCreateAccount';
import combine from '@magento/venia-ui/lib/util/combineValidators';
import {
    hasLengthAtLeast,
    isRequired,
    validatePassword,
    isEqualToField,
} from '@magento/venia-ui/lib/util/formValidators';
import Button from '../Button';
import Checkbox from '@magento/venia-ui/lib/components/Checkbox';
import Field from '../Field';
import TextInput from '../TextInput';
import Password from '../Password';
import defaultClasses from './createAccount.css';
import FormError from '../FormError';
import PasswordStrengthMeter from './passwordStrengthMeter';


const CreateAccount = props => {
    const [passwordScore, setPasswordScore] = useState(null);

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
        } else {
            setPasswordScore(null);
        }
    }

    const cancelButton = props.isCancelButtonHidden ? null : (
        <Button
            className={classes.cancelButton}
            disabled={isDisabled}
            type="button"
            priority="high"
            onClick={handleCancel}
        >
            <span className={classes.icon}>
                <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                    <title>back</title>
                    <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                </svg>
            </span>
            <FormattedMessage
                id={'createAccount.backText'}
                defaultMessage={'Back'}
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
                    id={'signup.formTitle'}
                    defaultMessage={'Create New Customer Account'}
                />
            </h1>
            <div className={classes.loginContainer}>

                <FormError errors={Array.from(errors.values())} />
                <div className={classes.createAccountBlock}>
                    <div className={classes.personalInfo}>
                        <h2 className={classes.h2}>Personal Information</h2>
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
                        <div className={classes.subscribe}>
                            <Checkbox
                                field="subscribe"
                                id="subscribe"
                                label={formatMessage({
                                    id: 'createAccount.subscribeText.signUp',
                                    defaultMessage: 'Sign Up for Newsletter'
                                })}
                            />
                        </div>
                    </div>
                    <div className={classes.accountInfo}>
                        <h2 className={classes.h2}>Sign-in Information</h2>
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

                        <PasswordStrengthMeter score={passwordScore} />
                        <Password
                            fieldName="confirmPassword"
                            label='Confirm Password'
                            validate={combine([
                                isRequired,
                                [hasLengthAtLeast, 8],
                                validatePassword,
                                [isEqualToField, 'password'],
                            ])}
                            isToggleButtonHidden={false}
                        />

                        <div className={classes.actions}>
                            {submitButton}
                            {cancelButton}
                        </div>
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
    onCancel: () => { },
    isCancelButtonHidden: true
};

export default CreateAccount;
