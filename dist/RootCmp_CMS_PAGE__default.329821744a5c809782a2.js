/*!
 * @version f32215d-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+Dsj":function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".image-root-3xt {\n    /*\n     * For customization, we provide an empty root.\n     * These styles will be applied to the image container.\n     */\n}\n\n.image-container-t_c {\n    position: relative;\n}\n\n.image-image-Q9a {\n    /*\n     * For customization, we provide an empty image class. \n     * These styles will be applied directly to the image itself.\n     */\n}\n\n.image-loaded-tFW {\n    position: absolute;\n    top: 0;\n    left: 0;\n    visibility: visible;\n}\n\n.image-notLoaded-gw4 {\n    visibility: hidden;\n}\n\n.image-placeholder-58e {\n    background-color: rgb(var(--venia-global-color-gray));\n    position: relative;\n    top: 0;\n    left: 0;\n}\n\n.image-placeholder_layoutOnly-1mt {\n    background-color: unset;\n}\n",""]),t.locals={root:"image-root-3xt",container:"image-container-t_c",image:"image-image-Q9a",loaded:"image-loaded-tFW",notLoaded:"image-notLoaded-gw4 image-loaded-tFW",placeholder:"image-placeholder-58e",placeholder_layoutOnly:"image-placeholder_layoutOnly-1mt image-placeholder-58e"}},"3nHv":function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".categoryTile-root-29o {\n    display: block;\n    line-height: 1rem;\n    text-align: center;\n    width: 6rem;\n}\n\n.categoryTile-imageContainer-3pz {\n    margin: 0 0.5rem 1rem 0.5rem;\n}\n\n.categoryTile-image-1k7 {\n    border-radius: 50%;\n    box-shadow: 0 0 0 1px rgb(var(--venia-global-color-border));\n    display: block;\n    height: 5rem;\n    object-fit: cover;\n    object-position: center;\n}\n\n.categoryTile-image_empty-224 {\n}\n\n.categoryTile-name-3et {\n    display: block;\n}\n",""]),t.locals={root:"categoryTile-root-29o",imageContainer:"categoryTile-imageContainer-3pz",image:"categoryTile-image-1k7",image_empty:"categoryTile-image_empty-224 categoryTile-image-1k7",name:"categoryTile-name-3et"}},DhFG:function(e,t,n){"use strict"
var a=n("pVnL"),r=n.n(a),i=n("QILm"),o=n.n(i),s=n("q1tI"),c=n.n(s),l=n("17x9"),d=n("KIZX"),g=n("Rozh"),m=n("dqi2"),u=["alt","classes","displayPlaceholder","height","imageHasError","imageIsLoaded","src","width"],h=function PlaceholderImage(e){var t=e.alt,n=e.classes,a=e.displayPlaceholder,i=e.height,s=e.imageHasError,l=e.imageIsLoaded,d=e.src,h=e.width,p=o()(e,u),y=Object(g.a)({displayPlaceholder:a,imageHasError:s,imageIsLoaded:l}).shouldRenderPlaceholder?n.placeholder:n.placeholder_layoutOnly,f="".concat(n.image," ").concat(y)
return c.a.createElement(m.a,r()({loading:"eager",height:i,width:h},p,{alt:t,className:f,src:d}))}
h.propTypes={alt:l.string.isRequired,classes:Object(l.shape)({image:l.string,placeholder:l.string,placeholder_layoutOnly:l.string}).isRequired,displayPlaceholder:l.bool,height:Object(l.oneOfType)([l.number,l.string]),imageHasError:l.bool,imageIsLoaded:l.bool,src:l.string,width:Object(l.oneOfType)([l.number,l.string])},h.defaultProps={src:d.a},t.a=h},OlhY:function(e,t,n){"use strict"
var a=n("pVnL"),r=n.n(a),i=n("QILm"),o=n.n(i),s=n("q1tI"),c=n.n(s),l=n("17x9"),d=n.n(l),g=n("6JmB"),m=n("EpH3"),u=n("DhFG"),h=n("IT16"),p=["alt","className","handleError","handleLoad","height","resource","type","width","widths","ratio"],y=function ResourceImage(e){var t=e.alt,n=e.className,a=e.handleError,i=e.handleLoad,s=e.height,l=e.resource,d=e.type,g=e.width,u=e.widths,y=e.ratio,f=o()(e,p),b=Object(h.a)({generateSrcset:m.b,generateUrl:m.c,height:s,resource:l,type:d,width:g,widths:u,ratio:y}),w=b.sizes,O=b.src,j=b.srcSet
return c.a.createElement("img",r()({loading:"lazy"},f,{alt:t,className:n,onError:a,onLoad:i,sizes:w,src:O,srcSet:j,width:g}))}
y.propTypes={alt:l.string.isRequired,className:l.string,handleError:l.func,handleLoad:l.func,resource:l.string.isRequired,height:Object(l.oneOfType)([l.number,l.string]),type:l.string,width:Object(l.oneOfType)([l.number,l.string]),widths:Object(l.instanceOf)(Map)},y.defaultProps={type:"image-product"}
var f=y,b=n("dqi2"),w=n("y1Xp"),O=n("LboF"),j=n.n(O),v=n("+Dsj"),E=n.n(v),L={injectType:"singletonStyleTag",insert:"head",singleton:!0},_=(j()(E.a,L),E.a.locals||{}),P=["alt","classes","displayPlaceholder","height","onError","onLoad","placeholder","resource","src","type","width","widths","ratio"],T=function Image(e){var t=e.alt,n=e.classes,a=e.displayPlaceholder,i=e.height,s=e.onError,l=e.onLoad,d=e.placeholder,m=e.resource,h=e.src,p=e.type,y=e.width,O=e.widths,j=e.ratio,v=o()(e,P),E=Object(g.b)({onError:s,onLoad:l,width:y,widths:O,height:i,ratio:j}),L=E.handleError,T=E.handleImageLoad,I=E.hasError,C=E.isLoaded,N=E.resourceWidth,k=E.resourceHeight,q=Object(w.a)(_,n),x="".concat(q.root," ").concat(q.container),M=C?q.loaded:q.notLoaded,S="".concat(q.image," ").concat(M),z=h?c.a.createElement(b.a,r()({alt:t,className:S,handleError:L,handleLoad:T,height:k,src:h,width:y},v)):c.a.createElement(f,r()({alt:t,className:S,handleError:L,handleLoad:T,height:k,resource:m,type:p,width:N,widths:O,ratio:j},v))
return c.a.createElement("div",{className:x},c.a.createElement(u.a,r()({alt:t,classes:q,displayPlaceholder:a,height:i,imageHasError:I,imageIsLoaded:C,src:d,width:N},v)),z)},I=function conditionallyRequiredString(e,t,n){return e.src||e.resource?d.a.checkPropTypes({resource:l.string,src:l.string},e,t,n):new Error("Missing both 'src' and 'resource' props in ".concat(n,". ").concat(n," needs at least one of these to be provided."))}
T.propTypes={alt:l.string.isRequired,classes:Object(l.shape)({container:l.string,loaded:l.string,notLoaded:l.string,root:l.string}),displayPlaceholder:l.bool,height:Object(l.oneOfType)([l.number,l.string]),onError:l.func,onLoad:l.func,placeholder:l.string,resource:I,src:I,type:l.string,width:Object(l.oneOfType)([l.number,l.string]),widths:Object(l.instanceOf)(Map),ratio:l.number},T.defaultProps={displayPlaceholder:!0,ratio:m.a}
t.a=T},dqi2:function(e,t,n){"use strict"
var a=n("pVnL"),r=n.n(a),i=n("QILm"),o=n.n(i),s=n("q1tI"),c=n.n(s),l=n("17x9"),d=["alt","className","handleError","handleLoad","height","src","width"],g=function SimpleImage(e){var t=e.alt,n=e.className,a=e.handleError,i=e.handleLoad,s=e.height,l=e.src,g=e.width,m=o()(e,d)
return c.a.createElement("img",r()({loading:"lazy"},m,{alt:t,className:n,height:s,onError:a,onLoad:i,src:l,width:g}))}
g.propTypes={alt:l.string.isRequired,className:l.string,handleError:l.func,handleLoad:l.func,height:Object(l.oneOfType)([l.number,l.string]),src:l.string.isRequired,width:Object(l.oneOfType)([l.number,l.string])},t.a=g},ePvo:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return $})
var a,r,i=n("q1tI"),o=n.n(i),s=n("/MKj"),c=n("17x9"),l=n("DUu4"),d=n("J4zp"),g=n.n(d),m=n("VX74"),u=n("y1Xp"),h=n("OlZo"),p=n("VkAN"),y=n.n(p),f={getCMSPageQuery:Object(m.gql)(a||(a=y()(["\n    query GetCmsPage($id: Int!) {\n        cmsPage(id: $id) {\n            url_key\n            content\n            content_heading\n            title\n            page_layout\n            meta_title\n            meta_keywords\n            meta_description\n        }\n        storeConfig {\n            id\n            root_category_id\n        }\n    }\n"])))},b=n("ZHs2"),w=n("cDf5"),O=n.n(w),j=n("MVZn"),v=n.n(j),E=n("dDsW"),L={getCategoryListQuery:Object(m.gql)(r||(r=y()(["\n    query GetCategoryList($id: Int!) {\n        category(id: $id) {\n            id\n            children {\n                id\n                name\n                url_key\n                url_path\n                url_suffix\n                children_count\n                path\n                image\n                productImagePreview: products(pageSize: 1) {\n                    items {\n                        id\n                        small_image {\n                            url\n                        }\n                    }\n                }\n            }\n        }\n    }\n"])))},_=n("ZaxC"),P=n("LboF"),T=n.n(P),I=n("wY90"),C=n.n(I),N={injectType:"singletonStyleTag",insert:"head",singleton:!0},k=(T()(C.a,N),C.a.locals||{}),q=n("55Ip"),x=n("OlhY"),M=n("3nHv"),S=n.n(M),z={injectType:"singletonStyleTag",insert:"head",singleton:!0},R=(T()(S.a,z),S.a.locals||{}),H=function CategoryTile(e){var t=function useCategoryTile(e){var t=e.item,n=t.image,a=t.productImagePreview
return{image:Object(i.useMemo)(function(){var e=a.items[0]
return n?{url:n,type:"image-category",width:480}:e?{url:e.small_image,type:"image-product",width:480}:{url:"",type:"image-category",width:480}},[n,a]),item:Object(i.useMemo)(function(){return{name:t.name,url:"/".concat(t.url_key).concat(t.url_suffix||"")}},[t])}}({item:e.item}),n=t.image,a=t.item,r=Object(u.a)(R,e.classes),s=Object(i.useMemo)(function(){return n.url?o.a.createElement(x.a,{alt:a.name,classes:{image:r.image,root:r.imageContainer},resource:n.url,type:n.type,width:80}):o.a.createElement("span",{className:r.image_empty})},[r.image,r.image_empty,r.imageContainer,n.type,n.url,a.name])
return o.a.createElement(q.b,{className:r.root,to:a.url},s,o.a.createElement("span",{className:r.name},a.name))}
H.propTypes={item:Object(c.shape)({image:c.string,name:c.string.isRequired,productImagePreview:Object(c.shape)({items:Object(c.arrayOf)(Object(c.shape)({small_image:c.string}))}),url_key:c.string.isRequired}).isRequired,classes:Object(c.shape)({item:c.string,image:c.string,imageContainer:c.string,name:c.string})}
var F=H,J=function mapCategory(e){var t=e.productImagePreview.items
return v()({},e,{productImagePreview:{items:t.map(function(e){var t=e.small_image
return v()({},e,{small_image:"object"===O()(t)?t.url:t})})}})},Q=function CategoryList(e){var t,n=e.id,a=e.title,r=function useCategoryList(e){var t=e.id,n=Object(u.a)(L,e.operations).getCategoryListQuery,a=Object(m.useQuery)(n,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first",skip:!t,variables:{id:t}}),r=a.loading,i=a.error,o=a.data
return{childCategories:o&&o.category&&o.category.children||null,error:i,loading:r}}({id:n}),i=r.childCategories,s=r.error,c=r.loading,d=Object(E.a)().formatMessage,g=Object(u.a)(k,e.classes),h=a?o.a.createElement("div",{className:g.header},o.a.createElement("h2",{className:g.title},o.a.createElement("span",null,a))):null
if(i){if(!i.length)return o.a.createElement(_.a,{message:d({id:"categoryList.noResults",defaultMessage:"No child categories found."})})
t=o.a.createElement("div",{className:g.content},i.map(function(e){return o.a.createElement(F,{item:J(e),key:e.url_key})}))}else{if(s)return o.a.createElement(_.a,null)
c&&(t=l.a)}return o.a.createElement("div",{className:g.root},h,t)}
Q.propTypes={id:c.number.isRequired,title:c.string,classes:Object(c.shape)({root:c.string,header:c.string,title:c.string,content:c.string})}
var D=Q,G=n("UPvi"),W=n("t/Kp"),Z=n.n(W),V={injectType:"singletonStyleTag",insert:"head",singleton:!0},Y=(T()(Z.a,V),Z.a.locals||{}),K=n("sPSH"),X=function CMSPage(e){var t=e.id,n=Object(s.c)(),a=function useCmsPage(e){var t=e.id,n=Object(u.a)(f,e.operations).getCMSPageQuery,a=Object(m.useQuery)(n,{variables:{id:Number(t)},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),r=a.loading,o=a.error,s=a.data,c=Object(h.b)(),l=g()(c,2)[1].actions.setPageLoading
Object(i.useEffect)(function(){return function(){l(!1)}},[l]),Object(i.useEffect)(function(){l(r)},[r,l])
var d=r&&!s,p=s?s.cmsPage:null,y=s?s.storeConfig.root_category_id:null,b=Object(i.useMemo)(function(){return p&&p.content&&p.content.length>0&&!p.content.includes("CMS homepage content goes here.")},[p])
return{cmsPage:p,error:o,hasContent:b,rootCategoryId:y,shouldShowLoadingIndicator:d}}({id:Number(t)}),r=a.cmsPage,c=a.hasContent,d=a.rootCategoryId,p=a.shouldShowLoadingIndicator,y=Object(E.a)().formatMessage,w=Object(u.a)(Y,e.classes)
if(Object(i.useEffect)(function(){return n(Object(K.e)({isCMS:!0})),function(){n(Object(K.e)({isCMS:!1}))}},[]),p)return l.a
if(c){var O=r.content_heading,j=r.title,v=r.meta_title,L=r.meta_description,_=r.content
if("store-locator"===r.url_key)return o.a.createElement("h1",null,"This will be custom component")
var P=""!==O?o.a.createElement("h1",{className:w.heading},O):null,T=v||j
return o.a.createElement(i.Fragment,null,o.a.createElement(G.b,null,T),o.a.createElement(G.a,{name:"title",content:T}),o.a.createElement(G.a,{name:"description",content:L}),P,o.a.createElement("div",{className:w.cmswrapper},o.a.createElement(b.a,{classes:{root:w.test},html:_})))}return o.a.createElement(D,{title:y({id:"cms.shopByCategory",defaultMessage:"Shop by category"}),id:d})}
X.propTypes={id:c.number,classes:Object(c.shape)({heading:c.string})}
var $=X},"t/Kp":function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".cms-root-27r {\n    padding: 1rem;\n}\n\n.cms-title-HIM {\n    font-size: 1.5rem;\n    font-weight: 400;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n}\n\n.cms-heading-2uj {\n    line-height: 1.25em;\n}\n\n.cms-layout_default-3GJ {\n    padding: 0;\n}\n\n.cms-layout_1column-3ZR {\n}\n\n.cms-cmswrapper-N_d {\n    font-size: var(--fontSize-200);\n}\n\n.cms-test-3cd {\n    \n}\n\nul>li,\nol>li {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    text-transform: none;\n    font-weight: normal;\n}\n\nh1 {\n    font-size: 3.3em; \n    margin: 0 0 4rem 0;\n}\n\nh2 {\n    font-weight: bold;\n    font-size: 2.5rem; \n    /* color: rgb(var(--theme-color-primary)); */\n    text-transform: none;\n    margin: 0 0 2.5rem 0;\n}\n\nh3 {\n    font-size: 1.25rem; \n    /* color: rgb(var(--theme-color-primary)); */\n}\n\n\nh4 {\n    font-size: 1.125rem; \n    /* color: rgb(var(--theme-color-primary)); */\n}\n\n\nh5 {\n    font-size: 1rem; \n}\n\n\n\n",""]),t.locals={root:"cms-root-27r",title:"cms-title-HIM",heading:"cms-heading-2uj",layout_default:"cms-layout_default-3GJ",layout_1column:"cms-layout_1column-3ZR cms-layout_default-3GJ",cmswrapper:"cms-cmswrapper-N_d",test:"cms-test-3cd"}},wY90:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".categoryList-root-1FL {\n    padding: 1rem;\n}\n\n.categoryList-header-2W8 {\n    margin-bottom: 2rem;\n    text-align: center;\n}\n\n.categoryList-title-H-g {\n    text-transform: uppercase;\n}\n\n.categoryList-content-PaY {\n    display: grid;\n    grid-gap: 3rem 1rem;\n    grid-template-columns: repeat(auto-fit, 6rem);\n    justify-content: center;\n}\n",""]),t.locals={root:"categoryList-root-1FL",header:"categoryList-header-2W8",title:"categoryList-title-H-g",content:"categoryList-content-PaY"}}}])
