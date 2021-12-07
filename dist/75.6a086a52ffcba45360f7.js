(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.js + 8 modules ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/edit-2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/summary.gql.js

const GET_SUMMARY_DATA = client["gql"]`
    query getSummaryData($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            selected_payment_method {
                code
                title
            }
        }
    }
`;
/* harmony default export */ var summary_gql = ({
  getSummaryData: GET_SUMMARY_DATA
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/useSummary.js
var _s = $RefreshSig$();





/**
 * Talon to handle summary component in payment information section of
 * the checkout page.
 *
 * @param {DocumentNode} props.queries.getSummaryData gets data from the server for rendering this component
 *
 * @returns {
 *   isLoading: Boolean,
 *   selectedPaymentMethod: {
 *      code: String,
 *      title: String
 *   }
 * }
 */

const useSummary = (props = {}) => {
  _s();

  const operations = Object(shallowMerge["a" /* default */])(summary_gql, props.operations);
  const {
    getSummaryData
  } = operations;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const {
    data: summaryData,
    loading: summaryDataLoading
  } = Object(client["useQuery"])(getSummaryData, {
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const selectedPaymentMethod = summaryData ? summaryData.cart.selected_payment_method : null;
  return {
    isLoading: summaryDataLoading,
    selectedPaymentMethod
  };
};

_s(useSummary, "lTdiiVPTgefyk7KU5qpWAzCuf+0=", false, function () {
  return [cart["b" /* useCartContext */], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.css
var summary = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.css");
var summary_default = /*#__PURE__*/__webpack_require__.n(summary);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(summary_default.a, options);



/* harmony default export */ var PaymentInformation_summary = (summary_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__("./node_modules/react-feather/dist/icons/edit-2.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/braintreeSummary.gql.js

const braintreeSummary_gql_GET_SUMMARY_DATA = client["gql"]`
    query getSummaryData($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            isBillingAddressSame @client
            paymentNonce @client
            billingAddress: billing_address {
                firstName: firstname
                lastName: lastname
                country {
                    code
                }
                street
                city
                region {
                    code
                }
                postalCode: postcode
                phoneNumber: telephone
            }
        }
    }
`;
/* harmony default export */ var braintreeSummary_gql = ({
  queries: {
    getBraintreeSummaryData: braintreeSummary_gql_GET_SUMMARY_DATA
  },
  mutations: {}
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/useBraintreeSummary.js
var useBraintreeSummary_s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const mapBillingAddressData = rawBillingAddressData => {
  if (rawBillingAddressData) {
    const {
      street,
      country,
      region
    } = rawBillingAddressData;
    return _objectSpread({}, rawBillingAddressData, {
      street1: street[0],
      street2: street[1],
      country: country.code,
      state: region.code
    });
  } else {
    return {};
  }
};
/**
 * Talon for the braintree summary view.
 *
 * @param {DocumentNode} props.operations operations used by this summary component
 *
 * @returns {
 *   billingAddress: {
 *      firstName: String,
 *      lastName: String,
 *      country: String,
 *      street1: String,
 *      street2: String,
 *      city: String,
 *      state: String,
 *      postalCode: String,
 *   },
 *   paymentNonce: {
 *      type: String,
 *      description: String,
 *      details: {
 *          cardType: String,
 *          lastFour: String,
 *          lastTwo: String
 *      },
 *   },
 *   isBillingAddressSame: Boolean,
 *   isLoading: Boolean,
 * }
 */


const useBraintreeSummary = (props = {}) => {
  useBraintreeSummary_s();

  const operations = Object(shallowMerge["a" /* default */])(braintreeSummary_gql, props.operations);
  const {
    getBraintreeSummaryData
  } = operations.queries;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const {
    data: summaryData,
    loading: isLoading
  } = Object(client["useQuery"])(getBraintreeSummaryData, {
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const billingAddress = summaryData ? mapBillingAddressData(summaryData.cart.billingAddress) : {};
  const isBillingAddressSame = summaryData ? summaryData.cart.isBillingAddressSame : true;
  const paymentNonce = summaryData ? summaryData.cart.paymentNonce : null;
  return {
    billingAddress,
    isBillingAddressSame,
    isLoading,
    paymentNonce
  };
};

useBraintreeSummary_s(useBraintreeSummary, "vGrNKQloTCokQYhEzvnNs70d7ZQ=", false, function () {
  return [cart["b" /* useCartContext */], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.css
var braintreeSummary = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.css");
var braintreeSummary_default = /*#__PURE__*/__webpack_require__.n(braintreeSummary);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.css

            

var braintreeSummary_options = {"injectType":"styleTag"};

braintreeSummary_options.insert = "head";
braintreeSummary_options.singleton = false;

var braintreeSummary_update = injectStylesIntoStyleTag_default()(braintreeSummary_default.a, braintreeSummary_options);



/* harmony default export */ var PaymentInformation_braintreeSummary = (braintreeSummary_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.js
var braintreeSummary_s = $RefreshSig$();











const BraintreeSummary = props => {
  braintreeSummary_s();

  const {
    classes: propClasses,
    onEdit
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(PaymentInformation_braintreeSummary, propClasses);
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const {
    billingAddress,
    isBillingAddressSame,
    isLoading,
    paymentNonce
  } = useBraintreeSummary();

  if (isLoading) {
    return react_default.a.createElement(LoadingIndicator, {
      classes: {
        root: classes.loading
      }
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'checkoutPage.loadingPaymentInformation',
      defaultMessage: 'Fetching Payment Information'
    }));
  }

  const paymentSummary = formatMessage({
    id: 'checkoutPage.paymentSummary',
    defaultMessage: 'Card'
  }, {
    cardType: paymentNonce.details.cardType,
    lastFour: paymentNonce.details.lastFour
  });
  const billingAddressSummary = !isBillingAddressSame && billingAddress ? react_default.a.createElement("div", {
    className: classes.address_summary_container
  }, react_default.a.createElement("div", null, react_default.a.createElement("span", {
    className: classes.first_name
  }, billingAddress.firstName), react_default.a.createElement("span", {
    className: classes.last_name
  }, billingAddress.lastName)), react_default.a.createElement("div", null, react_default.a.createElement("span", {
    className: classes.street1
  }, billingAddress.street1), react_default.a.createElement("span", {
    className: classes.street2
  }, billingAddress.street2), react_default.a.createElement("span", {
    className: classes.city
  }, billingAddress.city), react_default.a.createElement("span", {
    className: classes.state
  }, billingAddress.state)), react_default.a.createElement("div", null, react_default.a.createElement("span", {
    className: classes.postalCode
  }, billingAddress.postalCode), react_default.a.createElement("span", {
    className: classes.country
  }, billingAddress.country))) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.heading_container
  }, react_default.a.createElement("h5", {
    className: classes.heading
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'checkoutPage.paymentInformation',
    defaultMessage: 'Payment Information'
  })), react_default.a.createElement(linkButton["a" /* default */], {
    className: classes.edit_button,
    onClick: onEdit,
    type: "button"
  }, react_default.a.createElement(icon["a" /* default */], {
    size: 16,
    src: edit_2["a" /* default */],
    classes: {
      icon: classes.edit_icon
    }
  }), react_default.a.createElement("span", {
    className: classes.edit_text
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'global.editButton',
    defaultMessage: 'Edit'
  })))), react_default.a.createElement("div", {
    className: classes.card_details_container
  }, react_default.a.createElement("span", {
    className: classes.payment_type
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'global.creditCard',
    defaultMessage: 'Credit Card'
  })), react_default.a.createElement("span", {
    className: classes.payment_details
  }, paymentSummary)), billingAddressSummary);
};

braintreeSummary_s(BraintreeSummary, "+l7CXeqx4n+GZexDpctf39vAvV0=", false, function () {
  return [shallowMerge["a" /* default */], useIntl["a" /* default */], useBraintreeSummary];
});

_c = BraintreeSummary;
/* harmony default export */ var CheckoutPage_PaymentInformation_braintreeSummary = (BraintreeSummary);
BraintreeSummary.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading_container: prop_types["string"],
    heading: prop_types["string"],
    edit_button: prop_types["string"],
    card_details_container: prop_types["string"],
    address_summary_container: prop_types["string"],
    first_name: prop_types["string"],
    last_name: prop_types["string"],
    street1: prop_types["string"],
    street2: prop_types["string"],
    city: prop_types["string"],
    postalCode: prop_types["string"],
    country: prop_types["string"],
    payment_type: prop_types["string"],
    payment_details: prop_types["string"]
  }),
  billingAddress: Object(prop_types["shape"])({
    firstName: prop_types["string"],
    lastName: prop_types["string"],
    country: prop_types["string"],
    street1: prop_types["string"],
    street2: prop_types["string"],
    city: prop_types["string"],
    state: prop_types["string"],
    postalCode: prop_types["string"]
  }),
  onEdit: prop_types["func"].isRequired,
  isBillingAddressSame: prop_types["bool"]
};

var _c;

$RefreshReg$(_c, "BraintreeSummary");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summaryPaymentCollection.js

/**
 * This file is augmented at build time using the @magento/venia-ui build
 * target "summaryPagePaymentTypes", which allows third-party modules to
 * add new payment component mappings for the checkout page.
 *
 * @see [Payment definition object]{@link PaymentDefinition}
 */

/**
 * A payment definition object that describes a payment infor what be show on summary page.
 *
 * @typedef {Object} PaymentDefinition
 * @property {string} paymentCode is use to map your payment
 * @property {string} importPath Resolvable path to the component the
 *   Route component will render
 *
 * @example <caption>A custom payment method</caption>
 * const myCustomPayment = {
 *      paymentCode: 'cc',
 *      importPath: '@partner/module/path_to_your_component'
 * }
 */
// generated by export-esm-collection-loader

/* harmony default export */ var summaryPaymentCollection = ({
  braintree: CheckoutPage_PaymentInformation_braintreeSummary
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.js
var summary_s = $RefreshSig$();










const Summary = props => {
  summary_s();

  const {
    classes: propClasses,
    onEdit
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(PaymentInformation_summary, propClasses);
  const talonProps = useSummary();
  const {
    isLoading,
    selectedPaymentMethod
  } = talonProps;

  if (isLoading && !selectedPaymentMethod) {
    return react_default.a.createElement(indicator["a" /* default */], {
      classes: {
        root: classes.loading
      }
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'checkoutPage.loadingPaymentInformation',
      defaultMessage: 'Fetching Payment Information'
    }));
  }

  const hasCustomSummaryComp = Object.keys(summaryPaymentCollection).includes(selectedPaymentMethod.code);

  if (hasCustomSummaryComp) {
    const SummaryPaymentMethodComponent = summaryPaymentCollection[selectedPaymentMethod.code];
    return react_default.a.createElement(SummaryPaymentMethodComponent, {
      onEdit: onEdit
    });
  } else {
    return react_default.a.createElement("div", {
      className: classes.root
    }, react_default.a.createElement("div", {
      className: classes.heading_container
    }, react_default.a.createElement("h5", {
      className: classes.heading
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'checkoutPage.paymentInformation',
      defaultMessage: 'Payment Information'
    }))), react_default.a.createElement("div", {
      className: classes.card_details_container
    }, react_default.a.createElement("span", {
      className: classes.payment_details
    }, selectedPaymentMethod.title)));
  }
};

summary_s(Summary, "LV4HiCqBG95WfTVYX4DXBuZXIMQ=", false, function () {
  return [shallowMerge["a" /* default */], useSummary];
});

summary_c = Summary;
/* harmony default export */ var CheckoutPage_PaymentInformation_summary = __webpack_exports__["default"] = (Summary);
Summary.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading_container: prop_types["string"],
    heading: prop_types["string"],
    card_details_container: prop_types["string"],
    payment_details: prop_types["string"]
  }),
  onEdit: prop_types["func"].isRequired
};

var summary_c;

$RefreshReg$(summary_c, "Summary");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../LoadingIndicator/indicator.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.css"), "");

// Module
exports.push([module.i, ".braintreeSummary-root-2IB {\n    display: grid;\n    gap: 1.125rem;\n    padding: 2rem;\n}\n\n.braintreeSummary-loading-3k5 {\n    text-align: center;\n}\n\n.braintreeSummary-heading_container-14d {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr;\n}\n\n.braintreeSummary-edit_button-e-W {\n    color: rgb(var(--venia-brand-color-1-700));\n    padding: 1rem;\n    margin: -1rem;\n}\n\n.braintreeSummary-heading-1Cy {\n    font-weight: 600;\n}\n\n.braintreeSummary-address_summary_container-1ev {\n    display: grid;\n    row-gap: 0.5rem;\n}\n\n.braintreeSummary-first_name-uk8 {\n    padding-right: 5px;\n}\n\n.braintreeSummary-last_name-2iF {\n    padding-right: 5px;\n}\n\n.braintreeSummary-street1-3vY {\n    padding-right: 5px;\n}\n\n.braintreeSummary-street2-3WA {\n    padding-right: 5px;\n}\n\n.braintreeSummary-city-3oL {\n    padding-right: 5px;\n}\n\n.braintreeSummary-state-JzL {\n    padding-right: 5px;\n}\n\n.braintreeSummary-postalCode-2GF {\n    padding-right: 5px;\n}\n\n.braintreeSummary-country-1fZ {\n    padding-right: 5px;\n}\n\n.braintreeSummary-edit_icon-2hS {\n    stroke: rgb(var(--venia-brand-color-1-700));\n}\n\n.braintreeSummary-card_details_container-3I- {\n    display: grid;\n    gap: 0.5rem;\n}\n\n.braintreeSummary-payment_type-3ZM {\n}\n\n.braintreeSummary-payment_details-2up {\n}\n\n@media (max-width: 960px) {\n    .braintreeSummary-edit_text-2eS {\n        display: none;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "braintreeSummary-root-2IB",
	"loading": "braintreeSummary-loading-3k5 " + __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../LoadingIndicator/indicator.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.css").locals["root"] + "",
	"heading_container": "braintreeSummary-heading_container-14d",
	"edit_button": "braintreeSummary-edit_button-e-W",
	"heading": "braintreeSummary-heading-1Cy",
	"address_summary_container": "braintreeSummary-address_summary_container-1ev",
	"first_name": "braintreeSummary-first_name-uk8",
	"last_name": "braintreeSummary-last_name-2iF",
	"street1": "braintreeSummary-street1-3vY",
	"street2": "braintreeSummary-street2-3WA",
	"city": "braintreeSummary-city-3oL",
	"state": "braintreeSummary-state-JzL",
	"postalCode": "braintreeSummary-postalCode-2GF",
	"country": "braintreeSummary-country-1fZ",
	"edit_icon": "braintreeSummary-edit_icon-2hS",
	"card_details_container": "braintreeSummary-card_details_container-3I-",
	"payment_type": "braintreeSummary-payment_type-3ZM",
	"payment_details": "braintreeSummary-payment_details-2up",
	"edit_text": "braintreeSummary-edit_text-2eS"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".summary-root-2Ze {\n    display: grid;\n    gap: 1.125rem;\n    padding: 2rem;\n}\n\n.summary-heading_container-2F2 {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr;\n}\n\n.summary-heading-29o {\n    font-weight: 600;\n}\n\n.summary-card_details_container-1pN {\n    display: grid;\n    gap: 0.5rem;\n}\n\n.summary-payment_details-3Ro {\n}\n", ""]);

// Exports
exports.locals = {
	"root": "summary-root-2Ze",
	"heading_container": "summary-heading_container-2F2",
	"heading": "summary-heading-29o",
	"card_details_container": "summary-card_details_container-1pN",
	"payment_details": "summary-payment_details-3Ro"
};

/***/ })

}]);
//# sourceMappingURL=75.6a086a52ffcba45360f7.js.map