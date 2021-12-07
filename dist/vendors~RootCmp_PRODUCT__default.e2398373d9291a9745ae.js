(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~RootCmp_PRODUCT__default"],{

/***/ "./node_modules/@magento/peregrine/lib/hooks/useCarousel.js":
/*!******************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/hooks/useCarousel.js ***!
  \******************************************************************/
/*! exports provided: useCarousel */
/*! exports used: useCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



const sortImages = (images = []) => images.filter(({
  disabled
}) => !disabled).sort((a, b) => a.position - b.position);
/**
 * A hook for interacting with the state of a carousel of images.
 *
 * @param {Array} images an array of image objects
 * @param {number} startIndex the index at which to start the carousel
 */


const useCarousel = (images = [], startIndex = 0) => {
  _s();

  const [activeItemIndex, setActiveItemIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(startIndex);
  const sortedImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => sortImages(images), [images]);
  const handlePrevious = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    // If we're on the first image we want to go to the last.
    setActiveItemIndex(prevIndex => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return images.length - 1;
      }
    });
  }, [images]);
  const handleNext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    // If we're on the last image we want to go to the first.
    setActiveItemIndex(prevIndex => (prevIndex + 1) % images.length);
  }, [images]);
  const api = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    handlePrevious,
    handleNext,
    setActiveItemIndex
  }), [handlePrevious, handleNext, setActiveItemIndex]);
  const state = {
    activeItemIndex,
    sortedImages
  };
  return [state, api];
};

_s(useCarousel, "MujJxi8PidUgv1L51lzfdJUUYkg=");

/***/ }),

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

/***/ "./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js":
/*!************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js ***!
  \************************************************************************/
/*! exports provided: useScrollIntoView */
/*! exports used: useScrollIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useScrollIntoView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const OPTIONS_DEFAULTS = {
  behavior: 'smooth',
  block: 'center'
};
/**
 * Scrolls a ref into view on truthiness of a thing.
 *
 * @param {React.Ref} ref
 * @param {Boolean} shouldScroll allows scrolling if truthy
 * @param {OPTIONS_DEFAULTS} options https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 */

const useScrollIntoView = (ref, shouldScroll, options = OPTIONS_DEFAULTS) => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref.current && ref.current instanceof HTMLElement && shouldScroll) {
      ref.current.scrollIntoView(options);
    }
  }, [options, ref, shouldScroll]);
};

_s(useScrollIntoView, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js ***!
  \******************************************************************************/
/*! exports provided: useFormError */
/*! exports used: useFormError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFormError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_deriveErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/deriveErrorMessage */ "./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");
var _s = $RefreshSig$();



const useFormError = props => {
  _s();

  const {
    errors
  } = props;
  const derivedErrorMessage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_util_deriveErrorMessage__WEBPACK_IMPORTED_MODULE_1__[/* deriveErrorMessage */ "a"])(errors), [errors]);
  return {
    errorMessage: derivedErrorMessage
  };
};

_s(useFormError, "gxRNi0NjhepoxP44ATHAyuhTTPE=");

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

/***/ "./node_modules/@magento/peregrine/lib/talons/ProductFullDetail/useProductFullDetail.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/ProductFullDetail/useProductFullDetail.js + 2 modules ***!
  \**********************************************************************************************************/
/*! exports provided: useProductFullDetail */
/*! exports used: useProductFullDetail */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Header/cartTriggerFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/isProductConfigurable.js because of ./src/venia/components/ProductFullDetail/productFullDetail.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useProductFullDetail; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js
var findMatchingProductVariant = __webpack_require__("./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/util/appendOptionsToPayload.js

/**
 * TODO Document
 */

const appendOptionsToPayload = (payload, optionSelections, optionCodes = null) => {
  const {
    item
  } = payload;
  const {
    variants
  } = item;

  if (!optionCodes) {
    optionCodes = new Map();

    for (const option of item.configurable_options) {
      // There's a type difference in configurable option queries between
      // cart and product, casting to number is required. Can remove
      // cast once MC-29839 is resolved.
      optionCodes.set(Number(option.attribute_id), option.attribute_code);
    }
  }

  const options = Array.from(optionSelections, ([id, value]) => ({
    option_id: id,
    option_value: value
  }));
  const selectedVariant = Object(findMatchingProductVariant["a" /* findMatchingVariant */])({
    variants,
    optionCodes,
    optionSelections
  });
  if (!selectedVariant) return payload;
  Object.assign(payload, {
    options,
    parentSku: item.sku,
    item: Object.assign({}, selectedVariant.product)
  });
  return payload;
};
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/isProductConfigurable.js
var isProductConfigurable = __webpack_require__("./node_modules/@magento/peregrine/lib/util/isProductConfigurable.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js
var deriveErrorMessage = __webpack_require__("./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Header/cartTriggerFragments.gql.js
var cartTriggerFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Header/cartTriggerFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js + 1 modules
var miniCartFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductFullDetail/productFullDetail.gql.ce.js



const ADD_PRODUCT_TO_CART = client["gql"]`
    mutation AddProductToCart($cartId: String!, $product: CartItemInput!) {
        addProductsToCart(cartId: $cartId, cartItems: [$product]) {
            cart {
                id
                ...CartTriggerFragment
                ...MiniCartFragment
            }
        }
    }
    ${cartTriggerFragments_gql["a" /* CartTriggerFragment */]}
    ${miniCartFragments_gql["a" /* MiniCartFragment */]}
`;
const GET_WISHLIST_CONFIG = client["gql"]`
    query GetWishlistConfigForProductCE {
        storeConfig {
            id
            magento_wishlist_general_is_enabled
        }
    }
`;
/**
 * @deprecated - replaced by general mutation in @magento/peregrine/lib/talons/productFullDetail.js
 */

const ADD_CONFIGURABLE_MUTATION = client["gql"]`
    mutation addConfigurableProductToCart(
        $cartId: String!
        $quantity: Float!
        $sku: String!
        $parentSku: String!
    ) {
        addConfigurableProductsToCart(
            input: {
                cart_id: $cartId
                cart_items: [
                    {
                        data: { quantity: $quantity, sku: $sku }
                        parent_sku: $parentSku
                    }
                ]
            }
        ) @connection(key: "addConfigurableProductsToCart") {
            cart {
                id
                # Update the cart trigger when adding an item.
                ...CartTriggerFragment
                # Update the mini cart when adding an item.
                ...MiniCartFragment
            }
        }
    }
    ${cartTriggerFragments_gql["a" /* CartTriggerFragment */]}
    ${miniCartFragments_gql["a" /* MiniCartFragment */]}
`;
/**
 * @deprecated - replaced by general mutation in @magento/peregrine/lib/talons/productFullDetail.js
 */

const ADD_SIMPLE_MUTATION = client["gql"]`
    mutation addSimpleProductToCart(
        $cartId: String!
        $quantity: Float!
        $sku: String!
    ) {
        addSimpleProductsToCart(
            input: {
                cart_id: $cartId
                cart_items: [{ data: { quantity: $quantity, sku: $sku } }]
            }
        ) @connection(key: "addSimpleProductsToCart") {
            cart {
                id
                # Update the cart trigger when adding an item.
                ...CartTriggerFragment
                # Update the mini cart when adding an item.
                ...MiniCartFragment
            }
        }
    }
    ${cartTriggerFragments_gql["a" /* CartTriggerFragment */]}
    ${miniCartFragments_gql["a" /* MiniCartFragment */]}
`;
/* harmony default export */ var productFullDetail_gql_ce = ({
  addConfigurableProductToCartMutation: ADD_CONFIGURABLE_MUTATION,
  addProductToCartMutation: ADD_PRODUCT_TO_CART,
  addSimpleProductToCartMutation: ADD_SIMPLE_MUTATION,
  getWishlistConfigQuery: GET_WISHLIST_CONFIG
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductFullDetail/useProductFullDetail.js
var _s = $RefreshSig$();












const INITIAL_OPTION_CODES = new Map();
const INITIAL_OPTION_SELECTIONS = new Map();

const deriveOptionCodesFromProduct = product => {
  // If this is a simple product it has no option codes.
  if (!Object(isProductConfigurable["a" /* isProductConfigurable */])(product)) {
    return INITIAL_OPTION_CODES;
  } // Initialize optionCodes based on the options of the product.


  const initialOptionCodes = new Map();

  for (const _ref of product.configurable_options) {
    const {
      attribute_id,
      attribute_code
    } = _ref;
    initialOptionCodes.set(attribute_id, attribute_code);
  }

  return initialOptionCodes;
}; // Similar to deriving the initial codes for each option.


const deriveOptionSelectionsFromProduct = product => {
  if (!Object(isProductConfigurable["a" /* isProductConfigurable */])(product)) {
    return INITIAL_OPTION_SELECTIONS;
  }

  const initialOptionSelections = new Map();

  for (const _ref2 of product.configurable_options) {
    const {
      attribute_id
    } = _ref2;
    initialOptionSelections.set(attribute_id, undefined);
  }

  return initialOptionSelections;
};

const getIsMissingOptions = (product, optionSelections) => {
  // Non-configurable products can't be missing options.
  if (!Object(isProductConfigurable["a" /* isProductConfigurable */])(product)) {
    return false;
  } // Configurable products are missing options if we have fewer
  // option selections than the product has options.


  const {
    configurable_options
  } = product;
  const numProductOptions = configurable_options.length;
  const numProductSelections = Array.from(optionSelections.values()).filter(value => !!value).length;
  return numProductSelections < numProductOptions;
};

const getMediaGalleryEntries = (product, optionCodes, optionSelections) => {
  let value = [];
  const {
    media_gallery_entries,
    variants
  } = product;
  const isConfigurable = Object(isProductConfigurable["a" /* isProductConfigurable */])(product); // Selections are initialized to "code => undefined". Once we select a value, like color, the selections change. This filters out unselected options.

  const optionsSelected = Array.from(optionSelections.values()).filter(value => !!value).length > 0;

  if (!isConfigurable || !optionsSelected) {
    value = media_gallery_entries;
  } else {
    // If any of the possible variants matches the selection add that
    // variant's image to the media gallery. NOTE: This _can_, and does,
    // include variants such as size. If Magento is configured to display
    // an image for a size attribute, it will render that image.
    const item = Object(findMatchingProductVariant["a" /* findMatchingVariant */])({
      optionCodes,
      optionSelections,
      variants
    });
    value = item ? [...item.product.media_gallery_entries, ...media_gallery_entries] : media_gallery_entries;
  }

  return value;
}; // We only want to display breadcrumbs for one category on a PDP even if a
// product has multiple related categories. This function filters and selects
// one category id for that purpose.


const getBreadcrumbCategoryId = categories => {
  // Exit if there are no categories for this product.
  if (!categories || !categories.length) {
    return;
  }

  const breadcrumbSet = new Set();
  categories.forEach(({
    breadcrumbs
  }) => {
    // breadcrumbs can be `null`...
    (breadcrumbs || []).forEach(({
      category_id
    }) => breadcrumbSet.add(category_id));
  }); // Until we can get the single canonical breadcrumb path to a product we
  // will just return the first category id of the potential leaf categories.

  const leafCategory = categories.find(category => !breadcrumbSet.has(category.id)); // If we couldn't find a leaf category then just use the first category
  // in the list for this product.

  return leafCategory.id || categories[0].id;
};

const getConfigPrice = (product, optionCodes, optionSelections) => {
  let value;
  const {
    variants
  } = product;
  const isConfigurable = Object(isProductConfigurable["a" /* isProductConfigurable */])(product);
  const optionsSelected = Array.from(optionSelections.values()).filter(value => !!value).length > 0;

  if (!isConfigurable || !optionsSelected) {
    value = product.price.regularPrice.amount;
  } else {
    const item = Object(findMatchingProductVariant["a" /* findMatchingVariant */])({
      optionCodes,
      optionSelections,
      variants
    });
    value = item ? item.product.price.regularPrice.amount : product.price.regularPrice.amount;
  }

  return value;
};

const SUPPORTED_PRODUCT_TYPES = ['SimpleProduct', 'ConfigurableProduct'];
/**
 * @param {GraphQLDocument} props.addConfigurableProductToCartMutation - configurable product mutation
 * @param {GraphQLDocument} props.addSimpleProductToCartMutation - configurable product mutation
 * @param {Object.<string, GraphQLDocument>} props.operations - collection of operation overrides merged into defaults
 * @param {Object} props.product - the product, see RootComponents/Product
 *
 * @returns {{
 *  breadcrumbCategoryId: string|undefined,
 *  errorMessage: string|undefined,
 *  handleAddToCart: func,
 *  handleSelectionChange: func,
 *  handleSetQuantity: func,
 *  isAddToCartDisabled: boolean,
 *  isSupportedProductType: boolean,
 *  mediaGalleryEntries: array,
 *  productDetails: object,
 *  quantity: number
 * }}
 */

const useProductFullDetail = props => {
  _s();

  const {
    addConfigurableProductToCartMutation,
    addSimpleProductToCartMutation,
    product
  } = props;
  const hasDeprecatedOperationProp = !!(addConfigurableProductToCartMutation || addSimpleProductToCartMutation);
  const operations = Object(shallowMerge["a" /* default */])(productFullDetail_gql_ce, props.operations);
  const productType = product.__typename;
  const isSupportedProductType = SUPPORTED_PRODUCT_TYPES.includes(productType);
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const {
    data: storeConfigData
  } = Object(client["useQuery"])(operations.getWishlistConfigQuery, {
    fetchPolicy: 'cache-and-network'
  });
  const [addConfigurableProductToCart, {
    error: errorAddingConfigurableProduct,
    loading: isAddConfigurableLoading
  }] = Object(client["useMutation"])(addConfigurableProductToCartMutation || operations.addConfigurableProductToCartMutation);
  const [addSimpleProductToCart, {
    error: errorAddingSimpleProduct,
    loading: isAddSimpleLoading
  }] = Object(client["useMutation"])(addSimpleProductToCartMutation || operations.addSimpleProductToCartMutation);
  const [addProductToCart, {
    error: errorAddingProductToCart,
    loading: isAddProductLoading
  }] = Object(client["useMutation"])(operations.addProductToCartMutation);
  const breadcrumbCategoryId = Object(react["useMemo"])(() => getBreadcrumbCategoryId(product.categories), [product.categories]);
  const derivedOptionSelections = Object(react["useMemo"])(() => deriveOptionSelectionsFromProduct(product), [product]);
  const [optionSelections, setOptionSelections] = Object(react["useState"])(derivedOptionSelections);
  const derivedOptionCodes = Object(react["useMemo"])(() => deriveOptionCodesFromProduct(product), [product]);
  const [optionCodes] = Object(react["useState"])(derivedOptionCodes);
  const isMissingOptions = Object(react["useMemo"])(() => getIsMissingOptions(product, optionSelections), [product, optionSelections]);
  const mediaGalleryEntries = Object(react["useMemo"])(() => getMediaGalleryEntries(product, optionCodes, optionSelections), [product, optionCodes, optionSelections]); // The map of ids to values (and their uids)
  // For example:
  // { "179" => [{ uid: "abc", value_index: 1 }, { uid: "def", value_index: 2 }]}

  const attributeIdToValuesMap = Object(react["useMemo"])(() => {
    const map = new Map(); // For simple items, this will be an empty map.

    const options = product.configurable_options || [];

    for (const _ref3 of options) {
      const {
        attribute_id,
        values
      } = _ref3;
      map.set(attribute_id, values);
    }

    return map;
  }, [product.configurable_options]); // An array of selected option uids. Useful for passing to mutations.
  // For example:
  // ["abc", "def"]

  const selectedOptionsArray = Object(react["useMemo"])(() => {
    const selectedOptions = [];
    optionSelections.forEach((value, key) => {
      const values = attributeIdToValuesMap.get(key);
      const selectedValue = values.find(item => item.value_index === value);

      if (selectedValue) {
        selectedOptions.push(selectedValue.uid);
      }
    });
    return selectedOptions;
  }, [attributeIdToValuesMap, optionSelections]);
  const handleAddToCart = Object(react["useCallback"])(async formValues => {
    const {
      quantity
    } = formValues;
    /*
        @deprecated in favor of general addProductsToCart mutation. Will support until the next MAJOR.
     */

    if (hasDeprecatedOperationProp) {
      const payload = {
        item: product,
        productType,
        quantity
      };

      if (Object(isProductConfigurable["a" /* isProductConfigurable */])(product)) {
        appendOptionsToPayload(payload, optionSelections, optionCodes);
      }

      if (isSupportedProductType) {
        const variables = {
          cartId,
          parentSku: payload.parentSku,
          product: payload.item,
          quantity: payload.quantity,
          sku: payload.item.sku
        }; // Use the proper mutation for the type.

        if (productType === 'SimpleProduct') {
          try {
            await addSimpleProductToCart({
              variables
            });
          } catch {
            return;
          }
        } else if (productType === 'ConfigurableProduct') {
          try {
            await addConfigurableProductToCart({
              variables
            });
          } catch {
            return;
          }
        }
      } else {
        console.error('Unsupported product type. Cannot add to cart.');
      }
    } else {
      const variables = {
        cartId,
        product: {
          sku: product.sku,
          quantity
        }
      };

      if (selectedOptionsArray.length) {
        variables.product.selected_options = selectedOptionsArray;
      }

      try {
        await addProductToCart({
          variables
        });
      } catch {
        return;
      }
    }
  }, [addConfigurableProductToCart, addProductToCart, addSimpleProductToCart, cartId, hasDeprecatedOperationProp, isSupportedProductType, optionCodes, optionSelections, product, productType, selectedOptionsArray]);
  const handleSelectionChange = Object(react["useCallback"])((optionId, selection) => {
    // We must create a new Map here so that React knows that the value
    // of optionSelections has changed.
    const nextOptionSelections = new Map([...optionSelections]);
    nextOptionSelections.set(optionId, selection);
    setOptionSelections(nextOptionSelections);
  }, [optionSelections]);
  const productPrice = Object(react["useMemo"])(() => getConfigPrice(product, optionCodes, optionSelections), [product, optionCodes, optionSelections]); // Normalization object for product details we need for rendering.

  const productDetails = {
    description: product.description,
    name: product.name,
    price: productPrice,
    sku: product.sku
  };
  const derivedErrorMessage = Object(react["useMemo"])(() => Object(deriveErrorMessage["a" /* deriveErrorMessage */])([errorAddingSimpleProduct, errorAddingConfigurableProduct, errorAddingProductToCart]), [errorAddingConfigurableProduct, errorAddingProductToCart, errorAddingSimpleProduct]);
  const wishlistItemOptions = Object(react["useMemo"])(() => {
    const options = {
      quantity: 1,
      sku: product.sku
    };

    if (productType === 'ConfigurableProduct') {
      options.selected_options = selectedOptionsArray;
    }

    return options;
  }, [product, productType, selectedOptionsArray]);
  const wishlistButtonProps = {
    buttonText: isSelected => isSelected ? formatMessage({
      id: 'wishlistButton.addedText',
      defaultMessage: 'Added to Favorites'
    }) : formatMessage({
      id: 'wishlistButton.addText',
      defaultMessage: 'Add to Favorites'
    }),
    item: wishlistItemOptions,
    storeConfig: storeConfigData ? storeConfigData.storeConfig : {}
  };
  return {
    breadcrumbCategoryId,
    errorMessage: derivedErrorMessage,
    handleAddToCart,
    handleSelectionChange,
    isAddToCartDisabled: isMissingOptions || isAddConfigurableLoading || isAddSimpleLoading || isAddProductLoading,
    isSupportedProductType,
    mediaGalleryEntries,
    shouldShowWishlistButton: isSignedIn && storeConfigData && !!storeConfigData.storeConfig.magento_wishlist_general_is_enabled,
    productDetails,
    wishlistButtonProps,
    wishlistItemOptions
  };
};

_s(useProductFullDetail, "IeZpe81i4TI4j4Vm+DoPsdbl8xA=", false, function () {
  return [cart["b" /* useCartContext */], user["b" /* useUserContext */], useIntl["a" /* default */], client["useQuery"], client["useMutation"], client["useMutation"], client["useMutation"]];
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/ProductImageCarousel/useThumbnail.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/ProductImageCarousel/useThumbnail.js ***!
  \*****************************************************************************************/
/*! exports provided: useThumbnail */
/*! exports used: useThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useThumbnail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const useThumbnail = props => {
  _s();

  const {
    itemIndex,
    onClickHandler
  } = props;
  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    onClickHandler(itemIndex);
  }, [onClickHandler, itemIndex]);
  return {
    handleClick
  };
};

_s(useThumbnail, "PRIOWs9bezaAbp8UlGmbaZMoYYA=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js ***!
  \********************************************************************************/
/*! exports provided: findMatchingVariant */
/*! exports used: findMatchingVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findMatchingVariant; });
/**
 * TODO Document
 */
const findMatchingVariant = ({
  variants,
  optionCodes,
  optionSelections
}) => {
  return variants.find(({
    attributes,
    product
  }) => {
    const customAttributes = (attributes || []).reduce((map, {
      code,
      value_index
    }) => new Map(map).set(code, value_index), new Map());

    for (const [id, value] of optionSelections) {
      const code = optionCodes.get(id);
      const matchesStandardAttribute = product[code] === value;
      const matchesCustomAttribute = customAttributes.get(code) === value; // if any option selection fails to match any standard attribute
      // and also fails to match any custom attribute
      // then this isn't the correct variant

      if (!matchesStandardAttribute && !matchesCustomAttribute) {
        return false;
      }
    } // otherwise, every option selection matched
    // and this is the correct variant


    return true;
  });
};

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/util/isProductConfigurable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/util/isProductConfigurable.js ***!
  \***************************************************************************/
/*! exports provided: isProductConfigurable */
/*! exports used: isProductConfigurable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isProductConfigurable; });
// TODO: Move/merge with product util in peregrine?
const isProductConfigurable = product => product.__typename === 'ConfigurableProduct';

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/classify.js":
/*!********************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/classify.js + 1 modules ***!
  \********************************************************************/
/*! exports provided: mergeClasses, useStyle, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: mergeClasses, useStyle

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/util/getDisplayName.js
const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

/* harmony default export */ var util_getDisplayName = (getDisplayName);
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/classify.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const classify = defaultClasses => WrappedComponent => {
  var _class, _temp;

  return _temp = _class = class extends react["Component"] {
    render() {
      const _this$props = this.props,
            {
        className,
        classes
      } = _this$props,
            restProps = _objectWithoutProperties(_this$props, ["className", "classes"]);

      const classNameAsObject = className ? {
        root: className
      } : null;
      const finalClasses = Object(shallowMerge["a" /* default */])(defaultClasses, classNameAsObject, classes);
      return react_default.a.createElement(WrappedComponent, _extends({}, restProps, {
        classes: finalClasses
      }));
    }

  }, _defineProperty(_class, "displayName", `Classify(${util_getDisplayName(WrappedComponent)})`), _temp;
};


/* harmony default export */ var lib_classify = __webpack_exports__["a"] = (classify);

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js + 1 modules ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/check-square.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/square.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
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

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules
var Field_message = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/message.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check-square.js
var check_square = __webpack_require__("./node_modules/react-feather/dist/icons/check-square.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/square.js
var square = __webpack_require__("./node_modules/react-feather/dist/icons/square.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css
var Checkbox_checkbox = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css");
var checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_checkbox);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(checkbox_default.a, options);



/* harmony default export */ var components_Checkbox_checkbox = (checkbox_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/* TODO: change lint config to use `label-has-associated-control` */

/* eslint-disable jsx-a11y/label-has-for */

const checkedIcon = react_default.a.createElement(check_square["a" /* default */], null);
const uncheckedIcon = react_default.a.createElement(square["a" /* default */], null);

const Checkbox = props => {
  _s();

  const {
    ariaLabel,
    classes: propClasses,
    field,
    fieldValue,
    id,
    label,
    message
  } = props,
        rest = _objectWithoutProperties(props, ["ariaLabel", "classes", "field", "fieldValue", "id", "label", "message"]);

  const fieldApi = Object(esm["l" /* useFieldApi */])(field);
  const fieldState = Object(esm["m" /* useFieldState */])(field);
  const classes = Object(shallowMerge["a" /* default */])(components_Checkbox_checkbox, propClasses);
  const icon = fieldState.value ? checkedIcon : uncheckedIcon;
  Object(react["useEffect"])(() => {
    if (fieldValue != null && fieldValue !== fieldState.value) {
      fieldApi.setValue(fieldValue);
    }
  }, [fieldApi, fieldState.value, fieldValue]);
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("label", {
    "aria-label": ariaLabel,
    className: classes.root,
    htmlFor: id
  }, react_default.a.createElement(esm["b" /* Checkbox */], _extends({}, rest, {
    className: classes.input,
    field: field,
    id: id
  })), react_default.a.createElement("span", {
    className: classes.icon
  }, icon), react_default.a.createElement("span", {
    className: classes.label
  }, label)), react_default.a.createElement(Field_message["a" /* default */], {
    fieldState: fieldState
  }, message));
};

_s(Checkbox, "qbwAa/wJ0FrEbgVzm0eDzCZ1L7I=", false, function () {
  return [esm["l" /* useFieldApi */], esm["m" /* useFieldState */], shallowMerge["a" /* default */]];
});

_c = Checkbox;
/* harmony default export */ var lib_components_Checkbox_checkbox = __webpack_exports__["a"] = (Checkbox);
Checkbox.propTypes = {
  ariaLabel: prop_types["string"],
  classes: Object(prop_types["shape"])({
    icon: prop_types["string"],
    input: prop_types["string"],
    label: prop_types["string"],
    message: prop_types["string"],
    root: prop_types["string"]
  }),
  field: prop_types["string"].isRequired,
  id: prop_types["string"],
  label: prop_types["node"].isRequired,
  message: prop_types["node"]
};
/* eslint-enable jsx-a11y/label-has-for */

var _c;

$RefreshReg$(_c, "Checkbox");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Field/field.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Field/field.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Field/field.css
var field = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/field.css");
var field_default = /*#__PURE__*/__webpack_require__.n(field);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(field_default.a, options);



/* harmony default export */ var Field_field = (field_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js
var _s = $RefreshSig$();







const Field = props => {
  _s();

  const {
    children,
    id,
    label,
    optional
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(Field_field, props.classes);
  const optionalSymbol = optional ? react_default.a.createElement("span", {
    className: classes.optional
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'field.optional',
    defaultMessage: 'Optional'
  })) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("label", {
    className: classes.label,
    htmlFor: id
  }, label, optionalSymbol), children);
};

_s(Field, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Field;
Field.propTypes = {
  children: prop_types["node"],
  classes: Object(prop_types["shape"])({
    label: prop_types["string"],
    root: prop_types["string"]
  }),
  id: prop_types["string"],
  label: prop_types["node"],
  optional: prop_types["bool"]
};
/* harmony default export */ var components_Field_field = __webpack_exports__["a"] = (Field);

var _c;

$RefreshReg$(_c, "Field");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/FormError/formError.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 3 modules ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js
var useFormError = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js
var useScrollIntoView = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css
var ErrorMessage_errorMessage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css");
var errorMessage_default = /*#__PURE__*/__webpack_require__.n(ErrorMessage_errorMessage);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(errorMessage_default.a, options);



/* harmony default export */ var components_ErrorMessage_errorMessage = (errorMessage_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.js
var _s = $RefreshSig$();





const ErrorMessage = react_default.a.forwardRef(_c = _s((props, ref) => {
  _s();

  const {
    children
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(components_ErrorMessage_errorMessage, props.classes);
  return react_default.a.createElement("div", {
    className: classes.root,
    ref: ref
  }, react_default.a.createElement("span", {
    className: classes.errorMessage
  }, children));
}, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
}));
_c2 = ErrorMessage;
/* harmony default export */ var lib_components_ErrorMessage_errorMessage = (ErrorMessage);
ErrorMessage.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    errorMessage: prop_types["string"]
  }),
  children: prop_types["node"]
};

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage$React.forwardRef");
$RefreshReg$(_c2, "ErrorMessage");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css
var formError = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css");
var formError_default = /*#__PURE__*/__webpack_require__.n(formError);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.css

            

var formError_options = {"injectType":"styleTag"};

formError_options.insert = "head";
formError_options.singleton = false;

var formError_update = injectStylesIntoStyleTag_default()(formError_default.a, formError_options);



/* harmony default export */ var FormError_formError = (formError_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js
var formError_s = $RefreshSig$();









const FormError = props => {
  formError_s();

  const {
    classes: propClasses,
    errors,
    scrollOnError
  } = props;
  const talonProps = Object(useFormError["a" /* useFormError */])({
    errors
  });
  const {
    errorMessage
  } = talonProps;
  const errorRef = Object(react["useRef"])(null);
  Object(useScrollIntoView["a" /* useScrollIntoView */])(errorRef, scrollOnError && errorMessage);
  const classes = Object(shallowMerge["a" /* default */])(FormError_formError, propClasses);
  return errorMessage ? react_default.a.createElement(lib_components_ErrorMessage_errorMessage, {
    classes: classes,
    ref: errorRef
  }, errorMessage) : null;
};

formError_s(FormError, "S24ooxoOmYH1dH3ckh7POYEcVXE=", false, function () {
  return [useFormError["a" /* useFormError */], useScrollIntoView["a" /* useScrollIntoView */], shallowMerge["a" /* default */]];
});

formError_c = FormError;
/* harmony default export */ var components_FormError_formError = __webpack_exports__["a"] = (FormError);
FormError.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    errorMessage: prop_types["string"]
  }),
  errors: Object(prop_types["arrayOf"])(Object(prop_types["instanceOf"])(Error)),
  scrollOnError: prop_types["bool"]
};
FormError.defaultProps = {
  scrollOnError: true
};

var formError_c;

$RefreshReg$(formError_c, "FormError");

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

/***/ "./node_modules/@magento/venia-ui/lib/components/Select/select.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Select/select.js + 1 modules ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/fieldIcons.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-down.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Select/select.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
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

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/fieldIcons.js + 1 modules
var fieldIcons = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/fieldIcons.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules
var Field_message = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/message.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Select/select.css
var Select_select = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Select/select.css");
var select_default = /*#__PURE__*/__webpack_require__.n(Select_select);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Select/select.css

            

var select_options = {"injectType":"styleTag"};

select_options.insert = "head";
select_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(select_default.a, select_options);



/* harmony default export */ var components_Select_select = (select_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-down.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Select/select.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const arrow = react_default.a.createElement(icon["a" /* default */], {
  src: chevron_down["a" /* default */],
  size: 24
});

const Select = props => {
  _s();

  const {
    before,
    classes: propClasses,
    field,
    items,
    message
  } = props,
        rest = _objectWithoutProperties(props, ["before", "classes", "field", "items", "message"]);

  const fieldState = Object(esm["m" /* useFieldState */])(field);
  const classes = Object(shallowMerge["a" /* default */])(components_Select_select, propClasses);
  const inputClass = fieldState.error ? classes.input_error : classes.input;
  const options = items.map(({
    disabled = null,
    hidden = null,
    label,
    value,
    key = value
  }) => react_default.a.createElement(esm["d" /* Option */], {
    key: key,
    disabled: disabled,
    hidden: hidden,
    value: value
  }, label || (value != null ? value : '')));
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(fieldIcons["a" /* default */], {
    after: arrow,
    before: before
  }, react_default.a.createElement(esm["h" /* Select */], _extends({}, rest, {
    className: inputClass,
    field: field
  }), options)), react_default.a.createElement(Field_message["a" /* default */], {
    fieldState: fieldState
  }, message));
};

_s(Select, "YVolvaJOdmCJ2aIvRI1raY3SMHs=", false, function () {
  return [esm["m" /* useFieldState */], shallowMerge["a" /* default */]];
});

_c = Select;
/* harmony default export */ var lib_components_Select_select = __webpack_exports__["a"] = (Select);
Select.propTypes = {
  before: prop_types["node"],
  classes: Object(prop_types["shape"])({
    input: prop_types["string"]
  }),
  field: prop_types["string"].isRequired,
  items: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    key: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
    label: prop_types["string"],
    value: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]])
  })),
  message: prop_types["node"]
};

var _c;

$RefreshReg$(_c, "Select");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js + 1 modules ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
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

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules
var Field_message = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/message.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css
var textArea = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css");
var textArea_default = /*#__PURE__*/__webpack_require__.n(textArea);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(textArea_default.a, options);



/* harmony default export */ var TextArea_textArea = (textArea_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const TextArea = props => {
  _s();

  const {
    classes: propClasses,
    field,
    message
  } = props,
        rest = _objectWithoutProperties(props, ["classes", "field", "message"]);

  const fieldState = Object(esm["m" /* useFieldState */])(field);
  const classes = Object(shallowMerge["a" /* default */])(TextArea_textArea, propClasses);
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(esm["j" /* TextArea */], _extends({}, rest, {
    className: classes.input,
    field: field
  })), react_default.a.createElement(Field_message["a" /* default */], {
    fieldState: fieldState
  }, message));
};

_s(TextArea, "YVolvaJOdmCJ2aIvRI1raY3SMHs=", false, function () {
  return [esm["m" /* useFieldState */], shallowMerge["a" /* default */]];
});

_c = TextArea;
/* harmony default export */ var components_TextArea_textArea = __webpack_exports__["a"] = (TextArea);
TextArea.defaultProps = {
  cols: 40,
  rows: 4,
  wrap: 'hard'
};
TextArea.propTypes = {
  classes: Object(prop_types["shape"])({
    input: prop_types["string"]
  }),
  cols: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  field: prop_types["string"].isRequired,
  message: prop_types["node"],
  rows: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  wrap: Object(prop_types["oneOf"])(['hard', 'soft'])
};

var _c;

$RefreshReg$(_c, "TextArea");

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Slider/slider.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/pagebuilder/lib/ContentTypes/Slider/slider.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Banner/banner.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css"), "");

// Module
exports.push([module.i, ".slider-root-1rx {\n    display: block;\n    position: relative;\n    touch-action: pan-y;\n    user-select: none;\n    --leftViewportElement: -99999px;\n}\n.slider-root-1rx .slick-current {\n    --leftViewportElement: 0;\n}\n\n.slider-bannerRoot-26R {\n    min-height: inherit;\n}\n.slider-bannerLink-17j {\n    min-height: inherit;\n}\n.slider-bannerWrapper-ADk {\n    min-height: inherit;\n}\n.slider-bannerPosterOverlay-1Y6 {\n    min-height: inherit;\n}\n\n.slider-root-1rx .slick-slider {\n    min-height: inherit;\n}\n\n.slider-root-1rx .slick-list {\n    display: block;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n    position: relative;\n    min-height: inherit;\n}\n\n.slider-root-1rx .slick-list:focus {\n    outline: none;\n}\n\n.slider-root-1rx .slick-list.dragging {\n    cursor: pointer;\n}\n\n.slider-root-1rx .slick-track {\n    display: block;\n    left: 0;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    top: 0;\n    min-height: inherit;\n}\n\n.slider-root-1rx .slick-track .slick-slide > div {\n    min-height: inherit;\n}\n\n.slider-root-1rx .slick-track:before,\n.slider-root-1rx .slick-track:after {\n    content: '';\n    display: table;\n}\n\n.slider-root-1rx .slick-track:after {\n    clear: both;\n}\n\n.slick-loading .slick-track {\n    visibility: hidden;\n}\n\n.slider-root-1rx .slick-slide {\n    display: none;\n    float: left;\n    height: 100%;\n    min-height: inherit;\n}\n\n[dir='rtl'] .slider-root-1rx .slick-slide {\n    float: right;\n}\n\n.slider-root-1rx .slick-slide img {\n    display: block;\n}\n.slider-root-1rx .slick-slide.slick-loading img {\n    display: none;\n}\n\n.slider-root-1rx .slick-slide.dragging img {\n    pointer-events: none;\n}\n\n.slick-initialized .slick-slide {\n    display: block;\n}\n\n.slick-loading .slick-slide {\n    visibility: hidden;\n}\n\n.slider-root-1rx .slick-vertical .slick-loading {\n    border: 1px solid transparent;\n    display: block;\n    height: auto;\n}\n\n.slider-root-1rx .slick-slider .slick-track,\n.slider-root-1rx .slick-slider .slick-list {\n    transform: translate3d(0, 0, 0);\n}\n\n.slider-root-1rx .slick-arrow.slick-hidden {\n    display: none;\n}\n\n.slider-root-1rx .slick-prev,\n.slider-root-1rx .slick-next {\n    opacity: 0;\n    transition: 0.3s;\n}\n.slider-root-1rx:hover .slick-prev,\n.slider-root-1rx:hover .slick-next {\n    opacity: 1;\n}\n\n.slider-root-1rx .slick-prev {\n    left: 1.6rem;\n}\n.slider-root-1rx .slick-prev:before {\n    content: url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><line x1='19' y1='12' x2='5' y2='12' /><polyline points='12 19 5 12 12 5' /></svg>\");\n}\n\n.slider-root-1rx .slick-next {\n    right: 1.6rem;\n}\n.slider-root-1rx .slick-next:before {\n    content: url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><line x1='5' y1='12' x2='19' y2='12' /><polyline points='12 5 19 12 12 19' /></svg>\");\n}\n\n.slider-root-1rx .slick-prev,\n.slider-root-1rx .slick-next {\n    background: rgba(252, 252, 252, 0.75);\n    border: none;\n    border-radius: 50px;\n    color: transparent;\n    cursor: pointer;\n    display: block;\n    font-size: 0;\n    height: 40px;\n    line-height: 0;\n    outline: none;\n    padding: 0;\n    position: absolute;\n    top: 50%;\n    transform: translate(0, -50%);\n    width: 40px;\n    z-index: 101;\n}\n\n.slider-root-1rx .slick-dots {\n    display: block;\n    list-style: none;\n    margin: 0;\n    padding: 20px 0 18px 0;\n    text-align: center;\n    width: 100%;\n}\n.slider-root-1rx .slick-dots li {\n    cursor: pointer;\n    display: inline-block;\n    height: 15px;\n    margin: 0 6px;\n    padding: 0;\n    position: relative;\n    vertical-align: middle;\n    width: 15px;\n}\n.slider-root-1rx .slick-dots li button {\n    outline: none;\n    background: rgb(var(--venia-global-color-gray-dark));\n    filter: brightness(100%);\n    border-radius: 10px;\n    box-shadow: none;\n    cursor: pointer;\n    display: block;\n    height: 15px;\n    padding: 0;\n    text-indent: -99999px;\n    transition: 0.5s;\n    width: 15px;\n}\n.slider-root-1rx .slick-dots li button:hover {\n    filter: brightness(80%);\n}\n\n.slider-root-1rx .slick-dots li button:active,\n.slider-root-1rx .slick-dots li button:focus,\n.slider-root-1rx .slick-dots li button:not(.primary) {\n    box-shadow: none;\n}\n\n.slider-root-1rx .slick-dots li.slick-active button {\n    background: #1c1918;\n}\n\n.slider-root-1rx .slick-current {\n    z-index: 1;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "slider-root-1rx",
	"bannerRoot": "slider-bannerRoot-26R " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Banner/banner.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css").locals["root"] + "",
	"bannerLink": "slider-bannerLink-17j " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Banner/banner.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css").locals["link"] + "",
	"bannerWrapper": "slider-bannerWrapper-ADk " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Banner/banner.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css").locals["wrapper"] + "",
	"bannerPosterOverlay": "slider-bannerPosterOverlay-1Y6 " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Banner/banner.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/pagebuilder/lib/ContentTypes/Banner/banner.css").locals["posterOverlay"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".checkbox-root-ZAW {\n    --stroke: var(--venia-global-color-gray-600);\n    align-items: center;\n    color: rgb(var(--venia-global-color-gray-900));\n    display: grid;\n    gap: calc(0.875rem - 5px);\n    grid-auto-flow: column;\n    grid-template-areas: 'input label';\n    grid-template-columns: min-content 1fr;\n    justify-items: center;\n    line-height: 1.5rem;\n}\n\n.checkbox-input-h8k {\n    -webkit-appearance: none;\n    background: none;\n    border: 2px solid transparent;\n    border-radius: 4px;\n    cursor: pointer;\n    grid-area: input;\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3R- {\n    grid-area: input;\n    height: 1.5rem;\n    pointer-events: none;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3R- svg {\n    stroke: rgb(var(--stroke));\n}\n\n.checkbox-label-3c_ {\n    cursor: pointer;\n    font-size: var(--venia-typography-body-M-fontSize);\n    grid-area: label;\n    justify-self: start;\n}\n\n.checkbox-input-h8k:disabled {\n    cursor: default;\n}\n\n/* When the input is disabled, update the cursor on the sibling label element. */\n.checkbox-input-h8k:disabled ~ .checkbox-label-3c_ {\n    cursor: default;\n}\n\n.checkbox-input-h8k:checked:enabled + .checkbox-icon-3R- {\n    --stroke: var(--venia-brand-color-1-700);\n}\n\n.checkbox-input-h8k:active:enabled,\n.checkbox-input-h8k:focus:enabled {\n    box-shadow: -3px 3px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "checkbox-root-ZAW",
	"input": "checkbox-input-h8k",
	"icon": "checkbox-icon-3R-",
	"label": "checkbox-label-3c_"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ErrorMessage/errorMessage.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".errorMessage-root-1cS {\n}\n\n.errorMessage-errorMessage-3sE {\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-typography-body-S-fontSize);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    line-height: var(--venia-global-lineHeight-300);\n}\n", ""]);

// Exports
exports.locals = {
	"root": "errorMessage-root-1cS",
	"errorMessage": "errorMessage-errorMessage-3sE"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/FormError/formError.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../components/ProductOptions/option.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../CartPage/ProductListing/quantity.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.css"), "");

// Module
exports.push([module.i, ".productFullDetail-root-3BX {\n    padding: 1rem 0;\n}\n\n@media (min-width: 1024px) {\n    .productFullDetail-root-3BX {\n        align-items: start;\n        display: grid;\n        grid-auto-flow: row;\n        grid-template-areas:\n            'images title'\n            'images errors'\n            'images options'\n            'images quantity'\n            'images cart'\n            'images .';\n        grid-template-columns: 1.5625fr 1fr;\n        grid-template-rows: repeat(5, min-content) 1fr [fold];\n        padding: 2.5rem 1rem;\n    }\n}\n\n.productFullDetail-section-1-E {\n    border-color: rgb(var(--venia-global-color-border));\n    border-style: solid;\n    border-width: 0 0 1px;\n    margin: 0 1.5rem;\n    padding: 1.5rem 0;\n}\n\n.productFullDetail-sectionTitle-1_o {\n    align-items: center;\n    display: flex;\n    font-size: 1rem;\n    font-weight: 600;\n    line-height: 1.5;\n    margin-bottom: 1.5rem;\n}\n\n.productFullDetail-title-1zr {\n    align-items: center;\n    display: grid;\n    grid-area: title;\n    grid-gap: 1rem;\n    grid-template-columns: 1fr max-content;\n    line-height: 1.5;\n    padding: 1rem 1.5rem;\n}\n\n@media (min-width: 1024px) {\n    .productFullDetail-title-1zr {\n        padding: 1.5rem;\n    }\n}\n\n.productFullDetail-productName-3K4 {\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n@media (min-width: 1024px) {\n    .productFullDetail-productName-3K4 {\n        font-size: 1.3125rem;\n        font-weight: 400;\n    }\n}\n\n.productFullDetail-productPrice-3cO {\n    display: block;\n}\n\n.productFullDetail-imageCarousel-j4Y {\n    grid-area: images;\n    grid-column: 1 / 2;\n    grid-row: 1 / fold;\n    margin: 0 auto;\n    max-width: 640px;\n}\n\n@media (min-width: 1024px) {\n    .productFullDetail-imageCarousel-j4Y {\n        margin: 0;\n        max-width: 800px;\n        padding: 1.5rem 0;\n    }\n}\n\n.productFullDetail-options-3aj {\n    grid-area: options;\n}\n\n.productFullDetail-formErrors-WNn {\n    grid-area: errors;\n}\n\n.productFullDetail-quantity-2Gn {\n    grid-area: quantity;\n}\n\n.productFullDetail-quantityTitle-USE {\n}\n\n.productFullDetail-actions-12u {\n    align-items: center;\n    display: grid;\n    grid-area: cart;\n    row-gap: 1.5rem;\n    justify-items: center;\n}\n\n@media (min-width: 1024px) {\n    .productFullDetail-actions-12u {\n        border-bottom-width: 0;\n    }\n}\n\n.productFullDetail-description-1jk {\n    grid-column: 1 / span 1;\n    grid-row: fold / span 1;\n}\n\n@media (min-width: 1024px) {\n    .productFullDetail-description-1jk {\n        align-self: stretch;\n        border-top-width: 1px;\n        margin: 0;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n    }\n}\n\n.productFullDetail-descriptionTitle-1bH {\n}\n\n.productFullDetail-details-3SC {\n    grid-column: 2 / span 1;\n    grid-row: fold / span 1;\n}\n\n@media (min-width: 1024px) {\n    .productFullDetail-details-3SC {\n        align-self: stretch;\n        border-top-width: 1px;\n        margin: 0;\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n    }\n}\n\n.productFullDetail-detailsTitle-3ZG {\n}\n\n.productFullDetail-related-Jye {\n    border-bottom-width: 0;\n    grid-column: 1 / span 2;\n}\n\n.productFullDetail-relatedTitle-Yno {\n}\n\n.productFullDetail-quantityRoot-1gF {\n    grid-template-columns: auto 4rem auto;\n    justify-content: start;\n}\n\n.productFullDetail-unavailableContainer-xAN {\n    align-items: center;\n    background-color: rgb(var(--venia-global-color-gray));\n    color: rgb(var(--venia-global-color-gray-darker));\n    column-gap: 0.5rem;\n    display: grid;\n    font-style: italic;\n    grid-auto-flow: column;\n    justify-content: start;\n    padding: 0.75rem;\n    width: 100%;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "productFullDetail-root-3BX",
	"section": "productFullDetail-section-1-E",
	"sectionTitle": "productFullDetail-sectionTitle-1_o",
	"title": "productFullDetail-title-1zr",
	"productName": "productFullDetail-productName-3K4",
	"productPrice": "productFullDetail-productPrice-3cO",
	"imageCarousel": "productFullDetail-imageCarousel-j4Y",
	"options": "productFullDetail-options-3aj",
	"formErrors": "productFullDetail-formErrors-WNn productFullDetail-section-1-E",
	"quantity": "productFullDetail-quantity-2Gn productFullDetail-section-1-E",
	"quantityTitle": "productFullDetail-quantityTitle-USE " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../components/ProductOptions/option.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.css").locals["title"] + "",
	"actions": "productFullDetail-actions-12u productFullDetail-section-1-E",
	"description": "productFullDetail-description-1jk productFullDetail-section-1-E",
	"descriptionTitle": "productFullDetail-descriptionTitle-1bH productFullDetail-sectionTitle-1_o",
	"details": "productFullDetail-details-3SC productFullDetail-section-1-E",
	"detailsTitle": "productFullDetail-detailsTitle-3ZG productFullDetail-sectionTitle-1_o",
	"related": "productFullDetail-related-Jye productFullDetail-section-1-E",
	"relatedTitle": "productFullDetail-relatedTitle-Yno productFullDetail-sectionTitle-1_o",
	"quantityRoot": "productFullDetail-quantityRoot-1gF " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../CartPage/ProductListing/quantity.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.css").locals["root"] + "",
	"unavailableContainer": "productFullDetail-unavailableContainer-xAN"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".option-root-3MT {\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n    margin: 0 1.5rem;\n    padding: 1.75rem 0;\n}\n\n.option-title-2Qh {\n    font-size: 1rem;\n    font-weight: 600;\n    line-height: 1.5;\n    margin-bottom: 1.5rem;\n}\n\n.option-selection-1lY {\n    font-size: 1rem;\n    line-height: 1.5;\n    margin-top: 1rem;\n    display: flex;\n}\n\n.option-selectionLabel-3YE {\n    margin-right: 1rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "option-root-3MT",
	"title": "option-title-2Qh",
	"selection": "option-selection-1lY",
	"selectionLabel": "option-selectionLabel-3YE"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Select/select.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Select/select.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/field.css"), "");

// Module
exports.push([module.i, ".select-wrapper-1z2 {\n    display: inline-grid;\n    grid-auto-flow: column;\n    grid-template-areas: 'input icon';\n    grid-template-columns: auto 2.25rem;\n    height: 2.25rem;\n}\n\n.select-input-1FY,\n.select-input_error-1wi {\n    grid-area: input-start / input-start / input-end / icon-end;\n    padding-right: calc(2.25rem - 1px);\n}\n\n.select-input-1FY:disabled {\n    pointer-events: none;\n    color: rgb(var(--venia-global-color-gray-darker));\n}\n\n.select-input_error-1wi {\n    border-color: rgb(var(--venia-global-color-red-400));\n}\n", ""]);

// Exports
exports.locals = {
	"wrapper": "select-wrapper-1z2",
	"input": "select-input-1FY " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/field.css").locals["input"] + "",
	"input_error": "select-input_error-1wi " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/field.css").locals["input"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/field.css"), "");

// Module
exports.push([module.i, ".textArea-input-2su {\n    height: auto;\n    max-width: 100%;\n    min-width: 100%;\n    padding: 12px 15px;\n}\n", ""]);

// Exports
exports.locals = {
	"input": "textArea-input-2su " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/field.css").locals["input"] + ""
};

/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.esm.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Fuse.js v6.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2021 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      totalWeight += obj.weight;

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
  }

  return { path, id, weight, src }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      const norm = 1 / Math.sqrt(numTokens);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({ getFn = Config.getFn } = {}) {
    this.norm = norm(3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      // console.log(key)
      let value = this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          }
        }
        record.$[keyIndex] = subRecords;
      } else if (!isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(keys, docs, { getFn = Config.getFn } = {}) {
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(data, { getFn = Config.getFn } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore$1(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE)
    }

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore$1(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      /*eslint indent: [2, 2, {"SwitchCase": 1}]*/
      switch (node.operator) {
        case LogicalOperator.AND: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
            } else {
              return []
            }
          }
          return res
        }
        case LogicalOperator.OR: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
              break
            }
          }
          return res
        }
      }
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '6.4.6';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}

/* harmony default export */ __webpack_exports__["a"] = (Fuse);


/***/ }),

/***/ "./node_modules/lodash-es/_baseFindIndex.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseFindIndex.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["a"] = (baseFindIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIndexOf.js":
/*!************************************************************!*\
  !*** ./node_modules/lodash-es/_baseIndexOf.js + 2 modules ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_baseFindIndex.js because of ./node_modules/lodash-es/findIndex.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseFindIndex.js
var _baseFindIndex = __webpack_require__("./node_modules/lodash-es/_baseFindIndex.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNaN.js
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/* harmony default export */ var _baseIsNaN = (baseIsNaN);

// CONCATENATED MODULE: ./node_modules/lodash-es/_strictIndexOf.js
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ var _strictIndexOf = (strictIndexOf);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIndexOf.js




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : Object(_baseFindIndex["a" /* default */])(array, _baseIsNaN, fromIndex);
}

/* harmony default export */ var _baseIndexOf = __webpack_exports__["a"] = (baseIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_basePropertyOf.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_basePropertyOf.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (basePropertyOf);


/***/ }),

/***/ "./node_modules/lodash-es/_defineProperty.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["a"] = (defineProperty);


/***/ }),

/***/ "./node_modules/lodash-es/difference.js":
/*!***********************************************************!*\
  !*** ./node_modules/lodash-es/difference.js + 13 modules ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_SetCache.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_Symbol.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_arrayMap.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_arrayPush.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_baseIndexOf.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_baseUnary.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_cacheHas.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_defineProperty.js because of ./src/components/StoreLocator/productStoreLocator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/identity.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/isArguments.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/isArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/isArrayLike.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/isObjectLike.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_SetCache.js + 2 modules
var _SetCache = __webpack_require__("./node_modules/lodash-es/_SetCache.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseIndexOf.js + 2 modules
var _baseIndexOf = __webpack_require__("./node_modules/lodash-es/_baseIndexOf.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayIncludes.js


/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && Object(_baseIndexOf["a" /* default */])(array, value, 0) > -1;
}

/* harmony default export */ var _arrayIncludes = (arrayIncludes);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayIncludesWith.js
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ var _arrayIncludesWith = (arrayIncludesWith);

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayMap.js
var _arrayMap = __webpack_require__("./node_modules/lodash-es/_arrayMap.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseUnary.js
var _baseUnary = __webpack_require__("./node_modules/lodash-es/_baseUnary.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/_cacheHas.js
var _cacheHas = __webpack_require__("./node_modules/lodash-es/_cacheHas.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseDifference.js







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = Object(_arrayMap["a" /* default */])(values, Object(_baseUnary["a" /* default */])(iteratee));
  }
  if (comparator) {
    includes = _arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = _cacheHas["a" /* default */];
    isCommon = false;
    values = new _SetCache["a" /* default */](values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/* harmony default export */ var _baseDifference = (baseDifference);

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayPush.js
var _arrayPush = __webpack_require__("./node_modules/lodash-es/_arrayPush.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__("./node_modules/lodash-es/_Symbol.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js + 1 modules
var isArguments = __webpack_require__("./node_modules/lodash-es/isArguments.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__("./node_modules/lodash-es/isArray.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_isFlattenable.js




/** Built-in value references. */
var spreadableSymbol = _Symbol["a" /* default */] ? _Symbol["a" /* default */].isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return Object(isArray["a" /* default */])(value) || Object(isArguments["a" /* default */])(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/* harmony default export */ var _isFlattenable = (isFlattenable);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFlatten.js



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        Object(_arrayPush["a" /* default */])(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/* harmony default export */ var _baseFlatten = (baseFlatten);

// EXTERNAL MODULE: ./node_modules/lodash-es/identity.js
var identity = __webpack_require__("./node_modules/lodash-es/identity.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ var _apply = (apply);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ var _overRest = (overRest);

// CONCATENATED MODULE: ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ var lodash_es_constant = (constant);

// EXTERNAL MODULE: ./node_modules/lodash-es/_defineProperty.js
var _defineProperty = __webpack_require__("./node_modules/lodash-es/_defineProperty.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty["a" /* default */] ? identity["a" /* default */] : function(func, string) {
  return Object(_defineProperty["a" /* default */])(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ var _baseSetToString = (baseSetToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ var _shortOut = (shortOut);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ var _setToString = (setToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity["a" /* default */]), func + '');
}

/* harmony default export */ var _baseRest = (baseRest);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__("./node_modules/lodash-es/isArrayLike.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__("./node_modules/lodash-es/isObjectLike.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLikeObject.js



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return Object(isObjectLike["a" /* default */])(value) && Object(isArrayLike["a" /* default */])(value);
}

/* harmony default export */ var lodash_es_isArrayLikeObject = (isArrayLikeObject);

// CONCATENATED MODULE: ./node_modules/lodash-es/difference.js





/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = _baseRest(function(array, values) {
  return lodash_es_isArrayLikeObject(array)
    ? _baseDifference(array, _baseFlatten(values, 1, lodash_es_isArrayLikeObject, true))
    : [];
});

/* harmony default export */ var lodash_es_difference = __webpack_exports__["a"] = (difference);


/***/ }),

/***/ "./node_modules/lodash-es/groupBy.js":
/*!*******************************************************!*\
  !*** ./node_modules/lodash-es/groupBy.js + 4 modules ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_baseEach.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_baseIteratee.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_defineProperty.js because of ./src/components/StoreLocator/productStoreLocator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/isArray.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_defineProperty.js
var _defineProperty = __webpack_require__("./node_modules/lodash-es/_defineProperty.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignValue.js


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty["a" /* default */]) {
    Object(_defineProperty["a" /* default */])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ var _baseAssignValue = (baseAssignValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayAggregator.js
/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

/* harmony default export */ var _arrayAggregator = (arrayAggregator);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseEach.js + 4 modules
var _baseEach = __webpack_require__("./node_modules/lodash-es/_baseEach.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAggregator.js


/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  Object(_baseEach["a" /* default */])(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/* harmony default export */ var _baseAggregator = (baseAggregator);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseIteratee.js + 29 modules
var _baseIteratee = __webpack_require__("./node_modules/lodash-es/_baseIteratee.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__("./node_modules/lodash-es/isArray.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_createAggregator.js





/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = Object(isArray["a" /* default */])(collection) ? _arrayAggregator : _baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, Object(_baseIteratee["a" /* default */])(iteratee, 2), accumulator);
  };
}

/* harmony default export */ var _createAggregator = (createAggregator);

// CONCATENATED MODULE: ./node_modules/lodash-es/groupBy.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var groupBy_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = _createAggregator(function(result, value, key) {
  if (groupBy_hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    _baseAssignValue(result, key, [value]);
  }
});

/* harmony default export */ var lodash_es_groupBy = __webpack_exports__["a"] = (groupBy);


/***/ }),

/***/ "./node_modules/lodash-es/has.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/has.js + 1 modules ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_hasPath.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseHas.js
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseHas_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && _baseHas_hasOwnProperty.call(object, key);
}

/* harmony default export */ var _baseHas = (baseHas);

// EXTERNAL MODULE: ./node_modules/lodash-es/_hasPath.js
var _hasPath = __webpack_require__("./node_modules/lodash-es/_hasPath.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/has.js



/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && Object(_hasPath["a" /* default */])(object, path, _baseHas);
}

/* harmony default export */ var lodash_es_has = __webpack_exports__["a"] = (has);


/***/ }),

/***/ "./node_modules/lodash-es/isString.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isString.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) && Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == stringTag);
}

/* harmony default export */ __webpack_exports__["a"] = (isString);


/***/ }),

/***/ "./node_modules/lodash-es/size.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/size.js + 3 modules ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_baseKeys.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_baseProperty.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_getTag.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_hasUnicode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/isArrayLike.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/isString.js because of ./node_modules/lodash-es/includes.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseKeys.js + 3 modules
var _baseKeys = __webpack_require__("./node_modules/lodash-es/_baseKeys.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/_getTag.js + 4 modules
var _getTag = __webpack_require__("./node_modules/lodash-es/_getTag.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__("./node_modules/lodash-es/isArrayLike.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/isString.js
var isString = __webpack_require__("./node_modules/lodash-es/isString.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseProperty.js
var _baseProperty = __webpack_require__("./node_modules/lodash-es/_baseProperty.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_asciiSize.js


/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = Object(_baseProperty["a" /* default */])('length');

/* harmony default export */ var _asciiSize = (asciiSize);

// EXTERNAL MODULE: ./node_modules/lodash-es/_hasUnicode.js
var _hasUnicode = __webpack_require__("./node_modules/lodash-es/_hasUnicode.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_unicodeSize.js
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

/* harmony default export */ var _unicodeSize = (unicodeSize);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stringSize.js




/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return Object(_hasUnicode["a" /* default */])(string)
    ? _unicodeSize(string)
    : _asciiSize(string);
}

/* harmony default export */ var _stringSize = (stringSize);

// CONCATENATED MODULE: ./node_modules/lodash-es/size.js






/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (Object(isArrayLike["a" /* default */])(collection)) {
    return Object(isString["a" /* default */])(collection) ? _stringSize(collection) : collection.length;
  }
  var tag = Object(_getTag["a" /* default */])(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return Object(_baseKeys["a" /* default */])(collection).length;
}

/* harmony default export */ var lodash_es_size = __webpack_exports__["a"] = (size);


/***/ }),

/***/ "./node_modules/lodash-es/unescape.js":
/*!********************************************************!*\
  !*** ./node_modules/lodash-es/unescape.js + 1 modules ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/_basePropertyOf.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash-es/toString.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/toString.js + 1 modules
var lodash_es_toString = __webpack_require__("./node_modules/lodash-es/toString.js");

// EXTERNAL MODULE: ./node_modules/lodash-es/_basePropertyOf.js
var _basePropertyOf = __webpack_require__("./node_modules/lodash-es/_basePropertyOf.js");

// CONCATENATED MODULE: ./node_modules/lodash-es/_unescapeHtmlChar.js


/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = Object(_basePropertyOf["a" /* default */])(htmlUnescapes);

/* harmony default export */ var _unescapeHtmlChar = (unescapeHtmlChar);

// CONCATENATED MODULE: ./node_modules/lodash-es/unescape.js



/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape_unescape(string) {
  string = Object(lodash_es_toString["a" /* default */])(string);
  return (string && reHasEscapedHtml.test(string))
    ? string.replace(reEscapedHtml, _unescapeHtmlChar)
    : string;
}

/* harmony default export */ var lodash_es_unescape = __webpack_exports__["a"] = (unescape_unescape);


/***/ })

}]);
//# sourceMappingURL=vendors~RootCmp_PRODUCT__default.e2398373d9291a9745ae.js.map