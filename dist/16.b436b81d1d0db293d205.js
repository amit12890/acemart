(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/WishList/createWishlist.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/components/WishList/createWishlist.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../venia/components/Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css"), "");

// Module
exports.push([module.i, ".createWishlist-root-3Or {\n}\n\n.createWishlist-body-1l6 {\n    overflow: auto;\n}\n.createWishlist-formWrapper-2N1 {\n    display: flex;\n}\n.createWishlist-createWishlistform-3lX {\n    display: flex;\n}\n\n.createWishlist-createWishlistform-3lX label {\n    display: none;\n}\n\n.createWishlist-actionsToolbar-3j8 {\n    margin: 0 0 0 1rem;\n\n}\n\n.createWishlist-cancelButton-33p {\n    min-width: 9rem;\n}\n\n.createWishlist-confirmButton-2hE {\n\n    min-width: 9rem;\n}\n\n.createWishlist-contents-2SP {\n    padding: 1rem;\n    height: fit-content;\n}\n\n.createWishlist-createButton-BeB {\n    width: 100%;\n}\n\n.createWishlist-form-lh4 {\n    display: grid;\n    gap: 2rem;\n    padding: 0.5rem 1rem;\n    margin: auto;\n}\n\n.createWishlist-icon-1jZ {\n    stroke: rgb(var(--venia-brand-color-1-600));\n}\n\n.createWishlist-labelContainer-1lB {\n    align-items: center;\n    border: 2px dashed rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    color: rgb(var(--venia-brand-color-1-600));\n    column-gap: 0.5rem;\n    display: grid;\n    font-weight: var(--venia-global-fontWeight-semibold);\n    grid-auto-flow: column;\n    height: 6rem;\n    justify-content: center;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "createWishlist-root-3Or",
	"body": "createWishlist-body-1l6",
	"formWrapper": "createWishlist-formWrapper-2N1",
	"createWishlistform": "createWishlist-createWishlistform-3lX",
	"actionsToolbar": "createWishlist-actionsToolbar-3j8",
	"cancelButton": "createWishlist-cancelButton-33p " + __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../venia/components/Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css").locals["root_lowPriority"] + "",
	"confirmButton": "createWishlist-confirmButton-2hE " + __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../venia/components/Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css").locals["root_highPriority"] + "",
	"contents": "createWishlist-contents-2SP",
	"createButton": "createWishlist-createButton-BeB",
	"form": "createWishlist-form-lh4",
	"icon": "createWishlist-icon-1jZ",
	"labelContainer": "createWishlist-labelContainer-1lB"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/WishList/wishlistPopup.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/components/WishList/wishlistPopup.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".wishlistPopup-root-3lA {\n    position: fixed;\n    margin: auto;\n    top:0;\n    bottom:0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    z-index: 100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n\n    \n}\n\n\n.wishlistPopup-portalWrapper-2V6 {\ndisplay: flex;\n}\n\n.wishlistPopup-contentWrapper-1Si {\n    background-color: rgb(var(--page-background-color));\n    border-radius: 1px;\n    box-shadow: 0 1px 6px rgb(var(--color-gray40) / 0.2);\n    display: grid;\n    min-height: 10rem;\n    transform: translate3d(0, -8px, 0);\n    transition-duration: 192ms;\n    transition-property: transform;\n    transition-timing-function: var(--venia-global-anim-out);\n    width: var(--content-width);\n    left: 0;\n    width: 100%;\n    max-width: 400px;\n    margin: 0 auto;\n    position: relative;\n    padding: 20px;\n}\n\n.wishlistPopup-content-cW- {\n    padding: 1rem;\n}\n\n.wishlistPopup-modalClose-ETq {\n    display: inline-flex;\n    cursor: pointer;\n    position: absolute;\n    z-index: 5;\n    top: .875rem;\n    right: 1rem;\n}\n\n.wishlistPopup-modalClose-ETq button{\n    width: 24px;\n    border: none;\n    padding: 0;\n    min-width: auto;\n    height: 24px;\n    min-height: auto;\n    line-height: normal;\n    background-color: transparent;\n}\n\n.wishlistPopup-modalClose-ETq .wishlistPopup-svgIcon-3th {\n    width: 24px;\n    height: 24px;\n    fill: rgb(var(--color-gray-middle3));\n}\n\n.wishlistPopup-heading-10g {\n    font-size: 16px;\n    font-weight: bold;\n    line-height: normal;\n    margin-bottom: 10px;\n}\n.wishlistPopup-modalHeader-3rO {\n    \n}\n\n.wishlistPopup-listItemWrapper-3Hz {\n\n}\n\n.wishlistPopup-listItem-uOL {\n    margin-bottom: 8px;\n}\n\n.wishlistPopup-itemLabel-rwk {\n    margin-left: 10px;\n}\n\n\n.wishlistPopup-action-3Ol {\n\n}\n.wishlistPopup-shareButtons-2Rl {\n\n}\n.wishlistPopup-shareItemWraper-2i6 {\n\n}\n.wishlistPopup-shareItem-62E {\n    \n}\n\n.wishlistPopup-contentContainer-lIO {\n\n}\n\n.wishlistPopup-wishlistItemWrapper-3Ku {\n}\n\n.wishlistPopup-wishlistItem-2n6 {\n    margin-bottom: 5px;\n}\n\n.wishlistPopup-test-1Il {\nmargin-top: 10px;\nmargin-bottom: 10px;\n}", ""]);

// Exports
exports.locals = {
	"root": "wishlistPopup-root-3lA",
	"portalWrapper": "wishlistPopup-portalWrapper-2V6",
	"contentWrapper": "wishlistPopup-contentWrapper-1Si",
	"content": "wishlistPopup-content-cW-",
	"modalClose": "wishlistPopup-modalClose-ETq",
	"svgIcon": "wishlistPopup-svgIcon-3th",
	"heading": "wishlistPopup-heading-10g",
	"modalHeader": "wishlistPopup-modalHeader-3rO",
	"listItemWrapper": "wishlistPopup-listItemWrapper-3Hz",
	"listItem": "wishlistPopup-listItem-uOL",
	"itemLabel": "wishlistPopup-itemLabel-rwk",
	"action": "wishlistPopup-action-3Ol",
	"shareButtons": "wishlistPopup-shareButtons-2Rl",
	"shareItemWraper": "wishlistPopup-shareItemWraper-2i6",
	"shareItem": "wishlistPopup-shareItem-62E",
	"contentContainer": "wishlistPopup-contentContainer-lIO",
	"wishlistItemWrapper": "wishlistPopup-wishlistItemWrapper-3Ku",
	"wishlistItem": "wishlistPopup-wishlistItem-2n6",
	"test": "wishlistPopup-test-1Il"
};

/***/ }),

/***/ "./src/components/CompareListPage/compareListPage.gql.js":
/*!***************************************************************!*\
  !*** ./src/components/CompareListPage/compareListPage.gql.js ***!
  \***************************************************************/
/*! exports provided: UserCompareListFragment, GET_CUSTOMER_COMPARE_LIST, CREATE_COMPARE_LIST, REMOVE_ITEM_FROM_COMPARE_LIST */
/*! exports used: CREATE_COMPARE_LIST, GET_CUSTOMER_COMPARE_LIST, REMOVE_ITEM_FROM_COMPARE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserCompareListFragment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_CUSTOMER_COMPARE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_COMPARE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_ITEM_FROM_COMPARE_LIST; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

const UserCompareListFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment UserCompareListFragment on CompareList {
        uid item_count
        items {
            uid
            product {
                id sku
                name uom availability
                brand_name
                capacity
                ship_info
                prod_dimensions
                mpn material
                manufacturer
                country_of_origin
                color
                certifications
                connection
                electrical
                energy_consume
                prod_temp
                output
                description { html }
                short_description { html }
                image { url label }
                url_rewrites {
                    url
                    parameters {
                      name
                      value
                    }
                }
                price {
                    regularPrice {
                        amount {
                            currency
                            value
                        }
                    }
                }
            }
        }
    }
`;
const GET_CUSTOMER_COMPARE_LIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query customer {
        customer {
            id email
            compare_list {
                uid
                ...UserCompareListFragment
            }
        }
    }
    ${UserCompareListFragment}
`;
const CREATE_COMPARE_LIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation createCompareList(
        $input: CreateCompareListInput
    ) {
        createCompareList(input: $input) {
            uid
            ...UserCompareListFragment
        }
    }
    ${UserCompareListFragment}
`;
const REMOVE_ITEM_FROM_COMPARE_LIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation removeProductsFromCompareList(
        $input: RemoveProductsFromCompareListInput
    ) {
        removeProductsFromCompareList(input: $input) {
            uid
            ...UserCompareListFragment
        }
    }
    ${UserCompareListFragment}
`;

/***/ }),

/***/ "./src/components/CompareListPage/useCompareList.js":
/*!**********************************************************!*\
  !*** ./src/components/CompareListPage/useCompareList.js ***!
  \**********************************************************/
/*! exports provided: useCompareList */
/*! exports used: useCompareList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCompareList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _compareListPage_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareListPage.gql */ "./src/components/CompareListPage/compareListPage.gql.js");
var _s = $RefreshSig$();




const useCompareList = props => {
  _s();

  // create compaer list
  const [createCompareList, {
    error: addProductToCompareListError,
    loading: addProductToCompareListLoading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_compareListPage_gql__WEBPACK_IMPORTED_MODULE_2__[/* CREATE_COMPARE_LIST */ "a"]);
  const addProductToCompareList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (products = []) => {
    const res = await createCompareList({
      variables: {
        input: {
          products
        }
      }
    });
  }, [createCompareList]); // remove item from compaer list

  const [removeItemsFromCompareList, {
    error: removeProductFromCompareListError,
    loading: removeProductFromCompareListLoading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_compareListPage_gql__WEBPACK_IMPORTED_MODULE_2__[/* REMOVE_ITEM_FROM_COMPARE_LIST */ "c"], {
    refetchQueries: [{
      query: _compareListPage_gql__WEBPACK_IMPORTED_MODULE_2__[/* GET_CUSTOMER_COMPARE_LIST */ "b"]
    }]
  });
  const removeProductFromCompareList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (products, uid) => {
    const res = await removeItemsFromCompareList({
      variables: {
        input: {
          products,
          uid
        }
      }
    });
  }, [removeItemsFromCompareList]);
  return {
    addProductToCompareList,
    addProductToCompareListError,
    addProductToCompareListLoading,
    removeProductFromCompareList,
    removeProductFromCompareListError,
    removeProductFromCompareListLoading
  };
};

_s(useCompareList, "mUZ2GSS/yk2AneZ4cX+YM+TKfyo=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"], _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

/***/ }),

/***/ "./src/components/WishList/createWishlist.js":
/*!***************************************************************!*\
  !*** ./src/components/WishList/createWishlist.js + 1 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/data.utils.js because of ./src/components/WishList/wishlistBlock.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/url.utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/components/WishList/createWishlist.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./src/venia/components/Field/field.js + 1 modules
var field = __webpack_require__("./src/venia/components/Field/field.js");

// EXTERNAL MODULE: ./src/venia/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./src/venia/components/Button/button.js");

// EXTERNAL MODULE: ./src/venia/components/TextInput/textInput.js + 1 modules
var textInput = __webpack_require__("./src/venia/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./src/data.utils.js
var data_utils = __webpack_require__("./src/data.utils.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/components/WishList/createWishlist.css
var createWishlist = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/components/WishList/createWishlist.css");
var createWishlist_default = /*#__PURE__*/__webpack_require__.n(createWishlist);

// CONCATENATED MODULE: ./src/components/WishList/createWishlist.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createWishlist_default.a, options);



/* harmony default export */ var WishList_createWishlist = (createWishlist_default.a.locals || {});
// EXTERNAL MODULE: ./src/url.utils.js
var url_utils = __webpack_require__("./src/url.utils.js");

// CONCATENATED MODULE: ./src/components/WishList/createWishlist.js
var _s = $RefreshSig$();












const CreateWishlist = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(WishList_createWishlist, props.classes);
  const {
    callApi,
    response,
    loading,
    error
  } = Object(data_utils["a" /* useApiData */])({
    url: `${url_utils["a" /* HOST_URL */]}/rest/V1/bsscommerce/multiwishlist/save`,
    method: "post",
    isLazy: true,
    onSuccess: () => props.refreshWishlist()
  });
  const handleCreateList = Object(react["useCallback"])(data => {
    if (loading) return;
    callApi(null, {
      "multiwishlist": {
        "customerId": props.customerId,
        "wishlist_name": data.name
      }
    });
  }, [props.customerId, loading]);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.formWrapper
  }, react_default.a.createElement(esm["c" /* Form */], {
    className: classes.createWishlistform,
    initialValues: {
      visibility: 'PRIVATE'
    },
    onSubmit: handleCreateList
  }, react_default.a.createElement(field["a" /* default */], {
    classes: {
      root: classes.listName
    }
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "name",
    validate: formValidators["d" /* isRequired */],
    validateOnBlur: true,
    placeholder: "List Name"
  })), react_default.a.createElement("div", {
    className: classes.actionsToolbar
  }, react_default.a.createElement(Button_button["a" /* default */], {
    classes: classes.confirmButton,
    disabled: loading,
    priority: "high",
    type: "submit"
  }, loading ? "Loading..." : "Create")))));
};

_s(CreateWishlist, "srrIKsnM31jwKJnp8sMJWACxG/4=", false, function () {
  return [shallowMerge["a" /* default */], data_utils["a" /* useApiData */]];
});

_c = CreateWishlist;
/* harmony default export */ var components_WishList_createWishlist = __webpack_exports__["a"] = (CreateWishlist);

var _c;

$RefreshReg$(_c, "CreateWishlist");

/***/ }),

/***/ "./src/components/WishList/wishlistPopup.css":
/*!***************************************************!*\
  !*** ./src/components/WishList/wishlistPopup.css ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_wishlistPopup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./wishlistPopup.css */ "./node_modules/css-loader/dist/cjs.js?!./src/components/WishList/wishlistPopup.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_wishlistPopup_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_wishlistPopup_css__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_wishlistPopup_css__WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["a"] = (_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_wishlistPopup_css__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./src/data.utils.js":
/*!***************************!*\
  !*** ./src/data.utils.js ***!
  \***************************/
/*! exports provided: useApiData */
/*! exports used: useApiData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useApiData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _magento_peregrine_lib_context_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @magento/peregrine/lib/context/user */ "./node_modules/@magento/peregrine/lib/context/user.js");
var _s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const useApiData = ({
  url = "",
  method = "get",
  headers = {},
  data = {},
  isLazy = false,
  onSuccess = null
}) => {
  _s();

  const [{
    token
  }, _] = Object(_magento_peregrine_lib_context_user__WEBPACK_IMPORTED_MODULE_2__[/* useUserContext */ "b"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isLazy);
  const [response, setResponse] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const callApi = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (cbUrl = null, data = {}) => {
    setLoading(true);

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method,
        url: cbUrl ? cbUrl : url,
        headers: _objectSpread({
          authorization: token ? `Bearer ${token}` : ''
        }, headers),
        data
      });
      setResponse(response.data);
      setLoading(false);
      if (!!onSuccess) onSuccess(response.data);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log("file: data.utils.js ~ line 27 ~ error", error);
    }
  }, [url]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // if isLazy call api manually
    // else api will be called as soon as component renders
    if (!isLazy) callApi(data);
  }, []);
  return {
    callApi,
    loading,
    response,
    error
  };
};

_s(useApiData, "8HYBsedtXtwfb2TX/j6yquxwtIg=", false, function () {
  return [_magento_peregrine_lib_context_user__WEBPACK_IMPORTED_MODULE_2__[/* useUserContext */ "b"]];
});

/***/ }),

/***/ "./src/venia/components/Field/field.js":
/*!*********************************************************!*\
  !*** ./src/venia/components/Field/field.js + 1 modules ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/Field/field.css (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/Field/field.css
var field = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Field/field.css");
var field_default = /*#__PURE__*/__webpack_require__.n(field);

// CONCATENATED MODULE: ./src/venia/components/Field/field.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(field_default.a, options);



/* harmony default export */ var Field_field = (field_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/Field/field.js
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

/***/ })

}]);
//# sourceMappingURL=16.b436b81d1d0db293d205.js.map