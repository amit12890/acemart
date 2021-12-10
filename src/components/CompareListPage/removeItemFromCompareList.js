import React, { useCallback } from 'react';
import { useCompareList } from './useCompareList';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './compareListBlock.css';

const RemoveItemFromCompareList = (props) => {
    const classes = useStyle(defaultClasses);

    const { itemId, listId, Child, Loader, disabled = false } = props
    const {
        removeProductFromCompareList,
        removeProductFromCompareListLoading,
        removeProductFromCompareListError } = useCompareList()

    const handleRemoveItem = useCallback(async () => {
        if (removeProductFromCompareListLoading || disabled) return;

        await removeProductFromCompareList([itemId], listId);
    }, [
        removeProductFromCompareList, removeProductFromCompareListLoading,
        itemId, listId
    ])

    return (
        <div className={classes.actionDelete} onClick={handleRemoveItem}>
            {removeProductFromCompareListLoading
                ? <Loader /> : <Child />
            }
        </div>
    )
}

export default RemoveItemFromCompareList