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
    console.log("🚀 ~ file: compareListBlock.js ~ line 29 ~ CompareListBlock ~ compareListData", compareListData)

    if (loadingCompareList) {
        return <LoadingIndicator />;
    }
    const hasItems = !!get(compareListData, 'customer.compare_list.item_count', 0)
    const listId = get(compareListData, 'customer.compare_list.uid')
    const items = get(compareListData, 'customer.compare_list.items', [])

    return (
        <div className={classes.root}>
            <h1>This is Compare List Block</h1>
            {hasItems ?
                <div>
                    {items.map((item) => {
                        const product = item.product;
                        return (
                            <div key={item.uid}>
                                <span>{product.name}</span>
                                <RemoveItemFromCompareList listId={listId} itemId={item.product.id} 
                                    Child={() => <Button>Remove</Button>}
                                    Loader={() => <div>Loading...</div>}
                                />
                            </div>
                        )
                    })}
                    <Link to={compareListPage()}>Compare</Link>
                </div>
                :
                <div>No Items in compare list</div>
            }
        </div>
    )
}

export default CompareListBlock