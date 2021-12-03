import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { get } from 'lodash-es';

import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import Button from '../../venia/components/Button';
import RemoveItemFromCompareList from './removeItemFromCompareList';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './compareListBlock.css';
import {
    GET_CUSTOMER_COMPARE_LIST,
} from './compareListPage.gql';
import { compareListPage } from '../../url.utils';


const CompareListBlock = () => {
    const classes = useStyle(defaultClasses);

    // get compare list
    const { loading: loadingCompareList, error, data: compareListData } = useQuery(
        GET_CUSTOMER_COMPARE_LIST, { fetchPolicy: "network-only" }
    );

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

export default CompareListBlock