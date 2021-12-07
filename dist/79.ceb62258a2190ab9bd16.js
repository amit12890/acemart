(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/index.js + 2 modules ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/divider.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ContentTypes_Divider_divider; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/divider.css
var divider = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/divider.css");
var divider_default = /*#__PURE__*/__webpack_require__.n(divider);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/divider.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(divider_default.a, options);



/* harmony default export */ var Divider_divider = (divider_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/divider.js
var _s = $RefreshSig$();





/**
 * Page Builder Divider component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Divider
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Divider.
 */

const Divider = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(Divider_divider, props.classes);
  const {
    width,
    color,
    thickness,
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
    cssClasses = []
  } = props;
  const dynamicStyles = {
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
    paddingLeft
  };
  const hrStyles = {
    width,
    borderColor: color,
    borderWidth: thickness
  };
  return react_default.a.createElement("div", {
    style: dynamicStyles,
    className: cssClasses.join(' ')
  }, react_default.a.createElement("hr", {
    style: hrStyles,
    className: classes.hr
  }));
};
/**
 * Props for {@link Divider}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the Divider
 * @property {String} classes.hr CSS classes for the hr element
 * @property {String} width Width of the divider
 * @property {String} color Color of the divider
 * @property {String} thickness Thickness of the divider
 * @property {String} textAlign Alignment of the divider within the parent container
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


_s(Divider, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Divider;
Divider.propTypes = {
  classes: Object(prop_types["shape"])({
    hr: prop_types["string"]
  }),
  width: prop_types["string"],
  color: prop_types["string"],
  thickness: prop_types["string"],
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
  cssClasses: Object(prop_types["arrayOf"])(prop_types["string"])
};
/* harmony default export */ var ContentTypes_Divider_divider = (Divider);

var _c;

$RefreshReg$(_c, "Divider");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/index.js


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/divider.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/divider.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".divider-hr-3On {\n    border: 0;\n    border-top: 1px solid #cccccc;\n    display: inline-block;\n    margin-bottom: 20px;\n    margin-top: 20px;\n    max-width: 100%;\n    width: 100%;\n}\n", ""]);

// Exports
exports.locals = {
	"hr": "divider-hr-3On"
};

/***/ })

}]);
//# sourceMappingURL=79.ceb62258a2190ab9bd16.js.map