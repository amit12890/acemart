/*!
 * @version bbf4d419-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{Oaag:function(t,n,r){(n=t.exports=r("JPst")(!1)).push([t.i,".buttons-root-ya1 {\n    max-width: 100%;\n}\n.buttons-root-ya1 > div {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    max-width: 100%;\n}\n\n.buttons-stacked-1PR {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.buttons-inline-1A0 > div {\n    margin-inline-end: 0.5rem;\n}\n\n\n.buttons-root-ya1 button[class]:hover {\n    background-color: rgb(var(--color-white));\n    color: rgb(var(--stroke));\n    border-color: rgb(var(--stroke));\n}\n\n.buttons-root-ya1 button[class]:focus {\n    box-shadow: none;\n}\n\n.buttons-root_lowPriority-3lF {\n    background-color: var(--color-white);\n}\n.buttons-root_lowPriority-3lF:hover {\n    background-color: rgb(var(--stroke));\n    color: rgb(var(--color-white));\n}\n\n\n\n",""]),n.locals={root:"buttons-root-ya1",stacked:"buttons-stacked-1PR",inline:"buttons-inline-1A0",root_lowPriority:"buttons-root_lowPriority-3lF buttons-root-ya1"}},PblN:function(t,n,r){"use strict"
r.r(n),r.d(n,"default",function(){return w})
var o=r("RIqP"),e=r.n(o),i=r("MVZn"),a=r.n(i),s=r("J4zp"),l=r.n(s),d=r("q1tI"),c=r.n(d),u=r("LboF"),g=r.n(u),f=r("Oaag"),b=r.n(f),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},y=(g()(b.a,p),b.a.locals||{}),m=r("17x9"),h=r("y1Xp")
function _createForOfIteratorHelper(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!o){if(Array.isArray(t)||(o=function _unsupportedIterableToArray(t,n){if(!t)return
if("string"==typeof t)return _arrayLikeToArray(t,n)
var r=Object.prototype.toString.call(t).slice(8,-1)
"Object"===r&&t.constructor&&(r=t.constructor.name)
if("Map"===r||"Set"===r)return Array.from(t)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(t,n)}(t))||r&&t&&"number"==typeof t.length){o&&(t=o)
var i=0,a=function F(){}
return{s:a,n:function n(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function e(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,d=!0,c=!1
return{s:function s(){o=o.call(t)},n:function n(){var t=o.next()
return d=t.done,t},e:function e(t){c=!0,l=t},f:function f(){try{d||null==o.return||o.return()}finally{if(c)throw l}}}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length)
for(var r=0,o=new Array(n);r<n;r++)o[r]=t[r]
return o}var v=function Buttons(t){var n=Object(h.a)(y,t.classes),r=t.appearance,o=t.isSameWidth,i=t.textAlign,s=t.border,u=t.borderColor,g=t.borderWidth,f=t.borderRadius,b=t.marginTop,p=t.marginRight,m=t.marginBottom,v=t.marginLeft,w=t.paddingTop,k=t.paddingRight,x=t.paddingBottom,A=t.paddingLeft,O=t.children,T=t.cssClasses,j=void 0===T?[]:T,R=n["".concat(r)],L=Object(d.useRef)(null),S=c.a.useState(0),_=l()(S,2),P=_[0],C=_[1],I={"--buttonMinWidth":P?P+"px":null},B=a()({border:s,borderColor:u,borderWidth:g,borderRadius:f,marginTop:b,marginRight:p,marginBottom:m,marginLeft:v,paddingTop:w,paddingRight:k,paddingBottom:x,paddingLeft:A},I)
Object(d.useLayoutEffect)(function(){if(o){var t,n=0,r=_createForOfIteratorHelper(L.current.querySelectorAll("button"))
try{for(r.s();!(t=r.n()).done;){var e=t.value.offsetWidth
e>n&&(n=e)}}catch(t){r.e(t)}finally{r.f()}C(n)}},[o])
return B.justifyContent="flex-start",i&&(B.justifyContent={left:"flex-start",center:"center",right:"flex-end"}[i]||"flex-start",B.textAlign=i),c.a.createElement("div",{ref:L,style:B,className:[n.root,R].concat(e()(j)).join(" ")},O)}
v.propTypes={appearance:Object(m.oneOf)(["inline","stacked"]),classes:Object(m.shape)({root:m.string,stacked:m.string,inline:m.string}),isSameWidth:m.bool,textAlign:m.string,border:m.string,borderColor:m.string,borderWidth:m.string,borderRadius:m.string,marginTop:m.string,marginRight:m.string,marginBottom:m.string,marginLeft:m.string,paddingTop:m.string,paddingRight:m.string,paddingBottom:m.string,paddingLeft:m.string,cssClasses:Object(m.arrayOf)(m.string)}
var w=v}}])
