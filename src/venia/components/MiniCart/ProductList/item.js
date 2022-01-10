import React, { useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { string, number, shape, func, arrayOf, oneOf } from 'prop-types';
import { Trash2 as DeleteIcon } from 'react-feather';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

import Price from '../../Price';
import { useItem } from '@magento/peregrine/lib/talons/MiniCart/useItem';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';

import ProductOptions from '@magento/venia-ui/lib/components/LegacyMiniCart/productOptions';
import Image from '../../Image';
import RichText from '../../RichText';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { useStyle } from '../../../classify';
import configuredVariant from '@magento/peregrine/lib/util/configuredVariant';

import defaultClasses from './item.css';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import Button from '../../Button';
import Mask from '@magento/venia-ui/lib/components/Mask';

const Item = props => {
    const {
        classes: propClasses,
        product,
        id,
        quantity,
        configurable_options,
        handleRemoveItem,
        prices,
        closeMiniCart,
        configurableThumbnailSource
    } = props;

    const { formatMessage } = useIntl();
    const classes = useStyle(defaultClasses, propClasses);
    const [isDelete, setDelete] = useState(false);

    const itemLink = resourceUrl(
        `/${get(product.url_rewrites[0], 'url', '')}${product.url_suffix || ''}`
    );
    const stockStatusText =
        product.stock_status === 'OUT_OF_STOCK'
            ? formatMessage({
                  id: 'productList.outOfStock',
                  defaultMessage: 'Out-of-stock'
              })
            : '';

    const { isDeleting, removeItem } = useItem({
        id,
        handleRemoveItem
    });

    const rootClass = isDeleting ? classes.root_disabled : classes.root;
    const configured_variant = configuredVariant(configurable_options, product);

    if (isDelete) {
        return (
            <div className={classes.content}>
                <div className={classes.text}>
                    Are you sure you would like to remove this item from the
                    shopping cart?
                </div>
                <div className={classes.actions}>
                    <Button priority="low" onClick={() => setDelete(false)}>
                        CANCEL
                    </Button>
                    <Button
                        priority="low"
                        onClick={() => {
                            setDelete(false);
                            removeItem();
                        }}
                    >
                        OK
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={rootClass}>
            <div className={classes.itemThumbnailWrapper}>
                <Link
                    className={classes.thumbnailContainer}
                    to={itemLink}
                    onClick={closeMiniCart}
                >
                    <Image
                        alt={product.name}
                        classes={{
                            root: classes.thumbnail
                        }}
                        width={75}
                        height={75}
                        src={
                            configurableThumbnailSource === 'itself' &&
                            configured_variant
                                ? configured_variant.thumbnail.url
                                : product.thumbnail.url
                        }
                    />
                </Link>
            </div>
            <div className={classes.itemDetails}>
                <Link
                    className={classes.name}
                    to={itemLink}
                    onClick={closeMiniCart}
                >
                    <RichText content={product.name} />
                </Link>
                <ProductOptions
                    options={configurable_options}
                    classes={{
                        options: classes.options
                    }}
                />
                <div className={classes.itemQtyPriceWrapper}>
                    <span className={classes.quantity}>
                        <FormattedMessage
                            id={'productList.quantity'}
                            defaultMessage={'Qty :'}
                            values={{ quantity }}
                        />
                    </span>
                    <span className={classes.price}>
                        <Price
                            currencyCode={prices.price.currency}
                            value={prices.price.value}
                        />
                        / {product.uom}
                    </span>
                </div>
                <span className={classes.stockStatus}>{stockStatusText}</span>
                <button
                    onClick={() => setDelete(true)}
                    type="button"
                    className={classes.deleteButton}
                    disabled={isDeleting}
                >
                    <Icon
                        size={16}
                        src={DeleteIcon}
                        classes={{
                            icon: classes.editIcon
                        }}
                    />
                </button>
            </div>
        </div>
    );
};

export default Item;

Item.propTypes = {
    classes: shape({
        root: string,
        thumbnail: string,
        name: string,
        options: string,
        quantity: string,
        price: string,
        editButton: string,
        editIcon: string
    }),
    product: shape({
        name: string,
        thumbnail: shape({
            url: string
        })
    }),
    id: string,
    quantity: number,
    configurable_options: arrayOf(
        shape({
            id: number,
            option_label: string,
            value_id: number,
            value_label: string
        })
    ),
    handleRemoveItem: func,
    prices: shape({
        price: shape({
            value: number,
            currency: string
        })
    }),
    configured_variant: shape({
        thumbnail: shape({
            url: string
        })
    }),
    configurableThumbnailSource: oneOf(['parent', 'itself'])
};
