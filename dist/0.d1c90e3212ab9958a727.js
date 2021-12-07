(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@magento/venia-ui/lib/components/Image/image.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 2 modules ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Image/useImage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Image/useResourceImage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/imageUtils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/placeholderImage.js because of ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/item.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/simpleImage.js because of ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/item.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Image/image.css (<- Module is not an ECMAScript module) */
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
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Image/useImage.js
var useImage = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Image/useImage.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/imageUtils.js
var imageUtils = __webpack_require__("./node_modules/@magento/peregrine/lib/util/imageUtils.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/placeholderImage.js
var placeholderImage = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/placeholderImage.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Image/useResourceImage.js
var useResourceImage = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Image/useResourceImage.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/resourceImage.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Renders a Magento resource image.
 *
 * @param {string}   props.alt the alt attribute to apply to the image.
 * @param {string}   props.className the class to apply to this image.
 * @param {Func}     props.handleError the function to call if the image fails to load.
 * @param {Func}     props.handleLoad the function to call if the image successfully loads.
 * @param {number}   props.height the height to request for the fallback image for browsers that don't support srcset / sizes.
 * @param {string}   props.resource the Magento path to the image ex: /v/d/vd12-rn_main_2.jpg
 * @param {string}   props.type the Magento image type ("image-category" / "image-product"). Used to build the resource URL.
 * @param {number}   props.width the intrinsic width of the image & the width to request for the fallback image for browsers that don't support srcset / sizes.
 * @param {Map}      props.widths a map of breakpoints to possible widths used to create the img's sizes attribute.
 * @param {number}   props.ratio is the image width to height ratio. Defaults to 4/5.
 */

const ResourceImage = props => {
  _s();

  const {
    alt,
    className,
    handleError,
    handleLoad,
    height,
    resource,
    type,
    width,
    widths,
    ratio
  } = props,
        rest = _objectWithoutProperties(props, ["alt", "className", "handleError", "handleLoad", "height", "resource", "type", "width", "widths", "ratio"]);

  const talonProps = Object(useResourceImage["a" /* useResourceImage */])({
    generateSrcset: imageUtils["b" /* generateSrcset */],
    generateUrl: imageUtils["c" /* generateUrl */],
    height,
    resource,
    type,
    width,
    widths,
    ratio
  });
  const {
    sizes,
    src,
    srcSet
  } = talonProps; // Note: Attributes that are allowed to be overridden must appear before the spread of `rest`.

  return react_default.a.createElement("img", _extends({
    loading: "lazy"
  }, rest, {
    alt: alt,
    className: className,
    onError: handleError,
    onLoad: handleLoad,
    sizes: sizes,
    src: src,
    srcSet: srcSet,
    width: width
  }));
};

_s(ResourceImage, "L98NxJDuIF2UFGZRP/x2WA/A7AM=", false, function () {
  return [useResourceImage["a" /* useResourceImage */]];
});

_c = ResourceImage;
ResourceImage.propTypes = {
  alt: prop_types["string"].isRequired,
  className: prop_types["string"],
  handleError: prop_types["func"],
  handleLoad: prop_types["func"],
  resource: prop_types["string"].isRequired,
  height: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  type: prop_types["string"],
  width: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  widths: Object(prop_types["instanceOf"])(Map)
};
ResourceImage.defaultProps = {
  type: 'image-product'
};
/* harmony default export */ var resourceImage = (ResourceImage);

var _c;

$RefreshReg$(_c, "ResourceImage");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/simpleImage.js
var simpleImage = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/simpleImage.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Image/image.css
var Image_image = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Image/image.css");
var image_default = /*#__PURE__*/__webpack_require__.n(Image_image);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(image_default.a, options);



/* harmony default export */ var components_Image_image = (image_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js
var image_s = $RefreshSig$();

function image_extends() { image_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return image_extends.apply(this, arguments); }

function image_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = image_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function image_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










/**
 * The Image component renders a placeholder until the image is loaded.
 *
 * @param {object}   props.classes any classes to apply to this component
 * @param {bool}     props.displayPlaceholder whether or not to display a placeholder while the image loads or if it errors on load.
 * @param {number}   props.height the intrinsic height of the image & the height to request for the fallback image for browsers that don't support srcset / sizes.
 * @param {function} props.onError callback for error loading image
 * @param {function} props.onLoad callback for when image loads successfully
 * @param {string}   props.placeholder the placeholder source to display while the image loads or if it errors on load
 * @param {string}   props.resource the Magento path to the image ex: /v/d/vd12-rn_main_2.jpg
 * @param {string}   props.src the source of the image, ready to use in an img element
 * @param {string}   props.type the Magento image type ("image-category" / "image-product"). Used to build the resource URL.
 * @param {number}   props.width the intrinsic width of the image & the width to request for the fallback image for browsers that don't support srcset / sizes.
 * @param {number}   props.ratio is the image width to height ratio. Defaults to `DEFAULT_WIDTH_TO_HEIGHT_RATIO` from `util/images.js`.
 * @param {Map}      props.widths a map of breakpoints to possible widths used to create the img's sizes attribute.
 */

const Image = props => {
  image_s();

  const {
    alt,
    classes: propsClasses,
    displayPlaceholder,
    height,
    onError,
    onLoad,
    placeholder,
    resource,
    src,
    type,
    width,
    widths,
    ratio
  } = props,
        rest = image_objectWithoutProperties(props, ["alt", "classes", "displayPlaceholder", "height", "onError", "onLoad", "placeholder", "resource", "src", "type", "width", "widths", "ratio"]);

  const talonProps = Object(useImage["b" /* useImage */])({
    onError,
    onLoad,
    width,
    widths,
    height,
    ratio
  });
  const {
    handleError,
    handleImageLoad,
    hasError,
    isLoaded,
    resourceWidth: talonResourceWidth,
    resourceHeight: talonResourceHeight
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(components_Image_image, propsClasses);
  const containerClass = `${classes.root} ${classes.container}`;
  const isLoadedClass = isLoaded ? classes.loaded : classes.notLoaded;
  const imageClass = `${classes.image} ${isLoadedClass}`; // If we have a src, use it directly. If not, assume this is a resource image.

  const actualImage = src ? react_default.a.createElement(simpleImage["a" /* default */], image_extends({
    alt: alt,
    className: imageClass,
    handleError: handleError,
    handleLoad: handleImageLoad,
    height: talonResourceHeight,
    src: src,
    width: width
  }, rest)) : react_default.a.createElement(resourceImage, image_extends({
    alt: alt,
    className: imageClass,
    handleError: handleError,
    handleLoad: handleImageLoad,
    height: talonResourceHeight,
    resource: resource,
    type: type,
    width: talonResourceWidth,
    widths: widths,
    ratio: ratio
  }, rest));
  return react_default.a.createElement("div", {
    className: containerClass
  }, react_default.a.createElement(placeholderImage["a" /* default */], image_extends({
    alt: alt,
    classes: classes,
    displayPlaceholder: displayPlaceholder,
    height: height,
    imageHasError: hasError,
    imageIsLoaded: isLoaded,
    src: placeholder,
    width: talonResourceWidth
  }, rest)), actualImage);
};

image_s(Image, "DFqop5g1L19YghlFp10vw0ldNDU=", false, function () {
  return [useImage["b" /* useImage */], shallowMerge["a" /* default */]];
});

image_c = Image;

const conditionallyRequiredString = (props, propName, componentName) => {
  // This component needs one of src or resource to be provided.
  if (!props.src && !props.resource) {
    return new Error(`Missing both 'src' and 'resource' props in ${componentName}. ${componentName} needs at least one of these to be provided.`);
  }

  return prop_types_default.a.checkPropTypes({
    resource: prop_types["string"],
    src: prop_types["string"]
  }, props, propName, componentName);
};

Image.propTypes = {
  alt: prop_types["string"].isRequired,
  classes: Object(prop_types["shape"])({
    container: prop_types["string"],
    loaded: prop_types["string"],
    notLoaded: prop_types["string"],
    root: prop_types["string"]
  }),
  displayPlaceholder: prop_types["bool"],
  height: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  onError: prop_types["func"],
  onLoad: prop_types["func"],
  placeholder: prop_types["string"],
  resource: conditionallyRequiredString,
  src: conditionallyRequiredString,
  type: prop_types["string"],
  width: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  widths: Object(prop_types["instanceOf"])(Map),
  ratio: prop_types["number"]
};
Image.defaultProps = {
  displayPlaceholder: true,
  ratio: imageUtils["a" /* DEFAULT_WIDTH_TO_HEIGHT_RATIO */]
};
/* harmony default export */ var lib_components_Image_image = __webpack_exports__["a"] = (Image);

var image_c;

$RefreshReg$(image_c, "Image");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Image/placeholderImage.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Image/placeholderImage.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _magento_peregrine_lib_util_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @magento/peregrine/lib/util/images */ "./node_modules/@magento/peregrine/lib/util/images.js");
/* harmony import */ var _magento_peregrine_lib_talons_Image_usePlaceholderImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @magento/peregrine/lib/talons/Image/usePlaceholderImage */ "./node_modules/@magento/peregrine/lib/talons/Image/usePlaceholderImage.js");
/* harmony import */ var _simpleImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simpleImage */ "./node_modules/@magento/venia-ui/lib/components/Image/simpleImage.js");
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * A placeholder to use until the actual image is loaded.
 * This is used both for user experience and layout purposes.
 * Callers can disable the "user experience" part by setting displayPlaceholder to false.
 *
 * @param {string}   props.alt the alt attribute to apply to the image.
 * @param {object}   props.classes the pre-merged classes to apply to this component.
 * @param {bool}     props.displayPlaceholder whether or not to display a visual placeholder.
 * @param {number}   props.height the intrinsic height of the image.
 * @param {string}   props.imageHasError there was an error loading the actual image.
 * @param {string}   props.imageIsLoaded the actual image is loaded.
 * @param {string}   props.src the actual src of the placeholder image.
 * @param {number}   props.width the intrinsic width of the image.
 */

const PlaceholderImage = props => {
  _s();

  const {
    alt,
    classes,
    displayPlaceholder,
    height,
    imageHasError,
    imageIsLoaded,
    src,
    width
  } = props,
        rest = _objectWithoutProperties(props, ["alt", "classes", "displayPlaceholder", "height", "imageHasError", "imageIsLoaded", "src", "width"]);

  const talonProps = Object(_magento_peregrine_lib_talons_Image_usePlaceholderImage__WEBPACK_IMPORTED_MODULE_3__[/* usePlaceholderImage */ "a"])({
    displayPlaceholder,
    imageHasError,
    imageIsLoaded
  });
  const {
    shouldRenderPlaceholder
  } = talonProps;
  const placeholderClass = shouldRenderPlaceholder ? classes.placeholder : classes.placeholder_layoutOnly;
  const placeholderFullClass = `${classes.image} ${placeholderClass}`; // Note: Attributes that are allowed to be overridden must appear before the spread of `rest`.

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_simpleImage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _extends({
    loading: "eager",
    height: height,
    width: width
  }, rest, {
    alt: alt,
    className: placeholderFullClass,
    src: src
  }));
};

_s(PlaceholderImage, "9t3913bmrYqucqWj9NUdom1tZTI=", false, function () {
  return [_magento_peregrine_lib_talons_Image_usePlaceholderImage__WEBPACK_IMPORTED_MODULE_3__[/* usePlaceholderImage */ "a"]];
});

_c = PlaceholderImage;
PlaceholderImage.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  classes: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    image: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
    placeholder_layoutOnly: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
  }).isRequired,
  displayPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  height: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),
  imageHasError: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  imageIsLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  src: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  width: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]])
};
PlaceholderImage.defaultProps = {
  src: _magento_peregrine_lib_util_images__WEBPACK_IMPORTED_MODULE_2__[/* transparentPlaceholder */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (PlaceholderImage);

var _c;

$RefreshReg$(_c, "PlaceholderImage");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Image/simpleImage.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Image/simpleImage.js ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * Renders an img element directly using the supplied src.
 *
 * @param {String}  props.alt - The alt attribute for the img element.
 * @param {String}  props.className - The class name to apply to the img element.
 * @param {Func}    props.handleError - The function to call if the image fails to load.
 * @param {Func}    props.handleLoad - The function to call if the image successfully loads.
 * @param {Number}  props.height - The height of the img element.
 * @param {String}  props.src - The src attribute for the img element.
 * @param {Number}  props.width - The width of the img element.
 */

const SimpleImage = props => {
  const {
    alt,
    className,
    handleError,
    handleLoad,
    height,
    src,
    width
  } = props,
        rest = _objectWithoutProperties(props, ["alt", "className", "handleError", "handleLoad", "height", "src", "width"]); // Note: Attributes that are allowed to be overridden must appear before the spread of `rest`.


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({
    loading: "lazy"
  }, rest, {
    alt: alt,
    className: className,
    height: height,
    onError: handleError,
    onLoad: handleLoad,
    src: src,
    width: width
  }));
};

_c = SimpleImage;
SimpleImage.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  handleError: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  handleLoad: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  height: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),
  src: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  width: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]])
};
/* harmony default export */ __webpack_exports__["a"] = (SimpleImage);

var _c;

$RefreshReg$(_c, "SimpleImage");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Image/image.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Image/image.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".image-root-3xt {\n    /*\n     * For customization, we provide an empty root.\n     * These styles will be applied to the image container.\n     */\n}\n\n.image-container-t_c {\n    position: relative;\n}\n\n.image-image-Q9a {\n    /*\n     * For customization, we provide an empty image class. \n     * These styles will be applied directly to the image itself.\n     */\n}\n\n.image-loaded-tFW {\n    position: absolute;\n    top: 0;\n    left: 0;\n    visibility: visible;\n}\n\n.image-notLoaded-gw4 {\n    visibility: hidden;\n}\n\n.image-placeholder-58e {\n    background-color: rgb(var(--venia-global-color-gray));\n    position: relative;\n    top: 0;\n    left: 0;\n}\n\n.image-placeholder_layoutOnly-1mt {\n    background-color: unset;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "image-root-3xt",
	"container": "image-container-t_c",
	"image": "image-image-Q9a",
	"loaded": "image-loaded-tFW",
	"notLoaded": "image-notLoaded-gw4 image-loaded-tFW",
	"placeholder": "image-placeholder-58e",
	"placeholder_layoutOnly": "image-placeholder_layoutOnly-1mt image-placeholder-58e"
};

/***/ })

}]);
//# sourceMappingURL=0.d1c90e3212ab9958a727.js.map