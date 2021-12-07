(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/magento/pagebuilder/ContentTypes/Html/html.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Html/html.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".html-root-1Km {\n    word-wrap: break-word;\n}\n.html-root-1Km img {\n    max-width: 100%;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "html-root-1Km"
};

/***/ }),

/***/ "./src/magento/pagebuilder/ContentTypes/Html/index.js":
/*!************************************************************************!*\
  !*** ./src/magento/pagebuilder/ContentTypes/Html/index.js + 2 modules ***!
  \************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Html/html.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ pagebuilder_ContentTypes_Html_html; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Html/html.css
var Html_html = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/magento/pagebuilder/ContentTypes/Html/html.css");
var html_default = /*#__PURE__*/__webpack_require__.n(Html_html);

// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Html/html.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(html_default.a, options);



/* harmony default export */ var ContentTypes_Html_html = (html_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Html/html.js
var _s = $RefreshSig$();






const toHTML = str => ({
  __html: str
});
/**
 * Page Builder HTML component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Html
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that renders HTML with optional styling properties.
 */


const Html = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(ContentTypes_Html_html, props.classes);
  const {
    html,
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
  return react_default.a.createElement("div", {
    style: dynamicStyles,
    className: [classes.root, ...cssClasses].join(' '),
    dangerouslySetInnerHTML: toHTML(html)
  });
};
/**
 * Props for {@link Html}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the Html
 * @property {String} classes.root CSS classes for the root container element
 * @property {String} html HTML code to be rendered as part of component
 * @property {String} textAlign Alignment of the video within the parent container
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


_s(Html, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Html;
Html.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  html: prop_types["string"],
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
/* harmony default export */ var pagebuilder_ContentTypes_Html_html = (Html);

var _c;

$RefreshReg$(_c, "Html");
// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Html/index.js


/***/ })

}]);
//# sourceMappingURL=89.6e3f992c15edd3ebd0eb.js.map