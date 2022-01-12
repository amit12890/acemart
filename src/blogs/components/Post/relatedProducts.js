import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import postOperations from './products.gql';

const RelatedProducts = (props) => {
    const { relatedProducts, classes } = props;

    const { queries } = postOperations;
    const { getRelatedProductsQuery } = queries;

    const { data, error, loading } = useQuery(getRelatedProductsQuery, {
        variables: { relatedProducts },
        skip: !relatedProducts.length
    });

    // if (loading) {
    //     return <span>Loading...</span>
    // }
    //
    // if (error) {
    //     return <span>{`Error! ${error}`}</span>
    // }

    if (data) {
        const {products: {items: products}} = data;

        return (
            <div className={classes.related}>
                <div className={classes.blockTitle}>
                    <strong>Related Products</strong>
                </div>
                <div className={classes.productList}>
                    {
                        products.map(({id, name, url_key, url_suffix, image: {url}, price_range: {minimum_price: {regular_price}}}) => (
                            <div key={id} className={classes.productItem}>
                                <div className={classes.imageContainer}>
                                    <Link className={classes.imageWrapper} to={'/' + url_key + url_suffix}>
                                        <img src={url} alt={name} />
                                    </Link>
                                </div>
                                <div className={classes.blockInfo}>
                                    <h3 className={classes.productTitle}>
                                        <Link className={classes.postItemName} to={'/' + url_key + url_suffix} title={name}>{name}</Link>
                                    </h3>
                                    <strong className={classes.price}>{regular_price.value.toFixed(2) + ' ' + regular_price.currency}</strong>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return null;
}

export default RelatedProducts;
