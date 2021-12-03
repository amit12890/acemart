import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { GET_CUSTOMER_SUBSCRIPTION } from './newsletterSubscription.gql';
import defaultClasses from './accountNewsletterBlock.css';
import { useStyle } from '../../venia/classify';
import { newsletterPage } from '../../url.utils';


const AccountNewsletterBlock = () => {
    const classes = useStyle(defaultClasses);
    const { loading, error, data } = useQuery(GET_CUSTOMER_SUBSCRIPTION);
    const subscription = get(data, "customer.is_subscribed", false)

    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <div className={classes.newsletterBlock}>
            <h2 className={classes.red}>Newsletters</h2>
            <div className={classes.panelContent}>
                {subscription ?
                    'You are subscribed to "General Subscription"'
                    :
                    'You are NOT subscribed to "General Subscription"'}
                <div className={classes.actionToolbar}>
                    <Link
                        className={classes.action}
                        to={newsletterPage()}>
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AccountNewsletterBlock;