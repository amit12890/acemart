import React, { useMemo } from 'react';

import { useStyle } from '../../classify';

import SearchItem from './item';

import defaultClasses from './searchProducts.css';

export default function SearchProducts(props) {
    const { products } = props;
    const classes = useStyle(defaultClasses, props.classes);

    const searchItems = useMemo(
        () =>
            products.map((item, index) => {
                if (item === null) {
                    return <SearchItem key={index} />;
                }
                return <SearchItem key={item.id} item={item} />;
            }),
        [products]
    );

    return (
        <div className={classes.root}>
            <div className={classes.items}>{searchItems}</div>
        </div>
    );
}
