import React from 'react';

import { useQuery } from '@apollo/client';
import { get } from 'lodash-es';

import { GET_CART_RELATED_PRODUCTS } from './cartPage.gql';
import GalleryGrid from '../GalleryGrid';

const CrossSellProducts = ({ skuList }) => {
    const { loading, error, data } = useQuery(GET_CART_RELATED_PRODUCTS, {
        variables: { skus: skuList }
    });

    if (loading) {
        return <div>Loading...</div>
    }
    return <GalleryGrid items={get(data, "products.items", [])} />
};

export default CrossSellProducts;
