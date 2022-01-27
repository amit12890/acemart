import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import OrderHistoryContextProvider from '@magento/peregrine/lib/talons/OrderHistoryPage/orderHistoryContext';
import { useOrderHistoryPage } from '../../venia/components/OrderHistoryPage/data/useOrderHistoryPage';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { find } from 'lodash-es';
import OrderRow from '../../venia/components/OrderHistoryPage/orderRow';
import { myOrderListPage } from '../../url.utils';
import defaultClasses from './orderDetailsPage.css';
import Button from '../../venia/components/Button';
import { useStyle } from '../../venia/classify';

const OrderDetailsPage = () => {
    const classes = useStyle(defaultClasses)
    const { tab = "view", orderId } = useParams();
    const talonProps = useOrderHistoryPage();
    const {
        isLoadingWithoutData,
        handleSubmit,
        orders,
    } = talonProps;

    useEffect(() => {
        handleSubmit({ search: orderId })
    }, [orderId])

    const order = useMemo(() => find(orders, ["number", orderId]), [orders, orderId]);

    if (isLoadingWithoutData) {
        return fullPageLoadingIndicator;
    }
    if (order) {
        return (
            <OrderHistoryContextProvider>
                <OrderRow order={order} tab={tab} showDetails={true} orderNumberClickable={false} />
                <div className={classes.actionToolbar}>
                    <Link to={myOrderListPage()}>
                        <Button>Go To Orders</Button>
                    </Link>
                </div>
            </OrderHistoryContextProvider>
        )
    } else {
        return (
            <div>Order Not found</div>
        )
    }
}

export default OrderDetailsPage