import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client';
import { get, size } from 'lodash-es';
import { FormattedMessage } from 'react-intl';

import Price from '../../venia/components/Price';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import RichContent from '../../venia/components/RichContent';
import defaultClasses from './compareListPage.css';
import {
    GET_CUSTOMER_COMPARE_LIST, GET_GUEST_COMPARE_LIST,
} from './compareListPage.gql';
import Button from '../../venia/components/Button';
import RemoveItemFromCompareList from './removeItemFromCompareList';

import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useCompareList } from './useCompareList';


const CompareListPage = (props) => {
    const { uid, items, item_count } = props
    const classes = useStyle(defaultClasses);
    const { loadingCompareList, fetchCompareList } = useCompareList()
    const [{ isSignedIn }] = useUserContext();

    useEffect(() => {
        if (isSignedIn) {
            fetchCompareList({ variables: {} })
        } else {
            fetchCompareList({ variables: { uid } })
        }
    }, [isSignedIn, uid])

    if (loadingCompareList && size(items) === 0) {
        return fullPageLoadingIndicator;
    }

    // data mapping for guest and logged user
    let hasItems = item_count, listId = uid

    const productCompareFields = [
        { hideName: true, name: 'Header Block', renderer: itemHeaderBlock, },
        { name: 'SKU', path: "sku" },
        { name: 'Description', path: "description.html", renderer: itemDescriptionBlock },
        { name: 'Short Description', path: "short_description.html", renderer: itemDescriptionBlock },
        { name: 'Unit Of Measure', path: "uom" },
        { name: 'Availability', path: "availability" },
        { name: 'Brand', path: "brand_name" },
        { name: 'Holding Capacity', path: "capacity" },
        { name: 'Certifications', path: "certifications" },
        { name: 'Color', path: "color" },
        { name: 'Connection', path: "connection" },
        { name: 'Country of Origin', path: "country_of_origin", renderer: itemDescriptionBlock },
        { name: 'Electrical', path: "electrical" },
        { name: 'Energy Consumption', path: "energy_consume" },
        { name: 'Manufacturer', path: "manufacturer" },
        { name: 'Material', path: "material" },
        { name: 'Manufacturer Part Number', path: "mpn" },
        { name: 'Output', path: "output" },
        { name: 'Product Dimensions', path: "prod_dimensions" },
        { name: 'Operating Temperature Range', path: "prod_temp" },
        { name: 'Shipping Information', path: "ship_info" },
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
                            onClick={() => window.print()}
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
                                <th className={classes.label}></th>
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
                            {productCompareFields.map((compareField, ind) => {
                                {/** table row of each field in productCompareFields list */ }
                                return (
                                    <tr key={compareField.path + ind}>
                                        <th className={classes.label}>{!compareField.hideName && compareField.name}</th>
                                        {items.map((item) => {
                                            const product = item.product;
                                            return (
                                                <td className={classes.attribute} key={item.uid}>
                                                    {!!compareField.renderer
                                                        ? compareField.renderer(classes, product, compareField.path)
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

export default connect(store => {
    return {
        uid: store.compare.uid,
        items: store.compare.items,
        item_count: store.compare.item_count
    }
})(CompareListPage)


const itemHeaderBlock = (classes, item) => {
    let url = get(item, "url_rewrites.0.url");
    url = url ? "/" + url : "#";
    return (
        <div className={classes.productInfo}>
            <a href={url}>
                <img src={get(item, 'image.url', "")} className={classes.itemThumbnail} />
                <div className={classes.name}>{item.name}</div>
            </a>
            <div className={classes.price}>
                <Price
                    value={get(item, "price.regularPrice.amount.value")}
                    currencyCode={get(item, "price.regularPrice.amount.currency")}
                />
            </div>
            <div className={classes.actionWrapper}>
                <Button disabled={false} priority="high" type="submit">
                    <FormattedMessage
                        id={'productFullDetail.cartAction'}
                        defaultMessage={'Add to Cart'}
                    />
                </Button>
                <div className={classes.actionsContainer}>
                    <i className={classes.iconWrapper}>
                        <svg className={classes.svgIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>wishlist-full</title>
                            <path d="M23.594 2q-1.25 0-2.406 0.469t-2.141 1.25-1.766 1.781q-0.781 1.031-1.281 2.094-0.5-1.063-1.281-2.094-0.781-1-1.766-1.781t-2.141-1.25-2.406-0.469q-1.75 0-3.281 0.656t-2.672 1.797-1.797 2.672-0.656 3.281q0 3.531 1.594 5.969 1.594 2.469 3.984 4.688t5.172 4.656q2.813 2.406 5.25 5.906 2.313-3.469 5.094-5.938t5.203-4.719 4.078-4.688q1.625-2.469 1.625-5.875 0-1.75-0.656-3.281t-1.797-2.672-2.672-1.797-3.281-0.656z"></path>
                        </svg>
                    </i>
                </div>
            </div>
        </div>

    )
}

const itemDescriptionBlock = (classes, item, path) => {
    return <RichContent html={get(item, path, "")} />;
}