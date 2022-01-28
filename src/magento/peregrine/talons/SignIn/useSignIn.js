import { useCallback, useRef, useState, useMemo } from 'react';
import { useApolloClient, useMutation } from '@apollo/client';

import { clearCartDataFromCache } from '@magento/peregrine/lib/Apollo/clearCartDataFromCache';
import { clearCustomerDataFromCache } from '@magento/peregrine/lib/Apollo/clearCustomerDataFromCache';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { retrieveCartId } from '@magento/peregrine/lib/store/actions/cart';

import DEFAULT_OPERATIONS from './signIn.gql';
import gql from '../../../../data/checkout/checkout.gql'
import { useCompareList } from '../../../../components/CompareListPage/useCompareList';
import { useDispatch, useSelector } from 'react-redux';
import { size } from 'lodash-es';
import { checkoutFetched, checkoutFetchError, loginAndFetchCheckoutComplete, updateCheckoutField } from '../../../../data/checkout/checkout.action';
import { get } from 'lodash';
import { useWishlistSession } from '../../../../data/appState/appState.hook';

const { mergeCartMutation } = gql

export const useSignIn = props => {
    const dispatch = useDispatch()
    const { addProductToWishlist } = useWishlistSession()

    const {
        getCartDetailsQuery,
        setDefaultUsername,
        showCreateAccount,
        showForgotPassword
    } = props;

    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const {
        createCartMutation,
        getCustomerQuery,
        signInMutation
    } = operations;

    const { assignCompareList } = useCompareList()
    const uid = useSelector(store => store.compare.uid)
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

    const [signIn, { error: signInError }] = useMutation(signInMutation, {
        fetchPolicy: 'no-cache'
    });

    const [fetchCartId] = useMutation(createCartMutation);

    /**
     * this merge cart mutation is calling from the 
     * data/checkout/checkout.gql
     * 
     * each merge cart will fill checkout data 
     * during normal login it won't affect
     */
    const [mergeCarts] = useMutation(mergeCartMutation, {
        onCompleted: (data) => {
            const cart = get(data, "mergeCarts", {})
            console.log("🚀 ~ file: useSignIn.js ~ line 69 ~ cart", cart)
            dispatch(loginAndFetchCheckoutComplete({ ...cart }))
        },
        onError: () => {
            dispatch(loginAndFetchCheckoutComplete())
        }
    });
    const fetchUserDetails = useAwaitQuery(getCustomerQuery);
    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);

    const formApiRef = useRef(null);
    const setFormApi = useCallback(api => (formApiRef.current = api), []);

    const handleSubmit = useCallback(
        async ({ email, password }) => {
            setIsSigningIn(true);
            try {
                // Get source cart id (guest cart id).
                const sourceCartId = cartId;
                console.log("🚀 ~ file: useSignIn.js ~ line 66 ~ sourceCartId", sourceCartId)

                // Sign in and set the token.
                const signInResponse = await signIn({
                    variables: { email, password }
                });
                const token = signInResponse.data.generateCustomerToken.token;
                await setToken(token);

                // Assign Compare list to logged in customer
                if (size(uid) > 0) {
                    assignCompareList({ variables: { uid } })
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
                console.log("🚀 ~ file: useSignIn.js ~ line 90 ~ destinationCartId", destinationCartId)

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
                addProductToWishlist(token)
            } catch (error) {
                if (process.env.NODE_ENV !== 'production') {
                    console.error(error);
                }

                setIsSigningIn(false);
            }
        },
        [
            cartId,
            apolloClient,
            removeCart,
            signIn,
            setToken,
            createCart,
            fetchCartId,
            mergeCarts,
            getUserDetails,
            fetchUserDetails,
            getCartDetails,
            fetchCartDetails,
            assignCompareList,
            uid
        ]
    );

    const handleForgotPassword = useCallback(() => {
        const { current: formApi } = formApiRef;

        if (formApi) {
            setDefaultUsername(formApi.getValue('email'));
        }

        showForgotPassword();
    }, [setDefaultUsername, showForgotPassword]);

    const handleCreateAccount = useCallback(() => {
        const { current: formApi } = formApiRef;

        if (formApi) {
            setDefaultUsername(formApi.getValue('email'));
        }

        showCreateAccount();
    }, [setDefaultUsername, showCreateAccount]);

    const errors = useMemo(
        () =>
            new Map([
                ['getUserDetailsQuery', getDetailsError],
                ['signInMutation', signInError]
            ]),
        [getDetailsError, signInError]
    );

    return {
        errors,
        handleCreateAccount,
        handleForgotPassword,
        handleSubmit,
        isBusy: isGettingDetails || isSigningIn,
        setFormApi
    };
};
