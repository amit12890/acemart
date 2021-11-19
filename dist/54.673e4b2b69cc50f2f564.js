/*!
 * @version 232fb27-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"5Shc":function(t,e,s){"use strict"
s.d(e,"a",function(){return u})
var n,o,r=s("VkAN"),i=s.n(r),a=s("VX74"),c=Object(a.gql)(n||(n=i()(["\n    mutation AddProductToWishlistFromGallery(\n        $wishlistId: ID!\n        $itemOptions: WishlistItemInput!\n    ) {\n        addProductsToWishlist(\n            wishlistId: $wishlistId\n            wishlistItems: [$itemOptions]\n        ) {\n            user_errors {\n                code\n                message\n            }\n        }\n    }\n"]))),u=Object(a.gql)(o||(o=i()(["\n    query GetProductsInWishlistsForGallery {\n        customerWishlistProducts @client\n    }\n"])))
e.b={addProductToWishlistMutation:c,getProductsInWishlistsQuery:u}},"7rd1":function(t,e,s){(e=t.exports=s("JPst")(!1)).push([t.i,".addToListButton-root-2Si {\n    align-content: center;\n    column-gap: 0.5rem;\n    display: inline-flex;\n    margin-left: -0.5rem;\n    padding: 0 0.5rem;\n    text-decoration: underline;\n}\n\n.addToListButton-root_selected-sLq {\n    --selectedColor: rgb(var(--venia-global-color-red-400));\n    --fill: var(--selectedColor);\n    --stroke: var(--selectedColor);\n\n    text-decoration: none;\n}\n",""]),e.locals={root:"addToListButton-root-2Si",root_selected:"addToListButton-root_selected-sLq addToListButton-root-2Si"}},"90Yi":function(t,e,s){"use strict"
s.d(e,"a",function(){return h})
var n=s("o0o1"),o=s.n(n),r=s("RIqP"),i=s.n(r),a=s("yXPU"),c=s.n(a),u=s("J4zp"),l=s.n(u),d=s("q1tI"),f=s("dDsW"),p=s("VX74"),b=s("FITH"),g=s("y1Xp"),m=s("5Shc"),h=function useSingleWishlist(t){var e=t.afterAdd,s=t.beforeAdd,n=t.item,r=Object(g.a)(m.b,t.operations),a=Object(p.useMutation)(r.addProductToWishlistMutation),u=l()(a,2),h=u[0],T=u[1],P=T.data,y=T.error,O=T.loading,j=Object(p.useQuery)(r.getProductsInWishlistsQuery),w=j.client,I=j.data.customerWishlistProducts,M=Object(d.useMemo)(function(){return I.includes(n.sku)||O},[I,O,n.sku]),v=Object(d.useState)(0),x=l()(v,2),W=x[0],k=x[1],S=Object(f.a)().formatMessage,A=Object(b.b)(),B=l()(A,1)[0].isSignedIn,L=Object(d.useCallback)(c()(o.a.mark(function _callee(){return o.a.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:if(B){t.next=4
break}k(function(t){return++t}),t.next=17
break
case 4:if(t.prev=4,!s){t.next=8
break}return t.next=8,s()
case 8:return t.next=10,h({variables:{wishlistId:"0",itemOptions:n}})
case 10:w.writeQuery({query:r.getProductsInWishlistsQuery,data:{customerWishlistProducts:[].concat(i()(I),[n.sku])}}),e&&e(),t.next=17
break
case 14:t.prev=14,t.t0=t.catch(4)
case 17:case"end":return t.stop()}},_callee,null,[[4,14]])})),[h,e,s,w,I,B,n,r.getProductsInWishlistsQuery]),q=Object(d.useMemo)(function(){return W?{type:"info",message:S({id:"wishlist.galleryButton.loginMessage",defaultMessage:"Please sign-in to your Account to save items for later."}),timeout:5e3}:null},[S,W]),E=Object(d.useMemo)(function(){return P?{type:"success",message:S({id:"wishlist.galleryButton.successMessageGeneral",defaultMessage:"Item successfully added to your favorites list."}),timeout:5e3}:null},[P,S]),_=Object(d.useMemo)(function(){return y?{type:"error",message:S({id:"wishlist.galleryButton.addError",defaultMessage:"Something went wrong adding the product to your wishlist."}),timeout:5e3}:null},[y,S])
return{buttonProps:Object(d.useMemo)(function(){return{"aria-label":S({id:"wishlistButton.addText",defaultMessage:"Add to Favorites"}),disabled:M,onClick:L,type:"button"}},[S,L,M]),buttonText:t.buttonText&&t.buttonText(M),customerWishlistProducts:I,errorToastProps:_,handleClick:L,isSelected:M,loginToastProps:q,successToastProps:E}}},GVur:function(t,e,s){"use strict"
s.r(e),s.d(e,"default",function(){return A})
var n=s("pVnL"),o=s.n(n),r=s("q1tI"),i=s.n(r),a=s("17x9"),c=s("dN85"),u=s("90Yi"),l=s("y1Xp"),d=s("M7gd"),f=s("LboF"),p=s.n(f),b=s("7rd1"),g=s.n(b),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},h=(p()(g.a,m),g.a.locals||{}),T=s("MVZn"),P=s.n(T),y=s("J4zp"),O=s.n(y),j=s("JoNN"),w=s("QMhA"),I=s("I6fM"),M=s("J3e4"),v=i.a.createElement(d.a,{size:20,src:j.a}),x=i.a.createElement(d.a,{size:20,src:w.a}),W=i.a.createElement(d.a,{size:20,src:I.a}),k=i.a.createElement(d.a,{size:20,src:c.a}),S=function AddToListButton(t){var e=Object(u.a)(t),s=e.buttonProps,n=e.buttonText,a=e.errorToastProps,c=e.isSelected
!function useCommonToasts(t){var e=t.errorToastProps,s=t.loginToastProps,n=t.successToastProps,o=Object(M.a)(),i=O()(o,2)[1].addToast
Object(r.useEffect)(function(){s&&i(P()({},s,{icon:W}))},[i,s]),Object(r.useEffect)(function(){n&&i(P()({},n,{icon:v}))},[i,n]),Object(r.useEffect)(function(){e&&i(P()({},e,{icon:x}))},[i,e])}({errorToastProps:a,loginToastProps:e.loginToastProps,successToastProps:e.successToastProps})
var d=Object(l.a)(h,t.classes),f=c?d.root_selected:d.root
return i.a.createElement("button",o()({className:f},s),t.icon," ",n)},A=S
S.defaultProps={icon:k},S.propTypes={afterAdd:a.func,beforeAdd:a.func,classes:Object(a.shape)({root:a.string,root_selected:a.string}),icon:a.element}}}])
