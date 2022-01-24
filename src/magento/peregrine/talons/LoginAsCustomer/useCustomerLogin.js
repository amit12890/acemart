import { useCallback, useRef, useState, useMemo, useEffect } from 'react';
import { useApolloClient, useMutation } from '@apollo/client';

import { clearCartDataFromCache } from '@magento/peregrine/lib/Apollo/clearCartDataFromCache';
import { clearCustomerDataFromCache } from '@magento/peregrine/lib/Apollo/clearCustomerDataFromCache';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { retrieveCartId } from '@magento/peregrine/lib/store/actions/cart';

import { useLocation } from 'react-router-dom';
import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';
import { CUSTOMER_TOKEN_MUTATION } from './loginAsCustomer.gql';
import { useDispatch, useSelector } from 'react-redux';
import DEFAULT_SIGNIN_OPERATIONS from '../SignIn/signIn.gql';
import { useCompareList } from '../../../../components/CompareListPage/useCompareList';
import { size, get } from 'lodash';
import { GET_CART_DETAILS_QUERY } from '../../../../venia/components/SignIn/signIn.gql';
import { MERGE_CART_MUTATION } from '../../../../data/checkout/checkout.gql';

export const useCustomerLogin = props => {
    const dispatch = useDispatch();
    const location = useLocation();
    const secret = getSearchParam('secret', location);

    const operations = mergeOperations(
        DEFAULT_SIGNIN_OPERATIONS,
        props.operations
    );
    const { createCartMutation, getCustomerQuery, signInMutation } = operations;

    const { assignCompareList } = useCompareList();
    const uid = useSelector(store => store.compare.uid);
    const apolloClient = useApolloClient();
    const [isSigningIn, setIsSigningIn] = useState(false);

    const [
        { cartId },
        { createCart, removeCart, getCartDetails }
    ] = useCartContext();

    const [
        { isGettingDetails, getDetailsError },
        { getUserDetails, setToken }
    ] = useUserContext();

    const [generateCustomerTokenOnSecret, { loading, error }] = useMutation(
        CUSTOMER_TOKEN_MUTATION,
        {
            fetchPolicy: 'no-cache'
        }
    );

    const [fetchCartId] = useMutation(createCartMutation);

    /**
     * this merge cart mutation is calling from the
     * data/checkout/checkout.gql
     *
     * each merge cart will fill checkout data
     * during normal login it won't affect
     */
    const [mergeCarts] = useMutation(MERGE_CART_MUTATION, {
        onCompleted: data => {
            const cart = get(data, 'mergeCarts', {});
            dispatch(loginAndFetchCheckoutComplete({ ...cart }));
        },
        onError: () => {
            dispatch(loginAndFetchCheckoutComplete());
        }
    });
    const fetchUserDetails = useAwaitQuery(getCustomerQuery);
    const fetchCartDetails = useAwaitQuery(GET_CART_DETAILS_QUERY);

    useEffect(async () => {
        setIsSigningIn(true);
        try {
            // Get source cart id (guest cart id).
            const sourceCartId = cartId;

            // Sign in and set the token.
            const signInResponse = await generateCustomerTokenOnSecret({
                variables: { secret }
            });
            const token =
                signInResponse.data.generateCustomerTokenOnSecret
                    .customer_token;
            await setToken(token);

            // Assign Compare list to logged in customer
            if (size(uid) > 0) {
                assignCompareList({ variables: { uid } });
            }

            // Clear all cart/customer data from cache and redux.
            await clearCartDataFromCache(apolloClient);
            await clearCustomerDataFromCache(apolloClient);
            await removeCart();

            // Create and get the customer's cart id.
            await createCart({
                fetchCartId
            });
            const destinationCartId = await retrieveCartId();

            // Merge the guest cart into the customer cart.
            await mergeCarts({
                variables: {
                    destinationCartId,
                    sourceCartId
                }
            });

            // Ensure old stores are updated with any new data.
            getUserDetails({ fetchUserDetails });
            getCartDetails({ fetchCartId, fetchCartDetails });
        } catch (error) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(error);
            }

            setIsSigningIn(false);
        }
    }, [secret]);

    return {
        loading: isGettingDetails || isSigningIn,
        error
    };
};
