/** Handle all url routes */

export const loginPage = () => "/customer/account/login/";
export const signupPage = () => "/customer/account/create/";
export const forgotPasswordPage = () => "/customer/account/forgotpassword/";

export const accountPageUrl = () => '/customer/account/';
export const editAccountInfo = () => '/customer/account/edit/';
export const editAccountPassword = () => '/customer/account/edit/changepass/1/';
export const myWishlistPage = () => '/wishlist/';
export const myOrderListPage = () => '/sales/order/history/';
export const myOrderDetailsPage = (tab=":tab", orderId=":orderId") =>
    `/sales/order/${tab}/order_id/${orderId}/`;
export const newsletterPage = () => '/newsletter/manage/';
export const addressBookPage = () => '/customer/address/';
export const addAddress = () => '/customer/address/new/';
export const editAddress = (id=null) => {
    if (id) {
        return `/customer/address/edit/id/${id}/`
    }
    return '/customer/address/edit/'
};

export const compareListPage = () => '/catalog/product_compare/';