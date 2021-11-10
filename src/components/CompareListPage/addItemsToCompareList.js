import React, { useCallback } from 'react';
import { useCompareList } from './useCompareList';

const AddItemsToCompareList = (props) => {
    const { itemId, Child, Loader, disabled=false } = props
    const {
        addProductToCompareList, 
        addProductToCompareListLoading, 
        addProductToCompareListError} = useCompareList()
    console.log("🚀 ~ file: AddItemsToCompareList.js ~ line 10 ~ AddItemsToCompareList ~ addProductToCompareListError", addProductToCompareListError)

    const handleAddItem = useCallback( async () => {
        if (addProductToCompareListLoading || disabled) return;

        await addProductToCompareList([itemId]);
    }, [
        removeProductFromCompareList, removeProductFromCompareListLoading,
        itemId
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