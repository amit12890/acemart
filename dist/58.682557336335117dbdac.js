/*!
 * @version b0a2fc1-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"7rd1":function(e,t,s){(t=e.exports=s("JPst")(!1)).push([e.i,".addToListButton-root-2Si {\n    align-content: center;\n    column-gap: 0.5rem;\n    display: inline-flex;\n    margin-left: -0.5rem;\n    padding: 0 0.5rem;\n    text-decoration: underline;\n}\n\n.addToListButton-root_selected-sLq {\n    --selectedColor: rgb(var(--venia-global-color-red-400));\n    --fill: var(--selectedColor);\n    --stroke: var(--selectedColor);\n\n    text-decoration: none;\n}\n",""]),t.locals={root:"addToListButton-root-2Si",root_selected:"addToListButton-root_selected-sLq addToListButton-root-2Si"}},"90Yi":function(e,t,s){"use strict"
s.d(t,"a",function(){return T})
var o=s("o0o1"),n=s.n(o),r=s("RIqP"),a=s.n(r),i=s("yXPU"),c=s.n(i),u=s("J4zp"),l=s.n(u),d=s("q1tI"),f=s("dDsW"),p=s("VX74"),b=s("FITH"),g=s("y1Xp"),m=s("5Shc"),T=function useSingleWishlist(e){var t=e.afterAdd,s=e.beforeAdd,o=e.item,r=Object(g.a)(m.b,e.operations),i=Object(p.useMutation)(r.addProductToWishlistMutation),u=l()(i,2),T=u[0],P=u[1],h=P.data,y=P.error,j=P.loading,O=Object(p.useQuery)(r.getProductsInWishlistsQuery),M=O.client,v=O.data.customerWishlistProducts,w=Object(d.useMemo)(function(){return v.includes(o.sku)||j},[v,j,o.sku]),x=Object(d.useState)(0),k=l()(x,2),I=k[0],S=k[1],B=Object(f.a)().formatMessage,L=Object(b.b)(),E=l()(L,1)[0].isSignedIn,W=Object(d.useCallback)(c()(n.a.mark(function _callee(){return n.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=4
break}S(function(e){return++e}),e.next=17
break
case 4:if(e.prev=4,!s){e.next=8
break}return e.next=8,s()
case 8:return e.next=10,T({variables:{wishlistId:"0",itemOptions:o}})
case 10:M.writeQuery({query:r.getProductsInWishlistsQuery,data:{customerWishlistProducts:[].concat(a()(v),[o.sku])}}),t&&t(),e.next=17
break
case 14:e.prev=14,e.t0=e.catch(4)
case 17:case"end":return e.stop()}},_callee,null,[[4,14]])})),[T,t,s,M,v,E,o,r.getProductsInWishlistsQuery]),A=Object(d.useMemo)(function(){return I?{type:"info",message:B({id:"wishlist.galleryButton.loginMessage",defaultMessage:"Please sign-in to your Account to save items for later."}),timeout:5e3}:null},[B,I]),_=Object(d.useMemo)(function(){return h?{type:"success",message:B({id:"wishlist.galleryButton.successMessageGeneral",defaultMessage:"Item successfully added to your favorites list."}),timeout:5e3}:null},[h,B]),C=Object(d.useMemo)(function(){return y?{type:"error",message:B({id:"wishlist.galleryButton.addError",defaultMessage:"Something went wrong adding the product to your wishlist."}),timeout:5e3}:null},[y,B])
return{buttonProps:Object(d.useMemo)(function(){return{"aria-label":B({id:"wishlistButton.addText",defaultMessage:"Add to Favorites"}),disabled:w,onClick:W,type:"button"}},[B,W,w]),buttonText:e.buttonText&&e.buttonText(w),customerWishlistProducts:v,errorToastProps:C,handleClick:W,isSelected:w,loginToastProps:A,successToastProps:_}}},GVur:function(e,t,s){"use strict"
s.r(t),s.d(t,"default",function(){return L})
var o=s("pVnL"),n=s.n(o),r=s("q1tI"),a=s.n(r),i=s("17x9"),c=s("dN85"),u=s("90Yi"),l=s("y1Xp"),d=s("M7gd"),f=s("LboF"),p=s.n(f),b=s("7rd1"),g=s.n(b),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},T=(p()(g.a,m),g.a.locals||{}),P=s("MVZn"),h=s.n(P),y=s("J4zp"),j=s.n(y),O=s("JoNN"),M=s("QMhA"),v=s("I6fM"),w=s("J3e4"),x=a.a.createElement(d.a,{size:20,src:O.a}),k=a.a.createElement(d.a,{size:20,src:M.a}),I=a.a.createElement(d.a,{size:20,src:v.a}),S=a.a.createElement(d.a,{size:20,src:c.a}),B=function AddToListButton(e){var t=Object(u.a)(e),s=t.buttonProps,o=t.buttonText,i=t.errorToastProps,c=t.isSelected
!function useCommonToasts(e){var t=e.errorToastProps,s=e.loginToastProps,o=e.successToastProps,n=Object(w.a)(),a=j()(n,2)[1].addToast
Object(r.useEffect)(function(){s&&a(h()({},s,{icon:I}))},[a,s]),Object(r.useEffect)(function(){o&&a(h()({},o,{icon:x}))},[a,o]),Object(r.useEffect)(function(){t&&a(h()({},t,{icon:k}))},[a,t])}({errorToastProps:i,loginToastProps:t.loginToastProps,successToastProps:t.successToastProps})
var d=Object(l.a)(T,e.classes),f=c?d.root_selected:d.root
return a.a.createElement("button",n()({className:f},s),e.icon," ",o)},L=B
B.defaultProps={icon:S},B.propTypes={afterAdd:i.func,beforeAdd:i.func,classes:Object(i.shape)({root:i.string,root_selected:i.string}),icon:i.element}}}])
