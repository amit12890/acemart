(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js + 2 modules ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCodeFragments.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/alert-circle.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__("./node_modules/react-feather/dist/icons/alert-circle.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js
var useToasts = __webpack_require__("./node_modules/@magento/peregrine/lib/Toasts/useToasts.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js
var deriveErrorMessage = __webpack_require__("./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/useCouponCode.js
var _s = $RefreshSig$();




/**
 * This talon contains the logic for a coupon code form component.
 * It performs effects and returns props data for rendering the component.
 *
 * This talon performs the following effects:
 *
 * - Fetch all coupons associated with the cart
 * - Manage the updating state of the cart while a coupon is being applied or removed
 *
 * @function
 *
 * @param {Object} props
 * @param {function} props.setIsCartUpdating Callback function for setting the update state for the cart.
 * @param {CouponCodeMutations} props.mutations GraphQL mutations for a cart's coupon code.
 * @param {CouponCodeQueries} props.queries GraphQL queries for a cart's coupon code.
 *
 * @return {CouponCodeTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useCouponCode } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/useCouponCode';
 */

const useCouponCode = props => {
  _s();

  const {
    setIsCartUpdating,
    mutations: {
      applyCouponMutation,
      removeCouponMutation
    },
    queries: {
      getAppliedCouponsQuery
    }
  } = props;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const {
    data,
    error: fetchError
  } = Object(client["useQuery"])(getAppliedCouponsQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const [applyCoupon, {
    called: applyCouponCalled,
    error: applyError,
    loading: applyingCoupon
  }] = Object(client["useMutation"])(applyCouponMutation);
  const [removeCoupon, {
    called: removeCouponCalled,
    error: removeCouponError,
    loading: removingCoupon
  }] = Object(client["useMutation"])(removeCouponMutation);
  const handleApplyCoupon = Object(react["useCallback"])(async ({
    couponCode
  }) => {
    if (!couponCode) return;

    try {
      await applyCoupon({
        variables: {
          cartId,
          couponCode
        }
      });
    } catch (e) {// Error is logged by apollo link - no need to double log.
    }
  }, [applyCoupon, cartId]);
  const handleRemoveCoupon = Object(react["useCallback"])(async couponCode => {
    try {
      await removeCoupon({
        variables: {
          cartId,
          couponCode
        }
      });
    } catch (e) {// Error is logged by apollo link - no need to double log.
    }
  }, [cartId, removeCoupon]);
  Object(react["useEffect"])(() => {
    if (applyCouponCalled || removeCouponCalled) {
      // If a coupon mutation is in flight, tell the cart.
      setIsCartUpdating(applyingCoupon || removingCoupon);
    }
  }, [applyCouponCalled, applyingCoupon, removeCouponCalled, removingCoupon, setIsCartUpdating]); // Create a memoized error map and toggle individual errors when they change

  const errors = Object(react["useMemo"])(() => new Map([['getAppliedCouponsQuery', fetchError], ['applyCouponMutation', applyError], ['removeCouponMutation', removeCouponError]]), [applyError, fetchError, removeCouponError]);
  return {
    applyingCoupon,
    data,
    errors,
    handleApplyCoupon,
    handleRemoveCoupon,
    removingCoupon
  };
};
/** JSDocs type definitions */

/**
 * GraphQL mutations for a cart's coupon code.
 * This is a type used by the {@link useCouponCode} talon.
 *
 * @typedef {Object} CouponCodeMutations
 *
 * @property {GraphQLAST} applyCouponMutation Mutation for applying a coupon code to a cart.
 * @property {GraphQLAST} removeCouponMutation Mutation for removing a coupon code from a cart.
 *
 * @see [CouponCode.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js}
 * for the queries used Venia
 */

/**
 * GraphQL queries for a cart's coupon code.
 * This is a type used by the {@link useCouponCode} talon.
 *
 * @typedef {Object} CouponCodeQueries
 *
 * @property {GraphQLAST} getAppliedCouponsQuery Query to fetch the currently applied coupons for a cart.
 *
 * @see [CouponCode.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js}
 * for the queries used Venia
 */

/**
 * Object type returned by the {@link useCouponCode} talon.
 * It provides props data to use when rendering a coupon code component.
 *
 * @typedef {Object} CouponCodeTalonProps
 *
 * @property {boolean} applyingCoupon True if a coupon is currently being applied. False otherwise.
 * @property {Object} data Data returned from the `getAppliedCouponsQuery`.
 * @property {String} errorMessage If GraphQL error occurs, this value is set.
 * @property {Object} fetchError The error data object returned by a GraphQL query.
 * @property {function} handleApplyCoupon Function to call for handling the application of a coupon code to a cart.
 * @property {function} handleRemoveCoupon Function to call for handling the removal of a coupon code from a cart
 * @property {boolean} removingCoupon True if a coupon code is currently being removed. False otherwise.
 */

_s(useCouponCode, "W6ptOWzk99J/HQjaDUDR/FWirpk=", false, function () {
  return [cart["b" /* useCartContext */], client["useQuery"], client["useMutation"], client["useMutation"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules
var field = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/field.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js + 1 modules
var cartPageFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCodeFragments.js
var couponCodeFragments = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCodeFragments.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.css
var couponCode = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.css");
var couponCode_default = /*#__PURE__*/__webpack_require__.n(couponCode);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(couponCode_default.a, options);



/* harmony default export */ var CouponCode_couponCode = (couponCode_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js
var couponCode_s = $RefreshSig$();


















const errorIcon = react_default.a.createElement(icon["a" /* default */], {
  src: alert_circle["a" /* default */],
  attrs: {
    width: 18
  }
});
const GET_APPLIED_COUPONS = client["gql"]`
    query getAppliedCoupons($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...AppliedCouponsFragment
        }
    }
    ${couponCodeFragments["a" /* AppliedCouponsFragment */]}
`;
const APPLY_COUPON_MUTATION = client["gql"]`
    mutation applyCouponToCart($cartId: String!, $couponCode: String!) {
        applyCouponToCart(
            input: { cart_id: $cartId, coupon_code: $couponCode }
        ) @connection(key: "applyCouponToCart") {
            cart {
                id
                ...CartPageFragment
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
const REMOVE_COUPON_MUTATION = client["gql"]`
    mutation removeCouponFromCart($cartId: String!) {
        removeCouponFromCart(input: { cart_id: $cartId })
            @connection(key: "removeCouponFromCart") {
            cart {
                id
                ...CartPageFragment
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
/**
 * A child component of the PriceAdjustments component.
 * This component renders a form for addingg a coupon code to the cart.
 *
 * @param {Object} props
 * @param {Function} props.setIsCartUpdating Function for setting the updating state for the cart.
 * @param {Object} props.classes CSS className overrides.
 * See [couponCode.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import CouponCode from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode";
 */

const CouponCode = props => {
  couponCode_s();

  const classes = Object(shallowMerge["a" /* default */])(CouponCode_couponCode, props.classes);
  const talonProps = useCouponCode({
    setIsCartUpdating: props.setIsCartUpdating,
    mutations: {
      applyCouponMutation: APPLY_COUPON_MUTATION,
      removeCouponMutation: REMOVE_COUPON_MUTATION
    },
    queries: {
      getAppliedCouponsQuery: GET_APPLIED_COUPONS
    }
  });
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  const {
    applyingCoupon,
    data,
    errors,
    handleApplyCoupon,
    handleRemoveCoupon,
    removingCoupon
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const removeCouponError = Object(deriveErrorMessage["a" /* deriveErrorMessage */])([errors.get('removeCouponMutation')]);
  Object(react["useEffect"])(() => {
    if (removeCouponError) {
      addToast({
        type: 'error',
        icon: errorIcon,
        message: removeCouponError,
        dismissable: true,
        timeout: 10000
      });
    }
  }, [addToast, removeCouponError]);

  if (!data) {
    return null;
  }

  if (errors.get('getAppliedCouponsQuery')) {
    return react_default.a.createElement("div", {
      className: classes.errorContainer
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'couponCode.errorContainer',
      defaultMessage: 'Something went wrong. Please refresh and try again.'
    }));
  }

  if (data.cart.applied_coupons) {
    const codes = data.cart.applied_coupons.map(({
      code
    }) => {
      return react_default.a.createElement(react["Fragment"], {
        key: code
      }, react_default.a.createElement("span", null, code), react_default.a.createElement(linkButton["a" /* default */], {
        className: classes.removeButton,
        disabled: removingCoupon,
        onClick: () => {
          handleRemoveCoupon(code);
        }
      }, react_default.a.createElement(message["a" /* default */], {
        id: 'couponCode.removeButton',
        defaultMessage: 'Remove'
      })));
    });
    return react_default.a.createElement("div", {
      className: classes.appliedCoupon
    }, codes);
  } else {
    const errorMessage = Object(deriveErrorMessage["a" /* deriveErrorMessage */])([errors.get('applyCouponMutation')]);
    const formClass = errorMessage ? classes.entryFormError : classes.entryForm;
    return react_default.a.createElement(esm["c" /* Form */], {
      className: formClass,
      onSubmit: handleApplyCoupon
    }, react_default.a.createElement(field["a" /* default */], {
      id: "couponCode",
      label: formatMessage({
        id: 'cartPage.couponCode',
        defaultMessage: 'Coupon Code'
      })
    }, react_default.a.createElement(textInput["a" /* default */], {
      field: "couponCode",
      id: 'couponCode',
      placeholder: formatMessage({
        id: 'couponCode.enterCode',
        defaultMessage: 'Enter code'
      }),
      mask: value => value && value.trim(),
      maskOnBlur: true,
      message: errorMessage
    })), react_default.a.createElement(field["a" /* default */], null, react_default.a.createElement(Button_button["a" /* default */], {
      disabled: applyingCoupon,
      priority: 'normal',
      type: 'submit'
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'couponCode.apply',
      defaultMessage: 'Apply'
    }))));
  }
};

couponCode_s(CouponCode, "IMQHTuoABxO8p9od9rCHEsHGYko=", false, function () {
  return [shallowMerge["a" /* default */], useCouponCode, useToasts["a" /* useToasts */], useIntl["a" /* default */]];
});

_c = CouponCode;
/* harmony default export */ var PriceAdjustments_CouponCode_couponCode = __webpack_exports__["a"] = (CouponCode);

var _c;

$RefreshReg$(_c, "CouponCode");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../LinkButton/linkButton.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.css"), "");

// Module
exports.push([module.i, "/* Styles for \"add\" view. */\n.couponCode-entryForm-1Xf,\n.couponCode-entryFormError-1lC {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-column-gap: 1.5rem;\n}\n\n.couponCode-entryFormError-1lC input {\n    border-color: rgb(var(--venia-global-color-red-400));\n}\n\n.couponCode-entryFormError-1lC input:focus {\n    border-color: rgb(var(--venia-global-color-gray-600));\n}\n\n.couponCode-entryFormError-1lC p {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.couponCode-errorContainer-3fj {\n    /* Duplicate the left/right/bottom padding on the accordion section */\n    padding-top: 1.5rem;\n    color: rgb(var(--venia-global-color-error));\n    line-height: var(--venia-global-lineHeight-300);\n}\n\n/* on mobile... */\n@media (max-width: 960px) {\n    .couponCode-entryForm-1Xf,\n    .couponCode-entryFormError-1lC {\n        /* switch to rows. */\n        grid-template-columns: unset;\n        grid-template-rows: 1fr 1fr;\n    }\n}\n\n/* Styles for \"removal\" view. */\n.couponCode-removeButton-1ID {\n    margin-left: 1rem;\n}\n", ""]);

// Exports
exports.locals = {
	"entryForm": "couponCode-entryForm-1Xf",
	"entryFormError": "couponCode-entryFormError-1lC",
	"errorContainer": "couponCode-errorContainer-3fj",
	"removeButton": "couponCode-removeButton-1ID " + __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../LinkButton/linkButton.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.css").locals["root"] + ""
};

/***/ })

}]);
//# sourceMappingURL=35.00dfdd1b1ae0caedb984.js.map