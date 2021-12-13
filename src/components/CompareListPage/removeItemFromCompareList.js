import React, { useCallback } from 'react';
import { useCompareList } from './useCompareList';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './compareListBlock.css';

const RemoveItemFromCompareList = (props) => {
    const classes = useStyle(defaultClasses);

    const { 
        itemId, itemIds, listId, Child, Loader, 
        disabled = false, clearAll = false
    } = props
    const {
        removeProductFromCompareList,
        removeProductFromCompareListLoading,
        removeProductFromCompareListError } = useCompareList()

    const handleRemoveItem = useCallback(async () => {
        if (removeProductFromCompareListLoading || disabled) return;

        const input = clearAll ? itemIds : [itemId]
        await removeProductFromCompareList(input, listId);
    }, [
        removeProductFromCompareList, removeProductFromCompareListLoading,
        itemId, listId, itemIds
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