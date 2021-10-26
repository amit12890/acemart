import React, { useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router';
import { filter, find, size } from 'lodash-es';
import { PlusSquare } from 'react-feather';

import { useAddressBookPage } from '@magento/peregrine/lib/talons/AddressBookPage/useAddressBookPage';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Icon from '@magento/venia-ui/lib/components/Icon';
import LinkButton from '../LinkButton';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import AddressCard from './addressCard';
import defaultClasses from './addressBookPage.css';
import AddressForm from './addressForm';
import { ADDRESSBOOK_PAGE_URL, ADDRESS_ADD_URL } from '../../../components/AccountPage/constants';


/**
 * Wrapper arround address block list and address forms
 * Manages top level routing around "/customer/address/" baseUrl
 * "/" - show list of addresses if exists; else redirect to "/new/" with setDefault prop
 * "/new/" - show createAddress form
 * "/edit/{id}" - show editAddress form; 404 if address with id not found
 */
const AddressBookPage = props => {
    const history = useHistory();
    const talonProps = useAddressBookPage();
    const {
        confirmDeleteAddressId,
        countryDisplayNameMap,
        customerAddresses,
        formErrors,
        formProps,
        handleAddAddress,
        handleCancelDeleteAddress,
        handleCancelDialog,
        handleConfirmDeleteAddress,
        handleConfirmDialog,
        handleDeleteAddress,
        handleEditAddress,
        isDeletingCustomerAddress,
        isDialogBusy,
        isDialogEditMode,
        isDialogOpen,
        isLoading
    } = talonProps;

    useEffect(() => {
        if(!isLoading) {
            // check current route
            // if path is form but Dialog state is closed than re route to address book page
            if ((props.path === ADDRESS_ADD_URL || props.path.includes("edit")) && !isDialogOpen) {
                history.push(ADDRESSBOOK_PAGE_URL);
            }
            // if new path call handleAddAddress
            else if (props.path === ADDRESS_ADD_URL) {
                handleAddAddress();
            }
            // if edit path
            else if (props.path.includes("edit") && size(customerAddresses)) {
                // get id from url
                let [_, addrId] = props.path.split("/id/")
                let address;
                // get address from id
                if (addrId) {
                    addrId = Number(addrId.replace("/", ""));
                    address = find(customerAddresses, ['id', addrId])
                }
                // if no id edit default addr
                else {
                   address = find(customerAddresses, 'default_shipping')
                }
                // handle error if address not found
                // call handleEditAddress
                handleEditAddress(address);
            }
            // close form other wise
            else {
                handleCancelDialog();
            }
        }
    }, [isLoading, customerAddresses, props.path, isDialogOpen])

    const classes = useStyle(defaultClasses, props.classes);

    const [defaultShippingAddress, defaultBillingAddress, additionalAddresses] = useMemo(() => {
        const defShAddr = find(customerAddresses, "default_shipping");
        const defBillAddr = find(customerAddresses, "default_billing");
        const additionalAddr = filter(customerAddresses,
            function(addr) { return !(addr.default_shipping || addr.default_billing) });
        return [defShAddr, defBillAddr, additionalAddr];
    }, [customerAddresses]);

    const handleFormCancel = useCallback(() => {
        handleCancelDialog();
        history.push(ADDRESSBOOK_PAGE_URL);
    }, [handleCancelDialog])

    const onAddAddress = useCallback(() => {
        handleAddAddress();
        history.push(ADDRESS_ADD_URL);
    }, [handleAddAddress])

    if (isLoading) {
        return fullPageLoadingIndicator;
    }

    if (isDialogOpen) {
        return <AddressForm
            formErrors={formErrors}
            formProps={formProps}
            isBusy={isDialogBusy}
            isEditMode={isDialogEditMode}
            isOpen={isDialogOpen}
            onCancel={handleFormCancel}
            onConfirm={handleConfirmDialog}
        />
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>Address Book</h1>
            <div className={classes.content}>
                <div className={classes.addrBlockWrapper}>
                    <h2>Default Address Entries</h2>
                    <div className={classes.addrBlock}>
                        <h3>Default Billing Address</h3>
                        {!!defaultBillingAddress ?
                            <AddressCard
                                address={defaultBillingAddress}
                                countryName={countryDisplayNameMap.get(
                                    defaultBillingAddress.country_code
                                )}
                                isConfirmingDelete={confirmDeleteAddressId === defaultBillingAddress.id}
                                isDeletingCustomerAddress={isDeletingCustomerAddress}
                                key={defaultBillingAddress.id}
                                onCancelDelete={handleCancelDeleteAddress}
                                onConfirmDelete={handleConfirmDeleteAddress}
                                onDelete={() => handleDeleteAddress(defaultBillingAddress.id)}
                                onEdit={() => handleEditAddress(defaultBillingAddress)}
                            />
                            :
                            <div>No address entry in your address book</div>
                        }
                    </div>
                    <div className={classes.addrBlock}>
                        <h3>Default Shipping Address</h3>
                        {!!defaultShippingAddress ?
                            <AddressCard
                                address={defaultShippingAddress}
                                countryName={countryDisplayNameMap.get(
                                    defaultShippingAddress.country_code
                                )}
                                isConfirmingDelete={confirmDeleteAddressId === defaultShippingAddress.id}
                                isDeletingCustomerAddress={isDeletingCustomerAddress}
                                key={defaultShippingAddress.id}
                                onCancelDelete={handleCancelDeleteAddress}
                                onConfirmDelete={handleConfirmDeleteAddress}
                                onDelete={() => handleDeleteAddress(defaultShippingAddress.id)}
                                onEdit={() => handleEditAddress(defaultShippingAddress)}
                            />
                            :
                            <div>No address entry in your address book</div>
                        }
                    </div>
                </div>

                <div className={classes.addrBLockWrapper}>
                    <h2>Additional Addresses Entries</h2>
                    <div className={classes.addrBlock}>
                        {!!size(additionalAddresses) ?
                        <>
                            {additionalAddresses.map((addressEntry) => {
                                const boundEdit = () => handleEditAddress(addressEntry);
                                const boundDelete = () => handleDeleteAddress(addressEntry.id);

                                return <AddressCard
                                    address={addressEntry}
                                    countryName={countryDisplayNameMap.get(
                                        addressEntry.country_code
                                    )}
                                    isConfirmingDelete={confirmDeleteAddressId === addressEntry.id}
                                    isDeletingCustomerAddress={isDeletingCustomerAddress}
                                    key={addressEntry.id}
                                    onCancelDelete={handleCancelDeleteAddress}
                                    onConfirmDelete={handleConfirmDeleteAddress}
                                    onDelete={boundDelete}
                                    onEdit={boundEdit}
                                />
                            })}
                        </>
                        :
                        <div>You have no other address entries in your address book.</div>
                        }
                    </div>
                </div>

                <LinkButton
                    className={classes.addButton}
                    key="addAddressButton"
                    onClick={onAddAddress}
                >
                    <Icon
                        classes={{
                            icon: classes.addIcon
                        }}
                        size={24}
                        src={PlusSquare}
                    />
                    <span className={classes.addText}>
                        Add New Address
                    </span>
                </LinkButton>
            </div>
        </div>
    );
};

export default AddressBookPage;
