(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js + 2 modules ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/app.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Portal/portal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/x.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__("./node_modules/react-feather/dist/icons/x.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/app.js
var app = __webpack_require__("./node_modules/@magento/peregrine/lib/context/app.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/ShippingInformation/useEditModal.js
var _s = $RefreshSig$();


const useEditModal = () => {
  _s();

  const [{
    drawer
  }, {
    closeDrawer
  }] = Object(app["b" /* useAppContext */])();
  const isOpen = drawer === 'shippingInformation.edit';
  return {
    handleClose: closeDrawer,
    isOpen
  };
};

_s(useEditModal, "ioFDI0CZeLHe7jYwjXNvCpQ49MI=", false, function () {
  return [app["b" /* useAppContext */]];
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Portal/portal.js
var portal = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Portal/portal.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js + 8 modules
var addressForm = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.css
var editModal = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.css");
var editModal_default = /*#__PURE__*/__webpack_require__.n(editModal);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editModal_default.a, options);



/* harmony default export */ var ShippingInformation_editModal = (editModal_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js
var editModal_s = $RefreshSig$();












const EditModal = props => {
  editModal_s();

  const {
    classes: propClasses,
    shippingData,
    onSuccess
  } = props;
  const talonProps = useEditModal();
  const {
    handleClose,
    isOpen
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(ShippingInformation_editModal, propClasses);
  const rootClass = isOpen ? classes.root_open : classes.root; // Unmount the form to force a reset back to original values on close

  const bodyElement = isOpen ? react_default.a.createElement(addressForm["a" /* default */], {
    onSuccess: onSuccess,
    afterSubmit: handleClose,
    onCancel: handleClose,
    shippingData: shippingData
  }) : null;
  return react_default.a.createElement(portal["a" /* default */], null, react_default.a.createElement("aside", {
    className: rootClass
  }, react_default.a.createElement("div", {
    className: classes.header
  }, react_default.a.createElement("span", {
    className: classes.headerText
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'checkoutPage.editShippingInfo',
    defaultMessage: 'Edit Shipping Information'
  })), react_default.a.createElement("button", {
    className: classes.closeButton,
    onClick: handleClose
  }, react_default.a.createElement(icon["a" /* default */], {
    src: x["a" /* default */]
  }))), react_default.a.createElement("div", {
    className: classes.body
  }, bodyElement)));
};

editModal_s(EditModal, "BR2apGpLBQ28AAvW91PXrlUE3gk=", false, function () {
  return [useEditModal, shallowMerge["a" /* default */]];
});

_c = EditModal;
/* harmony default export */ var CheckoutPage_ShippingInformation_editModal = __webpack_exports__["default"] = (EditModal);
EditModal.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_open: prop_types["string"],
    body: prop_types["string"],
    header: prop_types["string"],
    headerText: prop_types["string"]
  }),
  shippingData: prop_types["object"]
};

var _c;

$RefreshReg$(_c, "EditModal");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".editModal-root-3_7 {\n    background-color: white;\n    display: grid;\n    left: calc(50% - 370px);\n    grid-template-rows: auto 1fr;\n    max-height: 90vh;\n    max-width: 740px;\n    opacity: 0;\n    overflow: hidden;\n    position: fixed;\n    top: 5vh;\n    transform: scale(1.15);\n    transition-duration: 192ms;\n    transition-timing-function: var(--venia-global-anim-out);\n    transition-property: opacity, transform, visibility;\n    visibility: hidden;\n    width: 100%;\n    z-index: 3;\n}\n\n.editModal-root_open-1Qq {\n    box-shadow: 1px 0 rgb(var(--venia-global-color-border));\n    opacity: 1;\n    transform: scale(1);\n    transition-duration: 224ms;\n    transition-timing-function: var(--venia-global-anim-in);\n    visibility: visible;\n}\n\n.editModal-body-1PV {\n    overflow: auto;\n    padding: 0.5rem 2rem;\n}\n\n.editModal-header-3fm {\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: space-between;\n    padding: 0.875rem 2rem;\n}\n\n.editModal-headerText-3EL {\n    align-self: center;\n    color: rgb(var(--venia-global-color-text-alt));\n}\n\n@media (max-width: 960px) {\n    .editModal-root-3_7 {\n        bottom: 0;\n        height: 100%;\n        left: auto;\n        max-height: none;\n        max-width: 360px;\n        right: 0;\n        top: 0;\n        transform: translate3d(100%, 0, 0);\n    }\n\n    .editModal-root_open-1Qq {\n        transform: translate3d(0, 0, 0);\n    }\n\n    .editModal-body-1PV {\n        padding: 0.5rem 1rem;\n    }\n\n    .editModal-header-3fm {\n        padding: 0.875rem;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "editModal-root-3_7",
	"root_open": "editModal-root_open-1Qq editModal-root-3_7 editModal-root-3_7",
	"body": "editModal-body-1PV",
	"header": "editModal-header-3fm",
	"headerText": "editModal-headerText-3EL"
};

/***/ })

}]);
//# sourceMappingURL=36.c1683418793e34e835f4.js.map