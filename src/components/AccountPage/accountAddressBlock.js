import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { find } from 'lodash-es';

import { useAddressBookPage } from '../../venia/components/AddressBookPage/useAddressBookPage';
import { useStyle } from '@magento/venia-ui/lib/classify';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';

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
        return <LoadingIndicator />;
    }

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                <h2>Address Book </h2>
                <div className={classes.actionToolbar}>
                    <Link to={addressBookPage()} className={classes.manageAddress}>
                        <span>Manage Addresses</span>
                        <i className={classes.iconWrapper}>
                            <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>external-link</title>
                                <path d="M25.156 16.844v5.719q0 2.125-1.516 3.641t-3.641 1.516h-14.844q-2.156 0-3.656-1.516t-1.5-3.641v-14.844q0-2.125 1.5-3.641t3.656-1.516h12.563q0.25 0 0.406 0.172t0.156 0.422v1.125q0 0.25-0.156 0.406t-0.406 0.156h-12.563q-1.188 0-2.031 0.844t-0.844 2.031v14.844q0 1.188 0.844 2.031t2.031 0.844h14.844q1.188 0 2.016-0.844t0.828-2.031v-5.719q0-0.219 0.172-0.391t0.422-0.172h1.125q0.25 0 0.422 0.172t0.172 0.391v0zM32 1.438v9.125q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.359-0.25l-3.156-3.156-11.625 11.656q-0.094 0.094-0.203 0.141t-0.234 0.047q-0.094 0-0.203-0.047t-0.203-0.141l-2.031-2.031q-0.063-0.094-0.125-0.203t-0.063-0.203q0-0.125 0.063-0.234t0.125-0.172l11.656-11.656-3.156-3.156q-0.156-0.156-0.25-0.359t-0.094-0.422q0-0.469 0.344-0.813t0.813-0.344h9.125q0.469 0 0.813 0.344t0.344 0.813v0z"></path>
                            </svg>
                        </i>

                    </Link>
                </div>
            </div>
            <div className={classes.content}>
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
    );
};

export default AccountAddressBlock;
