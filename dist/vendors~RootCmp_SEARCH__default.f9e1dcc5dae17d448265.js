(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~RootCmp_SEARCH__default"],{

/***/ "./node_modules/@magento/venia-ui/lib/RootComponents/Search/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/RootComponents/Search/index.js + 10 modules ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/app.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useDropdown.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/usePagination.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useScrollTopOnChange.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useSearchParam.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useSort.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/FilterModal/helpers.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterModal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/check.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-down.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FilterModalOpenButton/filterModalOpenButton.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ProductSort/productSort.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ProductSort/sortItem.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/SearchPage/searchPage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_SearchPage_searchPage; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/app.js
var app = __webpack_require__("./node_modules/@magento/peregrine/lib/context/app.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/usePagination.js
var usePagination = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/usePagination.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useScrollTopOnChange.js
var useScrollTopOnChange = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useScrollTopOnChange.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useSearchParam.js
var useSearchParam = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useSearchParam.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useSort.js
var useSort = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useSort.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/FilterModal/helpers.js
var helpers = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/FilterModal/helpers.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/SearchPage/searchPage.gql.js

const GET_PAGE_SIZE = client["gql"]`
    query getPageSize {
        storeConfig {
            id
            grid_per_page
        }
    }
`;
const GET_PRODUCT_FILTERS_BY_SEARCH = client["gql"]`
    query getProductFiltersBySearch($search: String!) {
        products(search: $search) {
            aggregations {
                label
                count
                attribute_code
                options {
                    label
                    value
                }
            }
        }
    }
`;
const PRODUCT_SEARCH = client["gql"]`
    query ProductSearch(
        $currentPage: Int = 1
        $inputText: String!
        $pageSize: Int = 6
        $filters: ProductAttributeFilterInput!
        $sort: ProductAttributeSortInput
    ) {
        products(
            currentPage: $currentPage
            pageSize: $pageSize
            search: $inputText
            filter: $filters
            sort: $sort
        ) {
            items {
                id
                name
                small_image {
                    url
                }
                url_key
                url_suffix
                price {
                    regularPrice {
                        amount {
                            value
                            currency
                        }
                    }
                }
                sku
            }
            page_info {
                total_pages
            }
            total_count
        }
    }
`;
const GET_FILTER_INPUTS = client["gql"]`
    query GetFilterInputsForSearch {
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
/* harmony default export */ var searchPage_gql = ({
  getFilterInputsQuery: GET_FILTER_INPUTS,
  getPageSize: GET_PAGE_SIZE,
  getProductFiltersBySearchQuery: GET_PRODUCT_FILTERS_BY_SEARCH,
  productSearchQuery: PRODUCT_SEARCH
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/SearchPage/useSearchPage.js
var _s = $RefreshSig$();












/**
 * Return props necessary to render a SearchPage component.
 *
 * @param {Object} props
 * @param {String} props.query - graphql query used for executing search
 */

const useSearchPage = (props = {}) => {
  _s();

  const operations = Object(shallowMerge["a" /* default */])(searchPage_gql, props.operations);
  const {
    getFilterInputsQuery,
    getPageSize,
    getProductFiltersBySearchQuery,
    productSearchQuery
  } = operations;
  const {
    data: pageSizeData
  } = Object(client["useQuery"])(getPageSize, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  });
  const pageSize = pageSizeData && pageSizeData.storeConfig.grid_per_page;
  const sortProps = Object(useSort["a" /* useSort */])();
  const [currentSort] = sortProps;
  const {
    sortAttribute,
    sortDirection
  } = currentSort; // Keep track of the sort criteria so we can tell when they change.

  const previousSort = Object(react["useRef"])(currentSort); // get the URL query parameters.

  const location = Object(react_router["h" /* useLocation */])();
  const {
    search
  } = location; // Keep track of the search terms so we can tell when they change.

  const previousSearch = Object(react["useRef"])(search); // Set up pagination.

  const [paginationValues, paginationApi] = Object(usePagination["a" /* usePagination */])();
  const {
    currentPage,
    totalPages
  } = paginationValues;
  const {
    setCurrentPage,
    setTotalPages
  } = paginationApi; // retrieve app state and action creators

  const [, appApi] = Object(app["b" /* useAppContext */])();
  const {
    toggleDrawer,
    actions: {
      setPageLoading
    }
  } = appApi;
  const inputText = Object(useSearchParam["a" /* getSearchParam */])('query', location);
  const searchCategory = Object(react["useMemo"])(() => {
    const inputFilters = Object(helpers["c" /* getFiltersFromSearch */])(search);

    if (inputFilters.size === 0) {
      return null;
    }

    const targetCategoriesSet = inputFilters.get('category_id');

    if (!targetCategoriesSet) {
      return null;
    } // The set looks like ["Bottoms,11", "Skirts,12"].
    // We want to return "Bottoms, Skirts", etc.


    return [...targetCategoriesSet].map(categoryPair => categoryPair.split(',')[0]).join(', ');
  }, [search]);
  const openDrawer = Object(react["useCallback"])(() => {
    toggleDrawer('filter');
  }, [toggleDrawer]); // Get "allowed" filters by intersection of schema and aggregations

  const {
    called: introspectionCalled,
    data: introspectionData,
    loading: introspectionLoading
  } = Object(client["useQuery"])(getFilterInputsQuery); // Create a type map we can reference later to ensure we pass valid args
  // to the graphql query.
  // For example: { category_id: 'FilterEqualTypeInput', price: 'FilterRangeTypeInput' }

  const filterTypeMap = Object(react["useMemo"])(() => {
    const typeMap = new Map();

    if (introspectionData) {
      introspectionData.__type.inputFields.forEach(({
        name,
        type
      }) => {
        typeMap.set(name, type.name);
      });
    }

    return typeMap;
  }, [introspectionData]);
  const pageControl = {
    currentPage,
    setPage: setCurrentPage,
    totalPages
  };
  const [runQuery, {
    called: searchCalled,
    loading: searchLoading,
    error,
    data
  }] = Object(client["useLazyQuery"])(productSearchQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  });
  const isBackgroundLoading = !!data && searchLoading; // Update the page indicator if the GraphQL query is in flight.

  Object(react["useEffect"])(() => {
    setPageLoading(isBackgroundLoading);
  }, [isBackgroundLoading, setPageLoading]);
  Object(react["useEffect"])(() => {
    // Wait until we have the type map to fetch product data.
    if (!filterTypeMap.size || !pageSize) {
      return;
    }

    const filters = Object(helpers["c" /* getFiltersFromSearch */])(search); // Construct the filter arg object.

    const newFilters = {};
    filters.forEach((values, key) => {
      newFilters[key] = Object(helpers["b" /* getFilterInput */])(values, filterTypeMap.get(key));
    });
    runQuery({
      variables: {
        currentPage: Number(currentPage),
        filters: newFilters,
        inputText,
        pageSize: Number(pageSize),
        sort: {
          [sortAttribute]: sortDirection
        }
      }
    });
  }, [currentPage, filterTypeMap, inputText, runQuery, pageSize, search, sortDirection, sortAttribute]); // Set the total number of pages whenever the data changes.

  Object(react["useEffect"])(() => {
    const totalPagesFromData = data ? data.products.page_info.total_pages : null;
    setTotalPages(totalPagesFromData);
    return () => {
      setTotalPages(null);
    };
  }, [data, setTotalPages]); // Reset the current page back to one (1) when the search string, filters
  // or sort criteria change.

  Object(react["useEffect"])(() => {
    // We don't want to compare page value.
    const prevSearch = new URLSearchParams(previousSearch.current);
    const nextSearch = new URLSearchParams(search);
    prevSearch.delete('page');
    nextSearch.delete('page');

    if (prevSearch.toString() !== nextSearch.toString() || previousSort.current.sortAttribute.toString() !== currentSort.sortAttribute.toString() || previousSort.current.sortDirection.toString() !== currentSort.sortDirection.toString()) {
      // The search term changed.
      setCurrentPage(1, true); // And update the ref.

      previousSearch.current = search;
      previousSort.current = currentSort;
    }
  }, [currentSort, search, setCurrentPage]); // Fetch category filters for when a user is searching in a category.

  const [getFilters, {
    data: filterData
  }] = Object(client["useLazyQuery"])(getProductFiltersBySearchQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  });
  Object(react["useEffect"])(() => {
    if (inputText) {
      getFilters({
        variables: {
          search: inputText
        }
      });
    }
  }, [getFilters, inputText, search]); // Use static category filters when filtering by category otherwise use the
  // default (and potentially changing!) aggregations from the product query.

  const filters = filterData ? filterData.products.aggregations : null; // Avoid showing a "empty data" state between introspection and search.

  const loading = introspectionCalled && !searchCalled || searchLoading || introspectionLoading;
  Object(useScrollTopOnChange["a" /* useScrollTopOnChange */])(currentPage);
  return {
    data,
    error,
    filters,
    loading,
    openDrawer,
    pageControl,
    searchCategory,
    searchTerm: inputText,
    sortProps
  };
};

_s(useSearchPage, "DtywORwL68NfEju9rKsDg0GAPco=", false, function () {
  return [client["useQuery"], useSort["a" /* useSort */], react_router["h" /* useLocation */], usePagination["a" /* usePagination */], app["b" /* useAppContext */], client["useQuery"], client["useLazyQuery"], client["useLazyQuery"], useScrollTopOnChange["a" /* useScrollTopOnChange */]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.js + 6 modules
var pagination = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.js + 1 modules
var gallery = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js
var LoadingIndicator_static = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-down.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useDropdown.js
var useDropdown = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useDropdown.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__("./node_modules/react-feather/dist/icons/check.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ProductSort/sortItem.css
var ProductSort_sortItem = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ProductSort/sortItem.css");
var sortItem_default = /*#__PURE__*/__webpack_require__.n(ProductSort_sortItem);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductSort/sortItem.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(sortItem_default.a, options);



/* harmony default export */ var components_ProductSort_sortItem = (sortItem_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductSort/sortItem.js
var sortItem_s = $RefreshSig$();









const SortItem = props => {
  sortItem_s();

  const {
    active,
    onClick,
    sortItem
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(components_ProductSort_sortItem, props.classes);
  const handleClick = Object(react["useCallback"])(() => {
    onClick(sortItem);
  }, [sortItem, onClick]);
  const activeIcon = active ? react_default.a.createElement(icon["a" /* default */], {
    size: 20,
    src: check["a" /* default */]
  }) : null;
  return react_default.a.createElement("button", {
    className: classes.root,
    onClick: handleClick
  }, react_default.a.createElement("span", {
    className: classes.content
  }, react_default.a.createElement("span", {
    className: classes.text
  }, react_default.a.createElement(message["a" /* default */], {
    id: sortItem.id,
    defaultMessage: sortItem.text
  })), activeIcon));
};

sortItem_s(SortItem, "VrQqS9zhohOjo1/L0PWeonHIW40=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = SortItem;
SortItem.propTypes = {
  active: prop_types["bool"],
  classes: Object(prop_types["shape"])({
    content: prop_types["string"],
    root: prop_types["string"],
    text: prop_types["string"]
  }),
  onClick: prop_types["func"]
};
/* harmony default export */ var lib_components_ProductSort_sortItem = (SortItem);

var _c;

$RefreshReg$(_c, "SortItem");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ProductSort/productSort.css
var productSort = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ProductSort/productSort.css");
var productSort_default = /*#__PURE__*/__webpack_require__.n(productSort);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductSort/productSort.css

            

var productSort_options = {"injectType":"styleTag"};

productSort_options.insert = "head";
productSort_options.singleton = false;

var productSort_update = injectStylesIntoStyleTag_default()(productSort_default.a, productSort_options);



/* harmony default export */ var ProductSort_productSort = (productSort_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductSort/productSort.js
var productSort_s = $RefreshSig$();












const ProductSort = props => {
  productSort_s();

  const classes = Object(shallowMerge["a" /* default */])(ProductSort_productSort, props.classes);
  const {
    availableSortMethods,
    sortProps
  } = props;
  const [currentSort, setSort] = sortProps;
  const {
    elementRef,
    expanded,
    setExpanded
  } = Object(useDropdown["a" /* useDropdown */])(); // click event for menu items

  const handleItemClick = Object(react["useCallback"])(sortAttribute => {
    setSort({
      sortText: sortAttribute.text,
      sortId: sortAttribute.id,
      sortAttribute: sortAttribute.attribute,
      sortDirection: sortAttribute.sortDirection
    });
    setExpanded(false);
  }, [setExpanded, setSort]);
  const sortElements = Object(react["useMemo"])(() => {
    // should be not render item in collapsed mode.
    if (!expanded) {
      return null;
    }

    const itemElements = Array.from(availableSortMethods, sortItem => {
      const {
        attribute,
        sortDirection
      } = sortItem;
      const isActive = currentSort.sortAttribute === attribute && currentSort.sortDirection === sortDirection;
      const key = `${attribute}--${sortDirection}`;
      return react_default.a.createElement("li", {
        key: key,
        className: classes.menuItem
      }, react_default.a.createElement(lib_components_ProductSort_sortItem, {
        sortItem: sortItem,
        active: isActive,
        onClick: handleItemClick
      }));
    });
    return react_default.a.createElement("div", {
      className: classes.menu
    }, react_default.a.createElement("ul", null, itemElements));
  }, [availableSortMethods, classes.menu, classes.menuItem, currentSort.sortAttribute, currentSort.sortDirection, expanded, handleItemClick]); // expand or collapse on click

  const handleSortClick = () => {
    setExpanded(!expanded);
  };

  return react_default.a.createElement("div", {
    ref: elementRef,
    className: classes.root
  }, react_default.a.createElement(Button_button["a" /* default */], {
    priority: 'low',
    classes: {
      root_lowPriority: classes.sortButton
    },
    onClick: handleSortClick
  }, react_default.a.createElement("span", {
    className: classes.mobileText
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'productSort.sortButton',
    defaultMessage: 'Sort'
  })), react_default.a.createElement("span", {
    className: classes.desktopText
  }, react_default.a.createElement("span", {
    className: classes.sortText
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'productSort.sortByButton',
    defaultMessage: 'Sort by'
  }), "\xA0", currentSort.sortText), react_default.a.createElement(icon["a" /* default */], {
    src: chevron_down["a" /* default */],
    classes: {
      root: classes.desktopIconWrapper,
      icon: classes.desktopIcon
    }
  }))), sortElements);
};

productSort_s(ProductSort, "+Uu/IbiVn6JiVwM9pH7xvgYq0p4=", false, function () {
  return [shallowMerge["a" /* default */], useDropdown["a" /* useDropdown */]];
});

productSort_c = ProductSort;
const sortDirections = Object(prop_types["oneOf"])(['ASC', 'DESC']);
ProductSort.propTypes = {
  classes: Object(prop_types["shape"])({
    menuItem: prop_types["string"],
    menu: prop_types["string"],
    root: prop_types["string"],
    sortButton: prop_types["string"]
  }),
  availableSortMethods: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    text: prop_types["string"],
    id: prop_types["string"],
    attribute: prop_types["string"],
    sortDirection: sortDirections
  })),
  sortProps: prop_types["array"]
};
ProductSort.defaultProps = {
  availableSortMethods: [{
    text: 'Position',
    id: 'sortItem.position',
    attribute: 'position',
    sortDirection: 'ASC'
  }, {
    id: 'sortItem.relevance',
    text: 'Best Match',
    attribute: 'relevance',
    sortDirection: 'DESC'
  }, {
    id: 'sortItem.priceAsc',
    text: 'Price: Low to High',
    attribute: 'price',
    sortDirection: 'ASC'
  }, {
    id: 'sortItem.priceDesc',
    text: 'Price: High to Low',
    attribute: 'price',
    sortDirection: 'DESC'
  }]
};
/* harmony default export */ var components_ProductSort_productSort = (ProductSort);

var productSort_c;

$RefreshReg$(productSort_c, "ProductSort");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/SearchPage/searchPage.css
var searchPage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/SearchPage/searchPage.css");
var searchPage_default = /*#__PURE__*/__webpack_require__.n(searchPage);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/SearchPage/searchPage.css

            

var searchPage_options = {"injectType":"styleTag"};

searchPage_options.insert = "head";
searchPage_options.singleton = false;

var searchPage_update = injectStylesIntoStyleTag_default()(searchPage_default.a, searchPage_options);



/* harmony default export */ var SearchPage_searchPage = (searchPage_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.js + 1 modules
var sortedByContainer = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FilterModalOpenButton/filterModalOpenButton.css
var filterModalOpenButton = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/FilterModalOpenButton/filterModalOpenButton.css");
var filterModalOpenButton_default = /*#__PURE__*/__webpack_require__.n(filterModalOpenButton);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/FilterModalOpenButton/filterModalOpenButton.css

            

var filterModalOpenButton_options = {"injectType":"styleTag"};

filterModalOpenButton_options.insert = "head";
filterModalOpenButton_options.singleton = false;

var filterModalOpenButton_update = injectStylesIntoStyleTag_default()(filterModalOpenButton_default.a, filterModalOpenButton_options);



/* harmony default export */ var FilterModalOpenButton_filterModalOpenButton = (filterModalOpenButton_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterModal.js
var useFilterModal = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/FilterModal/useFilterModal.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/FilterModalOpenButton/filterModalOpenButton.js
var filterModalOpenButton_s = $RefreshSig$();









const FilterModalOpenButton = props => {
  filterModalOpenButton_s();

  const {
    filters,
    classes: propsClasses
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(FilterModalOpenButton_filterModalOpenButton, propsClasses);
  const {
    handleOpen
  } = Object(useFilterModal["a" /* useFilterModal */])({
    filters
  });
  return react_default.a.createElement(Button_button["a" /* default */], {
    priority: 'low',
    classes: {
      root_lowPriority: classes.filterButton
    },
    onClick: handleOpen,
    type: "button"
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'productList.filter',
    defaultMessage: 'Filter'
  }));
};

filterModalOpenButton_s(FilterModalOpenButton, "ARLbvisKzET083fktLs33STXF2g=", false, function () {
  return [shallowMerge["a" /* default */], useFilterModal["a" /* useFilterModal */]];
});

filterModalOpenButton_c = FilterModalOpenButton;
/* harmony default export */ var components_FilterModalOpenButton_filterModalOpenButton = (FilterModalOpenButton);
FilterModalOpenButton.propTypes = {
  filters: prop_types["array"],
  classes: Object(prop_types["shape"])({
    filterButton: prop_types["string"]
  })
};

var filterModalOpenButton_c;

$RefreshReg$(filterModalOpenButton_c, "FilterModalOpenButton");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/SearchPage/searchPage.js
var searchPage_s = $RefreshSig$();













const FilterModal = react_default.a.lazy(searchPage_c = () => Promise.all(/*! import() */[__webpack_require__.e(27), __webpack_require__.e(21), __webpack_require__.e(71)]).then(__webpack_require__.bind(null, /*! ../FilterModal */ "./node_modules/@magento/venia-ui/lib/components/FilterModal/index.js")));
_c2 = FilterModal;
const FilterSidebar = react_default.a.lazy(_c3 = () => Promise.all(/*! import() */[__webpack_require__.e(21), __webpack_require__.e(54)]).then(__webpack_require__.bind(null, /*! ../FilterSidebar */ "./node_modules/@magento/venia-ui/lib/components/FilterSidebar/index.js")));
_c4 = FilterSidebar;

const SearchPage = props => {
  searchPage_s();

  const classes = Object(shallowMerge["a" /* default */])(SearchPage_searchPage, props.classes);
  const talonProps = useSearchPage();
  const {
    data,
    error,
    filters,
    loading,
    pageControl,
    searchCategory,
    searchTerm,
    sortProps
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const [currentSort] = sortProps;
  const content = Object(react["useMemo"])(() => {
    if (!data && loading) return LoadingIndicator_static["a" /* default */];

    if (!data && error) {
      return react_default.a.createElement("div", {
        className: classes.noResult
      }, react_default.a.createElement(message["a" /* default */], {
        id: 'searchPage.noResult',
        defaultMessage: 'No results found. The search term may be missing or invalid.'
      }));
    }

    if (!data) {
      return null;
    }

    if (data.products.items.length === 0) {
      return react_default.a.createElement("div", {
        className: classes.noResult
      }, react_default.a.createElement(message["a" /* default */], {
        id: 'searchPage.noResultImportant',
        defaultMessage: 'No results found!'
      }));
    } else {
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("section", {
        className: classes.gallery
      }, react_default.a.createElement(gallery["a" /* default */], {
        items: data.products.items
      })), react_default.a.createElement("section", {
        className: classes.pagination
      }, react_default.a.createElement(pagination["a" /* default */], {
        pageControl: pageControl
      })));
    }
  }, [classes.gallery, classes.noResult, classes.pagination, error, loading, data, pageControl]);
  const productsCount = data && data.products && data.products.total_count ? data.products.total_count : 0;
  const shouldShowFilterButtons = filters && filters.length; // If there are no products we can hide the sort button.

  const shouldShowSortButtons = productsCount;
  const maybeFilterButtons = shouldShowFilterButtons ? react_default.a.createElement(components_FilterModalOpenButton_filterModalOpenButton, {
    filters: filters
  }) : null;
  const maybeFilterModal = shouldShowFilterButtons ? react_default.a.createElement(FilterModal, {
    filters: filters
  }) : null;
  const maybeSidebar = shouldShowFilterButtons ? react_default.a.createElement(FilterSidebar, {
    filters: filters
  }) : null;
  const maybeSortButton = shouldShowSortButtons ? react_default.a.createElement(components_ProductSort_productSort, {
    sortProps: sortProps
  }) : null;
  const maybeSortContainer = shouldShowSortButtons ? react_default.a.createElement(sortedByContainer["a" /* default */], {
    currentSort: currentSort
  }) : null;
  const searchResultsHeading = !data ? null : searchTerm ? react_default.a.createElement(message["a" /* default */], {
    id: 'searchPage.searchTerm',
    values: {
      highlight: chunks => react_default.a.createElement("span", {
        className: classes.headingHighlight
      }, chunks),
      category: searchCategory,
      term: searchTerm
    },
    defaultMessage: 'Showing results:'
  }) : react_default.a.createElement(message["a" /* default */], {
    id: 'searchPage.searchTermEmpty',
    defaultMessage: 'Showing all results:'
  });
  const itemCountHeading = data && !loading ? react_default.a.createElement("span", {
    className: classes.totalPages
  }, formatMessage({
    id: 'searchPage.totalPages',
    defaultMessage: `items`
  }, {
    totalCount: productsCount
  })) : null;
  return react_default.a.createElement("article", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.sidebar
  }, react_default.a.createElement(react["Suspense"], {
    fallback: null
  }, maybeSidebar)), react_default.a.createElement("div", {
    className: classes.searchContent
  }, react_default.a.createElement("div", {
    className: classes.heading
  }, react_default.a.createElement("div", {
    className: classes.searchInfo
  }, searchResultsHeading, itemCountHeading), react_default.a.createElement("div", {
    className: classes.headerButtons
  }, maybeFilterButtons, maybeSortButton), maybeSortContainer), content, react_default.a.createElement(react["Suspense"], {
    fallback: null
  }, maybeFilterModal)));
};

searchPage_s(SearchPage, "N9mQuYxpzHdNI9u45qu9ntNyDeY=", false, function () {
  return [shallowMerge["a" /* default */], useSearchPage, useIntl["a" /* default */]];
});

_c5 = SearchPage;
/* harmony default export */ var components_SearchPage_searchPage = (SearchPage);
SearchPage.propTypes = {
  classes: Object(prop_types["shape"])({
    noResult: prop_types["string"],
    root: prop_types["string"],
    totalPages: prop_types["string"]
  })
};

var searchPage_c, _c2, _c3, _c4, _c5;

$RefreshReg$(searchPage_c, "FilterModal$React.lazy");
$RefreshReg$(_c2, "FilterModal");
$RefreshReg$(_c3, "FilterSidebar$React.lazy");
$RefreshReg$(_c4, "FilterSidebar");
$RefreshReg$(_c5, "SearchPage");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/RootComponents/Search/index.js
/**
 * @RootComponent
 * description = 'Basic Search'
 * pageTypes = SEARCH
 */


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

/***/ "./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.js + 6 modules ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Pagination/usePagination.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-left.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-right.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/fast-forward.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/rewind.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Pagination/navButton.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Pagination/tile.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Pagination/usePagination.js
var usePagination = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Pagination/usePagination.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.css
var pagination = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.css");
var pagination_default = /*#__PURE__*/__webpack_require__.n(pagination);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(pagination_default.a, options);



/* harmony default export */ var Pagination_pagination = (pagination_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Pagination/tile.css
var tile = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Pagination/tile.css");
var tile_default = /*#__PURE__*/__webpack_require__.n(tile);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Pagination/tile.css

            

var tile_options = {"injectType":"styleTag"};

tile_options.insert = "head";
tile_options.singleton = false;

var tile_update = injectStylesIntoStyleTag_default()(tile_default.a, tile_options);



/* harmony default export */ var Pagination_tile = (tile_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Pagination/tile.js
var _s = $RefreshSig$();






const Tile = props => {
  _s();

  const {
    isActive,
    number,
    onClick
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(Pagination_tile, props.classes);
  const rootClass = isActive ? classes.root_active : classes.root;
  const handleClick = Object(react["useCallback"])(() => onClick(number), [onClick, number]);
  return react_default.a.createElement("button", {
    className: rootClass,
    onClick: handleClick
  }, number);
};

_s(Tile, "VrQqS9zhohOjo1/L0PWeonHIW40=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Tile;
Tile.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_active: prop_types["string"]
  }),
  isActive: prop_types["bool"],
  number: prop_types["number"],
  onClick: prop_types["func"]
};
/* harmony default export */ var components_Pagination_tile = (Tile);

var _c;

$RefreshReg$(_c, "Tile");
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-left.js
var chevron_left = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-left.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-right.js
var chevron_right = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-right.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/fast-forward.js
var fast_forward = __webpack_require__("./node_modules/react-feather/dist/icons/fast-forward.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/rewind.js
var rewind = __webpack_require__("./node_modules/react-feather/dist/icons/rewind.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Pagination/navButton.css
var navButton = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Pagination/navButton.css");
var navButton_default = /*#__PURE__*/__webpack_require__.n(navButton);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Pagination/navButton.css

            

var navButton_options = {"injectType":"styleTag"};

navButton_options.insert = "head";
navButton_options.singleton = false;

var navButton_update = injectStylesIntoStyleTag_default()(navButton_default.a, navButton_options);



/* harmony default export */ var Pagination_navButton = (navButton_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Pagination/navButton.js
var navButton_s = $RefreshSig$();







const icons = new Map().set('ChevronLeft', chevron_left["a" /* default */]).set('ChevronRight', chevron_right["a" /* default */]).set('FastForward', fast_forward["a" /* default */]).set('Rewind', rewind["a" /* default */]);

const NavButton = props => {
  navButton_s();

  const {
    active,
    buttonLabel,
    name,
    onClick
  } = props;
  const iconSrc = icons.get(name);
  const classes = Object(shallowMerge["a" /* default */])(Pagination_navButton, props.classes);
  const iconClass = active ? classes.icon : classes.icon_disabled;
  return react_default.a.createElement("button", {
    "aria-label": buttonLabel,
    className: classes.root,
    disabled: !active,
    onClick: onClick
  }, react_default.a.createElement(icon["a" /* default */], {
    className: iconClass,
    size: 20,
    src: iconSrc
  }));
};

navButton_s(NavButton, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

navButton_c = NavButton;
/* harmony default export */ var components_Pagination_navButton = (NavButton);
NavButton.propTypes = {
  classes: Object(prop_types["shape"])({
    icon: prop_types["string"],
    icon_disabled: prop_types["string"],
    root: prop_types["string"]
  })
};
NavButton.defaultProps = {
  buttonLabel: 'move to another page'
};

var navButton_c;

$RefreshReg$(navButton_c, "NavButton");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Pagination/constants.js
const navButtons = {
  firstPage: {
    name: 'Rewind',
    buttonLabel: 'move to the first page'
  },
  prevPage: {
    name: 'ChevronLeft',
    buttonLabel: 'move to the previous page'
  },
  nextPage: {
    name: 'ChevronRight',
    buttonLabel: 'move to the next page'
  },
  lastPage: {
    name: 'FastForward',
    buttonLabel: 'move to the last page'
  }
};
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.js
var pagination_s = $RefreshSig$();











const Pagination = props => {
  pagination_s();

  const {
    currentPage,
    setPage,
    totalPages
  } = props.pageControl;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(Pagination_pagination, props.classes);
  const talonProps = Object(usePagination["a" /* usePagination */])({
    currentPage,
    setPage,
    totalPages
  });
  const {
    handleLeftSkip,
    handleRightSkip,
    handleNavBack,
    handleNavForward,
    isActiveLeft,
    isActiveRight,
    tiles
  } = talonProps;
  const navigationTiles = Object(react["useMemo"])(() => tiles.map(tileNumber => {
    return react_default.a.createElement(components_Pagination_tile, {
      isActive: tileNumber === currentPage,
      key: tileNumber,
      number: tileNumber,
      onClick: setPage
    });
  }), [currentPage, tiles, setPage]);

  if (totalPages === 1) {
    return null;
  }

  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(components_Pagination_navButton, {
    name: navButtons.firstPage.name,
    active: isActiveLeft,
    onClick: handleLeftSkip,
    buttonLabel: formatMessage({
      id: 'pagination.firstPage',
      defaultMessage: navButtons.firstPage.buttonLabel
    })
  }), react_default.a.createElement(components_Pagination_navButton, {
    name: navButtons.prevPage.name,
    active: isActiveLeft,
    onClick: handleNavBack,
    buttonLabel: formatMessage({
      id: 'pagination.prevPage',
      defaultMessage: navButtons.prevPage.buttonLabel
    })
  }), navigationTiles, react_default.a.createElement(components_Pagination_navButton, {
    name: navButtons.nextPage.name,
    active: isActiveRight,
    onClick: handleNavForward,
    buttonLabel: formatMessage({
      id: 'pagination.nextPage',
      defaultMessage: navButtons.nextPage.buttonLabel
    })
  }), react_default.a.createElement(components_Pagination_navButton, {
    name: navButtons.lastPage.name,
    active: isActiveRight,
    onClick: handleRightSkip,
    buttonLabel: formatMessage({
      id: 'pagination.lastPage',
      defaultMessage: navButtons.lastPage.buttonLabel
    })
  }));
};

pagination_s(Pagination, "QWhrBl3oJPEkQWR9aCqPdhR3b2k=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */], usePagination["a" /* usePagination */]];
});

pagination_c = Pagination;
Pagination.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  pageControl: Object(prop_types["shape"])({
    currentPage: prop_types["number"],
    setPage: prop_types["func"],
    totalPages: prop_types["number"]
  }).isRequired
};
/* harmony default export */ var components_Pagination_pagination = __webpack_exports__["a"] = (Pagination);

var pagination_c;

$RefreshReg$(pagination_c, "Pagination");

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/FilterModalOpenButton/filterModalOpenButton.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FilterModalOpenButton/filterModalOpenButton.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../components/Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");

// Module
exports.push([module.i, ".filterModalOpenButton-filterButton-2Zk {\n    min-width: 6.25rem;\n}\n\n@media (min-width: 1024px) {\n    .filterModalOpenButton-filterButton-2Zk {\n        display: none;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"filterButton": "filterModalOpenButton-filterButton-2Zk " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../components/Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_lowPriority"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Pagination/navButton.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Pagination/navButton.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!./tile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Pagination/tile.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css"), "");

// Module
exports.push([module.i, ".navButton-root-2Fj {\n}\n\n.navButton-icon-xu0 {\n}\n\n.navButton-icon_disabled-25f {\n    --stroke: rgb(var(--venia-global-color-text-hint));\n}\n", ""]);

// Exports
exports.locals = {
	"root": "navButton-root-2Fj " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!./tile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Pagination/tile.css").locals["root"] + "",
	"icon": "navButton-icon-xu0 " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css").locals["root"] + "",
	"icon_disabled": "navButton-icon_disabled-25f navButton-icon-xu0 " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css").locals["root"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Pagination/pagination.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".pagination-root-oRm {\n    background-color: white;\n    border-top: 1px solid rgb(var(--venia-global-color-border));\n    display: grid;\n    gap: 0.25rem;\n    grid-auto-columns: minmax(2rem, auto);\n    grid-auto-flow: column;\n    justify-content: center;\n    padding: 1rem 0;\n    text-align: center;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "pagination-root-oRm"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Pagination/tile.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Pagination/tile.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".tile-root-ZWL {\n    align-items: center;\n    border: 1px none currentColor;\n    border-radius: 2px;\n    display: flex;\n    justify-content: center;\n    min-height: 2rem;\n    outline: none;\n    position: relative;\n}\n\n.tile-root_active-2jZ {\n    border-style: solid;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "tile-root-ZWL",
	"root_active": "tile-root_active-2jZ tile-root-ZWL"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ProductSort/productSort.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ProductSort/productSort.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../components/Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css"), "");

// Module
exports.push([module.i, ".productSort-root-2ro {\n    position: relative;\n    margin-left: 0.5rem;\n}\n\n.productSort-menu-1eo {\n    position: absolute;\n    z-index: 2;\n    top: 110%;\n    right: 0;\n    min-width: 10rem;\n    margin: 0.125rem 0 0;\n    font-size: 1rem;\n    color: black;\n    text-align: left;\n    list-style: none;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid rgb(var(--venia-global-color-gray-dark));\n    border-radius: 0.25rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n.productSort-menuItem-3WU {\n    border-bottom: 1px solid rgb(var(--venia-global-color-gray-dark));\n}\n\n.productSort-menuItem-3WU:last-child {\n    border-bottom: none;\n}\n\n.productSort-menuItem-3WU:hover {\n    background-color: rgb(var(--venia-global-color-gray));\n}\n\n.productSort-sortButton-3u7 {\n    min-width: 6.25rem;\n}\n\n.productSort-desktopText-1bE {\n    display: none;\n}\n\n.productSort-sortText-1VK {\n    line-height: 24px;\n    font-size: var(--venia-global-fontSize-200);\n}\n\n.productSort-desktopIconWrapper-2vx {\n    transform: translateX(10px);\n}\n\n.productSort-desktopIcon-3uM {\n    stroke: rgb(var(--venia-global-color-gray-500));\n}\n\n@media (min-width: 1024px) {\n    .productSort-sortButton-3u7 {\n        border-width: 2px;\n        border-color: rgb(var(--venia-global-color-gray-500));\n        border-radius: 6px;\n        font-weight: var(--venia-global-fontWeight-normal);\n        text-transform: none;\n    }\n\n    .productSort-mobileText-2mg {\n        display: none;\n    }\n\n    .productSort-desktopText-1bE {\n        display: inline-flex;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "productSort-root-2ro",
	"menu": "productSort-menu-1eo",
	"menuItem": "productSort-menuItem-3WU",
	"sortButton": "productSort-sortButton-3u7 " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../components/Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_lowPriority"] + "",
	"desktopText": "productSort-desktopText-1bE",
	"sortText": "productSort-sortText-1VK",
	"desktopIconWrapper": "productSort-desktopIconWrapper-2vx " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css").locals["root"] + "",
	"desktopIcon": "productSort-desktopIcon-3uM " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css").locals["icon"] + "",
	"mobileText": "productSort-mobileText-2mg"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ProductSort/sortItem.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ProductSort/sortItem.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sortItem-root-4QV {\n    align-items: center;\n    display: flex;\n    width: 100%;\n}\n\n.sortItem-content-3Jx {\n    align-items: center;\n    display: grid;\n    gap: 0.75rem;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr;\n    height: 2.5rem;\n    padding: 0 0.75rem;\n    width: 100%;\n}\n\n.sortItem-text-3uU {\n    text-align: left;\n    white-space: nowrap;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "sortItem-root-4QV",
	"content": "sortItem-content-3Jx",
	"text": "sortItem-text-3uU"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/SearchPage/searchPage.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/SearchPage/searchPage.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\n    --search-sidebar-width: 325px;\n}\n\n.searchPage-root-pgQ {\n    padding: 1rem;\n}\n\n.searchPage-noResult-Zxz {\n    display: flex;\n}\n\n.searchPage-headerButtons-v21 {\n    display: flex;\n    flex-basis: 100%;\n    justify-content: center;\n    margin: 1rem 0;\n}\n\n.searchPage-heading-1kN {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.searchPage-searchInfo-1PB {\n    line-height: var(--venia-global-typography-heading-lineHeight);\n    margin: 2.5rem 0 1rem;\n    max-width: 75vw;\n}\n\n.searchPage-totalPages-Rlm {\n    margin-left: 0.5rem;\n}\n\n.searchPage-headingHighlight-12s {\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.searchPage-sidebar-Znr {\n    display: none;\n}\n\n@media (min-width: 1024px) {\n    .searchPage-root-pgQ {\n        display: flex;\n        flex-wrap: nowrap;\n    }\n\n    .searchPage-heading-1kN {\n        justify-content: space-between;\n        flex-wrap: nowrap;\n        align-items: center;\n    }\n\n    .searchPage-searchInfo-1PB {\n        margin: 0;\n        flex-basis: 100%;\n    }\n\n    .searchPage-headerButtons-v21 {\n        justify-content: flex-end;\n    }\n\n    .searchPage-sidebar-Znr {\n        display: flex;\n        align-self: flex-start;\n        width: var(--search-sidebar-width);\n        padding-top: 4rem;\n    }\n\n    .searchPage-searchContent-1Ec {\n        flex-grow: 1;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "searchPage-root-pgQ",
	"noResult": "searchPage-noResult-Zxz",
	"headerButtons": "searchPage-headerButtons-v21",
	"heading": "searchPage-heading-1kN",
	"searchInfo": "searchPage-searchInfo-1PB",
	"totalPages": "searchPage-totalPages-Rlm",
	"headingHighlight": "searchPage-headingHighlight-12s",
	"sidebar": "searchPage-sidebar-Znr",
	"searchContent": "searchPage-searchContent-1Ec"
};

/***/ })

}]);
//# sourceMappingURL=vendors~RootCmp_SEARCH__default.f9e1dcc5dae17d448265.js.map