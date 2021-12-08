import React, { useCallback } from 'react';
import { useCompareList } from './useCompareList';

/**
 * Parent
 *      item.js 
 */
const AddItemsToCompareList = (props) => {
    const { itemId, Child, Loader, disabled = false } = props
    const {
        addProductToCompareList,
        addProductToCompareListLoading,
        addProductToCompareListError } = useCompareList()

    const handleAddItem = useCallback(async () => {
        if (addProductToCompareListLoading || disabled) return;

        await addProductToCompareList([itemId]);
    }, [
        addProductToCompareList, addProductToCompareListLoading,
        itemId, disabled
    ])

    return (
        <div onClick={handleAddItem}>
            {addProductToCompareListLoading
                ? <Loader /> : <Child />
            }
        </div>
    )
}

export default AddItemsToCompareList