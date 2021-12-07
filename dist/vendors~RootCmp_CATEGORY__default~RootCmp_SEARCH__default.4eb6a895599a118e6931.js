(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~RootCmp_CATEGORY__default~RootCmp_SEARCH__default"],{

/***/ "./node_modules/@magento/peregrine/lib/hooks/usePagination.js":
/*!********************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/hooks/usePagination.js ***!
  \********************************************************************/
/*! exports provided: usePagination */
/*! exports used: usePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _useSearchParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSearchParam */ "./node_modules/@magento/peregrine/lib/hooks/useSearchParam.js");
var _s = $RefreshSig$();




/**
 * Sets a query parameter in history.
 *
 * @private
 */

const setQueryParam = ({
  history,
  location,
  parameter,
  replace,
  value
}) => {
  const {
    search
  } = location;
  const queryParams = new URLSearchParams(search);
  queryParams.set(parameter, value);
  const destination = {
    search: queryParams.toString()
  };

  if (replace) {
    history.replace(destination);
  } else {
    history.push(destination);
  }
};

const defaultInitialPage = 1;
/**
 * A [React Hook]{@link https://reactjs.org/docs/hooks-intro.html} that provides
 * pagination logic.
 *
 * Use this hook to implement components that need to navigate through paged
 * data.
 *
 * @kind function
 *
 * @param {Object} config An object containing configuration values
 *
 * @param {String} config.namespace='' The namespace to append to config.parameter in the query. For example: ?namespace_parameter=value
 * @param {String} config.parameter='page' The name of the query parameter to use for page
 * @param {Number} config.initialPage The initial current page value
 * @param {Number} config.initialTotalPages=1 The total pages expected to be usable by this hook
 *
 * @return {Object[]} An array with two entries containing the following content: [ {@link PaginationState}, {@link API} ]
 */

const usePagination = (props = {}) => {
  _s();

  const {
    namespace = '',
    parameter = 'page',
    initialTotalPages = 1
  } = props;
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useHistory */ "g"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useLocation */ "h"])();
  const [totalPages, setTotalPages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialTotalPages);
  const searchParam = namespace ? `${namespace}_${parameter}` : parameter;
  const initialPage = props.initialPage || defaultInitialPage;
  const currentPage = parseInt(Object(_useSearchParam__WEBPACK_IMPORTED_MODULE_2__[/* getSearchParam */ "a"])(searchParam, location)); // use the location to hold state

  const setCurrentPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((page, replace = false) => {
    // Update the query parameter.
    setQueryParam({
      history,
      location,
      parameter: searchParam,
      replace,
      value: page
    });
  }, [history, location, searchParam]); // ensure the location contains a page number

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!currentPage) {
      setCurrentPage(initialPage, true);
    }
  }, [currentPage, initialPage, setCurrentPage]);
  /**
   * The current pagination state
   *
   * @typedef PaginationState
   *
   * @kind Object
   *
   * @property {Number} currentPage The current page number
   * @property {Number} totalPages The total number of pages
   */

  const paginationState = {
    currentPage: currentPage || initialPage,
    totalPages
  };
  /**
   * The API object used for modifying the PaginationState.
   *
   * @typedef API
   *
   * @kind Object
   */

  /**
   * Set the current page
   *
   * @function API.setCurrentPage
   *
   * @param {Number} page The number to assign to the current page
   */

  /**
   * Set the total number of pages
   *
   * @function API.setTotalPages
   *
   * @param {Number} total The number to set the amount of pages available
   */

  const api = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    setCurrentPage,
    setTotalPages
  }), [setCurrentPage, setTotalPages]);
  return [paginationState, api];
};

_s(usePagination, "2w6OZ13XWqEpjEkGefCScacAJ6M=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useHistory */ "g"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useLocation */ "h"]];
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/hooks/useSort.js":
/*!**************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/hooks/useSort.js ***!
  \**************************************************************/
/*! exports provided: useSort */
/*! exports used: useSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSort; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();

 // TODO: Read the default/initial sort from config.

const defaultSort = {
  sortText: 'Position',
  sortId: 'sortItem.position',
  sortAttribute: 'position',
  sortDirection: 'ASC'
};
/**
 *
 * @param props
 * @returns {[{sortDirection: string, sortAttribute: string, sortText: string}, React.Dispatch<React.SetStateAction<{sortDirection: string, sortAttribute: string, sortText: string}>>]}
 */

const useSort = (props = {}) => {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => Object.assign({}, defaultSort, props));
};

_s(useSort, "8VrIy/JlXBmbS1Y2GkBlXnUou5U=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/FilterModal/filterModal.gql.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/FilterModal/filterModal.gql.js ***!
  \***********************************************************************************/
/*! exports provided: GET_FILTER_INPUTS, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_FILTER_INPUTS */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

const GET_FILTER_INPUTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GetFilterInputsForModal {
        __type(name: "ProductAttributeFilterInput") {
            inputFields {
                name
                type {
                    name
                }
            }
        }
    }
`;
/* harmony default export */ __webpack_exports__["a"] = ({
  getFilterInputsQuery: GET_FILTER_INPUTS
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterModal.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterModal.js ***!
  \**********************************************************************************/
/*! exports provided: useFilterModal */
/*! exports used: useFilterModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFilterModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _magento_peregrine_lib_context_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @magento/peregrine/lib/context/app */ "./node_modules/@magento/peregrine/lib/context/app.js");
/* harmony import */ var _util_shallowMerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/shallowMerge */ "./node_modules/@magento/peregrine/lib/util/shallowMerge.js");
/* harmony import */ var _useFilterState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useFilterState */ "./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterState.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "./node_modules/@magento/peregrine/lib/talons/FilterModal/helpers.js");
/* harmony import */ var _filterModal_gql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filterModal.gql */ "./node_modules/@magento/peregrine/lib/talons/FilterModal/filterModal.gql.js");
var _s = $RefreshSig$();









const DRAWER_NAME = 'filter';
/**
 * Filter Modal talon.
 *
 * @returns {{
 *   filterApi: any,
 *   filterState: any,
 *   handleClose: function,
 *   isOpen: boolean
 * }}
 */

const useFilterModal = props => {
  _s();

  const {
    filters
  } = props;
  const operations = Object(_util_shallowMerge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_filterModal_gql__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], props.operations);
  const {
    getFilterInputsQuery
  } = operations;
  const [isApplying, setIsApplying] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [{
    drawer
  }, {
    toggleDrawer,
    closeDrawer
  }] = Object(_magento_peregrine_lib_context_app__WEBPACK_IMPORTED_MODULE_3__[/* useAppContext */ "b"])();
  const [filterState, filterApi] = Object(_useFilterState__WEBPACK_IMPORTED_MODULE_5__[/* useFilterState */ "a"])();
  const prevDrawer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const isOpen = drawer === DRAWER_NAME;
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* useHistory */ "g"])();
  const {
    pathname,
    search
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* useLocation */ "h"])();
  const {
    data: introspectionData
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(getFilterInputsQuery);
  const inputFields = introspectionData ? introspectionData.__type.inputFields : [];
  const attributeCodes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => filters.map(({
    attribute_code
  }) => attribute_code), [filters]); // Create a set of disabled filters.

  const DISABLED_FILTERS = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const disabled = new Set(); // Disable category filtering when not on a search page.

    if (pathname !== '/search.html') {
      disabled.add('category_id');
    }

    return disabled;
  }, [pathname]); // Get "allowed" filters by intersection of filter attribute codes and
  // schema input field types. This restricts the displayed filters to those
  // that the api will understand.

  const possibleFilters = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
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

  const [filterNames, filterKeys, filterItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
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
            title: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__[/* stripHtml */ "f"])(label),
            value
          });
        }

        itemsByGroup.set(group, items);
      }
    }

    return [names, keys, itemsByGroup];
  }, [filters, possibleFilters]); // on apply, write filter state to location

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isApplying) {
      const nextSearch = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__[/* getSearchFromState */ "d"])(search, filterKeys, filterState); // write filter state to history

      history.push({
        pathname,
        search: nextSearch
      }); // mark the operation as complete

      setIsApplying(false);
    }
  }, [filterKeys, filterState, history, isApplying, pathname, search]);
  const handleOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    toggleDrawer(DRAWER_NAME);
  }, [toggleDrawer]);
  const handleClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    closeDrawer();
  }, [closeDrawer]);
  const handleApply = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setIsApplying(true);
    handleClose();
  }, [handleClose]);
  const handleReset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    filterApi.clear();
    setIsApplying(true);
  }, [filterApi, setIsApplying]);
  const handleKeyDownActions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const justOpened = prevDrawer.current === null && drawer === DRAWER_NAME;
    const justClosed = prevDrawer.current === DRAWER_NAME && drawer === null; // on drawer toggle, read filter state from location

    if (justOpened || justClosed) {
      const nextState = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__[/* getStateFromSearch */ "e"])(search, filterKeys, filterItems);
      filterApi.setItems(nextState);
    } // on drawer close, update the modal visibility state


    if (justClosed) {
      handleClose();
    }

    prevDrawer.current = drawer;
  }, [drawer, filterApi, filterItems, filterKeys, search, handleClose]);
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

_s(useFilterModal, "FUM8F00HdxlzeH+4puD0eIWHkc4=", false, function () {
  return [_magento_peregrine_lib_context_app__WEBPACK_IMPORTED_MODULE_3__[/* useAppContext */ "b"], _useFilterState__WEBPACK_IMPORTED_MODULE_5__[/* useFilterState */ "a"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* useHistory */ "g"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* useLocation */ "h"], _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterState.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterState.js ***!
  \**********************************************************************************/
/*! exports provided: useFilterState */
/*! exports used: useFilterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFilterState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_withLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/withLogger */ "./node_modules/@magento/peregrine/lib/util/withLogger.js");
var _s = $RefreshSig$();




const init = next => next instanceof Map ? next : new Map();

const reducer = (state, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case 'clear':
      {
        return init();
      }

    case 'add item':
      {
        const {
          group,
          item
        } = payload;
        const nextState = new Map(state);
        const nextSet = new Set(state.get(group));
        nextSet.add(item);
        nextState.set(group, nextSet);
        return nextState;
      }

    case 'remove item':
      {
        const {
          group,
          item
        } = payload;
        const nextState = new Map(state);
        const nextSet = new Set(state.get(group));
        nextSet.delete(item); // if removing an item leaves a group empty, delete that group

        if (nextSet.size) {
          nextState.set(group, nextSet);
        } else {
          nextState.delete(group);
        }

        return nextState;
      }

    case 'toggle item':
      {
        const {
          group,
          item
        } = payload;
        const nextState = new Map(state);
        const nextSet = new Set(state.get(group));

        if (nextSet.has(item)) {
          nextSet.delete(item);
        } else {
          nextSet.add(item);
        } // if removing an item leaves a group empty, delete that group


        if (nextSet.size) {
          nextState.set(group, nextSet);
        } else {
          nextState.delete(group);
        }

        return nextState;
      }

    case 'set items':
      {
        return init(payload);
      }
  }
};

const wrappedReducer = Object(_util_withLogger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(reducer);
const useFilterState = () => {
  _s();

  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(wrappedReducer, null, init);
  const addItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'add item'
    });
  }, [dispatch]);
  const clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'clear'
    });
  }, [dispatch]);
  const removeItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'remove item'
    });
  }, [dispatch]);
  const setItems = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'set items'
    });
  }, [dispatch]);
  const toggleItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'toggle item'
    });
  }, [dispatch]);
  const api = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    addItem,
    clear,
    dispatch,
    removeItem,
    setItems,
    toggleItem
  }), [addItem, clear, dispatch, removeItem, setItems, toggleItem]);
  return [state, api];
};

_s(useFilterState, "OjI7oRz37Uo4PriFYf6QeKKzSHE=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/Pagination/usePagination.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/Pagination/usePagination.js ***!
  \********************************************************************************/
/*! exports provided: usePagination */
/*! exports used: usePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const usePagination = props => {
  _s();

  const {
    currentPage,
    setPage,
    totalPages,
    tileBuffer = 2
  } = props;
  const getLeadTile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((currentPage, totalPages) => {
    const selectedTile = currentPage;
    const leftBound = 1 + tileBuffer;
    const rightBound = totalPages - tileBuffer;
    let leadTile = selectedTile - tileBuffer;

    if (selectedTile < leftBound) {
      leadTile = 1;
    } else if (selectedTile > rightBound) {
      leadTile = Math.max(totalPages - tileBuffer * 2, 1);
    }

    return leadTile;
  }, [tileBuffer]);
  const handleLeftSkip = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const leadTile = getLeadTile(currentPage, totalPages);
    const leftSkip = Math.max(1, leadTile - (tileBuffer + 1));
    setPage(leftSkip);
  }, [currentPage, getLeadTile, setPage, totalPages, tileBuffer]);
  const handleRightSkip = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const leadTile = getLeadTile(currentPage, totalPages);
    const rightSkip = Math.min(totalPages, leadTile + tileBuffer * 2 + (tileBuffer + 1));
    setPage(rightSkip);
  }, [currentPage, getLeadTile, setPage, totalPages, tileBuffer]);
  const handleNavBack = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  }, [currentPage, setPage]);
  const handleNavForward = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  }, [currentPage, setPage, totalPages]);
  const isActiveLeft = currentPage !== 1;
  const isActiveRight = currentPage !== totalPages;
  const tiles = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const tiles = [];
    const visibleBuffer = Math.min(tileBuffer * 2, totalPages - 1);
    const leadTile = getLeadTile(currentPage, totalPages);

    for (let i = leadTile; i <= leadTile + visibleBuffer; i++) {
      const tile = i;
      tiles.push(tile);
    }

    return tiles;
  }, [currentPage, getLeadTile, totalPages, tileBuffer]);
  return {
    handleLeftSkip,
    handleRightSkip,
    handleNavBack,
    handleNavForward,
    isActiveLeft,
    isActiveRight,
    tiles
  };
};

_s(usePagination, "0M+dlQwYI6QRILVjkPBJFgtdZzI=");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.js + 1 modules ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
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

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.css
var sortedByContainer = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.css");
var sortedByContainer_default = /*#__PURE__*/__webpack_require__.n(sortedByContainer);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(sortedByContainer_default.a, options);



/* harmony default export */ var SortedByContainer_sortedByContainer = (sortedByContainer_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.js
var _s = $RefreshSig$();







const SortedByContainer = props => {
  _s();

  const {
    currentSort
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(SortedByContainer_sortedByContainer, props.classes);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'searchPage.sortContainer',
    defaultMessage: 'Items sorted by '
  }), react_default.a.createElement("span", {
    className: classes.sortText
  }, react_default.a.createElement(message["a" /* default */], {
    id: currentSort.sortId,
    defaultMessage: currentSort.sortText
  })));
};

_s(SortedByContainer, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = SortedByContainer;
/* harmony default export */ var components_SortedByContainer_sortedByContainer = __webpack_exports__["a"] = (SortedByContainer);
SortedByContainer.propTypes = {
  shouldDisplay: prop_types_default.a.bool,
  currentSort: prop_types_default.a.shape({
    sortId: prop_types_default.a.string,
    sortText: prop_types_default.a.string
  })
};

var _c;

$RefreshReg$(_c, "SortedByContainer");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sortedByContainer-root-3KX {\n    color: rgb(var(--venia-global-color-text-alt));\n    text-align: center;\n    font-size: 0.875rem;\n    padding-bottom: 1rem;\n}\n\n.sortedByContainer-sortText-149 {\n    font-weight: 600;\n}\n\n@media (min-width: 1024px) {\n    .sortedByContainer-root-3KX {\n        display: none;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "sortedByContainer-root-3KX",
	"sortText": "sortedByContainer-sortText-149"
};

/***/ })

}]);
//# sourceMappingURL=vendors~RootCmp_CATEGORY__default~RootCmp_SEARCH__default.4eb6a895599a118e6931.js.map