import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import OrderHistoryContextProvider from '@magento/peregrine/lib/talons/OrderHistoryPage/orderHistoryContext';
import { useOrderHistoryPage } from '../../venia/components/OrderHistoryPage/data/useOrderHistoryPage';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { find } from 'lodash-es';
import OrderRow from '../../venia/components/OrderHistoryPage/orderRow';
import { myOrderListPage } from '../../url.utils';
import Button from '../../venia/components/Button';

const OrderDetailsPage = () => {
    const {tab = "view", orderId} = useParams();
    const talonProps = useOrderHistoryPage();
    const {
        isLoadingWithoutData,
        orders,
    } = talonProps;
    
    if (isLoadingWithoutData) {
        return fullPageLoadingIndicator;
    }
    const order = useMemo(() => find(orders, ["id", orderId]), [orders, orderId]);
    if (order) {
        return (
            <OrderHistoryContextProvider>
                <OrderRow order={order} tab={tab} showDetails={true} />
                <Link to={myOrderListPage()}>
                    <Button>Go To Orders</Button>
                </Link>
            </OrderHistoryContextProvider>
        )
    } else {
        return (
            <div>Order Not found</div>
        )
    }
}

export default OrderDetailsPage