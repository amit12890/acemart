import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { func, shape, string } from 'prop-types';
import { Form } from 'informed';
import { useSignIn } from '../../../magento/peregrine/talons/SignIn/useSignIn';

import Button from '../Button';
import Field from '../Field';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import TextInput from '../TextInput';
import Password from '../Password';
import LinkButton from '../LinkButton';
import FormError from '../FormError/formError';

import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import { useStyle } from '../../classify';
import { GET_CART_DETAILS_QUERY } from './signIn.gql';
import defaultClasses from './signIn.css';


const SignIn = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const { setDefaultUsername, showCreateAccount, showForgotPassword } = props;

    const { formatMessage } = useIntl();
    const talonProps = useSignIn({
        getCartDetailsQuery: GET_CART_DETAILS_QUERY,
        setDefaultUsername,
        showCreateAccount,
        showForgotPassword
    });

    const {
        errors,
        handleCreateAccount,
        handleForgotPassword,
        handleSubmit,
        isBusy,
        setFormApi
    } = talonProps;

    if (isBusy) {
        return (
            <div className={classes.modal_active}>
                <LoadingIndicator>
                    <FormattedMessage
                        id={'signIn.loadingText'}
                        defaultMessage={'Signing In'}
                    />
                </LoadingIndicator>
            </div>
        );
    }

    const forgotPasswordClasses = {
        root: classes.forgotPasswordButton
    };

    const root_class = props.isPopup ?
        classes.root_left_align : classes.root;

    const password_classes = props.isPopup ?
        {
            label: classes.label_left_align,
            input: classes.input_borderPassword
        }
        : { label: classes.password_label };

    const label_class = {
        label: props.isPopup
            ? classes.label_left_align : classes.label
    }
    const input_class = props.isPopup ?
        { input: classes.input_border } : {}

    return (
        <div className={root_class}>
            <h1 className={classes.title}>
                <FormattedMessage
                    id={'signIn.titleText'}
                    defaultMessage={'Sign-in to Your Account'}
                />
            </h1>
            <div className={classes.loginContainer}>
                <div className={classes.blockHeader}>
                    <div className={classes.blockHeaderContent}>
                        <h2>REGISTERED CUSTOMERS</h2>
                        <p>If you have an account, sign in with your email address.</p>

                    </div>
                </div>
                <FormError errors={Array.from(errors.values())} />
                <Form
                    getApi={setFormApi}
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    <div className={classes.blockContentWrapper}>
                        <div className={classes.loginBlock}>

                            <Field
                                label={formatMessage({
                                    id: 'signIn.emailText',
                                    defaultMessage: 'Email'
                                })}
                                classes={label_class}
                            >
                                <TextInput
                                    autoComplete="email"
                                    field="email"
                                    validate={isRequired}
                                    classes={input_class}
                                />
                            </Field>
                            <Password
                                fieldName="password"
                                label={formatMessage({
                                    id: 'signIn.passwordText',
                                    defaultMessage: 'Password'
                                })}
                                validate={isRequired}
                                classes={password_classes}
                                autoComplete="current-password"
                                isToggleButtonHidden={false}
                            />
                            <div className={classes.actionToolbar}>
                                <div className={classes.actionToolbarLogin}>
                                    <Button priority="high" type="submit">
                                        <FormattedMessage
                                            id={'signIn.signInText'}
                                            defaultMessage={'Sign In'}
                                        />
                                    </Button>
                                </div>
                                <div className={classes.forgotPasswordButtonContainer}>
                                    <LinkButton
                                        classes={forgotPasswordClasses}
                                        type="button"
                                        onClick={handleForgotPassword}
                                    >
                                        <FormattedMessage
                                            id={'signIn.forgotPasswordText'}
                                            defaultMessage={'Forgot Password?'}
                                        />
                                    </LinkButton>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={classes.blockFooter}>
                        <div className={classes.blockFooterContent}>

                            <h3>New Customers</h3>
                            <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                            <div className={classes.blockFooterAction}>
                                <Button
                                    priority="high"
                                    type="button"
                                    onClick={handleCreateAccount}
                                >
                                    <FormattedMessage
                                        id={'signIn.createAccountText'}
                                        defaultMessage={'Create an Account'}
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>

            </div>

        </div>
    );
};

export default SignIn;
SignIn.propTypes = {
    classes: shape({
        buttonsContainer: string,
        form: string,
        forgotPasswordButton: string,
        forgotPasswordButtonContainer: string,
        root: string,
        title: string
    }),
    setDefaultUsername: func,
    showCreateAccount: func,
    showForgotPassword: func
};
SignIn.defaultProps = {
    setDefaultUsername: () => { },
    showCreateAccount: () => { },
    showForgotPassword: () => { }
};
