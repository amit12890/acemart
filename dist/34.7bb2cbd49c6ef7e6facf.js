(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/index.js + 2 modules ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/pagebuilder/lib/resolveLinkProps.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/makeUrl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ContentTypes_Banner_banner; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css
var banner = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css");
var banner_default = /*#__PURE__*/__webpack_require__.n(banner);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(banner_default.a, options);



/* harmony default export */ var Banner_banner = (banner_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/pagebuilder/lib/resolveLinkProps.js
var resolveLinkProps = __webpack_require__("./node_modules/@magento/pagebuilder/lib/resolveLinkProps.js");

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/makeUrl.js
var makeUrl = __webpack_require__("./node_modules/@magento/peregrine/lib/util/makeUrl.js");

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const {
  matchMedia
} = globalThis;

const toHTML = str => ({
  __html: str
});

const handleDragStart = event => event.preventDefault();
/**
 * Page Builder Banner component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Banner
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Banner.
 */


const Banner = props => {
  _s();

  const backgroundElement = Object(react["useRef"])(null);
  const viewportElement = Object(react["useRef"])(null);
  const classes = Object(shallowMerge["a" /* default */])(Banner_banner, props.classes);
  const [hovered, setHovered] = Object(react["useState"])(false);

  const toggleHover = () => setHovered(!hovered);

  const {
    appearance = 'poster',
    minHeight,
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
    content,
    showButton,
    buttonType,
    buttonText,
    link,
    openInNewTab = false,
    showOverlay,
    overlayColor,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    cssClasses = [],
    backgroundType,
    videoSrc,
    videoFallbackSrc,
    videoLoop,
    videoPlayOnlyVisible,
    videoLazyLoading,
    videoOverlayColor,
    getParallax = () => {}
  } = props;
  let image = desktopImage;

  if (mobileImage && matchMedia && matchMedia('(max-width: 768px)').matches) {
    image = mobileImage;
  }

  const rootStyles = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  };
  const wrapperStyles = {
    backgroundColor,
    border,
    borderColor,
    borderWidth,
    borderRadius,
    textAlign
  };
  const overlayStyles = {
    backgroundColor: showOverlay !== 'never' ? overlayColor : null
  };
  const contentStyles = {};
  const videoOverlayStyles = {
    backgroundColor: videoOverlayColor
  }; // Initiate jarallax for background video

  /* eslint-disable react-hooks/exhaustive-deps */

  Object(react["useEffect"])(() => {
    let parallaxElement;
    let jarallax;
    let jarallaxVideo;

    if (backgroundType === 'video') {
      const config = {
        speed: 1,
        imgSrc: videoFallbackSrc ? Object(makeUrl["a" /* default */])(videoFallbackSrc, {
          type: 'image-wysiwyg',
          quality: 85
        }) : null,
        elementInViewport: viewportElement.current,
        videoSrc,
        videoLoop,
        videoPlayOnlyVisible,
        videoLazyLoading
      };
      parallaxElement = backgroundElement.current;
      ({
        jarallax,
        jarallaxVideo
      } = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js"));
      jarallaxVideo();
      jarallax(parallaxElement, config);
      parallaxElement.jarallax.video && parallaxElement.jarallax.video.on('started', () => {
        const self = parallaxElement.jarallax; // show video

        if (self.$video) {
          self.$video.style.visibility = 'visible';
        }
      });
      getParallax(parallaxElement, config);
    }

    return () => {
      if (parallaxElement && backgroundType === 'video') {
        jarallax(parallaxElement, 'destroy');
      }
    };
  }, [backgroundType, videoSrc, videoFallbackSrc, videoLoop, videoPlayOnlyVisible, videoLazyLoading]);
  /* eslint-enable react-hooks/exhaustive-deps */

  if (image) {
    const resourceImage = Object(makeUrl["a" /* default */])(image, {
      type: 'image-wysiwyg',
      quality: 85
    });
    wrapperStyles.backgroundImage = `url(${resourceImage})`;
    wrapperStyles.backgroundSize = backgroundSize;
    wrapperStyles.backgroundPosition = backgroundPosition;
    wrapperStyles.backgroundAttachment = backgroundAttachment;
    wrapperStyles.backgroundRepeat = backgroundRepeat ? 'repeat' : 'no-repeat';
  }

  if (appearance === 'poster') {
    wrapperStyles.minHeight = minHeight;
    overlayStyles.minHeight = minHeight;
    overlayStyles.paddingTop = paddingTop;
    overlayStyles.paddingRight = paddingRight;
    overlayStyles.paddingBottom = paddingBottom;
    overlayStyles.paddingLeft = paddingLeft;
    contentStyles.width = '100%';
  } else {
    wrapperStyles.minHeight = minHeight;
    wrapperStyles.paddingTop = paddingTop;
    wrapperStyles.paddingRight = paddingRight;
    wrapperStyles.paddingBottom = paddingBottom;
    wrapperStyles.paddingLeft = paddingLeft;
  }

  const appearanceOverlayClasses = {
    poster: classes.posterOverlay,
    'collage-left': classes.collageLeftOverlay,
    'collage-centered': classes.collageCenteredOverlay,
    'collage-right': classes.collageRightOverlay
  };
  const appearanceOverlayHoverClasses = {
    poster: classes.posterOverlayHover,
    'collage-left': classes.collageLeftOverlayHover,
    'collage-centered': classes.collageCenteredOverlayHover,
    'collage-right': classes.collageRightOverlayHover
  };
  const typeToPriorityMapping = {
    primary: 'high',
    secondary: 'normal',
    link: 'low'
  };
  let BannerButton;

  if (showButton !== 'never') {
    const buttonClass = showButton === 'hover' ? classes.buttonHover : classes.button;
    BannerButton = react_default.a.createElement("div", {
      className: buttonClass
    }, react_default.a.createElement(Button_button["a" /* default */], {
      priority: typeToPriorityMapping[buttonType],
      type: "button"
    }, buttonText));
  }

  const videoOverlay = videoOverlayColor ? react_default.a.createElement("div", {
    className: classes.videoOverlay,
    style: videoOverlayStyles
  }) : null;
  const videoViewportElement = backgroundType === 'video' ? react_default.a.createElement("div", {
    ref: viewportElement,
    className: classes.viewportElement
  }) : null;
  const overlayClass = showOverlay === 'hover' && !hovered ? appearanceOverlayHoverClasses[appearance] : appearanceOverlayClasses[appearance];
  let BannerFragment = react_default.a.createElement("div", {
    className: classes.wrapper,
    style: wrapperStyles,
    ref: backgroundElement
  }, videoOverlay, react_default.a.createElement("div", {
    className: overlayClass,
    style: overlayStyles
  }, react_default.a.createElement("div", {
    className: classes.content,
    style: contentStyles,
    dangerouslySetInnerHTML: toHTML(content)
  }), BannerButton), videoViewportElement);

  if (typeof link === 'string') {
    const linkProps = Object(resolveLinkProps["a" /* default */])(link);
    const LinkComponent = linkProps.to ? react_router_dom["b" /* Link */] : 'a';
    BannerFragment = react_default.a.createElement(LinkComponent, _extends({
      className: classes.link
    }, linkProps, openInNewTab ? {
      target: '_blank'
    } : '', {
      onDragStart: handleDragStart
    }), BannerFragment);
  }

  return react_default.a.createElement("div", {
    className: [classes.root, ...cssClasses].join(' '),
    style: rootStyles,
    onMouseEnter: toggleHover,
    onMouseLeave: toggleHover
  }, BannerFragment);
};
/**
 * Props for {@link Banner}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the banner
 * @property {String} classes.root CSS class for the banner root element
 * @property {String} classes.link CSS class for the banner link element
 * @property {String} classes.wrapper CSS class for the banner wrapper element
 * @property {String} classes.overlay CSS class for the banner overlay element
 * @property {String} classes.content CSS class for the banner content element
 * @property {String} classes.button CSS class for the banner button wrapping element
 * @property {String} classes.buttonHover CSS class for the banner button wrapping element for hover
 * @property {String} classes.posterOverlay CSS class for the banner poster appearance overlay
 * @property {String} classes.collageLeftOverlay CSS class for the banner collage left appearance overlay
 * @property {String} classes.collageCenteredOverlay CSS class for the banner collage centered appearance overlay
 * @property {String} classes.collageRightOverlay CSS class for the banner collage right appearance overlay
 * @property {String} classes.posterOverlayHover CSS class for the banner poster appearance overlay hover
 * @property {String} classes.collageLeftOverlayHover CSS class for the banner collage left appearance overlay hover
 * @property {String} classes.collageCenteredOverlayHover CSS class for the banner collage centered appearance overlay hover
 * @property {String} classes.collageRightOverlayHover CSS class for the banner collage right appearance overlay hover
 * @property {String} classes.poster CSS class for the banner poster appearance
 * @property {String} classes.videoOverlay CSS class for the video overlay
 * @property {String} classes.viewportElement CSS class for viewport element
 * @property {String} minHeight CSS minimum height property
 * @property {String} backgroundColor CSS background-color property
 * @property {String} desktopImage Background image URL to be displayed on desktop devices
 * @property {String} mobileImage Background image URL to be displayed on mobile devices
 * @property {String} backgroundSize CSS background-size property
 * @property {String} backgroundPosition CSS background-position property
 * @property {String} backgroundAttachment CSS background-attachment property
 * @property {Boolean} backgroundRepeat CSS background-repeat property
 * @property {String} content The HTML content to be rendered inside the banner content area
 * @property {String} link The link location for the banner
 * @property {String} linkType The type of link included with the banner. Values: default, product, category, page
 * @property {String} showButton Whether or not to show the button. Values: always, hover, never
 * @property {String} buttonText Text to display within the button
 * @property {String} buttonType The type of button to display. Values: primary, secondary, link
 * @property {String} showOverlay Whether or not to show the overlay. Values: always, hover, never
 * @property {String} overlayColor The color of the overlay
 * @property {String} textAlign Alignment of the banner within the parent container
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
 * @property {Function} getParallax Return parallax element and options
 */


_s(Banner, "SYl6rsJ7x70fGmwiwe0yLH5twGA=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Banner;
Banner.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    link: prop_types["string"],
    wrapper: prop_types["string"],
    overlay: prop_types["string"],
    content: prop_types["string"],
    button: prop_types["string"],
    buttonHover: prop_types["string"],
    posterOverlay: prop_types["string"],
    posterOverlayHover: prop_types["string"],
    collageLeftOverlay: prop_types["string"],
    collageLeftOverlayHover: prop_types["string"],
    collageCenteredOverlay: prop_types["string"],
    collageCenteredOverlayHover: prop_types["string"],
    collageRightOverlay: prop_types["string"],
    collageRightOverlayHover: prop_types["string"],
    videoOverlay: prop_types["string"],
    viewportElement: prop_types["string"]
  }),
  appearance: Object(prop_types["oneOf"])(['poster', 'collage-left', 'collage-centered', 'collage-right']),
  minHeight: prop_types["string"],
  backgroundColor: prop_types["string"],
  desktopImage: prop_types["string"],
  mobileImage: prop_types["string"],
  backgroundSize: prop_types["string"],
  backgroundPosition: prop_types["string"],
  backgroundAttachment: prop_types["string"],
  backgroundRepeat: prop_types["bool"],
  content: prop_types["string"],
  link: prop_types["string"],
  linkType: Object(prop_types["oneOf"])(['default', 'product', 'category', 'page']),
  openInNewTab: prop_types["bool"],
  showButton: Object(prop_types["oneOf"])(['always', 'hover', 'never']),
  buttonText: prop_types["string"],
  buttonType: Object(prop_types["oneOf"])(['primary', 'secondary', 'link']),
  showOverlay: Object(prop_types["oneOf"])(['always', 'hover', 'never']),
  overlayColor: prop_types["string"],
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
  cssClasses: Object(prop_types["arrayOf"])(prop_types["string"]),
  backgroundType: prop_types["string"],
  videoSrc: prop_types["string"],
  videoFallbackSrc: prop_types["string"],
  videoLoop: prop_types["bool"],
  videoPlayOnlyVisible: prop_types["bool"],
  videoLazyLoading: prop_types["bool"],
  videoOverlayColor: prop_types["string"],
  getParallax: prop_types["func"]
};
/* harmony default export */ var ContentTypes_Banner_banner = (Banner);

var _c;

$RefreshReg$(_c, "Banner");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/index.js


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".banner-root-1lO {\n}\na.banner-link-35K {\n    text-decoration: none;\n}\n.banner-wrapper-1H1 {\n    background-clip: padding-box;\n    border-radius: inherit;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    overflow: hidden;\n}\n.banner-overlay-26F {\n    padding: 30px;\n    transition: background-color 500ms ease;\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    position: relative;\n}\n\n.banner-videoOverlay-3Bp {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 0;\n}\n\n.banner-viewportElement-3d8 {\n    height: 100%;\n    width: 1px;\n    position: absolute;\n    left: var(--leftViewportElement);\n    top: 0;\n    z-index: -100;\n    -webkit-transform: translate3d(0, 0, 0);\n}\n\n.banner-content-26J {\n    min-height: 50px;\n    width: 100%;\n}\n.banner-button-X4s {\n    margin: 20px 0 0 0;\n    max-width: 100%;\n    text-align: inherit;\n    transition: opacity 500ms ease;\n    word-break: break-word;\n    width: 100%;\n}\n.banner-root-1lO:hover .banner-buttonHover-1Iu {\n    opacity: 1;\n}\n.banner-buttonHover-1Iu {\n    opacity: 0;\n}\n.banner-posterOverlay-Kjh {\n    align-content: center;\n    justify-content: center;\n}\n.banner-posterOverlayHover-1QO {\n    background-color: transparent !important;\n}\n.banner-collageLeftOverlay-3ZB {\n    margin-right: auto;\n    max-width: 540px;\n}\n.banner-collageLeftOverlayHover-2Y0 {\n    background-color: transparent !important;\n}\n.banner-collageCenteredOverlay-2PY {\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 540px;\n}\n.banner-collageCenteredOverlayHover-27g {\n    background-color: transparent !important;\n}\n.banner-collageRightOverlay-19t {\n    margin-left: auto;\n    max-width: 540px;\n}\n.banner-collageRightOverlayHover-317 {\n    background-color: transparent !important;\n}\n\n.banner-root-1lO [id*='jarallax-container'] video,\n.banner-root-1lO [id*='jarallax-container'] iframe,\n.banner-root-1lO [id*='jarallax-container'] img {\n    margin: auto !important;\n    transform: none !important;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "banner-root-1lO",
	"link": "banner-link-35K",
	"wrapper": "banner-wrapper-1H1",
	"overlay": "banner-overlay-26F",
	"videoOverlay": "banner-videoOverlay-3Bp",
	"viewportElement": "banner-viewportElement-3d8",
	"content": "banner-content-26J",
	"button": "banner-button-X4s",
	"buttonHover": "banner-buttonHover-1Iu banner-button-X4s",
	"posterOverlay": "banner-posterOverlay-Kjh banner-overlay-26F",
	"posterOverlayHover": "banner-posterOverlayHover-1QO banner-posterOverlay-Kjh banner-overlay-26F",
	"collageLeftOverlay": "banner-collageLeftOverlay-3ZB banner-overlay-26F",
	"collageLeftOverlayHover": "banner-collageLeftOverlayHover-2Y0 banner-collageLeftOverlay-3ZB banner-overlay-26F",
	"collageCenteredOverlay": "banner-collageCenteredOverlay-2PY banner-overlay-26F",
	"collageCenteredOverlayHover": "banner-collageCenteredOverlayHover-27g banner-collageCenteredOverlay-2PY banner-overlay-26F",
	"collageRightOverlay": "banner-collageRightOverlay-19t banner-overlay-26F",
	"collageRightOverlayHover": "banner-collageRightOverlayHover-317 banner-collageRightOverlay-19t banner-overlay-26F"
};

/***/ })

}]);
//# sourceMappingURL=34.7bb2cbd49c6ef7e6facf.js.map