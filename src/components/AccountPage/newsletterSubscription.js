import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation, useQuery } from '@apollo/client';
import { get } from 'lodash';

import { useStyle } from '../../venia/classify';
import Button from '../../venia/components/Button';
import { GET_CUSTOMER_SUBSCRIPTION, UPDATE_CUSTOMER } from './newsletterSubscription.gql';
import { accountPageUrl } from '../../url.utils';
import defaultClasses from 'newsletterSubscription.css';


const NewsletterSubscription = () => {
    const classes = useStyle(defaultClasses);
    const history = useHistory();
    const [subscription, setSubscription] = useState(false);
    const [onSubmit, { loading: isDataUpdating }] = useMutation(UPDATE_CUSTOMER);
    const { loading, error, data } = useQuery(GET_CUSTOMER_SUBSCRIPTION);

    useEffect(() => {
        const newSubscriptionVal = get(data, "customer.is_subscribed", false)
        setSubscription(newSubscriptionVal)
    }, [loading, data])

    if (loading) {
        return <div>Loading....</div>
    }

    const submit = useCallback(async () => {
        await onSubmit({ variables: { input: {is_subscribed: subscription}}})
        history.push(accountPageUrl())
    }, [subscription])

    return(
        <div>
            <h2>Newsletter Subscription</h2>
            <div>
                <h4>Subscription option</h4>
                <label>
                    <input
                        name="subscription"
                        type="checkbox"
                        checked={subscription}
                        onChange={() => setSubscription(val => !val)} />
                    General Subscription
                </label>

                <Button onClick={submit} disabled={isDataUpdating}>
                    {isDataUpdating ? "Loading..." : "Save"}
                </Button>
            </div>
        </div>
    )
}

export default NewsletterSubscription;