import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { GET_CUSTOMER_SUBSCRIPTION } from './newsletterSubscription.gql';
import { newsletterPage } from '../../url.utils';


const AccountNewsletterBlock = () => {
    const { loading, error, data } = useQuery(GET_CUSTOMER_SUBSCRIPTION);
    const subscription = get(data, "customer.is_subscribed", false)

    if (loading) {
        return <div>Loading....</div>
    }

    return(
        <div>
            <h2>Newsletters</h2>
            <div>
                
                <div>
                    {subscription ?
                    'You are subscribed to "General Subscription"'
                    :
                    'You are NOT subscribed to "General Subscription"'}
                </div>
                <Link to={newsletterPage()}>
                    Edit
                </Link>
            </div>
        </div>
    )
}

export default AccountNewsletterBlock;