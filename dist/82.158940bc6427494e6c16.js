(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/index.js + 2 modules ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/tabs.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-tabs/esm/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ContentTypes_Tabs_tabs; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 10 modules
var esm = __webpack_require__("./node_modules/react-tabs/esm/index.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/tabs.css
var tabs = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/tabs.css");
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs);

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/tabs.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(tabs_default.a, options);



/* harmony default export */ var Tabs_tabs = (tabs_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/tabs.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






/**
 * Upper case the first letter of a string
 *
 * @param {string} string
 * @returns {string}
 */

const upperCaseString = string => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};
/**
 * Page Builder Tabs component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef Tabs
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a set of Tabs.
 */


const Tabs = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(Tabs_tabs, props.classes);
  const navigationRef = Object(react["useRef"])(null);
  const [scrollElement, setScrollElement] = Object(react["useState"])(null);
  const [gradient, setGradient] = Object(react["useState"])(null);
  const isScrolling = Object(react["useRef"])(false);
  const clientX = Object(react["useRef"])(0);
  const scrollX = Object(react["useRef"])(0);
  const {
    tabNavigationAlignment = 'left',
    minHeight,
    defaultIndex = 0,
    headers = [],
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
    cssClasses = [],
    children
  } = props;
  const handleMouseDown = Object(react["useCallback"])(event => {
    isScrolling.current = true;
    clientX.current = event.clientX;
  }, []);
  const handleMouseUp = Object(react["useCallback"])(() => {
    isScrolling.current = false;
  }, []);
  const handleMouseMove = Object(react["useCallback"])(event => {
    if (isScrolling.current && scrollElement) {
      scrollElement.scrollLeft = scrollX.current + (clientX.current - event.clientX);
      scrollX.current = scrollElement.scrollLeft;
      clientX.current = event.clientX;
    }
  }, [scrollElement]);
  const handleScroll = Object(react["useCallback"])(event => {
    const navScrollElement = event.target;

    if (navScrollElement.scrollLeft > 0) {
      // If we've scrolled to the end of the scrollable element we only display a left gradient
      if (navScrollElement.scrollLeft + navScrollElement.offsetWidth + 1 >= navScrollElement.scrollWidth) {
        setGradient('left');
      } else {
        // While scrolling we show gradients on both sides
        setGradient('both');
      }
    } else {
      setGradient('right');
    }
  }, [setGradient]);
  Object(react["useEffect"])(() => {
    let navScrollElement;
    const navigationWrapper = navigationRef.current;

    if (navigationWrapper && navigationWrapper.childNodes[0].nodeName === 'UL') {
      navScrollElement = navigationWrapper.childNodes[0];
      setScrollElement(navScrollElement); // If there are additional tabs hidden by scroll we display a gradient on the right

      if (navScrollElement.scrollWidth > navScrollElement.offsetWidth) {
        setGradient('right');
      }

      navScrollElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (navScrollElement) {
        navScrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  if (!headers.length) {
    return null;
  }

  const wrapperStyles = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  };
  const contentStyles = {
    minHeight,
    textAlign
  };
  const tabWrapperProps = {
    defaultIndex
  };

  if (border) {
    wrapperStyles['--tabs-border'] = border;
    wrapperStyles['--tabs-border-color'] = borderColor;
  }

  if (borderWidth) {
    wrapperStyles['--tabs-border-width'] = borderWidth;
  }

  if (borderRadius) {
    wrapperStyles['--tabs-border-radius'] = borderRadius;
  }

  const tabHeaders = headers.map((header, i) => react_default.a.createElement(esm["a" /* Tab */], {
    className: classes.header,
    key: i
  }, header));
  const tabPanels = react["Children"].map(children, (child, index) => {
    return react_default.a.createElement(esm["c" /* TabPanel */], {
      key: index,
      className: classes.panel,
      selectedClassName: classes.panelSelected
    }, child);
  });
  const navigationClass = classes[`navigation${upperCaseString(tabNavigationAlignment)}`];
  const contentClass = classes[`content${upperCaseString(tabNavigationAlignment)}`];
  const navigationWrapperClass = gradient ? classes[`navigationGradient${upperCaseString(gradient)}`] : null;
  return react_default.a.createElement(esm["d" /* Tabs */], _extends({
    style: wrapperStyles,
    className: [classes.root, ...cssClasses].join(' '),
    disabledTabClassName: classes.disabled,
    selectedTabClassName: classes.selected
  }, tabWrapperProps), react_default.a.createElement("div", {
    className: navigationWrapperClass,
    ref: navigationRef
  }, react_default.a.createElement(esm["b" /* TabList */], {
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseUp,
    className: navigationClass
  }, tabHeaders)), react_default.a.createElement("div", {
    className: contentClass,
    style: contentStyles
  }, tabPanels));
};
/**
 * Props for {@link Tabs}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the Tabs
 * @property {String} classes.header Class names for the tab header
 * @property {String} classes.panelSelected Class names for the selected tab panel
 * @property {String} classes.panel Class names for the tab panel
 * @property {String} classes.contentLeft Class names for the tab content
 * @property {String} classes.contentCenter Class names for the tab content
 * @property {String} classes.contentRight Class names for the tab content
 * @property {String} classes.navigationLeft Class names for the tab navigation
 * @property {String} classes.navigationCenter Class names for the tab navigation
 * @property {String} classes.navigationRight Class names for the tab navigation
 * @property {String} classes.navigationGradientLeft Class names for the tab navigation gradient when scrolling
 * @property {String} classes.navigationGradientRight Class names for the tab navigation gradient when scrolling
 * @property {String} classes.navigationGradientBoth Class names for the tab navigation gradient when scrolling
 * @property {String} classes.disabled Class names for the disabled tabs
 * @property {String} classes.selected Class names for the selected tab
 * @property {String} classes.item Class names for the tab item
 * @property {String} tabNavigationAlignment Navigation alignment for tabs
 * @property {String} minHeight Minimum height of the tabs
 * @property {Number} defaultIndex Index of the tab to display by default
 * @property {Array} headers Array of tab headers
 * @property {String} textAlign Alignment of the Tabs within the parent container
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


_s(Tabs, "5GoxZEvVb3GBsij8W47Zwq1c2zk=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Tabs;
Tabs.propTypes = {
  classes: Object(prop_types["shape"])({
    header: prop_types["string"],
    panelSelected: prop_types["string"],
    panel: prop_types["string"],
    contentLeft: prop_types["string"],
    contentCenter: prop_types["string"],
    contentRight: prop_types["string"],
    navigationLeft: prop_types["string"],
    navigationCenter: prop_types["string"],
    navigationRight: prop_types["string"],
    navigationGradientLeft: prop_types["string"],
    navigationGradientRight: prop_types["string"],
    navigationGradientBoth: prop_types["string"],
    disabled: prop_types["string"],
    selected: prop_types["string"],
    item: prop_types["string"]
  }),
  tabNavigationAlignment: Object(prop_types["oneOf"])(['left', 'center', 'right']),
  minHeight: prop_types["string"],
  defaultIndex: prop_types["number"],
  headers: Object(prop_types["arrayOf"])(prop_types["string"]),
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
/* harmony default export */ var ContentTypes_Tabs_tabs = (Tabs);

var _c;

$RefreshReg$(_c, "Tabs");
// CONCATENATED MODULE: ./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/index.js


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/tabs.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Tabs/tabs.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".tabs-root-2Ee {\n    -webkit-tap-highlight-color: transparent;\n    --tabs-border: solid;\n    --tabs-border-color: #ccc;\n    --tabs-border-width: 1px;\n    --tabs-border-radius: 0px;\n}\n\n.tabs-root-2Ee ul li.tabs-header-2xN.tabs-selected-3cX {\n    background: #fff;\n    z-index: 3;\n}\n\n.tabs-root-2Ee ul.tabs-navigation-3ah {\n    display: block;\n    font-size: 0;\n    margin: 0 0 calc(var(--tabs-border-width) * -1);\n    white-space: nowrap;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    position: relative;\n    user-select: none;\n}\nul.tabs-navigation-3ah::-webkit-scrollbar {\n    display: none;\n}\n.tabs-navigationLeft-2ZX {\n    text-align: left;\n}\n.tabs-navigationCenter-1YT {\n    text-align: center;\n}\n.tabs-navigationRight-1Mj {\n    text-align: right;\n}\n\n.tabs-navigationGradientLeft-21J,\n.tabs-navigationGradientBoth-2nG,\n.tabs-navigationGradientRight-3dc {\n    position: relative;\n}\n.tabs-navigationGradientLeft-21J:before,\n.tabs-navigationGradientBoth-2nG:before {\n    pointer-events: none;\n    opacity: 1;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: var(--tabs-border-width);\n    content: '';\n    display: block;\n    width: 100px;\n    z-index: 4;\n    background: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 1) 0%,\n        rgba(255, 255, 255, 0) 100%\n    );\n}\n.tabs-navigationGradientRight-3dc:after,\n.tabs-navigationGradientBoth-2nG:after {\n    pointer-events: none;\n    opacity: 1;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: var(--tabs-border-width);\n    content: '';\n    display: block;\n    width: 100px;\n    z-index: 4;\n    background: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 1) 100%\n    );\n}\n\n.tabs-root-2Ee ul li.tabs-header-2xN {\n    list-style: none;\n    background: rgb(var(--venia-global-color-gray));\n    border: var(--tabs-border-width) var(--tabs-border) var(--tabs-border-color);\n    border-bottom: 0;\n    border-top-left-radius: var(--tabs-border-radius);\n    border-top-right-radius: var(--tabs-border-radius);\n    display: inline-block;\n    margin: 0;\n    max-width: 100%;\n    overflow-wrap: break-word;\n    position: relative;\n    word-wrap: break-word;\n    z-index: 1;\n    color: rgb(var(--venia-global-color-text));\n    cursor: pointer !important;\n    font-size: 14px;\n    font-weight: 600;\n    padding: 0.875rem 1.25rem;\n    transition: background-color 0.3s;\n    vertical-align: bottom;\n    white-space: normal;\n}\n\n.tabs-root-2Ee ul li.tabs-header-2xN:focus {\n    outline: 0;\n}\n\n.tabs-root-2Ee ul li.tabs-header-2xN:focus:after {\n    content: '';\n    position: absolute;\n    height: 5px;\n    left: -4px;\n    right: -4px;\n    bottom: -5px;\n    background: #fff;\n}\n\n.tabs-root-2Ee ul li.tabs-header-2xN:not(:first-child) {\n    margin-left: calc(var(--tabs-border-width) * -1);\n}\n\n.tabs-panel-15i {\n    min-height: inherit;\n}\n\n.tabs-panelSelected-1E- {\n    display: block;\n}\n\n.tabs-panel-15i:empty {\n    display: none !important; /* Necessary because of inline styles; to be fixed in MC-18326 */\n}\n\n.tabs-content-1Or {\n    border: var(--tabs-border-width) var(--tabs-border) var(--tabs-border-color);\n    overflow: hidden;\n    position: relative;\n    z-index: 2;\n    border-radius: var(--tabs-border-radius);\n}\n.tabs-contentLeft-3L1 {\n    border-top-left-radius: 0px;\n}\n.tabs-contentCenter-SN4 {\n}\n.tabs-contentRight-2Sz {\n    border-top-right-radius: 0px;\n}\n\n.tabs-root-2Ee ul.tabs-navigation-3ah li:first-child {\n    margin-left: 0 !important;\n}\n\n.tabs-disabled-3yO {\n    color: GrayText;\n    cursor: default;\n}\n\n.tabs-item-Q5J {\n    min-height: inherit;\n}\n\n.tabs-item-Q5J:not(:first-child) {\n    display: none;\n}\n\n@media only screen and (max-width: 768px) {\n    .tabs-item-Q5J {\n        background-attachment: scroll !important;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "tabs-root-2Ee",
	"header": "tabs-header-2xN",
	"selected": "tabs-selected-3cX",
	"navigation": "tabs-navigation-3ah",
	"navigationLeft": "tabs-navigationLeft-2ZX tabs-navigation-3ah",
	"navigationCenter": "tabs-navigationCenter-1YT tabs-navigation-3ah",
	"navigationRight": "tabs-navigationRight-1Mj tabs-navigation-3ah",
	"navigationGradientLeft": "tabs-navigationGradientLeft-21J",
	"navigationGradientBoth": "tabs-navigationGradientBoth-2nG",
	"navigationGradientRight": "tabs-navigationGradientRight-3dc",
	"panel": "tabs-panel-15i",
	"panelSelected": "tabs-panelSelected-1E-",
	"content": "tabs-content-1Or",
	"contentLeft": "tabs-contentLeft-3L1 tabs-content-1Or",
	"contentCenter": "tabs-contentCenter-SN4 tabs-content-1Or",
	"contentRight": "tabs-contentRight-2Sz tabs-content-1Or",
	"disabled": "tabs-disabled-3yO",
	"item": "tabs-item-Q5J"
};

/***/ })

}]);
//# sourceMappingURL=82.158940bc6427494e6c16.js.map