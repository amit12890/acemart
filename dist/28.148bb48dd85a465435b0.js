(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js + 2 modules ***!
  \******************************************************************************************/
/*! exports provided: default, useAccordionContext */
/*! exports used: default, useAccordionContext */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useAccordionContext; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/Accordion/useAccordion.js
var _s = $RefreshSig$();


const useAccordion = props => {
  _s();

  const {
    canOpenMultiple,
    children
  } = props;
  const [openSectionIds, setOpenSectionIds] = Object(react["useState"])(new Set([]));
  const handleSectionToggle = Object(react["useCallback"])(sectionId => {
    setOpenSectionIds(prevOpenSectionIds => {
      const nextOpenSectionIds = new Set(prevOpenSectionIds);

      if (!prevOpenSectionIds.has(sectionId)) {
        // The user wants to open this section.
        // If we don't allow multiple sections to be open, close the others first.
        if (!canOpenMultiple) {
          nextOpenSectionIds.clear();
        }

        nextOpenSectionIds.add(sectionId);
      } else {
        // The user wants to close this section.
        nextOpenSectionIds.delete(sectionId);
      }

      return nextOpenSectionIds;
    });
  }, [canOpenMultiple, setOpenSectionIds]); // If any of the sections have their isOpen prop set to true initially,
  // honor that.
  // We never want to re-run this effect, even if deps change.

  /* eslint-disable react-hooks/exhaustive-deps */

  Object(react["useEffect"])(() => {
    const isOpenPropTruthy = child => child.props.isOpen;

    const initialOpenSectionIds = new Set([]);
    let firstOpenSectionId;
    react["Children"].toArray(children).forEach(child => {
      if (isOpenPropTruthy(child)) {
        const {
          id: childId
        } = child.props;
        initialOpenSectionIds.add(childId);

        if (!firstOpenSectionId) {
          firstOpenSectionId = childId;
        }
      }
    }); // If there are multiple sections with isOpen props initially set to true
    // and we only allow one, just use the first one.

    if (!canOpenMultiple && initialOpenSectionIds.size > 1) {
      initialOpenSectionIds.clear();
      initialOpenSectionIds.add(firstOpenSectionId);
    }

    setOpenSectionIds(initialOpenSectionIds);
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return {
    handleSectionToggle,
    openSectionIds
  };
};

_s(useAccordion, "V2n7KGCfidEF3IjZShvG8ZUfVb0=");
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.css
var accordion = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.css");
var accordion_default = /*#__PURE__*/__webpack_require__.n(accordion);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(accordion_default.a, options);



/* harmony default export */ var Accordion_accordion = (accordion_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js
var accordion_s = $RefreshSig$(),
    _s2 = $RefreshSig$();





const AccordionContext = Object(react["createContext"])();
const {
  Provider
} = AccordionContext;

const Accordion = props => {
  accordion_s();

  const {
    canOpenMultiple = true,
    children
  } = props; // The talon is the source of truth for the context value.

  const talonProps = useAccordion({
    canOpenMultiple,
    children
  });
  const {
    handleSectionToggle,
    openSectionIds
  } = talonProps;
  const contextValue = {
    handleSectionToggle,
    openSectionIds
  };
  const classes = Object(shallowMerge["a" /* default */])(Accordion_accordion, props.classes);
  return react_default.a.createElement(Provider, {
    value: contextValue
  }, react_default.a.createElement("div", {
    className: classes.root
  }, children));
};

accordion_s(Accordion, "vZdrMNXsjCkYsH6bl/1jL8wf4k0=", false, function () {
  return [useAccordion, shallowMerge["a" /* default */]];
});

_c = Accordion;
/* harmony default export */ var components_Accordion_accordion = __webpack_exports__["a"] = (Accordion);
const useAccordionContext = () => {
  _s2();

  return Object(react["useContext"])(AccordionContext);
};

_s2(useAccordionContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "Accordion");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Accordion/section.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Accordion/section.js + 1 modules ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js because of ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-down.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/chevron-up.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Accordion/section.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-up.js
var chevron_up = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-up.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__("./node_modules/react-feather/dist/icons/chevron-down.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js + 2 modules
var accordion = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Accordion/section.css
var section = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Accordion/section.css");
var section_default = /*#__PURE__*/__webpack_require__.n(section);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Accordion/section.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(section_default.a, options);



/* harmony default export */ var Accordion_section = (section_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Accordion/section.js
var _s = $RefreshSig$();








const Section = props => {
  _s();

  const {
    children,
    id,
    title
  } = props;
  const {
    handleSectionToggle,
    openSectionIds
  } = Object(accordion["b" /* useAccordionContext */])();
  const handleSectionToggleWithId = Object(react["useCallback"])(() => handleSectionToggle(id), [handleSectionToggle, id]);
  const isOpen = openSectionIds.has(id);
  const titleIconSrc = isOpen ? chevron_up["a" /* default */] : chevron_down["a" /* default */];
  const titleIcon = react_default.a.createElement(icon["a" /* default */], {
    src: titleIconSrc,
    size: 24
  });
  const classes = Object(shallowMerge["a" /* default */])(Accordion_section, props.classes);
  const contentsContainerClass = isOpen ? classes.contents_container : classes.contents_container_closed;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("button", {
    className: classes.title_container,
    onClick: handleSectionToggleWithId,
    type: "button"
  }, react_default.a.createElement("span", {
    className: classes.title_wrapper
  }, react_default.a.createElement("span", {
    className: classes.title
  }, title), titleIcon)), react_default.a.createElement("div", {
    className: contentsContainerClass
  }, children));
};

_s(Section, "TAWkKiBeBJpdLDy8Mq4jGJ+gv1Q=", false, function () {
  return [accordion["b" /* useAccordionContext */], shallowMerge["a" /* default */]];
});

_c = Section;
/* harmony default export */ var components_Accordion_section = __webpack_exports__["a"] = (Section);

var _c;

$RefreshReg$(_c, "Section");

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/giftCardSection.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/giftCardSection.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Gift Card support is an EE-only feature.
 * Here in CE, don't render the Accordion section at all.
 */
/* harmony default export */ __webpack_exports__["a"] = (() => {
  return null;
});

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js + 6 modules ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var Price_price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary.js
var _s = $RefreshSig$();





/**
 * @ignore
 *
 * Flattens query data into a simple object. We create this here rather than
 * having each line summary line component destructure its own data because
 * only the parent "price summary" component knows the data structure.
 *
 * @param {Object} data query data
 */

const flattenData = data => {
  if (!data) return {};
  return {
    subtotal: data.cart.prices.subtotal_excluding_tax,
    total: data.cart.prices.grand_total,
    discounts: data.cart.prices.discounts,
    giftCards: data.cart.applied_gift_cards,
    taxes: data.cart.prices.applied_taxes,
    shipping: data.cart.shipping_addresses
  };
};
/**
 * This talon contains logic for a price summary component.
 * It performs effects and returns prop data for rendering the component.
 *
 * This talon performs the following effects:
 *
 * - Log a GraphQL error if it occurs when getting the price summary
 *
 * @function
 *
 * @param {Object} props
 * @param {PriceSummaryQueries} props.queries GraphQL queries for a price summary component.
 *
 * @returns {PriceSummaryTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { usePriceSummary } from '@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary';
 */


const usePriceSummary = props => {
  _s();

  const {
    queries: {
      getPriceSummary
    }
  } = props;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const history = Object(react_router["g" /* useHistory */])(); // We don't want to display "Estimated" or the "Proceed" button in checkout.

  const match = Object(react_router["j" /* useRouteMatch */])('/checkout');
  const isCheckout = !!match;
  const {
    error,
    loading,
    data
  } = Object(client["useQuery"])(getPriceSummary, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const handleProceedToCheckout = Object(react["useCallback"])(() => {
    history.push('/checkout');
  }, [history]);
  return {
    handleProceedToCheckout,
    hasError: !!error,
    hasItems: data && !!data.cart.items.length,
    isCheckout,
    isLoading: !!loading,
    flatData: flattenData(data)
  };
};
/** JSDocs type definitions */

/**
 * Query data flattened into a simple object.
 *
 * @typedef {Object} FlattenedData
 *
 * @property {String} subtotal Cart subtotal (excluding tax)
 * @property {String} total Cart grand total
 * @property {Array<Object>} discounts Discounts applied to the cart
 * @property {Array<Object>} giftCards Gift cards applied to the cart
 * @property {Array<Object>} taxes Taxes applied to the cart
 * @property {Array<Object>} shipping Shipping addresses associated with this cart
 */

/**
 * GraphQL queries for price summary component.
 *
 * @typedef {Object} PriceSummaryQueries
 *
 * @property {GraphQLAST} getPriceSummary Query to get the price summary for a cart
 *
 * @see [priceSummary.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js}
 * for the queries used in Venia.
 */

/**
 * Props used for rendering a price summary component.
 *
 * @typedef {Object} PriceSummaryTalonProps
 *
 * @property {function} handleProceedToCheckout Callback function which navigates the browser to the checkout
 * @property {boolean} hasError True if a GraphQL query returns an error. False otherwise.
 * @property {boolean} hasItems True if the cart has any items. False otherwise.
 * @property {boolean} isLoading True while the GraphQL query is still in flight. False otherwise.
 * @property {FlattenedData} flatData Query data that has been flattened into a simple object
 *
 */

_s(usePriceSummary, "CI3DlHV7XUJ/JdMXjiyBZY6xXV4=", false, function () {
  return [cart["b" /* useCartContext */], react_router["g" /* useHistory */], react_router["j" /* useRouteMatch */], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.css
var priceSummary = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.css");
var priceSummary_default = /*#__PURE__*/__webpack_require__.n(priceSummary);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(priceSummary_default.a, options);



/* harmony default export */ var PriceSummary_priceSummary = (priceSummary_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/discountSummary.js
var discountSummary_s = $RefreshSig$();





const MINUS_SYMBOL = '-';
const DEFAULT_AMOUNT = {
  currency: 'USD',
  value: 0
};
/**
 * Reduces discounts array into a single amount.
 *
 * @param {Array} discounts
 */

const getDiscount = (discounts = []) => {
  // discounts from data can be null
  if (!discounts || !discounts.length) {
    return DEFAULT_AMOUNT;
  } else {
    return {
      currency: discounts[0].amount.currency,
      value: discounts.reduce((acc, discount) => acc + discount.amount.value, 0)
    };
  }
};
/**
 * A component that renders the discount summary line item.
 *
 * @param {Object} props.classes
 * @param {Object} props.data fragment response data
 */


const DiscountSummary = props => {
  discountSummary_s();

  const classes = Object(shallowMerge["a" /* default */])({}, props.classes);
  const discount = getDiscount(props.data);
  return discount.value ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("span", {
    className: classes.lineItemLabel
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'discountSummary.lineItemLabel',
    defaultMessage: 'Discounts applied'
  })), react_default.a.createElement("span", {
    className: classes.price
  }, MINUS_SYMBOL, react_default.a.createElement(Price_price["a" /* default */], {
    value: discount.value,
    currencyCode: discount.currency
  }))) : null;
};

discountSummary_s(DiscountSummary, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = DiscountSummary;
/* harmony default export */ var discountSummary = (DiscountSummary);

var _c;

$RefreshReg$(_c, "DiscountSummary");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/giftCardSummary.ce.js
/* harmony default export */ var giftCardSummary_ce = (() => null);
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/shippingSummary.js
var shippingSummary_s = $RefreshSig$();





/**
 * A component that renders the shipping summary line item after address and
 * method are selected
 *
 * @param {Object} props.classes
 * @param {Object} props.data fragment response data
 */

const ShippingSummary = props => {
  shippingSummary_s();

  const classes = Object(shallowMerge["a" /* default */])({}, props.classes);
  const {
    data,
    isCheckout
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])(); // Don't render estimated shipping until an address has been provided and
  // a method has been selected.

  if (!data.length || !data[0].selected_shipping_method) {
    return null;
  }

  const shipping = data[0].selected_shipping_method.amount;
  const shippingLabel = isCheckout ? formatMessage({
    id: 'shippingSummary.shipping',
    defaultMessage: 'Shipping'
  }) : formatMessage({
    id: 'shippingSummary.estimatedShipping',
    defaultMessage: 'Estimated Shipping'
  }); // For a value of "0", display "FREE".

  const price = shipping.value ? react_default.a.createElement(Price_price["a" /* default */], {
    value: shipping.value,
    currencyCode: shipping.currency
  }) : react_default.a.createElement("span", null, react_default.a.createElement(message["a" /* default */], {
    id: 'global.free',
    defaultMessage: 'FREE'
  }));
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("span", {
    className: classes.lineItemLabel
  }, shippingLabel), react_default.a.createElement("span", {
    className: classes.price
  }, price));
};

shippingSummary_s(ShippingSummary, "VxVnK37plYgXvLp7c0yHActoCwA=", false, function () {
  return [shallowMerge["a" /* default */], useIntl["a" /* default */]];
});

shippingSummary_c = ShippingSummary;
/* harmony default export */ var shippingSummary = (ShippingSummary);

var shippingSummary_c;

$RefreshReg$(shippingSummary_c, "ShippingSummary");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/taxSummary.js
var taxSummary_s = $RefreshSig$();





/**
 * Reduces applied tax amounts into a single amount.
 *
 * @param {Array} applied_taxes
 */

const getEstimatedTax = (applied_taxes = []) => {
  return {
    currency: applied_taxes[0].amount.currency,
    value: applied_taxes.reduce((acc, tax) => acc + tax.amount.value, 0)
  };
};
/**
 * A component that renders the tax summary line item.
 *
 * @param {Object} props.classes
 * @param {Object} props.data query response data
 */


const TaxSummary = props => {
  taxSummary_s();

  const classes = Object(shallowMerge["a" /* default */])({}, props.classes);
  const {
    data,
    isCheckout
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])(); // Don't render estimated taxes until an address has been provided which
  // causes the server to apply a tax value to the cart.

  if (!data.length) {
    return null;
  }

  const taxLabel = isCheckout ? formatMessage({
    id: 'taxSummary.tax',
    defaultMessage: 'Tax'
  }) : formatMessage({
    id: 'taxSummary.estimatedTax',
    defaultMessage: 'Estimated Tax'
  });
  const tax = getEstimatedTax(props.data);
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("span", {
    className: classes.lineItemLabel
  }, taxLabel), react_default.a.createElement("span", {
    className: classes.price
  }, react_default.a.createElement(Price_price["a" /* default */], {
    value: tax.value,
    currencyCode: tax.currency
  })));
};

taxSummary_s(TaxSummary, "VxVnK37plYgXvLp7c0yHActoCwA=", false, function () {
  return [shallowMerge["a" /* default */], useIntl["a" /* default */]];
});

taxSummary_c = TaxSummary;
/* harmony default export */ var taxSummary = (TaxSummary);

var taxSummary_c;

$RefreshReg$(taxSummary_c, "TaxSummary");
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js + 4 modules
var priceSummaryFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/priceSummaryFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js
var priceSummary_s = $RefreshSig$();














const GET_PRICE_SUMMARY = client["gql"]`
    query getPriceSummary($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...PriceSummaryFragment
        }
    }
    ${priceSummaryFragments_gql["a" /* PriceSummaryFragment */]}
`;
/**
 * A child component of the CartPage component.
 * This component fetches and renders cart data, such as subtotal, discounts applied,
 * gift cards applied, tax, shipping, and cart total.
 *
 * @param {Object} props
 * @param {Object} props.classes CSS className overrides.
 * See [priceSummary.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import PriceSummary from "@magento/venia-ui/lib/components/CartPage/PriceSummary";
 */

const PriceSummary = props => {
  priceSummary_s();

  const {
    isUpdating
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(PriceSummary_priceSummary, props.classes);
  const talonProps = usePriceSummary({
    queries: {
      getPriceSummary: GET_PRICE_SUMMARY
    }
  });
  const {
    handleProceedToCheckout,
    hasError,
    hasItems,
    isCheckout,
    isLoading,
    flatData
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();

  if (hasError) {
    return react_default.a.createElement("div", {
      className: classes.root
    }, react_default.a.createElement("span", {
      className: classes.errorText
    }, react_default.a.createElement(message["a" /* default */], {
      id: 'priceSummary.errorText',
      defaultMessage: 'Something went wrong. Please refresh and try again.'
    })));
  } else if (!hasItems) {
    return null;
  }

  const {
    subtotal,
    total,
    discounts,
    giftCards,
    taxes,
    shipping
  } = flatData;
  const isPriceUpdating = isUpdating || isLoading;
  const priceClass = isPriceUpdating ? classes.priceUpdating : classes.price;
  const totalPriceClass = isPriceUpdating ? classes.priceUpdating : classes.totalPrice;
  const totalPriceLabel = isCheckout ? formatMessage({
    id: 'priceSummary.total',
    defaultMessage: 'Total'
  }) : formatMessage({
    id: 'priceSummary.estimatedTotal',
    defaultMessage: 'Estimated Total'
  });
  const proceedToCheckoutButton = !isCheckout ? react_default.a.createElement("div", {
    className: classes.checkoutButton_container
  }, react_default.a.createElement(Button_button["a" /* default */], {
    disabled: isPriceUpdating,
    priority: 'high',
    onClick: handleProceedToCheckout
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'priceSummary.checkoutButton',
    defaultMessage: 'Proceed to Checkout'
  }))) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.lineItems
  }, react_default.a.createElement("span", {
    className: classes.lineItemLabel
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'priceSummary.lineItemLabel',
    defaultMessage: 'Subtotal'
  })), react_default.a.createElement("span", {
    className: priceClass
  }, react_default.a.createElement(Price_price["a" /* default */], {
    value: subtotal.value,
    currencyCode: subtotal.currency
  })), react_default.a.createElement(discountSummary, {
    classes: {
      lineItemLabel: classes.lineItemLabel,
      price: priceClass
    },
    data: discounts
  }), react_default.a.createElement(giftCardSummary_ce, {
    classes: {
      lineItemLabel: classes.lineItemLabel,
      price: priceClass
    },
    data: giftCards
  }), react_default.a.createElement(taxSummary, {
    classes: {
      lineItemLabel: classes.lineItemLabel,
      price: priceClass
    },
    data: taxes,
    isCheckout: isCheckout
  }), react_default.a.createElement(shippingSummary, {
    classes: {
      lineItemLabel: classes.lineItemLabel,
      price: priceClass
    },
    data: shipping,
    isCheckout: isCheckout
  }), react_default.a.createElement("span", {
    className: classes.totalLabel
  }, totalPriceLabel), react_default.a.createElement("span", {
    className: totalPriceClass
  }, react_default.a.createElement(Price_price["a" /* default */], {
    value: total.value,
    currencyCode: total.currency
  }))), proceedToCheckoutButton);
};

priceSummary_s(PriceSummary, "ORY6ki6TBkNiogXaypFnf6Byqwo=", false, function () {
  return [shallowMerge["a" /* default */], usePriceSummary, useIntl["a" /* default */]];
});

priceSummary_c = PriceSummary;
/* harmony default export */ var CartPage_PriceSummary_priceSummary = __webpack_exports__["a"] = (PriceSummary);

var priceSummary_c;

$RefreshReg$(priceSummary_c, "PriceSummary");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Accordion/accordion.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".accordion-root-326 {\n    border: 2px solid rgb(var(--venia-global-color-gray-400));\n    border-radius: 0.375rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "accordion-root-326"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Accordion/section.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/Accordion/section.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".section-root-2d9 {\n    border-bottom: 2px solid rgb(var(--venia-global-color-gray-400));\n}\n\n.section-root-2d9:last-of-type {\n    border-bottom-width: 0;\n}\n\n.section-contents_container-1Br {\n    padding: 0 1.5rem 1.5rem;\n}\n\n.section-contents_container-1Br:empty {\n    display: none;\n}\n\n.section-contents_container_closed-1vz {\n    display: none;\n}\n\n.section-title-tq7 {\n    font-size: var(--venia-global-fontSize-300);\n}\n\n.section-title_container-1LJ {\n    cursor: pointer;\n    display: block;\n    width: 100%;\n    margin: 0;\n}\n\n.section-title_wrapper-1Tj {\n    align-items: center;\n    display: grid;\n    gap: 1.5rem;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr;\n    height: 4.5rem;\n    justify-items: start;\n    padding: 0 1.5rem;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "section-root-2d9",
	"contents_container": "section-contents_container-1Br",
	"contents_container_closed": "section-contents_container_closed-1vz section-contents_container-1Br",
	"title": "section-title-tq7",
	"title_container": "section-title_container-1LJ",
	"title_wrapper": "section-title_wrapper-1Tj"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".priceSummary-root-1AC {\n}\n\n.priceSummary-errorText-3ld {\n    color: rgb(var(--venia-global-color-error));\n    line-height: var(--venia-global-lineHeight-300);\n}\n\n.priceSummary-lineItems-1s6 {\n    display: grid;\n    grid-gap: 0.75rem;\n    grid-template-columns: 1fr auto;\n    line-height: 1.5rem;\n}\n\n.priceSummary-lineItemLabel-2pb {\n    justify-self: start;\n}\n\n.priceSummary-price-23N {\n    justify-self: end;\n}\n\n.priceSummary-totalLabel-3Wm {\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.priceSummary-totalPrice-2r0 {\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n\n.priceSummary-priceUpdating-3L_ {\n    opacity: 0;\n}\n\n.priceSummary-checkoutButton_container-17p {\n    align-items: center;\n    display: inline-flex;\n    justify-content: center;\n    margin-top: 1rem;\n    min-height: 5.5rem;\n    width: 100%;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "priceSummary-root-1AC",
	"errorText": "priceSummary-errorText-3ld",
	"lineItems": "priceSummary-lineItems-1s6",
	"lineItemLabel": "priceSummary-lineItemLabel-2pb",
	"price": "priceSummary-price-23N",
	"totalLabel": "priceSummary-totalLabel-3Wm priceSummary-lineItemLabel-2pb",
	"totalPrice": "priceSummary-totalPrice-2r0 priceSummary-price-23N",
	"priceUpdating": "priceSummary-priceUpdating-3L_ priceSummary-price-23N",
	"checkoutButton_container": "priceSummary-checkoutButton_container-17p"
};

/***/ })

}]);
//# sourceMappingURL=28.148bb48dd85a465435b0.js.map