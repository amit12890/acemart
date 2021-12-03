import React, { useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Button from '../../venia/components/Button';
import defaultClasses from './NewsletterSubscriptionInput.css';
import { get } from 'lodash';
import { useStyle } from '../../venia/classify';



import {
    GET_CUSTOMER_SUBSCRIPTION,
    SET_CUSTOMER_SUBSCRIPTION
} from './newsletterSubscription.gql';

const NewsletterSubscriptionInput = () => {

    const classes = useStyle(defaultClasses)

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
        <div className={classes.root}>
            <div className={classes.controlInput}>
                <input
                    placeholder="Enter Your email address"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className={classes.actionToolbar}>
                <Button onClick={submit} disabled={isDataUpdating}>
                    {isDataUpdating ? 'Loading...' : 'Save'}

                    <i className={classes.iconWrapper}>
                        <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32">
                            <title>arrow-right-thick</title>
                            <path d="M30.844 16.219q0 0.125-0.047 0.25t-0.109 0.188l-6.875 6.313q-0.125 0.125-0.297 0.156t-0.328-0.031q-0.125-0.063-0.234-0.203t-0.109-0.328v-4h-22.281q-0.219 0-0.391-0.156t-0.172-0.406v-3.438q0-0.219 0.172-0.391t0.391-0.172h22.281v-4q0-0.188 0.094-0.313t0.25-0.219q0.156-0.063 0.328-0.031t0.297 0.125l6.875 6.25q0.063 0.094 0.109 0.203t0.047 0.203v0 0z"></path>
                        </svg>
                    </i>
                </Button>
            </div>
            <div>
                {!!(newsletterError) && newsletterError.message}
            </div>
        </div>
    );
};

export default NewsletterSubscriptionInput;
