(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

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

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/index.js + 9 modules ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethodsFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadio.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Country/country.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Postcode/postcode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Region/region.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadios.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CartPage_PriceAdjustments_ShippingMethods_shippingMethods; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingMethods.js
var _s = $RefreshSig$();




/**
 * Contains logic for a shipping method selector component.
 * It performs effect and returns props data used to render that component.
 *
 * This talon performs the following effects:
 *
 * - Set the shipping form visibility value based on the shipping methods associated with the cart
 *
 * @function
 *
 * @param {Object} props
 * @param {ShippingMethodsQueries} props.queries GraphQL queries for shipping methods
 *
 * @returns {ShippingMethodsTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useShippingMethods } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingMethods';
 */

const useShippingMethods = props => {
  _s();

  const {
    queries: {
      getShippingMethodsQuery
    }
  } = props;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const {
    data
  } = Object(client["useQuery"])(getShippingMethodsQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const [isShowingForm, setIsShowingForm] = Object(react["useState"])(false);
  const showForm = Object(react["useCallback"])(() => setIsShowingForm(true), []);
  Object(react["useEffect"])(() => {
    if (data && data.cart.shipping_addresses.length) {
      setIsShowingForm(true);
    }
  }, [data]);
  let formattedShippingMethods = [];
  let selectedShippingMethod = null;
  let selectedShippingFields = {
    country: "US",
    region: '',
    zip: ''
  };

  if (data) {
    const {
      cart
    } = data;
    const {
      shipping_addresses: shippingAddresses
    } = cart;

    if (shippingAddresses.length) {
      const primaryShippingAddress = shippingAddresses[0];
      const {
        available_shipping_methods: shippingMethods,
        country,
        postcode,
        region,
        selected_shipping_method: shippingMethod
      } = primaryShippingAddress;
      selectedShippingFields = {
        country: country.code,
        region: region.code,
        zip: postcode
      }; // GraphQL has some sort order problems when updating the cart.
      // This ensures we're always ordering the result set by price.

      formattedShippingMethods = [...shippingMethods].sort((a, b) => a.amount.value - b.amount.value);

      if (shippingMethod) {
        selectedShippingMethod = `${shippingMethod.carrier_code}|${shippingMethod.method_code}`;
      }
    }
  }

  return {
    hasMethods: formattedShippingMethods.length,
    isShowingForm,
    selectedShippingFields,
    selectedShippingMethod,
    shippingMethods: formattedShippingMethods,
    showForm
  };
};
/** JSDocs type definitions */

/**
 * GraphQL queries for shipping methods.
 * This is a type used in the {@link useShippingMethods} talon.
 *
 * @typedef {Object} ShippingMethodsQueries
 *
 * @property {GraphQLAST} getShippingMethodsQuery Query to get the available shipping methods.
 *
 * @see [shippingMethods.gql.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.gql.js}
 * for the queries used in Venia
 */

/**
 * Object type returned by the {@link useShippingMethods} talon.
 * It provides prop data to use when rendering shipping methods.
 *
 * @typedef {Object} ShippingMethodsTalonProps
 *
 * @property {number} hasMethods Provides the number of shipping methods available.
 * Can be used as a boolean value since having no shipping methods would return 0.
 * @property {boolean} isShowingForm True if the form should be shown. False otherwise.
 * @property {SelectShippingFields} selectedShippingFields Values for the select input fields on the shipping form
 * @property {String} selectedShippingMethod A serialized string of <carrier-code>|<method-code>, eg. usps|priority.
 * @property {Array<Object>} shippingMethods A list of available shipping methods based on the primary shipping address
 * @property {function} showForm A function that sets the `isShowingForm` value to true.
 */

_s(useShippingMethods, "ncU4bsGT/ngBtKgK82eK8XWhNwE=", false, function () {
  return [cart["b" /* useCartContext */], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm.js
var useShippingForm = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js
var shippingInformationFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Country/country.js + 2 modules
var country = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Country/country.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Region/region.js + 3 modules
var region = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Region/region.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Postcode/postcode.js + 2 modules
var postcode = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Postcode/postcode.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js + 1 modules
var cartPageFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.css
var shippingForm = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.css");
var shippingForm_default = /*#__PURE__*/__webpack_require__.n(shippingForm);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(shippingForm_default.a, options);



/* harmony default export */ var ShippingMethods_shippingForm = (shippingForm_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethodsFragments.gql.js
var shippingMethodsFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethodsFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.gql.js


const GET_SHIPPING_METHODS = client["gql"]`
    query GetShippingMethods($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...ShippingMethodsCartFragment
        }
    }
    ${shippingMethodsFragments_gql["c" /* ShippingMethodsCartFragment */]}
`;
/* harmony default export */ var shippingMethods_gql = ({
  mutations: {},
  queries: {
    getShippingMethodsQuery: GET_SHIPPING_METHODS
  }
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.js
var shippingForm_s = $RefreshSig$();




















const ShippingForm = props => {
  shippingForm_s();

  const {
    hasMethods,
    selectedShippingFields,
    setIsCartUpdating
  } = props;
  const talonProps = Object(useShippingForm["b" /* useShippingForm */])({
    selectedValues: selectedShippingFields,
    setIsCartUpdating,
    mutations: {
      setShippingAddressMutation: SET_SHIPPING_ADDRESS_MUTATION
    },
    queries: {
      shippingMethodsQuery: GET_SHIPPING_METHODS
    }
  });
  const {
    errors,
    handleOnSubmit,
    handleZipChange,
    isSetShippingLoading
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(ShippingMethods_shippingForm, props.classes);
  const shippingStatusMessage = isSetShippingLoading ? formatMessage({
    id: 'shippingForm.loading',
    defaultMessage: 'Loading Methods...'
  }) : formatMessage({
    id: 'shippingForm.getShippingOptions',
    defaultMessage: 'Get Shipping Options'
  });
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h3", {
    className: classes.formTitle
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'shippingForm.formTitle',
    defaultMessage: 'Destination'
  })), react_default.a.createElement(formError["a" /* default */], {
    errors: Array.from(errors.values)
  }), react_default.a.createElement(esm["c" /* Form */], {
    className: classes.root,
    initialValues: selectedShippingFields,
    onSubmit: handleOnSubmit
  }, react_default.a.createElement(country["a" /* default */], {
    validate: formValidators["d" /* isRequired */]
  }), react_default.a.createElement(region["a" /* default */], {
    validate: formValidators["d" /* isRequired */]
  }), react_default.a.createElement(postcode["a" /* default */], {
    fieldInput: "zip",
    validate: formValidators["d" /* isRequired */],
    onValueChange: handleZipChange
  }), !hasMethods ? react_default.a.createElement(Button_button["a" /* default */], {
    classes: {
      root_normalPriority: classes.submit
    },
    disabled: isSetShippingLoading,
    priority: "normal",
    type: "submit"
  }, shippingStatusMessage) : null));
};

shippingForm_s(ShippingForm, "hHbxb/rPX0CFYT6ZzV0mSBlspY8=", false, function () {
  return [useShippingForm["b" /* useShippingForm */], useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

_c = ShippingForm;
/* harmony default export */ var PriceAdjustments_ShippingMethods_shippingForm = (ShippingForm);
ShippingForm.propTypes = {
  classes: Object(prop_types["shape"])({
    zip: prop_types["string"]
  }),
  selectedShippingFields: Object(prop_types["shape"])({
    country: prop_types["string"].isRequired,
    region: prop_types["string"].isRequired,
    zip: prop_types["string"].isRequired
  }),
  setIsFetchingMethods: prop_types["func"]
};
const SET_SHIPPING_ADDRESS_MUTATION = client["gql"]`
    mutation SetShippingAddressForEstimate(
        $cartId: String!
        $address: CartAddressInput!
    ) {
        setShippingAddressesOnCart(
            input: {
                cart_id: $cartId
                shipping_addresses: [{ address: $address }]
            }
        ) @connection(key: "setShippingAddressesOnCart") {
            cart {
                id
                ...CartPageFragment
                ...ShippingMethodsCartFragment
                ...ShippingInformationFragment
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
    ${shippingMethodsFragments_gql["c" /* ShippingMethodsCartFragment */]}
    ${shippingInformationFragments_gql["a" /* ShippingInformationFragment */]}
`;

var _c;

$RefreshReg$(_c, "ShippingForm");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.css
var ShippingMethods_shippingMethods = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.css");
var shippingMethods_default = /*#__PURE__*/__webpack_require__.n(ShippingMethods_shippingMethods);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.css

            

var shippingMethods_options = {"injectType":"styleTag"};

shippingMethods_options.insert = "head";
shippingMethods_options.singleton = false;

var shippingMethods_update = injectStylesIntoStyleTag_default()(shippingMethods_default.a, shippingMethods_options);



/* harmony default export */ var PriceAdjustments_ShippingMethods_shippingMethods = (shippingMethods_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingRadios.js
var useShippingRadios_s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Contains logic for a component that renders a radio selector for shipping.
 * It performs effects and returns props data used for rendering that component.
 *
 * This talon performs the following effects:
 *
 * - Sets the value of the shipping method to a default value if there is no current method selected
 * - Manage the updating state of the cart while a shipping method is being applied
 *
 * @function
 *
 * @param {Object} props
 * @param {function} props.setIsCartUpdating Function for setting the updating state of the shopping cart
 * @param {String} props.selectedShippingMethod A serialized string of <carrier-code>|<method-code>, eg. usps|priority.
 * @param {Array<Object>} props.shippingMethods An array of available shipping methods
 * @param {ShippingRadiosMutations} props.mutations GraphQL mutations for a shipping radio selector component.
 *
 * @return {ShippingRadiosTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useShippingRadios } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingRadios';
 */

const useShippingRadios = props => {
  useShippingRadios_s();

  const {
    setIsCartUpdating,
    selectedShippingMethod,
    shippingMethods,
    mutations: {
      setShippingMethodMutation
    }
  } = props;
  const shippingMethodFieldApi = Object(esm["l" /* useFieldApi */])('method');
  const [setShippingMethod, {
    called: setShippingMethodCalled,
    loading: setShippingMethodLoading
  }] = Object(client["useMutation"])(setShippingMethodMutation);
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const formattedShippingMethods = shippingMethods.map(shippingMethod => _objectSpread({}, shippingMethod, {
    serializedValue: `${shippingMethod.carrier_code}|${shippingMethod.method_code}`
  }));
  Object(react["useEffect"])(() => {
    const currentMethod = shippingMethodFieldApi.getValue();

    if (!currentMethod) {
      const defaultFirstMethod = formattedShippingMethods[0];

      if (defaultFirstMethod) {
        shippingMethodFieldApi.setValue(defaultFirstMethod.serializedValue);
      }
    }
  }, [formattedShippingMethods, selectedShippingMethod, shippingMethodFieldApi]);
  const handleShippingSelection = Object(react["useCallback"])(value => {
    const [carrierCode, methodCode] = value.split('|');
    setShippingMethod({
      variables: {
        cartId,
        shippingMethod: {
          carrier_code: carrierCode,
          method_code: methodCode
        }
      }
    });
  }, [cartId, setShippingMethod]);
  Object(react["useEffect"])(() => {
    if (setShippingMethodCalled) {
      // If a shipping mutation is in flight, tell the cart.
      setIsCartUpdating(setShippingMethodLoading);
    }
  }, [setIsCartUpdating, setShippingMethodCalled, setShippingMethodLoading]);
  return {
    formattedShippingMethods,
    handleShippingSelection
  };
};
/** JSDoc type definitions */

/**
 * GraphQL mutations for a shipping radio selector component.
 * This is a type used by the {@link useShippingRadios} talon.
 *
 * @typedef {Object} ShippingRadiosMutations
 *
 * @property {GraphQLAST} setShippingMethodMutation Mutation for setting the shipping method on a cart.
 */

/**
 * Object type returned by the {@link useShippingRadios} talon.
 * It provides data to use when rendering a radio selector for shipping methods.
 *
 * @typedef {Object} ShippingRadiosTalonProps
 *
 * @property {Object} formattedShippingMethods Shipping method data that has been formatted.
 * @property {function} handleShippingSelection Callback function for handling shipping selection form updates.
 */

useShippingRadios_s(useShippingRadios, "kqKeANz6D+Zma4Y4G/dkVMW6/j0=", false, function () {
  return [esm["l" /* useFieldApi */], client["useMutation"], cart["b" /* useCartContext */]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.js + 1 modules
var radioGroup = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadio.js + 1 modules
var shippingRadio = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadio.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadios.css
var shippingRadios = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadios.css");
var shippingRadios_default = /*#__PURE__*/__webpack_require__.n(shippingRadios);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadios.css

            

var shippingRadios_options = {"injectType":"styleTag"};

shippingRadios_options.insert = "head";
shippingRadios_options.singleton = false;

var shippingRadios_update = injectStylesIntoStyleTag_default()(shippingRadios_default.a, shippingRadios_options);



/* harmony default export */ var ShippingMethods_shippingRadios = (shippingRadios_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadios.js
var shippingRadios_s = $RefreshSig$();












const ShippingRadios = props => {
  shippingRadios_s();

  const {
    setIsCartUpdating,
    selectedShippingMethod,
    shippingMethods
  } = props;
  const {
    formattedShippingMethods,
    handleShippingSelection
  } = useShippingRadios({
    setIsCartUpdating,
    selectedShippingMethod,
    shippingMethods,
    mutations: {
      setShippingMethodMutation: SET_SHIPPING_METHOD_MUTATION
    }
  });
  const radioComponents = formattedShippingMethods.map(shippingMethod => {
    return {
      label: react_default.a.createElement(shippingRadio["a" /* default */], {
        currency: shippingMethod.amount.currency,
        name: shippingMethod.method_title,
        price: shippingMethod.amount.value
      }),
      value: shippingMethod.serializedValue
    };
  });
  const classes = Object(shallowMerge["a" /* default */])(ShippingMethods_shippingRadios, props.classes);
  const radioGroupClasses = {
    radioLabel: classes.radioContents,
    root: classes.radioRoot
  };
  return react_default.a.createElement(radioGroup["a" /* default */], {
    classes: radioGroupClasses,
    field: "method",
    initialValue: selectedShippingMethod,
    items: radioComponents,
    onValueChange: handleShippingSelection
  });
};

shippingRadios_s(ShippingRadios, "10NQ3j7C4Y8XXIPj7pxtiRitf+A=", false, function () {
  return [useShippingRadios, shallowMerge["a" /* default */]];
});

shippingRadios_c = ShippingRadios;
/* harmony default export */ var PriceAdjustments_ShippingMethods_shippingRadios = (ShippingRadios);
const SET_SHIPPING_METHOD_MUTATION = client["gql"]`
    mutation SetShippingMethodForEstimate(
        $cartId: String!
        $shippingMethod: ShippingMethodInput!
    ) {
        setShippingMethodsOnCart(
            input: { cart_id: $cartId, shipping_methods: [$shippingMethod] }
        ) @connection(key: "setShippingMethodsOnCart") {
            cart {
                id
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
                ...CartPageFragment
                ...SelectedShippingMethodCartFragment
                # Intentionally do not re-fetch available shipping methods because
                #  a) they are wrong in the mutation response
                #  b) it is expensive to recalculate.
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
    ${shippingMethodsFragments_gql["b" /* SelectedShippingMethodCartFragment */]}
`;
ShippingRadios.propTypes = {
  classes: Object(prop_types["shape"])({
    radioContents: prop_types["string"],
    radioRoot: prop_types["string"]
  }),
  selectedShippingMethod: prop_types["string"],
  shippingMethods: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    amount: Object(prop_types["shape"])({
      currency: prop_types["string"].isRequired,
      value: prop_types["number"].isRequired
    }),
    carrier_code: prop_types["string"].isRequired,
    method_code: prop_types["string"].isRequired,
    method_title: prop_types["string"].isRequired
  }))
};

var shippingRadios_c;

$RefreshReg$(shippingRadios_c, "ShippingRadios");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.js
var shippingMethods_s = $RefreshSig$();

function shippingMethods_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { shippingMethods_defineProperty(target, key, source[key]); }); } return target; }

function shippingMethods_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/**
 * A child component of the PriceAdjustments component.
 * This component renders the form for adding the shipping method for the cart.
 *
 * @param {Object} props
 * @param {Function} props.setIsCartUpdating Function for setting the updating state of the cart.
 * @param {Object} props.classes CSS className overrides.
 * See [shippingMethods.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import ShippingMethods from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods";
 */

const ShippingMethods = props => {
  shippingMethods_s();

  const {
    setIsCartUpdating
  } = props;
  const {
    hasMethods,
    isShowingForm,
    selectedShippingFields,
    selectedShippingMethod,
    shippingMethods,
    showForm
  } = useShippingMethods(shippingMethods_objectSpread({}, shippingMethods_gql));
  const classes = Object(shallowMerge["a" /* default */])(PriceAdjustments_ShippingMethods_shippingMethods, props.classes);
  const radios = isShowingForm && hasMethods ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h3", {
    className: classes.prompt
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'shippingMethods.prompt',
    defaultMessage: 'Shipping Methods'
  })), react_default.a.createElement(esm["c" /* Form */], null, react_default.a.createElement(PriceAdjustments_ShippingMethods_shippingRadios, {
    selectedShippingMethod: selectedShippingMethod,
    setIsCartUpdating: setIsCartUpdating,
    shippingMethods: shippingMethods
  }))) : null;
  const formOrPlaceholder = isShowingForm ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(PriceAdjustments_ShippingMethods_shippingForm, {
    hasMethods: hasMethods,
    selectedShippingFields: selectedShippingFields,
    setIsCartUpdating: setIsCartUpdating
  }), radios) : react_default.a.createElement(Button_button["a" /* default */], {
    priority: "normal",
    type: "button",
    classes: {
      root_normalPriority: classes.estimateButton
    },
    onClick: showForm
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'shippingMethods.estimateButton',
    defaultMessage: 'I want to estimate my shipping'
  }));
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("p", {
    className: classes.message
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'shippingMethods.message',
    defaultMessage: 'For shipping estimates before proceeding to checkout, please provide the Country, State, and ZIP for the destination of your order.'
  })), formOrPlaceholder);
};

shippingMethods_s(ShippingMethods, "FRcshmaRvbBUN1kco1UqeLEZeyE=", false, function () {
  return [useShippingMethods, shallowMerge["a" /* default */]];
});

shippingMethods_c = ShippingMethods;
/* harmony default export */ var CartPage_PriceAdjustments_ShippingMethods_shippingMethods = (ShippingMethods);

var shippingMethods_c;

$RefreshReg$(shippingMethods_c, "ShippingMethods");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/index.js


/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Field/field.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Field/field.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Field/field.css
var field = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/field.css");
var field_default = /*#__PURE__*/__webpack_require__.n(field);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(field_default.a, options);



/* harmony default export */ var Field_field = (field_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js
var _s = $RefreshSig$();







const Field = props => {
  _s();

  const {
    children,
    id,
    label,
    optional
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(Field_field, props.classes);
  const optionalSymbol = optional ? react_default.a.createElement("span", {
    className: classes.optional
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'field.optional',
    defaultMessage: 'Optional'
  })) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("label", {
    className: classes.label,
    htmlFor: id
  }, label, optionalSymbol), children);
};

_s(Field, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Field;
Field.propTypes = {
  children: prop_types["node"],
  classes: Object(prop_types["shape"])({
    label: prop_types["string"],
    root: prop_types["string"]
  }),
  id: prop_types["string"],
  label: prop_types["node"],
  optional: prop_types["bool"]
};
/* harmony default export */ var components_Field_field = __webpack_exports__["a"] = (Field);

var _c;

$RefreshReg$(_c, "Field");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/FormError/formError.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 3 modules ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js
var useFormError = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js
var useScrollIntoView = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css
var ErrorMessage_errorMessage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css");
var errorMessage_default = /*#__PURE__*/__webpack_require__.n(ErrorMessage_errorMessage);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(errorMessage_default.a, options);



/* harmony default export */ var components_ErrorMessage_errorMessage = (errorMessage_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.js
var _s = $RefreshSig$();





const ErrorMessage = react_default.a.forwardRef(_c = _s((props, ref) => {
  _s();

  const {
    children
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(components_ErrorMessage_errorMessage, props.classes);
  return react_default.a.createElement("div", {
    className: classes.root,
    ref: ref
  }, react_default.a.createElement("span", {
    className: classes.errorMessage
  }, children));
}, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
}));
_c2 = ErrorMessage;
/* harmony default export */ var lib_components_ErrorMessage_errorMessage = (ErrorMessage);
ErrorMessage.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    errorMessage: prop_types["string"]
  }),
  children: prop_types["node"]
};

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage$React.forwardRef");
$RefreshReg$(_c2, "ErrorMessage");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css
var formError = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css");
var formError_default = /*#__PURE__*/__webpack_require__.n(formError);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.css

            

var formError_options = {"injectType":"styleTag"};

formError_options.insert = "head";
formError_options.singleton = false;

var formError_update = injectStylesIntoStyleTag_default()(formError_default.a, formError_options);



/* harmony default export */ var FormError_formError = (formError_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js
var formError_s = $RefreshSig$();









const FormError = props => {
  formError_s();

  const {
    classes: propClasses,
    errors,
    scrollOnError
  } = props;
  const talonProps = Object(useFormError["a" /* useFormError */])({
    errors
  });
  const {
    errorMessage
  } = talonProps;
  const errorRef = Object(react["useRef"])(null);
  Object(useScrollIntoView["a" /* useScrollIntoView */])(errorRef, scrollOnError && errorMessage);
  const classes = Object(shallowMerge["a" /* default */])(FormError_formError, propClasses);
  return errorMessage ? react_default.a.createElement(lib_components_ErrorMessage_errorMessage, {
    classes: classes,
    ref: errorRef
  }, errorMessage) : null;
};

formError_s(FormError, "S24ooxoOmYH1dH3ckh7POYEcVXE=", false, function () {
  return [useFormError["a" /* useFormError */], useScrollIntoView["a" /* useScrollIntoView */], shallowMerge["a" /* default */]];
});

formError_c = FormError;
/* harmony default export */ var components_FormError_formError = __webpack_exports__["a"] = (FormError);
FormError.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    errorMessage: prop_types["string"]
  }),
  errors: Object(prop_types["arrayOf"])(Object(prop_types["instanceOf"])(Error)),
  scrollOnError: prop_types["bool"]
};
FormError.defaultProps = {
  scrollOnError: true
};

var formError_c;

$RefreshReg$(formError_c, "FormError");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/util/formValidators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/util/formValidators.js ***!
  \*******************************************************************/
/*! exports provided: hasLengthAtLeast, hasLengthAtMost, hasLengthExactly, isRequired, mustBeChecked, validateRegionCode, validatePassword, isEqualToField, isNotEqualToField */
/*! exports used: hasLengthAtLeast, isEqualToField, isNotEqualToField, isRequired, validatePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasLengthAtLeast; });
/* unused harmony export hasLengthAtMost */
/* unused harmony export hasLengthExactly */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isRequired; });
/* unused harmony export mustBeChecked */
/* unused harmony export validateRegionCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isEqualToField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isNotEqualToField; });
/**
 * @fileoverview This file houses functions that can be used for
 * validation of form fields.
 *
 * Note that these functions should return a string error message
 * when they fail, and `undefined` when they pass.
 */
const SUCCESS = undefined;
const hasLengthAtLeast = (value, values, minimumLength) => {
  const message = {
    id: 'validation.hasLengthAtLeast',
    defaultMessage: 'Must contain more characters',
    value: minimumLength
  };

  if (!value || value.length < minimumLength) {
    return message;
  }

  return SUCCESS;
};
const hasLengthAtMost = (value, values, maximumLength) => {
  if (value && value.length > maximumLength) {
    const message = {
      id: 'validation.hasLengthAtMost',
      defaultMessage: 'Must have less characters',
      value: maximumLength
    };
    return message;
  }

  return SUCCESS;
};
const hasLengthExactly = (value, values, length) => {
  if (value && value.length !== length) {
    const message = {
      id: 'validation.hasLengthExactly',
      defaultMessage: 'Does not have exact number of characters',
      value: length
    };
    return message;
  }

  return SUCCESS;
};
/**
 * isRequired is provided here for convenience but it is inherently ambiguous and therefore we don't recommend using it.
 * Consider using more specific validators such as `hasLengthAtLeast` or `mustBeChecked`.
 */

const isRequired = value => {
  const FAILURE = {
    id: 'validation.isRequired',
    defaultMessage: 'Is required.'
  }; // The field must have a value (no null or undefined) and
  // if it's a boolean, it must be `true`.

  if (!value) return FAILURE; // If it is a number or string, it must have at least one character of input (after trim).

  const stringValue = String(value).trim();
  const measureResult = hasLengthAtLeast(stringValue, null, 1);
  if (measureResult) return FAILURE;
  return SUCCESS;
};
const mustBeChecked = value => {
  const message = {
    id: 'validation.mustBeChecked',
    defaultMessage: 'Must be checked.'
  };
  if (!value) return message;
  return SUCCESS;
};
const validateRegionCode = (value, values, countries) => {
  const countryCode = "US";
  const country = countries.find(({
    id
  }) => id === countryCode);

  if (!country) {
    const invalidCountry = {
      id: 'validation.invalidCountry',
      defaultMessage: `Country "${countryCode}" is not an available country.`,
      value: countryCode
    };
    return invalidCountry;
  }

  const {
    available_regions: regions
  } = country;

  if (!(Array.isArray(regions) && regions.length)) {
    const invalidRegions = {
      id: 'validation.invalidRegions',
      defaultMessage: `Country "${countryCode}" does not contain any available regions.`,
      value: countryCode
    };
    return invalidRegions;
  }

  const region = regions.find(({
    code
  }) => code === value);

  if (!region) {
    const invalidAbbrev = {
      id: 'validation.invalidAbbreviation',
      defaultMessage: 'That is not a valid state abbreviation.',
      value: value
    };
    return invalidAbbrev;
  }

  return SUCCESS;
};
const validatePassword = value => {
  const count = {
    lower: 0,
    upper: 0,
    digit: 0,
    special: 0
  };

  for (const char of value) {
    if (/[a-z]/.test(char)) count.lower++;else if (/[A-Z]/.test(char)) count.upper++;else if (/\d/.test(char)) count.digit++;else if (/\S/.test(char)) count.special++;
  }

  if (Object.values(count).filter(Boolean).length < 3) {
    const message = {
      id: 'validation.validatePassword',
      defaultMessage: 'A password must contain at least 3 of the following: lowercase, uppercase, digits, special characters.'
    };
    return message;
  }

  return SUCCESS;
};
const isEqualToField = (value, values, fieldKey) => {
  const message = {
    id: 'validation.isEqualToField',
    defaultMessage: 'Fields must match',
    value: fieldKey
  };
  return value === values[fieldKey] ? SUCCESS : message;
};
const isNotEqualToField = (value, values, fieldKey) => {
  const message = {
    id: 'validation.isNotEqualToField',
    defaultMessage: 'Fields must be different',
    value: fieldKey
  };
  return value !== values[fieldKey] ? SUCCESS : message;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");

// Module
exports.push([module.i, ".shippingForm-root-3o_ {\n    display: grid;\n    gap: 0.9375rem 1.5rem;\n    grid-template-columns: 2fr 1fr;\n    grid-template-areas:\n        'country country'\n        'state zip'\n        'submit submit';\n}\n\n.shippingForm-formTitle-jhE {\n    font-weight: 600;\n}\n\n.shippingForm-zip-3Cm {\n    grid-area: zip;\n}\n\n.shippingForm-submit-NIh {\n    justify-self: flex-start;\n}\n\n@media (max-width: 640px) {\n    .shippingForm-root-3o_ {\n        /* Only one column in mobile view. */\n        grid-template-columns: 100%;\n        grid-template-areas:\n            'country'\n            'state'\n            'zip'\n            'submit';\n        padding-right: unset;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "shippingForm-root-3o_",
	"formTitle": "shippingForm-formTitle-jhE",
	"zip": "shippingForm-zip-3Cm",
	"submit": "shippingForm-submit-NIh " + __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_normalPriority"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");

// Module
exports.push([module.i, ".shippingMethods-root-1bb {\n    display: grid;\n    gap: 1rem;\n}\n\n.shippingMethods-message-2_q {\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n}\n\n.shippingMethods-prompt-2yg {\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.shippingMethods-shipping_methods-2_e {\n    grid-area: methods;\n}\n\n.shippingMethods-shipping_methods_hidden-c8Y {\n    display: none;\n}\n\n.shippingMethods-mask-26i {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n.shippingMethods-estimateButton-31P {\n    justify-self: start;\n}\n\n/*\n * Mobile-specific styles.\n */\n\n@media (max-width: 640px) {\n    .shippingMethods-root-1bb {\n        padding-right: unset;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "shippingMethods-root-1bb",
	"message": "shippingMethods-message-2_q",
	"prompt": "shippingMethods-prompt-2yg",
	"shipping_methods": "shippingMethods-shipping_methods-2_e",
	"shipping_methods_hidden": "shippingMethods-shipping_methods_hidden-c8Y shippingMethods-shipping_methods-2_e",
	"mask": "shippingMethods-mask-26i",
	"estimateButton": "shippingMethods-estimateButton-31P " + __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_normalPriority"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadios.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadios.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../RadioGroup/radioGroup.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.css"), "");

// Module
exports.push([module.i, ".shippingRadios-radioContents-3Ci {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 0.5rem;\n}\n\n.shippingRadios-radioRoot-1Uc {\n    /* We explicitly want one radio item per row. */\n    grid-template-columns: auto;\n}\n\n/*\n * Mobile-specific styles.\n */\n\n@media (max-width: 640px) {\n    .shippingRadios-radio_contents-3Yu {\n        display: grid;\n        grid-template-columns: 100%;\n        gap: 0.5rem;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"radioContents": "shippingRadios-radioContents-3Ci",
	"radioRoot": "shippingRadios-radioRoot-1Uc " + __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../RadioGroup/radioGroup.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.css").locals["root"] + "",
	"radio_contents": "shippingRadios-radio_contents-3Yu"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".errorMessage-root-1cS {\n}\n\n.errorMessage-errorMessage-3sE {\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-typography-body-S-fontSize);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    line-height: var(--venia-global-lineHeight-300);\n}\n", ""]);

// Exports
exports.locals = {
	"root": "errorMessage-root-1cS",
	"errorMessage": "errorMessage-errorMessage-3sE"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ })

}]);
//# sourceMappingURL=49.ac40838847a568cb371b.js.map