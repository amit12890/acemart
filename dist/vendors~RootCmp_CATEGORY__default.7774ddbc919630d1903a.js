/*!
 * @version 3075dbc
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"31g3":function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,":root {\n    --category-sidebar-width: 325px;\n}\n\n.category-root-1dB {\n    padding: 1rem;\n}\n\n.category-title-2U5 {\n    font-size: 1.5rem;\n    font-weight: 400;\n    padding: 0 0.5rem;\n}\n\n.category-pagination-9c0 {\n    position: relative;\n    bottom: 0;\n}\n\n.category-placeholder-2xS {\n    height: 100vh;\n}\n\n.category-categoryTitle-1Ut {\n    color: rgb(var(--venia-global-color-text));\n    padding-bottom: 1rem;\n    font-size: 1.375rem;\n    font-weight: 300;\n    line-height: 1.375rem;\n    text-align: center;\n}\n\n.category-heading-Lm_ {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding-bottom: 0.5rem;\n}\n\n.category-categoryInfo--Sc {\n    line-height: var(--venia-global-typography-heading-lineHeight);\n    margin: 1rem 0;\n    max-width: 75vw;\n}\n\n.category-headerButtons-2x_ {\n    display: flex;\n    flex-basis: 100%;\n    justify-content: center;\n    padding-bottom: 1.5rem;\n}\n\n.category-contentWrapper-2Ol {\n    width: 100%;\n}\n\n.category-sidebar-2rP {\n    display: none;\n}\n\n@media (min-width: 1024px) {\n    .category-contentWrapper-2Ol {\n        display: flex;\n    }\n\n    .category-categoryHeader-3Br {\n        width: 100%;\n    }\n\n    .category-headerButtons-2x_ {\n        justify-content: flex-end;\n    }\n\n    .category-heading-Lm_ {\n        justify-content: space-between;\n        flex-wrap: nowrap;\n        align-items: center;\n        padding-bottom: 1.5rem;\n    }\n\n    .category-headerButtons-2x_ {\n        padding-bottom: 0;\n    }\n\n    .category-categoryInfo--Sc {\n        margin: 0;\n        flex-basis: 100%;\n    }\n\n    .category-sidebar-2rP {\n        display: flex;\n        align-self: flex-start;\n        width: var(--category-sidebar-width);\n        padding-top: 4rem;\n    }\n\n    .category-categoryContent-3K_ {\n        flex-grow: 1;\n    }\n}\n",""]),t.locals={root:"category-root-1dB",title:"category-title-2U5",pagination:"category-pagination-9c0",placeholder:"category-placeholder-2xS",categoryTitle:"category-categoryTitle-1Ut",heading:"category-heading-Lm_",categoryInfo:"category-categoryInfo--Sc",headerButtons:"category-headerButtons-2x_",contentWrapper:"category-contentWrapper-2Ol",sidebar:"category-sidebar-2rP",categoryHeader:"category-categoryHeader-3Br",categoryContent:"category-categoryContent-3K_"}},"9teu":function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return pe})
var r,a,o,c,i,s,l=n("q1tI"),g=n.n(l),u=n("17x9"),d=n("lSNA"),m=n.n(d),y=n("J4zp"),p=n.n(y),b=n("Ty5D"),f=n("VX74"),h=n("y1Xp"),P=n("OlZo"),v=n("Cszt"),E=n("PKba"),j=n("Unmo"),_=n("+wQL"),x=n("VkAN"),C=n.n(x),O=Object(f.gql)(r||(r=C()(["\n    fragment CategoryFragment on CategoryTree {\n        id\n        meta_title\n        meta_keywords\n        meta_description\n    }\n"]))),F=Object(f.gql)(a||(a=C()(["\n    fragment ProductsFragment on Products {\n        items {\n            id\n            name\n            price {\n                regularPrice {\n                    amount {\n                        currency\n                        value\n                    }\n                }\n            }\n            sku\n            small_image {\n                url\n            }\n            url_key\n            url_suffix\n        }\n        page_info {\n            total_pages\n        }\n        total_count\n    }\n"]))),I={getCategoryQuery:Object(f.gql)(o||(o=C()(["\n    query GetCategories(\n        $id: Int!\n        $pageSize: Int!\n        $currentPage: Int!\n        $filters: ProductAttributeFilterInput!\n        $sort: ProductAttributeSortInput\n    ) {\n        category(id: $id) {\n            id\n            ...CategoryFragment\n        }\n        products(\n            pageSize: $pageSize\n            currentPage: $currentPage\n            filter: $filters\n            sort: $sort\n        ) {\n            ...ProductsFragment\n        }\n    }\n    ","\n    ","\n"])),O,F),getFilterInputsQuery:Object(f.gql)(c||(c=C()(['\n    query GetFilterInputsForCategory {\n        __type(name: "ProductAttributeFilterInput") {\n            inputFields {\n                name\n                type {\n                    name\n                }\n            }\n        }\n    }\n'])))},S=n("kriW"),w=Object(f.gql)(i||(i=C()(["\n    query getProductFiltersByCategory(\n        $categoryIdFilter: FilterEqualTypeInput!\n    ) {\n        products(filter: { category_id: $categoryIdFilter }) {\n            aggregations {\n                label\n                count\n                attribute_code\n                options {\n                    label\n                    value\n                }\n            }\n        }\n    }\n"]))),N={getCategoryContentQuery:Object(f.gql)(s||(s=C()(["\n    query getCategoryData($id: Int!) {\n        category(id: $id) {\n            id\n            name\n            description\n        }\n    }\n"]))),getProductFiltersByCategoryQuery:w},z=n("Rpel"),k=n("vh/y"),B=n("UPvi"),T=n("C0us"),q=n("tuiD"),D=n("STDB"),$=n("LboF"),Q=n.n($),M=n("31g3"),L=n.n(M),W={injectType:"singletonStyleTag",insert:"head",singleton:!0},A=(Q()(L.a,W),L.a.locals||{}),U=n("dDsW"),J=n("55Ip"),R=n("UqBt"),H=function isNonDefaultCategory(e){return Boolean(e.parentId)},V=n("STEg"),G=n("OlhY"),X=n("u2JS"),K=n.n(X),Y=n("zhPx"),Z=n.n(Y),ee={injectType:"singletonStyleTag",insert:"head",singleton:!0},te=(Q()(Z.a,ee),Z.a.locals||{}),ne=function NoProductsFound(e){var t=e.categoryId,n=Object(h.a)(te,e.classes),r=Object(U.a)().formatMessage,a=function useNoProductsFound(e){var t=e.categoryId,n=Object(R.b)(),r=p()(n,1)[0].categories
return{recommendedCategories:Object(l.useMemo)(function(){var e,n=Object.values(r).filter(H).filter(function isNotSameCategory(e){return e.id!==t}),a=n.length
if(a<=3)e=n
else{var o=a-3+1,c=Math.floor(Math.random()*o),i=c+3
e=n.slice(c,i)}return e},[t,r])}}({categoryId:t}).recommendedCategories,o=Object(l.useMemo)(function(){return a.map(function(e){var t=Object(V.a)("/".concat(e.url_path).concat(e.url_suffix))
return g.a.createElement("li",{key:e.id,className:n.listItem},g.a.createElement(J.b,{to:t},e.name))})},[n,a]),c=r({id:"noProductsFound.noProductsFound",defaultMessage:"Sorry! We couldn't find any products."})
return g.a.createElement("div",{className:n.root},g.a.createElement(G.a,{alt:c,classes:{image:n.image,root:n.imageContainer},src:K.a}),g.a.createElement("h2",{className:n.title},c),g.a.createElement("div",{className:n.categories},g.a.createElement("p",null,g.a.createElement(S.a,{id:"noProductsFound.tryOneOfTheseCategories",defaultMessage:"Try one of these categories"})),g.a.createElement("ul",{className:n.list},o)))},re=ne
ne.propTypes={categoryId:u.number,classes:Object(u.shape)({root:u.string,title:u.string,list:u.string,categories:u.string,listItem:u.string,image:u.string,imageContainer:u.string})}
var ae,oe=n("DUu4"),ce=n("Y5d+"),ie=n("pezu"),se=g.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(11)]).then(n.bind(null,"dzHx"))}),le=g.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(14)]).then(n.bind(null,"SAkj"))}),ge=function CategoryContent(e){var t=e.categoryId,n=e.data,r=e.isLoading,a=e.pageControl,o=e.sortProps,c=e.pageSize,i=p()(o,1)[0],s=function useCategoryContent(e){var t=e.categoryId,n=e.data,r=e.pageSize,a=void 0===r?6:r,o=Object(h.a)(N,e.operations),c=o.getCategoryContentQuery,i=o.getProductFiltersByCategoryQuery,s=Array.from({length:a}).fill(null),g=Object(f.useLazyQuery)(i,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),u=p()(g,2),d=u[0],m=u[1].data,y=Object(f.useQuery)(c,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first",skip:!t,variables:{id:t}}).data
Object(l.useEffect)(function(){t&&d({variables:{categoryIdFilter:{eq:t}}})},[t,d])
var b=m?m.products.aggregations:null,P=n?n.products.items:s,v=n?n.products.page_info.total_pages:null,E=n?n.products.total_count:null
return{categoryName:y?y.category.name:null,categoryDescription:y?y.category.description:null,filters:b,items:P,totalCount:E,totalPagesFromData:v}}({categoryId:t,data:n,pageSize:c}),u=s.categoryName,d=s.categoryDescription,m=s.filters,y=s.items,b=s.totalCount,P=s.totalPagesFromData,v=Object(h.a)(A,e.classes),E=m&&m.length,j=P,_=E?g.a.createElement(ie.a,{filters:m}):null,x=E?g.a.createElement(se,{filters:m}):null,C=E?g.a.createElement(le,{filters:m}):null,O=j?g.a.createElement(q.a,{sortProps:o}):null,F=j?g.a.createElement(ce.a,{currentSort:i}):null,I=b>0?g.a.createElement(S.a,{id:"categoryContent.resultCount",values:{count:b},defaultMessage:"{count} Results"}):null,w=d?g.a.createElement(D.a,{html:d}):null,$=Object(l.useMemo)(function(){return P?g.a.createElement(l.Fragment,null,g.a.createElement("section",{className:v.gallery},g.a.createElement(k.a,{items:y})),g.a.createElement("div",{className:v.pagination},g.a.createElement(T.a,{pageControl:a}))):r?oe.a:g.a.createElement(re,{categoryId:t})},[t,v.gallery,v.pagination,r,y,a,P])
return g.a.createElement(l.Fragment,null,g.a.createElement(z.a,{categoryId:t}),g.a.createElement(B.b,null,u),g.a.createElement("article",{className:v.root},g.a.createElement("div",{className:v.categoryHeader},g.a.createElement("h1",{className:v.title},g.a.createElement("div",{className:v.categoryTitle},u||"...")),w),g.a.createElement("div",{className:v.contentWrapper},g.a.createElement("div",{className:v.sidebar},g.a.createElement(l.Suspense,{fallback:null},C)),g.a.createElement("div",{className:v.categoryContent},g.a.createElement("div",{className:v.heading},g.a.createElement("div",{className:v.categoryInfo},I),g.a.createElement("div",{className:v.headerButtons},_,O),F),$,g.a.createElement(l.Suspense,{fallback:null},x)))))},ue=ge
ge.propTypes={classes:Object(u.shape)({filterContainer:u.string,sortContainer:u.string,gallery:u.string,headerButtons:u.string,filterButton:u.string,pagination:u.string,root:u.string,title:u.string}),sortProps:u.array,pageSize:u.number}
var de=Object(f.gql)(ae||(ae=C()(["\n    query getPageSize {\n        storeConfig {\n            id\n            grid_per_page\n        }\n    }\n"]))),me=n("Fk0k"),ye=function Category(e){var t=e.id,n=function useCategory(e){var t=e.id,n=e.queries.getPageSize,r=Object(h.a)(I,e.operations),a=r.getCategoryQuery,o=r.getFilterInputsQuery,c=Object(f.useQuery)(n,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}).data,i=c&&c.storeConfig.grid_per_page,s=Object(v.a)(),g=p()(s,2),u=g[0],d=g[1],y=u.currentPage,x=u.totalPages,C=d.setCurrentPage,O=d.setTotalPages,F=Object(j.a)(),S=p()(F,1)[0],w=Object(l.useRef)(S),N={currentPage:y,setPage:C,totalPages:x},z=Object(P.b)(),k=p()(z,2)[1].actions.setPageLoading,B=Object(f.useLazyQuery)(a,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),T=p()(B,2),q=T[0],D=T[1],$=D.called,Q=D.loading,M=D.error,L=D.data,W=Object(b.h)().search,A=!!L&&Q
Object(l.useEffect)(function(){k(A)},[A,k])
var U=Object(l.useRef)(W),J=Object(f.useQuery)(o,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),R=J.called,H=J.data,V=J.loading,G=Object(l.useMemo)(function(){var e=new Map
return H&&H.__type.inputFields.forEach(function(t){var n=t.name,r=t.type
e.set(n,r.name)}),e},[H])
Object(l.useEffect)(function(){if(G.size&&i){var e=Object(_.c)(W),n={}
e.forEach(function(e,t){n[t]=Object(_.b)(e,G.get(t))}),n.category_id={eq:String(t)},q({variables:{currentPage:Number(y),id:Number(t),filters:n,pageSize:Number(i),sort:m()({},S.sortAttribute,S.sortDirection)}})}},[y,S,G,t,i,q,W])
var X=L?L.products.page_info.total_pages:null
Object(l.useEffect)(function(){return O(X),function(){O(null)}},[O,X]),Object(l.useEffect)(function(){!M||Q||L||1===y||C(1)},[y,M,Q,C,L]),Object(l.useEffect)(function(){var e=new URLSearchParams(U.current),t=new URLSearchParams(W)
e.delete("page"),t.delete("page"),e.toString()===t.toString()&&w.current.sortAttribute.toString()===S.sortAttribute.toString()&&w.current.sortDirection.toString()===S.sortDirection.toString()||(C(1,!0),U.current=W,w.current=S)},[S,U,W,C])
var K=Q&&!L?null:L,Y=L&&L.category&&L.category.meta_description?L.category.meta_description:"",Z=R&&!$||Q&&!L||V
return Object(E.a)(y),{error:M,categoryData:K,loading:Z,metaDescription:Y,pageControl:N,sortProps:F,pageSize:i}}({id:t,queries:{getPageSize:de}}),r=n.error,a=n.metaDescription,o=n.loading,c=n.categoryData,i=n.pageControl,s=n.sortProps,u=n.pageSize,d=Object(h.a)(A,e.classes)
return!c&&r&&1===i.currentPage?g.a.createElement(me.a,null):g.a.createElement(l.Fragment,null,g.a.createElement(B.a,{name:"description",content:a}),g.a.createElement(ue,{categoryId:t,classes:d,data:c,isLoading:o,pageControl:i,sortProps:s,pageSize:u}))}
ye.propTypes={classes:Object(u.shape)({gallery:u.string,root:u.string,title:u.string}),id:u.number},ye.defaultProps={id:3}
var pe=ye},Rpel:function(e,t,n){"use strict"
var r,a=n("q1tI"),o=n.n(a),c=n("kriW"),i=n("17x9"),s=n("55Ip"),l=n("VX74"),g=n("y1Xp"),u=n("VkAN"),d=n.n(u),m={getBreadcrumbsQuery:Object(l.gql)(r||(r=d()(["\n    query GetBreadcrumbs($category_id: Int!) {\n        category(id: $category_id) {\n            breadcrumbs {\n                category_id\n                # We may not need level if `breadcrumbs` is sorted.\n                category_level\n                category_name\n                category_url_path\n            }\n            id\n            name\n            url_path\n            url_suffix\n        }\n    }\n"],["\n    query GetBreadcrumbs($category_id: Int!) {\n        category(id: $category_id) {\n            breadcrumbs {\n                category_id\n                # We may not need level if \\`breadcrumbs\\` is sorted.\n                category_level\n                category_name\n                category_url_path\n            }\n            id\n            name\n            url_path\n            url_suffix\n        }\n    }\n"])))},y=function sortCrumbs(e,t){return e.category_level>t.category_level},p=function getPath(e,t){return e?"/".concat(e).concat(t):"#"},b=n("STEg"),f=n("LboF"),h=n.n(f),P=n("pBWi"),v=n.n(P),E={injectType:"singletonStyleTag",insert:"head",singleton:!0},j=(h()(v.a,E),v.a.locals||{}),_=function Breadcrumbs(e){var t=Object(g.a)(j,e.classes),n=e.categoryId,r=e.currentProduct,i=function useBreadcrumbs(e){var t=e.categoryId,n=Object(g.a)(m,e.operations).getBreadcrumbsQuery,r=Object(l.useQuery)(n,{variables:{category_id:t},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),o=r.data,c=r.loading,i=r.error,s=o&&o.category.url_suffix||"",u=Object(a.useMemo)(function(){if(!c&&o){var e=o.category.breadcrumbs
return e&&e.map(function(e){return{category_level:e.category_level,text:e.category_name,path:p(e.category_url_path,s)}}).sort(y)}},[s,o,c])
return{currentCategory:o&&o.category.name||"",currentCategoryPath:o&&"".concat(o.category.url_path).concat(s)||"#",isLoading:c,hasError:!!i,normalizedData:u||[]}}({categoryId:n}),u=i.currentCategory,d=i.currentCategoryPath,f=i.hasError,h=i.isLoading,P=i.normalizedData,v=Object(a.useMemo)(function(){return P.map(function(e){var n=e.text,r=e.path
return o.a.createElement(a.Fragment,{key:n},o.a.createElement("span",{className:t.divider},"/"),o.a.createElement(s.b,{className:t.link,to:Object(b.a)(r)},n))})},[t.divider,t.link,P])
if(h||f)return o.a.createElement("div",{className:t.root})
var E=r?o.a.createElement(s.b,{className:t.link,to:Object(b.a)(d)},u):o.a.createElement("span",{className:t.currentCategory},u),_=r?o.a.createElement(a.Fragment,null,o.a.createElement("span",{className:t.divider},"/"),o.a.createElement("span",{className:t.text},r)):null
return o.a.createElement("div",{className:t.root},o.a.createElement(s.b,{className:t.link,to:"/"},o.a.createElement(c.a,{id:"global.home",defaultMessage:"Home"})),v,o.a.createElement("span",{className:t.divider},"/"),E,_)}
t.a=_
_.propTypes={categoryId:i.number.isRequired,currentProduct:i.string}},pBWi:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".breadcrumbs-root-1VT {\n    margin-left: 1rem;\n    margin-top: 1rem;\n    font-size: 0.875rem;\n\n    /* Permanent height to prevent pop-in. */\n    height: 0.875rem;\n\n    /* Show ellipses when overflowing. */\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.breadcrumbs-text-1Es {\n    padding: 0.25rem;\n}\n\n.breadcrumbs-divider-34t {\n}\n\n.breadcrumbs-link-1aE {\n    text-decoration: underline;\n}\n\n.breadcrumbs-currentCategory-3l1 {\n}\n",""]),t.locals={root:"breadcrumbs-root-1VT",text:"breadcrumbs-text-1Es",divider:"breadcrumbs-divider-34t breadcrumbs-text-1Es",link:"breadcrumbs-link-1aE breadcrumbs-text-1Es",currentCategory:"breadcrumbs-currentCategory-3l1 breadcrumbs-text-1Es"}},u2JS:function(e,t,n){e.exports=n.p+"noProductsFound-e9n.png"},zhPx:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".noProductsFound-root-3gI {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: center;\n}\n\n.noProductsFound-title-1vj {\n    font-size: 1rem;\n    font-weight: 600;\n    text-align: center;\n}\n\n.noProductsFound-categories-2Mj {\n    margin-top: 2rem;\n}\n\n.noProductsFound-list-b4o {\n    margin-top: 1rem;\n}\n\n.noProductsFound-listItem-3jz {\n    text-align: center;\n    text-decoration: underline;\n}\n\n.noProductsFound-listItem-3jz:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.noProductsFound-imageContainer-277 {\n    margin-bottom: 2rem;\n}\n\n.noProductsFound-image-3mz {\n    height: 200px;\n    width: 200px;\n    max-width: 200px;\n}\n",""]),t.locals={root:"noProductsFound-root-3gI",title:"noProductsFound-title-1vj",categories:"noProductsFound-categories-2Mj",list:"noProductsFound-list-b4o",listItem:"noProductsFound-listItem-3jz",imageContainer:"noProductsFound-imageContainer-277",image:"noProductsFound-image-3mz"}}}])
