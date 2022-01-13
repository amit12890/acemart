import React, { useEffect, useReducer } from 'react'

import { PaymentInputsContainer } from 'react-payment-inputs'
import images from 'react-payment-inputs/images'

import LoadingButton from '../../LoadingButton'
import Checkbox from '../../Checkbox'

import classify from '@magento/venia-ui/lib/classify'
import { compact, get, has, size, values } from 'lodash'

import defaultClasses from './cardForm.css'


const CardInput = ({ error, classes, cardProps, ...restProps }) => {
    const isError = size(error) > 0
    return (
        <div className={[classes.block, classes.inputMargin].join(" ")}>
            <input className={[classes.input, isError ? classes.errorBorder : ''].join(" ")}
                {...cardProps} {...restProps} />
            {isError && (
                <div className={classes.mageError}>
                    {error}
                </div>
            )}
        </div>
    )
}


class CardForm extends React.Component {

    state = {
        cardNumber: '',
        cardType: '',
        cvv: '',
        expiry: '',
        cardName: ''
    }

    submit = (e, cardType) => {
        e.preventDefault()
        const expArr = this.state.expiry.split(" / ")

        let cc_type;
        if (cardType === 'mastercard') {
            cc_type = "MC"
        } else if (cardType === 'mastercard') {
            cc_type = "VI"
        } else if (cardType === 'amex') {
            cc_type = 'AE'
        } else if (cardType === 'discover') {
            cc_type = 'DI'
        } else {
            cc_type = cardType
        }
        console.log({
            cc_number: this.state.cardNumber,
            cc_type,
            cc_cid: this.state.cvv,
            expiration: expArr[0].trim(),
            expiration_yr: expArr[1].trim(),
            transarmor_id: "new"
        })
        this.props.onSave({
            cc_number: this.state.cardNumber.replace(/ /g, ''),
            cc_type,
            cc_cid: this.state.cvv,
            expiration: expArr[0].trim(),
            expiration_yr: expArr[1].trim(),
            save_card: true,
            transarmor_id: "new"
        })
    }

    handleInput = (identifier, e) => {
        e.preventDefault()
        this.setState({ [identifier]: e.target.value })
    }

    render = () => {
        const { classes } = this.props
        return (
            <PaymentInputsContainer>
                {({ meta, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps }) => {
                    const { erroredInputs, touchedInputs } = meta;
                    return (
                        <div className={classes.cardBlock}>
                            <div className={classes.cardContent}>
                                <fieldset className={classes.fieldset}>
                                    <div className={classes.cardField}>
                                        <div className={classes.block}>
                                            <input
                                                name="cardName"
                                                value={this.state.cardName}
                                                placeholder="Card Name"
                                                onChange={(e) => this.handleInput("cardName", e)}
                                                className={classes.input} />
                                        </div>
                                    </div>
                                    <div className={classes.cardField}>
                                        <div className={classes.cardIcon}>
                                            <svg {...getCardImageProps({ images })} width={'3rem'} height={'2.5rem'} />
                                        </div>
                                        <CardInput
                                            cardProps={{ ...getCardNumberProps({ onChange: (e) => this.handleInput("cardNumber", e) }) }}
                                            value={this.state.cardNumber}
                                            error={touchedInputs.cardNumber && erroredInputs.cardNumber}
                                            classes={{ ...classes, inputMargin: classes.leftMargin }} />
                                    </div>
                                    <div className={classes.cardField}>
                                        <CardInput
                                            cardProps={{ ...getExpiryDateProps({ onChange: e => this.handleInput("expiry", e) }) }}
                                            value={this.state.expiry}

                                            error={touchedInputs.expiryDate && erroredInputs.expiryDate}
                                            classes={classes} />
                                        <CardInput
                                            cardProps={{ ...getCVCProps({ onChange: e => this.handleInput("cvv", e) }) }}
                                            value={this.state.cvv}
                                            error={touchedInputs.cvc && erroredInputs.cvc}
                                            classes={{ ...classes, inputMargin: classes.leftMargin }} />
                                    </div>
                                </fieldset>
                            </div>
                            <div className={classes.actionToolbar}>
                                <div className={classes.primary}>
                                    {(false) ? (
                                        <LoadingButton classes={{ wrapper: classes.loadingButton }} />
                                    ) : (
                                        <button
                                            type="submit"
                                            className={classes.action}
                                            onClick={(e) => {
                                                const hasErrors = size(compact(values(erroredInputs))) > 0
                                                if (!hasErrors) {
                                                    this.submit(e, get(meta, "cardType.type", {}))
                                                }
                                            }}
                                            disabled={false}>
                                            <span>Save</span>
                                        </button>
                                    )}
                                </div>
                                <div className={classes.primary}>
                                    <button
                                        className={[classes.action, classes.secondaryButton].join(" ")}
                                        onClick={this.props.toggleCardForm}
                                        disabled={false}>
                                        <span>Cancel</span>
                                    </button>
                                </div>
                            </div>
                        </div >

                    )
                }}
            </PaymentInputsContainer>
        )
    }
}

export default classify(defaultClasses)(CardForm)