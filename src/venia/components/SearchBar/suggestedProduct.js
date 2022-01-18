import React, { useCallback } from 'react';
import { func, shape, string } from 'prop-types';
import Price from '../Price';
import { useStyle } from '../../classify';
import { Link } from 'react-router-dom';

import { replaceSpecialChars } from '../../../app.utils';

import {default as VeniaImage} from '../Image';
import defaultClasses from './suggestedProducts.css';
import { apiGetSearchTracker } from '../../../url.utils';

const IMAGE_WIDTH = 75;
const IMAGE_HEIGHT = 75;

const SuggestedProduct = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const {
        sku,
        name,
        uom,
        onNavigate,
        price,
        thumbnailImageUrl,
        baseless_url,
        brand,
        mpn,
        defaultCurrency,
        intellisuggestData,
        intellisuggestSignature,
    } = props;
    const productLink = baseless_url ? `/${baseless_url}` : '#';

    const handleTracker = () => {
        const escapeFn = encodeURIComponent || escape; 
  
        if(document.images) {
            const imgTag = new Image;
            const productUrl = escapeFn(productLink);
            const docReferer = escapeFn(document.referrer)
            imgTag.src = apiGetSearchTracker(
                intellisuggestData, intellisuggestSignature, productUrl, docReferer
            )
        }
    }

    return (
        <div className={classes.itemInfo} onClick={handleTracker}>
            <Link
                className={classes.root}
                to={productLink}
            >
                <div className={classes.imageWrapper}>
                    <VeniaImage
                        alt={name}
                        classes={{
                            image: classes.thumbnail,
                            root: classes.image
                        }}
                        resource={thumbnailImageUrl}
                        width={IMAGE_WIDTH}
                        height={IMAGE_HEIGHT}
                    />
                </div>
                <div className={classes.name}>{replaceSpecialChars(`${brand} ${mpn} ${name}`)}</div>
                <div className={classes.sku}>{sku}</div>
                <div className={classes.price}>
                    <Price currencyCode={defaultCurrency} value={price} />
                    <span className={classes.unit}>{uom}</span>
                </div>
            </Link>
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
