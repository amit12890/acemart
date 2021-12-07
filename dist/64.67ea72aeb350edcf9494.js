(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/MiniCart/ProductList/item.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/MiniCart/ProductList/item.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".item-root-Jiv {\n    display: flex;\n    opacity: 1;\n    transition-delay: 64ms;\n    transition-duration: 384ms;\n    transition-property: opacity;\n    transition-timing-function: var(--venia-global-anim-standard);\n    font-size: var(--fontSize-100);\n    border-top: 1px solid rgb(var(--color-gray-light01));\n    padding-top: 10px;\n    margin-top: 10px;\n}\n\n.item-root-Jiv:first-child {\n    border-top: 10px;\n    margin-top: 0;\n    padding-top: 0;\n}\n\n.item-root_disabled-3l6 {\n    opacity: 0.5;\n}\n.item-itemThumbnailWrapper-1Y7 {\n    margin-right: 15px;\n    width: 105px;\n}\n.item-thumbnailContainer-3Mx {\n    grid-column: 1 / span 1;\n    grid-row: 1 / span 6;\n}\n\n.item-thumbnail-Vqs {\n    border: solid 1px rgb(var(--venia-global-color-border));\n}\n.item-itemDetails-nn3 {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    flex-grow: 1;\n    \n}\n.item-name-KME {\n    font-weight: var(--font-weight-bold);\n    grid-column: 2 / span 1;\n    grid-row: 1 / span 1;\n    margin-bottom: 0.5rem;\n    padding-right: 20px;\n}\n\n.item-options-3Jc {\n    font-size: var(--fontSize-75);\n    color: rgb(var(--color-gray-middle1));\n}\n\n.item-itemQtyPriceWrapper-1-i {\n    display: flex;\n    flex-direction: column;\n}\n\n\n.item-quantity-3LH {\n    grid-column: 2 / span 1;\n    grid-row: 4 / span 1;\n    margin-bottom: 5px;\n}\n\n.item-price-2F9 {\n    grid-column: 2 / span 1;\n    grid-row: 5 / span 1;\n}\n\n.item-stockStatus-3cP {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n    grid-column: 2;\n    grid-row: 6;\n}\n\n.item-deleteButton-3HF {\nposition: absolute;\nright: 0;\ntop:0;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "item-root-Jiv",
	"root_disabled": "item-root_disabled-3l6 item-root-Jiv",
	"itemThumbnailWrapper": "item-itemThumbnailWrapper-1Y7",
	"thumbnailContainer": "item-thumbnailContainer-3Mx",
	"thumbnail": "item-thumbnail-Vqs",
	"itemDetails": "item-itemDetails-nn3",
	"name": "item-name-KME",
	"options": "item-options-3Jc",
	"itemQtyPriceWrapper": "item-itemQtyPriceWrapper-1-i",
	"quantity": "item-quantity-3LH",
	"price": "item-price-2F9",
	"stockStatus": "item-stockStatus-3cP",
	"deleteButton": "item-deleteButton-3HF"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/MiniCart/ProductList/productList.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/MiniCart/ProductList/productList.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".productList-root-3WK {\n    \n}\n", ""]);

// Exports
exports.locals = {
	"root": "productList-root-3WK"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/MiniCart/miniCart.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/MiniCart/miniCart.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css"), "");

// Module
exports.push([module.i, ".miniCart-root-3pe {\n    \n    overflow: visible;\n    opacity: 0;\n    position: absolute;\n    top: 50px;\n    transition: opacity 192ms var(--venia-global-anim-out),\n        visibility 192ms var(--venia-global-anim-out),\n        /* Adding delay to move container off the screen after previous transitions happened */\n            left 0s 192ms;\n    visibility: hidden;\n    width: 300px;\n    /* max-width wider than header to let dropdown to move left on wider screens while still staying near the trigger */\n    max-width: calc(\n        var(--venia-global-maxWidth) + var(--content-width) * 2 - 8rem\n    );\n    z-index: 11;\n    right: 0;\n    left: auto;\n   \n}\n\n\n.miniCart-root_open-1MI {\n    opacity: 1;\n    transition: opacity 224ms var(--venia-global-anim-in),\n        visibility 224ms var(--venia-global-anim-in), left 0s;\n    visibility: visible;\n}\n\n.miniCart-contents-1lC {\n    background-color: rgb(var(--color-white));\n    box-shadow: 0 1px 6px rgb(var(--venia-global-color-gray-900) / 0.2);\n    /* These heights may change based on PWA-605 and should be based on 1.5 and 2.5 visible items. */\n    display: flex;\n    flex-direction: column;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n    width: 100%;\n\n    \n}\n\n.miniCart-contents_open-1F6 {\n\n    transform: translate3d(0,0, 0);\n    transition-duration: 224ms;\n    transition-timing-function: var(--venia-global-anim-in);\n}\n.miniCart-panelRow-IgV {\n    padding: 0 15px; \n}\n\n.miniCart-header-OE5 {\n    flex-shrink: 0;\n    position: relative;\n    align-items: center;\n    border-bottom: 1px solid rgb(var(--border-color-base));\n    padding-bottom: 10px;\n    font-size: var(--venia-global-typography-heading-XS-fontSize);\n    font-weight: var(--font-weight-bold);\n    line-height: var(--venia-global-typography-heading-lineHeight);\n}\n.miniCart-headerPanelContent-3aP {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 15px;\n}\n\n.miniCart-stockStatusMessageContainer-2MJ {\n    grid-column-end: span 2;\n}\n\n.miniCart-stockStatusMessageContainer-2MJ:empty {\n    display: none;\n}\n\n.miniCart-body-UL5 {\n    min-height: 10rem;\n    overflow-y: auto;\n    height: 100%;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    \n}\n\n.miniCart-modalClose-3GB {\n    display: none;\n    cursor: pointer;\n    position: absolute;\n    z-index: 5;\n    top: 5px;\n    right: 5px;\n\n}\n\n\n.miniCart-modalClose-3GB .miniCart-svgIcon-3eM {\n    width: 24px;\n    height: 24px;\n    fill: rgb(var(--color-gray-middle3));\n}\n\n.miniCart-quantity-3KJ {\n    opacity: 1;\n    transition-delay: 64ms;\n    transition-duration: 384ms;\n    transition-property: opacity;\n    transition-timing-function: var(--venia-global-anim-standard);\n    margin-right: 10px;\n}\n\n.miniCart-quantity_loading-3hc {\n    opacity: 0.5;\n}\n\n.miniCart-price-2I7 {\n    opacity: 1;\n    transition-delay: 64ms;\n    transition-duration: 384ms;\n    transition-property: opacity;\n    transition-timing-function: var(--venia-global-anim-standard);\n}\n\n.miniCart-price_loading-1Yz {\n    opacity: 0.5;\n}\n\n.miniCart-footer-35T {\n    flex-shrink: 0;\n    position: relative;\n\n    align-items: center;\n    border-top: 2px solid rgb(var(--venia-global-color-gray));\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-size: var(--venia-typography-body-S-fontSize);\n    justify-items: center;\n    line-height: var(--venia-typography-body-lineHeight);\n    min-height: 3rem;\n    overflow: hidden;\n\n    \n}\n\n.miniCart-footer-35T .miniCart-panelRow-IgV {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n}\n\n\n.miniCart-checkoutButton-1mA {\n    grid-column: 1 / span 1;\n    background-color: rgb(var(--venia-brand-color-1-700));\n    border: 2px solid rgb(var(--venia-brand-color-1-700));\n    font-weight:var(--font-weight-bold);\n    margin-bottom: 10px;\n}\n.miniCart-checkoutButton-1mA:hover {\n    color: rgb(var(--venia-brand-color-1-700)); \n    border-color: rgb(var(--venia-brand-color-1-700));\n}\n\n.miniCart-editCartButton-2C2 {\n    background-color: rgb(var(--color-white));\n    color: rgb(var(--stroke));\n    border-color: rgb(var(--stroke));\n    display: inline-flex;\n    align-self: self-start;\n\n}\n\n.miniCart-editCartButton-2C2:hover {\n    background-color: rgb(var(--stroke));\n    color: rgb(var(--color-white));\n}\n\n.miniCart-emptyCart-2kV {\n    display: grid;\n    gap: 2rem;\n    padding: 2rem;\n}\n\n.miniCart-emptyMessage-2p5 {\n    margin: auto;\n    font-weight:var(--font-weight-bold);\n}\n\n\n@media (min-width: 1024px) {\n    \n    .miniCart-root-3pe {\n        width: 20vw;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "miniCart-root-3pe",
	"root_open": "miniCart-root_open-1MI miniCart-root-3pe",
	"contents": "miniCart-contents-1lC",
	"contents_open": "miniCart-contents_open-1F6 miniCart-contents-1lC",
	"panelRow": "miniCart-panelRow-IgV",
	"header": "miniCart-header-OE5",
	"headerPanelContent": "miniCart-headerPanelContent-3aP",
	"stockStatusMessageContainer": "miniCart-stockStatusMessageContainer-2MJ",
	"body": "miniCart-body-UL5",
	"modalClose": "miniCart-modalClose-3GB",
	"svgIcon": "miniCart-svgIcon-3eM",
	"quantity": "miniCart-quantity-3KJ",
	"quantity_loading": "miniCart-quantity_loading-3hc miniCart-quantity-3KJ",
	"price": "miniCart-price-2I7",
	"price_loading": "miniCart-price_loading-1Yz miniCart-quantity-3KJ",
	"footer": "miniCart-footer-35T",
	"checkoutButton": "miniCart-checkoutButton-1mA " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css").locals["root_highPriority"] + "",
	"editCartButton": "miniCart-editCartButton-2C2 " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css").locals["root_normalPriority"] + "",
	"emptyCart": "miniCart-emptyCart-2kV",
	"emptyMessage": "miniCart-emptyMessage-2p5"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/RichText/richText.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/RichText/richText.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".richText-root-1K5 {\n    padding: 0;\n}\n\n.richText-root-1K5 p {\n    margin: 0 0 1rem;\n}\n\n.richText-root-1K5 ul {\n    list-style-type: disc;\n    margin: 0 0 1rem;\n    padding-left: 2.5rem;\n}\n\n\n.richText-resourcesContent-1gl {\n    margin: 0;\n}", ""]);

// Exports
exports.locals = {
	"root": "richText-root-1K5",
	"resourcesContent": "richText-resourcesContent-1gl"
};

/***/ }),

/***/ "./src/venia/components/MiniCart/index.js":
/*!************************************************************!*\
  !*** ./src/venia/components/MiniCart/index.js + 7 modules ***!
  \************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useScrollLock.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/MiniCart/useItem.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/MiniCart/useMiniCart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/configuredVariant.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/makeUrl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/StockStatusMessage/stockStatusMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/alert-circle.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/lock.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/trash-2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/RichText/richText.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/MiniCart/ProductList/item.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/MiniCart/ProductList/productList.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/MiniCart/miniCart.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_MiniCart_miniCart; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__("./node_modules/react-feather/dist/icons/alert-circle.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/lock.js
var lock = __webpack_require__("./node_modules/react-feather/dist/icons/lock.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useScrollLock.js
var useScrollLock = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useScrollLock.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js
var useToasts = __webpack_require__("./node_modules/@magento/peregrine/lib/Toasts/useToasts.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Price/price.js
var price = __webpack_require__("./node_modules/@magento/peregrine/lib/Price/price.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/MiniCart/useMiniCart.js + 1 modules
var useMiniCart = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/MiniCart/useMiniCart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./src/venia/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./src/venia/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/StockStatusMessage/stockStatusMessage.js + 2 modules
var stockStatusMessage = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/StockStatusMessage/stockStatusMessage.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__("./node_modules/react-feather/dist/icons/trash-2.js");

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var Price_price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/MiniCart/useItem.js
var useItem = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/MiniCart/useItem.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/makeUrl.js
var makeUrl = __webpack_require__("./node_modules/@magento/peregrine/lib/util/makeUrl.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js + 1 modules
var productOptions = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js");

// EXTERNAL MODULE: ./src/venia/components/Image/image.js + 2 modules
var Image_image = __webpack_require__("./src/venia/components/Image/image.js");

// EXTERNAL MODULE: ./src/venia/components/RichText/richText.js + 1 modules
var richText = __webpack_require__("./src/venia/components/RichText/richText.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/configuredVariant.js
var configuredVariant = __webpack_require__("./node_modules/@magento/peregrine/lib/util/configuredVariant.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/MiniCart/ProductList/item.css
var ProductList_item = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/MiniCart/ProductList/item.css");
var item_default = /*#__PURE__*/__webpack_require__.n(ProductList_item);

// CONCATENATED MODULE: ./src/venia/components/MiniCart/ProductList/item.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(item_default.a, options);



/* harmony default export */ var MiniCart_ProductList_item = (item_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/MiniCart/ProductList/item.js
var _s = $RefreshSig$();

















const Item = props => {
  _s();

  const {
    classes: propClasses,
    product,
    id,
    quantity,
    configurable_options,
    handleRemoveItem,
    prices,
    closeMiniCart,
    configurableThumbnailSource
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(MiniCart_ProductList_item, propClasses);
  const itemLink = Object(react["useMemo"])(() => Object(makeUrl["a" /* default */])(`/${product.url_key}${product.url_suffix || ''}`), [product.url_key, product.url_suffix]);
  const stockStatusText = product.stock_status === 'OUT_OF_STOCK' ? formatMessage({
    id: 'productList.outOfStock',
    defaultMessage: 'Out-of-stock'
  }) : '';
  const {
    isDeleting,
    removeItem
  } = Object(useItem["a" /* useItem */])({
    id,
    handleRemoveItem
  });
  const rootClass = isDeleting ? classes.root_disabled : classes.root;
  const configured_variant = Object(configuredVariant["a" /* default */])(configurable_options, product);
  return react_default.a.createElement("div", {
    className: rootClass
  }, react_default.a.createElement("div", {
    className: classes.itemThumbnailWrapper
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    className: classes.thumbnailContainer,
    to: itemLink,
    onClick: closeMiniCart
  }, react_default.a.createElement(Image_image["a" /* default */], {
    alt: product.name,
    classes: {
      root: classes.thumbnail
    },
    width: 75,
    src: configurableThumbnailSource === 'itself' && configured_variant ? configured_variant.thumbnail.url : product.thumbnail.url
  }))), react_default.a.createElement("div", {
    className: classes.itemDetails
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    className: classes.name,
    to: itemLink,
    onClick: closeMiniCart
  }, react_default.a.createElement(richText["a" /* default */], {
    content: product.name
  })), react_default.a.createElement(productOptions["a" /* default */], {
    options: configurable_options,
    classes: {
      options: classes.options
    }
  }), react_default.a.createElement("div", {
    className: classes.itemQtyPriceWrapper
  }, react_default.a.createElement("span", {
    className: classes.quantity
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'productList.quantity',
    defaultMessage: 'Qty :',
    values: {
      quantity
    }
  })), react_default.a.createElement("span", {
    className: classes.price
  }, react_default.a.createElement(Price_price["a" /* default */], {
    currencyCode: prices.price.currency,
    value: prices.price.value
  }), "/ ", product.uom)), react_default.a.createElement("span", {
    className: classes.stockStatus
  }, stockStatusText), react_default.a.createElement("button", {
    onClick: removeItem,
    type: "button",
    className: classes.deleteButton,
    disabled: isDeleting
  }, react_default.a.createElement(icon["a" /* default */], {
    size: 16,
    src: trash_2["a" /* default */],
    classes: {
      icon: classes.editIcon
    }
  }))));
};

_s(Item, "NUKyEs8V9AlHqklnNwaFVtuJHFI=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */], useItem["a" /* useItem */]];
});

_c = Item;
/* harmony default export */ var components_MiniCart_ProductList_item = (Item);
Item.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    thumbnail: prop_types["string"],
    name: prop_types["string"],
    options: prop_types["string"],
    quantity: prop_types["string"],
    price: prop_types["string"],
    editButton: prop_types["string"],
    editIcon: prop_types["string"]
  }),
  product: Object(prop_types["shape"])({
    name: prop_types["string"],
    thumbnail: Object(prop_types["shape"])({
      url: prop_types["string"]
    })
  }),
  id: prop_types["string"],
  quantity: prop_types["number"],
  configurable_options: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    id: prop_types["number"],
    option_label: prop_types["string"],
    value_id: prop_types["number"],
    value_label: prop_types["string"]
  })),
  handleRemoveItem: prop_types["func"],
  prices: Object(prop_types["shape"])({
    price: Object(prop_types["shape"])({
      value: prop_types["number"],
      currency: prop_types["string"]
    })
  }),
  configured_variant: Object(prop_types["shape"])({
    thumbnail: Object(prop_types["shape"])({
      url: prop_types["string"]
    })
  }),
  configurableThumbnailSource: Object(prop_types["oneOf"])(['parent', 'itself'])
};

var _c;

$RefreshReg$(_c, "Item");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/MiniCart/ProductList/productList.css
var ProductList_productList = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/MiniCart/ProductList/productList.css");
var productList_default = /*#__PURE__*/__webpack_require__.n(ProductList_productList);

// CONCATENATED MODULE: ./src/venia/components/MiniCart/ProductList/productList.css

            

var productList_options = {"injectType":"styleTag"};

productList_options.insert = "head";
productList_options.singleton = false;

var productList_update = injectStylesIntoStyleTag_default()(productList_default.a, productList_options);



/* harmony default export */ var MiniCart_ProductList_productList = (productList_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/MiniCart/ProductList/productList.js
var productList_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const ProductList = props => {
  productList_s();

  const {
    items,
    handleRemoveItem,
    classes: propClasses,
    closeMiniCart,
    configurableThumbnailSource
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(MiniCart_ProductList_productList, propClasses);
  const cartItems = Object(react["useMemo"])(() => {
    if (items) {
      return items.map(item => react_default.a.createElement(components_MiniCart_ProductList_item, _extends({
        key: item.id
      }, item, {
        closeMiniCart: closeMiniCart,
        handleRemoveItem: handleRemoveItem,
        configurableThumbnailSource: configurableThumbnailSource
      })));
    }
  }, [items, handleRemoveItem, closeMiniCart, configurableThumbnailSource]);
  return react_default.a.createElement("div", {
    className: classes.root
  }, cartItems);
};

productList_s(ProductList, "deOlJJLE76zxCCnqJaDP3QUXIPE=", false, function () {
  return [shallowMerge["a" /* default */]];
});

productList_c = ProductList;
/* harmony default export */ var components_MiniCart_ProductList_productList = (ProductList);
ProductList.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  items: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    product: Object(prop_types["shape"])({
      name: prop_types["string"],
      thumbnail: Object(prop_types["shape"])({
        url: prop_types["string"]
      })
    }),
    id: prop_types["string"],
    quantity: prop_types["number"],
    configurable_options: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      label: prop_types["string"],
      value: prop_types["string"]
    })),
    prices: Object(prop_types["shape"])({
      price: Object(prop_types["shape"])({
        value: prop_types["number"],
        currency: prop_types["string"]
      })
    }),
    configured_variant: Object(prop_types["shape"])({
      thumbnail: Object(prop_types["shape"])({
        url: prop_types["string"]
      })
    })
  })),
  configurableThumbnailSource: Object(prop_types["oneOf"])(['parent', 'itself']),
  handleRemoveItem: prop_types["func"]
};

var productList_c;

$RefreshReg$(productList_c, "ProductList");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/MiniCart/miniCart.css
var miniCart = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/MiniCart/miniCart.css");
var miniCart_default = /*#__PURE__*/__webpack_require__.n(miniCart);

// CONCATENATED MODULE: ./src/venia/components/MiniCart/miniCart.css

            

var miniCart_options = {"injectType":"styleTag"};

miniCart_options.insert = "head";
miniCart_options.singleton = false;

var miniCart_update = injectStylesIntoStyleTag_default()(miniCart_default.a, miniCart_options);



/* harmony default export */ var MiniCart_miniCart = (miniCart_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js + 1 modules
var cartPageFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js");

// CONCATENATED MODULE: ./src/venia/components/MiniCart/miniCart.gql.js


const ProductListFragment = client["gql"]`
    fragment ProductListFragment on Cart {
        id
        items {
            id
            product {
                id
                name
                url_key
                url_suffix
                uom
                thumbnail {
                    url
                }
                stock_status
                ... on ConfigurableProduct {
                    variants {
                        attributes {
                            uid
                        }
                        product {
                            id
                            thumbnail {
                                url
                            }
                        }
                    }
                }
            }
            prices {
                price {
                    currency
                    value
                }
            }
            quantity
            ... on ConfigurableCartItem {
                configurable_options {
                    id
                    option_label
                    value_id
                    value_label
                }
            }
        }
    }
`;
const MiniCartFragment = client["gql"]`
    fragment MiniCartFragment on Cart {
        id
        total_quantity
        prices {
            subtotal_excluding_tax {
                currency
                value
            }
        }
        ...ProductListFragment
    }
    ${ProductListFragment}
`;
/**
 * @deprecated - Moved to @magento/peregrine/lib/talons/MiniCart/miniCartFragments.gql
 */


const MINI_CART_QUERY = client["gql"]`
    query MiniCartQuery($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...MiniCartFragment
        }
    }
    ${MiniCartFragment}
`;
const REMOVE_ITEM_MUTATION = client["gql"]`
    mutation RemoveItemForMiniCart($cartId: String!, $itemId: Int!) {
        removeItemFromCart(input: { cart_id: $cartId, cart_item_id: $itemId })
            @connection(key: "removeItemFromCart") {
            cart {
                id
                ...MiniCartFragment
                ...CartPageFragment
            }
        }
    }
    ${MiniCartFragment}
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
/* harmony default export */ var miniCart_gql = ({
  miniCartQuery: MINI_CART_QUERY,
  removeItemMutation: REMOVE_ITEM_MUTATION
});
// CONCATENATED MODULE: ./src/venia/components/MiniCart/miniCart.js
var miniCart_s = $RefreshSig$();














const errorIcon = react_default.a.createElement(icon["a" /* default */], {
  src: alert_circle["a" /* default */],
  size: 20
});
/**
 * The MiniCart component shows a limited view of the user's cart.
 *
 * @param {Boolean} props.isOpen - Whether or not the MiniCart should be displayed.
 * @param {Function} props.setIsOpen - Function to toggle mini cart
 */

const MiniCart = react_default.a.forwardRef(miniCart_c = miniCart_s((props, ref) => {
  miniCart_s();

  const {
    isOpen,
    setIsOpen
  } = props; // Prevent the page from scrolling in the background
  // when the MiniCart is open.

  Object(useScrollLock["a" /* useScrollLock */])(isOpen);
  const talonProps = Object(useMiniCart["a" /* useMiniCart */])({
    setIsOpen,
    operations: miniCart_gql
  });
  const {
    closeMiniCart,
    errorMessage,
    handleEditCart,
    handleProceedToCheckout,
    handleRemoveItem,
    loading,
    productList,
    subTotal,
    totalQuantity,
    configurableThumbnailSource
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(MiniCart_miniCart, props.classes);
  const rootClass = isOpen ? classes.root_open : classes.root;
  const contentsClass = isOpen ? classes.contents_open : classes.contents;
  const quantityClassName = loading ? classes.quantity_loading : classes.quantity;
  const priceClassName = loading ? classes.price_loading : classes.price;
  const isCartEmpty = !(productList && productList.length);
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  Object(react["useEffect"])(() => {
    if (errorMessage) {
      addToast({
        type: 'error',
        icon: errorIcon,
        message: errorMessage,
        dismissable: true,
        timeout: 7000
      });
    }
  }, [addToast, errorMessage]);
  const header = subTotal ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: classes.headerPanelContent
  }, react_default.a.createElement("div", {
    className: classes.stockStatusMessageContainer
  }, react_default.a.createElement(stockStatusMessage["a" /* default */], {
    cartItems: productList
  })), react_default.a.createElement("span", {
    className: quantityClassName
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'miniCart.totalQuantity',
    defaultMessage: 'Items',
    values: {
      totalQuantity
    }
  })), react_default.a.createElement("span", {
    className: priceClassName
  }, react_default.a.createElement("span", null, react_default.a.createElement(message["a" /* default */], {
    id: 'miniCart.subtotal',
    defaultMessage: 'Subtotal: '
  })), react_default.a.createElement(price["a" /* default */], {
    currencyCode: subTotal.currency,
    value: subTotal.value
  })))) : null;
  const contents = isCartEmpty ? react_default.a.createElement("div", {
    className: classes.body
  }, react_default.a.createElement("div", {
    className: classes.panelRow
  }, react_default.a.createElement("div", {
    className: classes.emptyCart
  }, react_default.a.createElement("div", {
    className: classes.emptyMessage
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'miniCart.emptyMessage',
    defaultMessage: 'There are no items in your cart.'
  }))))) : react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: classes.header
  }, react_default.a.createElement("div", {
    className: classes.panelRow
  }, header)), react_default.a.createElement("div", {
    className: classes.body
  }, react_default.a.createElement("div", {
    className: classes.panelRow
  }, react_default.a.createElement(components_MiniCart_ProductList_productList, {
    items: productList,
    loading: loading,
    handleRemoveItem: handleRemoveItem,
    closeMiniCart: closeMiniCart,
    configurableThumbnailSource: configurableThumbnailSource
  }))), react_default.a.createElement("div", {
    className: classes.footer
  }, react_default.a.createElement("div", {
    className: classes.panelRow
  }, react_default.a.createElement(Button_button["a" /* default */], {
    onClick: handleEditCart,
    priority: "high",
    className: classes.editCartButton,
    disabled: loading || isCartEmpty
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'miniCart.editCart.Button',
    defaultMessage: 'View Cart'
  })), react_default.a.createElement(Button_button["a" /* default */], {
    onClick: handleProceedToCheckout,
    priority: "high",
    className: classes.checkoutButton,
    disabled: loading || isCartEmpty
  }, react_default.a.createElement(icon["a" /* default */], {
    size: 16,
    src: lock["a" /* default */],
    classes: {
      icon: classes.checkoutIcon
    }
  }), react_default.a.createElement(message["a" /* default */], {
    id: 'miniCart.checkout',
    defaultMessage: 'CHECKOUT'
  })))));
  return react_default.a.createElement("aside", {
    className: rootClass
  }, react_default.a.createElement("div", {
    ref: ref,
    className: contentsClass
  }, react_default.a.createElement("div", {
    onClick: () => setIsOpen(false),
    className: classes.modalClose
  }, react_default.a.createElement("i", {
    className: classes.iconWrapper
  }, react_default.a.createElement("svg", {
    className: classes.svgIcon,
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, react_default.a.createElement("title", null, "remove"), react_default.a.createElement("path", {
    d: "M25.313 9.219l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"
  })))), contents));
}, "499N2NSjyGG8w4kM3ghgYMeKdgw=", false, function () {
  return [useScrollLock["a" /* useScrollLock */], useMiniCart["a" /* useMiniCart */], shallowMerge["a" /* default */], useToasts["a" /* useToasts */]];
}));
_c2 = MiniCart;
/* harmony default export */ var components_MiniCart_miniCart = (MiniCart);
MiniCart.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_open: prop_types["string"],
    contents: prop_types["string"],
    contents_open: prop_types["string"],
    header: prop_types["string"],
    body: prop_types["string"],
    footer: prop_types["string"],
    checkoutButton: prop_types["string"],
    editCartButton: prop_types["string"],
    emptyCart: prop_types["string"],
    emptyMessage: prop_types["string"],
    stockStatusMessageContainer: prop_types["string"]
  }),
  isOpen: prop_types["bool"]
};

var miniCart_c, _c2;

$RefreshReg$(miniCart_c, "MiniCart$React.forwardRef");
$RefreshReg$(_c2, "MiniCart");
// CONCATENATED MODULE: ./src/venia/components/MiniCart/index.js


/***/ }),

/***/ "./src/venia/components/RichText/richText.js":
/*!***************************************************************!*\
  !*** ./src/venia/components/RichText/richText.js + 1 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/RichText/richText.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/RichText/richText.css
var richText = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/RichText/richText.css");
var richText_default = /*#__PURE__*/__webpack_require__.n(richText);

// CONCATENATED MODULE: ./src/venia/components/RichText/richText.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(richText_default.a, options);



/* harmony default export */ var RichText_richText = (richText_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/RichText/richText.js
var _s = $RefreshSig$();





const toHTML = str => ({
  __html: str
});

const RichText = props => {
  _s();

  const {
    content
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(RichText_richText, props.classes);
  return react_default.a.createElement("div", {
    className: classes.root,
    dangerouslySetInnerHTML: toHTML(content)
  });
};

_s(RichText, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = RichText;
/* harmony default export */ var components_RichText_richText = __webpack_exports__["a"] = (RichText);

var _c;

$RefreshReg$(_c, "RichText");

/***/ })

}]);
//# sourceMappingURL=64.67ea72aeb350edcf9494.js.map