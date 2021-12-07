(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CmsBlock/block.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CmsBlock/block.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RichContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RichContent */ "./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js");



/**
 * CMS Block component.
 *
 * @typedef Block
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a CMS Block.
 */

const Block = ({
  content
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RichContent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  html: content
});
/**
 * Props for {@link Block}
 *
 * @typedef props
 *
 * @property {String} content Rich content of the block
 */


_c = Block;
Block.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
/* harmony default export */ __webpack_exports__["a"] = (Block);

var _c;

$RefreshReg$(_c, "Block");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js + 1 modules ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/RichContent/richContentRenderers.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css
var richContent = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css");
var richContent_default = /*#__PURE__*/__webpack_require__.n(richContent);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(richContent_default.a, options);



/* harmony default export */ var RichContent_richContent = (richContent_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/RichContent/richContentRenderers.js + 37 modules
var richContentRenderers = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/RichContent/richContentRenderers.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js
var _s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * RichContent component.
 *
 * This component serves as the pool to determine which type of content is being rendered
 * and pass the data off to the correct system.
 *
 * @typedef RichContent
 * @kind functional component
 *
 * @param {Object} props React component props
 *
 * @returns {React.Element} A React component that renders Heading with optional styling properties.
 */

const RichContent = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(RichContent_richContent, props.classes);

  const rendererProps = _objectSpread({}, props, {
    classes
  });

  for (const Renderer of richContentRenderers["a" /* default */]) {
    const {
      Component,
      canRender
    } = Renderer;

    if (canRender(rendererProps.html)) {
      return react_default.a.createElement(Component, rendererProps);
    }
  } // If no renderer returned a value


  if (true) {
    console.warn(`None of the following rich content renderers returned anything for the provided HTML.`, richContentRenderers["a" /* default */].map(r => `<${r.name}>`), props.html);
  }

  return null;
};
/**
 * Props for {@link RichContent}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the RichContent
 * @property {String} classes.root CSS class for the root container element
 * @property {String} html Content
 */


_s(RichContent, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = RichContent;
RichContent.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  html: prop_types["string"]
};
/* harmony default export */ var components_RichContent_richContent = __webpack_exports__["a"] = (RichContent);

var _c;

$RefreshReg$(_c, "RichContent");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".richContent-root-11l h1,\n.richContent-root-11l h2,\n.richContent-root-11l h3,\n.richContent-root-11l h4,\n.richContent-root-11l h5,\n.richContent-root-11l h6 {\n    word-break: break-word;\n    line-height: 1.25em;\n    margin-bottom: 0.5em;\n    margin-top: 1rem;\n}\n\n.richContent-root-11l h1 {\n    font-size: 2rem;\n    margin-top: 0.9em;\n    font-weight: 300;\n}\n.richContent-root-11l h2 {\n    font-size: 1.625rem;\n    font-weight: 400;\n}\n.richContent-root-11l h3 {\n    font-size: 1.375rem;\n    font-weight: 400;\n}\n.richContent-root-11l h4 {\n    font-size: 1.125rem;\n    font-weight: 600;\n}\n.richContent-root-11l h5 {\n    font-size: 1rem;\n    font-weight: 600;\n}\n.richContent-root-11l h6 {\n    font-size: 0.875rem;\n    font-weight: 600;\n}\n.richContent-root-11l p {\n    margin-bottom: 1rem;\n    line-height: 1.65em;\n}\n.richContent-root-11l img {\n    max-width: 100%;\n    margin: 1rem 0;\n}\n.richContent-root-11l ol,\n.richContent-root-11l ul {\n    margin-block-start: 1.2em;\n    margin-block-end: 1.2em;\n    padding-left: 2em;\n}\n.richContent-root-11l p + ol,\n.richContent-root-11l p + ul {\n    margin-block-start: 0.2em;\n}\n.richContent-root-11l ol {\n    list-style-type: decimal;\n}\n.richContent-root-11l ul {\n    list-style-type: disc;\n}\n.richContent-root-11l ol li,\n.richContent-root-11l ul li {\n    line-height: 1.65em;\n    padding: 1px 0.5rem;\n}\n.richContent-root-11l a {\n    text-decoration: underline;\n}\n.richContent-root-11l blockquote {\n    font-size: 1.375rem;\n    line-height: 1.875rem;\n    margin: 1rem 0;\n    font-weight: 300;\n    font-style: italic;\n}\n.richContent-root-11l table {\n    width: 100%;\n    margin: 1rem 0;\n    border-spacing: 0;\n    border-left: 1px solid rgb(var(--venia-global-color-border));\n    border-top: 1px solid rgb(var(--venia-global-color-border));\n}\n.richContent-root-11l table td,\n.richContent-root-11l table th {\n    text-align: left;\n    padding: 1rem;\n    font-size: 0.875rem;\n    line-height: 1.125em;\n    border-right: 1px solid rgb(var(--venia-global-color-border));\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n}\n.richContent-root-11l table th {\n    background-color: rgb(var(--venia-global-color-gray));\n}\n.richContent-root-11l .cms-content-important {\n    background: rgb(var(--venia-global-color-gray));\n    padding: 1.2rem 1rem;\n    font-size: 1.125rem;\n    border: 1px solid rgb(var(--venia-global-color-border));\n}\n.richContent-root-11l pre {\n    background: rgb(var(--venia-global-color-gray));\n    padding: 1rem;\n    border: 1px solid rgb(var(--venia-global-color-border));\n}\n\n@media only screen and (min-width: 769px) {\n    .richContent-root-11l h1 {\n        font-size: 3rem;\n        margin-top: 0.75em;\n        line-height: 1.05em;\n    }\n    .richContent-root-11l h2 {\n        font-size: 2.25rem;\n        line-height: 1.25em;\n    }\n    .richContent-root-11l h3 {\n        font-size: 1.75rem;\n        line-height: 1.25em;\n    }\n    .richContent-root-11l h4 {\n        font-size: 1.375rem;\n        line-height: 1.25em;\n        font-weight: 400;\n    }\n    .richContent-root-11l h5 {\n        font-size: 1.125rem;\n        line-height: 1.22em;\n        margin-bottom: 0.75em;\n    }\n    .richContent-root-11l h6 {\n        font-size: 1rem;\n        line-height: 1.22em;\n        margin-bottom: 0.75em;\n    }\n    .richContent-root-11l p {\n        margin-bottom: 1rem;\n        line-height: 1.5em;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "richContent-root-11l"
};

/***/ }),

/***/ "./src/magento/pagebuilder/ContentTypes/Block/index.js":
/*!*************************************************************************!*\
  !*** ./src/magento/pagebuilder/ContentTypes/Block/index.js + 1 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CmsBlock/block.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash/lodash.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ Block_block; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CmsBlock/block.js
var block = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CmsBlock/block.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("./node_modules/lodash/lodash.js");

// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Block/block.js




/**
 * Page Builder Block component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Block
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Block.
 */

const Block = props => {
  const {
    richContent,
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
  }; // mapping classes with js as pagebuilder not providing css style add

  const mapClasses = cssClasses.map(className => {
    return Object(lodash["get"])(classes, className, className);
  });
  return react_default.a.createElement("div", {
    style: dynamicStyles,
    className: mapClasses.join(' ')
  }, react_default.a.createElement(block["a" /* default */], {
    content: richContent
  }));
};
/**
 * Props for {@link Block}
 *
 * @typedef props
 *
 * @property {String} richContent Rich content of the block
 * @property {String} textAlign Alignment of the block within the parent container
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


_c = Block;
Block.propTypes = {
  richContent: prop_types["string"],
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
/* harmony default export */ var Block_block = (Block);

var _c;

$RefreshReg$(_c, "Block");
// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Block/index.js


/***/ })

}]);
//# sourceMappingURL=70.d66d03ac760a9f74f10b.js.map