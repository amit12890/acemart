import React, { useEffect, useMemo } from 'react';
import { filter, find, size } from 'lodash-es';
import { PlusSquare } from 'react-feather';
import { useIntl } from 'react-intl';

import { useAddressBookPage } from './useAddressBookPage';
import { useStyle } from '@magento/venia-ui/lib/classify';
import LinkButton from '../LinkButton';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import AddressCard from './addressCard';
import defaultClasses from './addressBookPage.css';
import AddressForm from './addressForm';
import { addAddress } from '../../../url.utils';
import { Title } from '@magento/venia-ui/lib/components/Head';


/**
 * Wrapper arround address block list and address forms
 * Manages top level routing around "/customer/address/" baseUrl
 * "/" - show list of addresses if exists; else redirect to "/new/" with setDefault prop
 * "/new/" - show createAddress form
 * "/edit/{id}" - show editAddress form; 404 if address with id not found
 */
const AddressBookPage = props => {
    const { formatMessage } = useIntl();
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
        if (!isLoading) {
            // check current route
            // if new path call handleAddAddress
            if (props.path === addAddress()) {
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
    }, [isLoading, customerAddresses, props.path])

    const classes = useStyle(defaultClasses, props.classes);

    const [defaultShippingAddress, defaultBillingAddress, additionalAddresses] = useMemo(() => {
        const defShAddr = find(customerAddresses, "default_shipping");
        const defBillAddr = find(customerAddresses, "default_billing");
        const additionalAddr = filter(customerAddresses,
            function (addr) { return !(addr.default_shipping || addr.default_billing) });
        return [defShAddr, defBillAddr, additionalAddr];
    }, [customerAddresses]);

    if (isLoading) {
        return fullPageLoadingIndicator;
    }

    if (isDialogOpen) {
        return <AddressForm
            formErrors={formErrors}
            formProps={formProps}
            isBusy={isDialogBusy}
            isEditMode={isDialogEditMode}
            onCancel={handleCancelDialog}
            onConfirm={handleConfirmDialog}
        />
    }

    return (
        <div className={classes.root}>
            <Title>{formatMessage({ id: "addressBookPage.title" })}</Title>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    Address Book
                </h1>
            </div>

            <div className={classes.content}>
                <div className={classes.panelWrapper}>
                    <div className={[classes.panelBody, classes.defaultAddressPanel].join(" ")}>
                        <h2 className={classes.panelBodyTitle}>Default Address Entries</h2>
                        <div className={[classes.addrBlockWrapper, classes.defaultAddrBlockWrapper].join(" ")}>
                            <div className={classes.accountAddressBlock}>
                                <h3 className={classes.blockSubTitle}>Default Billing Address</h3>
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
                            <div className={classes.accountAddressBlock}>
                                <h3 className={classes.blockSubTitle}>Default Shipping Address</h3>
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

                    </div>
                </div>
                <div className={classes.panelWrapper}>
                    <div className={classes.panelBody}>
                        <h2 className={classes.panelBodyTitle}>Additional Addresses Entries</h2>
                        <div className={classes.additionalAddrBlockWrapper}>
                            <div className={classes.additionalAddrBlock}>
                                {!!size(additionalAddresses) ?
                                    <>
                                        {additionalAddresses.map((addressEntry) => {
                                            const boundEdit = () => handleEditAddress(addressEntry);
                                            const boundDelete = () => handleDeleteAddress(addressEntry.id);

                                            return <AddressCard
                                                className={classes.test}
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
                    </div>
                </div>

                <LinkButton
                    className={classes.addButton}
                    key="addAddressButton"
                    onClick={handleAddAddress}

                >
                    <span className={classes.addText}>
                        Add New Address
                    </span>
                </LinkButton>
            </div>
        </div>
    );
};

export default AddressBookPage;
