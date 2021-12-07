(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js":
/*!************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/hooks/useScrollIntoView.js ***!
  \************************************************************************/
/*! exports provided: useScrollIntoView */
/*! exports used: useScrollIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useScrollIntoView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


const OPTIONS_DEFAULTS = {
  behavior: 'smooth',
  block: 'center'
};
/**
 * Scrolls a ref into view on truthiness of a thing.
 *
 * @param {React.Ref} ref
 * @param {Boolean} shouldScroll allows scrolling if truthy
 * @param {OPTIONS_DEFAULTS} options https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 */

const useScrollIntoView = (ref, shouldScroll, options = OPTIONS_DEFAULTS) => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref.current && ref.current instanceof HTMLElement && shouldScroll) {
      ref.current.scrollIntoView(options);
    }
  }, [options, ref, shouldScroll]);
};

_s(useScrollIntoView, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/FormError/useFormError.js ***!
  \******************************************************************************/
/*! exports provided: useFormError */
/*! exports used: useFormError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFormError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_deriveErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/deriveErrorMessage */ "./node_modules/@magento/peregrine/lib/util/deriveErrorMessage.js");
var _s = $RefreshSig$();



const useFormError = props => {
  _s();

  const {
    errors
  } = props;
  const derivedErrorMessage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_util_deriveErrorMessage__WEBPACK_IMPORTED_MODULE_1__[/* deriveErrorMessage */ "a"])(errors), [errors]);
  return {
    errorMessage: derivedErrorMessage
  };
};

_s(useFormError, "gxRNi0NjhepoxP44ATHAyuhTTPE=");

/***/ }),

/***/ "./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js ***!
  \********************************************************************************/
/*! exports provided: findMatchingVariant */
/*! exports used: findMatchingVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findMatchingVariant; });
/**
 * TODO Document
 */
const findMatchingVariant = ({
  variants,
  optionCodes,
  optionSelections
}) => {
  return variants.find(({
    attributes,
    product
  }) => {
    const customAttributes = (attributes || []).reduce((map, {
      code,
      value_index
    }) => new Map(map).set(code, value_index), new Map());

    for (const [id, value] of optionSelections) {
      const code = optionCodes.get(id);
      const matchesStandardAttribute = product[code] === value;
      const matchesCustomAttribute = customAttributes.get(code) === value; // if any option selection fails to match any standard attribute
      // and also fails to match any custom attribute
      // then this isn't the correct variant

      if (!matchesStandardAttribute && !matchesCustomAttribute) {
        return false;
      }
    } // otherwise, every option selection matched
    // and this is the correct variant


    return true;
  });
};

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/index.js + 8 modules ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/ProductOptions/options.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ editModal; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useEditModal.js
var _s = $RefreshSig$();


/**
 * This talon contains logic for a product edit modal used on a cart page.
 * It returns prop data for rendering an interactive modal component.
 *
 * @function
 *
 * @return {EditModalTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useEditModal } from '@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useEditModal';
 */

const useEditModal = () => {
  _s();

  const [variantPrice, setVariantPrice] = Object(react["useState"])(null);
  return {
    setVariantPrice,
    variantPrice
  };
};
/** JSDocs type definitions */

/**
 * Object type returned by the {@link useEditModal} talon.
 * It provides props data for rendering an edit modal component.
 *
 * @typedef {Object} EditModalTalonProps
 *
 * @property {function} setVariantPrice Function for setting a product's variant price.
 * @property {Object} variantPrice The variant price for a product. See [Money object]{@link https://devdocs.magento.com/guides/v2.4/graphql/product/product-interface.html#Money}.
 */

_s(useEditModal, "kqGje1e3NRllFaUavLjmU5J/8BU=");
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js
var findMatchingProductVariant = __webpack_require__("./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useProductForm.js
var useProductForm_s = $RefreshSig$();





/**
 * This talon contains logic for a product edit form.
 * It performs effects and returns data for rendering the component inside a modal container.
 *
 * This talon performs the following effects:
 *
 * - Manage the updating state of the cart while form data is being saved
 * - Set the variant price on a product depending on the product's options
 *
 * @function
 *
 * @param {Object} props
 * @param {Object} props.cartItem The cart item to configure on the form
 * @param {GraphQLAST} props.getConfigurableOptionsQuery GraphQL query to get the configurable options for a product.
 * @param {function} props.setIsCartUpdating Function for setting the updating state for the shopping cart.
 * @param {function} props.setVariantPrice Function for setting the variant price on a product.
 * @param {GraphQLAST} props.updateConfigurableOptionsMutation GraphQL mutation for updating the configurable options for a product.
 * @param {GraphQLAST} props.updateQuantityMutation GraphQL mutation for updating the quantity of a product in a cart.
 * @param {function} props.setActiveEditItem Function for setting the actively editing item.
 *
 * @return {ProductFormTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useProductForm } from '@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useProductForm';
 */

const useProductForm = props => {
  useProductForm_s();

  const {
    cartItem,
    getConfigurableOptionsQuery,
    setIsCartUpdating,
    setVariantPrice,
    updateConfigurableOptionsMutation,
    updateQuantityMutation,
    setActiveEditItem
  } = props;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const [optionSelections, setOptionSelections] = Object(react["useState"])(new Map());
  const handleClose = Object(react["useCallback"])(() => {
    setActiveEditItem(null);
  }, [setActiveEditItem]);
  const [updateItemQuantity, {
    called: updateQuantityCalled,
    error: updateQuantityError,
    loading: updateQuantityLoading
  }] = Object(client["useMutation"])(updateQuantityMutation);
  const [updateConfigurableOptions, {
    called: updateConfigurableCalled,
    error: updateConfigurableError,
    loading: updateConfigurableLoading
  }] = Object(client["useMutation"])(updateConfigurableOptionsMutation);
  const isSaving = updateQuantityCalled && updateQuantityLoading || updateConfigurableCalled && updateConfigurableLoading;
  Object(react["useEffect"])(() => {
    setIsCartUpdating(isSaving);
  }, [isSaving, setIsCartUpdating]);
  const {
    data,
    error,
    loading
  } = Object(client["useQuery"])(getConfigurableOptionsQuery, {
    skip: !cartItem,
    variables: {
      sku: cartItem ? cartItem.product.sku : null
    }
  });
  const handleOptionSelection = Object(react["useCallback"])((optionId, selection) => {
    const nextOptionSelections = new Map([...optionSelections]);
    const initialSelection = cartItem.configurable_options.find(option => option.id == optionId);

    if (initialSelection.value_id === selection) {
      nextOptionSelections.delete(optionId);
    } else {
      nextOptionSelections.set(optionId, selection);
    }

    setOptionSelections(nextOptionSelections);
  }, [cartItem, optionSelections]);
  const configItem = !loading && !error && data ? data.products.items[0] : null;
  const configurableOptionCodes = Object(react["useMemo"])(() => {
    const optionCodeMap = new Map();

    if (configItem) {
      configItem.configurable_options.forEach(option => {
        optionCodeMap.set(option.attribute_id, option.attribute_code);
      });
    }

    return optionCodeMap;
  }, [configItem]);
  const selectedVariant = Object(react["useMemo"])(() => {
    if (optionSelections.size && configItem) {
      cartItem.configurable_options.forEach(option => {
        if (!optionSelections.has(`${option.id}`)) {
          optionSelections.set(`${option.id}`, option.value_id);
        }
      });
      return Object(findMatchingProductVariant["a" /* findMatchingVariant */])({
        variants: configItem.variants,
        optionCodes: configurableOptionCodes,
        optionSelections
      });
    }
  }, [cartItem, configItem, configurableOptionCodes, optionSelections]);
  Object(react["useEffect"])(() => {
    let variantPrice = null;

    if (selectedVariant) {
      const {
        product
      } = selectedVariant;
      const {
        price
      } = product;
      const {
        regularPrice
      } = price;
      variantPrice = regularPrice.amount;
    }

    setVariantPrice(variantPrice);
  }, [selectedVariant, setVariantPrice]);
  const handleSubmit = Object(react["useCallback"])(async formValues => {
    try {
      if (selectedVariant) {
        await updateConfigurableOptions({
          variables: {
            cartId,
            cartItemId: cartItem.id,
            parentSku: cartItem.product.sku,
            variantSku: selectedVariant.product.sku,
            quantity: formValues.quantity
          }
        });
        setOptionSelections(new Map());
      } else if (formValues.quantity !== cartItem.quantity) {
        await updateItemQuantity({
          variables: {
            cartId,
            cartItemId: cartItem.id,
            quantity: formValues.quantity
          }
        });
      }
    } catch {
      return;
    }

    handleClose();
  }, [cartId, cartItem, handleClose, selectedVariant, updateConfigurableOptions, updateItemQuantity]);
  const errors = Object(react["useMemo"])(() => new Map([['updateQuantityMutation', updateQuantityError], ['updateConfigurableOptionsMutation', updateConfigurableError]]), [updateConfigurableError, updateQuantityError]);
  return {
    configItem,
    errors,
    handleOptionSelection,
    handleSubmit,
    isLoading: !!loading,
    isSaving,
    isDialogOpen: cartItem !== null,
    handleClose
  };
};
/** JSDocs type definitions */

/**
 * Object type returned by the {@link useProductForm} talon.
 * It provides props data for a product form UI component inside a modal.
 *
 * @typedef {Object} ProductFormTalonProps
 *
 * @property {Object} configItem Cart item to configure
 * @property {Array<Error>} errors An array of form errors resulting from a configuration or quantity value
 * @property {function} handleOptionSelection A callback function handling an option selection event
 * @property {function} handleSubmit A callback function for handling form submission
 * @property {boolean} isLoading True if the form is loading data. False otherwise.
 * @property {boolean} isSaving True if the form is saving data. False otherwise.
 * @property {boolean} isDialogOpen True if the form is visible. False otherwise.
 * @property {function} handleClose A callback function for handling form closing
 */

useProductForm_s(useProductForm, "bnu3zlqBTg/tNCJc7fhWSNCt40E=", false, function () {
  return [cart["b" /* useCartContext */], client["useMutation"], client["useMutation"], client["useQuery"]];
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/options.js + 11 modules
var options = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/ProductOptions/options.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.js + 1 modules
var quantity = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.css
var productForm = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.css");
var productForm_default = /*#__PURE__*/__webpack_require__.n(productForm);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.css

            

var productForm_options = {"injectType":"styleTag"};

productForm_options.insert = "head";
productForm_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(productForm_default.a, productForm_options);



/* harmony default export */ var EditModal_productForm = (productForm_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js + 1 modules
var cartPageFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productFormFragment.gql.js

const ProductFormFragment = client["gql"]`
    fragment ProductFormFragment on ProductInterface {
        id
        sku
        ... on ConfigurableProduct {
            configurable_options {
                attribute_code
                attribute_id
                id
                label
                values {
                    default_label
                    label
                    store_label
                    use_default_value
                    value_index
                    swatch_data {
                        ... on ImageSwatchData {
                            thumbnail
                        }
                        value
                    }
                }
            }
            variants {
                attributes {
                    code
                    value_index
                }
                product {
                    id
                    price {
                        regularPrice {
                            amount {
                                currency
                                value
                            }
                        }
                    }
                    sku
                }
            }
        }
    }
`;
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js + 1 modules
var dialog = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var Price_price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 2 modules
var Image_image = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/image.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.css
var productDetail = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.css");
var productDetail_default = /*#__PURE__*/__webpack_require__.n(productDetail);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.css

            

var productDetail_options = {"injectType":"styleTag"};

productDetail_options.insert = "head";
productDetail_options.singleton = false;

var productDetail_update = injectStylesIntoStyleTag_default()(productDetail_default.a, productDetail_options);



/* harmony default export */ var EditModal_productDetail = (productDetail_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.js
var productDetail_s = $RefreshSig$();







const IMAGE_SIZE = 240;

const ProductDetail = props => {
  productDetail_s();

  const {
    item,
    variantPrice
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const {
    prices,
    product
  } = item;
  const {
    price
  } = prices;
  const {
    currency,
    value: unitPrice
  } = variantPrice || price;
  const {
    name,
    sku,
    small_image: smallImage,
    stock_status: stockStatusValue
  } = product;
  const {
    url: imageURL
  } = smallImage;
  const stockStatusLabels = new Map([['IN_STOCK', formatMessage({
    id: 'productDetail.inStock',
    defaultMessage: 'In stock'
  })], ['OUT_OF_STOCK', formatMessage({
    id: 'productDetail.outOfStock',
    defaultMessage: 'Out of stock'
  })]]);
  const stockStatus = stockStatusLabels.get(stockStatusValue) || formatMessage({
    id: 'productDetail.unknown',
    defaultMessage: 'Unknown'
  });
  const classes = Object(shallowMerge["a" /* default */])(EditModal_productDetail, props.classes);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(Image_image["a" /* default */], {
    alt: name,
    classes: {
      image: classes.image,
      root: classes.imageContainer
    },
    width: IMAGE_SIZE,
    resource: imageURL
  }), react_default.a.createElement("span", {
    className: classes.productName
  }, name), react_default.a.createElement("div", {
    className: classes.stockRow
  }, react_default.a.createElement("span", null, react_default.a.createElement(components_message["a" /* default */], {
    id: 'productDetail.skuNumber',
    defaultMessage: 'SKU #',
    values: {
      sku
    }
  })), react_default.a.createElement("span", null, stockStatus)), react_default.a.createElement("div", {
    className: classes.price
  }, react_default.a.createElement(Price_price["a" /* default */], {
    currencyCode: currency,
    value: unitPrice
  })));
};

productDetail_s(ProductDetail, "6HbKEGM4/yt1mWqe8hniFTWRimA=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

_c = ProductDetail;
/* harmony default export */ var ProductListing_EditModal_productDetail = (ProductDetail);

var _c;

$RefreshReg$(_c, "ProductDetail");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.js
var productForm_s = $RefreshSig$();
















const ProductForm = props => {
  productForm_s();

  const {
    item: cartItem,
    setIsCartUpdating,
    variantPrice,
    setVariantPrice,
    setActiveEditItem
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const talonProps = useProductForm({
    cartItem,
    getConfigurableOptionsQuery: GET_CONFIGURABLE_OPTIONS,
    setIsCartUpdating,
    setVariantPrice,
    updateConfigurableOptionsMutation: UPDATE_CONFIGURABLE_OPTIONS_MUTATION,
    updateQuantityMutation: UPDATE_QUANTITY_MUTATION,
    setActiveEditItem
  });
  const {
    configItem,
    errors,
    handleOptionSelection,
    handleSubmit,
    isLoading,
    isSaving,
    isDialogOpen,
    handleClose
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(EditModal_productForm, props.classes);
  const dialogButtonsDisabled = isLoading;
  const dialogSubmitButtonDisabled = isSaving;
  const dialogFormProps = {
    initialValues: cartItem
  };
  const message = isLoading ? formatMessage({
    id: 'productForm.fetchingProductOptions',
    defaultMessage: 'Fetching Product Options...'
  }) ? isSaving : formatMessage({
    id: 'productForm.updatingCart',
    defaultMessage: 'Updating Cart...'
  }) : null;
  const maybeLoadingIndicator = isLoading || isSaving ? react_default.a.createElement(indicator["a" /* default */], {
    classes: {
      root: classes.loading
    }
  }, message) : null;

  if (cartItem && !isLoading && !configItem) {
    return react_default.a.createElement("span", {
      className: classes.dataError
    }, react_default.a.createElement(components_message["a" /* default */], {
      id: 'productForm.dataError',
      defaultMessage: 'Something went wrong. Please refresh and try again.'
    }));
  }

  const dialogContent = cartItem && configItem ? react_default.a.createElement("div", null, react_default.a.createElement(formError["a" /* default */], {
    classes: {
      root: classes.errorContainer
    },
    errors: Array.from(errors.values()),
    scrollOnError: false
  }), react_default.a.createElement(ProductListing_EditModal_productDetail, {
    item: cartItem,
    variantPrice: variantPrice
  }), react_default.a.createElement(options["a" /* default */], {
    classes: {
      root: classes.optionRoot
    },
    onSelectionChange: handleOptionSelection,
    options: configItem.configurable_options,
    selectedValues: cartItem.configurable_options
  }), react_default.a.createElement("h3", {
    className: classes.quantityLabel
  }, react_default.a.createElement(components_message["a" /* default */], {
    id: 'productForm.quantity',
    defaultMessage: 'Quantity'
  })), react_default.a.createElement(quantity["a" /* QuantityFields */], {
    classes: {
      root: classes.quantityRoot
    },
    initialValue: cartItem.quantity,
    itemId: cartItem.id
  })) : null;
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(dialog["a" /* default */], {
    classes: {
      contents: classes.contents
    },
    confirmText: 'Update',
    confirmTranslationId: 'productForm.submit',
    formProps: dialogFormProps,
    isOpen: isDialogOpen,
    onCancel: handleClose,
    onConfirm: handleSubmit,
    shouldDisableAllButtons: dialogButtonsDisabled,
    shouldDisableConfirmButton: dialogSubmitButtonDisabled,
    shouldUnmountOnHide: false,
    title: formatMessage({
      id: 'editModal.headerText',
      defaultMessage: 'Edit Item'
    })
  }, maybeLoadingIndicator, dialogContent));
};

productForm_s(ProductForm, "FhAK8t+hr0rfB4HQmTAXGT8mUyo=", false, function () {
  return [useIntl["a" /* default */], useProductForm, shallowMerge["a" /* default */]];
});

productForm_c = ProductForm;
/* harmony default export */ var ProductListing_EditModal_productForm = (ProductForm);
const GET_CONFIGURABLE_OPTIONS = client["gql"]`
    query productDetailBySku($sku: String) {
        products(filter: { sku: { eq: $sku } }) {
            items {
                id
                ...ProductFormFragment
            }
        }
    }
    ${ProductFormFragment}
`;
const UPDATE_QUANTITY_MUTATION = client["gql"]`
    mutation UpdateCartItemQuantity(
        $cartId: String!
        $cartItemId: Int!
        $quantity: Float!
    ) {
        updateCartItems(
            input: {
                cart_id: $cartId
                cart_items: [{ cart_item_id: $cartItemId, quantity: $quantity }]
            }
        ) @connection(key: "updateCartItems") {
            cart {
                id
                ...CartPageFragment
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
const UPDATE_CONFIGURABLE_OPTIONS_MUTATION = client["gql"]`
    mutation UpdateConfigurableOptions(
        $cartId: String!
        $cartItemId: Int!
        $parentSku: String!
        $variantSku: String!
        $quantity: Float!
    ) {
        addConfigurableProductsToCart(
            input: {
                cart_id: $cartId
                cart_items: [
                    {
                        data: { quantity: $quantity, sku: $variantSku }
                        parent_sku: $parentSku
                    }
                ]
            }
        ) @connection(key: "addConfigurableProductsToCart") {
            cart {
                id
            }
        }

        removeItemFromCart(
            input: { cart_id: $cartId, cart_item_id: $cartItemId }
        ) @connection(key: "removeItemFromCart") {
            cart {
                id
                ...CartPageFragment
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;

var productForm_c;

$RefreshReg$(productForm_c, "ProductForm");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/editModal.js
var editModal_s = $RefreshSig$();




/**
 * A child component of the ProductListing component.
 * This component renders an edit modal for a product.
 *
 * @param {Object} props
 * @param {Object} props.item Product to edit.
 * @param {function} props.setActiveEditItem Function for setting the actively editing item
 * See [productListingFragments.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js}
 * for a list of properties for this object.
 * @param {Function} props.setIsCartUpdating Function for setting the updating state of the cart.
 * @param {Object} props.classes CSS className overrides.
 * See [editModal.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/EditModal/editModal.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import EditModal from "@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal";
 */

const EditModal = props => {
  editModal_s();

  const {
    item,
    setActiveEditItem,
    setIsCartUpdating
  } = props;
  const talonProps = useEditModal();
  const {
    setVariantPrice,
    variantPrice
  } = talonProps;
  return react_default.a.createElement(ProductListing_EditModal_productForm, {
    item: item,
    setIsCartUpdating: setIsCartUpdating,
    setVariantPrice: setVariantPrice,
    variantPrice: variantPrice,
    setActiveEditItem: setActiveEditItem
  });
};

editModal_s(EditModal, "LDxLeAeNsHoyXr3zboUVP1hMnyE=", false, function () {
  return [useEditModal];
});

editModal_c = EditModal;
/* harmony default export */ var editModal = (EditModal);

var editModal_c;

$RefreshReg$(editModal_c, "EditModal");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/index.js


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".productDetail-root-rB- {\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n    display: grid;\n    gap: 1rem;\n    padding-bottom: 1rem;\n}\n\n.productDetail-imageContainer-3nT {\n    justify-self: center;\n}\n\n.productDetail-image-2In {\n    padding: 0 2rem;\n}\n\n.productDetail-productName-1GU {\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n.productDetail-stockRow-1NG {\n    display: flex;\n    font-weight: 300;\n    font-size: 0.875rem;\n    justify-content: space-between;\n}\n\n.productDetail-price-1PD {\n    font-weight: 600;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "productDetail-root-rB-",
	"imageContainer": "productDetail-imageContainer-3nT",
	"image": "productDetail-image-2In",
	"productName": "productDetail-productName-1GU",
	"stockRow": "productDetail-stockRow-1NG",
	"price": "productDetail-price-1PD"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../Dialog/dialog.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../quantity.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../LoadingIndicator/indicator.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.css"), "");

// Module
exports.push([module.i, ".productForm-contents-IVE {\n    position: relative;\n}\n\n.productForm-optionRoot-2ZK {\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n    padding: 1rem 0;\n}\n\n.productForm-quantityLabel-29I {\n    font-size: 1rem;\n    font-weight: 600;\n    line-height: 1.5;\n    margin-bottom: 1.5rem;\n    padding-top: 1rem;\n}\n\n.productForm-quantityRoot-3Mr {\n    grid-template-columns: auto 4rem auto;\n    justify-content: start;\n    padding: 0 1rem;\n}\n\n.productForm-loading-3Yl {\n    height: unset;\n    left: 0;\n    position: absolute;\n    text-align: center;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 10;\n}\n\n.productForm-dataError-1GX {\n    color: rgb(var(--venia-global-color-error));\n    display: inline-block;\n    padding-top: 1rem;\n    line-height: var(--venia-global-lineHeight-300);\n}\n\n.productForm-errorContainer-3Q6 {\n    padding-top: 1rem;\n}\n", ""]);

// Exports
exports.locals = {
	"contents": "productForm-contents-IVE " + __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../Dialog/dialog.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.css").locals["contents"] + "",
	"optionRoot": "productForm-optionRoot-2ZK",
	"quantityLabel": "productForm-quantityLabel-29I",
	"quantityRoot": "productForm-quantityRoot-3Mr " + __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../quantity.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/quantity.css").locals["root"] + "",
	"loading": "productForm-loading-3Yl " + __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../LoadingIndicator/indicator.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.css").locals["root"] + "",
	"dataError": "productForm-dataError-1GX",
	"errorContainer": "productForm-errorContainer-3Q6"
};

/***/ })

}]);
//# sourceMappingURL=61.ffe1dabe561f74ace2a9.js.map