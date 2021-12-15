import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { useCartContext } from '@magento/peregrine/lib/context/cart';

import { ADD_PRODUCT_TO_CART } from '@magento/peregrine/lib/talons/ProductFullDetail/productFullDetail.gql.ce';

const AddToCart = ({ sku, Child, Loader }) => {
    const [{ cartId }] = useCartContext();

    const [addProductToCart, { error, loading }] = useMutation(
        ADD_PRODUCT_TO_CART,
        {
            onCompleted: data => {
                console.log("ggwp data", data)
                // addToast({
                //     type: 'success',
                //     icon: successIcon,
                //     message: `${get(
                //         lastAddedItem,
                //         'product.name',
                //         'Product'
                //     )} ${successMessage}`,
                //     dismissable: true,
                //     timeout: 3000
                // });
            }
        }
    );

    const handleAddToCart = useCallback(async () => {
        const variables = {
            cartId,
            product: {
                sku,
                quantity: 1
            }
        };

        try {
            await addProductToCart({ variables });
        } catch {
            return;
        }
    }, [addProductToCart, cartId, sku]);

    return (
        <div onClick={handleAddToCart}>{loading ? <Loader /> : <Child />}</div>
    );
};

export default AddToCart;
