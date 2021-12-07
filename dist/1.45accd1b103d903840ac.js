(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./node_modules/@magento/peregrine/lib/talons/Password/usePassword.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@magento/peregrine/lib/talons/Password/usePassword.js ***!
  \****************************************************************************/
/*! exports provided: usePassword */
/*! exports used: usePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


/**
 * Returns props necessary to render a Password component.
 *
 * @returns {PasswordProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { usePassword } from '@magento/peregrine/lib/talons/Password/usePassword.js';
 */

const usePassword = () => {
  _s();

  const [visible, setVisbility] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const togglePasswordVisibility = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setVisbility(!visible); // TODO: Clicking the "toggle visibility" button does not focus the
    // input, which means `onBlur` will not be called. To work around this
    // we would need to somehow focus the input after this toggle, but that
    // probably requires passing a ref down to informed.
  }, [visible]);
  const handleBlur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setVisbility(false);
  }, []);
  return {
    handleBlur,
    togglePasswordVisibility,
    visible
  };
};
/** JSDocs type definitions */

/**
 * Object type returned by the {@link usePassword} talon.
 * It provides props data to use when rendering the password component.
 *
 * @typedef {Object} PasswordProps
 *
 * @property {Function} handleBlur Callback to invoke when field is blurred
 * @property {Function} togglePasswordVisibility Callback function to toggle password visibility
 * @property {Boolean} visible If true password should be visible. Hidden if false.
 */

_s(usePassword, "BpdPiZp8Qtaa5ydtryzeeaIsFmk=");

/***/ }),

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

/***/ "./node_modules/@magento/venia-ui/lib/util/combineValidators.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/util/combineValidators.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The function purpose is to group validation callbacks into a chain within single callback function.
 *
 * The single callback function should be passed as `validation` prop to an input component. It's being
 * called by the React Controller on a form submit.
 * The `callbacks` param is the array contains validators. Each validator should be either function or array. In case of a
 * validator is a function it is called the same way as React Controller does, with a field `value` and a form `values` params. If
 * the validator is an array, this means that it is extended validator which requires additional param for configuration.
 * The first index of that array should be a extended validator function, the second index is extended param, which is needed for
 * that function. So the function is called with three params on the form submit, with a field `value`, a form `values`
 * and an `extended param`.
 *
 * Example usage of the function:
 *
 * <input validate={combine([
 * foo
 * ])} .../>
 *
 * foo - validation function
 * It will be called on form submitting within chain as:
 * `foo(value, values)`
 *
 * Example usage of the function with extended callback:
 *
 * <input validate={combine([
 * [foo, bar]
 * ])} .../>
 *
 * foo - extended validator
 * bar - additional param
 * It will be called on form submitting within chain as:
 * `foo(value, values, bar)`
 *
 * Each callback being called one after another, according to their index in callbacks array, if one item returned the error
 * message, validation is failed, and rest validator are not supposed to be called.
 *
 * @param {Array} callbacks
 * @return {function(value, values): *}
 */
/* harmony default export */ __webpack_exports__["a"] = (callbacks => {
  if (callbacks == null || !Array.isArray(callbacks)) {
    throw new Error('Expected `callbacks` to be array.');
  }

  return (value, values) => {
    let result = null;

    for (let i = 0; i < callbacks.length; i++) {
      const callback = callbacks[i];

      if (callback == null || !Array.isArray(callback) && typeof callback !== 'function') {
        throw new Error('Expected `callbacks[' + i + ']` to be array or function.');
      }

      if (Array.isArray(callback)) {
        const [extendedCallback, extendedParam] = callback;

        if (typeof extendedCallback !== 'function') {
          throw new Error('Expected `callbacks[' + i + '][0]` to be function.');
        }

        result = extendedCallback(value, values, extendedParam);
      } else {
        result = callback(value, values);
      }

      if (result) {
        break;
      }
    }

    return result;
  };
});

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/util/formValidators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/util/formValidators.js ***!
  \*******************************************************************/
/*! exports provided: hasLengthAtLeast, hasLengthAtMost, hasLengthExactly, isRequired, mustBeChecked, validateRegionCode, validatePassword, isEqualToField, isNotEqualToField */
/*! exports used: hasLengthAtLeast, isEqualToField, isNotEqualToField, isRequired, validatePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasLengthAtLeast; });
/* unused harmony export hasLengthAtMost */
/* unused harmony export hasLengthExactly */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isRequired; });
/* unused harmony export mustBeChecked */
/* unused harmony export validateRegionCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isEqualToField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isNotEqualToField; });
/**
 * @fileoverview This file houses functions that can be used for
 * validation of form fields.
 *
 * Note that these functions should return a string error message
 * when they fail, and `undefined` when they pass.
 */
const SUCCESS = undefined;
const hasLengthAtLeast = (value, values, minimumLength) => {
  const message = {
    id: 'validation.hasLengthAtLeast',
    defaultMessage: 'Must contain more characters',
    value: minimumLength
  };

  if (!value || value.length < minimumLength) {
    return message;
  }

  return SUCCESS;
};
const hasLengthAtMost = (value, values, maximumLength) => {
  if (value && value.length > maximumLength) {
    const message = {
      id: 'validation.hasLengthAtMost',
      defaultMessage: 'Must have less characters',
      value: maximumLength
    };
    return message;
  }

  return SUCCESS;
};
const hasLengthExactly = (value, values, length) => {
  if (value && value.length !== length) {
    const message = {
      id: 'validation.hasLengthExactly',
      defaultMessage: 'Does not have exact number of characters',
      value: length
    };
    return message;
  }

  return SUCCESS;
};
/**
 * isRequired is provided here for convenience but it is inherently ambiguous and therefore we don't recommend using it.
 * Consider using more specific validators such as `hasLengthAtLeast` or `mustBeChecked`.
 */

const isRequired = value => {
  const FAILURE = {
    id: 'validation.isRequired',
    defaultMessage: 'Is required.'
  }; // The field must have a value (no null or undefined) and
  // if it's a boolean, it must be `true`.

  if (!value) return FAILURE; // If it is a number or string, it must have at least one character of input (after trim).

  const stringValue = String(value).trim();
  const measureResult = hasLengthAtLeast(stringValue, null, 1);
  if (measureResult) return FAILURE;
  return SUCCESS;
};
const mustBeChecked = value => {
  const message = {
    id: 'validation.mustBeChecked',
    defaultMessage: 'Must be checked.'
  };
  if (!value) return message;
  return SUCCESS;
};
const validateRegionCode = (value, values, countries) => {
  const countryCode = "US";
  const country = countries.find(({
    id
  }) => id === countryCode);

  if (!country) {
    const invalidCountry = {
      id: 'validation.invalidCountry',
      defaultMessage: `Country "${countryCode}" is not an available country.`,
      value: countryCode
    };
    return invalidCountry;
  }

  const {
    available_regions: regions
  } = country;

  if (!(Array.isArray(regions) && regions.length)) {
    const invalidRegions = {
      id: 'validation.invalidRegions',
      defaultMessage: `Country "${countryCode}" does not contain any available regions.`,
      value: countryCode
    };
    return invalidRegions;
  }

  const region = regions.find(({
    code
  }) => code === value);

  if (!region) {
    const invalidAbbrev = {
      id: 'validation.invalidAbbreviation',
      defaultMessage: 'That is not a valid state abbreviation.',
      value: value
    };
    return invalidAbbrev;
  }

  return SUCCESS;
};
const validatePassword = value => {
  const count = {
    lower: 0,
    upper: 0,
    digit: 0,
    special: 0
  };

  for (const char of value) {
    if (/[a-z]/.test(char)) count.lower++;else if (/[A-Z]/.test(char)) count.upper++;else if (/\d/.test(char)) count.digit++;else if (/\S/.test(char)) count.special++;
  }

  if (Object.values(count).filter(Boolean).length < 3) {
    const message = {
      id: 'validation.validatePassword',
      defaultMessage: 'A password must contain at least 3 of the following: lowercase, uppercase, digits, special characters.'
    };
    return message;
  }

  return SUCCESS;
};
const isEqualToField = (value, values, fieldKey) => {
  const message = {
    id: 'validation.isEqualToField',
    defaultMessage: 'Fields must match',
    value: fieldKey
  };
  return value === values[fieldKey] ? SUCCESS : message;
};
const isNotEqualToField = (value, values, fieldKey) => {
  const message = {
    id: 'validation.isNotEqualToField',
    defaultMessage: 'Fields must be different',
    value: fieldKey
  };
  return value !== values[fieldKey] ? SUCCESS : message;
};

/***/ })

}]);
//# sourceMappingURL=1.45accd1b103d903840ac.js.map