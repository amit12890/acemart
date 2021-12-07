(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/magento/pagebuilder/ContentTypes/Map/map.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Map/map.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".map-root-2k8 {\n    height: 300px;\n}\n.map-root-2k8 .gm-style .gm-style-iw-c {\n    padding: 18px;\n}\n.map-root-2k8 .map-popup {\n    min-width: 200px;\n}\n.map-root-2k8 .map-popup h3 {\n    margin: 0 0 18px 0;\n    font-weight: 300;\n}\n.map-root-2k8 .map-popup p {\n    font-size: 16px;\n}\n.map-root-2k8 .map-popup p.map-comment {\n    font-size: 14px;\n}\n.map-root-2k8 .gm-style img {\n    max-width: none;\n    max-height: none;\n    margin: 0;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "map-root-2k8"
};

/***/ }),

/***/ "./node_modules/load-google-maps-api/index.js":
/*!****************************************************!*\
  !*** ./node_modules/load-google-maps-api/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

const API_URL = 'https://maps.googleapis.com/maps/api/js'
const CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

const optionsKeys = ['channel', 'client', 'key', 'language', 'region', 'v']

let promise = null

module.exports = function (options = {}) {
  promise =
    promise ||
    new Promise(function (resolve, reject) {
      // Reject the promise after a timeout
      const timeoutId = setTimeout(function () {
        window[CALLBACK_NAME] = function () {} // Set the on load callback to a no-op
        reject(new Error('Could not load the Google Maps API'))
      }, options.timeout || 10000)

      // Hook up the on load callback
      window[CALLBACK_NAME] = function () {
        if (timeoutId !== null) {
          clearTimeout(timeoutId)
        }
        resolve(window.google.maps)
        delete window[CALLBACK_NAME]
      }

      // Prepare the `script` tag to be inserted into the page
      const scriptElement = document.createElement('script')
      const params = [`callback=${CALLBACK_NAME}`]
      optionsKeys.forEach(function (key) {
        if (options[key]) {
          params.push(`${key}=${options[key]}`)
        }
      })
      if (options.libraries && options.libraries.length) {
        params.push(`libraries=${options.libraries.join(',')}`)
      }
      scriptElement.src = `${options.apiUrl || API_URL}?${params.join('&')}`

      // Insert the `script` tag
      document.body.appendChild(scriptElement)
    })
  return promise
}


/***/ }),

/***/ "./node_modules/lodash.escape/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.escape/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the
 * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/magento/pagebuilder/ContentTypes/Map/index.js":
/*!***********************************************************************!*\
  !*** ./src/magento/pagebuilder/ContentTypes/Map/index.js + 2 modules ***!
  \***********************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/magento/pagebuilder/ContentTypes/Map/configAggregator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Map/map.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/load-google-maps-api/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash.escape/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ pagebuilder_ContentTypes_Map_map; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/load-google-maps-api/index.js
var load_google_maps_api = __webpack_require__("./node_modules/load-google-maps-api/index.js");
var load_google_maps_api_default = /*#__PURE__*/__webpack_require__.n(load_google_maps_api);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/magento/pagebuilder/ContentTypes/Map/map.css
var Map_map = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/magento/pagebuilder/ContentTypes/Map/map.css");
var map_default = /*#__PURE__*/__webpack_require__.n(Map_map);

// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Map/map.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(map_default.a, options);



/* harmony default export */ var ContentTypes_Map_map = (map_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/lodash.escape/index.js
var lodash_escape = __webpack_require__("./node_modules/lodash.escape/index.js");
var lodash_escape_default = /*#__PURE__*/__webpack_require__.n(lodash_escape);

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./src/magento/pagebuilder/ContentTypes/Map/configAggregator.js
var configAggregator = __webpack_require__("./src/magento/pagebuilder/ContentTypes/Map/configAggregator.js");

// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Map/map.js
var _s = $RefreshSig$();









const getLocationFormattedAsHtml = location => {
  const name = location.name ? `<h3>${lodash_escape_default()(location.name)}</h3>` : '';
  const comment = location.comment ? `<p class="map-comment">${lodash_escape_default()(location.comment).replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>` : '';
  const phone = location.phone ? `Phone: ${lodash_escape_default()(location.phone)}<br>` : '';
  const address = location.address ? `${lodash_escape_default()(location.address)}<br>` : '';
  const city = location.city ? lodash_escape_default()(location.city) : '';
  const country = location.country ? lodash_escape_default()(location.country) : '';
  const state = location.state ? lodash_escape_default()(location.state) + ' ' : '';
  const zipCode = location.zipcode ? lodash_escape_default()(location.zipcode) : '';
  const cityComma = city.length && (state.length || zipCode.length) ? ', ' : '';
  const lineBreak = city.length || zipCode.length ? '<br>' : '';
  return `
    <div class="map-popup">
        ${name}
        ${comment}
        <p><span>${phone}${address}${city}${cityComma}${state}${zipCode}${lineBreak}${country}</span></p>
    </div>
`;
};
/**
 * Page Builder Map component.
 *
 * This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.
 *
 * @typedef GoogleMap
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Map.
 */


const GoogleMap = props => {
  _s();

  const mapElement = Object(react["useRef"])(null);
  const classes = Object(shallowMerge["a" /* default */])(ContentTypes_Map_map, props.classes);
  const {
    apiKey,
    locations,
    height,
    mapOptions,
    textAlign,
    border,
    borderColor,
    borderWidth,
    borderRadius,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    cssClasses = []
  } = props;
  const dynamicStyles = {
    height,
    textAlign,
    border,
    borderColor,
    borderWidth,
    borderRadius,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  };
  Object(react["useEffect"])(() => {
    if (!locations.length) {
      return;
    }

    let googleMapsEvent;
    const mapOverlayInstances = [];
    const apiOptions = {
      key: apiKey,
      v: '3'
    };
    load_google_maps_api_default()(apiOptions).then(googleMaps => {
      googleMapsEvent = googleMaps.event;
      const map = new googleMaps.Map(mapElement.current, mapOptions);
      const positions = [];
      let activeInfoWindow;
      locations.forEach(location => {
        const position = new googleMaps.LatLng(location.position.latitude, location.position.longitude);
        positions.push(position);
        const marker = new googleMaps.Marker({
          map,
          position,
          title: location.name
        });
        const infoWindow = new googleMaps.InfoWindow({
          content: getLocationFormattedAsHtml(location),
          maxWidth: 350
        });
        marker.addListener('click', () => {
          // close other open info window if present
          if (activeInfoWindow) {
            activeInfoWindow.close();
          }

          infoWindow.open(map, marker);
          activeInfoWindow = infoWindow;
        });
        mapOverlayInstances.push(marker);
        mapOverlayInstances.push(infoWindow);
      }); // set the bounds of the map to the perimeter of the furthest locations in either direction

      if (positions.length > 1) {
        const latitudeLongitudeBounds = new googleMaps.LatLngBounds();
        positions.forEach(position => {
          latitudeLongitudeBounds.extend(position);
        });
        map.fitBounds(latitudeLongitudeBounds);
      } // zoom to default zoom if there is only a single location


      if (positions.length === 1) {
        map.setCenter(positions[0]);
        map.setZoom(configAggregator["b" /* mapDefaultProps */].mapOptions.zoom);
      }
    }).catch(error => console.error(error));
    return () => {
      if (!googleMapsEvent) {
        return;
      }

      mapOverlayInstances.forEach(mapOverlayInstance => {
        googleMapsEvent.clearInstanceListeners(mapOverlayInstance);
      });
    };
  }, [apiKey, locations, mapOptions]); // If there are no locations configured, do not render the map

  if (!locations.length) {
    return null;
  }

  return react_default.a.createElement("div", {
    ref: mapElement,
    style: dynamicStyles,
    className: [classes.root, ...cssClasses].join(' ')
  });
};
/**
 * Props for {@link GoogleMap}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the Map
 * @property {String} classes.root CSS class for the root element
 * @property {String} apiKey API key for Maps API usage
 * @property {String} height CSS height property
 * @property {Object} mapOptions specific Google Maps API options for Map object instantiation
 * @property {Array} locations Locations on the map for Marker placement
 * @property {String} textAlign Alignment of content within the row
 * @property {String} border CSS border property
 * @property {String} borderColor CSS border color property
 * @property {String} borderWidth CSS border width property
 * @property {String} borderRadius CSS border radius property
 * @property {String} marginTop CSS margin top property
 * @property {String} marginRight CSS margin right property
 * @property {String} marginBottom CSS margin bottom property
 * @property {String} marginLeft CSS margin left property
 * @property {String} paddingTop CSS padding top property
 * @property {String} paddingRight CSS padding right property
 * @property {String} paddingBottom CSS padding bottom property
 * @property {String} paddingLeft CSS padding left property
 * @property {Array} cssClasses List of CSS classes to be applied to the component
 */


_s(GoogleMap, "ouiJepv4FTA0yjF1yry3ZqIDB0c=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = GoogleMap;
GoogleMap.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  apiKey: prop_types["string"],
  height: prop_types["string"],
  mapOptions: Object(prop_types["shape"])({
    zoom: prop_types["number"],
    center: Object(prop_types["shape"])({
      lat: prop_types["number"],
      lng: prop_types["number"]
    }),
    scrollwheel: prop_types["bool"],
    disableDoubleClickZoom: prop_types["bool"],
    disableDefaultUI: prop_types["bool"],
    mapTypeControl: prop_types["bool"],
    mapTypeControlStyle: Object(prop_types["shape"])({
      style: prop_types["number"]
    })
  }),
  locations: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
    position: Object(prop_types["shape"])({
      latitude: prop_types["number"].isRequired,
      longitude: prop_types["number"].isRequired
    }),
    name: prop_types["string"],
    phone: prop_types["string"],
    address: prop_types["string"],
    city: prop_types["string"],
    state: prop_types["string"],
    zipcode: prop_types["string"],
    country: prop_types["string"],
    comment: prop_types["string"],
    styles: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
      featureType: prop_types["string"],
      elementType: prop_types["string"],
      stylers: Object(prop_types["arrayOf"])(prop_types["object"])
    }))
  })).isRequired,
  textAlign: prop_types["string"],
  border: prop_types["string"],
  borderColor: prop_types["string"],
  borderWidth: prop_types["string"],
  borderRadius: prop_types["string"],
  marginTop: prop_types["string"],
  marginRight: prop_types["string"],
  marginBottom: prop_types["string"],
  marginLeft: prop_types["string"],
  paddingTop: prop_types["string"],
  paddingRight: prop_types["string"],
  paddingBottom: prop_types["string"],
  cssClasses: Object(prop_types["arrayOf"])(prop_types["string"])
};
GoogleMap.defaultProps = configAggregator["b" /* mapDefaultProps */];
/* harmony default export */ var pagebuilder_ContentTypes_Map_map = (GoogleMap);

var _c;

$RefreshReg$(_c, "GoogleMap");
// CONCATENATED MODULE: ./src/magento/pagebuilder/ContentTypes/Map/index.js


/***/ })

}]);
//# sourceMappingURL=72.564351a364cd758d77c0.js.map