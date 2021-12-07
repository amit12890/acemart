(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js":
/*!************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js ***!
  \************************************************************************/
/*! exports provided: deriveErrorMessage */
/*! exports used: deriveErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deriveErrorMessage; });
/**
 * Maps an error to a string message
 *
 * @param {Error} error the error to map
 * @return {String} error message
 */
const toString = error => {
  const {
    graphQLErrors,
    message
  } = error;
  return graphQLErrors && graphQLErrors.length ? graphQLErrors.map(({
    message
  }) => message).join(', ') : message;
};
/**
 * A function to derive an error string from an array of errors.
 */


const deriveErrorMessage = errors => {
  const errorCollection = [];

  for (const error of errors) {
    if (error) {
      errorCollection.push(toString(error));
    }
  }

  return errorCollection.join(', ');
};

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

/***/ "./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/index.js + 27 modules ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/app.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/OrderHistoryPage/orderHistoryContext.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/OrderHistoryPage/useOrderRow.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Head/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/placeholderImage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Trigger/trigger.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/alert-circle.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/arrow-right.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-down.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-up.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/printer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/search.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/x.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/billingInformation.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/item.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/items.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderDetails.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderTotal.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/paymentMethod.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingInformation.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingMethod.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/collapsedImageGallery.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderProgressBar.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderRow.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_OrderHistoryPage_orderHistoryPage; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__("./node_modules/react-feather/dist/icons/alert-circle.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/search.js
var search = __webpack_require__("./node_modules/react-feather/dist/icons/search.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/arrow-right.js
var arrow_right = __webpack_require__("./node_modules/react-feather/dist/icons/arrow-right.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js
var useToasts = __webpack_require__("./node_modules/@magento/peregrine/lib/Toasts/useToasts.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/OrderHistoryPage/orderHistoryContext.js + 1 modules
var orderHistoryContext = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/OrderHistoryPage/orderHistoryContext.js");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/app.js
var app = __webpack_require__("./node_modules/@magento/peregrine/lib/context/app.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js
var deriveErrorMessage = __webpack_require__("./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/OrderHistoryPage/orderHistoryPage.gql.js

const CustomerOrdersFragment = client["gql"]`
    fragment CustomerOrdersFragment on CustomerOrders {
        items {
            billing_address {
                city
                country_code
                firstname
                lastname
                postcode
                region
                street
                telephone
            }
            id
            invoices {
                id
            }
            items {
                id
                product_name
                product_sale_price {
                    currency
                    value
                }
                product_sku
                product_url_key
                selected_options {
                    label
                    value
                }
                quantity_ordered
            }
            number
            order_date
            payment_methods {
                name
                type
                additional_data {
                    name
                    value
                }
            }
            shipments {
                id
                tracking {
                    number
                }
            }
            shipping_address {
                city
                country_code
                firstname
                lastname
                postcode
                region
                street
                telephone
            }
            shipping_method
            status
            total {
                discounts {
                    amount {
                        currency
                        value
                    }
                }
                grand_total {
                    currency
                    value
                }
                subtotal {
                    currency
                    value
                }
                total_shipping {
                    currency
                    value
                }
                total_tax {
                    currency
                    value
                }
            }
        }
        page_info {
            current_page
            total_pages
        }
        total_count
    }
`;
const GET_CUSTOMER_ORDERS = client["gql"]`
    query GetCustomerOrders(
        $filter: CustomerOrdersFilterInput
        $pageSize: Int!
    ) {
        customer {
            id
            orders(filter: $filter, pageSize: $pageSize) {
                ...CustomerOrdersFragment
            }
        }
    }
    ${CustomerOrdersFragment}
`;
/* harmony default export */ var orderHistoryPage_gql = ({
  getCustomerOrdersQuery: GET_CUSTOMER_ORDERS
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/OrderHistoryPage/useOrderHistoryPage.js
var _s = $RefreshSig$();









const PAGE_SIZE = 10;
const useOrderHistoryPage = (props = {}) => {
  _s();

  const operations = Object(shallowMerge["a" /* default */])(orderHistoryPage_gql, props.operations);
  const {
    getCustomerOrdersQuery
  } = operations;
  const [, {
    actions: {
      setPageLoading
    }
  }] = Object(app["b" /* useAppContext */])();
  const history = Object(react_router["g" /* useHistory */])();
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const [pageSize, setPageSize] = Object(react["useState"])(PAGE_SIZE);
  const [searchText, setSearchText] = Object(react["useState"])('');
  const {
    data: orderData,
    error: getOrderError,
    loading: orderLoading
  } = Object(client["useQuery"])(getCustomerOrdersQuery, {
    fetchPolicy: 'cache-and-network',
    variables: {
      filter: {
        number: {
          match: searchText
        }
      },
      pageSize
    }
  });
  const orders = orderData ? orderData.customer.orders.items : [];
  const isLoadingWithoutData = !orderData && orderLoading;
  const isBackgroundLoading = !!orderData && orderLoading;
  const pageInfo = Object(react["useMemo"])(() => {
    if (orderData) {
      const {
        total_count
      } = orderData.customer.orders;
      return {
        current: pageSize < total_count ? pageSize : total_count,
        total: total_count
      };
    }

    return null;
  }, [orderData, pageSize]);
  const derivedErrorMessage = Object(react["useMemo"])(() => Object(deriveErrorMessage["a" /* deriveErrorMessage */])([getOrderError]), [getOrderError]);
  const handleReset = Object(react["useCallback"])(() => {
    setSearchText('');
  }, []);
  const handleSubmit = Object(react["useCallback"])(({
    search
  }) => {
    setSearchText(search);
  }, []);
  const loadMoreOrders = Object(react["useMemo"])(() => {
    if (orderData) {
      const {
        page_info
      } = orderData.customer.orders;
      const {
        current_page,
        total_pages
      } = page_info;

      if (current_page < total_pages) {
        return () => setPageSize(current => current + PAGE_SIZE);
      }
    }

    return null;
  }, [orderData]); // If the user is no longer signed in, redirect to the home page.

  Object(react["useEffect"])(() => {
    if (!isSignedIn) {
      history.push('/');
    }
  }, [history, isSignedIn]); // Update the page indicator if the GraphQL query is in flight.

  Object(react["useEffect"])(() => {
    setPageLoading(isBackgroundLoading);
  }, [isBackgroundLoading, setPageLoading]);
  return {
    errorMessage: derivedErrorMessage,
    handleReset,
    handleSubmit,
    isBackgroundLoading,
    isLoadingWithoutData,
    loadMoreOrders,
    orders,
    pageInfo,
    searchText
  };
};

_s(useOrderHistoryPage, "0UpyK8IOA2BR0IsKu3x2VoLa+H8=", false, function () {
  return [app["b" /* useAppContext */], react_router["g" /* useHistory */], user["b" /* useUserContext */], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Head/index.js
var Head = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Head/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.css
var orderHistoryPage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.css");
var orderHistoryPage_default = /*#__PURE__*/__webpack_require__.n(orderHistoryPage);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(orderHistoryPage_default.a, options);



/* harmony default export */ var OrderHistoryPage_orderHistoryPage = (orderHistoryPage_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-up.js
var chevron_up = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-up.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-down.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/OrderHistoryPage/useOrderRow.js + 1 modules
var useOrderRow = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/OrderHistoryPage/useOrderRow.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 2 modules
var Image_image = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/image.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/collapsedImageGallery.css
var collapsedImageGallery = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/collapsedImageGallery.css");
var collapsedImageGallery_default = /*#__PURE__*/__webpack_require__.n(collapsedImageGallery);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/collapsedImageGallery.css

            

var collapsedImageGallery_options = {"injectType":"styleTag"};

collapsedImageGallery_options.insert = "head";
collapsedImageGallery_options.singleton = false;

var collapsedImageGallery_update = injectStylesIntoStyleTag_default()(collapsedImageGallery_default.a, collapsedImageGallery_options);



/* harmony default export */ var OrderHistoryPage_collapsedImageGallery = (collapsedImageGallery_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/collapsedImageGallery.js
var collapsedImageGallery_s = $RefreshSig$();






const DISPLAY_COUNT = 4;

const CollapsedImageGallery = props => {
  collapsedImageGallery_s();

  const {
    items
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(OrderHistoryPage_collapsedImageGallery, props.classes);
  const remainderCount = items.length - DISPLAY_COUNT;
  const imageElements = Object(react["useMemo"])(() => {
    if (items) {
      const baseImageElements = Object.values(items).slice(0, DISPLAY_COUNT).map((item, index) => {
        const {
          thumbnail
        } = item;
        const {
          label,
          url
        } = thumbnail;
        return react_default.a.createElement(Image_image["a" /* default */], {
          key: Object.keys(items)[index],
          alt: label,
          src: url,
          width: 48
        });
      }); // If the order contains more than four products, render a remainder count in the last column.

      if (remainderCount > 0) {
        const remainderCountString = `+${remainderCount}`;
        baseImageElements.push(react_default.a.createElement("span", {
          key: 'remainder-column',
          className: classes.remainderCount
        }, remainderCountString));
      }

      return baseImageElements;
    }
  }, [classes.remainderCount, items, remainderCount]);
  return react_default.a.createElement("div", {
    className: classes.root
  }, imageElements);
};

collapsedImageGallery_s(CollapsedImageGallery, "68tM5GlyIZhwe7zXVn2+PWmFEC4=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = CollapsedImageGallery;
/* harmony default export */ var components_OrderHistoryPage_collapsedImageGallery = (CollapsedImageGallery);
CollapsedImageGallery.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    remainderCount: prop_types["string"]
  }),
  items: Object(prop_types["arrayOf"])(prop_types["object"])
};

var _c;

$RefreshReg$(_c, "CollapsedImageGallery");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderProgressBar.css
var orderProgressBar = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderProgressBar.css");
var orderProgressBar_default = /*#__PURE__*/__webpack_require__.n(orderProgressBar);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderProgressBar.css

            

var orderProgressBar_options = {"injectType":"styleTag"};

orderProgressBar_options.insert = "head";
orderProgressBar_options.singleton = false;

var orderProgressBar_update = injectStylesIntoStyleTag_default()(orderProgressBar_default.a, orderProgressBar_options);



/* harmony default export */ var OrderHistoryPage_orderProgressBar = (orderProgressBar_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderProgressBar.js
var orderProgressBar_s = $RefreshSig$();






const TOTAL_STEPS = 4;

const OrderProgressBar = props => {
  orderProgressBar_s();

  const {
    status
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const statusStepMap = new Map([[formatMessage({
    id: 'orderProgressBar.processingText',
    defaultMessage: 'Processing'
  }), 1], [formatMessage({
    id: 'orderProgressBar.readyToShipText',
    defaultMessage: 'Ready to ship'
  }), 2], [formatMessage({
    id: 'orderProgressBar.shippedText',
    defaultMessage: 'Shipped'
  }), 3], [formatMessage({
    id: 'orderProgressBar.deliveredText',
    defaultMessage: 'Delivered'
  }), 4]]);
  const currentStep = statusStepMap.get(status);
  const classes = Object(shallowMerge["a" /* default */])(OrderHistoryPage_orderProgressBar, props.classes);
  const stepElements = Object(react["useMemo"])(() => {
    const elements = [];

    for (let step = 1; step <= TOTAL_STEPS; step++) {
      const stepClass = step <= currentStep ? classes.step_completed : classes.step;
      elements.push(react_default.a.createElement("span", {
        key: step,
        className: stepClass
      }));
    }

    return elements;
  }, [classes, currentStep]);
  return react_default.a.createElement("div", {
    className: classes.root
  }, stepElements);
};

orderProgressBar_s(OrderProgressBar, "71+T81m3XXcoXC5+QBMjPrjy8uc=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

orderProgressBar_c = OrderProgressBar;
/* harmony default export */ var components_OrderHistoryPage_orderProgressBar = (OrderProgressBar);
OrderProgressBar.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    step: prop_types["string"],
    step_completed: prop_types["string"]
  }),
  status: prop_types["string"].isRequired
};

var orderProgressBar_c;

$RefreshReg$(orderProgressBar_c, "OrderProgressBar");
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/printer.js
var printer = __webpack_require__("./node_modules/react-feather/dist/icons/printer.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/billingInformation.css
var billingInformation = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/billingInformation.css");
var billingInformation_default = /*#__PURE__*/__webpack_require__.n(billingInformation);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/billingInformation.css

            

var billingInformation_options = {"injectType":"styleTag"};

billingInformation_options.insert = "head";
billingInformation_options.singleton = false;

var billingInformation_update = injectStylesIntoStyleTag_default()(billingInformation_default.a, billingInformation_options);



/* harmony default export */ var OrderDetails_billingInformation = (billingInformation_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/billingInformation.js
var billingInformation_s = $RefreshSig$();







const BillingInformation = props => {
  billingInformation_s();

  const {
    data,
    classes: propsClasses
  } = props;
  const {
    city,
    country_code,
    firstname,
    lastname,
    postcode,
    region,
    street
  } = data;
  const classes = Object(shallowMerge["a" /* default */])(OrderDetails_billingInformation, propsClasses);
  const additionalAddressString = `${city}, ${region} ${postcode} ${country_code}`;
  const fullName = `${firstname} ${lastname}`;
  const streetRows = street.map((row, index) => {
    return react_default.a.createElement("span", {
      className: classes.streetRow,
      key: index
    }, row);
  });
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.heading
  }, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.billingInformationLabel",
    defaultMessage: "Billing Information"
  })), react_default.a.createElement("span", {
    className: classes.name
  }, fullName), streetRows, react_default.a.createElement("div", {
    className: classes.additionalAddress
  }, additionalAddressString));
};

billingInformation_s(BillingInformation, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

billingInformation_c = BillingInformation;
/* harmony default export */ var OrderHistoryPage_OrderDetails_billingInformation = (BillingInformation);
BillingInformation.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading: prop_types["string"],
    name: prop_types["string"],
    streetRow: prop_types["string"],
    additionalAddress: prop_types["string"]
  }),
  data: Object(prop_types["shape"])({
    city: prop_types["string"],
    country_code: prop_types["string"],
    firstname: prop_types["string"],
    lastname: prop_types["string"],
    postcode: prop_types["string"],
    region: prop_types["string"],
    street: Object(prop_types["arrayOf"])(prop_types["string"])
  })
};

var billingInformation_c;

$RefreshReg$(billingInformation_c, "BillingInformation");
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js + 1 modules
var productOptions = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/item.css
var OrderDetails_item = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/item.css");
var item_default = /*#__PURE__*/__webpack_require__.n(OrderDetails_item);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/item.css

            

var item_options = {"injectType":"styleTag"};

item_options.insert = "head";
item_options.singleton = false;

var item_update = injectStylesIntoStyleTag_default()(item_default.a, item_options);



/* harmony default export */ var OrderHistoryPage_OrderDetails_item = (item_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/placeholderImage.js
var placeholderImage = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/placeholderImage.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/item.js
var item_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














const Item = props => {
  item_s();

  const {
    product_name,
    product_sale_price,
    product_url_key,
    quantity_ordered,
    selected_options,
    thumbnail
  } = props;
  const {
    currency,
    value: unitPrice
  } = product_sale_price;
  const orderHistoryState = Object(orderHistoryContext["b" /* useOrderHistoryContext */])();
  const {
    productURLSuffix
  } = orderHistoryState;
  const itemLink = `${product_url_key}${productURLSuffix}`;
  const mappedOptions = Object(react["useMemo"])(() => selected_options.map(option => ({
    option_label: option.label,
    value_label: option.value
  })), [selected_options]);
  const classes = Object(shallowMerge["a" /* default */])(OrderHistoryPage_OrderDetails_item, props.classes);
  const thumbnailProps = {
    alt: product_name,
    classes: {
      root: classes.thumbnail
    },
    width: 50
  };
  const thumbnailElement = thumbnail ? react_default.a.createElement(Image_image["a" /* default */], _extends({}, thumbnailProps, {
    resource: thumbnail.url
  })) : react_default.a.createElement(placeholderImage["a" /* default */], thumbnailProps);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    className: classes.thumbnailContainer,
    to: itemLink
  }, thumbnailElement), react_default.a.createElement("div", {
    className: classes.nameContainer
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: itemLink
  }, product_name)), react_default.a.createElement(productOptions["a" /* default */], {
    options: mappedOptions,
    classes: {
      options: classes.options
    }
  }), react_default.a.createElement("span", {
    className: classes.quantity
  }, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.quantity",
    defaultMessage: "Qty",
    values: {
      quantity: quantity_ordered
    }
  })), react_default.a.createElement("div", {
    className: classes.price
  }, react_default.a.createElement(price["a" /* default */], {
    currencyCode: currency,
    value: unitPrice
  })), react_default.a.createElement(Button_button["a" /* default */], {
    onClick: () => {
      // TODO will be implemented in PWA-979
      console.log('Buying Again');
    },
    className: classes.buyAgainButton
  }, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.buyAgain",
    defaultMessage: "Buy Again"
  })));
};

item_s(Item, "YZRTkKaIgof5iIGcfhHxhWRfcx4=", false, function () {
  return [orderHistoryContext["b" /* useOrderHistoryContext */], shallowMerge["a" /* default */]];
});

item_c = Item;
/* harmony default export */ var components_OrderHistoryPage_OrderDetails_item = (Item);
Item.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    thumbnailContainer: prop_types["string"],
    thumbnail: prop_types["string"],
    name: prop_types["string"],
    options: prop_types["string"],
    quantity: prop_types["string"],
    price: prop_types["string"],
    buyAgainButton: prop_types["string"]
  }),
  product_name: prop_types["string"].isRequired,
  product_sale_price: Object(prop_types["shape"])({
    currency: prop_types["string"],
    value: prop_types["number"]
  }).isRequired,
  product_url_key: prop_types["string"].isRequired,
  quantity_ordered: prop_types["number"].isRequired,
  selected_options: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    label: prop_types["string"],
    value: prop_types["string"]
  })).isRequired,
  thumbnail: Object(prop_types["shape"])({
    url: prop_types["string"]
  })
};

var item_c;

$RefreshReg$(item_c, "Item");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/items.css
var OrderDetails_items = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/items.css");
var items_default = /*#__PURE__*/__webpack_require__.n(OrderDetails_items);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/items.css

            

var items_options = {"injectType":"styleTag"};

items_options.insert = "head";
items_options.singleton = false;

var items_update = injectStylesIntoStyleTag_default()(items_default.a, items_options);



/* harmony default export */ var OrderHistoryPage_OrderDetails_items = (items_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/items.js
var items_s = $RefreshSig$();

function items_extends() { items_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return items_extends.apply(this, arguments); }








const Items = props => {
  items_s();

  const {
    items,
    imagesData
  } = props.data;
  const classes = Object(shallowMerge["a" /* default */])(OrderHistoryPage_OrderDetails_items, props.classes);
  const itemsComponent = items.map(item => react_default.a.createElement(components_OrderHistoryPage_OrderDetails_item, items_extends({
    key: item.id
  }, item, imagesData[item.product_sku])));
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("h3", {
    className: classes.heading
  }, react_default.a.createElement(message["a" /* default */], {
    id: "orderItems.itemsHeading",
    defaultMessage: "Items"
  })), react_default.a.createElement("div", {
    className: classes.itemsContainer
  }, itemsComponent));
};

items_s(Items, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

items_c = Items;
/* harmony default export */ var components_OrderHistoryPage_OrderDetails_items = (Items);
Items.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  data: Object(prop_types["shape"])({
    items: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      id: prop_types["string"],
      product_name: prop_types["string"],
      product_sale_price: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      }),
      product_sku: prop_types["string"],
      product_url_key: prop_types["string"],
      selected_options: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        label: prop_types["string"],
        value: prop_types["string"]
      })),
      quantity_ordered: prop_types["number"]
    })),
    imagesData: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      id: prop_types["number"],
      sku: prop_types["string"],
      thumbnail: Object(prop_types["shape"])({
        url: prop_types["string"]
      }),
      url_key: prop_types["string"],
      url_suffix: prop_types["string"]
    }))
  })
};

var items_c;

$RefreshReg$(items_c, "Items");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/paymentMethod.css
var paymentMethod = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/paymentMethod.css");
var paymentMethod_default = /*#__PURE__*/__webpack_require__.n(paymentMethod);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/paymentMethod.css

            

var paymentMethod_options = {"injectType":"styleTag"};

paymentMethod_options.insert = "head";
paymentMethod_options.singleton = false;

var paymentMethod_update = injectStylesIntoStyleTag_default()(paymentMethod_default.a, paymentMethod_options);



/* harmony default export */ var OrderDetails_paymentMethod = (paymentMethod_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/paymentMethod.js
var paymentMethod_s = $RefreshSig$();







const PaymentMethod = props => {
  paymentMethod_s();

  const {
    data,
    classes: propsClasses
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(OrderDetails_paymentMethod, propsClasses);
  /**
   * There can be multiple payment methods for an order but
   * since Venia does not support multiple payment methods yet
   * we are picking the first method in the array.
   */

  const [{
    name
  }] = data;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.heading
  }, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.paymentMethodLabel",
    defaultMessage: "Payment Method"
  })), react_default.a.createElement("div", {
    className: classes.payment_type
  }, name));
};

paymentMethod_s(PaymentMethod, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

paymentMethod_c = PaymentMethod;
/* harmony default export */ var OrderHistoryPage_OrderDetails_paymentMethod = (PaymentMethod);
PaymentMethod.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading: prop_types["string"],
    payment_type: prop_types["string"]
  }),
  data: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    name: prop_types["string"]
  }))
};

var paymentMethod_c;

$RefreshReg$(paymentMethod_c, "PaymentMethod");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingInformation.css
var shippingInformation = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingInformation.css");
var shippingInformation_default = /*#__PURE__*/__webpack_require__.n(shippingInformation);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingInformation.css

            

var shippingInformation_options = {"injectType":"styleTag"};

shippingInformation_options.insert = "head";
shippingInformation_options.singleton = false;

var shippingInformation_update = injectStylesIntoStyleTag_default()(shippingInformation_default.a, shippingInformation_options);



/* harmony default export */ var OrderDetails_shippingInformation = (shippingInformation_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingInformation.js
var shippingInformation_s = $RefreshSig$();







const ShippingInformation = props => {
  shippingInformation_s();

  const {
    data,
    classes: propsClasses
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(OrderDetails_shippingInformation, propsClasses);
  let shippingContentElement;

  if (data) {
    const {
      city,
      country_code,
      firstname,
      lastname,
      postcode,
      region,
      street
    } = data;
    const additionalAddressString = `${city}, ${region} ${postcode} ${country_code}`;
    const fullName = `${firstname} ${lastname}`;
    const streetRows = street.map((row, index) => {
      return react_default.a.createElement("span", {
        className: classes.streetRow,
        key: index
      }, row);
    });
    shippingContentElement = react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("span", {
      className: classes.name
    }, fullName), streetRows, react_default.a.createElement("div", {
      className: classes.additionalAddress
    }, additionalAddressString));
  } else {
    shippingContentElement = react_default.a.createElement(message["a" /* default */], {
      id: "orderDetails.noShippingInformation",
      defaultMessage: "No shipping information"
    });
  }

  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.heading
  }, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.shippingInformationLabel",
    defaultMessage: "Shipping Information"
  })), shippingContentElement);
};

shippingInformation_s(ShippingInformation, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

shippingInformation_c = ShippingInformation;
/* harmony default export */ var OrderHistoryPage_OrderDetails_shippingInformation = (ShippingInformation);
ShippingInformation.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading: prop_types["string"],
    name: prop_types["string"],
    streetRow: prop_types["string"],
    additionalAddress: prop_types["string"]
  }),
  data: Object(prop_types["shape"])({
    city: prop_types["string"],
    country_code: prop_types["string"],
    firstname: prop_types["string"],
    lastname: prop_types["string"],
    postcode: prop_types["string"],
    region: prop_types["string"],
    street: Object(prop_types["arrayOf"])(prop_types["string"]),
    telephone: prop_types["string"]
  })
};

var shippingInformation_c;

$RefreshReg$(shippingInformation_c, "ShippingInformation");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingMethod.css
var OrderDetails_shippingMethod = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingMethod.css");
var shippingMethod_default = /*#__PURE__*/__webpack_require__.n(OrderDetails_shippingMethod);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingMethod.css

            

var shippingMethod_options = {"injectType":"styleTag"};

shippingMethod_options.insert = "head";
shippingMethod_options.singleton = false;

var shippingMethod_update = injectStylesIntoStyleTag_default()(shippingMethod_default.a, shippingMethod_options);



/* harmony default export */ var OrderHistoryPage_OrderDetails_shippingMethod = (shippingMethod_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingMethod.js
var shippingMethod_s = $RefreshSig$();







const ShippingMethod = props => {
  shippingMethod_s();

  const {
    data,
    classes: propsClasses
  } = props;
  const {
    shipments,
    shippingMethod
  } = data;
  const classes = Object(shallowMerge["a" /* default */])(OrderHistoryPage_OrderDetails_shippingMethod, propsClasses);
  let trackingElement;

  if (shipments.length) {
    trackingElement = shipments.map(shipment => {
      const {
        tracking: trackingCollection
      } = shipment;

      if (trackingCollection.length) {
        return trackingCollection.map(tracking => {
          const {
            number
          } = tracking;
          return react_default.a.createElement("span", {
            className: classes.trackingRow,
            key: number
          }, react_default.a.createElement(message["a" /* default */], {
            id: "orderDetails.trackingInformation",
            values: {
              number,
              strong: chunks => react_default.a.createElement("strong", null, chunks)
            }
          }));
        });
      }
    });
  } else {
    trackingElement = react_default.a.createElement(message["a" /* default */], {
      id: "orderDetails.waitingOnTracking",
      defaultMessage: "Waiting for tracking information"
    });
  }

  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.heading
  }, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.shippingMethodLabel",
    defaultMessage: "Shipping Method"
  })), react_default.a.createElement("div", {
    className: classes.method
  }, shippingMethod), react_default.a.createElement("div", {
    className: classes.tracking
  }, trackingElement));
};

shippingMethod_s(ShippingMethod, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

shippingMethod_c = ShippingMethod;
/* harmony default export */ var components_OrderHistoryPage_OrderDetails_shippingMethod = (ShippingMethod);
ShippingMethod.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading: prop_types["string"],
    method: prop_types["string"],
    tracking: prop_types["string"],
    trackingRow: prop_types["string"]
  }),
  data: Object(prop_types["shape"])({
    shippingMethod: prop_types["string"],
    shipments: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      id: prop_types["string"],
      tracking: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        number: prop_types["string"]
      }))
    }))
  })
};

var shippingMethod_c;

$RefreshReg$(shippingMethod_c, "ShippingMethod");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderTotal.css
var OrderDetails_orderTotal = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderTotal.css");
var orderTotal_default = /*#__PURE__*/__webpack_require__.n(OrderDetails_orderTotal);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderTotal.css

            

var orderTotal_options = {"injectType":"styleTag"};

orderTotal_options.insert = "head";
orderTotal_options.singleton = false;

var orderTotal_update = injectStylesIntoStyleTag_default()(orderTotal_default.a, orderTotal_options);



/* harmony default export */ var OrderHistoryPage_OrderDetails_orderTotal = (orderTotal_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderTotal.js
var orderTotal_s = $RefreshSig$();








const OrderTotal = props => {
  orderTotal_s();

  const {
    classes: propClasses,
    data
  } = props;
  const {
    discounts,
    grand_total,
    subtotal,
    total_tax,
    total_shipping
  } = data;
  const classes = Object(shallowMerge["a" /* default */])(OrderHistoryPage_OrderDetails_orderTotal, propClasses);
  const discountRowElement = Object(react["useMemo"])(() => {
    if (!discounts || !discounts.length) {
      return null;
    }

    const discountTotal = {
      currency: discounts[0].amount.currency,
      value: discounts.reduce((acc, discount) => acc + discount.amount.value, 0)
    };
    return react_default.a.createElement("div", {
      className: classes.discount
    }, react_default.a.createElement("span", null, react_default.a.createElement(message["a" /* default */], {
      id: "orderDetails.discount",
      defaultMessage: "Discount"
    })), react_default.a.createElement("span", null, react_default.a.createElement(price["a" /* default */], {
      value: discountTotal.value,
      currencyCode: discountTotal.currency
    })));
  }, [classes.discount, discounts]);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.heading
  }, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.orderTotal",
    defaultMessage: "Order Total"
  })), react_default.a.createElement("div", {
    className: classes.subTotal
  }, react_default.a.createElement("span", null, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.subtotal",
    defaultMessage: "Subtotal"
  })), react_default.a.createElement("span", null, react_default.a.createElement(price["a" /* default */], {
    value: subtotal.value,
    currencyCode: subtotal.currency
  }))), discountRowElement, react_default.a.createElement("div", {
    className: classes.tax
  }, react_default.a.createElement("span", null, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.tax",
    defaultMessage: "Tax"
  })), react_default.a.createElement("span", null, react_default.a.createElement(price["a" /* default */], {
    value: total_tax.value,
    currencyCode: total_tax.currency
  }))), react_default.a.createElement("div", {
    className: classes.shipping
  }, react_default.a.createElement("span", null, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.shipping",
    defaultMessage: "Shipping"
  })), react_default.a.createElement("span", null, react_default.a.createElement(price["a" /* default */], {
    value: total_shipping.value,
    currencyCode: total_shipping.currency
  }))), react_default.a.createElement("div", {
    className: classes.total
  }, react_default.a.createElement("span", null, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.total",
    defaultMessage: "Total"
  })), react_default.a.createElement("span", null, react_default.a.createElement(price["a" /* default */], {
    value: grand_total.value,
    currencyCode: grand_total.currency
  }))));
};

orderTotal_s(OrderTotal, "cHu9DkbDql1+Z3s7qlrB3fT8aGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

orderTotal_c = OrderTotal;
/* harmony default export */ var components_OrderHistoryPage_OrderDetails_orderTotal = (OrderTotal);
OrderTotal.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading: prop_types["string"],
    subTotal: prop_types["string"],
    discount: prop_types["string"],
    tax: prop_types["string"],
    shipping: prop_types["string"],
    total: prop_types["string"]
  }),
  data: Object(prop_types["shape"])({
    discounts: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      amount: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      })
    })),
    grand_total: Object(prop_types["shape"])({
      currency: prop_types["string"],
      value: prop_types["number"]
    }),
    subtotal: Object(prop_types["shape"])({
      currency: prop_types["string"],
      value: prop_types["number"]
    }),
    total_tax: Object(prop_types["shape"])({
      currency: prop_types["string"],
      value: prop_types["number"]
    }),
    total_shipping: Object(prop_types["shape"])({
      currency: prop_types["string"],
      value: prop_types["number"]
    })
  })
};

var orderTotal_c;

$RefreshReg$(orderTotal_c, "OrderTotal");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderDetails.css
var OrderDetails_orderDetails = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderDetails.css");
var orderDetails_default = /*#__PURE__*/__webpack_require__.n(OrderDetails_orderDetails);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderDetails.css

            

var orderDetails_options = {"injectType":"styleTag"};

orderDetails_options.insert = "head";
orderDetails_options.singleton = false;

var orderDetails_update = injectStylesIntoStyleTag_default()(orderDetails_default.a, orderDetails_options);



/* harmony default export */ var OrderHistoryPage_OrderDetails_orderDetails = (orderDetails_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderDetails.js
var orderDetails_s = $RefreshSig$();
















const OrderDetails = props => {
  orderDetails_s();

  const {
    classes: propClasses,
    imagesData,
    orderData
  } = props;
  const {
    billing_address,
    items,
    payment_methods,
    shipping_address,
    shipping_method,
    shipments,
    total
  } = orderData;
  const classes = Object(shallowMerge["a" /* default */])(OrderHistoryPage_OrderDetails_orderDetails, propClasses);
  const shippingMethodData = {
    shippingMethod: shipping_method,
    shipments
  };
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.shippingInformationContainer
  }, react_default.a.createElement(OrderHistoryPage_OrderDetails_shippingInformation, {
    data: shipping_address
  })), react_default.a.createElement("div", {
    className: classes.shippingMethodContainer
  }, react_default.a.createElement(components_OrderHistoryPage_OrderDetails_shippingMethod, {
    data: shippingMethodData
  })), react_default.a.createElement("div", {
    className: classes.billingInformationContainer
  }, react_default.a.createElement(OrderHistoryPage_OrderDetails_billingInformation, {
    data: billing_address
  })), react_default.a.createElement("div", {
    className: classes.paymentMethodContainer
  }, react_default.a.createElement(OrderHistoryPage_OrderDetails_paymentMethod, {
    data: payment_methods
  })), react_default.a.createElement("div", {
    className: classes.itemsContainer
  }, react_default.a.createElement(components_OrderHistoryPage_OrderDetails_items, {
    data: {
      imagesData,
      items
    }
  })), react_default.a.createElement("div", {
    className: classes.orderTotalContainer
  }, react_default.a.createElement(components_OrderHistoryPage_OrderDetails_orderTotal, {
    data: total
  })), react_default.a.createElement(Button_button["a" /* default */], {
    className: classes.printButton,
    onClick: () => {
      // TODO will be implemented in PWA-978
      console.log('Printing Receipt');
    }
  }, react_default.a.createElement(icon["a" /* default */], {
    src: printer["a" /* default */]
  }), react_default.a.createElement("span", {
    className: classes.printLabel
  }, react_default.a.createElement(message["a" /* default */], {
    id: "orderDetails.printLabel",
    defaultMessage: "Print Receipt"
  }))));
};

orderDetails_s(OrderDetails, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

orderDetails_c = OrderDetails;
/* harmony default export */ var components_OrderHistoryPage_OrderDetails_orderDetails = (OrderDetails);
OrderDetails.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    shippingInformationContainer: prop_types["string"],
    shippingMethodContainer: prop_types["string"],
    billingInformationContainer: prop_types["string"],
    paymentMethodContainer: prop_types["string"],
    itemsContainer: prop_types["string"],
    orderTotalContainer: prop_types["string"],
    printButton: prop_types["string"],
    printLabel: prop_types["string"]
  }),
  imagesData: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    id: prop_types["number"],
    sku: prop_types["string"],
    thumbnail: Object(prop_types["shape"])({
      url: prop_types["string"]
    }),
    url_key: prop_types["string"],
    url_suffix: prop_types["string"]
  })),
  orderData: Object(prop_types["shape"])({
    billing_address: Object(prop_types["shape"])({
      city: prop_types["string"],
      country_code: prop_types["string"],
      firstname: prop_types["string"],
      lastname: prop_types["string"],
      postcode: prop_types["string"],
      region_id: prop_types["string"],
      street: Object(prop_types["arrayOf"])(prop_types["string"])
    }),
    items: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      id: prop_types["string"],
      product_name: prop_types["string"],
      product_sale_price: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      }),
      product_sku: prop_types["string"],
      selected_options: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        label: prop_types["string"],
        value: prop_types["string"]
      })),
      quantity_ordered: prop_types["number"]
    })),
    payment_methods: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      type: prop_types["string"],
      additional_data: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        name: prop_types["string"],
        value: prop_types["string"]
      }))
    })),
    shipping_address: Object(prop_types["shape"])({
      city: prop_types["string"],
      country_code: prop_types["string"],
      firstname: prop_types["string"],
      lastname: prop_types["string"],
      postcode: prop_types["string"],
      region_id: prop_types["string"],
      street: Object(prop_types["arrayOf"])(prop_types["string"]),
      telephone: prop_types["string"]
    }),
    shipping_method: prop_types["string"],
    shipments: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      id: prop_types["string"],
      tracking: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        carrier: prop_types["string"],
        number: prop_types["string"]
      }))
    })),
    total: Object(prop_types["shape"])({
      discounts: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        amount: Object(prop_types["shape"])({
          currency: prop_types["string"],
          value: prop_types["number"]
        })
      })),
      grand_total: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      }),
      subtotal: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      }),
      total_tax: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      }),
      total_shipping: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      })
    })
  })
};

var orderDetails_c;

$RefreshReg$(orderDetails_c, "OrderDetails");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderRow.css
var orderRow = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderRow.css");
var orderRow_default = /*#__PURE__*/__webpack_require__.n(orderRow);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderRow.css

            

var orderRow_options = {"injectType":"styleTag"};

orderRow_options.insert = "head";
orderRow_options.singleton = false;

var orderRow_update = injectStylesIntoStyleTag_default()(orderRow_default.a, orderRow_options);



/* harmony default export */ var OrderHistoryPage_orderRow = (orderRow_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderRow.js
var orderRow_s = $RefreshSig$();














const OrderRow = props => {
  orderRow_s();

  const {
    order
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const {
    invoices,
    items,
    number: orderNumber,
    order_date: orderDate,
    shipments,
    status,
    total
  } = order;
  const {
    grand_total: grandTotal
  } = total;
  const {
    currency,
    value: orderTotal
  } = grandTotal; // Convert date to ISO-8601 format so Safari can also parse it

  const isoFormattedDate = orderDate.replace(' ', 'T');
  const formattedDate = new Date(isoFormattedDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const hasInvoice = !!invoices.length;
  const hasShipment = !!shipments.length;
  let derivedStatus;

  if (status === 'Complete') {
    derivedStatus = formatMessage({
      id: 'orderRow.deliveredText',
      defaultMessage: 'Delivered'
    });
  } else if (hasShipment) {
    derivedStatus = formatMessage({
      id: 'orderRow.shippedText',
      defaultMessage: 'Shipped'
    });
  } else if (hasInvoice) {
    derivedStatus = formatMessage({
      id: 'orderRow.readyToShipText',
      defaultMessage: 'Ready to ship'
    });
  } else {
    derivedStatus = formatMessage({
      id: 'orderRow.processingText',
      defaultMessage: 'Processing'
    });
  }

  const talonProps = Object(useOrderRow["a" /* useOrderRow */])({
    items
  });
  const {
    loading,
    isOpen,
    handleContentToggle,
    imagesData
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(OrderHistoryPage_orderRow, props.classes);
  const contentClass = isOpen ? classes.content : classes.content_collapsed;
  const contentToggleIconSrc = isOpen ? chevron_up["a" /* default */] : chevron_down["a" /* default */];
  const contentToggleIcon = react_default.a.createElement(icon["a" /* default */], {
    src: contentToggleIconSrc,
    size: 24
  });
  const collapsedImageGalleryElement = isOpen ? null : react_default.a.createElement(components_OrderHistoryPage_collapsedImageGallery, {
    items: imagesData
  });
  const orderDetails = loading ? null : react_default.a.createElement(components_OrderHistoryPage_OrderDetails_orderDetails, {
    orderData: order,
    imagesData: imagesData
  });
  return react_default.a.createElement("li", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.orderNumberContainer
  }, react_default.a.createElement("span", {
    className: classes.orderNumberLabel
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'orderRow.orderNumberText',
    defaultMessage: 'Order #'
  })), react_default.a.createElement("span", {
    className: classes.orderNumber
  }, orderNumber)), react_default.a.createElement("div", {
    className: classes.orderDateContainer
  }, react_default.a.createElement("span", {
    className: classes.orderDateLabel
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'orderRow.orderDateText',
    defaultMessage: 'Order Date'
  })), react_default.a.createElement("span", {
    className: classes.orderDate
  }, formattedDate)), react_default.a.createElement("div", {
    className: classes.orderTotalContainer
  }, react_default.a.createElement("span", {
    className: classes.orderTotalLabel
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'orderRow.orderTotalText',
    defaultMessage: 'Order Total'
  })), react_default.a.createElement("div", {
    className: classes.orderTotal
  }, react_default.a.createElement(price["a" /* default */], {
    currencyCode: currency,
    value: orderTotal
  }))), react_default.a.createElement("div", {
    className: classes.orderItemsContainer
  }, collapsedImageGalleryElement), react_default.a.createElement("div", {
    className: classes.orderStatusContainer
  }, react_default.a.createElement("span", {
    className: classes.orderStatusBadge
  }, derivedStatus), react_default.a.createElement(components_OrderHistoryPage_orderProgressBar, {
    status: derivedStatus
  })), react_default.a.createElement("button", {
    className: classes.contentToggleContainer,
    onClick: handleContentToggle,
    type: "button"
  }, contentToggleIcon), react_default.a.createElement("div", {
    className: contentClass
  }, orderDetails));
};

orderRow_s(OrderRow, "aQsNVEuu0mDb9UazRRqlaY3mro8=", false, function () {
  return [useIntl["a" /* default */], useOrderRow["a" /* useOrderRow */], shallowMerge["a" /* default */]];
});

orderRow_c = OrderRow;
/* harmony default export */ var components_OrderHistoryPage_orderRow = (OrderRow);
OrderRow.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    cell: prop_types["string"],
    stackedCell: prop_types["string"],
    label: prop_types["string"],
    value: prop_types["string"],
    orderNumberContainer: prop_types["string"],
    orderDateContainer: prop_types["string"],
    orderTotalContainer: prop_types["string"],
    orderStatusContainer: prop_types["string"],
    orderItemsContainer: prop_types["string"],
    contentToggleContainer: prop_types["string"],
    orderNumberLabel: prop_types["string"],
    orderDateLabel: prop_types["string"],
    orderTotalLabel: prop_types["string"],
    orderNumber: prop_types["string"],
    orderDate: prop_types["string"],
    orderTotal: prop_types["string"],
    orderStatusBadge: prop_types["string"],
    content: prop_types["string"],
    content_collapsed: prop_types["string"]
  }),
  order: Object(prop_types["shape"])({
    billing_address: Object(prop_types["shape"])({
      city: prop_types["string"],
      country_code: prop_types["string"],
      firstname: prop_types["string"],
      lastname: prop_types["string"],
      postcode: prop_types["string"],
      region_id: prop_types["string"],
      street: Object(prop_types["arrayOf"])(prop_types["string"])
    }),
    items: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      id: prop_types["string"],
      product_name: prop_types["string"],
      product_sale_price: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      }),
      product_sku: prop_types["string"],
      selected_options: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        label: prop_types["string"],
        value: prop_types["string"]
      })),
      quantity_ordered: prop_types["number"]
    })),
    invoices: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      id: prop_types["string"]
    })),
    number: prop_types["string"],
    order_date: prop_types["string"],
    payment_methods: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      type: prop_types["string"],
      additional_data: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        name: prop_types["string"],
        value: prop_types["string"]
      }))
    })),
    shipping_address: Object(prop_types["shape"])({
      city: prop_types["string"],
      country_code: prop_types["string"],
      firstname: prop_types["string"],
      lastname: prop_types["string"],
      postcode: prop_types["string"],
      region_id: prop_types["string"],
      street: Object(prop_types["arrayOf"])(prop_types["string"]),
      telephone: prop_types["string"]
    }),
    shipping_method: prop_types["string"],
    shipments: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      id: prop_types["string"],
      tracking: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        number: prop_types["string"]
      }))
    })),
    status: prop_types["string"],
    total: Object(prop_types["shape"])({
      discounts: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        amount: Object(prop_types["shape"])({
          currency: prop_types["string"],
          value: prop_types["number"]
        })
      })),
      grand_total: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      }),
      subtotal: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      }),
      total_tax: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      }),
      total_shipping: Object(prop_types["shape"])({
        currency: prop_types["string"],
        value: prop_types["number"]
      })
    })
  })
};

var orderRow_c;

$RefreshReg$(orderRow_c, "OrderRow");
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__("./node_modules/react-feather/dist/icons/x.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Trigger/trigger.js + 1 modules
var trigger = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Trigger/trigger.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/resetButton.js
var resetButton_s = $RefreshSig$();







const clearIcon = react_default.a.createElement(icon["a" /* default */], {
  src: x["a" /* default */],
  size: 24
});

const ResetButton = props => {
  resetButton_s();

  const {
    onReset
  } = props;
  const formApi = Object(esm["n" /* useFormApi */])();

  const handleReset = () => {
    formApi.reset();

    if (onReset) {
      onReset();
    }
  };

  return react_default.a.createElement(trigger["a" /* default */], {
    action: handleReset
  }, clearIcon);
};

resetButton_s(ResetButton, "uTmWyyMjc8qLm9rsUwf9ckYgslA=", false, function () {
  return [esm["n" /* useFormApi */]];
});

resetButton_c = ResetButton;
/* harmony default export */ var resetButton = (ResetButton);
ResetButton.propTypes = {
  onReset: prop_types["func"]
};

var resetButton_c;

$RefreshReg$(resetButton_c, "ResetButton");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.js
var orderHistoryPage_s = $RefreshSig$();


















const errorIcon = react_default.a.createElement(icon["a" /* default */], {
  src: alert_circle["a" /* default */],
  attrs: {
    width: 18
  }
});
const searchIcon = react_default.a.createElement(icon["a" /* default */], {
  src: search["a" /* default */],
  size: 24
});

const OrderHistoryPage = props => {
  orderHistoryPage_s();

  const talonProps = useOrderHistoryPage();
  const {
    errorMessage,
    loadMoreOrders,
    handleReset,
    handleSubmit,
    isBackgroundLoading,
    isLoadingWithoutData,
    orders,
    pageInfo,
    searchText
  } = talonProps;
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const PAGE_TITLE = formatMessage({
    id: 'orderHistoryPage.pageTitleText',
    defaultMessage: 'Order History'
  });
  const SEARCH_PLACE_HOLDER = formatMessage({
    id: 'orderHistoryPage.search',
    defaultMessage: 'Search by Order Number'
  });
  const classes = Object(shallowMerge["a" /* default */])(OrderHistoryPage_orderHistoryPage, props.classes);
  const orderRows = Object(react["useMemo"])(() => {
    return orders.map(order => {
      return react_default.a.createElement(components_OrderHistoryPage_orderRow, {
        key: order.id,
        order: order
      });
    });
  }, [orders]);
  const pageContents = Object(react["useMemo"])(() => {
    if (isLoadingWithoutData) {
      return react_default.a.createElement(indicator["a" /* default */], null);
    } else if (!isBackgroundLoading && searchText && !orders.length) {
      return react_default.a.createElement("h3", {
        className: classes.emptyHistoryMessage
      }, react_default.a.createElement(message["a" /* default */], {
        id: 'orderHistoryPage.invalidOrderNumber',
        defaultMessage: `Order "${searchText}" was not found.`,
        values: {
          number: searchText
        }
      }));
    } else if (!isBackgroundLoading && !orders.length) {
      return react_default.a.createElement("h3", {
        className: classes.emptyHistoryMessage
      }, react_default.a.createElement(message["a" /* default */], {
        id: 'orderHistoryPage.emptyDataMessage',
        defaultMessage: "You don't have any orders yet."
      }));
    } else {
      return react_default.a.createElement("ul", {
        className: classes.orderHistoryTable
      }, orderRows);
    }
  }, [classes.emptyHistoryMessage, classes.orderHistoryTable, isBackgroundLoading, isLoadingWithoutData, orderRows, orders.length, searchText]);
  const resetButtonElement = searchText ? react_default.a.createElement(resetButton, {
    onReset: handleReset
  }) : null;
  const submitIcon = react_default.a.createElement(icon["a" /* default */], {
    src: arrow_right["a" /* default */],
    size: 24,
    classes: {
      icon: classes.submitIcon
    }
  });
  const pageInfoLabel = pageInfo ? react_default.a.createElement(message["a" /* default */], {
    defaultMessage: 'Showing {current} of {total}',
    id: 'orderHistoryPage.pageInfo',
    values: pageInfo
  }) : null;
  const loadMoreButton = loadMoreOrders ? react_default.a.createElement(Button_button["a" /* default */], {
    classes: {
      root_lowPriority: classes.loadMoreButton
    },
    disabled: isBackgroundLoading || isLoadingWithoutData,
    onClick: loadMoreOrders,
    priority: "low"
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'orderHistoryPage.loadMore',
    defaultMessage: 'Load More'
  })) : null;
  Object(react["useEffect"])(() => {
    if (errorMessage) {
      addToast({
        type: 'error',
        icon: errorIcon,
        message: errorMessage,
        dismissable: true,
        timeout: 10000
      });
    }
  }, [addToast, errorMessage]);
  return react_default.a.createElement(orderHistoryContext["a" /* default */], null, react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(Head["b" /* StoreTitle */], null, PAGE_TITLE), react_default.a.createElement("h1", {
    className: classes.heading
  }, PAGE_TITLE), react_default.a.createElement("div", {
    className: classes.filterRow
  }, react_default.a.createElement("span", {
    className: classes.pageInfo
  }, pageInfoLabel), react_default.a.createElement(esm["c" /* Form */], {
    className: classes.search,
    onSubmit: handleSubmit
  }, react_default.a.createElement(textInput["a" /* default */], {
    after: resetButtonElement,
    before: searchIcon,
    field: "search",
    id: classes.search,
    placeholder: SEARCH_PLACE_HOLDER
  }), react_default.a.createElement(Button_button["a" /* default */], {
    className: classes.searchButton,
    disabled: isBackgroundLoading || isLoadingWithoutData,
    priority: 'high',
    type: "submit"
  }, submitIcon))), pageContents, loadMoreButton));
};

orderHistoryPage_s(OrderHistoryPage, "EIbCq1HLtSI+RTGZT8cKB+wV6T4=", false, function () {
  return [useOrderHistoryPage, useToasts["a" /* useToasts */], useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

orderHistoryPage_c = OrderHistoryPage;
/* harmony default export */ var components_OrderHistoryPage_orderHistoryPage = (OrderHistoryPage);
OrderHistoryPage.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading: prop_types["string"],
    emptyHistoryMessage: prop_types["string"],
    orderHistoryTable: prop_types["string"],
    search: prop_types["string"],
    searchButton: prop_types["string"],
    submitIcon: prop_types["string"],
    loadMoreButton: prop_types["string"]
  })
};

var orderHistoryPage_c;

$RefreshReg$(orderHistoryPage_c, "OrderHistoryPage");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/index.js


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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/billingInformation.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/billingInformation.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".billingInformation-root-L4d {\n    display: grid;\n    row-gap: 0.375rem;\n}\n\n.billingInformation-heading-NPb {\n    font-weight: var(--venia-global-fontWeight-bold);\n    padding-bottom: 0.375rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "billingInformation-root-L4d",
	"heading": "billingInformation-heading-NPb"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/item.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/item.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".item-root-Wz1 {\n    display: grid;\n    grid-template-columns: auto repeat(3, 1fr) auto;\n    grid-template-rows: auto 1fr;\n    row-gap: 0.375rem;\n    column-gap: 1rem;\n}\n\n.item-thumbnailContainer-2Wg {\n    grid-row: 1 / -1;\n}\n\n.item-nameContainer-3rZ {\n    grid-column: 2 / -1;\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.item-buyAgainButton-rlK {\n    align-self: start;\n    grid-column-end: -1;\n    text-decoration: underline;\n    /** Hide until PWA-979 is completed */\n    visibility: hidden;\n}\n\n@media (max-width: 960px) {\n    .item-root-Wz1 {\n        display: grid;\n        grid-template-columns: auto 1fr;\n        grid-template-rows: repeat(5, auto);\n        row-gap: 0.5rem;\n        column-gap: 1rem;\n    }\n\n    .item-buyAgainButton-rlK {\n        grid-column-end: auto;\n        justify-self: start;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "item-root-Wz1",
	"thumbnailContainer": "item-thumbnailContainer-2Wg",
	"nameContainer": "item-nameContainer-3rZ",
	"buyAgainButton": "item-buyAgainButton-rlK"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/items.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/items.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".items-root-2wN {\n    padding-right: 1.5rem;\n}\n\n.items-heading-32z {\n    font-weight: var(--venia-global-fontWeight-bold);\n    padding-bottom: 0.75rem;\n}\n\n.items-itemsContainer-1iG {\n    display: grid;\n    row-gap: 2.5rem;\n}\n\n@media (max-width: 960px) {\n    .items-root-2wN {\n        display: grid;\n        padding-right: 0rem;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "items-root-2wN",
	"heading": "items-heading-32z",
	"itemsContainer": "items-itemsContainer-1iG"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderDetails.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderDetails.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".orderDetails-root-3O0 {\n    display: grid;\n    gap: 2rem;\n}\n\n.orderDetails-shippingInformationContainer-1nj {\n    grid-row: 1 / span 1;\n    grid-column: 1 / span 1;\n}\n\n.orderDetails-shippingMethodContainer-31r {\n    grid-row: 1 / span 1;\n    grid-column: 2 / span 1;\n}\n\n.orderDetails-billingInformationContainer-c8Y {\n    grid-row: 1 / span 1;\n    grid-column: 3 / span 1;\n}\n\n.orderDetails-paymentMethodContainer-1vs {\n    grid-row: 1 / span 1;\n    grid-column: 4 / span 1;\n}\n\n.orderDetails-itemsContainer-rbD {\n    grid-row: 2 / span 4;\n    grid-column: 1 / span 2;\n}\n\n.orderDetails-orderTotalContainer-q5F {\n    grid-row: 2 / span 2;\n    grid-column: 3 / span 2;\n\n    min-width: 22rem;\n    max-width: 25rem;\n    margin: auto;\n}\n\n.orderDetails-printButton-22q {\n    grid-row: 4 / span 1;\n    grid-column: 3 / span 2;\n\n    align-items: center;\n    column-gap: 0.5rem;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: auto 1fr;\n    width: fit-content;\n    margin: auto;\n    /** Hide until PWA-978 is completed */\n    visibility: hidden;\n}\n\n.orderDetails-printLabel-2o5 {\n    text-decoration: underline;\n}\n\n/*\n * Mobile-specific styles.\n */\n\n@media (max-width: 960px) {\n    .orderDetails-root-3O0 {\n        display: grid;\n        column-gap: 0rem;\n        gap: 1.5rem;\n    }\n\n    .orderDetails-shippingInformationContainer-1nj {\n        grid-row: 1 / span 1;\n        grid-column: 1 / span 1;\n    }\n\n    .orderDetails-shippingMethodContainer-31r {\n        grid-row: 2 / span 1;\n        grid-column: 1 / span 1;\n    }\n\n    .orderDetails-billingInformationContainer-c8Y {\n        grid-row: 3 / span 1;\n        grid-column: 1 / span 1;\n    }\n\n    .orderDetails-paymentMethodContainer-1vs {\n        grid-row: 4 / span 1;\n        grid-column: 1 / span 1;\n    }\n\n    .orderDetails-itemsContainer-rbD {\n        grid-row: 5 / span 1;\n        grid-column: 1 / span 1;\n    }\n\n    .orderDetails-orderTotalContainer-q5F {\n        grid-row: 6 / span 1;\n        grid-column: 1 / span 1;\n\n        min-width: 0rem;\n        max-width: none;\n        margin: unset;\n    }\n\n    .orderDetails-printButton-22q {\n        grid-row: 7 / span 1;\n        grid-column: 1 / span 1;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "orderDetails-root-3O0",
	"shippingInformationContainer": "orderDetails-shippingInformationContainer-1nj",
	"shippingMethodContainer": "orderDetails-shippingMethodContainer-31r",
	"billingInformationContainer": "orderDetails-billingInformationContainer-c8Y",
	"paymentMethodContainer": "orderDetails-paymentMethodContainer-1vs",
	"itemsContainer": "orderDetails-itemsContainer-rbD",
	"orderTotalContainer": "orderDetails-orderTotalContainer-q5F",
	"printButton": "orderDetails-printButton-22q",
	"printLabel": "orderDetails-printLabel-2o5"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderTotal.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/orderTotal.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".orderTotal-root-3pk {\n    display: grid;\n    gap: 1rem;\n    padding: 2rem;\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n}\n\n.orderTotal-heading-1_m {\n    font-weight: var(--venia-global-fontWeight-bold);\n    padding-bottom: 0.5rem;\n}\n\n.orderTotal-subTotal-whD {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 1rem;\n}\n\n.orderTotal-discount-38K {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 1rem;\n}\n\n.orderTotal-tax-28Q {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 1rem;\n}\n\n.orderTotal-shipping-i_y {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 1rem;\n}\n\n.orderTotal-total-1QB {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 1rem;\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n@media (max-width: 960px) {\n    .orderTotal-root-3pk {\n        border: none;\n        border-radius: 0rem;\n        padding: 1rem 0rem;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "orderTotal-root-3pk",
	"heading": "orderTotal-heading-1_m",
	"subTotal": "orderTotal-subTotal-whD",
	"discount": "orderTotal-discount-38K",
	"tax": "orderTotal-tax-28Q",
	"shipping": "orderTotal-shipping-i_y",
	"total": "orderTotal-total-1QB"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/paymentMethod.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/paymentMethod.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".paymentMethod-root-1t8 {\n    display: grid;\n    row-gap: 0.375rem;\n}\n\n.paymentMethod-heading-3bq {\n    grid-row: 1 / span 1;\n    font-weight: var(--venia-global-fontWeight-bold);\n    padding-bottom: 0.375rem;\n}\n\n.paymentMethod-payment_type-sl7 {\n    grid-row: 2 / span 1;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "paymentMethod-root-1t8",
	"heading": "paymentMethod-heading-3bq",
	"payment_type": "paymentMethod-payment_type-sl7"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingInformation.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingInformation.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".shippingInformation-root-2ic {\n    display: grid;\n    row-gap: 0.375rem;\n}\n\n.shippingInformation-heading-3RU {\n    font-weight: var(--venia-global-fontWeight-bold);\n    padding-bottom: 0.375rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "shippingInformation-root-2ic",
	"heading": "shippingInformation-heading-3RU"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingMethod.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/OrderDetails/shippingMethod.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".shippingMethod-root-1ao {\n    display: grid;\n    row-gap: 0.375rem;\n}\n\n.shippingMethod-heading-1kk {\n    font-weight: var(--venia-global-fontWeight-bold);\n    padding-bottom: 0.375rem;\n}\n\n.shippingMethod-method-1LS:empty {\n    display: none;\n}\n\n.shippingMethod-tracking-gxx {\n    display: grid;\n    row-gap: 0.375rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "shippingMethod-root-1ao",
	"heading": "shippingMethod-heading-1kk",
	"method": "shippingMethod-method-1LS",
	"tracking": "shippingMethod-tracking-gxx"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/collapsedImageGallery.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/collapsedImageGallery.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".collapsedImageGallery-root-2yx {\n    align-items: center;\n    column-gap: 0.25rem;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    height: 100%;\n    justify-items: center;\n    padding: 0 0.25rem;\n}\n\n.collapsedImageGallery-remainderCount-2dZ {\n    color: rgb(var(--venia-global-color-text-hint));\n    font-size: var(--venia-typography-body-S-fontSize);\n    justify-self: center;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "collapsedImageGallery-root-2yx",
	"remainderCount": "collapsedImageGallery-remainderCount-2dZ"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");

// Module
exports.push([module.i, ".orderHistoryPage-root-Pj1 {\n    display: grid;\n    padding: 2rem 3rem;\n    row-gap: 2rem;\n}\n\n.orderHistoryPage-heading-18e {\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n    justify-self: center;\n    text-transform: capitalize;\n}\n\n.orderHistoryPage-emptyHistoryMessage-2VD {\n    text-align: center;\n}\n\n.orderHistoryPage-orderHistoryTable-1lz {\n    display: grid;\n    row-gap: 1rem;\n}\n\n.orderHistoryPage-filterRow-3R4 {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n}\n\n.orderHistoryPage-pageInfo-tqM {\n    font-size: var(--venia-typography-body-S-fontSize);\n}\n\n.orderHistoryPage-search-3n7 {\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    width: 22rem;\n}\n\n.orderHistoryPage-searchButton-VKw {\n\n    width: 5rem;\n    height: 2rem;\n    min-width: 5rem;\n}\n\n.orderHistoryPage-submitIcon-3LE {\n    color: white;\n}\n\n.orderHistoryPage-loadMoreButton-2-E {\n    justify-self: center;\n}\n\n@media (max-width: 960px) {\n    .orderHistoryPage-root-Pj1 {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n    }\n\n    .orderHistoryPage-filterRow-3R4 {\n        align-items: flex-start;\n        flex-direction: column;\n        row-gap: 1rem;\n    }\n\n    .orderHistoryPage-search-3n7 {\n        gap: 0.5rem;\n        width: 100%;\n        justify-self: center;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "orderHistoryPage-root-Pj1",
	"heading": "orderHistoryPage-heading-18e",
	"emptyHistoryMessage": "orderHistoryPage-emptyHistoryMessage-2VD",
	"orderHistoryTable": "orderHistoryPage-orderHistoryTable-1lz",
	"filterRow": "orderHistoryPage-filterRow-3R4",
	"pageInfo": "orderHistoryPage-pageInfo-tqM",
	"search": "orderHistoryPage-search-3n7",
	"searchButton": "orderHistoryPage-searchButton-VKw " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_highPriority"] + "",
	"submitIcon": "orderHistoryPage-submitIcon-3LE",
	"loadMoreButton": "orderHistoryPage-loadMoreButton-2-E " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_lowPriority"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderProgressBar.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderProgressBar.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".orderProgressBar-root-25j {\n    column-gap: 0.25rem;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-rows: 6px;\n}\n\n.orderProgressBar-step-14z {\n    background-color: rgb(var(--venia-global-color-gray-dark));\n}\n\n.orderProgressBar-step_completed-3PN {\n    background-color: rgb(var(--venia-brand-color-1-700));\n}\n", ""]);

// Exports
exports.locals = {
	"root": "orderProgressBar-root-25j",
	"step": "orderProgressBar-step-14z",
	"step_completed": "orderProgressBar-step_completed-3PN"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderRow.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/OrderHistoryPage/orderRow.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".orderRow-root-BK4 {\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    display: grid;\n    grid-template-columns: minmax(9rem, 1fr) minmax(9rem, 1fr) minmax(9rem, 1fr) 16rem 2fr 3rem;\n}\n\n.orderRow-cell-XFo {\n    border-left: 2px solid rgb(var(--venia-global-color-gray));\n    padding: 1.5rem;\n    overflow: hidden;\n}\n\n.orderRow-stackedCell-3gR {\n    display: grid;\n    row-gap: 0.25rem;\n}\n\n.orderRow-label-3FY {\n    font-size: var(--venia-typography-body-XS-fontSize);\n}\n\n.orderRow-value-3Jj {\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.orderRow-orderNumberContainer-2JG,\n.orderRow-orderDateContainer-3bw,\n.orderRow-orderTotalContainer-2yc {\n}\n\n.orderRow-orderStatusContainer-3qe {\n    row-gap: 0.75rem;\n}\n\n.orderRow-orderItemsContainer-3Bv {\n    padding: 0;\n}\n\n.orderRow-contentToggleContainer-1XN {\n    padding: 0;\n}\n\n.orderRow-orderNumberLabel-3R3,\n.orderRow-orderDateLabel-hMj,\n.orderRow-orderTotalLabel-2fU {\n}\n\n.orderRow-orderNumber-1DI,\n.orderRow-orderDate-3oG,\n.orderRow-orderTotal-1d6 {\n}\n\n.orderRow-orderStatusBadge-QdL {\n    border: 1px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    font-weight: var(--venia-global-fontWeight-bold);\n    justify-self: flex-start;\n    padding: 0.25rem 1.25rem;\n}\n\n.orderRow-content-36O {\n    border-top: 2px solid rgb(var(--venia-global-color-gray));\n    grid-column: 1 / -1;\n    padding: 1.5rem;\n}\n\n.orderRow-content_collapsed-255 {\n    display: none;\n}\n\n@media (max-width: 960px) {\n    .orderRow-root-BK4 {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .orderRow-cell-XFo {\n        border-left: none;\n    }\n\n    .orderRow-contentToggleContainer-1XN {\n        grid-column-start: 2;\n        grid-row-start: 1;\n        justify-self: flex-end;\n        padding: 0 1.5rem;\n    }\n\n    .orderRow-orderStatusContainer-3qe {\n        grid-column-end: span 2;\n    }\n\n    .orderRow-orderItemsContainer-3Bv {\n        border-bottom: 2px solid rgb(var(--venia-global-color-gray));\n        grid-column-end: span 2;\n        padding: 1rem 0;\n    }\n\n    .orderRow-orderItemsContainer-3Bv:empty {\n        display: none;\n    }\n\n    .orderRow-orderNumberContainer-2JG {\n        align-items: center;\n        column-gap: 0.5rem;\n        grid-auto-flow: column;\n        grid-column: 1 / span 2;\n        grid-row: 1;\n        justify-content: flex-start;\n    }\n\n    .orderRow-orderDateContainer-3bw {\n        border: 2px solid rgb(var(--venia-global-color-gray));\n        border-left: none;\n    }\n\n    .orderRow-orderTotalContainer-2yc {\n        border-bottom: 2px solid rgb(var(--venia-global-color-gray));\n        border-top: 2px solid rgb(var(--venia-global-color-gray));\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "orderRow-root-BK4",
	"cell": "orderRow-cell-XFo",
	"stackedCell": "orderRow-stackedCell-3gR orderRow-cell-XFo",
	"label": "orderRow-label-3FY",
	"value": "orderRow-value-3Jj",
	"orderNumberContainer": "orderRow-orderNumberContainer-2JG orderRow-stackedCell-3gR orderRow-cell-XFo",
	"orderDateContainer": "orderRow-orderDateContainer-3bw orderRow-stackedCell-3gR orderRow-cell-XFo",
	"orderTotalContainer": "orderRow-orderTotalContainer-2yc orderRow-stackedCell-3gR orderRow-cell-XFo",
	"orderStatusContainer": "orderRow-orderStatusContainer-3qe orderRow-stackedCell-3gR orderRow-cell-XFo",
	"orderItemsContainer": "orderRow-orderItemsContainer-3Bv orderRow-cell-XFo",
	"contentToggleContainer": "orderRow-contentToggleContainer-1XN orderRow-cell-XFo",
	"orderNumberLabel": "orderRow-orderNumberLabel-3R3 orderRow-label-3FY",
	"orderDateLabel": "orderRow-orderDateLabel-hMj orderRow-label-3FY",
	"orderTotalLabel": "orderRow-orderTotalLabel-2fU orderRow-label-3FY",
	"orderNumber": "orderRow-orderNumber-1DI orderRow-value-3Jj",
	"orderDate": "orderRow-orderDate-3oG orderRow-value-3Jj",
	"orderTotal": "orderRow-orderTotal-1d6 orderRow-value-3Jj",
	"orderStatusBadge": "orderRow-orderStatusBadge-QdL orderRow-label-3FY",
	"content": "orderRow-content-36O",
	"content_collapsed": "orderRow-content_collapsed-255"
};

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

/***/ "./node_modules/react-feather/dist/icons/chevron-up.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/chevron-up.js ***!
  \*************************************************************/
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



var ChevronUp = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
    points: "18 15 12 9 6 15"
  }));
});
_c2 = ChevronUp;
ChevronUp.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
ChevronUp.displayName = 'ChevronUp';
/* harmony default export */ __webpack_exports__["a"] = (ChevronUp);

var _c, _c2;

$RefreshReg$(_c, "ChevronUp$forwardRef");
$RefreshReg$(_c2, "ChevronUp");

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/printer.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/printer.js ***!
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



var Printer = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(_c = function (_ref, ref) {
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
    points: "6 9 6 2 18 2 18 9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "6",
    y: "14",
    width: "12",
    height: "8"
  }));
});
_c2 = Printer;
Printer.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
Printer.displayName = 'Printer';
/* harmony default export */ __webpack_exports__["a"] = (Printer);

var _c, _c2;

$RefreshReg$(_c, "Printer$forwardRef");
$RefreshReg$(_c2, "Printer");

/***/ })

}]);
//# sourceMappingURL=42.b2066cafc37e18e4cab6.js.map