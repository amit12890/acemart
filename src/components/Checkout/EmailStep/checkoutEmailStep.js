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
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './checkoutEmailStep.css'
import button from '../../../venia/components/Button'
import { get, size, debounce } from 'lodash'
import { validateEmail, validatePassword } from '../../../app.utils'
import { useSignIn } from '../../../magento/peregrine/talons/SignIn/useSignIn';
import { GET_CART_DETAILS_QUERY } from '../../../venia/components/SignIn/signIn.gql'
import { loginAndFetchingCheckout } from '../../../data/checkout/checkout.action';
import Button from '../../../venia/components/Button';
import LoadingButton from '../../LoadingButton'




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
        email: store.checkout.email,
        is_email_available: store.checkout.is_email_available
    }
})((props) => {

    const classes = useStyle(defaultClasses)
    const { dispatch } = props
    const { handleSubmit } = useSignIn({
        getCartDetailsQuery: GET_CART_DETAILS_QUERY
    })
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
    }, [props.email])


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
        console.log(
            "===========> hrere"
        )
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
        console.log("🚀 ~ file: checkoutEmailStep.js ~ line 112 ~ loginUser ~ errorInCheck", errorInCheck)
        if (size(errorInCheck) > 0) {
            setErrors(errorInCheck)
            return
        }
        setErrors({})
        console.log("doing login.....")
        dispatch(loginAndFetchingCheckout())
        handleSubmit({ email, password })

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


    const renderNonEditableField = useCallback(() => {
        return (
            <div className={classes.block}>
                <div className={classes.blockTitle}>
                    Email Address
                </div>
                <div className={classes.blockContent}>
                    <fieldset className={classes.fieldset}>
                        <div className={classes.field}>
                            <div className={classes.control}>
                                <span>{email}</span>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }, [email])

    const renderEditableField = () => {

        let timeout = null
        return (

            <div className={classes.block}>
                <div className={classes.blockTitle}>
                    Email Address
                </div>
                <div className={classes.blockContent}>
                    <fieldset className={classes.fieldset}>
                        <TextInput
                            innerRef={emailInputRef}
                            containerClass={[classes.field, classes.email].join(" ")}
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"

                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            name="checkoutEmail"
                            htmlFor="checkoutEmail"
                            errorMessage={get(errors, "email", '')} />

                        {(size(email) > 0 && !isEmailAvailable) &&
                            <TextInput
                                containerClass={[classes.field, classes.password].join(" ")}
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


                        <div className={classes.actionToolbar}>
                            <div className={classes.primary}>
                                {(emailValidating || settingEmail) ? (
                                    <LoadingButton classes={{ wrapper: classes.loadingButton }} />
                                ) : (
                                    <button
                                        type="submit"
                                        className={classes.action}
                                        onClick={!isEmailAvailable ? loginUser : addEmailToCart}
                                        disabled={email === props.email && !isEmailAvailable}>
                                        <span>{!isEmailAvailable ? "Login" : "Continue"}</span>
                                    </button>
                                )}
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