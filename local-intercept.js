/* eslint-disable */
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */

function localIntercept(targets) {
    targets.of('@magento/pwa-buildpack').transformUpward.tap(def => {
        def.staticFromRoot.inline.body.file.template.inline =
            './acemart-static/{{ filename }}';
    });

    targets.of("@magento/venia-ui").routes.tap(routes => {
        // routes.push({
        //     name: "404 page",
        //     pattern: "*",
        //     path: require.resolve("./src/venia/components/ErrorView")
        // });
        routes.push({
            name: "Landing Page",
            pattern: "/",
            exact: true,
            path: require.resolve("./src/components/LandingPage")
        });
        // -------------- Auth Urls --------------
        routes.push({
            name: "Authentication Page",
            pattern: "/customer/account/:auth/",
            exact: true,
            path: require.resolve("./src/components/AuthenticationPage")
        });
        // -------------- Account Page urls --------------
        routes.push({
            name: "Account Page",
            pattern: "/customer/account/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "Address Book",
            pattern: "/customer/address/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "Address Book",
            pattern: "/customer/address/new/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "Address Book",
            pattern: "/customer/address/edit",
            exact: false,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "Account Info Form",
            pattern: "/customer/account/edit/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "Account Info Form",
            pattern: "/customer/account/edit/changepass/1/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "Orders Page",
            pattern: "/sales/order/history/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "Orders Page",
            pattern: "/sales/order/:tab/order_id/:orderId/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "My WishList Page",
            pattern: "/wishlist/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "WishList Sharing",
            pattern: "/wishlist/index/share/mwishlist_id/:wishlist_id/",
            exact: true,
            path: require.resolve("./src/components/WishList/wishlistSharePage")
        });
        routes.push({
            name: "Newsletter Subscription",
            pattern: "/newsletter/manage/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "My Product Reviews",
            pattern: "/review/customer/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        routes.push({
            name: "Compare List",
            pattern: "/catalog/product_compare/",
            exact: true,
            path: require.resolve("./src/components/CompareListPage")
        });
        routes.push({
            name: "Cart Page",
            pattern: "/checkout/cart/",
            exact: true,
            path: require.resolve("./src/venia/components/CartPage")
        });
        routes.push({
            name: "Old Checkout Page",
            pattern: "/checkout/old",
            exact: true,
            path: require.resolve("./src/venia/components/CheckoutPage")
        });
        routes.push({
            name: "Checkout Page",
            pattern: "/checkout",
            exact: true,
            path: require.resolve("./src/components/Checkout")
        });
        routes.push({
            name: "Custom Checkout Page",
            pattern: "/checkout/custom",
            exact: true,
            path: require.resolve("./src/components/Checkout")
        });
        routes.push({
            name: "Checkout success Page",
            pattern: "/checkout/success",
            exact: true,
            path: require.resolve("./src/venia/components/CheckoutPage/OrderConfirmationPage")
        });
        routes.push({
            name: "Search",
            pattern: "/catalogsearch/result/",
            exact: true,
            path: require.resolve("./src/venia/components/SearchPage")
        });
        return routes;
    });
}

module.exports = localIntercept;
