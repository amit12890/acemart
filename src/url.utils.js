// export const HOST_URL = 'https://dev-acemart.magedelight.magentoprojects.net';
export const HOST_URL = "https://qa-acemart-backend.magedelight.magentoprojects.net";

/** Handle all url routes */

export const loginPage = () => '/customer/account/login/';
export const signupPage = () => '/customer/account/create/';
export const forgotPasswordPage = () => '/customer/account/forgotpassword/';

export const accountPageUrl = () => '/customer/account/';
export const editAccountInfo = () => '/customer/account/edit/';
export const editAccountPassword = () => '/customer/account/edit/changepass/1/';
export const myWishlistPage = () => '/wishlist/';
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

export const compareListPage = () => '/catalog/product_compare/';

/** API urls */

export const apiGetWishlistData = customerId =>
    `${HOST_URL}/rest/V1/bsscommerce/multiwishlist/getlist/${customerId}`;
export const apiAddToWishlist = wishlistId =>
    `${HOST_URL}/rest/V2/wishlist/add?wishlist_id=${wishlistId}`;
export const apiUpdateProductWishlist = () =>
    `${HOST_URL}/rest/V2/wishlist/update`;

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