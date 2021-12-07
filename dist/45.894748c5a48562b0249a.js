(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

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

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethodsFragments.gql.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethodsFragments.gql.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: AvailableShippingMethodsCartFragment, SelectedShippingMethodCartFragment, ShippingMethodsCartFragment */
/*! exports used: AvailableShippingMethodsCartFragment, SelectedShippingMethodCartFragment, ShippingMethodsCartFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableShippingMethodsCartFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectedShippingMethodCartFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ShippingMethodsCartFragment; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

/**
 * WARNING: This fragment can cause slowdowns on the network request because it
 * causes the backend to make remote queries to carriers for real-time data.
 * It is intentionally not included in the CartPageFragment. Make sure you are
 * conscious about the side effects when including it in queries and mutations.
 */

const AvailableShippingMethodsCartFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment AvailableShippingMethodsCartFragment on Cart {
        id
        shipping_addresses {
            available_shipping_methods {
                amount {
                    currency
                    value
                }
                available
                carrier_code
                carrier_title
                method_code
                method_title
            }
            street
        }
    }
`;
const SelectedShippingMethodCartFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment SelectedShippingMethodCartFragment on Cart {
        id
        shipping_addresses {
            selected_shipping_method {
                carrier_code
                method_code
            }
            street
        }
    }
`;
const ShippingMethodsCartFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment ShippingMethodsCartFragment on Cart {
        id
        ...AvailableShippingMethodsCartFragment
        ...SelectedShippingMethodCartFragment
        shipping_addresses {
            country {
                code
            }
            postcode
            region {
                code
            }
            street
        }
    }
    ${AvailableShippingMethodsCartFragment}
    ${SelectedShippingMethodCartFragment}
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

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.js + 1 modules ***!
  \*******************************************************************************************************/
/*! exports provided: QuantityFields, default */
/*! exports used: QuantityFields, default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/useQuantity.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/minus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/plus.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ QuantityFields; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/minus.js
var minus = __webpack_require__("./node_modules/react-feather/dist/icons/minus.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/plus.js
var plus = __webpack_require__("./node_modules/react-feather/dist/icons/plus.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/useQuantity.js
var useQuantity = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/useQuantity.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules
var Field_message = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/message.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.css
var quantity = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.css");
var quantity_default = /*#__PURE__*/__webpack_require__.n(quantity);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(quantity_default.a, options);



/* harmony default export */ var ProductListing_quantity = (quantity_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.js
var _s = $RefreshSig$();












const QuantityFields = props => {
  _s();

  const {
    initialValue,
    itemId,
    label,
    min,
    onChange,
    message
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(ProductListing_quantity, props.classes);
  const iconClasses = {
    root: classes.icon
  };
  const talonProps = Object(useQuantity["a" /* useQuantity */])({
    initialValue,
    min,
    onChange
  });
  const {
    isDecrementDisabled,
    isIncrementDisabled,
    handleBlur,
    handleDecrement,
    handleIncrement,
    maskInput
  } = talonProps;
  const errorMessage = message ? react_default.a.createElement(Field_message["a" /* default */], null, message) : null;
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("label", {
    className: classes.label,
    htmlFor: itemId
  }, label), react_default.a.createElement("button", {
    "aria-label": formatMessage({
      id: 'quantity.buttonDecrement',
      defaultMessage: 'Decrease Quantity'
    }),
    className: classes.button_decrement,
    disabled: isDecrementDisabled,
    onClick: handleDecrement,
    type: "button"
  }, react_default.a.createElement(icon["a" /* default */], {
    classes: iconClasses,
    src: minus["a" /* default */],
    size: 22
  })), react_default.a.createElement(textInput["a" /* default */], {
    "aria-label": formatMessage({
      id: 'quantity.input',
      defaultMessage: 'Item Quantity'
    }),
    classes: {
      input: classes.input
    },
    field: "quantity",
    id: itemId,
    inputMode: "numeric",
    mask: maskInput,
    min: min,
    onBlur: handleBlur,
    pattern: "[0-9]*"
  }), react_default.a.createElement("button", {
    "aria-label": formatMessage({
      id: 'quantity.buttonIncrement',
      defaultMessage: 'Increase Quantity'
    }),
    className: classes.button_increment,
    disabled: isIncrementDisabled,
    onClick: handleIncrement,
    type: "button"
  }, react_default.a.createElement(icon["a" /* default */], {
    classes: iconClasses,
    src: plus["a" /* default */],
    size: 20
  }))), errorMessage);
};

_s(QuantityFields, "OMVIh3GP1FI57JH3tGrQUl9O/Gg=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */], useQuantity["a" /* useQuantity */]];
});

_c = QuantityFields;

const Quantity = props => {
  return react_default.a.createElement(esm["c" /* Form */], {
    initialValues: {
      quantity: props.initialValue
    }
  }, react_default.a.createElement(QuantityFields, props));
};

_c2 = Quantity;
Quantity.propTypes = {
  initialValue: prop_types["number"],
  itemId: prop_types["string"],
  label: prop_types["string"],
  min: prop_types["number"],
  onChange: prop_types["func"],
  message: prop_types["string"]
};
Quantity.defaultProps = {
  label: 'Quantity',
  min: 0,
  initialValue: 1,
  onChange: () => {}
};
QuantityFields.defaultProps = {
  min: 0,
  initialValue: 1,
  onChange: () => {}
};
/* harmony default export */ var CartPage_ProductListing_quantity = __webpack_exports__["b"] = (Quantity);

var _c, _c2;

$RefreshReg$(_c, "QuantityFields");
$RefreshReg$(_c2, "Quantity");

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

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/index.js + 19 modules ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useEventListener.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/configuredVariant.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/makeUrl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Accordion/section.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethodsFragments.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadios.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/giftCardSection.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.js because of ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Head/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/StockStatusMessage/stockStatusMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/check.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/edit-2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/heart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/more-vertical.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/trash.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/product.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListing.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/cartPage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/kebab.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/section.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_CartPage_cartPage; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__("./node_modules/react-feather/dist/icons/check.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/useCartPage.js
var _s = $RefreshSig$();




/**
 * This talon contains logic for a cart page component.
 * It performs effects and returns prop data for rendering the component.
 *
 * This talon performs the following effects:
 *
 * - Manages the updating state of the cart while cart details data is being fetched
 *
 * @function
 *
 * @param {Object} props
 * @param {CartPageQueries} props.queries GraphQL queries
 *
 * @returns {CartPageTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useCartPage } from '@magento/peregrine/lib/talons/CartPage/useCartPage';
 */

const useCartPage = props => {
  _s();

  const {
    queries: {
      getCartDetails
    }
  } = props;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const [isCartUpdating, setIsCartUpdating] = Object(react["useState"])(false);
  const [wishlistSuccessProps, setWishlistSuccessProps] = Object(react["useState"])(null);
  const [fetchCartDetails, {
    called,
    data,
    loading
  }] = Object(client["useLazyQuery"])(getCartDetails, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  });
  const hasItems = !!(data && data.cart.total_quantity);
  const shouldShowLoadingIndicator = called && loading && !hasItems;
  const cartItems = Object(react["useMemo"])(() => {
    return data && data.cart.items || [];
  }, [data]);
  const onAddToWishlistSuccess = Object(react["useCallback"])(successToastProps => {
    setWishlistSuccessProps(successToastProps);
  }, []);
  Object(react["useEffect"])(() => {
    if (!called && cartId) {
      fetchCartDetails({
        variables: {
          cartId
        }
      });
    } // Let the cart page know it is updating while we're waiting on network data.


    setIsCartUpdating(loading);
  }, [fetchCartDetails, called, cartId, loading]);
  return {
    cartItems,
    hasItems,
    isCartUpdating,
    fetchCartDetails,
    onAddToWishlistSuccess,
    setIsCartUpdating,
    shouldShowLoadingIndicator,
    wishlistSuccessProps
  };
};
/** JSDoc type definitions */

/**
 * GraphQL formatted string queries used in this talon.
 *
 * @typedef {Object} CartPageQueries
 *
 * @property {GraphQLAST} getCartDetails Query for getting the cart details.
 *
 * @see [cartPage.gql.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/cartPage.gql.js}
 * for queries used in Venia
 */

/**
 * Props data to use when rendering a cart page component.
 *
 * @typedef {Object} CartPageTalonProps
 *
 * @property {Array<Object>} cartItems An array of item objects in the cart.
 * @property {boolean} hasItems True if the cart has items. False otherwise.
 * @property {boolean} isCartUpdating True if the cart is updating. False otherwise.
 * @property {function} setIsCartUpdating Callback function for setting the updating state of the cart page.
 * @property {boolean} shouldShowLoadingIndicator True if the loading indicator should be rendered. False otherwise.
 */

_s(useCartPage, "CN/ucAxVSyqBH/3bsFIgmTGXEuA=", false, function () {
  return [cart["b" /* useCartContext */], client["useLazyQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js
var useToasts = __webpack_require__("./node_modules/@magento/peregrine/lib/Toasts/useToasts.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var Icon_icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Head/index.js
var Head = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Head/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js
var LoadingIndicator_static = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/StockStatusMessage/stockStatusMessage.js + 2 modules
var StockStatusMessage_stockStatusMessage = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/StockStatusMessage/stockStatusMessage.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js + 2 modules
var accordion = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Accordion/section.js + 1 modules
var section = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Accordion/section.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/giftCardSection.js
var giftCardSection = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/giftCardSection.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.css
var PriceAdjustments_priceAdjustments = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.css");
var priceAdjustments_default = /*#__PURE__*/__webpack_require__.n(PriceAdjustments_priceAdjustments);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.css

            

var priceAdjustments_options = {"injectType":"styleTag"};

priceAdjustments_options.insert = "head";
priceAdjustments_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(priceAdjustments_default.a, priceAdjustments_options);



/* harmony default export */ var CartPage_PriceAdjustments_priceAdjustments = (priceAdjustments_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.js
var priceAdjustments_s = $RefreshSig$();









const CouponCode = react_default.a.lazy(_c = () => Promise.all(/*! import() */[__webpack_require__.e(35), __webpack_require__.e(74)]).then(__webpack_require__.bind(null, /*! ./CouponCode */ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/index.js")));
_c2 = CouponCode;
const GiftOptions = react_default.a.lazy(_c3 = () => Promise.all(/*! import() */[__webpack_require__.e(32), __webpack_require__.e(66)]).then(__webpack_require__.bind(null, /*! ./GiftOptions */ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/index.js")));
_c4 = GiftOptions;
const ShippingMethods = react_default.a.lazy(_c5 = () => Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e(23), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, /*! ./ShippingMethods */ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/index.js")));
/**
 * PriceAdjustments is a child component of the CartPage component.
 * It renders the price adjustments forms for applying gift cards, coupons, and the shipping method.
 * All of which can adjust the cart total.
 *
 * @param {Object} props
 * @param {Function} props.setIsCartUpdating A callback function for setting the updating state of the cart.
 * @param {Object} props.classes CSS className overrides.
 * See [priceAdjustments.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import PriceAdjustments from '@magento/venia-ui/lib/components/CartPage/PriceAdjustments'
 */

_c6 = ShippingMethods;

const PriceAdjustments = props => {
  priceAdjustments_s();

  const classes = Object(shallowMerge["a" /* default */])(CartPage_PriceAdjustments_priceAdjustments, props.classes);
  const {
    setIsCartUpdating
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(accordion["a" /* default */], {
    canOpenMultiple: true
  }, react_default.a.createElement(section["a" /* default */], {
    id: 'shipping_method',
    title: formatMessage({
      id: 'priceAdjustments.shippingMethod',
      defaultMessage: 'Estimate your Shipping'
    })
  }, react_default.a.createElement(react["Suspense"], {
    fallback: react_default.a.createElement(indicator["a" /* default */], null)
  }, react_default.a.createElement(ShippingMethods, {
    setIsCartUpdating: setIsCartUpdating
  }))), react_default.a.createElement(section["a" /* default */], {
    id: 'coupon_code',
    title: formatMessage({
      id: 'priceAdjustments.couponCode',
      defaultMessage: 'Enter Coupon Code'
    })
  }, react_default.a.createElement(react["Suspense"], {
    fallback: react_default.a.createElement(indicator["a" /* default */], null)
  }, react_default.a.createElement(CouponCode, {
    setIsCartUpdating: setIsCartUpdating
  }))), react_default.a.createElement(giftCardSection["a" /* default */], {
    setIsCartUpdating: setIsCartUpdating
  }), react_default.a.createElement(section["a" /* default */], {
    id: 'gift_options',
    title: formatMessage({
      id: 'priceAdjustments.giftOptions',
      defaultMessage: 'See Gift Options'
    })
  }, react_default.a.createElement(react["Suspense"], {
    fallback: react_default.a.createElement(indicator["a" /* default */], null)
  }, react_default.a.createElement(GiftOptions, null)))));
};

priceAdjustments_s(PriceAdjustments, "VxVnK37plYgXvLp7c0yHActoCwA=", false, function () {
  return [shallowMerge["a" /* default */], useIntl["a" /* default */]];
});

_c7 = PriceAdjustments;
/* harmony default export */ var components_CartPage_PriceAdjustments_priceAdjustments = (PriceAdjustments);
PriceAdjustments.propTypes = {
  setIsCartUpdating: prop_types["func"]
};

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "CouponCode$React.lazy");
$RefreshReg$(_c2, "CouponCode");
$RefreshReg$(_c3, "GiftOptions$React.lazy");
$RefreshReg$(_c4, "GiftOptions");
$RefreshReg$(_c5, "ShippingMethods$React.lazy");
$RefreshReg$(_c6, "ShippingMethods");
$RefreshReg$(_c7, "PriceAdjustments");
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/productListing.gql.ce.js

const GET_WISHLIST_CONFIG = client["gql"]`
    query GetWishlistConfigForCartPageCE {
        storeConfig {
            id
            magento_wishlist_general_is_enabled
        }
    }
`;
/* harmony default export */ var productListing_gql_ce = ({
  getWishlistConfigQuery: GET_WISHLIST_CONFIG
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/useProductListing.js
var useProductListing_s = $RefreshSig$();






/**
 * This talon contains logic for a component that renders a list of products for a cart.
 * It performs effects and returns prop data to render the component on a cart page.
 *
 * This talon performs the following effects:
 *
 * - Fetch product listing data associated with the cart
 * - Log any GraphQL errors to the console
 *
 * @function
 *
 * @param {Object} props
 * @param {ProductListingQueries} props.queries GraphQL queries for getting product listing data.
 *
 * @returns {ProductListingTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useProductListing } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProductListing';
 */

const useProductListing = props => {
  useProductListing_s();

  const {
    queries: {
      getProductListing
    }
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(productListing_gql_ce, props.operations);
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const [activeEditItem, setActiveEditItem] = Object(react["useState"])(null);
  const [fetchProductListing, {
    called,
    data,
    error,
    loading
  }] = Object(client["useLazyQuery"])(getProductListing, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  });
  const {
    data: storeConfigData
  } = Object(client["useQuery"])(operations.getWishlistConfigQuery);
  const wishlistConfig = storeConfigData ? storeConfigData.storeConfig : {};
  Object(react["useEffect"])(() => {
    if (cartId) {
      fetchProductListing({
        variables: {
          cartId
        }
      });
    }
  }, [cartId, fetchProductListing]);
  let items = [];

  if (called && !error && !loading) {
    items = data.cart.items;
  }

  return {
    activeEditItem,
    isLoading: !!loading,
    items,
    setActiveEditItem,
    wishlistConfig
  };
};
/** JSDocs type definitions */

/**
 * GraphQL queries for getting product listing data.
 * This is a type used in the {@link useProductListing} talon.
 *
 * @typedef {Object} ProductListingQueries
 *
 * @property {GraphQLDocument} getProductListing Query to get the product list for a cart
 *
 * @see [productListingFragments.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js}
 * for the queries used in Venia
 */

/**
 * Object type returned by the {@link useProductListing} talon.
 * It provides props data for a component that renders a product list.
 *
 * @typedef {Object} ProductListingTalonProps
 *
 * @property {Object} activeEditItem The product item currently being edited
 * @property {boolean} isLoading True if the query to get the product listing is still in progress. False otherwise.
 * @property {Array<Object>} items A list of products in a cart
 * @property {function} setActiveEditItem Function for setting the current item to edit
 *
 */

useProductListing_s(useProductListing, "XjEPzvxybvrZImoRmX+eeDpkIaE=", false, function () {
  return [cart["b" /* useCartContext */], client["useLazyQuery"], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListing.css
var ProductListing_productListing = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListing.css");
var productListing_default = /*#__PURE__*/__webpack_require__.n(ProductListing_productListing);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListing.css

            

var productListing_options = {"injectType":"styleTag"};

productListing_options.insert = "head";
productListing_options.singleton = false;

var productListing_update = injectStylesIntoStyleTag_default()(productListing_default.a, productListing_options);



/* harmony default export */ var CartPage_ProductListing_productListing = (productListing_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/heart.js
var heart = __webpack_require__("./node_modules/react-feather/dist/icons/heart.js");

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/configuredVariant.js
var configuredVariant = __webpack_require__("./node_modules/@magento/peregrine/lib/util/configuredVariant.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js
var deriveErrorMessage = __webpack_require__("./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/product.gql.js

const GET_CONFIGURABLE_THUMBNAIL_SOURCE = client["gql"]`
    query getConfigurableThumbnailSource {
        storeConfig {
            id
            configurable_thumbnail_source
        }
    }
`;
/* harmony default export */ var product_gql = ({
  getConfigurableThumbnailSource: GET_CONFIGURABLE_THUMBNAIL_SOURCE
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/useProduct.js
var useProduct_s = $RefreshSig$();









/**
 * This talon contains logic for a product component used in a product listing component.
 * It performs effects and returns prop data for that component.
 *
 * This talon performs the following effects:
 *
 * - Manage the updating state of the cart while a product is being updated or removed
 *
 * @function
 *
 * @param {Object} props
 * @param {ProductItem} props.item Product item data
 * @param {ProductMutations} props.operations GraphQL mutations for a product in a cart
 * @param {function} props.setActiveEditItem Function for setting the actively editing item
 * @param {function} props.setIsCartUpdating Function for setting the updating state of the cart
 *
 * @return {ProductTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useProduct } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProduct';
 */

const useProduct = props => {
  useProduct_s();

  const {
    item,
    setActiveEditItem,
    setIsCartUpdating,
    wishlistConfig
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(product_gql, props.operations);
  const {
    removeItemMutation,
    updateItemQuantityMutation,
    getConfigurableThumbnailSource
  } = operations;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
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
  const flatProduct = flattenProduct(item, configurableThumbnailSource);
  const [removeItemFromCart, {
    called: removeItemCalled,
    error: removeItemError,
    loading: removeItemLoading
  }] = Object(client["useMutation"])(removeItemMutation);
  const [updateItemQuantity, {
    loading: updateItemLoading,
    error: updateError,
    called: updateItemCalled
  }] = Object(client["useMutation"])(updateItemQuantityMutation);
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])(); // Use local state to determine whether to display errors or not.
  // Could be replaced by a "reset mutation" function from apollo client.
  // https://github.com/apollographql/apollo-feature-requests/issues/170

  const [displayError, setDisplayError] = Object(react["useState"])(false);
  const isProductUpdating = Object(react["useMemo"])(() => {
    if (updateItemCalled || removeItemCalled) {
      return removeItemLoading || updateItemLoading;
    } else {
      return false;
    }
  }, [updateItemCalled, removeItemCalled, removeItemLoading, updateItemLoading]);
  const derivedErrorMessage = Object(react["useMemo"])(() => {
    return displayError && Object(deriveErrorMessage["a" /* deriveErrorMessage */])([updateError, removeItemError]) || '';
  }, [displayError, removeItemError, updateError]);
  const handleEditItem = Object(react["useCallback"])(() => {
    setActiveEditItem(item); // If there were errors from removing/updating the product, hide them
    // when we open the modal.

    setDisplayError(false);
  }, [item, setActiveEditItem]);
  const handleRemoveFromCart = Object(react["useCallback"])(async () => {
    try {
      await removeItemFromCart({
        variables: {
          cartId,
          itemId: item.id
        }
      });
    } catch (err) {
      // Make sure any errors from the mutation are displayed.
      setDisplayError(true);
    }
  }, [cartId, item.id, removeItemFromCart]);
  const handleUpdateItemQuantity = Object(react["useCallback"])(async quantity => {
    try {
      await updateItemQuantity({
        variables: {
          cartId,
          itemId: item.id,
          quantity
        }
      });
    } catch (err) {
      // Make sure any errors from the mutation are displayed.
      setDisplayError(true);
    }
  }, [cartId, item.id, updateItemQuantity]);
  Object(react["useEffect"])(() => {
    setIsCartUpdating(isProductUpdating); // Reset updating state on unmount

    return () => setIsCartUpdating(false);
  }, [setIsCartUpdating, isProductUpdating]);
  const addToWishlistProps = {
    afterAdd: handleRemoveFromCart,
    buttonText: () => formatMessage({
      id: 'product.saveForLater',
      defaultMessage: 'Save for later'
    }),
    item: {
      quantity: item.quantity,
      selected_options: item.configurable_options ? item.configurable_options.map(option => option.configurable_product_option_value_uid) : [],
      sku: item.product.sku
    },
    storeConfig: wishlistConfig
  };
  return {
    addToWishlistProps,
    errorMessage: derivedErrorMessage,
    handleEditItem,
    handleRemoveFromCart,
    handleUpdateItemQuantity,
    isEditable: !!flatProduct.options.length,
    product: flatProduct,
    isProductUpdating
  };
};

useProduct_s(useProduct, "JMUWkMgH2gD/wdeADjxNJbV+kK8=", false, function () {
  return [useIntl["a" /* default */], client["useQuery"], client["useMutation"], client["useMutation"], cart["b" /* useCartContext */]];
});

const flattenProduct = (item, configurableThumbnailSource) => {
  const {
    configurable_options: options = [],
    prices,
    product,
    quantity
  } = item;
  const configured_variant = Object(configuredVariant["a" /* default */])(options, product);
  const {
    price
  } = prices;
  const {
    value: unitPrice,
    currency
  } = price;
  const {
    name,
    small_image,
    stock_status: stockStatus,
    url_key: urlKey,
    url_suffix: urlSuffix
  } = product;
  const {
    url: image
  } = configurableThumbnailSource === 'itself' && configured_variant ? configured_variant.small_image : small_image;
  return {
    currency,
    image,
    name,
    options,
    quantity,
    stockStatus,
    unitPrice,
    urlKey,
    urlSuffix
  };
};
/** JSDocs type definitions */

/**
 * GraphQL mutations for a product in a cart.
 * This is a type used by the {@link useProduct} talon.
 *
 * @typedef {Object} ProductMutations
 *
 * @property {GraphQLDocument} removeItemMutation Mutation for removing an item in a cart
 * @property {GraphQLDocument} updateItemQuantityMutation Mutation for updating the item quantity in a cart
 *
 * @see [product.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/product.js}
 * to see the mutations used in Venia
 */

/**
 * Object type returned by the {@link useProduct} talon.
 * It provides prop data for rendering a product component on a cart page.
 *
 * @typedef {Object} ProductTalonProps
 *
 * @property {String} errorMessage Error message from an operation perfored on a cart product.
 * @property {function} handleEditItem Function to use for handling when a product is modified.
 * @property {function} handleRemoveFromCart Function to use for handling the removal of a cart product.
 * @property {function} handleUpdateItemQuantity Function to use for handling updates to the product quantity in a cart.
 * @property {boolean} isEditable True if a cart product is editable. False otherwise.
 * @property {ProductItem} product Cart product data
 */

/**
 * Data about a product item in the cart.
 * This type is used in the {@link ProductTalonProps} type returned by the {@link useProduct} talon.
 *
 * @typedef {Object} ProductItem
 *
 * @property {String} currency The currency associated with the cart product
 * @property {String} image The url for the cart product image
 * @property {String} name The name of the product
 * @property {Array<Object>} options A list of configurable option objects
 * @property {number} quantity The quantity associated with the cart product
 * @property {number} unitPrice The product's unit price
 * @property {String} urlKey The product's url key
 * @property {String} urlSuffix The product's url suffix
 */
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/makeUrl.js
var makeUrl = __webpack_require__("./node_modules/@magento/peregrine/lib/util/makeUrl.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var Price_price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 2 modules
var Image_image = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/image.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/more-vertical.js
var more_vertical = __webpack_require__("./node_modules/react-feather/dist/icons/more-vertical.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/kebab.css
var kebab = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/kebab.css");
var kebab_default = /*#__PURE__*/__webpack_require__.n(kebab);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/kebab.css

            

var kebab_options = {"injectType":"styleTag"};

kebab_options.insert = "head";
kebab_options.singleton = false;

var kebab_update = injectStylesIntoStyleTag_default()(kebab_default.a, kebab_options);



/* harmony default export */ var LegacyMiniCart_kebab = (kebab_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useEventListener.js
var useEventListener = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useEventListener.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/LegacyMiniCart/useKebab.js
var useKebab_s = $RefreshSig$();


 // TODO: Compare with `useDropdown` and consolidate if possible.

const useKebab = () => {
  useKebab_s();

  const kebabRef = Object(react["useRef"])(null);
  const [isOpen, setIsOpen] = Object(react["useState"])(false);
  const handleKebabClick = Object(react["useCallback"])(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  const handleOutsideKebabClick = Object(react["useCallback"])(event => {
    // Ensure we're truly outside of the kebab.
    if (!kebabRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);
  Object(useEventListener["a" /* useEventListener */])(globalThis.document, 'mouseup', handleOutsideKebabClick);
  Object(useEventListener["a" /* useEventListener */])(globalThis.document, 'touchend', handleOutsideKebabClick);
  return {
    handleKebabClick,
    isOpen,
    kebabRef
  };
};

useKebab_s(useKebab, "P/ji0ygQqPZps5yx515NQ6JvI5k=", false, function () {
  return [useEventListener["a" /* useEventListener */], useEventListener["a" /* useEventListener */]];
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/kebab.js
var kebab_s = $RefreshSig$();









const Kebab = props => {
  kebab_s();

  const {
    handleKebabClick,
    isOpen,
    kebabRef
  } = useKebab();
  const {
    children
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(LegacyMiniCart_kebab, props.classes);
  const toggleClass = isOpen ? classes.dropdown_active : classes.dropdown;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("button", {
    className: classes.kebab,
    onClick: handleKebabClick,
    ref: kebabRef
  }, react_default.a.createElement(Icon_icon["a" /* default */], {
    src: more_vertical["a" /* default */]
  })), react_default.a.createElement("ul", {
    className: toggleClass
  }, children));
};

kebab_s(Kebab, "Fredi3XDr/dAe3N4zVY9sl2dTeg=", false, function () {
  return [useKebab, shallowMerge["a" /* default */]];
});

kebab_c = Kebab;
Kebab.propTypes = {
  children: prop_types["node"],
  classes: Object(prop_types["shape"])({
    dropdown: prop_types["string"],
    dropdown_active: prop_types["string"],
    kebab: prop_types["string"],
    root: prop_types["string"]
  })
};
/* harmony default export */ var components_LegacyMiniCart_kebab = (Kebab);

var kebab_c;

$RefreshReg$(kebab_c, "Kebab");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js + 1 modules
var productOptions = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__("./node_modules/react-feather/dist/icons/edit-2.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/trash.js
var trash = __webpack_require__("./node_modules/react-feather/dist/icons/trash.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/section.css
var LegacyMiniCart_section = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/section.css");
var section_default = /*#__PURE__*/__webpack_require__.n(LegacyMiniCart_section);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/section.css

            

var section_options = {"injectType":"styleTag"};

section_options.insert = "head";
section_options.singleton = false;

var section_update = injectStylesIntoStyleTag_default()(section_default.a, section_options);



/* harmony default export */ var components_LegacyMiniCart_section = (section_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/section.js
var section_s = $RefreshSig$();







const icons = new Map().set('Heart', heart["a" /* default */]).set('Edit2', edit_2["a" /* default */]).set('Trash', trash["a" /* default */]);

const Section = props => {
  section_s();

  const {
    icon,
    isFilled,
    onClick,
    text
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(components_LegacyMiniCart_section, props.classes);
  const iconClasses = {
    root: classes.icon
  };
  const iconSrc = icons.get(icon);

  if (isFilled) {
    iconClasses.root = classes.icon_filled;
  }

  return react_default.a.createElement("li", {
    className: classes.menuItem
  }, react_default.a.createElement("button", {
    onMouseDown: onClick
  }, react_default.a.createElement(Icon_icon["a" /* default */], {
    classes: iconClasses,
    size: 16,
    src: iconSrc
  }), react_default.a.createElement("span", {
    className: classes.text
  }, text)));
};

section_s(Section, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

section_c = Section;
Section.propTypes = {
  classes: Object(prop_types["shape"])({
    icon: prop_types["string"],
    icon_filled: prop_types["string"],
    menuItem: prop_types["string"],
    text: prop_types["string"]
  }),
  icon: Object(prop_types["oneOf"])(['Edit2', 'Heart', 'Trash']),
  isFilled: prop_types["bool"],
  onClick: prop_types["func"],
  text: prop_types["string"]
};
/* harmony default export */ var lib_components_LegacyMiniCart_section = (Section);

var section_c;

$RefreshReg$(section_c, "Section");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js + 3 modules
var addToListButton_ce = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.js + 1 modules
var ProductListing_quantity = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/product.css
var ProductListing_product = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/product.css");
var product_default = /*#__PURE__*/__webpack_require__.n(ProductListing_product);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/product.css

            

var product_options = {"injectType":"styleTag"};

product_options.insert = "head";
product_options.singleton = false;

var product_update = injectStylesIntoStyleTag_default()(product_default.a, product_options);



/* harmony default export */ var CartPage_ProductListing_product = (product_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js + 1 modules
var cartPageFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethodsFragments.gql.js
var shippingMethodsFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethodsFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/product.js
var product_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const IMAGE_SIZE = 100;
const HeartIcon = react_default.a.createElement(Icon_icon["a" /* default */], {
  size: 16,
  src: heart["a" /* default */]
});

const Product = props => {
  product_s();

  const {
    item
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const talonProps = useProduct(_objectSpread({
    operations: {
      removeItemMutation: REMOVE_ITEM_MUTATION,
      updateItemQuantityMutation: UPDATE_QUANTITY_MUTATION
    }
  }, props));
  const {
    addToWishlistProps,
    errorMessage,
    handleEditItem,
    handleRemoveFromCart,
    handleUpdateItemQuantity,
    isEditable,
    product,
    isProductUpdating
  } = talonProps;
  const {
    currency,
    image,
    name,
    options,
    quantity,
    stockStatus,
    unitPrice,
    urlKey,
    urlSuffix
  } = product;
  const classes = Object(shallowMerge["a" /* default */])(CartPage_ProductListing_product, props.classes);
  const itemClassName = isProductUpdating ? classes.item_disabled : classes.item;
  const editItemSection = isEditable ? react_default.a.createElement(lib_components_LegacyMiniCart_section, {
    text: formatMessage({
      id: 'product.editItem',
      defaultMessage: 'Edit item'
    }),
    onClick: handleEditItem,
    icon: "Edit2",
    classes: {
      text: classes.sectionText
    }
  }) : null;
  const itemLink = Object(react["useMemo"])(() => Object(makeUrl["a" /* default */])(`/${urlKey}${urlSuffix || ''}`), [urlKey, urlSuffix]);
  const stockStatusMessage = stockStatus === 'OUT_OF_STOCK' ? formatMessage({
    id: 'product.outOfStock',
    defaultMessage: 'Out-of-stock'
  }) : '';
  return react_default.a.createElement("li", {
    className: classes.root
  }, react_default.a.createElement("span", {
    className: classes.errorText
  }, errorMessage), react_default.a.createElement("div", {
    className: itemClassName
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: itemLink,
    className: classes.imageContainer
  }, react_default.a.createElement(Image_image["a" /* default */], {
    alt: name,
    classes: {
      root: classes.imageRoot,
      image: classes.image
    },
    width: IMAGE_SIZE,
    resource: image
  })), react_default.a.createElement("div", {
    className: classes.details
  }, react_default.a.createElement("div", {
    className: classes.name
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: itemLink
  }, name)), react_default.a.createElement(productOptions["a" /* default */], {
    options: options,
    classes: {
      options: classes.options,
      optionLabel: classes.optionLabel
    }
  }), react_default.a.createElement("span", {
    className: classes.price
  }, react_default.a.createElement(Price_price["a" /* default */], {
    currencyCode: currency,
    value: unitPrice
  }), react_default.a.createElement(message["a" /* default */], {
    id: 'product.price',
    defaultMessage: ' ea.'
  })), react_default.a.createElement("span", {
    className: classes.stockStatusMessage
  }, stockStatusMessage), react_default.a.createElement("div", {
    className: classes.quantity
  }, react_default.a.createElement(ProductListing_quantity["b" /* default */], {
    itemId: item.id,
    initialValue: quantity,
    onChange: handleUpdateItemQuantity
  }))), react_default.a.createElement(components_LegacyMiniCart_kebab, {
    classes: {
      root: classes.kebab
    },
    disabled: true
  }, editItemSection, react_default.a.createElement(lib_components_LegacyMiniCart_section, {
    text: formatMessage({
      id: 'product.removeFromCart',
      defaultMessage: 'Remove from cart'
    }),
    onClick: handleRemoveFromCart,
    icon: "Trash",
    classes: {
      text: classes.sectionText
    }
  }), react_default.a.createElement("li", null, react_default.a.createElement(addToListButton_ce["a" /* default */], _extends({}, addToWishlistProps, {
    classes: {
      root: classes.addToListButton,
      root_selected: classes.addToListButton_selected
    },
    icon: HeartIcon
  }))))));
};

product_s(Product, "H1qBc22vFMyphBrKWCS5KYD5nF4=", false, function () {
  return [useIntl["a" /* default */], useProduct, shallowMerge["a" /* default */]];
});

product_c = Product;
/* harmony default export */ var components_CartPage_ProductListing_product = (Product);
const REMOVE_ITEM_MUTATION = client["gql"]`
    mutation removeItem($cartId: String!, $itemId: Int!) {
        removeItemFromCart(input: { cart_id: $cartId, cart_item_id: $itemId })
            @connection(key: "removeItemFromCart") {
            cart {
                id
                ...CartPageFragment
                ...AvailableShippingMethodsCartFragment
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
    ${shippingMethodsFragments_gql["a" /* AvailableShippingMethodsCartFragment */]}
`;
const UPDATE_QUANTITY_MUTATION = client["gql"]`
    mutation updateItemQuantity(
        $cartId: String!
        $itemId: Int!
        $quantity: Float!
    ) {
        updateCartItems(
            input: {
                cart_id: $cartId
                cart_items: [{ cart_item_id: $itemId, quantity: $quantity }]
            }
        ) @connection(key: "updateCartItems") {
            cart {
                id
                ...CartPageFragment
                ...AvailableShippingMethodsCartFragment
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
    ${shippingMethodsFragments_gql["a" /* AvailableShippingMethodsCartFragment */]}
`;

var product_c;

$RefreshReg$(product_c, "Product");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js
var productListingFragments = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListing.js
var productListing_s = $RefreshSig$();










const EditModal = react_default.a.lazy(productListing_c = () => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(14), __webpack_require__.e(61)]).then(__webpack_require__.bind(null, /*! ./EditModal */ "./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/index.js")));
/**
 * A child component of the CartPage component.
 * This component renders the product listing on the cart page.
 *
 * @param {Object} props
 * @param {Function} props.setIsCartUpdating Function for setting the updating state of the cart.
 * @param {Object} props.classes CSS className overrides.
 * See [productListing.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListing.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import ProductListing from "@magento/venia-ui/lib/components/CartPage/ProductListing";
 */

productListing_c2 = EditModal;

const ProductListing = props => {
  productListing_s();

  const {
    onAddToWishlistSuccess,
    setIsCartUpdating,
    fetchCartDetails
  } = props;
  const talonProps = useProductListing({
    queries: {
      getProductListing: GET_PRODUCT_LISTING
    }
  });
  const {
    activeEditItem,
    isLoading,
    items,
    setActiveEditItem,
    wishlistConfig
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(CartPage_ProductListing_productListing, props.classes);

  if (isLoading) {
    return react_default.a.createElement(indicator["a" /* default */], null, react_default.a.createElement(message["a" /* default */], {
      id: 'productListing.loading',
      defaultMessage: 'Fetching Cart...'
    }));
  }

  if (items.length) {
    const productComponents = items.map(product => react_default.a.createElement(components_CartPage_ProductListing_product, {
      item: product,
      key: product.id,
      setActiveEditItem: setActiveEditItem,
      setIsCartUpdating: setIsCartUpdating,
      onAddToWishlistSuccess: onAddToWishlistSuccess,
      fetchCartDetails: fetchCartDetails,
      wishlistConfig: wishlistConfig
    }));
    return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("ul", {
      className: classes.root
    }, productComponents), react_default.a.createElement(react["Suspense"], {
      fallback: null
    }, react_default.a.createElement(EditModal, {
      item: activeEditItem,
      setIsCartUpdating: setIsCartUpdating,
      setActiveEditItem: setActiveEditItem
    })));
  }

  return null;
};

productListing_s(ProductListing, "dJjP/Lewof9+FKzT2X/U4ApIluc=", false, function () {
  return [useProductListing, shallowMerge["a" /* default */]];
});

productListing_c3 = ProductListing;
const GET_PRODUCT_LISTING = client["gql"]`
    query getProductListing($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...ProductListingFragment
        }
    }
    ${productListingFragments["a" /* ProductListingFragment */]}
`;
/* harmony default export */ var components_CartPage_ProductListing_productListing = (ProductListing);

var productListing_c, productListing_c2, productListing_c3;

$RefreshReg$(productListing_c, "EditModal$React.lazy");
$RefreshReg$(productListing_c2, "EditModal");
$RefreshReg$(productListing_c3, "ProductListing");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js + 6 modules
var PriceSummary_priceSummary = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/cartPage.css
var cartPage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/cartPage.css");
var cartPage_default = /*#__PURE__*/__webpack_require__.n(cartPage);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPage.css

            

var cartPage_options = {"injectType":"styleTag"};

cartPage_options.insert = "head";
cartPage_options.singleton = false;

var cartPage_update = injectStylesIntoStyleTag_default()(cartPage_default.a, cartPage_options);



/* harmony default export */ var CartPage_cartPage = (cartPage_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPage.gql.js


const GET_CART_DETAILS = client["gql"]`
    query GetCartDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...CartPageFragment
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPage.js
var cartPage_s = $RefreshSig$();

function cartPage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { cartPage_defineProperty(target, key, source[key]); }); } return target; }

function cartPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const CheckIcon = react_default.a.createElement(Icon_icon["a" /* default */], {
  size: 20,
  src: check["a" /* default */]
});
/**
 * Structural page component for the shopping cart.
 * This is the main component used in the `/cart` route in Venia.
 * It uses child components to render the different pieces of the cart page.
 *
 * @see {@link https://venia.magento.com/cart}
 *
 * @param {Object} props
 * @param {Object} props.classes CSS className overrides for the component.
 * See [cartPage.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/cartPage.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import CartPage from "@magento/venia-ui/lib/components/CartPage";
 */

const CartPage = props => {
  cartPage_s();

  const talonProps = useCartPage({
    queries: {
      getCartDetails: GET_CART_DETAILS
    }
  });
  const {
    cartItems,
    hasItems,
    isCartUpdating,
    fetchCartDetails,
    onAddToWishlistSuccess,
    setIsCartUpdating,
    shouldShowLoadingIndicator,
    wishlistSuccessProps
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(CartPage_cartPage, props.classes);
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  Object(react["useEffect"])(() => {
    if (wishlistSuccessProps) {
      addToast(cartPage_objectSpread({}, wishlistSuccessProps, {
        icon: CheckIcon
      }));
    }
  }, [addToast, wishlistSuccessProps]);

  if (shouldShowLoadingIndicator) {
    return LoadingIndicator_static["a" /* default */];
  }

  const productListing = hasItems ? react_default.a.createElement(components_CartPage_ProductListing_productListing, {
    onAddToWishlistSuccess: onAddToWishlistSuccess,
    setIsCartUpdating: setIsCartUpdating,
    fetchCartDetails: fetchCartDetails
  }) : react_default.a.createElement("h3", null, react_default.a.createElement(message["a" /* default */], {
    id: 'cartPage.emptyCart',
    defaultMessage: 'There are no items in your cart.'
  }));
  const priceAdjustments = hasItems ? react_default.a.createElement(components_CartPage_PriceAdjustments_priceAdjustments, {
    setIsCartUpdating: setIsCartUpdating
  }) : null;
  const priceSummary = hasItems ? react_default.a.createElement(PriceSummary_priceSummary["a" /* default */], {
    isUpdating: isCartUpdating
  }) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(Head["b" /* StoreTitle */], null, formatMessage({
    id: 'cartPage.title',
    defaultMessage: 'Cart'
  })), react_default.a.createElement("div", {
    className: classes.heading_container
  }, react_default.a.createElement("h1", {
    className: classes.heading
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'cartPage.heading',
    defaultMessage: 'Cart'
  })), react_default.a.createElement("div", {
    className: classes.stockStatusMessageContainer
  }, react_default.a.createElement(StockStatusMessage_stockStatusMessage["a" /* default */], {
    cartItems: cartItems
  }))), react_default.a.createElement("div", {
    className: classes.body
  }, react_default.a.createElement("div", {
    className: classes.items_container
  }, productListing), react_default.a.createElement("div", {
    className: classes.price_adjustments_container
  }, priceAdjustments), react_default.a.createElement("div", {
    className: classes.summary_container
  }, react_default.a.createElement("div", {
    className: classes.summary_contents
  }, priceSummary))));
};

cartPage_s(CartPage, "Pk6BDNgUxt2GLCSP0YiF71Q7O6Y=", false, function () {
  return [useCartPage, shallowMerge["a" /* default */], useIntl["a" /* default */], useToasts["a" /* useToasts */]];
});

cartPage_c = CartPage;
/* harmony default export */ var components_CartPage_cartPage = (CartPage);

var cartPage_c;

$RefreshReg$(cartPage_c, "CartPage");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/index.js


/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js + 3 modules ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/alert-circle.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/check.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/heart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/info.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/heart.js
var heart = __webpack_require__("./node_modules/react-feather/dist/icons/heart.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var _apollo_client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js
var addToListButton_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/helpers/useSingleWishlist.js
var _s = $RefreshSig$();







const useSingleWishlist = props => {
  _s();

  const {
    afterAdd,
    beforeAdd,
    item
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(addToListButton_gql["b" /* default */], props.operations);
  const [addProductToWishlist, {
    data: addProductData,
    error: errorAddingProduct,
    loading: isAddingToWishlist
  }] = Object(_apollo_client["useMutation"])(operations.addProductToWishlistMutation);
  const {
    client,
    data: {
      customerWishlistProducts
    }
  } = Object(_apollo_client["useQuery"])(operations.getProductsInWishlistsQuery);
  const isSelected = Object(react["useMemo"])(() => {
    return customerWishlistProducts.includes(item.sku) || isAddingToWishlist;
  }, [customerWishlistProducts, isAddingToWishlist, item.sku]);
  const [showLoginToast, setShowLoginToast] = Object(react["useState"])(0);
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const handleClick = Object(react["useCallback"])(async () => {
    if (!isSignedIn) {
      setShowLoginToast(current => ++current);
    } else {
      try {
        if (beforeAdd) {
          await beforeAdd();
        }

        await addProductToWishlist({
          variables: {
            wishlistId: '0',
            itemOptions: item
          }
        });
        client.writeQuery({
          query: operations.getProductsInWishlistsQuery,
          data: {
            customerWishlistProducts: [...customerWishlistProducts, item.sku]
          }
        });

        if (afterAdd) {
          afterAdd();
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [addProductToWishlist, afterAdd, beforeAdd, client, customerWishlistProducts, isSignedIn, item, operations.getProductsInWishlistsQuery]);
  const loginToastProps = Object(react["useMemo"])(() => {
    if (showLoginToast) {
      return {
        type: 'info',
        message: formatMessage({
          id: 'wishlist.galleryButton.loginMessage',
          defaultMessage: 'Please sign-in to your Account to save items for later.'
        }),
        timeout: 5000
      };
    }

    return null;
  }, [formatMessage, showLoginToast]);
  const successToastProps = Object(react["useMemo"])(() => {
    if (addProductData) {
      return {
        type: 'success',
        message: formatMessage({
          id: 'wishlist.galleryButton.successMessageGeneral',
          defaultMessage: 'Item successfully added to your favorites list.'
        }),
        timeout: 5000
      };
    }

    return null;
  }, [addProductData, formatMessage]);
  const errorToastProps = Object(react["useMemo"])(() => {
    if (errorAddingProduct) {
      return {
        type: 'error',
        message: formatMessage({
          id: 'wishlist.galleryButton.addError',
          defaultMessage: 'Something went wrong adding the product to your wishlist.'
        }),
        timeout: 5000
      };
    }

    return null;
  }, [errorAddingProduct, formatMessage]);
  const buttonProps = Object(react["useMemo"])(() => ({
    'aria-label': formatMessage({
      id: 'wishlistButton.addText',
      defaultMessage: 'Add to Favorites'
    }),
    disabled: isSelected,
    onClick: handleClick,
    type: 'button'
  }), [formatMessage, handleClick, isSelected]);
  return {
    buttonProps,
    buttonText: props.buttonText && props.buttonText(isSelected),
    customerWishlistProducts,
    errorToastProps,
    handleClick,
    isSelected,
    loginToastProps,
    successToastProps
  };
};

_s(useSingleWishlist, "2WicNBZVCZqJbQL0yjF69DMoAG0=", false, function () {
  return [_apollo_client["useMutation"], _apollo_client["useQuery"], useIntl["a" /* default */], user["b" /* useUserContext */]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css
var addToListButton = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css");
var addToListButton_default = /*#__PURE__*/__webpack_require__.n(addToListButton);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(addToListButton_default.a, options);



/* harmony default export */ var AddToListButton_addToListButton = (addToListButton_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__("./node_modules/react-feather/dist/icons/check.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__("./node_modules/react-feather/dist/icons/alert-circle.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/info.js
var info = __webpack_require__("./node_modules/react-feather/dist/icons/info.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js
var useToasts = __webpack_require__("./node_modules/@magento/peregrine/lib/Toasts/useToasts.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/useCommonToasts.js
var useCommonToasts_s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CheckIcon = react_default.a.createElement(icon["a" /* default */], {
  size: 20,
  src: check["a" /* default */]
});
const ErrorIcon = react_default.a.createElement(icon["a" /* default */], {
  size: 20,
  src: alert_circle["a" /* default */]
});
const InfoIcon = react_default.a.createElement(icon["a" /* default */], {
  size: 20,
  src: info["a" /* default */]
});
const useCommonToasts = props => {
  useCommonToasts_s();

  const {
    errorToastProps,
    loginToastProps,
    successToastProps
  } = props;
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  Object(react["useEffect"])(() => {
    if (loginToastProps) {
      addToast(_objectSpread({}, loginToastProps, {
        icon: InfoIcon
      }));
    }
  }, [addToast, loginToastProps]);
  Object(react["useEffect"])(() => {
    if (successToastProps) {
      addToast(_objectSpread({}, successToastProps, {
        icon: CheckIcon
      }));
    }
  }, [addToast, successToastProps]);
  Object(react["useEffect"])(() => {
    if (errorToastProps) {
      addToast(_objectSpread({}, errorToastProps, {
        icon: ErrorIcon
      }));
    }
  }, [addToast, errorToastProps]);
};

useCommonToasts_s(useCommonToasts, "ynKlNugadmy6mw0YBPqu3YPe7Rs=", false, function () {
  return [useToasts["a" /* useToasts */]];
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js
var addToListButton_ce_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const HeartIcon = react_default.a.createElement(icon["a" /* default */], {
  size: 20,
  src: heart["a" /* default */]
});

const AddToListButton = props => {
  addToListButton_ce_s();

  const talonProps = useSingleWishlist(props);
  const {
    buttonProps,
    buttonText,
    errorToastProps,
    isSelected,
    loginToastProps,
    successToastProps
  } = talonProps;
  useCommonToasts({
    errorToastProps,
    loginToastProps,
    successToastProps
  });
  const classes = Object(shallowMerge["a" /* default */])(AddToListButton_addToListButton, props.classes);
  const buttonClass = isSelected ? classes.root_selected : classes.root;
  return react_default.a.createElement("button", _extends({
    className: buttonClass
  }, buttonProps), props.icon, " ", buttonText);
};

addToListButton_ce_s(AddToListButton, "B5QIu06xdEIabs2Os5SpLufcxuA=", false, function () {
  return [useSingleWishlist, useCommonToasts, shallowMerge["a" /* default */]];
});

_c = AddToListButton;
/* harmony default export */ var addToListButton_ce = __webpack_exports__["a"] = (AddToListButton);
AddToListButton.defaultProps = {
  icon: HeartIcon
};
AddToListButton.propTypes = {
  afterAdd: prop_types["func"],
  beforeAdd: prop_types["func"],
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_selected: prop_types["string"]
  }),
  icon: prop_types["element"]
};

var _c;

$RefreshReg$(_c, "AddToListButton");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".priceAdjustments-root-1To {\n}\n", ""]);

// Exports
exports.locals = {
	"root": "priceAdjustments-root-1To"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/product.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/product.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".product-root-1gg {\n    display: grid;\n    row-gap: 0.5rem;\n}\n\n.product-item-13E {\n    align-items: start;\n    display: grid;\n    grid-gap: 0.5rem 1rem;\n    grid-template-areas: 'image details kebab';\n    grid-template-columns: 100px 1fr min-content;\n}\n\n.product-item_disabled-O8X {\n    opacity: 0.5;\n}\n\n.product-errorText-1ye {\n    color: rgb(var(--venia-global-color-error));\n    line-height: var(--venia-global-lineHeight-300);\n}\n\n.product-errorText-1ye:empty {\n    display: none;\n}\n\n.product-imageContainer-2rK {\n    grid-area: image;\n}\n\n.product-imageRoot-1sm {\n    height: 100%;\n}\n\n.product-image-838 {\n    background-color: rgb(var(--venia-global-color-gray));\n    border: solid 1px rgb(var(--venia-global-color-border));\n    border-radius: 2px;\n    height: 100%;\n    object-fit: contain;\n    object-position: center;\n}\n\n.product-details-3Gr {\n    display: grid;\n    gap: 0.5rem;\n    grid-area: details;\n    grid-template-areas:\n        'name name'\n        'options quantity'\n        'price quantity'\n        'stock quantity';\n    grid-template-columns: 2fr 1fr;\n    line-height: 1.5;\n}\n\n.product-name-2ie {\n    grid-area: name;\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.product-price-1F4 {\n    grid-area: price;\n    font-size: var(--venia-typography-body-S-fontSize);\n}\n\n.product-quantity-3RX {\n    align-items: start;\n    display: grid;\n    grid-area: quantity;\n    justify-items: center;\n}\n\n.product-kebab-2Jy {\n    grid-area: kebab;\n    position: relative;\n}\n\n.product-sectionText-1B0 {\n    padding: 0.25rem 0.5rem;\n    font-size: var(--venia-typography-body-S-fontSize);\n    pointer-events: none;\n}\n\n.product-options-lQT {\n    grid-area: options;\n    font-size: var(--venia-typography-body-S-fontSize);\n    display: grid;\n    grid-gap: 0.125rem;\n}\n\n.product-optionLabel-AIV {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: max-content;\n}\n\n.product-stockStatusMessage-178 {\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-global-fontSize-100);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    grid-area: stock;\n}\n\n.product-stockStatusMessage-178:empty {\n    display: none;\n}\n\n.product-addToListButton-1LR {\n    --stroke: rgb(var(--venia-global-color-teal));\n    align-content: center;\n    column-gap: 1.125rem;\n    display: inline-flex;\n    font-size: var(--venia-typography-body-S-fontSize);\n    padding: 0.875rem 0.625rem;\n    width: 100%;\n}\n\n.product-addToListButton_selected-K0z {\n    display: none;\n}\n\n@media (max-width: 640px) {\n    .product-details-3Gr {\n        grid-template: none;\n    }\n\n    .product-name-2ie,\n    .product-options-lQT,\n    .product-price-1F4,\n    .product-stockStatusMessage-178,\n    .product-quantity-3RX {\n        grid-area: auto;\n    }\n\n    .product-quantity-3RX {\n        justify-items: start;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "product-root-1gg",
	"item": "product-item-13E",
	"item_disabled": "product-item_disabled-O8X product-item-13E",
	"errorText": "product-errorText-1ye",
	"imageContainer": "product-imageContainer-2rK",
	"imageRoot": "product-imageRoot-1sm",
	"image": "product-image-838",
	"details": "product-details-3Gr",
	"name": "product-name-2ie",
	"price": "product-price-1F4",
	"quantity": "product-quantity-3RX",
	"kebab": "product-kebab-2Jy",
	"sectionText": "product-sectionText-1B0",
	"options": "product-options-lQT",
	"optionLabel": "product-optionLabel-AIV",
	"stockStatusMessage": "product-stockStatusMessage-178",
	"addToListButton": "product-addToListButton-1LR",
	"addToListButton_selected": "product-addToListButton_selected-K0z"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListing.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/productListing.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".productListing-root-NcK {\n    display: grid;\n    grid-gap: 2rem 1rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "productListing-root-NcK"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/cartPage.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/cartPage.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cartPage-root-1z7 {\n    padding: 2.5rem 3rem;\n    max-width: 1080px;\n    margin: 0 auto;\n}\n\n.cartPage-body-n8K {\n    display: grid;\n    gap: 2rem;\n    grid-template-columns: 1fr 18rem;\n    /* The summary grid item spans the entire right column. */\n    grid-template-areas:\n        'items summary'\n        'adjustments summary';\n}\n\n.cartPage-heading_container-2xs {\n    display: grid;\n    margin-bottom: 1rem;\n    row-gap: 1rem;\n}\n\n.cartPage-heading-3uC {\n    line-height: 1.25em;\n}\n\n.cartPage-stockStatusMessageContainer-3eu:empty {\n    display: none;\n}\n\n.cartPage-items_container-2tw {\n    grid-area: items;\n}\n\n.cartPage-price_adjustments_container-2Ph {\n    grid-area: adjustments;\n}\n\n.cartPage-summary_container-dOs {\n    grid-area: summary;\n    height: 100%;\n}\n\n.cartPage-summary_contents-2-U {\n    position: sticky;\n    /*\n     * TODO: Use CSS Properties (variables) or something instead of hardcoding this.\n     *  - 3.5rem = min-height of nav header. See the \"toolbar\" class in header.css.\n     *  - 2rem = padding-top of the cart page.\n     */\n    top: 5.5rem;\n}\n\n/*\n * Mobile-specific styles.\n */\n\n@media (max-width: 960px) {\n    .cartPage-root-1z7 {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n    }\n\n    .cartPage-body-n8K {\n        /* Only one column in mobile view. */\n        grid-template-columns: 100%;\n        grid-template-areas:\n            'items'\n            'adjustments'\n            'summary';\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "cartPage-root-1z7",
	"body": "cartPage-body-n8K",
	"heading_container": "cartPage-heading_container-2xs",
	"heading": "cartPage-heading-3uC",
	"stockStatusMessageContainer": "cartPage-stockStatusMessageContainer-3eu",
	"items_container": "cartPage-items_container-2tw",
	"price_adjustments_container": "cartPage-price_adjustments_container-2Ph",
	"summary_container": "cartPage-summary_container-dOs",
	"summary_contents": "cartPage-summary_contents-2-U"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/kebab.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/kebab.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".kebab-root-3x_ {\n    display: inline-block;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    margin-top: 2px;\n    position: relative;\n}\n\n.kebab-dropdown-3k3 {\n    align-items: center;\n    box-shadow: 0 0 1px rgb(0, 0, 0, 0.2);\n    display: grid;\n    position: absolute;\n    right: 20px;\n    top: 0;\n    transition: 256ms ease-out;\n    transform: scale(0);\n    transform-origin: 100% 0;\n    z-index: 3;\n}\n\n.kebab-dropdown_active-Cb4 {\n    position: absolute;\n    transform: scale(1);\n    transition: 250ms var(--venia-global-anim-bounce);\n}\n\n.kebab-dropdown-3k3 li {\n    display: block;\n    width: 100%;\n    background-color: #fff;\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n}\n\n.kebab-dropdown-3k3 li:hover {\n    background-color: #eee;\n}\n\n.kebab-kebab-20k {\n    outline: 0;\n    border: none;\n    background-color: #fff;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "kebab-root-3x_",
	"dropdown": "kebab-dropdown-3k3",
	"dropdown_active": "kebab-dropdown_active-Cb4 kebab-dropdown-3k3",
	"kebab": "kebab-kebab-20k"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/section.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/section.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css"), "");

// Module
exports.push([module.i, ".section-menuItem-TTE button {\n    width: 100%;\n    padding: 0.6rem;\n    padding-right: 1.6rem;\n    padding-bottom: 0.72rem;\n    display: flex;\n    white-space: pre;\n    box-sizing: border-box;\n    text-align: left;\n    align-items: center;\n    justify-items: start;\n    column-gap: 0.625rem;\n}\n\n.section-text-enH {\n    padding-top: 1px;\n    padding-left: 0.4rem;\n    font-size: 11px;\n    pointer-events: none;\n}\n\n.section-icon-r3G {\n    --stroke: rgb(var(--venia-global-color-teal));\n}\n\n.section-icon_filled-3jV {\n    --fill: rgb(var(--venia-global-color-teal));\n}\n", ""]);

// Exports
exports.locals = {
	"menuItem": "section-menuItem-TTE",
	"text": "section-text-enH",
	"icon": "section-icon-r3G " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css").locals["root"] + "",
	"icon_filled": "section-icon_filled-3jV section-icon-r3G " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css").locals["root"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".addToListButton-root-3XF {\n    align-content: center;\n    column-gap: 0.5rem;\n    display: inline-flex;\n    margin-left: -0.5rem;\n    padding: 0 0.5rem;\n    text-decoration: underline;\n}\n\n.addToListButton-root_selected-cGu {\n    --selectedColor: rgb(var(--venia-global-color-red-400));\n    --fill: var(--selectedColor);\n    --stroke: var(--selectedColor);\n\n    text-decoration: none;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "addToListButton-root-3XF",
	"root_selected": "addToListButton-root_selected-cGu addToListButton-root-3XF"
};

/***/ })

}]);
//# sourceMappingURL=45.894748c5a48562b0249a.js.map