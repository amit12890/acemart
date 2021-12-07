(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~RootCmp_CMS_PAGE__default"],{

/***/ "./node_modules/@magento/venia-ui/lib/RootComponents/CMS/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/RootComponents/CMS/index.js + 11 modules ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/app.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Head/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/ErrorView/errorView.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/RootComponents/CMS/cms.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryList.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryTile.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ RootComponents_CMS_cms; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js
var LoadingIndicator_static = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/app.js
var app = __webpack_require__("./node_modules/@magento/peregrine/lib/context/app.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/Cms/cmsPage.gql.js

const GET_CMS_PAGE = client["gql"]`
    query GetCmsPage($id: Int!) {
        cmsPage(id: $id) {
            url_key
            content
            content_heading
            title
            page_layout
            meta_title
            meta_keywords
            meta_description
        }
        storeConfig {
            id
            root_category_id
        }
    }
`;
/* harmony default export */ var cmsPage_gql = ({
  getCMSPageQuery: GET_CMS_PAGE
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/Cms/useCmsPage.js
var _s = $RefreshSig$();






/**
 * Retrieves data necessary to render a CMS Page
 *
 * @param {object} props
 * @param {object} props.id - CMS Page ID
 * @param {object} props.queries - Collection of GraphQL queries
 * @param {object} props.queries.getCmsPage - Query for getting a CMS Page
 * @returns {{shouldShowLoadingIndicator: *, hasContent: *, cmsPage: *, error: *}}
 */

const useCmsPage = props => {
  _s();

  const {
    id
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(cmsPage_gql, props.operations);
  const {
    getCMSPageQuery
  } = operations;
  const {
    loading,
    error,
    data
  } = Object(client["useQuery"])(getCMSPageQuery, {
    variables: {
      id: Number(id)
    },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  });
  const [, {
    actions: {
      setPageLoading
    }
  }] = Object(app["b" /* useAppContext */])(); // To prevent loading indicator from getting stuck, unset on unmount.

  Object(react["useEffect"])(() => {
    return () => {
      setPageLoading(false);
    };
  }, [setPageLoading]); // Ensure we mark the page as loading while we check the network for updates

  Object(react["useEffect"])(() => {
    setPageLoading(loading);
  }, [loading, setPageLoading]);
  const shouldShowLoadingIndicator = loading && !data;
  const cmsPage = data ? data.cmsPage : null;
  const rootCategoryId = data ? data.storeConfig.root_category_id : null; // Only render <RichContent /> if the page isn't empty and doesn't contain
  // the default CMS Page text. We do this so there is at least a useable home
  // page by default, the category list component.

  const hasContent = Object(react["useMemo"])(() => {
    return cmsPage && cmsPage.content && cmsPage.content.length > 0 && !cmsPage.content.includes('CMS homepage content goes here.');
  }, [cmsPage]);
  return {
    cmsPage,
    error,
    hasContent,
    rootCategoryId,
    shouldShowLoadingIndicator
  };
};

_s(useCmsPage, "XDsTZ2dfxXIYMOD2UncVa6RDllU=", false, function () {
  return [client["useQuery"], app["b" /* useAppContext */]];
});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js + 1 modules
var richContent = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CategoryList/categoryList.gql.js

const GET_CATEGORY_LIST = client["gql"]`
    query GetCategoryList($id: Int!) {
        category(id: $id) {
            id
            children {
                id
                name
                url_key
                url_path
                url_suffix
                children_count
                path
                image
                productImagePreview: products(pageSize: 1) {
                    items {
                        id
                        small_image {
                            url
                        }
                    }
                }
            }
        }
    }
`;
/* harmony default export */ var categoryList_gql = ({
  getCategoryListQuery: GET_CATEGORY_LIST
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CategoryList/useCategoryList.js
var useCategoryList_s = $RefreshSig$();




/**
 * Returns props necessary to render a CategoryList component.
 *
 * @param {object} props
 * @param {object} props.query - category data
 * @param {string} props.id - category id
 * @return {{ childCategories: array, error: object }}
 */

const useCategoryList = props => {
  useCategoryList_s();

  const {
    id
  } = props;
  const operations = Object(shallowMerge["a" /* default */])(categoryList_gql, props.operations);
  const {
    getCategoryListQuery
  } = operations;
  const {
    loading,
    error,
    data
  } = Object(client["useQuery"])(getCategoryListQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !id,
    variables: {
      id
    }
  });
  return {
    childCategories: data && data.category && data.category.children || null,
    error,
    loading
  };
};

useCategoryList_s(useCategoryList, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [client["useQuery"]];
});
// EXTERNAL MODULE: ./src/venia/components/ErrorView/errorView.js + 1 modules
var errorView = __webpack_require__("./src/venia/components/ErrorView/errorView.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryList.css
var categoryList = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryList.css");
var categoryList_default = /*#__PURE__*/__webpack_require__.n(categoryList);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryList.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(categoryList_default.a, options);



/* harmony default export */ var CategoryList_categoryList = (categoryList_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CategoryList/useCategoryTile.js
var useCategoryTile_s = $RefreshSig$();


const previewImageSize = 480;
/**
 * Returns props necessary to render a CategoryTile component.
 *
 * @returns {Object} props necessary to render a category tile
 * @returns {Object} .image - an object containing url, type and width for the category image
 * @returns {Object} .item - an object containing name and url for the category tile
 */

const useCategoryTile = props => {
  useCategoryTile_s();

  const {
    item
  } = props;
  const {
    image,
    productImagePreview
  } = item;
  const imageObj = Object(react["useMemo"])(() => {
    const previewProduct = productImagePreview.items[0];

    if (image) {
      return {
        url: image,
        type: 'image-category',
        width: previewImageSize
      };
    } else if (previewProduct) {
      return {
        url: previewProduct.small_image,
        type: 'image-product',
        width: previewImageSize
      };
    } else {
      return {
        url: '',
        type: 'image-category',
        width: previewImageSize
      };
    }
  }, [image, productImagePreview]);
  const itemObject = Object(react["useMemo"])(() => ({
    name: item.name,
    url: `/${item.url_key}${item.url_suffix || ''}`
  }), [item]);
  return {
    image: imageObj,
    item: itemObject
  };
};

useCategoryTile_s(useCategoryTile, "K2dO0Y/MugZGhvwaaK3e18LLwGI=");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 2 modules
var Image_image = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/image.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryTile.css
var categoryTile = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryTile.css");
var categoryTile_default = /*#__PURE__*/__webpack_require__.n(categoryTile);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryTile.css

            

var categoryTile_options = {"injectType":"styleTag"};

categoryTile_options.insert = "head";
categoryTile_options.singleton = false;

var categoryTile_update = injectStylesIntoStyleTag_default()(categoryTile_default.a, categoryTile_options);



/* harmony default export */ var CategoryList_categoryTile = (categoryTile_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryTile.js
var categoryTile_s = $RefreshSig$();








const IMAGE_WIDTH = 80;

const CategoryTile = props => {
  categoryTile_s();

  const talonProps = useCategoryTile({
    item: props.item
  });
  const {
    image,
    item
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(CategoryList_categoryTile, props.classes);
  const imagePreview = Object(react["useMemo"])(() => {
    return image.url ? react_default.a.createElement(Image_image["a" /* default */], {
      alt: item.name,
      classes: {
        image: classes.image,
        root: classes.imageContainer
      },
      resource: image.url,
      type: image.type,
      width: IMAGE_WIDTH
    }) : react_default.a.createElement("span", {
      className: classes.image_empty
    });
  }, [classes.image, classes.image_empty, classes.imageContainer, image.type, image.url, item.name]);
  return react_default.a.createElement(react_router_dom["b" /* Link */], {
    className: classes.root,
    to: item.url
  }, imagePreview, react_default.a.createElement("span", {
    className: classes.name
  }, item.name));
};

categoryTile_s(CategoryTile, "KM4i/3w+FxT7T6c87Kl7wvoM3hM=", false, function () {
  return [useCategoryTile, shallowMerge["a" /* default */]];
});

_c = CategoryTile;
CategoryTile.propTypes = {
  item: Object(prop_types["shape"])({
    image: prop_types["string"],
    name: prop_types["string"].isRequired,
    productImagePreview: Object(prop_types["shape"])({
      items: Object(prop_types["arrayOf"])(Object(prop_types["shape"])({
        small_image: prop_types["string"]
      }))
    }),
    url_key: prop_types["string"].isRequired
  }).isRequired,
  classes: Object(prop_types["shape"])({
    item: prop_types["string"],
    image: prop_types["string"],
    imageContainer: prop_types["string"],
    name: prop_types["string"]
  })
};
/* harmony default export */ var components_CategoryList_categoryTile = (CategoryTile);

var _c;

$RefreshReg$(_c, "CategoryTile");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryList.js
var categoryList_s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // map Magento 2.3.1 schema changes to Venia 2.0.0 proptype shape to maintain backwards compatibility

const mapCategory = categoryItem => {
  const {
    items
  } = categoryItem.productImagePreview;
  return _objectSpread({}, categoryItem, {
    productImagePreview: {
      items: items.map(item => {
        const {
          small_image
        } = item;
        return _objectSpread({}, item, {
          small_image: typeof small_image === 'object' ? small_image.url : small_image
        });
      })
    }
  });
};

const CategoryList = props => {
  categoryList_s();

  const {
    id,
    title
  } = props;
  const talonProps = useCategoryList({
    id
  });
  const {
    childCategories,
    error,
    loading
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(CategoryList_categoryList, props.classes);
  const header = title ? react_default.a.createElement("div", {
    className: classes.header
  }, react_default.a.createElement("h2", {
    className: classes.title
  }, react_default.a.createElement("span", null, title))) : null;
  let child;

  if (!childCategories) {
    if (error) {
      if (true) {
        console.error(error);
      }

      return react_default.a.createElement(errorView["a" /* default */], null);
    } else if (loading) {
      child = LoadingIndicator_static["a" /* default */];
    }
  } else {
    if (childCategories.length) {
      child = react_default.a.createElement("div", {
        className: classes.content
      }, childCategories.map(item => react_default.a.createElement(components_CategoryList_categoryTile, {
        item: mapCategory(item),
        key: item.url_key
      })));
    } else {
      return react_default.a.createElement(errorView["a" /* default */], {
        message: formatMessage({
          id: 'categoryList.noResults',
          defaultMessage: 'No child categories found.'
        })
      });
    }
  }

  return react_default.a.createElement("div", {
    className: classes.root
  }, header, child);
};

categoryList_s(CategoryList, "3kEgiiiWzH/Vivd4Mz2jDzW2aog=", false, function () {
  return [useCategoryList, useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

categoryList_c = CategoryList;
CategoryList.propTypes = {
  id: prop_types["number"].isRequired,
  title: prop_types["string"],
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    header: prop_types["string"],
    title: prop_types["string"],
    content: prop_types["string"]
  })
};
/* harmony default export */ var components_CategoryList_categoryList = (CategoryList);

var categoryList_c;

$RefreshReg$(categoryList_c, "CategoryList");
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Head/index.js
var Head = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Head/index.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/RootComponents/CMS/cms.css
var cms = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/RootComponents/CMS/cms.css");
var cms_default = /*#__PURE__*/__webpack_require__.n(cms);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/RootComponents/CMS/cms.css

            

var cms_options = {"injectType":"styleTag"};

cms_options.insert = "head";
cms_options.singleton = false;

var cms_update = injectStylesIntoStyleTag_default()(cms_default.a, cms_options);



/* harmony default export */ var CMS_cms = (cms_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/RootComponents/CMS/cms.js
var cms_s = $RefreshSig$();












const CMSPage = props => {
  cms_s();

  const {
    id
  } = props;
  const talonProps = useCmsPage({
    id
  });
  const {
    cmsPage,
    hasContent,
    rootCategoryId,
    shouldShowLoadingIndicator
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(CMS_cms, props.classes);

  if (shouldShowLoadingIndicator) {
    return LoadingIndicator_static["a" /* default */];
  }

  if (hasContent) {
    const {
      content_heading,
      title,
      meta_title,
      meta_description,
      content
    } = cmsPage;
    const headingElement = content_heading !== '' ? react_default.a.createElement("h1", {
      className: classes.heading
    }, content_heading) : null;
    const pageTitle = meta_title || title;
    return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(Head["b" /* StoreTitle */], null, pageTitle), react_default.a.createElement(Head["a" /* Meta */], {
      name: "title",
      content: pageTitle
    }), react_default.a.createElement(Head["a" /* Meta */], {
      name: "description",
      content: meta_description
    }), headingElement, react_default.a.createElement(richContent["a" /* default */], {
      html: content
    }));
  } // Fallback to a category list if there is no cms content.


  return react_default.a.createElement(components_CategoryList_categoryList, {
    title: formatMessage({
      id: 'cms.shopByCategory',
      defaultMessage: 'Shop by category'
    }),
    id: rootCategoryId
  });
};

cms_s(CMSPage, "GGFlKvKQi5XBlrU53cuHCwKtE9Y=", false, function () {
  return [useCmsPage, useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

cms_c = CMSPage;
CMSPage.propTypes = {
  id: prop_types["number"],
  classes: Object(prop_types["shape"])({
    heading: prop_types["string"]
  })
};
/* harmony default export */ var RootComponents_CMS_cms = (CMSPage);

var cms_c;

$RefreshReg$(cms_c, "CMSPage");
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/RootComponents/CMS/index.js
/**
 * @RootComponent
 * description = 'Basic CMS Page'
 * pageTypes = CMS_PAGE
 */


/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js + 1 modules ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/RichContent/richContentRenderers.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css
var richContent = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css");
var richContent_default = /*#__PURE__*/__webpack_require__.n(richContent);

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(richContent_default.a, options);



/* harmony default export */ var RichContent_richContent = (richContent_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/RichContent/richContentRenderers.js + 37 modules
var richContentRenderers = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/RichContent/richContentRenderers.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.js
var _s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * RichContent component.
 *
 * This component serves as the pool to determine which type of content is being rendered
 * and pass the data off to the correct system.
 *
 * @typedef RichContent
 * @kind functional component
 *
 * @param {Object} props React component props
 *
 * @returns {React.Element} A React component that renders Heading with optional styling properties.
 */

const RichContent = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(RichContent_richContent, props.classes);

  const rendererProps = _objectSpread({}, props, {
    classes
  });

  for (const Renderer of richContentRenderers["a" /* default */]) {
    const {
      Component,
      canRender
    } = Renderer;

    if (canRender(rendererProps.html)) {
      return react_default.a.createElement(Component, rendererProps);
    }
  } // If no renderer returned a value


  if (true) {
    console.warn(`None of the following rich content renderers returned anything for the provided HTML.`, richContentRenderers["a" /* default */].map(r => `<${r.name}>`), props.html);
  }

  return null;
};
/**
 * Props for {@link RichContent}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the RichContent
 * @property {String} classes.root CSS class for the root container element
 * @property {String} html Content
 */


_s(RichContent, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = RichContent;
RichContent.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  html: prop_types["string"]
};
/* harmony default export */ var components_RichContent_richContent = __webpack_exports__["a"] = (RichContent);

var _c;

$RefreshReg$(_c, "RichContent");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/RootComponents/CMS/cms.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/RootComponents/CMS/cms.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cms-root-3KW {\n    padding: 1rem;\n}\n\n.cms-title-3kN {\n    font-size: 1.5rem;\n    font-weight: 400;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n}\n\n.cms-heading-14_ {\n    line-height: 1.25em;\n}\n\n.cms-layout_default-2YE {\n    padding: 0;\n}\n\n.cms-layout_1column-zAr {\n}\n", ""]);

// Exports
exports.locals = {
	"root": "cms-root-3KW",
	"title": "cms-title-3kN",
	"heading": "cms-heading-14_",
	"layout_default": "cms-layout_default-2YE",
	"layout_1column": "cms-layout_1column-zAr cms-layout_default-2YE"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryList.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryList.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".categoryList-root-1FL {\n    padding: 1rem;\n}\n\n.categoryList-header-2W8 {\n    margin-bottom: 2rem;\n    text-align: center;\n}\n\n.categoryList-title-H-g {\n    text-transform: uppercase;\n}\n\n.categoryList-content-PaY {\n    display: grid;\n    grid-gap: 3rem 1rem;\n    grid-template-columns: repeat(auto-fit, 6rem);\n    justify-content: center;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "categoryList-root-1FL",
	"header": "categoryList-header-2W8",
	"title": "categoryList-title-H-g",
	"content": "categoryList-content-PaY"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryTile.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/CategoryList/categoryTile.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".categoryTile-root-29o {\n    display: block;\n    line-height: 1rem;\n    text-align: center;\n    width: 6rem;\n}\n\n.categoryTile-imageContainer-3pz {\n    margin: 0 0.5rem 1rem 0.5rem;\n}\n\n.categoryTile-image-1k7 {\n    border-radius: 50%;\n    box-shadow: 0 0 0 1px rgb(var(--venia-global-color-border));\n    display: block;\n    height: 5rem;\n    object-fit: cover;\n    object-position: center;\n}\n\n.categoryTile-image_empty-224 {\n}\n\n.categoryTile-name-3et {\n    display: block;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "categoryTile-root-29o",
	"imageContainer": "categoryTile-imageContainer-3pz",
	"image": "categoryTile-image-1k7",
	"image_empty": "categoryTile-image_empty-224 categoryTile-image-1k7",
	"name": "categoryTile-name-3et"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/@magento/venia-ui/lib/components/RichContent/richContent.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".richContent-root-11l h1,\n.richContent-root-11l h2,\n.richContent-root-11l h3,\n.richContent-root-11l h4,\n.richContent-root-11l h5,\n.richContent-root-11l h6 {\n    word-break: break-word;\n    line-height: 1.25em;\n    margin-bottom: 0.5em;\n    margin-top: 1rem;\n}\n\n.richContent-root-11l h1 {\n    font-size: 2rem;\n    margin-top: 0.9em;\n    font-weight: 300;\n}\n.richContent-root-11l h2 {\n    font-size: 1.625rem;\n    font-weight: 400;\n}\n.richContent-root-11l h3 {\n    font-size: 1.375rem;\n    font-weight: 400;\n}\n.richContent-root-11l h4 {\n    font-size: 1.125rem;\n    font-weight: 600;\n}\n.richContent-root-11l h5 {\n    font-size: 1rem;\n    font-weight: 600;\n}\n.richContent-root-11l h6 {\n    font-size: 0.875rem;\n    font-weight: 600;\n}\n.richContent-root-11l p {\n    margin-bottom: 1rem;\n    line-height: 1.65em;\n}\n.richContent-root-11l img {\n    max-width: 100%;\n    margin: 1rem 0;\n}\n.richContent-root-11l ol,\n.richContent-root-11l ul {\n    margin-block-start: 1.2em;\n    margin-block-end: 1.2em;\n    padding-left: 2em;\n}\n.richContent-root-11l p + ol,\n.richContent-root-11l p + ul {\n    margin-block-start: 0.2em;\n}\n.richContent-root-11l ol {\n    list-style-type: decimal;\n}\n.richContent-root-11l ul {\n    list-style-type: disc;\n}\n.richContent-root-11l ol li,\n.richContent-root-11l ul li {\n    line-height: 1.65em;\n    padding: 1px 0.5rem;\n}\n.richContent-root-11l a {\n    text-decoration: underline;\n}\n.richContent-root-11l blockquote {\n    font-size: 1.375rem;\n    line-height: 1.875rem;\n    margin: 1rem 0;\n    font-weight: 300;\n    font-style: italic;\n}\n.richContent-root-11l table {\n    width: 100%;\n    margin: 1rem 0;\n    border-spacing: 0;\n    border-left: 1px solid rgb(var(--venia-global-color-border));\n    border-top: 1px solid rgb(var(--venia-global-color-border));\n}\n.richContent-root-11l table td,\n.richContent-root-11l table th {\n    text-align: left;\n    padding: 1rem;\n    font-size: 0.875rem;\n    line-height: 1.125em;\n    border-right: 1px solid rgb(var(--venia-global-color-border));\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n}\n.richContent-root-11l table th {\n    background-color: rgb(var(--venia-global-color-gray));\n}\n.richContent-root-11l .cms-content-important {\n    background: rgb(var(--venia-global-color-gray));\n    padding: 1.2rem 1rem;\n    font-size: 1.125rem;\n    border: 1px solid rgb(var(--venia-global-color-border));\n}\n.richContent-root-11l pre {\n    background: rgb(var(--venia-global-color-gray));\n    padding: 1rem;\n    border: 1px solid rgb(var(--venia-global-color-border));\n}\n\n@media only screen and (min-width: 769px) {\n    .richContent-root-11l h1 {\n        font-size: 3rem;\n        margin-top: 0.75em;\n        line-height: 1.05em;\n    }\n    .richContent-root-11l h2 {\n        font-size: 2.25rem;\n        line-height: 1.25em;\n    }\n    .richContent-root-11l h3 {\n        font-size: 1.75rem;\n        line-height: 1.25em;\n    }\n    .richContent-root-11l h4 {\n        font-size: 1.375rem;\n        line-height: 1.25em;\n        font-weight: 400;\n    }\n    .richContent-root-11l h5 {\n        font-size: 1.125rem;\n        line-height: 1.22em;\n        margin-bottom: 0.75em;\n    }\n    .richContent-root-11l h6 {\n        font-size: 1rem;\n        line-height: 1.22em;\n        margin-bottom: 0.75em;\n    }\n    .richContent-root-11l p {\n        margin-bottom: 1rem;\n        line-height: 1.5em;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "richContent-root-11l"
};

/***/ })

}]);
//# sourceMappingURL=vendors~RootCmp_CMS_PAGE__default.1e66cb80cbbf4a97ef61.js.map