import React, { useCallback, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router';
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
import { useIntl } from 'react-intl';

import Field from '../../venia/components/Field';
import Button from '../../venia/components/Button';
import TextInput from '../../venia/components/TextInput';
import Password from '../../venia/components/Password';

import { useStyle } from '../../venia/classify';
import defaultClasses from './editAccountInfo.css';
import { accountPageUrl } from '../../url.utils.js';
import { Title } from '@magento/venia-ui/lib/components/Head';


const EditAccountInfo = ({path}) => {
    const { formatMessage } = useIntl();
    const history = useHistory();
    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(path.includes("changepass"))
    const [showError, setError] = useState(null)
    const classes = useStyle(defaultClasses);

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

    const handleSubmit = useCallback(
        async ({ email, firstname, lastname, password, newPassword }) => {
        setError(null);
        try {
            if (
                initialValues.customer.email !== email
            ) {
                await setCustomerInformation({
                    variables: {
                        customerInput: {email, firstname, lastname, password}
                    }
                });
            }
            else if (
                initialValues.customer.firstname !== firstname ||
                initialValues.customer.lastname !== lastname
            ) {
                await setCustomerInformation({
                    variables: {
                        customerInput: {firstname, lastname,}
                    }
                });
            }
            // password update
            if (password && newPassword) {
                await changeCustomerPassword({
                    variables: {
                        currentPassword: password,
                        newPassword: newPassword
                    }
                });
            }
            history.push(accountPageUrl())
        } catch (error) {
            console.log(error);
            setError("Your data was not updated due to an error !!");
        }
    }, []);

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
                            >
                                <TextInput field="firstname" validate={isRequired} />
                            </Field>
                        </div>
                        <div className={[classes.fieldWrapper, classes.lastname].join(" ")}>
                            <Field
                                id="lastname"
                                label='Last Name'
                            >
                                <TextInput field="lastname" validate={isRequired} />
                            </Field>
                        </div>
                        <div className={[classes.fieldWrapper, classes.firstname].join(" ")}>
                            <div className={classes.fieldChoice}>
                                <label>
                                    <input
                                        name="showEmail"
                                        type="checkbox"
                                        checked={showEmail}
                                        onChange={() => setShowEmail(val => !val)} />
                                    Change Email
                                </label>
                                </div>
                                <div className={[classes.field, classes.choice].join(" ")}>
                                    <label>
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
                                >
                                    <TextInput field="email" validate={isRequired} />
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
                                        [isEqualToField, 'newPassword'],
                                    ])}
                                    isToggleButtonHidden={false}
                                /> 
                            </div>
                            </>
                        }

                        <div className={classes.actionToolbar}>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Loading" : "Submit"}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default EditAccountInfo