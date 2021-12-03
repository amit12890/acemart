import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { GET_REPORDER_ITEMS } from './orderHistoryPage.gql';

export const useReorderItems = props => {
    // create compaer list
    const [
        reorderItemsMutation,
        { error: reorderItemsError, loading: reorderItemsLoading }
    ] = useMutation(GET_REPORDER_ITEMS);

    const reorderItems = useCallback(
        async orderNumber => {
            const res = await reorderItemsMutation({
                variables: { orderNumber }
            });
        },
        [reorderItemsMutation]
    );

    return {
        reorderItems,
        reorderItemsError,
        reorderItemsLoading
    };
};
