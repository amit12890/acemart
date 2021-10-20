import React, { useEffect, useState } from 'react';
import { Form } from 'informed';

import {
    useAccountInformationPage
} from '@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage';
import AccountInformationPageOperations from './accountInformation.gql.js';
import {
    isRequired,
    hasLengthAtLeast,
    validatePassword,
    isNotEqualToField
} from '@magento/venia-ui/lib/util/formValidators';

import Field from '../../venia/components/Field';
import Button from '../../venia/components/Button';
import TextInput from '../../venia/components/TextInput';

import { useStyle } from '../../venia/classify';
import defaultClasses from './editAccountInfo.css';


const EditAccountInfo = ({path}) => {
    const talonProps = useAccountInformationPage({
        ...AccountInformationPageOperations
    });

    const {
        handleCancel,
        formErrors,
        handleChangePassword,
        handleSubmit,
        initialValues,
        isDisabled,
        isSignedIn,
        isUpdateMode,
        loadDataError,
        shouldShowNewPassword,
        showUpdateMode
    } = talonProps;

    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(path.includes("changepass"))
    const classes = useStyle(defaultClasses);
    const onSubmit = (aargs) => {
        console.log(aargs)
    }
    let sectionTitle = ""
    if (showEmail)
        sectionTitle = showPassword ? "Change Email & " : "Change Email"
    if (showPassword)
        sectionTitle += "Change Password"

    return (
        <div className={classes.root}>
            <Form className={classes.form} initialValues={initialValues.customer} onSubmit={onSubmit}>
                <div className={classes.firstname}>
                    <Field
                        id="firstname"
                        label="First Name"
                    >
                        <TextInput field="firstname" validate={isRequired} />
                    </Field>
                </div>
                <div className={classes.lastname}>
                    <Field
                        id="lastname"
                        label='Last Name'
                    >
                        <TextInput field="lastname" validate={isRequired} />
                    </Field>
                </div>
                <div>
                    <label>
                        Change Email
                        <input
                            name="showEmail"
                            type="checkbox"
                            checked={showEmail}
                            onChange={() => setShowEmail(val => !val)} />
                    </label>

                    <label>
                        Change Password
                        <input
                            name="showPassword"
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(val => !val)} />
                    </label>
                </div>
                {(showEmail || showPassword) &&
                    <h3>{sectionTitle}</h3>
                }

                {showEmail &&
                    <div className={classes.email}>
                        <Field
                            id="email"
                            label='Email'
                        >
                            <TextInput field="email" validate={isRequired} />
                        </Field>
                    </div>
                }
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default EditAccountInfo