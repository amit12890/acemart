import React, { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { concat, filter, get, map } from 'lodash-es';

import { GET_CART_RELATED_PRODUCTS } from './cartPage.gql';
import GalleryGrid from '../GalleryGrid';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';

const CrossSellProducts = ({ isLoading, items }) => {
    if (isLoading) {
        return (
            <LoadingIndicator>Fetching Crosssell Products...</LoadingIndicator>
        );
    }

    const upsellProducts = useMemo(() => {
        let upsellProducts = [];
        if (items.length) {
            for (let itemInd = 0; itemInd < items.length; itemInd++) {
                const currItem = items[itemInd];
                const skuList = filter(
                    get(currItem, 'product.product_links', []),
                    ['link_type', 'crosssell']
                );
                upsellProducts = concat(
                    upsellProducts,
                    map(skuList, 'linked_product_sku')
                );
            }
        }
        return upsellProducts;
    }, [items]);

    if (upsellProducts.length) {
        return <CrossSellProductsContent skuList={upsellProducts} />;
    }
    return null;
};

const CrossSellProductsContent = ({ skuList }) => {
    const { loading, error, data } = useQuery(GET_CART_RELATED_PRODUCTS, {
        variables: { skus: skuList }
    });

    if (loading) {
        return (
            <LoadingIndicator>Fetching Crosssell Products...</LoadingIndicator>
        );
    }
    return <GalleryGrid items={get(data, 'products.items', [])} />;
};

export default CrossSellProducts;
