(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage.js ***!
  \********************************************************************************************************/
/*! exports provided: useAccountInformationPage */
/*! exports used: useAccountInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAccountInformationPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _context_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/user */ "./node_modules/@magento/peregrine/lib/context/user.js");
var _s = $RefreshSig$();




const useAccountInformationPage = props => {
  _s();

  const {
    mutations: {
      setCustomerInformationMutation,
      changeCustomerPasswordMutation
    },
    queries: {
      getCustomerInformationQuery
    }
  } = props;
  const [{
    isSignedIn
  }] = Object(_context_user__WEBPACK_IMPORTED_MODULE_2__[/* useUserContext */ "b"])();
  const [shouldShowNewPassword, setShouldShowNewPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isUpdateMode, setIsUpdateMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Use local state to determine whether to display errors or not.
  // Could be replaced by a "reset mutation" function from apollo client.
  // https://github.com/apollographql/apollo-feature-requests/issues/170

  const [displayError, setDisplayError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    data: accountInformationData,
    error: loadDataError
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(getCustomerInformationQuery, {
    skip: !isSignedIn,
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  });
  const [setCustomerInformation, {
    error: customerInformationUpdateError,
    loading: isUpdatingCustomerInformation
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(setCustomerInformationMutation);
  const [changeCustomerPassword, {
    error: customerPasswordChangeError,
    loading: isChangingCustomerPassword
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(changeCustomerPasswordMutation);
  const initialValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (accountInformationData) {
      return {
        customer: accountInformationData.customer
      };
    }
  }, [accountInformationData]);
  const handleChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShouldShowNewPassword(true);
  }, [setShouldShowNewPassword]);
  const handleCancel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setIsUpdateMode(false);
    setShouldShowNewPassword(false);
  }, [setIsUpdateMode]);
  const showUpdateMode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setIsUpdateMode(true); // If there were errors from removing/updating info, hide them
    // when we open the modal.

    setDisplayError(false);
  }, [setIsUpdateMode]);
  const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async ({
    email,
    firstname,
    lastname,
    password,
    newPassword
  }) => {
    try {
      email = email.trim();
      firstname = firstname.trim();
      lastname = lastname.trim();
      password = password.trim();
      newPassword = newPassword ? newPassword.trim() : newPassword;

      if (initialValues.customer.email !== email || initialValues.customer.firstname !== firstname || initialValues.customer.lastname !== lastname) {
        await setCustomerInformation({
          variables: {
            customerInput: {
              email,
              firstname,
              lastname,
              // You must send password because it is required
              // when changing email.
              password
            }
          }
        });
      }

      if (password && newPassword) {
        await changeCustomerPassword({
          variables: {
            currentPassword: password,
            newPassword: newPassword
          }
        });
      } // After submission, close the form if there were no errors.


      handleCancel(false);
    } catch {
      // Make sure any errors from the mutation are displayed.
      setDisplayError(true); // we have an onError link that logs errors, and FormError
      // already renders this error, so just return to avoid
      // triggering the success callback

      return;
    }
  }, [setCustomerInformation, handleCancel, changeCustomerPassword, initialValues]);
  const errors = displayError ? [customerInformationUpdateError, customerPasswordChangeError] : [];
  return {
    handleCancel,
    formErrors: errors,
    handleSubmit,
    handleChangePassword,
    initialValues,
    isDisabled: isUpdatingCustomerInformation || isChangingCustomerPassword,
    isUpdateMode,
    isSignedIn,
    loadDataError,
    shouldShowNewPassword,
    showUpdateMode
  };
};

_s(useAccountInformationPage, "2Ci/Wgg04aPH48r3fAgKz62GdoY=", false, function () {
  return [_context_user__WEBPACK_IMPORTED_MODULE_2__[/* useUserContext */ "b"], _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"], _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/index.js + 4 modules ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Head/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_AccountInformationPage_accountInformationPage; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage.js
var useAccountInformationPage = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules
var Field_message = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/message.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Head/index.js
var Head = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Head/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js
var LoadingIndicator_static = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.css
var accountInformationPage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.css");
var accountInformationPage_default = /*#__PURE__*/__webpack_require__.n(accountInformationPage);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(accountInformationPage_default.a, options);



/* harmony default export */ var AccountInformationPage_accountInformationPage = (accountInformationPage_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPageFragment.gql.js

const AccountInformationPageFragment = client["gql"]`
    fragment AccountInformationPageFragment on Customer {
        id
        firstname
        lastname
        email
    }
`;
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.gql.js


const SET_CUSTOMER_INFORMATION = client["gql"]`
    mutation SetCustomerInformation($customerInput: CustomerInput!) {
        updateCustomer(input: $customerInput)
            @connection(key: "updateCustomer") {
            customer {
                id
                ...AccountInformationPageFragment
            }
        }
    }
    ${AccountInformationPageFragment}
`;
const CHANGE_CUSTOMER_PASSWORD = client["gql"]`
    mutation ChangeCustomerPassword(
        $currentPassword: String!
        $newPassword: String!
    ) {
        changeCustomerPassword(
            currentPassword: $currentPassword
            newPassword: $newPassword
        ) @connection(key: "changeCustomerPassword") {
            id
            email
        }
    }
`;
const GET_CUSTOMER_INFORMATION = client["gql"]`
    query GetCustomerInformation {
        customer {
            id
            ...AccountInformationPageFragment
        }
    }
    ${AccountInformationPageFragment}
`;
/* harmony default export */ var accountInformationPage_gql = ({
  mutations: {
    setCustomerInformationMutation: SET_CUSTOMER_INFORMATION,
    changeCustomerPasswordMutation: CHANGE_CUSTOMER_PASSWORD
  },
  queries: {
    getCustomerInformationQuery: GET_CUSTOMER_INFORMATION
  }
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.js
var _s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const EditModal = react_default.a.lazy(_c = () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(62)]).then(__webpack_require__.bind(null, /*! ./editModal */ "./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.js")));
_c2 = EditModal;

const AccountInformationPage = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(AccountInformationPage_accountInformationPage, props.classes);
  const talonProps = Object(useAccountInformationPage["a" /* useAccountInformationPage */])(_objectSpread({}, accountInformationPage_gql));
  const {
    handleCancel,
    formErrors,
    handleChangePassword,
    handleSubmit,
    initialValues,
    isDisabled,
    isSignedIn,
    isUpdateMode,
    loadDataError,
    shouldShowNewPassword,
    showUpdateMode
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();

  if (!isSignedIn) {
    return react_default.a.createElement(react_router["a" /* Redirect */], {
      to: "/"
    });
  }

  const errorMessage = loadDataError ? react_default.a.createElement(Field_message["a" /* default */], null, react_default.a.createElement(message["a" /* default */], {
    id: 'accountInformationPage.errorTryAgain',
    defaultMessage: 'Something went wrong. Please refresh and try again.'
  })) : null;
  let pageContent = null;

  if (!initialValues) {
    return LoadingIndicator_static["a" /* default */];
  } else {
    const {
      customer
    } = initialValues;
    const customerName = `${customer.firstname} ${customer.lastname}`;
    const passwordValue = '***********';
    pageContent = react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
      className: classes.accountDetails
    }, react_default.a.createElement("div", {
      className: classes.lineItemsContainer
    }, react_default.a.createElement("span", {
      className: classes.nameLabel
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'global.name',
      defaultMessage: 'Name'
    })), react_default.a.createElement("span", {
      className: classes.nameValue
    }, customerName), react_default.a.createElement("span", {
      className: classes.emailLabel
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'global.email',
      defaultMessage: 'Email'
    })), react_default.a.createElement("span", {
      className: classes.emailValue
    }, customer.email), react_default.a.createElement("span", {
      className: classes.passwordLabel
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'global.password',
      defaultMessage: 'Password'
    })), react_default.a.createElement("span", {
      className: classes.passwordValue
    }, passwordValue)), react_default.a.createElement("div", {
      className: classes.editButtonContainer
    }, react_default.a.createElement(Button_button["a" /* default */], {
      className: classes.editInformationButton,
      disabled: false,
      onClick: showUpdateMode,
      priority: "normal"
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'global.editButton',
      defaultMessage: 'Edit'
    })))), react_default.a.createElement(react["Suspense"], {
      fallback: null
    }, react_default.a.createElement(EditModal, {
      formErrors: formErrors,
      initialValues: customer,
      isDisabled: isDisabled,
      isOpen: isUpdateMode,
      onCancel: handleCancel,
      onChangePassword: handleChangePassword,
      onSubmit: handleSubmit,
      shouldShowNewPassword: shouldShowNewPassword
    })));
  }

  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(Head["b" /* StoreTitle */], null, formatMessage({
    id: 'accountInformationPage.titleAccount',
    defaultMessage: 'Account Information'
  })), react_default.a.createElement("h1", {
    className: classes.title
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'accountInformationPage.accountInformation',
    defaultMessage: 'Account Information'
  })), errorMessage ? errorMessage : pageContent);
};

_s(AccountInformationPage, "Q1XCd+E6HBdKbWl/scn5i5oVbpQ=", false, function () {
  return [shallowMerge["a" /* default */], useAccountInformationPage["a" /* useAccountInformationPage */], useIntl["a" /* default */]];
});

_c3 = AccountInformationPage;
/* harmony default export */ var components_AccountInformationPage_accountInformationPage = (AccountInformationPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "EditModal$React.lazy");
$RefreshReg$(_c2, "EditModal");
$RefreshReg$(_c3, "AccountInformationPage");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/index.js


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

/***/ "./node_modules/@magento/venia-ui/lib/components/Field/message.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Field/message.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Field/message.css
var message = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/message.css");
var message_default = /*#__PURE__*/__webpack_require__.n(message);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(message_default.a, options);



/* harmony default export */ var Field_message = (message_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js
var _s = $RefreshSig$();







const Message = props => {
  _s();

  const {
    children,
    classes: propClasses,
    fieldState
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const {
    error
  } = fieldState;
  const classes = Object(shallowMerge["a" /* default */])(Field_message, propClasses);
  const className = error ? classes.root_error : classes.root;
  let translatedErrorMessage;

  if (error) {
    translatedErrorMessage = formatMessage({
      id: error.id,
      defaultMessage: error.defaultMessage
    }, {
      value: error.value
    });
  }

  return react_default.a.createElement("p", {
    className: className
  }, translatedErrorMessage || children);
};

_s(Message, "6HbKEGM4/yt1mWqe8hniFTWRimA=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

_c = Message;
/* harmony default export */ var components_Field_message = __webpack_exports__["a"] = (Message);
Message.defaultProps = {
  fieldState: {}
};
Message.propTypes = {
  children: prop_types["node"],
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_error: prop_types["string"]
  }),
  fieldState: Object(prop_types["shape"])({
    error: Object(prop_types["shape"])({
      id: prop_types["string"],
      defaultMessage: prop_types["string"],
      value: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]])
    })
  })
};

var _c;

$RefreshReg$(_c, "Message");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");

// Module
exports.push([module.i, ".accountInformationPage-root-3dg {\n    display: grid;\n    padding: 2.5rem 3rem;\n    row-gap: 2rem;\n}\n\n.accountInformationPage-title-Uli {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-accountDetails-1eC {\n    display: grid;\n    row-gap: 2rem;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n.accountInformationPage-lineItemsContainer-3bf {\n    grid-column: 1 / span 1;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    line-height: 1.5rem;\n}\n\n.accountInformationPage-lineItemLabel-1zl {\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-nameLabel-1tz,\n.accountInformationPage-emailLabel-1QG,\n.accountInformationPage-passwordLabel-3EB {\n}\n\n.accountInformationPage-nameValue-3JI,\n.accountInformationPage-emailValue-JQF,\n.accountInformationPage-passwordValue-3YW {\n}\n\n.accountInformationPage-editButtonContainer-1ZN {\n    grid-column: 1 / span 1;\n    text-align: center;\n}\n\n.accountInformationPage-editInformationButton-34w {\n}\n\n@media (min-width: 961px) {\n    .accountInformationPage-nameLabel-1tz,\n    .accountInformationPage-emailLabel-1QG,\n    .accountInformationPage-passwordLabel-3EB {\n    }\n}\n\n@media (max-width: 960px) {\n    .accountInformationPage-accountDetails-1eC {\n        grid-template-columns: 1fr;\n    }\n\n    .accountInformationPage-lineItemsContainer-3bf {\n        grid-template-columns: 1fr;\n        grid-gap: 0.75rem;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "accountInformationPage-root-3dg",
	"title": "accountInformationPage-title-Uli",
	"accountDetails": "accountInformationPage-accountDetails-1eC",
	"lineItemsContainer": "accountInformationPage-lineItemsContainer-3bf",
	"lineItemLabel": "accountInformationPage-lineItemLabel-1zl",
	"nameLabel": "accountInformationPage-nameLabel-1tz accountInformationPage-lineItemLabel-1zl accountInformationPage-lineItemLabel-1zl",
	"emailLabel": "accountInformationPage-emailLabel-1QG accountInformationPage-lineItemLabel-1zl accountInformationPage-lineItemLabel-1zl",
	"passwordLabel": "accountInformationPage-passwordLabel-3EB accountInformationPage-lineItemLabel-1zl accountInformationPage-lineItemLabel-1zl",
	"nameValue": "accountInformationPage-nameValue-3JI",
	"emailValue": "accountInformationPage-emailValue-JQF",
	"passwordValue": "accountInformationPage-passwordValue-3YW",
	"editButtonContainer": "accountInformationPage-editButtonContainer-1ZN",
	"editInformationButton": "accountInformationPage-editInformationButton-34w " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_normalPriority"] + ""
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Field/message.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Field/message.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".message-root-3-g {\n    color: rgb(var(--venia-global-color-text));\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.625rem 0.125rem 0.125rem;\n}\n\n.message-root-3-g:empty {\n    display: none;\n}\n\n.message-root_error-1hZ {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n", ""]);

// Exports
exports.locals = {
	"root": "message-root-3-g",
	"root_error": "message-root_error-1hZ message-root-3-g"
};

/***/ })

}]);
//# sourceMappingURL=56.4d81095506838d9b2624.js.map