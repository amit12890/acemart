(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/@magento/peregrine/lib/Price/price.js":
/*!************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/Price/price.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_intlPatches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/intlPatches */ "./node_modules/@magento/peregrine/lib/util/intlPatches.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
var _s = $RefreshSig$();





/**
 * @deprecated - replaced by to @magento/venia-ui/lib/components/Price
 *
 * The **Price** component is used anywhere a price needs to be displayed.
 *
 * Formatting of prices and currency symbol selection is handled entirely by the ECMAScript Internationalization API available in modern browsers.
 *
 * A [polyfill][] is required for any JavaScript runtime that does not have [Intl.NumberFormat.prototype.formatToParts][].
 *
 * [polyfill]: https://www.npmjs.com/package/intl
 * [Intl.NumberFormat.prototype.formatToParts]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
 */

const Price = props => {
  _s();

  const {
    locale
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  const {
    value,
    currencyCode,
    classes
  } = props; // If the optional locale prop is not provided or is undefined,
  // the runtime's default locale is used in the Intl.NumberFormat() constructor.

  const parts = _util_intlPatches__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].toParts.call(new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  }), value);
  const children = parts.map((part, i) => {
    const partClass = classes[part.type];
    const key = `${i}-${part.value}`;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key,
      className: partClass
    }, part.value);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children);
};

_s(Price, "u+ffHrbWNr68zJxBTxQngey+vxo=", false, function () {
  return [react_intl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]];
});

_c = Price;
Price.propTypes = {
  /**
   * Class names to use when styling this component
   */
  classes: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
    integer: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
    decimal: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
    fraction: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
  }),

  /**
   * The numeric price
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,

  /**
   * A string with any of the currency code supported by Intl.NumberFormat
   */
  currencyCode: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired
};
Price.defaultProps = {
  classes: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Price);

var _c;

$RefreshReg$(_c, "Price");

/***/ }),

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

/***/ "./node_modules/@magento/peregrine/lib/talons/MiniCart/useItem.js":
/*!************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/MiniCart/useItem.js ***!
  \************************************************************************/
/*! exports provided: useItem */
/*! exports used: useItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const useItem = props => {
  _s();

  const {
    id,
    handleRemoveItem
  } = props;
  const [isDeleting, setIsDeleting] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const removeItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setIsDeleting(true);
    handleRemoveItem(id);
  }, [handleRemoveItem, id]);
  return {
    isDeleting,
    removeItem
  };
};

_s(useItem, "IPfNS435kLH6DWjpu915a+TP5bw=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/MiniCart/useMiniCart.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/MiniCart/useMiniCart.js + 1 modules ***!
  \****************************************************************************************/
/*! exports provided: useMiniCart */
/*! exports used: useMiniCart */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useMiniCart; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js
var deriveErrorMessage = __webpack_require__("./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCart.gql.js

const GET_CONFIGURABLE_THUMBNAIL_SOURCE = client["gql"]`
    query getConfigurableThumbnailSource {
        storeConfig {
            id
            configurable_thumbnail_source
        }
    }
`;
/* harmony default export */ var miniCart_gql = ({
  getConfigurableThumbnailSource: GET_CONFIGURABLE_THUMBNAIL_SOURCE
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/MiniCart/useMiniCart.js
var _s = $RefreshSig$();








/**
 *
 * @param {Function} props.setIsOpen - Function to toggle the mini cart
 * @param {DocumentNode} props.operations.miniCartQuery - Query to fetch mini cart data
 * @param {DocumentNode} props.operations.removeItemMutation - Mutation to remove an item from cart
 *
 * @returns {
 *      closeMiniCart: Function,
 *      errorMessage: String,
 *      handleEditCart: Function,
 *      handleProceedToCheckout: Function,
 *      handleRemoveItem: Function,
 *      loading: Boolean,
 *      productList: Array<>,
 *      subTotal: Number,
 *      totalQuantity: Number
 *      configurableThumbnailSource: String
 *  }
 */

const useMiniCart = props => {
  _s();

  const {
    setIsOpen
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(miniCart_gql, props.operations);
  const {
    removeItemMutation,
    miniCartQuery,
    getConfigurableThumbnailSource
  } = operations;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const history = Object(react_router["g" /* useHistory */])();
  const {
    data: miniCartData,
    loading: miniCartLoading
  } = Object(client["useQuery"])(miniCartQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: {
      cartId
    },
    skip: !cartId
  });
  const {
    data: configurableThumbnailSourceData
  } = Object(client["useQuery"])(getConfigurableThumbnailSource, {
    fetchPolicy: 'cache-and-network'
  });
  const configurableThumbnailSource = Object(react["useMemo"])(() => {
    if (configurableThumbnailSourceData) {
      return configurableThumbnailSourceData.storeConfig.configurable_thumbnail_source;
    }
  }, [configurableThumbnailSourceData]);
  const [removeItem, {
    loading: removeItemLoading,
    called: removeItemCalled,
    error: removeItemError
  }] = Object(client["useMutation"])(removeItemMutation);
  const totalQuantity = Object(react["useMemo"])(() => {
    if (!miniCartLoading && miniCartData) {
      return miniCartData.cart.total_quantity;
    }
  }, [miniCartData, miniCartLoading]);
  const subTotal = Object(react["useMemo"])(() => {
    if (!miniCartLoading && miniCartData) {
      return miniCartData.cart.prices.subtotal_excluding_tax;
    }
  }, [miniCartData, miniCartLoading]);
  const productList = Object(react["useMemo"])(() => {
    if (!miniCartLoading && miniCartData) {
      return miniCartData.cart.items;
    }
  }, [miniCartData, miniCartLoading]);
  const closeMiniCart = Object(react["useCallback"])(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const handleRemoveItem = Object(react["useCallback"])(async id => {
    try {
      await removeItem({
        variables: {
          cartId,
          itemId: id
        }
      });
    } catch (e) {// Error is logged by apollo link - no need to double log.
    }
  }, [cartId, removeItem]);
  const handleProceedToCheckout = Object(react["useCallback"])(() => {
    setIsOpen(false);
    history.push('/checkout');
  }, [history, setIsOpen]);
  const handleEditCart = Object(react["useCallback"])(() => {
    setIsOpen(false);
    history.push('/cart');
  }, [history, setIsOpen]);
  const derivedErrorMessage = Object(react["useMemo"])(() => Object(deriveErrorMessage["a" /* deriveErrorMessage */])([removeItemError]), [removeItemError]);
  return {
    closeMiniCart,
    errorMessage: derivedErrorMessage,
    handleEditCart,
    handleProceedToCheckout,
    handleRemoveItem,
    loading: miniCartLoading || removeItemCalled && removeItemLoading,
    productList,
    subTotal,
    totalQuantity,
    configurableThumbnailSource
  };
};

_s(useMiniCart, "6d0oTh3oFxREuuycDBYoPJNyKq0=", false, function () {
  return [cart["b" /* useCartContext */], react_router["g" /* useHistory */], client["useQuery"], client["useQuery"], client["useMutation"]];
});

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

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/lock.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/lock.js ***!
  \*******************************************************/
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



var Lock = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }));
});
_c2 = Lock;
Lock.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
Lock.displayName = 'Lock';
/* harmony default export */ __webpack_exports__["a"] = (Lock);

var _c, _c2;

$RefreshReg$(_c, "Lock$forwardRef");
$RefreshReg$(_c2, "Lock");

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
//# sourceMappingURL=50.27543b2525123487f06b.js.map