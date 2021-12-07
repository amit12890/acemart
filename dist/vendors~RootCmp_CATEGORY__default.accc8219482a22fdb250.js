(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~RootCmp_CATEGORY__default"],{

/***/ "./node_modules/@magento/peregrine/lib/talons/RootComponents/Category/useNoProductsFound.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/RootComponents/Category/useNoProductsFound.js ***!
  \**************************************************************************************************/
/*! exports provided: useNoProductsFound */
/*! exports used: useNoProductsFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useNoProductsFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/catalog */ "./node_modules/@magento/peregrine/lib/context/catalog.js");
var _s = $RefreshSig$();



const NUM_CATEGORIES_TO_SHOW = 3; // The default category does not have a parentId.

const isNonDefaultCategory = category => Boolean(category.parentId);
/**
 * Returns props necessary to render a NoProductsFound component.
 *
 * @param {object} props
 * @param {number} props.categoryId - The ID of the category that has no products.
 *
 * @returns {object}
 * @param {array} recommendedCategories - A list of categories for the UI to recommend.
 */


const useNoProductsFound = props => {
  _s();

  const {
    categoryId
  } = props;
  const [{
    categories
  }] = Object(_context_catalog__WEBPACK_IMPORTED_MODULE_1__[/* useCatalogContext */ "b"])();
  const recommendedCategories = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    // We know this category is empty, don't recommend it.
    const isNotSameCategory = category => category.id !== categoryId;

    const filteredCategories = Object.values(categories).filter(isNonDefaultCategory).filter(isNotSameCategory);
    const numCategories = filteredCategories.length;
    let categoriesToRecommend;

    if (numCategories <= NUM_CATEGORIES_TO_SHOW) {
      // Not enough categories to randomize, just take them all.
      categoriesToRecommend = filteredCategories;
    } else {
      // We have more categories than we want to show.
      // Randomly select a subset of them.
      const maxStartIndex = numCategories - NUM_CATEGORIES_TO_SHOW + 1;
      const startIndex = Math.floor(Math.random() * maxStartIndex);
      const endIndex = startIndex + NUM_CATEGORIES_TO_SHOW;
      categoriesToRecommend = filteredCategories.slice(startIndex, endIndex);
    }

    return categoriesToRecommend;
  }, [categoryId, categories]);
  return {
    recommendedCategories
  };
};

_s(useNoProductsFound, "M8yFc7pca/UmzoUDw8T51hFS3zU=", false, function () {
  return [_context_catalog__WEBPACK_IMPORTED_MODULE_1__[/* useCatalogContext */ "b"]];
});

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

/***/ "./node_modules/react-feather/dist/icons/chevron-down.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/chevron-down.js ***!
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



var ChevronDown = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
    points: "6 9 12 15 18 9"
  }));
});
_c2 = ChevronDown;
ChevronDown.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
ChevronDown.displayName = 'ChevronDown';
/* harmony default export */ __webpack_exports__["a"] = (ChevronDown);

var _c, _c2;

$RefreshReg$(_c, "ChevronDown$forwardRef");
$RefreshReg$(_c2, "ChevronDown");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/chevron-left.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/chevron-left.js ***!
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



var ChevronLeft = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
    points: "15 18 9 12 15 6"
  }));
});
_c2 = ChevronLeft;
ChevronLeft.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
ChevronLeft.displayName = 'ChevronLeft';
/* harmony default export */ __webpack_exports__["a"] = (ChevronLeft);

var _c, _c2;

$RefreshReg$(_c, "ChevronLeft$forwardRef");
$RefreshReg$(_c2, "ChevronLeft");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/fast-forward.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/fast-forward.js ***!
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



var FastForward = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "13 19 22 12 13 5 13 19"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "2 19 11 12 2 5 2 19"
  }));
});
_c2 = FastForward;
FastForward.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
FastForward.displayName = 'FastForward';
/* harmony default export */ __webpack_exports__["a"] = (FastForward);

var _c, _c2;

$RefreshReg$(_c, "FastForward$forwardRef");
$RefreshReg$(_c2, "FastForward");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/rewind.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/rewind.js ***!
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



var Rewind = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "11 19 2 12 11 5 11 19"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "22 19 13 12 22 5 22 19"
  }));
});
_c2 = Rewind;
Rewind.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
Rewind.displayName = 'Rewind';
/* harmony default export */ __webpack_exports__["a"] = (Rewind);

var _c, _c2;

$RefreshReg$(_c, "Rewind$forwardRef");
$RefreshReg$(_c2, "Rewind");

/***/ })

}]);
//# sourceMappingURL=vendors~RootCmp_CATEGORY__default.accc8219482a22fdb250.js.map