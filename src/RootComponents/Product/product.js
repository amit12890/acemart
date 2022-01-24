import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { useProduct } from '../../magento/peregrine/talons/Product/useProduct';

import ErrorView from '@magento/venia-ui/lib/components/ErrorView';
import { StoreTitle, Meta } from '@magento/venia-ui/lib/components/Head';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import ProductFullDetail from '../../venia/components/ProductFullDetail';
import mapProduct from '@magento/venia-ui/lib/util/mapProduct';
import { replaceSpecialChars } from '../../app.utils';

/*
 * As of this writing, there is no single Product query type in the M2.3 schema.
 * The recommended solution is to use filter criteria on a Products query.
 * However, the `id` argument is not supported. See
 * https://github.com/magento/graphql-ce/issues/86
 * TODO: Replace with a single product query when possible.
 */


const Product = () => {
    const talonProps = useProduct({
        mapProduct
    });

    const { error, loading, product } = talonProps;

    if (loading && !product) return fullPageLoadingIndicator;
    if (error && !product) return <ErrorView />;
    if (!product) {
        return (
            <h1>
                <FormattedMessage
                    id={'product.outOfStockTryAgain'}
                    defaultMessage={
                        'This Product is currently out of stock. Please try again later.'
                    }
                />
            </h1>
        );
    }

    return (
        <Fragment>
            <StoreTitle>{replaceSpecialChars(product.meta_title ? product.meta_title : product.product_name)}</StoreTitle>
            <Meta name="title" content={replaceSpecialChars(product.meta_title ? product.meta_title : product.product_name)} />
            <Meta name="description" content={replaceSpecialChars(product.meta_description)} />
            <ProductFullDetail product={product} />
        </Fragment>
    );
};

export default Product;
