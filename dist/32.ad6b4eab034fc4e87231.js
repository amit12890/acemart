(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.js + 3 modules ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
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

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/GiftOptions/useGiftOptions.js
var _s = $RefreshSig$();




/**
 * This talon contains the logic for a gift options component.
 * It performs effects and returns a data object containing values for rendering the component.
 *
 * This talon performs the following effects:
 *
 * - Fetch the gift options associated with the cart
 * - Update the {@link GiftOptionsTalonProps} values with the data returned by the query
 *
 * @function
 *
 * @param {Object} props
 * @param {GiftOptionsMutations} props.mutations GraphQL mutations for Gift Options
 * @param {GiftOptionsQueries} props.queries GraphQL queries for Gift Options
 *
 * @returns {GiftOptionsTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useGiftOptions } from '@magento/peregrine/lib/talons/CartPage/GiftOptions/useGiftOptions';
 */

const useGiftOptions = props => {
  _s();

  const {
    queries
  } = props;
  const {
    getGiftOptionsQuery
  } = queries;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const {
    cache
  } = Object(client["useApolloClient"])(); // The form will be a child, not a parent, so we can't call `useFormApi`.
  // Need to use a ref and `props.getApi` instead.

  const formApiRef = Object(react["useRef"])();
  const [hasHydrated, setHasHydrated] = Object(react["useState"])(false); // Could be an effect, but a callback should be slightly better.

  const handleCompleted = Object(react["useCallback"])(data => {
    // Only write values to the form once, ideally before user input.
    // Afterward, treat client state as the single source of truth.
    if (data && !hasHydrated) {
      formApiRef.current.setValues({
        cardMessage: data.cart.local_gift_message,
        includeGiftReceipt: data.cart.include_gift_receipt,
        includePrintedCard: data.cart.include_printed_card
      });
      setHasHydrated(true);
    }
  }, [hasHydrated, setHasHydrated]);
  const handleValueChange = Object(react["useCallback"])(values => {
    // Write values to the cache after every user input.
    // Apollo should batch these writes if the user inputs quickly.
    cache.writeQuery({
      query: getGiftOptionsQuery,
      variables: {
        cart_id: cartId
      },
      data: {
        cart: {
          __typename: 'Cart',
          id: cartId,
          include_gift_receipt: !!values.includeGiftReceipt,
          include_printed_card: !!values.includePrintedCard,
          local_gift_message: values.cardMessage || ''
        }
      }
    });
  }, [cartId, cache, getGiftOptionsQuery]);
  Object(client["useQuery"])(getGiftOptionsQuery, {
    onCompleted: handleCompleted,
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const cardMessageProps = {
    field: 'cardMessage',
    initialValue: '',
    keepState: true
  };
  const giftReceiptProps = {
    field: 'includeGiftReceipt',
    initialValue: false
  };
  const printedCardProps = {
    field: 'includePrintedCard',
    initialValue: false
  };
  const optionsFormProps = {
    getApi: api => {
      formApiRef.current = api;
    },
    onValueChange: handleValueChange
  };
  const shouldPromptForMessage = Object(react["useCallback"])(({
    values
  }) => values.includePrintedCard, []);
  return {
    cardMessageProps,
    giftReceiptProps,
    optionsFormProps,
    printedCardProps,
    shouldPromptForMessage
  };
};

_s(useGiftOptions, "FFNxF4GGE9MOxzSWyhMQ5hinkq0=", false, function () {
  return [cart["b" /* useCartContext */], client["useApolloClient"], client["useQuery"]];
});

/* harmony default export */ var GiftOptions_useGiftOptions = (useGiftOptions);
/** JSDocs type definitions */

/**
 * GraphQL mutations for Gift Options
 *
 * @typedef {Object} GiftOptionsMutations
 *
 * @property {GraphQLAST} setGiftOptionsMutation Mutation to use for setting the gift options for the cart
 *
 * @see [giftOptions.gql.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js}
 * for the query Venia uses.
 */

/**
 * GraphQL query for Gift Options
 *
 * @typedef {Object} GiftOptionsQueries
 *
 * @property {GraphQLAST} getGiftOptionsQuery Query to get gift options data
 *
 * @see [giftOptions.gql.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js}
 * for the query Venia uses.
 */

/**
 * Props data to use when rendering a gift options component.
 *
 * @typedef {Object} GiftOptionsTalonProps
 *
 * @property {object} cardMessageProps Props for the `cardMessage` textarea element.
 * @property {object} giftReceiptProps Props for the `includeGiftReceipt` checkbox element.
 * @property {object} optionsFormProps Props for the form element.
 * @property {object} printedCardProps Props for the `includePrintedCard` checkbox element.
 * @property {function} shouldPromptForMessage Determines whether to show the `cardMessage` textarea element.
 *
 */
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js + 1 modules
var Checkbox_checkbox = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js + 1 modules
var textArea = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js

/**
 * Local query. GQL support is not available as of today.
 *
 * Once available, we can change the query to match the schema.
 */

const GET_GIFT_OPTIONS = client["gql"]`
    query getGiftOptions($cartId: String!) {
        cart(cart_id: $cartId) @client {
            id
            include_gift_receipt
            include_printed_card
            local_gift_message
        }
    }
`;
/* harmony default export */ var giftOptions_gql = ({
  queries: {
    getGiftOptionsQuery: GET_GIFT_OPTIONS
  }
});
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.css
var giftOptions = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.css");
var giftOptions_default = /*#__PURE__*/__webpack_require__.n(giftOptions);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(giftOptions_default.a, options);



/* harmony default export */ var GiftOptions_giftOptions = (giftOptions_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.js
var giftOptions_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/**
 * A child component of the PriceAdjustments component.
 * This component displays the form for adding gift options.
 *
 * @param {Object} props
 * @param {Object} props.classes CSS className overrides.
 * See [giftOptions.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import GiftOptions from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions";
 */

const GiftOptions = props => {
  giftOptions_s();

  const {
    cardMessageProps,
    giftReceiptProps,
    optionsFormProps,
    printedCardProps,
    shouldPromptForMessage
  } = GiftOptions_useGiftOptions(_objectSpread({}, giftOptions_gql));
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(GiftOptions_giftOptions, props.classes);
  return react_default.a.createElement(esm["c" /* Form */], _extends({}, optionsFormProps, {
    className: classes.root
  }), react_default.a.createElement("div", {
    className: classes.option
  }, react_default.a.createElement(Checkbox_checkbox["a" /* default */], _extends({}, giftReceiptProps, {
    label: formatMessage({
      id: 'giftOptions.includeGiftReceipt',
      defaultMessage: 'Include gift receipt'
    })
  }))), react_default.a.createElement("div", {
    className: classes.option
  }, react_default.a.createElement(Checkbox_checkbox["a" /* default */], _extends({}, printedCardProps, {
    label: formatMessage({
      id: 'giftOptions.includePrintedCard',
      defaultMessage: 'Include printed card'
    })
  }))), react_default.a.createElement("div", {
    className: classes.option
  }, react_default.a.createElement(esm["g" /* Relevant */], {
    when: shouldPromptForMessage
  }, react_default.a.createElement(textArea["a" /* default */], _extends({}, cardMessageProps, {
    placeholder: formatMessage({
      id: 'giftOptions.cardMessage',
      defaultMessage: 'Enter your message here'
    })
  })))));
};

giftOptions_s(GiftOptions, "Ch6uEgFSN4pMBHd25sFj6kG4j2c=", false, function () {
  return [GiftOptions_useGiftOptions, useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

_c = GiftOptions;
/* harmony default export */ var PriceAdjustments_GiftOptions_giftOptions = __webpack_exports__["a"] = (GiftOptions);

var _c;

$RefreshReg$(_c, "GiftOptions");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js + 1 modules ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
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

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules
var Field_message = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/message.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css
var textArea = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css");
var textArea_default = /*#__PURE__*/__webpack_require__.n(textArea);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(textArea_default.a, options);



/* harmony default export */ var TextArea_textArea = (textArea_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const TextArea = props => {
  _s();

  const {
    classes: propClasses,
    field,
    message
  } = props,
        rest = _objectWithoutProperties(props, ["classes", "field", "message"]);

  const fieldState = Object(esm["m" /* useFieldState */])(field);
  const classes = Object(shallowMerge["a" /* default */])(TextArea_textArea, propClasses);
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(esm["j" /* TextArea */], _extends({}, rest, {
    className: classes.input,
    field: field
  })), react_default.a.createElement(Field_message["a" /* default */], {
    fieldState: fieldState
  }, message));
};

_s(TextArea, "YVolvaJOdmCJ2aIvRI1raY3SMHs=", false, function () {
  return [esm["m" /* useFieldState */], shallowMerge["a" /* default */]];
});

_c = TextArea;
/* harmony default export */ var components_TextArea_textArea = __webpack_exports__["a"] = (TextArea);
TextArea.defaultProps = {
  cols: 40,
  rows: 4,
  wrap: 'hard'
};
TextArea.propTypes = {
  classes: Object(prop_types["shape"])({
    input: prop_types["string"]
  }),
  cols: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  field: prop_types["string"].isRequired,
  message: prop_types["node"],
  rows: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  wrap: Object(prop_types["oneOf"])(['hard', 'soft'])
};

var _c;

$RefreshReg$(_c, "TextArea");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".giftOptions-root-24J {\n}\n\n.giftOptions-option-3_w {\n    padding: 0.5rem 0rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "giftOptions-root-24J",
	"option": "giftOptions-option-3_w"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/field.css"), "");

// Module
exports.push([module.i, ".textArea-input-2su {\n    height: auto;\n    max-width: 100%;\n    min-width: 100%;\n    padding: 12px 15px;\n}\n", ""]);

// Exports
exports.locals = {
	"input": "textArea-input-2su " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/field.css").locals["input"] + ""
};

/***/ })

}]);
//# sourceMappingURL=32.ad6b4eab034fc4e87231.js.map