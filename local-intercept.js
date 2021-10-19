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
    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
            name: "Landing Page",
            pattern: "/",
            exact: true,
            path: require.resolve("./src/components/LandingPage")
        });
        // -------------- Account Page urls --------------
        routes.push({
            name: "Account Page",
            pattern: "/customer/account/",
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
            name: "My WishList Page",
            pattern: "/wishlist/",
            exact: true,
            path: require.resolve("./src/components/AccountPage")
        });
        // -------------- Auth Urls --------------
        routes.push({
            name: "Authentication Page",
            pattern: "/customer/account/:auth/",
            exact: true,
            path: require.resolve("./src/components/AuthenticationPage")
        });
        return routes;
    });
}

module.exports = localIntercept;
