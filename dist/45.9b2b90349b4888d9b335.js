/*!
 * @version c5b0995-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"+sVj":function(e,n,t){"use strict"
function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(e,n){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,n)
var t=Object.prototype.toString.call(e).slice(8,-1)
"Object"===t&&e.constructor&&(t=e.constructor.name)
if("Map"===t||"Set"===t)return Array.from(e)
if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,n)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return c=e.done,e},e:function e(n){u=!0,l=n},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw l}}}}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length)
for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t]
return r}t.d(n,"a",function(){return a})
var r=function toString(e){var n=e.graphQLErrors,t=e.message
return n&&n.length?n.map(function(e){return e.message}).join(", "):t},a=function deriveErrorMessage(e){var n,t=[],a=_createForOfIteratorHelper(e)
try{for(a.s();!(n=a.n()).done;){var o=n.value
o&&t.push(r(o))}}catch(e){a.e(e)}finally{a.f()}return t.join(", ")}},"7X3U":function(e,n,t){"use strict"
var r=t("q1tI"),a=t.n(r),o=t("kriW"),i=t("17x9"),s=t("y1Xp"),l=t("LboF"),c=t.n(l),u=t("JEzH"),g=t.n(u),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},d=(c()(g.a,b),g.a.locals||{}),m=function Field(e){var n=e.children,t=e.id,r=e.label,i=e.optional,l=Object(s.a)(d,e.classes),c=i?a.a.createElement("span",{className:l.optional},a.a.createElement(o.a,{id:"field.optional",defaultMessage:"Optional"})):null
return a.a.createElement("div",{className:l.root},a.a.createElement("label",{className:l.label,htmlFor:t},r,c),n)}
m.propTypes={children:i.node,classes:Object(i.shape)({label:i.string,root:i.string}),id:i.string,label:i.node,optional:i.bool}
n.a=m},GO8B:function(e,n,t){"use strict"
t.d(n,"a",function(){return o})
var r=t("q1tI"),a=t("+sVj"),o=function useFormError(e){var n=e.errors
return{errorMessage:Object(r.useMemo)(function(){return Object(a.a)(n)},[n])}}},JEzH:function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".field-root-8k7 {\n    color: rgb(var(--venia-global-color-text));\n    display: grid;\n    align-content: start;\n}\n\n.field-label-3FH {\n    align-items: center;\n    display: flex;\n    font-size: 1rem;\n    font-weight: var(--venia-global-fontWeight-semibold);\n    justify-content: space-between;\n    line-height: 1rem;\n    padding: 0.5625rem 0.125rem;\n    min-height: 2.125rem;\n}\n\n.field-input-23y {\n    background: white;\n    border: 2px solid rgb(var(--venia-global-color-gray-600));\n    border-radius: 6px;\n    color: rgb(var(--venia-global-color-text));\n    display: inline-flex;\n    flex: 0 0 100%;\n    font-size: 1rem;\n    height: 2.5rem;\n    margin: 0;\n    max-width: 100%;\n    padding: calc(0.375rem - 1px) calc(0.625rem - 1px);\n    width: 100%;\n    -webkit-appearance: none;\n}\n\n.field-input-23y:focus {\n    box-shadow: -6px 6px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n\n.field-optional-xax {\n    color: rgb(var(--venia-global-color-gray-700));\n    font-size: var(--venia-global-fontSize-100);\n    font-weight: var(--venia-global-fontWeight-normal);\n}\n",""]),n.locals={root:"field-root-8k7",label:"field-label-3FH",input:"field-input-23y",optional:"field-optional-xax"}},NYgU:function(e,n,t){"use strict"
t.r(n),t.d(n,"default",function(){return V})
var r,a,o=t("J4zp"),i=t.n(o),s=t("q1tI"),l=t.n(s),c=t("dDsW"),u=t("kriW"),g=t("8UhI"),b=t("Ty5D"),d=t("J3e4"),m=t("o0o1"),f=t.n(m),p=t("yXPU"),h=t.n(p),v=t("VX74"),y=t("y1Xp"),x=t("FITH"),j=t("VkAN"),k=t.n(j),E=Object(v.gql)(r||(r=k()(["\n    mutation SetNewsletterSubscription($isSubscribed: Boolean!) {\n        updateCustomer(input: { is_subscribed: $isSubscribed }) {\n            customer {\n                id\n                is_subscribed\n            }\n        }\n    }\n"]))),O={getCustomerSubscriptionQuery:Object(v.gql)(a||(a=k()(["\n    query GetCustomerSubscription {\n        customer {\n            id\n            is_subscribed\n        }\n    }\n"]))),setNewsletterSubscriptionMutation:E},S=t("ACyH"),w=t("Ri9G"),M=t("7X3U"),T=t("dTQg"),P=t("UPvi"),N=t("DUu4"),I=t("LboF"),_=t.n(I),C=t("he9K"),F=t.n(C),W={injectType:"singletonStyleTag",insert:"head",singleton:!0},J=(_()(F.a,W),F.a.locals||{}),V=function CommunicationsPage(e){var n=Object(c.a)().formatMessage,t=Object(y.a)(J,e.classes),r=Object(d.a)(),a=i()(r,2)[1].addToast,o=function useCommunicationsPage(e){var n,t=e.afterSubmit,r=Object(y.a)(O,e.operations),a=r.getCustomerSubscriptionQuery,o=r.setNewsletterSubscriptionMutation,l=Object(x.b)(),c=i()(l,1)[0].isSignedIn,u=Object(v.useQuery)(a,{skip:!c}),g=u.data,b=u.error,d=Object(s.useMemo)(function(){if(g)return{isSubscribed:g.customer.is_subscribed}},[g]),m=Object(v.useMutation)(o),p=i()(m,2),j=p[0],k=p[1],E=k.error,S=k.loading
return{formErrors:[E,b],initialValues:d,handleSubmit:Object(s.useCallback)((n=h()(f.a.mark(function _callee(e){return f.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j({variables:e})
case 3:n.next=8
break
case 5:return n.prev=5,n.t0=n.catch(0),n.abrupt("return")
case 8:t&&t()
case 9:case"end":return n.stop()}},_callee,null,[[0,5]])})),function(e){return n.apply(this,arguments)}),[j,t]),isDisabled:S,isSignedIn:c}}({afterSubmit:Object(s.useCallback)(function(){a({type:"info",message:n({id:"communicationsPage.preferencesText",defaultMessage:"Your preferences have been updated."}),timeout:5e3})},[a,n])}),m=o.formErrors,p=o.handleSubmit,j=o.initialValues,k=o.isDisabled
if(!o.isSignedIn)return l.a.createElement(b.a,{to:"/"})
if(!j)return N.a
var E=n({id:"communicationsPage.title",defaultMessage:"Communications"})
return l.a.createElement("div",{className:t.root},l.a.createElement(P.b,null,E),l.a.createElement("h1",{className:t.title},l.a.createElement(u.a,{id:"communicationsPage.communicationsText",defaultMessage:"Communications"})),l.a.createElement("p",null,l.a.createElement(u.a,{id:"communicationsPage.optInText",defaultMessage:"We'd like to stay in touch. Please check the boxes next to the communications you'd like to receive."})),l.a.createElement(T.a,{errors:m}),l.a.createElement(g.c,{className:t.form,onSubmit:p,initialValues:j},l.a.createElement(M.a,{id:"isSubscribed",label:n({id:"communicationsPage.eNewsletterText",defaultMessage:"Venia E-Newsletter"})},l.a.createElement(w.a,{field:"isSubscribed",label:n({id:"communicationsPage.subscribeText",defaultMessage:"Stay on the cutting edge of fashion; subscribe to the monthly Venia Newsletter."})})),l.a.createElement("div",{className:t.buttonsContainer},l.a.createElement(S.a,{disabled:k,type:"submit",priority:"high"},n(k?{id:"communicationsPage.savingText",defaultMessage:"Saving"}:{id:"communicationsPage.changesText",defaultMessage:"Save Changes"})))))}},Ri9G:function(e,n,t){"use strict"
var r=t("pVnL"),a=t.n(r),o=t("QILm"),i=t.n(o),s=t("q1tI"),l=t.n(s),c=t("17x9"),u=t("8UhI"),g=t("y1Xp"),b=t("gpca"),d=t("/Gi5"),m=t("ZRVi"),f=t("LboF"),p=t.n(f),h=t("tNJM"),v=t.n(h),y={injectType:"singletonStyleTag",insert:"head",singleton:!0},x=(p()(v.a,y),v.a.locals||{}),j=["ariaLabel","classes","field","fieldValue","id","label","message"],k=l.a.createElement(d.a,null),E=l.a.createElement(m.a,null),O=function Checkbox(e){var n=e.ariaLabel,t=e.classes,r=e.field,o=e.fieldValue,c=e.id,d=e.label,m=e.message,f=i()(e,j),p=Object(u.l)(r),h=Object(u.m)(r),v=Object(g.a)(x,t),y=h.value?k:E
return Object(s.useEffect)(function(){null!=o&&o!==h.value&&p.setValue(o)},[p,h.value,o]),l.a.createElement(s.Fragment,null,l.a.createElement("label",{"aria-label":n,className:v.root,htmlFor:c},l.a.createElement(u.b,a()({},f,{className:v.input,field:r,id:c})),l.a.createElement("span",{className:v.icon},y),l.a.createElement("span",{className:v.label},d)),l.a.createElement(b.a,{fieldState:h},m))}
n.a=O
O.propTypes={ariaLabel:c.string,classes:Object(c.shape)({icon:c.string,input:c.string,label:c.string,message:c.string,root:c.string}),field:c.string.isRequired,id:c.string,label:c.node.isRequired,message:c.node}},SWJs:function(e,n,t){(e.exports=t("JPst")(!1)).push([e.i,"",""])},Y9xl:function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".message-root-3-g {\n    color: rgb(var(--venia-global-color-text));\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.625rem 0.125rem 0.125rem;\n}\n\n.message-root-3-g:empty {\n    display: none;\n}\n\n.message-root_error-1hZ {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n",""]),n.locals={root:"message-root-3-g",root_error:"message-root_error-1hZ message-root-3-g"}},dTQg:function(e,n,t){"use strict"
var r=t("q1tI"),a=t.n(r),o=t("17x9"),i=t("GO8B"),s=t("nGES"),l=t("y1Xp"),c=t("LboF"),u=t.n(c),g=t("h8ee"),b=t.n(g),d={injectType:"singletonStyleTag",insert:"head",singleton:!0},m=(u()(b.a,d),b.a.locals||{}),f=a.a.forwardRef(function(e,n){var t=e.children,r=Object(l.a)(m,e.classes)
return a.a.createElement("div",{className:r.root,ref:n},a.a.createElement("span",{className:r.errorMessage},t))}),p=f
f.propTypes={classes:Object(o.shape)({root:o.string,errorMessage:o.string}),children:o.node}
var h=t("SWJs"),v=t.n(h),y={injectType:"singletonStyleTag",insert:"head",singleton:!0},x=(u()(v.a,y),v.a.locals||{}),j=function FormError(e){var n=e.classes,t=e.errors,o=e.scrollOnError,c=Object(i.a)({errors:t}).errorMessage,u=Object(r.useRef)(null)
Object(s.a)(u,o&&c)
var g=Object(l.a)(x,n)
return c?a.a.createElement(p,{classes:g,ref:u},c):null}
n.a=j
j.propTypes={classes:Object(o.shape)({root:o.string,errorMessage:o.string}),errors:Object(o.arrayOf)(Object(o.instanceOf)(Error)),scrollOnError:o.bool},j.defaultProps={scrollOnError:!0}},gpca:function(e,n,t){"use strict"
var r=t("q1tI"),a=t.n(r),o=t("dDsW"),i=t("17x9"),s=t("LboF"),l=t.n(s),c=t("Y9xl"),u=t.n(c),g={injectType:"singletonStyleTag",insert:"head",singleton:!0},b=(l()(u.a,g),u.a.locals||{}),d=t("y1Xp"),m=function Message(e){var n,t=e.children,r=e.classes,i=e.fieldState,s=Object(o.a)().formatMessage,l=i.error,c=Object(d.a)(b,r),u=l?c.root_error:c.root
return l&&(n=s({id:l.id,defaultMessage:l.defaultMessage},{value:l.value})),a.a.createElement("p",{className:u},n||t)}
n.a=m
m.defaultProps={fieldState:{}},m.propTypes={children:i.node,classes:Object(i.shape)({root:i.string,root_error:i.string}),fieldState:Object(i.shape)({error:Object(i.shape)({id:i.string,defaultMessage:i.string,value:Object(i.oneOfType)([i.number,i.string])})})}},h8ee:function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".errorMessage-root-1cS {\n}\n\n.errorMessage-errorMessage-3sE {\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-typography-body-S-fontSize);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    line-height: var(--venia-global-lineHeight-300);\n}\n",""]),n.locals={root:"errorMessage-root-1cS",errorMessage:"errorMessage-errorMessage-3sE"}},he9K:function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".communicationsPage-root--lW {\n    display: grid;\n    padding: 2.5rem 3rem;\n    row-gap: 2rem;\n}\n\n.communicationsPage-title-1fw {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.communicationsPage-form-1fu {\n    display: grid;\n    row-gap: 2rem;\n}\n\n.communicationsPage-buttonsContainer-4ij {\n    display: flex;\n    justify-content: flex-start;\n}\n\n@media (max-width: 960px) {\n    .communicationsPage-root--lW {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n    }\n\n    .communicationsPage-buttonsContainer-4ij {\n        justify-content: center;\n    }\n}\n",""]),n.locals={root:"communicationsPage-root--lW",title:"communicationsPage-title-1fw",form:"communicationsPage-form-1fu",buttonsContainer:"communicationsPage-buttonsContainer-4ij"}},nGES:function(e,n,t){"use strict"
t.d(n,"a",function(){return o})
var r=t("q1tI"),a={behavior:"smooth",block:"center"},o=function useScrollIntoView(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a
Object(r.useEffect)(function(){e.current&&e.current instanceof HTMLElement&&n&&e.current.scrollIntoView(t)},[t,e,n])}},tNJM:function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".checkbox-root-ZAW {\n    --stroke: var(--venia-global-color-gray-600);\n    align-items: center;\n    color: rgb(var(--venia-global-color-gray-900));\n    display: grid;\n    gap: calc(0.875rem - 5px);\n    grid-auto-flow: column;\n    grid-template-areas: 'input label';\n    grid-template-columns: min-content 1fr;\n    justify-items: center;\n    line-height: 1.5rem;\n}\n\n.checkbox-input-h8k {\n    -webkit-appearance: none;\n    background: none;\n    border: 2px solid transparent;\n    border-radius: 4px;\n    cursor: pointer;\n    grid-area: input;\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3R- {\n    grid-area: input;\n    height: 1.5rem;\n    pointer-events: none;\n    width: 1.5rem;\n}\n\n.checkbox-icon-3R- svg {\n    stroke: rgb(var(--stroke));\n}\n\n.checkbox-label-3c_ {\n    cursor: pointer;\n    font-size: var(--venia-typography-body-M-fontSize);\n    grid-area: label;\n    justify-self: start;\n}\n\n.checkbox-input-h8k:disabled {\n    cursor: default;\n}\n\n/* When the input is disabled, update the cursor on the sibling label element. */\n.checkbox-input-h8k:disabled ~ .checkbox-label-3c_ {\n    cursor: default;\n}\n\n.checkbox-input-h8k:checked:enabled + .checkbox-icon-3R- {\n    --stroke: var(--venia-brand-color-1-700);\n}\n\n.checkbox-input-h8k:active:enabled,\n.checkbox-input-h8k:focus:enabled {\n    box-shadow: -3px 3px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n",""]),n.locals={root:"checkbox-root-ZAW",input:"checkbox-input-h8k",icon:"checkbox-icon-3R-",label:"checkbox-label-3c_"}}}])
