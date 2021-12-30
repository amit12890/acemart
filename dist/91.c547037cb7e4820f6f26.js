/*!
 * @version a30a091-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{Oaag:function(n,t,r){(t=n.exports=r("JPst")(!1)).push([n.i,".buttons-root-ya1 {\n    max-width: 100%;\n}\n.buttons-root-ya1 > div {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    max-width: 100%;\n}\n.buttons-root-ya1 button[class] {\n    max-width: 100%;\n    overflow: hidden;\n    min-width: var(--buttonMinWidth);\n    --stroke: var(--theme-color-primary-alt);\n    background-color: rgb(var(--stroke));\n    color: rgb(var(--color-white));\n    border-color: rgb(var(--stroke));\n    border-radius: 0;\n    border-style: solid;\n    border-width: 2px;\n    font-size: var(--fontSize-200);\n    font-weight: var(--font-weight-bold);\n    line-height: 1.25rem;\n    max-width: 100%;\n    min-width: 10rem;\n    min-height: 2.5rem;\n    outline: none;\n    padding: 1rem;\n    text-transform: uppercase;\n    transition-duration: 256ms;\n    transition-property: background-color, border-color, color;\n    transition-timing-function: var(--venia-global-anim-standard);\n}\n.buttons-stacked-1PR {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.buttons-inline-1A0 > div {\n    margin-inline-end: 0.5rem;\n}\n\n\n.buttons-root-ya1 button[class]:hover {\n    background-color: rgb(var(--color-white));\n    color: rgb(var(--stroke));\n    border-color: rgb(var(--stroke));\n}\n\n.buttons-root-ya1 button[class]:focus {\n    box-shadow: none;\n}\n\n\n\n\n",""]),t.locals={root:"buttons-root-ya1",stacked:"buttons-stacked-1PR",inline:"buttons-inline-1A0"}},PblN:function(n,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return w})
var e=r("RIqP"),o=r.n(e),i=r("MVZn"),a=r.n(i),s=r("J4zp"),d=r.n(s),l=r("q1tI"),c=r.n(l),u=r("LboF"),g=r.n(u),f=r("Oaag"),b=r.n(f),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},m=(g()(b.a,p),b.a.locals||{}),h=r("17x9"),y=r("y1Xp")
function _createForOfIteratorHelper(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!o){if(Array.isArray(t)||(o=function _unsupportedIterableToArray(n,t){if(!n)return
if("string"==typeof n)return _arrayLikeToArray(n,t)
var r=Object.prototype.toString.call(n).slice(8,-1)
"Object"===r&&n.constructor&&(r=n.constructor.name)
if("Map"===r||"Set"===r)return Array.from(n)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(n,t)}(t))||r&&t&&"number"==typeof t.length){o&&(t=o)
var i=0,a=function F(){}
return{s:a,n:function n(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function e(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,l=!0,c=!1
return{s:function s(){o=o.call(t)},n:function n(){var t=o.next()
return l=t.done,t},e:function e(n){c=!0,d=n},f:function f(){try{l||null==o.return||o.return()}finally{if(c)throw d}}}}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length)
for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r]
return e}var v=function Buttons(n){var t=Object(y.a)(m,n.classes),r=n.appearance,e=n.isSameWidth,i=n.textAlign,s=n.border,u=n.borderColor,g=n.borderWidth,f=n.borderRadius,b=n.marginTop,p=n.marginRight,h=n.marginBottom,v=n.marginLeft,w=n.paddingTop,x=n.paddingRight,k=n.paddingBottom,A=n.paddingLeft,O=n.children,T=n.cssClasses,j=void 0===T?[]:T,R=t["".concat(r)],L=Object(l.useRef)(null),S=c.a.useState(0),C=d()(S,2),I=C[0],W=C[1],B={"--buttonMinWidth":I?I+"px":null},_=a()({border:s,borderColor:u,borderWidth:g,borderRadius:f,marginTop:b,marginRight:p,marginBottom:h,marginLeft:v,paddingTop:w,paddingRight:x,paddingBottom:k,paddingLeft:A},B)
Object(l.useLayoutEffect)(function(){if(e){var n,t=0,r=_createForOfIteratorHelper(L.current.querySelectorAll("button"))
try{for(r.s();!(n=r.n()).done;){var o=n.value.offsetWidth
o>t&&(t=o)}}catch(n){r.e(n)}finally{r.f()}W(t)}},[e])
return _.justifyContent="flex-start",i&&(_.justifyContent={left:"flex-start",center:"center",right:"flex-end"}[i]||"flex-start",_.textAlign=i),c.a.createElement("div",{ref:L,style:_,className:[t.root,R].concat(o()(j)).join(" ")},O)}
v.propTypes={appearance:Object(h.oneOf)(["inline","stacked"]),classes:Object(h.shape)({root:h.string,stacked:h.string,inline:h.string}),isSameWidth:h.bool,textAlign:h.string,border:h.string,borderColor:h.string,borderWidth:h.string,borderRadius:h.string,marginTop:h.string,marginRight:h.string,marginBottom:h.string,marginLeft:h.string,paddingTop:h.string,paddingRight:h.string,paddingBottom:h.string,paddingLeft:h.string,cssClasses:Object(h.arrayOf)(h.string)}
var w=v}}])
