import React, { useCallback, useEffect } from 'react';
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
import { ADD_ALL_PRODUCT_TO_CART } from './cartPage.gql';

const successIcon = (
    <Icon
        src={CheckCircleIcon}
        attrs={{
            width: 18
        }}
    />
);
const ErrorIcon = <Icon src={AlertCircleIcon} attrs={{ width: 18 }} />;

const AddAllToCart = ({ cartItems, Child, Loader }) => {
    const [{ cartId }] = useCartContext();
    const [_, { addToast }] = useToasts();

    const [addAllProductsToCart, { error, loading }] = useMutation(
        ADD_ALL_PRODUCT_TO_CART,
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
                    addToast({
                        type: 'success',
                        icon: successIcon,
                        message: 'All Items added into cart.',
                        dismissable: true,
                        timeout: 3000
                    });
                }
            }
        }
    );

    useEffect(() => {
        if(error) {
            addToast({
                type: 'error',
                icon: ErrorIcon,
                message: error.message,
                dismissable: true,
                timeout: 3000
            });
        }
    }, [error])

    const handleAddToCart = useCallback(async () => {
        const variables = {
            cartId,
            cartItems
        };
        try {
            await addAllProductsToCart({ variables });
        } catch {
            return;
        }
    }, [addAllProductsToCart, cartId, cartItems]);

    return (
        <div onClick={handleAddToCart}>{loading ? <Loader /> : <Child />}</div>
    );
};

export default AddAllToCart;
