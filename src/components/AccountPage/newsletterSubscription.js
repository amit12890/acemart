import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation, useQuery } from '@apollo/client';
import { get } from 'lodash';
import { useIntl } from 'react-intl';

import { useStyle } from '../../venia/classify';
import Button from '../../venia/components/Button';
import {
    GET_CUSTOMER_SUBSCRIPTION,
    UPDATE_CUSTOMER
} from './newsletterSubscription.gql';
import { accountPageUrl } from '../../url.utils';
import defaultClasses from './newsletterSubscription.css';
import { Title } from '@magento/venia-ui/lib/components/Head';
import { useToasts } from '@magento/peregrine';
import { CheckCircle as CheckCircleIcon } from 'react-feather';
import Icon from '../../venia/components/Icon';

const successIcon = (
    <Icon
        src={CheckCircleIcon}
        attrs={{
            width: 18
        }}
    />
);

const NewsletterSubscription = () => {
    const { formatMessage } = useIntl();
    const [_, { addToast }] = useToasts();
    const classes = useStyle(defaultClasses);
    const history = useHistory();
    const [subscription, setSubscription] = useState(false);

    const [onSubmit, { loading: isDataUpdating }] = useMutation(
        UPDATE_CUSTOMER,
        {
            onCompleted: data => {
                const is_subscribed = get(
                    data,
                    'updateCustomer.customer.is_subscribed'
                );
                addToast({
                    type: 'success',
                    icon: successIcon,
                    message: is_subscribed
                        ? 'We have saved your subscription.'
                        : 'We have removed your newsletter subscription.',
                    dismissable: true,
                    timeout: 3000
                });
            }
        }
    );
    const { loading, error, data } = useQuery(GET_CUSTOMER_SUBSCRIPTION);

    useEffect(() => {
        const newSubscriptionVal = get(data, 'customer.is_subscribed', false);
        setSubscription(newSubscriptionVal);
    }, [loading, data]);

    if (loading) {
        return <div>Loading....</div>;
    }

    const submit = useCallback(async () => {
        await onSubmit({
            variables: { input: { is_subscribed: subscription } }
        });
        history.push(accountPageUrl());
    }, [subscription]);

    return (
        <div className={classes.root}>
            <Title>
                {formatMessage({ id: 'newsletterSubscription.title' })}
            </Title>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>Newsletter Subscription</h1>
            </div>

            <div className={classes.panelWrapper}>
                <div className={classes.panelBody}>
                    <h2 className={classes.panelBodyTitle}>
                        Subscription option
                    </h2>
                    <div
                        className={[classes.fieldWrapper, classes.region].join(
                            ' '
                        )}
                    >
                        <label>
                            <input
                                name="subscription"
                                type="checkbox"
                                checked={subscription}
                                onChange={() => setSubscription(val => !val)}
                            />
                            General Subscription
                        </label>
                    </div>
                    <div className={classes.actionToolbar}>
                        <Button onClick={submit} disabled={isDataUpdating}>
                            {isDataUpdating ? 'Loading...' : 'Save'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSubscription;
