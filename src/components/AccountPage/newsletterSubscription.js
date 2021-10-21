import { useMutation, useQuery } from '@apollo/client';
import { get } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../venia/components/Button';
import { GET_CUSTOMER_SUBSCRIPTION, SET_CUSTOMER_SUBSCRIPTION } from './newsletterSubscription.gql';


const NewsletterSubscription = () => {
    const [subscription, setSubscription] = useState(false);
    const [onSubmit, { data: res }] = useMutation(SET_CUSTOMER_SUBSCRIPTION);
    const { loading, error, data } = useQuery(GET_CUSTOMER_SUBSCRIPTION);

    useEffect(() => {
        const newSubscriptionVal = get(data, "customer.is_subscribed", false)
        setSubscription(newSubscriptionVal)
    }, [loading, data])

    if (loading) {
        return <div>Loading....</div>
    }

    const submit = useCallback(() => {
        console.log(data.customer.email)
        onSubmit({ variables: { email: data.customer.email}})
    }, [])

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

                <Button onClick={submit}>Save</Button>
            </div>
        </div>
    )
}

export default NewsletterSubscription;