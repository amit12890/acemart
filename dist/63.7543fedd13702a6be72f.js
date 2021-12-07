(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/@magento/venia-ui/lib/components/Mask/mask.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Mask/mask.js + 1 modules ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Mask/mask.css (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Mask/mask.css
var mask = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Mask/mask.css");
var mask_default = /*#__PURE__*/__webpack_require__.n(mask);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Mask/mask.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(mask_default.a, options);



/* harmony default export */ var Mask_mask = (mask_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Mask/mask.js
var _s = $RefreshSig$();

 // import PropTypes from 'prop-types';




const Mask = props => {
  _s();

  const {
    dismiss,
    isActive
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(Mask_mask, props.classes);
  const className = isActive ? classes.root_active : classes.root;
  return react_default.a.createElement("button", {
    className: className,
    onClick: dismiss
  });
};

_s(Mask, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Mask;
/* harmony default export */ var components_Mask_mask = __webpack_exports__["a"] = (Mask); // /**
//  * A component that masks content.
//  *
//  * @class Mask
//  * @extends {Component}
//  *
//  * @typedef Mask
//  * @kind class component
//  *
//  * @returns {React.Element} A React component that will mask content.
//  */
// class Mask extends Component {
//     /**
//      * Props for {@link Mask}
//      *
//      * @typedef props
//      *
//      * @property {Object} classes An object containing the class names for the
//      * Mask component.
//      * @property {string} classes.root classes for root container
//      * @property {string} classes.root_action classes for root container if
//      * the `isActive` property is `true`.
//      * @property {Function} dismiss the handler for on the `onClick` event
//      * handler.
//      * @property {boolean} isActive whether the mask is in an active state
//      * or not.
//      */
//     static propTypes = {
//         classes: PropTypes.shape({
//             root: PropTypes.string,
//             root_active: PropTypes.string
//         }),
//         dismiss: PropTypes.func,
//         isActive: PropTypes.bool
//     };
//     render() {
//         const { classes, dismiss, isActive } = this.props;
//         const className = isActive ? classes.root_active : classes.root;
//         return <button className={className} onClick={dismiss} />;
//     }
// }
// export default classify(defaultClasses)(Mask);

var _c;

$RefreshReg$(_c, "Mask");

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Mask/mask.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Mask/mask.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mask-root-3oq {\n    background-color: black;\n    cursor: pointer;\n    display: block;\n    height: 100%;\n    left: 0;\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    transition-duration: 192ms;\n    transition-property: opacity, visibility;\n    transition-timing-function: linear;\n    visibility: hidden;\n    width: 100%;\n    z-index: 2;\n    -webkit-appearance: none;\n}\n\n/* state: active */\n\n.mask-root_active-1KO {\n    opacity: 0.5;\n    transition-duration: 224ms;\n    visibility: visible;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "mask-root-3oq",
	"root_active": "mask-root_active-1KO mask-root-3oq"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/AccountMenu/accountMenu.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/AccountMenu/accountMenu.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".accountMenu-root-usz {\n    --content-width: 27.5rem;\n    \n    height: 0;\n    overflow: visible;\n    opacity: 0;\n    position: fixed;\n    top: 100%;\n    transition: opacity 192ms var(--venia-global-anim-out),\n    visibility 192ms var(--venia-global-anim-out),\n        /* Adding delay to move container off the screen after previous transitions happened */\n            left 0s 192ms;\n    visibility: hidden;\n    width: calc(100vw - 2rem);\n    /* max-width wider than header to let dropdown to move left on wider screens while still staying near the trigger */\n    max-width: calc(\n        var(--venia-global-maxWidth) + var(--content-width) * 2 - 25rem\n    );\n    z-index: 3;\n    \n}\n\n.accountMenu-root_open-1rp {\n    left: 0;\n    top: 0;\n    bottom: 0;\n    opacity: 1;\n    height: 100%;\n    right: 0;\n    transition: opacity 224ms var(--venia-global-anim-in),\n        visibility 224ms var(--venia-global-anim-in), left 0s, top 0s;\n    visibility: visible;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.accountMenu-contents-3wu {\n    background-color: rgb(var(--page-background-color));\n    border-radius: 1px;\n    box-shadow: 0 1px 6px rgb(var(--color-gray40) / 0.2);\n    display: grid;\n    min-height: 10rem;\n    transform: translate3d(0, -8px, 0);\n    transition-duration: 192ms;\n    transition-property: transform;\n    transition-timing-function: var(--venia-global-anim-out);\n    width: var(--content-width);\n    left: 0;\n    width: 100%;\n    max-width: 800px;\n    margin: 0 auto;\n    position: relative;\n    \n}\n\n.accountMenu-contents_open-2Qb {\n\n    transform: translate3d(0, 4px, 0);\n    transition-duration: 224ms;\n    transition-timing-function: var(--venia-global-anim-in);\n}\n\n.accountMenu-createAccount-2Tn {\n    display: grid;\n    gap: 0.9375rem;\n    justify-items: stretch;\n    padding: 1rem 1.5rem;\n}\n\n.accountMenu-forgotPassword-2cs {\n    padding: 2rem;\n}\n\n.accountMenu-loading-1VV {\n    padding: 2rem;\n}\n.accountMenu-portalWrapper-fbl {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.accountMenu-myRoot-2HV {\n    display: inline-flex;\n    cursor: pointer;\n    position: absolute;\n    z-index: 5;\n    top: .875rem;\n    right: 1rem;\n}\n.accountMenu-modalClose-w52 {\n    text-align: right;\n}\n.accountMenu-myIcon-2hF {\n    color: rgb(var(--color-gray-middle3));\n}\n.accountMenu-myIcon-2hF:hover {\n    \n}\n\n\n.accountMenu-modalContent-9Bg {\n    \n}", ""]);

// Exports
exports.locals = {
	"root": "accountMenu-root-usz",
	"root_open": "accountMenu-root_open-1rp accountMenu-root-usz",
	"contents": "accountMenu-contents-3wu",
	"contents_open": "accountMenu-contents_open-2Qb accountMenu-contents-3wu",
	"createAccount": "accountMenu-createAccount-2Tn",
	"forgotPassword": "accountMenu-forgotPassword-2cs",
	"loading": "accountMenu-loading-1VV",
	"portalWrapper": "accountMenu-portalWrapper-fbl",
	"myRoot": "accountMenu-myRoot-2HV",
	"modalClose": "accountMenu-modalClose-w52",
	"myIcon": "accountMenu-myIcon-2hF",
	"modalContent": "accountMenu-modalContent-9Bg"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/AccountMenu/accountMenuItems.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/AccountMenu/accountMenuItems.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../LinkButton/linkButton.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/LinkButton/linkButton.css"), "");

// Module
exports.push([module.i, ".accountMenuItems-root-1j0 {\n    display: grid;\n    grid-auto-flow: row;\n    justify-content: stretch;\n    row-gap: 1.5rem;\n    padding: 1.5rem;\n}\n\n.accountMenuItems-link-1RR {\n\n    color: rgb(var(--link-color));\n    justify-content: start;\n    text-decoration: none;\n}\n\n.accountMenuItems-link-1RR:hover {\n    color: rgb(var(--link-color-hover));\n}\n\n.accountMenuItems-signOut-17J {\n\n    border-top: 2px solid rgb(var(--border-color-base));\n    padding-top: 1rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "accountMenuItems-root-1j0",
	"link": "accountMenuItems-link-1RR " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../LinkButton/linkButton.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/LinkButton/linkButton.css").locals["root"] + "",
	"signOut": "accountMenuItems-signOut-17J accountMenuItems-link-1RR " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../LinkButton/linkButton.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/LinkButton/linkButton.css").locals["root"] + ""
};

/***/ }),

/***/ "./src/venia/components/AccountMenu/index.js":
/*!***************************************************************!*\
  !*** ./src/venia/components/AccountMenu/index.js + 6 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/AccountChip/useAccountChip.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/AccountChip/accountChip.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Mask/mask.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Portal/portal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/x.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/url.utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/CreateAccount/createAccount.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/ForgotPassword/forgotPassword.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/SignIn/signIn.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/AccountMenu/accountMenu.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/AccountMenu/accountMenuItems.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_AccountMenu_accountMenu; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/Header/accountMenu.gql.js

const SIGN_OUT = client["gql"]`
    mutation SignOutFromMenu {
        revokeCustomerToken {
            result
        }
    }
`;
/* harmony default export */ var accountMenu_gql = ({
  signOutMutation: SIGN_OUT
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/Header/useAccountMenu.js
var _s = $RefreshSig$();







/**
 * The useAccountMenu talon complements the AccountMenu component.
 *
 * @param {Object} props
 * @param {DocumentNode} props.operations.signOutMutation - Mutation to be called for signout.
 * @param {Boolean} props.accountMenuIsOpen - Boolean to notify if the account menu dropdown is open.
 * @param {Function} props.setAccountMenuIsOpen - Function to set the value of accountMenuIsOpen
 *
 * @returns {Object}    talonProps
 * @returns {String}    talonProps.view - Current view.
 * @returns {String}  talonProps.username - Username of the current user trying to login / logged in.
 * @returns {Boolean}   talonProps.isUserSignedIn - Boolean to notify if the user is signed in.
 * @returns {Function}  talonProps.handleSignOut - Function to handle the signout workflow.
 * @returns {Function}  talonProps.handleForgotPassword - Function to handle forgot password workflow.
 * @returns {Function}  talonProps.handleCreateAccount - Function to handle create account workflow.
 * @returns {Function}  talonProps.setUsername - Function to set the username.
 */

const useAccountMenu = props => {
  _s();

  const {
    accountMenuIsOpen,
    setAccountMenuIsOpen
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(accountMenu_gql, props.operations);
  const {
    signOutMutation
  } = operations;
  const [view, setView] = Object(react["useState"])('SIGNIN');
  const [username, setUsername] = Object(react["useState"])('');
  const history = Object(react_router["g" /* useHistory */])();
  const location = Object(react_router["h" /* useLocation */])();
  const [revokeToken] = Object(client["useMutation"])(signOutMutation);
  const [{
    isSignedIn: isUserSignedIn
  }, {
    signOut
  }] = Object(user["b" /* useUserContext */])();
  const handleSignOut = Object(react["useCallback"])(async () => {
    setView('SIGNIN');
    setAccountMenuIsOpen(false); // Delete cart/user data from the redux store.

    await signOut({
      revokeToken
    }); // Refresh the page as a way to say "re-initialize". An alternative
    // would be to call apolloClient.resetStore() but that would require
    // a large refactor.

    history.go(0);
  }, [history, revokeToken, setAccountMenuIsOpen, signOut]);
  const handleForgotPassword = Object(react["useCallback"])(() => {
    setView('FORGOT_PASSWORD');
  }, []);
  const handleCancel = Object(react["useCallback"])(() => {
    setView('SIGNIN');
  }, []);
  const handleCreateAccount = Object(react["useCallback"])(() => {
    setView('CREATE_ACCOUNT');
  }, []);
  const handleAccountCreation = Object(react["useCallback"])(() => {
    setView('ACCOUNT');
  }, []); // Close the Account Menu on page change.
  // This includes even when the page "changes" to the current page.
  // This can happen when clicking on a link to a page you're already on, for example.

  Object(react["useEffect"])(() => {
    setAccountMenuIsOpen(false);
  }, [location, setAccountMenuIsOpen]); // Update view based on user status everytime accountMenuIsOpen has changed.

  Object(react["useEffect"])(() => {
    if (isUserSignedIn) {
      setView('ACCOUNT');
    } else {
      setView('SIGNIN');
    }
  }, [accountMenuIsOpen, isUserSignedIn]);
  return {
    handleAccountCreation,
    handleCreateAccount,
    handleForgotPassword,
    handleCancel,
    handleSignOut,
    updateUsername: setUsername,
    username,
    view
  };
};

_s(useAccountMenu, "AjqQ1tsJhsgFcUZAF1YC5VCUemw=", false, function () {
  return [react_router["g" /* useHistory */], react_router["h" /* useLocation */], client["useMutation"], user["b" /* useUserContext */]];
});
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__("./node_modules/react-feather/dist/icons/x.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Portal/portal.js
var portal = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Portal/portal.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Mask/mask.js + 1 modules
var mask = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Mask/mask.js");

// EXTERNAL MODULE: ./src/venia/components/CreateAccount/createAccount.js + 3 modules
var createAccount = __webpack_require__("./src/venia/components/CreateAccount/createAccount.js");

// EXTERNAL MODULE: ./src/venia/components/SignIn/signIn.js + 2 modules
var signIn = __webpack_require__("./src/venia/components/SignIn/signIn.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/AccountChip/useAccountChip.js
var useAccountChip = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/AccountChip/useAccountChip.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountChip/accountChip.gql.js
var accountChip_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/AccountChip/accountChip.gql.js");

// EXTERNAL MODULE: ./src/url.utils.js
var url_utils = __webpack_require__("./src/url.utils.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/AccountMenu/accountMenuItems.css
var accountMenuItems = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/AccountMenu/accountMenuItems.css");
var accountMenuItems_default = /*#__PURE__*/__webpack_require__.n(accountMenuItems);

// CONCATENATED MODULE: ./src/venia/components/AccountMenu/accountMenuItems.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(accountMenuItems_default.a, options);



/* harmony default export */ var AccountMenu_accountMenuItems = (accountMenuItems_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/AccountMenu/accountMenuItems.js
var accountMenuItems_s = $RefreshSig$();











const AccountMenuItems = props => {
  accountMenuItems_s();

  const {
    onSignOut: handleSignOut
  } = props;
  const talonProps = Object(useAccountChip["a" /* useAccountChip */])({
    queries: {
      getCustomerDetailsQuery: accountChip_gql["a" /* GET_CUSTOMER_DETAILS */]
    }
  });
  const {
    currentUser,
    isLoadingUserName,
    isUserSignedIn
  } = talonProps;
  let headerText = "Welcome back";

  if (!isLoadingUserName) {
    headerText = `Welcome back, ${currentUser.firstname}`;
  }

  const menuItems = [{
    name: 'My Account',
    id: 'accountMenu.myAccount',
    url: Object(url_utils["c" /* accountPageUrl */])()
  }, {
    name: 'Order History',
    id: 'accountMenu.orderHistoryLink',
    url: Object(url_utils["v" /* myOrderListPage */])()
  }, {
    name: 'Manage Addresses',
    id: 'accountMenu.manageAddresses',
    url: Object(url_utils["e" /* addressBookPage */])()
  }, {
    name: 'View Wishlists',
    id: 'accountMenu.viewWishlists',
    url: Object(url_utils["w" /* myWishlistPage */])()
  }];
  const classes = Object(shallowMerge["a" /* default */])(AccountMenu_accountMenuItems, props.classes);
  const menu = menuItems.map(item => {
    return react_default.a.createElement(react_router_dom["b" /* Link */], {
      className: classes.link,
      key: item.name,
      to: item.url
    }, react_default.a.createElement(message["a" /* default */], {
      id: item.id,
      defaultMessage: item.name
    }));
  });
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", null, headerText), menu, !!handleSignOut && react_default.a.createElement("button", {
    className: classes.signOut,
    onClick: handleSignOut,
    type: "button"
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'accountMenu.LogoutButtonText',
    defaultMessage: 'Logout'
  })));
};

accountMenuItems_s(AccountMenuItems, "GY8re5PCUEKnaTYuCUsrNQzbtR0=", false, function () {
  return [useAccountChip["a" /* useAccountChip */], shallowMerge["a" /* default */]];
});

_c = AccountMenuItems;
/* harmony default export */ var components_AccountMenu_accountMenuItems = (AccountMenuItems);
AccountMenuItems.propTypes = {
  classes: Object(prop_types["shape"])({
    link: prop_types["string"],
    signOut: prop_types["string"]
  }),
  // if parent don't pass onSignOut prop don't show extra signOut button
  onSignOut: prop_types["func"]
};

var _c;

$RefreshReg$(_c, "AccountMenuItems");
// EXTERNAL MODULE: ./src/venia/components/ForgotPassword/forgotPassword.js + 6 modules
var forgotPassword = __webpack_require__("./src/venia/components/ForgotPassword/forgotPassword.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/AccountMenu/accountMenu.css
var accountMenu = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/AccountMenu/accountMenu.css");
var accountMenu_default = /*#__PURE__*/__webpack_require__.n(accountMenu);

// CONCATENATED MODULE: ./src/venia/components/AccountMenu/accountMenu.css

            

var accountMenu_options = {"injectType":"styleTag"};

accountMenu_options.insert = "head";
accountMenu_options.singleton = false;

var accountMenu_update = injectStylesIntoStyleTag_default()(accountMenu_default.a, accountMenu_options);



/* harmony default export */ var AccountMenu_accountMenu = (accountMenu_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/AccountMenu/accountMenu.js
var accountMenu_s = $RefreshSig$();
















const AccountMenu = react_default.a.forwardRef(accountMenu_c = accountMenu_s((props, ref) => {
  accountMenu_s();

  const {
    accountMenuIsOpen,
    setAccountMenuIsOpen
  } = props;
  const history = Object(react_router["g" /* useHistory */])();
  const talonProps = useAccountMenu({
    accountMenuIsOpen,
    setAccountMenuIsOpen
  });
  const {
    view,
    username,
    handleAccountCreation,
    handleSignOut,
    handleCancel,
    updateUsername
  } = talonProps;
  const handleCreateAccount = Object(react["useCallback"])(() => {
    history.push(Object(url_utils["D" /* signupPage */])());
  }, []);
  const handleForgotPassword = Object(react["useCallback"])(() => {
    history.push(Object(url_utils["r" /* forgotPasswordPage */])());
  }, []);
  const classes = Object(shallowMerge["a" /* default */])(AccountMenu_accountMenu, props.classes);
  const rootClass = accountMenuIsOpen ? classes.root_open : classes.root;
  const contentsClass = accountMenuIsOpen ? classes.contents_open : classes.contents;
  let dropdownContents = null;

  switch (view) {
    case 'ACCOUNT':
      {
        dropdownContents = react_default.a.createElement(components_AccountMenu_accountMenuItems, {
          onSignOut: handleSignOut
        });
        break;
      }

    case 'FORGOT_PASSWORD':
      {
        dropdownContents = react_default.a.createElement(forgotPassword["a" /* default */], {
          initialValues: {
            email: username
          },
          onCancel: handleCancel
        });
        break;
      }

    case 'CREATE_ACCOUNT':
      {
        dropdownContents = react_default.a.createElement(createAccount["a" /* default */], {
          classes: {
            root: classes.createAccount
          },
          initialValues: {
            email: username
          },
          isCancelButtonHidden: false,
          onSubmit: handleAccountCreation,
          onCancel: handleCancel
        });
        break;
      }

    case 'SIGNIN':
    default:
      {
        dropdownContents = react_default.a.createElement(signIn["a" /* default */], {
          classes: {
            modal_active: classes.loading
          },
          isPopup: true,
          setDefaultUsername: updateUsername,
          showCreateAccount: handleCreateAccount,
          showForgotPassword: handleForgotPassword
        });
        break;
      }
  }

  return react_default.a.createElement(portal["a" /* default */], null, react_default.a.createElement("div", {
    className: classes.portalWrapper
  }, react_default.a.createElement(mask["a" /* default */], {
    isActive: accountMenuIsOpen
  }), react_default.a.createElement("div", {
    className: rootClass
  }, react_default.a.createElement("div", {
    ref: ref,
    className: contentsClass
  }, react_default.a.createElement("div", {
    className: classes.modalClose,
    onClick: () => setAccountMenuIsOpen(false)
  }, react_default.a.createElement(icon["a" /* default */], {
    src: x["a" /* default */],
    classes: {
      root: classes.myRoot,
      icon: classes.myIcon
    }
  })), react_default.a.createElement("div", {
    className: classes.modalContent
  }, accountMenuIsOpen ? dropdownContents : null)))));
}, "gryoZDyp8ihA6prdSjx6CUonmGg=", false, function () {
  return [react_router["g" /* useHistory */], useAccountMenu, shallowMerge["a" /* default */]];
}));
_c2 = AccountMenu;
/* harmony default export */ var components_AccountMenu_accountMenu = (AccountMenu);
AccountMenu.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_open: prop_types["string"],
    link: prop_types["string"],
    contents_open: prop_types["string"],
    contents: prop_types["string"]
  })
};

var accountMenu_c, _c2;

$RefreshReg$(accountMenu_c, "AccountMenu$React.forwardRef");
$RefreshReg$(_c2, "AccountMenu");
// CONCATENATED MODULE: ./src/venia/components/AccountMenu/index.js


/***/ })

}]);
//# sourceMappingURL=63.7543fedd13702a6be72f.js.map