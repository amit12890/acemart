/*!
 * @version b8ba5c6f-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{GyKt:function(e,n,a){"use strict"
a.r(n),a.d(n,"default",function(){return k})
var t,o,r,i,s=a("MVZn"),l=a.n(s),c=a("q1tI"),m=a.n(c),u=a("dDsW"),g=a("kriW"),d=a("Ty5D"),f=a("eVey"),b=a("y1Xp"),p=a("ACyH"),I=a("gpca"),P=a("UPvi"),w=a("DUu4"),h=a("LboF"),C=a.n(h),y=a("ujwO"),v=a.n(y),E={injectType:"singletonStyleTag",insert:"head",singleton:!0},j=(C()(v.a,E),v.a.locals||{}),O=a("VkAN"),L=a.n(O),M=a("VX74"),S=Object(M.gql)(t||(t=L()(["\n    fragment AccountInformationPageFragment on Customer {\n        id\n        firstname\n        lastname\n        email\n    }\n"]))),V={mutations:{setCustomerInformationMutation:Object(M.gql)(o||(o=L()(['\n    mutation SetCustomerInformation($customerInput: CustomerInput!) {\n        updateCustomer(input: $customerInput)\n            @connection(key: "updateCustomer") {\n            customer {\n                id\n                ...AccountInformationPageFragment\n            }\n        }\n    }\n    ',"\n"])),S),changeCustomerPasswordMutation:Object(M.gql)(r||(r=L()(['\n    mutation ChangeCustomerPassword(\n        $currentPassword: String!\n        $newPassword: String!\n    ) {\n        changeCustomerPassword(\n            currentPassword: $currentPassword\n            newPassword: $newPassword\n        ) @connection(key: "changeCustomerPassword") {\n            id\n            email\n        }\n    }\n'])))},queries:{getCustomerInformationQuery:Object(M.gql)(i||(i=L()(["\n    query GetCustomerInformation {\n        customer {\n            id\n            ...AccountInformationPageFragment\n        }\n    }\n    ","\n"])),S)}},N=m.a.lazy(function(){return Promise.all([a.e(0),a.e(40)]).then(a.bind(null,"+jtD"))}),k=function AccountInformationPage(e){var n=Object(b.a)(j,e.classes),a=Object(f.a)(l()({},V)),t=a.handleCancel,o=a.formErrors,r=a.handleChangePassword,i=a.handleSubmit,s=a.initialValues,h=a.isDisabled,C=a.isSignedIn,y=a.isUpdateMode,v=a.loadDataError,E=a.shouldShowNewPassword,O=a.showUpdateMode,L=Object(u.a)().formatMessage
if(!C)return m.a.createElement(d.a,{to:"/"})
var M=v?m.a.createElement(I.a,null,m.a.createElement(g.a,{id:"accountInformationPage.errorTryAgain",defaultMessage:"Something went wrong. Please refresh and try again."})):null,S=null
if(!s)return w.a
var k=s.customer,x="".concat(k.firstname," ").concat(k.lastname)
return S=m.a.createElement(c.Fragment,null,m.a.createElement("div",{className:n.accountDetails},m.a.createElement("div",{className:n.lineItemsContainer},m.a.createElement("span",{className:n.nameLabel},m.a.createElement(g.a,{id:"global.name",defaultMessage:"Name"})),m.a.createElement("span",{className:n.nameValue},x),m.a.createElement("span",{className:n.emailLabel},m.a.createElement(g.a,{id:"global.email",defaultMessage:"Email"})),m.a.createElement("span",{className:n.emailValue},k.email),m.a.createElement("span",{className:n.passwordLabel},m.a.createElement(g.a,{id:"global.password",defaultMessage:"Password"})),m.a.createElement("span",{className:n.passwordValue},"***********")),m.a.createElement("div",{className:n.editButtonContainer},m.a.createElement(p.a,{className:n.editInformationButton,disabled:!1,onClick:O,priority:"normal"},m.a.createElement(g.a,{id:"global.editButton",defaultMessage:"Edit"})))),m.a.createElement(c.Suspense,{fallback:null},m.a.createElement(N,{formErrors:o,initialValues:k,isDisabled:h,isOpen:y,onCancel:t,onChangePassword:r,onSubmit:i,shouldShowNewPassword:E}))),m.a.createElement("div",{className:n.root},m.a.createElement(P.c,null,L({id:"accountInformationPage.titleAccount",defaultMessage:"Account Information"})),m.a.createElement("h1",{className:n.title},m.a.createElement(g.a,{id:"accountInformationPage.accountInformation",defaultMessage:"Account Information"})),M||S)}},Y9xl:function(e,n,a){(n=e.exports=a("JPst")(!1)).push([e.i,".message-root-3-g {\n    color: rgb(var(--venia-global-color-text));\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.625rem 0.125rem 0.125rem;\n}\n\n.message-root-3-g:empty {\n    display: none;\n}\n\n.message-root_error-1hZ {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n",""]),n.locals={root:"message-root-3-g",root_error:"message-root_error-1hZ message-root-3-g"}},eVey:function(e,n,a){"use strict"
a.d(n,"a",function(){return g})
var t=a("o0o1"),o=a.n(t),r=a("yXPU"),i=a.n(r),s=a("J4zp"),l=a.n(s),c=a("q1tI"),m=a("VX74"),u=a("FITH"),g=function useAccountInformationPage(e){var n=e.mutations,a=n.setCustomerInformationMutation,t=n.changeCustomerPasswordMutation,r=e.queries.getCustomerInformationQuery,s=Object(u.b)(),g=l()(s,1)[0].isSignedIn,d=Object(c.useState)(!1),f=l()(d,2),b=f[0],p=f[1],I=Object(c.useState)(!1),P=l()(I,2),w=P[0],h=P[1],C=Object(c.useState)(!1),y=l()(C,2),v=y[0],E=y[1],j=Object(m.useQuery)(r,{skip:!g,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),O=j.data,L=j.error,M=Object(m.useMutation)(a),S=l()(M,2),V=S[0],N=S[1],k=N.error,x=N.loading,D=Object(m.useMutation)(t),z=l()(D,2),B=z[0],A=z[1],F=A.error,J=A.loading,q=Object(c.useMemo)(function(){if(O)return{customer:O.customer}},[O]),T=Object(c.useCallback)(function(){p(!0)},[p]),U=Object(c.useCallback)(function(){h(!1),p(!1)},[h]),_=Object(c.useCallback)(function(){h(!0),E(!1)},[h]),Q=Object(c.useCallback)(function(){var e=i()(o.a.mark(function _callee(e){var n,a,t,r,i
return o.a.wrap(function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(n=e.email,a=e.firstname,t=e.lastname,r=e.password,i=e.newPassword,o.prev=1,n=n.trim(),a=a.trim(),t=t.trim(),r=r.trim(),i=i?i.trim():i,q.customer.email===n&&q.customer.firstname===a&&q.customer.lastname===t){o.next=10
break}return o.next=10,V({variables:{customerInput:{email:n,firstname:a,lastname:t,password:r}}})
case 10:if(!r||!i){o.next=13
break}return o.next=13,B({variables:{currentPassword:r,newPassword:i}})
case 13:U(!1),o.next=20
break
case 16:return o.prev=16,o.t0=o.catch(1),E(!0),o.abrupt("return")
case 20:case"end":return o.stop()}},_callee,null,[[1,16]])}))
return function(n){return e.apply(this,arguments)}}(),[V,U,B,q])
return{handleCancel:U,formErrors:v?[k,F]:[],handleSubmit:Q,handleChangePassword:T,initialValues:q,isDisabled:x||J,isUpdateMode:w,isSignedIn:g,loadDataError:L,shouldShowNewPassword:b,showUpdateMode:_}}},gpca:function(e,n,a){"use strict"
var t=a("q1tI"),o=a.n(t),r=a("dDsW"),i=a("17x9"),s=a("LboF"),l=a.n(s),c=a("Y9xl"),m=a.n(c),u={injectType:"singletonStyleTag",insert:"head",singleton:!0},g=(l()(m.a,u),m.a.locals||{}),d=a("y1Xp"),f=function Message(e){var n,a=e.children,t=e.classes,i=e.fieldState,s=Object(r.a)().formatMessage,l=i.error,c=Object(d.a)(g,t),m=l?c.root_error:c.root
return l&&(n=s({id:l.id,defaultMessage:l.defaultMessage},{value:l.value})),o.a.createElement("p",{className:m},n||a)}
n.a=f
f.defaultProps={fieldState:{}},f.propTypes={children:i.node,classes:Object(i.shape)({root:i.string,root_error:i.string}),fieldState:Object(i.shape)({error:Object(i.shape)({id:i.string,defaultMessage:i.string,value:Object(i.oneOfType)([i.number,i.string])})})}},ujwO:function(e,n,a){(n=e.exports=a("JPst")(!1)).i(a("ysJs"),""),n.push([e.i,".accountInformationPage-root-3dg {\n    display: grid;\n    padding: 2.5rem 3rem;\n    row-gap: 2rem;\n}\n\n.accountInformationPage-title-Uli {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-accountDetails-1eC {\n    display: grid;\n    row-gap: 2rem;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n.accountInformationPage-lineItemsContainer-3bf {\n    grid-column: 1 / span 1;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    line-height: 1.5rem;\n}\n\n.accountInformationPage-lineItemLabel-1zl {\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-nameLabel-1tz,\n.accountInformationPage-emailLabel-1QG,\n.accountInformationPage-passwordLabel-3EB {\n}\n\n.accountInformationPage-nameValue-3JI,\n.accountInformationPage-emailValue-JQF,\n.accountInformationPage-passwordValue-3YW {\n}\n\n.accountInformationPage-editButtonContainer-1ZN {\n    grid-column: 1 / span 1;\n    text-align: center;\n}\n\n.accountInformationPage-editInformationButton-34w {\n}\n\n@media (min-width: 961px) {\n    .accountInformationPage-nameLabel-1tz,\n    .accountInformationPage-emailLabel-1QG,\n    .accountInformationPage-passwordLabel-3EB {\n    }\n}\n\n@media (max-width: 960px) {\n    .accountInformationPage-accountDetails-1eC {\n        grid-template-columns: 1fr;\n    }\n\n    .accountInformationPage-lineItemsContainer-3bf {\n        grid-template-columns: 1fr;\n        grid-gap: 0.75rem;\n    }\n}\n",""]),n.locals={root:"accountInformationPage-root-3dg",title:"accountInformationPage-title-Uli",accountDetails:"accountInformationPage-accountDetails-1eC",lineItemsContainer:"accountInformationPage-lineItemsContainer-3bf",lineItemLabel:"accountInformationPage-lineItemLabel-1zl",nameLabel:"accountInformationPage-nameLabel-1tz accountInformationPage-lineItemLabel-1zl accountInformationPage-lineItemLabel-1zl",emailLabel:"accountInformationPage-emailLabel-1QG accountInformationPage-lineItemLabel-1zl accountInformationPage-lineItemLabel-1zl",passwordLabel:"accountInformationPage-passwordLabel-3EB accountInformationPage-lineItemLabel-1zl accountInformationPage-lineItemLabel-1zl",nameValue:"accountInformationPage-nameValue-3JI",emailValue:"accountInformationPage-emailValue-JQF",passwordValue:"accountInformationPage-passwordValue-3YW",editButtonContainer:"accountInformationPage-editButtonContainer-1ZN",editInformationButton:"accountInformationPage-editInformationButton-34w "+a("ysJs").locals.root_normalPriority}}}])
