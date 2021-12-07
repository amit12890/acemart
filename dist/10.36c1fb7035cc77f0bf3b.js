(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js + 4 modules ***!
  \*******************************************************************************************************************/
/*! exports provided: GrandTotalFragment, PriceSummaryFragment */
/*! exports used: PriceSummaryFragment */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PriceSummaryFragment; });

// UNUSED EXPORTS: GrandTotalFragment

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/discountSummary.gql.js

const DiscountSummaryFragment = client["gql"]`
    fragment DiscountSummaryFragment on CartPrices {
        discounts {
            amount {
                currency
                value
            }
            label
        }
    }
`;
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/queries/giftCardSummary.ce.js

const GiftCardSummaryFragment = client["gql"]`
    fragment GiftCardSummaryFragment on Cart {
        id
        __typename
    }
`;
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/shippingSummary.gql.js

const ShippingSummaryFragment = client["gql"]`
    fragment ShippingSummaryFragment on Cart {
        id
        shipping_addresses {
            selected_shipping_method {
                amount {
                    currency
                    value
                }
            }
            street
        }
    }
`;
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/taxSummary.gql.js

const TaxSummaryFragment = client["gql"]`
    fragment TaxSummaryFragment on CartPrices {
        applied_taxes {
            amount {
                currency
                value
            }
        }
    }
`;
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js





const GrandTotalFragment = client["gql"]`
    fragment GrandTotalFragment on CartPrices {
        grand_total {
            currency
            value
        }
    }
`;
const PriceSummaryFragment = client["gql"]`
    fragment PriceSummaryFragment on Cart {
        id
        items {
            id
            quantity
        }
        ...ShippingSummaryFragment
        prices {
            ...TaxSummaryFragment
            ...DiscountSummaryFragment
            ...GrandTotalFragment
            subtotal_excluding_tax {
                currency
                value
            }
        }
        ...GiftCardSummaryFragment
    }
    ${DiscountSummaryFragment}
    ${GiftCardSummaryFragment}
    ${GrandTotalFragment}
    ${ShippingSummaryFragment}
    ${TaxSummaryFragment}
`;

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/ForgotPassword/useForgotPassword.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/ForgotPassword/useForgotPassword.js ***!
  \****************************************************************************************/
/*! exports provided: useForgotPassword */
/*! exports used: useForgotPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForgotPassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
var _s = $RefreshSig$();



/**
 * Returns props necessary to render a ForgotPassword form.
 *
 * @function
 *
 * @param {Function} props.onCancel - callback function to call when user clicks the cancel button
 * @param {RequestPasswordEmailMutations} props.mutations - GraphQL mutations for the forgot password form.
 *
 * @returns {ForgotPasswordProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useForgotPassword } from '@magento/peregrine/lib/talons/ForgotPassword/useForgotPassword.js';
 */

const useForgotPassword = props => {
  _s();

  const {
    onCancel,
    mutations
  } = props;
  const [hasCompleted, setCompleted] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [requestResetEmail, {
    error: requestResetEmailError,
    loading: isResettingPassword
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(mutations.requestPasswordResetEmailMutation);
  const handleFormSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async ({
    email
  }) => {
    try {
      await requestResetEmail({
        variables: {
          email
        }
      });
      setForgotPasswordEmail(email);
      setCompleted(true);
    } catch (err) {
      setCompleted(false);
    }
  }, [requestResetEmail]);
  const handleCancel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    onCancel();
  }, [onCancel]);
  return {
    forgotPasswordEmail,
    formErrors: [requestResetEmailError],
    handleCancel,
    handleFormSubmit,
    hasCompleted,
    isResettingPassword
  };
};
/** JSDocs type definitions */

/**
 * GraphQL mutations for the forgot password form.
 * This is a type used by the {@link useForgotPassword} talon.
 *
 * @typedef {Object} RequestPasswordEmailMutations
 *
 * @property {GraphQLAST} requestPasswordResetEmailMutation mutation for requesting password reset email
 *
 * @see [forgotPassword.gql.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/ForgotPassword/forgotPassword.gql.js}
 * for the query used in Venia
 */

/**
 * Object type returned by the {@link useForgotPassword} talon.
 * It provides props data to use when rendering the forgot password form component.
 *
 * @typedef {Object} ForgotPasswordProps
 *
 * @property {String} forgotPasswordEmail email address of the user whose password reset has been requested
 * @property {Array} formErrors A list of form errors
 * @property {Function} handleCancel Callback function to handle form cancellations
 * @property {Function} handleFormSubmit Callback function to handle form submission
 * @property {Boolean} hasCompleted True if password reset mutation has completed. False otherwise
 * @property {Boolean} isResettingPassword True if password reset mutation is in progress. False otherwise
 */

_s(useForgotPassword, "FJTfYUFH5gSuzDDZV15RPrPUdOI=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/SignIn/useSignIn.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/SignIn/useSignIn.js + 1 modules ***!
  \************************************************************************************/
/*! exports provided: useSignIn */
/*! exports used: useSignIn */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Apollo/clearCartDataFromCache.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Apollo/clearCustomerDataFromCache.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useAwaitQuery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/store/actions/cart/asyncActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useSignIn; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Apollo/clearCartDataFromCache.js
var clearCartDataFromCache = __webpack_require__("./node_modules/@magento/peregrine/lib/Apollo/clearCartDataFromCache.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Apollo/clearCustomerDataFromCache.js
var clearCustomerDataFromCache = __webpack_require__("./node_modules/@magento/peregrine/lib/Apollo/clearCustomerDataFromCache.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useAwaitQuery.js
var useAwaitQuery = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useAwaitQuery.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/store/actions/cart/asyncActions.js
var asyncActions = __webpack_require__("./node_modules/@magento/peregrine/lib/store/actions/cart/asyncActions.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/SignIn/signIn.gql.js

const GET_CUSTOMER = client["gql"]`
    query GetCustomerAfterSignIn {
        customer {
            id
            email
            firstname
            lastname
            is_subscribed
        }
    }
`;
const SIGN_IN = client["gql"]`
    mutation SignIn($email: String!, $password: String!) {
        generateCustomerToken(email: $email, password: $password) {
            token
        }
    }
`;
const CREATE_CART = client["gql"]`
    mutation CreateCartAfterSignIn {
        cartId: createEmptyCart
    }
`;
const MERGE_CARTS = client["gql"]`
    mutation MergeCartsAfterSignIn(
        $sourceCartId: String!
        $destinationCartId: String!
    ) {
        mergeCarts(
            source_cart_id: $sourceCartId
            destination_cart_id: $destinationCartId
        ) @connection(key: "mergeCarts") {
            id
            items {
                id
            }
        }
    }
`;
/* harmony default export */ var signIn_gql = ({
  createCartMutation: CREATE_CART,
  getCustomerQuery: GET_CUSTOMER,
  mergeCartsMutation: MERGE_CARTS,
  signInMutation: SIGN_IN
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/SignIn/useSignIn.js
var _s = $RefreshSig$();











const useSignIn = props => {
  _s();

  const {
    getCartDetailsQuery,
    setDefaultUsername,
    showCreateAccount,
    showForgotPassword
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(signIn_gql, props.operations);
  const {
    createCartMutation,
    getCustomerQuery,
    mergeCartsMutation,
    signInMutation
  } = operations;
  const apolloClient = Object(client["useApolloClient"])();
  const [isSigningIn, setIsSigningIn] = Object(react["useState"])(false);
  const [{
    cartId
  }, {
    createCart,
    removeCart,
    getCartDetails
  }] = Object(cart["b" /* useCartContext */])();
  const [{
    isGettingDetails,
    getDetailsError
  }, {
    getUserDetails,
    setToken
  }] = Object(user["b" /* useUserContext */])();
  const [signIn, {
    error: signInError
  }] = Object(client["useMutation"])(signInMutation, {
    fetchPolicy: 'no-cache'
  });
  const [fetchCartId] = Object(client["useMutation"])(createCartMutation);
  const [mergeCarts] = Object(client["useMutation"])(mergeCartsMutation);
  const fetchUserDetails = Object(useAwaitQuery["a" /* useAwaitQuery */])(getCustomerQuery);
  const fetchCartDetails = Object(useAwaitQuery["a" /* useAwaitQuery */])(getCartDetailsQuery);
  const formApiRef = Object(react["useRef"])(null);
  const setFormApi = Object(react["useCallback"])(api => formApiRef.current = api, []);
  const handleSubmit = Object(react["useCallback"])(async ({
    email,
    password
  }) => {
    setIsSigningIn(true);

    try {
      // Get source cart id (guest cart id).
      const sourceCartId = cartId; // Sign in and set the token.

      const signInResponse = await signIn({
        variables: {
          email,
          password
        }
      });
      const token = signInResponse.data.generateCustomerToken.token;
      await setToken(token); // Clear all cart/customer data from cache and redux.

      await Object(clearCartDataFromCache["a" /* clearCartDataFromCache */])(apolloClient);
      await Object(clearCustomerDataFromCache["a" /* clearCustomerDataFromCache */])(apolloClient);
      await removeCart(); // Create and get the customer's cart id.

      await createCart({
        fetchCartId
      });
      const destinationCartId = await Object(asyncActions["retrieveCartId"])(); // Merge the guest cart into the customer cart.

      await mergeCarts({
        variables: {
          destinationCartId,
          sourceCartId
        }
      }); // Ensure old stores are updated with any new data.

      getUserDetails({
        fetchUserDetails
      });
      getCartDetails({
        fetchCartId,
        fetchCartDetails
      });
    } catch (error) {
      if (true) {
        console.error(error);
      }

      setIsSigningIn(false);
    }
  }, [cartId, apolloClient, removeCart, signIn, setToken, createCart, fetchCartId, mergeCarts, getUserDetails, fetchUserDetails, getCartDetails, fetchCartDetails]);
  const handleForgotPassword = Object(react["useCallback"])(() => {
    const {
      current: formApi
    } = formApiRef;

    if (formApi) {
      setDefaultUsername(formApi.getValue('email'));
    }

    showForgotPassword();
  }, [setDefaultUsername, showForgotPassword]);
  const handleCreateAccount = Object(react["useCallback"])(() => {
    const {
      current: formApi
    } = formApiRef;

    if (formApi) {
      setDefaultUsername(formApi.getValue('email'));
    }

    showCreateAccount();
  }, [setDefaultUsername, showCreateAccount]);
  const errors = Object(react["useMemo"])(() => new Map([['getUserDetailsQuery', getDetailsError], ['signInMutation', signInError]]), [getDetailsError, signInError]);
  return {
    errors,
    handleCreateAccount,
    handleForgotPassword,
    handleSubmit,
    isBusy: isGettingDetails || isSigningIn,
    setFormApi
  };
};

_s(useSignIn, "nE6gXH8fhYm+VQr/zcxI1lh/tsk=", false, function () {
  return [client["useApolloClient"], cart["b" /* useCartContext */], user["b" /* useUserContext */], client["useMutation"], client["useMutation"], client["useMutation"], useAwaitQuery["a" /* useAwaitQuery */], useAwaitQuery["a" /* useAwaitQuery */]];
});

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCodeFragments.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCodeFragments.js ***!
  \*******************************************************************************************************************/
/*! exports provided: AppliedCouponsFragment */
/*! exports used: AppliedCouponsFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppliedCouponsFragment; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

const AppliedCouponsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment AppliedCouponsFragment on Cart {
        id
        applied_coupons {
            code
        }
    }
`;

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js ***!
  \**********************************************************************************************************/
/*! exports provided: ProductListingFragment */
/*! exports used: ProductListingFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListingFragment; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

const ProductListingFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment ProductListingFragment on Cart {
        id
        items {
            id
            product {
                id
                name
                sku
                url_key
                url_suffix
                thumbnail {
                    url
                }
                small_image {
                    url
                }
                stock_status
                ... on ConfigurableProduct {
                    variants {
                        attributes {
                            uid
                        }
                        product {
                            id
                            small_image {
                                url
                            }
                        }
                    }
                }
            }
            prices {
                price {
                    currency
                    value
                }
            }
            quantity
            ... on ConfigurableCartItem {
                configurable_options {
                    id
                    configurable_product_option_value_uid
                    option_label
                    value_id
                    value_label
                }
            }
        }
    }
`;

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js + 1 modules ***!
  \*****************************************************************************************************/
/*! exports provided: CartPageFragment */
/*! exports used: CartPageFragment */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCodeFragments.js because of ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js because of ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListing.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CartPageFragment; });

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCardFragments.js

const GiftCardFragment = client["gql"]`
    fragment GiftCardFragment on Cart {
        __typename
        id
    }
`;
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js
var productListingFragments = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js + 4 modules
var priceSummaryFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCodeFragments.js
var couponCodeFragments = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCodeFragments.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js





const CartPageFragment = client["gql"]`
    fragment CartPageFragment on Cart {
        id
        total_quantity
        ...AppliedCouponsFragment
        ...GiftCardFragment
        ...ProductListingFragment
        ...PriceSummaryFragment
    }
    ${couponCodeFragments["a" /* AppliedCouponsFragment */]}
    ${GiftCardFragment}
    ${productListingFragments["a" /* ProductListingFragment */]}
    ${priceSummaryFragments_gql["a" /* PriceSummaryFragment */]}
`;

/***/ })

}]);
//# sourceMappingURL=10.36c1fb7035cc77f0bf3b.js.map