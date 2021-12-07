(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterBlock.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterBlock.js ***!
  \**********************************************************************************/
/*! exports provided: useFilterBlock */
/*! exports used: useFilterBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFilterBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const useFilterBlock = props => {
  _s();

  const {
    filterState,
    items,
    initialOpen
  } = props;
  const hasSelected = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return items.some(item => {
      return filterState && filterState.has(item);
    });
  }, [filterState, items]);
  const [isExpanded, setExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(hasSelected || initialOpen);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setExpanded(hasSelected || initialOpen);
  }, [hasSelected, initialOpen]);
  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setExpanded(value => !value);
  }, [setExpanded]);
  return {
    handleClick,
    isExpanded
  };
};

_s(useFilterBlock, "GSjUOHlthH1XuI8YCn6F7FhXnuI=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterList.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterList.js ***!
  \*********************************************************************************/
/*! exports provided: useFilterList */
/*! exports used: useFilterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFilterList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const useFilterList = () => {
  _s();

  const [isListExpanded, setExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleListToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setExpanded(value => !value);
  }, [setExpanded]);
  return {
    handleListToggle,
    isListExpanded
  };
};

_s(useFilterList, "deZYjDf+khoVC0quvt2LH62xC4w=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/validators/set.js":
/*!***************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/validators/set.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isSet = obj => obj instanceof Set;

function optionalSet(props, propName, componentName) {
  const prop = props[propName];
  const type = typeof prop;

  if (prop != null && !isSet(prop)) {
    return new Error(`Invalid prop \`${propName}\` of type \`${type}\` supplied to \`${componentName}\`, expected \`Set\`.`);
  }
}

function requiredSet(props, propName, componentName) {
  const prop = props[propName];
  const type = typeof prop;

  if (prop == null || !isSet(prop)) {
    return new Error(`Invalid prop \`${propName}\` of type \`${type}\` supplied to \`${componentName}\`, expected \`Set\`.`);
  }
}

optionalSet.isRequired = requiredSet;
/* harmony default export */ __webpack_exports__["a"] = (optionalSet);

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/FilterSidebar/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/FilterSidebar/index.js + 3 modules ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/app.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/FilterModal/filterModal.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/FilterModal/helpers.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterState.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FilterModal/CurrentFilters/currentFilters.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FilterModal/filterBlock.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FilterSidebar/filterSidebar.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_FilterSidebar_filterSidebar; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/app.js
var app = __webpack_require__("./node_modules/@magento/peregrine/lib/context/app.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterState.js
var useFilterState = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterState.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/FilterModal/helpers.js
var helpers = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/FilterModal/helpers.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/FilterModal/filterModal.gql.js
var filterModal_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/FilterModal/filterModal.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/FilterSidebar/useFilterSidebar.js
var _s = $RefreshSig$();









const DRAWER_NAME = 'filter';
const useFilterSidebar = props => {
  _s();

  const {
    filters
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(filterModal_gql["a" /* default */], props.operations);
  const {
    getFilterInputsQuery
  } = operations;
  const [isApplying, setIsApplying] = Object(react["useState"])(false);
  const [{
    drawer
  }, {
    toggleDrawer,
    closeDrawer
  }] = Object(app["b" /* useAppContext */])();
  const [filterState, filterApi] = Object(useFilterState["a" /* useFilterState */])();
  const prevDrawer = Object(react["useRef"])(null);
  const isOpen = drawer === DRAWER_NAME;
  const history = Object(react_router["g" /* useHistory */])();
  const {
    pathname,
    search
  } = Object(react_router["h" /* useLocation */])();
  const {
    data: introspectionData
  } = Object(client["useQuery"])(getFilterInputsQuery);
  const inputFields = introspectionData ? introspectionData.__type.inputFields : [];
  const attributeCodes = Object(react["useMemo"])(() => filters.map(({
    attribute_code
  }) => attribute_code), [filters]); // Create a set of disabled filters.

  const DISABLED_FILTERS = Object(react["useMemo"])(() => {
    const disabled = new Set(); // Disable category filtering when not on a search page.

    if (pathname !== '/search.html') {
      disabled.add('category_id');
    }

    return disabled;
  }, [pathname]); // Get "allowed" filters by intersection of filter attribute codes and
  // schema input field types. This restricts the displayed filters to those
  // that the api will understand.

  const possibleFilters = Object(react["useMemo"])(() => {
    const nextFilters = new Set(); // perform mapping and filtering in the same cycle

    for (const _ref of inputFields) {
      const {
        name
      } = _ref;
      const isValid = attributeCodes.includes(name);
      const isEnabled = !DISABLED_FILTERS.has(name);

      if (isValid && isEnabled) {
        nextFilters.add(name);
      }
    }

    return nextFilters;
  }, [DISABLED_FILTERS, attributeCodes, inputFields]); // iterate over filters once to set up all the collections we need

  const [filterNames, filterKeys, filterItems] = Object(react["useMemo"])(() => {
    const names = new Map();
    const keys = new Set();
    const itemsByGroup = new Map();

    for (const filter of filters) {
      const {
        options,
        label: name,
        attribute_code: group
      } = filter; // If this aggregation is not a possible filter, just back out.

      if (possibleFilters.has(group)) {
        const items = []; // add filter name

        names.set(group, name); // add filter key permutations

        keys.add(`${group}[filter]`); // add items

        for (const _ref2 of options) {
          const {
            label,
            value
          } = _ref2;
          items.push({
            title: Object(helpers["f" /* stripHtml */])(label),
            value
          });
        }

        itemsByGroup.set(group, items);
      }
    }

    return [names, keys, itemsByGroup];
  }, [filters, possibleFilters]); // on apply, write filter state to location

  Object(react["useEffect"])(() => {
    if (isApplying) {
      const nextSearch = Object(helpers["d" /* getSearchFromState */])(search, filterKeys, filterState); // write filter state to history

      history.push({
        pathname,
        search: nextSearch
      }); // mark the operation as complete

      setIsApplying(false);
    }
  }, [filterKeys, filterState, history, isApplying, pathname, search]);
  const handleOpen = Object(react["useCallback"])(() => {
    toggleDrawer(DRAWER_NAME);
  }, [toggleDrawer]);
  const handleClose = Object(react["useCallback"])(() => {
    closeDrawer();
  }, [closeDrawer]);
  const handleApply = Object(react["useCallback"])(() => {
    setIsApplying(true);
    handleClose();
  }, [handleClose]);
  const handleReset = Object(react["useCallback"])(() => {
    filterApi.clear();
    setIsApplying(true);
  }, [filterApi, setIsApplying]);
  const handleKeyDownActions = Object(react["useCallback"])(event => {
    // do not handle keyboard actions when the modal is closed
    if (!isOpen) {
      return;
    }

    switch (event.keyCode) {
      // when "Esc" key fired -> close the modal
      case 27:
        handleClose();
        break;
    }
  }, [isOpen, handleClose]);
  Object(react["useEffect"])(() => {
    const justOpened = prevDrawer.current === null && drawer === DRAWER_NAME;
    const justClosed = prevDrawer.current === DRAWER_NAME && drawer === null; // on drawer toggle, read filter state from location

    if (justOpened || justClosed) {
      const nextState = Object(helpers["e" /* getStateFromSearch */])(search, filterKeys, filterItems);
      filterApi.setItems(nextState);
    } // on drawer close, update the modal visibility state


    if (justClosed) {
      handleClose();
    }

    prevDrawer.current = drawer;
  }, [drawer, filterApi, filterItems, filterKeys, search, handleClose]);
  Object(react["useEffect"])(() => {
    const nextState = Object(helpers["e" /* getStateFromSearch */])(search, filterKeys, filterItems);
    filterApi.setItems(nextState);
  }, [filterApi, filterItems, filterKeys, search]);
  return {
    filterApi,
    filterItems,
    filterKeys,
    filterNames,
    filterState,
    handleApply,
    handleClose,
    handleKeyDownActions,
    handleOpen,
    handleReset,
    isApplying,
    isOpen
  };
};

_s(useFilterSidebar, "k8iWU2RgVhggeml4xEGNGhiCDK8=", false, function () {
  return [app["b" /* useAppContext */], useFilterState["a" /* useFilterState */], react_router["g" /* useHistory */], react_router["h" /* useLocation */], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FilterModal/CurrentFilters/currentFilters.js + 3 modules
var currentFilters = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FilterModal/CurrentFilters/currentFilters.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FilterModal/filterBlock.js + 6 modules
var filterBlock = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FilterModal/filterBlock.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FilterSidebar/filterSidebar.css
var filterSidebar = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/FilterSidebar/filterSidebar.css");
var filterSidebar_default = /*#__PURE__*/__webpack_require__.n(filterSidebar);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/FilterSidebar/filterSidebar.css

            

var filterSidebar_options = {"injectType":"styleTag"};

filterSidebar_options.insert = "head";
filterSidebar_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(filterSidebar_default.a, filterSidebar_options);



/* harmony default export */ var FilterSidebar_filterSidebar = (filterSidebar_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/FilterSidebar/filterSidebar.js
var filterSidebar_s = $RefreshSig$();










const SCROLL_OFFSET = 150;
/**
 * A view that displays applicable and applied filters.
 *
 * @param {Object} props.filters - filters to display
 */

const FilterSidebar = props => {
  filterSidebar_s();

  const {
    filters,
    filterCountToOpen
  } = props;
  const talonProps = useFilterSidebar({
    filters
  });
  const {
    filterApi,
    filterItems,
    filterNames,
    filterState,
    handleApply,
    handleReset
  } = talonProps;
  const filterRef = Object(react["useRef"])();
  const classes = Object(shallowMerge["a" /* default */])(FilterSidebar_filterSidebar, props.classes);
  const handleApplyFilter = Object(react["useCallback"])((...args) => {
    const filterElement = filterRef.current;

    if (filterElement && typeof filterElement.getBoundingClientRect === 'function') {
      const filterTop = filterElement.getBoundingClientRect().top;
      const windowScrollY = window.scrollY + filterTop - SCROLL_OFFSET;
      window.scrollTo(0, windowScrollY);
    }

    handleApply(...args);
  }, [handleApply, filterRef]);
  const filtersList = Object(react["useMemo"])(() => Array.from(filterItems, ([group, items], iteration) => {
    const blockState = filterState.get(group);
    const groupName = filterNames.get(group);
    return react_default.a.createElement(filterBlock["a" /* default */], {
      key: group,
      filterApi: filterApi,
      filterState: blockState,
      group: group,
      items: items,
      name: groupName,
      onApply: handleApplyFilter,
      initialOpen: iteration < filterCountToOpen
    });
  }), [filterApi, filterItems, filterNames, filterState, filterCountToOpen, handleApplyFilter]);
  const clearAll = filterState.size ? react_default.a.createElement("div", {
    className: classes.action
  }, react_default.a.createElement(linkButton["a" /* default */], {
    type: "button",
    onClick: handleReset
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'filterModal.action',
    defaultMessage: 'Clear all'
  }))) : null;
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("aside", {
    className: classes.root,
    ref: filterRef
  }, react_default.a.createElement("div", {
    className: classes.body
  }, react_default.a.createElement("div", {
    className: classes.header
  }, react_default.a.createElement("h2", {
    className: classes.headerTitle
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'filterModal.headerTitle',
    defaultMessage: 'Filters'
  }))), react_default.a.createElement(currentFilters["a" /* default */], {
    filterApi: filterApi,
    filterNames: filterNames,
    filterState: filterState,
    onRemove: handleApplyFilter
  }), clearAll, react_default.a.createElement("ul", {
    className: classes.blocks
  }, filtersList))));
};

filterSidebar_s(FilterSidebar, "0rcpku8+eVN0QqCW+Yzo9MqQOgs=", false, function () {
  return [useFilterSidebar, shallowMerge["a" /* default */]];
});

_c = FilterSidebar;
FilterSidebar.defaultProps = {
  filterCountToOpen: 3
};
FilterSidebar.propTypes = {
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
  })),
  filterCountToOpen: prop_types["number"]
};
/* harmony default export */ var components_FilterSidebar_filterSidebar = (FilterSidebar);

var _c;

$RefreshReg$(_c, "FilterSidebar");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/FilterSidebar/index.js


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/FilterSidebar/filterSidebar.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FilterSidebar/filterSidebar.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".filterSidebar-root-1gp {\n    --borderColor: var(--venia-global-color-border);\n    background-color: white;\n    bottom: 0;\n    display: none;\n    grid-template-rows: 1fr 7rem;\n    max-width: 360px;\n    width: 100%;\n    z-index: 3;\n}\n\n.filterSidebar-body-gMc {\n    overflow: auto;\n}\n\n.filterSidebar-header-3K3 {\n    display: flex;\n    justify-content: space-between;\n    padding: 1.25rem 1.25rem 0;\n}\n\n.filterSidebar-headerTitle-3NW {\n    display: flex;\n    align-items: center;\n    font-size: var(--venia-global-typography-heading-L-fontSize);\n    line-height: 0.875rem;\n}\n\n.filterSidebar-action-2cT {\n    padding: 1rem 1.25rem 0;\n}\n\n.filterSidebar-action-2cT button {\n    font-size: var(--venia-typography-body-S-fontSize);\n    text-decoration: none;\n}\n\n.filterSidebar-blocks-2NG {\n    padding: 1rem 1.25rem 0;\n}\n\n.filterSidebar-blocks-2NG > li:last-child {\n    border-bottom: 2px solid rgb(var(--borderColor));\n}\n\n@media (min-width: 1024px) {\n    .filterSidebar-root-1gp {\n        display: grid;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "filterSidebar-root-1gp",
	"body": "filterSidebar-body-gMc",
	"header": "filterSidebar-header-3K3",
	"headerTitle": "filterSidebar-headerTitle-3NW",
	"action": "filterSidebar-action-2cT",
	"blocks": "filterSidebar-blocks-2NG"
};

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/check-square.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/check-square.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var CheckSquare = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "9 11 12 14 22 4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }));
});
_c2 = CheckSquare;
CheckSquare.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
CheckSquare.displayName = 'CheckSquare';
/* harmony default export */ __webpack_exports__["a"] = (CheckSquare);

var _c, _c2;

$RefreshReg$(_c, "CheckSquare$forwardRef");
$RefreshReg$(_c2, "CheckSquare");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/chevron-up.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/chevron-up.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var ChevronUp = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "18 15 12 9 6 15"
  }));
});
_c2 = ChevronUp;
ChevronUp.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
ChevronUp.displayName = 'ChevronUp';
/* harmony default export */ __webpack_exports__["a"] = (ChevronUp);

var _c, _c2;

$RefreshReg$(_c, "ChevronUp$forwardRef");
$RefreshReg$(_c2, "ChevronUp");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/square.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/square.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var Square = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }));
});
_c2 = Square;
Square.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
Square.displayName = 'Square';
/* harmony default export */ __webpack_exports__["a"] = (Square);

var _c, _c2;

$RefreshReg$(_c, "Square$forwardRef");
$RefreshReg$(_c2, "Square");

/***/ })

}]);
//# sourceMappingURL=54.7cbc76c558f7e4581a69.js.map