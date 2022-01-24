import React from 'react';
import { useCustomerLogin } from '../../magento/peregrine/talons/LoginAsCustomer/useCustomerLogin';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { get } from 'lodash';

export default function LoginAsCustomer() {
    const { loading, error } = useCustomerLogin({})

    if (loading) return fullPageLoadingIndicator;
    if(error) {
        return (
            <div>
                {get(error, "message", "somethign went wrong")}
            </div>
        )
    }

    return <div>loginAsCustomer success</div>;
}
