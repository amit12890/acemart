(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/FilterModal/filterFooter.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/FilterModal/filterFooter.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".filterFooter-root-2Xy {\n    align-items: center;\n    background-color: white;\n    display: grid;\n    height: 7rem;\n    row-gap: 0.25rem;\n    justify-items: center;\n    align-content: center;\n    position: relative;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "filterFooter-root-2Xy"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/FilterModal/filterModal.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/FilterModal/filterModal.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".filterModal-root-3pg {\n    --borderColor: var(--venia-global-color-border);\n    background-color: white;\n    bottom: 0;\n    display: grid;\n    grid-template-rows: 1fr 7rem;\n    height: 100%;\n    left: 0;\n    max-width: 360px;\n    opacity: 0;\n    overflow: hidden;\n    position: fixed;\n    top: 0;\n    transform: translate3d(-100%, 0, 0);\n    transition-duration: 192ms;\n    transition-timing-function: var(--venia-global-anim-out);\n    transition-property: opacity, transform, visibility;\n    visibility: hidden;\n    width: 100%;\n    z-index: 3;\n}\n\n.filterModal-root_open-G_t {\n    box-shadow: 1px 0 rgb(var(--borderColor));\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n    transition-duration: 224ms;\n    transition-timing-function: var(--venia-global-anim-in);\n    visibility: visible;\n}\n\n.filterModal-body-4oF {\n    border-bottom: 1px solid rgb(var(--borderColor));\n    overflow: auto;\n}\n\n.filterModal-header-3a2 {\n    display: flex;\n    justify-content: space-between;\n    padding: 1.25rem 1.25rem 0;\n}\n\n.filterModal-headerTitle-28A {\n    display: flex;\n    align-items: center;\n    font-size: var(--venia-global-typography-heading-L-fontSize);\n    line-height: 0.875rem;\n}\n\n.filterModal-action-2t7 {\n    padding: 1rem 1.25rem 0;\n}\n\n.filterModal-action-2t7 button {\n    font-size: var(--venia-typography-body-S-fontSize);\n    text-decoration: none;\n}\n\n.filterModal-blocks-akp {\n    padding: 1rem 1.25rem 0;\n}\n\n.filterModal-blocks-akp > li:last-child {\n    border-bottom: 2px solid rgb(var(--borderColor));\n}\n", ""]);

// Exports
exports.locals = {
	"root": "filterModal-root-3pg",
	"root_open": "filterModal-root_open-G_t filterModal-root-3pg",
	"body": "filterModal-body-4oF",
	"header": "filterModal-header-3a2",
	"headerTitle": "filterModal-headerTitle-28A",
	"action": "filterModal-action-2t7",
	"blocks": "filterModal-blocks-akp"
};

/***/ }),

/***/ "./src/venia/components/FilterModal/index.js":
/*!***************************************************************!*\
  !*** ./src/venia/components/FilterModal/index.js + 4 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterFooter.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterModal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Portal/portal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/x.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/FilterModal/CurrentFilters/currentFilters.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/FilterModal/filterBlock.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@react-aria/focus/dist/module.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/FilterModal/filterFooter.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/FilterModal/filterModal.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_FilterModal_filterModal; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/module.js + 9 modules
var dist_module = __webpack_require__("./node_modules/@react-aria/focus/dist/module.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__("./node_modules/react-feather/dist/icons/x.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterModal.js
var useFilterModal = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterModal.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./src/venia/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./src/venia/components/Icon/icon.js");

// EXTERNAL MODULE: ./src/venia/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./src/venia/components/LinkButton/linkButton.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Portal/portal.js
var portal = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Portal/portal.js");

// EXTERNAL MODULE: ./src/venia/components/FilterModal/CurrentFilters/currentFilters.js + 5 modules
var currentFilters = __webpack_require__("./src/venia/components/FilterModal/CurrentFilters/currentFilters.js");

// EXTERNAL MODULE: ./src/venia/components/FilterModal/filterBlock.js + 6 modules
var filterBlock = __webpack_require__("./src/venia/components/FilterModal/filterBlock.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterFooter.js
var useFilterFooter = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterFooter.js");

// EXTERNAL MODULE: ./src/venia/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./src/venia/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/FilterModal/filterFooter.css
var filterFooter = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/FilterModal/filterFooter.css");
var filterFooter_default = /*#__PURE__*/__webpack_require__.n(filterFooter);

// CONCATENATED MODULE: ./src/venia/components/FilterModal/filterFooter.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(filterFooter_default.a, options);



/* harmony default export */ var FilterModal_filterFooter = (filterFooter_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/FilterModal/filterFooter.js
var _s = $RefreshSig$();









const FilterFooter = props => {
  _s();

  const {
    applyFilters,
    hasFilters,
    isOpen
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const {
    touched
  } = Object(useFilterFooter["a" /* useFilterFooter */])({
    hasFilters,
    isOpen
  });
  const classes = Object(shallowMerge["a" /* default */])(FilterModal_filterFooter, props.classes);
  const buttonLabel = formatMessage({
    id: 'filterFooter.results',
    defaultMessage: 'See Results'
  });
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(Button_button["a" /* default */], {
    disabled: !touched,
    onClick: applyFilters,
    "aria-label": buttonLabel,
    "aria-disabled": !touched,
    priority: "high"
  }, buttonLabel));
};

_s(FilterFooter, "VaWXjFYmZQYK3AIKIdXQpZkiph8=", false, function () {
  return [useIntl["a" /* default */], useFilterFooter["a" /* useFilterFooter */], shallowMerge["a" /* default */]];
});

_c = FilterFooter;
FilterFooter.propTypes = {
  applyFilters: prop_types["func"].isRequired,
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  hasFilters: prop_types["bool"],
  isOpen: prop_types["bool"]
};
/* harmony default export */ var components_FilterModal_filterFooter = (FilterFooter);

var _c;

$RefreshReg$(_c, "FilterFooter");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/FilterModal/filterModal.css
var filterModal = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/FilterModal/filterModal.css");
var filterModal_default = /*#__PURE__*/__webpack_require__.n(filterModal);

// CONCATENATED MODULE: ./src/venia/components/FilterModal/filterModal.css

            

var filterModal_options = {"injectType":"styleTag"};

filterModal_options.insert = "head";
filterModal_options.singleton = false;

var filterModal_update = injectStylesIntoStyleTag_default()(filterModal_default.a, filterModal_options);



/* harmony default export */ var FilterModal_filterModal = (filterModal_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/FilterModal/filterModal.js
var filterModal_s = $RefreshSig$();















/**
 * A view that displays applicable and applied filters.
 *
 * @param {Object} props.filters - filters to display
 */

const FilterModal = props => {
  filterModal_s();

  const {
    filters
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const talonProps = Object(useFilterModal["a" /* useFilterModal */])({
    filters
  });
  const {
    filterApi,
    filterItems,
    filterNames,
    filterState,
    handleApply,
    handleClose,
    handleReset,
    handleKeyDownActions,
    isOpen
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(FilterModal_filterModal, props.classes);
  const modalClass = isOpen ? classes.root_open : classes.root;
  const filtersList = Object(react["useMemo"])(() => Array.from(filterItems, ([group, items]) => {
    const blockState = filterState.get(group);
    const groupName = filterNames.get(group);
    return react_default.a.createElement(filterBlock["a" /* default */], {
      key: group,
      filterApi: filterApi,
      filterState: blockState,
      group: group,
      items: items,
      name: groupName
    });
  }), [filterApi, filterItems, filterNames, filterState]);
  const filtersAriaLabel = formatMessage({
    id: 'filterModal.filters.ariaLabel',
    defaultMessage: 'Filters'
  });
  const closeAriaLabel = formatMessage({
    id: 'filterModal.filters.close.ariaLabel',
    defaultMessage: 'Close filters popup.'
  });
  const clearAllAriaLabel = formatMessage({
    id: 'filterModal.action.clearAll.ariaLabel',
    defaultMessage: 'Clear all applied filters'
  });
  const clearAll = filterState.size ? react_default.a.createElement("div", {
    className: classes.action
  }, react_default.a.createElement(linkButton["a" /* default */], {
    type: "button",
    onClick: handleReset,
    ariaLabel: clearAllAriaLabel
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'filterModal.action',
    defaultMessage: 'Clear all'
  }))) : null;

  if (!isOpen) {
    return null;
  }

  return react_default.a.createElement(portal["a" /* default */], null, react_default.a.createElement(dist_module["a" /* FocusScope */], {
    contain: true,
    restoreFocus: true,
    autoFocus: true
  }, react_default.a.createElement("aside", {
    className: modalClass,
    onKeyDown: handleKeyDownActions
  }, react_default.a.createElement("div", {
    className: classes.body
  }, react_default.a.createElement("div", {
    className: classes.header
  }, react_default.a.createElement("h2", {
    className: classes.headerTitle
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'filterModal.headerTitle',
    defaultMessage: 'Filters'
  })), react_default.a.createElement("button", {
    onClick: handleClose,
    "aria-disabled": false,
    "aria-label": closeAriaLabel
  }, react_default.a.createElement(icon["a" /* default */], {
    src: x["a" /* default */]
  }))), react_default.a.createElement(currentFilters["a" /* default */], {
    filterApi: filterApi,
    filterNames: filterNames,
    filterState: filterState
  }), clearAll, react_default.a.createElement("ul", {
    className: classes.blocks,
    "aria-label": filtersAriaLabel
  }, filtersList)), react_default.a.createElement(components_FilterModal_filterFooter, {
    applyFilters: handleApply,
    hasFilters: !!filterState.size,
    isOpen: isOpen
  }))));
};

filterModal_s(FilterModal, "ldvVbb1K5LVz1R3Mk8CHVKpenMs=", false, function () {
  return [useIntl["a" /* default */], useFilterModal["a" /* useFilterModal */], shallowMerge["a" /* default */]];
});

filterModal_c = FilterModal;
FilterModal.propTypes = {
  classes: Object(prop_types["shape"])({
    action: prop_types["string"],
    blocks: prop_types["string"],
    body: prop_types["string"],
    header: prop_types["string"],
    headerTitle: prop_types["string"],
    root: prop_types["string"],
    root_open: prop_types["string"]
  }),
  filters: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    attribute_code: prop_types["string"],
    items: prop_types["array"]
  }))
};
/* harmony default export */ var components_FilterModal_filterModal = (FilterModal);

var filterModal_c;

$RefreshReg$(filterModal_c, "FilterModal");
// CONCATENATED MODULE: ./src/venia/components/FilterModal/index.js


/***/ })

}]);
//# sourceMappingURL=77.29c5a95b8ff135942d81.js.map