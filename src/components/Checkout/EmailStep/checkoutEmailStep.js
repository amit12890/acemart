import React, { useState, useEffect, useRef, useContext, useCallback } from 'react'
import { connect } from 'react-redux'

import TextInput from '../../TextInput'
import { useToasts } from '@magento/peregrine';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import Icon from '../../../venia/components/Icon'
import { FormattedMessage } from 'react-intl'
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
import LoadingIndicator from '../../../venia/components/LoadingIndicator'
import LoadingButton from '../../LoadingButton'
import { useHistory } from 'react-router-dom';




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
    const history = useHistory()
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
    const [password, setPassword] = useState(null)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        setEmail(email);
    }, [props.email])

    useEffect(() => {
        if (!isEmailAvailable) {
            setPassword('');
        } else {
            setPassword(null)
        }
    }, [isEmailAvailable])


    const debouncedEmailCheck = useCallback(debounce((inputText) => {
        if (size(validateEmail(inputText)) === 0) {
            if (!emailValidating) {
                checkEmailAvailable(inputText)
            }
        } else {
            setPassword('')
        }
    }, 1000), [emailValidating])

    const onEmailChange = useCallback((email) => {
        setEmail(email)
        debouncedEmailCheck(email)
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
        setPassword(null)
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
                    {emailValidating ? (
                        <div className={classes.horizontalLoaderWrapper}>
                            <LoadingIndicator
                                classes={{
                                    root: classes.horizontalLoader
                                }}>
                                <FormattedMessage
                                    id={'email.validating'}
                                    defaultMessage={'Validating Email Address...'}
                                />
                            </LoadingIndicator>
                        </div>
                    ) : (
                        <fieldset className={classes.fieldset}>
                            <TextInput
                                innerRef={emailInputRef}
                                containerClass={[classes.field, classes.email].join(" ")}
                                label="Email"
                                type="email"
                                name="email"
                                autoComplete="email"

                                value={email}
                                onChange={(e) => onEmailChange(e.target.value)}
                                name="checkoutEmail"
                                htmlFor="checkoutEmail"
                                errorMessage={get(errors, "email", '')} />

                            {(size(email) > 0 && password !== null) &&
                                <>
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
                                    <div
                                        onClick={(e) => {
                                            e.preventDefault()
                                            history.push('/customer/account/forgotpassword/')
                                        }}>
                                        Forget Password
                                    </div>
                                </>
                            }

                            <div className={classes.actionToolbar}>
                                {password !== null && (
                                    <div className={[classes.primary, classes.loginButton].join(" ")}>
                                        <button
                                            type="submit"
                                            className={classes.action}
                                            onClick={loginUser}
                                            disabled={email === props.email && !isEmailAvailable}>
                                            <span>Login</span>
                                        </button>
                                    </div>
                                )}
                                <div className={classes.primary}>
                                    {(emailValidating || settingEmail) ? (
                                        <LoadingButton classes={{ wrapper: classes.loadingButton }} />
                                    ) : (
                                        <button
                                            type="submit"
                                            className={classes.action}
                                            onClick={addEmailToCart}>
                                            <span>{"Continue"}</span>
                                        </button>
                                    )}
                                </div>
                            </div>


                        </fieldset>
                    )}
                </div>
            </div >
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