import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash-es';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import RichContent from '../../venia/components/RichContent';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './compareListPage.css';
import {
    GET_CUSTOMER_COMPARE_LIST,
} from './compareListPage.gql';
import Button from '../../venia/components/Button';
import RemoveItemFromCompareList from './removeItemFromCompareList';


const CompareListPage = () => {
    const classes = useStyle(defaultClasses);
    // get compare list
    const { loading: loadingCompareList, error, data: compareListData } = useQuery(
        GET_CUSTOMER_COMPARE_LIST, { fetchPolicy: "network-only" }
    );

    if (loadingCompareList) {
        return fullPageLoadingIndicator;
    }
    const hasItems = !!get(compareListData, 'customer.compare_list.item_count', 0)
    const listId = get(compareListData, 'customer.compare_list.uid')
    const items = get(compareListData, 'customer.compare_list.items', [])
    const productCompareFields = [
        { hideName: true, name: 'Header Block', renderer: itemHeaderBlock },
        { name: 'Description', path: "description.html", renderer: itemDescriptionBlock },
        { name: 'Unit Of Measure', path: "uom" },
        { name: 'SKU', path: "sku" },
        { name: 'Availability', path: "availability" },
    ]
    return (
        <div className={classes.root}>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    Compare Products
                </h1>


            </div>
            {hasItems ?
                <div className={classes.tableWrapper}>
                    <div className={classes.actionToolbar}>
                        <Button
                            priority="low"
                            type="button"
                        >
                            Print This page
                        </Button>
                    </div>
                    <table className={[classes.data, classes.table, classes.compare].join(" ")} >
                        <thead>
                            {/** Header of the table for remove item buttons */}
                            <tr>
                                <th></th>
                                {items.map((item) => {
                                    return (
                                        <th className={classes.remove} key={item.uid}>


                                            <RemoveItemFromCompareList listId={listId} itemId={item.product.id}
                                                Child={() => (
                                                    <i className={classes.iconWrapper}>
                                                        <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                            <title>remove</title>
                                                            <path d="M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"></path>
                                                        </svg>
                                                    </i>
                                                )}
                                                Loader={() => <div>Loading...</div>}
                                            />
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {productCompareFields.map((compareField) => {
                                {/** table row of each field in productCompareFields list */ }
                                return (
                                    <tr key={compareField.path}>
                                        <th className={classes.label}>{!compareField.hideName && compareField.name}</th>
                                        {items.map((item) => {
                                            const product = item.product;
                                            return (
                                                <td className={classes.attribute} key={item.uid}>
                                                    {!!compareField.renderer
                                                        ? compareField.renderer(classes, product)
                                                        : (<div>{get(product, compareField.path, "")}</div>)
                                                    }
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                :
                <div>No Items here To compare</div>
            }
        </div>
    )
}

export default CompareListPage


const itemHeaderBlock = (classes, item) => {
    return (
        <div className={classes.productInfo}>
            <img src={get(item, 'image.url', "")} style={{ maxWidth: '200px' }} />
            <div className={classes.name}>{item.name}</div>
            <div className={classes.price}>{item.price}</div>
        </div>

    )
}

const itemDescriptionBlock = (classes, item) => {
    return (
        <RichContent html={get(item, "description.html", "")} />
    )
}