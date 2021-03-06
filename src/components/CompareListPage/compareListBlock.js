import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { get, map, size, takeRight } from 'lodash-es';

import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import RemoveItemFromCompareList from './removeItemFromCompareList';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './compareListBlock.css';

import { compareListPage } from '../../url.utils';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useCompareList } from './useCompareList';
import { replaceSpecialChars } from '../../app.utils';


const CompareListBlock = (props) => {
    const { uid, item_count, items } = props
    const classes = useStyle(defaultClasses);
    const { loadingCompareList, fetchCompareList } = useCompareList()
    const [{ isSignedIn }] = useUserContext();


    useEffect(() => {
        if (isSignedIn) {
            fetchCompareList({ variables: {} })
        } else {
            fetchCompareList({ variables: { uid } })
        }
    }, [uid, isSignedIn])

    if (loadingCompareList && size(items) === 0) {
        return <LoadingIndicator />;
    }
    // data mapping for guest and logged user
    let hasItems = item_count, listId = uid
    const itemIds = hasItems ? map(items, "product.id") : []
    // if (isSignedIn) {
    //     hasItems = !!get(compareListData, 'customer.compare_list.item_count', 0)
    //     listId = get(compareListData, 'customer.compare_list.uid')
    //     items = get(compareListData, 'customer.compare_list.items', [])
    // } else {
    //     hasItems = !!get(compareListData, 'compareList.item_count', props.item_count)
    //     listId = get(compareListData, 'compareList.uid', props.uid)
    //     items = get(compareListData, 'compareList.items', props.items)
    // }

    return (
        <div className={classes.root}>
            <div className={classes.blockTitle}><strong>Compare Products</strong></div>
            {hasItems ?
                <div className={classes.blockContent}>
                    {items.map((item) => {
                        const product = item.product;
                        return (
                            <div key={item.uid} className={classes.compareItem}>
                                <span className={classes.productName}>{replaceSpecialChars(product.name)}</span>

                                <RemoveItemFromCompareList listId={listId} itemId={item.product.id}
                                    Child={() =>
                                        <i className={classes.iconWrapper}>
                                            <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <title>remove</title>
                                                <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"></path>
                                            </svg>
                                        </i>
                                    }
                                    Loader={() => <div>Loading...</div>}
                                />

                            </div>
                        )
                    })}
                    <div className={classes.actionToolbar}>
                        <Link className={classes.action} to={compareListPage()}>Compare</Link>
                        <RemoveItemFromCompareList
                            listId={listId}
                            itemIds={itemIds}
                            clearAll
                            Child={() => <div className={classes.clear}>CLEAR ALL</div>}
                            Loader={() => <div className={classes.clear}>LOADING...</div>}
                        />
                    </div>
                </div>
                :
                <div>No Items in compare list</div>
            }
        </div>
    )
}

export default connect(store => {
    return {
        uid: store.compare.uid,
        items: takeRight(store.compare.items, 4),
        item_count: store.compare.item_count
    }
})(CompareListBlock)