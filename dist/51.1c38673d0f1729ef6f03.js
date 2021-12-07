(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOption.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOption.js ***!
  \********************************************************************************/
/*! exports provided: useOption */
/*! exports used: useOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


/**
 * Talon for Option.
 *
 * @param {number} props.attribute_id the id of the option
 * @param {function} props.onSelectionChange callback handler for when the option is clicked
 * @param {string} props.selectedValue the label of the selected option
 * @param {array} props.values an array containing possible values
 */

const useOption = props => {
  _s();

  const {
    attribute_id,
    onSelectionChange,
    selectedValue,
    values
  } = props;
  const [selection, setSelection] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const initialSelection = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let initialSelection = {};
    const searchValue = selection || selectedValue;

    if (searchValue) {
      initialSelection = values.find(value => value.default_label === searchValue) || {};
    }

    return initialSelection;
  }, [selectedValue, selection, values]);
  const valuesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return new Map(values.map(value => [value.value_index, value.store_label]));
  }, [values]);
  const selectedValueDescription = selection || initialSelection.default_label || 'None';
  const handleSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(selection => {
    setSelection(valuesMap.get(selection));

    if (onSelectionChange) {
      onSelectionChange(attribute_id, selection);
    }
  }, [attribute_id, onSelectionChange, valuesMap]);
  return {
    handleSelectionChange,
    initialSelection,
    selectedValueDescription
  };
};

_s(useOption, "X1BTPWvL5jN9mB3ktapvWMJ1sS8=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOptions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOptions.js ***!
  \*********************************************************************************/
/*! exports provided: useOptions */
/*! exports used: useOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const useOptions = props => {
  _s();

  const {
    onSelectionChange,
    selectedValues
  } = props;
  const handleSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((optionId, selection) => {
    if (onSelectionChange) {
      onSelectionChange(optionId, selection);
    }
  }, [onSelectionChange]);
  const selectedValueMap = new Map();

  for (const _ref of selectedValues) {
    const {
      option_label,
      value_label
    } = _ref;
    selectedValueMap.set(option_label, value_label);
  }

  return {
    handleSelectionChange,
    selectedValueMap
  };
};

_s(useOptions, "muvwvtwNdX7ju60cthy8YyzO7aA=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/ProductOptions/useSwatch.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useSwatch.js ***!
  \********************************************************************************/
/*! exports provided: useSwatch */
/*! exports used: useSwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSwatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const useSwatch = props => {
  _s();

  const {
    onClick,
    value_index
  } = props;
  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    onClick(value_index);
  }, [value_index, onClick]);
  return {
    handleClick
  };
};

_s(useSwatch, "PRIOWs9bezaAbp8UlGmbaZMoYYA=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/ProductOptions/useTile.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useTile.js ***!
  \******************************************************************************/
/*! exports provided: useTile */
/*! exports used: useTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const useTile = props => {
  _s();

  const {
    onClick,
    value_index
  } = props;
  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    onClick(value_index);
  }, [value_index, onClick]);
  return {
    handleClick
  };
};

_s(useTile, "PRIOWs9bezaAbp8UlGmbaZMoYYA=");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/swatch.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/swatch.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./tile.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tile.css"), "");

// Module
exports.push([module.i, ".swatch-root-x52 {\n    background: var(--venia-swatch-bg);\n    border-color: rgba(0, 0, 0, 0.1);\n    color: white;\n    width: 3rem;\n    --venia-swatch-bg: var(--venia-global-color-gray);\n}\n\n.swatch-root_selected-2HP {\n    background: linear-gradient(-45deg, rgba(0, 0, 0, 0.2), transparent),\n        var(--venia-swatch-bg);\n}\n\n.swatch-root_focused-2Xd {\n}\n.swatch-root_selected_focused-3zL {\n}\n", ""]);

// Exports
exports.locals = {
	"root": "swatch-root-x52 " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./tile.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tile.css").locals["root"] + "",
	"root_selected": "swatch-root_selected-2HP swatch-root-x52 " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./tile.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tile.css").locals["root"] + "",
	"root_focused": "swatch-root_focused-2Xd swatch-root-x52 " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./tile.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tile.css").locals["root"] + "",
	"root_selected_focused": "swatch-root_selected_focused-3zL swatch-root_selected-2HP swatch-root-x52 " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./tile.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tile.css").locals["root"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/swatchList.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/swatchList.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./tileList.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tileList.css"), "");

// Module
exports.push([module.i, ".swatchList-root-35l {\n}\n", ""]);

// Exports
exports.locals = {
	"root": "swatchList-root-35l " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./tileList.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tileList.css").locals["root"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tile.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/tile.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/clickable.css"), "");

// Module
exports.push([module.i, ".tile-root-3pX {\n    border: 1px solid rgb(var(--venia-global-color-text));\n    border-radius: 2px;\n    height: 3rem;\n    min-width: 3rem;\n    padding: 0 0.5rem;\n}\n\n.tile-root_selected-3nw {\n    background-color: rgb(var(--venia-global-color-text));\n    color: white;\n}\n.tile-root_focused-2S9 {\n}\n.tile-root_selected_focused-UHE {\n}\n", ""]);

// Exports
exports.locals = {
	"root": "tile-root-3pX " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/clickable.css").locals["root"] + "",
	"root_selected": "tile-root_selected-3nw tile-root-3pX " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/clickable.css").locals["root"] + "",
	"root_focused": "tile-root_focused-2S9 tile-root-3pX " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/clickable.css").locals["root"] + "",
	"root_selected_focused": "tile-root_selected_focused-UHE tile-root_selected-3nw tile-root-3pX " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/clickable.css").locals["root"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tileList.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/tileList.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".tileList-root-OLw {\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    grid-template-columns: repeat(auto-fit, minmax(3rem, max-content));\n}\n", ""]);

// Exports
exports.locals = {
	"root": "tileList-root-OLw"
};

/***/ }),

/***/ "./src/venia/components/ProductOptions/index.js":
/*!*******************************************************************!*\
  !*** ./src/venia/components/ProductOptions/index.js + 12 modules ***!
  \*******************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOption.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOptions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useSwatch.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useTile.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/imageUtils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/check.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/option.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/swatch.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/swatchList.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/tile.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/tileList.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ProductOptions_options; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/getOptionType.js
const customAttributes = {
  fashion_color: 'swatch'
};
/* harmony default export */ var getOptionType = (({
  attribute_code: code
} = {}) => customAttributes[code]);
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/imageUtils.js
var imageUtils = __webpack_require__("./node_modules/@magento/peregrine/lib/util/imageUtils.js");

// EXTERNAL MODULE: ./src/venia/components/Icon/icon.js + 1 modules
var Icon_icon = __webpack_require__("./src/venia/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__("./node_modules/react-feather/dist/icons/check.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/swatch.css
var swatch = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/swatch.css");
var swatch_default = /*#__PURE__*/__webpack_require__.n(swatch);

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/swatch.css

            

var swatch_options = {"injectType":"styleTag"};

swatch_options.insert = "head";
swatch_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(swatch_default.a, swatch_options);



/* harmony default export */ var ProductOptions_swatch = (swatch_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useSwatch.js
var useSwatch = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/ProductOptions/useSwatch.js");

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/swatch.js
var _s = $RefreshSig$();










const getClassName = (name, isSelected, hasFocus) => `${name}${isSelected ? '_selected' : ''}${hasFocus ? '_focused' : ''}`; // Swatches _must_ have a 1x1 aspect ratio to match the UI.


const SWATCH_WIDTH = 48;

const Swatch = props => {
  _s();

  const {
    hasFocus,
    isSelected,
    item: {
      label,
      value_index,
      swatch_data
    },
    onClick,
    style
  } = props;
  const talonProps = Object(useSwatch["a" /* useSwatch */])({
    onClick,
    value_index
  });
  const {
    handleClick
  } = talonProps;
  const icon = Object(react["useMemo"])(() => {
    return isSelected ? react_default.a.createElement(Icon_icon["a" /* default */], {
      src: check["a" /* default */]
    }) : null;
  }, [isSelected]);
  const classes = Object(shallowMerge["a" /* default */])(ProductOptions_swatch, props.classes);
  let finalStyle = style;

  if (swatch_data) {
    const {
      thumbnail,
      value
    } = swatch_data;
    let swatchValue = '';

    if (thumbnail) {
      const imagePath = Object(imageUtils["c" /* generateUrl */])(thumbnail, 'image-swatch')(SWATCH_WIDTH);
      swatchValue = `url("${imagePath}")`;
    } else {
      swatchValue = value;
    } // We really want to avoid specifying presentation within JS.
    // Swatches are unusual in that their color is data, not presentation,
    // but applying color *is* presentational.
    // So we merely provide the color data here, and let the CSS decide
    // how to use that color (e.g., background, border).


    finalStyle = Object.assign({}, style, {
      '--venia-swatch-bg': swatchValue
    });
  }

  const className = classes[getClassName('root', isSelected, hasFocus)];
  return react_default.a.createElement("button", {
    className: className,
    onClick: handleClick,
    style: finalStyle,
    title: label,
    type: "button"
  }, icon);
};

_s(Swatch, "lSElVyzGpZOAXJilq7PWecE5Bx4=", false, function () {
  return [useSwatch["a" /* useSwatch */], shallowMerge["a" /* default */]];
});

_c = Swatch;
Swatch.propTypes = {
  hasFocus: prop_types["bool"],
  isSelected: prop_types["bool"],
  item: Object(prop_types["shape"])({
    label: prop_types["string"].isRequired,
    value_index: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]).isRequired
  }).isRequired,
  onClick: prop_types["func"].isRequired,
  style: prop_types["object"]
};
Swatch.defaultProps = {
  hasFocus: false,
  isSelected: false
};
/* harmony default export */ var components_ProductOptions_swatch = (Swatch);

var _c;

$RefreshReg$(_c, "Swatch");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/swatchList.css
var swatchList = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/swatchList.css");
var swatchList_default = /*#__PURE__*/__webpack_require__.n(swatchList);

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/swatchList.css

            

var swatchList_options = {"injectType":"styleTag"};

swatchList_options.insert = "head";
swatchList_options.singleton = false;

var swatchList_update = injectStylesIntoStyleTag_default()(swatchList_default.a, swatchList_options);



/* harmony default export */ var ProductOptions_swatchList = (swatchList_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/ProductOptions/swatchList.js
var swatchList_s = $RefreshSig$();







const SwatchList = props => {
  swatchList_s();

  const {
    getItemKey,
    selectedValue = {},
    items,
    onSelectionChange
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(ProductOptions_swatchList, props.classes);
  const swatches = Object(react["useMemo"])(() => items.map(item => {
    const isSelected = item.label === selectedValue.label;
    return react_default.a.createElement(components_ProductOptions_swatch, {
      key: getItemKey(item),
      isSelected: isSelected,
      item: item,
      onClick: onSelectionChange
    });
  }), [getItemKey, selectedValue.label, items, onSelectionChange]);
  return react_default.a.createElement("div", {
    className: classes.root
  }, swatches);
};

swatchList_s(SwatchList, "lMHIk9Hn5CRlJnP2qo1ntT6k2t0=", false, function () {
  return [shallowMerge["a" /* default */]];
});

swatchList_c = SwatchList;
SwatchList.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  getItemKey: prop_types["func"],
  selectedValue: prop_types["object"],
  items: Object(prop_types["arrayOf"])(prop_types["object"]),
  onSelectionChange: prop_types["func"]
};
SwatchList.displayName = 'SwatchList';
/* harmony default export */ var components_ProductOptions_swatchList = (SwatchList);

var swatchList_c;

$RefreshReg$(swatchList_c, "SwatchList");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/tile.css
var tile = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tile.css");
var tile_default = /*#__PURE__*/__webpack_require__.n(tile);

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/tile.css

            

var tile_options = {"injectType":"styleTag"};

tile_options.insert = "head";
tile_options.singleton = false;

var tile_update = injectStylesIntoStyleTag_default()(tile_default.a, tile_options);



/* harmony default export */ var ProductOptions_tile = (tile_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useTile.js
var useTile = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/ProductOptions/useTile.js");

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/tile.js
var tile_s = $RefreshSig$();







const tile_getClassName = (name, isSelected, hasFocus) => `${name}${isSelected ? '_selected' : ''}${hasFocus ? '_focused' : ''}`;

const Tile = props => {
  tile_s();

  const {
    hasFocus,
    isSelected,
    item: {
      label,
      value_index
    },
    onClick
  } = props;
  const talonProps = Object(useTile["a" /* useTile */])({
    onClick,
    value_index
  });
  const {
    handleClick
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(ProductOptions_tile, props.classes);
  const className = classes[tile_getClassName('root', isSelected, hasFocus)];
  return react_default.a.createElement("button", {
    className: className,
    onClick: handleClick,
    title: label,
    type: "button"
  }, react_default.a.createElement("span", null, label));
};

tile_s(Tile, "q7LqsWkws3L9XDOIlrioE1sK0QU=", false, function () {
  return [useTile["a" /* useTile */], shallowMerge["a" /* default */]];
});

tile_c = Tile;
/* harmony default export */ var components_ProductOptions_tile = (Tile);
Tile.propTypes = {
  hasFocus: prop_types["bool"],
  isSelected: prop_types["bool"],
  item: Object(prop_types["shape"])({
    label: prop_types["string"].isRequired,
    value_index: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]).isRequired
  }).isRequired,
  onClick: prop_types["func"].isRequired
};
Tile.defaultProps = {
  hasFocus: false,
  isSelected: false
};

var tile_c;

$RefreshReg$(tile_c, "Tile");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/tileList.css
var tileList = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/tileList.css");
var tileList_default = /*#__PURE__*/__webpack_require__.n(tileList);

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/tileList.css

            

var tileList_options = {"injectType":"styleTag"};

tileList_options.insert = "head";
tileList_options.singleton = false;

var tileList_update = injectStylesIntoStyleTag_default()(tileList_default.a, tileList_options);



/* harmony default export */ var ProductOptions_tileList = (tileList_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/ProductOptions/tileList.js
var tileList_s = $RefreshSig$();







const TileList = props => {
  tileList_s();

  const {
    getItemKey,
    selectedValue = {},
    items,
    onSelectionChange
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(ProductOptions_tileList, props.classes);
  const tiles = Object(react["useMemo"])(() => items.map(item => {
    const isSelected = item.label === selectedValue.label;
    return react_default.a.createElement(components_ProductOptions_tile, {
      key: getItemKey(item),
      isSelected: isSelected,
      item: item,
      onClick: onSelectionChange
    });
  }), [getItemKey, selectedValue.label, items, onSelectionChange]);
  return react_default.a.createElement("div", {
    className: classes.root
  }, tiles);
};

tileList_s(TileList, "vSmkjUoWT7TGgdu4OSq9gB50buQ=", false, function () {
  return [shallowMerge["a" /* default */]];
});

tileList_c = TileList;
TileList.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  getItemKey: prop_types["func"],
  selectedValue: prop_types["object"],
  items: Object(prop_types["arrayOf"])(prop_types["object"]),
  onSelectionChange: prop_types["func"]
};
TileList.displayName = 'TileList';
/* harmony default export */ var components_ProductOptions_tileList = (TileList);

var tileList_c;

$RefreshReg$(tileList_c, "TileList");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ProductOptions/option.css
var ProductOptions_option = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ProductOptions/option.css");
var option_default = /*#__PURE__*/__webpack_require__.n(ProductOptions_option);

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/option.css

            

var option_options = {"injectType":"styleTag"};

option_options.insert = "head";
option_options.singleton = false;

var option_update = injectStylesIntoStyleTag_default()(option_default.a, option_options);



/* harmony default export */ var components_ProductOptions_option = (option_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOption.js
var useOption = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOption.js");

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/option.js
var option_s = $RefreshSig$();











const option_getItemKey = ({
  value_index
}) => value_index; // TODO: get an explicit field from the API
// that identifies an attribute as a swatch


const getListComponent = (attribute_code, values) => {
  const optionType = getOptionType({
    attribute_code,
    values
  });
  return optionType === 'swatch' ? components_ProductOptions_swatchList : components_ProductOptions_tileList;
};

const Option = props => {
  option_s();

  const {
    attribute_code,
    attribute_id,
    label,
    onSelectionChange,
    selectedValue,
    values
  } = props;
  const talonProps = Object(useOption["a" /* useOption */])({
    attribute_id,
    label,
    onSelectionChange,
    selectedValue,
    values
  });
  const {
    handleSelectionChange,
    initialSelection,
    selectedValueDescription
  } = talonProps;
  const ValueList = Object(react["useMemo"])(() => getListComponent(attribute_code, values), [attribute_code, values]);
  const classes = Object(shallowMerge["a" /* default */])(components_ProductOptions_option, props.classes);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("h3", {
    className: classes.title
  }, react_default.a.createElement("span", null, label)), react_default.a.createElement(ValueList, {
    getItemKey: option_getItemKey,
    selectedValue: initialSelection,
    items: values,
    onSelectionChange: handleSelectionChange
  }), react_default.a.createElement("dl", {
    className: classes.selection
  }, react_default.a.createElement("dt", {
    className: classes.selectionLabel
  }, react_default.a.createElement(message["a" /* default */], {
    id: "productOptions.selectedLabel",
    defaultMessage: `Selected ${label}:`,
    values: {
      label
    }
  })), react_default.a.createElement("dd", null, selectedValueDescription)));
};

option_s(Option, "23jeUT9SgbcgSFeSFtH5XdwHrW0=", false, function () {
  return [useOption["a" /* useOption */], shallowMerge["a" /* default */]];
});

option_c = Option;
Option.propTypes = {
  attribute_code: prop_types["string"].isRequired,
  attribute_id: prop_types["string"],
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    title: prop_types["string"]
  }),
  label: prop_types["string"].isRequired,
  onSelectionChange: prop_types["func"],
  selectedValue: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  values: Object(prop_types["arrayOf"])(prop_types["object"]).isRequired
};
/* harmony default export */ var venia_components_ProductOptions_option = (Option);

var option_c;

$RefreshReg$(option_c, "Option");
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOptions.js
var useOptions = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOptions.js");

// CONCATENATED MODULE: ./src/venia/components/ProductOptions/options.js
var options_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Options = props => {
  options_s();

  const {
    classes,
    onSelectionChange,
    options,
    selectedValues = []
  } = props;
  const talonProps = Object(useOptions["a" /* useOptions */])({
    onSelectionChange,
    selectedValues
  });
  const {
    handleSelectionChange,
    selectedValueMap
  } = talonProps; // Render a list of options passing in any pre-selected values.

  return options.map(option => react_default.a.createElement(venia_components_ProductOptions_option, _extends({}, option, {
    classes: classes,
    key: option.attribute_id,
    onSelectionChange: handleSelectionChange,
    selectedValue: selectedValueMap.get(option.label)
  })));
};

options_s(Options, "yVusBKTxNsoWPx7lmkRLKCU0RoE=", false, function () {
  return [useOptions["a" /* useOptions */]];
});

options_c = Options;
Options.propTypes = {
  onSelectionChange: prop_types["func"],
  options: prop_types["array"].isRequired,
  selectedValues: prop_types["array"]
};
/* harmony default export */ var ProductOptions_options = (Options);

var options_c;

$RefreshReg$(options_c, "Options");
// CONCATENATED MODULE: ./src/venia/components/ProductOptions/index.js


/***/ })

}]);
//# sourceMappingURL=51.1c38673d0f1729ef6f03.js.map