import React from 'react';
import { arrayOf, func, number, oneOfType, shape, string } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';
import SuggestedProduct from './suggestedProduct';
import defaultClasses from './suggestedProducts.css';

const SuggestedProducts = props => {
    const { products } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.listWrapper}>
            <ul className={classes.listItems}>
                {products.map(product => {
                    return (
                        <li key={product.id} className={classes.listItem}>
                            <SuggestedProduct
                                {...product}
                                onNavigate={d => {
                                    console.log('ggwp onNavigate', d);
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SuggestedProducts;

SuggestedProducts.defaultProps = {
    limit: 3
};

SuggestedProducts.propTypes = {
    classes: shape({
        item: string,
        root: string
    }),
    limit: number.isRequired,
    onNavigate: func,
    products: arrayOf(
        shape({
            id: oneOfType([number, string]).isRequired
        })
    ).isRequired
};
