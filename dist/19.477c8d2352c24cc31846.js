/*!
 * @version 2ff5c583-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7dgj":function(n,e,t){(e=n.exports=t("JPst")(!1)).push([n.i,".editModal-root-3_7 {\n    background-color: white;\n    display: grid;\n    left: calc(50% - 370px);\n    grid-template-rows: auto 1fr;\n    max-height: 90vh;\n    max-width: 740px;\n    opacity: 0;\n    overflow: hidden;\n    position: fixed;\n    top: 5vh;\n    transform: scale(1.15);\n    transition-duration: 192ms;\n    transition-timing-function: var(--venia-global-anim-out);\n    transition-property: opacity, transform, visibility;\n    visibility: hidden;\n    width: 100%;\n    z-index: 3;\n}\n\n.editModal-root_open-1Qq {\n    box-shadow: 1px 0 rgb(var(--venia-global-color-border));\n    opacity: 1;\n    transform: scale(1);\n    transition-duration: 224ms;\n    transition-timing-function: var(--venia-global-anim-in);\n    visibility: visible;\n}\n\n.editModal-body-1PV {\n    overflow: auto;\n    padding: 0.5rem 2rem;\n}\n\n.editModal-header-3fm {\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: space-between;\n    padding: 0.875rem 2rem;\n}\n\n.editModal-headerText-3EL {\n    align-self: center;\n    color: rgb(var(--venia-global-color-text-alt));\n}\n\n@media (max-width: 960px) {\n    .editModal-root-3_7 {\n        bottom: 0;\n        height: 100%;\n        left: auto;\n        max-height: none;\n        max-width: 360px;\n        right: 0;\n        top: 0;\n        transform: translate3d(100%, 0, 0);\n    }\n\n    .editModal-root_open-1Qq {\n        transform: translate3d(0, 0, 0);\n    }\n\n    .editModal-body-1PV {\n        padding: 0.5rem 1rem;\n    }\n\n    .editModal-header-3fm {\n        padding: 0.875rem;\n    }\n}\n",""]),e.locals={root:"editModal-root-3_7",root_open:"editModal-root_open-1Qq editModal-root-3_7 editModal-root-3_7",body:"editModal-body-1PV",header:"editModal-header-3fm",headerText:"editModal-headerText-3EL"}},XWZH:function(n,e,t){"use strict"
t.r(e)
var a=t("q1tI"),o=t.n(a),i=t("kriW"),r=t("17x9"),d=t("wHH0"),l=t("J4zp"),s=t.n(l),c=t("OlZo"),p=t("y1Xp"),m=t("oTwF"),g=t("TsSr"),h=t("+y/R"),b=t("LboF"),u=t.n(b),f=t("7dgj"),v=t.n(f),x={injectType:"singletonStyleTag",insert:"head",singleton:!0},w=(u()(v.a,x),v.a.locals||{}),y=function EditModal(n){var e=n.classes,t=n.shippingData,a=n.onSuccess,r=function useEditModal(){var n=Object(c.b)(),e=s()(n,2),t=e[0].drawer
return{handleClose:e[1].closeDrawer,isOpen:"shippingInformation.edit"===t}}(),l=r.handleClose,b=r.isOpen,u=Object(p.a)(w,e),f=b?u.root_open:u.root,v=b?o.a.createElement(h.a,{onSuccess:a,afterSubmit:l,onCancel:l,shippingData:t}):null
return o.a.createElement(g.a,null,o.a.createElement("aside",{className:f},o.a.createElement("div",{className:u.header},o.a.createElement("span",{className:u.headerText},o.a.createElement(i.a,{id:"checkoutPage.editShippingInfo",defaultMessage:"Edit Shipping Information"})),o.a.createElement("button",{className:u.closeButton,onClick:l},o.a.createElement(m.a,{src:d.a}))),o.a.createElement("div",{className:u.body},v)))}
e.default=y
y.propTypes={classes:Object(r.shape)({root:r.string,root_open:r.string,body:r.string,header:r.string,headerText:r.string}),shippingData:r.object}}}])
