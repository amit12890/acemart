import React, { useState, useEffect, useRef, useContext, useCallback } from 'react'
import { connect } from 'react-redux'

import TextInput from '../../TextInput'
import { useToasts } from '@magento/peregrine';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import LoadingIndicator from '../../LoadingIndicator'
import Icon from '../../../venia/components/Icon'
import {
    CheckCircle as CheckCircleIcon,
    AlertCircle as AlertCircleIcon
} from 'react-feather';

import { useEmailStep } from '../../../data/checkout/hooks/emailValidation.hook';

import { get, size, debounce } from 'lodash'
import { validateEmail, validatePassword } from '../../../app.utils'


const successIcon = (
    <Icon
        src={CheckCircleIcon}
        attrs={{
            width: 18
        }}
    />
);

const errorIcon = (
    <Icon
        src={AlertCircleIcon}
        attrs={{
            width: 18
        }}
    />
);

export default connect(store => {
    return {
        email: store.checkout.email
    }
})((props) => {

    const emailInputRef = useRef({})
    const [{ cartId }] = useCartContext()
    const [{ isSignedIn }] = useUserContext()
    const { isEmailAvailable, loading: emailValidating, checkEmailAvailable, setGuestEmailOnCart, settingEmail } = useEmailStep()
    const [, { addToast }] = useToasts();

    const [email, setEmail] = useState(props.email)
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})


    useEffect(() => {
        setEmail(email);
    }, [email])


    useEffect(() => {
        if (size(emailInputRef.current) === 0) {
            return
        }
        let timeout = null;

        emailInputRef.current.addEventListener("keyup", () => {
            // Clear the timeout if it has already been set.
            // This will prevent the previous task from executing
            // if it has been less than <MILLISECONDS>
            clearTimeout(timeout);
            // Make a new timeout set to go off in 1000ms (1 second)
            timeout = setTimeout(() => {
                let inputText = emailInputRef.current.value
                if (size(validateEmail(inputText)) === 0) {
                    if (!emailValidating) {
                        checkEmailAvailable(inputText)
                    }
                } else {
                    setPassword('')
                }
            }, 1000);
        })

    }, [])



    /**
       * data will be validate and 
       * graphql call to authenticate user
       */
    const loginUser = useCallback((e) => {
        e.preventDefault()
        let errorInCheck = {}
        let data = { "email": email, "password": password }
        let emailValidErrStr = validateEmail(data.email)
        let passwordValidErrStr = validatePassword(data.password)
        if (size(emailValidErrStr) > 0) {
            errorInCheck = { ...errorInCheck, email: emailValidErrStr }
        }
        if (size(password) === 0) {
            errorInCheck = { ...errorInCheck, password: passwordValidErrStr }
        }
        if (size(errorInCheck) > 0) {
            setErrors(errorInCheck)
            return
        }
        setErrors({})

        // TODO : LOGIN


        // Login.authenticateCustomer(data, {
        //     onCompleted: () => {
        //         addToast({
        //             type: 'success',
        //             icon: successIcon,
        //             message: "Logged in Successfully",
        //             dismissable: true,
        //             timeout: 10000
        //         });
        //     },
        //     onError: ({ message }) => {
        //         addToast({
        //             type: 'error',
        //             icon: errorIcon,
        //             message,
        //             dismissable: true,
        //             timeout: 10000
        //         });
        //     }
        // })

    }, [email, password])



    const addEmailToCart = useCallback((e) => {
        e.preventDefault()
        let emailValidateError = validateEmail(email)
        if (size(emailValidateError) > 0) {
            setErrors({ email: emailValidateError })
            return
        }
        setErrors({})

        // add email to cart api call
        setGuestEmailOnCart(cartId, email)
    }, [email, cartId])


    const renderNonEditableField = () => {
        return (
            <div className="block block-checkout email-address">
                <div className="block-title">
                    Email Address
                </div>
                <div className="block-content">
                    <fieldset className="fieldset">
                        <div className="field required">
                            <div className="control">
                                <span>{props.email}</span>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }

    const renderEditableField = () => {

        let timeout = null
        return (

            <div className="block block-checkout email-address">
                <div className="block-title">
                    Email Address
                </div>
                <div className="block-content">
                    <fieldset className="fieldset">
                        <TextInput
                            innerRef={emailInputRef}
                            containerClass="field required"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            className="input-text"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            name="checkoutEmail"
                            htmlFor="checkoutEmail"
                            errorMessage={get(errors, "email", '')} />

                        {emailValidating &&
                            <LoadingIndicator style={{ width: 200, height: 50, margin: '0 auto' }} />
                        }
                        {(size(email) > 0 && isEmailAvailable) &&
                            <TextInput
                                containerClass="field password required"
                                label="Password"
                                type="password"
                                className="input-text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                htmlFor="password"
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        loginUser(e)
                                    }
                                }}
                                errorMessage={get(errors, "password", '')} />
                        }

                        <div className="actions-toolbar">
                            <div className="primary">
                                <button
                                    type="submit"
                                    className="action primary add-email"
                                    onClick={isEmailAvailable ? loginUser : addEmailToCart}
                                    disabled={email === props.email && !isEmailAvailable}>
                                    <span>{isEmailAvailable ? "Login" : "Continue"}</span>
                                </button>
                            </div>
                        </div>


                    </fieldset>
                </div>
            </div>
        )
    }

    if (isSignedIn) {
        return renderNonEditableField()
    } else {
        return renderEditableField()
    }

    return (
        <div>
            <h4>Email address</h4>
            {isUserLoggedIn ? renderNonEditableField() : renderEditableField()}
        </div>
    )
})