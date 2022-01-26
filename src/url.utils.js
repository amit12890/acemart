// export const HOST_URL = 'https://dev-acemart.magedelight.magentoprojects.net';
export const HOST_URL = "https://qa-acemart-backend.magedelight.magentoprojects.net";
export const FRONT_END_HOST_URL = "https://qa-acemart.magedelight.magentoprojects.net";
export const SITE_ID = 'qficp5';
export const GOOGLE_MAP_API_KEY = 'AIzaSyC2FlOz5QUyReshHY4iG6SvWkW0rDF3scY';
export const GOOGLE_RECAPTCHA = "6Len7CMeAAAAANQH3IKiYWqcDeEJ4FNO-tHXEz3I"
export const GOOGLE_ANALYTICS_ID = "UNIQUE-ID"

/** Handle all url routes */

export const loginPage = () => '/customer/account/login/';
export const signupPage = () => '/customer/account/create/';
export const forgotPasswordPage = () => '/customer/account/forgotpassword/';

export const accountPageUrl = () => '/customer/account/';
export const editAccountInfo = () => '/customer/account/edit/';
export const editAccountPassword = () => '/customer/account/edit/changepass/1/';
export const myWishlistPage = () => '/wishlist/';
export const myWishlistSharePage = (wishlist_id = ':wishlist_id') =>
    `/wishlist/index/share/mwishlist_id/${wishlist_id}/`;
export const myOrderListPage = () => '/sales/order/history/';
export const myOrderDetailsPage = (tab = ':tab', orderId = ':orderId') =>
    `/sales/order/${tab}/order_id/${orderId}/`;
export const newsletterPage = () => '/newsletter/manage/';
export const addressBookPage = () => '/customer/address/';
export const addAddress = () => '/customer/address/new/';
export const editAddress = (id = null) => {
    if (id) {
        return `/customer/address/edit/id/${id}/`;
    }
    return '/customer/address/edit/';
};
export const accountQandAPage = () => '/itorisproductQa/customer/';

export const compareListPage = () => '/catalog/product_compare/';
export const cartPage = () => '/checkout/cart/';
export const reviewPage = () => '/review/customer/';
export const searchPage = () => "/catalogsearch/result/";

/** API urls */

export const apiGetWishlistData = customerId =>
    `${HOST_URL}/rest/V1/bsscommerce/multiwishlist/getlist/${customerId}`;
export const apiAddToWishlist = wishlistquery =>
    `${HOST_URL}/rest/V2/wishlist/add${wishlistquery}`;
export const apiUpdateProductWishlist = () =>
    `${HOST_URL}/rest/V2/wishlist/update`;
export const apiShareWishlist = () =>
    `${HOST_URL}/rest/V2/wishlist/share`;

/** Search Apis */
export const apiGetSearchSuggestions = (query, suggestionCount = "8") =>
    `https://${SITE_ID}.a.searchspring.io/api/suggest/query?siteId=${SITE_ID}&query=${query}&suggestionCount=${suggestionCount}`;

export const apiGetAutocompleteSearchResult = (query, resultsPerPage = "4") =>
    `https://${SITE_ID}.a.searchspring.io/api/search/autocomplete.json?siteId=${SITE_ID}&q=${query}&resultsFormat=native&resultsPerPage=${resultsPerPage}`

export const apiGetSearchResult = (queryString) =>
    `https://${SITE_ID}.a.searchspring.io/api/search/search.json?${queryString}`

export const apiGetSearchTracker = (data, signature, productUrl, docReferer) =>
    `https://${SITE_ID}.a.searchspring.io/api/track/track.json?d=${data}&s=${signature}&u=${productUrl}&r=${docReferer}`

/** Footer Other Urls */
export const customerServiceUrl = () => '/customer-service';
export const helpCenterUrl = () =>
    'https://help.acemart.com/?__hstc=41672957.561ad447118bbf7f10c849033a76b9ca.1634795732293.1636620059220.1636715072503.27&__hssc=41672957.4.1636715072503&__hsfp=1767100988';
export const returnPolicyUrl = () => '/terms-of-use#return_policy/';
export const shippingPolicyUrl = () => '/terms-of-use#ship_policy/';

export const aboutUsUrl = () => '/about-us';
export const careersUrl = () => '/careers';
export const termsOfUseUrl = () => '/terms-of-use';
export const faqUrl = () => '/resources';
export const storeLocatorUrl = () => '/store-locator';
export const resourcesUrl = () => '/resources/';
export const financingUrl = () => '/financing';
export const cdsUrl = () => '/cds';

/** Other Urls */
export const productSpecsheetUrl = specsheet =>
    `${HOST_URL}/pub/media/specsheets/${specsheet}.pdf`;
export const productSpecsheetLogoUrl = () =>
    `${HOST_URL}/pub/media/attribute/pdf-logo32px.svg.png`;

export const comingSoonImage = () => 'https://cdn.acemart.com/pub/media/catalog/product/placeholder/default/Image-Coming-Soon.jpg'

export const customMapMarkerIcon = (iconName) => `https://qa-acemart-backend.magedelight.magentoprojects.net/pub/media/maps/images/${iconName}.png`;

// Austin
export const getDefaultLatLong = () => ({
    lat: 30.071,
    lng: -97.90559
})