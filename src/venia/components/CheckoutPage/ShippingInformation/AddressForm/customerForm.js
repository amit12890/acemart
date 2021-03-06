import React, { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form, Text } from 'informed';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import { useCustomerForm } from '@magento/peregrine/lib/talons/CheckoutPage/ShippingInformation/AddressForm/useCustomerForm';

import { useStyle } from '../../../../classify';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import Button from '../../../Button';
import Checkbox from '../../../Checkbox';
import Country from '../../../Country';
import Field, { Message } from '../../../Field';
import FormError from '../../../FormError';
import Region from '../../../Region';
import Postcode from '../../../Postcode';
import TextInput from '../../../TextInput';
import defaultClasses from './customerForm.css';
import CustomerFormOperations from './customerForm.gql';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';

const CustomerForm = props => {
    const {
        afterSubmit,
        classes: propClasses,
        onCancel,
        onSuccess,
        shippingData
    } = props;

    const talonProps = useCustomerForm({
        afterSubmit,
        ...CustomerFormOperations,
        onCancel,
        onSuccess,
        shippingData
    });
    const {
        errors,
        handleCancel,
        handleSubmit,
        hasDefaultShipping,
        initialValues,
        isLoading,
        isSaving,
        isUpdate
    } = talonProps;
    const { formatMessage } = useIntl();
    const classes = useStyle(defaultClasses, propClasses);

    if (isLoading) {
        return (
            <LoadingIndicator>
                <FormattedMessage
                    id={'customerForm.loading'}
                    defaultMessage={'Fetching Customer Details...'}
                />
            </LoadingIndicator>
        );
    }

    const emailRow = !hasDefaultShipping ? (
        <div className={[classes.formField, classes.email].join(" ")}>
            <Field
                id="email"
                label={formatMessage({
                    id: 'global.email',
                    defaultMessage: 'Email'
                })}
            >
                <TextInput
                    disabled={true}
                    field="email"
                    id="email"
                    validate={isRequired}
                />
            </Field>
        </div>
    ) : null;

    const formMessageRow = !hasDefaultShipping ? (
        <div className={classes.formMessage}>
            <Message>
                <FormattedMessage
                    id={'customerForm.formMessage'}
                    defaultMessage={
                        'The shipping address you enter will be saved to your address book and set as your default for future purchases.'
                    }
                />
            </Message>
        </div>
    ) : null;

    const cancelButton = isUpdate ? (
        <Button disabled={isSaving} onClick={handleCancel} priority="low">
            <FormattedMessage
                id={'global.cancelButton'}
                defaultMessage={'Cancel'}
            />
        </Button>
    ) : null;

    const submitButtonText = !hasDefaultShipping
        ? formatMessage({
            id: 'global.saveAndContinueButton',
            defaultMessage: 'Save and Continue'
        })
        : isUpdate
            ? formatMessage({
                id: 'global.updateButton',
                defaultMessage: 'Update'
            })
            : formatMessage({
                id: 'global.addButton',
                defaultMessage: 'Add'
            });
    const submitButtonProps = {
        disabled: isSaving,
        priority: !hasDefaultShipping ? 'normal' : 'high',
        type: 'submit'
    };

    const defaultShippingElement = hasDefaultShipping ? (
        <div className={classes.defaultShipping}>
            <Checkbox
                disabled={!!initialValues.default_shipping}
                id="default_shipping"
                field="default_shipping"
                label={formatMessage({
                    id: 'customerForm.defaultShipping',
                    defaultMessage: 'Make this my default address'
                })}
            />
        </div>
    ) : (
        <Text type="hidden" field="default_shipping" initialValue={true} />
    );

    return (
        <Fragment>
            <FormError errors={Array.from(errors.values())} />
            <Form
                className={classes.root}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {formMessageRow}
                {emailRow}
                <div className={[classes.formField, classes.firstname].join(" ")}>
                    <Field
                        id="customer_firstname"
                        label={formatMessage({
                            id: 'global.firstName',
                            defaultMessage: 'First Name'
                        })}
                    >
                        <TextInput
                            disabled={!hasDefaultShipping}
                            field="firstname"
                            id="customer_firstname"
                            validate={isRequired}
                        />
                    </Field>
                </div>
                <div className={[classes.formField, classes.lastname].join(" ")}>
                    <Field
                        id="customer_lastname"
                        label={formatMessage({
                            id: 'global.lastName',
                            defaultMessage: 'Last Name'
                        })}
                    >
                        <TextInput
                            disabled={!hasDefaultShipping}
                            field="lastname"
                            id="customer_lastname"
                            validate={isRequired}
                        />
                    </Field>
                </div>
                <div className={[classes.formField, classes.country].join(" ")}>
                    <Country validate={isRequired} />
                </div>
                <div className={[classes.formField, classes.street0].join(" ")}>
                    <Field
                        id="customer_street0"
                        label={formatMessage({
                            id: 'global.streetAddress',
                            defaultMessage: 'Street Address'
                        })}
                    >
                        <TextInput
                            field="street[0]"
                            validate={isRequired}
                            id="customer_street0"
                        />
                    </Field>
                </div>
                <div className={[classes.formField, classes.street1].join(" ")}>
                    <Field
                        id="customer_street1"
                        label={formatMessage({
                            id: 'global.streetAddress2',
                            defaultMessage: 'Street Address 2'
                        })}
                        optional={true}
                    >
                        <TextInput field="street[1]" id="customer_street1" />
                    </Field>
                </div>
                <div className={[classes.formField, classes.city].join(" ")}>
                    <Field
                        id="customer_city"
                        label={formatMessage({
                            id: 'global.city',
                            defaultMessage: 'City'
                        })}
                    >
                        <TextInput
                            field="city"
                            validate={isRequired}
                            id="customer_city"
                        />
                    </Field>
                </div>
                <div className={[classes.formField, classes.region].join(" ")}>
                    <Region
                        validate={isRequired}
                        fieldInput={'region[region]'}
                        fieldSelect={'region[region_id]'}
                        optionValueKey={'id'}
                    />
                </div>
                <div className={[classes.formField, classes.postcode].join(" ")}>
                    <Postcode validate={isRequired} />
                </div>
                <div className={[classes.formField, classes.telephone].join(" ")}>
                    <Field
                        id="customer_telephone"
                        label={formatMessage({
                            id: 'global.phoneNumber',
                            defaultMessage: 'Phone Number'
                        })}
                    >
                        <TextInput
                            field="telephone"
                            validate={isRequired}
                            id="customer_telephone"
                        />
                    </Field>
                </div>
                {defaultShippingElement}
                <div className={classes.buttons}>
                    {cancelButton}
                    <Button {...submitButtonProps}>{submitButtonText}</Button>
                </div>
            </Form>
        </Fragment>
    );
};

export default CustomerForm;

CustomerForm.defaultProps = {
    shippingData: {
        country: {
            code: DEFAULT_COUNTRY_CODE
        },
        region: {
            id: null
        }
    }
};

CustomerForm.propTypes = {
    afterSubmit: func,
    classes: shape({
        root: string,
        field: string,
        email: string,
        firstname: string,
        lastname: string,
        country: string,
        street0: string,
        street1: string,
        city: string,
        region: string,
        postcode: string,
        telephone: string,
        buttons: string,
        formMessage: string,
        defaultShipping: string
    }),
    onCancel: func,
    shippingData: shape({
        city: string,
        country: shape({
            code: string.isRequired
        }).isRequired,
        default_shipping: bool,
        email: string,
        firstname: string,
        id: number,
        lastname: string,
        postcode: string,
        region: shape({
            id: number
        }).isRequired,
        street: arrayOf(string),
        telephone: string
    })
};
