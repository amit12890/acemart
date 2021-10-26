import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { find } from 'lodash-es';

import { useAddressBookPage } from '@magento/peregrine/lib/talons/AddressBookPage/useAddressBookPage';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import AddressCard from '../../venia/components/AddressBookPage/addressCard';
import defaultClasses from '../../venia/components/AddressBookPage/addressBookPage.css';
import { ADDRESSBOOK_PAGE_URL } from './constants';


/**
 * Wrapper arround address block list and address forms
 * Manages top level routing around "/customer/address/" baseUrl
 * "/" - show list of addresses if exists; else redirect to "/new/" with setDefault prop
 * "/new/" - show createAddress form
 * "/edit/{id}" - show editAddress form; 404 if address with id not found
 */
const AccountAddressBlock = props => {
    const talonProps = useAddressBookPage();
    const {
        confirmDeleteAddressId,
        countryDisplayNameMap,
        customerAddresses,
        handleCancelDeleteAddress,
        handleConfirmDeleteAddress,
        handleDeleteAddress,
        handleEditAddress,
        isDeletingCustomerAddress,
        isLoading
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);

    const [defaultShippingAddress, defaultBillingAddress] = useMemo(() => {
        const defShAddr = find(customerAddresses, "default_shipping");
        const defBillAddr = find(customerAddresses, "default_billing");
        return [defShAddr, defBillAddr];
    }, [customerAddresses]);

    if (isLoading) {
        return fullPageLoadingIndicator;
    }

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                Address Book
                <Link to={ADDRESSBOOK_PAGE_URL}>Manage Address</Link>
            </div>
            <div className={classes.content}>
                <div className={classes.addrBlockWrapper}>
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
            </div>
        </div>
    );
};

export default AccountAddressBlock;
