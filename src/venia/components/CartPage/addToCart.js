import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useToasts } from '@magento/peregrine';
import {
    CheckCircle as CheckCircleIcon,
    AlertCircle as AlertCircleIcon
} from 'react-feather';
import Icon from '../Icon';

import { get, last, size } from 'lodash';
import { replaceSpecialChars } from '../../../app.utils';
import { ADD_PRODUCT_TO_CART } from './cartPage.gql';

const successIcon = (
    <Icon
        src={CheckCircleIcon}
        attrs={{
            width: 18
        }}
    />
);
const ErrorIcon = <Icon src={AlertCircleIcon} attrs={{ width: 18 }} />;

const successMessage = 'is added into cart';

const AddToCart = ({ sku, Child, Loader }) => {
    const [{ cartId }] = useCartContext();
    const [_, { addToast }] = useToasts();

    const [addProductToCart, { error, loading }] = useMutation(
        ADD_PRODUCT_TO_CART,
        {
            onCompleted: data => {
                const user_errors = get(data, 'addProductsToCart.user_errors');

                if (size(user_errors)) {
                    for (let index = 0; index < user_errors.length; index++) {
                        const error = user_errors[index];
                        addToast({
                            type: 'error',
                            icon: ErrorIcon,
                            message: error.message,
                            dismissable: true,
                            timeout: 3000
                        });
                    }
                } else {
                    const lastAddedItem = last(
                        get(data, 'addProductsToCart.cart.items', [])
                    );
                    const message = replaceSpecialChars(
                        `${get(
                            lastAddedItem,
                            'product.name',
                            'Product'
                        )} ${successMessage}`
                    );
                    addToast({
                        type: 'success',
                        icon: successIcon,
                        message,
                        dismissable: true,
                        timeout: 3000
                    });
                }
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
