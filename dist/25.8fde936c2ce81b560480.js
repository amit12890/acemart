(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/CreateAccount/createAccount.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/CreateAccount/createAccount.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../SignIn/signIn.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/SignIn/signIn.css"), "");
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css"), "");

// Module
exports.push([module.i, ".createAccount-root-bXU {\n    display: grid;\n    gap: 0.9375rem;\n    justify-items: stretch;\n    padding: 1rem 1.5rem;\n}\n\n.createAccount-message-qk- {\n    background-color: rgb(var(--color-gray-light0));\n    border-radius: 4px;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    padding: 1rem;\n}\n\n.createAccount-message-qk-:empty {\n    display: none;\n}\n\n.createAccount-actions-3Dg {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-top: 2rem;\n    text-align: center;\n}\n\n.createAccount-title-pPU {\n    \n}\n.createAccount-loginContainer-1yr {\n    border: 1px solid rgb(var(--border-color-light));\n}\n\n.createAccount-createAccountBlock-Zoq {\n    margin-bottom: 20px;\n    padding:  20px; \n}\n\n.createAccount-accountInfo-26P {\n    margin-bottom: 0;\n}\n\n.createAccount-personalInfo-3N7 {\n    margin-bottom: 30px;\n}\n.createAccount-h2-1Vx {\n    text-align: center;\n    margin-bottom: 30px;\n    border-bottom: 1px solid #333;\n    padding-bottom: 10px;\n    font-size: 14px;\n}\n.createAccount-icon-2wQ {\n    display: inline-flex;\n}\n.createAccount-svgIcon-2T4 {\n    fill: currentColor;\n}\n\n.createAccount-cancelButton-31i {\n    margin-top: 1rem;\n}\n\n.createAccount-submitButton-2CE {\n    grid-column-start: 2;\n}\n\n.createAccount-subscribe-ryC {\n    margin: 0 0 0 -4px; \n    \n}\n\n@media (max-width: 960px) {\n    .createAccount-actions-3Dg {\n        grid-auto-flow: row;\n    }\n\n    .createAccount-submitButton-2CE {\n        grid-column-start: auto;\n    }\n}\n", ""]);

// Exports
exports.locals = {
	"root": "createAccount-root-bXU",
	"message": "createAccount-message-qk-",
	"actions": "createAccount-actions-3Dg",
	"title": "createAccount-title-pPU " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../SignIn/signIn.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/SignIn/signIn.css").locals["title"] + "",
	"loginContainer": "createAccount-loginContainer-1yr",
	"createAccountBlock": "createAccount-createAccountBlock-Zoq",
	"accountInfo": "createAccount-accountInfo-26P",
	"personalInfo": "createAccount-personalInfo-3N7",
	"h2": "createAccount-h2-1Vx",
	"icon": "createAccount-icon-2wQ",
	"svgIcon": "createAccount-svgIcon-2T4",
	"cancelButton": "createAccount-cancelButton-31i " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css").locals["root_highPriority"] + "",
	"submitButton": "createAccount-submitButton-2CE " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css").locals["root_highPriority"] + "",
	"subscribe": "createAccount-subscribe-ryC"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/CreateAccount/passwordStrengthMeter.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/CreateAccount/passwordStrengthMeter.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".passwordStrengthMeter-meter_wrapper-3Dx {\n    position: relative;\n    width: 100%;\n    background-color: rgb(var(--color-gray-light0));\n    height: 20px;\n    line-height: 20px;\n    padding: 0 9px;\n    margin: 5px 0;\n    border-radius: 4px;\n    position: relative;\n    overflow: hidden;\n}\n\n.passwordStrengthMeter-meter-10C {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    -webkit-transition: width .6s ease;\n    -o-transition: width .6s ease;\n    transition: width .6s ease;\n\n\n}\n\n.passwordStrengthMeter-meter_text-3p6 {\n    position: relative;\n    color: var(--color-gray40);\n    font-weight: var(--font-weight-bold);\n    font-size: 13px;\n}\n\n.passwordStrengthMeter-weak-2lX > .passwordStrengthMeter-meter-10C {\n    background-color: rgb(255 175 174);\n    \n}\n\n.passwordStrengthMeter-medium-37y  > .passwordStrengthMeter-meter-10C{\n    background-color: rgb(255 214 179);\n    color: rgb(var(--color-white)); \n}\n.passwordStrengthMeter-strong-2Ze  > .passwordStrengthMeter-meter-10C{\n    background-color: rgb(197 238 172);\n    color: rgb(var(--color-white)); \n}\n.passwordStrengthMeter-very-strong-25A  > .passwordStrengthMeter-meter-10C {\n    background-color: rgb(129 181 98);\n    color: rgb(var(--color-white)); \n}\n.passwordStrengthMeter-very-strong-25A  > .passwordStrengthMeter-meter_text-3p6 {\n    color: rgb(var(--color-white)); \n}\n\n\n", ""]);

// Exports
exports.locals = {
	"meter_wrapper": "passwordStrengthMeter-meter_wrapper-3Dx",
	"meter": "passwordStrengthMeter-meter-10C",
	"meter_text": "passwordStrengthMeter-meter_text-3p6",
	"weak": "passwordStrengthMeter-weak-2lX",
	"medium": "passwordStrengthMeter-medium-37y",
	"strong": "passwordStrengthMeter-strong-2Ze",
	"very-strong": "passwordStrengthMeter-very-strong-25A"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ForgotPassword/ForgotPasswordForm/forgotPasswordForm.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ForgotPassword/ForgotPasswordForm/forgotPasswordForm.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css"), "");

// Module
exports.push([module.i, ".forgotPasswordForm-root-2ip {\n    display: grid;\n    gap: 1rem;\n    justify-items: stretch;\n}\n\n.forgotPasswordForm-buttonContainer-1r- {\n    align-items: center;\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n}\n\n.forgotPasswordForm-cancelButton-3Jn {\n    margin-top: 10px;\n    min-width: auto;\n    padding: 0;\n    min-height: auto;\n    border: none;\n    color: #000;\n    border-bottom: 1px solid;\n    padding-bottom: 5px;\n}\n.forgotPasswordForm-cancelButton-3Jn:hover {\n    background-color: transparent;\n    color: #727171; \n}\n\n.forgotPasswordForm-submitButton-9MH {\n    width: 100%;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "forgotPasswordForm-root-2ip",
	"buttonContainer": "forgotPasswordForm-buttonContainer-1r-",
	"cancelButton": "forgotPasswordForm-cancelButton-3Jn " + __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css").locals["root_lowPriority"] + "",
	"submitButton": "forgotPasswordForm-submitButton-9MH " + __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../Button/button.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Button/button.css").locals["root_highPriority"] + ""
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ForgotPassword/FormSubmissionSuccessful/formSubmissionSuccessful.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ForgotPassword/FormSubmissionSuccessful/formSubmissionSuccessful.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".formSubmissionSuccessful-root-e1- {\n    display: grid;\n    gap: 1.5rem;\n}\n\n.formSubmissionSuccessful-text-1-R {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n}\n\n.formSubmissionSuccessful-title-bzi {\n    padding-top: 0.5rem;\n    text-transform: capitalize;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "formSubmissionSuccessful-root-e1-",
	"text": "formSubmissionSuccessful-text-1-R",
	"title": "formSubmissionSuccessful-title-bzi"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ForgotPassword/forgotPassword.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ForgotPassword/forgotPassword.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../SignIn/signIn.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/SignIn/signIn.css"), "");

// Module
exports.push([module.i, ".forgotPassword-root-1XF {\n    display: grid;\n    gap: 1.5rem;\n    justify-items: stretch;\n    padding: 1.5rem;\n}\n\n.forgotPassword-title-3fi {\n    padding-top: 0.5rem;\n}\n\n.forgotPassword-instructions-2qv {\n    line-height: 1.25rem;\n    margin-bottom: 20px;\n    text-align: center;\n}\n\n\n\n.forgotPassword-loginContainer-13J {\n    border: 1px solid #e9eaec;\n}\n\n\n.forgotPassword-actionToolbarLogin-3k2 {\n    margin-top: 20px;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    justify-self: start;\n    text-align: center;\n}\n\n.forgotPassword-forgotPasswordBlock-37J {\n    margin-bottom: 20px;\n    padding:  20px;\n}\n", ""]);

// Exports
exports.locals = {
	"root": "forgotPassword-root-1XF",
	"title": "forgotPassword-title-3fi " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../SignIn/signIn.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/SignIn/signIn.css").locals["title"] + "",
	"instructions": "forgotPassword-instructions-2qv",
	"loginContainer": "forgotPassword-loginContainer-13J",
	"actionToolbarLogin": "forgotPassword-actionToolbarLogin-3k2",
	"forgotPasswordBlock": "forgotPassword-forgotPasswordBlock-37J"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/SignIn/signIn.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/SignIn/signIn.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../LinkButton/linkButton.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/LinkButton/linkButton.css"), "");
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Field/field.css"), "");

// Module
exports.push([module.i, ".signIn-root-1QF {\n    display: grid;\n    gap: 1.5rem;\n    justify-items: stretch;\n}\n\n.signIn-forgotPassword-27M {\n    display: block;\n    text-decoration: underline;\n    color: rgb(var(--color-error));\n    font-size: 0.8rem;\n}\n\n.signIn-form-kgq {\n    display: grid;\n    row-gap: 0.9375rem;\n}\n\n.signIn-modal-edV {\n    visibility: hidden;\n    height: 100%;\n    width: 100%;\n    background-color: rgb(var(--color-gray-light0));\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n}\n\n.signIn-modal_active-5jw {\n    visibility: visible;\n    opacity: 0.9;\n}\n\n.signIn-buttonsContainer-3F5 {\n    display: grid;\n    gap: 1.5rem;\n    grid-auto-flow: row;\n    justify-content: center;\n    margin-top: 1rem;\n    width: 100%;\n}\n\n.signIn-forgotPasswordButtonContainer-7in {\n    align-items: center;\n    display: flex;\n    justify-content: flex-end;\n    justify-self: start;\n    text-align: center;\n    margin-top: 15px;\n}\n\n.signIn-forgotPasswordButton-3Jd {\n    padding: 0 0 5px 0 ;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-bottom: 1px solid;\n    font-size: 14px;\n\n}\n\n.signIn-title-2mk {\n    text-align: center;\n    font-weight: var(--font-weight-bold);\n    text-transform: uppercase;\n    color: rgb(var(--theme-color-primary));\n    font-size: var(--fontSize-600);\n}\n.signIn-actionToolbar-1Qa {\n    text-align: inherit;\n\n}\n.signIn-actionToolbarLogin-KY4 {\n    margin-top: 20px;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    justify-self: start;\n    text-align: center;\n    flex-direction: column;\n}\n\n.signIn-actionToolbarLogin-KY4 button {\n    width: 100%;\n}\n\n.signIn-loginContainer-201 {\n    border: 1px solid #e9eaec;\n}\n\n.signIn-blockContentWrapper-1be {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    padding: 20px;\n}\n.signIn-loginBlock-1Gh {\n    width: 100%;\n    max-width: 400px;\n    margin-bottom: 20px;\n}\n\n.signIn-loginBlock-1Gh .signIn-label-2uj {\n    \n    \n}\n\n\n.signIn-form-kgq {\n    display: inherit;\n}\n\n.signIn-blockHeader-1-_ {\n    text-align: center;\n    padding: 20px; \n}\n.signIn-blockHeaderContent-3zO {\n    text-align: center;\n}\n.signIn-blockFooter-1Gf {\n    background-color: #eee;\n    text-align: center;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n}\n.signIn-blockFooterContent-2Lg {\n    max-width: 400px;\n    font-size: 14px;\n}\n\n.signIn-blockFooterContent-2Lg p{\n        font-size: 14px;\n}\n\nh2 {\n    margin-bottom: 10px;\n    font-weight: 700;\n    font-size: 18px;\n    text-transform: uppercase;\n}\n\nh3 {\n    margin-bottom: 10px;\n    font-weight: var(--font-weight-bold);;\n    font-size: 18px;\n    text-transform: uppercase;\n}\n\n.signIn-blockFooterAction-1M5 {\n    margin-top: 10px;\n}\n.signIn-blockFooterAction-1M5 button {\n    width: 100%;\n}\n\n\n\n.signIn-root_left_align-MUK {\n    compose: root;\n    text-align: left;\n}\n\n.signIn-root_left_align-MUK .signIn-title-2mk { \n    display: none;\n}\n\n.signIn-root_left_align-MUK .signIn-loginContainer-201 {\n    border: none;\n}\n\n.signIn-root_left_align-MUK .signIn-blockHeaderContent-3zO {\n    text-align: left;\n}\n\n.signIn-root_left_align-MUK .signIn-loginBlock-1Gh {\n    max-width: 100%;\n}\n\n.signIn-input_border-34T {\n    border-width: 1px;\n    padding-left: 10px;\n    \n}\n\n.signIn-input_borderPassword-2aW {\n    border-width: 1px;\n    padding-left: 10px;\n    \n}\n\n.signIn-root_left_align-MUK .signIn-actionToolbar-1Qa {\n    margin-top: 20px;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    justify-self: start;\n    text-align: center;\n}\n\n.signIn-root_left_align-MUK .signIn-actionToolbarLogin-KY4 {\n    margin-top: 0;\n}\n\n.signIn-root_left_align-MUK .signIn-blockFooter-1Gf {\n    background-color: #ddd;\n    text-align: left;\n    justify-content: flex-start;\n}\n\n.signIn-root_left_align-MUK .signIn-blockFooterContent-2Lg {\n    max-width: 100%;\n}\n\n.signIn-root_left_align-MUK .signIn-blockFooterAction-1M5 button {\n    width: auto;\n}\n\n.signIn-label-2uj {\n}\n\n.signIn-label_left_align-Kyj {\n    text-align: right;\n}\n\n.signIn-password_label-3K2 {\n   \n}\n", ""]);

// Exports
exports.locals = {
	"root": "signIn-root-1QF",
	"forgotPassword": "signIn-forgotPassword-27M",
	"form": "signIn-form-kgq",
	"modal": "signIn-modal-edV",
	"modal_active": "signIn-modal_active-5jw signIn-modal-edV",
	"buttonsContainer": "signIn-buttonsContainer-3F5",
	"forgotPasswordButtonContainer": "signIn-forgotPasswordButtonContainer-7in",
	"forgotPasswordButton": "signIn-forgotPasswordButton-3Jd " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../LinkButton/linkButton.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/LinkButton/linkButton.css").locals["root"] + "",
	"title": "signIn-title-2mk",
	"actionToolbar": "signIn-actionToolbar-1Qa",
	"actionToolbarLogin": "signIn-actionToolbarLogin-KY4",
	"loginContainer": "signIn-loginContainer-201",
	"blockContentWrapper": "signIn-blockContentWrapper-1be",
	"loginBlock": "signIn-loginBlock-1Gh",
	"label": "signIn-label-2uj " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Field/field.css").locals["label"] + "",
	"blockHeader": "signIn-blockHeader-1-_",
	"blockHeaderContent": "signIn-blockHeaderContent-3zO",
	"blockFooter": "signIn-blockFooter-1Gf",
	"blockFooterContent": "signIn-blockFooterContent-2Lg",
	"blockFooterAction": "signIn-blockFooterAction-1M5",
	"root_left_align": "signIn-root_left_align-MUK",
	"input_border": "signIn-input_border-34T " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Field/field.css").locals["input"] + "",
	"input_borderPassword": "signIn-input_borderPassword-2aW " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Field/field.css").locals["input"] + "",
	"label_left_align": "signIn-label_left_align-Kyj " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Field/field.css").locals["label"] + "",
	"password_label": "signIn-password_label-3K2 " + __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../Field/field.css */ "./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Field/field.css").locals["label"] + ""
};

/***/ }),

/***/ "./src/venia/components/CreateAccount/createAccount.js":
/*!*************************************************************************!*\
  !*** ./src/venia/components/CreateAccount/createAccount.js + 3 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CreateAccount/useCreateAccount.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/combineValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Password/password.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/CreateAccount/createAccount.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/CreateAccount/passwordStrengthMeter.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router/esm/react-router.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/zxcvbn/lib/main.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 4 modules
var react_router = __webpack_require__("./node_modules/react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/zxcvbn/lib/main.js
var main = __webpack_require__("./node_modules/zxcvbn/lib/main.js");
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CreateAccount/useCreateAccount.js + 1 modules
var useCreateAccount = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CreateAccount/useCreateAccount.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/combineValidators.js
var combineValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/combineValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./src/venia/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./src/venia/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js + 1 modules
var Checkbox_checkbox = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js");

// EXTERNAL MODULE: ./src/venia/components/Field/field.js + 1 modules
var field = __webpack_require__("./src/venia/components/Field/field.js");

// EXTERNAL MODULE: ./src/venia/components/TextInput/textInput.js + 1 modules
var textInput = __webpack_require__("./src/venia/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./src/venia/components/Password/password.js + 1 modules
var Password_password = __webpack_require__("./src/venia/components/Password/password.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/CreateAccount/createAccount.css
var createAccount = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/CreateAccount/createAccount.css");
var createAccount_default = /*#__PURE__*/__webpack_require__.n(createAccount);

// CONCATENATED MODULE: ./src/venia/components/CreateAccount/createAccount.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createAccount_default.a, options);



/* harmony default export */ var CreateAccount_createAccount = (createAccount_default.a.locals || {});
// EXTERNAL MODULE: ./src/venia/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./src/venia/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/CreateAccount/passwordStrengthMeter.css
var passwordStrengthMeter = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/CreateAccount/passwordStrengthMeter.css");
var passwordStrengthMeter_default = /*#__PURE__*/__webpack_require__.n(passwordStrengthMeter);

// CONCATENATED MODULE: ./src/venia/components/CreateAccount/passwordStrengthMeter.css

            

var passwordStrengthMeter_options = {"injectType":"styleTag"};

passwordStrengthMeter_options.insert = "head";
passwordStrengthMeter_options.singleton = false;

var passwordStrengthMeter_update = injectStylesIntoStyleTag_default()(passwordStrengthMeter_default.a, passwordStrengthMeter_options);



/* harmony default export */ var CreateAccount_passwordStrengthMeter = (passwordStrengthMeter_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/CreateAccount/passwordStrengthMeter.js
var _s = $RefreshSig$();





const getMeterConfig = score => {
  switch (score) {
    case 0:
      return ["Weak", "25%", "weak"];

    case 1:
      return ["Medium", "50%", "medium"];

    case 2:
      return ["Strong", "75%", "strong"];

    case 3:
      return ["Very Strong", "100%", "very-strong"];

    default:
      return ["No Password", "10%", "disabled"];
  }
};

const PasswordStrengthMeter = ({
  score
}) => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(CreateAccount_passwordStrengthMeter);
  const [meterText, divWidth, divClass] = getMeterConfig(score);
  return react_default.a.createElement("div", {
    className: [classes.meter_wrapper, classes[divClass]].join(" ")
  }, react_default.a.createElement("div", {
    className: classes.meter,
    style: {
      width: divWidth
    }
  }), react_default.a.createElement("span", {
    className: classes.meter_text
  }, meterText));
};

_s(PasswordStrengthMeter, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = PasswordStrengthMeter;
/* harmony default export */ var components_CreateAccount_passwordStrengthMeter = (PasswordStrengthMeter);

var _c;

$RefreshReg$(_c, "PasswordStrengthMeter");
// CONCATENATED MODULE: ./src/venia/components/CreateAccount/createAccount.js
var createAccount_s = $RefreshSig$();




















const CreateAccount = props => {
  createAccount_s();

  const [passwordScore, setPasswordScore] = Object(react["useState"])(null);
  const talonProps = Object(useCreateAccount["a" /* useCreateAccount */])({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    onCancel: props.onCancel
  });
  const {
    errors,
    handleCancel,
    handleSubmit,
    isDisabled,
    isSignedIn,
    initialValues
  } = talonProps;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(CreateAccount_createAccount, props.classes);

  if (isSignedIn) {
    return react_default.a.createElement(react_router["a" /* Redirect */], {
      to: "/"
    });
  }

  const handlePasswordUpdate = e => {
    const passwordText = e.target.value || "";

    if (passwordText.length) {
      setPasswordScore(main_default()(passwordText).score);
    } else {
      setPasswordScore(null);
    }
  };

  const cancelButton = props.isCancelButtonHidden ? null : react_default.a.createElement(Button_button["a" /* default */], {
    className: classes.cancelButton,
    disabled: isDisabled,
    type: "button",
    priority: "high",
    onClick: handleCancel
  }, react_default.a.createElement("span", {
    className: classes.icon
  }, react_default.a.createElement("svg", {
    className: classes.svgIcon,
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    viewBox: "0 0 32 32"
  }, react_default.a.createElement("title", null, "back"), react_default.a.createElement("path", {
    d: "M32 20.281q0 1.875-0.75 4.109t-1.531 3.953q-0.125 0.313-0.281 0.688t-0.375 0.656q-0.094 0.156-0.203 0.234t-0.297 0.078q-0.25 0-0.406-0.188t-0.156-0.438q0-0.219 0.031-0.453t0.063-0.453q0.031-0.531 0.063-1.078t0.031-1.109q0-3.188-0.906-5.156-0.938-1.969-2.594-3.047t-4.031-1.422q-2.344-0.375-5.219-0.375h-4v4.563q0 0.469-0.344 0.813t-0.813 0.344q-0.219 0-0.422-0.094t-0.391-0.25l-9.125-9.125q-0.156-0.188-0.25-0.391t-0.094-0.422 0.094-0.438 0.25-0.375l9.125-9.125q0.188-0.188 0.391-0.266t0.422-0.078q0.469 0 0.813 0.328t0.344 0.797v4.594h4q2.188 0 4.563 0.25 2.344 0.25 4.5 1.016t3.875 2.203q1.75 1.406 2.688 3.719 0.563 1.406 0.75 2.922t0.188 3.016v0z"
  }))), react_default.a.createElement(message["a" /* default */], {
    id: 'createAccount.backText',
    defaultMessage: 'Back'
  }));
  const submitButton = react_default.a.createElement(Button_button["a" /* default */], {
    className: classes.submitButton,
    disabled: isDisabled,
    type: "submit",
    priority: "high"
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'createAccount.createAccountText',
    defaultMessage: 'Create an Account'
  }));
  return react_default.a.createElement(esm["c" /* Form */], {
    className: classes.root,
    initialValues: initialValues,
    onSubmit: handleSubmit
  }, react_default.a.createElement("h1", {
    className: classes.title
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'signup.formTitle',
    defaultMessage: 'Create New Customer Account'
  })), react_default.a.createElement("div", {
    className: classes.loginContainer
  }, react_default.a.createElement(formError["a" /* default */], {
    errors: Array.from(errors.values())
  }), react_default.a.createElement("div", {
    className: classes.createAccountBlock
  }, react_default.a.createElement("div", {
    className: classes.personalInfo
  }, react_default.a.createElement("h2", {
    className: classes.h2
  }, "Personal Information"), react_default.a.createElement(field["a" /* default */], {
    label: formatMessage({
      id: 'createAccount.firstNameText',
      defaultMessage: 'First Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "customer.firstname",
    autoComplete: "given-name",
    validate: formValidators["d" /* isRequired */],
    validateOnBlur: true,
    mask: value => value && value.trim(),
    maskOnBlur: true
  })), react_default.a.createElement(field["a" /* default */], {
    label: formatMessage({
      id: 'createAccount.lastNameText',
      defaultMessage: 'Last Name'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "customer.lastname",
    autoComplete: "family-name",
    validate: formValidators["d" /* isRequired */],
    validateOnBlur: true,
    mask: value => value && value.trim(),
    maskOnBlur: true
  })), react_default.a.createElement("div", {
    className: classes.subscribe
  }, react_default.a.createElement(Checkbox_checkbox["a" /* default */], {
    field: "subscribe",
    id: "subscribe",
    label: formatMessage({
      id: 'createAccount.subscribeText.signUp',
      defaultMessage: 'Sign Up for Newsletter'
    })
  }))), react_default.a.createElement("div", {
    className: classes.accountInfo
  }, react_default.a.createElement("h2", {
    className: classes.h2
  }, "Sign-in Information"), react_default.a.createElement(field["a" /* default */], {
    label: formatMessage({
      id: 'createAccount.emailText',
      defaultMessage: 'Email'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    field: "customer.email",
    autoComplete: "email",
    validate: formValidators["d" /* isRequired */],
    validateOnBlur: true,
    mask: value => value && value.trim(),
    maskOnBlur: true
  })), react_default.a.createElement(Password_password["a" /* default */], {
    autoComplete: "new-password",
    fieldName: "password",
    onChange: handlePasswordUpdate,
    isToggleButtonHidden: false,
    label: formatMessage({
      id: 'createAccount.passwordText',
      defaultMessage: 'Password'
    }),
    validate: Object(combineValidators["a" /* default */])([formValidators["d" /* isRequired */], [formValidators["a" /* hasLengthAtLeast */], 8], formValidators["e" /* validatePassword */]]),
    validateOnBlur: true,
    mask: value => value && value.trim(),
    maskOnBlur: true
  }), react_default.a.createElement(components_CreateAccount_passwordStrengthMeter, {
    score: passwordScore
  }), react_default.a.createElement(Password_password["a" /* default */], {
    fieldName: "confirmPassword",
    label: "Confirm Password",
    validate: Object(combineValidators["a" /* default */])([formValidators["d" /* isRequired */], [formValidators["a" /* hasLengthAtLeast */], 8], formValidators["e" /* validatePassword */], [formValidators["b" /* isEqualToField */], 'password']]),
    isToggleButtonHidden: false
  }), react_default.a.createElement("div", {
    className: classes.actions
  }, submitButton, cancelButton)))));
};

createAccount_s(CreateAccount, "2f+yWTlaLhAsrOuLkdL5fK8mAiU=", false, function () {
  return [useCreateAccount["a" /* useCreateAccount */], useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

createAccount_c = CreateAccount;
CreateAccount.propTypes = {
  classes: Object(prop_types["shape"])({
    actions: prop_types["string"],
    lead: prop_types["string"],
    root: prop_types["string"],
    subscribe: prop_types["string"]
  }),
  initialValues: Object(prop_types["shape"])({
    email: prop_types["string"],
    firstName: prop_types["string"],
    lastName: prop_types["string"]
  }),
  isCancelButtonHidden: prop_types["bool"],
  onSubmit: prop_types["func"],
  onCancel: prop_types["func"]
};
CreateAccount.defaultProps = {
  onCancel: () => {},
  isCancelButtonHidden: true
};
/* harmony default export */ var components_CreateAccount_createAccount = __webpack_exports__["a"] = (CreateAccount);

var createAccount_c;

$RefreshReg$(createAccount_c, "CreateAccount");

/***/ }),

/***/ "./src/venia/components/Field/field.js":
/*!*********************************************************!*\
  !*** ./src/venia/components/Field/field.js + 1 modules ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/Field/field.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/Field/field.css
var field = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/Field/field.css");
var field_default = /*#__PURE__*/__webpack_require__.n(field);

// CONCATENATED MODULE: ./src/venia/components/Field/field.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(field_default.a, options);



/* harmony default export */ var Field_field = (field_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/Field/field.js
var _s = $RefreshSig$();







const Field = props => {
  _s();

  const {
    children,
    id,
    label,
    optional
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(Field_field, props.classes);
  const optionalSymbol = optional ? react_default.a.createElement("span", {
    className: classes.optional
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'field.optional',
    defaultMessage: 'Optional'
  })) : null;
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("label", {
    className: classes.label,
    htmlFor: id
  }, label, optionalSymbol), children);
};

_s(Field, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [shallowMerge["a" /* default */]];
});

_c = Field;
Field.propTypes = {
  children: prop_types["node"],
  classes: Object(prop_types["shape"])({
    label: prop_types["string"],
    root: prop_types["string"]
  }),
  id: prop_types["string"],
  label: prop_types["node"],
  optional: prop_types["bool"]
};
/* harmony default export */ var components_Field_field = __webpack_exports__["a"] = (Field);

var _c;

$RefreshReg$(_c, "Field");

/***/ }),

/***/ "./src/venia/components/ForgotPassword/forgotPassword.js":
/*!***************************************************************************!*\
  !*** ./src/venia/components/ForgotPassword/forgotPassword.js + 6 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/ForgotPassword/useForgotPassword.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ForgotPassword/ForgotPasswordForm/forgotPasswordForm.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ForgotPassword/FormSubmissionSuccessful/formSubmissionSuccessful.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ForgotPassword/forgotPassword.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
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

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/ForgotPassword/useForgotPassword.js
var useForgotPassword = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/ForgotPassword/useForgotPassword.js");

// EXTERNAL MODULE: ./src/venia/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./src/venia/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./src/venia/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./src/venia/components/Button/button.js");

// EXTERNAL MODULE: ./src/venia/components/Field/field.js + 1 modules
var field = __webpack_require__("./src/venia/components/Field/field.js");

// EXTERNAL MODULE: ./src/venia/components/TextInput/textInput.js + 1 modules
var textInput = __webpack_require__("./src/venia/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ForgotPassword/ForgotPasswordForm/forgotPasswordForm.css
var forgotPasswordForm = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ForgotPassword/ForgotPasswordForm/forgotPasswordForm.css");
var forgotPasswordForm_default = /*#__PURE__*/__webpack_require__.n(forgotPasswordForm);

// CONCATENATED MODULE: ./src/venia/components/ForgotPassword/ForgotPasswordForm/forgotPasswordForm.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(forgotPasswordForm_default.a, options);



/* harmony default export */ var ForgotPasswordForm_forgotPasswordForm = (forgotPasswordForm_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/ForgotPassword/ForgotPasswordForm/forgotPasswordForm.js
var _s = $RefreshSig$();












const ForgotPasswordForm = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(ForgotPasswordForm_forgotPasswordForm, props.classes);
  const {
    initialValues,
    isResettingPassword,
    onSubmit,
    onCancel
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  return react_default.a.createElement(esm["c" /* Form */], {
    className: classes.root,
    initialValues: initialValues,
    onSubmit: onSubmit
  }, react_default.a.createElement(field["a" /* default */], {
    label: formatMessage({
      id: 'forgotPasswordForm.emailAddressText',
      defaultMessage: 'Email address'
    })
  }, react_default.a.createElement(textInput["a" /* default */], {
    autoComplete: "email",
    field: "email",
    validate: formValidators["d" /* isRequired */]
  })), react_default.a.createElement("div", {
    className: classes.buttonContainer
  }, react_default.a.createElement(Button_button["a" /* default */], {
    className: classes.submitButton,
    disabled: isResettingPassword,
    type: "submit",
    priority: "high"
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'forgotPasswordForm.submitButtonText.resetPassword',
    defaultMessage: 'Reset My Password'
  })), react_default.a.createElement(Button_button["a" /* default */], {
    className: classes.cancelButton,
    disabled: isResettingPassword,
    type: "button",
    priority: "low",
    onClick: onCancel
  }, "Go Back")));
};

_s(ForgotPasswordForm, "VxVnK37plYgXvLp7c0yHActoCwA=", false, function () {
  return [shallowMerge["a" /* default */], useIntl["a" /* default */]];
});

_c = ForgotPasswordForm;
ForgotPasswordForm.propTypes = {
  classes: Object(prop_types["shape"])({
    form: prop_types["string"],
    buttonContainer: prop_types["string"]
  }),
  initialValues: Object(prop_types["shape"])({
    email: prop_types["string"]
  }),
  onCancel: prop_types["func"].isRequired,
  onSubmit: prop_types["func"].isRequired
};
ForgotPasswordForm.defaultProps = {
  initialValues: {}
};
/* harmony default export */ var ForgotPassword_ForgotPasswordForm_forgotPasswordForm = (ForgotPasswordForm);

var _c;

$RefreshReg$(_c, "ForgotPasswordForm");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ForgotPassword/FormSubmissionSuccessful/formSubmissionSuccessful.css
var formSubmissionSuccessful = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ForgotPassword/FormSubmissionSuccessful/formSubmissionSuccessful.css");
var formSubmissionSuccessful_default = /*#__PURE__*/__webpack_require__.n(formSubmissionSuccessful);

// CONCATENATED MODULE: ./src/venia/components/ForgotPassword/FormSubmissionSuccessful/formSubmissionSuccessful.css

            

var formSubmissionSuccessful_options = {"injectType":"styleTag"};

formSubmissionSuccessful_options.insert = "head";
formSubmissionSuccessful_options.singleton = false;

var formSubmissionSuccessful_update = injectStylesIntoStyleTag_default()(formSubmissionSuccessful_default.a, formSubmissionSuccessful_options);



/* harmony default export */ var FormSubmissionSuccessful_formSubmissionSuccessful = (formSubmissionSuccessful_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/ForgotPassword/FormSubmissionSuccessful/formSubmissionSuccessful.js
var formSubmissionSuccessful_s = $RefreshSig$();







const FormSubmissionSuccessful = props => {
  formSubmissionSuccessful_s();

  const {
    email
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(FormSubmissionSuccessful_formSubmissionSuccessful, props.classes);
  const textMessage = formatMessage({
    id: 'formSubmissionSuccessful.textMessage',
    defaultMessage: 'If there is an account associated with your email address, you will receive an email with a link to change your password.'
  }, {
    email
  });
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("h2", {
    className: classes.title
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'formSubmissionSuccessful.recoverPasswordText',
    defaultMessage: 'Recover Password'
  })), react_default.a.createElement("p", {
    className: classes.text
  }, textMessage));
};

formSubmissionSuccessful_s(FormSubmissionSuccessful, "6HbKEGM4/yt1mWqe8hniFTWRimA=", false, function () {
  return [useIntl["a" /* default */], shallowMerge["a" /* default */]];
});

formSubmissionSuccessful_c = FormSubmissionSuccessful;
/* harmony default export */ var ForgotPassword_FormSubmissionSuccessful_formSubmissionSuccessful = (FormSubmissionSuccessful);
FormSubmissionSuccessful.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    text: prop_types["string"]
  }),
  email: prop_types["string"]
};

var formSubmissionSuccessful_c;

$RefreshReg$(formSubmissionSuccessful_c, "FormSubmissionSuccessful");
// CONCATENATED MODULE: ./src/venia/components/ForgotPassword/forgotPassword.gql.js
const REQUEST_PASSWORD_RESET_EMAIL_MUTATION = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "requestPasswordResetEmail"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "email"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "requestPasswordResetEmail"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "email"
            }
          }
        }],
        "directives": [{
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "connection"
          },
          "arguments": [{
            "kind": "Argument",
            "name": {
              "kind": "Name",
              "value": "key"
            },
            "value": {
              "kind": "StringValue",
              "value": "requestPasswordResetEmail",
              "block": false
            }
          }]
        }]
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 172,
    "source": {
      "body": "\n    mutation requestPasswordResetEmail($email: String!) {\n        requestPasswordResetEmail(email: $email)\n            @connection(key: \"requestPasswordResetEmail\")\n    }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
/* harmony default export */ var forgotPassword_gql = ({
  queries: {},
  mutations: {
    requestPasswordResetEmailMutation: REQUEST_PASSWORD_RESET_EMAIL_MUTATION
  }
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/ForgotPassword/forgotPassword.css
var forgotPassword = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/ForgotPassword/forgotPassword.css");
var forgotPassword_default = /*#__PURE__*/__webpack_require__.n(forgotPassword);

// CONCATENATED MODULE: ./src/venia/components/ForgotPassword/forgotPassword.css

            

var forgotPassword_options = {"injectType":"styleTag"};

forgotPassword_options.insert = "head";
forgotPassword_options.singleton = false;

var forgotPassword_update = injectStylesIntoStyleTag_default()(forgotPassword_default.a, forgotPassword_options);



/* harmony default export */ var ForgotPassword_forgotPassword = (forgotPassword_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/ForgotPassword/forgotPassword.js
var forgotPassword_s = $RefreshSig$();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const ForgotPassword = props => {
  forgotPassword_s();

  const {
    initialValues,
    onCancel
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const talonProps = Object(useForgotPassword["a" /* useForgotPassword */])(_objectSpread({
    onCancel
  }, forgotPassword_gql));
  const {
    forgotPasswordEmail,
    formErrors,
    handleCancel,
    handleFormSubmit,
    hasCompleted,
    isResettingPassword
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(ForgotPassword_forgotPassword, props.classes);
  const INSTRUCTIONS = formatMessage({
    id: 'forgotPassword.instructions',
    defaultMessage: 'Please enter your email address below to receive a password reset link.'
  });
  const children = hasCompleted ? react_default.a.createElement(ForgotPassword_FormSubmissionSuccessful_formSubmissionSuccessful, {
    email: forgotPasswordEmail
  }) : react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h1", {
    className: classes.title
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'forgotPassword.recoverPasswordText',
    defaultMessage: 'Recover Password'
  })), react_default.a.createElement("div", {
    className: classes.loginContainer
  }, react_default.a.createElement("div", {
    className: classes.forgotPasswordBlock
  }, react_default.a.createElement("p", {
    className: classes.instructions
  }, INSTRUCTIONS), react_default.a.createElement(ForgotPassword_ForgotPasswordForm_forgotPasswordForm, {
    initialValues: initialValues,
    isResettingPassword: isResettingPassword,
    onSubmit: handleFormSubmit,
    onCancel: handleCancel
  }), react_default.a.createElement(formError["a" /* default */], {
    errors: formErrors
  }))));
  return react_default.a.createElement("div", {
    className: classes.root
  }, children);
};

forgotPassword_s(ForgotPassword, "iCLffGQQtLi1MECZXu6+b75+Z64=", false, function () {
  return [useIntl["a" /* default */], useForgotPassword["a" /* useForgotPassword */], shallowMerge["a" /* default */]];
});

forgotPassword_c = ForgotPassword;
/* harmony default export */ var components_ForgotPassword_forgotPassword = __webpack_exports__["a"] = (ForgotPassword);
ForgotPassword.propTypes = {
  classes: Object(prop_types["shape"])({
    instructions: prop_types["string"],
    root: prop_types["string"]
  }),
  initialValues: Object(prop_types["shape"])({
    email: prop_types["string"]
  }),
  onCancel: prop_types["func"]
};
ForgotPassword.defaultProps = {
  onCancel: () => {}
};

var forgotPassword_c;

$RefreshReg$(forgotPassword_c, "ForgotPassword");

/***/ }),

/***/ "./src/venia/components/SignIn/signIn.js":
/*!***********************************************************!*\
  !*** ./src/venia/components/SignIn/signIn.js + 2 modules ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/SignIn/useSignIn.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/Password/password.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/venia/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/SignIn/signIn.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
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

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/SignIn/useSignIn.js + 1 modules
var useSignIn = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/SignIn/useSignIn.js");

// EXTERNAL MODULE: ./src/venia/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./src/venia/components/Button/button.js");

// EXTERNAL MODULE: ./src/venia/components/Field/field.js + 1 modules
var field = __webpack_require__("./src/venia/components/Field/field.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./src/venia/components/TextInput/textInput.js + 1 modules
var textInput = __webpack_require__("./src/venia/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./src/venia/components/Password/password.js + 1 modules
var Password_password = __webpack_require__("./src/venia/components/Password/password.js");

// EXTERNAL MODULE: ./src/venia/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./src/venia/components/LinkButton/linkButton.js");

// EXTERNAL MODULE: ./src/venia/components/FormError/formError.js + 3 modules
var formError = __webpack_require__("./src/venia/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__("./node_modules/@apollo/client/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js + 1 modules
var cartPageFragments_gql = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CartPage/cartPageFragments.gql.js");

// CONCATENATED MODULE: ./src/venia/components/SignIn/signIn.gql.js


const GET_CART_DETAILS_QUERY = client["gql"]`
    query GetCartDetailsAfterSignIn($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            items {
                id
                product {
                    id
                    name
                    sku
                    small_image {
                        url
                        label
                    }
                    price {
                        regularPrice {
                            amount {
                                value
                            }
                        }
                    }
                }
                quantity
                ... on ConfigurableCartItem {
                    configurable_options {
                        id
                        option_label
                        value_id
                        value_label
                    }
                }
            }
            prices {
                grand_total {
                    value
                    currency
                }
            }
            ...CartPageFragment
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./src/venia/components/SignIn/signIn.css
var signIn = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/venia/components/SignIn/signIn.css");
var signIn_default = /*#__PURE__*/__webpack_require__.n(signIn);

// CONCATENATED MODULE: ./src/venia/components/SignIn/signIn.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(signIn_default.a, options);



/* harmony default export */ var SignIn_signIn = (signIn_default.a.locals || {});
// CONCATENATED MODULE: ./src/venia/components/SignIn/signIn.js
var _s = $RefreshSig$();


















const SignIn = props => {
  _s();

  const classes = Object(shallowMerge["a" /* default */])(SignIn_signIn, props.classes);
  const {
    setDefaultUsername,
    showCreateAccount,
    showForgotPassword
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const talonProps = Object(useSignIn["a" /* useSignIn */])({
    getCartDetailsQuery: GET_CART_DETAILS_QUERY,
    setDefaultUsername,
    showCreateAccount,
    showForgotPassword
  });
  const {
    errors,
    handleCreateAccount,
    handleForgotPassword,
    handleSubmit,
    isBusy,
    setFormApi
  } = talonProps;

  if (isBusy) {
    return react_default.a.createElement("div", {
      className: classes.modal_active
    }, react_default.a.createElement(indicator["a" /* default */], null, react_default.a.createElement(message["a" /* default */], {
      id: 'signIn.loadingText',
      defaultMessage: 'Signing In'
    })));
  }

  const forgotPasswordClasses = {
    root: classes.forgotPasswordButton
  };
  const root_class = props.isPopup ? classes.root_left_align : classes.root;
  const password_classes = props.isPopup ? {
    label: classes.label_left_align,
    input: classes.input_borderPassword
  } : {
    label: classes.password_label
  };
  const label_class = {
    label: props.isPopup ? classes.label_left_align : classes.label
  };
  const input_class = props.isPopup ? {
    input: classes.input_border
  } : {};
  return react_default.a.createElement("div", {
    className: root_class
  }, react_default.a.createElement("h1", {
    className: classes.title
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'signIn.titleText',
    defaultMessage: 'Sign-in to Your Account'
  })), react_default.a.createElement("div", {
    className: classes.loginContainer
  }, react_default.a.createElement("div", {
    className: classes.blockHeader
  }, react_default.a.createElement("div", {
    className: classes.blockHeaderContent
  }, react_default.a.createElement("h2", null, "REGISTERED CUSTOMERS"), react_default.a.createElement("p", null, "If you have an account, sign in with your email address."))), react_default.a.createElement(formError["a" /* default */], {
    errors: Array.from(errors.values())
  }), react_default.a.createElement(esm["c" /* Form */], {
    getApi: setFormApi,
    className: classes.form,
    onSubmit: handleSubmit
  }, react_default.a.createElement("div", {
    className: classes.blockContentWrapper
  }, react_default.a.createElement("div", {
    className: classes.loginBlock
  }, react_default.a.createElement(field["a" /* default */], {
    label: formatMessage({
      id: 'signIn.emailText',
      defaultMessage: 'Email'
    }),
    classes: label_class
  }, react_default.a.createElement(textInput["a" /* default */], {
    autoComplete: "email",
    field: "email",
    validate: formValidators["d" /* isRequired */],
    classes: input_class
  })), react_default.a.createElement(Password_password["a" /* default */], {
    fieldName: "password",
    label: formatMessage({
      id: 'signIn.passwordText',
      defaultMessage: 'Password'
    }),
    validate: formValidators["d" /* isRequired */],
    classes: password_classes,
    autoComplete: "current-password",
    isToggleButtonHidden: false
  }), react_default.a.createElement("div", {
    className: classes.actionToolbar
  }, react_default.a.createElement("div", {
    className: classes.actionToolbarLogin
  }, react_default.a.createElement(Button_button["a" /* default */], {
    priority: "high",
    type: "submit"
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'signIn.signInText',
    defaultMessage: 'Sign In'
  }))), react_default.a.createElement("div", {
    className: classes.forgotPasswordButtonContainer
  }, react_default.a.createElement(linkButton["a" /* default */], {
    classes: forgotPasswordClasses,
    type: "button",
    onClick: handleForgotPassword
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'signIn.forgotPasswordText',
    defaultMessage: 'Forgot Password?'
  })))))), react_default.a.createElement("div", {
    className: classes.blockFooter
  }, react_default.a.createElement("div", {
    className: classes.blockFooterContent
  }, react_default.a.createElement("h3", null, "New Customers"), react_default.a.createElement("p", null, "Creating an account has many benefits: check out faster, keep more than one address, track orders and more."), react_default.a.createElement("div", {
    className: classes.blockFooterAction
  }, react_default.a.createElement(Button_button["a" /* default */], {
    priority: "high",
    type: "button",
    onClick: handleCreateAccount
  }, react_default.a.createElement(message["a" /* default */], {
    id: 'signIn.createAccountText',
    defaultMessage: 'Create an Account'
  }))))))));
};

_s(SignIn, "araSsVUurjHTGbaMo5OiM31pKbI=", false, function () {
  return [shallowMerge["a" /* default */], useIntl["a" /* default */], useSignIn["a" /* useSignIn */]];
});

_c = SignIn;
/* harmony default export */ var components_SignIn_signIn = __webpack_exports__["a"] = (SignIn);
SignIn.propTypes = {
  classes: Object(prop_types["shape"])({
    buttonsContainer: prop_types["string"],
    form: prop_types["string"],
    forgotPasswordButton: prop_types["string"],
    forgotPasswordButtonContainer: prop_types["string"],
    root: prop_types["string"],
    title: prop_types["string"]
  }),
  setDefaultUsername: prop_types["func"],
  showCreateAccount: prop_types["func"],
  showForgotPassword: prop_types["func"]
};
SignIn.defaultProps = {
  setDefaultUsername: () => {},
  showCreateAccount: () => {},
  showForgotPassword: () => {}
};

var _c;

$RefreshReg$(_c, "SignIn");

/***/ })

}]);
//# sourceMappingURL=25.8fde936c2ce81b560480.js.map