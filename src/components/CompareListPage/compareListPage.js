import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash-es';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './compareListPage.css';
import {
    GET_CUSTOMER_COMPARE_LIST,
} from './compareListPage.gql';


const CompareListPage = () => {
    const classes = useStyle(defaultClasses);

    // get compare list
    const { loading: loadingCompareList, error, data: compareListData } = useQuery(
        GET_CUSTOMER_COMPARE_LIST, { fetchPolicy: "network-only" }
    );
    console.log("🚀 ~ file: compareListPage.js ~ line 29 ~ CompareListPage ~ compareListData", compareListData)


    if (loadingCompareList) {
        return fullPageLoadingIndicator;
    }
    const hasItems = !!get(compareListData, 'customer.compare_list.item_count', 0)
    const items = get(compareListData, 'customer.compare_list.items', [])
    const productCompareFields = [
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
                    {productCompareFields.map((compareField) => {
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