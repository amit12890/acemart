(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/magento/pagebuilder/ContentTypes/Buttons/buttons.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Buttons/buttons.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".buttons-root-ya1 {\n    max-width: 100%;\n}\n.buttons-root-ya1 > div {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    max-width: 100%;\n}\n.buttons-root-ya1 button[class] {\n    max-width: 100%;\n    overflow: hidden;\n    min-width: var(--buttonMinWidth);\n}\n.buttons-stacked-1PR {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.buttons-inline-1A0 > div {\n    margin-inline-end: 0.5rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "buttons-root-ya1",
	"stacked": "buttons-stacked-1PR",
	"inline": "buttons-inline-1A0"
};

/***/ }),

/***/ "./src/magento/pagebuilder/ContentTypes/Buttons/index.js":
/*!***************************************************************************!*\
  !*** ./src/magento/pagebuilder/ContentTypes/Buttons/index.js + 2 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Buttons/buttons.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ContentTypes_Buttons_buttons; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Buttons/buttons.css
var buttons = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/magento/pagebuilder/ContentTypes/Buttons/buttons.css");
var buttons_default = /*#__PURE__*/__webpack_require__.n(buttons);

// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Buttons/buttons.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(buttons_default.a, options);



/* harmony default export */ var Buttons_buttons = (buttons_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Buttons/buttons.js
var _s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Page Builder Buttons component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Buttons
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that wraps {@link ButtonItem} components.
 */

const Buttons = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(Buttons_buttons, props.classes);
  const {
    appearance,
    isSameWidth,
    textAlign,
    border,
    borderColor,
    borderWidth,
    borderRadius,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    children,
    cssClasses = []
  } = props;
  const appearanceClassName = classes[`${appearance}`];
  const ref = Object(react["useRef"])(null);
  const [minWidth, setMinWidth] = react_default.a.useState(0);
  const cssCustomProps = {
    '--buttonMinWidth': minWidth ? minWidth + 'px' : null
  };

  const dynamicStyles = _objectSpread({
    border,
    borderColor,
    borderWidth,
    borderRadius,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  }, cssCustomProps);

  Object(react["useLayoutEffect"])(() => {
    if (!isSameWidth) {
      return;
    }

    const {
      current: el
    } = ref;
    let min = 0;

    for (const button of el.querySelectorAll('button')) {
      const {
        offsetWidth
      } = button;
      if (offsetWidth > min) min = offsetWidth;
    }

    setMinWidth(min);
  }, [isSameWidth]);
  const justifyMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };
  dynamicStyles.justifyContent = 'flex-start';

  if (textAlign) {
    dynamicStyles.justifyContent = justifyMap[textAlign] || 'flex-start';
    dynamicStyles.textAlign = textAlign;
  }

  return react_default.a.createElement("div", {
    ref: ref,
    style: dynamicStyles,
    className: [classes.root, appearanceClassName, ...cssClasses].join(' ')
  }, children);
};
/**
 * Props for {@link Buttons}
 *
 * @typedef props
 *
 * @property {String} appearance Sets buttons placement option
 * @property {Object} classes An object containing the class names for the Buttons
 * @property {String} classes.root CSS classes for the root container element
 * @property {String} classes.stacked CSS class represents 'stacked' buttons placement option
 * @property {String} classes.inline CSS class represents 'inline' buttons placement option
 * @property {Boolean} isSameWidth Toggles buttons to have the same width inside the Buttons container
 * @property {String} textAlign Horizontal alignment of the contents within the parent container
 * @property {String} border CSS border property
 * @property {String} borderColor CSS border color property
 * @property {String} borderWidth CSS border width property
 * @property {String} borderRadius CSS border radius property
 * @property {String} marginTop CSS margin top property
 * @property {String} marginRight CSS margin right property
 * @property {String} marginBottom CSS margin bottom property
 * @property {String} marginLeft CSS margin left property
 * @property {String} paddingTop CSS padding top property
 * @property {String} paddingRight CSS padding right property
 * @property {String} paddingBottom CSS padding bottom property
 * @property {String} paddingLeft CSS padding left property
 * @property {Array} cssClasses List of CSS classes to be applied to the component
 */


_s(Buttons, "09ZQCfpoTC+vi/fH+MatPBkAXF0=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Buttons;
Buttons.propTypes = {
  appearance: Object(prop_types["oneOf"])(['inline', 'stacked']),
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    stacked: prop_types["string"],
    inline: prop_types["string"]
  }),
  isSameWidth: prop_types["bool"],
  textAlign: prop_types["string"],
  border: prop_types["string"],
  borderColor: prop_types["string"],
  borderWidth: prop_types["string"],
  borderRadius: prop_types["string"],
  marginTop: prop_types["string"],
  marginRight: prop_types["string"],
  marginBottom: prop_types["string"],
  marginLeft: prop_types["string"],
  paddingTop: prop_types["string"],
  paddingRight: prop_types["string"],
  paddingBottom: prop_types["string"],
  paddingLeft: prop_types["string"],
  cssClasses: Object(prop_types["arrayOf"])(prop_types["string"])
};
/* harmony default export */ var ContentTypes_Buttons_buttons = (Buttons);

var _c;

$RefreshReg$(_c, "Buttons");
// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Buttons/index.js


/***/ })

}]);
//# sourceMappingURL=87.ac03ab125b1c504c6c5d.js.map