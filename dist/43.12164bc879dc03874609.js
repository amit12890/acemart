/*!
 * @version db4e724-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"5Shc":function(e,t,s){"use strict"
s.d(t,"a",function(){return u})
var o,n,r=s("VkAN"),i=s.n(r),a=s("VX74"),c=Object(a.gql)(o||(o=i()(["\n    mutation AddProductToWishlistFromGallery(\n        $wishlistId: ID!\n        $itemOptions: WishlistItemInput!\n    ) {\n        addProductsToWishlist(\n            wishlistId: $wishlistId\n            wishlistItems: [$itemOptions]\n        ) {\n            user_errors {\n                code\n                message\n            }\n        }\n    }\n"]))),u=Object(a.gql)(n||(n=i()(["\n    query GetProductsInWishlistsForGallery {\n        customerWishlistProducts @client\n    }\n"])))
t.b={addProductToWishlistMutation:c,getProductsInWishlistsQuery:u}},W3X9:function(e,t,s){"use strict"
var o=s("pVnL"),n=s.n(o),r=s("q1tI"),i=s.n(r),a=s("17x9"),c=s("dN85"),u=s("o0o1"),l=s.n(u),d=s("RIqP"),f=s.n(d),p=s("yXPU"),b=s.n(p),g=s("J4zp"),m=s.n(g),h=s("dDsW"),T=s("VX74"),P=s("FITH"),y=s("y1Xp"),O=s("5Shc"),w=s("oTwF"),j=s("LboF"),I=s.n(j),v=s("oNBn"),M=s.n(v),W={injectType:"singletonStyleTag",insert:"head",singleton:!0},x=(I()(M.a,W),M.a.locals||{}),k=s("MVZn"),B=s.n(k),A=s("JoNN"),E=s("QMhA"),F=s("I6fM"),S=s("J3e4"),X=i.a.createElement(w.a,{size:20,src:A.a}),_=i.a.createElement(w.a,{size:20,src:E.a}),L=i.a.createElement(w.a,{size:20,src:F.a}),C=i.a.createElement(w.a,{size:20,src:c.a}),N=function AddToListButton(e){var t=function useSingleWishlist(e){var t=e.afterAdd,s=e.beforeAdd,o=e.item,n=Object(y.a)(O.b,e.operations),i=Object(T.useMutation)(n.addProductToWishlistMutation),a=m()(i,2),c=a[0],u=a[1],d=u.data,p=u.error,g=u.loading,w=Object(T.useQuery)(n.getProductsInWishlistsQuery),j=w.client,I=w.data.customerWishlistProducts,v=Object(r.useMemo)(function(){return I.includes(o.sku)||g},[I,g,o.sku]),M=Object(r.useState)(0),W=m()(M,2),x=W[0],k=W[1],B=Object(h.a)().formatMessage,A=Object(P.b)(),E=m()(A,1)[0].isSignedIn,F=Object(r.useCallback)(b()(l.a.mark(function _callee(){return l.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=4
break}k(function(e){return++e}),e.next=17
break
case 4:if(e.prev=4,!s){e.next=8
break}return e.next=8,s()
case 8:return e.next=10,c({variables:{wishlistId:"0",itemOptions:o}})
case 10:j.writeQuery({query:n.getProductsInWishlistsQuery,data:{customerWishlistProducts:[].concat(f()(I),[o.sku])}}),t&&t(),e.next=17
break
case 14:e.prev=14,e.t0=e.catch(4)
case 17:case"end":return e.stop()}},_callee,null,[[4,14]])})),[c,t,s,j,I,E,o,n.getProductsInWishlistsQuery]),S=Object(r.useMemo)(function(){return x?{type:"info",message:B({id:"wishlist.galleryButton.loginMessage",defaultMessage:"Please sign-in to your Account to save items for later."}),timeout:5e3}:null},[B,x]),X=Object(r.useMemo)(function(){return d?{type:"success",message:B({id:"wishlist.galleryButton.successMessageGeneral",defaultMessage:"Item successfully added to your favorites list."}),timeout:5e3}:null},[d,B]),_=Object(r.useMemo)(function(){return p?{type:"error",message:B({id:"wishlist.galleryButton.addError",defaultMessage:"Something went wrong adding the product to your wishlist."}),timeout:5e3}:null},[p,B])
return{buttonProps:Object(r.useMemo)(function(){return{"aria-label":B({id:"wishlistButton.addText",defaultMessage:"Add to Favorites"}),disabled:v,onClick:F,type:"button"}},[B,F,v]),buttonText:e.buttonText&&e.buttonText(v),customerWishlistProducts:I,errorToastProps:_,handleClick:F,isSelected:v,loginToastProps:S,successToastProps:X}}(e),s=t.buttonProps,o=t.buttonText,a=t.errorToastProps,c=t.isSelected
!function useCommonToasts(e){var t=e.errorToastProps,s=e.loginToastProps,o=e.successToastProps,n=Object(S.a)(),i=m()(n,2)[1].addToast
Object(r.useEffect)(function(){s&&i(B()({},s,{icon:L}))},[i,s]),Object(r.useEffect)(function(){o&&i(B()({},o,{icon:X}))},[i,o]),Object(r.useEffect)(function(){t&&i(B()({},t,{icon:_}))},[i,t])}({errorToastProps:a,loginToastProps:t.loginToastProps,successToastProps:t.successToastProps})
var u=Object(y.a)(x,e.classes),d=c?u.root_selected:u.root
return i.a.createElement("button",n()({className:d},s),e.icon," ",o)}
t.a=N
N.defaultProps={icon:C},N.propTypes={afterAdd:a.func,beforeAdd:a.func,classes:Object(a.shape)({root:a.string,root_selected:a.string}),icon:a.element}},oNBn:function(e,t,s){(t=e.exports=s("JPst")(!1)).push([e.i,".addToListButton-root-3XF {\n    align-content: center;\n    column-gap: 0.5rem;\n    display: inline-flex;\n    margin-left: -0.5rem;\n    padding: 0 0.5rem;\n    text-decoration: underline;\n}\n\n.addToListButton-root_selected-cGu {\n    --selectedColor: rgb(var(--venia-global-color-red-400));\n    --fill: var(--selectedColor);\n    --stroke: var(--selectedColor);\n\n    text-decoration: none;\n}\n",""]),t.locals={root:"addToListButton-root-3XF",root_selected:"addToListButton-root_selected-cGu addToListButton-root-3XF"}},ogKZ:function(e,t,s){"use strict"
s.r(t)
var o=s("W3X9")
s.d(t,"default",function(){return o.a})}}])
