(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/FilterSidebar/filterSidebar.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/FilterSidebar/filterSidebar.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".filterSidebar-root-5yS {\n    --borderColor: var(--venia-global-color-border);\n    background-color: white;\n    bottom: 0;\n    display: none;\n    grid-template-rows: 1fr 7rem;\n    max-width: 360px;\n    width: 100%;\n    z-index: 3;\n}\n\n.filterSidebar-body-5rB {\n    \n}\n\n.filterSidebar-header-1gd {\n    display: flex;\n    justify-content: space-between;\n    \n}\n\n.filterSidebar-headerTitle-2aN {\n    display: flex;\n    align-items: center;\n    font-size: var(--fontSize-200);;\n    line-height: 0.875rem;\n    text-transform: uppercase;\n}\n\n.filterSidebar-action-3Y3 {\n    padding: 1rem 0;\n}\n\n.filterSidebar-action-3Y3 button {\n\n}\n\n.filterSidebar-blocks-Bhw {\n    \n}\n\n.filterSidebar-blocks-Bhw > li:last-child {\n    \n}\n\n\n\n.filterSidebar-labelWrapper-1FK {\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px;\n}\n.filterSidebar-labelItem-tQb {\n    display: flex;\n    align-items: center;\n    margin-bottom: 15px;\n    min-height: 30px;\n    line-height: normal;\n    cursor: pointer;\n}\n.filterSidebar-labelItem-tQb i{\n    background-image: var(--productLabel);\n    background-repeat: no-repeat;\n    width: 25px;\n    height: 25px;\n    background-size: 90px;\n    margin-right: 10px;\n    \n}\n\n.filterSidebar-filterLabel-BMO {\n flex-grow: 1;\n text-align: left;\n font-size: var(--fontSize-100);\n text-transform: uppercase;\n color: rgb(var(--color-black));\n font-weight: var(--font-weight-bold);\n}\n\n.filterSidebar-onSale-2RE {\n    background-position: -62px -32px;\n    \n}\n\n.filterSidebar-freeShipping-swH {\n    background-position: -62px -2px;\n   \n}\n.filterSidebar-onlinePrice-3Fb {\n    background-position: -32px -32px;\n   \n}\n\n.filterSidebar-bulkSavings-3jh {\n    background-position: -2px -32px;\n}\n\n.filterSidebar-newItem-1HZ {\n    background-position: -32px -2px;\n}\n.filterSidebar-disallowPickupatstore-Cou {\n    background-position: -2px -2px;\n}\n\n.filterSidebar-allowStorePickup-2_9 {\n    background-position: -2px -2px; \n}\n\n@media (min-width: 1024px) {\n    .filterSidebar-root-5yS {\n        display: grid;\n    }\n    .filterSidebar-blocks-Bhw {\n       \n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "filterSidebar-root-5yS",
	"body": "filterSidebar-body-5rB",
	"header": "filterSidebar-header-1gd",
	"headerTitle": "filterSidebar-headerTitle-2aN",
	"action": "filterSidebar-action-3Y3",
	"blocks": "filterSidebar-blocks-Bhw",
	"labelWrapper": "filterSidebar-labelWrapper-1FK",
	"labelItem": "filterSidebar-labelItem-tQb",
	"filterLabel": "filterSidebar-filterLabel-BMO",
	"onSale": "filterSidebar-onSale-2RE",
	"freeShipping": "filterSidebar-freeShipping-swH",
	"onlinePrice": "filterSidebar-onlinePrice-3Fb",
	"bulkSavings": "filterSidebar-bulkSavings-3jh",
	"newItem": "filterSidebar-newItem-1HZ",
	"disallowPickupatstore": "filterSidebar-disallowPickupatstore-Cou",
	"allowStorePickup": "filterSidebar-allowStorePickup-2_9"
};

/***/ }),

/***/ "./src/venia/components/FilterSidebar/index.js":
/*!*****************************************************************!*\
  !*** ./src/venia/components/FilterSidebar/index.js + 6 modules ***!
  \*****************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/app.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/withLogger.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/CompareListPage/compareListBlock.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/WishList/wishlistBlock.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/FilterModal/CurrentFilters/currentFilters.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/FilterModal/filterBlock.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/FilterSidebar/filterSidebar.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/assets/labelSprite.png (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/orderBy.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/startCase.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash/lodash.js (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("./node_modules/lodash/lodash.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/app.js
var app = __webpack_require__("./node_modules/@magento/peregrine/lib/context/app.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/withLogger.js
var withLogger = __webpack_require__("./node_modules/@magento/peregrine/lib/util/withLogger.js");

// CONCATENATED MODULE: ./src/magento/peregrine/talons/FilterModal/useFilterState.js
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

const wrappedReducer = Object(withLogger["a" /* default */])(reducer);
const useFilterState = () => {
  _s();

  const [state, dispatch] = Object(react["useReducer"])(wrappedReducer, null, init);
  const addItem = Object(react["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'add item'
    });
  }, [dispatch]);
  const clear = Object(react["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'clear'
    });
  }, [dispatch]);
  const removeItem = Object(react["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'remove item'
    });
  }, [dispatch]);
  const setItems = Object(react["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'set items'
    });
  }, [dispatch]);
  const toggleItem = Object(react["useCallback"])(payload => {
    dispatch({
      payload,
      type: 'toggle item'
    });
  }, [dispatch]);
  const api = Object(react["useMemo"])(() => ({
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
// CONCATENATED MODULE: ./src/magento/peregrine/talons/FilterModal/helpers.js
const DELIMITER = ',';
const getSearchFromState = (initialValue, filterKeys, filterState) => {
  // preserve all existing params
  const nextParams = new URLSearchParams(initialValue); // iterate over available filters

  for (const key of filterKeys) {
    // remove any existing filter values
    nextParams.delete(key);
  } // iterate over the latest filter values


  for (const [group, items] of filterState) {
    for (const item of items) {
      const {
        title,
        value
      } = item || {}; // append the new values

      nextParams.append(`${group}[filter]`, `${title}${DELIMITER}${value}`);
    }
  } // prepend `?` to the final string


  return `?${nextParams.toString()}`;
};
const getStateFromSearch = (initialValue, filterKeys, filterItems) => {
  // preserve all existing params
  const params = new URLSearchParams(initialValue);
  const uniqueKeys = new Set(params.keys());
  const nextState = new Map(); // iterate over existing param keys

  for (const key of uniqueKeys) {
    // if a key matches a known filter, add its items to the next state
    if (filterKeys.has(key) && key.endsWith('[filter]')) {
      // derive the group by slicing off `[filter]`
      const group = key.slice(0, -8);
      const items = new Set();
      const groupItemsByValue = new Map(); // cache items by value to avoid inefficient lookups

      for (const item of filterItems.get(group)) {
        groupItemsByValue.set(item.value, item);
      } // map item values to items


      for (const value of params.getAll(key)) {
        const existingFilter = groupItemsByValue.get(getValueFromFilterString(value));

        if (existingFilter) {
          items.add(existingFilter);
        } else {
          console.warn(`Existing filter ${value} not found in possible filters`);
        }
      } // add items to the next state, keyed by group


      nextState.set(group, items);
    }
  }

  return nextState;
};
/**
 * Looks for filter values within a search string and returns a map like
 * {
 *   "category_id": ["Bottoms,28", "Pants & Shorts,19"]
 * }
 * filter[category_id]=Bottoms,28&filter[category_id]=Pants & Shorts,19
 * @param {String} initialValue a search string, as in from location.search
 */

const getFiltersFromSearch = initialValue => {
  // preserve all existing params
  const params = new URLSearchParams(initialValue);
  const uniqueKeys = new Set(params.keys());
  const filters = new Map(); // iterate over existing param keys

  for (const key of uniqueKeys) {
    // if a key matches a known filter, add its items to the next state
    if (key.endsWith('[filter]')) {
      // derive the group by slicing off `[filter]`
      const group = key.slice(0, -8);
      const items = new Set(); // map item values to items

      for (const value of params.getAll(key)) {
        items.add(value);
      } // add items to the next state, keyed by group


      filters.set(group, items);
    }
  }

  return filters;
};
const stripHtml = html => html.replace(/(<([^>]+)>)/gi, '');
/** GetFilterInput helpers below. */

const getValueFromFilterString = keyValueString => keyValueString.split(DELIMITER)[1];
/**
 * Converts a set of values to a range filter
 * @param {Set} values
 */


const toRangeFilter = values => {
  // Range should always only be a single string. In the event we received
  // multiple, just return the first.
  const rangeString = getValueFromFilterString(Array.from(values)[0]);
  const [from, to] = rangeString.split('_');
  const rangeFilter = {
    from,
    to
  };

  if (rangeFilter.from === '*') {
    delete rangeFilter.from;
  }

  if (rangeFilter.to === '*') {
    delete rangeFilter.to;
  }

  return rangeFilter;
};
/**
 * Converts a set of values into an equals filter
 * @param {Set} values
 */


const toEqualFilter = values => {
  if (values.size > 1) {
    return {
      in: Array.from(values).map(getValueFromFilterString)
    };
  } else {
    return {
      eq: getValueFromFilterString(Array.from(values)[0])
    };
  }
};
/**
 * Converts a set of values into a match filter
 * @param {Set} values
 */


const toMatchFilter = values => {
  return {
    match: getValueFromFilterString(Array.from(values)[0])
  };
};

const CONVERSION_FUNCTIONS = {
  FilterEqualTypeInput: toEqualFilter,
  FilterMatchTypeInput: toMatchFilter,
  FilterRangeTypeInput: toRangeFilter
};
/**
 * Returns a filter input object matching the type provided.
 *
 * @param values - A set of values to construct the result object from.
 * @param type - Any of the possible types of filter input types
 */

const getFilterInput = (values, type) => {
  const conversionFunction = CONVERSION_FUNCTIONS[type];

  if (!conversionFunction) {
    throw TypeError(`Unknown type ${type}`);
  }

  return conversionFunction(values);
};
// CONCATENATED MODULE: ./src/magento/peregrine/talons/FilterModal/filterModal.gql.js

const GET_FILTER_INPUTS = client["gql"]`
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
/* harmony default export */ var filterModal_gql = ({
  getFilterInputsQuery: GET_FILTER_INPUTS
});
// EXTERNAL MODULE: ./node_modules/lodash-es/orderBy.js + 5 modules
var orderBy = __webpack_require__("./node_modules/lodash-es/orderBy.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/startCase.js + 14 modules
var startCase = __webpack_require__("./node_modules/lodash-es/startCase.js");

// CONCATENATED MODULE: ./src/magento/peregrine/talons/FilterSidebar/useFilterSidebar.js
var useFilterSidebar_s = $RefreshSig$();










const DRAWER_NAME = 'filter';
const useFilterSidebar = props => {
  useFilterSidebar_s();

  // use staticLabelGroups to detect static single click filters
  const {
    filters,
    staticLabelGroups
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(filterModal_gql, props.operations);
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
  const [filterState, filterApi] = useFilterState();
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
    // if (pathname !== '/search.html') {
    //     disabled.add('category_id');
    // }

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
    const sortedFilters = Object(orderBy["a" /* default */])(filters, ['label'], ['asc']);
    const names = new Map();
    const keys = new Set();
    const itemsByGroup = new Map();

    for (const filter of sortedFilters) {
      const {
        options,
        label: name,
        attribute_code: group
      } = filter; // If this aggregation is not a possible filter, just back out.

      if (possibleFilters.has(group)) {
        const items = []; // add filter name

        names.set(group, name); // add filter key permutations

        keys.add(`${group}[filter]`); // add items, define "display" for static filter

        for (const _ref2 of options) {
          const {
            label,
            value,
            count
          } = _ref2;
          items.push({
            title: stripHtml(label),
            value,
            count,
            display: staticLabelGroups.has(group) ? Object(startCase["a" /* default */])(group) : undefined
          });
        }

        itemsByGroup.set(group, items);
      }
    }

    return [names, keys, itemsByGroup];
  }, [filters, possibleFilters]); // on apply, write filter state to location

  Object(react["useEffect"])(() => {
    if (isApplying) {
      const nextSearch = getSearchFromState(search, filterKeys, filterState); // write filter state to history

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
      const nextState = getStateFromSearch(search, filterKeys, filterItems);
      filterApi.setItems(nextState);
    } // on drawer close, update the modal visibility state


    if (justClosed) {
      handleClose();
    }

    prevDrawer.current = drawer;
  }, [drawer, filterApi, filterItems, filterKeys, search, handleClose]);
  Object(react["useEffect"])(() => {
    const nextState = getStateFromSearch(search, filterKeys, filterItems);
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

useFilterSidebar_s(useFilterSidebar, "k8iWU2RgVhggeml4xEGNGhiCDK8=", false, function () {
  return [app["b" /* useAppContext */], useFilterState, react_router["g" /* useHistory */], react_router["h" /* useLocation */], client["useQuery"]];
});
// EXTERNAL MODULE: ./src/venia/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./src/venia/components/LinkButton/linkButton.js");

// EXTERNAL MODULE: ./src/venia/components/FilterModal/CurrentFilters/currentFilters.js + 5 modules
var currentFilters = __webpack_require__("./src/venia/components/FilterModal/CurrentFilters/currentFilters.js");

// EXTERNAL MODULE: ./src/assets/labelSprite.png
var labelSprite = __webpack_require__("./src/assets/labelSprite.png");
var labelSprite_default = /*#__PURE__*/__webpack_require__.n(labelSprite);

// EXTERNAL MODULE: ./src/venia/components/FilterModal/filterBlock.js + 6 modules
var filterBlock = __webpack_require__("./src/venia/components/FilterModal/filterBlock.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/FilterSidebar/filterSidebar.css
var filterSidebar = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/FilterSidebar/filterSidebar.css");
var filterSidebar_default = /*#__PURE__*/__webpack_require__.n(filterSidebar);

// CONCATENATED MODULE: ./src/venia/components/FilterSidebar/filterSidebar.css

            

var filterSidebar_options = {"injectType":"styleTag"};

filterSidebar_options.insert = "head";
filterSidebar_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(filterSidebar_default.a, filterSidebar_options);



/* harmony default export */ var FilterSidebar_filterSidebar = (filterSidebar_default.a.locals || {});
// EXTERNAL MODULE: ./src/components/CompareListPage/compareListBlock.js + 1 modules
var compareListBlock = __webpack_require__("./src/components/CompareListPage/compareListBlock.js");

// EXTERNAL MODULE: ./src/components/WishList/wishlistBlock.js
var wishlistBlock = __webpack_require__("./src/components/WishList/wishlistBlock.js");

// CONCATENATED MODULE: ./src/venia/components/FilterSidebar/filterSidebar.js
var filterSidebar_s = $RefreshSig$();














const style = {
  '--productLabel': `url("${labelSprite_default.a}")`
};
const SCROLL_OFFSET = 150; // here purpose is apply positive filter on single click

const staticLabelValue = {
  on_sale: 'Yes',
  free_shipping: 'Yes',
  online_price: 'Yes',
  bulk_savings: 'Yes',
  new_item: 'Yes',
  disallow_pickupatstore: '0'
};
const filterSidebar_staticLabelGroups = new Set(['on_sale', 'free_shipping', 'online_price', 'bulk_savings', 'new_item', 'disallow_pickupatstore']);
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
    filters,
    staticLabelGroups: filterSidebar_staticLabelGroups
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
  const handleStaticApplyFilter = Object(react["useCallback"])((group, item) => () => {
    const {
      toggleItem
    } = filterApi; // toggle in selected state

    toggleItem({
      group,
      item
    }); // apply and refetch data

    handleApplyFilter(group, item);
  }, [filterApi, handleApplyFilter]);
  const filtersList = Object(react["useMemo"])(() => Array.from(filterItems, ([group, items], iteration) => {
    if (!filterSidebar_staticLabelGroups.has(group)) {
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
        initialOpen: true
      });
    }
  }), [filterApi, filterItems, filterNames, filterState, filterCountToOpen, handleApplyFilter]);
  const toggleFiltersList = Object(react["useMemo"])(() => Array.from(filterItems, ([group, items], iteration) => {
    if (filterSidebar_staticLabelGroups.has(group)) {
      const groupName = filterNames.get(group);
      const item = Object(lodash["find"])(items, ['title', staticLabelValue[group]]);

      if (item) {
        const blockState = filterState.get(group); // to show selected filter

        const isSelected = blockState && blockState.has(item);
        return react_default.a.createElement("div", {
          className: classes.labelItem,
          onClick: handleStaticApplyFilter(group, item)
        }, react_default.a.createElement("i", {
          className: classes[Object(lodash["camelCase"])(group)],
          style: style
        }), react_default.a.createElement("span", {
          className: classes.filterLabel
        }, groupName));
      }
    }
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
  }, filtersList), react_default.a.createElement("div", {
    className: classes.labelWrapper
  }, toggleFiltersList)), react_default.a.createElement("div", {
    className: classes.body
  }, react_default.a.createElement(compareListBlock["a" /* default */], null)), react_default.a.createElement("div", {
    className: classes.body
  }, react_default.a.createElement(wishlistBlock["a" /* default */], null))));
};

filterSidebar_s(FilterSidebar, "hAi81ZR+KRtSCC16bEEPGMKcXxQ=", false, function () {
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
// CONCATENATED MODULE: ./src/venia/components/FilterSidebar/index.js


/***/ })

}]);
//# sourceMappingURL=93.ffe0a99527bd8086b23d.js.map