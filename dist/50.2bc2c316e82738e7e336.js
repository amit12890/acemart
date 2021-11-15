/*!
 * @version 13382c6-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"0990":function(e,t,n){"use strict"
n.d(t,"a",function(){return d})
var r=n("o0o1"),a=n.n(r),o=n("yXPU"),i=n.n(o),c=n("J4zp"),u=n.n(c),l=n("q1tI"),m=n("VX74"),s=n("TBoq"),d=function useCompareList(e){var t=Object(m.useMutation)(s.a),n=u()(t,2),r=n[0],o=n[1],c=o.error,d=o.loading,p=Object(l.useCallback)(i()(a.a.mark(function _callee(){var e,t=arguments
return a.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:[],n.next=3,r({variables:{input:{products:e}}})
case 3:n.sent
case 5:case"end":return n.stop()}},_callee)})),[r]),v=Object(m.useMutation)(s.c),b=u()(v,2),f=b[0],L=b[1],h=L.error,C=L.loading
return{addProductToCompareList:p,addProductToCompareListError:c,addProductToCompareListLoading:d,removeProductFromCompareList:Object(l.useCallback)(function(){var e=i()(a.a.mark(function _callee2(e,t){return a.a.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f({variables:{input:{products:e,uid:t}}})
case 2:n.sent
case 4:case"end":return n.stop()}},_callee2)}))
return function(t,n){return e.apply(this,arguments)}}(),[f]),removeProductFromCompareListError:h,removeProductFromCompareListLoading:C}}},JnYN:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".compareListPage-root-wXl {\n    margin: 100px auto;\n}",""]),t.locals={root:"compareListPage-root-wXl"}},O02Y:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return C})
var r=n("q1tI"),a=n.n(r),o=n("VX74"),i=n("7EGn"),c=n("DUu4"),u=n("ZHs2"),l=n("y1Xp"),m=n("LboF"),s=n.n(m),d=n("JnYN"),p=n.n(d),v={injectType:"singletonStyleTag",insert:"head",singleton:!0},b=(s()(p.a,v),p.a.locals||{}),f=n("TBoq"),L=n("9MMI"),h=n("Y9Aa"),C=function CompareListPage(){var e=Object(l.a)(b),t=Object(o.useQuery)(f.b,{fetchPolicy:"network-only"}),n=t.loading,r=(t.error,t.data)
if(n)return c.a
var u=!!Object(i.a)(r,"customer.compare_list.item_count",0),m=Object(i.a)(r,"customer.compare_list.uid"),s=Object(i.a)(r,"customer.compare_list.items",[]),d=[{hideName:!0,name:"Header Block",renderer:g},{name:"Description",path:"description.html",renderer:E},{name:"Unit Of Measure",path:"uom"},{name:"SKU",path:"sku"},{name:"Availability",path:"availability"}]
return a.a.createElement("div",{className:e.root},a.a.createElement("h1",null,"This is Compare List Page"),u?a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement(L.a,null,"Print This page")),s.map(function(e){return a.a.createElement("th",{key:e.uid},a.a.createElement(h.a,{listId:m,itemId:e.product.id,Child:function Child(){return a.a.createElement(L.a,null,"Remove")},Loader:function Loader(){return a.a.createElement("div",null,"Loading...")}}))})),d.map(function(e){return a.a.createElement("tr",{key:e.path},a.a.createElement("td",null,!e.hideName&&e.name),s.map(function(t){var n=t.product
return a.a.createElement("td",{key:t.uid},e.renderer?e.renderer(n):a.a.createElement("div",null,Object(i.a)(n,e.path,"")))}))}))):a.a.createElement("div",null,"No Items here To compare"))},g=function itemHeaderBlock(e){return a.a.createElement("div",null,a.a.createElement("img",{src:Object(i.a)(e,"image.url",""),style:{maxWidth:"200px"}}),a.a.createElement("div",null,e.name),a.a.createElement("div",null,e.price))},E=function itemDescriptionBlock(e){return a.a.createElement(u.a,{html:Object(i.a)(e,"description.html","")})}},TBoq:function(e,t,n){"use strict"
n.d(t,"b",function(){return s}),n.d(t,"a",function(){return d}),n.d(t,"c",function(){return p})
var r,a,o,i,c=n("VkAN"),u=n.n(c),l=n("VX74"),m=Object(l.gql)(r||(r=u()(["\n    fragment UserCompareListFragment on CompareList {\n        uid item_count\n        items {\n            uid\n            product {\n                id sku\n                name uom availability brand\n                description { html } short_description { html }\n                image { url label }\n            }\n        }\n    }\n"]))),s=Object(l.gql)(a||(a=u()(["\n    query customer {\n        customer {\n            id email\n            compare_list {\n                uid\n                ...UserCompareListFragment\n            }\n        }\n    }\n    ","\n"])),m),d=Object(l.gql)(o||(o=u()(["\n    mutation createCompareList(\n        $input: CreateCompareListInput\n    ) {\n        createCompareList(input: $input) {\n            uid\n            ...UserCompareListFragment\n        }\n    }\n    ","\n"])),m),p=Object(l.gql)(i||(i=u()(["\n    mutation removeProductsFromCompareList(\n        $input: RemoveProductsFromCompareListInput\n    ) {\n        removeProductsFromCompareList(input: $input) {\n            uid\n            ...UserCompareListFragment\n        }\n    }\n    ","\n"])),m)},Y9Aa:function(e,t,n){"use strict"
var r=n("o0o1"),a=n.n(r),o=n("yXPU"),i=n.n(o),c=n("q1tI"),u=n.n(c),l=n("0990")
t.a=function RemoveItemFromCompareList(e){var t=e.itemId,n=e.listId,r=e.Child,o=e.Loader,m=e.disabled,s=void 0!==m&&m,d=Object(l.a)(),p=d.removeProductFromCompareList,v=d.removeProductFromCompareListLoading,b=(d.removeProductFromCompareListError,Object(c.useCallback)(i()(a.a.mark(function _callee(){return a.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(!v&&!s){e.next=2
break}return e.abrupt("return")
case 2:return e.next=4,p([t],n)
case 4:case"end":return e.stop()}},_callee)})),[p,v,t,n]))
return u.a.createElement("div",{onClick:b},v?u.a.createElement(o,null):u.a.createElement(r,null))}}}])
