(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.js + 3 modules ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Password/password.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/combineValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules
var field = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/field.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Password/password.js + 1 modules
var Password_password = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Password/password.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/combineValidators.js
var combineValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/combineValidators.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.css
var editForm = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.css");
var editForm_default = /*#__PURE__*/__webpack_require__.n(editForm);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editForm_default.a, options);



/* harmony default export */ var AccountInformationPage_editForm = (editForm_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.js
var _s = $RefreshSig$();













const EditForm = props => {
  _s();

  const {
    classes: propClasses,
    handleChangePassword,
    shouldShowNewPassword
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(AccountInformationPage_editForm, propClasses);
  const maybeNewPasswordField = shouldShowNewPassword ? react_default.a.createElement("div", {
    className: classes.newPassword
  }, react_default.a.createElement(Password_password["a" /* default */], {
    fieldName: "newPassword",
    label: formatMessage({
      id: 'global.newPassword',
      defaultMessage: 'New Password'
    }),
    validate: Object(combineValidators["a" /* default */])([formValidators["d" /* isRequired */], [formValidators["a" /* hasLengthAtLeast */], 8], formValidators["e" /* validatePassword */], [formValidators["c" /* isNotEqualToField */], 'password']]),
    isToggleButtonHidden: false
  })) : null;
  const maybeChangePasswordButton = !shouldShowNewPassword ? react_default.a.createElement("div", {
    className: classes.changePasswordButtonContainer
  }, react_default.a.createElement(linkButton["a" /* default */], {
    classes: classes.changePasswordButton,
    type: "button",
    onClick: handleChangePassword
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'global.changePassword',
    defaultMessage: 'Change Password'
  }))) : null;
  const passwordLabel = shouldShowNewPassword ? formatMessage({
    id: 'global.currentPassword',
    defaultMessage: 'Current Password'
  }) : formatMessage({
    id: 'global.password',
    defaultMessage: 'Password'
  });
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.firstname
  }, react_default.a.createElement(field["a" /* default */], {
    id: "firstname",
    label: formatMessage({
      id: 'global.firstName',
      defaultMessage: 'First Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "firstname",
    validate: formValidators["d" /* isRequired */]
  }))), react_default.a.createElement("div", {
    className: classes.lastname
  }, react_default.a.createElement(field["a" /* default */], {
    id: "lastname",
    label: formatMessage({
      id: 'global.lastName',
      defaultMessage: 'Last Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "lastname",
    validate: formValidators["d" /* isRequired */]
  }))), react_default.a.createElement("div", {
    className: classes.email
  }, react_default.a.createElement(field["a" /* default */], {
    id: "email",
    label: formatMessage({
      id: 'global.email',
      defaultMessage: 'Email'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "email",
    validate: formValidators["d" /* isRequired */]
  }))), react_default.a.createElement("div", {
    className: classes.password
  }, react_default.a.createElement(Password_password["a" /* default */], {
    fieldName: "password",
    label: passwordLabel,
    validate: formValidators["d" /* isRequired */],
    autoComplete: "current-password",
    isToggleButtonHidden: false
  })), maybeNewPasswordField), maybeChangePasswordButton);
};

_s(EditForm, "6HbKEGM4/yt1mWqe8hniFTWRimA=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

_c = EditForm;
/* harmony default export */ var components_AccountInformationPage_editForm = (EditForm);
EditForm.propTypes = {
  classes: Object(prop_types["shape"])({
    changePasswordButton: prop_types["string"],
    changePasswordButtonContainer: prop_types["string"],
    root: prop_types["string"],
    field: prop_types["string"],
    email: prop_types["string"],
    firstname: prop_types["string"],
    lastname: prop_types["string"],
    buttons: prop_types["string"],
    passwordLabel: prop_types["string"],
    password: prop_types["string"],
    newPassword: prop_types["string"]
  })
};

var _c;

$RefreshReg$(_c, "EditForm");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js + 1 modules
var dialog = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.css
var editModal = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.css");
var editModal_default = /*#__PURE__*/__webpack_require__.n(editModal);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.css

            

var editModal_options = {"injectType":"styleTag"};

editModal_options.insert = "head";
editModal_options.singleton = false;

var editModal_update = injectStylesIntoStyleTag_default()(editModal_default.a, editModal_options);



/* harmony default export */ var AccountInformationPage_editModal = (editModal_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.js
var editModal_s = $RefreshSig$();










const EditModal = props => {
  editModal_s();

  const {
    classes: propClasses,
    formErrors,
    onCancel,
    onChangePassword,
    onSubmit,
    initialValues,
    isDisabled,
    isOpen,
    shouldShowNewPassword
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(AccountInformationPage_editModal, propClasses);
  const dialogFormProps = {
    initialValues
  };
  return react_default.a.createElement(dialog["a" /* default */], {
    classes: {
      body: classes.bodyEditAccountInformation
    },
    confirmText: 'Save',
    formProps: dialogFormProps,
    isOpen: isOpen,
    onCancel: onCancel,
    onConfirm: onSubmit,
    shouldDisableAllButtons: isDisabled,
    shouldDisableConfirmButton: isDisabled,
    shouldUnmountOnHide: true,
    title: formatMessage({
      id: 'accountInformationPage.editAccount',
      defaultMessage: 'Edit Account Information'
    })
  }, react_default.a.createElement(formError["a" /* default */], {
    classes: {
      root: classes.errorContainer
    },
    errors: formErrors
  }), react_default.a.createElement(components_AccountInformationPage_editForm, {
    handleChangePassword: onChangePassword,
    shouldShowNewPassword: shouldShowNewPassword
  }));
};

editModal_s(EditModal, "6HbKEGM4/yt1mWqe8hniFTWRimA=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

editModal_c = EditModal;
/* harmony default export */ var components_AccountInformationPage_editModal = __webpack_exports__["default"] = (EditModal);
EditModal.propTypes = {
  classes: Object(prop_types["shape"])({
    errorContainer: prop_types["string"]
  }),
  formErrors: prop_types["array"],
  handleCancel: prop_types["func"],
  handleSubmit: prop_types["func"],
  initialValues: prop_types["object"],
  isDisabled: prop_types["bool"],
  isOpen: prop_types["bool"]
};

var editModal_c;

$RefreshReg$(editModal_c, "EditModal");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.css (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.css
var linkButton = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.css");
var linkButton_default = /*#__PURE__*/__webpack_require__.n(linkButton);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(linkButton_default.a, options);



/* harmony default export */ var LinkButton_linkButton = (linkButton_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * A component for link buttons.
 *
 * @typedef LinkButton
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a single link button.
 */

const LinkButton = props => {
  _s();

  const {
    children,
    classes: propClasses,
    type
  } = props,
        restProps = _objectWithoutProperties(props, ["children", "classes", "type"]);

  const classes = Object(shallowMerge["a" /* default */])(LinkButton_linkButton, propClasses);
  return react_default.a.createElement(Button_button["a" /* default */], _extends({
    priority: 'normal',
    classes: {
      root_normalPriority: classes.root
    },
    type: type
  }, restProps), children);
};
/**
 * Props for {@link Button}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the
 * Button component.
 * @property {string} classes.root classes for root container
 * @property {string} type the type of the Button
 */


_s(LinkButton, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = LinkButton;
LinkButton.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  type: Object(prop_types["oneOf"])(['button', 'reset', 'submit']).isRequired
};
LinkButton.defaultProps = {
  type: 'button'
};
/* harmony default export */ var components_LinkButton_linkButton = __webpack_exports__["a"] = (LinkButton);

var _c;

$RefreshReg$(_c, "LinkButton");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".editForm-root-2vj {\n    display: grid;\n    gap: 0.5rem 1.5rem;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n}\n\n.editForm-field-4sC {\n    grid-column-end: span 2;\n}\n\n.editForm-email-2pU,\n.editForm-passwordLabel-P5D {\n}\n\n.editForm-buttons-ssr {\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    justify-self: center;\n    padding: 1rem;\n}\n\n.editForm-changePasswordButtonContainer-1el {\n    padding-top: 1rem;\n}\n\n@media (max-width: 960px) {\n    .editForm-firstname-3TC,\n    .editForm-lastname-E_a,\n    .editForm-password-2a_,\n    .editForm-newPassword-1bP {\n        grid-column: 1 / span 2;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "editForm-root-2vj",
	"field": "editForm-field-4sC",
	"email": "editForm-email-2pU editForm-field-4sC",
	"passwordLabel": "editForm-passwordLabel-P5D editForm-field-4sC",
	"buttons": "editForm-buttons-ssr editForm-field-4sC",
	"changePasswordButtonContainer": "editForm-changePasswordButtonContainer-1el",
	"firstname": "editForm-firstname-3TC",
	"lastname": "editForm-lastname-E_a",
	"password": "editForm-password-2a_",
	"newPassword": "editForm-newPassword-1bP"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".editModal-errorContainer-1qQ {\n    padding-bottom: 1rem;\n}\n", ""]);

// Exports
exports.locals = {
	"errorContainer": "editModal-errorContainer-1qQ"
};

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/eye-off.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/eye-off.js ***!
  \**********************************************************/
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



var EyeOff = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
_c2 = EyeOff;
EyeOff.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
EyeOff.displayName = 'EyeOff';
/* harmony default export */ __webpack_exports__["a"] = (EyeOff);

var _c, _c2;

$RefreshReg$(_c, "EyeOff$forwardRef");
$RefreshReg$(_c2, "EyeOff");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/eye.js":
/*!******************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/eye.js ***!
  \******************************************************/
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



var Eye = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
});
_c2 = Eye;
Eye.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
Eye.displayName = 'Eye';
/* harmony default export */ __webpack_exports__["a"] = (Eye);

var _c, _c2;

$RefreshReg$(_c, "Eye$forwardRef");
$RefreshReg$(_c2, "Eye");

/***/ })

}]);
//# sourceMappingURL=62.635613298816530ca678.js.map