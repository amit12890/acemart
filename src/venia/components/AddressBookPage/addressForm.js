import React from 'react';
import { bool, func, object, shape, string } from 'prop-types';
import { useIntl } from 'react-intl';
import { Form } from 'informed';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';

import Checkbox from '../Checkbox';
import Country from '../Country';
import Field from '../Field';
import FormError from '../FormError';
import Postcode from '../Postcode';
import Region from '../Region';
import TextInput from '../TextInput';
import Button from '../Button';
import defaultClasses from './addressForm.css';

const AddressForm = props => {

    const {
        formErrors,
        formProps,
        isBusy,
        isEditMode,
        onCancel,
        onConfirm
    } = props;

    const { formatMessage } = useIntl();

    const classes = useStyle(defaultClasses, props.classes);

    let formatTitleArgs;
    if (isEditMode) {
        formatTitleArgs = {
            id: 'addressBookPage.editDialogTitle',
            defaultMessage: 'Edit Address'
        };
    } else {
        formatTitleArgs = {
            id: 'addressBookPage.addDialogTitle',
            defaultMessage: 'New Address'
        };
    }
    const title = formatMessage(formatTitleArgs);

    const firstNameLabel = formatMessage({
        id: 'global.firstName',
        defaultMessage: 'First Name'
    });
    const middleNameLabel = formatMessage({
        id: 'global.middleName',
        defaultMessage: 'Middle Name'
    });
    const lastNameLabel = formatMessage({
        id: 'global.lastName',
        defaultMessage: 'Last Name'
    });
    const street1Label = formatMessage({
        id: 'global.streetAddress',
        defaultMessage: 'Street Address'
    });
    const street2Label = formatMessage({
        id: 'global.streetAddress2',
        defaultMessage: 'Street Address 2'
    });
    const cityLabel = formatMessage({
        id: 'global.city',
        defaultMessage: 'City'
    });
    const telephoneLabel = formatMessage({
        id: 'global.phoneNumber',
        defaultMessage: 'Phone Number'
    });

    return (
        <div className={classes.root}>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>{title}</h1>
            </div>
            <div className={classes.panelWrapper}>
                <div className={classes.panelBody}>
                    <Form className={classes.form} {...formProps} onSubmit={onConfirm}>
                        <FormError
                            classes={{ root: classes.errorContainer }}
                            errors={Array.from(formErrors.values())}
                        />
                        <div className={classes.root}>
                            <div className={[classes.fieldWrapper, classes.firstname].join(" ")}>
                                <Field id="firstname" label={firstNameLabel}>
                                    <TextInput field="firstname" validate={isRequired} />
                                </Field>
                            </div>
                            <div className={[classes.fieldWrapper, classes.middlename].join(" ")}>
                                <Field
                                    id="middlename"
                                    label={middleNameLabel}
                                    optional={true}
                                >
                                    <TextInput field="middlename" />
                                </Field>
                            </div>
                            <div className={[classes.fieldWrapper, classes.lastname].join(" ")}>
                                <Field id="lastname" label={lastNameLabel}>
                                    <TextInput field="lastname" validate={isRequired} />
                                </Field>
                            </div>
                            <div className={[classes.fieldWrapper, classes.country].join(" ")}>
                                <Country field={'country_code'} validate={isRequired} />
                            </div>
                            <div className={[classes.fieldWrapper, classes.street1].join(" ")}>
                                <Field id="street1" label={street1Label}>
                                    <TextInput field="street[0]" validate={isRequired} />
                                </Field>
                            </div>
                            <div className={[classes.fieldWrapper, classes.street2].join(" ")}>
                                <Field id="street2" label={street2Label} optional={true}>
                                    <TextInput field="street[1]" />
                                </Field>
                            </div>
                            <div className={[classes.fieldWrapper, classes.city].join(" ")}>
                                <Field id="city" label={cityLabel}>
                                    <TextInput field="city" validate={isRequired} />
                                </Field>
                            </div>

                            <div className={[classes.fieldWrapper, classes.region].join(" ")}>
                                <Region
                                    countryCodeField={'country_code'}
                                    fieldInput={'region[region]'}
                                    fieldSelect={'region[region_id]'}
                                    optionValueKey="id"
                                    validate={isRequired}
                                />
                            </div>
                            <div className={[classes.fieldWrapper, classes.postcode].join(" ")}>
                                <Postcode validate={isRequired} />
                            </div>
                            <div className={[classes.fieldWrapper, classes.telephone].join(" ")}>
                                <Field id="telephone" label={telephoneLabel}>
                                    <TextInput field="telephone" validate={isRequired} />
                                </Field>
                            </div>
                            <div className={classes.fieldChoice}>

                                <Checkbox
                                    field="default_shipping"
                                    label="Default Shipping Address"
                                />
                            </div>
                            <div className={classes.fieldChoice}>
                                <Checkbox
                                    field="default_billing"
                                    label="Default billing address"
                                />
                            </div>
                        </div>
                        <div className={classes.actionToolbar}>
                            <Button
                                classes={classes.cancelButton}
                                disabled={isBusy}
                                onClick={onCancel}
                                priority="low"
                                type="reset"
                            >
                                Cancel
                            </Button>
                            <Button
                                classes={classes.confirmButton}
                                disabled={isBusy}
                                priority="high"
                                type="submit"
                            >
                                Confirm
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddressForm;

AddressForm.propTypes = {
    classes: shape({
        root: string,
        city: string,
        country: string,
        default_address_check: string,
        errorContainer: string,
        firstname: string,
        lastname: string,
        middlename: string,
        postcode: string,
        region: string,
        street1: string,
        street2: string,
        telephone: string
    }),
    formErrors: object,
    isEditMode: bool,
    isOpen: bool,
    onCancel: func,
    onConfirm: func
};
