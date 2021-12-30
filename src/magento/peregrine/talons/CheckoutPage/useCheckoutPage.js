import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import {
    useApolloClient,
    useLazyQuery,
    useMutation,
    useQuery
} from '@apollo/client';

import { clearCartDataFromCache } from '@magento/peregrine/lib/Apollo/clearCartDataFromCache';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useCartContext } from '@magento/peregrine/lib/context/cart';

import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';

import DEFAULT_OPERATIONS, { SET_GUEST_EMAIL } from './checkoutPage.gql.js';

import CheckoutError from './CheckoutError';
import { get, size } from 'lodash';
import { useStoreSwitcher } from '@magento/peregrine/lib/talons/Header/useStoreSwitcher';

export const CHECKOUT_STEP = {
    SHIPPING_ADDRESS: 1,
    SHIPPING_METHOD: 2,
    PAYMENT: 3,
    REVIEW: 4
};

/**
 *
 * @param {DocumentNode} props.operations.getCheckoutDetailsQuery query to fetch checkout details
 * @param {DocumentNode} props.operations.getCustomerQuery query to fetch customer details
 * @param {DocumentNode} props.operations.getOrderDetailsQuery query to fetch order details
 * @param {DocumentNode} props.operations.createCartMutation mutation to create a new cart
 * @param {DocumentNode} props.operations.placeOrderMutation mutation to place order
 *
 * @returns {
 *  activeContent: String,
 *  availablePaymentMethods: Array,
 *  cartItems: Array,
 *  checkoutStep: Number,
 *  customer: Object,
 *  error: ApolloError,
 *  handlePlaceOrder: Function,
 *  hasError: Boolean,
 *  isCartEmpty: Boolean,
 *  isGuestCheckout: Boolean,
 *  isLoading: Boolean,
 *  isUpdating: Boolean,
 *  orderDetailsData: Object,
 *  orderDetailsLoading: Boolean,
 *  orderNumber: String,
 *  placeOrderLoading: Boolean,
 *  setCheckoutStep: Function,
 *  setIsUpdating: Function,
 *  setShippingInformationDone: Function,
 *  setShippingMethodDone: Function,
 *  setPaymentInformationDone: Function,
 *  scrollShippingInformationIntoView: Function,
 *  shippingInformationRef: ReactRef,
 *  shippingMethodRef: ReactRef,
 *  scrollShippingMethodIntoView: Function,
 *  resetReviewOrderButtonClicked: Function,
 *  handleReviewOrder: Function,
 *  reviewOrderButtonClicked: Boolean,
 *  toggleAddressBookContent: Function,
 *  toggleSignInContent: Function,
 * }
 */
export const useCheckoutPage = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);

    const [checkoutData, setCheckoutData] = useState(false)
    // as based on this checkout graphql will be called
    const { currentStoreName, availableStores } = useStoreSwitcher()
    const defaultStoreName = get(availableStores.get('default'), "storeName", "")
    const isDefaultStore = defaultStoreName === currentStoreName

    const {
        createCartMutation,
        getCheckoutDetailsQuery,
        getCustomerQuery,
        getOrderDetailsQuery,
        placeOrderMutation,
        setStorePickupShippingAdressMutation
    } = operations;

    const [reviewOrderButtonClicked, setReviewOrderButtonClicked] = useState(
        false
    );

    const shippingInformationRef = useRef();
    const shippingMethodRef = useRef();

    const apolloClient = useApolloClient();
    const [isUpdating, setIsUpdating] = useState(false);
    const [activeContent, setActiveContent] = useState('checkout');
    const [checkoutStep, setCheckoutStep] = useState(
        CHECKOUT_STEP.SHIPPING_ADDRESS
    );
    const [{ isSignedIn }] = useUserContext();
    const [{ cartId }, { createCart, removeCart }] = useCartContext();

    //==================================================================================================================
    // SET EMAIL MUTATION AND RELATED HANDLER FUNCTIONS
    //==================================================================================================================

    const [setEmailToCart, { loading: settingEmail }] = useMutation(SET_GUEST_EMAIL, {
        onCompleted: (data) => {
            const cart = { ...checkoutData.cart, email: get(data, "setGuestEmailOnCart.cart.email", "") }
            setCheckoutData({ ...checkoutData, cart })
        }
    })

    const handleGuestEmail = useCallback((email) => {
        setEmailToCart({
            variables: {
                cartId, email
            }
        })
    }, [cartId])

    //==================================================================================================================
    // PLACE ORDER MUTATION
    //==================================================================================================================


    const [fetchCartId] = useMutation(createCartMutation);
    const [
        placeOrder,
        {
            data: placeOrderData,
            error: placeOrderError,
            loading: placeOrderLoading
        }
    ] = useMutation(placeOrderMutation);


    //==================================================================================================================
    // FETCH CART ID MUTATION
    //==================================================================================================================

    const [
        getOrderDetails,
        { data: orderDetailsData, loading: orderDetailsLoading }
    ] = useLazyQuery(getOrderDetailsQuery, {
        // We use this query to fetch details _just_ before submission, so we
        // want to make sure it is fresh. We also don't want to cache this data
        // because it may contain PII.
        fetchPolicy: 'no-cache'
    });


    //==================================================================================================================
    // CHECKOUT DETAILS FETCH AND SET STORE PICKUP GQL
    //==================================================================================================================


    const { data: customerData, loading: customerLoading } = useQuery(
        getCustomerQuery,
        { skip: !isSignedIn }
    );

    const [fetchCheckoutDetails, {
        networkStatus: checkoutQueryNetworkStatus
    }] = useLazyQuery(getCheckoutDetailsQuery, {
        /**
         * Skip fetching checkout details if the `cartId`
         * is a falsy value.
         * 
         * set notify network fetch to false to prevent refetching of the query
         */
        skip: !cartId,
        notifyOnNetworkStatusChange: true,
        variables: {
            cartId
        },
        onCompleted: (data) => {
            setCheckoutData(data)
        }
    })

    const [setStorePickupAndFetchDetails, {
        loading: storePickupNetworkStatus
    }] = useMutation(setStorePickupShippingAdressMutation, {
        variables: {
            cartId
        },
        onCompleted: (data) => {
            setCheckoutData(get(data, "setStorePickupShippingAddressesOnCart", {}))
        }
    })

    /**
     * based on isDefaultStore flag 
     * checkout data fetch gql call will be updated
     * 
     * if user has selected default store code then it will call simple checkout method 
     * else it will call call custom gql
     */
    useEffect(() => {
        if (isDefaultStore) {
            fetchCheckoutDetails()
        } else {
            setStorePickupAndFetchDetails()
        }
    }, [isDefaultStore])


    //==================================================================================================================
    // DATA MAPPING AND STEPS RELATED FUNCTIONS
    //==================================================================================================================


    const cartItems = useMemo(() => {
        return (checkoutData && checkoutData.cart.items) || [];
    }, [checkoutData]);

    /**,fetchCheckoutDetails
     * For more info about network statues check this out
     *
     * https://www.apollographql.com/docs/react/data/queries/#inspecting-loading-states
     */
    const isLoading = useMemo(() => {
        let checkoutQueryInFlight = true
        if (isDefaultStore) {
            checkoutQueryInFlight = checkoutQueryNetworkStatus < 7
        } else {
            checkoutQueryInFlight = storePickupNetworkStatus < 7
        }
        return checkoutQueryInFlight || customerLoading;
    }, [checkoutQueryNetworkStatus, customerLoading, storePickupNetworkStatus, isDefaultStore]);

    const customer = customerData && customerData.customer;

    const toggleAddressBookContent = useCallback(() => {
        setActiveContent(currentlyActive =>
            currentlyActive === 'checkout' ? 'addressBook' : 'checkout'
        );
    }, []);

    const toggleSignInContent = useCallback(() => {
        setActiveContent(currentlyActive =>
            currentlyActive === 'checkout' ? 'signIn' : 'checkout'
        );
    }, []);

    const checkoutError = useMemo(() => {
        if (placeOrderError) {
            return new CheckoutError(placeOrderError);
        }
    }, [placeOrderError]);

    const handleReviewOrder = useCallback(() => {
        setReviewOrderButtonClicked(true);
    }, []);

    const resetReviewOrderButtonClicked = useCallback(() => {
        setReviewOrderButtonClicked(false);
    }, []);

    const scrollShippingInformationIntoView = useCallback(() => {
        if (shippingInformationRef.current) {
            shippingInformationRef.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [shippingInformationRef]);

    const setShippingInformationDone = useCallback(() => {
        if (checkoutStep === CHECKOUT_STEP.SHIPPING_ADDRESS) {
            setCheckoutStep(CHECKOUT_STEP.SHIPPING_METHOD);
        }
    }, [checkoutStep]);

    const scrollShippingMethodIntoView = useCallback(() => {
        if (shippingMethodRef.current) {
            shippingMethodRef.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [shippingMethodRef]);

    const setShippingMethodDone = useCallback(() => {
        if (checkoutStep === CHECKOUT_STEP.SHIPPING_METHOD) {
            setCheckoutStep(CHECKOUT_STEP.PAYMENT);
        }
    }, [checkoutStep]);

    const setPaymentInformationDone = useCallback(() => {
        if (checkoutStep === CHECKOUT_STEP.PAYMENT) {
            globalThis.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'
            });
            setCheckoutStep(CHECKOUT_STEP.REVIEW);
        }
    }, [checkoutStep]);

    //==================================================================================================================
    // PLACE ORDER CALL
    //==================================================================================================================

    const [isPlacingOrder, setIsPlacingOrder] = useState(false);

    const handlePlaceOrder = useCallback(async () => {
        // Fetch order details and then use an effect to actually place the
        // order. If/when Apollo returns promises for invokers from useLazyQuery
        // we can just await this function and then perform the rest of order
        // placement.
        await getOrderDetails({
            variables: {
                cartId
            }
        });
        setIsPlacingOrder(true);
    }, [cartId, getOrderDetails]);

    // Go back to checkout if shopper logs in
    useEffect(() => {
        if (isSignedIn) {
            setActiveContent('checkout');
        }
    }, [isSignedIn]);

    useEffect(() => {
        async function placeOrderAndCleanup() {
            try {
                await placeOrder({
                    variables: {
                        cartId
                    }
                });
                // Cleanup stale cart and customer info.
                await removeCart();
                await clearCartDataFromCache(apolloClient);

                await createCart({
                    fetchCartId
                });
            } catch (err) {
                console.error(
                    'An error occurred during when placing the order',
                    err
                );
                setReviewOrderButtonClicked(false);
                setCheckoutStep(CHECKOUT_STEP.PAYMENT);
            }
        }

        if (orderDetailsData && isPlacingOrder) {
            setIsPlacingOrder(false);
            placeOrderAndCleanup();
        }
    }, [
        apolloClient,
        cartId,
        createCart,
        fetchCartId,
        orderDetailsData,
        placeOrder,
        removeCart,
        isPlacingOrder
    ]);

    return {
        isDefaultStore,
        activeContent,
        handleGuestEmail,
        settingEmail,
        availablePaymentMethods: checkoutData
            ? checkoutData.cart.available_payment_methods
            : null,
        cartItems,
        checkoutStep,
        customer,
        error: checkoutError,
        handlePlaceOrder,
        hasError: !!checkoutError,
        isCartEmpty: !(checkoutData && checkoutData.cart.total_quantity),
        isGuestCheckout: !isSignedIn,
        isLoading,
        checkoutData,
        hasCheckoutData: size(checkoutData) > 0,
        isUpdating,
        orderDetailsData,
        orderDetailsLoading,
        orderNumber:
            (placeOrderData && placeOrderData.placeOrder.order.order_number) ||
            null,
        placeOrderLoading,
        isMultiShipping: checkoutData && size(checkoutData.cart.multi_shipping) > 0,
        multiShipping: get(checkoutData, "cart.multi_shipping", {}),
        setCheckoutStep,
        setIsUpdating,
        setShippingInformationDone,
        setShippingMethodDone,
        setPaymentInformationDone,
        scrollShippingInformationIntoView,
        shippingInformationRef,
        shippingMethodRef,
        scrollShippingMethodIntoView,
        resetReviewOrderButtonClicked,
        handleReviewOrder,
        reviewOrderButtonClicked,
        toggleAddressBookContent,
        toggleSignInContent
    };
};