import React, { useCallback, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Form } from 'informed';

import {
    GET_CUSTOMER_INFORMATION,
    SET_CUSTOMER_INFORMATION,
    CHANGE_CUSTOMER_PASSWORD,
} from './accountInformation.gql.js';
import {
    isRequired,
    hasLengthAtLeast,
    validatePassword,
    isNotEqualToField,
    isEqualToField
} from '@magento/venia-ui/lib/util/formValidators';
import combine from '@magento/venia-ui/lib/util/combineValidators';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { useIntl } from 'react-intl';

import Field from '../../venia/components/Field';
import Button from '../../venia/components/Button';
import TextInput from '../../venia/components/TextInput';
import Password from '../../venia/components/Password';

import { useStyle } from '../../venia/classify';
import defaultClasses from './editAccountInfo.css';
import { accountPageUrl } from '../../url.utils.js';
import { Title } from '@magento/venia-ui/lib/components/Head';
import { CheckCircle as CheckCircleIcon, AlertCircle as AlertCircleIcon } from 'react-feather';
import Icon from '../../venia/components/Icon/icon.js';
import { useToasts } from '@magento/peregrine';
import { isPasswordSame, isValidEmail } from '../../app.utils.js';
import { get } from 'lodash';

const successIcon = (
    <Icon
        src={CheckCircleIcon}
        attrs={{
            width: 18
        }}
    />
);

const ErrorIcon = <Icon src={AlertCircleIcon} attrs={{ width: 18 }} />;

const EditAccountInfo = ({ path }) => {
    const { formatMessage } = useIntl();
    const history = useHistory();
    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(path.includes("changepass"))
    const [showError, setError] = useState(null)
    const classes = useStyle(defaultClasses);
    const [_, { addToast }] = useToasts();

    const { data: accountInformationData, error: loadDataError } = useQuery(
        GET_CUSTOMER_INFORMATION,
        {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        }
    );
    const initialValues = useMemo(() => {
        if (accountInformationData) {
            return { customer: accountInformationData.customer };
        }
    }, [accountInformationData]);

    const [
        setCustomerInformation,
        {
            error: customerInformationUpdateError,
            loading: isUpdatingCustomerInformation
        }
    ] = useMutation(SET_CUSTOMER_INFORMATION);
    const [
        changeCustomerPassword,
        {
            error: customerPasswordChangeError,
            loading: isChangingCustomerPassword
        }
    ] = useMutation(CHANGE_CUSTOMER_PASSWORD);

    const handleSubmit = async ({ email, firstname, lastname, password, newPassword }) => {
        setError(null);
        try {
            if (
                initialValues.customer.email !== email
            ) {
                await setCustomerInformation({
                    variables: {
                        customerInput: { email, firstname, lastname, password }
                    }
                });
            }
            else if (
                initialValues.customer.firstname !== firstname ||
                initialValues.customer.lastname !== lastname
            ) {
                await setCustomerInformation({
                    variables: {
                        customerInput: { firstname, lastname, }
                    }
                });
            }

            if (showPassword) {
                // password update
                if (password && newPassword) {
                    await handleChangePassword({ email, firstname, lastname, password, newPassword })
                }
            } else {
                addToast({
                    type: 'success',
                    icon: successIcon,
                    message: 'Account information updated successfully.',
                    dismissable: true,
                    timeout: 3000
                });
                history.push(accountPageUrl())
            }
        } catch (error) {
            const errType = get(error, "graphQLErrors.0.path.0", "");
            if (errType === "updateCustomer") {
                addToast({
                    type: 'error',
                    icon: ErrorIcon,
                    message: "The password doesn't match this account. Verify the password and try again.",
                    dismissable: true,
                    timeout: 3000
                });
            } else if (errType === "changeCustomerPassword") {
                addToast({
                    type: 'error',
                    icon: ErrorIcon,
                    message: "The password doesn't match this account. Verify the password and try again.",
                    dismissable: true,
                    timeout: 3000
                });
            }
        }
    };

    const handleChangePassword = async ({ email, firstname, lastname, password, newPassword }) => {
        changeCustomerPassword({
            variables: {
                currentPassword: password,
                newPassword: newPassword
            }
        }).then(() => {
            addToast({
                type: 'success',
                icon: successIcon,
                message: 'Account information updated successfully.',
                dismissable: true,
                timeout: 3000
            });
            history.push(accountPageUrl())
        }).catch(() => {
            addToast({
                type: 'error',
                icon: ErrorIcon,
                message: "The password doesn't match this account. Verify the password and try again.",
                dismissable: true,
                timeout: 3000
            });
        })
    }

    const isLoading = isUpdatingCustomerInformation || isChangingCustomerPassword;

    let sectionTitle = ""
    if (showEmail)
        sectionTitle = showPassword ? "Change Email & " : "Change Email"
    if (showPassword)
        sectionTitle += "Change Password"

    return (
        <div className={classes.root}>
            <Title>{formatMessage({ id: "editAccountInfo.title" })}</Title>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>Edit Account Information</h1>
            </div>
            <div className={classes.panelWrapper}>
                <div className={classes.panelBody}>
                    {showError && <div>{showError}</div>}
                    <Form className={classes.form} initialValues={initialValues.customer}
                        onSubmit={handleSubmit}>
                        <div className={[classes.fieldWrapper, classes.firstname].join(" ")}>
                            <Field
                                id="firstname"
                                label="First Name"
                                showStar
                            >
                                <TextInput field="firstname" validate={isRequired} />
                            </Field>
                        </div>
                        <div className={[classes.fieldWrapper, classes.lastname].join(" ")}>
                            <Field
                                id="lastname"
                                label='Last Name'
                                showStar
                            >
                                <TextInput field="lastname" validate={isRequired} />
                            </Field>
                        </div>
                        <div className={[classes.fieldWrapper, classes.firstname].join(" ")}>
                            <div className={classes.fieldChoice}>
                                <label className={classes.label}>
                                    <input
                                        name="showEmail"
                                        type="checkbox"
                                        checked={showEmail}
                                        onChange={() => setShowEmail(val => !val)} />
                                    Change Email
                                </label>
                            </div>
                            <div className={[classes.field, classes.choice].join(" ")}>
                                <label className={classes.label}>
                                    <input
                                        name="showPassword"
                                        type="checkbox"
                                        checked={showPassword}
                                        onChange={() => setShowPassword(val => !val)} />
                                    Change Password
                                </label>
                            </div>
                        </div>
                        {(showEmail || showPassword) &&
                            <h3 className={classes.blockSubTitle}>{sectionTitle}</h3>
                        }

                        {showEmail &&
                            <div className={[classes.fieldWrapper, classes.email].join(" ")}>
                                <Field
                                    id="email"
                                    label='Email'
                                    showStar
                                >
                                    <TextInput field="email"
                                        validate={combine([isRequired, isValidEmail])}
                                    />
                                </Field>
                            </div>
                        }
                        {(showEmail || showPassword) &&
                            <div className={[classes.fieldWrapper, classes.password].join(" ")}>
                                <Password
                                    fieldName="password"
                                    label="Current Password"
                                    validate={isRequired}
                                    autoComplete="current-password"
                                    isToggleButtonHidden={false}
                                />
                            </div>
                        }
                        {showPassword &&
                            <>
                                <div className={[classes.fieldWrapper, classes.newPassword].join(" ")}>

                                    <Password
                                        fieldName="newPassword"
                                        label='New Password'
                                        validate={combine([
                                            isRequired,
                                            [hasLengthAtLeast, 8],
                                            validatePassword,
                                            [isNotEqualToField, 'password']
                                        ])}
                                        isToggleButtonHidden={false}
                                    />
                                </div>
                                <div className={[classes.fieldWrapper, classes.newPassword].join(" ")}>
                                    <Password
                                        fieldName="confirmPassword"
                                        label='Confirm Password'
                                        validate={combine([
                                            isRequired,
                                            [hasLengthAtLeast, 8],
                                            validatePassword,
                                            [isNotEqualToField, 'password'],
                                            [isPasswordSame, 'newPassword'],
                                        ])}
                                        isToggleButtonHidden={false}
                                    />
                                </div>
                            </>
                        }

                        <div className={classes.actionToolbar}>
                            <div className={classes.primaryAction}>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? "Loading" : "Submit"}
                                </Button>
                            </div>
                            <div className={classes.secondaryAction}>
                                <Link
                                    to={resourceUrl('/')}
                                    className={classes.action}
                                >
                                    <i className={classes.iconWrapper}>
                                        <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <title>back</title>
                                            <path d="M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"></path>
                                        </svg>

                                    </i>
                                    <span>Go Back</span>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default EditAccountInfo