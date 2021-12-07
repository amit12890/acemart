(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.gql.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.gql.js ***!
  \***************************************************************************************************/
/*! exports provided: GET_CUSTOMER_ADDRESSES, GET_CUSTOMER_CART_ADDRESS, default */
/*! exports used: GET_CUSTOMER_ADDRESSES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_CUSTOMER_ADDRESSES; });
/* unused harmony export GET_CUSTOMER_CART_ADDRESS */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _ShippingInformation_shippingInformation_gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShippingInformation/shippingInformation.gql */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.gql.js");
/* harmony import */ var _addressBookFragments_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addressBookFragments.gql */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBookFragments.gql.js");
/* harmony import */ var _ShippingInformation_shippingInformationFragments_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShippingInformation/shippingInformationFragments.gql */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js");




const GET_CUSTOMER_ADDRESSES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GetCustomerAddresses {
        customer {
            id
            addresses {
                id
                ...CustomerAddressFragment
            }
        }
    }
    ${_addressBookFragments_gql__WEBPACK_IMPORTED_MODULE_2__[/* CustomerAddressFragment */ "a"]}
`;
const GET_CUSTOMER_CART_ADDRESS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GetCustomerCartAddress {
        customerCart {
            id
            ...ShippingInformationFragment
        }
    }
    ${_ShippingInformation_shippingInformationFragments_gql__WEBPACK_IMPORTED_MODULE_3__[/* ShippingInformationFragment */ "a"]}
`;
/* harmony default export */ __webpack_exports__["b"] = ({
  mutations: {
    setCustomerAddressOnCartMutation: _ShippingInformation_shippingInformation_gql__WEBPACK_IMPORTED_MODULE_1__[/* SET_CUSTOMER_ADDRESS_ON_CART */ "b"]
  },
  queries: {
    getCustomerAddressesQuery: GET_CUSTOMER_ADDRESSES,
    getCustomerCartAddressQuery: GET_CUSTOMER_CART_ADDRESS
  }
});

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBookFragments.gql.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBookFragments.gql.js ***!
  \************************************************************************************************************/
/*! exports provided: CustomerAddressFragment, AddressBookFragment */
/*! exports used: CustomerAddressFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAddressFragment; });
/* unused harmony export AddressBookFragment */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

const CustomerAddressFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment CustomerAddressFragment on CustomerAddress {
        id
        city
        country_code
        default_shipping
        firstname
        lastname
        postcode
        region {
            region
            region_code
            region_id
        }
        street
        telephone
    }
`;
const AddressBookFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment AddressBookFragment on Customer {
        id
        addresses {
            id
            ...CustomerAddressFragment
        }
    }
    ${CustomerAddressFragment}
`;

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.js + 6 modules ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Country/country.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Postcode/postcode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Region/region.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeDropin.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
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

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var _apollo_client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js + 4 modules
var priceSummaryFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/paymentInformation.gql.js


const AvailablePaymentMethodsFragment = _apollo_client["gql"]`
    fragment AvailablePaymentMethodsFragment on Cart {
        id
        available_payment_methods {
            code
            title
        }
    }
`;
const GET_PAYMENT_INFORMATION = _apollo_client["gql"]`
    query getPaymentInformation($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            selected_payment_method {
                code
            }
            shipping_addresses {
                firstname
                lastname
                street
                city
                region {
                    code
                }
                postcode
                country {
                    code
                }
                telephone
            }
            ...AvailablePaymentMethodsFragment
        }
    }
    ${AvailablePaymentMethodsFragment}
`;
const GET_PAYMENT_NONCE = _apollo_client["gql"]`
    query getPaymentNonce($cartId: String!) {
        cart(cart_id: $cartId) @client {
            id
            paymentNonce
        }
    }
`;
const SET_BILLING_ADDRESS = _apollo_client["gql"]`
    mutation setBillingAddress(
        $cartId: String!
        $firstname: String!
        $lastname: String!
        $street: [String]!
        $city: String!
        $regionCode: String!
        $postcode: String!
        $countryCode: String!
        $telephone: String!
    ) {
        setBillingAddressOnCart(
            input: {
                cart_id: $cartId
                billing_address: {
                    address: {
                        firstname: $firstname
                        lastname: $lastname
                        street: $street
                        city: $city
                        region: $regionCode
                        postcode: $postcode
                        country_code: $countryCode
                        telephone: $telephone
                        save_in_address_book: false
                    }
                }
            }
        ) @connection(key: "setBillingAddressOnCart") {
            cart {
                id
                billing_address {
                    firstname
                    lastname
                    country {
                        code
                    }
                    street
                    city
                    region {
                        code
                    }
                    postcode
                    telephone
                }
                ...PriceSummaryFragment
                ...AvailablePaymentMethodsFragment
            }
        }
    }
    ${priceSummaryFragments_gql["a" /* PriceSummaryFragment */]}
    ${AvailablePaymentMethodsFragment}
`; // Sets the provided payment method object on the cart.

const SET_FREE_PAYMENT_METHOD_ON_CART = _apollo_client["gql"]`
    mutation setPaymentMethodOnCart($cartId: String!) {
        setPaymentMethodOnCart(
            input: { cart_id: $cartId, payment_method: { code: "free" } }
        ) @connection(key: "setPaymentMethodOnCart") {
            cart {
                id
                selected_payment_method {
                    code
                    title
                }
            }
        }
    }
`;
/* harmony default export */ var paymentInformation_gql = ({
  queries: {
    getPaymentNonceQuery: GET_PAYMENT_NONCE,
    getPaymentInformation: GET_PAYMENT_INFORMATION
  },
  mutations: {
    setBillingAddressMutation: SET_BILLING_ADDRESS,
    setFreePaymentMethodMutation: SET_FREE_PAYMENT_METHOD_ON_CART
  }
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/creditCard.gql.js



const GET_IS_BILLING_ADDRESS_SAME = _apollo_client["gql"]`
    query getIsBillingAddressSame($cartId: String!) {
        cart(cart_id: $cartId) @client {
            id
            isBillingAddressSame
        }
    }
`;
const creditCard_gql_GET_PAYMENT_NONCE = _apollo_client["gql"]`
    query getPaymentNonce($cartId: String!) {
        cart(cart_id: $cartId) @client {
            id
            paymentNonce
        }
    }
`;
const GET_BILLING_ADDRESS = _apollo_client["gql"]`
    query getBillingAddress($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            billingAddress: billing_address {
                firstName: firstname
                lastName: lastname
                country {
                    code
                }
                street
                city
                region {
                    code
                    label
                    region_id
                }
                postcode
                phoneNumber: telephone
            }
        }
    }
`;
const GET_SHIPPING_ADDRESS = _apollo_client["gql"]`
    query getSelectedShippingAddress($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            shippingAddresses: shipping_addresses {
                firstName: firstname
                lastName: lastname
                country {
                    code
                }
                street
                city
                region {
                    code
                    label
                    region_id
                }
                postcode
                phoneNumber: telephone
            }
        }
    }
`;
const creditCard_gql_SET_BILLING_ADDRESS = _apollo_client["gql"]`
    mutation setBillingAddress(
        $cartId: String!
        $firstName: String!
        $lastName: String!
        $street1: String!
        $street2: String
        $city: String!
        $region: String!
        $postcode: String!
        $country: String!
        $phoneNumber: String!
    ) {
        setBillingAddressOnCart(
            input: {
                cart_id: $cartId
                billing_address: {
                    address: {
                        firstname: $firstName
                        lastname: $lastName
                        street: [$street1, $street2]
                        city: $city
                        region: $region
                        postcode: $postcode
                        country_code: $country
                        telephone: $phoneNumber
                        save_in_address_book: false
                    }
                }
            }
        ) @connection(key: "setBillingAddressOnCart") {
            cart {
                id
                billing_address {
                    firstname
                    lastname
                    country {
                        code
                    }
                    street
                    city
                    region {
                        code
                        label
                        region_id
                    }
                    postcode
                    telephone
                }
                ...PriceSummaryFragment
                ...AvailablePaymentMethodsFragment
            }
        }
    }
    ${priceSummaryFragments_gql["a" /* PriceSummaryFragment */]}
    ${AvailablePaymentMethodsFragment}
`;
const SET_CC_DETAILS_ON_CART = _apollo_client["gql"]`
    mutation setSelectedPaymentMethod(
        $cartId: String!
        $paymentNonce: String!
    ) {
        setPaymentMethodOnCart(
            input: {
                cart_id: $cartId
                payment_method: {
                    code: "braintree"
                    braintree: {
                        payment_method_nonce: $paymentNonce
                        is_active_payment_token_enabler: false
                    }
                }
            }
        ) @connection(key: "setPaymentMethodOnCart") {
            cart {
                id
                selected_payment_method {
                    code
                    title
                }
            }
        }
    }
`;
/* harmony default export */ var creditCard_gql = ({
  getBillingAddressQuery: GET_BILLING_ADDRESS,
  getIsBillingAddressSameQuery: GET_IS_BILLING_ADDRESS_SAME,
  getPaymentNonceQuery: creditCard_gql_GET_PAYMENT_NONCE,
  getShippingAddressQuery: GET_SHIPPING_ADDRESS,
  setBillingAddressMutation: creditCard_gql_SET_BILLING_ADDRESS,
  setCreditCardDetailsOnCartMutation: SET_CC_DETAILS_ON_CART
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/useCreditCard.js
var _s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const getRegion = region => {
  return region.region_id || region.label || region.code;
};
/**
 * Maps address response data from GET_BILLING_ADDRESS and GET_SHIPPING_ADDRESS
 * queries to input names in the billing address form.
 * {@link creditCard.gql.js}.
 *
 * @param {ShippingCartAddress|BillingCartAddress} rawAddressData query data
 */


const mapAddressData = rawAddressData => {
  if (rawAddressData) {
    const {
      firstName,
      lastName,
      city,
      postcode,
      phoneNumber,
      street,
      country,
      region
    } = rawAddressData;
    return {
      firstName,
      lastName,
      city,
      postcode,
      phoneNumber,
      street1: street[0],
      street2: street[1] || '',
      country: country.code,
      region: getRegion(region)
    };
  } else {
    return {};
  }
};
/**
 * Talon to handle Credit Card payment method.
 *
 * @param {Boolean} props.shouldSubmit boolean value which represents if a payment nonce request has been submitted
 * @param {Function} props.onSuccess callback to invoke when the a payment nonce has been generated
 * @param {Function} props.onReady callback to invoke when the braintree dropin component is ready
 * @param {Function} props.onError callback to invoke when the braintree dropin component throws an error
 * @param {Function} props.resetShouldSubmit callback to reset the shouldSubmit flag
 * @param {DocumentNode} props.operations.getBillingAddressQuery query to fetch billing address from cache
 * @param {DocumentNode} props.operations.getIsBillingAddressSameQuery query to fetch is billing address same checkbox value from cache
 * @param {DocumentNode} props.operations.getPaymentNonceQuery query to fetch payment nonce saved in cache
 * @param {DocumentNode} props.operations.setBillingAddressMutation mutation to update billing address on the cart
 * @param {DocumentNode} props.operations.setCreditCardDetailsOnCartMutation mutation to update payment method and payment nonce on the cart
 *
 * @returns {
 *   errors: Map<String, Error>,
 *   shouldRequestPaymentNonce: Boolean,
 *   onPaymentError: Function,
 *   onPaymentSuccess: Function,
 *   onPaymentReady: Function,
 *   isBillingAddressSame: Boolean,
 *   isLoading: Boolean,
 *   stepNumber: Number,
 *   initialValues: {
 *      firstName: String,
 *      lastName: String,
 *      city: String,
 *      postcode: String,
 *      phoneNumber: String,
 *      street1: String,
 *      street2: String,
 *      country: String,
 *      state: String,
 *      isBillingAddressSame: Boolean
 *   },
 *   shippingAddressCountry: String,
 *   shouldTeardownDropin: Boolean,
 *   resetShouldTeardownDropin: Function
 * }
 */

const useCreditCard = props => {
  _s();

  const {
    onSuccess,
    onReady,
    onError,
    shouldSubmit,
    resetShouldSubmit
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(creditCard_gql, props.operations);
  const {
    getBillingAddressQuery,
    getIsBillingAddressSameQuery,
    getPaymentNonceQuery,
    getShippingAddressQuery,
    setBillingAddressMutation,
    setCreditCardDetailsOnCartMutation
  } = operations;
  /**
   * Definitions
   */

  const [isDropinLoading, setDropinLoading] = Object(react["useState"])(true);
  const [shouldRequestPaymentNonce, setShouldRequestPaymentNonce] = Object(react["useState"])(false);
  const [shouldTeardownDropin, setShouldTeardownDropin] = Object(react["useState"])(false);
  /**
   * `stepNumber` depicts the state of the process flow in credit card
   * payment flow.
   *
   * `0` No call made yet
   * `1` Billing address mutation intiated
   * `2` Braintree nonce requsted
   * `3` Payment information mutation intiated
   * `4` All mutations done
   */

  const [stepNumber, setStepNumber] = Object(react["useState"])(0);
  const client = Object(_apollo_client["useApolloClient"])();
  const formState = Object(esm["o" /* useFormState */])();
  const {
    validate: validateBillingAddressForm
  } = Object(esm["n" /* useFormApi */])();
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const isLoading = isDropinLoading || stepNumber >= 1 && stepNumber <= 3;
  const {
    data: billingAddressData
  } = Object(_apollo_client["useQuery"])(getBillingAddressQuery, {
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const {
    data: shippingAddressData
  } = Object(_apollo_client["useQuery"])(getShippingAddressQuery, {
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const {
    data: isBillingAddressSameData
  } = Object(_apollo_client["useQuery"])(getIsBillingAddressSameQuery, {
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const [updateBillingAddress, {
    error: billingAddressMutationError,
    called: billingAddressMutationCalled,
    loading: billingAddressMutationLoading
  }] = Object(_apollo_client["useMutation"])(setBillingAddressMutation);
  const [updateCCDetails, {
    error: ccMutationError,
    called: ccMutationCalled,
    loading: ccMutationLoading
  }] = Object(_apollo_client["useMutation"])(setCreditCardDetailsOnCartMutation);
  const shippingAddressCountry = shippingAddressData ? shippingAddressData.cart.shippingAddresses[0].country.code : "US";
  const isBillingAddressSame = formState.values.isBillingAddressSame;
  const initialValues = Object(react["useMemo"])(() => {
    const isBillingAddressSame = isBillingAddressSameData ? isBillingAddressSameData.cart.isBillingAddressSame : true;
    let billingAddress = {};
    /**
     * If billing address is same as shipping address, do
     * not auto fill the fields.
     */

    if (billingAddressData && !isBillingAddressSame) {
      if (billingAddressData.cart.billingAddress) {
        const _billingAddressData$c = billingAddressData.cart.billingAddress,
              {
          // eslint-disable-next-line no-unused-vars
          __typename
        } = _billingAddressData$c,
              rawBillingAddress = _objectWithoutProperties(_billingAddressData$c, ["__typename"]);

        billingAddress = mapAddressData(rawBillingAddress);
      }
    }

    return _objectSpread({
      isBillingAddressSame
    }, billingAddress);
  }, [isBillingAddressSameData, billingAddressData]);
  /**
   * Helpers
   */

  /**
   * This function sets the boolean isBillingAddressSame
   * in cache for future use. We use cache because there
   * is no way to save this on the cart in remote.
   */

  const setIsBillingAddressSameInCache = Object(react["useCallback"])(() => {
    client.writeQuery({
      query: getIsBillingAddressSameQuery,
      data: {
        cart: {
          __typename: 'Cart',
          id: cartId,
          isBillingAddressSame
        }
      }
    });
  }, [client, cartId, getIsBillingAddressSameQuery, isBillingAddressSame]);
  /**
   * This function sets the billing address on the cart using the
   * shipping address.
   */

  const setShippingAddressAsBillingAddress = Object(react["useCallback"])(() => {
    const shippingAddress = shippingAddressData ? mapAddressData(shippingAddressData.cart.shippingAddresses[0]) : {};
    updateBillingAddress({
      variables: _objectSpread({
        cartId
      }, shippingAddress, {
        sameAsShipping: true
      })
    });
  }, [updateBillingAddress, shippingAddressData, cartId]);
  /**
   * This function sets the billing address on the cart using the
   * information from the form.
   */

  const setBillingAddress = Object(react["useCallback"])(() => {
    const {
      firstName,
      lastName,
      country,
      street1,
      street2,
      city,
      region,
      postcode,
      phoneNumber
    } = formState.values;
    updateBillingAddress({
      variables: {
        cartId,
        firstName,
        lastName,
        country,
        street1,
        street2: street2 || '',
        city,
        region: getRegion(region),
        postcode,
        phoneNumber,
        sameAsShipping: false
      }
    });
  }, [formState.values, updateBillingAddress, cartId]);
  /**
   * This function sets the payment nonce details in the cache.
   * We use cache because there is no way to save this information
   * on the cart in the remote.
   *
   * We do not save the nonce code because it is a PII.
   */

  const setPaymentDetailsInCache = Object(react["useCallback"])(braintreeNonce => {
    /**
     * We dont save the nonce code due to PII,
     * we only save the subset of details.
     */
    const {
      details,
      description,
      type
    } = braintreeNonce;
    client.writeQuery({
      query: getPaymentNonceQuery,
      data: {
        cart: {
          __typename: 'Cart',
          id: cartId,
          paymentNonce: {
            details,
            description,
            type
          }
        }
      }
    });
  }, [cartId, client, getPaymentNonceQuery]);
  /**
   * This function saves the nonce code from braintree
   * on the cart along with the payment method used in
   * this case `braintree`.
   */

  const updateCCDetailsOnCart = Object(react["useCallback"])(braintreeNonce => {
    const {
      nonce
    } = braintreeNonce;
    updateCCDetails({
      variables: {
        cartId,
        paymentMethod: 'braintree',
        paymentNonce: nonce
      }
    });
  }, [updateCCDetails, cartId]);
  /**
   * Function to be called by the braintree dropin when the
   * nonce generation is successful.
   */

  const onPaymentSuccess = Object(react["useCallback"])(braintreeNonce => {
    setPaymentDetailsInCache(braintreeNonce);
    /**
     * Updating payment braintreeNonce and selected payment method on cart.
     */

    updateCCDetailsOnCart(braintreeNonce);
    setStepNumber(3);
  }, [setPaymentDetailsInCache, updateCCDetailsOnCart]);
  /**
   * Function to be called by the braintree dropin when the
   * nonce generation is not successful.
   */

  const onPaymentError = Object(react["useCallback"])(error => {
    setStepNumber(0);
    setShouldRequestPaymentNonce(false);
    resetShouldSubmit();

    if (onError) {
      onError(error);
    }
  }, [onError, resetShouldSubmit]);
  /**
   * Function to be called by the braintree dropin when the
   * credit card component has loaded successfully.
   */

  const onPaymentReady = Object(react["useCallback"])(() => {
    setDropinLoading(false);
    setStepNumber(0);

    if (onReady) {
      onReady();
    }
  }, [onReady]);
  /**
   * Function to be called by braintree dropin when the payment
   * teardown is done successfully before re creating the new dropin.
   */

  const resetShouldTeardownDropin = Object(react["useCallback"])(() => {
    setShouldTeardownDropin(false);
  }, []);
  /**
   * Effects
   */

  /**
   * Step 1 effect
   *
   * User has clicked the update button
   */

  Object(react["useEffect"])(() => {
    try {
      if (shouldSubmit) {
        /**
         * Validate billing address fields and only process with
         * submit if there are no errors.
         *
         * We do this because the user can click Review Order button
         * without fillig in all fields and the form submission
         * happens manually. The informed Form component validates
         * on submission but that only happens when we use the onSubmit
         * prop. In this case we are using manually submission because
         * of the nature of the credit card submission process.
         */
        validateBillingAddressForm();
        const hasErrors = Object.keys(formState.errors).length;

        if (!hasErrors) {
          setStepNumber(1);

          if (isBillingAddressSame) {
            setShippingAddressAsBillingAddress();
          } else {
            setBillingAddress();
          }

          setIsBillingAddressSameInCache();
        } else {
          throw new Error('Errors in the billing address form');
        }
      }
    } catch (err) {
      if (true) {
        console.error(err);
      }

      setStepNumber(0);
      resetShouldSubmit();
      setShouldRequestPaymentNonce(false);
    }
  }, [shouldSubmit, isBillingAddressSame, setShippingAddressAsBillingAddress, setBillingAddress, setIsBillingAddressSameInCache, resetShouldSubmit, validateBillingAddressForm, formState.errors]);
  /**
   * Step 2 effect
   *
   * Billing address mutation has completed
   */

  Object(react["useEffect"])(() => {
    try {
      const billingAddressMutationCompleted = billingAddressMutationCalled && !billingAddressMutationLoading;

      if (billingAddressMutationCompleted && !billingAddressMutationError) {
        /**
         * Billing address save mutation is successful
         * we can initiate the braintree nonce request
         */
        setStepNumber(2);
        setShouldRequestPaymentNonce(true);
      }

      if (billingAddressMutationCompleted && billingAddressMutationError) {
        /**
         * Billing address save mutation is not successful.
         * Reset update button clicked flag.
         */
        throw new Error('Billing address mutation failed');
      }
    } catch (err) {
      if (true) {
        console.error(err);
      }

      setStepNumber(0);
      resetShouldSubmit();
      setShouldRequestPaymentNonce(false);
    }
  }, [billingAddressMutationError, billingAddressMutationCalled, billingAddressMutationLoading, resetShouldSubmit]);
  /**
   * Step 3 effect
   *
   * Credit card save mutation has completed
   */

  Object(react["useEffect"])(() => {
    /**
     * Saved billing address, payment method and payment nonce on cart.
     *
     * Time to call onSuccess.
     */
    try {
      const ccMutationCompleted = ccMutationCalled && !ccMutationLoading;

      if (ccMutationCompleted && !ccMutationError) {
        if (onSuccess) {
          onSuccess();
        }

        resetShouldSubmit();
        setStepNumber(4);
      }

      if (ccMutationCompleted && ccMutationError) {
        /**
         * If credit card mutation failed, reset update button clicked so the
         * user can click again and set `stepNumber` to 0.
         */
        throw new Error('Credit card nonce save mutation failed.');
      }
    } catch (err) {
      if (true) {
        console.error(err);
      }

      setStepNumber(0);
      resetShouldSubmit();
      setShouldRequestPaymentNonce(false);
      setShouldTeardownDropin(true);
    }
  }, [ccMutationCalled, ccMutationLoading, onSuccess, setShouldRequestPaymentNonce, resetShouldSubmit, ccMutationError]);
  const errors = Object(react["useMemo"])(() => new Map([['setBillingAddressMutation', billingAddressMutationError], ['setCreditCardDetailsOnCartMutation', ccMutationError]]), [billingAddressMutationError, ccMutationError]);
  return {
    errors,
    onPaymentError,
    onPaymentSuccess,
    onPaymentReady,
    isBillingAddressSame,
    isLoading,
    shouldRequestPaymentNonce,
    stepNumber,
    initialValues,
    shippingAddressCountry,
    shouldTeardownDropin,
    resetShouldTeardownDropin
  };
};

_s(useCreditCard, "npZMFys/tcT6NMhfMw7iULdG2yE=", false, function () {
  return [_apollo_client["useApolloClient"], esm["o" /* useFormState */], esm["n" /* useFormApi */], cart["b" /* useCartContext */], _apollo_client["useQuery"], _apollo_client["useQuery"], _apollo_client["useQuery"], _apollo_client["useMutation"], _apollo_client["useMutation"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Country/country.js + 2 modules
var country = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Country/country.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Region/region.js + 3 modules
var region = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Region/region.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Postcode/postcode.js + 2 modules
var postcode = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Postcode/postcode.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js + 1 modules
var Checkbox_checkbox = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules
var field = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/field.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeDropin.css
var braintreeDropin = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeDropin.css");
var braintreeDropin_default = /*#__PURE__*/__webpack_require__.n(braintreeDropin);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeDropin.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(braintreeDropin_default.a, options);



/* harmony default export */ var PaymentInformation_braintreeDropin = (braintreeDropin_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/brainTreeDropIn.js
var brainTreeDropIn_s = $RefreshSig$();

/**
 * @fileoverview This component uses the BrainTree Web Drop In to hook into Web
 * Payments and the Payment Request API to submit payments via BrainTree.
 *
 * @see
 *   https://github.com/braintree/braintree-web-drop-in
 *   https://braintree.github.io/braintree-web-drop-in/docs/current/index.html
 *   https://developers.braintreepayments.com/guides/drop-in/overview/javascript/v3
 *   https://developers.braintreepayments.com/guides/payment-method-nonce.
 *   https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html#requestPaymentMethod.
 */





const authorization = "sandbox_8yrzsvtm_s2bg8fs563crhqzk";
/**
 * This BraintreeDropin component has two purposes which lend to its
 * implementation:
 *
 * 1) Mount and asynchronously create the dropin via the braintree api.
 * 2) On submission (triggered by a parent), request the payment nonce.
 */

const BraintreeDropin = props => {
  brainTreeDropIn_s();

  const {
    onError,
    onReady,
    onSuccess,
    shouldRequestPaymentNonce,
    containerId = 'braintree-container',
    shouldTeardownDropin,
    resetShouldTeardownDropin
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(PaymentInformation_braintreeDropin, props.classes);
  const [isError, setIsError] = Object(react["useState"])(false);
  const [dropinInstance, setDropinInstance] = Object(react["useState"])();
  const createDropinInstance = Object(react["useCallback"])(async () => {
    const {
      default: dropIn
    } = await __webpack_require__.e(/*! import() */ 95).then(__webpack_require__.t.bind(null, /*! braintree-web-drop-in */ "./node_modules/braintree-web-drop-in/dist/browser/dropin.js", 7));
    const dropinInstance = await dropIn.create({
      authorization,
      container: `#${containerId}`,
      card: {
        cardholderName: {
          required: true
        },
        overrides: {
          fields: {
            number: {
              maskInput: {
                // Only show last four digits on blur.
                showLastFour: true
              }
            }
          }
        }
      }
    });
    return dropinInstance;
  }, [containerId]);
  Object(react["useEffect"])(() => {
    let unmounted = false;

    const renderDropin = async () => {
      try {
        const instance = await createDropinInstance();

        if (!unmounted) {
          setDropinInstance(instance);
          onReady(true);
        } else {
          /**
           * Component has been unmounted, tear down the instance.
           */
          instance.teardown();
        }
      } catch (err) {
        if (true) {
          // This error can be common because of the async nature of
          // the checkout page. If the problem is due to a missing
          // container it is likely that the component was
          // intentionally unmounted.
          console.error(`Unable to initialize Credit Card form (Braintree). \n${err}`);
        }

        if (!unmounted) {
          setIsError(true);
        }
      }
    };

    renderDropin();
    return () => {
      unmounted = true;
    };
  }, [createDropinInstance, onReady]);
  Object(react["useEffect"])(() => {
    async function requestPaymentNonce() {
      try {
        const paymentNonce = await dropinInstance.requestPaymentMethod();
        onSuccess(paymentNonce);
      } catch (e) {
        // An error occurred. BrainTree will update the UI with error
        // messaging, but we should signal that there was an error.
        console.error(`Invalid Payment Details. \n${e}`);
        onError();
      }
    }

    if (shouldRequestPaymentNonce) {
      requestPaymentNonce();
    }
  }, [dropinInstance, onError, onSuccess, shouldRequestPaymentNonce]);
  /**
   * This useEffect handles tearing down and re-creating the dropin
   * in case the parent component needs it to.
   *
   * The parent component does this by setting `shouldTeardownDropin` `true`.
   */

  Object(react["useEffect"])(() => {
    let unmounted = false;

    const teardownAndRenderDropin = async () => {
      try {
        dropinInstance.teardown();
        resetShouldTeardownDropin();
        const instance = await createDropinInstance();

        if (!unmounted) {
          setDropinInstance(instance);
          onReady(true);
        } else {
          /**
           * Component has been unmounted, tear down the instance.
           */
          instance.teardown();
        }
      } catch (err) {
        console.error(`Unable to tear down and re-initialize Credit Card form (Braintree). \n${err}`);

        if (!unmounted) {
          setIsError(true);
        }
      }
    };

    if (shouldTeardownDropin) {
      teardownAndRenderDropin();
    }

    return () => {
      unmounted = true;
    };
  }, [shouldTeardownDropin, dropinInstance, resetShouldTeardownDropin, createDropinInstance, onReady]);

  if (isError) {
    return react_default.a.createElement("span", {
      className: classes.error
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'checkoutPage.errorLoadingPayment',
      defaultMessage: 'There was an error loading payment options. Please try again later.'
    }));
  }

  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    id: containerId
  }));
};

brainTreeDropIn_s(BraintreeDropin, "m/nTaupAkEA4pB+SUfTFr4fwpGQ=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = BraintreeDropin;
/* harmony default export */ var brainTreeDropIn = (BraintreeDropin);
BraintreeDropin.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    error: prop_types["string"]
  }),
  containerId: prop_types["string"],
  onError: prop_types["func"].isRequired,
  onReady: prop_types["func"].isRequired,
  onSuccess: prop_types["func"].isRequired,
  shouldRequestPaymentNonce: prop_types["bool"].isRequired
};

var _c;

$RefreshReg$(_c, "BraintreeDropin");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.css
var creditCard = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.css");
var creditCard_default = /*#__PURE__*/__webpack_require__.n(creditCard);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.css

            

var creditCard_options = {"injectType":"styleTag"};

creditCard_options.insert = "head";
creditCard_options.singleton = false;

var creditCard_update = injectStylesIntoStyleTag_default()(creditCard_default.a, creditCard_options);



/* harmony default export */ var PaymentInformation_creditCard = (creditCard_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.js
var creditCard_s = $RefreshSig$();

















const STEP_DESCRIPTIONS = [{
  defaultMessage: 'Loading Payment',
  id: 'checkoutPage.step0'
}, {
  defaultMessage: 'Checking Credit Card Information',
  id: 'checkoutPage.step1'
}, {
  defaultMessage: 'Checking Credit Card Information',
  id: 'checkoutPage.step2'
}, {
  defaultMessage: 'Checking Credit Card Information',
  id: 'checkoutPage.step3'
}, {
  defaultMessage: 'Saved Credit Card Information Successfully',
  id: 'checkoutPage.step4'
}];
/**
 * The initial view for the Braintree payment method.
 */

const CreditCard = props => {
  creditCard_s();

  const {
    classes: propClasses,
    onPaymentSuccess: onSuccess,
    onPaymentReady: onReady,
    onPaymentError: onError,
    resetShouldSubmit,
    shouldSubmit
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(PaymentInformation_creditCard, propClasses);
  const talonProps = useCreditCard({
    onSuccess,
    onReady,
    onError,
    shouldSubmit,
    resetShouldSubmit
  });
  const {
    errors,
    shouldRequestPaymentNonce,
    onPaymentError,
    onPaymentSuccess,
    onPaymentReady,
    isBillingAddressSame,
    isLoading,

    /**
     * `stepNumber` depicts the state of the process flow in credit card
     * payment flow.
     *
     * `0` No call made yet
     * `1` Billing address mutation intiated
     * `2` Braintree nonce requsted
     * `3` Payment information mutation intiated
     * `4` All mutations done
     */
    stepNumber,
    initialValues,
    shippingAddressCountry,
    shouldTeardownDropin,
    resetShouldTeardownDropin
  } = talonProps;
  const creditCardComponentClassName = isLoading ? classes.credit_card_root_hidden : classes.credit_card_root;
  const billingAddressFieldsClassName = isBillingAddressSame ? classes.billing_address_fields_root_hidden : classes.billing_address_fields_root;
  /**
   * Instead of defining classes={root: classes.FIELD_NAME}
   * we are using useMemo to only do it once (hopefully).
   */

  const fieldClasses = Object(react["useMemo"])(() => {
    return ['first_name', 'last_name', 'country', 'street1', 'street2', 'city', 'region', 'postal_code', 'phone_number'].reduce((acc, fieldName) => {
      acc[fieldName] = {
        root: classes[fieldName]
      };
      return acc;
    }, {});
  }, [classes]);
  /**
   * These 2 functions are wrappers around the `isRequired` function
   * of `formValidators`. They perform validations only if the
   * billing address is different from shipping address.
   *
   * We write this function in `venia-ui` and not in the `peregrine` talon
   * because it references `isRequired` which is a `venia-ui` function.
   */

  const isFieldRequired = Object(react["useCallback"])((value, {
    isBillingAddressSame
  }) => {
    if (isBillingAddressSame) {
      /**
       * Informed validator functions return `undefined` if
       * validation is `true`
       */
      return undefined;
    } else {
      return Object(formValidators["d" /* isRequired */])(value);
    }
  }, []);
  const stepTitle = STEP_DESCRIPTIONS[stepNumber].defaultMessage ? formatMessage({
    id: STEP_DESCRIPTIONS[stepNumber].id,
    defaultMessage: STEP_DESCRIPTIONS[stepNumber].defaultMessage
  }) : formatMessage({
    id: 'checkoutPage.loadingPayment',
    defaultMessage: 'Loading Payment'
  });
  const loadingIndicator = isLoading ? react_default.a.createElement(indicator["a" /* default */], null, stepTitle) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: creditCardComponentClassName
  }, react_default.a.createElement(formError["a" /* default */], {
    classes: {
      root: classes.formErrorContainer
    },
    errors: Array.from(errors.values())
  }), react_default.a.createElement("div", {
    className: classes.dropin_root
  }, react_default.a.createElement(brainTreeDropIn, {
    onError: onPaymentError,
    onReady: onPaymentReady,
    onSuccess: onPaymentSuccess,
    shouldRequestPaymentNonce: shouldRequestPaymentNonce,
    shouldTeardownDropin: shouldTeardownDropin,
    resetShouldTeardownDropin: resetShouldTeardownDropin
  })), react_default.a.createElement("div", {
    className: classes.address_check
  }, react_default.a.createElement(Checkbox_checkbox["a" /* default */], {
    field: "isBillingAddressSame",
    label: formatMessage({
      id: 'checkoutPage.billingAddressSame',
      defaultMessage: 'Billing address same as shipping address'
    }),
    initialValue: initialValues.isBillingAddressSame
  })), react_default.a.createElement("div", {
    className: billingAddressFieldsClassName
  }, react_default.a.createElement(field["a" /* default */], {
    id: "firstName",
    classes: fieldClasses.first_name,
    label: formatMessage({
      id: 'global.firstName',
      defaultMessage: 'First Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    id: "firstName",
    field: "firstName",
    validate: isFieldRequired,
    initialValue: initialValues.firstName
  })), react_default.a.createElement(field["a" /* default */], {
    id: "lastName",
    classes: fieldClasses.last_name,
    label: formatMessage({
      id: 'global.lastName',
      defaultMessage: 'Last Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    id: "lastName",
    field: "lastName",
    validate: isFieldRequired,
    initialValue: initialValues.lastName
  })), react_default.a.createElement(country["a" /* default */], {
    classes: fieldClasses.country,
    validate: isFieldRequired,
    initialValue:
    /**
     * If there is no initial value to start with
     * use the country from shipping address.
     */
    initialValues.country || shippingAddressCountry
  }), react_default.a.createElement(field["a" /* default */], {
    id: "street1",
    classes: fieldClasses.street1,
    label: formatMessage({
      id: 'global.streetAddress',
      defaultMessage: 'Street Address'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    id: "street1",
    field: "street1",
    validate: isFieldRequired,
    initialValue: initialValues.street1
  })), react_default.a.createElement(field["a" /* default */], {
    id: "street2",
    classes: fieldClasses.street2,
    label: formatMessage({
      id: 'global.streetAddress2',
      defaultMessage: 'Street Address 2'
    }),
    optional: true
  }, react_default.a.createElement(textInput["a" /* default */], {
    id: "street2",
    field: "street2",
    initialValue: initialValues.street2
  })), react_default.a.createElement(field["a" /* default */], {
    id: "city",
    classes: fieldClasses.city,
    label: formatMessage({
      id: 'global.city',
      defaultMessage: 'City'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    id: "city",
    field: "city",
    validate: isFieldRequired,
    initialValue: initialValues.city
  })), react_default.a.createElement(region["a" /* default */], {
    classes: fieldClasses.region,
    initialValue: initialValues.region,
    validate: isFieldRequired,
    fieldInput: 'region[label]',
    fieldSelect: 'region[region_id]',
    optionValueKey: 'id'
  }), react_default.a.createElement(postcode["a" /* default */], {
    classes: fieldClasses.postal_code,
    validate: isFieldRequired,
    initialValue: initialValues.postcode
  }), react_default.a.createElement(field["a" /* default */], {
    id: "phoneNumber",
    classes: fieldClasses.phone_number,
    label: formatMessage({
      id: 'global.phoneNumber',
      defaultMessage: 'Phone Number'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    id: "phoneNumber",
    field: "phoneNumber",
    validate: isFieldRequired,
    initialValue: initialValues.phoneNumber
  })))), loadingIndicator);
};

creditCard_s(CreditCard, "amzGU0KUDiZjZRQn/LtiMpuADsE=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */], useCreditCard];
});

creditCard_c = CreditCard;
/* harmony default export */ var CheckoutPage_PaymentInformation_creditCard = __webpack_exports__["a"] = (CreditCard);
CreditCard.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    dropin_root: prop_types["string"],
    billing_address_fields_root: prop_types["string"],
    first_name: prop_types["string"],
    last_name: prop_types["string"],
    city: prop_types["string"],
    region: prop_types["string"],
    postal_code: prop_types["string"],
    phone_number: prop_types["string"],
    country: prop_types["string"],
    street1: prop_types["string"],
    street2: prop_types["string"],
    address_check: prop_types["string"],
    credit_card_root: prop_types["string"],
    credit_card_root_hidden: prop_types["string"]
  }),
  shouldSubmit: prop_types["bool"].isRequired,
  onPaymentSuccess: prop_types["func"],
  onPaymentReady: prop_types["func"],
  onPaymentError: prop_types["func"],
  resetShouldSubmit: prop_types["func"].isRequired
};

var creditCard_c;

$RefreshReg$(creditCard_c, "CreditCard");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql.js ***!
  \*****************************************************************************************************************/
/*! exports provided: AvailablePaymentMethodsFragment, GET_PAYMENT_INFORMATION, GET_PAYMENT_NONCE, SET_BILLING_ADDRESS, SET_FREE_PAYMENT_METHOD_ON_CART, default */
/*! exports used: AvailablePaymentMethodsFragment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailablePaymentMethodsFragment; });
/* unused harmony export GET_PAYMENT_INFORMATION */
/* unused harmony export GET_PAYMENT_NONCE */
/* unused harmony export SET_BILLING_ADDRESS */
/* unused harmony export SET_FREE_PAYMENT_METHOD_ON_CART */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _magento_peregrine_lib_talons_CartPage_PriceSummary_priceSummaryFragments_gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql */ "./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js");


const AvailablePaymentMethodsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment AvailablePaymentMethodsFragment on Cart {
        id
        available_payment_methods {
            code
            title
        }
    }
`;
const GET_PAYMENT_INFORMATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query getPaymentInformation($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            selected_payment_method {
                code
            }
            shipping_addresses {
                firstname
                lastname
                street
                city
                region {
                    code
                }
                postcode
                country {
                    code
                }
                telephone
            }
            ...AvailablePaymentMethodsFragment
        }
    }
    ${AvailablePaymentMethodsFragment}
`;
const GET_PAYMENT_NONCE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query getPaymentNonce($cartId: String!) {
        cart(cart_id: $cartId) @client {
            id
            paymentNonce
        }
    }
`;
const SET_BILLING_ADDRESS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation setBillingAddress(
        $cartId: String!
        $firstname: String!
        $lastname: String!
        $street: [String]!
        $city: String!
        $regionCode: String!
        $postcode: String!
        $countryCode: String!
        $telephone: String!
    ) {
        setBillingAddressOnCart(
            input: {
                cart_id: $cartId
                billing_address: {
                    address: {
                        firstname: $firstname
                        lastname: $lastname
                        street: $street
                        city: $city
                        region: $regionCode
                        postcode: $postcode
                        country_code: $countryCode
                        telephone: $telephone
                        save_in_address_book: false
                    }
                }
            }
        ) @connection(key: "setBillingAddressOnCart") {
            cart {
                id
                billing_address {
                    firstname
                    lastname
                    country {
                        code
                    }
                    street
                    city
                    region {
                        code
                    }
                    postcode
                    telephone
                }
                ...PriceSummaryFragment
                ...AvailablePaymentMethodsFragment
            }
        }
    }
    ${_magento_peregrine_lib_talons_CartPage_PriceSummary_priceSummaryFragments_gql__WEBPACK_IMPORTED_MODULE_1__[/* PriceSummaryFragment */ "a"]}
    ${AvailablePaymentMethodsFragment}
`; // Sets the provided payment method object on the cart.

const SET_FREE_PAYMENT_METHOD_ON_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation setPaymentMethodOnCart($cartId: String!) {
        setPaymentMethodOnCart(
            input: { cart_id: $cartId, payment_method: { code: "free" } }
        ) @connection(key: "setPaymentMethodOnCart") {
            cart {
                id
                selected_payment_method {
                    code
                    title
                }
            }
        }
    }
`;
/* harmony default export */ __webpack_exports__["b"] = ({
  queries: {
    getPaymentNonceQuery: GET_PAYMENT_NONCE,
    getPaymentInformation: GET_PAYMENT_INFORMATION
  },
  mutations: {
    setBillingAddressMutation: SET_BILLING_ADDRESS,
    setFreePaymentMethodMutation: SET_FREE_PAYMENT_METHOD_ON_CART
  }
});

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethodCollection.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethodCollection.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _magento_venia_ui_lib_components_CheckoutPage_PaymentInformation_creditCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.js");

/**
 * This file is augmented at build time using the @magento/venia-ui build
 * target "checkoutPagePaymentTypes", which allows third-party modules to
 * add new payment component mappings for the checkout page.
 *
 * @see [Payment definition object]{@link PaymentDefinition}
 */

/**
 * A payment definition object that describes a payment in your storefront.
 *
 * @typedef {Object} PaymentDefinition
 * @property {string} paymentCode is use to map your payment
 * @property {string} importPath Resolvable path to the component the
 *   Route component will render
 *
 * @example <caption>A custom payment method</caption>
 * const myCustomPayment = {
 *      paymentCode: 'cc',
 *      importPath: '@partner/module/path_to_your_component'
 * }
 */
// generated by export-esm-collection-loader

/* harmony default export */ __webpack_exports__["a"] = ({
  braintree: _magento_venia_ui_lib_components_CheckoutPage_PaymentInformation_creditCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
});

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js + 8 modules ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBookFragments.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethodFragments.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Country/country.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Postcode/postcode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Region/region.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/customerForm.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/guestForm.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/ShippingInformation/AddressForm/useCustomerForm.js
var _s = $RefreshSig$();

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useCustomerForm = props => {
  _s();

  const {
    afterSubmit,
    mutations: {
      createCustomerAddressMutation,
      updateCustomerAddressMutation
    },
    onCancel,
    onSuccess,
    queries: {
      getCustomerQuery,
      getCustomerAddressesQuery,
      getDefaultShippingQuery
    },
    shippingData
  } = props;
  const [createCustomerAddress, {
    error: createCustomerAddressError,
    loading: createCustomerAddressLoading
  }] = Object(client["useMutation"])(createCustomerAddressMutation, {
    onCompleted: () => {
      onSuccess();
    }
  });
  const [updateCustomerAddress, {
    error: updateCustomerAddressError,
    loading: updateCustomerAddressLoading
  }] = Object(client["useMutation"])(updateCustomerAddressMutation, {
    onCompleted: () => {
      onSuccess();
    }
  });
  const {
    data: customerData,
    loading: getCustomerLoading
  } = Object(client["useQuery"])(getCustomerQuery);
  const isSaving = createCustomerAddressLoading || updateCustomerAddressLoading; // Simple heuristic to indicate form was submitted prior to this render

  const isUpdate = !!shippingData.city;
  const {
    country
  } = shippingData;
  const {
    code: countryCode
  } = country;

  let initialValues = _objectSpread({}, shippingData, {
    country: countryCode
  });

  const hasDefaultShipping = !!customerData && !!customerData.customer.default_shipping; // For first time creation pre-fill the form with Customer data

  if (!isUpdate && !getCustomerLoading && !hasDefaultShipping) {
    const {
      customer
    } = customerData;
    const {
      email,
      firstname,
      lastname
    } = customer;
    const defaultUserData = {
      email,
      firstname,
      lastname
    };
    initialValues = _objectSpread({}, initialValues, defaultUserData);
  }

  const handleSubmit = Object(react["useCallback"])(async formValues => {
    // eslint-disable-next-line no-unused-vars
    const {
      country,
      email
    } = formValues,
          address = _objectWithoutProperties(formValues, ["country", "email"]);

    try {
      const customerAddress = _objectSpread({}, address, {
        // Cleans up the street array when values are null or undefined
        street: address.street.filter(e => e),
        country_code: country
      });

      if (isUpdate) {
        const {
          id: addressId
        } = shippingData;
        await updateCustomerAddress({
          variables: {
            addressId,
            address: customerAddress
          },
          refetchQueries: [{
            query: getCustomerAddressesQuery
          }]
        });
      } else {
        await createCustomerAddress({
          variables: {
            address: customerAddress
          },
          refetchQueries: [{
            query: getCustomerAddressesQuery
          }, {
            query: getDefaultShippingQuery
          }]
        });
      }
    } catch {
      return;
    }

    if (afterSubmit) {
      afterSubmit();
    }
  }, [afterSubmit, createCustomerAddress, getCustomerAddressesQuery, getDefaultShippingQuery, isUpdate, shippingData, updateCustomerAddress]);
  const handleCancel = Object(react["useCallback"])(() => {
    onCancel();
  }, [onCancel]);
  const errors = Object(react["useMemo"])(() => new Map([['createCustomerAddressMutation', createCustomerAddressError], ['updateCustomerAddressMutation', updateCustomerAddressError]]), [createCustomerAddressError, updateCustomerAddressError]);
  return {
    errors,
    handleCancel,
    handleSubmit,
    hasDefaultShipping,
    initialValues,
    isLoading: getCustomerLoading,
    isSaving,
    isUpdate
  };
};

_s(useCustomerForm, "Qt3dhs5M7dDiN1ug+dHyzzIHQ94=", false, function () {
  return [client["useMutation"], client["useMutation"], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js + 1 modules
var Checkbox_checkbox = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Country/country.js + 2 modules
var Country_country = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Country/country.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules
var field = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/field.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules
var Field_message = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/message.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Region/region.js + 3 modules
var region = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Region/region.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Postcode/postcode.js + 2 modules
var postcode = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Postcode/postcode.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/customerForm.css
var customerForm = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/customerForm.css");
var customerForm_default = /*#__PURE__*/__webpack_require__.n(customerForm);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/customerForm.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(customerForm_default.a, options);



/* harmony default export */ var AddressForm_customerForm = (customerForm_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.gql.js
var addressBook_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBookFragments.gql.js
var addressBookFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBookFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.gql.js
var shippingInformation_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/customerForm.gql.js




const CREATE_CUSTOMER_ADDRESS_MUTATION = client["gql"]`
    mutation CreateCustomerAddress($address: CustomerAddressInput!) {
        createCustomerAddress(input: $address)
            @connection(key: "createCustomerAddress") {
            id
            ...CustomerAddressFragment
        }
    }
    ${addressBookFragments_gql["a" /* CustomerAddressFragment */]}
`;
/**
 * We would normally use the CustomerAddressFragment here for the response
 * but due to GraphQL returning null region data, we return minimal data and
 * rely on refetching after performing this mutation to get accurate data.
 *
 * Fragment will be added back after MC-33948 is resolved.
 */

const UPDATE_CUSTOMER_ADDRESS_MUTATION = client["gql"]`
    mutation UpdateCustomerAddress(
        $addressId: Int!
        $address: CustomerAddressInput!
    ) {
        updateCustomerAddress(id: $addressId, input: $address)
            @connection(key: "updateCustomerAddress") {
            id
        }
    }
`;
const GET_CUSTOMER_QUERY = client["gql"]`
    query GetCustomer {
        customer {
            id
            default_shipping
            email
            firstname
            lastname
        }
    }
`;
/* harmony default export */ var customerForm_gql = ({
  mutations: {
    createCustomerAddressMutation: CREATE_CUSTOMER_ADDRESS_MUTATION,
    updateCustomerAddressMutation: UPDATE_CUSTOMER_ADDRESS_MUTATION
  },
  queries: {
    getCustomerQuery: GET_CUSTOMER_QUERY,
    getCustomerAddressesQuery: addressBook_gql["a" /* GET_CUSTOMER_ADDRESSES */],
    getDefaultShippingQuery: shippingInformation_gql["a" /* GET_DEFAULT_SHIPPING */]
  }
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/customerForm.js
var customerForm_s = $RefreshSig$();

function customerForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { customerForm_defineProperty(target, key, source[key]); }); } return target; }

function customerForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const CustomerForm = props => {
  customerForm_s();

  const {
    afterSubmit,
    classes: propClasses,
    onCancel,
    onSuccess,
    shippingData
  } = props;
  const talonProps = useCustomerForm(customerForm_objectSpread({
    afterSubmit
  }, customerForm_gql, {
    onCancel,
    onSuccess,
    shippingData
  }));
  const {
    errors,
    handleCancel,
    handleSubmit,
    hasDefaultShipping,
    initialValues,
    isLoading,
    isSaving,
    isUpdate
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(AddressForm_customerForm, propClasses);

  if (isLoading) {
    return react_default.a.createElement(indicator["a" /* default */], null, react_default.a.createElement(message["a" /* default */], {
      id: 'customerForm.loading',
      defaultMessage: 'Fetching Customer Details...'
    }));
  }

  const emailRow = !hasDefaultShipping ? react_default.a.createElement("div", {
    className: classes.email
  }, react_default.a.createElement(field["a" /* default */], {
    id: "email",
    label: formatMessage({
      id: 'global.email',
      defaultMessage: 'Email'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    disabled: true,
    field: "email",
    id: "email",
    validate: formValidators["d" /* isRequired */]
  }))) : null;
  const formMessageRow = !hasDefaultShipping ? react_default.a.createElement("div", {
    className: classes.formMessage
  }, react_default.a.createElement(Field_message["a" /* default */], null, react_default.a.createElement(message["a" /* default */], {
    id: 'customerForm.formMessage',
    defaultMessage: 'The shipping address you enter will be saved to your address book and set as your default for future purchases.'
  }))) : null;
  const cancelButton = isUpdate ? react_default.a.createElement(Button_button["a" /* default */], {
    disabled: isSaving,
    onClick: handleCancel,
    priority: "low"
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'global.cancelButton',
    defaultMessage: 'Cancel'
  })) : null;
  const submitButtonText = !hasDefaultShipping ? formatMessage({
    id: 'global.saveAndContinueButton',
    defaultMessage: 'Save and Continue'
  }) : isUpdate ? formatMessage({
    id: 'global.updateButton',
    defaultMessage: 'Update'
  }) : formatMessage({
    id: 'global.addButton',
    defaultMessage: 'Add'
  });
  const submitButtonProps = {
    disabled: isSaving,
    priority: !hasDefaultShipping ? 'normal' : 'high',
    type: 'submit'
  };
  const defaultShippingElement = hasDefaultShipping ? react_default.a.createElement("div", {
    className: classes.defaultShipping
  }, react_default.a.createElement(Checkbox_checkbox["a" /* default */], {
    disabled: !!initialValues.default_shipping,
    id: "default_shipping",
    field: "default_shipping",
    label: formatMessage({
      id: 'customerForm.defaultShipping',
      defaultMessage: 'Make this my default address'
    })
  })) : react_default.a.createElement(esm["i" /* Text */], {
    type: "hidden",
    field: "default_shipping",
    initialValue: true
  });
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(formError["a" /* default */], {
    errors: Array.from(errors.values())
  }), react_default.a.createElement(esm["c" /* Form */], {
    className: classes.root,
    initialValues: initialValues,
    onSubmit: handleSubmit
  }, formMessageRow, emailRow, react_default.a.createElement("div", {
    className: classes.firstname
  }, react_default.a.createElement(field["a" /* default */], {
    id: "customer_firstname",
    label: formatMessage({
      id: 'global.firstName',
      defaultMessage: 'First Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    disabled: !hasDefaultShipping,
    field: "firstname",
    id: "customer_firstname",
    validate: formValidators["d" /* isRequired */]
  }))), react_default.a.createElement("div", {
    className: classes.lastname
  }, react_default.a.createElement(field["a" /* default */], {
    id: "customer_lastname",
    label: formatMessage({
      id: 'global.lastName',
      defaultMessage: 'Last Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    disabled: !hasDefaultShipping,
    field: "lastname",
    id: "customer_lastname",
    validate: formValidators["d" /* isRequired */]
  }))), react_default.a.createElement("div", {
    className: classes.country
  }, react_default.a.createElement(Country_country["a" /* default */], {
    validate: formValidators["d" /* isRequired */]
  })), react_default.a.createElement("div", {
    className: classes.street0
  }, react_default.a.createElement(field["a" /* default */], {
    id: "customer_street0",
    label: formatMessage({
      id: 'global.streetAddress',
      defaultMessage: 'Street Address'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "street[0]",
    validate: formValidators["d" /* isRequired */],
    id: "customer_street0"
  }))), react_default.a.createElement("div", {
    className: classes.street1
  }, react_default.a.createElement(field["a" /* default */], {
    id: "customer_street1",
    label: formatMessage({
      id: 'global.streetAddress2',
      defaultMessage: 'Street Address 2'
    }),
    optional: true
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "street[1]",
    id: "customer_street1"
  }))), react_default.a.createElement("div", {
    className: classes.city
  }, react_default.a.createElement(field["a" /* default */], {
    id: "customer_city",
    label: formatMessage({
      id: 'global.city',
      defaultMessage: 'City'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "city",
    validate: formValidators["d" /* isRequired */],
    id: "customer_city"
  }))), react_default.a.createElement("div", {
    className: classes.region
  }, react_default.a.createElement(region["a" /* default */], {
    validate: formValidators["d" /* isRequired */],
    fieldInput: 'region[region]',
    fieldSelect: 'region[region_id]',
    optionValueKey: 'id'
  })), react_default.a.createElement("div", {
    className: classes.postcode
  }, react_default.a.createElement(postcode["a" /* default */], {
    validate: formValidators["d" /* isRequired */]
  })), react_default.a.createElement("div", {
    className: classes.telephone
  }, react_default.a.createElement(field["a" /* default */], {
    id: "customer_telephone",
    label: formatMessage({
      id: 'global.phoneNumber',
      defaultMessage: 'Phone Number'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "telephone",
    validate: formValidators["d" /* isRequired */],
    id: "customer_telephone"
  }))), defaultShippingElement, react_default.a.createElement("div", {
    className: classes.buttons
  }, cancelButton, react_default.a.createElement(Button_button["a" /* default */], submitButtonProps, submitButtonText))));
};

customerForm_s(CustomerForm, "fyW8ClyoFalUq7bj2pso4jC3Lh0=", false, function () {
  return [useCustomerForm, useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

_c = CustomerForm;
/* harmony default export */ var ShippingInformation_AddressForm_customerForm = (CustomerForm);
CustomerForm.defaultProps = {
  shippingData: {
    country: {
      code: "US"
    },
    region: {
      id: null
    }
  }
};
CustomerForm.propTypes = {
  afterSubmit: prop_types["func"],
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    field: prop_types["string"],
    email: prop_types["string"],
    firstname: prop_types["string"],
    lastname: prop_types["string"],
    country: prop_types["string"],
    street0: prop_types["string"],
    street1: prop_types["string"],
    city: prop_types["string"],
    region: prop_types["string"],
    postcode: prop_types["string"],
    telephone: prop_types["string"],
    buttons: prop_types["string"],
    formMessage: prop_types["string"],
    defaultShipping: prop_types["string"]
  }),
  onCancel: prop_types["func"],
  shippingData: Object(prop_types["shape"])({
    city: prop_types["string"],
    country: Object(prop_types["shape"])({
      code: prop_types["string"].isRequired
    }).isRequired,
    default_shipping: prop_types["bool"],
    email: prop_types["string"],
    firstname: prop_types["string"],
    id: prop_types["number"],
    lastname: prop_types["string"],
    postcode: prop_types["string"],
    region: Object(prop_types["shape"])({
      id: prop_types["number"]
    }).isRequired,
    street: Object(prop_types["arrayOf"])(prop_types["string"]),
    telephone: prop_types["string"]
  })
};

var _c;

$RefreshReg$(_c, "CustomerForm");
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/ShippingInformation/AddressForm/useGuestForm.js
var useGuestForm_s = $RefreshSig$();

function useGuestForm_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = useGuestForm_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function useGuestForm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function useGuestForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { useGuestForm_defineProperty(target, key, source[key]); }); } return target; }

function useGuestForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const useGuestForm = props => {
  useGuestForm_s();

  const {
    afterSubmit,
    mutations: {
      setGuestShippingMutation
    },
    onCancel,
    onSuccess,
    shippingData
  } = props;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const [setGuestShipping, {
    error,
    loading
  }] = Object(client["useMutation"])(setGuestShippingMutation, {
    onCompleted: () => {
      onSuccess();
    }
  });
  const {
    country
  } = shippingData;
  const {
    code: countryCode
  } = country;

  const initialValues = useGuestForm_objectSpread({}, shippingData, {
    country: countryCode
  }); // Simple heuristic to indicate form was submitted prior to this render


  const isUpdate = !!shippingData.city;
  const handleSubmit = Object(react["useCallback"])(async formValues => {
    const {
      country,
      email,
      region
    } = formValues,
          address = useGuestForm_objectWithoutProperties(formValues, ["country", "email", "region"]);

    try {
      await setGuestShipping({
        variables: {
          cartId,
          email,
          address: useGuestForm_objectSpread({}, address, {
            // Cleans up the street array when values are null or undefined
            street: address.street.filter(e => e),
            // region_id is used for field select and region is used for field input
            region: region.region_id || region.region,
            country_code: country
          })
        }
      });
    } catch {
      return;
    }

    if (afterSubmit) {
      afterSubmit();
    }
  }, [afterSubmit, cartId, setGuestShipping]);
  const handleCancel = Object(react["useCallback"])(() => {
    onCancel();
  }, [onCancel]);
  const errors = Object(react["useMemo"])(() => new Map([['setGuestShippingMutation', error]]), [error]);
  return {
    errors,
    handleCancel,
    handleSubmit,
    initialValues,
    isSaving: loading,
    isUpdate
  };
};

useGuestForm_s(useGuestForm, "FO7I987rPChjMZbhrFNgJPG5zhw=", false, function () {
  return [cart["b" /* useCartContext */], client["useMutation"]];
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/guestForm.css
var guestForm = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/guestForm.css");
var guestForm_default = /*#__PURE__*/__webpack_require__.n(guestForm);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/guestForm.css

            

var guestForm_options = {"injectType":"styleTag"};

guestForm_options.insert = "head";
guestForm_options.singleton = false;

var guestForm_update = injectStylesIntoStyleTag_default()(guestForm_default.a, guestForm_options);



/* harmony default export */ var AddressForm_guestForm = (guestForm_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js + 4 modules
var priceSummaryFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js
var shippingInformationFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethodFragments.gql.js
var shippingMethodFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethodFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql.js
var paymentInformation_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/guestForm.gql.js





const SET_GUEST_SHIPPING_MUTATION = client["gql"]`
    mutation SetGuestShipping(
        $cartId: String!
        $email: String!
        $address: CartAddressInput!
    ) {
        setGuestEmailOnCart(input: { cart_id: $cartId, email: $email })
            @connection(key: "setGuestEmailOnCart") {
            cart {
                id
            }
        }

        setShippingAddressesOnCart(
            input: {
                cart_id: $cartId
                shipping_addresses: [{ address: $address }]
            }
        ) @connection(key: "setShippingAddressesOnCart") {
            cart {
                id
                ...ShippingInformationFragment
                ...ShippingMethodsCheckoutFragment
                ...PriceSummaryFragment
                ...AvailablePaymentMethodsFragment
            }
        }
    }
    ${shippingInformationFragments_gql["a" /* ShippingInformationFragment */]}
    ${shippingMethodFragments_gql["c" /* ShippingMethodsCheckoutFragment */]}
    ${priceSummaryFragments_gql["a" /* PriceSummaryFragment */]}
    ${paymentInformation_gql["a" /* AvailablePaymentMethodsFragment */]}
`;
/* harmony default export */ var guestForm_gql = ({
  mutations: {
    setGuestShippingMutation: SET_GUEST_SHIPPING_MUTATION
  },
  queries: {}
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/guestForm.js
var guestForm_s = $RefreshSig$();

function guestForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { guestForm_defineProperty(target, key, source[key]); }); } return target; }

function guestForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const GuestForm = props => {
  guestForm_s();

  const {
    afterSubmit,
    classes: propClasses,
    onCancel,
    onSuccess,
    shippingData
  } = props;
  const talonProps = useGuestForm(guestForm_objectSpread({
    afterSubmit
  }, guestForm_gql, {
    onCancel,
    onSuccess,
    shippingData
  }));
  const {
    errors,
    handleCancel,
    handleSubmit,
    initialValues,
    isSaving,
    isUpdate
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(AddressForm_guestForm, propClasses);
  const guestEmailMessage = !isUpdate ? react_default.a.createElement(Field_message["a" /* default */], null, react_default.a.createElement(message["a" /* default */], {
    id: 'guestForm.emailMessage',
    defaultMessage: 'Set a password at the end of guest checkout to create an account in one easy step.'
  })) : null;
  const cancelButton = isUpdate ? react_default.a.createElement(Button_button["a" /* default */], {
    disabled: isSaving,
    onClick: handleCancel,
    priority: "low"
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'global.cancelButton',
    defaultMessage: 'Cancel'
  })) : null;
  const submitButtonText = isUpdate ? formatMessage({
    id: 'global.updateButton',
    defaultMessage: 'Update'
  }) : formatMessage({
    id: 'guestForm.continueToNextStep',
    defaultMessage: 'Continue to Shipping Method'
  });
  const submitButtonProps = {
    disabled: isSaving,
    priority: isUpdate ? 'high' : 'normal',
    type: 'submit'
  };
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(formError["a" /* default */], {
    errors: Array.from(errors.values())
  }), react_default.a.createElement(esm["c" /* Form */], {
    className: classes.root,
    initialValues: initialValues,
    onSubmit: handleSubmit
  }, react_default.a.createElement("div", {
    className: classes.email
  }, react_default.a.createElement(field["a" /* default */], {
    id: "email",
    label: formatMessage({
      id: 'global.email',
      defaultMessage: 'Email'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "email",
    id: "email",
    validate: formValidators["d" /* isRequired */]
  }), guestEmailMessage)), react_default.a.createElement("div", {
    className: classes.firstname
  }, react_default.a.createElement(field["a" /* default */], {
    id: "firstname",
    label: formatMessage({
      id: 'global.firstName',
      defaultMessage: 'First Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "firstname",
    id: "firstname",
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
    id: "lastname",
    validate: formValidators["d" /* isRequired */]
  }))), react_default.a.createElement("div", {
    className: classes.country
  }, react_default.a.createElement(Country_country["a" /* default */], {
    validate: formValidators["d" /* isRequired */]
  })), react_default.a.createElement("div", {
    className: classes.street0
  }, react_default.a.createElement(field["a" /* default */], {
    id: "street0",
    label: formatMessage({
      id: 'global.streetAddress',
      defaultMessage: 'Street Address'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "street[0]",
    id: "street0",
    validate: formValidators["d" /* isRequired */]
  }))), react_default.a.createElement("div", {
    className: classes.street1
  }, react_default.a.createElement(field["a" /* default */], {
    id: "street1",
    label: formatMessage({
      id: 'global.streetAddress2',
      defaultMessage: 'Street Address 2'
    }),
    optional: true
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "street[1]",
    id: "street1"
  }))), react_default.a.createElement("div", {
    className: classes.city
  }, react_default.a.createElement(field["a" /* default */], {
    id: "city",
    label: formatMessage({
      id: 'global.city',
      defaultMessage: 'City'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "city",
    id: "city",
    validate: formValidators["d" /* isRequired */]
  }))), react_default.a.createElement("div", {
    className: classes.region
  }, react_default.a.createElement(region["a" /* default */], {
    validate: formValidators["d" /* isRequired */],
    fieldInput: 'region[region]',
    fieldSelect: 'region[region_id]',
    optionValueKey: 'id'
  })), react_default.a.createElement("div", {
    className: classes.postcode
  }, react_default.a.createElement(postcode["a" /* default */], {
    validate: formValidators["d" /* isRequired */]
  })), react_default.a.createElement("div", {
    className: classes.telephone
  }, react_default.a.createElement(field["a" /* default */], {
    id: "telephone",
    label: formatMessage({
      id: 'global.phoneNumber',
      defaultMessage: 'Phone Number'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "telephone",
    id: "telephone",
    validate: formValidators["d" /* isRequired */]
  }))), react_default.a.createElement("div", {
    className: classes.buttons
  }, cancelButton, react_default.a.createElement(Button_button["a" /* default */], submitButtonProps, submitButtonText))));
};

guestForm_s(GuestForm, "iZR3KdBtG6OhOpDEj3/GkPIDJTw=", false, function () {
  return [useGuestForm, useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

guestForm_c = GuestForm;
/* harmony default export */ var ShippingInformation_AddressForm_guestForm = (GuestForm);
GuestForm.defaultProps = {
  shippingData: {
    country: {
      code: "US"
    },
    region: {
      code: ''
    }
  }
};
GuestForm.propTypes = {
  afterSubmit: prop_types["func"],
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    field: prop_types["string"],
    email: prop_types["string"],
    firstname: prop_types["string"],
    lastname: prop_types["string"],
    country: prop_types["string"],
    street0: prop_types["string"],
    street1: prop_types["string"],
    city: prop_types["string"],
    region: prop_types["string"],
    postcode: prop_types["string"],
    telephone: prop_types["string"],
    buttons: prop_types["string"],
    submit: prop_types["string"],
    submit_update: prop_types["string"]
  }),
  onCancel: prop_types["func"],
  onSuccess: prop_types["func"].isRequired,
  shippingData: Object(prop_types["shape"])({
    city: prop_types["string"],
    country: Object(prop_types["shape"])({
      code: prop_types["string"].isRequired
    }).isRequired,
    email: prop_types["string"],
    firstname: prop_types["string"],
    lastname: prop_types["string"],
    postcode: prop_types["string"],
    region: Object(prop_types["shape"])({
      region_id: prop_types["number"],
      region: prop_types["string"]
    }).isRequired,
    street: Object(prop_types["arrayOf"])(prop_types["string"]),
    telephone: prop_types["string"]
  })
};

var guestForm_c;

$RefreshReg$(guestForm_c, "GuestForm");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js
var addressForm_s = $RefreshSig$();





/**
 * Simple component that acts like an AddressForm factory, giving the client
 * the correct form to render based on the current signed in state.
 */

const addressForm_AddressForm = props => {
  addressForm_s();

  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const AddressForm = isSignedIn ? ShippingInformation_AddressForm_customerForm : ShippingInformation_AddressForm_guestForm;
  return react_default.a.createElement(AddressForm, props);
};

addressForm_s(addressForm_AddressForm, "7umwKFzHqPRzRhvhlZUOTtDHOW8=", false, function () {
  return [user["b" /* useUserContext */]];
});

addressForm_c = addressForm_AddressForm;
/* harmony default export */ var addressForm = __webpack_exports__["a"] = (addressForm_AddressForm);

var addressForm_c;

$RefreshReg$(addressForm_c, "AddressForm");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.gql.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.gql.js ***!
  \*******************************************************************************************************************/
/*! exports provided: GET_SHIPPING_INFORMATION, GET_DEFAULT_SHIPPING, SET_CUSTOMER_ADDRESS_ON_CART, default */
/*! exports used: GET_DEFAULT_SHIPPING, SET_CUSTOMER_ADDRESS_ON_CART, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_SHIPPING_INFORMATION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_DEFAULT_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_CUSTOMER_ADDRESS_ON_CART; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _magento_peregrine_lib_talons_CartPage_PriceSummary_priceSummaryFragments_gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql */ "./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js");
/* harmony import */ var _shippingInformationFragments_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shippingInformationFragments.gql */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js");
/* harmony import */ var _ShippingMethod_shippingMethodFragments_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShippingMethod/shippingMethodFragments.gql */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethodFragments.gql.js");
/* harmony import */ var _PaymentInformation_paymentInformation_gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PaymentInformation/paymentInformation.gql */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql.js");





const GET_SHIPPING_INFORMATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GetShippingInformation($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...ShippingInformationFragment
        }
    }
    ${_shippingInformationFragments_gql__WEBPACK_IMPORTED_MODULE_2__[/* ShippingInformationFragment */ "a"]}
`;
const GET_DEFAULT_SHIPPING = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GetDefaultShipping {
        customer {
            id
            default_shipping
        }
    }
`;
const SET_CUSTOMER_ADDRESS_ON_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation SetCustomerAddressOnCart($cartId: String!, $addressId: Int!) {
        setShippingAddressesOnCart(
            input: {
                cart_id: $cartId
                shipping_addresses: [{ customer_address_id: $addressId }]
            }
        ) @connection(key: "setShippingAddressesOnCart") {
            cart {
                id
                ...ShippingInformationFragment
                ...ShippingMethodsCheckoutFragment
                ...PriceSummaryFragment
                ...AvailablePaymentMethodsFragment
            }
        }
    }
    ${_shippingInformationFragments_gql__WEBPACK_IMPORTED_MODULE_2__[/* ShippingInformationFragment */ "a"]}
    ${_ShippingMethod_shippingMethodFragments_gql__WEBPACK_IMPORTED_MODULE_3__[/* ShippingMethodsCheckoutFragment */ "c"]}
    ${_magento_peregrine_lib_talons_CartPage_PriceSummary_priceSummaryFragments_gql__WEBPACK_IMPORTED_MODULE_1__[/* PriceSummaryFragment */ "a"]}
    ${_PaymentInformation_paymentInformation_gql__WEBPACK_IMPORTED_MODULE_4__[/* AvailablePaymentMethodsFragment */ "a"]}
`;
/* harmony default export */ __webpack_exports__["c"] = ({
  mutations: {
    setDefaultAddressOnCartMutation: SET_CUSTOMER_ADDRESS_ON_CART
  },
  queries: {
    getDefaultShippingQuery: GET_DEFAULT_SHIPPING,
    getShippingInformationQuery: GET_SHIPPING_INFORMATION
  }
});

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethodFragments.gql.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethodFragments.gql.js ***!
  \******************************************************************************************************************/
/*! exports provided: AvailableShippingMethodsCheckoutFragment, SelectedShippingMethodCheckoutFragment, ShippingMethodsCheckoutFragment */
/*! exports used: AvailableShippingMethodsCheckoutFragment, SelectedShippingMethodCheckoutFragment, ShippingMethodsCheckoutFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableShippingMethodsCheckoutFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectedShippingMethodCheckoutFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ShippingMethodsCheckoutFragment; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

/**
 * WARNING: This fragment can cause slowdowns on the network request because it
 * causes the backend to make remote queries to carriers for real-time data.
 * Make sure you are conscious about the side effects when including it in queries and mutations.
 */

const AvailableShippingMethodsCheckoutFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment AvailableShippingMethodsCheckoutFragment on Cart {
        id
        shipping_addresses {
            available_shipping_methods {
                amount {
                    currency
                    value
                }
                available
                carrier_code
                carrier_title
                method_code
                method_title
            }
            street
        }
    }
`;
const SelectedShippingMethodCheckoutFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment SelectedShippingMethodCheckoutFragment on Cart {
        id
        shipping_addresses {
            selected_shipping_method {
                amount {
                    currency
                    value
                }
                carrier_code
                method_code
                method_title
            }
            street
        }
    }
`;
const ShippingMethodsCheckoutFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment ShippingMethodsCheckoutFragment on Cart {
        id
        ...AvailableShippingMethodsCheckoutFragment
        ...SelectedShippingMethodCheckoutFragment
        shipping_addresses {
            country {
                code
            }
            postcode
            region {
                code
            }
            street
        }
    }
    ${AvailableShippingMethodsCheckoutFragment}
    ${SelectedShippingMethodCheckoutFragment}
`;

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/index.js + 57 modules ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Apollo/clearCartDataFromCache.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/app.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/user.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useAwaitQuery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/useWindowSize.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/configuredVariant.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethodCollection.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Accordion/section.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadio.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/giftCardSection.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethodFragments.gql.js because of ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CreateAccount/createAccount.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/ForgotPassword/forgotPassword.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Head/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Password/password.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/SignIn/signIn.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/StockStatusMessage/stockStatusMessage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/combineValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/alert-circle.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-down.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/edit-2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/plus-square.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressCard.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/GuestSignIn/guestSignIn.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/item.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/itemsReview.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/showAllButton.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/createAccount.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/orderConfirmationPage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderSummary/orderSummary.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PriceAdjustments/priceAdjustments.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/card.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/completedView.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethod.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingRadios.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/updateModal.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ScrollAnchor/scrollAnchor.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
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
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ components_CheckoutPage_checkoutPage; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__("./node_modules/react-feather/dist/icons/alert-circle.js");

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js
var useToasts = __webpack_require__("./node_modules/@magento/peregrine/lib/Toasts/useToasts.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useWindowSize.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var _apollo_client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Apollo/clearCartDataFromCache.js
var clearCartDataFromCache = __webpack_require__("./node_modules/@magento/peregrine/lib/Apollo/clearCartDataFromCache.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/user.js
var user = __webpack_require__("./node_modules/@magento/peregrine/lib/context/user.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var context_cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/checkoutPageFragments.gql.js

const CheckoutPageFragment = _apollo_client["gql"]`
    fragment CheckoutPageFragment on Cart {
        id
        items {
            id
            product {
                id
                stock_status
            }
        }
        # If total quantity is falsy we render empty.
        total_quantity
        available_payment_methods {
            code
        }
    }
`;
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/ItemsReview/itemsReviewFragments.gql.js

const ItemsReviewFragment = _apollo_client["gql"]`
    fragment ItemsReviewFragment on Cart {
        id
        total_quantity
        items {
            id
            product {
                id
                name
                thumbnail {
                    url
                }
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
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/OrderConfirmationPage/orderConfirmationPageFragments.gql.js


const OrderConfirmationPageFragment = _apollo_client["gql"]`
    fragment OrderConfirmationPageFragment on Cart {
        id
        email
        total_quantity
        shipping_addresses {
            firstname
            lastname
            street
            city
            region {
                label
            }
            postcode
            country {
                label
            }

            selected_shipping_method {
                carrier_title
                method_title
            }
        }
        ...ItemsReviewFragment
    }
    ${ItemsReviewFragment}
`;
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/checkoutPage.gql.js



const CREATE_CART = _apollo_client["gql"]`
    # This mutation will return a masked cart id. If a bearer token is provided for
    # a logged in user it will return the cart id for that user.
    mutation createCart {
        cartId: createEmptyCart
    }
`;
const PLACE_ORDER = _apollo_client["gql"]`
    mutation placeOrder($cartId: String!) {
        placeOrder(input: { cart_id: $cartId }) @connection(key: "placeOrder") {
            order {
                order_number
            }
        }
    }
`; // A query to fetch order details _right_ before we submit, so that we can pass
// data to the order confirmation page.

const GET_ORDER_DETAILS = _apollo_client["gql"]`
    query getOrderDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...OrderConfirmationPageFragment
        }
    }
    ${OrderConfirmationPageFragment}
`;
const GET_CHECKOUT_DETAILS = _apollo_client["gql"]`
    query getCheckoutDetails($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...CheckoutPageFragment
        }
    }
    ${CheckoutPageFragment}
`;
const GET_CUSTOMER = _apollo_client["gql"]`
    query GetCustomerForCheckout {
        customer {
            id
            default_shipping
            firstname
        }
    }
`;
/* harmony default export */ var checkoutPage_gql = ({
  createCartMutation: CREATE_CART,
  getCheckoutDetailsQuery: GET_CHECKOUT_DETAILS,
  getCustomerQuery: GET_CUSTOMER,
  getOrderDetailsQuery: GET_ORDER_DETAILS,
  placeOrderMutation: PLACE_ORDER
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PlaceOrderErrors.js
/**
 * Other checkout place order mutation errors can include
 * the following list:
 *
 * https://devdocs.magento.com/guides/v2.3/graphql/mutations/place-order.html#errors
 */
const PAYMENT_ERROR = 'Unable to place order:';
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/CheckoutError.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const removeGQLTag = rawMessage => rawMessage.replace(/GraphQL error:/, '');

class CheckoutError_CheckoutError extends Error {
  constructor(gqlError, ...params) {
    super(params);

    _defineProperty(this, "hasPaymentExpired", () => {
      return this.error.graphQLErrors.some(({
        message
      }) => message.includes(PAYMENT_ERROR));
    });

    this.name = 'CheckoutError';
    this.message = removeGQLTag(gqlError.message);
    this.error = gqlError;
  }
  /**
   * TODO have similar functions if needed for
   * shipping information and shipping method
   * so when they do
   *
   * ```es6
   * if (error.isShippingInformationError()) {
   *      // Handle the error
   * } else {
   *      // Not needed, probably error for other component to handle
   * }
   * ```
   */


}

/* harmony default export */ var CheckoutPage_CheckoutError = (CheckoutError_CheckoutError);
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/useCheckoutPage.js
var _s = $RefreshSig$();









const CHECKOUT_STEP = {
  SHIPPING_ADDRESS: 1,
  SHIPPING_METHOD: 2,
  PAYMENT: 3,
  REVIEW: 4
};
/**
 *
 * @param {DocumentNode} props.operations.getCheckoutDetailsQuery query to fetch checkout details
 * @param {DocumentNode} props.operations.getCustomerQuery query to fetch customer details
 * @param {DocumentNode} props.operations.getOrderDetailsQuery query to fetch order details
 * @param {DocumentNode} props.operations.createCartMutation mutation to create a new cart
 * @param {DocumentNode} props.operations.placeOrderMutation mutation to place order
 *
 * @returns {
 *  activeContent: String,
 *  availablePaymentMethods: Array,
 *  cartItems: Array,
 *  checkoutStep: Number,
 *  customer: Object,
 *  error: ApolloError,
 *  handlePlaceOrder: Function,
 *  hasError: Boolean,
 *  isCartEmpty: Boolean,
 *  isGuestCheckout: Boolean,
 *  isLoading: Boolean,
 *  isUpdating: Boolean,
 *  orderDetailsData: Object,
 *  orderDetailsLoading: Boolean,
 *  orderNumber: String,
 *  placeOrderLoading: Boolean,
 *  setCheckoutStep: Function,
 *  setIsUpdating: Function,
 *  setShippingInformationDone: Function,
 *  setShippingMethodDone: Function,
 *  setPaymentInformationDone: Function,
 *  scrollShippingInformationIntoView: Function,
 *  shippingInformationRef: ReactRef,
 *  shippingMethodRef: ReactRef,
 *  scrollShippingMethodIntoView: Function,
 *  resetReviewOrderButtonClicked: Function,
 *  handleReviewOrder: Function,
 *  reviewOrderButtonClicked: Boolean,
 *  toggleAddressBookContent: Function,
 *  toggleSignInContent: Function,
 * }
 */

const useCheckoutPage = (props = {}) => {
  _s();

  const operations = Object(shallowMerge["a" /* default */])(checkoutPage_gql, props.operations);
  const {
    createCartMutation,
    getCheckoutDetailsQuery,
    getCustomerQuery,
    getOrderDetailsQuery,
    placeOrderMutation
  } = operations;
  const [reviewOrderButtonClicked, setReviewOrderButtonClicked] = Object(react["useState"])(false);
  const shippingInformationRef = Object(react["useRef"])();
  const shippingMethodRef = Object(react["useRef"])();
  const apolloClient = Object(_apollo_client["useApolloClient"])();
  const [isUpdating, setIsUpdating] = Object(react["useState"])(false);
  const [activeContent, setActiveContent] = Object(react["useState"])('checkout');
  const [checkoutStep, setCheckoutStep] = Object(react["useState"])(CHECKOUT_STEP.SHIPPING_ADDRESS);
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const [{
    cartId
  }, {
    createCart,
    removeCart
  }] = Object(context_cart["b" /* useCartContext */])();
  const [fetchCartId] = Object(_apollo_client["useMutation"])(createCartMutation);
  const [placeOrder, {
    data: placeOrderData,
    error: placeOrderError,
    loading: placeOrderLoading
  }] = Object(_apollo_client["useMutation"])(placeOrderMutation);
  const [getOrderDetails, {
    data: orderDetailsData,
    loading: orderDetailsLoading
  }] = Object(_apollo_client["useLazyQuery"])(getOrderDetailsQuery, {
    // We use this query to fetch details _just_ before submission, so we
    // want to make sure it is fresh. We also don't want to cache this data
    // because it may contain PII.
    fetchPolicy: 'no-cache'
  });
  const {
    data: customerData,
    loading: customerLoading
  } = Object(_apollo_client["useQuery"])(getCustomerQuery, {
    skip: !isSignedIn
  });
  const {
    data: checkoutData,
    networkStatus: checkoutQueryNetworkStatus
  } = Object(_apollo_client["useQuery"])(getCheckoutDetailsQuery, {
    /**
     * Skip fetching checkout details if the `cartId`
     * is a falsy value.
     */
    skip: !cartId,
    notifyOnNetworkStatusChange: true,
    variables: {
      cartId
    }
  });
  const cartItems = Object(react["useMemo"])(() => {
    return checkoutData && checkoutData.cart.items || [];
  }, [checkoutData]);
  /**
   * For more info about network statues check this out
   *
   * https://www.apollographql.com/docs/react/data/queries/#inspecting-loading-states
   */

  const isLoading = Object(react["useMemo"])(() => {
    const checkoutQueryInFlight = checkoutQueryNetworkStatus ? checkoutQueryNetworkStatus < 7 : true;
    return checkoutQueryInFlight || customerLoading;
  }, [checkoutQueryNetworkStatus, customerLoading]);
  const customer = customerData && customerData.customer;
  const toggleAddressBookContent = Object(react["useCallback"])(() => {
    setActiveContent(currentlyActive => currentlyActive === 'checkout' ? 'addressBook' : 'checkout');
  }, []);
  const toggleSignInContent = Object(react["useCallback"])(() => {
    setActiveContent(currentlyActive => currentlyActive === 'checkout' ? 'signIn' : 'checkout');
  }, []);
  const checkoutError = Object(react["useMemo"])(() => {
    if (placeOrderError) {
      return new CheckoutPage_CheckoutError(placeOrderError);
    }
  }, [placeOrderError]);
  const handleReviewOrder = Object(react["useCallback"])(() => {
    setReviewOrderButtonClicked(true);
  }, []);
  const resetReviewOrderButtonClicked = Object(react["useCallback"])(() => {
    setReviewOrderButtonClicked(false);
  }, []);
  const scrollShippingInformationIntoView = Object(react["useCallback"])(() => {
    if (shippingInformationRef.current) {
      shippingInformationRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [shippingInformationRef]);
  const setShippingInformationDone = Object(react["useCallback"])(() => {
    if (checkoutStep === CHECKOUT_STEP.SHIPPING_ADDRESS) {
      setCheckoutStep(CHECKOUT_STEP.SHIPPING_METHOD);
    }
  }, [checkoutStep]);
  const scrollShippingMethodIntoView = Object(react["useCallback"])(() => {
    if (shippingMethodRef.current) {
      shippingMethodRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [shippingMethodRef]);
  const setShippingMethodDone = Object(react["useCallback"])(() => {
    if (checkoutStep === CHECKOUT_STEP.SHIPPING_METHOD) {
      setCheckoutStep(CHECKOUT_STEP.PAYMENT);
    }
  }, [checkoutStep]);
  const setPaymentInformationDone = Object(react["useCallback"])(() => {
    if (checkoutStep === CHECKOUT_STEP.PAYMENT) {
      globalThis.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
      setCheckoutStep(CHECKOUT_STEP.REVIEW);
    }
  }, [checkoutStep]);
  const [isPlacingOrder, setIsPlacingOrder] = Object(react["useState"])(false);
  const handlePlaceOrder = Object(react["useCallback"])(async () => {
    // Fetch order details and then use an effect to actually place the
    // order. If/when Apollo returns promises for invokers from useLazyQuery
    // we can just await this function and then perform the rest of order
    // placement.
    await getOrderDetails({
      variables: {
        cartId
      }
    });
    setIsPlacingOrder(true);
  }, [cartId, getOrderDetails]); // Go back to checkout if shopper logs in

  Object(react["useEffect"])(() => {
    if (isSignedIn) {
      setActiveContent('checkout');
    }
  }, [isSignedIn]);
  Object(react["useEffect"])(() => {
    async function placeOrderAndCleanup() {
      try {
        await placeOrder({
          variables: {
            cartId
          }
        }); // Cleanup stale cart and customer info.

        await removeCart();
        await Object(clearCartDataFromCache["a" /* clearCartDataFromCache */])(apolloClient);
        await createCart({
          fetchCartId
        });
      } catch (err) {
        console.error('An error occurred during when placing the order', err);
        setReviewOrderButtonClicked(false);
        setCheckoutStep(CHECKOUT_STEP.PAYMENT);
      }
    }

    if (orderDetailsData && isPlacingOrder) {
      setIsPlacingOrder(false);
      placeOrderAndCleanup();
    }
  }, [apolloClient, cartId, createCart, fetchCartId, orderDetailsData, placeOrder, removeCart, isPlacingOrder]);
  return {
    activeContent,
    availablePaymentMethods: checkoutData ? checkoutData.cart.available_payment_methods : null,
    cartItems,
    checkoutStep,
    customer,
    error: checkoutError,
    handlePlaceOrder,
    hasError: !!checkoutError,
    isCartEmpty: !(checkoutData && checkoutData.cart.total_quantity),
    isGuestCheckout: !isSignedIn,
    isLoading,
    isUpdating,
    orderDetailsData,
    orderDetailsLoading,
    orderNumber: placeOrderData && placeOrderData.placeOrder.order.order_number || null,
    placeOrderLoading,
    setCheckoutStep,
    setIsUpdating,
    setShippingInformationDone,
    setShippingMethodDone,
    setPaymentInformationDone,
    scrollShippingInformationIntoView,
    shippingInformationRef,
    shippingMethodRef,
    scrollShippingMethodIntoView,
    resetReviewOrderButtonClicked,
    handleReviewOrder,
    reviewOrderButtonClicked,
    toggleAddressBookContent,
    toggleSignInContent
  };
};

_s(useCheckoutPage, "n1uiVDebsZoue0R3cPIrngnJ/Ic=", false, function () {
  return [_apollo_client["useApolloClient"], user["b" /* useUserContext */], context_cart["b" /* useCartContext */], _apollo_client["useMutation"], _apollo_client["useMutation"], _apollo_client["useLazyQuery"], _apollo_client["useQuery"], _apollo_client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Head/index.js
var Head = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Head/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js
var LoadingIndicator_static = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/StockStatusMessage/stockStatusMessage.js + 2 modules
var stockStatusMessage = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/StockStatusMessage/stockStatusMessage.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/plus-square.js
var plus_square = __webpack_require__("./node_modules/react-feather/dist/icons/plus-square.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/app.js
var app = __webpack_require__("./node_modules/@magento/peregrine/lib/context/app.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js
var deriveErrorMessage = __webpack_require__("./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/AddressBook/useAddressBook.js
var useAddressBook_s = $RefreshSig$();







const useAddressBook = props => {
  useAddressBook_s();

  const {
    mutations: {
      setCustomerAddressOnCartMutation
    },
    queries: {
      getCustomerAddressesQuery,
      getCustomerCartAddressQuery
    },
    toggleActiveContent,
    onSuccess
  } = props;
  const [, {
    toggleDrawer
  }] = Object(app["b" /* useAppContext */])();
  const [{
    cartId
  }] = Object(context_cart["b" /* useCartContext */])();
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const addressCount = Object(react["useRef"])();
  const [activeAddress, setActiveAddress] = Object(react["useState"])();
  const [selectedAddress, setSelectedAddress] = Object(react["useState"])();
  const [setCustomerAddressOnCart, {
    error: setCustomerAddressOnCartError,
    loading: setCustomerAddressOnCartLoading
  }] = Object(_apollo_client["useMutation"])(setCustomerAddressOnCartMutation, {
    onCompleted: () => {
      onSuccess();
    }
  });
  const {
    data: customerAddressesData,
    loading: customerAddressesLoading
  } = Object(_apollo_client["useQuery"])(getCustomerAddressesQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !isSignedIn
  });
  const {
    data: customerCartAddressData,
    loading: customerCartAddressLoading
  } = Object(_apollo_client["useQuery"])(getCustomerCartAddressQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !isSignedIn
  });
  const derivedErrorMessage = Object(react["useMemo"])(() => Object(deriveErrorMessage["a" /* deriveErrorMessage */])([setCustomerAddressOnCartError]), [setCustomerAddressOnCartError]);
  const isLoading = customerAddressesLoading || customerCartAddressLoading || setCustomerAddressOnCartLoading;
  const customerAddresses = customerAddressesData && customerAddressesData.customer.addresses || [];
  Object(react["useEffect"])(() => {
    if (customerAddresses.length !== addressCount.current) {
      // Auto-select newly added address when count changes
      if (addressCount.current) {
        const newestAddress = customerAddresses[customerAddresses.length - 1];
        setSelectedAddress(newestAddress.id);
      }

      addressCount.current = customerAddresses.length;
    }
  }, [customerAddresses]);
  const handleEditAddress = Object(react["useCallback"])(address => {
    setActiveAddress(address);
    toggleDrawer('shippingInformation.edit');
  }, [toggleDrawer]);
  const handleAddAddress = Object(react["useCallback"])(() => {
    handleEditAddress();
  }, [handleEditAddress]);
  const handleSelectAddress = Object(react["useCallback"])(addressId => {
    setSelectedAddress(addressId);
  }, []); // GraphQL doesn't return which customer address is selected, so perform
  // a simple search to initialize this selected address value.

  if (customerAddresses.length && customerCartAddressData && !selectedAddress) {
    const {
      customerCart
    } = customerCartAddressData;
    const {
      shipping_addresses: shippingAddresses
    } = customerCart;

    if (shippingAddresses.length) {
      const primaryCartAddress = shippingAddresses[0];
      const foundSelectedAddress = customerAddresses.find(customerAddress => customerAddress.street[0] === primaryCartAddress.street[0] && customerAddress.firstname === primaryCartAddress.firstname && customerAddress.lastname === primaryCartAddress.lastname);

      if (foundSelectedAddress) {
        setSelectedAddress(foundSelectedAddress.id);
      }
    }
  }

  const handleApplyAddress = Object(react["useCallback"])(async () => {
    try {
      await setCustomerAddressOnCart({
        variables: {
          cartId,
          addressId: selectedAddress
        }
      });
    } catch {
      return;
    }

    toggleActiveContent();
  }, [cartId, selectedAddress, setCustomerAddressOnCart, toggleActiveContent]);
  const handleCancel = Object(react["useCallback"])(() => {
    setSelectedAddress();
    toggleActiveContent();
  }, [toggleActiveContent]);
  return {
    activeAddress,
    customerAddresses,
    errorMessage: derivedErrorMessage,
    isLoading,
    handleAddAddress,
    handleApplyAddress,
    handleCancel,
    handleSelectAddress,
    handleEditAddress,
    selectedAddress
  };
};

useAddressBook_s(useAddressBook, "QQq9BFJ8/M3Q2M8T/BRAFVgZ010=", false, function () {
  return [app["b" /* useAppContext */], context_cart["b" /* useCartContext */], user["b" /* useUserContext */], _apollo_client["useMutation"], _apollo_client["useQuery"], _apollo_client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.css
var addressBook = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.css");
var addressBook_default = /*#__PURE__*/__webpack_require__.n(addressBook);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(addressBook_default.a, options);



/* harmony default export */ var AddressBook_addressBook = (addressBook_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.gql.js
var addressBook_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.gql.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__("./node_modules/react-feather/dist/icons/edit-2.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/AddressBook/useAddressCard.js
var useAddressCard_s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { useAddressCard_defineProperty(target, key, source[key]); }); } return target; }

function useAddressCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const useAddressCard = props => {
  useAddressCard_s();

  const {
    address,
    onEdit,
    onSelection
  } = props;
  const addressId = address ? address.id : null;
  const [hasUpdate, setHasUpdate] = Object(react["useState"])(false);
  const hasRendered = Object(react["useRef"])(false);
  Object(react["useEffect"])(() => {
    let updateTimer;

    if (address !== undefined) {
      if (hasRendered.current) {
        setHasUpdate(true);
        updateTimer = setTimeout(() => {
          setHasUpdate(false);
        }, 2000);
      } else {
        hasRendered.current = true;
      }
    }

    return () => {
      if (updateTimer) {
        clearTimeout(updateTimer);
      }
    };
  }, [hasRendered, address]);
  const addressForEdit = Object(react["useMemo"])(() => {
    if (!address) {
      return null;
    }

    const {
      country_code: countryCode
    } = address,
          addressRest = _objectWithoutProperties(address, ["country_code"]);

    return _objectSpread({}, addressRest, {
      country: {
        code: countryCode
      }
    });
  }, [address]);
  const handleClick = Object(react["useCallback"])(() => {
    onSelection(addressId);
  }, [addressId, onSelection]);
  const handleKeyPress = Object(react["useCallback"])(event => {
    if (event.key === 'Enter') {
      onSelection(addressId);
    }
  }, [addressId, onSelection]);
  const handleEditAddress = Object(react["useCallback"])(() => {
    onEdit(addressForEdit);
  }, [addressForEdit, onEdit]);
  return {
    handleClick,
    handleEditAddress,
    handleKeyPress,
    hasUpdate
  };
};

useAddressCard_s(useAddressCard, "tXILwEaSNKLcLylFVYgc81TjuUs=");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressCard.css
var addressCard = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressCard.css");
var addressCard_default = /*#__PURE__*/__webpack_require__.n(addressCard);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressCard.css

            

var addressCard_options = {"injectType":"styleTag"};

addressCard_options.insert = "head";
addressCard_options.singleton = false;

var addressCard_update = injectStylesIntoStyleTag_default()(addressCard_default.a, addressCard_options);



/* harmony default export */ var AddressBook_addressCard = (addressCard_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressCard.js
var addressCard_s = $RefreshSig$();










const AddressCard = props => {
  addressCard_s();

  const {
    address,
    classes: propClasses,
    isSelected,
    onEdit,
    onSelection
  } = props;
  const talonProps = useAddressCard({
    address,
    onEdit,
    onSelection
  });
  const {
    handleClick,
    handleEditAddress,
    handleKeyPress,
    hasUpdate
  } = talonProps;
  const {
    city,
    country_code,
    default_shipping,
    firstname,
    lastname,
    postcode,
    region: {
      region
    },
    street
  } = address;
  const streetRows = street.map((row, index) => {
    return react_default.a.createElement("span", {
      key: index
    }, row);
  });
  const classes = Object(shallowMerge["a" /* default */])(AddressBook_addressCard, propClasses);
  const rootClass = isSelected ? hasUpdate ? classes.root_updated : classes.root_selected : classes.root;
  const editButton = isSelected ? react_default.a.createElement("button", {
    className: classes.editButton,
    onClick: handleEditAddress
  }, react_default.a.createElement(icon["a" /* default */], {
    classes: {
      icon: classes.editIcon
    },
    size: 16,
    src: edit_2["a" /* default */]
  })) : null;
  const defaultBadge = default_shipping ? react_default.a.createElement("span", {
    className: classes.defaultBadge
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'addressCard.defaultText',
    defaultMessage: 'Default'
  })) : null;
  const nameString = `${firstname} ${lastname}`;
  const additionalAddressString = `${city}, ${region} ${postcode} ${country_code}`;
  return react_default.a.createElement("div", {
    className: rootClass,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    role: "button",
    tabIndex: "0"
  }, editButton, defaultBadge, react_default.a.createElement("span", {
    className: classes.name
  }, nameString), streetRows, react_default.a.createElement("span", null, additionalAddressString));
};

addressCard_s(AddressCard, "f11Urk9gMtROcZjruLcpwSgTCnI=", false, function () {
  return [useAddressCard, shallowMerge["a" /* default */]];
});

_c = AddressCard;
/* harmony default export */ var CheckoutPage_AddressBook_addressCard = (AddressCard);
AddressCard.propTypes = {
  address: Object(prop_types["shape"])({
    city: prop_types["string"],
    country_code: prop_types["string"],
    default_shipping: prop_types["bool"],
    firstname: prop_types["string"],
    lastname: prop_types["string"],
    postcode: prop_types["string"],
    region: Object(prop_types["shape"])({
      region_code: prop_types["string"],
      region: prop_types["string"]
    }),
    street: Object(prop_types["arrayOf"])(prop_types["string"])
  }).isRequired,
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_selected: prop_types["string"],
    root_updated: prop_types["string"],
    editButton: prop_types["string"],
    editIcon: prop_types["string"],
    defaultBadge: prop_types["string"],
    name: prop_types["string"],
    address: prop_types["string"]
  }),
  isSelected: prop_types["bool"].isRequired,
  onEdit: prop_types["func"].isRequired,
  onSelection: prop_types["func"].isRequired
};

var _c;

$RefreshReg$(_c, "AddressCard");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.js
var addressBook_s = $RefreshSig$();

function addressBook_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { addressBook_defineProperty(target, key, source[key]); }); } return target; }

function addressBook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const EditModal = react_default.a.lazy(addressBook_c = () => __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ../ShippingInformation/editModal */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js")));
_c2 = EditModal;
const errorIcon = react_default.a.createElement(icon["a" /* default */], {
  src: alert_circle["a" /* default */],
  attrs: {
    width: 18
  }
});

const AddressBook = props => {
  addressBook_s();

  const {
    activeContent,
    classes: propClasses,
    toggleActiveContent,
    onSuccess
  } = props;
  const talonProps = useAddressBook(addressBook_objectSpread({}, addressBook_gql["b" /* default */], {
    toggleActiveContent,
    onSuccess
  }));
  const {
    activeAddress,
    customerAddresses,
    errorMessage,
    handleAddAddress,
    handleApplyAddress,
    handleCancel,
    handleEditAddress,
    handleSelectAddress,
    isLoading,
    selectedAddress
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(AddressBook_addressBook, propClasses);
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
        timeout: 10000
      });
    }
  }, [addToast, errorMessage]);
  const rootClass = activeContent === 'addressBook' ? classes.root_active : classes.root;
  const addAddressButton = react_default.a.createElement(linkButton["a" /* default */], {
    className: classes.addButton,
    key: "addAddressButton",
    onClick: handleAddAddress
  }, react_default.a.createElement(icon["a" /* default */], {
    size: 24,
    src: plus_square["a" /* default */],
    classes: {
      icon: classes.addIcon
    }
  }), react_default.a.createElement("span", {
    className: classes.addText
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'addressBook.addNewAddresstext',
    defaultMessage: 'Add New Address'
  })));
  const addressElements = Object(react["useMemo"])(() => {
    let defaultIndex;
    const addresses = customerAddresses.map((address, index) => {
      const isSelected = selectedAddress === address.id;

      if (address.default_shipping) {
        defaultIndex = index;
      }

      return react_default.a.createElement(CheckoutPage_AddressBook_addressCard, {
        address: address,
        isSelected: isSelected,
        key: address.id,
        onSelection: handleSelectAddress,
        onEdit: handleEditAddress
      });
    }); // Position the default address first in the elements list

    if (defaultIndex) {
      [addresses[0], addresses[defaultIndex]] = [addresses[defaultIndex], addresses[0]];
    }

    return [...addresses, addAddressButton];
  }, [addAddressButton, customerAddresses, handleEditAddress, handleSelectAddress, selectedAddress]);
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: rootClass
  }, react_default.a.createElement("h1", {
    className: classes.headerText
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'addressBook.headerText',
    defaultMessage: 'Change Shipping Information'
  })), react_default.a.createElement("div", {
    className: classes.buttonContainer
  }, react_default.a.createElement(Button_button["a" /* default */], {
    disabled: isLoading,
    onClick: handleCancel,
    priority: "low"
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'addressBook.cancelButtonText',
    defaultMessage: 'Cancel'
  })), react_default.a.createElement(Button_button["a" /* default */], {
    disabled: isLoading,
    onClick: handleApplyAddress,
    priority: "high"
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'addressBook.applyButtonText',
    defaultMessage: 'Apply'
  }))), react_default.a.createElement("div", {
    className: classes.content
  }, addressElements)), react_default.a.createElement(react["Suspense"], {
    fallback: null
  }, react_default.a.createElement(EditModal, {
    onSuccess: onSuccess,
    shippingData: activeAddress
  })));
};

addressBook_s(AddressBook, "pu7TDCCuIfgyNxunaMyKBg73AF8=", false, function () {
  return [useAddressBook, shallowMerge["a" /* default */], useToasts["a" /* useToasts */]];
});

_c3 = AddressBook;
/* harmony default export */ var CheckoutPage_AddressBook_addressBook = (AddressBook);
AddressBook.propTypes = {
  activeContent: prop_types["string"].isRequired,
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_active: prop_types["string"],
    headerText: prop_types["string"],
    buttonContainer: prop_types["string"],
    content: prop_types["string"],
    addButton: prop_types["string"],
    addIcon: prop_types["string"],
    addText: prop_types["string"]
  }),
  onSuccess: prop_types["func"].isRequired,
  toggleActiveContent: prop_types["func"].isRequired
};

var addressBook_c, _c2, _c3;

$RefreshReg$(addressBook_c, "EditModal$React.lazy");
$RefreshReg$(_c2, "EditModal");
$RefreshReg$(_c3, "AddressBook");
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/GuestSignIn/useGuestSignIn.js
var useGuestSignIn_s = $RefreshSig$();


const useGuestSignIn = props => {
  useGuestSignIn_s();

  const {
    toggleActiveContent
  } = props;
  const [view, setView] = Object(react["useState"])('SIGNIN');
  const toggleForgotPasswordView = Object(react["useCallback"])(() => {
    setView(currentView => currentView === 'SIGNIN' ? 'FORGOT_PASSWORD' : 'SIGNIN');
  }, []);
  const toggleCreateAccountView = Object(react["useCallback"])(() => {
    setView(currentView => currentView === 'SIGNIN' ? 'CREATE_ACCOUNT' : 'SIGNIN');
  }, []);
  const handleBackToCheckout = Object(react["useCallback"])(() => {
    toggleActiveContent();
    setView('SIGNIN');
  }, [toggleActiveContent]);
  return {
    handleBackToCheckout,
    toggleCreateAccountView,
    toggleForgotPasswordView,
    view
  };
};

useGuestSignIn_s(useGuestSignIn, "xMwwH29bfpITF0lEep7c2U07h4o=");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CreateAccount/createAccount.js + 1 modules
var CreateAccount_createAccount = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CreateAccount/createAccount.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/ForgotPassword/forgotPassword.js + 6 modules
var forgotPassword = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/ForgotPassword/forgotPassword.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/SignIn/signIn.js + 2 modules
var SignIn_signIn = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/SignIn/signIn.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/GuestSignIn/guestSignIn.css
var guestSignIn = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/GuestSignIn/guestSignIn.css");
var guestSignIn_default = /*#__PURE__*/__webpack_require__.n(guestSignIn);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/GuestSignIn/guestSignIn.css

            

var guestSignIn_options = {"injectType":"styleTag"};

guestSignIn_options.insert = "head";
guestSignIn_options.singleton = false;

var guestSignIn_update = injectStylesIntoStyleTag_default()(guestSignIn_default.a, guestSignIn_options);



/* harmony default export */ var GuestSignIn_guestSignIn = (guestSignIn_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/GuestSignIn/guestSignIn.js
var guestSignIn_s = $RefreshSig$();












const GuestSignIn = props => {
  guestSignIn_s();

  const {
    isActive,
    toggleActiveContent
  } = props;
  const talonProps = useGuestSignIn({
    toggleActiveContent
  });
  const {
    handleBackToCheckout,
    toggleCreateAccountView,
    toggleForgotPasswordView,
    view
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(GuestSignIn_guestSignIn, props.classes);
  const rootClass = isActive ? classes.root : classes.root_hidden;
  let content;

  if (view === 'SIGNIN') {
    content = react_default.a.createElement(SignIn_signIn["a" /* default */], {
      classes: {
        modal_active: undefined,
        root: classes.signInRoot
      },
      showCreateAccount: toggleCreateAccountView,
      showForgotPassword: toggleForgotPasswordView
    });
  } else if (view === 'FORGOT_PASSWORD') {
    content = react_default.a.createElement(forgotPassword["a" /* default */], {
      classes: {
        root: classes.forgotPasswordRoot
      },
      onCancel: toggleForgotPasswordView
    });
  } else if (view === 'CREATE_ACCOUNT') {
    content = react_default.a.createElement(CreateAccount_createAccount["a" /* default */], {
      classes: {
        root: classes.createAccountRoot
      },
      isCancelButtonHidden: false,
      onCancel: toggleCreateAccountView
    });
  }

  return react_default.a.createElement("div", {
    className: rootClass
  }, react_default.a.createElement("h1", {
    className: classes.header
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: "checkoutPage.guestSignIn.header",
    defaultMessage: "Account Sign-in"
  })), react_default.a.createElement("div", {
    className: classes.contentContainer
  }, content, react_default.a.createElement(linkButton["a" /* default */], {
    onClick: handleBackToCheckout
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: "checkoutPage.guestSignIn.backToCheckout",
    defaultMessage: "Back to Checkout"
  }))));
};

guestSignIn_s(GuestSignIn, "vvmqTHcAfUw37dtmiru5hek7TG0=", false, function () {
  return [useGuestSignIn, shallowMerge["a" /* default */]];
});

guestSignIn_c = GuestSignIn;
/* harmony default export */ var CheckoutPage_GuestSignIn_guestSignIn = (GuestSignIn);
GuestSignIn.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_hidden: prop_types["string"],
    header: prop_types["string"],
    contentContainer: prop_types["string"],
    signInRoot: prop_types["string"],
    forgotPasswordRoot: prop_types["string"],
    createAccountRoot: prop_types["string"]
  }),
  isActive: prop_types["bool"].isRequired,
  toggleActiveContent: prop_types["func"].isRequired
};

var guestSignIn_c;

$RefreshReg$(guestSignIn_c, "GuestSignIn");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js + 6 modules
var priceSummary = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderSummary/orderSummary.css
var OrderSummary_orderSummary = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderSummary/orderSummary.css");
var orderSummary_default = /*#__PURE__*/__webpack_require__.n(OrderSummary_orderSummary);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderSummary/orderSummary.css

            

var orderSummary_options = {"injectType":"styleTag"};

orderSummary_options.insert = "head";
orderSummary_options.singleton = false;

var orderSummary_update = injectStylesIntoStyleTag_default()(orderSummary_default.a, orderSummary_options);



/* harmony default export */ var CheckoutPage_OrderSummary_orderSummary = (orderSummary_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderSummary/orderSummary.js
var orderSummary_s = $RefreshSig$();







const OrderSummary = props => {
  orderSummary_s();

  const classes = Object(shallowMerge["a" /* default */])(CheckoutPage_OrderSummary_orderSummary, props.classes);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("h1", {
    className: classes.title
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.orderSummary',
    defaultMessage: 'Order Summary'
  })), react_default.a.createElement(priceSummary["a" /* default */], {
    isUpdating: props.isUpdating
  }));
};

orderSummary_s(OrderSummary, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

orderSummary_c = OrderSummary;
/* harmony default export */ var components_CheckoutPage_OrderSummary_orderSummary = (OrderSummary);

var orderSummary_c;

$RefreshReg$(orderSummary_c, "OrderSummary");
// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/usePaymentInformation.js
var usePaymentInformation_s = $RefreshSig$();






/**
 *
 * @param {Function} props.onSave callback to be called when user clicks review order button
 * @param {Object} props.checkoutError an instance of the `CheckoutError` error that has been generated using the error from the place order mutation
 * @param {DocumentNode} props.queries.getPaymentNonceQuery query to fetch and/or clear payment nonce from cache
 * @param {Boolean} props.shouldSubmit property telling us to proceed to next step
 * @param {Function} props.resetShouldSubmit callback to reset the review order button flag
 * @param {DocumentNode} props.queries.getPaymentInformation query to fetch data to render this component
 * @param {DocumentNode} props.mutation.setBillingAddressMutation
 * @param {DocumentNode} props.mutation.setFreePaymentMethodMutation
 *
 * @returns {PaymentInformationTalonProps}
 */

const usePaymentInformation = props => {
  usePaymentInformation_s();

  const {
    mutations,
    onSave,
    checkoutError,
    queries,
    resetShouldSubmit,
    setCheckoutStep,
    shouldSubmit
  } = props;
  const {
    setFreePaymentMethodMutation,
    setBillingAddressMutation
  } = mutations;
  const {
    getPaymentInformation,
    getPaymentNonceQuery
  } = queries;
  /**
   * Definitions
   */

  const [doneEditing, setDoneEditing] = Object(react["useState"])(false);
  const [isEditModalActive, setIsEditModalActive] = Object(react["useState"])(false);
  const [{
    cartId
  }] = Object(context_cart["b" /* useCartContext */])();
  const client = Object(_apollo_client["useApolloClient"])();
  /**
   * Helper Functions
   */

  const showEditModal = Object(react["useCallback"])(() => {
    setIsEditModalActive(true);
  }, []);
  const hideEditModal = Object(react["useCallback"])(() => {
    setIsEditModalActive(false);
  }, []);
  const handlePaymentSuccess = Object(react["useCallback"])(() => {
    setDoneEditing(true);

    if (onSave) {
      onSave();
    }
  }, [onSave]);
  const handlePaymentError = Object(react["useCallback"])(() => {
    resetShouldSubmit();
    setDoneEditing(false);
  }, [resetShouldSubmit]);
  /**
   * Queries
   */

  const {
    data: paymentInformationData,
    loading: paymentInformationLoading
  } = Object(_apollo_client["useQuery"])(getPaymentInformation, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const [setFreePaymentMethod, {
    loading: setFreePaymentMethodLoading
  }] = Object(_apollo_client["useMutation"])(setFreePaymentMethodMutation);
  const clearPaymentDetails = Object(react["useCallback"])(() => {
    client.writeQuery({
      query: getPaymentNonceQuery,
      data: {
        cart: {
          __typename: 'Cart',
          id: cartId,
          paymentNonce: null
        }
      }
    });
  }, [cartId, client, getPaymentNonceQuery]);
  const [setBillingAddress] = Object(_apollo_client["useMutation"])(setBillingAddressMutation); // We must wait for payment method to be set if this is the first time we
  // are hitting this component and the total is $0. If we don't wait then
  // the CC component will mount while the setPaymentMethod mutation is in flight.

  const isLoading = paymentInformationLoading || setFreePaymentMethodLoading;
  /**
   * Effects
   */

  const availablePaymentMethods = paymentInformationData ? paymentInformationData.cart.available_payment_methods : [];
  const selectedPaymentMethod = paymentInformationData && paymentInformationData.cart.selected_payment_method.code || null; // Whenever selected payment method is no longer an available method we
  // should reset to the payment step to force the user to select again.

  Object(react["useEffect"])(() => {
    if (!availablePaymentMethods.find(({
      code
    }) => code === selectedPaymentMethod)) {
      resetShouldSubmit();
      setCheckoutStep(CHECKOUT_STEP.PAYMENT);
      setDoneEditing(false);
    }
  }, [availablePaymentMethods, resetShouldSubmit, selectedPaymentMethod, setCheckoutStep]); // If free is ever available and not selected, automatically select it.

  Object(react["useEffect"])(() => {
    const setFreeIfAvailable = async () => {
      const freeIsAvailable = !!availablePaymentMethods.find(({
        code
      }) => code === 'free');

      if (freeIsAvailable) {
        if (selectedPaymentMethod !== 'free') {
          await setFreePaymentMethod({
            variables: {
              cartId
            }
          });
          setDoneEditing(true);
        } else {
          setDoneEditing(true);
        }
      }
    };

    setFreeIfAvailable();
  }, [availablePaymentMethods, cartId, selectedPaymentMethod, setDoneEditing, setFreePaymentMethod]);
  const shippingAddressOnCart = paymentInformationData && paymentInformationData.cart.shipping_addresses.length && paymentInformationData.cart.shipping_addresses[0] || null; // If the selected payment method is "free" keep the shipping address
  // synced with billing address.This _requires_ the UI does not allow payment
  // information before shipping address.

  Object(react["useEffect"])(() => {
    if (selectedPaymentMethod === 'free' && shippingAddressOnCart) {
      const {
        firstname,
        lastname,
        street,
        city,
        region,
        postcode,
        country,
        telephone
      } = shippingAddressOnCart;
      const regionCode = region.code;
      const countryCode = country.code;
      setBillingAddress({
        variables: {
          cartId,
          firstname,
          lastname,
          street,
          city,
          regionCode,
          postcode,
          countryCode,
          telephone
        }
      });
    }
  }, [cartId, selectedPaymentMethod, setBillingAddress, shippingAddressOnCart]); // When the "review order" button is clicked, if the selected method is free
  // and free is still available, proceed.

  Object(react["useEffect"])(() => {
    if (shouldSubmit && availablePaymentMethods.find(({
      code
    }) => code === 'free') && selectedPaymentMethod === 'free') {
      onSave();
    }
  });
  const handleExpiredPaymentError = Object(react["useCallback"])(() => {
    setDoneEditing(false);
    clearPaymentDetails({
      variables: {
        cartId
      }
    });
    resetShouldSubmit();
    setCheckoutStep(CHECKOUT_STEP.PAYMENT);
  }, [resetShouldSubmit, setCheckoutStep, clearPaymentDetails, cartId]);
  Object(react["useEffect"])(() => {
    if (checkoutError instanceof CheckoutPage_CheckoutError && checkoutError.hasPaymentExpired()) {
      handleExpiredPaymentError();
    }
  }, [checkoutError, handleExpiredPaymentError]);
  return {
    doneEditing,
    handlePaymentError,
    handlePaymentSuccess,
    hideEditModal,
    isEditModalActive,
    isLoading,
    showEditModal
  };
};
/**
 * Props data to use when rendering a cart page component.
 *
 * @typedef {Object} PaymentInformationTalonProps
 *
 * @property {boolean} doneEditing Indicates payment information has been provided
 * @property {function} handlePaymentError Error handler passed to payment methods
 * @property {function} handlePaymentSuccess Success handler passed to payment methods
 * @property {function} hideEditModal Callback to close the edit dialog
 * @property {boolean} isEditModalActive State for keeping track of edit dialog visibility
 * @property {boolean} isLoading Derived state that keeps track if any mutation is in flight
 * @property {function} showEditModal Callback to display the edit dialog
 */

usePaymentInformation_s(usePaymentInformation, "UHvRX03KjfC8S4OpB3TazT83xCg=", false, function () {
  return [context_cart["b" /* useCartContext */], _apollo_client["useApolloClient"], _apollo_client["useQuery"], _apollo_client["useMutation"], _apollo_client["useMutation"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql.js
var paymentInformation_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.gql.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.css
var PaymentInformation_paymentInformation = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.css");
var paymentInformation_default = /*#__PURE__*/__webpack_require__.n(PaymentInformation_paymentInformation);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.css

            

var paymentInformation_options = {"injectType":"styleTag"};

paymentInformation_options.insert = "head";
paymentInformation_options.singleton = false;

var paymentInformation_update = injectStylesIntoStyleTag_default()(paymentInformation_default.a, paymentInformation_options);



/* harmony default export */ var CheckoutPage_PaymentInformation_paymentInformation = (paymentInformation_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.js
var paymentInformation_s = $RefreshSig$();

function paymentInformation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { paymentInformation_defineProperty(target, key, source[key]); }); } return target; }

function paymentInformation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const PaymentMethods = react_default.a.lazy(paymentInformation_c = () => __webpack_require__.e(/*! import() */ 85).then(__webpack_require__.bind(null, /*! ./paymentMethods */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.js")));
paymentInformation_c2 = PaymentMethods;
const paymentInformation_EditModal = react_default.a.lazy(paymentInformation_c3 = () => __webpack_require__.e(/*! import() */ 84).then(__webpack_require__.bind(null, /*! ./editModal */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/editModal.js")));
_c4 = paymentInformation_EditModal;
const Summary = react_default.a.lazy(_c5 = () => __webpack_require__.e(/*! import() */ 75).then(__webpack_require__.bind(null, /*! ./summary */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.js")));
_c6 = Summary;

const PaymentInformation = props => {
  paymentInformation_s();

  const {
    classes: propClasses,
    onSave,
    resetShouldSubmit,
    setCheckoutStep,
    shouldSubmit,
    checkoutError
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(CheckoutPage_PaymentInformation_paymentInformation, propClasses);
  const talonProps = usePaymentInformation(paymentInformation_objectSpread({
    onSave,
    checkoutError,
    resetShouldSubmit,
    setCheckoutStep,
    shouldSubmit
  }, paymentInformation_gql["b" /* default */]));
  const {
    doneEditing,
    handlePaymentError,
    handlePaymentSuccess,
    hideEditModal,
    isLoading,
    isEditModalActive,
    showEditModal
  } = talonProps;

  if (isLoading) {
    return react_default.a.createElement(indicator["a" /* default */], {
      classes: {
        root: classes.loading
      }
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.loadingPaymentInformation',
      defaultMessage: 'Fetching Payment Information'
    }));
  }

  const paymentInformation = doneEditing ? react_default.a.createElement(Summary, {
    onEdit: showEditModal
  }) : react_default.a.createElement(esm["c" /* Form */], null, react_default.a.createElement(PaymentMethods, {
    onPaymentError: handlePaymentError,
    onPaymentSuccess: handlePaymentSuccess,
    resetShouldSubmit: resetShouldSubmit,
    shouldSubmit: shouldSubmit
  }));
  const editModal = doneEditing ? react_default.a.createElement(react["Suspense"], {
    fallback: null
  }, react_default.a.createElement(paymentInformation_EditModal, {
    onClose: hideEditModal,
    isOpen: isEditModalActive
  })) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.payment_info_container
  }, react_default.a.createElement(react["Suspense"], {
    fallback: null
  }, paymentInformation)), editModal);
};

paymentInformation_s(PaymentInformation, "SkEJABgwR2qinKBfnYpWxDEP6Qw=", false, function () {
  return [shallowMerge["a" /* default */], usePaymentInformation];
});

_c7 = PaymentInformation;
/* harmony default export */ var components_CheckoutPage_PaymentInformation_paymentInformation = (PaymentInformation);
PaymentInformation.propTypes = {
  classes: Object(prop_types["shape"])({
    container: prop_types["string"],
    payment_info_container: prop_types["string"],
    review_order_button: prop_types["string"]
  }),
  onSave: prop_types["func"].isRequired,
  checkoutError: Object(prop_types["instanceOf"])(CheckoutPage_CheckoutError),
  resetShouldSubmit: prop_types["func"].isRequired,
  shouldSubmit: prop_types["bool"]
};

var paymentInformation_c, paymentInformation_c2, paymentInformation_c3, _c4, _c5, _c6, _c7;

$RefreshReg$(paymentInformation_c, "PaymentMethods$React.lazy");
$RefreshReg$(paymentInformation_c2, "PaymentMethods");
$RefreshReg$(paymentInformation_c3, "EditModal$React.lazy");
$RefreshReg$(_c4, "EditModal");
$RefreshReg$(_c5, "Summary$React.lazy");
$RefreshReg$(_c6, "Summary");
$RefreshReg$(_c7, "PaymentInformation");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethodCollection.js
var paymentMethodCollection = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethodCollection.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js + 2 modules
var accordion = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Accordion/section.js + 1 modules
var section = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Accordion/section.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js + 2 modules
var couponCode = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/giftCardSection.js
var giftCardSection = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/giftCardSection.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.js + 3 modules
var giftOptions = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PriceAdjustments/priceAdjustments.css
var priceAdjustments = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PriceAdjustments/priceAdjustments.css");
var priceAdjustments_default = /*#__PURE__*/__webpack_require__.n(priceAdjustments);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PriceAdjustments/priceAdjustments.css

            

var priceAdjustments_options = {"injectType":"styleTag"};

priceAdjustments_options.insert = "head";
priceAdjustments_options.singleton = false;

var priceAdjustments_update = injectStylesIntoStyleTag_default()(priceAdjustments_default.a, priceAdjustments_options);



/* harmony default export */ var PriceAdjustments_priceAdjustments = (priceAdjustments_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PriceAdjustments/priceAdjustments.js
var priceAdjustments_s = $RefreshSig$();










/**
 * PriceAdjustments component for the Checkout page.

 * @param {Function} props.setPageIsUpdating callback that sets checkout page updating state
 */

const PriceAdjustments = props => {
  priceAdjustments_s();

  const classes = Object(shallowMerge["a" /* default */])(PriceAdjustments_priceAdjustments, props.classes);
  const {
    setPageIsUpdating
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(accordion["a" /* default */], {
    canOpenMultiple: true
  }, react_default.a.createElement(section["a" /* default */], {
    id: 'coupon_code',
    title: formatMessage({
      id: 'checkoutPage.couponCode',
      defaultMessage: 'Enter Coupon Code'
    })
  }, react_default.a.createElement(couponCode["a" /* default */], {
    setIsCartUpdating: setPageIsUpdating
  })), react_default.a.createElement(giftCardSection["a" /* default */], {
    setIsCartUpdating: setPageIsUpdating
  }), react_default.a.createElement(section["a" /* default */], {
    id: 'gift_options',
    title: formatMessage({
      id: 'checkoutPage.giftOptions',
      defaultMessage: 'See Gift Options'
    })
  }, react_default.a.createElement(giftOptions["a" /* default */], null))));
};

priceAdjustments_s(PriceAdjustments, "VxVnK37plYgXvLp7c0yHActoCwA=", false, function () {
  return [shallowMerge["a" /* default */], useIntl["a" /* default */]];
});

priceAdjustments_c = PriceAdjustments;
/* harmony default export */ var CheckoutPage_PriceAdjustments_priceAdjustments = (PriceAdjustments);
PriceAdjustments.propTypes = {
  setPageIsUpdating: prop_types["func"]
};

var priceAdjustments_c;

$RefreshReg$(priceAdjustments_c, "PriceAdjustments");
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/useShippingMethod.js
var useShippingMethod_s = $RefreshSig$();

function useShippingMethod_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { useShippingMethod_defineProperty(target, key, source[key]); }); } return target; }

function useShippingMethod_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const displayStates = {
  DONE: 'done',
  EDITING: 'editing',
  INITIALIZING: 'initializing'
};

const serializeShippingMethod = method => {
  const {
    carrier_code,
    method_code
  } = method;
  return `${carrier_code}|${method_code}`;
};

const deserializeShippingMethod = serializedValue => {
  return serializedValue.split('|');
}; // Sorts available shipping methods by price.


const byPrice = (a, b) => a.amount.value - b.amount.value; // Adds a serialized property to shipping method objects
// so they can be selected in the radio group.


const addSerializedProperty = shippingMethod => {
  if (!shippingMethod) return shippingMethod;
  const serializedValue = serializeShippingMethod(shippingMethod);
  return useShippingMethod_objectSpread({}, shippingMethod, {
    serializedValue
  });
};

const DEFAULT_SELECTED_SHIPPING_METHOD = null;
const DEFAULT_AVAILABLE_SHIPPING_METHODS = [];
const useShippingMethod = props => {
  useShippingMethod_s();

  const {
    onSave,
    onSuccess,
    mutations: {
      setShippingMethod
    },
    queries: {
      getSelectedAndAvailableShippingMethods
    },
    setPageIsUpdating
  } = props;
  const [{
    cartId
  }] = Object(context_cart["b" /* useCartContext */])();
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  /*
   *  Apollo Hooks.
   */

  const [setShippingMethodCall, {
    error: setShippingMethodError,
    loading: isSettingShippingMethod
  }] = Object(_apollo_client["useMutation"])(setShippingMethod, {
    onCompleted: () => {
      onSuccess();
    }
  });
  const {
    data,
    loading: isLoadingShippingMethods
  } = Object(_apollo_client["useQuery"])(getSelectedAndAvailableShippingMethods, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !cartId,
    variables: {
      cartId
    }
  });
  /*
   *  State / Derived state.
   */

  const [isUpdateMode, setIsUpdateMode] = Object(react["useState"])(false);
  const hasData = data && data.cart.shipping_addresses.length && data.cart.shipping_addresses[0].selected_shipping_method;
  const derivedPrimaryShippingAddress = data && data.cart.shipping_addresses && data.cart.shipping_addresses.length ? data.cart.shipping_addresses[0] : null;
  const derivedSelectedShippingMethod = derivedPrimaryShippingAddress ? addSerializedProperty(derivedPrimaryShippingAddress.selected_shipping_method) : DEFAULT_SELECTED_SHIPPING_METHOD;
  const derivedShippingMethods = Object(react["useMemo"])(() => {
    if (!derivedPrimaryShippingAddress) return DEFAULT_AVAILABLE_SHIPPING_METHODS; // Shape the list of available shipping methods.
    // Sort them by price and add a serialized property to each.

    const rawShippingMethods = derivedPrimaryShippingAddress.available_shipping_methods;
    const shippingMethodsByPrice = [...rawShippingMethods].sort(byPrice);
    const result = shippingMethodsByPrice.map(addSerializedProperty);
    return result;
  }, [derivedPrimaryShippingAddress]); // Determine the component's display state.

  const isBackgroundAutoSelecting = isSignedIn && !derivedSelectedShippingMethod && Boolean(derivedShippingMethods.length);
  const displayState = derivedSelectedShippingMethod ? displayStates.DONE : isLoadingShippingMethods || isSettingShippingMethod && isBackgroundAutoSelecting ? displayStates.INITIALIZING : displayStates.EDITING;
  /*
   *  Callbacks.
   */

  const handleSubmit = Object(react["useCallback"])(async value => {
    const [carrierCode, methodCode] = deserializeShippingMethod(value.shipping_method);

    try {
      await setShippingMethodCall({
        variables: {
          cartId,
          shippingMethod: {
            carrier_code: carrierCode,
            method_code: methodCode
          }
        }
      });
    } catch {
      return;
    }

    setIsUpdateMode(false);
  }, [cartId, setIsUpdateMode, setShippingMethodCall]);
  const handleCancelUpdate = Object(react["useCallback"])(() => {
    setIsUpdateMode(false);
  }, []);
  const showUpdateMode = Object(react["useCallback"])(() => {
    setIsUpdateMode(true);
  }, []);
  /*
   *  Effects.
   */
  // When we have data we should tell the checkout page
  // so that it can set the step correctly.

  Object(react["useEffect"])(() => {
    if (hasData) {
      onSave();
    }
  }, [hasData, onSave]);
  Object(react["useEffect"])(() => {
    setPageIsUpdating(isSettingShippingMethod);
  }, [isLoadingShippingMethods, isSettingShippingMethod, setPageIsUpdating]); // If an authenticated user does not have a preferred shipping method,
  // auto-select the least expensive one for them.

  Object(react["useEffect"])(() => {
    if (!data) return;
    if (!cartId) return;
    if (!isSignedIn) return;

    if (!derivedSelectedShippingMethod) {
      // The shipping methods are sorted by price.
      const leastExpensiveShippingMethod = derivedShippingMethods[0];

      if (leastExpensiveShippingMethod) {
        const {
          carrier_code,
          method_code
        } = leastExpensiveShippingMethod;
        setShippingMethodCall({
          variables: {
            cartId,
            shippingMethod: {
              carrier_code,
              method_code
            }
          }
        });
      }
    }
  }, [cartId, data, derivedSelectedShippingMethod, derivedShippingMethods, isSignedIn, setShippingMethodCall]);
  const errors = Object(react["useMemo"])(() => new Map([['setShippingMethod', setShippingMethodError]]), [setShippingMethodError]);
  return {
    displayState,
    errors,
    handleCancelUpdate,
    handleSubmit,
    isLoading: isLoadingShippingMethods || isSettingShippingMethod,
    isUpdateMode,
    selectedShippingMethod: derivedSelectedShippingMethod,
    shippingMethods: derivedShippingMethods,
    showUpdateMode
  };
};

useShippingMethod_s(useShippingMethod, "Hc0Rir6o2Co1W+7yAxFPLXhhr2A=", false, function () {
  return [context_cart["b" /* useCartContext */], user["b" /* useUserContext */], _apollo_client["useMutation"], _apollo_client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/completedView.css
var completedView = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/completedView.css");
var completedView_default = /*#__PURE__*/__webpack_require__.n(completedView);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/completedView.css

            

var completedView_options = {"injectType":"styleTag"};

completedView_options.insert = "head";
completedView_options.singleton = false;

var completedView_update = injectStylesIntoStyleTag_default()(completedView_default.a, completedView_options);



/* harmony default export */ var ShippingMethod_completedView = (completedView_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/completedView.js
var completedView_s = $RefreshSig$();











const CompletedView = props => {
  completedView_s();

  const {
    selectedShippingMethod,
    showUpdateMode
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(ShippingMethod_completedView, props.classes);
  let contents;

  if (!selectedShippingMethod) {
    // Error state.
    contents = react_default.a.createElement("span", {
      className: classes.error
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'completedView.errorLoading',
      defaultMessage: 'Error loading selected shipping method. Please select again.'
    }));
  } else {
    const {
      amount,
      method_title
    } = selectedShippingMethod;
    const {
      currency,
      value
    } = amount;
    const priceElement = value ? react_default.a.createElement("div", null, react_default.a.createElement(price["a" /* default */], {
      value: value,
      currencyCode: currency
    })) : react_default.a.createElement("span", {
      className: classes.free
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'global.free',
      defaultMessage: 'Free'
    }));
    contents = react_default.a.createElement("div", {
      className: classes.contents
    }, react_default.a.createElement("span", null, method_title), priceElement);
  }

  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.container
  }, react_default.a.createElement("span", {
    className: classes.titleContainer
  }, react_default.a.createElement("h5", {
    className: classes.heading
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'completedView.shippingMethod',
    defaultMessage: 'Shipping Method'
  })), react_default.a.createElement(linkButton["a" /* default */], {
    className: classes.editButton,
    onClick: showUpdateMode
  }, react_default.a.createElement(icon["a" /* default */], {
    size: 16,
    src: edit_2["a" /* default */],
    classes: {
      icon: classes.editIcon
    }
  }), react_default.a.createElement("span", {
    className: classes.editButtonText
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'global.editButton',
    defaultMessage: 'Edit'
  })))), contents));
};

completedView_s(CompletedView, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

completedView_c = CompletedView;
/* harmony default export */ var CheckoutPage_ShippingMethod_completedView = (CompletedView);
CompletedView.propTypes = {
  classes: Object(prop_types["shape"])({
    button: prop_types["string"],
    container: prop_types["string"],
    contents: prop_types["string"],
    editButton: prop_types["string"],
    editButtonText: prop_types["string"],
    editIcon: prop_types["string"],
    error: prop_types["string"],
    free: prop_types["string"],
    heading: prop_types["string"],
    root: prop_types["string"],
    titleContainer: prop_types["string"]
  }),
  selectedShippingMethod: Object(prop_types["shape"])({
    amount: Object(prop_types["shape"])({
      currency: prop_types["string"],
      value: prop_types["number"]
    }),
    carrier_code: prop_types["string"],
    carrier_title: prop_types["string"],
    method_code: prop_types["string"],
    method_title: prop_types["string"]
  }),
  showUpdateMode: prop_types["func"]
};

var completedView_c;

$RefreshReg$(completedView_c, "CompletedView");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.js + 1 modules
var radioGroup = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadio.js + 1 modules
var shippingRadio = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingRadio.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingRadios.css
var ShippingMethod_shippingRadios = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingRadios.css");
var shippingRadios_default = /*#__PURE__*/__webpack_require__.n(ShippingMethod_shippingRadios);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingRadios.css

            

var shippingRadios_options = {"injectType":"styleTag"};

shippingRadios_options.insert = "head";
shippingRadios_options.singleton = false;

var shippingRadios_update = injectStylesIntoStyleTag_default()(shippingRadios_default.a, shippingRadios_options);



/* harmony default export */ var CheckoutPage_ShippingMethod_shippingRadios = (shippingRadios_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingRadios.js
var shippingRadios_s = $RefreshSig$();









const ShippingRadios = props => {
  shippingRadios_s();

  const {
    disabled,
    shippingMethods
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(CheckoutPage_ShippingMethod_shippingRadios, props.classes);
  const ERROR_MESSAGE = formatMessage({
    id: 'shippingRadios.errorLoading',
    defaultMessage: 'Error loading shipping methods. Please ensure a shipping address is set and try again.'
  });

  if (!shippingMethods.length) {
    return react_default.a.createElement("span", {
      className: classes.error
    }, ERROR_MESSAGE);
  }

  const radioGroupClasses = {
    message: classes.radioMessage,
    radioLabel: classes.radioLabel,
    root: classes.radioRoot
  };
  const shippingRadios = shippingMethods.map(method => {
    const label = react_default.a.createElement(shippingRadio["a" /* default */], {
      currency: method.amount.currency,
      name: method.method_title,
      price: method.amount.value
    });
    const value = method.serializedValue;
    return {
      label,
      value
    };
  });
  return react_default.a.createElement(radioGroup["a" /* default */], {
    classes: radioGroupClasses,
    disabled: disabled,
    field: "shipping_method",
    id: 'shippingMethod',
    items: shippingRadios
  });
};

shippingRadios_s(ShippingRadios, "6HbKEGM4/yt1mWqe8hniFTWRimA=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

shippingRadios_c = ShippingRadios;
/* harmony default export */ var components_CheckoutPage_ShippingMethod_shippingRadios = (ShippingRadios);
ShippingRadios.propTypes = {
  classes: Object(prop_types["shape"])({
    error: prop_types["string"],
    radioMessage: prop_types["string"],
    radioLabel: prop_types["string"],
    radioRoot: prop_types["string"]
  }),
  disabled: prop_types["bool"],
  shippingMethods: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    amount: Object(prop_types["shape"])({
      currency: prop_types["string"],
      value: prop_types["number"]
    }),
    available: prop_types["bool"],
    carrier_code: prop_types["string"],
    carrier_title: prop_types["string"],
    method_code: prop_types["string"],
    method_title: prop_types["string"],
    serializedValue: prop_types["string"].isRequired
  })).isRequired
};

var shippingRadios_c;

$RefreshReg$(shippingRadios_c, "ShippingRadios");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js + 1 modules
var dialog = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/updateModal.css
var updateModal = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/updateModal.css");
var updateModal_default = /*#__PURE__*/__webpack_require__.n(updateModal);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/updateModal.css

            

var updateModal_options = {"injectType":"styleTag"};

updateModal_options.insert = "head";
updateModal_options.singleton = false;

var updateModal_update = injectStylesIntoStyleTag_default()(updateModal_default.a, updateModal_options);



/* harmony default export */ var ShippingMethod_updateModal = (updateModal_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/updateModal.js
var updateModal_s = $RefreshSig$();










const UpdateModal = props => {
  updateModal_s();

  const {
    classes: propClasses,
    formErrors,
    formInitialValues,
    handleCancel,
    handleSubmit,
    isLoading,
    isOpen,
    pageIsUpdating,
    shippingMethods
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const dialogButtonsDisabled = pageIsUpdating;
  const dialogSubmitButtonDisabled = isLoading;
  const dialogFormProps = {
    initialValues: formInitialValues
  };
  const classes = Object(shallowMerge["a" /* default */])(ShippingMethod_updateModal, propClasses);
  return react_default.a.createElement(dialog["a" /* default */], {
    confirmText: 'Update',
    confirmTranslationId: 'global.updateButton',
    formProps: dialogFormProps,
    isOpen: isOpen,
    onCancel: handleCancel,
    onConfirm: handleSubmit,
    shouldDisableAllButtons: dialogButtonsDisabled,
    shouldDisableConfirmButton: dialogSubmitButtonDisabled,
    shouldUnmountOnHide: false,
    title: formatMessage({
      id: 'checkoutPage.editShippingMethod',
      defaultMessage: 'Edit Shipping Method'
    })
  }, react_default.a.createElement(formError["a" /* default */], {
    classes: {
      root: classes.errorContainer
    },
    errors: formErrors
  }), react_default.a.createElement(components_CheckoutPage_ShippingMethod_shippingRadios, {
    disabled: dialogButtonsDisabled,
    shippingMethods: shippingMethods
  }));
};

updateModal_s(UpdateModal, "6HbKEGM4/yt1mWqe8hniFTWRimA=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

updateModal_c = UpdateModal;
/* harmony default export */ var CheckoutPage_ShippingMethod_updateModal = (UpdateModal);
UpdateModal.propTypes = {
  formInitialValues: prop_types["object"],
  handleCancel: prop_types["func"],
  handleSubmit: prop_types["func"],
  isLoading: prop_types["bool"],
  isOpen: prop_types["bool"],
  pageIsUpdating: prop_types["bool"],
  shippingMethods: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    amount: Object(prop_types["shape"])({
      currency: prop_types["string"],
      value: prop_types["number"]
    }),
    available: prop_types["bool"],
    carrier_code: prop_types["string"],
    carrier_title: prop_types["string"],
    method_code: prop_types["string"],
    method_title: prop_types["string"],
    serializedValue: prop_types["string"].isRequired
  }))
};

var updateModal_c;

$RefreshReg$(updateModal_c, "UpdateModal");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethod.css
var ShippingMethod_shippingMethod = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethod.css");
var shippingMethod_default = /*#__PURE__*/__webpack_require__.n(ShippingMethod_shippingMethod);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethod.css

            

var shippingMethod_options = {"injectType":"styleTag"};

shippingMethod_options.insert = "head";
shippingMethod_options.singleton = false;

var shippingMethod_update = injectStylesIntoStyleTag_default()(shippingMethod_default.a, shippingMethod_options);



/* harmony default export */ var CheckoutPage_ShippingMethod_shippingMethod = (shippingMethod_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js + 4 modules
var priceSummaryFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js
var shippingInformationFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformationFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethodFragments.gql.js
var shippingMethodFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethodFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethod.gql.js




const GET_SELECTED_AND_AVAILABLE_SHIPPING_METHODS = _apollo_client["gql"]`
    query getSelectedAndAvailableShippingMethods($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...AvailableShippingMethodsCheckoutFragment
            ...SelectedShippingMethodCheckoutFragment
            # We include the following fragments to avoid extra requeries
            # after this mutation completes. This all comes down to not
            # having ids for shipping address objects. With ids we could
            # merge results.
            ...ShippingInformationFragment
        }
    }
    ${shippingMethodFragments_gql["a" /* AvailableShippingMethodsCheckoutFragment */]}
    ${shippingMethodFragments_gql["b" /* SelectedShippingMethodCheckoutFragment */]}
    ${shippingInformationFragments_gql["a" /* ShippingInformationFragment */]}
`;
const SET_SHIPPING_METHOD = _apollo_client["gql"]`
    mutation SetShippingMethod(
        $cartId: String!
        $shippingMethod: ShippingMethodInput!
    ) {
        setShippingMethodsOnCart(
            input: { cart_id: $cartId, shipping_methods: [$shippingMethod] }
        ) @connection(key: "setShippingMethodsOnCart") {
            cart {
                id
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
                ...SelectedShippingMethodCheckoutFragment
                ...PriceSummaryFragment
                # We include the following fragments to avoid extra requeries
                # after this mutation completes. This all comes down to not
                # having ids for shipping address objects. With ids we could
                # merge results.
                ...ShippingInformationFragment
                ...AvailableShippingMethodsCheckoutFragment
            }
        }
    }
    ${shippingMethodFragments_gql["a" /* AvailableShippingMethodsCheckoutFragment */]}
    ${shippingMethodFragments_gql["b" /* SelectedShippingMethodCheckoutFragment */]}
    ${priceSummaryFragments_gql["a" /* PriceSummaryFragment */]}
    ${shippingInformationFragments_gql["a" /* ShippingInformationFragment */]}
`;
/* harmony default export */ var shippingMethod_gql = ({
  mutations: {
    setShippingMethod: SET_SHIPPING_METHOD
  },
  queries: {
    getSelectedAndAvailableShippingMethods: GET_SELECTED_AND_AVAILABLE_SHIPPING_METHODS
  }
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethod.js
var shippingMethod_s = $RefreshSig$();

function shippingMethod_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { shippingMethod_defineProperty(target, key, source[key]); }); } return target; }

function shippingMethod_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const initializingContents = react_default.a.createElement(indicator["a" /* default */], null, react_default.a.createElement(components_message["a" /* default */], {
  id: 'shippingMethod.loading',
  defaultMessage: 'Loading shipping methods...'
}));

const ShippingMethod = props => {
  shippingMethod_s();

  const {
    onSave,
    onSuccess,
    pageIsUpdating,
    setPageIsUpdating
  } = props;
  const talonProps = useShippingMethod(shippingMethod_objectSpread({
    onSave,
    onSuccess,
    setPageIsUpdating
  }, shippingMethod_gql));
  const {
    displayState,
    errors,
    handleCancelUpdate,
    handleSubmit,
    isLoading,
    isUpdateMode,
    selectedShippingMethod,
    shippingMethods,
    showUpdateMode
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(CheckoutPage_ShippingMethod_shippingMethod, props.classes);
  let contents;

  if (displayState === displayStates.DONE) {
    const updateFormInitialValues = {
      shipping_method: selectedShippingMethod.serializedValue
    };
    contents = react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
      className: classes.done
    }, react_default.a.createElement(CheckoutPage_ShippingMethod_completedView, {
      selectedShippingMethod: selectedShippingMethod,
      showUpdateMode: showUpdateMode
    })), react_default.a.createElement(CheckoutPage_ShippingMethod_updateModal, {
      formErrors: Array.from(errors.values()),
      formInitialValues: updateFormInitialValues,
      handleCancel: handleCancelUpdate,
      handleSubmit: handleSubmit,
      isLoading: isLoading,
      isOpen: isUpdateMode,
      pageIsUpdating: pageIsUpdating,
      shippingMethods: shippingMethods
    }));
  } else {
    // We're either initializing or editing.
    let bodyContents = initializingContents;

    if (displayState === displayStates.EDITING) {
      const lowestCostShippingMethodSerializedValue = shippingMethods.length ? shippingMethods[0].serializedValue : '';
      const lowestCostShippingMethod = {
        shipping_method: lowestCostShippingMethodSerializedValue
      };
      bodyContents = react_default.a.createElement(esm["c" /* Form */], {
        className: classes.form,
        initialValues: lowestCostShippingMethod,
        onSubmit: handleSubmit
      }, react_default.a.createElement(components_CheckoutPage_ShippingMethod_shippingRadios, {
        disabled: pageIsUpdating || isLoading,
        shippingMethods: shippingMethods
      }), react_default.a.createElement("div", {
        className: classes.formButtons
      }, react_default.a.createElement(Button_button["a" /* default */], {
        priority: "normal",
        type: "submit",
        disabled: pageIsUpdating || isLoading
      }, react_default.a.createElement(components_message["a" /* default */], {
        id: 'shippingMethod.continueToNextStep',
        defaultMessage: 'Continue to Payment Information'
      }))));
    }

    contents = react_default.a.createElement("div", {
      className: classes.root
    }, react_default.a.createElement("h3", {
      className: classes.editingHeading
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'shippingMethod.heading',
      defaultMessage: 'Shipping Method'
    })), react_default.a.createElement(formError["a" /* default */], {
      errors: Array.from(errors.values())
    }), bodyContents);
  }

  return react_default.a.createElement(react["Fragment"], null, contents);
};

shippingMethod_s(ShippingMethod, "V0wGE0Q3oQCbdgkziV55Cts1U9Q=", false, function () {
  return [useShippingMethod, shallowMerge["a" /* default */]];
});

shippingMethod_c = ShippingMethod;
ShippingMethod.propTypes = {
  classes: Object(prop_types["shape"])({
    done: prop_types["string"],
    editingHeading: prop_types["string"],
    form: prop_types["string"],
    formButtons: prop_types["string"],
    root: prop_types["string"]
  }),
  onSave: prop_types["func"].isRequired,
  onSuccess: prop_types["func"].isRequired,
  pageIsUpdating: prop_types["bool"],
  setPageIsUpdating: prop_types["func"].isRequired
};
/* harmony default export */ var components_CheckoutPage_ShippingMethod_shippingMethod = (ShippingMethod);

var shippingMethod_c;

$RefreshReg$(shippingMethod_c, "ShippingMethod");
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm.js
var useShippingForm = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/ShippingInformation/useShippingInformation.js
var useShippingInformation_s = $RefreshSig$();

function useShippingInformation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { useShippingInformation_defineProperty(target, key, source[key]); }); } return target; }

function useShippingInformation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const useShippingInformation = props => {
  useShippingInformation_s();

  const {
    mutations: {
      setDefaultAddressOnCartMutation
    },
    onSave,
    queries: {
      getDefaultShippingQuery,
      getShippingInformationQuery
    },
    toggleActiveContent
  } = props;
  const [, {
    toggleDrawer
  }] = Object(app["b" /* useAppContext */])();
  const [{
    cartId
  }] = Object(context_cart["b" /* useCartContext */])();
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  const [hasUpdate, setHasUpdate] = Object(react["useState"])(false);
  const hasLoadedData = Object(react["useRef"])(false);
  const {
    data: shippingInformationData,
    loading: getShippingInformationLoading
  } = Object(_apollo_client["useQuery"])(getShippingInformationQuery, {
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const {
    data: defaultShippingData,
    loading: getDefaultShippingLoading
  } = Object(_apollo_client["useQuery"])(getDefaultShippingQuery, {
    skip: !isSignedIn
  });
  const [setDefaultAddressOnCart, {
    loading: setDefaultAddressLoading
  }] = Object(_apollo_client["useMutation"])(setDefaultAddressOnCartMutation);
  const isLoading = getShippingInformationLoading || getDefaultShippingLoading || setDefaultAddressLoading;
  const shippingData = Object(react["useMemo"])(() => {
    let filteredData;

    if (shippingInformationData) {
      const {
        cart
      } = shippingInformationData;
      const {
        email,
        shipping_addresses: shippingAddresses
      } = cart;

      if (shippingAddresses.length) {
        const primaryAddress = useShippingInformation_objectSpread({}, shippingAddresses[0]);

        for (const field in useShippingForm["a" /* MOCKED_ADDRESS */]) {
          if (primaryAddress[field] === useShippingForm["a" /* MOCKED_ADDRESS */][field]) {
            primaryAddress[field] = '';
          }

          if (field === 'street' && primaryAddress[field][0] === useShippingForm["a" /* MOCKED_ADDRESS */][field][0]) {
            primaryAddress[field] = [''];
          }
        }

        const {
          region_id,
          label: region,
          code: region_code
        } = primaryAddress.region;
        primaryAddress.region = {
          region_code,
          region_id,
          region
        };
        filteredData = useShippingInformation_objectSpread({
          email
        }, primaryAddress);
      }
    }

    return filteredData;
  }, [shippingInformationData]); // Simple heuristic to check shipping data existed prior to this render.
  // On first submission, when we have data, we should tell the checkout page
  // so that we set the next step correctly.

  const doneEditing = !!shippingData && !!shippingData.city;
  Object(react["useEffect"])(() => {
    if (doneEditing) {
      onSave();
    }
  }, [doneEditing, onSave]);
  Object(react["useEffect"])(() => {
    let updateTimer;

    if (shippingData !== undefined) {
      if (hasLoadedData.current) {
        setHasUpdate(true);
        updateTimer = setTimeout(() => {
          setHasUpdate(false);
        }, 2000);
      } else {
        hasLoadedData.current = true;
      }
    }

    return () => {
      if (updateTimer) {
        clearTimeout(updateTimer);
      }
    };
  }, [hasLoadedData, shippingData]);
  Object(react["useEffect"])(() => {
    if (shippingInformationData && !doneEditing && cartId && defaultShippingData) {
      const {
        customer
      } = defaultShippingData;
      const {
        default_shipping: defaultAddressId
      } = customer;

      if (defaultAddressId) {
        setDefaultAddressOnCart({
          variables: {
            cartId,
            addressId: parseInt(defaultAddressId)
          }
        });
      }
    }
  }, [cartId, doneEditing, defaultShippingData, setDefaultAddressOnCart, shippingInformationData]);
  const handleEditShipping = Object(react["useCallback"])(() => {
    if (isSignedIn) {
      toggleActiveContent();
    } else {
      toggleDrawer('shippingInformation.edit');
    }
  }, [isSignedIn, toggleActiveContent, toggleDrawer]);
  return {
    doneEditing,
    handleEditShipping,
    hasUpdate,
    isLoading,
    isSignedIn,
    shippingData
  };
};

useShippingInformation_s(useShippingInformation, "/Kbn9xrIbXX5G+Y0Bh1hgBvn+8s=", false, function () {
  return [app["b" /* useAppContext */], context_cart["b" /* useCartContext */], user["b" /* useUserContext */], _apollo_client["useQuery"], _apollo_client["useQuery"], _apollo_client["useMutation"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js + 8 modules
var addressForm = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/card.css
var card = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/card.css");
var card_default = /*#__PURE__*/__webpack_require__.n(card);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/card.css

            

var card_options = {"injectType":"styleTag"};

card_options.insert = "head";
card_options.singleton = false;

var card_update = injectStylesIntoStyleTag_default()(card_default.a, card_options);



/* harmony default export */ var ShippingInformation_card = (card_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/card.js
var card_s = $RefreshSig$();






const Card = props => {
  card_s();

  const {
    classes: propClasses,
    shippingData
  } = props;
  const {
    city,
    country: {
      label: country
    },
    email,
    firstname,
    lastname,
    postcode,
    region: {
      region
    },
    street,
    telephone
  } = shippingData;
  const streetRows = street.map((row, index) => {
    return react_default.a.createElement("span", {
      key: index
    }, row);
  });
  const classes = Object(shallowMerge["a" /* default */])(ShippingInformation_card, propClasses);
  const nameString = `${firstname} ${lastname}`;
  const additionalAddressString = `${city}, ${region} ${postcode} ${country}`;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("span", null, email), react_default.a.createElement("span", null, nameString), react_default.a.createElement("span", null, telephone), react_default.a.createElement("div", {
    className: classes.address
  }, streetRows, react_default.a.createElement("span", null, additionalAddressString)));
};

card_s(Card, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

card_c = Card;
/* harmony default export */ var CheckoutPage_ShippingInformation_card = (Card);
Card.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    address: prop_types["string"],
    area: prop_types["string"]
  }),
  shippingData: Object(prop_types["shape"])({
    city: prop_types["string"].isRequired,
    country: Object(prop_types["shape"])({
      label: prop_types["string"].isRequired
    }).isRequired,
    email: prop_types["string"].isRequired,
    firstname: prop_types["string"].isRequired,
    lastname: prop_types["string"].isRequired,
    postcode: prop_types["string"].isRequired,
    region: Object(prop_types["shape"])({
      region: prop_types["string"].isRequired
    }).isRequired,
    street: Object(prop_types["arrayOf"])(prop_types["string"]).isRequired,
    telephone: prop_types["string"].isRequired
  }).isRequired
};

var card_c;

$RefreshReg$(card_c, "Card");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.css
var ShippingInformation_shippingInformation = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.css");
var shippingInformation_default = /*#__PURE__*/__webpack_require__.n(ShippingInformation_shippingInformation);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.css

            

var shippingInformation_options = {"injectType":"styleTag"};

shippingInformation_options.insert = "head";
shippingInformation_options.singleton = false;

var shippingInformation_update = injectStylesIntoStyleTag_default()(shippingInformation_default.a, shippingInformation_options);



/* harmony default export */ var CheckoutPage_ShippingInformation_shippingInformation = (shippingInformation_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.gql.js
var shippingInformation_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.js
var shippingInformation_s = $RefreshSig$();

function shippingInformation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { shippingInformation_defineProperty(target, key, source[key]); }); } return target; }

function shippingInformation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const shippingInformation_EditModal = react_default.a.lazy(shippingInformation_c = () => __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./editModal */ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js")));
shippingInformation_c2 = shippingInformation_EditModal;

const ShippingInformation = props => {
  shippingInformation_s();

  const {
    classes: propClasses,
    onSave,
    onSuccess,
    toggleActiveContent
  } = props;
  const talonProps = useShippingInformation(shippingInformation_objectSpread({
    onSave,
    toggleActiveContent
  }, shippingInformation_gql["c" /* default */]));
  const {
    doneEditing,
    handleEditShipping,
    hasUpdate,
    isSignedIn,
    isLoading,
    shippingData
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(CheckoutPage_ShippingInformation_shippingInformation, propClasses);
  const rootClassName = !doneEditing ? classes.root_editMode : hasUpdate ? classes.root_updated : classes.root;

  if (isLoading) {
    return react_default.a.createElement(indicator["a" /* default */], {
      classes: {
        root: classes.loading
      }
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'shippingInformation.loading',
      defaultMessage: 'Fetching Shipping Information...'
    }));
  }

  const editModal = !isSignedIn ? react_default.a.createElement(react["Suspense"], {
    fallback: null
  }, react_default.a.createElement(shippingInformation_EditModal, {
    onSuccess: onSuccess,
    shippingData: shippingData
  })) : null;
  const shippingInformation = doneEditing ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: classes.cardHeader
  }, react_default.a.createElement("h5", {
    className: classes.cardTitle
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'shippingInformation.cardTitle',
    defaultMessage: 'Shipping Information'
  })), react_default.a.createElement(linkButton["a" /* default */], {
    onClick: handleEditShipping,
    className: classes.editButton
  }, react_default.a.createElement(icon["a" /* default */], {
    size: 16,
    src: edit_2["a" /* default */],
    classes: {
      icon: classes.editIcon
    }
  }), react_default.a.createElement("span", {
    className: classes.editText
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'global.editButton',
    defaultMessage: 'Edit'
  })))), react_default.a.createElement(CheckoutPage_ShippingInformation_card, {
    shippingData: shippingData
  }), editModal) : react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h3", {
    className: classes.editTitle
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'shippingInformation.editTitle',
    defaultMessage: '1. Shipping Information'
  })), react_default.a.createElement("div", {
    className: classes.editWrapper
  }, react_default.a.createElement(addressForm["a" /* default */], {
    onSuccess: onSuccess,
    shippingData: shippingData
  })));
  return react_default.a.createElement("div", {
    className: rootClassName
  }, shippingInformation);
};

shippingInformation_s(ShippingInformation, "WdQgQgZGMbDIe1ZP/NCXyrUIrVw=", false, function () {
  return [useShippingInformation, shallowMerge["a" /* default */]];
});

shippingInformation_c3 = ShippingInformation;
/* harmony default export */ var components_CheckoutPage_ShippingInformation_shippingInformation = (ShippingInformation);
ShippingInformation.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_editMode: prop_types["string"],
    cardHeader: prop_types["string"],
    cartTitle: prop_types["string"],
    editWrapper: prop_types["string"],
    editTitle: prop_types["string"],
    editButton: prop_types["string"],
    editIcon: prop_types["string"],
    editText: prop_types["string"]
  }),
  onSave: prop_types["func"].isRequired,
  onSuccess: prop_types["func"].isRequired,
  toggleActiveContent: prop_types["func"].isRequired
};

var shippingInformation_c, shippingInformation_c2, shippingInformation_c3;

$RefreshReg$(shippingInformation_c, "EditModal$React.lazy");
$RefreshReg$(shippingInformation_c2, "EditModal");
$RefreshReg$(shippingInformation_c3, "ShippingInformation");
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/OrderConfirmationPage/useOrderConfirmationPage.js
var useOrderConfirmationPage_s = $RefreshSig$();


const flatten = data => {
  const {
    cart
  } = data;
  const {
    shipping_addresses
  } = cart;
  const address = shipping_addresses[0];
  const shippingMethod = `${address.selected_shipping_method.carrier_title} - ${address.selected_shipping_method.method_title}`;
  return {
    city: address.city,
    country: address.country.label,
    email: cart.email,
    firstname: address.firstname,
    lastname: address.lastname,
    postcode: address.postcode,
    region: address.region.label,
    shippingMethod,
    street: address.street,
    totalItemQuantity: cart.total_quantity
  };
};
const useOrderConfirmationPage = props => {
  useOrderConfirmationPage_s();

  const {
    data
  } = props;
  const [{
    isSignedIn
  }] = Object(user["b" /* useUserContext */])();
  return {
    flatData: flatten(data),
    isSignedIn
  };
};

useOrderConfirmationPage_s(useOrderConfirmationPage, "7umwKFzHqPRzRhvhlZUOTtDHOW8=", false, function () {
  return [user["b" /* useUserContext */]];
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/useAwaitQuery.js
var useAwaitQuery = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/useAwaitQuery.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/OrderConfirmationPage/createAccount.gql.js

const CREATE_ACCOUNT = _apollo_client["gql"]`
    mutation CreateAccountAfterCheckout(
        $email: String!
        $firstname: String!
        $lastname: String!
        $password: String!
        $is_subscribed: Boolean!
    ) {
        createCustomer(
            input: {
                email: $email
                firstname: $firstname
                lastname: $lastname
                password: $password
                is_subscribed: $is_subscribed
            }
        ) {
            # The createCustomer mutation returns a non-nullable CustomerOutput type
            # which requires that at least one of the sub fields be returned.
            customer {
                id
            }
        }
    }
`;
const createAccount_gql_GET_CUSTOMER = _apollo_client["gql"]`
    query GetCustomerAfterCheckout {
        customer {
            id
            email
            firstname
            lastname
            is_subscribed
        }
    }
`;
const SIGN_IN = _apollo_client["gql"]`
    mutation SignInAfterCheckout($email: String!, $password: String!) {
        generateCustomerToken(email: $email, password: $password) {
            token
        }
    }
`;
const createAccount_gql_CREATE_CART = _apollo_client["gql"]`
    mutation CreateCartAfterCheckout {
        cartId: createEmptyCart
    }
`;
const GET_CART_DETAILS = _apollo_client["gql"]`
    query GetCartDetailsAfterCheckout($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            items {
                id
                prices {
                    price {
                        value
                    }
                }
                product {
                    id
                    name
                    sku
                    small_image {
                        url
                        label
                    }
                    price {
                        regularPrice {
                            amount {
                                value
                            }
                        }
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
            prices {
                grand_total {
                    value
                    currency
                }
            }
        }
    }
`;
/* harmony default export */ var createAccount_gql = ({
  createAccountMutation: CREATE_ACCOUNT,
  createCartMutation: createAccount_gql_CREATE_CART,
  getCartDetailsQuery: GET_CART_DETAILS,
  getCustomerQuery: createAccount_gql_GET_CUSTOMER,
  signInMutation: SIGN_IN
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/OrderConfirmationPage/useCreateAccount.js
var useCreateAccount_s = $RefreshSig$();

function useCreateAccount_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { useCreateAccount_defineProperty(target, key, source[key]); }); } return target; }

function useCreateAccount_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useCreateAccount_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = useCreateAccount_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function useCreateAccount_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/**
 * Returns props necessary to render CreateAccount component. In particular this
 * talon handles the submission flow by first doing a pre-submisson validation
 * and then, on success, invokes the `onSubmit` prop, which is usually the action.
 *
 * This talon is almost identical to the other useCreateAccount but does not
 * return `isSignedIn`.
 *
 * @param {Object} props.initialValues initial values to sanitize and seed the form
 * @param {Function} props.onSubmit the post submit callback
 * @param {Object} props.operations GraphQL operations use by talon
 * @returns {{
 *   errors: Map,
 *   handleSubmit: function,
 *   isDisabled: boolean,
 *   initialValues: object
 * }}
 */

const useCreateAccount = props => {
  useCreateAccount_s();

  const {
    initialValues = {},
    onSubmit
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(createAccount_gql, props.operations);
  const {
    createAccountMutation,
    createCartMutation,
    getCartDetailsQuery,
    getCustomerQuery,
    signInMutation
  } = operations;
  const [isSubmitting, setIsSubmitting] = Object(react["useState"])(false);
  const [, {
    createCart,
    getCartDetails,
    removeCart
  }] = Object(context_cart["b" /* useCartContext */])();
  const [{
    isGettingDetails
  }, {
    getUserDetails,
    setToken
  }] = Object(user["b" /* useUserContext */])();
  const [fetchCartId] = Object(_apollo_client["useMutation"])(createCartMutation); // For create account and sign in mutations, we don't want to cache any
  // personally identifiable information (PII). So we set fetchPolicy to 'no-cache'.

  const [createAccount, {
    error: createAccountError
  }] = Object(_apollo_client["useMutation"])(createAccountMutation, {
    fetchPolicy: 'no-cache'
  });
  const [signIn, {
    error: signInError
  }] = Object(_apollo_client["useMutation"])(signInMutation, {
    fetchPolicy: 'no-cache'
  });
  const fetchUserDetails = Object(useAwaitQuery["a" /* useAwaitQuery */])(getCustomerQuery);
  const fetchCartDetails = Object(useAwaitQuery["a" /* useAwaitQuery */])(getCartDetailsQuery);
  const handleSubmit = Object(react["useCallback"])(async formValues => {
    setIsSubmitting(true);

    try {
      // Create the account and then sign in.
      await createAccount({
        variables: {
          email: formValues.customer.email,
          firstname: formValues.customer.firstname,
          lastname: formValues.customer.lastname,
          password: formValues.password,
          is_subscribed: !!formValues.subscribe
        }
      });
      const signInResponse = await signIn({
        variables: {
          email: formValues.customer.email,
          password: formValues.password
        }
      });
      const token = signInResponse.data.generateCustomerToken.token;
      await setToken(token); // Clear guest cart from redux.

      await removeCart(); // Create a new customer cart.

      await createCart({
        fetchCartId
      }); // Ensure old stores are updated with any new data.

      await getUserDetails({
        fetchUserDetails
      });
      await getCartDetails({
        fetchCartId,
        fetchCartDetails
      }); // Finally, invoke the post-submission callback.

      if (onSubmit) {
        onSubmit();
      }
    } catch (error) {
      if (true) {
        console.error(error);
      }

      setIsSubmitting(false);
    }
  }, [createAccount, createCart, fetchCartDetails, fetchCartId, fetchUserDetails, getCartDetails, getUserDetails, onSubmit, removeCart, setToken, signIn]);
  const sanitizedInitialValues = Object(react["useMemo"])(() => {
    const {
      email,
      firstName,
      lastName
    } = initialValues,
          rest = useCreateAccount_objectWithoutProperties(initialValues, ["email", "firstName", "lastName"]);

    return useCreateAccount_objectSpread({
      customer: {
        email,
        firstname: firstName,
        lastname: lastName
      }
    }, rest);
  }, [initialValues]);
  const errors = Object(react["useMemo"])(() => new Map([['createAccountQuery', createAccountError], ['signInMutation', signInError]]), [createAccountError, signInError]);
  return {
    errors,
    handleSubmit,
    isDisabled: isSubmitting || isGettingDetails,
    initialValues: sanitizedInitialValues
  };
};

useCreateAccount_s(useCreateAccount, "w4LOdj+jTBvBVAU+gBY6Njsnn0E=", false, function () {
  return [context_cart["b" /* useCartContext */], user["b" /* useUserContext */], _apollo_client["useMutation"], _apollo_client["useMutation"], _apollo_client["useMutation"], useAwaitQuery["a" /* useAwaitQuery */], useAwaitQuery["a" /* useAwaitQuery */]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/combineValidators.js
var combineValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/combineValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js + 1 modules
var Checkbox_checkbox = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules
var Field_field = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/field.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Password/password.js + 1 modules
var Password_password = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Password/password.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/createAccount.css
var OrderConfirmationPage_createAccount = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/createAccount.css");
var createAccount_default = /*#__PURE__*/__webpack_require__.n(OrderConfirmationPage_createAccount);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/createAccount.css

            

var createAccount_options = {"injectType":"styleTag"};

createAccount_options.insert = "head";
createAccount_options.singleton = false;

var createAccount_update = injectStylesIntoStyleTag_default()(createAccount_default.a, createAccount_options);



/* harmony default export */ var CheckoutPage_OrderConfirmationPage_createAccount = (createAccount_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/createAccount.js
var createAccount_s = $RefreshSig$();


















const CreateAccount = props => {
  createAccount_s();

  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(CheckoutPage_OrderConfirmationPage_createAccount, props.classes);
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  const onSubmit = Object(react["useCallback"])(() => {
    // TODO: Redirect to account/order page when implemented.
    const {
      scrollTo
    } = globalThis;

    if (typeof scrollTo === 'function') {
      scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }

    addToast({
      type: 'info',
      message: formatMessage({
        id: 'checkoutPage.accountSuccessfullyCreated',
        defaultMessage: 'Account successfully created.'
      }),
      timeout: 5000
    });
  }, [addToast, formatMessage]);
  const talonProps = useCreateAccount({
    initialValues: {
      email: props.email,
      firstName: props.firstname,
      lastName: props.lastname
    },
    onSubmit
  });
  const {
    errors,
    handleSubmit,
    isDisabled,
    initialValues
  } = talonProps;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("h2", null, react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.quickCheckout',
    defaultMessage: 'Quick Checkout When You Return'
  })), react_default.a.createElement("p", null, react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.setAPasswordAndSave',
    defaultMessage: 'Set a password and save your information for next time in one easy step!'
  })), react_default.a.createElement(formError["a" /* default */], {
    errors: Array.from(errors.values())
  }), react_default.a.createElement(esm["c" /* Form */], {
    className: classes.form,
    initialValues: initialValues,
    onSubmit: handleSubmit
  }, react_default.a.createElement(Field_field["a" /* default */], {
    label: formatMessage({
      id: 'global.firstName',
      defaultMessage: 'First Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "customer.firstname",
    autoComplete: "given-name",
    validate: formValidators["d" /* isRequired */],
    validateOnBlur: true
  })), react_default.a.createElement(Field_field["a" /* default */], {
    label: formatMessage({
      id: 'global.lastName',
      defaultMessage: 'Last Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "customer.lastname",
    autoComplete: "family-name",
    validate: formValidators["d" /* isRequired */],
    validateOnBlur: true
  })), react_default.a.createElement(Field_field["a" /* default */], {
    label: formatMessage({
      id: 'global.email',
      defaultMessage: 'Email'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "customer.email",
    autoComplete: "email",
    validate: formValidators["d" /* isRequired */],
    validateOnBlur: true
  })), react_default.a.createElement(Password_password["a" /* default */], {
    label: formatMessage({
      id: 'global.password',
      defaultMessage: 'Password'
    }),
    fieldName: "password",
    isToggleButtonHidden: false,
    autoComplete: "new-password",
    validate: Object(combineValidators["a" /* default */])([formValidators["d" /* isRequired */], [formValidators["a" /* hasLengthAtLeast */], 8], formValidators["e" /* validatePassword */]]),
    validateOnBlur: true
  }), react_default.a.createElement("div", {
    className: classes.subscribe
  }, react_default.a.createElement(Checkbox_checkbox["a" /* default */], {
    field: "subscribe",
    id: "subscribe",
    label: formatMessage({
      id: 'checkoutPage.subscribe',
      defaultMessage: 'Subscribe to news and updates'
    })
  })), react_default.a.createElement("div", {
    className: classes.actions
  }, react_default.a.createElement(Button_button["a" /* default */], {
    disabled: isDisabled,
    type: "submit",
    className: classes.create_account_button
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.createAccount',
    defaultMessage: 'Create Account'
  })))));
};

createAccount_s(CreateAccount, "/S+Kx3osLvTAnb53jr3P/AJ7xqc=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */], useToasts["a" /* useToasts */], useCreateAccount];
});

createAccount_c = CreateAccount;
/* harmony default export */ var components_CheckoutPage_OrderConfirmationPage_createAccount = (CreateAccount);
CreateAccount.propTypes = {
  classes: Object(prop_types["shape"])({
    actions: prop_types["string"],
    create_account_button: prop_types["string"],
    form: prop_types["string"],
    root: prop_types["string"],
    subscribe: prop_types["string"]
  }),
  initialValues: Object(prop_types["shape"])({
    email: prop_types["string"],
    firstName: prop_types["string"],
    lastName: prop_types["string"]
  }),
  onSubmit: prop_types["func"]
};

var createAccount_c;

$RefreshReg$(createAccount_c, "CreateAccount");
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/ItemsReview/itemsReview.gql.js


const GET_CONFIGURABLE_THUMBNAIL_SOURCE = _apollo_client["gql"]`
    query getConfigurableThumbnailSource {
        storeConfig {
            id
            configurable_thumbnail_source
        }
    }
`;
const LIST_OF_PRODUCTS_IN_CART_QUERY = _apollo_client["gql"]`
    query getItemsInCart($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...ItemsReviewFragment
        }
    }

    ${ItemsReviewFragment}
`;
/* harmony default export */ var itemsReview_gql = ({
  getConfigurableThumbnailSource: GET_CONFIGURABLE_THUMBNAIL_SOURCE,
  getItemsInCart: LIST_OF_PRODUCTS_IN_CART_QUERY
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/ItemsReview/useItemsReview.js
var useItemsReview_s = $RefreshSig$();






const useItemsReview = props => {
  useItemsReview_s();

  const [showAllItems, setShowAllItems] = Object(react["useState"])(false);
  const operations = Object(shallowMerge["a" /* default */])(itemsReview_gql, props.operations);
  const {
    getItemsInCart,
    getConfigurableThumbnailSource
  } = operations;
  const [{
    cartId
  }] = Object(context_cart["b" /* useCartContext */])();
  const {
    data: configurableThumbnailSourceData
  } = Object(_apollo_client["useQuery"])(getConfigurableThumbnailSource, {
    fetchPolicy: 'cache-and-network'
  });
  const configurableThumbnailSource = Object(react["useMemo"])(() => {
    if (configurableThumbnailSourceData) {
      return configurableThumbnailSourceData.storeConfig.configurable_thumbnail_source;
    }
  }, [configurableThumbnailSourceData]);
  const [fetchItemsInCart, {
    data: queryData,
    error,
    loading
  }] = Object(_apollo_client["useLazyQuery"])(getItemsInCart, {
    fetchPolicy: 'cache-and-network'
  }); // If static data was provided, use that instead of query data.

  const data = props.data || queryData;
  const setShowAllItemsFlag = Object(react["useCallback"])(() => setShowAllItems(true), [setShowAllItems]);
  Object(react["useEffect"])(() => {
    if (cartId && !props.data) {
      fetchItemsInCart({
        variables: {
          cartId
        }
      });
    }
  }, [cartId, fetchItemsInCart, props.data]);
  Object(react["useEffect"])(() => {
    /**
     * If there are 2 or less than 2 items in cart
     * set show all items to `true`.
     */
    if (data && data.cart && data.cart.items.length <= 2) {
      setShowAllItems(true);
    }
  }, [data]);
  const items = data ? data.cart.items : [];
  const totalQuantity = data ? +data.cart.total_quantity : 0;
  return {
    isLoading: !!loading,
    items,
    hasErrors: !!error,
    totalQuantity,
    showAllItems,
    setShowAllItems: setShowAllItemsFlag,
    configurableThumbnailSource
  };
};

useItemsReview_s(useItemsReview, "EtJMqjPfEreg7jlhSGmN75JbPWE=", false, function () {
  return [context_cart["b" /* useCartContext */], _apollo_client["useQuery"], _apollo_client["useLazyQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js + 1 modules
var productOptions = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LegacyMiniCart/productOptions.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 2 modules
var Image_image = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/image.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/configuredVariant.js
var configuredVariant = __webpack_require__("./node_modules/@magento/peregrine/lib/util/configuredVariant.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/item.css
var ItemsReview_item = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/item.css");
var item_default = /*#__PURE__*/__webpack_require__.n(ItemsReview_item);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/item.css

            

var item_options = {"injectType":"styleTag"};

item_options.insert = "head";
item_options.singleton = false;

var item_update = injectStylesIntoStyleTag_default()(item_default.a, item_options);



/* harmony default export */ var CheckoutPage_ItemsReview_item = (item_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/item.js
var item_s = $RefreshSig$();









const Item = props => {
  item_s();

  const {
    classes: propClasses,
    product,
    quantity,
    configurable_options,
    isHidden,
    configurableThumbnailSource
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(CheckoutPage_ItemsReview_item, propClasses);
  const className = isHidden ? classes.root_hidden : classes.root;
  const configured_variant = Object(configuredVariant["a" /* default */])(configurable_options, product);
  return react_default.a.createElement("div", {
    className: className
  }, react_default.a.createElement(Image_image["a" /* default */], {
    alt: product.name,
    classes: {
      root: classes.thumbnail
    },
    width: 100,
    resource: configurableThumbnailSource === 'itself' && configured_variant ? configured_variant.thumbnail.url : product.thumbnail.url
  }), react_default.a.createElement("span", {
    className: classes.name
  }, product.name), react_default.a.createElement(productOptions["a" /* default */], {
    options: configurable_options,
    classes: {
      options: classes.options
    }
  }), react_default.a.createElement("span", {
    className: classes.quantity
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.quantity',
    defaultMessage: 'Qty :',
    values: {
      quantity
    }
  })));
};

item_s(Item, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

item_c = Item;
/* harmony default export */ var components_CheckoutPage_ItemsReview_item = (Item);

var item_c;

$RefreshReg$(item_c, "Item");
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-down.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/showAllButton.css
var showAllButton = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/showAllButton.css");
var showAllButton_default = /*#__PURE__*/__webpack_require__.n(showAllButton);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/showAllButton.css

            

var showAllButton_options = {"injectType":"styleTag"};

showAllButton_options.insert = "head";
showAllButton_options.singleton = false;

var showAllButton_update = injectStylesIntoStyleTag_default()(showAllButton_default.a, showAllButton_options);



/* harmony default export */ var ItemsReview_showAllButton = (showAllButton_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/showAllButton.js
var showAllButton_s = $RefreshSig$();








const ShowAllButton = props => {
  showAllButton_s();

  const {
    onClick
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(ItemsReview_showAllButton, props.classes || {});
  const handleClick = Object(react["useCallback"])(() => {
    onClick();
  }, [onClick]);
  return react_default.a.createElement("button", {
    className: classes.root,
    onClick: handleClick
  }, react_default.a.createElement("span", {
    className: classes.content
  }, react_default.a.createElement("span", {
    className: classes.text
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.showAllItems',
    defaultMessage: 'SHOW ALL ITEMS'
  })), react_default.a.createElement(icon["a" /* default */], {
    src: chevron_down["a" /* default */],
    classes: {
      root: classes.arrowDown
    }
  })));
};

showAllButton_s(ShowAllButton, "VrQqS9zhohOjo1/L0PWeonHIW40=", false, function () {
  return [shallowMerge["a" /* default */]];
});

showAllButton_c = ShowAllButton;
/* harmony default export */ var CheckoutPage_ItemsReview_showAllButton = (ShowAllButton);

var showAllButton_c;

$RefreshReg$(showAllButton_c, "ShowAllButton");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/itemsReview.css
var ItemsReview_itemsReview = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/itemsReview.css");
var itemsReview_default = /*#__PURE__*/__webpack_require__.n(ItemsReview_itemsReview);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/itemsReview.css

            

var itemsReview_options = {"injectType":"styleTag"};

itemsReview_options.insert = "head";
itemsReview_options.singleton = false;

var itemsReview_update = injectStylesIntoStyleTag_default()(itemsReview_default.a, itemsReview_options);



/* harmony default export */ var CheckoutPage_ItemsReview_itemsReview = (itemsReview_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/itemsReview.js
var itemsReview_s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









/**
 * Renders a list of items in an order.
 * @param {Object} props.data an optional static data object to render instead of making a query for data.
 */

const ItemsReview = props => {
  itemsReview_s();

  const {
    classes: propClasses
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(CheckoutPage_ItemsReview_itemsReview, propClasses);
  const talonProps = useItemsReview({
    data: props.data
  });
  const {
    items: itemsInCart,
    totalQuantity,
    showAllItems,
    setShowAllItems,
    isLoading,
    configurableThumbnailSource
  } = talonProps;
  const items = itemsInCart.map((item, index) => react_default.a.createElement(components_CheckoutPage_ItemsReview_item, _extends({
    key: item.id
  }, item, {
    isHidden: !showAllItems && index >= 2,
    configurableThumbnailSource: configurableThumbnailSource
  })));
  const showAllItemsFooter = !showAllItems ? react_default.a.createElement(CheckoutPage_ItemsReview_showAllButton, {
    onClick: setShowAllItems
  }) : null;

  if (isLoading) {
    return react_default.a.createElement(indicator["a" /* default */], null, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.fetchingItemsInYourOrder',
      defaultMessage: 'Fetching Items in your Order'
    }));
  }

  return react_default.a.createElement("div", {
    className: classes.items_review_container
  }, react_default.a.createElement("div", {
    className: classes.items_container
  }, react_default.a.createElement("div", {
    className: classes.total_quantity
  }, react_default.a.createElement("span", {
    className: classes.total_quantity_amount
  }, totalQuantity), react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.itemsInYourOrder',
    defaultMessage: ' items in your order'
  })), items), showAllItemsFooter);
};

itemsReview_s(ItemsReview, "EYjg8fYlCbMcv3QKFGEJoVQ5mX0=", false, function () {
  return [shallowMerge["a" /* default */], useItemsReview];
});

itemsReview_c = ItemsReview;
/* harmony default export */ var components_CheckoutPage_ItemsReview_itemsReview = (ItemsReview);

var itemsReview_c;

$RefreshReg$(itemsReview_c, "ItemsReview");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/orderConfirmationPage.css
var orderConfirmationPage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/orderConfirmationPage.css");
var orderConfirmationPage_default = /*#__PURE__*/__webpack_require__.n(orderConfirmationPage);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/orderConfirmationPage.css

            

var orderConfirmationPage_options = {"injectType":"styleTag"};

orderConfirmationPage_options.insert = "head";
orderConfirmationPage_options.singleton = false;

var orderConfirmationPage_update = injectStylesIntoStyleTag_default()(orderConfirmationPage_default.a, orderConfirmationPage_options);



/* harmony default export */ var OrderConfirmationPage_orderConfirmationPage = (orderConfirmationPage_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/orderConfirmationPage.js
var orderConfirmationPage_s = $RefreshSig$();











const OrderConfirmationPage = props => {
  orderConfirmationPage_s();

  const classes = Object(shallowMerge["a" /* default */])(OrderConfirmationPage_orderConfirmationPage, props.classes);
  const {
    data,
    orderNumber
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const talonProps = useOrderConfirmationPage({
    data
  });
  const {
    flatData,
    isSignedIn
  } = talonProps;
  const {
    city,
    country,
    email,
    firstname,
    lastname,
    postcode,
    region,
    shippingMethod,
    street
  } = flatData;
  const streetRows = street.map((row, index) => {
    return react_default.a.createElement("span", {
      key: index,
      className: classes.addressStreet
    }, row);
  });
  Object(react["useEffect"])(() => {
    const {
      scrollTo
    } = globalThis;

    if (typeof scrollTo === 'function') {
      scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
  }, []);
  const createAccountForm = !isSignedIn ? react_default.a.createElement(components_CheckoutPage_OrderConfirmationPage_createAccount, {
    firstname: firstname,
    lastname: lastname,
    email: email
  }) : null;
  const nameString = `${firstname} ${lastname}`;
  const additionalAddressString = `${city}, ${region} ${postcode} ${country}`;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(Head["b" /* StoreTitle */], null, formatMessage({
    id: 'checkoutPage.titleReceipt',
    defaultMessage: 'Receipt'
  })), react_default.a.createElement("div", {
    className: classes.mainContainer
  }, react_default.a.createElement("h2", {
    className: classes.heading
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.thankYou',
    defaultMessage: 'Thank you for your order!'
  })), react_default.a.createElement("div", {
    className: classes.orderNumber
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.orderNumber',
    defaultMessage: 'Order Number',
    values: {
      orderNumber
    }
  })), react_default.a.createElement("div", {
    className: classes.shippingInfoHeading
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'global.shippingInformation',
    defaultMessage: 'Shipping Information'
  })), react_default.a.createElement("div", {
    className: classes.shippingInfo
  }, react_default.a.createElement("span", {
    className: classes.email
  }, email), react_default.a.createElement("span", {
    className: classes.name
  }, nameString), streetRows, react_default.a.createElement("span", {
    className: classes.addressAdditional
  }, additionalAddressString)), react_default.a.createElement("div", {
    className: classes.shippingMethodHeading
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'global.shippingMethod',
    defaultMessage: 'Shipping Method'
  })), react_default.a.createElement("div", {
    className: classes.shippingMethod
  }, shippingMethod), react_default.a.createElement("div", {
    className: classes.itemsReview
  }, react_default.a.createElement(components_CheckoutPage_ItemsReview_itemsReview, {
    data: data
  })), react_default.a.createElement("div", {
    className: classes.additionalText
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'checkoutPage.additionalText',
    defaultMessage: 'You will also receive an email with the details and we will let you know when your order has shipped.'
  }))), react_default.a.createElement("div", {
    className: classes.sidebarContainer
  }, createAccountForm));
};

orderConfirmationPage_s(OrderConfirmationPage, "Ov+XOGEUEkjx8tgukFs3Um3MQeA=", false, function () {
  return [shallowMerge["a" /* default */], useIntl["a" /* default */], useOrderConfirmationPage];
});

orderConfirmationPage_c = OrderConfirmationPage;
/* harmony default export */ var CheckoutPage_OrderConfirmationPage_orderConfirmationPage = (OrderConfirmationPage);
OrderConfirmationPage.propTypes = {
  classes: Object(prop_types["shape"])({
    addressStreet: prop_types["string"],
    mainContainer: prop_types["string"],
    heading: prop_types["string"],
    orderNumber: prop_types["string"],
    shippingInfoHeading: prop_types["string"],
    shippingInfo: prop_types["string"],
    email: prop_types["string"],
    name: prop_types["string"],
    addressAdditional: prop_types["string"],
    shippingMethodHeading: prop_types["string"],
    shippingMethod: prop_types["string"],
    itemsReview: prop_types["string"],
    additionalText: prop_types["string"],
    sidebarContainer: prop_types["string"]
  }),
  data: prop_types["object"].isRequired,
  orderNumber: prop_types["string"]
};

var orderConfirmationPage_c;

$RefreshReg$(orderConfirmationPage_c, "OrderConfirmationPage");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.css
var checkoutPage = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.css");
var checkoutPage_default = /*#__PURE__*/__webpack_require__.n(checkoutPage);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.css

            

var checkoutPage_options = {"injectType":"styleTag"};

checkoutPage_options.insert = "head";
checkoutPage_options.singleton = false;

var checkoutPage_update = injectStylesIntoStyleTag_default()(checkoutPage_default.a, checkoutPage_options);



/* harmony default export */ var CheckoutPage_checkoutPage = (checkoutPage_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ScrollAnchor/scrollAnchor.css
var scrollAnchor = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ScrollAnchor/scrollAnchor.css");
var scrollAnchor_default = /*#__PURE__*/__webpack_require__.n(scrollAnchor);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ScrollAnchor/scrollAnchor.css

            

var scrollAnchor_options = {"injectType":"styleTag"};

scrollAnchor_options.insert = "head";
scrollAnchor_options.singleton = false;

var scrollAnchor_update = injectStylesIntoStyleTag_default()(scrollAnchor_default.a, scrollAnchor_options);



/* harmony default export */ var ScrollAnchor_scrollAnchor = (scrollAnchor_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ScrollAnchor/scrollAnchor.js
var scrollAnchor_s = $RefreshSig$();




const ScrollAnchor = Object(react["forwardRef"])(scrollAnchor_c = scrollAnchor_s((props, ref) => {
  scrollAnchor_s();

  const anchorRef = Object(react["useRef"])();
  Object(react["useImperativeHandle"])(ref, () => ({
    scrollIntoView() {
      anchorRef.current.scrollIntoView(...arguments);
    }

  }));
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    ref: anchorRef,
    className: ScrollAnchor_scrollAnchor.anchor
  }), props.children);
}, "LpmIo4wow7GUAzxAbQ0/R3rRNw0=", false, function () {
  return [react["useImperativeHandle"]];
}));
scrollAnchor_c2 = ScrollAnchor;
/* harmony default export */ var components_ScrollAnchor_scrollAnchor = (ScrollAnchor);
ScrollAnchor.propTypes = {
  classes: Object(prop_types["shape"])({
    anchor: prop_types["string"]
  })
};

var scrollAnchor_c, scrollAnchor_c2;

$RefreshReg$(scrollAnchor_c, "ScrollAnchor$forwardRef");
$RefreshReg$(scrollAnchor_c2, "ScrollAnchor");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.js
var checkoutPage_s = $RefreshSig$();



























const checkoutPage_errorIcon = react_default.a.createElement(icon["a" /* default */], {
  src: alert_circle["a" /* default */],
  size: 20
});

const CheckoutPage = props => {
  checkoutPage_s();

  const {
    classes: propClasses
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const talonProps = useCheckoutPage();
  const {
    /**
     * Enum, one of:
     * SHIPPING_ADDRESS, SHIPPING_METHOD, PAYMENT, REVIEW
     */
    activeContent,
    availablePaymentMethods,
    cartItems,
    checkoutStep,
    customer,
    error,
    handlePlaceOrder,
    hasError,
    isCartEmpty,
    isGuestCheckout,
    isLoading,
    isUpdating,
    orderDetailsData,
    orderDetailsLoading,
    orderNumber,
    placeOrderLoading,
    setCheckoutStep,
    setIsUpdating,
    setShippingInformationDone,
    scrollShippingInformationIntoView,
    setShippingMethodDone,
    scrollShippingMethodIntoView,
    setPaymentInformationDone,
    shippingInformationRef,
    shippingMethodRef,
    resetReviewOrderButtonClicked,
    handleReviewOrder,
    reviewOrderButtonClicked,
    toggleAddressBookContent,
    toggleSignInContent
  } = talonProps;
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  Object(react["useEffect"])(() => {
    if (hasError) {
      const message = error && error.message ? error.message : formatMessage({
        id: 'checkoutPage.errorSubmit',
        defaultMessage: 'Oops! An error occurred while submitting. Please try again.'
      });
      addToast({
        type: 'error',
        icon: checkoutPage_errorIcon,
        message,
        dismissable: true,
        timeout: 7000
      });

      if (true) {
        console.error(error);
      }
    }
  }, [addToast, error, formatMessage, hasError]);
  const classes = Object(shallowMerge["a" /* default */])(CheckoutPage_checkoutPage, propClasses);
  const windowSize = Object(useWindowSize["b" /* useWindowSize */])();
  const isMobile = windowSize.innerWidth <= 960;
  let checkoutContent;
  const heading = isGuestCheckout ? formatMessage({
    id: 'checkoutPage.guestCheckout',
    defaultMessage: 'Guest Checkout'
  }) : formatMessage({
    id: 'checkoutPage.checkout',
    defaultMessage: 'Checkout'
  });

  if (orderNumber && orderDetailsData) {
    return react_default.a.createElement(CheckoutPage_OrderConfirmationPage_orderConfirmationPage, {
      data: orderDetailsData,
      orderNumber: orderNumber
    });
  } else if (isLoading) {
    return LoadingIndicator_static["a" /* default */];
  } else if (isCartEmpty) {
    checkoutContent = react_default.a.createElement("div", {
      className: classes.empty_cart_container
    }, react_default.a.createElement("div", {
      className: classes.heading_container
    }, react_default.a.createElement("h1", {
      className: classes.heading
    }, heading)), react_default.a.createElement("h3", null, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.emptyMessage',
      defaultMessage: 'There are no items in your cart.'
    })));
  } else {
    const signInContainerElement = isGuestCheckout ? react_default.a.createElement("div", {
      className: classes.signInContainer
    }, react_default.a.createElement("span", {
      className: classes.signInLabel
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.signInLabel',
      defaultMessage: 'Sign in for Express Checkout'
    })), react_default.a.createElement(Button_button["a" /* default */], {
      className: classes.signInButton,
      onClick: toggleSignInContent,
      priority: "normal"
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.signInButton',
      defaultMessage: 'Sign In'
    }))) : null;
    const shippingMethodSection = checkoutStep >= CHECKOUT_STEP.SHIPPING_METHOD ? react_default.a.createElement(components_CheckoutPage_ShippingMethod_shippingMethod, {
      pageIsUpdating: isUpdating,
      onSave: setShippingMethodDone,
      onSuccess: scrollShippingMethodIntoView,
      setPageIsUpdating: setIsUpdating
    }) : react_default.a.createElement("h3", {
      className: classes.shipping_method_heading
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.shippingMethodStep',
      defaultMessage: '2. Shipping Method'
    }));
    const formErrors = [];
    const paymentMethods = Object.keys(paymentMethodCollection["a" /* default */]); // If we have an implementation, or if this is a "zero" checkout,
    // we can allow checkout to proceed.

    const isPaymentAvailable = !!availablePaymentMethods.find(({
      code
    }) => code === 'free' || paymentMethods.includes(code));

    if (!isPaymentAvailable) {
      formErrors.push(new Error(formatMessage({
        id: 'checkoutPage.noPaymentAvailable',
        defaultMessage: 'Payment is currently unavailable.'
      })));
    }

    const paymentInformationSection = checkoutStep >= CHECKOUT_STEP.PAYMENT ? react_default.a.createElement(components_CheckoutPage_PaymentInformation_paymentInformation, {
      onSave: setPaymentInformationDone,
      checkoutError: error,
      resetShouldSubmit: resetReviewOrderButtonClicked,
      setCheckoutStep: setCheckoutStep,
      shouldSubmit: reviewOrderButtonClicked
    }) : react_default.a.createElement("h3", {
      className: classes.payment_information_heading
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.paymentInformationStep',
      defaultMessage: '3. Payment Information'
    }));
    const priceAdjustmentsSection = checkoutStep === CHECKOUT_STEP.PAYMENT ? react_default.a.createElement("div", {
      className: classes.price_adjustments_container
    }, react_default.a.createElement(CheckoutPage_PriceAdjustments_priceAdjustments, {
      setPageIsUpdating: setIsUpdating
    })) : null;
    const reviewOrderButton = checkoutStep === CHECKOUT_STEP.PAYMENT ? react_default.a.createElement(Button_button["a" /* default */], {
      onClick: handleReviewOrder,
      priority: "high",
      className: classes.review_order_button,
      disabled: reviewOrderButtonClicked || isUpdating || !isPaymentAvailable
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.reviewOrder',
      defaultMessage: 'Review Order'
    })) : null;
    const itemsReview = checkoutStep === CHECKOUT_STEP.REVIEW ? react_default.a.createElement("div", {
      className: classes.items_review_container
    }, react_default.a.createElement(components_CheckoutPage_ItemsReview_itemsReview, null)) : null;
    const placeOrderButton = checkoutStep === CHECKOUT_STEP.REVIEW ? react_default.a.createElement(Button_button["a" /* default */], {
      onClick: handlePlaceOrder,
      priority: "high",
      className: classes.place_order_button,
      disabled: isUpdating || placeOrderLoading || orderDetailsLoading
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.placeOrder',
      defaultMessage: 'Place Order'
    })) : null; // If we're on mobile we should only render price summary in/after review.

    const shouldRenderPriceSummary = !(isMobile && checkoutStep < CHECKOUT_STEP.REVIEW);
    const orderSummary = shouldRenderPriceSummary ? react_default.a.createElement("div", {
      className: classes.summaryContainer
    }, react_default.a.createElement(components_CheckoutPage_OrderSummary_orderSummary, {
      isUpdating: isUpdating
    })) : null;
    let headerText;

    if (isGuestCheckout) {
      headerText = formatMessage({
        id: 'checkoutPage.guestCheckout',
        defaultMessage: 'Guest Checkout'
      });
    } else if (customer.default_shipping) {
      headerText = formatMessage({
        id: 'checkoutPage.reviewAndPlaceOrder',
        defaultMessage: 'Review and Place Order'
      });
    } else {
      headerText = formatMessage({
        id: 'checkoutPage.greeting',
        defaultMessage: 'Welcome'
      }, {
        firstname: customer.firstname
      });
    }

    const checkoutContentClass = activeContent === 'checkout' ? classes.checkoutContent : classes.checkoutContent_hidden;
    const stockStatusMessageElement = react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.stockStatusMessage',
      defaultMessage: 'An item in your cart is currently out-of-stock and must be removed in order to Checkout. Please return to your cart to remove the item.'
    }), react_default.a.createElement(react_router_dom["b" /* Link */], {
      className: classes.cartLink,
      to: '/cart'
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'checkoutPage.returnToCart',
      defaultMessage: 'Return to Cart'
    })));
    checkoutContent = react_default.a.createElement("div", {
      className: checkoutContentClass
    }, react_default.a.createElement("div", {
      className: classes.heading_container
    }, react_default.a.createElement(formError["a" /* default */], {
      classes: {
        root: classes.formErrors
      },
      errors: formErrors
    }), react_default.a.createElement(stockStatusMessage["a" /* default */], {
      cartItems: cartItems,
      message: stockStatusMessageElement
    }), react_default.a.createElement("h1", {
      className: classes.heading
    }, headerText)), signInContainerElement, react_default.a.createElement("div", {
      className: classes.shipping_information_container
    }, react_default.a.createElement(components_ScrollAnchor_scrollAnchor, {
      ref: shippingInformationRef
    }, react_default.a.createElement(components_CheckoutPage_ShippingInformation_shippingInformation, {
      onSave: setShippingInformationDone,
      onSuccess: scrollShippingInformationIntoView,
      toggleActiveContent: toggleAddressBookContent
    }))), react_default.a.createElement("div", {
      className: classes.shipping_method_container
    }, react_default.a.createElement(components_ScrollAnchor_scrollAnchor, {
      ref: shippingMethodRef
    }, shippingMethodSection)), react_default.a.createElement("div", {
      className: classes.payment_information_container
    }, paymentInformationSection), priceAdjustmentsSection, reviewOrderButton, itemsReview, orderSummary, placeOrderButton);
  }

  const addressBookElement = !isGuestCheckout ? react_default.a.createElement(CheckoutPage_AddressBook_addressBook, {
    activeContent: activeContent,
    toggleActiveContent: toggleAddressBookContent,
    onSuccess: scrollShippingInformationIntoView
  }) : null;
  const signInElement = isGuestCheckout ? react_default.a.createElement(CheckoutPage_GuestSignIn_guestSignIn, {
    isActive: activeContent === 'signIn',
    toggleActiveContent: toggleSignInContent
  }) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(Head["b" /* StoreTitle */], null, formatMessage({
    id: 'checkoutPage.titleCheckout',
    defaultMessage: 'Checkout'
  })), checkoutContent, addressBookElement, signInElement);
};

checkoutPage_s(CheckoutPage, "AhoqwtOQf7xmzyFrM8E9Ypy2q2E=", false, function () {
  return [useIntl["a" /* default */], useCheckoutPage, useToasts["a" /* useToasts */], shallowMerge["a" /* default */], useWindowSize["b" /* useWindowSize */]];
});

checkoutPage_c = CheckoutPage;
/* harmony default export */ var components_CheckoutPage_checkoutPage = (CheckoutPage);
CheckoutPage.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    checkoutContent: prop_types["string"],
    checkoutContent_hidden: prop_types["string"],
    heading_container: prop_types["string"],
    heading: prop_types["string"],
    cartLink: prop_types["string"],
    stepper_heading: prop_types["string"],
    shipping_method_heading: prop_types["string"],
    payment_information_heading: prop_types["string"],
    signInContainer: prop_types["string"],
    signInLabel: prop_types["string"],
    signInButton: prop_types["string"],
    empty_cart_container: prop_types["string"],
    shipping_information_container: prop_types["string"],
    shipping_method_container: prop_types["string"],
    payment_information_container: prop_types["string"],
    price_adjustments_container: prop_types["string"],
    items_review_container: prop_types["string"],
    summaryContainer: prop_types["string"],
    formErrors: prop_types["string"],
    review_order_button: prop_types["string"],
    place_order_button: prop_types["string"]
  })
};

var checkoutPage_c;

$RefreshReg$(checkoutPage_c, "CheckoutPage");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/index.js


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressBook.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".addressBook-root-3HK {\n    display: none;\n}\n\n.addressBook-root_active-2W4 {\n    align-items: center;\n    display: grid;\n    grid-template-areas:\n        'header buttons'\n        'content content';\n    grid-template-columns: auto auto;\n    grid-template-rows: 60px 1fr;\n    justify-content: space-between;\n    row-gap: 1rem;\n}\n\n.addressBook-headerText-39D {\n    grid-area: header;\n    color: rgb(var(--venia-global-color-text-alt));\n    line-height: 1.25em;\n}\n\n.addressBook-buttonContainer-3JP {\n    column-gap: 1rem;\n    display: grid;\n    grid-area: buttons;\n    grid-auto-flow: column;\n    justify-content: end;\n}\n\n@media (max-width: 360px) {\n    .addressBook-buttonContainer-3JP {\n        grid-template-columns: 1fr 1fr;\n    }\n    .addressBook-buttonContainer-3JP button {\n        min-width: 8rem;\n    }\n}\n\n.addressBook-content-3rE {\n    border-top: 1px solid rgb(var(--venia-global-color-border));\n    display: grid;\n    gap: 1rem;\n    grid-area: content;\n    grid-auto-rows: minmax(6rem, max-content);\n    grid-template-columns: 1fr 1fr 1fr;\n    padding-top: 2rem;\n}\n\n.addressBook-addButton-NkO {\n    border: 2px dashed rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    font-size: 0.875rem;\n    font-weight: 600;\n    transition: border-color 384ms var(--venia-global-anim-standard);\n    color: rgb(var(--venia-brand-color-1-700));\n}\n\n.addressBook-addButton-NkO:focus {\n    outline: none;\n    box-shadow: -6px 6px rgb(var(--venia-global-color-blue-700) / 0.3);\n}\n.addressBook-addButton-NkO:hover {\n    border-color: rgb(var(--venia-brand-color-1-600));\n}\n\n@media (max-width: 960px) {\n    .addressBook-root_active-2W4 {\n        grid-template-areas:\n            'header'\n            'content'\n            'buttons';\n        grid-template-columns: 1fr;\n        grid-template-rows: 60px 1fr 60px;\n    }\n\n    .addressBook-buttonContainer-3JP {\n        justify-content: center;\n    }\n\n    .addressBook-content-3rE {\n        border-top: none;\n        grid-template-columns: 1fr;\n        padding-top: 0;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "addressBook-root-3HK",
	"root_active": "addressBook-root_active-2W4 addressBook-root-3HK",
	"headerText": "addressBook-headerText-39D",
	"buttonContainer": "addressBook-buttonContainer-3JP",
	"content": "addressBook-content-3rE",
	"addButton": "addressBook-addButton-NkO"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressCard.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/AddressBook/addressCard.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".addressCard-root-3Zo {\n    align-content: flex-start;\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    box-shadow: none;\n    cursor: pointer;\n    display: grid;\n    font-size: 1rem;\n    padding: 1rem 1.25rem;\n    position: relative;\n    row-gap: 0.5rem;\n    transition: border-color 384ms var(--venia-global-anim-in);\n    outline: none;\n}\n\n@media (min-width: 961px) {\n    .addressCard-root-3Zo {\n        padding: 1.25rem 2rem;\n    }\n}\n\n.addressCard-root_selected-1EQ {\n    border-color: rgb(var(--venia-brand-color-1-600));\n    cursor: default;\n}\n\n.addressCard-root_updated-2nu {\n    animation: addressCard-flash-2Me var(--venia-global-anim-bounce) 640ms 2;\n}\n\n.addressCard-root-3Zo:focus {\n    box-shadow: -6px 6px rgb(var(--venia-global-color-blue-700) / 0.3);\n}\n\n.addressCard-root-3Zo:hover {\n    border-color: rgb(var(--venia-brand-color-1-600));\n}\n\n.addressCard-defaultCard-1iC {\n    grid-area: 1 / 1;\n}\n\n.addressCard-editButton-1mm {\n    padding: 1rem;\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n@media (min-width: 961px) {\n    .addressCard-editButton-1mm {\n        right: 0.375rem;\n        top: 0.375rem;\n    }\n}\n\n.addressCard-editButton-1mm:hover {\n    --fill: rgb(var(--venia-brand-color-1-700));\n}\n\n.addressCard-editIcon-1LC {\n    stroke: rgb(var(--venia-brand-color-1-700));\n    fill: var(--fill, white);\n    transition: fill 384ms var(--venia-global-anim-standard);\n}\n\n.addressCard-defaultBadge-x5I {\n    width: max-content;\n    padding: 0.375rem 1.5rem;\n    margin-bottom: 0.25rem;\n    border: 1px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    font-size: 0.75rem;\n    font-weight: 600;\n}\n\n.addressCard-name-3P_ {\n    font-weight: 600;\n}\n\n.addressCard-address-3Jo {\n    display: grid;\n    gap: 0.5rem;\n}\n\n@keyframes addressCard-flash-2Me {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0.5;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "addressCard-root-3Zo",
	"root_selected": "addressCard-root_selected-1EQ addressCard-root-3Zo",
	"root_updated": "addressCard-root_updated-2nu addressCard-root_selected-1EQ addressCard-root-3Zo",
	"flash": "addressCard-flash-2Me",
	"defaultCard": "addressCard-defaultCard-1iC",
	"editButton": "addressCard-editButton-1mm",
	"editIcon": "addressCard-editIcon-1LC",
	"defaultBadge": "addressCard-defaultBadge-x5I",
	"name": "addressCard-name-3P_",
	"address": "addressCard-address-3Jo"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/GuestSignIn/guestSignIn.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/GuestSignIn/guestSignIn.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../SignIn/signIn.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/SignIn/signIn.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../ForgotPassword/forgotPassword.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ForgotPassword/forgotPassword.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../CreateAccount/createAccount.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CreateAccount/createAccount.css"), "");

// Module
exports.push([module.i, ".guestSignIn-root-3vu {\n    display: grid;\n    grid-template-columns: minmax(auto, 512px);\n    justify-content: center;\n    row-gap: 2rem;\n    text-align: center;\n}\n\n.guestSignIn-root_hidden-3VL {\n    display: none;\n}\n\n.guestSignIn-header-254 {\n    font-family: var(--venia-global-fontFamily-serif);\n}\n\n.guestSignIn-contentContainer-1X5 {\n    border: 2px solid rgb(var(--venia-global-color-border));\n    border-radius: 0.375rem;\n    padding-bottom: 2rem;\n}\n\n.guestSignIn-signInRoot-T4n {\n}\n\n.guestSignIn-forgotPasswordRoot-lq4 {\n}\n\n.guestSignIn-createAccountRoot-3UG {\n}\n\n@media (max-width: 960px) {\n    .guestSignIn-contentContainer-1X5 {\n        border: none;\n        padding: 0;\n    }\n\n    .guestSignIn-signInRoot-T4n {\n        padding: 1rem 0;\n    }\n\n    .guestSignIn-forgotPasswordRoot-lq4 {\n        padding: 1rem 0;\n    }\n\n    .guestSignIn-createAccountRoot-3UG {\n        padding: 1rem 0;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "guestSignIn-root-3vu",
	"root_hidden": "guestSignIn-root_hidden-3VL guestSignIn-root-3vu",
	"header": "guestSignIn-header-254",
	"contentContainer": "guestSignIn-contentContainer-1X5",
	"signInRoot": "guestSignIn-signInRoot-T4n " + __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../SignIn/signIn.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/SignIn/signIn.css").locals["root"] + "",
	"forgotPasswordRoot": "guestSignIn-forgotPasswordRoot-lq4 " + __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../ForgotPassword/forgotPassword.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ForgotPassword/forgotPassword.css").locals["root"] + "",
	"createAccountRoot": "guestSignIn-createAccountRoot-3UG " + __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../CreateAccount/createAccount.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CreateAccount/createAccount.css").locals["root"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/item.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/item.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".item-root-320 {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto auto 1fr;\n    column-gap: 1rem;\n    opacity: 1;\n    visibility: visible;\n    transition-delay: 64ms;\n    transition-duration: 384ms;\n    transition-property: opacity, visbility;\n    transition-timing-function: var(--venia-global-anim-standard);\n    margin-top: 1.5rem;\n}\n\n.item-root_hidden-2ON {\n    opacity: 0;\n    visibility: hidden;\n    height: 0;\n    margin-top: 0rem;\n}\n\n.item-thumbnail-2Pw {\n    grid-column: 1 / span 1;\n    grid-row: 1 / span 3;\n    border: solid 1px rgb(var(--venia-global-color-border));\n}\n\n.item-name-2uX {\n    font-weight: 600;\n    grid-column: 2 / span 1;\n    grid-row: 1 / span 1;\n}\n\n.item-quantity-2eF {\n    grid-column: 2 / span 1;\n    grid-row: 3 / span 1;\n    font-size: 85%;\n    margin-top: 1rem;\n}\n\n.item-options-115 {\n    display: grid;\n    grid-column: 2 / span 1;\n    grid-row: 2 / span 1;\n    gap: 0.5rem;\n    font-size: 85%;\n    margin-top: 1rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "item-root-320",
	"root_hidden": "item-root_hidden-2ON item-root-320",
	"thumbnail": "item-thumbnail-2Pw",
	"name": "item-name-2uX",
	"quantity": "item-quantity-2eF",
	"options": "item-options-115"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/itemsReview.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/itemsReview.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".itemsReview-items_review_container-1DD {\n    min-height: 2rem;\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n}\n\n.itemsReview-items_container-qEz {\n    display: grid;\n    padding: 1.5rem 2rem;\n}\n\n.itemsReview-total_quantity-Auv {\n}\n\n.itemsReview-total_quantity_amount-1vn {\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n", ""]);

// Exports
exports.locals = {
	"items_review_container": "itemsReview-items_review_container-1DD",
	"items_container": "itemsReview-items_container-qEz",
	"total_quantity": "itemsReview-total_quantity-Auv",
	"total_quantity_amount": "itemsReview-total_quantity_amount-1vn"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/showAllButton.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ItemsReview/showAllButton.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css"), "");

// Module
exports.push([module.i, ".showAllButton-root-qPc {\n    border-top: 2px solid rgb(var(--venia-global-color-gray-400));\n    padding: 0.75rem 0;\n    width: 100%;\n}\n\n.showAllButton-content-1Pa {\n    display: grid;\n    grid-auto-flow: column;\n    gap: 0.375rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.showAllButton-text-1RY {\n    font-size: var(--venia-global-fontSize-100);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    color: rgb(var(--venia-brand-color-1-700));\n}\n\n.showAllButton-arrowDown-32y {\n    --stroke: rgb(var(--venia-brand-color-1-700));\n}\n", ""]);

// Exports
exports.locals = {
	"root": "showAllButton-root-qPc",
	"content": "showAllButton-content-1Pa",
	"text": "showAllButton-text-1RY",
	"arrowDown": "showAllButton-arrowDown-32y " + __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../Icon/icon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Icon/icon.css").locals["root"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/createAccount.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/createAccount.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");

// Module
exports.push([module.i, ".createAccount-root-1zP {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1rem;\n}\n\n.createAccount-form-Xz3 {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n}\n\n.createAccount-actions-2LG {\n    text-align: center;\n}\n\n.createAccount-create_account_button-2zn {\n}\n\n/*\n * Desktop specific styles\n */\n@media (min-width: 961px) {\n    .createAccount-root-1zP {\n        position: sticky;\n        top: 5.5rem;\n    }\n}\n\n/*\n * Mobile-specific styles.\n */\n@media (max-width: 960px) {\n    .createAccount-root-1zP {\n        padding-top: 1rem;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "createAccount-root-1zP",
	"form": "createAccount-form-Xz3",
	"actions": "createAccount-actions-2LG",
	"create_account_button": "createAccount-create_account_button-2zn " + __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_normalPriority"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/orderConfirmationPage.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderConfirmationPage/orderConfirmationPage.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".orderConfirmationPage-root-38w {\n    padding: 2.5rem 3rem;\n    max-width: 1080px;\n    margin: 0 auto;\n\n    display: grid;\n    gap: 2rem;\n    grid-template-columns: 2fr 1fr;\n}\n\n.orderConfirmationPage-mainContainer-1W2 {\n    grid-column: 1;\n\n    display: grid;\n    row-gap: 1rem;\n}\n\n.orderConfirmationPage-sidebarContainer-pRA {\n    grid-column: 2;\n}\n\n.orderConfirmationPage-header-dUb {\n    font-weight: 600;\n}\n\n.orderConfirmationPage-text-31i {\n    line-height: 1.5em;\n}\n\n.orderConfirmationPage-orderNumber-3XZ {\n}\n\n.orderConfirmationPage-shippingInfoHeading-2gf {\n}\n\n.orderConfirmationPage-shippingInfo-ZZd {\n    display: grid;\n}\n\n.orderConfirmationPage-shippingAddress-1WV {\n    display: grid;\n}\n\n.orderConfirmationPage-shippingMethodHeading-4oK {\n}\n\n.orderConfirmationPage-shippingMethod-HX8 {\n}\n\n.orderConfirmationPage-additionalText-3zH {\n}\n\n/*\n * Mobile-specific styles.\n */\n\n@media (max-width: 960px) {\n    .orderConfirmationPage-root-38w {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n        /* Only one column in mobile view. */\n        grid-template-columns: 1fr;\n        gap: 1rem;\n    }\n\n    .orderConfirmationPage-sidebarContainer-pRA {\n        grid-column: 1;\n        grid-row: auto;\n        height: auto;\n        border-top: 1px solid rgb(var(--venia-global-color-border));\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "orderConfirmationPage-root-38w",
	"mainContainer": "orderConfirmationPage-mainContainer-1W2",
	"sidebarContainer": "orderConfirmationPage-sidebarContainer-pRA",
	"header": "orderConfirmationPage-header-dUb",
	"text": "orderConfirmationPage-text-31i",
	"orderNumber": "orderConfirmationPage-orderNumber-3XZ orderConfirmationPage-header-dUb",
	"shippingInfoHeading": "orderConfirmationPage-shippingInfoHeading-2gf orderConfirmationPage-header-dUb",
	"shippingInfo": "orderConfirmationPage-shippingInfo-ZZd orderConfirmationPage-text-31i",
	"shippingAddress": "orderConfirmationPage-shippingAddress-1WV",
	"shippingMethodHeading": "orderConfirmationPage-shippingMethodHeading-4oK orderConfirmationPage-header-dUb",
	"shippingMethod": "orderConfirmationPage-shippingMethod-HX8 orderConfirmationPage-text-31i",
	"additionalText": "orderConfirmationPage-additionalText-3zH orderConfirmationPage-text-31i"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderSummary/orderSummary.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/OrderSummary/orderSummary.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".orderSummary-root-1zi {\n    border-top: 2px solid rgb(var(--venia-global-color-gray-400));\n    margin-top: 1rem;\n    padding-top: 2rem;\n}\n\n@media (min-width: 961px) {\n    .orderSummary-root-1zi {\n        margin-top: 0;\n        border: 2px solid rgb(var(--venia-global-color-gray-400));\n        border-radius: 0.375rem;\n        padding: 2rem;\n    }\n}\n\n.orderSummary-title-1l7 {\n    position: absolute;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px);\n    white-space: nowrap;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "orderSummary-root-1zi",
	"title": "orderSummary-title-1l7"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeDropin.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeDropin.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".braintreeDropin-root-25x {\n}\n\n.braintreeDropin-error-3om {\n    color: var(--venia-global-color-error);\n}\n\ndiv[data-braintree-id='card'] {\n    border: none;\n}\n\ndiv[data-braintree-id='card-sheet-header'] {\n    display: none;\n}\n\ndiv[class*='braintree-sheet__content--form'] {\n    /**\n      This is needed to override padding on the dropin\n      component. If we use padding-top instead it just\n      overrides the padding-top not whole padding.\n    */\n    padding: 1rem 0rem 0rem 0rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "braintreeDropin-root-25x",
	"error": "braintreeDropin-error-3om"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".creditCard-root-2xW {\n}\n\n.creditCard-credit_card_root-1AB {\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 64ms;\n    transition-duration: 384ms;\n    transition-property: opacity, visbility;\n    transition-timing-function: var(--venia-global-anim-standard);\n}\n\n.creditCard-credit_card_root_hidden-1OT {\n    overflow: hidden;\n    visibility: hidden;\n    height: 0;\n    opacity: 0;\n}\n\n.creditCard-dropin_root-30f {\n}\n\n.creditCard-billing_address_fields_root-3uL {\n    display: grid;\n    gap: 0.9375rem 1.5rem;\n    padding: 1rem 0rem;\n}\n\n.creditCard-billing_address_fields_root_hidden-2VI {\n    overflow: hidden;\n    visibility: hidden;\n    height: 0;\n    opacity: 0;\n}\n\n.creditCard-formErrorContainer-Fn5 {\n    padding-top: 1.5rem;\n}\n\n.creditCard-first_name-3hm,\n.creditCard-last_name-ZXG {\n    grid-column-end: span 1;\n}\n\n.creditCard-country-2PY,\n.creditCard-street1-1fU,\n.creditCard-street2-3hE,\n.creditCard-address_check-2Kw,\n.creditCard-city-1Vw,\n.creditCard-region-2UC,\n.creditCard-postal_code-2EB,\n.creditCard-phone_number-1iX {\n    grid-column-end: span 2;\n}\n\n/*\n * Mobile-specific styles.\n */\n\n@media (max-width: 960px) {\n    .creditCard-first_name-3hm,\n    .creditCard-last_name-ZXG,\n    .creditCard-city-1Vw,\n    .creditCard-region-2UC,\n    .creditCard-postal_code-2EB,\n    .creditCard-phone_number-1iX,\n    .creditCard-street1-1fU,\n    .creditCard-street2-3hE,\n    .creditCard-address_check-2Kw {\n        grid-column-end: span 2;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "creditCard-root-2xW",
	"credit_card_root": "creditCard-credit_card_root-1AB",
	"credit_card_root_hidden": "creditCard-credit_card_root_hidden-1OT",
	"dropin_root": "creditCard-dropin_root-30f",
	"billing_address_fields_root": "creditCard-billing_address_fields_root-3uL",
	"billing_address_fields_root_hidden": "creditCard-billing_address_fields_root_hidden-2VI",
	"formErrorContainer": "creditCard-formErrorContainer-Fn5",
	"first_name": "creditCard-first_name-3hm",
	"last_name": "creditCard-last_name-ZXG",
	"country": "creditCard-country-2PY",
	"street1": "creditCard-street1-1fU",
	"street2": "creditCard-street2-3hE",
	"address_check": "creditCard-address_check-2Kw",
	"city": "creditCard-city-1Vw",
	"region": "creditCard-region-2UC",
	"postal_code": "creditCard-postal_code-2EB",
	"phone_number": "creditCard-phone_number-1iX"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../LoadingIndicator/indicator.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.css"), "");

// Module
exports.push([module.i, ".paymentInformation-root-3cy {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1rem;\n}\n\n.paymentInformation-payment_info_container-1wU {\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n}\n\n.paymentInformation-loading-18Q {\n    text-align: center;\n}\n\n/*\n * Mobile-specific styles.\n */\n\n@media (max-width: 960px) {\n    .paymentInformation-heading-oeB {\n        border-width: 0;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "paymentInformation-root-3cy",
	"payment_info_container": "paymentInformation-payment_info_container-1wU",
	"loading": "paymentInformation-loading-18Q " + __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../LoadingIndicator/indicator.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.css").locals["root"] + "",
	"heading": "paymentInformation-heading-oeB"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PriceAdjustments/priceAdjustments.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PriceAdjustments/priceAdjustments.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".priceAdjustments-root-1nk {\n}\n", ""]);

// Exports
exports.locals = {
	"root": "priceAdjustments-root-1nk"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/customerForm.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/customerForm.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".customerForm-root-2Bi {\n    display: grid;\n    gap: 0.9375rem 1.5rem;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n}\n\n.customerForm-field-3vN {\n    grid-column-end: span 2;\n}\n\n.customerForm-formMessage-kZh,\n.customerForm-email-3OO,\n.customerForm-country-1O8,\n.customerForm-street0-2nz,\n.customerForm-street1-8MP,\n.customerForm-city-17w,\n.customerForm-region-2gH,\n.customerForm-postcode-2eY,\n.customerForm-telephone-eB_ {\n}\n\n.customerForm-defaultShipping-12L {\n    padding-top: 1rem;\n}\n\n.customerForm-firstname-2ty,\n.customerForm-lastname-nl4 {\n    grid-column-end: span 1;\n}\n\n.customerForm-buttons-2Vz {\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    justify-self: center;\n    padding: 1rem;\n}\n\n@media (max-width: 960px) {\n    .customerForm-firstname-2ty {\n        grid-column: 1 / span 2;\n    }\n\n    .customerForm-lastname-nl4 {\n        grid-column: 1 / span 2;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "customerForm-root-2Bi",
	"field": "customerForm-field-3vN",
	"formMessage": "customerForm-formMessage-kZh customerForm-field-3vN",
	"email": "customerForm-email-3OO customerForm-field-3vN",
	"country": "customerForm-country-1O8 customerForm-field-3vN",
	"street0": "customerForm-street0-2nz customerForm-field-3vN",
	"street1": "customerForm-street1-8MP customerForm-field-3vN",
	"city": "customerForm-city-17w customerForm-field-3vN",
	"region": "customerForm-region-2gH customerForm-field-3vN",
	"postcode": "customerForm-postcode-2eY customerForm-field-3vN",
	"telephone": "customerForm-telephone-eB_ customerForm-field-3vN",
	"defaultShipping": "customerForm-defaultShipping-12L customerForm-field-3vN",
	"firstname": "customerForm-firstname-2ty",
	"lastname": "customerForm-lastname-nl4",
	"buttons": "customerForm-buttons-2Vz customerForm-field-3vN"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/guestForm.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/guestForm.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".guestForm-root-6Mb {\n    display: grid;\n    gap: 0.5rem 1.5rem;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n}\n\n.guestForm-field-1De {\n    grid-column-end: span 2;\n}\n\n.guestForm-email-3_5,\n.guestForm-country-3Nd,\n.guestForm-street0-1kD,\n.guestForm-street1-3nZ,\n.guestForm-city-1fD,\n.guestForm-region-2XI,\n.guestForm-postcode-3_k,\n.guestForm-telephone-2V6 {\n}\n\n.guestForm-firstname-3UH,\n.guestForm-lastname-3y1 {\n    grid-column-end: span 1;\n}\n\n.guestForm-buttons-3is {\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    justify-self: center;\n    padding: 1rem;\n}\n\n@media (max-width: 960px) {\n    .guestForm-firstname-3UH {\n        grid-column: 1 / span 2;\n    }\n\n    .guestForm-lastname-3y1 {\n        grid-column: 1 / span 2;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "guestForm-root-6Mb",
	"field": "guestForm-field-1De",
	"email": "guestForm-email-3_5 guestForm-field-1De",
	"country": "guestForm-country-3Nd guestForm-field-1De",
	"street0": "guestForm-street0-1kD guestForm-field-1De",
	"street1": "guestForm-street1-3nZ guestForm-field-1De",
	"city": "guestForm-city-1fD guestForm-field-1De",
	"region": "guestForm-region-2XI guestForm-field-1De",
	"postcode": "guestForm-postcode-3_k guestForm-field-1De",
	"telephone": "guestForm-telephone-2V6 guestForm-field-1De",
	"firstname": "guestForm-firstname-3UH",
	"lastname": "guestForm-lastname-3y1",
	"buttons": "guestForm-buttons-3is guestForm-field-1De"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/card.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/card.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".card-root-3t1 {\n    display: grid;\n    font-size: 1rem;\n    row-gap: 0.5rem;\n    padding-top: 1.125rem;\n}\n\n.card-address-1Ei {\n    display: grid;\n    gap: 0.5rem;\n    padding-top: 1.125rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "card-root-3t1",
	"address": "card-address-1Ei"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/shippingInformation.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../LoadingIndicator/indicator.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.css"), "");

// Module
exports.push([module.i, ".shippingInformation-root--mX {\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    padding: 2rem;\n}\n\n.shippingInformation-root_editMode-1_K {\n    border: none;\n    border-radius: 0px;\n    border-bottom: 2px solid rgb(var(--venia-global-color-gray-400));\n    padding: 0;\n}\n\n.shippingInformation-root_updated-cmb {\n    animation: shippingInformation-flash-1JI var(--venia-global-anim-bounce) 640ms 2;\n}\n\n.shippingInformation-cardHeader-1-t {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr;\n}\n\n.shippingInformation-cardTitle-3t6 {\n    font-weight: 600;\n}\n\n.shippingInformation-editButton-DON {\n    padding: 1rem;\n    margin: -1rem;\n    color: rgb(var(--venia-brand-color-1-700));\n}\n\n.shippingInformation-editWrapper-3ZS {\n    display: grid;\n    padding: 1rem 0 1.5rem;\n    row-gap: 0.5rem;\n}\n\n.shippingInformation-editTitle-2eR {\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.shippingInformation-editIcon-16Y {\n    stroke: rgb(var(--venia-brand-color-1-700));\n}\n\n.shippingInformation-loading-1sN {\n    text-align: center;\n}\n\n@media (max-width: 960px) {\n    .shippingInformation-editText-26N {\n        display: none;\n    }\n}\n\n@keyframes shippingInformation-flash-1JI {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0.5;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "shippingInformation-root--mX",
	"root_editMode": "shippingInformation-root_editMode-1_K shippingInformation-root--mX",
	"root_updated": "shippingInformation-root_updated-cmb shippingInformation-root--mX",
	"flash": "shippingInformation-flash-1JI",
	"cardHeader": "shippingInformation-cardHeader-1-t",
	"cardTitle": "shippingInformation-cardTitle-3t6",
	"editButton": "shippingInformation-editButton-DON",
	"editWrapper": "shippingInformation-editWrapper-3ZS",
	"editTitle": "shippingInformation-editTitle-2eR",
	"editIcon": "shippingInformation-editIcon-16Y",
	"loading": "shippingInformation-loading-1sN " + __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../LoadingIndicator/indicator.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.css").locals["root"] + "",
	"editText": "shippingInformation-editText-26N"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/completedView.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/completedView.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".completedView-root-2Fa {\n    height: 100%;\n}\n\n.completedView-contents-1ZY {\n    display: grid;\n    grid-template-rows: auto auto;\n    margin-top: 1.125rem;\n    row-gap: 0.5rem;\n    text-align: left;\n}\n\n.completedView-editButton-3ct {\n    color: rgb(var(--venia-brand-color-1-700));\n    padding: 1rem;\n    margin: -1rem;\n}\n\n.completedView-editIcon-1Mo {\n    stroke: rgb(var(--venia-brand-color-1-700));\n}\n\n.completedView-error-2P3 {\n    align-self: center;\n    color: rgb(var(--venia-global-color-error));\n    line-height: var(--venia-global-lineHeight-300);\n}\n\n.completedView-free-2vF {\n    text-transform: uppercase;\n}\n\n.completedView-heading-105 {\n    font-weight: 600;\n}\n\n.completedView-titleContainer-2wD {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr;\n}\n\n/*\n *  Mobile-specific styles.\n */\n@media (max-width: 960px) {\n    .completedView-editButtonText-3wN {\n        display: none;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "completedView-root-2Fa",
	"contents": "completedView-contents-1ZY",
	"editButton": "completedView-editButton-3ct",
	"editIcon": "completedView-editIcon-1Mo",
	"error": "completedView-error-2P3",
	"free": "completedView-free-2vF",
	"heading": "completedView-heading-105",
	"titleContainer": "completedView-titleContainer-2wD",
	"editButtonText": "completedView-editButtonText-3wN"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethod.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingMethod.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".shippingMethod-root-78O {\n    border: none;\n    border-radius: 0px;\n    border-bottom: 2px solid rgb(var(--venia-global-color-gray-400));\n    padding: 2rem 0rem;\n    display: grid;\n    row-gap: 1rem;\n}\n\n.shippingMethod-done-kSQ {\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    padding: 2rem;\n}\n\n.shippingMethod-editingHeading-a5j {\n    text-transform: uppercase;\n}\n\n.shippingMethod-form-223 {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    row-gap: 1.5rem;\n}\n\n.shippingMethod-formButtons-3GP {\n    display: flex;\n    justify-content: center;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "shippingMethod-root-78O",
	"done": "shippingMethod-done-kSQ shippingMethod-root-78O",
	"editingHeading": "shippingMethod-editingHeading-a5j",
	"form": "shippingMethod-form-223",
	"formButtons": "shippingMethod-formButtons-3GP"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingRadios.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/shippingRadios.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../RadioGroup/radioGroup.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.css"), "");

// Module
exports.push([module.i, ".shippingRadios-error-1fi {\n    color: rgb(var(--venia-global-color-error));\n    line-height: var(--venia-global-lineHeight-300);\n}\n\n.shippingRadios-radioLabel-Lz1 {\n    display: grid;\n    grid-template-columns: auto auto;\n    gap: 1rem 0.5rem;\n    justify-content: start;\n}\n\n.shippingRadios-radioMessage-36k {\n    display: none;\n}\n\n.shippingRadios-radioRoot-tJR {\n    /* We explicitly want one radio item per row. */\n    grid-template-columns: auto;\n}\n\n/*\n * Mobile-specific styles.\n */\n\n@media (max-width: 640px) {\n    .shippingRadios-radioLabel-Lz1 {\n        display: grid;\n        grid-template-columns: 100%;\n        gap: 0.5rem;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"error": "shippingRadios-error-1fi",
	"radioLabel": "shippingRadios-radioLabel-Lz1",
	"radioMessage": "shippingRadios-radioMessage-36k",
	"radioRoot": "shippingRadios-radioRoot-tJR " + __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../RadioGroup/radioGroup.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.css").locals["root"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/updateModal.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingMethod/updateModal.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".updateModal-errorContainer-3ZN {\n    padding-bottom: 1rem;\n}\n", ""]);

// Exports
exports.locals = {
	"errorContainer": "updateModal-errorContainer-3ZN"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../LinkButton/linkButton.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css"), "");

// Module
exports.push([module.i, ".checkoutPage-root-3rC {\n    padding: 2.5rem 3rem;\n    max-width: 1080px;\n    margin: 0 auto;\n}\n\n.checkoutPage-checkoutContent-3od {\n    display: grid;\n    gap: 2rem;\n    grid-template-columns: 2fr 1fr;\n}\n\n.checkoutPage-checkoutContent_hidden-2vP {\n    display: none;\n}\n\n.checkoutPage-heading_container-2Bv {\n    display: grid;\n    row-gap: 1rem;\n}\n\n.checkoutPage-heading-2Tw {\n    line-height: 1.25em;\n}\n\n.checkoutPage-cartLink-1FS {\n    font-size: inherit;\n}\n\n.checkoutPage-stepper_heading-3vk {\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n    font-size: 1rem;\n    font-weight: 600;\n    padding-bottom: 2rem;\n    text-transform: uppercase;\n}\n\n.checkoutPage-shipping_method_heading-ZMk {\n}\n\n.checkoutPage-payment_information_heading-1az {\n}\n\n.checkoutPage-signInContainer-hys {\n    align-items: center;\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    padding: 1rem;\n}\n\n.checkoutPage-signInLabel--Of {\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.checkoutPage-signInButton-2rl {\n    min-height: auto;\n    min-width: auto;\n    padding: 0.25rem 2rem;\n}\n\n.checkoutPage-empty_cart_container-3Oq {\n    margin-bottom: 1.5rem;\n}\n\n.checkoutPage-shipping_information_container-1CT {\n    grid-column: 1 / span 1;\n    position: relative;\n}\n\n.checkoutPage-shipping_method_container-3b4 {\n    grid-column: 1 / span 1;\n    position: relative;\n}\n\n.checkoutPage-payment_information_container-1RJ {\n    grid-column: 1 / span 1;\n}\n\n.checkoutPage-price_adjustments_container-2II {\n    grid-column: 1 / span 1;\n}\n\n.checkoutPage-items_review_container-2-o {\n    grid-column: 1 / span 1;\n}\n\n.checkoutPage-summaryContainer-1Ba {\n    grid-column: 1 / span 1;\n}\n\n.checkoutPage-formErrors-7x_ {\n    border-color: rgb(var(--venia-global-color-error));\n    border-style: solid;\n    border-width: 0 0 0 5px;\n    padding: 1rem 0 1rem 1rem;\n    display: grid;\n    grid-column: 1 / span 1;\n}\n\n@media (min-width: 961px) {\n    .checkoutPage-summaryContainer-1Ba {\n        grid-column: 2 / span 1;\n        grid-row: 2 / span 3;\n        position: sticky;\n        top: 5.5rem;\n        height: min-content;\n    }\n}\n\n.checkoutPage-review_order_button-1Jf {\n    grid-column: 1 / span 1;\n    margin: auto;\n}\n\n.checkoutPage-place_order_button-1FI {\n    grid-column: 1 / span 1;\n    margin: auto;\n}\n\n/*\n * Mobile-specific styles.\n */\n\n@media (max-width: 960px) {\n    .checkoutPage-root-3rC {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n    }\n\n    .checkoutPage-checkoutContent-3od {\n        /* Only one column in mobile view. */\n        grid-template-columns: 1fr;\n        gap: 1rem;\n    }\n\n    .checkoutPage-signInContainer-hys {\n        grid-row-start: 1;\n        grid-auto-flow: row;\n        justify-items: center;\n        margin-bottom: 1rem;\n    }\n\n    .checkoutPage-stepper_heading-3vk {\n        padding-bottom: 1rem;\n    }\n\n    .checkoutPage-payment_information_heading-1az {\n        /* On mobile, order summary has a top border, so avoid doubling up. */\n        border-bottom-width: 0;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "checkoutPage-root-3rC",
	"checkoutContent": "checkoutPage-checkoutContent-3od",
	"checkoutContent_hidden": "checkoutPage-checkoutContent_hidden-2vP checkoutPage-checkoutContent-3od",
	"heading_container": "checkoutPage-heading_container-2Bv",
	"heading": "checkoutPage-heading-2Tw",
	"cartLink": "checkoutPage-cartLink-1FS " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../LinkButton/linkButton.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.css").locals["root"] + "",
	"stepper_heading": "checkoutPage-stepper_heading-3vk",
	"shipping_method_heading": "checkoutPage-shipping_method_heading-ZMk checkoutPage-stepper_heading-3vk",
	"payment_information_heading": "checkoutPage-payment_information_heading-1az checkoutPage-stepper_heading-3vk checkoutPage-stepper_heading-3vk",
	"signInContainer": "checkoutPage-signInContainer-hys",
	"signInLabel": "checkoutPage-signInLabel--Of",
	"signInButton": "checkoutPage-signInButton-2rl " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_normalPriority"] + "",
	"empty_cart_container": "checkoutPage-empty_cart_container-3Oq",
	"shipping_information_container": "checkoutPage-shipping_information_container-1CT",
	"shipping_method_container": "checkoutPage-shipping_method_container-3b4",
	"payment_information_container": "checkoutPage-payment_information_container-1RJ",
	"price_adjustments_container": "checkoutPage-price_adjustments_container-2II",
	"items_review_container": "checkoutPage-items_review_container-2-o",
	"summaryContainer": "checkoutPage-summaryContainer-1Ba",
	"formErrors": "checkoutPage-formErrors-7x_",
	"review_order_button": "checkoutPage-review_order_button-1Jf " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_highPriority"] + "",
	"place_order_button": "checkoutPage-place_order_button-1FI " + __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Button/button.css").locals["root_highPriority"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/ScrollAnchor/scrollAnchor.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/ScrollAnchor/scrollAnchor.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".scrollAnchor-anchor-2XY {\n    position: absolute;\n    top: calc(var(--venia-global-header-minHeight) * -1 - 5px);\n}\n", ""]);

// Exports
exports.locals = {
	"anchor": "scrollAnchor-anchor-2XY"
};

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

/***/ })

}]);
//# sourceMappingURL=39.12fcb3c920a03103fdb2.js.map