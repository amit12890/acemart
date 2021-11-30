import React from 'react';
import { FormattedMessage } from 'react-intl';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { Trash2 as TrashIcon, Edit2 as EditIcon } from 'react-feather';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Button from '@magento/venia-ui/lib/components/Button';
import Icon from '@magento/venia-ui/lib/components/Icon';
import defaultClasses from './addressCard.css';
import LinkButton from '../LinkButton';


const AddressCard = props => {
    const {
        address,
        classes: propClasses,
        countryName,
        isConfirmingDelete,
        isDeletingCustomerAddress,
        onCancelDelete,
        onConfirmDelete,
        onEdit,
        onDelete
    } = props;

    const {
        id,
        city,
        country_code,
        default_shipping,
        firstname,
        middlename = '',
        lastname,
        postcode,
        region: { region },
        street,
        telephone
    } = address;

    const classes = useStyle(defaultClasses, propClasses);
    const confirmDeleteButtonClasses = {
        root_normalPriorityNegative: classes.confirmDeleteButton
    };
    const cancelDeleteButtonClasses = {
        root_lowPriority: classes.cancelDeleteButton
    };

    const streetRows = street.map((row, index) => {
        return (
            <span className={classes.streetRow} key={index}>
                {row}
            </span>
        );
    });

    const nameString = [firstname, middlename, lastname]
        .filter(name => !!name)
        .join(' ');
    const additionalAddressString = `${city}, ${region} ${postcode}`;

    const deleteButtonElement = !default_shipping ? (
        <LinkButton classes={{ root: classes.deleteButton }} onClick={onDelete}>
            <Icon classes={{ icon: null }} size={16} src={TrashIcon} />
            <span className={classes.actionLabel}>
                <FormattedMessage
                    id="addressBookPage.deleteAddress"
                    defaultMessage="Delete"
                />
            </span>
        </LinkButton>
    ) : null;

    const maybeConfirmingDeleteOverlay = isConfirmingDelete ? (
        <div className={classes.confirmDeleteContainer}>
            <Button
                classes={confirmDeleteButtonClasses}
                disabled={isDeletingCustomerAddress}
                priority="normal"
                type="button"
                negative={true}
                onClick={onConfirmDelete}
            >
                <FormattedMessage
                    id={'global.deleteButton'}
                    defaultMessage={'Delete'}
                />
            </Button>
            <Button
                classes={cancelDeleteButtonClasses}
                disabled={isDeletingCustomerAddress}
                priority="low"
                type="button"
                onClick={onCancelDelete}
            >
                <FormattedMessage
                    id={'global.cancelButton'}
                    defaultMessage={'Cancel'}
                />
            </Button>
        </div>
    ) : null;

    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <span className={classes.name}>{nameString}</span>
                {streetRows}
                <span className={classes.additionalAddress}>
                    {additionalAddressString}
                </span>
                <span className={classes.country}>
                    {countryName || country_code}
                </span>
                <span className={classes.telephone}>
                    <FormattedMessage
                        id="addressBookPage.telephone"
                        values={{ telephone }}
                    />
                </span>
            </div>
            <div className={classes.actionContainer}>
                <LinkButton
                    classes={{ root: classes.editButton }}
                    onClick={onEdit}
                >
                    <i className={classes.iconWrapper}>
                        <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>edit</title>
                            <path d="M15.844 21.438l2.094-2.094-2.719-2.688-2.063 2.063v1h1.688v1.719h1zM23.719 8.563q-0.125-0.125-0.297-0.109t-0.297 0.141l-6.25 6.25q-0.125 0.125-0.125 0.297t0.094 0.297q0.125 0.125 0.297 0.109t0.297-0.141l6.25-6.25q0.125-0.125 0.141-0.297t-0.109-0.297zM25.156 19.188v3.375q0 2.125-1.516 3.641t-3.641 1.516h-14.844q-2.156 0-3.656-1.516t-1.5-3.641v-14.844q0-2.125 1.5-3.641t3.656-1.516h14.844q0.531 0 1.063 0.109t1.031 0.359q0.125 0.031 0.203 0.141t0.109 0.266q0.031 0.125-0.016 0.266t-0.141 0.234l-0.875 0.875q-0.125 0.125-0.281 0.172t-0.281-0.016q-0.219-0.063-0.422-0.094t-0.391-0.031h-14.844q-1.188 0-2.031 0.844t-0.844 2.031v14.844q0 1.188 0.844 2.031t2.031 0.844h14.844q1.188 0 2.016-0.844t0.828-2.031v-2.25q0-0.094 0.047-0.203t0.141-0.172l1.125-1.156q0.125-0.125 0.297-0.156t0.328 0.031 0.266 0.203 0.109 0.328v0zM23.438 6l5.125 5.156-12 12h-5.125v-5.156zM31.344 8.344l-1.625 1.656-5.156-5.156 1.656-1.625q0.5-0.5 1.219-0.5t1.219 0.5l2.688 2.719q0.5 0.5 0.5 1.219t-0.5 1.188v0z"></path>
                        </svg>
                    </i>
                    <span className={classes.actionLabel}>
                        <FormattedMessage
                            id="addressBookPage.editAddress"
                            defaultMessage="Edit"
                        />
                    </span>
                </LinkButton>
                {deleteButtonElement}
                {maybeConfirmingDeleteOverlay}
            </div>
        </div>
    );
};

export default AddressCard;

AddressCard.propTypes = {
    address: shape({
        city: string,
        country_code: string,
        default_shipping: bool,
        firstname: string,
        lastname: string,
        postcode: string,
        region: shape({
            region_code: string,
            region: string
        }),
        street: arrayOf(string),
        telephone: string
    }).isRequired,
    classes: shape({
        actionContainer: string,
        actionLabel: string,
        additionalAddress: string,
        contentContainer: string,
        country: string,
        defaultCard: string,
        deleteButton: string,
        editButton: string,
        flash: string,
        linkButton: string,
        name: string,
        root: string,
        root_updated: string,
        streetRow: string,
        telephone: string
    }),
    countryName: string,
    isConfirmingDelete: bool,
    isDeletingCustomerAddress: bool,
    onCancelDelete: func,
    onConfirmDelete: func,
    onDelete: func,
    onEdit: func
};
