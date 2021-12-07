(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlist.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlist.js + 1 modules ***!
  \********************************************************************************************/
/*! exports provided: useWishlist */
/*! exports used: useWishlist */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistFragment.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistItemFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useWishlist; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistFragment.gql.js
var wishlistFragment_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistFragment.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistItemFragments.gql.js
var wishlistItemFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistItemFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlist.gql.js



const GET_CUSTOMER_WISHLIST = client["gql"]`
    query GetCustomerWishlist {
        customer {
            id
            wishlists {
                id
                ...WishlistPageFragment
            }
        }
    }
    ${wishlistFragment_gql["a" /* WishlistPageFragment */]}
`;
const GET_CUSTOMER_WISHLIST_ITEMS = client["gql"]`
    query getCustomerWishlist($id: ID!, $currentPage: Int) {
        customer {
            id
            wishlist_v2(id: $id) {
                id
                items_v2(currentPage: $currentPage) {
                    items {
                        id
                        ...WishlistItemFragment
                    }
                }
            }
        }
    }
    ${wishlistItemFragments_gql["a" /* WishlistItemFragment */]}
`;
const UPDATE_WISHLIST = client["gql"]`
    mutation UpdateWishlist(
        $name: String!
        $visibility: WishlistVisibilityEnum!
        $wishlistId: ID!
    ) {
        updateWishlist(
            name: $name
            visibility: $visibility
            wishlistId: $wishlistId
        ) {
            name
            uid
            visibility
        }
    }
`;
/* harmony default export */ var wishlist_gql = ({
  getCustomerWishlistQuery: GET_CUSTOMER_WISHLIST,
  getCustomerWhislistItems: GET_CUSTOMER_WISHLIST_ITEMS,
  updateWishlistMutation: UPDATE_WISHLIST
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlist.js
var _s = $RefreshSig$();





/**
 * @function
 * @param {String} props.wishlistId The ID of the wishlist this item belongs to
 * @para  {itemsCount} props.itemsCount The items count fo the list.
 * @param {Boolean} props.isCollapsed state of is visable
 * @returns {WishListProps}
 */

const useWishlist = (props = {}) => {
  _s();

  const {
    id,
    itemsCount,
    isCollapsed
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(wishlist_gql, props.operations);
  const [page, setPage] = Object(react["useState"])(1);
  const [isOpen, setIsOpen] = Object(react["useState"])(!isCollapsed);
  const [isFetchingMore, setIsFetchingMore] = Object(react["useState"])(false);
  const [fetchWhislistItems, queryResult] = Object(client["useLazyQuery"])(operations.getCustomerWhislistItems, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: {
      id,
      currentPage: 1
    }
  });
  const {
    data,
    error,
    loading,
    fetchMore
  } = queryResult;

  const handleContentToggle = () => {
    setIsOpen(currentValue => !currentValue);
  };

  const handleLoadMore = Object(react["useCallback"])(async () => {
    setIsFetchingMore(true);
    const currentPage = page + 1;
    await fetchMore({
      variables: {
        id,
        currentPage
      }
    });
    setPage(currentPage);
    setIsFetchingMore(false);
  }, [id, fetchMore, page]);
  Object(react["useEffect"])(() => {
    setPage(1);

    if (itemsCount >= 1 && isOpen === true && !data) {
      fetchWhislistItems();
    }
  }, [itemsCount, isOpen, fetchWhislistItems, data]);
  const items = data && data.customer.wishlist_v2.items_v2.items ? data.customer.wishlist_v2.items_v2.items : [];
  return {
    handleContentToggle,
    isOpen,
    items,
    error,
    isLoading: !!loading,
    isFetchingMore,
    handleLoadMore
  };
};
/**
 * JSDoc type definitions
 */

/**
 * Props data to use when rendering the Wishlist component.
 *
 * @typedef {Object} WishListProps
 *
 * @property {Function} handleContentToggle Callback to handle list expand toggle
 * @property {Boolean} isOpen Boolean which represents if the content is expanded or not
 * @property {Array} items list of items
 * @property {Boolean} isLoading Boolean which represents if is in loading state
 * @property {Boolean} isFetchingMore Boolean which represents if is in loading more state
 * @property {Function} handleLoadMore Callback to load more items
 */

_s(useWishlist, "anZz7duahUV3Oe7HC4PrtT8nyAU=", false, function () {
  return [client["useLazyQuery"]];
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItem.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItem.js ***!
  \************************************************************************************/
/*! exports provided: useWishlistItem */
/*! exports used: useWishlistItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWishlistItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _magento_peregrine_lib_context_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @magento/peregrine/lib/context/cart */ "./node_modules/@magento/peregrine/lib/context/cart.js");
/* harmony import */ var _util_shallowMerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/shallowMerge */ "./node_modules/@magento/peregrine/lib/util/shallowMerge.js");
/* harmony import */ var _wishlistItem_gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlistItem.gql */ "./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistItem.gql.js");
var _s = $RefreshSig$();






const SUPPORTED_PRODUCT_TYPES = ['SimpleProduct', 'ConfigurableProduct'];

const mergeSupportedProductTypes = (supportedProductTypes = []) => {
  const newSupportedProductTypes = [...SUPPORTED_PRODUCT_TYPES];

  if (supportedProductTypes) {
    newSupportedProductTypes.push(...supportedProductTypes);
  }

  return newSupportedProductTypes;
};
/**
 * @function
 *
 * @param {String} props.item Wishlist Item data from GraphQL
 * @param {WishlistItemOperations} props.operations GraphQL operations for the Wishlist Item component
 * @param {String} props.wishlistId The ID of the wishlist this item belongs to
 *
 * @returns {WishlistItemProps}
 */


const useWishlistItem = props => {
  _s();

  const {
    item,
    onOpenAddToCartDialog,
    wishlistId
  } = props;
  const {
    configurable_options: selectedConfigurableOptions = [],
    id: itemId,
    product
  } = item;
  const {
    configurable_options: configurableOptions = [],
    __typename: productType,
    image,
    sku,
    stock_status: stockStatus
  } = product;
  const {
    label: imageLabel,
    url: imageURL
  } = image;
  const isSupportedProductType = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => mergeSupportedProductTypes(props.supportedProductTypes).includes(productType), [props.supportedProductTypes, productType]);
  const operations = Object(_util_shallowMerge__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_wishlistItem_gql__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], props.operations);
  const {
    addWishlistItemToCartMutation,
    removeProductsFromWishlistMutation
  } = operations;
  const [{
    cartId
  }] = Object(_magento_peregrine_lib_context_cart__WEBPACK_IMPORTED_MODULE_2__[/* useCartContext */ "b"])();
  const [isRemovalInProgress, setIsRemovalInProgress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [removeProductFromWishlistError, setRemoveProductFromWishlistError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const cartItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const item = {
      quantity: 1,
      sku
    }; // Merge in additional input variables for configurable items

    if (selectedConfigurableOptions.length && selectedConfigurableOptions.length === configurableOptions.length) {
      const selectedOptionsArray = selectedConfigurableOptions.map(selectedOption => {
        const {
          id: attributeId,
          value_id: selectedValueId
        } = selectedOption;
        const configurableOption = configurableOptions.find(option => option.attribute_id_v2 === attributeId);
        const configurableOptionValue = configurableOption.values.find(optionValue => optionValue.value_index === selectedValueId);
        return configurableOptionValue.uid;
      });
      Object.assign(item, {
        selected_options: selectedOptionsArray
      });
    }

    return item;
  }, [configurableOptions, selectedConfigurableOptions, sku]);
  const [addWishlistItemToCart, {
    error: addWishlistItemToCartError,
    loading: addWishlistItemToCartLoading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(addWishlistItemToCartMutation, {
    variables: {
      cartId,
      cartItem
    }
  });
  const [removeProductsFromWishlist] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(removeProductsFromWishlistMutation, {
    update: cache => {
      // clean up for cache fav product on category page
      cache.modify({
        id: 'ROOT_QUERY',
        fields: {
          customerWishlistProducts: cachedProducts => cachedProducts.filter(productSku => productSku !== sku)
        }
      });
      cache.modify({
        id: `CustomerWishlist:${wishlistId}`,
        fields: {
          items_v2: (cachedItems, {
            readField,
            Remove
          }) => {
            for (var i = 0; i < cachedItems.items.length; i++) {
              if (readField('id', item) === itemId) {
                return Remove;
              }
            }

            return cachedItems;
          }
        }
      });
    },
    variables: {
      wishlistId: wishlistId,
      wishlistItemsId: [itemId]
    }
  });
  const handleAddToCart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    if (configurableOptions.length === 0 || selectedConfigurableOptions.length === configurableOptions.length) {
      try {
        await addWishlistItemToCart();
      } catch (error) {
        console.error(error);
      }
    } else {
      onOpenAddToCartDialog(item);
    }
  }, [addWishlistItemToCart, configurableOptions.length, item, onOpenAddToCartDialog, selectedConfigurableOptions.length]);
  const handleRemoveProductFromWishlist = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    try {
      setIsRemovalInProgress(true);
      await removeProductsFromWishlist();
    } catch (e) {
      setIsRemovalInProgress(false);
      console.error(e);
      setRemoveProductFromWishlistError(e);

      if (true) {
        console.error(e);
      }
    }
  }, [removeProductsFromWishlist, setRemoveProductFromWishlistError]);
  const isInStock = stockStatus !== 'OUT_OF_STOCK';
  const addToCartButtonProps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return {
      disabled: addWishlistItemToCartLoading || !isInStock,
      onClick: handleAddToCart
    };
  }, [addWishlistItemToCartLoading, handleAddToCart, isInStock]);
  const imageProps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return {
      alt: imageLabel,
      src: imageURL,
      width: 400
    };
  }, [imageLabel, imageURL]);
  return {
    addToCartButtonProps,
    isRemovalInProgress,
    handleRemoveProductFromWishlist,
    hasError: !!addWishlistItemToCartError,
    hasRemoveProductFromWishlistError: !!removeProductFromWishlistError,
    imageProps,
    isSupportedProductType,
    isInStock
  };
};
/**
 * JSDoc type definitions
 */

/**
 * GraphQL operations for the Wishlist Item component
 *
 * @typedef {Object} WishlistItemOperations
 *
 * @property {GraphQLDocument} addWishlistItemToCartMutation Mutation to add item to the cart
 * @property {GraphQLDocument} removeProductsFromWishlistMutation Mutation to remove a product from a wishlist
 *
 * @see [`wishlistItem.gql.js`]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/WishlistPage/wishlistItem.gql.js}
 * for queries used in Venia
 */

/**
 * Props data to use when rendering the Wishlist Item component
 *
 * @typedef {Object} WishlistItemProps
 *
 * @property {Function} handleRemoveProductFromWishlist Callback to actually remove product from wishlist
 * @property {Boolean} hasError Boolean which represents if there was an error adding the wishlist item to cart
 * @property {Boolean} hasRemoveProductFromWishlistError If there was an error removing a product from the wishlist
 * @property {Boolean} isRemovalInProgress Whether the remove product from wishlist operation is in progress
 * @property {Boolean} isSupportedProductType is this product type suported
 * @property {Boolean} isInStock is product in stock
 */

_s(useWishlistItem, "HH84sGW6xbkdJFEttKS0Wgk8lFE=", false, function () {
  return [_magento_peregrine_lib_context_cart__WEBPACK_IMPORTED_MODULE_2__[/* useCartContext */ "b"], _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"], _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItems.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/WishlistPage/useWishlistItems.js ***!
  \*************************************************************************************/
/*! exports provided: useWishlistItems */
/*! exports used: useWishlistItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWishlistItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const useWishlistItems = () => {
  _s();

  const [activeAddToCartItem, setActiveAddToCartItem] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const handleOpenAddToCartDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(wishlistItem => {
    setActiveAddToCartItem(wishlistItem);
  }, []);
  const handleCloseAddToCartDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setActiveAddToCartItem(null);
  }, []);
  return {
    activeAddToCartItem,
    handleCloseAddToCartDialog,
    handleOpenAddToCartDialog
  };
};

_s(useWishlistItems, "oSMGYkOTH2RjaT1BPaThwt+OXK0=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistFragment.gql.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistFragment.gql.js ***!
  \*****************************************************************************************/
/*! exports provided: WishlistPageFragment, WishlistFragment */
/*! exports used: WishlistPageFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPageFragment; });
/* unused harmony export WishlistFragment */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _wishlistItemFragments_gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlistItemFragments.gql */ "./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistItemFragments.gql.js");


const WishlistPageFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment WishlistPageFragment on Wishlist {
        id
        items_count
        sharing_code
    }
`;
const WishlistFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment WishlistFragment on Wishlist {
        id
        items_count
        sharing_code
        items_v2 {
            items {
                id
                ...WishlistItemFragment
            }
        }
    }
    ${_wishlistItemFragments_gql__WEBPACK_IMPORTED_MODULE_1__[/* WishlistItemFragment */ "a"]}
`;

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistItem.gql.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistItem.gql.js ***!
  \*************************************************************************************/
/*! exports provided: ADD_WISHLIST_ITEM_TO_CART, REMOVE_PRODUCTS_FROM_WISHLIST, default */
/*! exports used: REMOVE_PRODUCTS_FROM_WISHLIST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_WISHLIST_ITEM_TO_CART */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REMOVE_PRODUCTS_FROM_WISHLIST; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _magento_peregrine_lib_talons_Header_cartTriggerFragments_gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @magento/peregrine/lib/talons/Header/cartTriggerFragments.gql */ "./node_modules/@magento/peregrine/lib/talons/Header/cartTriggerFragments.gql.js");
/* harmony import */ var _magento_peregrine_lib_talons_MiniCart_miniCartFragments_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql */ "./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js");
/* harmony import */ var _wishlistFragment_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlistFragment.gql */ "./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistFragment.gql.js");




const ADD_WISHLIST_ITEM_TO_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation AddWishlistItemToCart(
        $cartId: String!
        $cartItem: CartItemInput!
    ) {
        addProductsToCart(cartId: $cartId, cartItems: [$cartItem]) {
            cart {
                id
                ...CartTriggerFragment
                ...MiniCartFragment
            }
        }
    }
    ${_magento_peregrine_lib_talons_Header_cartTriggerFragments_gql__WEBPACK_IMPORTED_MODULE_1__[/* CartTriggerFragment */ "a"]}
    ${_magento_peregrine_lib_talons_MiniCart_miniCartFragments_gql__WEBPACK_IMPORTED_MODULE_2__[/* MiniCartFragment */ "a"]}
`;
const REMOVE_PRODUCTS_FROM_WISHLIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation RemoveProductsFromWishlist(
        $wishlistId: ID!
        $wishlistItemsId: [ID!]!
    ) {
        removeProductsFromWishlist(
            wishlistId: $wishlistId
            wishlistItemsIds: $wishlistItemsId
        ) {
            wishlist {
                id
                ...WishlistPageFragment
            }
        }
    }
    ${_wishlistFragment_gql__WEBPACK_IMPORTED_MODULE_3__[/* WishlistPageFragment */ "a"]}
`;
/* harmony default export */ __webpack_exports__["b"] = ({
  addWishlistItemToCartMutation: ADD_WISHLIST_ITEM_TO_CART,
  removeProductsFromWishlistMutation: REMOVE_PRODUCTS_FROM_WISHLIST
});

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistItemFragments.gql.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/WishlistPage/wishlistItemFragments.gql.js ***!
  \**********************************************************************************************/
/*! exports provided: WishlistItemFragment */
/*! exports used: WishlistItemFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistItemFragment; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

const WishlistItemFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment WishlistItemFragment on WishlistItemInterface {
        id
        product {
            id
            image {
                label
                url
            }
            name
            price_range {
                maximum_price {
                    final_price {
                        currency
                        value
                    }
                }
            }
            sku
            stock_status
            ... on ConfigurableProduct {
                configurable_options {
                    id
                    attribute_code
                    attribute_id
                    attribute_id_v2
                    label
                    values {
                        uid
                        default_label
                        label
                        store_label
                        use_default_value
                        value_index
                        swatch_data {
                            ... on ImageSwatchData {
                                thumbnail
                            }
                            value
                        }
                    }
                }
            }
        }
        ... on ConfigurableWishlistItem {
            configurable_options {
                id
                option_label
                value_id
                value_label
            }
        }
    }
`;

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.js + 3 modules ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Header/cartTriggerFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/PageLoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/ProductOptions/options.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.css (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Header/cartTriggerFragments.gql.js
var cartTriggerFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Header/cartTriggerFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js + 1 modules
var miniCartFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/AddToCartDialog/addToCartDialog.gql.js



const GET_PRODUCT_DETAIL = client["gql"]`
    query GetProductDetailForATCDialog(
        $sku: String!
        $configurableOptionValues: [ID!]
    ) {
        products(filter: { sku: { eq: $sku } }) {
            items {
                id
                uid
                image {
                    label
                    url
                }
                price_range {
                    maximum_price {
                        final_price {
                            currency
                            value
                        }
                    }
                }
                ... on ConfigurableProduct {
                    configurable_options {
                        id
                        attribute_uid
                        label
                        position
                        values {
                            label
                            uid
                        }
                    }
                    configurable_product_options_selection(
                        configurableOptionValueUids: $configurableOptionValues
                    ) {
                        media_gallery {
                            label
                            url
                        }
                        variant {
                            id
                            uid
                            price_range {
                                maximum_price {
                                    final_price {
                                        currency
                                        value
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
const ADD_PRODUCT_TO_CART = client["gql"]`
    mutation AddProductToCartFromDialog(
        $cartId: String!
        $cartItem: CartItemInput!
    ) {
        addProductsToCart(cartId: $cartId, cartItems: [$cartItem]) {
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
/* harmony default export */ var addToCartDialog_gql = ({
  addProductToCartMutation: ADD_PRODUCT_TO_CART,
  getProductDetailQuery: GET_PRODUCT_DETAIL
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/AddToCartDialog/useAddToCartDialog.js
var _s = $RefreshSig$();






const useAddToCartDialog = props => {
  _s();

  const {
    item,
    onClose
  } = props;
  const sku = item && item.product.sku;
  const operations = Object(shallowMerge["a" /* default */])(addToCartDialog_gql, props.operations);
  const [userSelectedOptions, setUserSelectedOptions] = Object(react["useState"])(new Map());
  const [currentImage, setCurrentImage] = Object(react["useState"])();
  const [currentPrice, setCurrentPrice] = Object(react["useState"])();
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const selectedOptionsArray = Object(react["useMemo"])(() => {
    if (item) {
      const existingOptionsMap = item.configurable_options.reduce((optionsMap, selectedOption) => {
        return optionsMap.set(selectedOption.id, selectedOption.value_id);
      }, new Map());
      const mergedOptionsMap = new Map([...existingOptionsMap, ...userSelectedOptions]);
      const selectedOptions = [];
      mergedOptionsMap.forEach((selectedValueId, attributeId) => {
        const configurableOption = item.product.configurable_options.find(option => option.attribute_id_v2 === attributeId);
        const configurableOptionValue = configurableOption.values.find(optionValue => optionValue.value_index === selectedValueId);
        selectedOptions.push(configurableOptionValue.uid);
      });
      return selectedOptions;
    }

    return [];
  }, [item, userSelectedOptions]);
  const {
    data,
    loading: isFetchingProductDetail
  } = Object(client["useQuery"])(operations.getProductDetailQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: {
      configurableOptionValues: selectedOptionsArray,
      sku
    },
    skip: !sku
  });
  const [addProductToCart, {
    error: addProductToCartError,
    loading: isAddingToCart
  }] = Object(client["useMutation"])(operations.addProductToCartMutation);
  Object(react["useEffect"])(() => {
    if (data) {
      const product = data.products.items[0];
      const {
        media_gallery: selectedProductMediaGallery,
        variant: selectedVariant
      } = product.configurable_product_options_selection;
      const currentImage = selectedProductMediaGallery.length && selectedOptionsArray.length ? selectedProductMediaGallery[0] : product.image;
      setCurrentImage(currentImage);
      const finalPrice = selectedVariant ? selectedVariant.price_range.maximum_price.final_price : product.price_range.maximum_price.final_price;
      setCurrentPrice(finalPrice);
    }
  }, [data, selectedOptionsArray.length]);
  const handleOnClose = Object(react["useCallback"])(() => {
    onClose();
    setCurrentImage();
    setCurrentPrice();
    setUserSelectedOptions(new Map());
  }, [onClose]);
  const handleOptionSelection = Object(react["useCallback"])((optionId, value) => {
    setUserSelectedOptions(existing => new Map(existing).set(parseInt(optionId), value));
  }, []);
  const handleAddToCart = Object(react["useCallback"])(async () => {
    try {
      await addProductToCart({
        variables: {
          cartId,
          cartItem: {
            quantity: 1,
            selected_options: selectedOptionsArray,
            sku
          }
        }
      });
      handleOnClose();
    } catch (error) {
      console.error(error);
    }
  }, [addProductToCart, cartId, handleOnClose, selectedOptionsArray, sku]);
  const imageProps = Object(react["useMemo"])(() => {
    if (currentImage) {
      return {
        alt: currentImage.label,
        src: currentImage.url,
        width: 400
      };
    }
  }, [currentImage]);
  const priceProps = Object(react["useMemo"])(() => {
    if (currentPrice) {
      return {
        currencyCode: currentPrice.currency,
        value: currentPrice.value
      };
    }
  }, [currentPrice]);
  const configurableOptionProps = Object(react["useMemo"])(() => {
    if (item) {
      return {
        onSelectionChange: handleOptionSelection,
        options: item.product.configurable_options,
        selectedValues: item.configurable_options
      };
    }
  }, [handleOptionSelection, item]);
  const buttonProps = Object(react["useMemo"])(() => {
    if (item) {
      return {
        disabled: item.product.configurable_options.length !== selectedOptionsArray.length || isAddingToCart,
        onClick: handleAddToCart,
        priority: 'high'
      };
    }
  }, [handleAddToCart, isAddingToCart, item, selectedOptionsArray.length]);
  return {
    buttonProps,
    configurableOptionProps,
    formErrors: [addProductToCartError],
    handleOnClose,
    imageProps,
    isFetchingProductDetail,
    priceProps
  };
};

_s(useAddToCartDialog, "UM5nVrouA3KSidbu3sX97FCwry0=", false, function () {
  return [cart["b" /* useCartContext */], client["useQuery"], client["useMutation"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js + 1 modules
var dialog = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 2 modules
var Image_image = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/image.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/options.js + 11 modules
var options = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/ProductOptions/options.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.css
var addToCartDialog = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.css");
var addToCartDialog_default = /*#__PURE__*/__webpack_require__.n(addToCartDialog);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.css

            

var addToCartDialog_options = {"injectType":"styleTag"};

addToCartDialog_options.insert = "head";
addToCartDialog_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(addToCartDialog_default.a, addToCartDialog_options);



/* harmony default export */ var AddToCartDialog_addToCartDialog = (addToCartDialog_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/PageLoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/PageLoadingIndicator/indicator.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.js
var addToCartDialog_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















const AddToCartDialog = props => {
  addToCartDialog_s();

  const {
    item
  } = props;
  const talonProps = useAddToCartDialog(props);
  const {
    buttonProps,
    configurableOptionProps,
    formErrors,
    handleOnClose,
    imageProps,
    isFetchingProductDetail,
    priceProps
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(AddToCartDialog_addToCartDialog, props.classes);
  const imageComponent = imageProps ? react_default.a.createElement(Image_image["a" /* default */], _extends({}, imageProps, {
    classes: {
      image: classes.image
    }
  })) : react_default.a.createElement("div", {
    className: classes.image
  });
  const priceComponent = priceProps ? react_default.a.createElement(price["a" /* default */], priceProps) : null;
  const dialogContent = Object(react["useMemo"])(() => {
    if (item) {
      return react_default.a.createElement("div", {
        className: classes.root
      }, imageComponent, react_default.a.createElement("div", {
        className: classes.detailsContainer
      }, react_default.a.createElement("span", {
        className: classes.name
      }, item.product.name), react_default.a.createElement("span", {
        className: classes.price
      }, priceComponent), react_default.a.createElement(options["a" /* default */], _extends({}, configurableOptionProps, {
        classes: {
          root: undefined,
          title: classes.optionTitle
        }
      })), react_default.a.createElement(Button_button["a" /* default */], buttonProps, react_default.a.createElement(message["a" /* default */], {
        id: "addToCartDialog.addToCart",
        defaultMessage: "Add to Cart"
      }))));
    }

    return null;
  }, [buttonProps, classes.detailsContainer, classes.name, classes.optionTitle, classes.price, classes.root, configurableOptionProps, imageComponent, item, priceComponent]);
  const titleElement = isFetchingProductDetail ? react_default.a.createElement("div", {
    className: classes.titleContainer
  }, react_default.a.createElement(indicator["a" /* default */], null)) : null;
  return react_default.a.createElement(dialog["a" /* default */], {
    classes: {
      headerText: classes.dialogHeaderText
    },
    isOpen: !!props.item,
    onCancel: handleOnClose,
    shouldShowButtons: false,
    title: titleElement
  }, react_default.a.createElement(formError["a" /* default */], {
    errors: formErrors
  }), dialogContent);
};

addToCartDialog_s(AddToCartDialog, "MAllw2cyPI8qjJcNv6CAjBRIvSQ=", false, function () {
  return [useAddToCartDialog, shallowMerge["a" /* default */]];
});

_c = AddToCartDialog;
/* harmony default export */ var components_AddToCartDialog_addToCartDialog = __webpack_exports__["a"] = (AddToCartDialog);
AddToCartDialog.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    image: prop_types["string"],
    detailsContainer: prop_types["string"],
    name: prop_types["string"],
    price: prop_types["string"],
    optionTitle: prop_types["string"],
    dialogHeaderText: prop_types["string"],
    titleContainer: prop_types["string"]
  }),
  item: Object(prop_types["shape"])({
    product: Object(prop_types["shape"])({
      name: prop_types["string"].isRequired
    }).isRequired
  })
};

var _c;

$RefreshReg$(_c, "AddToCartDialog");

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AddToCartDialog/addToCartDialog.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Dialog/dialog.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.css"), "");

// Module
exports.push([module.i, ".addToCartDialog-root-33f {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n}\n\n.addToCartDialog-image-3Yv {\n    height: 100%;\n    object-fit: contain;\n    width: 100%;\n}\n\n.addToCartDialog-detailsContainer-2pB {\n    align-content: start;\n    display: grid;\n    row-gap: 1rem;\n}\n\n.addToCartDialog-name-2rC {\n    font-family: var(--venia-global-fontFamily-serif);\n    font-size: var(--venia-typography-body-XXXL-fontSize);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.addToCartDialog-price-lnl {\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.addToCartDialog-price-lnl:empty {\n    background-color: rgb(var(--venia-global-color-gray));\n    min-height: 1rem;\n    width: 4rem;\n}\n\n.addToCartDialog-optionTitle-1_Z {\n    border-top: 1px solid rgb(var(--venia-global-color-border));\n    font-weight: var(--venia-global-fontWeight-semibold);\n    padding: 1rem 0;\n}\n\n.addToCartDialog-dialogHeaderText-1pd {\n    overflow: visible;\n}\n\n.addToCartDialog-titleContainer-2j2 {\n    line-height: 1;\n    width: fit-content;\n}\n\n@media (max-width: 960px) {\n    .addToCartDialog-root-33f {\n        grid-template-columns: auto;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "addToCartDialog-root-33f",
	"image": "addToCartDialog-image-3Yv",
	"detailsContainer": "addToCartDialog-detailsContainer-2pB",
	"name": "addToCartDialog-name-2rC",
	"price": "addToCartDialog-price-lnl",
	"optionTitle": "addToCartDialog-optionTitle-1_Z",
	"dialogHeaderText": "addToCartDialog-dialogHeaderText-1pd " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Dialog/dialog.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.css").locals["headerText"] + "",
	"titleContainer": "addToCartDialog-titleContainer-2j2"
};

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

/***/ })

}]);
//# sourceMappingURL=24.5d72f6d5232cb73e81ad.js.map