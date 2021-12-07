(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/AuthenticationPage/authenticationPage.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/components/AuthenticationPage/authenticationPage.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".authenticationPage-wrapper-3iI {\n    max-width: 670px;\n    margin: 50px auto;\n}", ""]);

// Exports
exports.locals = {
	"wrapper": "authenticationPage-wrapper-3iI"
};

/***/ }),

/***/ "./src/components/AuthenticationPage/index.js":
/*!****************************************************************!*\
  !*** ./src/components/AuthenticationPage/index.js + 2 modules ***!
  \****************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/url.utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/CreateAccount/createAccount.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/ForgotPassword/forgotPassword.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/SignIn/signIn.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/components/AuthenticationPage/authenticationPage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_AuthenticationPage_authenticationPage; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./src/venia/components/SignIn/signIn.js + 2 modules
var signIn = __webpack_require__("./src/venia/components/SignIn/signIn.js");

// EXTERNAL MODULE: ./src/venia/components/CreateAccount/createAccount.js + 3 modules
var createAccount = __webpack_require__("./src/venia/components/CreateAccount/createAccount.js");

// EXTERNAL MODULE: ./src/venia/components/ForgotPassword/forgotPassword.js + 6 modules
var forgotPassword = __webpack_require__("./src/venia/components/ForgotPassword/forgotPassword.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/components/AuthenticationPage/authenticationPage.css
var authenticationPage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/components/AuthenticationPage/authenticationPage.css");
var authenticationPage_default = /*#__PURE__*/__webpack_require__.n(authenticationPage);

// CONCATENATED MODULE: ./src/components/AuthenticationPage/authenticationPage.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(authenticationPage_default.a, options);



/* harmony default export */ var AuthenticationPage_authenticationPage = (authenticationPage_default.a.locals || {});
// EXTERNAL MODULE: ./src/url.utils.js
var url_utils = __webpack_require__("./src/url.utils.js");

// CONCATENATED MODULE: ./src/components/AuthenticationPage/authenticationPage.js
var _s = $RefreshSig$();











const AuthenticationPage = props => {
  _s();

  const {
    auth: authType
  } = Object(react_router["i" /* useParams */])();
  const history = Object(react_router["g" /* useHistory */])();
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const classes = Object(shallowMerge["a" /* default */])(AuthenticationPage_authenticationPage, props.classes);
  const handleForgotPassword = Object(react["useCallback"])(() => {
    history.push(Object(url_utils["r" /* forgotPasswordPage */])());
  }, []);
  const handleCancel = Object(react["useCallback"])(() => {
    history.push(Object(url_utils["t" /* loginPage */])());
  }, []);
  const handleCreateAccount = Object(react["useCallback"])(() => {
    history.push(Object(url_utils["D" /* signupPage */])());
  }, []); // called after user signUp

  const handleAccountCreation = Object(react["useCallback"])(() => {
    history.push(Object(url_utils["c" /* accountPageUrl */])());
  }, []);
  let content;

  if (isSignedIn) {
    return react_default.a.createElement(react_router["a" /* Redirect */], {
      to: Object(url_utils["c" /* accountPageUrl */])()
    });
  } else {
    // show auth alternate pages
    switch (authType) {
      case 'forgotpassword':
        {
          content = react_default.a.createElement(forgotPassword["a" /* default */], {
            onCancel: handleCancel
          });
          break;
        }

      case 'create':
        {
          content = react_default.a.createElement(createAccount["a" /* default */], {
            isCancelButtonHidden: false,
            onSubmit: handleAccountCreation,
            onCancel: handleCancel
          });
          break;
        }

      case 'login':
      default:
        {
          content = react_default.a.createElement(signIn["a" /* default */], {
            isPopup: false,
            showCreateAccount: handleCreateAccount,
            showForgotPassword: handleForgotPassword
          });
          break;
        }
    }
  }

  return react_default.a.createElement("div", {
    className: classes.wrapper
  }, content);
};

_s(AuthenticationPage, "l5qkb9ecraJSTAMYx2TE4tB2brA=", false, function () {
  return [react_router["i" /* useParams */], react_router["g" /* useHistory */], user["b" /* useUserContext */], shallowMerge["a" /* default */]];
});

_c = AuthenticationPage;
/* harmony default export */ var components_AuthenticationPage_authenticationPage = (AuthenticationPage);

var _c;

$RefreshReg$(_c, "AuthenticationPage");
// CONCATENATED MODULE: ./src/components/AuthenticationPage/index.js


/***/ })

}]);
//# sourceMappingURL=86.a2f414e377a2f4b6537a.js.map