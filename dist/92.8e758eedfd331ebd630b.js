(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/magento/pagebuilder/ContentTypes/Video/video.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Video/video.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".video-root-1vL {\n    font-size: 0;\n}\n\n.video-inner-3Wc {\n    display: inline-block;\n    width: 100%;\n}\n\n.video-wrapper-3gr {\n    overflow: hidden;\n    transform: translateZ(0px);\n}\n\n.video-container-NXW {\n    overflow: hidden;\n    padding-top: 56.25%;\n    position: relative;\n}\n\n.video-video-1wI {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "video-root-1vL",
	"inner": "video-inner-3Wc",
	"wrapper": "video-wrapper-3gr",
	"container": "video-container-NXW",
	"video": "video-video-1wI"
};

/***/ }),

/***/ "./src/magento/pagebuilder/ContentTypes/Video/index.js":
/*!*************************************************************************!*\
  !*** ./src/magento/pagebuilder/ContentTypes/Video/index.js + 2 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Video/video.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ContentTypes_Video_video; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Video/video.css
var video = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/magento/pagebuilder/ContentTypes/Video/video.css");
var video_default = /*#__PURE__*/__webpack_require__.n(video);

// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Video/video.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(video_default.a, options);



/* harmony default export */ var Video_video = (video_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Video/video.js
var _s = $RefreshSig$();





/**
 * Page Builder Video component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Video
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Video using an iframe.
 */

const video_Video = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(Video_video, props.classes);
  const {
    url = '',
    autoplay,
    muted,
    maxWidth,
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
  const mainStyles = {
    textAlign,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  };
  const innerStyles = {
    maxWidth
  };
  const wrapperStyles = {
    border,
    borderColor,
    borderWidth,
    borderRadius,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  };
  const youtubeRegExp = new RegExp('^(?:https?://|//)?(?:www\\.|m\\.)?' + '(?:youtu\\.be/|youtube\\.com/(?:embed/|v/|watch\\?v=|watch\\?.+&v=))([\\w-]{11})(?![\\w-])');
  const vimeoRegExp = new RegExp('https?://(?:www\\.|player\\.)?vimeo.com/(?:channels/' + '(?:\\w+/)?|groups/([^/]*)/videos/|album/(\\d+)/video/|video/|)(\\d+)(?:$|/|\\?)');
  let Video = '';

  if (url && url.length && (youtubeRegExp.test(url) || vimeoRegExp.test(url))) {
    Video = react_default.a.createElement("div", {
      className: classes.container
    }, react_default.a.createElement("iframe", {
      className: classes.video,
      title: url,
      frameBorder: "0",
      allowFullScreen: "1",
      loading: "lazy",
      src: url
    }));
  } else if (url && url.length) {
    /* eslint-disable jsx-a11y/media-has-caption */
    Video = react_default.a.createElement("div", {
      className: classes.container
    }, react_default.a.createElement("video", {
      className: classes.video,
      src: url,
      autoPlay: autoplay,
      muted: muted,
      frameBorder: "0",
      controls: true
    }));
    /* eslint-enable jsx-a11y/media-has-caption */
  }

  return react_default.a.createElement("div", {
    style: mainStyles,
    className: [classes.root, ...cssClasses].join(' ')
  }, react_default.a.createElement("div", {
    style: innerStyles,
    className: classes.inner
  }, react_default.a.createElement("div", {
    style: wrapperStyles,
    className: classes.wrapper
  }, Video)));
};
/**
 * Props for {@link Video}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the Video
 * @property {String} classes.root CSS classes for the root container element
 * @property {String} classes.inner CSS classes for the inner container element
 * @property {String} classes.wrapper CSS classes for the wrapper container element
 * @property {String} classes.container CSS classes for the container element
 * @property {String} classes.video CSS classes for the video element
 * @property {String} url URL to render the video from an external provider (YouTube, Vimeo etc)
 * @property {Boolean} autoplay Video autoplay
 * @property {Boolean} muted Video muted
 * @property {String} maxWidth Maximum width of the video
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


_s(video_Video, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = video_Video;
video_Video.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    inner: prop_types["string"],
    wrapper: prop_types["string"],
    container: prop_types["string"],
    video: prop_types["string"]
  }),
  url: prop_types["string"],
  autoplay: prop_types["bool"],
  muted: prop_types["bool"],
  maxWidth: prop_types["string"],
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
/* harmony default export */ var ContentTypes_Video_video = (video_Video);

var _c;

$RefreshReg$(_c, "Video");
// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Video/index.js


/***/ })

}]);
//# sourceMappingURL=92.8e758eedfd331ebd630b.js.map