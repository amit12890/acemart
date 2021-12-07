(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Map/configAggregator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@magento/pagebuilder/lib/ContentTypes/Map/configAggregator.js ***!
  \************************************************************************************/
/*! exports provided: default, mapDefaultProps */
/*! exports used: default, mapDefaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapDefaultProps; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./node_modules/@magento/pagebuilder/lib/utils.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["a"] = (node => {
  const locations = JSON.parse(node.getAttribute('data-locations')).map(location => {
    location.name = location.location_name;
    delete location.location_name;
    location.country = Array.isArray(location.country) ? location.country.join(' ') : location.country;
    return location;
  });
  const isShowControls = node.getAttribute('data-show-controls') === 'true';
  return _objectSpread({
    height: node.style.height,
    locations,
    mapOptions: Object.assign({}, mapDefaultProps.mapOptions, {
      disableDefaultUI: !isShowControls,
      mapTypeControl: isShowControls
    })
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getAdvanced */ "a"])(node));
});
const mapDefaultProps = {
  apiKey: "",
  locations: [],
  mapOptions: {
    zoom: 8,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    disableDefaultUI: false,
    mapTypeControl: true
  }
};

/***/ }),

/***/ "./node_modules/@magento/pagebuilder/lib/resolveLinkProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@magento/pagebuilder/lib/resolveLinkProps.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Resolve link properties
 *
 * @param {string} link
 */
/* harmony default export */ __webpack_exports__["a"] = (link => {
  let isExternalUrl;
  const linkProps = {};

  try {
    const baseUrlObj = new URL("https://qa-acemart-backend.magedelight.magentoprojects.net");
    const urlObj = new URL(link);
    isExternalUrl = baseUrlObj.host !== urlObj.host;

    if (isExternalUrl) {
      linkProps['href'] = link;
    } else {
      linkProps['to'] = urlObj.pathname;
    }
  } catch (e) {
    linkProps['href'] = link;
  }

  return linkProps;
});

/***/ }),

/***/ "./node_modules/@magento/pagebuilder/lib/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/@magento/pagebuilder/lib/utils.js ***!
  \********************************************************/
/*! exports provided: getBackgroundImages, getVerticalAlignment, verticalAlignmentToFlex, flexToVerticalAlignment, getAdvanced, getPadding, getMargin, getBorder, getTextAlign, getCssClasses, getIsHidden */
/*! exports used: getAdvanced, getBackgroundImages, getBorder, getCssClasses, getIsHidden, getMargin, getPadding, getTextAlign, getVerticalAlignment, verticalAlignmentToFlex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBackgroundImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getVerticalAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return verticalAlignmentToFlex; });
/* unused harmony export flexToVerticalAlignment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdvanced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getTextAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getIsHidden; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Retrieve background images from a master format node
 *
 * @param node
 * @returns {{mobileImage: null, desktopImage: null}}
 */
function getBackgroundImages(node) {
  const images = node.getAttribute('data-background-images');
  const response = {
    desktopImage: null,
    mobileImage: null,
    backgroundSize: node.style.backgroundSize,
    backgroundPosition: node.style.backgroundPosition,
    backgroundAttachment: node.style.backgroundAttachment,
    backgroundRepeat: node.style.backgroundRepeat !== 'no-repeat'
  };

  if (images) {
    const imagesStructure = JSON.parse(images.replace(/\\"/g, '"'));

    if (imagesStructure.desktop_image) {
      response.desktopImage = imagesStructure.desktop_image;
    }

    if (imagesStructure.mobile_image) {
      response.mobileImage = imagesStructure.mobile_image;
    }
  }

  return response;
}
const alignmentToFlex = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end'
};
/**
 * Retrieve vertical alignment from a master format node
 *
 * @param node
 * @returns {{verticalAlignment: null}}
 */

function getVerticalAlignment(node) {
  let verticalAlignment = null;

  if (node.style.justifyContent) {
    verticalAlignment = flexToVerticalAlignment(node.style.justifyContent);
  }

  return {
    verticalAlignment
  };
}
/**
 * Convert vertical alignment values to flex values
 *
 * @param alignment
 * @returns {*}
 */

function verticalAlignmentToFlex(alignment) {
  return alignmentToFlex[alignment];
}
/**
 * Convert flex to vertical alignment values
 *
 * @param flex
 * @returns {*}
 */

function flexToVerticalAlignment(flex) {
  const flexToAlignment = Object.assign({}, ...Object.entries(alignmentToFlex).map(([a, b]) => ({
    [b]: a
  })));
  return flexToAlignment[flex];
}
/**
 * Retrieve advanced props from content type node
 *
 * @param node
 * @returns {{border: (string|string[]|string), marginRight: (*|string), borderColor: *, paddingBottom: (*|number|string), borderRadius: *, borderWidth: *, paddingRight: (*|number|string), marginBottom: (*|string), paddingTop: (*|string), paddingLeft: (*|string), marginTop: (*|string), marginLeft: (*|string|{get}|number)}}
 */

function getAdvanced(node) {
  return _objectSpread({}, getPadding(node), getMargin(node), getBorder(node), getTextAlign(node), getCssClasses(node), getIsHidden(node));
}
/**
 * Retrieve the padding from a content type node
 *
 * @param node
 * @returns {{paddingBottom: *, paddingRight: *, paddingTop: *, paddingLeft: *}}
 */

function getPadding(node) {
  return {
    paddingTop: node.style.paddingTop,
    paddingRight: node.style.paddingRight,
    paddingBottom: node.style.paddingBottom,
    paddingLeft: node.style.paddingLeft
  };
}
/**
 * Retrieve the margin from a content type node
 *
 * @param node
 * @returns {{marginRight: *, marginBottom: *, marginTop: *, marginLeft: *}}
 */

function getMargin(node) {
  return {
    marginTop: node.style.marginTop,
    marginRight: node.style.marginRight,
    marginBottom: node.style.marginBottom,
    marginLeft: node.style.marginLeft
  };
}
/**
 * Retrieve the border from a content type node
 *
 * @param node
 * @returns {{border: (string|string), borderColor: *, borderRadius: *, borderWidth: *}}
 */

function getBorder(node) {
  return {
    border: node.style.borderStyle,
    borderColor: node.style.borderColor,
    borderWidth: node.style.borderWidth,
    borderRadius: node.style.borderRadius
  };
}
/**
 * Retrieve the text align from a content type node
 *
 * @param node
 * @returns {{textAlign: *}}
 */

function getTextAlign(node) {
  return {
    textAlign: node.style.textAlign
  };
}
/**
 * Retrieve the CSS classes from a content type node
 * @param node
 * @returns {{cssClasses: any}}
 */

function getCssClasses(node) {
  return {
    cssClasses: node.getAttribute('class') ? node.getAttribute('class').split(' ') : []
  };
}
/**
 * Retrieve if CSS display property is set to none from a content type node
 *
 * @param node
 * @returns {{isHidden: boolean}}
 */

function getIsHidden(node) {
  return {
    isHidden: node.style.display === 'none'
  };
}

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Button/button.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Button/button.css (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Button/button.css
var Button_button = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css");
var button_default = /*#__PURE__*/__webpack_require__.n(Button_button);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(button_default.a, options);



/* harmony default export */ var components_Button_button = (button_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const getRootClassName = (priority, negative) => `root_${priority}Priority${negative ? 'Negative' : ''}`;
/**
 * A component for buttons.
 *
 * @typedef Button
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a single button.
 */


const Button = props => {
  _s();

  const {
    children,
    classes: propClasses,
    priority,
    type,
    negative,
    disabled,
    ariaLabel
  } = props,
        restProps = _objectWithoutProperties(props, ["children", "classes", "priority", "type", "negative", "disabled", "ariaLabel"]);

  const classes = Object(shallowMerge["a" /* default */])(components_Button_button, propClasses);
  const rootClassName = classes[getRootClassName(priority, negative)];
  return react_default.a.createElement("button", _extends({
    className: rootClassName,
    type: type,
    disabled: disabled,
    "aria-label": ariaLabel
  }, restProps), react_default.a.createElement("span", {
    className: classes.content
  }, children));
};
/**
 * Props for {@link Button}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the
 * Button component.
 * @property {string} classes.content classes for the button content
 * @property {string} classes.root classes for root container
 * @property {string} classes.root_highPriority classes for Button if
 * high priority.
 * @property {string} classes.root_lowPriority classes for Button if
 * low priority.
 * @property {string} classes.root_normalPriority classes for Button if
 * normal priority.
 * @property {string} priority the priority/importance of the Button
 * @property {string} type the type of the Button
 * @property {bool} negative whether the button should be displayed in red for a negative action
 * @property {bool} disabled is the button disabled
 */


_s(Button, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Button;
Button.propTypes = {
  classes: Object(prop_types["shape"])({
    content: prop_types["string"],
    root: prop_types["string"],
    root_highPriority: prop_types["string"],
    root_lowPriority: prop_types["string"],
    root_normalPriority: prop_types["string"]
  }),
  priority: Object(prop_types["oneOf"])(['high', 'low', 'normal']).isRequired,
  type: Object(prop_types["oneOf"])(['button', 'reset', 'submit']).isRequired,
  negative: prop_types["bool"],
  disabled: prop_types["bool"]
};
Button.defaultProps = {
  priority: 'normal',
  type: 'button',
  negative: false,
  disabled: false
};
/* harmony default export */ var lib_components_Button_button = __webpack_exports__["a"] = (Button);

var _c;

$RefreshReg$(_c, "Button");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/RichContent/richContentRenderers.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/RichContent/richContentRenderers.js + 37 modules ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/pagebuilder/lib/ContentTypes/Map/configAggregator.js because of ./node_modules/@magento/pagebuilder/lib/ContentTypes/Map/map.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/pagebuilder/lib/resolveLinkProps.js because of ./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/pagebuilder/lib/utils.js because of ./node_modules/@magento/pagebuilder/lib/ContentTypes/Map/map.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/makeUrl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/ButtonItem/buttonItem.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Column/column.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/ColumnGroup/columnGroup.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Image/image.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Row/row.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Text/text.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./node_modules/@magento/pagebuilder/lib/index.js
var lib_namespaceObject = {};
__webpack_require__.r(lib_namespaceObject);
__webpack_require__.d(lib_namespaceObject, "default", function() { return PageBuilder; });
__webpack_require__.d(lib_namespaceObject, "Component", function() { return PageBuilder; });
__webpack_require__.d(lib_namespaceObject, "canRender", function() { return detectPageBuilder; });

// NAMESPACE OBJECT: ./node_modules/@magento/venia-ui/lib/components/RichContent/plainHtmlRenderer.js
var plainHtmlRenderer_namespaceObject = {};
__webpack_require__.r(plainHtmlRenderer_namespaceObject);
__webpack_require__.d(plainHtmlRenderer_namespaceObject, "canRender", function() { return canRender; });
__webpack_require__.d(plainHtmlRenderer_namespaceObject, "Component", function() { return plainHtmlRenderer_Component; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@magento/pagebuilder/lib/utils.js
var utils = __webpack_require__("./node_modules/@magento/pagebuilder/lib/utils.js");

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Row/configAggregator.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var configAggregator = ((node, props) => {
  // Determine which node holds the data for the appearance
  const dataNode = props.appearance === 'contained' ? node.childNodes[0] : node;
  const videoOverlayColor = props.appearance === 'full-width' || props.appearance === 'full-bleed' ? node.childNodes[0] && node.childNodes[0].getAttribute('data-video-overlay-color') : dataNode.childNodes[0] && dataNode.childNodes[0].getAttribute('data-video-overlay-color');
  return _objectSpread({
    minHeight: dataNode.style.minHeight ? dataNode.style.minHeight : null
  }, Object(utils["i" /* getVerticalAlignment */])(dataNode), {
    backgroundColor: dataNode.style.backgroundColor ? dataNode.style.backgroundColor : null
  }, Object(utils["b" /* getBackgroundImages */])(dataNode), {
    enableParallax: dataNode.getAttribute('data-enable-parallax') === '1',
    parallaxSpeed: parseFloat(dataNode.getAttribute('data-parallax-speed')),
    backgroundType: dataNode.getAttribute('data-background-type'),
    videoSrc: dataNode.getAttribute('data-video-src'),
    videoFallbackSrc: dataNode.getAttribute('data-video-fallback-src'),
    videoLoop: dataNode.getAttribute('data-video-loop') === 'true',
    videoPlayOnlyVisible: dataNode.getAttribute('data-video-play-only-visible') === 'true',
    videoLazyLoading: dataNode.getAttribute('data-video-lazy-load') === 'true',
    videoOverlayColor: videoOverlayColor || null
  }, Object(utils["a" /* getAdvanced */])(dataNode), Object(utils["e" /* getIsHidden */])(node));
});
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Row/row.css
var row = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Row/row.css");
var row_default = /*#__PURE__*/__webpack_require__.n(row);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Row/row.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(row_default.a, options);



/* harmony default export */ var Row_row = (row_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/makeUrl.js
var makeUrl = __webpack_require__("./node_modules/@magento/peregrine/lib/util/makeUrl.js");

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Row/row.js
var _s = $RefreshSig$();







const {
  matchMedia
} = globalThis;
/**
 * Page Builder Row component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Row
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Row which contains content.
 */

const Row = props => {
  _s();

  const backgroundElement = Object(react["useRef"])(null);
  const [bgImageStyle, setBgImageStyle] = Object(react["useState"])(null);
  const classes = Object(shallowMerge["a" /* default */])(Row_row, props.classes);
  const {
    appearance = 'contained',
    verticalAlignment,
    minHeight,
    backgroundColor,
    desktopImage,
    mobileImage,
    backgroundSize,
    backgroundPosition,
    backgroundAttachment,
    backgroundRepeat,
    enableParallax,
    parallaxSpeed = 0.5,
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
    cssClasses = [],
    backgroundType,
    videoSrc,
    videoFallbackSrc,
    videoLoop,
    videoPlayOnlyVisible,
    videoLazyLoading,
    videoOverlayColor
  } = props;
  let image = desktopImage;

  if (mobileImage && matchMedia && matchMedia('(max-width: 768px)').matches) {
    image = mobileImage;
  }

  const dynamicStyles = {
    minHeight,
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
  const videoOverlayStyles = {
    backgroundColor: videoOverlayColor
  };

  if (image) {
    dynamicStyles.backgroundImage = bgImageStyle;
    dynamicStyles.backgroundSize = backgroundSize;
    dynamicStyles.backgroundPosition = backgroundPosition;
    dynamicStyles.backgroundAttachment = backgroundAttachment;
    dynamicStyles.backgroundRepeat = backgroundRepeat ? 'repeat' : 'no-repeat';
  }

  if (verticalAlignment) {
    dynamicStyles.display = 'flex';
    dynamicStyles.justifyContent = Object(utils["j" /* verticalAlignmentToFlex */])(verticalAlignment);
    dynamicStyles.flexDirection = 'column';
  } // Determine the containers width and optimize the image


  Object(react["useEffect"])(() => {
    // Intelligently resize cover background images
    if (image && backgroundElement.current) {
      if (backgroundSize === 'cover') {
        let elementWidth = backgroundElement.current.offsetWidth;
        let elementHeight = backgroundElement.current.offsetHeight; // If parallax is enabled resize at a higher resolution, as the image will be zoomed

        if (enableParallax) {
          elementWidth = Math.round(elementWidth * 1.25);
          elementHeight = Math.round(elementHeight * 1.25);
        }

        setBgImageStyle(`url(${Object(makeUrl["a" /* default */])(image, {
          type: 'image-wysiwyg',
          width: elementWidth,
          height: elementHeight,
          quality: 85,
          crop: false,
          fit: 'cover'
        })})`);
      } else {
        setBgImageStyle(`url(${Object(makeUrl["a" /* default */])(image, {
          type: 'image-wysiwyg',
          quality: 85
        })})`);
      }
    }
  }, [backgroundSize, enableParallax, image, setBgImageStyle]); // Initiate jarallax for Parallax and background video

  Object(react["useEffect"])(() => {
    let parallaxElement;
    let jarallax;
    let jarallaxVideo;

    if (enableParallax && bgImageStyle && backgroundType !== 'video') {
      ({
        jarallax
      } = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js"));
      parallaxElement = backgroundElement.current;
      jarallax(parallaxElement, {
        speed: parallaxSpeed,
        imgSize: backgroundSize,
        imgPosition: backgroundPosition,
        imgRepeat: backgroundRepeat ? 'repeat' : 'no-repeat'
      });
    }

    if (backgroundType === 'video') {
      ({
        jarallax
      } = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js"));
      ({
        jarallaxVideo
      } = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js"));
      jarallaxVideo();
      parallaxElement = backgroundElement.current;
      jarallax(parallaxElement, {
        speed: enableParallax ? parallaxSpeed : 1,
        imgSrc: videoFallbackSrc ? Object(makeUrl["a" /* default */])(videoFallbackSrc, {
          type: 'image-wysiwyg',
          quality: 85
        }) : null,
        videoSrc,
        videoLoop,
        videoPlayOnlyVisible,
        videoLazyLoading
      });
      parallaxElement.jarallax.video && parallaxElement.jarallax.video.on('started', () => {
        const self = parallaxElement.jarallax; // show video

        if (self.$video) {
          self.$video.style.visibility = 'visible';
        }
      });
    }

    return () => {
      if (enableParallax && parallaxElement && bgImageStyle || parallaxElement && backgroundType === 'video') {
        jarallax(parallaxElement, 'destroy');
      }
    };
  }, [backgroundPosition, backgroundRepeat, backgroundSize, bgImageStyle, enableParallax, parallaxSpeed, backgroundType, videoSrc, videoFallbackSrc, videoLoop, videoPlayOnlyVisible, videoLazyLoading]);
  const videoOverlay = videoOverlayColor ? react_default.a.createElement("div", {
    className: classes.videoOverlay,
    style: videoOverlayStyles
  }) : null;

  if (appearance === 'full-bleed') {
    return react_default.a.createElement("div", {
      ref: backgroundElement,
      style: dynamicStyles,
      className: [classes.root, ...cssClasses].join(' ')
    }, videoOverlay, children);
  }

  if (appearance === 'full-width') {
    return react_default.a.createElement("div", {
      ref: backgroundElement,
      style: dynamicStyles,
      className: [classes.root, ...cssClasses].join(' ')
    }, videoOverlay, react_default.a.createElement("div", {
      className: classes.contained
    }, children));
  }

  return react_default.a.createElement("div", {
    className: [classes.contained, ...cssClasses].join(' ')
  }, react_default.a.createElement("div", {
    ref: backgroundElement,
    className: classes.inner,
    style: dynamicStyles
  }, videoOverlay, children));
};
/**
 * Props for {@link Row}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the Row
 * @property {String} classes.contained CSS class for the contained appearance element
 * @property {String} classes.inner CSS class for the inner appearance element
 * @property {String} classes.root CSS class for the row root element
 * @property {String} classes.videoOverlay CSS class for the videoOverlay element
 * @property {String} minHeight CSS minimum height property
 * @property {String} backgroundColor CSS background-color property
 * @property {String} desktopImage Background image URL to be displayed on desktop devices
 * @property {String} mobileImage Background image URL to be displayed on mobile devices
 * @property {String} backgroundSize CSS background-size property
 * @property {String} backgroundPosition CSS background-position property
 * @property {String} backgroundAttachment CSS background-attachment property
 * @property {Boolean} backgroundRepeat CSS background-repeat property
 * @property {Boolean} enableParallax Enable parallax on this row
 * @property {Number} parallaxSpeed The speed which Parallax should scroll, from -1.0 to 2.0
 * @property {String} textAlign Alignment of content within the row
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
 * @property {String} backgroundType Background type
 * @property {String} videoSrc URL to the video
 * @property {String} videoFallbackSrc URL to the image which will be displayed before video
 * @property {Boolean} videoLoop Play video in loop
 * @property {Boolean} videoPlayOnlyVisible Play video when it is visible
 * @property {Boolean} videoLazyLoading Load video when it is visible
 * @property {String} videoOverlayColor Color for video overlay
 */


_s(Row, "f+y2EjTax3dUvXk6ADYh5YLaIN4=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Row;
Row.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    contained: prop_types["string"],
    inner: prop_types["string"],
    videoOverlay: prop_types["string"]
  }),
  appearance: Object(prop_types["oneOf"])(['contained', 'full-width', 'full-bleed']),
  verticalAlignment: Object(prop_types["oneOf"])(['top', 'middle', 'bottom']),
  minHeight: prop_types["string"],
  backgroundColor: prop_types["string"],
  desktopImage: prop_types["string"],
  mobileImage: prop_types["string"],
  backgroundSize: prop_types["string"],
  backgroundPosition: prop_types["string"],
  backgroundAttachment: prop_types["string"],
  backgroundRepeat: prop_types["bool"],
  enableParallax: prop_types["bool"],
  parallaxSpeed: prop_types["number"],
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
  cssClasses: Object(prop_types["arrayOf"])(prop_types["string"]),
  backgroundType: prop_types["string"],
  videoSrc: prop_types["string"],
  videoFallbackSrc: prop_types["string"],
  videoLoop: prop_types["bool"],
  videoPlayOnlyVisible: prop_types["bool"],
  videoLazyLoading: prop_types["bool"],
  videoOverlayColor: prop_types["string"]
};
/* harmony default export */ var ContentTypes_Row_row = (Row);

var _c;

$RefreshReg$(_c, "Row");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Column/configAggregator.js
function configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Column_configAggregator = (node => {
  return configAggregator_objectSpread({
    minHeight: node.style.minHeight ? node.style.minHeight : null,
    display: node.style.display,
    width: node.style.width,
    backgroundColor: node.style.backgroundColor
  }, Object(utils["a" /* getAdvanced */])(node), Object(utils["b" /* getBackgroundImages */])(node), Object(utils["i" /* getVerticalAlignment */])(node));
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Column/column.css
var column = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Column/column.css");
var column_default = /*#__PURE__*/__webpack_require__.n(column);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Column/column.css

            

var column_options = {"injectType":"styleTag"};

column_options.insert = "head";
column_options.singleton = false;

var column_update = injectStylesIntoStyleTag_default()(column_default.a, column_options);



/* harmony default export */ var Column_column = (column_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Column/column.js
var column_s = $RefreshSig$();






const {
  matchMedia: column_matchMedia
} = globalThis;
/**
 * Page Builder Column component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Column
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Column.
 */

const Column = props => {
  column_s();

  const classes = Object(shallowMerge["a" /* default */])(Column_column, props.classes);
  const [bgImageStyle, setBgImageStyle] = Object(react["useState"])(null);
  const columnElement = Object(react["useRef"])(null);
  const {
    appearance,
    backgroundAttachment,
    backgroundColor,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    border,
    borderColor,
    borderRadius,
    borderWidth,
    children,
    cssClasses = [],
    desktopImage,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    minHeight,
    mobileImage,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    textAlign,
    verticalAlignment,
    width
  } = props;
  let image = desktopImage;

  if (mobileImage && column_matchMedia && column_matchMedia('(max-width: 768px)').matches) {
    image = mobileImage;
  }

  const flexDirection = 'column';
  const display = 'flex';
  let alignSelf;

  switch (appearance) {
    case 'align-top':
      alignSelf = 'flex-start';
      break;

    case 'align-center':
      alignSelf = 'center';
      break;

    case 'align-bottom':
      alignSelf = 'flex-end';
      break;

    case 'full-height':
    default:
      alignSelf = 'stretch';
      break;
  }

  let justifyContent;

  switch (verticalAlignment) {
    case 'top':
    default:
      justifyContent = 'flex-start';
      break;

    case 'middle':
      justifyContent = 'center';
      break;

    case 'bottom':
      justifyContent = 'flex-end';
      break;
  }

  const dynamicStyles = {
    alignSelf,
    backgroundColor,
    border,
    borderColor,
    borderRadius,
    borderWidth,
    display,
    flexDirection,
    justifyContent,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    minHeight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    textAlign,
    verticalAlignment,
    width
  };

  if (image) {
    dynamicStyles.backgroundImage = bgImageStyle;
    dynamicStyles.backgroundSize = backgroundSize;
    dynamicStyles.backgroundPosition = backgroundPosition;
    dynamicStyles.backgroundAttachment = backgroundAttachment;
    dynamicStyles.backgroundRepeat = backgroundRepeat ? 'repeat' : 'no-repeat';
  } // Determine the containers width and optimize the image


  Object(react["useEffect"])(() => {
    if (image && columnElement.current) {
      if (backgroundSize === 'cover') {
        setBgImageStyle(`url(${Object(makeUrl["a" /* default */])(image, {
          type: 'image-wysiwyg',
          width: columnElement.current.offsetWidth,
          height: columnElement.current.offsetHeight,
          quality: 85,
          crop: false,
          fit: 'cover'
        })})`);
      } else {
        setBgImageStyle(`url(${Object(makeUrl["a" /* default */])(image, {
          type: 'image-wysiwyg',
          quality: 85
        })})`);
      }
    }
  }, [backgroundSize, image, setBgImageStyle]);
  return react_default.a.createElement("div", {
    style: dynamicStyles,
    ref: columnElement,
    className: [classes.root, ...cssClasses].join(' ')
  }, children);
};
/**
 * Props for {@link Column}
 *
 * @typedef props
 *
 * @property {String} appearance Converts to CSS align-self sub-property of the flexbox item
 * @property {String} backgroundAttachment CSS background-attachment property
 * @property {String} backgroundColor CSS background-color property
 * @property {String} backgroundPosition CSS background-position property
 * @property {Boolean} backgroundRepeat CSS background-repeat property
 * @property {String} backgroundSize CSS background-size property
 * @property {String} border CSS border property
 * @property {String} borderColor CSS border color property
 * @property {String} borderRadius CSS border radius property
 * @property {String} borderWidth CSS border width property
 * @property {Object} classes An object containing the class names for the Column
 * @property {String} classes.root CSS classes for the root container element
 * @property {Array} cssClasses List of CSS classes to be applied to the component
 * @property {String} desktopImage Background image url to be used for desktop screen width
 * @property {String} marginBottom CSS margin bottom property
 * @property {String} marginLeft CSS margin left property
 * @property {String} marginRight CSS margin right property
 * @property {String} marginTop CSS margin top property
 * @property {String} maxWidth Maximum width of the video
 * @property {String} minHeight - CSS min-height property
 * @property {String} mobileImage Background image url to be used for mobile screen width
 * @property {String} paddingBottom CSS padding bottom property
 * @property {String} paddingLeft CSS padding left property
 * @property {String} paddingRight CSS padding right property
 * @property {String} paddingTop CSS padding top property
 * @property {String} textAlign Horisontal alignment of the contents within the parent container
 * @property {String} verticalAlignment Vertical alignment of the contents within the parent container
 * @property {String} width CSS width property
 */


column_s(Column, "hY5pCU/70+iMueFqefSx8IFJZEc=", false, function () {
  return [shallowMerge["a" /* default */]];
});

column_c = Column;
Column.propTypes = {
  appearance: Object(prop_types["oneOf"])(['align-top', 'align-center', 'align-bottom', 'full-height']),
  backgroundAttachment: prop_types["string"],
  backgroundColor: prop_types["string"],
  backgroundPosition: prop_types["string"],
  backgroundRepeat: prop_types["bool"],
  backgroundSize: prop_types["string"],
  border: prop_types["string"],
  borderColor: prop_types["string"],
  borderRadius: prop_types["string"],
  borderWidth: prop_types["string"],
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  cssClasses: Object(prop_types["arrayOf"])(prop_types["string"]),
  desktopImage: prop_types["string"],
  marginBottom: prop_types["string"],
  marginLeft: prop_types["string"],
  marginRight: prop_types["string"],
  marginTop: prop_types["string"],
  minHeight: prop_types["string"],
  mobileImage: prop_types["string"],
  paddingBottom: prop_types["string"],
  paddingRight: prop_types["string"],
  paddingTop: prop_types["string"],
  textAlign: prop_types["string"],
  verticalAlignment: Object(prop_types["oneOf"])(['top', 'middle', 'bottom']),
  width: prop_types["string"]
};
/* harmony default export */ var ContentTypes_Column_column = (Column);

var column_c;

$RefreshReg$(column_c, "Column");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/ColumnGroup/configAggregator.js
/* harmony default export */ var ColumnGroup_configAggregator = (node => {
  return {
    display: node.style.display
  };
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/ColumnGroup/columnGroup.css
var columnGroup = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/ColumnGroup/columnGroup.css");
var columnGroup_default = /*#__PURE__*/__webpack_require__.n(columnGroup);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/ColumnGroup/columnGroup.css

            

var columnGroup_options = {"injectType":"styleTag"};

columnGroup_options.insert = "head";
columnGroup_options.singleton = false;

var columnGroup_update = injectStylesIntoStyleTag_default()(columnGroup_default.a, columnGroup_options);



/* harmony default export */ var ColumnGroup_columnGroup = (columnGroup_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/ColumnGroup/columnGroup.js
var columnGroup_s = $RefreshSig$();





/**
 * Page Builder ColumnGroup component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef ColumnGroup
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that wraps {@link Column} components.
 */

const ColumnGroup = props => {
  columnGroup_s();

  const classes = Object(shallowMerge["a" /* default */])(ColumnGroup_columnGroup, props.classes);
  const {
    display,
    children
  } = props;
  const dynamicStyles = {
    display
  };
  return react_default.a.createElement("div", {
    style: dynamicStyles,
    className: classes.root
  }, children);
};
/**
 * Props for {@link ColumnGroup}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the ColumnGroup
 * @property {String} classes.root CSS classes for the root container element
 * @property {String} display CSS display property
 */


columnGroup_s(ColumnGroup, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

columnGroup_c = ColumnGroup;
ColumnGroup.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  display: prop_types["string"]
};
/* harmony default export */ var ContentTypes_ColumnGroup_columnGroup = (ColumnGroup);

var columnGroup_c;

$RefreshReg$(columnGroup_c, "ColumnGroup");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Image/configAggregator.js
function Image_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Image_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Image_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Image_configAggregator = (node => {
  if (!node.childNodes[0]) {
    return {};
  }

  const imageNode = node.childNodes[0].nodeName === 'A' ? node.childNodes[0].childNodes : node.childNodes;

  const props = Image_configAggregator_objectSpread({
    desktopImage: imageNode[0] ? imageNode[0].getAttribute('src') : null,
    mobileImage: imageNode[1] ? imageNode[1].getAttribute('src') : null,
    altText: imageNode[0] ? imageNode[0].getAttribute('alt') : null,
    title: imageNode[0] ? imageNode[0].getAttribute('title') : null,
    openInNewTab: node.childNodes[0].getAttribute('target') === '_blank'
  }, Object(utils["g" /* getPadding */])(node), Object(utils["f" /* getMargin */])(node), imageNode[0] ? Object(utils["c" /* getBorder */])(imageNode[0]) : [], Object(utils["d" /* getCssClasses */])(node), Object(utils["h" /* getTextAlign */])(node), Object(utils["e" /* getIsHidden */])(node));

  if (props.desktopImage === props.mobileImage) {
    props.mobileImage = null;
  }

  if (node.childNodes[0].nodeName === 'A') {
    props.link = node.childNodes[0].getAttribute('href');
    props.linkType = node.childNodes[0].getAttribute('data-link-type');
  }

  const captionElement = node.querySelector('figcaption');

  if (captionElement) {
    props.caption = captionElement.textContent;
  }

  return props;
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Image/image.css
var Image_image = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Image/image.css");
var image_default = /*#__PURE__*/__webpack_require__.n(Image_image);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Image/image.css

            

var image_options = {"injectType":"styleTag"};

image_options.insert = "head";
image_options.singleton = false;

var image_update = injectStylesIntoStyleTag_default()(image_default.a, image_options);



/* harmony default export */ var ContentTypes_Image_image = (image_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/@magento/pagebuilder/lib/resolveLinkProps.js
var resolveLinkProps = __webpack_require__("./node_modules/@magento/pagebuilder/lib/resolveLinkProps.js");

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Image/image.js
var image_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








/**
 * Page Builder Image component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Image
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays an Image.
 */

const Image = props => {
  image_s();

  const classes = Object(shallowMerge["a" /* default */])(ContentTypes_Image_image, props.classes);
  const {
    desktopImage,
    mobileImage,
    altText,
    title,
    link,
    openInNewTab,
    caption,
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
  const figureStyles = {
    textAlign,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  };
  const imageStyles = {
    border,
    borderColor,
    borderWidth,
    borderRadius
  }; // Don't render anything if there is no image to be rendered

  if (!desktopImage && !mobileImage) {
    return null;
  }

  const SourceFragment = mobileImage ? react_default.a.createElement("source", {
    media: "(max-width: 768px)",
    srcSet: Object(makeUrl["a" /* default */])(mobileImage, {
      type: 'image-wysiwyg',
      quality: 85
    })
  }) : '';
  const PictureFragment = react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("picture", null, SourceFragment, react_default.a.createElement("img", {
    className: classes.img,
    src: Object(makeUrl["a" /* default */])(desktopImage, {
      type: 'image-wysiwyg',
      quality: 85
    }),
    title: title,
    alt: altText,
    style: imageStyles,
    loading: "lazy"
  })), caption ? react_default.a.createElement("figcaption", null, caption) : '');

  if (typeof link === 'string') {
    const linkProps = Object(resolveLinkProps["a" /* default */])(link);
    const LinkComponent = linkProps.to ? react_router_dom["b" /* Link */] : 'a';
    return react_default.a.createElement("figure", {
      style: figureStyles,
      className: cssClasses.join(' ')
    }, react_default.a.createElement(LinkComponent, _extends({}, linkProps, openInNewTab ? {
      target: '_blank'
    } : ''), PictureFragment));
  } else {
    return react_default.a.createElement("figure", {
      style: figureStyles,
      className: cssClasses.join(' ')
    }, PictureFragment);
  }
};
/**
 * Props for {@link Image}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the Image
 * @property {String} classes.img CSS classes for the img element
 * @property {String} desktopImage URL src of the desktop image
 * @property {String} mobileImage URL src of the mobile image
 * @property {String} altText Alternate text
 * @property {String} title Title of the image
 * @property {String} link URL to redirect to
 * @property {String} linkType Type of link
 * @property {bool} openInNewTab Flag to indicate if link should be opened in a new tab
 * @property {String} caption Caption for the image
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


image_s(Image, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

image_c = Image;
Image.propTypes = {
  classes: Object(prop_types["shape"])({
    img: prop_types["string"]
  }),
  desktopImage: prop_types["string"],
  mobileImage: prop_types["string"],
  altText: prop_types["string"],
  title: prop_types["string"],
  link: prop_types["string"],
  linkType: Object(prop_types["oneOf"])(['default', 'category', 'product', 'page']),
  openInNewTab: prop_types["bool"],
  caption: prop_types["string"],
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
/* harmony default export */ var lib_ContentTypes_Image_image = (Image);

var image_c;

$RefreshReg$(image_c, "Image");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Heading/configAggregator.js
function Heading_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Heading_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Heading_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Heading_configAggregator = (node => {
  return Heading_configAggregator_objectSpread({
    text: node.textContent,
    headingType: node.nodeName.toLowerCase()
  }, Object(utils["a" /* getAdvanced */])(node));
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Heading/heading.js


/**
 * Page Builder Heading component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Heading
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that renders Heading with optional styling properties.
 */

const Heading = props => {
  const {
    headingType,
    text,
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
  const HeadingType = `${headingType}`;
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
  return react_default.a.createElement(HeadingType, {
    style: dynamicStyles,
    className: cssClasses.join(' ')
  }, text);
};
/**
 * Props for {@link Heading}
 *
 * @typedef props
 *
 * @property {String} headingType Level of HTML heading
 * @property {String} text Heading text
 * @property {String} textAlign Alignment of the text within the parent container
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


heading_c = Heading;
Heading.propTypes = {
  headingType: prop_types["string"],
  text: prop_types["string"],
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
/* harmony default export */ var heading = (Heading);

var heading_c;

$RefreshReg$(heading_c, "Heading");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Text/configAggregator.js
function Text_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Text_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Text_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Text_configAggregator = (node => {
  return Text_configAggregator_objectSpread({
    content: node.innerHTML
  }, Object(utils["a" /* getAdvanced */])(node));
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Text/text.css
var Text_text = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Text/text.css");
var text_default = /*#__PURE__*/__webpack_require__.n(Text_text);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Text/text.css

            

var text_options = {"injectType":"styleTag"};

text_options.insert = "head";
text_options.singleton = false;

var text_update = injectStylesIntoStyleTag_default()(text_default.a, text_options);



/* harmony default export */ var ContentTypes_Text_text = (text_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Text/text.js
var text_s = $RefreshSig$();






const toHTML = str => ({
  __html: str
});
/**
 * Page Builder Text component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Text
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Text content type which contains content.
 */


const Text = props => {
  text_s();

  const classes = Object(shallowMerge["a" /* default */])(ContentTypes_Text_text, props.classes);
  const {
    content,
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
    dangerouslySetInnerHTML: toHTML(content)
  });
};
/**
 * Props for {@link Text}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the Text
 * @property {String} classes.root CSS class for the root text element
 * @property {String} content Content to be rendered within the content type
 * @property {String} textAlign Alignment of content within the text
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


text_s(Text, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

text_c = Text;
Text.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  content: prop_types["string"],
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
/* harmony default export */ var lib_ContentTypes_Text_text = (Text);

var text_c;

$RefreshReg$(text_c, "Text");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/configAggregator.js
function Tabs_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Tabs_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Tabs_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Tabs_configAggregator = (node => {
  const navigationEl = node.childNodes[0];
  const headerEls = navigationEl.childNodes;
  const headers = Array.from(headerEls, headerEl => headerEl.textContent);
  const contentEl = node.childNodes[1];
  const alignmentMatch = /tab-align-([a-zA-Z]*)/.exec(node.getAttribute('class'));
  const tabNavigationAlignment = alignmentMatch ? alignmentMatch[1] : null;
  return Tabs_configAggregator_objectSpread({
    defaultIndex: node.getAttribute('data-active-tab') ? parseInt(node.getAttribute('data-active-tab'), 10) : 0,
    minHeight: contentEl.style.minHeight,
    tabNavigationAlignment: tabNavigationAlignment || 'left',
    headers
  }, Object(utils["i" /* getVerticalAlignment */])(node), Object(utils["f" /* getMargin */])(node), Object(utils["h" /* getTextAlign */])(contentEl), Object(utils["g" /* getPadding */])(node), Object(utils["c" /* getBorder */])(contentEl), Object(utils["e" /* getIsHidden */])(node), Object(utils["d" /* getCssClasses */])(node));
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/configAggregator.js
function TabItem_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { TabItem_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function TabItem_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var TabItem_configAggregator = (node => {
  return TabItem_configAggregator_objectSpread({
    tabName: node.getAttribute('data-tab-name'),
    minHeight: node.style.minHeight
  }, Object(utils["i" /* getVerticalAlignment */])(node), {
    backgroundColor: node.style.backgroundColor
  }, Object(utils["b" /* getBackgroundImages */])(node), Object(utils["a" /* getAdvanced */])(node));
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Block/configAggregator.js
function Block_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Block_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Block_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Block_configAggregator = (node => {
  return Block_configAggregator_objectSpread({
    richContent: node.childNodes[0] ? node.childNodes[0].innerHTML : ''
  }, Object(utils["a" /* getAdvanced */])(node));
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Products/configAggregator.js
function Products_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Products_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Products_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Products_configAggregator = ((node, props) => {
  const forms = node.querySelectorAll('[data-product-sku]');
  let carouselConfig = {};

  if (props.appearance === 'carousel') {
    carouselConfig = {
      autoplay: node.getAttribute('data-autoplay') === 'true',
      autoplaySpeed: parseInt(node.getAttribute('data-autoplay-speed')),
      infinite: node.getAttribute('data-infinite-loop') === 'true',
      arrows: node.getAttribute('data-show-arrows') === 'true',
      dots: node.getAttribute('data-show-dots') === 'true',
      carouselMode: node.getAttribute('data-carousel-mode'),
      centerPadding: node.getAttribute('data-center-padding')
    };
  }

  return Products_configAggregator_objectSpread({
    skus: [...forms].map(form => form.getAttribute('data-product-sku'))
  }, carouselConfig, Object(utils["a" /* getAdvanced */])(node));
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Buttons/configAggregator.js
function Buttons_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Buttons_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Buttons_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Buttons_configAggregator = (node => {
  return Buttons_configAggregator_objectSpread({
    isSameWidth: node.getAttribute('data-same-width') === 'true'
  }, Object(utils["a" /* getAdvanced */])(node));
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/ButtonItem/configAggregator.js
function ButtonItem_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ButtonItem_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function ButtonItem_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var ButtonItem_configAggregator = (node => {
  const props = ButtonItem_configAggregator_objectSpread({
    display: node.style.display,
    text: node.textContent,
    textAlign: node.style.textAlign,
    openInNewTab: node.childNodes[0].getAttribute('target') === '_blank'
  }, Object(utils["a" /* getAdvanced */])(node.childNodes[0]), Object(utils["d" /* getCssClasses */])(node));

  let buttonType;

  if (node.childNodes[0].classList.contains('pagebuilder-button-secondary')) {
    buttonType = 'secondary';
  } else if (node.childNodes[0].classList.contains('pagebuilder-button-link')) {
    buttonType = 'link';
  } else {
    buttonType = 'primary';
  }

  props.buttonType = buttonType;

  if (node.childNodes[0].nodeName === 'A') {
    props.link = node.childNodes[0].getAttribute('href');
    props.linkType = node.childNodes[0].getAttribute('data-link-type');
  }

  return props;
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Html/configAggregator.js
function Html_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Html_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Html_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Html_configAggregator = (node => {
  let html;

  if (node.dataset.decoded) {
    html = node.innerHTML;

    if (true) {
      console.warn('PageBuilder HTML content was unescaped! This may be a Magento configuration error.');
    }
  } else {
    const dom = new DOMParser().parseFromString('<!doctype html><body>' + node.textContent, 'text/html');
    html = dom.body.innerHTML;
  }

  return Html_configAggregator_objectSpread({
    html
  }, Object(utils["a" /* getAdvanced */])(node));
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/configAggregator.js
function Divider_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Divider_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Divider_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Divider_configAggregator = (node => {
  return Divider_configAggregator_objectSpread({
    width: node.childNodes[0].style.width,
    color: node.childNodes[0].style.borderColor,
    thickness: node.childNodes[0].style.borderWidth
  }, Object(utils["a" /* getAdvanced */])(node));
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Video/configAggregator.js
function Video_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Video_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Video_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Video_configAggregator = (node => {
  const iframe = node.querySelector('iframe');
  const video = node.querySelector('video');
  const wrapper = node.querySelector('[data-element="wrapper"]');
  return Video_configAggregator_objectSpread({
    url: iframe && iframe.getAttribute('src') || video && video.getAttribute('src') || null,
    autoplay: !!(video && video.getAttribute('autoplay') === 'true'),
    muted: !!(video && video.getAttribute('muted') === 'true'),
    maxWidth: node.childNodes[0].style.maxWidth || null
  }, Object(utils["h" /* getTextAlign */])(node), Object(utils["f" /* getMargin */])(node), Object(utils["c" /* getBorder */])(wrapper), Object(utils["g" /* getPadding */])(wrapper), Object(utils["d" /* getCssClasses */])(node), Object(utils["e" /* getIsHidden */])(node));
});
// EXTERNAL MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Map/configAggregator.js
var Map_configAggregator = __webpack_require__("./node_modules/@magento/pagebuilder/lib/ContentTypes/Map/configAggregator.js");

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/configAggregator.js
function Banner_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Banner_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Banner_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Determine the button type based on class
 *
 * @param node
 * @returns {string}
 */

const getButtonType = node => {
  if (node.classList.contains('pagebuilder-button-secondary')) {
    return 'secondary';
  }

  if (node.classList.contains('pagebuilder-button-link')) {
    return 'link';
  }

  return 'primary';
};

/* harmony default export */ var Banner_configAggregator = ((node, props) => {
  const wrapperElement = node.querySelector('[data-element="wrapper"]');
  const overlayElement = node.querySelector('[data-element="overlay"]');
  const linkElement = node.querySelector('a[data-element="link"]');
  const buttonElement = node.querySelector('[data-element="button"]');
  const videoOverlayElement = node.querySelector('[data-element="video_overlay"]');
  const showButton = node.getAttribute('data-show-button');
  const showOverlay = node.getAttribute('data-show-overlay');
  let minHeightPaddingElement = wrapperElement;

  if (props.appearance === 'poster') {
    minHeightPaddingElement = overlayElement;
  }

  return Banner_configAggregator_objectSpread({
    minHeight: minHeightPaddingElement.style.minHeight || null,
    backgroundColor: wrapperElement.style.backgroundColor
  }, Object(utils["b" /* getBackgroundImages */])(wrapperElement), {
    content: node.querySelector('[data-element="content"]').innerHTML,
    link: linkElement ? linkElement.getAttribute('href') : null,
    linkType: linkElement ? linkElement.getAttribute('data-link-type') : null,
    openInNewTab: linkElement && linkElement.getAttribute('target') === '_blank',
    showButton,
    buttonText: buttonElement && showButton !== 'never' ? buttonElement.textContent : null,
    buttonType: buttonElement && showButton !== 'never' ? getButtonType(buttonElement) : null,
    showOverlay,
    overlayColor: overlayElement && showOverlay !== 'never' ? overlayElement.getAttribute('data-overlay-color') : null,
    backgroundType: wrapperElement.getAttribute('data-background-type'),
    videoSrc: wrapperElement.getAttribute('data-video-src'),
    videoFallbackSrc: wrapperElement.getAttribute('data-video-fallback-src'),
    videoLoop: wrapperElement.getAttribute('data-video-loop') === 'true',
    videoPlayOnlyVisible: wrapperElement.getAttribute('data-video-play-only-visible') === 'true',
    videoLazyLoading: wrapperElement.getAttribute('data-video-lazy-load') === 'true',
    videoOverlayColor: videoOverlayElement ? videoOverlayElement.getAttribute('data-video-overlay-color') : null
  }, Object(utils["h" /* getTextAlign */])(wrapperElement), Object(utils["c" /* getBorder */])(wrapperElement), Object(utils["d" /* getCssClasses */])(node), Object(utils["f" /* getMargin */])(node), Object(utils["g" /* getPadding */])(minHeightPaddingElement), Object(utils["e" /* getIsHidden */])(node));
});
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/ButtonItem/buttonItem.css
var buttonItem = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/ButtonItem/buttonItem.css");
var buttonItem_default = /*#__PURE__*/__webpack_require__.n(buttonItem);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/ButtonItem/buttonItem.css

            

var buttonItem_options = {"injectType":"styleTag"};

buttonItem_options.insert = "head";
buttonItem_options.singleton = false;

var buttonItem_update = injectStylesIntoStyleTag_default()(buttonItem_default.a, buttonItem_options);



/* harmony default export */ var ButtonItem_buttonItem = (buttonItem_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/ButtonItem/buttonItem.js
var buttonItem_s = $RefreshSig$();








/**
 * Page Builder ButtonItem component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef ButtonItem
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a button.
 */

const ButtonItem = props => {
  buttonItem_s();

  const classes = Object(shallowMerge["a" /* default */])(ButtonItem_buttonItem, props.classes);
  const {
    buttonType,
    link,
    openInNewTab = false,
    text,
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
  const dynamicInnerStyles = {
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
  const history = Object(react_router["g" /* useHistory */])();
  let linkProps = {};
  let url = '';

  if (typeof link === 'string') {
    linkProps = Object(resolveLinkProps["a" /* default */])(link);
    url = (linkProps.to ? linkProps.to : linkProps.href).trim();
  }

  const typeToPriorityMapping = {
    primary: 'high',
    secondary: 'normal',
    link: 'low'
  };
  const handleClick = Object(react["useCallback"])(() => {
    if (!url) {
      return;
    }

    if (openInNewTab && globalThis.open) {
      globalThis.open(url, '_blank');
    } else if (linkProps.to) {
      history.push(url);
    } else {
      globalThis.location.assign(url);
    }
  }, [openInNewTab, url, linkProps.to]); // eslint-disable-line react-hooks/exhaustive-deps

  const justifyMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };

  if (textAlign) {
    dynamicInnerStyles.justifyContent = justifyMap[textAlign] || 'center';
    dynamicInnerStyles.textAlign = textAlign;
  }

  const buttonProps = {
    onClick: handleClick,
    priority: typeToPriorityMapping[buttonType],
    style: dynamicInnerStyles,
    type: 'button'
  }; // Custom style link type until PWA-937 adds link styled buttons

  if (buttonType === 'link') {
    buttonProps.className = classes.linkButton;
  }

  return react_default.a.createElement("div", {
    className: cssClasses.length ? cssClasses.join(' ') : undefined
  }, react_default.a.createElement(Button_button["a" /* default */], buttonProps, text));
};
/**
 * Props for {@link ButtonItem}
 *
 * @typedef props
 *
 * @property {String} buttonType Sets button type option
 * @property {String} link Url to the page opened when button clicked
 * @property {String} linkType Type of the linked page
 * @property {String} openInNewTab Toggles the option to open linked page in the new tab
 * @property {String} text Button text
 * @property {String} textAlign Button text align
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


buttonItem_s(ButtonItem, "BUJf4C+oZ3cZ5HUZ4wZkepxhggE=", false, function () {
  return [shallowMerge["a" /* default */], react_router["g" /* useHistory */]];
});

buttonItem_c = ButtonItem;
ButtonItem.propTypes = {
  buttonType: Object(prop_types["oneOf"])(['primary', 'secondary', 'link']),
  link: prop_types["string"],
  linkType: Object(prop_types["oneOf"])(['default', 'category', 'product', 'page']),
  openInNewTab: prop_types["bool"],
  text: prop_types["string"],
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
/* harmony default export */ var ContentTypes_ButtonItem_buttonItem = (ButtonItem);

var buttonItem_c;

$RefreshReg$(buttonItem_c, "ButtonItem");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Slider/configAggregator.js
function Slider_configAggregator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Slider_configAggregator_defineProperty(target, key, source[key]); }); } return target; }

function Slider_configAggregator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var Slider_configAggregator = (node => {
  return Slider_configAggregator_objectSpread({
    minHeight: node.style.minHeight,
    autoplay: node.getAttribute('data-autoplay') === 'true',
    autoplaySpeed: parseInt(node.getAttribute('data-autoplay-speed')),
    fade: node.getAttribute('data-fade') === 'true',
    infinite: node.getAttribute('data-infinite-loop') === 'true',
    showArrows: node.getAttribute('data-show-arrows') === 'true',
    showDots: node.getAttribute('data-show-dots') === 'true'
  }, Object(utils["a" /* getAdvanced */])(node));
});
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/config.js


























/* istanbul ignore next */

const contentTypesConfig = {
  row: {
    configAggregator: configAggregator,
    component: ContentTypes_Row_row
  },
  column: {
    configAggregator: Column_configAggregator,
    component: ContentTypes_Column_column
  },
  'column-group': {
    configAggregator: ColumnGroup_configAggregator,
    component: ContentTypes_ColumnGroup_columnGroup
  },
  image: {
    configAggregator: Image_configAggregator,
    component: lib_ContentTypes_Image_image
  },
  heading: {
    configAggregator: Heading_configAggregator,
    component: heading
  },
  text: {
    configAggregator: Text_configAggregator,
    component: lib_ContentTypes_Text_text
  },
  tabs: {
    configAggregator: Tabs_configAggregator,
    component: react_default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(38), __webpack_require__.e(82)]).then(__webpack_require__.bind(null, /*! ./ContentTypes/Tabs */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/index.js")))
  },
  'tab-item': {
    configAggregator: TabItem_configAggregator,
    component: react_default.a.lazy(() => __webpack_require__.e(/*! import() */ 81).then(__webpack_require__.bind(null, /*! ./ContentTypes/TabItem */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/TabItem/index.js")))
  },
  buttons: {
    configAggregator: Buttons_configAggregator,
    component: react_default.a.lazy(() => __webpack_require__.e(/*! import() */ 78).then(__webpack_require__.bind(null, /*! ./ContentTypes/Buttons */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Buttons/index.js")))
  },
  'button-item': {
    configAggregator: ButtonItem_configAggregator,
    component: ContentTypes_ButtonItem_buttonItem
  },
  block: {
    configAggregator: Block_configAggregator,
    component: react_default.a.lazy(() => __webpack_require__.e(/*! import() */ 68).then(__webpack_require__.bind(null, /*! ./ContentTypes/Block */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Block/index.js")))
  },
  products: {
    configAggregator: Products_configAggregator,
    component: react_default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(8), __webpack_require__.e(65)]).then(__webpack_require__.bind(null, /*! ./ContentTypes/Products */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Products/index.js")))
  },
  html: {
    configAggregator: Html_configAggregator,
    component: react_default.a.lazy(() => __webpack_require__.e(/*! import() */ 80).then(__webpack_require__.bind(null, /*! ./ContentTypes/Html */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Html/index.js")))
  },
  divider: {
    configAggregator: Divider_configAggregator,
    component: react_default.a.lazy(() => __webpack_require__.e(/*! import() */ 79).then(__webpack_require__.bind(null, /*! ./ContentTypes/Divider */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Divider/index.js")))
  },
  video: {
    configAggregator: Video_configAggregator,
    component: react_default.a.lazy(() => __webpack_require__.e(/*! import() */ 83).then(__webpack_require__.bind(null, /*! ./ContentTypes/Video */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Video/index.js")))
  },
  map: {
    configAggregator: Map_configAggregator["a" /* default */],
    component: react_default.a.lazy(() => __webpack_require__.e(/*! import() */ 69).then(__webpack_require__.bind(null, /*! ./ContentTypes/Map */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Map/index.js")))
  },
  banner: {
    configAggregator: Banner_configAggregator,
    component: react_default.a.lazy(() => __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./ContentTypes/Banner */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/index.js")))
  },
  slider: {
    configAggregator: Slider_configAggregator,
    component: react_default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(73)]).then(__webpack_require__.bind(null, /*! ./ContentTypes/Slider */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Slider/index.js")))
  },
  // Slide is just a banner wrapped inside a slider
  slide: {
    configAggregator: Banner_configAggregator,
    component: react_default.a.lazy(() => __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./ContentTypes/Banner */ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/index.js")))
  }
};
/**
 * Retrieve a content types configuration
 *
 * @param {string} contentType
 * @returns {*}
 */

function getContentTypeConfig(contentType) {
  if (contentTypesConfig[contentType]) {
    return contentTypesConfig[contentType];
  }
}
/**
 * Set content types configuration with new one
 *
 * @param {string} contentType
 * @param {*} config
 * @returns {*}
 */

function setContentTypeConfig(contentType, config) {
  return contentTypesConfig[contentType] = config;
}
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/factory.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * Render a content type
 *
 * @param Component
 * @param data
 * @returns {*}
 */

const renderContentType = (Component, data) => {
  return react_default.a.createElement(Component, data, data.children.map((childTreeItem, i) => react_default.a.createElement(ContentTypeFactory, {
    key: i,
    data: childTreeItem
  })));
};
/**
 * Create an instance of a content type component based on configuration
 *
 * @param data
 * @returns {*}
 * @constructor
 */


const ContentTypeFactory = ({
  data
}) => {
  const {
    isHidden
  } = data,
        props = _objectWithoutProperties(data, ["isHidden"]);

  if (isHidden) {
    return null;
  }

  const contentTypeConfig = getContentTypeConfig(props.contentType);

  if (contentTypeConfig && contentTypeConfig.component) {
    return react_default.a.createElement(react["Suspense"], {
      fallback: ''
    }, renderContentType(contentTypeConfig.component, props));
  }

  return null;
};

factory_c = ContentTypeFactory;
/* harmony default export */ var factory = (ContentTypeFactory);

var factory_c;

$RefreshReg$(factory_c, "ContentTypeFactory");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/parseStorageHtml.js

/**
 * Create a basic object representing a content type in our tree
 *
 * @param type
 * @param node
 * @returns {{appearance: any, children: Array, contentType: *}}
 */

const createContentTypeObject = (type, node) => {
  return {
    contentType: type,
    appearance: node ? node.getAttribute('data-appearance') : null,
    children: []
  };
};
/**
 * Walk over tree nodes extracting each content types configuration
 *
 * @param {Node} rootEl
 * @param {Object} contentTypeStructureObj
 * @returns {Object}
 */


const walk = (rootEl, contentTypeStructureObj) => {
  const tree = document.createTreeWalker(rootEl, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let currentNode = tree.nextNode();

  while (currentNode) {
    if (currentNode.nodeType !== Node.ELEMENT_NODE) {
      currentNode = tree.nextNode();
      continue;
    }

    const contentType = currentNode.getAttribute('data-content-type');

    if (!contentType) {
      currentNode = tree.nextNode();
      continue;
    }

    const props = createContentTypeObject(contentType, currentNode);
    const contentTypeConfig = getContentTypeConfig(contentType);

    if (contentTypeConfig && typeof contentTypeConfig.configAggregator === 'function') {
      try {
        Object.assign(props, contentTypeConfig.configAggregator(currentNode, props));
      } catch (e) {
        console.error(`Failed to aggregate config for content type ${contentType}.`, e);
      }
    } else {
      console.warn(`Page Builder ${contentType} content type is not supported, this content will not be rendered.`);
    }

    contentTypeStructureObj.children.push(props);
    walk(currentNode, props);
    currentNode = tree.nextSibling();
  }

  return contentTypeStructureObj;
};

const pbStyleAttribute = 'data-pb-style';
const bodyId = 'html-body';
/**
 * Convert styles block to inline styles.
 * @param {HTMLDocument} document
 */

const convertToInlineStyles = document => {
  const styleBlocks = document.getElementsByTagName('style');
  const styles = {};

  if (styleBlocks.length > 0) {
    Array.from(styleBlocks).forEach(styleBlock => {
      const cssRules = styleBlock.sheet.cssRules;
      Array.from(cssRules).forEach(rule => {
        if (rule instanceof CSSStyleRule) {
          const selectors = rule.selectorText.split(',').map(selector => selector.trim());
          selectors.forEach(selector => {
            if (!styles[selector]) {
              styles[selector] = [];
            }

            styles[selector].push(rule.style);
          });
        }
      });
    });
  }

  Object.keys(styles).map(selector => {
    const element = document.querySelector(selector);

    if (!element) {
      return;
    }

    styles[selector].map(style => {
      element.setAttribute('style', element.style.cssText + style.cssText);
    });
    element.removeAttribute(pbStyleAttribute);
  });
};
/**
 * Parse the master format storage HTML
 *
 * @param {String} htmlStr
 * @returns {Object}
 */


const parseStorageHtml = htmlStr => {
  const container = new DOMParser().parseFromString(htmlStr, 'text/html');
  const stageContentType = createContentTypeObject('root-container');
  container.body.id = bodyId;
  convertToInlineStyles(container);
  return walk(container.body, stageContentType);
};

/* harmony default export */ var lib_parseStorageHtml = (parseStorageHtml);
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/pagebuilder.js
var pagebuilder_s = $RefreshSig$();




/**
 * Page Builder component for rendering Page Builder master storage format in React
 *
 * @param data
 * @returns {*}
 * @constructor
 */

function PageBuilder({
  html,
  classes
}) {
  pagebuilder_s();

  const data = Object(react["useMemo"])(() => lib_parseStorageHtml(html), [html]);
  return data.children.map((child, i) => {
    return react_default.a.createElement("div", {
      className: classes.root,
      key: i
    }, react_default.a.createElement(factory, {
      data: child
    }));
  });
}

pagebuilder_s(PageBuilder, "jwuu1hJIzb+z9O8CErpZ1XdXNoc=");

pagebuilder_c = PageBuilder;

var pagebuilder_c;

$RefreshReg$(pagebuilder_c, "PageBuilder");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/detectPageBuilder.js
/**
 * Determine if the content is Page Builder or not
 *
 * @param content
 * @returns {boolean}
 */
function detectPageBuilder(content) {
  return /data-content-type=/.test(content);
}
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/index.js



// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/RichContent/plainHtmlRenderer.js


const plainHtmlRenderer_toHTML = str => ({
  __html: str
});

function PlainHtmlRenderer({
  html,
  classes
}) {
  // Even if empty, render a div with no content, for styling purposes.
  if (!html) {
    return react_default.a.createElement("div", {
      className: classes.root
    });
  }

  return react_default.a.createElement("div", {
    className: classes.root,
    dangerouslySetInnerHTML: plainHtmlRenderer_toHTML(html)
  });
}

plainHtmlRenderer_c = PlainHtmlRenderer;
const canRender = () => true; // backstop component, always renders

const plainHtmlRenderer_Component = PlainHtmlRenderer;

var plainHtmlRenderer_c;

$RefreshReg$(plainHtmlRenderer_c, "PlainHtmlRenderer");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/RichContent/richContentRenderers.js


/**
 * This file is augmented at build time using the @magento/venia-ui build
 * target "richContentRenderers", which allows third-party modules to add
 * rendering strategies to the RichContent component.
 */
// generated by export-esm-collection-loader

/* harmony default export */ var richContentRenderers = __webpack_exports__["a"] = ([lib_namespaceObject, plainHtmlRenderer_namespaceObject]);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/ButtonItem/buttonItem.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/ButtonItem/buttonItem.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".buttonItem-linkButton-2eC {\n    text-decoration: underline;\n}\n", ""]);

// Exports
exports.locals = {
	"linkButton": "buttonItem-linkButton-2eC"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Column/column.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Column/column.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".column-root-2pW {\n}\n\n@media only screen and (max-width: 768px) {\n    .column-root-2pW {\n        background-attachment: scroll !important;\n        flex-basis: 100%;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "column-root-2pW"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/ColumnGroup/columnGroup.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/ColumnGroup/columnGroup.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media only screen and (max-width: 768px) {\n    .columnGroup-root-1tm {\n        flex-wrap: wrap;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "columnGroup-root-1tm"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Image/image.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Image/image.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".image-img-L2s {\n    max-width: 100%;\n}\n", ""]);

// Exports
exports.locals = {
	"img": "image-img-L2s"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Row/row.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Row/row.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".row-root-3E7 {\n    --leftViewportElement: 0;\n}\n\n.row-contained-9Ys {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    max-width: 1280px;\n    width: 100%;\n}\n\n.row-videoOverlay-1vr {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: -99;\n    -webkit-transform: translate3d(0, 0, 0);\n}\n\n.row-root-3E7 [id*='jarallax-container'] video,\n.row-root-3E7 [id*='jarallax-container'] iframe {\n    visibility: hidden;\n}\n\n@media only screen and (max-width: 768px) {\n    .row-root-3E7 {\n        background-attachment: scroll !important;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "row-root-3E7",
	"contained": "row-contained-9Ys row-root-3E7",
	"videoOverlay": "row-videoOverlay-1vr"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Text/text.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Text/text.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".text-root-1y8 {\n    display: flex;\n    flex-direction: column;\n    word-wrap: break-word;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "text-root-1y8"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Button/button.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/clickable.css"), "");

// Module
exports.push([module.i, ".button-root-wXq {\n    --stroke: var(--venia-brand-color-1-700);\n    background: none;\n    border-color: rgb(var(--stroke));\n    border-radius: 10rem;\n    border-style: solid;\n    border-width: 2px;\n    color: rgb(var(--stroke));\n    font-size: var(--venia-global-fontSize-100);\n    font-weight: var(--venia-global-fontWeight-bold);\n    line-height: 1.25rem;\n    max-width: 100%;\n    min-width: 10rem;\n    min-height: 2.5rem;\n    outline: none;\n    padding: calc(0.5rem + 1px) 1.5rem calc(0.5rem - 1px);\n    text-transform: uppercase;\n    transition-duration: 256ms;\n    transition-property: background-color, border-color, color;\n    transition-timing-function: var(--venia-global-anim-standard);\n}\n\n.button-root-wXq:hover {\n    --stroke: var(--venia-brand-color-1-800);\n}\n\n.button-root-wXq:focus {\n    box-shadow: -6px 6px rgb(var(--venia-brand-color-1-100));\n}\n\n.button-root-wXq:active {\n    transition-duration: 128ms;\n    --stroke: var(--venia-brand-color-1-800);\n}\n\n/**\n * Some browsers retain the :hover state after a click, this ensures if a button becomes disabled after\n * being clicked it will be visually disabled.\n */\n.button-root-wXq:disabled,\n.button-root-wXq:hover:disabled {\n    pointer-events: none;\n    --stroke: var(--venia-global-color-gray-400);\n}\n\n.button-content-31o {\n    align-items: center;\n    display: inline-grid;\n    gap: 0.35rem;\n    grid-auto-flow: column;\n    justify-content: center;\n    justify-items: center;\n}\n\n/* derived classes */\n.button-root_lowPriority-22I {\n    --stroke: var(--venia-global-color-gray-700);\n}\n.button-root_lowPriority-22I:hover {\n    --stroke: var(--venia-global-color-gray-900);\n}\n.button-root_lowPriorityNegative-3iZ {\n    --stroke: var(--venia-global-color-red-700);\n}\n.button-root_lowPriorityNegative-3iZ:hover {\n    --stroke: var(--venia-global-color-red-800);\n}\n\n.button-root_normalPriority-nMI {\n}\n.button-root_normalPriorityNegative-P7Q {\n    --stroke: var(--venia-global-color-red-700);\n}\n.button-root_normalPriorityNegative-P7Q:hover {\n    --stroke: var(--venia-global-color-red-800);\n}\n\n.button-root_highPriority-tpS {\n    background-color: rgb(var(--stroke));\n    color: rgb(var(--venia-global-color-gray-50));\n}\n.button-root_highPriorityNegative-1ag {\n    --stroke: var(--venia-global-color-red-700);\n}\n.button-root_highPriorityNegative-1ag:hover {\n    --stroke: var(--venia-global-color-red-800);\n}\n", ""]);

// Exports
exports.locals = {
	"root": "button-root-wXq " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/clickable.css").locals["root"] + "",
	"content": "button-content-31o",
	"root_lowPriority": "button-root_lowPriority-22I button-root-wXq " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/clickable.css").locals["root"] + "",
	"root_lowPriorityNegative": "button-root_lowPriorityNegative-3iZ button-root_lowPriority-22I button-root-wXq " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/clickable.css").locals["root"] + "",
	"root_normalPriority": "button-root_normalPriority-nMI button-root-wXq " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/clickable.css").locals["root"] + "",
	"root_normalPriorityNegative": "button-root_normalPriorityNegative-P7Q button-root_normalPriority-nMI button-root-wXq " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/clickable.css").locals["root"] + "",
	"root_highPriority": "button-root_highPriority-tpS button-root-wXq " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/clickable.css").locals["root"] + "",
	"root_highPriorityNegative": "button-root_highPriorityNegative-1ag button-root_highPriority-tpS button-root-wXq " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../clickable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/clickable.css").locals["root"] + ""
};

/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default, window */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jarallax/index.js":
/*!****************************************!*\
  !*** ./node_modules/jarallax/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

const jarallax = __webpack_require__(/*! ./src/jarallax.esm */ "./node_modules/jarallax/src/jarallax.esm.js").default;
const jarallaxVideo = __webpack_require__(/*! ./src/jarallax-video.esm */ "./node_modules/jarallax/src/jarallax-video.esm.js").default;
const jarallaxElement = __webpack_require__(/*! ./src/jarallax-element.esm */ "./node_modules/jarallax/src/jarallax-element.esm.js").default;

module.exports = {
    jarallax,
    jarallaxElement() {
        return jarallaxElement(jarallax);
    },
    jarallaxVideo() {
        return jarallaxVideo(jarallax);
    },
};


/***/ }),

/***/ "./node_modules/jarallax/src/jarallax-element.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/jarallax/src/jarallax-element.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./node_modules/jarallax/index.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jarallaxElement; });
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);
/* eslint no-case-declarations: "off" */


function jarallaxElement(jarallax = global__WEBPACK_IMPORTED_MODULE_0___default.a.jarallax) {
    if (typeof jarallax === 'undefined') {
        return;
    }

    const Jarallax = jarallax.constructor;

    // redefine default methods
    [
        'initImg',
        'canInitParallax',
        'init',
        'destroy',
        'clipContainer',
        'coverImage',
        'isVisible',
        'onScroll',
        'onResize',
    ].forEach((key) => {
        const def = Jarallax.prototype[key];
        Jarallax.prototype[key] = function () {
            const self = this;
            const args = arguments || [];

            if (key === 'initImg' && self.$item.getAttribute('data-jarallax-element') !== null) {
                self.options.type = 'element';
                self.pureOptions.speed = self.$item.getAttribute('data-jarallax-element') || self.pureOptions.speed;
            }
            if (self.options.type !== 'element') {
                return def.apply(self, args);
            }

            self.pureOptions.threshold = self.$item.getAttribute('data-threshold') || '';

            switch (key) {
            case 'init':
                const speedArr = self.pureOptions.speed.split(' ');
                self.options.speed = self.pureOptions.speed || 0;
                self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
                self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;

                const thresholdArr = self.pureOptions.threshold.split(' ');
                self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
                self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;

                def.apply(self, args);

                // restore background image if available.
                const originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
                if (originalStylesTag) {
                    self.$item.setAttribute('style', originalStylesTag);
                }

                return true;
            case 'onResize':
                const defTransform = self.css(self.$item, 'transform');
                self.css(self.$item, { transform: '' });
                const rect = self.$item.getBoundingClientRect();
                self.itemData = {
                    width: rect.width,
                    height: rect.height,
                    y: rect.top + self.getWindowData().y,
                    x: rect.left,
                };
                self.css(self.$item, { transform: defTransform });
                break;
            case 'onScroll':
                const wnd = self.getWindowData();
                const centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
                const moveY = centerPercent * self.options.speedY;
                const moveX = centerPercent * self.options.speedX;
                let my = moveY;
                let mx = moveX;
                if (self.options.thresholdY !== null && moveY > self.options.thresholdY) my = 0;
                if (self.options.thresholdX !== null && moveX > self.options.thresholdX) mx = 0;
                self.css(self.$item, { transform: `translate3d(${mx}px,${my}px,0)` });
                break;
            case 'initImg':
            case 'isVisible':
            case 'clipContainer':
            case 'coverImage':
                return true;
            // no default
            }
            return def.apply(self, args);
        };
    });
}


/***/ }),

/***/ "./node_modules/jarallax/src/jarallax-video.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jarallax/src/jarallax-video.esm.js + 1 modules ***!
  \*********************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/global/window.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ jarallaxVideo; });

// EXTERNAL MODULE: ./node_modules/global/window.js
var global_window = __webpack_require__("./node_modules/global/window.js");
var window_default = /*#__PURE__*/__webpack_require__.n(global_window);

// CONCATENATED MODULE: ./node_modules/video-worker/src/video-worker.esm.js


// Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
function Deferred() {
    this.doneCallbacks = [];
    this.failCallbacks = [];
}

Deferred.prototype = {
    execute( list, args ) {
        let i = list.length;
        args = Array.prototype.slice.call( args );

        while ( i ) {
            i -= 1;
            list[ i ].apply( null, args );
        }
    },
    resolve( ...args ) {
        this.execute( this.doneCallbacks, args );
    },
    reject( ...args ) {
        this.execute( this.failCallbacks, args );
    },
    done( callback ) {
        this.doneCallbacks.push( callback );
    },
    fail( callback ) {
        this.failCallbacks.push( callback );
    },
};

const isIos = !! navigator.userAgent.match( /iP(ad|od|hone)/i );
const safariVersion = navigator.userAgent.match( /Version\/(\d+).*Safari/ );
const isSafari15 = safariVersion && safariVersion[ 1 ] && 15 <= parseFloat( safariVersion[ 1 ] );

let ID = 0;
let YoutubeAPIadded = 0;
let VimeoAPIadded = 0;
let loadingYoutubePlayer = 0;
let loadingVimeoPlayer = 0;
const loadingYoutubeDefer = new Deferred();
const loadingVimeoDefer = new Deferred();

class video_worker_esm_VideoWorker {
    constructor( url, options ) {
        const self = this;

        self.url = url;

        self.options_default = {
            autoplay: false,
            loop: false,
            mute: false,
            volume: 100,
            showControls: true,
            accessibilityHidden: false,

            // start / end video time in seconds
            startTime: 0,
            endTime: 0,
        };

        self.options = self.extend( {}, self.options_default, options );

        // Fix wrong option name.
        // Thanks to https://github.com/nk-o/video-worker/issues/13.
        if ( 'undefined' !== typeof self.options.showContols ) {
            self.options.showControls = self.options.showContols;
            delete self.options.showContols;
        }

        // check URL
        self.videoID = self.parseURL( url );

        // init
        if ( self.videoID ) {
            self.ID = ID;
            ID += 1;
            self.loadAPI();
            self.init();
        }
    }

    // Extend like jQuery.extend
    // eslint-disable-next-line class-methods-use-this
    extend( ...args ) {
        const out = args[ 0 ] || {};

        Object.keys( args ).forEach( ( i ) => {
            if ( ! args[ i ] ) {
                return;
            }
            Object.keys( args[ i ] ).forEach( ( key ) => {
                out[ key ] = args[ i ][ key ];
            } );
        } );

        return out;
    }

    parseURL( url ) {
        // parse youtube ID
        function getYoutubeID( ytUrl ) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            const match = ytUrl.match( regExp );
            return match && 11 === match[ 1 ].length ? match[ 1 ] : false;
        }

        // parse vimeo ID
        function getVimeoID( vmUrl ) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
            const match = vmUrl.match( regExp );
            return match && match[ 3 ] ? match[ 3 ] : false;
        }

        // parse local string
        function getLocalVideos( locUrl ) {
            // eslint-disable-next-line no-useless-escape
            const videoFormats = locUrl.split( /,(?=mp4\:|webm\:|ogv\:|ogg\:)/ );
            const result = {};
            let ready = 0;
            videoFormats.forEach( ( val ) => {
                // eslint-disable-next-line no-useless-escape
                const match = val.match( /^(mp4|webm|ogv|ogg)\:(.*)/ );
                if ( match && match[ 1 ] && match[ 2 ] ) {
                    // eslint-disable-next-line prefer-destructuring
                    result[ 'ogv' === match[ 1 ] ? 'ogg' : match[ 1 ] ] = match[ 2 ];
                    ready = 1;
                }
            } );
            return ready ? result : false;
        }

        const Youtube = getYoutubeID( url );
        const Vimeo = getVimeoID( url );
        const Local = getLocalVideos( url );

        if ( Youtube ) {
            this.type = 'youtube';
            return Youtube;
        }

        if ( Vimeo ) {
            this.type = 'vimeo';
            return Vimeo;
        }

        if ( Local ) {
            this.type = 'local';
            return Local;
        }

        return false;
    }

    isValid() {
        return !! this.videoID;
    }

    // events
    on( name, callback ) {
        this.userEventsList = this.userEventsList || [];

        // add new callback in events list
        ( this.userEventsList[ name ] || ( this.userEventsList[ name ] = [] ) ).push( callback );
    }

    off( name, callback ) {
        if ( ! this.userEventsList || ! this.userEventsList[ name ] ) {
            return;
        }

        if ( ! callback ) {
            delete this.userEventsList[ name ];
        } else {
            this.userEventsList[ name ].forEach( ( val, key ) => {
                if ( val === callback ) {
                    this.userEventsList[ name ][ key ] = false;
                }
            } );
        }
    }

    fire( name, ...args ) {
        if ( this.userEventsList && 'undefined' !== typeof this.userEventsList[ name ] ) {
            this.userEventsList[ name ].forEach( ( val ) => {
                // call with all arguments
                if ( val ) {
                    val.apply( this, args );
                }
            } );
        }
    }

    play( start ) {
        const self = this;
        if ( ! self.player ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.playVideo ) {
            if ( 'undefined' !== typeof start ) {
                self.player.seekTo( start || 0 );
            }
            if ( window_default.a.YT.PlayerState.PLAYING !== self.player.getPlayerState() ) {
                self.player.playVideo();
            }
        }

        if ( 'vimeo' === self.type ) {
            if ( 'undefined' !== typeof start ) {
                self.player.setCurrentTime( start );
            }
            self.player.getPaused().then( ( paused ) => {
                if ( paused ) {
                    self.player.play();
                }
            } );
        }

        if ( 'local' === self.type ) {
            if ( 'undefined' !== typeof start ) {
                self.player.currentTime = start;
            }
            if ( self.player.paused ) {
                self.player.play();
            }
        }
    }

    pause() {
        const self = this;
        if ( ! self.player ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.pauseVideo ) {
            if ( window_default.a.YT.PlayerState.PLAYING === self.player.getPlayerState() ) {
                self.player.pauseVideo();
            }
        }

        if ( 'vimeo' === self.type ) {
            self.player.getPaused().then( ( paused ) => {
                if ( ! paused ) {
                    self.player.pause();
                }
            } );
        }

        if ( 'local' === self.type ) {
            if ( ! self.player.paused ) {
                self.player.pause();
            }
        }
    }

    mute() {
        const self = this;
        if ( ! self.player ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.mute ) {
            self.player.mute();
        }

        if ( 'vimeo' === self.type && self.player.setVolume ) {
            self.player.setVolume( 0 );
        }

        if ( 'local' === self.type ) {
            self.$video.muted = true;
        }
    }

    unmute() {
        const self = this;
        if ( ! self.player ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.mute ) {
            self.player.unMute();
        }

        if ( 'vimeo' === self.type && self.player.setVolume ) {
            self.player.setVolume( self.options.volume );
        }

        if ( 'local' === self.type ) {
            self.$video.muted = false;
        }
    }

    setVolume( volume = false ) {
        const self = this;
        if ( ! self.player || ! volume ) {
            return;
        }

        if ( 'youtube' === self.type && self.player.setVolume ) {
            self.player.setVolume( volume );
        }

        if ( 'vimeo' === self.type && self.player.setVolume ) {
            self.player.setVolume( volume );
        }

        if ( 'local' === self.type ) {
            self.$video.volume = volume / 100;
        }
    }

    getVolume( callback ) {
        const self = this;
        if ( ! self.player ) {
            callback( false );
            return;
        }

        if ( 'youtube' === self.type && self.player.getVolume ) {
            callback( self.player.getVolume() );
        }

        if ( 'vimeo' === self.type && self.player.getVolume ) {
            self.player.getVolume().then( ( volume ) => {
                callback( volume );
            } );
        }

        if ( 'local' === self.type ) {
            callback( self.$video.volume * 100 );
        }
    }

    getMuted( callback ) {
        const self = this;
        if ( ! self.player ) {
            callback( null );
            return;
        }

        if ( 'youtube' === self.type && self.player.isMuted ) {
            callback( self.player.isMuted() );
        }

        if ( 'vimeo' === self.type && self.player.getVolume ) {
            self.player.getVolume().then( ( volume ) => {
                callback( !! volume );
            } );
        }

        if ( 'local' === self.type ) {
            callback( self.$video.muted );
        }
    }

    getImageURL( callback ) {
        const self = this;

        if ( self.videoImage ) {
            callback( self.videoImage );
            return;
        }

        if ( 'youtube' === self.type ) {
            const availableSizes = [
                'maxresdefault',
                'sddefault',
                'hqdefault',
                '0',
            ];
            let step = 0;

            const tempImg = new Image();
            tempImg.onload = function() {
                // if no thumbnail, youtube add their own image with width = 120px
                if ( 120 !== ( this.naturalWidth || this.width ) || step === availableSizes.length - 1 ) {
                    // ok
                    self.videoImage = `https://img.youtube.com/vi/${ self.videoID }/${ availableSizes[ step ] }.jpg`;
                    callback( self.videoImage );
                } else {
                    // try another size
                    step += 1;
                    this.src = `https://img.youtube.com/vi/${ self.videoID }/${ availableSizes[ step ] }.jpg`;
                }
            };
            tempImg.src = `https://img.youtube.com/vi/${ self.videoID }/${ availableSizes[ step ] }.jpg`;
        }

        if ( 'vimeo' === self.type ) {
            let request = new XMLHttpRequest();
            request.open( 'GET', `https://vimeo.com/api/v2/video/${ self.videoID }.json`, true );
            request.onreadystatechange = function() {
                if ( 4 === this.readyState ) {
                    if ( 200 <= this.status && 400 > this.status ) {
                        // Success!
                        const response = JSON.parse( this.responseText );
                        self.videoImage = response[ 0 ].thumbnail_large;
                        callback( self.videoImage );
                    } else {
                        // Error :(
                    }
                }
            };
            request.send();
            request = null;
        }
    }

    // fallback to the old version.
    getIframe( callback ) {
        this.getVideo( callback );
    }

    getVideo( callback ) {
        const self = this;

        // return generated video block
        if ( self.$video ) {
            callback( self.$video );
            return;
        }

        // generate new video block
        self.onAPIready( () => {
            let hiddenDiv;
            if ( ! self.$video ) {
                hiddenDiv = document.createElement( 'div' );
                hiddenDiv.style.display = 'none';
            }

            // Youtube
            if ( 'youtube' === self.type ) {
                self.playerOptions = {
                    // GDPR Compliance.
                    host: 'https://www.youtube-nocookie.com',
                    videoId: self.videoID,
                    playerVars: {
                        autohide: 1,
                        rel: 0,
                        autoplay: 0,
                        // autoplay enable on mobile devices
                        playsinline: 1,
                    },
                };

                // hide controls
                if ( ! self.options.showControls ) {
                    self.playerOptions.playerVars.iv_load_policy = 3;
                    self.playerOptions.playerVars.modestbranding = 1;
                    self.playerOptions.playerVars.controls = 0;
                    self.playerOptions.playerVars.showinfo = 0;
                    self.playerOptions.playerVars.disablekb = 1;
                }

                // events
                let ytStarted;
                let ytProgressInterval;
                self.playerOptions.events = {
                    onReady( e ) {
                        // mute
                        if ( self.options.mute ) {
                            e.target.mute();
                        } else if ( self.options.volume ) {
                            e.target.setVolume( self.options.volume );
                        }

                        // autoplay
                        if ( self.options.autoplay ) {
                            self.play( self.options.startTime );
                        }
                        self.fire( 'ready', e );

                        // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
                        // https://github.com/nk-o/video-worker/issues/2
                        if ( self.options.loop && ! self.options.endTime ) {
                            const secondsOffset = 0.1;
                            self.options.endTime = self.player.getDuration() - secondsOffset;
                        }

                        // volumechange
                        setInterval( () => {
                            self.getVolume( ( volume ) => {
                                if ( self.options.volume !== volume ) {
                                    self.options.volume = volume;
                                    self.fire( 'volumechange', e );
                                }
                            } );
                        }, 150 );
                    },
                    onStateChange( e ) {
                        // loop
                        if ( self.options.loop && e.data === window_default.a.YT.PlayerState.ENDED ) {
                            self.play( self.options.startTime );
                        }
                        if ( ! ytStarted && e.data === window_default.a.YT.PlayerState.PLAYING ) {
                            ytStarted = 1;
                            self.fire( 'started', e );
                        }
                        if ( e.data === window_default.a.YT.PlayerState.PLAYING ) {
                            self.fire( 'play', e );
                        }
                        if ( e.data === window_default.a.YT.PlayerState.PAUSED ) {
                            self.fire( 'pause', e );
                        }
                        if ( e.data === window_default.a.YT.PlayerState.ENDED ) {
                            self.fire( 'ended', e );
                        }

                        // progress check
                        if ( e.data === window_default.a.YT.PlayerState.PLAYING ) {
                            ytProgressInterval = setInterval( () => {
                                self.fire( 'timeupdate', e );

                                // check for end of video and play again or stop
                                if ( self.options.endTime && self.player.getCurrentTime() >= self.options.endTime ) {
                                    if ( self.options.loop ) {
                                        self.play( self.options.startTime );
                                    } else {
                                        self.pause();
                                    }
                                }
                            }, 150 );
                        } else {
                            clearInterval( ytProgressInterval );
                        }
                    },
                    onError( e ) {
                        self.fire( 'error', e );
                    },
                };

                const firstInit = ! self.$video;
                if ( firstInit ) {
                    const div = document.createElement( 'div' );
                    div.setAttribute( 'id', self.playerID );
                    hiddenDiv.appendChild( div );
                    document.body.appendChild( hiddenDiv );
                }
                self.player = self.player || new window_default.a.YT.Player( self.playerID, self.playerOptions );
                if ( firstInit ) {
                    self.$video = document.getElementById( self.playerID );

                    // add accessibility attributes
                    if ( self.options.accessibilityHidden ) {
                        self.$video.setAttribute( 'tabindex', '-1' );
                        self.$video.setAttribute( 'aria-hidden', 'true' );
                    }

                    // get video width and height
                    self.videoWidth = parseInt( self.$video.getAttribute( 'width' ), 10 ) || 1280;
                    self.videoHeight = parseInt( self.$video.getAttribute( 'height' ), 10 ) || 720;
                }
            }

            // Vimeo
            if ( 'vimeo' === self.type ) {
                self.playerOptions = {
                    // GDPR Compliance.
                    dnt: 1,
                    id: self.videoID,
                    autopause: 0,
                    transparent: 0,
                    autoplay: self.options.autoplay ? 1 : 0,
                    loop: self.options.loop ? 1 : 0,
                    muted: self.options.mute ? 1 : 0,
                };

                if ( self.options.volume ) {
                    self.playerOptions.volume = self.options.volume;
                }

                // hide controls
                if ( ! self.options.showControls ) {
                    self.playerOptions.badge = 0;
                    self.playerOptions.byline = 0;
                    self.playerOptions.portrait = 0;
                    self.playerOptions.title = 0;
                    self.playerOptions.background = 1;
                }

                if ( ! self.$video ) {
                    let playerOptionsString = '';
                    Object.keys( self.playerOptions ).forEach( ( key ) => {
                        if ( '' !== playerOptionsString ) {
                            playerOptionsString += '&';
                        }
                        playerOptionsString += `${ key }=${ encodeURIComponent( self.playerOptions[ key ] ) }`;
                    } );

                    // we need to create iframe manually because when we create it using API
                    // js events won't triggers after iframe moved to another place
                    self.$video = document.createElement( 'iframe' );
                    self.$video.setAttribute( 'id', self.playerID );
                    self.$video.setAttribute( 'src', `https://player.vimeo.com/video/${ self.videoID }?${ playerOptionsString }` );
                    self.$video.setAttribute( 'frameborder', '0' );
                    self.$video.setAttribute( 'mozallowfullscreen', '' );
                    self.$video.setAttribute( 'allowfullscreen', '' );
                    self.$video.setAttribute( 'title', 'Vimeo video player' );

                    // add accessibility attributes
                    if ( self.options.accessibilityHidden ) {
                        self.$video.setAttribute( 'tabindex', '-1' );
                        self.$video.setAttribute( 'aria-hidden', 'true' );
                    }

                    hiddenDiv.appendChild( self.$video );
                    document.body.appendChild( hiddenDiv );
                }
                self.player = self.player || new window_default.a.Vimeo.Player( self.$video, self.playerOptions );

                // set current time for autoplay
                if ( self.options.startTime && self.options.autoplay ) {
                    self.player.setCurrentTime( self.options.startTime );
                }

                // get video width and height
                self.player.getVideoWidth().then( ( width ) => {
                    self.videoWidth = width || 1280;
                } );
                self.player.getVideoHeight().then( ( height ) => {
                    self.videoHeight = height || 720;
                } );

                // events
                let vmStarted;
                self.player.on( 'timeupdate', ( e ) => {
                    if ( ! vmStarted ) {
                        self.fire( 'started', e );
                        vmStarted = 1;
                    }

                    self.fire( 'timeupdate', e );

                    // check for end of video and play again or stop
                    if ( self.options.endTime ) {
                        if ( self.options.endTime && e.seconds >= self.options.endTime ) {
                            if ( self.options.loop ) {
                                self.play( self.options.startTime );
                            } else {
                                self.pause();
                            }
                        }
                    }
                } );
                self.player.on( 'play', ( e ) => {
                    self.fire( 'play', e );

                    // check for the start time and start with it
                    if ( self.options.startTime && 0 === e.seconds ) {
                        self.play( self.options.startTime );
                    }
                } );
                self.player.on( 'pause', ( e ) => {
                    self.fire( 'pause', e );
                } );
                self.player.on( 'ended', ( e ) => {
                    self.fire( 'ended', e );
                } );
                self.player.on( 'loaded', ( e ) => {
                    self.fire( 'ready', e );
                } );
                self.player.on( 'volumechange', ( e ) => {
                    self.fire( 'volumechange', e );
                } );
                self.player.on( 'error', ( e ) => {
                    self.fire( 'error', e );
                } );
            }

            // Local
            function addSourceToLocal( element, src, type ) {
                const source = document.createElement( 'source' );
                source.src = src;
                source.type = type;
                element.appendChild( source );
            }
            if ( 'local' === self.type ) {
                if ( ! self.$video ) {
                    self.$video = document.createElement( 'video' );

                    // show controls
                    if ( self.options.showControls ) {
                        self.$video.controls = true;
                    }

                    // mute
                    if ( self.options.mute ) {
                        self.$video.muted = true;
                    } else if ( self.$video.volume ) {
                        self.$video.volume = self.options.volume / 100;
                    }

                    // loop
                    if ( self.options.loop ) {
                        self.$video.loop = true;
                    }

                    // autoplay enable on mobile devices
                    self.$video.setAttribute( 'playsinline', '' );
                    self.$video.setAttribute( 'webkit-playsinline', '' );

                    // add accessibility attributes
                    if ( self.options.accessibilityHidden ) {
                        self.$video.setAttribute( 'tabindex', '-1' );
                        self.$video.setAttribute( 'aria-hidden', 'true' );
                    }

                    self.$video.setAttribute( 'id', self.playerID );
                    hiddenDiv.appendChild( self.$video );
                    document.body.appendChild( hiddenDiv );

                    Object.keys( self.videoID ).forEach( ( key ) => {
                        addSourceToLocal( self.$video, self.videoID[ key ], `video/${ key }` );
                    } );
                }

                self.player = self.player || self.$video;

                let locStarted;
                self.player.addEventListener( 'playing', ( e ) => {
                    if ( ! locStarted ) {
                        self.fire( 'started', e );
                    }
                    locStarted = 1;
                } );
                self.player.addEventListener( 'timeupdate', function( e ) {
                    self.fire( 'timeupdate', e );

                    // check for end of video and play again or stop
                    if ( self.options.endTime ) {
                        if ( self.options.endTime && this.currentTime >= self.options.endTime ) {
                            if ( self.options.loop ) {
                                self.play( self.options.startTime );
                            } else {
                                self.pause();
                            }
                        }
                    }
                } );
                self.player.addEventListener( 'play', ( e ) => {
                    self.fire( 'play', e );
                } );
                self.player.addEventListener( 'pause', ( e ) => {
                    self.fire( 'pause', e );
                } );
                self.player.addEventListener( 'ended', ( e ) => {
                    self.fire( 'ended', e );
                } );
                self.player.addEventListener( 'loadedmetadata', function() {
                    // get video width and height
                    self.videoWidth = this.videoWidth || 1280;
                    self.videoHeight = this.videoHeight || 720;

                    // Hack to fix Safari 15 video rendering problem.
                    // More info here - https://github.com/nk-o/jarallax/issues/200
                    // And here - https://github.com/nk-crew/awb/issues/50
                    if ( isIos || isSafari15 ) {
                        const oldDisplay = self.$video.style.display;
                        self.$video.style.display = 'none';

                        setTimeout( () => {
                            self.$video.style.display = oldDisplay;
                        }, 0 );
                    }

                    self.fire( 'ready' );

                    // autoplay
                    if ( self.options.autoplay ) {
                        self.play( self.options.startTime );
                    }
                } );
                self.player.addEventListener( 'volumechange', ( e ) => {
                    self.getVolume( ( volume ) => {
                        self.options.volume = volume;
                    } );
                    self.fire( 'volumechange', e );
                } );
                self.player.addEventListener( 'error', ( e ) => {
                    self.fire( 'error', e );
                } );
            }
            callback( self.$video );
        } );
    }

    init() {
        const self = this;

        self.playerID = `VideoWorker-${ self.ID }`;
    }

    loadAPI() {
        const self = this;

        if ( YoutubeAPIadded && VimeoAPIadded ) {
            return;
        }

        let src = '';

        // load Youtube API
        if ( 'youtube' === self.type && ! YoutubeAPIadded ) {
            YoutubeAPIadded = 1;
            src = 'https://www.youtube.com/iframe_api';
        }

        // load Vimeo API
        if ( 'vimeo' === self.type && ! VimeoAPIadded ) {
            VimeoAPIadded = 1;

            // Useful when Vimeo API added using RequireJS https://github.com/nk-o/video-worker/pull/7
            if ( 'undefined' !== typeof window_default.a.Vimeo ) {
                return;
            }

            src = 'https://player.vimeo.com/api/player.js';
        }

        if ( ! src ) {
            return;
        }

        // add script in head section
        let tag = document.createElement( 'script' );
        let head = document.getElementsByTagName( 'head' )[ 0 ];
        tag.src = src;

        head.appendChild( tag );

        head = null;
        tag = null;
    }

    onAPIready( callback ) {
        const self = this;

        // Youtube
        if ( 'youtube' === self.type ) {
            // Listen for global YT player callback
            if ( ( 'undefined' === typeof window_default.a.YT || 0 === window_default.a.YT.loaded ) && ! loadingYoutubePlayer ) {
                // Prevents Ready event from being called twice
                loadingYoutubePlayer = 1;

                // Creates deferred so, other players know when to wait.
                window.onYouTubeIframeAPIReady = function() {
                    window.onYouTubeIframeAPIReady = null;
                    loadingYoutubeDefer.resolve( 'done' );
                    callback();
                };
            } else if ( 'object' === typeof window_default.a.YT && 1 === window_default.a.YT.loaded ) {
                callback();
            } else {
                loadingYoutubeDefer.done( () => {
                    callback();
                } );
            }
        }

        // Vimeo
        if ( 'vimeo' === self.type ) {
            if ( 'undefined' === typeof window_default.a.Vimeo && ! loadingVimeoPlayer ) {
                loadingVimeoPlayer = 1;
                const vimeoInterval = setInterval( () => {
                    if ( 'undefined' !== typeof window_default.a.Vimeo ) {
                        clearInterval( vimeoInterval );
                        loadingVimeoDefer.resolve( 'done' );
                        callback();
                    }
                }, 20 );
            } else if ( 'undefined' !== typeof window_default.a.Vimeo ) {
                callback();
            } else {
                loadingVimeoDefer.done( () => {
                    callback();
                } );
            }
        }

        // Local
        if ( 'local' === self.type ) {
            callback();
        }
    }
}

// CONCATENATED MODULE: ./node_modules/jarallax/src/jarallax-video.esm.js



function jarallaxVideo(jarallax = window_default.a.jarallax) {
    if (typeof jarallax === 'undefined') {
        return;
    }

    const Jarallax = jarallax.constructor;

    // append video after when block will be visible.
    const defOnScroll = Jarallax.prototype.onScroll;
    Jarallax.prototype.onScroll = function () {
        const self = this;

        defOnScroll.apply(self);

        const isReady = !self.isVideoInserted
                        && self.video
                        && (!self.options.videoLazyLoading || self.isElementInViewport)
                        && !self.options.disableVideo();

        if (isReady) {
            self.isVideoInserted = true;

            self.video.getVideo((video) => {
                const $parent = video.parentNode;
                self.css(video, {
                    position: self.image.position,
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none',
                    maxHeight: 'none',
                    margin: 0,
                    zIndex: -1,
                });
                self.$video = video;
                self.image.$container.appendChild(video);

                // remove parent video element (created by VideoWorker)
                $parent.parentNode.removeChild($parent);
            });
        }
    };

    // cover video
    const defCoverImage = Jarallax.prototype.coverImage;
    Jarallax.prototype.coverImage = function () {
        const self = this;
        const imageData = defCoverImage.apply(self);
        const node = self.image.$item ? self.image.$item.nodeName : false;

        if (imageData && self.video && node && (node === 'IFRAME' || node === 'VIDEO')) {
            let h = imageData.image.height;
            let w = h * self.image.width / self.image.height;
            let ml = (imageData.container.width - w) / 2;
            let mt = imageData.image.marginTop;

            if (imageData.container.width > w) {
                w = imageData.container.width;
                h = w * self.image.height / self.image.width;
                ml = 0;
                mt += (imageData.image.height - h) / 2;
            }

            // add video height over than need to hide controls
            if (node === 'IFRAME') {
                h += 400;
                mt -= 200;
            }

            self.css(self.$video, {
                width: `${w}px`,
                marginLeft: `${ml}px`,
                height: `${h}px`,
                marginTop: `${mt}px`,
            });
        }

        return imageData;
    };

    // init video
    const defInitImg = Jarallax.prototype.initImg;
    Jarallax.prototype.initImg = function () {
        const self = this;
        const defaultResult = defInitImg.apply(self);

        if (!self.options.videoSrc) {
            self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
        }

        if (self.options.videoSrc) {
            self.defaultInitImgResult = defaultResult;
            return true;
        }

        return defaultResult;
    };

    const defCanInitParallax = Jarallax.prototype.canInitParallax;
    Jarallax.prototype.canInitParallax = function () {
        const self = this;
        const defaultResult = defCanInitParallax.apply(self);

        if (!self.options.videoSrc) {
            return defaultResult;
        }

        const video = new video_worker_esm_VideoWorker(self.options.videoSrc, {
            autoplay: true,
            loop: self.options.videoLoop,
            showContols: false,
            startTime: self.options.videoStartTime || 0,
            endTime: self.options.videoEndTime || 0,
            mute: self.options.videoVolume ? 0 : 1,
            volume: self.options.videoVolume || 0,
        });

        if (video.isValid()) {
            // if parallax will not be inited, we can add thumbnail on background.
            if (!defaultResult) {
                if (!self.defaultInitImgResult) {
                    video.getImageURL((url) => {
                        // save default user styles
                        const curStyle = self.$item.getAttribute('style');
                        if (curStyle) {
                            self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                        }

                        // set new background
                        self.css(self.$item, {
                            'background-image': `url("${url}")`,
                            'background-position': 'center',
                            'background-size': 'cover',
                        });
                    });
                }

                // init video
            } else {
                video.on('ready', () => {
                    if (self.options.videoPlayOnlyVisible) {
                        const oldOnScroll = self.onScroll;
                        self.onScroll = function () {
                            oldOnScroll.apply(self);
                            if (self.options.videoLoop || (!self.options.videoLoop && !self.videoEnded)) {
                                if (self.isVisible()) {
                                    video.play();
                                } else {
                                    video.pause();
                                }
                            }
                        };
                    } else {
                        video.play();
                    }
                });
                video.on('started', () => {
                    self.image.$default_item = self.image.$item;
                    self.image.$item = self.$video;

                    // set video width and height
                    self.image.width = self.video.videoWidth || 1280;
                    self.image.height = self.video.videoHeight || 720;
                    self.coverImage();
                    self.clipContainer();
                    self.onScroll();

                    // hide image
                    if (self.image.$default_item) {
                        self.image.$default_item.style.display = 'none';
                    }
                });

                video.on('ended', () => {
                    self.videoEnded = true;

                    if (!self.options.videoLoop) {
                        // show image if Loop disabled
                        if (self.image.$default_item) {
                            self.image.$item = self.image.$default_item;
                            self.image.$item.style.display = 'block';

                            // set image width and height
                            self.coverImage();
                            self.clipContainer();
                            self.onScroll();
                        }
                    }
                });

                self.video = video;

                // set image if not exists
                if (!self.defaultInitImgResult) {
                    // set empty image on local video if not defined
                    self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

                    if (video.type !== 'local') {
                        video.getImageURL((url) => {
                            self.image.bgImage = `url("${url}")`;
                            self.init();
                        });

                        return false;
                    }

                    return true;
                }
            }
        }

        return defaultResult;
    };

    // Destroy video parallax
    const defDestroy = Jarallax.prototype.destroy;
    Jarallax.prototype.destroy = function () {
        const self = this;

        if (self.image.$default_item) {
            self.image.$item = self.image.$default_item;
            delete self.image.$default_item;
        }

        defDestroy.apply(self);
    };
}


/***/ }),

/***/ "./node_modules/jarallax/src/jarallax.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/jarallax/src/jarallax.esm.js ***!
  \***************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lite-ready */ "./node_modules/lite-ready/liteready.js");
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rafl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rafl */ "./node_modules/rafl/index.js");
/* harmony import */ var rafl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rafl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_2__);




const isIE = navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1 || navigator.userAgent.indexOf('Edge/') > -1;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const supportTransform = (() => {
    const prefixes = 'transform WebkitTransform MozTransform'.split(' ');
    const div = document.createElement('div');
    for (let i = 0; i < prefixes.length; i++) {
        if (div && div.style[prefixes[i]] !== undefined) {
            return prefixes[i];
        }
    }
    return false;
})();

let $deviceHelper;

/**
 * The most popular mobile browsers changes height after page scroll and this generates image jumping.
 * We can fix it using this workaround with vh units.
 */
function getDeviceHeight() {
    if (!$deviceHelper && document.body) {
        $deviceHelper = document.createElement('div');
        $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
        document.body.appendChild($deviceHelper);
    }

    return ($deviceHelper ? $deviceHelper.clientHeight : 0) || global__WEBPACK_IMPORTED_MODULE_2__["window"].innerHeight || document.documentElement.clientHeight;
}

// Window data
let wndW;
let wndH;
let wndY;
let forceResizeParallax = false;
let forceScrollParallax = false;
function updateWndVars(e) {
    wndW = global__WEBPACK_IMPORTED_MODULE_2__["window"].innerWidth || document.documentElement.clientWidth;

    if (isMobile) {
        wndH = getDeviceHeight();
    } else {
        wndH = global__WEBPACK_IMPORTED_MODULE_2__["window"].innerHeight || document.documentElement.clientHeight;
    }

    if (typeof e === 'object' && (e.type === 'load' || e.type === 'dom-loaded')) {
        forceResizeParallax = true;
    }
}
updateWndVars();
global__WEBPACK_IMPORTED_MODULE_2__["window"].addEventListener('resize', updateWndVars);
global__WEBPACK_IMPORTED_MODULE_2__["window"].addEventListener('orientationchange', updateWndVars);
global__WEBPACK_IMPORTED_MODULE_2__["window"].addEventListener('load', updateWndVars);
lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    updateWndVars({
        type: 'dom-loaded',
    });
});

// list with all jarallax instances
// need to render all in one scroll/resize event
const jarallaxList = [];

// Animate if changed window size or scrolled page
let oldPageData = false;
function updateParallax() {
    if (!jarallaxList.length) {
        return;
    }

    if (global__WEBPACK_IMPORTED_MODULE_2__["window"].pageYOffset !== undefined) {
        wndY = global__WEBPACK_IMPORTED_MODULE_2__["window"].pageYOffset;
    } else {
        wndY = (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }

    const isResized = forceResizeParallax || !oldPageData || oldPageData.width !== wndW || oldPageData.height !== wndH;
    const isScrolled = forceScrollParallax || isResized || !oldPageData || oldPageData.y !== wndY;

    forceResizeParallax = false;
    forceScrollParallax = false;

    if (isResized || isScrolled) {
        jarallaxList.forEach((item) => {
            if (isResized) {
                item.onResize();
            }
            if (isScrolled) {
                item.onScroll();
            }
        });

        oldPageData = {
            width: wndW,
            height: wndH,
            y: wndY,
        };
    }

    rafl__WEBPACK_IMPORTED_MODULE_1___default()(updateParallax);
}


// ResizeObserver
const resizeObserver = global.ResizeObserver ? new global.ResizeObserver((entry) => {
    if (entry && entry.length) {
        rafl__WEBPACK_IMPORTED_MODULE_1___default()(() => {
            entry.forEach((item) => {
                if (item.target && item.target.jarallax) {
                    if (!forceResizeParallax) {
                        item.target.jarallax.onResize();
                    }
                    forceScrollParallax = true;
                }
            });
        });
    }
}) : false;


let instanceID = 0;

// Jarallax class
class Jarallax {
    constructor(item, userOptions) {
        const self = this;

        self.instanceID = instanceID++;

        self.$item = item;

        self.defaults = {
            type: 'scroll', // type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
            speed: 0.5, // supported value from -1 to 2
            imgSrc: null,
            imgElement: '.jarallax-img',
            imgSize: 'cover',
            imgPosition: '50% 50%',
            imgRepeat: 'no-repeat', // supported only for background, not for <img> tag
            keepImg: false, // keep <img> tag in it's default place
            elementInViewport: null,
            zIndex: -100,
            disableParallax: false,
            disableVideo: false,
            automaticResize: true, // use ResizeObserver to recalculate position and size of parallax image

            // video
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: true,
            videoPlayOnlyVisible: true,
            videoLazyLoading: true,

            // events
            onScroll: null, // function(calculations) {}
            onInit: null, // function() {}
            onDestroy: null, // function() {}
            onCoverImage: null, // function() {}
        };

        // prepare data-options
        const dataOptions = self.$item.dataset || {};
        const pureDataOptions = {};
        Object.keys(dataOptions).forEach((key) => {
            const loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
            if (loweCaseOption && typeof self.defaults[loweCaseOption] !== 'undefined') {
                pureDataOptions[loweCaseOption] = dataOptions[key];
            }
        });

        self.options = self.extend({}, self.defaults, pureDataOptions, userOptions);
        self.pureOptions = self.extend({}, self.options);

        // prepare 'true' and 'false' strings to boolean
        Object.keys(self.options).forEach((key) => {
            if (self.options[key] === 'true') {
                self.options[key] = true;
            } else if (self.options[key] === 'false') {
                self.options[key] = false;
            }
        });

        // fix speed option [-1.0, 2.0]
        self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));

        // prepare disableParallax callback
        if (typeof self.options.disableParallax === 'string') {
            self.options.disableParallax = new RegExp(self.options.disableParallax);
        }
        if (self.options.disableParallax instanceof RegExp) {
            const disableParallaxRegexp = self.options.disableParallax;
            self.options.disableParallax = () => disableParallaxRegexp.test(navigator.userAgent);
        }
        if (typeof self.options.disableParallax !== 'function') {
            self.options.disableParallax = () => false;
        }

        // prepare disableVideo callback
        if (typeof self.options.disableVideo === 'string') {
            self.options.disableVideo = new RegExp(self.options.disableVideo);
        }
        if (self.options.disableVideo instanceof RegExp) {
            const disableVideoRegexp = self.options.disableVideo;
            self.options.disableVideo = () => disableVideoRegexp.test(navigator.userAgent);
        }
        if (typeof self.options.disableVideo !== 'function') {
            self.options.disableVideo = () => false;
        }

        // custom element to check if parallax in viewport
        let elementInVP = self.options.elementInViewport;
        // get first item from array
        if (elementInVP && typeof elementInVP === 'object' && typeof elementInVP.length !== 'undefined') {
            [elementInVP] = elementInVP;
        }
        // check if dom element
        if (!(elementInVP instanceof Element)) {
            elementInVP = null;
        }
        self.options.elementInViewport = elementInVP;

        self.image = {
            src: self.options.imgSrc || null,
            $container: null,
            useImgTag: false,

            // position fixed is needed for the most of browsers because absolute position have glitches
            // on MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
            // on mobile devices better scrolled with absolute position
            position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed',
        };

        if (self.initImg() && self.canInitParallax()) {
            self.init();
        }
    }

    // add styles to element
    css(el, styles) {
        if (typeof styles === 'string') {
            return global__WEBPACK_IMPORTED_MODULE_2__["window"].getComputedStyle(el).getPropertyValue(styles);
        }

        // add transform property with vendor prefix
        if (styles.transform && supportTransform) {
            styles[supportTransform] = styles.transform;
        }

        Object.keys(styles).forEach((key) => {
            el.style[key] = styles[key];
        });
        return el;
    }

    // Extend like jQuery.extend
    extend(out) {
        out = out || {};
        Object.keys(arguments).forEach((i) => {
            if (!arguments[i]) {
                return;
            }
            Object.keys(arguments[i]).forEach((key) => {
                out[key] = arguments[i][key];
            });
        });
        return out;
    }

    // get window size and scroll position. Useful for extensions
    getWindowData() {
        return {
            width: wndW,
            height: wndH,
            y: wndY,
        };
    }

    // Jarallax functions
    initImg() {
        const self = this;

        // find image element
        let $imgElement = self.options.imgElement;
        if ($imgElement && typeof $imgElement === 'string') {
            $imgElement = self.$item.querySelector($imgElement);
        }
        // check if dom element
        if (!($imgElement instanceof Element)) {
            if (self.options.imgSrc) {
                $imgElement = new Image();
                $imgElement.src = self.options.imgSrc;
            } else {
                $imgElement = null;
            }
        }

        if ($imgElement) {
            if (self.options.keepImg) {
                self.image.$item = $imgElement.cloneNode(true);
            } else {
                self.image.$item = $imgElement;
                self.image.$itemParent = $imgElement.parentNode;
            }
            self.image.useImgTag = true;
        }

        // true if there is img tag
        if (self.image.$item) {
            return true;
        }

        // get image src
        if (self.image.src === null) {
            self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            self.image.bgImage = self.css(self.$item, 'background-image');
        }
        return !(!self.image.bgImage || self.image.bgImage === 'none');
    }

    canInitParallax() {
        return supportTransform && !this.options.disableParallax();
    }

    init() {
        const self = this;
        const containerStyles = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
        };
        let imageStyles = {};

        if (!self.options.keepImg) {
            // save default user styles
            const curStyle = self.$item.getAttribute('style');
            if (curStyle) {
                self.$item.setAttribute('data-jarallax-original-styles', curStyle);
            }
            if (self.image.useImgTag) {
                const curImgStyle = self.image.$item.getAttribute('style');
                if (curImgStyle) {
                    self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
                }
            }
        }

        // set relative position and z-index to the parent
        if (self.css(self.$item, 'position') === 'static') {
            self.css(self.$item, {
                position: 'relative',
            });
        }
        if (self.css(self.$item, 'z-index') === 'auto') {
            self.css(self.$item, {
                zIndex: 0,
            });
        }

        // container for parallax image
        self.image.$container = document.createElement('div');
        self.css(self.image.$container, containerStyles);
        self.css(self.image.$container, {
            'z-index': self.options.zIndex,
        });

        // fix for IE https://github.com/nk-o/jarallax/issues/110
        if (isIE) {
            self.css(self.image.$container, {
                opacity: 0.9999,
            });
        }

        self.image.$container.setAttribute('id', `jarallax-container-${self.instanceID}`);
        self.$item.appendChild(self.image.$container);

        // use img tag
        if (self.image.useImgTag) {
            imageStyles = self.extend({
                'object-fit': self.options.imgSize,
                'object-position': self.options.imgPosition,
                // support for plugin https://github.com/bfred-it/object-fit-images
                'font-family': `object-fit: ${self.options.imgSize}; object-position: ${self.options.imgPosition};`,
                'max-width': 'none',
            }, containerStyles, imageStyles);

        // use div with background image
        } else {
            self.image.$item = document.createElement('div');
            if (self.image.src) {
                imageStyles = self.extend({
                    'background-position': self.options.imgPosition,
                    'background-size': self.options.imgSize,
                    'background-repeat': self.options.imgRepeat,
                    'background-image': self.image.bgImage || `url("${self.image.src}")`,
                }, containerStyles, imageStyles);
            }
        }

        if (self.options.type === 'opacity' || self.options.type === 'scale' || self.options.type === 'scale-opacity' || self.options.speed === 1) {
            self.image.position = 'absolute';
        }

        // check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
        // discussion - https://github.com/nk-o/jarallax/issues/9
        if (self.image.position === 'fixed') {
            let parentWithTransform = 0;
            let $itemParents = self.$item;
            while ($itemParents !== null && $itemParents !== document && parentWithTransform === 0) {
                const parentTransform = self.css($itemParents, '-webkit-transform') || self.css($itemParents, '-moz-transform') || self.css($itemParents, 'transform');
                if (parentTransform && parentTransform !== 'none') {
                    parentWithTransform = 1;
                    self.image.position = 'absolute';
                }
                $itemParents = $itemParents.parentNode;
            }
        }

        // add position to parallax block
        imageStyles.position = self.image.position;

        // insert parallax image
        self.css(self.image.$item, imageStyles);
        self.image.$container.appendChild(self.image.$item);

        // set initial position and size
        self.onResize();
        self.onScroll(true);

        // ResizeObserver
        if (self.options.automaticResize && resizeObserver) {
            resizeObserver.observe(self.$item);
        }

        // call onInit event
        if (self.options.onInit) {
            self.options.onInit.call(self);
        }

        // remove default user background
        if (self.css(self.$item, 'background-image') !== 'none') {
            self.css(self.$item, {
                'background-image': 'none',
            });
        }

        self.addToParallaxList();
    }

    // add to parallax instances list
    addToParallaxList() {
        jarallaxList.push(this);

        if (jarallaxList.length === 1) {
            updateParallax();
        }
    }

    // remove from parallax instances list
    removeFromParallaxList() {
        const self = this;

        jarallaxList.forEach((item, key) => {
            if (item.instanceID === self.instanceID) {
                jarallaxList.splice(key, 1);
            }
        });
    }

    destroy() {
        const self = this;

        self.removeFromParallaxList();

        // return styles on container as before jarallax init
        const originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
        self.$item.removeAttribute('data-jarallax-original-styles');
        // null occurs if there is no style tag before jarallax init
        if (!originalStylesTag) {
            self.$item.removeAttribute('style');
        } else {
            self.$item.setAttribute('style', originalStylesTag);
        }

        if (self.image.useImgTag) {
            // return styles on img tag as before jarallax init
            const originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
            self.image.$item.removeAttribute('data-jarallax-original-styles');
            // null occurs if there is no style tag before jarallax init
            if (!originalStylesImgTag) {
                self.image.$item.removeAttribute('style');
            } else {
                self.image.$item.setAttribute('style', originalStylesTag);
            }

            // move img tag to its default position
            if (self.image.$itemParent) {
                self.image.$itemParent.appendChild(self.image.$item);
            }
        }

        // remove additional dom elements
        if (self.$clipStyles) {
            self.$clipStyles.parentNode.removeChild(self.$clipStyles);
        }
        if (self.image.$container) {
            self.image.$container.parentNode.removeChild(self.image.$container);
        }

        // call onDestroy event
        if (self.options.onDestroy) {
            self.options.onDestroy.call(self);
        }

        // delete jarallax from item
        delete self.$item.jarallax;
    }

    // it will remove some image overlapping
    // overlapping occur due to an image position fixed inside absolute position element
    clipContainer() {
        // needed only when background in fixed position
        if (this.image.position !== 'fixed') {
            return;
        }

        const self = this;
        const rect = self.image.$container.getBoundingClientRect();
        const { width, height } = rect;

        if (!self.$clipStyles) {
            self.$clipStyles = document.createElement('style');
            self.$clipStyles.setAttribute('type', 'text/css');
            self.$clipStyles.setAttribute('id', `jarallax-clip-${self.instanceID}`);
            const head = document.head || document.getElementsByTagName('head')[0];
            head.appendChild(self.$clipStyles);
        }

        const styles = `#jarallax-container-${self.instanceID} {
           clip: rect(0 ${width}px ${height}px 0);
           clip: rect(0, ${width}px, ${height}px, 0);
        }`;

        // add clip styles inline (this method need for support IE8 and less browsers)
        if (self.$clipStyles.styleSheet) {
            self.$clipStyles.styleSheet.cssText = styles;
        } else {
            self.$clipStyles.innerHTML = styles;
        }
    }

    coverImage() {
        const self = this;

        const rect = self.image.$container.getBoundingClientRect();
        const contH = rect.height;
        const { speed } = self.options;
        const isScroll = self.options.type === 'scroll' || self.options.type === 'scroll-opacity';
        let scrollDist = 0;
        let resultH = contH;
        let resultMT = 0;

        // scroll parallax
        if (isScroll) {
            // scroll distance and height for image
            if (speed < 0) {
                scrollDist = speed * Math.max(contH, wndH);

                if (wndH < contH) {
                    scrollDist -= speed * (contH - wndH);
                }
            } else {
                scrollDist = speed * (contH + wndH);
            }

            // size for scroll parallax
            if (speed > 1) {
                resultH = Math.abs(scrollDist - wndH);
            } else if (speed < 0) {
                resultH = scrollDist / speed + Math.abs(scrollDist);
            } else {
                resultH += (wndH - contH) * (1 - speed);
            }

            scrollDist /= 2;
        }

        // store scroll distance
        self.parallaxScrollDistance = scrollDist;

        // vertical center
        if (isScroll) {
            resultMT = (wndH - resultH) / 2;
        } else {
            resultMT = (contH - resultH) / 2;
        }

        // apply result to item
        self.css(self.image.$item, {
            height: `${resultH}px`,
            marginTop: `${resultMT}px`,
            left: self.image.position === 'fixed' ? `${rect.left}px` : '0',
            width: `${rect.width}px`,
        });

        // call onCoverImage event
        if (self.options.onCoverImage) {
            self.options.onCoverImage.call(self);
        }

        // return some useful data. Used in the video cover function
        return {
            image: {
                height: resultH,
                marginTop: resultMT,
            },
            container: rect,
        };
    }

    isVisible() {
        return this.isElementInViewport || false;
    }

    onScroll(force) {
        const self = this;

        const rect = self.$item.getBoundingClientRect();
        const contT = rect.top;
        const contH = rect.height;
        const styles = {};

        // check if in viewport
        let viewportRect = rect;
        if (self.options.elementInViewport) {
            viewportRect = self.options.elementInViewport.getBoundingClientRect();
        }
        self.isElementInViewport = viewportRect.bottom >= 0
            && viewportRect.right >= 0
            && viewportRect.top <= wndH
            && viewportRect.left <= wndW;

        // stop calculations if item is not in viewport
        if (force ? false : !self.isElementInViewport) {
            return;
        }

        // calculate parallax helping variables
        const beforeTop = Math.max(0, contT);
        const beforeTopEnd = Math.max(0, contH + contT);
        const afterTop = Math.max(0, -contT);
        const beforeBottom = Math.max(0, contT + contH - wndH);
        const beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
        const afterBottom = Math.max(0, -contT + wndH - contH);
        const fromViewportCenter = 1 - 2 * (wndH - contT) / (wndH + contH);

        // calculate on how percent of section is visible
        let visiblePercent = 1;
        if (contH < wndH) {
            visiblePercent = 1 - (afterTop || beforeBottom) / contH;
        } else if (beforeTopEnd <= wndH) {
            visiblePercent = beforeTopEnd / wndH;
        } else if (beforeBottomEnd <= wndH) {
            visiblePercent = beforeBottomEnd / wndH;
        }

        // opacity
        if (self.options.type === 'opacity' || self.options.type === 'scale-opacity' || self.options.type === 'scroll-opacity') {
            styles.transform = 'translate3d(0,0,0)';
            styles.opacity = visiblePercent;
        }

        // scale
        if (self.options.type === 'scale' || self.options.type === 'scale-opacity') {
            let scale = 1;
            if (self.options.speed < 0) {
                scale -= self.options.speed * visiblePercent;
            } else {
                scale += self.options.speed * (1 - visiblePercent);
            }
            styles.transform = `scale(${scale}) translate3d(0,0,0)`;
        }

        // scroll
        if (self.options.type === 'scroll' || self.options.type === 'scroll-opacity') {
            let positionY = self.parallaxScrollDistance * fromViewportCenter;

            // fix if parallax block in absolute position
            if (self.image.position === 'absolute') {
                positionY -= contT;
            }

            styles.transform = `translate3d(0,${positionY}px,0)`;
        }

        self.css(self.image.$item, styles);

        // call onScroll event
        if (self.options.onScroll) {
            self.options.onScroll.call(self, {
                section: rect,

                beforeTop,
                beforeTopEnd,
                afterTop,
                beforeBottom,
                beforeBottomEnd,
                afterBottom,

                visiblePercent,
                fromViewportCenter,
            });
        }
    }

    onResize() {
        this.coverImage();
        this.clipContainer();
    }
}


// global definition
const plugin = function (items) {
    // check for dom element
    // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
    if (typeof HTMLElement === 'object' ? items instanceof HTMLElement : items && typeof items === 'object' && items !== null && items.nodeType === 1 && typeof items.nodeName === 'string') {
        items = [items];
    }

    const options = arguments[1];
    const args = Array.prototype.slice.call(arguments, 2);
    const len = items.length;
    let k = 0;
    let ret;

    for (k; k < len; k++) {
        if (typeof options === 'object' || typeof options === 'undefined') {
            if (!items[k].jarallax) {
                items[k].jarallax = new Jarallax(items[k], options);
            }
        } else if (items[k].jarallax) {
            // eslint-disable-next-line prefer-spread
            ret = items[k].jarallax[options].apply(items[k].jarallax, args);
        }
        if (typeof ret !== 'undefined') {
            return ret;
        }
    }

    return items;
};
plugin.constructor = Jarallax;

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lite-ready/liteready.js":
/*!**********************************************!*\
  !*** ./node_modules/lite-ready/liteready.js ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (callback) {

	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		// Already ready or interactive, execute callback
		callback.call();
	}
	else if (document.attachEvent) {
		// Old browsers
		document.attachEvent('onreadystatechange', function () {
			if (document.readyState === 'interactive')
				callback.call();
		});
	}
	else if (document.addEventListener) {
		// Modern browsers
		document.addEventListener('DOMContentLoaded', callback);
	}
}


/***/ }),

/***/ "./node_modules/rafl/index.js":
/*!************************************!*\
  !*** ./node_modules/rafl/index.js ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! global */ "./node_modules/rafl/node_modules/global/window.js")

/**
 * `requestAnimationFrame()`
 */

var request = global.requestAnimationFrame
  || global.webkitRequestAnimationFrame
  || global.mozRequestAnimationFrame
  || fallback

var prev = +new Date
function fallback (fn) {
  var curr = +new Date
  var ms = Math.max(0, 16 - (curr - prev))
  var req = setTimeout(fn, ms)
  return prev = curr, req
}

/**
 * `cancelAnimationFrame()`
 */

var cancel = global.cancelAnimationFrame
  || global.webkitCancelAnimationFrame
  || global.mozCancelAnimationFrame
  || clearTimeout

if (Function.prototype.bind) {
  request = request.bind(global)
  cancel = cancel.bind(global)
}

exports = module.exports = request
exports.cancel = cancel


/***/ }),

/***/ "./node_modules/rafl/node_modules/global/window.js":
/*!*********************************************************!*\
  !*** ./node_modules/rafl/node_modules/global/window.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=7.e59533601d391953a84f.js.map