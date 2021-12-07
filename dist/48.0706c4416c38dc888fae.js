(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js":
/*!************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js ***!
  \************************************************************************/
/*! exports provided: useScrollIntoView */
/*! exports used: useScrollIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useScrollIntoView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const OPTIONS_DEFAULTS = {
  behavior: 'smooth',
  block: 'center'
};
/**
 * Scrolls a ref into view on truthiness of a thing.
 *
 * @param {React.Ref} ref
 * @param {Boolean} shouldScroll allows scrolling if truthy
 * @param {OPTIONS_DEFAULTS} options https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 */

const useScrollIntoView = (ref, shouldScroll, options = OPTIONS_DEFAULTS) => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref.current && ref.current instanceof HTMLElement && shouldScroll) {
      ref.current.scrollIntoView(options);
    }
  }, [options, ref, shouldScroll]);
};

_s(useScrollIntoView, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js ***!
  \******************************************************************************/
/*! exports provided: useFormError */
/*! exports used: useFormError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFormError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_deriveErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/deriveErrorMessage */ "./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");
var _s = $RefreshSig$();



const useFormError = props => {
  _s();

  const {
    errors
  } = props;
  const derivedErrorMessage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_util_deriveErrorMessage__WEBPACK_IMPORTED_MODULE_1__[/* deriveErrorMessage */ "a"])(errors), [errors]);
  return {
    errorMessage: derivedErrorMessage
  };
};

_s(useFormError, "gxRNi0NjhepoxP44ATHAyuhTTPE=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js + 1 modules ***!
  \**************************************************************************************************/
/*! exports provided: MiniCartFragment */
/*! exports used: MiniCartFragment */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ MiniCartFragment; });

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/MiniCart/ProductList/productListFragments.gql.js

const ProductListFragment = client["gql"]`
    fragment ProductListFragment on Cart {
        id
        items {
            id
            product {
                id
                name
                url_key
                url_suffix
                thumbnail {
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
                            thumbnail {
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
                    option_label
                    value_id
                    value_label
                }
            }
        }
    }
`;
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js


const MiniCartFragment = client["gql"]`
    fragment MiniCartFragment on Cart {
        id
        total_quantity
        prices {
            subtotal_excluding_tax {
                currency
                value
            }
        }
        ...ProductListFragment
    }
    ${ProductListFragment}
`;

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js":
/*!************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js ***!
  \************************************************************************/
/*! exports provided: deriveErrorMessage */
/*! exports used: deriveErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deriveErrorMessage; });
/**
 * Maps an error to a string message
 *
 * @param {Error} error the error to map
 * @return {String} error message
 */
const toString = error => {
  const {
    graphQLErrors,
    message
  } = error;
  return graphQLErrors && graphQLErrors.length ? graphQLErrors.map(({
    message
  }) => message).join(', ') : message;
};
/**
 * A function to derive an error string from an array of errors.
 */


const deriveErrorMessage = errors => {
  const errorCollection = [];

  for (const error of errors) {
    if (error) {
      errorCollection.push(toString(error));
    }
  }

  return errorCollection.join(', ');
};

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/WishlistPage/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/WishlistPage/index.js + 12 modules ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlist.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItem.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItems.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistFragment.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-down.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-up.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/trash-2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlist.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItem.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItems.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistPage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_WishlistPage_wishlistPage; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistFragment.gql.js
var wishlistFragment_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistFragment.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistPage.gql.js


const GET_CUSTOMER_WISHLIST = client["gql"]`
    query GetCustomerWishlist {
        customer {
            id
            wishlists {
                id
                ...WishlistPageFragment
            }
        }
    }
    ${wishlistFragment_gql["a" /* WishlistPageFragment */]}
`;
/* harmony default export */ var wishlistPage_gql = ({
  getCustomerWishlistQuery: GET_CUSTOMER_WISHLIST
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistPage.js
var _s = $RefreshSig$();







/**
 * @function
 *
 * @returns {WishlistPageProps}
 */

const useWishlistPage = (props = {}) => {
  _s();

  const operations = Object(shallowMerge["a" /* default */])(wishlistPage_gql, props.operations);
  const {
    getCustomerWishlistQuery
  } = operations;
  const history = Object(react_router["g" /* useHistory */])();
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const {
    data,
    error,
    loading
  } = Object(client["useQuery"])(getCustomerWishlistQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !isSignedIn
  });
  const derivedWishlists = Object(react["useMemo"])(() => {
    return data && data.customer.wishlists || [];
  }, [data]);
  const errors = Object(react["useMemo"])(() => {
    return new Map([['getCustomerWishlistQuery', error]]);
  }, [error]);
  Object(react["useEffect"])(() => {
    if (!isSignedIn) {
      history.push('/');
    }
  }, [history, isSignedIn]);
  return {
    errors,
    loading,
    shouldRenderVisibilityToggle: derivedWishlists.length > 1,
    wishlists: derivedWishlists
  };
};
/**
 * JSDoc type definitions
 */

/**
 * GraphQL mutations for the Wishlist Page
 *
 * @typedef {Object} WishlistQueries
 *
 * @property {GraphQLDocument} getCustomerWishlistQuery Query to get customer wish lists
 *
 * @see [`wishlistPage.gql.js`]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/WishlistPage/wishlistPage.gql.js}
 * for queries used in Venia
 */

/**
 * GraphQL types for the Wishlist Page
 *
 * @typedef {Object} WishlistTypes
 *
 * @property {Function} Customer.fields.wishlists.read
 *
 * @see [`wishlistPage.gql.js`]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/WishlistPage/wishlistPage.gql.js}
 * for queries used in Venia
 */

/**
 * Props data to use when rendering the Wishlist Item component
 *
 * @typedef {Object} WishlistPageProps
 *
 * @property {Map} errors A map of all the GQL query errors
 * @property {Boolean} loading is the query loading
 * @property {Boolean} shouldRenderVisibilityToggle true if wishlists length is > 1.
 * @property {Object} wishlists List of all customer wishlists
 */

_s(useWishlistPage, "Hk8IW//fD35kzsp/DGOQwGrkbGE=", false, function () {
  return [react_router["g" /* useHistory */], user["b" /* useUserContext */], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js
var deriveErrorMessage = __webpack_require__("./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js
var LoadingIndicator_static = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-up.js
var chevron_up = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-up.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-down.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlist.js + 1 modules
var useWishlist = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlist.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItems.js
var useWishlistItems = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItems.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItems.css
var wishlistItems = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItems.css");
var wishlistItems_default = /*#__PURE__*/__webpack_require__.n(wishlistItems);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItems.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(wishlistItems_default.a, options);



/* harmony default export */ var WishlistPage_wishlistItems = (wishlistItems_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__("./node_modules/react-feather/dist/icons/trash-2.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js
var useToasts = __webpack_require__("./node_modules/@magento/peregrine/lib/Toasts/useToasts.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItem.js
var useWishlistItem = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItem.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 2 modules
var Image_image = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/image.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItem.css
var wishlistItem = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItem.css");
var wishlistItem_default = /*#__PURE__*/__webpack_require__.n(wishlistItem);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItem.css

            

var wishlistItem_options = {"injectType":"styleTag"};

wishlistItem_options.insert = "head";
wishlistItem_options.singleton = false;

var wishlistItem_update = injectStylesIntoStyleTag_default()(wishlistItem_default.a, wishlistItem_options);



/* harmony default export */ var WishlistPage_wishlistItem = (wishlistItem_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItem.js
var wishlistItem_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const WishlistItem = props => {
  wishlistItem_s();

  const {
    item
  } = props;
  const {
    configurable_options: configurableOptions = [],
    product
  } = item;
  const {
    name,
    price_range: priceRange,
    stock_status: stockStatus
  } = product;
  const {
    maximum_price: maximumPrice
  } = priceRange;
  const {
    final_price: finalPrice
  } = maximumPrice;
  const {
    currency,
    value: unitPrice
  } = finalPrice;
  const talonProps = Object(useWishlistItem["a" /* useWishlistItem */])(props);
  const {
    addToCartButtonProps,
    handleRemoveProductFromWishlist,
    hasError,
    isRemovalInProgress,
    isSupportedProductType
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  Object(react["useEffect"])(() => {
    if (hasError) {
      addToast({
        type: 'error',
        message: formatMessage({
          id: 'wishlistItem.addToCartError',
          defaultMessage: 'Something went wrong. Please refresh and try again.'
        }),
        timeout: 5000
      });
    }
  }, [addToast, formatMessage, hasError]);
  const classes = Object(shallowMerge["a" /* default */])(WishlistPage_wishlistItem, props.classes);
  const optionElements = Object(react["useMemo"])(() => {
    return configurableOptions.map(option => {
      const {
        id,
        option_label: optionLabel,
        value_label: valueLabel
      } = option;
      const optionString = `${optionLabel} : ${valueLabel}`;
      return react_default.a.createElement("span", {
        className: classes.option,
        key: id
      }, optionString);
    });
  }, [classes.option, configurableOptions]);

  const imageProps = _objectSpread({
    classes: {
      image: stockStatus === 'OUT_OF_STOCK' ? classes.image_disabled : classes.image
    }
  }, talonProps.imageProps);

  const removeProductAriaLabel = formatMessage({
    id: 'wishlistItem.removeAriaLabel',
    defaultMessage: 'Remove Product from whislist'
  });
  const rootClass = isRemovalInProgress ? classes.root_disabled : classes.root;
  const addToCart = isSupportedProductType ? react_default.a.createElement("button", _extends({
    className: classes.addToCart
  }, addToCartButtonProps), formatMessage({
    id: 'wishlistItem.addToCart',
    defaultMessage: 'Add to Cart'
  })) : null;
  return react_default.a.createElement("div", {
    className: rootClass
  }, react_default.a.createElement(Image_image["a" /* default */], imageProps), react_default.a.createElement("div", {
    className: classes.actionWrap
  }, react_default.a.createElement("span", {
    className: classes.name
  }, name), ' ', react_default.a.createElement("button", {
    className: classes.deleteItem,
    onClick: handleRemoveProductFromWishlist,
    "aria-label": removeProductAriaLabel
  }, react_default.a.createElement(icon["a" /* default */], {
    size: 16,
    src: trash_2["a" /* default */]
  }))), react_default.a.createElement("div", {
    className: classes.priceContainer
  }, react_default.a.createElement(price["a" /* default */], {
    currencyCode: currency,
    value: unitPrice
  })), optionElements, addToCart);
};

wishlistItem_s(WishlistItem, "dgLFYF9W1jYs+63unV83esNHZ/I=", false, function () {
  return [useWishlistItem["a" /* useWishlistItem */], useIntl["a" /* default */], useToasts["a" /* useToasts */], shallowMerge["a" /* default */]];
});

_c = WishlistItem;
/* harmony default export */ var components_WishlistPage_wishlistItem = (WishlistItem);

var _c;

$RefreshReg$(_c, "WishlistItem");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.js + 3 modules
var addToCartDialog = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItems.js
var wishlistItems_s = $RefreshSig$();








const WishlistItems = props => {
  wishlistItems_s();

  const {
    items,
    wishlistId
  } = props;
  const talonProps = Object(useWishlistItems["a" /* useWishlistItems */])();
  const {
    activeAddToCartItem,
    handleCloseAddToCartDialog,
    handleOpenAddToCartDialog
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(WishlistPage_wishlistItems, props.classes);
  const itemElements = Object(react["useMemo"])(() => {
    return items.map(item => {
      return react_default.a.createElement(components_WishlistPage_wishlistItem, {
        key: item.id,
        item: item,
        onOpenAddToCartDialog: handleOpenAddToCartDialog,
        wishlistId: wishlistId
      });
    });
  }, [handleOpenAddToCartDialog, items, wishlistId]);
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: classes.root
  }, itemElements), react_default.a.createElement(addToCartDialog["a" /* default */], {
    item: activeAddToCartItem,
    onClose: handleCloseAddToCartDialog
  }));
};

wishlistItems_s(WishlistItems, "OPp8g123+AYv+O6tB2oz5UAv7/0=", false, function () {
  return [useWishlistItems["a" /* useWishlistItems */], shallowMerge["a" /* default */]];
});

wishlistItems_c = WishlistItems;
/* harmony default export */ var components_WishlistPage_wishlistItems = (WishlistItems);

var wishlistItems_c;

$RefreshReg$(wishlistItems_c, "WishlistItems");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlist.css
var WishlistPage_wishlist = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlist.css");
var wishlist_default = /*#__PURE__*/__webpack_require__.n(WishlistPage_wishlist);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlist.css

            

var wishlist_options = {"injectType":"styleTag"};

wishlist_options.insert = "head";
wishlist_options.singleton = false;

var wishlist_update = injectStylesIntoStyleTag_default()(wishlist_default.a, wishlist_options);



/* harmony default export */ var components_WishlistPage_wishlist = (wishlist_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/actionMenu.js
/**
 * Action Menu for wishlist is an EE-only feature.
 * Here in CE, don't render the Action Menu at all.
 */
/* harmony default export */ var actionMenu = (() => {
  return null;
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlist.js
var wishlist_s = $RefreshSig$();













/**
 * A single wishlist container.
 *
 * @param {Object} props.data the data for this wishlist
 * @param {boolean} props.shouldRenderVisibilityToggle whether or not to render the visiblity toggle
 * @param {boolean} props.isCollapsed whether or not is the whislist unfolded
 */

const Wishlist = props => {
  wishlist_s();

  const {
    data,
    shouldRenderVisibilityToggle,
    isCollapsed
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const {
    id,
    items_count: itemsCount,
    name,
    visibility
  } = data;
  const talonProps = Object(useWishlist["a" /* useWishlist */])({
    id,
    itemsCount,
    isCollapsed
  });
  const {
    handleContentToggle,
    isOpen,
    items,
    isLoading,
    isFetchingMore,
    handleLoadMore
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(components_WishlistPage_wishlist, props.classes);
  const contentClass = isOpen ? classes.content : classes.content_hidden;
  const contentToggleIconSrc = isOpen ? chevron_up["a" /* default */] : chevron_down["a" /* default */];
  const contentToggleIcon = react_default.a.createElement(icon["a" /* default */], {
    src: contentToggleIconSrc,
    size: 24
  });
  const itemsCountMessage = itemsCount && isOpen ? formatMessage({
    id: 'wishlist.itemCountOpen',
    defaultMessage: 'Showing {currentCount} of {count} items in this list'
  }, {
    currentCount: items.length,
    count: itemsCount
  }) : formatMessage({
    id: 'wishlist.itemCountClosed',
    defaultMessage: `You have {count} {count, plural,
                        one {item}
                        other {items}
                      } in this list`
  }, {
    count: itemsCount
  });
  const loadMoreButton = items && items.length < itemsCount ? react_default.a.createElement("div", null, react_default.a.createElement(Button_button["a" /* default */], {
    className: classes.loadMore,
    disabled: isFetchingMore,
    onClick: handleLoadMore
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'wishlist.loadMore',
    defaultMessage: 'Load more'
  }))) : null;
  const contentMessageElement = itemsCount ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(components_WishlistPage_wishlistItems, {
    items: items,
    wishlistId: id
  }), loadMoreButton) : react_default.a.createElement("p", {
    className: classes.emptyListText
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'wishlist.emptyListText',
    defaultMessage: 'There are currently no items in this list'
  }));
  const wishlistName = name ? react_default.a.createElement("div", {
    className: classes.nameContainer
  }, react_default.a.createElement("h2", {
    className: classes.name
  }, name)) : react_default.a.createElement("div", {
    className: classes.nameContainer
  }, react_default.a.createElement("h2", {
    className: classes.name
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'wishlist.name',
    defaultMessage: 'Wish List'
  })));

  if (isLoading) {
    return react_default.a.createElement("div", {
      className: classes.root
    }, react_default.a.createElement("div", {
      className: classes.header
    }, wishlistName, " ", itemsCountMessage, react_default.a.createElement("div", {
      className: classes.buttonsContainer
    }, react_default.a.createElement(actionMenu, {
      id: id,
      name: name,
      visibility: visibility
    }))), react_default.a.createElement(indicator["a" /* default */], null));
  }

  const visibilityToggleClass = shouldRenderVisibilityToggle ? classes.visibilityToggle : classes.visibilityToggle_hidden;
  const buttonsContainer = id ? react_default.a.createElement("div", {
    className: classes.buttonsContainer
  }, react_default.a.createElement(actionMenu, {
    id: id,
    name: name,
    visibility: visibility
  }), react_default.a.createElement("button", {
    className: visibilityToggleClass,
    onClick: handleContentToggle,
    type: "button"
  }, contentToggleIcon)) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.header
  }, wishlistName, react_default.a.createElement("div", {
    className: classes.itemsCountContainer
  }, itemsCountMessage), buttonsContainer), react_default.a.createElement("div", {
    className: contentClass
  }, contentMessageElement));
};

wishlist_s(Wishlist, "IfC3HcQV/rvRG1HwCAkx3nMKehE=", false, function () {
  return [useIntl["a" /* default */], useWishlist["a" /* useWishlist */], shallowMerge["a" /* default */]];
});

wishlist_c = Wishlist;
Wishlist.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    header: prop_types["string"],
    content: prop_types["string"],
    content_hidden: prop_types["string"],
    emptyListText: prop_types["string"],
    name: prop_types["string"],
    nameContainer: prop_types["string"],
    visibilityToggle: prop_types["string"],
    visibilityToggle_hidden: prop_types["string"],
    visibility: prop_types["string"],
    buttonsContainer: prop_types["string"],
    loadMore: prop_types["string"]
  }),
  shouldRenderVisibilityToggle: prop_types["bool"],
  isCollapsed: prop_types["bool"],
  data: Object(prop_types["shape"])({
    id: prop_types["int"],
    items_count: prop_types["int"],
    name: prop_types["string"],
    visibility: prop_types["string"]
  })
};
Wishlist.defaultProps = {
  data: {
    items_count: 0,
    items_v2: []
  }
};
/* harmony default export */ var lib_components_WishlistPage_wishlist = (Wishlist);

var wishlist_c;

$RefreshReg$(wishlist_c, "Wishlist");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistPage.css
var wishlistPage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistPage.css");
var wishlistPage_default = /*#__PURE__*/__webpack_require__.n(wishlistPage);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistPage.css

            

var wishlistPage_options = {"injectType":"styleTag"};

wishlistPage_options.insert = "head";
wishlistPage_options.singleton = false;

var wishlistPage_update = injectStylesIntoStyleTag_default()(wishlistPage_default.a, wishlistPage_options);



/* harmony default export */ var WishlistPage_wishlistPage = (wishlistPage_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/createWishlist.js
const CreateWishlist = () => null;

createWishlist_c = CreateWishlist;
/* harmony default export */ var createWishlist = (CreateWishlist);

var createWishlist_c;

$RefreshReg$(createWishlist_c, "CreateWishlist");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistPage.js
var wishlistPage_s = $RefreshSig$();











const WishlistPage = props => {
  wishlistPage_s();

  const talonProps = useWishlistPage();
  const {
    errors,
    loading,
    shouldRenderVisibilityToggle,
    wishlists
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const error = errors.get('getCustomerWishlistQuery');
  const classes = Object(shallowMerge["a" /* default */])(WishlistPage_wishlistPage, props.classes);
  const WISHLIST_DISABLED_MESSAGE = formatMessage({
    id: 'wishlistPage.wishlistDisabledMessage',
    defaultMessage: 'The wishlist is not currently available.'
  });
  const wishlistElements = Object(react["useMemo"])(() => {
    if (wishlists.length === 0) {
      return react_default.a.createElement(lib_components_WishlistPage_wishlist, null);
    }

    return wishlists.map((wishlist, index) => react_default.a.createElement(lib_components_WishlistPage_wishlist, {
      key: wishlist.id,
      isCollapsed: index !== 0,
      data: wishlist,
      shouldRenderVisibilityToggle: shouldRenderVisibilityToggle
    }));
  }, [shouldRenderVisibilityToggle, wishlists]);

  if (loading && !error) {
    return LoadingIndicator_static["a" /* default */];
  }

  let content;

  if (error) {
    const derivedErrorMessage = Object(deriveErrorMessage["a" /* deriveErrorMessage */])([error]);
    const errorElement = derivedErrorMessage === WISHLIST_DISABLED_MESSAGE ? react_default.a.createElement("p", null, react_default.a.createElement(message["a" /* default */], {
      id: 'wishlistPage.disabledMessage',
      defaultMessage: 'Sorry, this feature has been disabled.'
    })) : react_default.a.createElement("p", {
      className: classes.fetchError
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'wishlistPage.fetchErrorMessage',
      defaultMessage: 'Something went wrong. Please refresh and try again.'
    }));
    content = react_default.a.createElement("div", {
      className: classes.errorContainer
    }, errorElement);
  } else {
    content = react_default.a.createElement(react["Fragment"], null, wishlistElements, react_default.a.createElement(createWishlist, null));
  }

  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("h1", {
    className: classes.heading
  }, react_default.a.createElement(message["a" /* default */], {
    values: {
      count: wishlists.length
    },
    id: 'wishlistPage.headingText',
    defaultMessage: 'Favorites Lists'
  })), content);
};

wishlistPage_s(WishlistPage, "PqeRVngJZMr+fGz2I0zVDtbSRDs=", false, function () {
  return [useWishlistPage, useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

wishlistPage_c = WishlistPage;
/* harmony default export */ var components_WishlistPage_wishlistPage = (WishlistPage);

var wishlistPage_c;

$RefreshReg$(wishlistPage_c, "WishlistPage");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/WishlistPage/index.js


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlist.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlist.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");

// Module
exports.push([module.i, ".wishlist-root-2Vd {\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    display: grid;\n    padding: 2rem;\n    row-gap: 2rem;\n}\n\n.wishlist-header-2zo {\n    align-items: center;\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: space-between;\n}\n\n.wishlist-nameContainer-3pj {\n    align-items: center;\n    gap: 0.5rem 1rem;\n    display: grid;\n    grid-auto-flow: column;\n}\n\n.wishlist-emptyListText-1TI {\n    text-align: center;\n    padding: 2rem 0;\n}\n\n.wishlist-name-j99 {\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.wishlist-buttonsContainer-1Yb {\n    align-items: center;\n    column-gap: 1rem;\n    display: grid;\n    grid-auto-flow: column;\n}\n\n.wishlist-content_hidden-26m {\n    display: none;\n}\n\n.wishlist-visibilityToggle_hidden-2Kp {\n    display: none;\n}\n\n.wishlist-loadMore-AKQ {\n    margin: 2rem auto;\n    display: block;\n    min-width: 20rem;\n}\n\n@media (max-width: 768px) {\n    .wishlist-root-2Vd {\n        padding: 1.5rem;\n    }\n\n    .wishlist-header-2zo {\n        grid-template-rows: 1fr 1fr;\n        row-gap: 0.5rem;\n    }\n\n    .wishlist-nameContainer-3pj {\n        grid-auto-flow: row;\n    }\n\n    .wishlist-buttonsContainer-1Yb {\n        justify-self: end;\n    }\n\n    .wishlist-itemsCountContainer-2Bd {\n        grid-column-end: span 2;\n        justify-self: center;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "wishlist-root-2Vd",
	"header": "wishlist-header-2zo",
	"nameContainer": "wishlist-nameContainer-3pj",
	"emptyListText": "wishlist-emptyListText-1TI",
	"name": "wishlist-name-j99",
	"buttonsContainer": "wishlist-buttonsContainer-1Yb",
	"content_hidden": "wishlist-content_hidden-26m",
	"visibilityToggle_hidden": "wishlist-visibilityToggle_hidden-2Kp",
	"loadMore": "wishlist-loadMore-AKQ " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_lowPriority"] + "",
	"itemsCountContainer": "wishlist-itemsCountContainer-2Bd"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItem.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItem.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");

// Module
exports.push([module.i, ".wishlistItem-root-2lw {\n    align-content: start;\n    display: grid;\n    row-gap: 0.5rem;\n}\n\n.wishlistItem-root_disabled-1rb {\n    opacity: 0.5;\n}\n\n.wishlistItem-name-eaP {\n    font-size: var(--venia-typography-detail-XL-fontSize);\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.wishlistItem-detail-pOY {\n    color: rgb(var(--venia-global-color-text-alt));\n    font-size: var(--venia-typography-detail-L-fontSize);\n}\n\n.wishlistItem-option-2S9 {\n}\n\n.wishlistItem-outOfStock-3Mb {\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-typography-detail-L-fontSize);\n}\n\n.wishlistItem-priceContainer-pIH {\n    font-size: var(--venia-typography-detail-XL-fontSize);\n}\n\n.wishlistItem-image-FLy {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.wishlistItem-image_disabled-1-c {\n    opacity: 0.6;\n}\n\n.wishlistItem-addToCart-2vh {\n    justify-self: left;\n    margin-top: 0.25rem;\n}\n\n.wishlistItem-deleteItem-PEX {\n    margin: 0 0.5rem 0 1rem;\n    justify-self: right;\n}\n\n.wishlistItem-actionWrap-19K {\n    display: flex;\n    align-items: flex-start;\n}\n\n.wishlistItem-moreActions-1HH {\n    align-items: center;\n    background-color: rgb(var(--venia-global-color-gray-100));\n    border-radius: 50%;\n    /**\n        Hide actions menu until PWA-1683\n\n        display: inline-flex;\n     */\n    display: none;\n    padding: 0.125rem;\n}\n\n@media (max-width: 480px) {\n    .wishlistItem-addToCart-2vh {\n        min-width: 100%;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "wishlistItem-root-2lw",
	"root_disabled": "wishlistItem-root_disabled-1rb wishlistItem-root-2lw",
	"name": "wishlistItem-name-eaP",
	"detail": "wishlistItem-detail-pOY",
	"option": "wishlistItem-option-2S9 wishlistItem-detail-pOY",
	"outOfStock": "wishlistItem-outOfStock-3Mb",
	"priceContainer": "wishlistItem-priceContainer-pIH",
	"image": "wishlistItem-image-FLy",
	"image_disabled": "wishlistItem-image_disabled-1-c wishlistItem-image-FLy",
	"addToCart": "wishlistItem-addToCart-2vh " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_highPriority"] + "",
	"deleteItem": "wishlistItem-deleteItem-PEX",
	"actionWrap": "wishlistItem-actionWrap-19K",
	"moreActions": "wishlistItem-moreActions-1HH"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItems.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistItems.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".wishlistItems-root-2Hs {\n    display: grid;\n    grid-gap: 2rem;\n    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));\n}\n\n@media (max-width: 480px) {\n    .wishlistItems-root-2Hs {\n        column-gap: 1rem;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "wishlistItems-root-2Hs"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistPage.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/WishlistPage/wishlistPage.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".wishlistPage-root-3TS {\n    display: grid;\n    padding: 2rem 3rem;\n    row-gap: 2rem;\n}\n\n.wishlistPage-heading-1bG {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.wishlistPage-errorContainer-2DL {\n    justify-self: center;\n}\n\n.wishlistPage-fetchError-2hL {\n    border-left: 4px solid rgb(var(--venia-global-color-error));\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-typography-body-S-fontSize);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    padding: 0.625rem 0 0.625rem 1rem;\n}\n\n@media (max-width: 960px) {\n    .wishlistPage-root-3TS {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n        row-gap: 1rem;\n    }\n\n    .wishlistPage-heading-1bG {\n        padding-bottom: 1rem;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "wishlistPage-root-3TS",
	"heading": "wishlistPage-heading-1bG",
	"errorContainer": "wishlistPage-errorContainer-2DL",
	"fetchError": "wishlistPage-fetchError-2hL"
};

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/chevron-down.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/chevron-down.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var ChevronDown = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
});
_c2 = ChevronDown;
ChevronDown.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
ChevronDown.displayName = 'ChevronDown';
/* harmony default export */ __webpack_exports__["a"] = (ChevronDown);

var _c, _c2;

$RefreshReg$(_c, "ChevronDown$forwardRef");
$RefreshReg$(_c2, "ChevronDown");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/chevron-up.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/chevron-up.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var ChevronUp = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "18 15 12 9 6 15"
  }));
});
_c2 = ChevronUp;
ChevronUp.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
ChevronUp.displayName = 'ChevronUp';
/* harmony default export */ __webpack_exports__["a"] = (ChevronUp);

var _c, _c2;

$RefreshReg$(_c, "ChevronUp$forwardRef");
$RefreshReg$(_c2, "ChevronUp");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/trash-2.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/trash-2.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var Trash2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
});
_c2 = Trash2;
Trash2.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
Trash2.displayName = 'Trash2';
/* harmony default export */ __webpack_exports__["a"] = (Trash2);

var _c, _c2;

$RefreshReg$(_c, "Trash2$forwardRef");
$RefreshReg$(_c2, "Trash2");

/***/ })

}]);
//# sourceMappingURL=48.0706c4416c38dc888fae.js.map