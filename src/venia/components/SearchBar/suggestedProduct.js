import React, { useCallback } from 'react';
import { func, shape, string } from 'prop-types';
import Price from '../Price';
import { useStyle } from '../../classify';

import { replaceSpecialChars } from '../../../app.utils';

import Image from '../Image';
import defaultClasses from './suggestedProducts.css';

const IMAGE_WIDTH = 100;

const SuggestedProduct = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const {
        sku,
        name,
        uom,
        onNavigate,
        price,
        thumbnailImageUrl,
        baseless_url
    } = props;

    const handleClick = useCallback(() => {
        if (typeof onNavigate === 'function') {
            onNavigate();
        }
    }, [onNavigate]);

    return (
        <div className={classes.itemInfo}>
            <a
                className={classes.root}
                href={'/' + baseless_url}
                onClick={handleClick}
            >
                <div className={classes.imageWrapper}>
                    <Image
                        alt={name}
                        classes={{
                            image: classes.thumbnail,
                            root: classes.image
                        }}
                        resource={thumbnailImageUrl}
                        width={IMAGE_WIDTH}
                    />
                </div>
                <div className={classes.name}>{replaceSpecialChars(name)}</div>
                <div className={classes.sku}>{sku}</div>
                <div className={classes.price}>
                    <Price currencyCode={'USD'} value={price} />
                    <span className={classes.unit}>{uom}</span>
                </div>
            </a>
        </div>
    );
};

SuggestedProduct.propTypes = {
    name: string.isRequired,
    sku: string.isRequired,
    uom: string.isRequired,
    price: string.isRequired,
    thumbnailImageUrl: string.isRequired,
    baseless_url: string.isRequired,
    onNavigate: func,
    classes: shape({
        root: string,
        image: string,
        name: string,
        price: string,
        thumbnail: string
    })
};

export default SuggestedProduct;
