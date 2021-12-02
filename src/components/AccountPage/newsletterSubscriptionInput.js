import React, { useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Button from '../../venia/components/Button';
import { get } from 'lodash';

import {
    GET_CUSTOMER_SUBSCRIPTION,
    SET_CUSTOMER_SUBSCRIPTION
} from './newsletterSubscription.gql';

const NewsletterSubscriptionInput = () => {
    const [email, setEmail] = useState('');

    const [
        setNewsletter,
        { loading: isDataUpdating, error: newsletterError }
    ] = useMutation(SET_CUSTOMER_SUBSCRIPTION);

    const { loading, error, data } = useQuery(GET_CUSTOMER_SUBSCRIPTION);

    useEffect(() => {
        if (get(data, 'customer.is_subscribed')) {
            setEmail(get(data, 'customer.email'));
        }
    }, [data]);

    const submit = useCallback(async () => {
        const res = await setNewsletter({ variables: { email } });
    }, [setNewsletter, data, email]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <Button onClick={submit} disabled={isDataUpdating}>
                    {isDataUpdating ? 'Loading...' : 'Save'}
                </Button>
            </div>
            <div>
                {!!(newsletterError) && newsletterError.message}
            </div>
        </div>
    );
};

export default NewsletterSubscriptionInput;
