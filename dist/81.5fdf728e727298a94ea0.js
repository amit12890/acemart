(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/index.js + 2 modules ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/pagebuilder/lib/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/makeUrl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/tabItem.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ContentTypes_TabItem_tabItem; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@magento/pagebuilder/lib/utils.js
var utils = __webpack_require__("./node_modules/@magento/pagebuilder/lib/utils.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/makeUrl.js
var makeUrl = __webpack_require__("./node_modules/@magento/peregrine/lib/util/makeUrl.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/tabItem.css
var tabItem = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/tabItem.css");
var tabItem_default = /*#__PURE__*/__webpack_require__.n(tabItem);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/tabItem.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(tabItem_default.a, options);



/* harmony default export */ var TabItem_tabItem = (tabItem_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/tabItem.js
var _s = $RefreshSig$();







const {
  matchMedia
} = globalThis;
/**
 * Page Builder TabItem component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef TabItem
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a TabItem.
 */

const TabItem = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(TabItem_tabItem, props.classes);
  const {
    minHeight,
    verticalAlignment,
    backgroundColor,
    desktopImage,
    mobileImage,
    backgroundSize,
    backgroundPosition,
    backgroundAttachment,
    backgroundRepeat,
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
  let image = desktopImage;

  if (mobileImage && matchMedia && matchMedia('(max-width: 768px)').matches) {
    image = mobileImage;
  }

  const dynamicStyles = {
    minHeight,
    verticalAlignment,
    backgroundColor,
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

  if (image) {
    const resourceImage = Object(makeUrl["a" /* default */])(image, {
      type: 'image-wysiwyg',
      quality: 85
    });
    dynamicStyles.backgroundImage = `url(${resourceImage})`;
    dynamicStyles.backgroundSize = backgroundSize;
    dynamicStyles.backgroundPosition = backgroundPosition;
    dynamicStyles.backgroundAttachment = backgroundAttachment;
    dynamicStyles.backgroundRepeat = backgroundRepeat ? 'repeat' : 'no-repeat';
  }

  if (verticalAlignment) {
    dynamicStyles.display = 'flex';
    dynamicStyles.justifyContent = Object(utils["j" /* verticalAlignmentToFlex */])(verticalAlignment);
    dynamicStyles.flexDirection = 'column';
  }

  return react_default.a.createElement("div", {
    style: dynamicStyles,
    className: [cssClasses, classes.root].join(' ')
  }, children);
};
/**
 * Props for {@link TabItem}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the TabItem
 * @property {String} classes.root CSS class for the tab item root element
 * @property {String} tabName Name of the tab item
 * @property {String} verticalAlignment Vertical alignment of content within tab item
 * @property {String} minHeight CSS minimum height property
 * @property {String} backgroundColor CSS background-color property
 * @property {String} desktopImage Background image URL to be displayed on desktop devices
 * @property {String} mobileImage Background image URL to be displayed on mobile devices
 * @property {String} backgroundSize CSS background-size property
 * @property {String} backgroundPosition CSS background-position property
 * @property {String} backgroundAttachment CSS background-attachment property
 * @property {Boolean} backgroundRepeat CSS background-repeat property
 * @property {String} textAlign Alignment of content within the tab item
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


_s(TabItem, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = TabItem;
TabItem.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  tabName: prop_types["string"],
  verticalAlignment: Object(prop_types["oneOf"])(['top', 'middle', 'bottom']),
  minHeight: prop_types["string"],
  backgroundColor: prop_types["string"],
  desktopImage: prop_types["string"],
  mobileImage: prop_types["string"],
  backgroundSize: prop_types["string"],
  backgroundPosition: prop_types["string"],
  backgroundAttachment: prop_types["string"],
  backgroundRepeat: prop_types["bool"],
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
/* harmony default export */ var ContentTypes_TabItem_tabItem = (TabItem);

var _c;

$RefreshReg$(_c, "TabItem");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/index.js


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/tabItem.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/tabItem.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".tabItem-root-UHZ {\n    min-height: inherit;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "tabItem-root-UHZ"
};

/***/ })

}]);
//# sourceMappingURL=81.5fdf728e727298a94ea0.js.map