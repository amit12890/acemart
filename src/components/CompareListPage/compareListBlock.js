import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';
import { get } from 'lodash-es';

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


const CompareListBlock = (props) => {
    const { uid } = props
    const classes = useStyle(defaultClasses);
    const [{ isSignedIn }] = useUserContext();
    console.log("🚀 ~ file: compareListBlock.js ~ line 24 ~ CompareListBlock ~ uid", uid)

    // get compare list
    const [fetchCompareList, { loading: loadingCompareList, error, data: compareListData }] = useLazyQuery(
        isSignedIn ? GET_CUSTOMER_COMPARE_LIST : GET_GUEST_COMPARE_LIST, { fetchPolicy: "network-only" }
    );
    console.log("🚀 ~ file: compareListBlock.js ~ line 23 ~ CompareListBlock ~ compareListData", compareListData)

    useEffect(() => {
        console.log("🚀 ~ file: compareListBlock.js ~ line 35 ~ useEffect ~ uid", uid)
        if (isSignedIn) {
            fetchCompareList()
        } else {
            fetchCompareList({ variables: { uid } })
        }
    }, [uid, isSignedIn])

    if (loadingCompareList) {
        return <LoadingIndicator />;
    }
    const hasItems = !!get(compareListData, 'customer.compare_list.item_count', 0)
    const listId = get(compareListData, 'customer.compare_list.uid')
    const items = get(compareListData, 'customer.compare_list.items', [])

    return (
        <div className={classes.root}>
            <div className={classes.blockTitle}>Compare Products</div>
            {hasItems ?
                <div>
                    {items.map((item) => {
                        const product = item.product;
                        return (
                            <div key={item.uid} className={classes.compareItem}>
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
                                <span>{product.name}</span>
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
        uid: store.compare.uid
    }
})(CompareListBlock)