import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';
import { get, size } from 'lodash-es';

import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import Button from '../../venia/components/Button';
import RemoveItemFromCompareList from './removeItemFromCompareList';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './compareListBlock.css';
import {
    GET_CUSTOMER_COMPARE_LIST, GET_GUEST_COMPARE_LIST,
} from './compareListPage.gql';
import { compareListPage } from '../../url.utils';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useCompareList } from './useCompareList';


const CompareListBlock = (props) => {
    const { uid, item_count, items } = props
    const classes = useStyle(defaultClasses);
    const { loadingCompareList, fetchCompareList } = useCompareList()
    const [{ isSignedIn }] = useUserContext();
    console.log("🚀 ~ file: compareListBlock.js ~ line 24 ~ CompareListBlock ~ uid", uid)


    useEffect(() => {
        console.log("🚀 ~ file: compareListBlock.js ~ line 35 ~ useEffect ~ uid", uid)
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
                                <span className={classes.productName}>{product.name}</span>

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
        items: store.compare.items,
        item_count: store.compare.item_count
    }
})(CompareListBlock)