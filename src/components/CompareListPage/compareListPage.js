import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash-es';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { useCompareList } from './useCompareList';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './compareListPage.css';
import {
    GET_CUSTOMER_COMPARE_LIST,
} from './compareListPage.gql';
import Button from '../../venia/components/Button';
import RemoveItemFromCompareList from './removeItemFromCompareList';


const CompareListPage = () => {
    const classes = useStyle(defaultClasses);
    // const {
    //     addProductToCompareList, 
    //     addProductToCompareListLoading, 
    //     addProductToCompareListError} = useCompareList()
    // console.log("🚀 ~ file: compareListPage.js ~ line 22 ~ CompareListPage ~ addProductToCompareListError", addProductToCompareListError)
    // get compare list
    const { loading: loadingCompareList, error, data: compareListData } = useQuery(
        GET_CUSTOMER_COMPARE_LIST, { fetchPolicy: "network-only" }
    );
    console.log("🚀 ~ file: compareListPage.js ~ line 29 ~ CompareListPage ~ compareListData", compareListData)
    // useEffect( async () => {
    //     const res = await addProductToCompareList([88489, 88491]);
    //     console.log("🚀 ~ file: compareListPage.js ~ line 29 ~ useEffect ~ res", res)
    // }, [])

    if (loadingCompareList) {
        return fullPageLoadingIndicator;
    }
    const hasItems = !!get(compareListData, 'customer.compare_list.item_count', 0)
    const listId = get(compareListData, 'customer.compare_list.uid')
    const items = get(compareListData, 'customer.compare_list.items', [])
    const productCompareFields = [
        {name: 'Name', path: "name"},
        {name: 'Description', path: "description.html"},
        {name: 'Unit Of Measure', path: "uom"},
        {name: 'SKU', path: "sku"},
        {name: 'Availability', path: "availability"},
    ]
    return (
        <div className={classes.root}>
            <h1>This is Compare List Page</h1>
            {hasItems ?
                <table><tbody>
                    {/** Header of the table for remove item buttons */}
                    <tr>
                        <th><Button>Print This page</Button></th>
                        {items.map((item) => {
                            return (
                                <th key={item.uid}>
                                    <RemoveItemFromCompareList listId={listId} itemId={item.product.id} 
                                        Child={() => <Button>Remove</Button>}
                                        Loader={() => <div>Loading...</div>}
                                    />
                                </th>
                            )
                        })}
                    </tr>
                    {productCompareFields.map((compareField) => {
                        // table row of each field in productCompareFields list
                        return (
                            <tr key={compareField.path}>
                                <td>{compareField.name}</td>
                                {items.map((item) => {
                                    const product = item.product;
                                    return (
                                        <td key={item.uid}>
                                            {get(product, compareField.path, "")}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody></table>
                :
                <div>No Items here To compare</div>
            }
        </div>
    )
}

export default CompareListPage