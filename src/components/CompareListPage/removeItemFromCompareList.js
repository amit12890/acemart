import React, { useCallback } from 'react';
import { useCompareList } from './useCompareList';

const RemoveItemFromCompareList = (props) => {
    const { itemId, listId , Child, Loader, disabled=false } = props
    const {
        removeProductFromCompareList, 
        removeProductFromCompareListLoading, 
        removeProductFromCompareListError} = useCompareList()
    console.log("🚀 ~ file: removeItemFromCompareList.js ~ line 10 ~ RemoveItemFromCompareList ~ removeProductFromCompareListError", removeProductFromCompareListError)

    const handleRemoveItem = useCallback( async () => {
        if (removeProductFromCompareListLoading || disabled) return;

        await removeProductFromCompareList([itemId], listId);
    }, [
        removeProductFromCompareList, removeProductFromCompareListLoading,
        itemId, listId
    ])

    return (
        <div onClick={handleRemoveItem}>
            {removeProductFromCompareListLoading
                ? <Loader /> : <Child />
            }
        </div>
    )
}

export default RemoveItemFromCompareList