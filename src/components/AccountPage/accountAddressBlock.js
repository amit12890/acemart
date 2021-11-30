import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { find } from 'lodash-es';

import { useAddressBookPage } from '../../venia/components/AddressBookPage/useAddressBookPage';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import AddressCard from '../../venia/components/AddressBookPage/addressCard';
import defaultClasses from '../../venia/components/AddressBookPage/addressBookPage.css';
import { addressBookPage } from '../../url.utils';


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
                <h2>Address Book </h2>
                <div className={classes.actionToolbar}>
                    <Link to={addressBookPage()} className={classes.manageAddress}>
                        <i className={classes.iconWrapper}>
                            <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>edit</title>
                                <path d="M15.844 21.438l2.094-2.094-2.719-2.688-2.063 2.063v1h1.688v1.719h1zM23.719 8.563q-0.125-0.125-0.297-0.109t-0.297 0.141l-6.25 6.25q-0.125 0.125-0.125 0.297t0.094 0.297q0.125 0.125 0.297 0.109t0.297-0.141l6.25-6.25q0.125-0.125 0.141-0.297t-0.109-0.297zM25.156 19.188v3.375q0 2.125-1.516 3.641t-3.641 1.516h-14.844q-2.156 0-3.656-1.516t-1.5-3.641v-14.844q0-2.125 1.5-3.641t3.656-1.516h14.844q0.531 0 1.063 0.109t1.031 0.359q0.125 0.031 0.203 0.141t0.109 0.266q0.031 0.125-0.016 0.266t-0.141 0.234l-0.875 0.875q-0.125 0.125-0.281 0.172t-0.281-0.016q-0.219-0.063-0.422-0.094t-0.391-0.031h-14.844q-1.188 0-2.031 0.844t-0.844 2.031v14.844q0 1.188 0.844 2.031t2.031 0.844h14.844q1.188 0 2.016-0.844t0.828-2.031v-2.25q0-0.094 0.047-0.203t0.141-0.172l1.125-1.156q0.125-0.125 0.297-0.156t0.328 0.031 0.266 0.203 0.109 0.328v0zM23.438 6l5.125 5.156-12 12h-5.125v-5.156zM31.344 8.344l-1.625 1.656-5.156-5.156 1.656-1.625q0.5-0.5 1.219-0.5t1.219 0.5l2.688 2.719q0.5 0.5 0.5 1.219t-0.5 1.188v0z"></path>
                            </svg>
                        </i>
                        <span>Manage Addresses</span>
                    </Link>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.addrBlockWrapper}>
                    <div className={classes.addrBlock}>
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

                    <div className={classes.addrBlock}>
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
    );
};

export default AccountAddressBlock;
