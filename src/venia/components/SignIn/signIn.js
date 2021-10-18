import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { func, shape, string } from 'prop-types';
import { Form } from 'informed';
import { useSignIn } from '@magento/peregrine/lib/talons/SignIn/useSignIn';

import Button from '../Button';
import Field from '../Field';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import TextInput from '../TextInput';
import Password from '../Password';
import LinkButton from '../LinkButton';
import FormError from '@magento/venia-ui/lib/components/FormError/formError';

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

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                <FormattedMessage
                    id={'signIn.titleText'}
                    defaultMessage={'Sign-in to Your Account'}
                />
            </h1>
            <div className={classes.loginContainer}>
            
            <FormError errors={Array.from(errors.values())} />
            <Form
                getApi={setFormApi}
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <div className={classes.loginBlock}>
                    <Field
                        label={formatMessage({
                            id: 'signIn.emailAddressText',
                            defaultMessage: 'Email address'
                        })}
                    >
                        <TextInput
                            autoComplete="email"
                            field="email"
                            validate={isRequired}
                        />
                    </Field>
                    <Password
                        fieldName="password"
                        label={formatMessage({
                            id: 'signIn.passwordText',
                            defaultMessage: 'Password'
                        })}
                        validate={isRequired}
                        autoComplete="current-password"
                        isToggleButtonHidden={false}
                    />

                    <div className={classes.actionToolbarLogin}>
                        <Button priority="high" type="submit">
                            <FormattedMessage
                                id={'signIn.signInText'}
                                defaultMessage={'Sign In'}
                            />
                        </Button>
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
                <div className={classes.blockFooter}>
            
                   
                    <Button
                        priority="normal"
                        type="button"
                        onClick={handleCreateAccount}
                    >
                        <FormattedMessage
                            id={'signIn.createAccountText'}
                            defaultMessage={'Create an Account'}
                        />
                    </Button>
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
    setDefaultUsername: () => {},
    showCreateAccount: () => {},
    showForgotPassword: () => {}
};
