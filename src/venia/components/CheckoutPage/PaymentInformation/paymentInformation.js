import React, { useCallback } from 'react'

import { Circle, CheckCircle } from 'react-feather'

import { get, size } from 'lodash'

/**
 * parent
 *      CheckoutPage
 */
export default (props) => {
    const { selectedPaymentMethod, data, updateSelection } = props

    const talonProps = usePaymentInformation();

    const {
        doneEditing,
        handlePaymentError,
        handlePaymentSuccess,
        hideEditModal,
        isLoading,
        isEditModalActive,
        showEditModal
    } = talonProps;

    const paymentInfoItem = useCallback((item) => {
        const isActive = get(item, "code", '') === get(selectedPaymentMethod, "code", '')
        return (
            <div
                style={{
                    padding: 16,
                    display: 'flex'
                }}
                onClick={(e) => {
                    e.preventDefault()
                    updateSelection(item)
                }}>
                {isActive ? (
                    <div >
                        <CheckCircle color='#009988' />
                    </div>
                ) : (
                    <div>
                        <Circle />
                    </div>
                )}
                <div style={{
                    marginLeft: 16
                }}>
                    {get(item, "title", "")}
                </div>
            </div>
        )
    }, [selectedPaymentMethod])

    if (size(data) === 0) return null

    if (isLoading) {
        return (
            <LoadingIndicator classes={{ root: classes.loading }}>
                <FormattedMessage
                    id={'checkoutPage.loadingPaymentInformation'}
                    defaultMessage={'Fetching Payment Information'}
                />
            </LoadingIndicator>
        );
    }

    return (
        <div>
            <div style={{
                padding: 16
            }}>
                Payment Information
            </div>
            {data.map(paymentInfoItem)}
        </div >
    )
}