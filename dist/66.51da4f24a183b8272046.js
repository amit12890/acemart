(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/index.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.js (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _giftOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./giftOptions */ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _giftOptions__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js + 1 modules ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/check-square.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/square.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check-square.js
var check_square = __webpack_require__("./node_modules/react-feather/dist/icons/check-square.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/square.js
var square = __webpack_require__("./node_modules/react-feather/dist/icons/square.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css
var Checkbox_checkbox = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css");
var checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_checkbox);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(checkbox_default.a, options);



/* harmony default export */ var components_Checkbox_checkbox = (checkbox_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/* TODO: change lint config to use `label-has-associated-control` */

/* eslint-disable jsx-a11y/label-has-for */

const checkedIcon = react_default.a.createElement(check_square["a" /* default */], null);
const uncheckedIcon = react_default.a.createElement(square["a" /* default */], null);

const Checkbox = props => {
  _s();

  const {
    ariaLabel,
    classes: propClasses,
    field,
    fieldValue,
    id,
    label,
    message
  } = props,
        rest = _objectWithoutProperties(props, ["ariaLabel", "classes", "field", "fieldValue", "id", "label", "message"]);

  const fieldApi = Object(esm["l" /* useFieldApi */])(field);
  const fieldState = Object(esm["m" /* useFieldState */])(field);
  const classes = Object(shallowMerge["a" /* default */])(components_Checkbox_checkbox, propClasses);
  const icon = fieldState.value ? checkedIcon : uncheckedIcon;
  Object(react["useEffect"])(() => {
    if (fieldValue != null && fieldValue !== fieldState.value) {
      fieldApi.setValue(fieldValue);
    }
  }, [fieldApi, fieldState.value, fieldValue]);
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("label", {
    "aria-label": ariaLabel,
    className: classes.root,
    htmlFor: id
  }, react_default.a.createElement(esm["b" /* Checkbox */], _extends({}, rest, {
    className: classes.input,
    field: field,
    id: id
  })), react_default.a.createElement("span", {
    className: classes.icon
  }, icon), react_default.a.createElement("span", {
    className: classes.label
  }, label)), react_default.a.createElement(Field_message["a" /* default */], {
    fieldState: fieldState
  }, message));
};

_s(Checkbox, "qbwAa/wJ0FrEbgVzm0eDzCZ1L7I=", false, function () {
  return [esm["l" /* useFieldApi */], esm["m" /* useFieldState */], shallowMerge["a" /* default */]];
});

_c = Checkbox;
/* harmony default export */ var lib_components_Checkbox_checkbox = __webpack_exports__["a"] = (Checkbox);
Checkbox.propTypes = {
  ariaLabel: prop_types["string"],
  classes: Object(prop_types["shape"])({
    icon: prop_types["string"],
    input: prop_types["string"],
    label: prop_types["string"],
    message: prop_types["string"],
    root: prop_types["string"]
  }),
  field: prop_types["string"].isRequired,
  id: prop_types["string"],
  label: prop_types["node"].isRequired,
  message: prop_types["node"]
};
/* eslint-enable jsx-a11y/label-has-for */

var _c;

$RefreshReg$(_c, "Checkbox");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".checkbox-root-ZAW {\n    --stroke: var(--venia-global-color-gray-600);\n    align-items: center;\n    color: rgb(var(--venia-global-color-gray-900));\n    display: grid;\n    gap: calc(0.875rem - 5px);\n    grid-auto-flow: column;\n    grid-template-areas: 'input label';\n    grid-template-columns: min-content 1fr;\n    justify-items: center;\n    line-height: 1.5rem;\n}\n\n.checkbox-input-h8k {\n    -webkit-appearance: none;\n    background: none;\n    border: 2px solid transparent;\n    border-radius: 4px;\n    cursor: pointer;\n    grid-area: input;\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3R- {\n    grid-area: input;\n    height: 1.5rem;\n    pointer-events: none;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3R- svg {\n    stroke: rgb(var(--stroke));\n}\n\n.checkbox-label-3c_ {\n    cursor: pointer;\n    font-size: var(--venia-typography-body-M-fontSize);\n    grid-area: label;\n    justify-self: start;\n}\n\n.checkbox-input-h8k:disabled {\n    cursor: default;\n}\n\n/* When the input is disabled, update the cursor on the sibling label element. */\n.checkbox-input-h8k:disabled ~ .checkbox-label-3c_ {\n    cursor: default;\n}\n\n.checkbox-input-h8k:checked:enabled + .checkbox-icon-3R- {\n    --stroke: var(--venia-brand-color-1-700);\n}\n\n.checkbox-input-h8k:active:enabled,\n.checkbox-input-h8k:focus:enabled {\n    box-shadow: -3px 3px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "checkbox-root-ZAW",
	"input": "checkbox-input-h8k",
	"icon": "checkbox-icon-3R-",
	"label": "checkbox-label-3c_"
};

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/check-square.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/check-square.js ***!
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



var CheckSquare = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
    points: "9 11 12 14 22 4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }));
});
_c2 = CheckSquare;
CheckSquare.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
CheckSquare.displayName = 'CheckSquare';
/* harmony default export */ __webpack_exports__["a"] = (CheckSquare);

var _c, _c2;

$RefreshReg$(_c, "CheckSquare$forwardRef");
$RefreshReg$(_c2, "CheckSquare");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/square.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/square.js ***!
  \*********************************************************/
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



var Square = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }));
});
_c2 = Square;
Square.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
Square.displayName = 'Square';
/* harmony default export */ __webpack_exports__["a"] = (Square);

var _c, _c2;

$RefreshReg$(_c, "Square$forwardRef");
$RefreshReg$(_c2, "Square");

/***/ })

}]);
//# sourceMappingURL=66.51da4f24a183b8272046.js.map