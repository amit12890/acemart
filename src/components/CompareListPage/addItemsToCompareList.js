import React, { useCallback } from 'react';
import { useCompareList } from './useCompareList';
import defaultClasses from './addItemsToCompareList.css'
import { useStyle } from '@magento/venia-ui/lib/classify'

/**
 * Parent
 *      item.js 
 */
const AddItemsToCompareList = (props) => {
    const { itemId, Child, Loader, disabled = false } = props
    const classes = useStyle(defaultClasses)
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
        <div className={classes.root} onClick={handleAddItem}>
            {addProductToCompareListLoading
                ? <Loader /> : <Child />
            }
        </div>
    )
}

export default AddItemsToCompareList