(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

/***/ "./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js ***!
  \****************************************************************************************************/
/*! exports provided: ADD_TO_WISHLIST, GET_PRODUCTS_IN_WISHLISTS, default */
/*! exports used: GET_PRODUCTS_IN_WISHLISTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_TO_WISHLIST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PRODUCTS_IN_WISHLISTS; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

const ADD_TO_WISHLIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation AddProductToWishlistFromGallery(
        $wishlistId: ID!
        $itemOptions: WishlistItemInput!
    ) {
        addProductsToWishlist(
            wishlistId: $wishlistId
            wishlistItems: [$itemOptions]
        ) {
            user_errors {
                code
                message
            }
        }
    }
`;
const GET_PRODUCTS_IN_WISHLISTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GetProductsInWishlistsForGallery {
        customerWishlistProducts @client
    }
`;
/* harmony default export */ __webpack_exports__["b"] = ({
  addProductToWishlistMutation: ADD_TO_WISHLIST,
  getProductsInWishlistsQuery: GET_PRODUCTS_IN_WISHLISTS
});

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.js + 1 modules ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Gallery/useGallery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Gallery/item.js because of ./node_modules/@magento/pagebuilder/lib/ContentTypes/Products/Carousel/carousel.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.css (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Gallery/item.js + 1 modules
var Gallery_item = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Gallery/item.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.css
var gallery = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.css");
var gallery_default = /*#__PURE__*/__webpack_require__.n(gallery);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(gallery_default.a, options);



/* harmony default export */ var Gallery_gallery = (gallery_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Gallery/useGallery.js + 1 modules
var useGallery = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Gallery/useGallery.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.js
var _s = $RefreshSig$();







/**
 * Renders a Gallery of items. If items is an array of nulls Gallery will render
 * a placeholder item for each.
 *
 * @params {Array} props.items an array of items to render
 */

const Gallery = props => {
  _s();

  const {
    items
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(Gallery_gallery, props.classes);
  const talonProps = Object(useGallery["a" /* useGallery */])();
  const {
    storeConfig
  } = talonProps;
  const galleryItems = Object(react["useMemo"])(() => items.map((item, index) => {
    if (item === null) {
      return react_default.a.createElement(Gallery_item["a" /* default */], {
        key: index
      });
    }

    return react_default.a.createElement(Gallery_item["a" /* default */], {
      key: item.id,
      item: item,
      storeConfig: storeConfig
    });
  }), [items, storeConfig]);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.items
  }, galleryItems));
};

_s(Gallery, "Uz2eEU2Z0We1+iMZ6eNIhCbowl4=", false, function () {
  return [shallowMerge["a" /* default */], useGallery["a" /* useGallery */]];
});

_c = Gallery;
Gallery.propTypes = {
  classes: Object(prop_types["shape"])({
    filters: prop_types["string"],
    items: prop_types["string"],
    pagination: prop_types["string"],
    root: prop_types["string"]
  }),
  items: prop_types["array"].isRequired
};
/* harmony default export */ var components_Gallery_gallery = __webpack_exports__["a"] = (Gallery);

var _c;

$RefreshReg$(_c, "Gallery");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Gallery/item.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Gallery/item.js + 1 modules ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Gallery/useGalleryItem.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Image/useImage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/images.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/makeUrl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Gallery/item.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var Price_price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Image/useImage.js
var useImage = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Image/useImage.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Gallery/useGalleryItem.js
var useGalleryItem = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Gallery/useGalleryItem.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/images.js
var util_images = __webpack_require__("./node_modules/@magento/peregrine/lib/util/images.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/makeUrl.js
var makeUrl = __webpack_require__("./node_modules/@magento/peregrine/lib/util/makeUrl.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 2 modules
var Image_image = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/image.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Gallery/item.css
var Gallery_item = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Gallery/item.css");
var item_default = /*#__PURE__*/__webpack_require__.n(Gallery_item);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Gallery/item.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(item_default.a, options);



/* harmony default export */ var components_Gallery_item = (item_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js + 3 modules
var addToListButton_ce = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Gallery/item.js
var _s = $RefreshSig$();












 // The placeholder image is 4:5, so we should make sure to size our product
// images appropriately.

const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 375; // Gallery switches from two columns to three at 640px.

const IMAGE_WIDTHS = new Map().set(640, IMAGE_WIDTH).set(useImage["a" /* UNCONSTRAINED_SIZE_KEY */], 840);
_c = IMAGE_WIDTHS;

const ItemPlaceholder = ({
  classes
}) => react_default.a.createElement("div", {
  className: classes.root_pending
}, react_default.a.createElement("div", {
  className: classes.images_pending
}, react_default.a.createElement(Image_image["a" /* default */], {
  alt: "Placeholder for gallery item image",
  classes: {
    image: classes.image_pending,
    root: classes.imageContainer
  },
  src: util_images["a" /* transparentPlaceholder */]
})), react_default.a.createElement("div", {
  className: classes.name_pending
}), react_default.a.createElement("div", {
  className: classes.price_pending
}));

_c2 = ItemPlaceholder;

const GalleryItem = props => {
  _s();

  const {
    handleLinkClick,
    item,
    wishlistButtonProps
  } = Object(useGalleryItem["a" /* useGalleryItem */])(props);
  const classes = Object(shallowMerge["a" /* default */])(components_Gallery_item, props.classes);

  if (!item) {
    return react_default.a.createElement(ItemPlaceholder, {
      classes: classes
    });
  }

  const {
    name,
    price,
    small_image,
    url_key,
    url_suffix
  } = item;
  const {
    url: smallImageURL
  } = small_image;
  const productLink = Object(makeUrl["a" /* default */])(`/${url_key}${url_suffix || ''}`);
  const wishlistButton = wishlistButtonProps ? react_default.a.createElement(addToListButton_ce["a" /* default */], wishlistButtonProps) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    onClick: handleLinkClick,
    to: productLink,
    className: classes.images
  }, react_default.a.createElement(Image_image["a" /* default */], {
    alt: name,
    classes: {
      image: classes.image,
      root: classes.imageContainer
    },
    height: IMAGE_HEIGHT,
    resource: smallImageURL,
    widths: IMAGE_WIDTHS
  })), react_default.a.createElement(react_router_dom["b" /* Link */], {
    onClick: handleLinkClick,
    to: productLink,
    className: classes.name
  }, react_default.a.createElement("span", null, name)), react_default.a.createElement("div", {
    className: classes.price
  }, react_default.a.createElement(Price_price["a" /* default */], {
    value: price.regularPrice.amount.value,
    currencyCode: price.regularPrice.amount.currency
  })), react_default.a.createElement("div", {
    className: classes.actionsContainer
  }, wishlistButton));
};

_s(GalleryItem, "MHEzV4um+76bjWXw1iwwmYbl72c=", false, function () {
  return [useGalleryItem["a" /* useGalleryItem */], shallowMerge["a" /* default */]];
});

_c3 = GalleryItem;
GalleryItem.propTypes = {
  classes: Object(prop_types["shape"])({
    image: prop_types["string"],
    imageContainer: prop_types["string"],
    imagePlaceholder: prop_types["string"],
    image_pending: prop_types["string"],
    images: prop_types["string"],
    images_pending: prop_types["string"],
    name: prop_types["string"],
    name_pending: prop_types["string"],
    price: prop_types["string"],
    price_pending: prop_types["string"],
    root: prop_types["string"],
    root_pending: prop_types["string"]
  }),
  item: Object(prop_types["shape"])({
    id: prop_types["number"].isRequired,
    name: prop_types["string"].isRequired,
    small_image: Object(prop_types["shape"])({
      url: prop_types["string"].isRequired
    }),
    url_key: prop_types["string"].isRequired,
    price: Object(prop_types["shape"])({
      regularPrice: Object(prop_types["shape"])({
        amount: Object(prop_types["shape"])({
          value: prop_types["number"].isRequired,
          currency: prop_types["string"].isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }),
  storeConfig: Object(prop_types["shape"])({
    magento_wishlist_general_is_enabled: prop_types["string"].isRequired
  })
};
/* harmony default export */ var lib_components_Gallery_item = __webpack_exports__["a"] = (GalleryItem);

var _c, _c2, _c3;

$RefreshReg$(_c, "IMAGE_WIDTHS");
$RefreshReg$(_c2, "ItemPlaceholder");
$RefreshReg$(_c3, "GalleryItem");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js + 3 modules ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/alert-circle.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/check.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/heart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/info.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/heart.js
var heart = __webpack_require__("./node_modules/react-feather/dist/icons/heart.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var _apollo_client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js
var addToListButton_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/addToListButton.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/Wishlist/AddToListButton/helpers/useSingleWishlist.js
var _s = $RefreshSig$();







const useSingleWishlist = props => {
  _s();

  const {
    afterAdd,
    beforeAdd,
    item
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(addToListButton_gql["b" /* default */], props.operations);
  const [addProductToWishlist, {
    data: addProductData,
    error: errorAddingProduct,
    loading: isAddingToWishlist
  }] = Object(_apollo_client["useMutation"])(operations.addProductToWishlistMutation);
  const {
    client,
    data: {
      customerWishlistProducts
    }
  } = Object(_apollo_client["useQuery"])(operations.getProductsInWishlistsQuery);
  const isSelected = Object(react["useMemo"])(() => {
    return customerWishlistProducts.includes(item.sku) || isAddingToWishlist;
  }, [customerWishlistProducts, isAddingToWishlist, item.sku]);
  const [showLoginToast, setShowLoginToast] = Object(react["useState"])(0);
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const handleClick = Object(react["useCallback"])(async () => {
    if (!isSignedIn) {
      setShowLoginToast(current => ++current);
    } else {
      try {
        if (beforeAdd) {
          await beforeAdd();
        }

        await addProductToWishlist({
          variables: {
            wishlistId: '0',
            itemOptions: item
          }
        });
        client.writeQuery({
          query: operations.getProductsInWishlistsQuery,
          data: {
            customerWishlistProducts: [...customerWishlistProducts, item.sku]
          }
        });

        if (afterAdd) {
          afterAdd();
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [addProductToWishlist, afterAdd, beforeAdd, client, customerWishlistProducts, isSignedIn, item, operations.getProductsInWishlistsQuery]);
  const loginToastProps = Object(react["useMemo"])(() => {
    if (showLoginToast) {
      return {
        type: 'info',
        message: formatMessage({
          id: 'wishlist.galleryButton.loginMessage',
          defaultMessage: 'Please sign-in to your Account to save items for later.'
        }),
        timeout: 5000
      };
    }

    return null;
  }, [formatMessage, showLoginToast]);
  const successToastProps = Object(react["useMemo"])(() => {
    if (addProductData) {
      return {
        type: 'success',
        message: formatMessage({
          id: 'wishlist.galleryButton.successMessageGeneral',
          defaultMessage: 'Item successfully added to your favorites list.'
        }),
        timeout: 5000
      };
    }

    return null;
  }, [addProductData, formatMessage]);
  const errorToastProps = Object(react["useMemo"])(() => {
    if (errorAddingProduct) {
      return {
        type: 'error',
        message: formatMessage({
          id: 'wishlist.galleryButton.addError',
          defaultMessage: 'Something went wrong adding the product to your wishlist.'
        }),
        timeout: 5000
      };
    }

    return null;
  }, [errorAddingProduct, formatMessage]);
  const buttonProps = Object(react["useMemo"])(() => ({
    'aria-label': formatMessage({
      id: 'wishlistButton.addText',
      defaultMessage: 'Add to Favorites'
    }),
    disabled: isSelected,
    onClick: handleClick,
    type: 'button'
  }), [formatMessage, handleClick, isSelected]);
  return {
    buttonProps,
    buttonText: props.buttonText && props.buttonText(isSelected),
    customerWishlistProducts,
    errorToastProps,
    handleClick,
    isSelected,
    loginToastProps,
    successToastProps
  };
};

_s(useSingleWishlist, "2WicNBZVCZqJbQL0yjF69DMoAG0=", false, function () {
  return [_apollo_client["useMutation"], _apollo_client["useQuery"], useIntl["a" /* default */], user["b" /* useUserContext */]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css
var addToListButton = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css");
var addToListButton_default = /*#__PURE__*/__webpack_require__.n(addToListButton);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(addToListButton_default.a, options);



/* harmony default export */ var AddToListButton_addToListButton = (addToListButton_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__("./node_modules/react-feather/dist/icons/check.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__("./node_modules/react-feather/dist/icons/alert-circle.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/info.js
var info = __webpack_require__("./node_modules/react-feather/dist/icons/info.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js
var useToasts = __webpack_require__("./node_modules/@magento/peregrine/lib/Toasts/useToasts.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/useCommonToasts.js
var useCommonToasts_s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CheckIcon = react_default.a.createElement(icon["a" /* default */], {
  size: 20,
  src: check["a" /* default */]
});
const ErrorIcon = react_default.a.createElement(icon["a" /* default */], {
  size: 20,
  src: alert_circle["a" /* default */]
});
const InfoIcon = react_default.a.createElement(icon["a" /* default */], {
  size: 20,
  src: info["a" /* default */]
});
const useCommonToasts = props => {
  useCommonToasts_s();

  const {
    errorToastProps,
    loginToastProps,
    successToastProps
  } = props;
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  Object(react["useEffect"])(() => {
    if (loginToastProps) {
      addToast(_objectSpread({}, loginToastProps, {
        icon: InfoIcon
      }));
    }
  }, [addToast, loginToastProps]);
  Object(react["useEffect"])(() => {
    if (successToastProps) {
      addToast(_objectSpread({}, successToastProps, {
        icon: CheckIcon
      }));
    }
  }, [addToast, successToastProps]);
  Object(react["useEffect"])(() => {
    if (errorToastProps) {
      addToast(_objectSpread({}, errorToastProps, {
        icon: ErrorIcon
      }));
    }
  }, [addToast, errorToastProps]);
};

useCommonToasts_s(useCommonToasts, "ynKlNugadmy6mw0YBPqu3YPe7Rs=", false, function () {
  return [useToasts["a" /* useToasts */]];
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.ce.js
var addToListButton_ce_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const HeartIcon = react_default.a.createElement(icon["a" /* default */], {
  size: 20,
  src: heart["a" /* default */]
});

const AddToListButton = props => {
  addToListButton_ce_s();

  const talonProps = useSingleWishlist(props);
  const {
    buttonProps,
    buttonText,
    errorToastProps,
    isSelected,
    loginToastProps,
    successToastProps
  } = talonProps;
  useCommonToasts({
    errorToastProps,
    loginToastProps,
    successToastProps
  });
  const classes = Object(shallowMerge["a" /* default */])(AddToListButton_addToListButton, props.classes);
  const buttonClass = isSelected ? classes.root_selected : classes.root;
  return react_default.a.createElement("button", _extends({
    className: buttonClass
  }, buttonProps), props.icon, " ", buttonText);
};

addToListButton_ce_s(AddToListButton, "B5QIu06xdEIabs2Os5SpLufcxuA=", false, function () {
  return [useSingleWishlist, useCommonToasts, shallowMerge["a" /* default */]];
});

_c = AddToListButton;
/* harmony default export */ var addToListButton_ce = __webpack_exports__["a"] = (AddToListButton);
AddToListButton.defaultProps = {
  icon: HeartIcon
};
AddToListButton.propTypes = {
  afterAdd: prop_types["func"],
  beforeAdd: prop_types["func"],
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_selected: prop_types["string"]
  }),
  icon: prop_types["element"]
};

var _c;

$RefreshReg$(_c, "AddToListButton");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Gallery/gallery.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".gallery-root-3Eq {\n    display: grid;\n    grid-template-areas:\n        'actions'\n        'items';\n    grid-template-columns: 1fr;\n    line-height: 1;\n}\n\n.gallery-items-wQU {\n    display: grid;\n    grid-area: items;\n    grid-gap: 1rem;\n    grid-template-columns: repeat(3, 1fr);\n    margin-bottom: 10px;\n}\n\n@media (max-width: 640px) {\n    .gallery-items-wQU {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "gallery-root-3Eq",
	"items": "gallery-items-wQU"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Gallery/item.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Gallery/item.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".item-root-3dM {\n    align-content: start;\n    display: grid;\n    row-gap: 0.5rem;\n}\n\n.item-images-1h2 {\n    display: grid;\n    grid-template-areas: 'main';\n}\n\n.item-imageContainer-3eG {\n    grid-area: main;\n}\n\n.item-image-3EX {\n    display: block;\n    height: 100%;\n    object-fit: contain;\n    opacity: 1;\n    transition-duration: 512ms;\n    transition-property: opacity, visibility;\n    transition-timing-function: ease-out;\n    visibility: visible;\n    width: 100%;\n}\n\n.item-imagePlaceholder-1ie {\n    background-color: rgb(var(--venia-global-color-gray));\n}\n\n.item-actionsContainer-34W {\n    column-gap: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n}\n\n.item-actionsContainer-34W:empty {\n    display: none;\n}\n\n.item-name-1ji {\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.item-name-1ji,\n.item-price-e8P {\n    font-size: var(--venia-typography-detail-XL-fontSize);\n    min-height: 1rem;\n}\n\n/* state: pending */\n\n.item-root_pending-2MN {\n}\n\n.item-image_pending-Fix {\n    background-color: rgb(var(--venia-global-color-gray));\n}\n\n.item-images_pending-2bM {\n}\n\n.item-name_pending-3KT {\n    background-color: rgb(var(--venia-global-color-gray));\n}\n\n.item-price_pending-M26 {\n    background-color: rgb(var(--venia-global-color-gray));\n    width: 3rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "item-root-3dM",
	"images": "item-images-1h2",
	"imageContainer": "item-imageContainer-3eG",
	"image": "item-image-3EX",
	"imagePlaceholder": "item-imagePlaceholder-1ie item-image-3EX",
	"actionsContainer": "item-actionsContainer-34W",
	"name": "item-name-1ji",
	"price": "item-price-e8P",
	"root_pending": "item-root_pending-2MN item-root-3dM",
	"image_pending": "item-image_pending-Fix item-image-3EX",
	"images_pending": "item-images_pending-2bM item-images-1h2",
	"name_pending": "item-name_pending-3KT item-name-1ji",
	"price_pending": "item-price_pending-M26 item-price-e8P"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Wishlist/AddToListButton/addToListButton.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".addToListButton-root-3XF {\n    align-content: center;\n    column-gap: 0.5rem;\n    display: inline-flex;\n    margin-left: -0.5rem;\n    padding: 0 0.5rem;\n    text-decoration: underline;\n}\n\n.addToListButton-root_selected-cGu {\n    --selectedColor: rgb(var(--venia-global-color-red-400));\n    --fill: var(--selectedColor);\n    --stroke: var(--selectedColor);\n\n    text-decoration: none;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "addToListButton-root-3XF",
	"root_selected": "addToListButton-root_selected-cGu addToListButton-root-3XF"
};

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/heart.js":
/*!********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/heart.js ***!
  \********************************************************/
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



var Heart = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
});
_c2 = Heart;
Heart.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
Heart.displayName = 'Heart';
/* harmony default export */ __webpack_exports__["a"] = (Heart);

var _c, _c2;

$RefreshReg$(_c, "Heart$forwardRef");
$RefreshReg$(_c2, "Heart");

/***/ })

}]);
//# sourceMappingURL=8.266153e86196876d19c9.js.map