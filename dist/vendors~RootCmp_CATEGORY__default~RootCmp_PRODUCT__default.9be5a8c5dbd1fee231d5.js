(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~RootCmp_CATEGORY__default~RootCmp_PRODUCT__default"],{

/***/ "./node_modules/@magento/peregrine/lib/hooks/useCustomerWishlistSkus/useCustomerWishlistSkus.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/hooks/useCustomerWishlistSkus/useCustomerWishlistSkus.js + 2 modules ***!
  \******************************************************************************************************************/
/*! exports provided: useCustomerWishlistSkus */
/*! exports used: useCustomerWishlistSkus */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useCustomerWishlistSkus; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var _apollo_client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js
var addToListButton_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/hooks/useCustomerWishlistSkus/customerWishlist.gql.ce.js


const GET_WISHLIST_ITEMS = _apollo_client["gql"]`
    query GetWishlistItemsForLocalField($currentPage: Int!) {
        customer {
            id
            wishlists {
                id
                items_v2(currentPage: $currentPage, pageSize: 10) {
                    items {
                        id
                        product {
                            id
                            sku
                        }
                    }
                    page_info {
                        current_page
                        total_pages
                    }
                }
            }
        }
    }
`;
/* harmony default export */ var customerWishlist_gql_ce = ({
  getProductsInWishlistsQuery: addToListButton_gql["a" /* GET_PRODUCTS_IN_WISHLISTS */],
  getWishlistItemsQuery: GET_WISHLIST_ITEMS
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/hooks/useCustomerWishlistSkus/customerWishlist.gql.ee.js


/* harmony default export */ var customerWishlist_gql_ee = ({
  getProductsInWishlistsQuery: addToListButton_gql["a" /* GET_PRODUCTS_IN_WISHLISTS */],
  getWishlistItemsQuery: GET_WISHLIST_ITEMS
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/hooks/useCustomerWishlistSkus/useCustomerWishlistSkus.js
var _s = $RefreshSig$();






/**
 * A hook that queries for products in a customer's wishlists and maintains a
 * list of skus in a local cache entry.
 *
 * @param {DocumentNode} props.operations operations used to prepare the local customer wishlist array
 * @returns {undefined}
 */

const useCustomerWishlistSkus = (props = {}) => {
  _s();

  const operations = Object(shallowMerge["a" /* default */])(customerWishlist_gql_ee, props.operations);
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const [currentPage, setCurrentPage] = Object(react["useState"])(1);
  const {
    client,
    data: {
      customerWishlistProducts
    }
  } = Object(_apollo_client["useQuery"])(operations.getProductsInWishlistsQuery);
  Object(_apollo_client["useQuery"])(operations.getWishlistItemsQuery, {
    fetchPolicy: 'cache-and-network',
    onCompleted: data => {
      const itemsToAdd = new Set();
      const wishlists = data.customer.wishlists;
      let shouldFetchMore = false;
      wishlists.map(wishlist => {
        const items = wishlist.items_v2.items;
        items.map(item => {
          const sku = item.product.sku;

          if (!customerWishlistProducts.includes(sku)) {
            itemsToAdd.add(sku);
          }
        });
        const pageInfo = wishlist.items_v2.page_info;

        if (pageInfo.total_pages > pageInfo.current_page) {
          shouldFetchMore = true;
        }
      });

      if (itemsToAdd.size) {
        client.writeQuery({
          query: operations.getProductsInWishlistsQuery,
          data: {
            customerWishlistProducts: [...customerWishlistProducts, ...itemsToAdd]
          }
        });
      }

      if (shouldFetchMore) {
        setCurrentPage(current => ++current);
      }
    },
    skip: !isSignedIn,
    variables: {
      currentPage
    }
  });
};

_s(useCustomerWishlistSkus, "g1vidzE3ax8Y8AjxothWi2Pc6Mo=", false, function () {
  return [user["b" /* useUserContext */], _apollo_client["useQuery"], _apollo_client["useQuery"]];
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/Gallery/useGallery.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/Gallery/useGallery.js + 1 modules ***!
  \**************************************************************************************/
/*! exports provided: useGallery */
/*! exports used: useGallery */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useCustomerWishlistSkus/useCustomerWishlistSkus.js because of ./src/magento/pagebuilder/ContentTypes/Products/Carousel/useCarousel.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useGallery; });

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useCustomerWishlistSkus/useCustomerWishlistSkus.js + 2 modules
var useCustomerWishlistSkus = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useCustomerWishlistSkus/useCustomerWishlistSkus.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/Gallery/gallery.gql.ce.js

const GET_WISHLIST_CONFIG = client["gql"]`
    query GetWishlistConfigForGalleryCE {
        storeConfig {
            id
            magento_wishlist_general_is_enabled
        }
    }
`;
/* harmony default export */ var gallery_gql_ce = ({
  getWishlistConfigQuery: GET_WISHLIST_CONFIG
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/Gallery/useGallery.js
var _s = $RefreshSig$();





const useGallery = (props = {}) => {
  _s();

  const operations = Object(shallowMerge["a" /* default */])(gallery_gql_ce, props.operations);
  Object(useCustomerWishlistSkus["a" /* useCustomerWishlistSkus */])();
  const {
    data: wishlistConfigData
  } = Object(client["useQuery"])(operations.getWishlistConfigQuery, {
    fetchPolicy: 'cache-and-network'
  });
  const storeConfig = wishlistConfigData ? wishlistConfigData.storeConfig : null;
  return {
    storeConfig
  };
};

_s(useGallery, "JuUJeYatRtL4gq2bAl/jTufwcj0=", false, function () {
  return [useCustomerWishlistSkus["a" /* useCustomerWishlistSkus */], client["useQuery"]];
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/Gallery/useGalleryItem.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/Gallery/useGalleryItem.js ***!
  \******************************************************************************/
/*! exports provided: useGalleryItem */
/*! exports used: useGalleryItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useGalleryItem; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const useGalleryItem = (props = {}) => {
  const {
    item,
    storeConfig
  } = props;
  const wishlistButtonProps = storeConfig && storeConfig.magento_wishlist_general_is_enabled === '1' ? {
    item: {
      sku: item.sku,
      quantity: 1
    },
    storeConfig
  } : null;
  return _objectSpread({}, props, {
    wishlistButtonProps
  });
};

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Portal/portal.js":
/*!************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Portal/portal.js ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _s = $RefreshSig$();




/**
 * A component that renders content into a DOM node that exists
 * outside of the DOM hierarchy of the parent component.
 * @see https://reactjs.org/docs/portals.html
 *
 * @typedef Portal
 * @kind functional component
 *
 * @param {ReactNodeLike}   children  - React child elements
 * @param {Object}          container - The DOM node to render the children in
 *
 * @returns {React.ReactPortal} The React portal.
 */

const Portal = ({
  children,
  container
}) => {
  _s();

  const isServer = !globalThis.document; // a component must always call the same hooks, so no early returns

  const target = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return isServer ? null : container instanceof HTMLElement ? container : document.getElementById('root');
  }, [container, isServer]); // TODO: replace direct usage of Portal with something SSR-compatible

  return isServer ? null : Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(children, target);
};

_s(Portal, "/Y53zmcOwVOBObCXp70vfrJ991U=");

_c = Portal;
/* harmony default export */ __webpack_exports__["a"] = (Portal);
/**
 * Props for {@link Portal}
 *
 * @typedef props
 *
 * @property {ReactNodeLike} children any elements that will be child
 * elements inside the modal.
 * @property {Object} container the container element (a DOM element)
 * where the children will be rendered.
 */

Portal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],
  container: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]
};

var _c;

$RefreshReg$(_c, "Portal");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/util/formValidators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/util/formValidators.js ***!
  \*******************************************************************/
/*! exports provided: hasLengthAtLeast, hasLengthAtMost, hasLengthExactly, isRequired, mustBeChecked, validateRegionCode, validatePassword, isEqualToField, isNotEqualToField */
/*! exports used: hasLengthAtLeast, isEqualToField, isNotEqualToField, isRequired, validatePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasLengthAtLeast; });
/* unused harmony export hasLengthAtMost */
/* unused harmony export hasLengthExactly */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isRequired; });
/* unused harmony export mustBeChecked */
/* unused harmony export validateRegionCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isEqualToField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isNotEqualToField; });
/**
 * @fileoverview This file houses functions that can be used for
 * validation of form fields.
 *
 * Note that these functions should return a string error message
 * when they fail, and `undefined` when they pass.
 */
const SUCCESS = undefined;
const hasLengthAtLeast = (value, values, minimumLength) => {
  const message = {
    id: 'validation.hasLengthAtLeast',
    defaultMessage: 'Must contain more characters',
    value: minimumLength
  };

  if (!value || value.length < minimumLength) {
    return message;
  }

  return SUCCESS;
};
const hasLengthAtMost = (value, values, maximumLength) => {
  if (value && value.length > maximumLength) {
    const message = {
      id: 'validation.hasLengthAtMost',
      defaultMessage: 'Must have less characters',
      value: maximumLength
    };
    return message;
  }

  return SUCCESS;
};
const hasLengthExactly = (value, values, length) => {
  if (value && value.length !== length) {
    const message = {
      id: 'validation.hasLengthExactly',
      defaultMessage: 'Does not have exact number of characters',
      value: length
    };
    return message;
  }

  return SUCCESS;
};
/**
 * isRequired is provided here for convenience but it is inherently ambiguous and therefore we don't recommend using it.
 * Consider using more specific validators such as `hasLengthAtLeast` or `mustBeChecked`.
 */

const isRequired = value => {
  const FAILURE = {
    id: 'validation.isRequired',
    defaultMessage: 'Is required.'
  }; // The field must have a value (no null or undefined) and
  // if it's a boolean, it must be `true`.

  if (!value) return FAILURE; // If it is a number or string, it must have at least one character of input (after trim).

  const stringValue = String(value).trim();
  const measureResult = hasLengthAtLeast(stringValue, null, 1);
  if (measureResult) return FAILURE;
  return SUCCESS;
};
const mustBeChecked = value => {
  const message = {
    id: 'validation.mustBeChecked',
    defaultMessage: 'Must be checked.'
  };
  if (!value) return message;
  return SUCCESS;
};
const validateRegionCode = (value, values, countries) => {
  const countryCode = "US";
  const country = countries.find(({
    id
  }) => id === countryCode);

  if (!country) {
    const invalidCountry = {
      id: 'validation.invalidCountry',
      defaultMessage: `Country "${countryCode}" is not an available country.`,
      value: countryCode
    };
    return invalidCountry;
  }

  const {
    available_regions: regions
  } = country;

  if (!(Array.isArray(regions) && regions.length)) {
    const invalidRegions = {
      id: 'validation.invalidRegions',
      defaultMessage: `Country "${countryCode}" does not contain any available regions.`,
      value: countryCode
    };
    return invalidRegions;
  }

  const region = regions.find(({
    code
  }) => code === value);

  if (!region) {
    const invalidAbbrev = {
      id: 'validation.invalidAbbreviation',
      defaultMessage: 'That is not a valid state abbreviation.',
      value: value
    };
    return invalidAbbrev;
  }

  return SUCCESS;
};
const validatePassword = value => {
  const count = {
    lower: 0,
    upper: 0,
    digit: 0,
    special: 0
  };

  for (const char of value) {
    if (/[a-z]/.test(char)) count.lower++;else if (/[A-Z]/.test(char)) count.upper++;else if (/\d/.test(char)) count.digit++;else if (/\S/.test(char)) count.special++;
  }

  if (Object.values(count).filter(Boolean).length < 3) {
    const message = {
      id: 'validation.validatePassword',
      defaultMessage: 'A password must contain at least 3 of the following: lowercase, uppercase, digits, special characters.'
    };
    return message;
  }

  return SUCCESS;
};
const isEqualToField = (value, values, fieldKey) => {
  const message = {
    id: 'validation.isEqualToField',
    defaultMessage: 'Fields must match',
    value: fieldKey
  };
  return value === values[fieldKey] ? SUCCESS : message;
};
const isNotEqualToField = (value, values, fieldKey) => {
  const message = {
    id: 'validation.isNotEqualToField',
    defaultMessage: 'Fields must be different',
    value: fieldKey
  };
  return value !== values[fieldKey] ? SUCCESS : message;
};

/***/ })

}]);
//# sourceMappingURL=vendors~RootCmp_CATEGORY__default~RootCmp_PRODUCT__default.9be5a8c5dbd1fee231d5.js.map