import React, { useMemo } from 'react';

import { useStyle } from '../../classify';

import SearchItem from './item';

import defaultClasses from './searchProducts.css';

import { useQuery } from '@apollo/client';
import { GET_STORE_CONFIG_DATA } from '../../../magento/peregrine/talons/Header/storeSwitcher.gql';
import { get } from 'lodash';

export default function SearchProducts(props) {
    const { products } = props;
    const classes = useStyle(defaultClasses, props.classes);

    const { loading, error, data } = useQuery(GET_STORE_CONFIG_DATA);
    const defaultCurrency = get(data, "storeConfig.default_display_currency_code", "");

    const searchItems = useMemo(
        () =>
            products.map((item, index) => {
                if (item === null) {
                    return <SearchItem key={index} />;
                }
                return <SearchItem key={item.id} item={item} defaultCurrency={defaultCurrency} />;
            }),
        [products]
    );

    return (
        <div className={classes.root}>
            <div className={classes.items}>{searchItems}</div>
        </div>
    );
}
