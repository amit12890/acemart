/*!
<<<<<<< HEAD
 * @version 1c953b0-dev
=======
<<<<<<< HEAD:dist/55.b574c1b2ae428c0eca06.js
 * @version 6f3669c-dev
=======
 * @version a75e51a-dev
>>>>>>> origin/development:dist/55.3dafa2378301897f146e.js
>>>>>>> origin/master
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{STDB:function(n,t,r){"use strict"
var o=r("MVZn"),e=r.n(o),i=r("q1tI"),a=r.n(i),l=r("y1Xp"),c=r("LboF"),g=r.n(c),h=r("Xc6h"),m=r.n(h),s={injectType:"singletonStyleTag",insert:"head",singleton:!0},d=(g()(m.a,s),m.a.locals||{}),b=r("17x9"),f=r("hI7W")
function _createForOfIteratorHelper(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!o){if(Array.isArray(t)||(o=function _unsupportedIterableToArray(n,t){if(!n)return
if("string"==typeof n)return _arrayLikeToArray(n,t)
var r=Object.prototype.toString.call(n).slice(8,-1)
"Object"===r&&n.constructor&&(r=n.constructor.name)
if("Map"===r||"Set"===r)return Array.from(n)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(n,t)}(t))||r&&t&&"number"==typeof t.length){o&&(t=o)
var i=0,a=function F(){}
return{s:a,n:function n(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function e(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,g=!1
return{s:function s(){o=o.call(t)},n:function n(){var t=o.next()
return c=t.done,t},e:function e(n){g=!0,l=n},f:function f(){try{c||null==o.return||o.return()}finally{if(g)throw l}}}}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length)
for(var r=0,o=new Array(t);r<t;r++)o[r]=n[r]
return o}var p=function RichContent(n){var t,r=Object(l.a)(d,n.classes),o=e()({},n,{classes:r}),i=_createForOfIteratorHelper(f.a)
try{for(i.s();!(t=i.n()).done;){var c=t.value,g=c.Component
if((0,c.canRender)(o.html))return a.a.createElement(g,o)}}catch(n){i.e(n)}finally{i.f()}return null}
p.propTypes={classes:Object(b.shape)({root:b.string}),html:b.string}
t.a=p},WqR7:function(n,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return g})
var o=r("q1tI"),e=r.n(o),i=r("fCSX"),a=r("17x9"),l=r("LvDl"),c=function Block(n){var t=n.richContent,r=n.textAlign,o=n.border,a=n.borderColor,c=n.borderWidth,g=n.borderRadius,h=n.marginTop,m=n.marginRight,s=n.marginBottom,d=n.marginLeft,b=n.paddingTop,f=n.paddingRight,p=n.paddingBottom,u=n.paddingLeft,C=n.cssClasses,y={textAlign:r,border:o,borderColor:a,borderWidth:c,borderRadius:g,marginTop:h,marginRight:m,marginBottom:s,marginLeft:d,paddingTop:b,paddingRight:f,paddingBottom:p,paddingLeft:u},v=(void 0===C?[]:C).map(function(n){return Object(l.get)(classes,n,n)})
return e.a.createElement("div",{style:y,className:v.join(" ")},e.a.createElement(i.a,{content:t}))}
c.propTypes={richContent:a.string,textAlign:a.string,border:a.string,borderColor:a.string,borderWidth:a.string,borderRadius:a.string,marginTop:a.string,marginRight:a.string,marginBottom:a.string,marginLeft:a.string,paddingTop:a.string,paddingRight:a.string,paddingBottom:a.string,cssClasses:Object(a.arrayOf)(a.string)}
var g=c},Xc6h:function(n,t,r){(t=n.exports=r("JPst")(!1)).push([n.i,".richContent-root-11l h1,\n.richContent-root-11l h2,\n.richContent-root-11l h3,\n.richContent-root-11l h4,\n.richContent-root-11l h5,\n.richContent-root-11l h6 {\n    word-break: break-word;\n    line-height: 1.25em;\n    margin-bottom: 0.5em;\n    margin-top: 1rem;\n}\n\n.richContent-root-11l h1 {\n    font-size: 2rem;\n    margin-top: 0.9em;\n    font-weight: 300;\n}\n.richContent-root-11l h2 {\n    font-size: 1.625rem;\n    font-weight: 400;\n}\n.richContent-root-11l h3 {\n    font-size: 1.375rem;\n    font-weight: 400;\n}\n.richContent-root-11l h4 {\n    font-size: 1.125rem;\n    font-weight: 600;\n}\n.richContent-root-11l h5 {\n    font-size: 1rem;\n    font-weight: 600;\n}\n.richContent-root-11l h6 {\n    font-size: 0.875rem;\n    font-weight: 600;\n}\n.richContent-root-11l p {\n    margin-bottom: 1rem;\n    line-height: 1.65em;\n}\n.richContent-root-11l img {\n    max-width: 100%;\n    margin: 1rem 0;\n}\n.richContent-root-11l ol,\n.richContent-root-11l ul {\n    margin-block-start: 1.2em;\n    margin-block-end: 1.2em;\n    padding-left: 2em;\n}\n.richContent-root-11l p + ol,\n.richContent-root-11l p + ul {\n    margin-block-start: 0.2em;\n}\n.richContent-root-11l ol {\n    list-style-type: decimal;\n}\n.richContent-root-11l ul {\n    list-style-type: disc;\n}\n.richContent-root-11l ol li,\n.richContent-root-11l ul li {\n    line-height: 1.65em;\n    padding: 1px 0.5rem;\n}\n.richContent-root-11l a {\n    text-decoration: underline;\n}\n.richContent-root-11l blockquote {\n    font-size: 1.375rem;\n    line-height: 1.875rem;\n    margin: 1rem 0;\n    font-weight: 300;\n    font-style: italic;\n}\n.richContent-root-11l table {\n    width: 100%;\n    margin: 1rem 0;\n    border-spacing: 0;\n    border-left: 1px solid rgb(var(--venia-global-color-border));\n    border-top: 1px solid rgb(var(--venia-global-color-border));\n}\n.richContent-root-11l table td,\n.richContent-root-11l table th {\n    text-align: left;\n    padding: 1rem;\n    font-size: 0.875rem;\n    line-height: 1.125em;\n    border-right: 1px solid rgb(var(--venia-global-color-border));\n    border-bottom: 1px solid rgb(var(--venia-global-color-border));\n}\n.richContent-root-11l table th {\n    background-color: rgb(var(--venia-global-color-gray));\n}\n.richContent-root-11l .cms-content-important {\n    background: rgb(var(--venia-global-color-gray));\n    padding: 1.2rem 1rem;\n    font-size: 1.125rem;\n    border: 1px solid rgb(var(--venia-global-color-border));\n}\n.richContent-root-11l pre {\n    background: rgb(var(--venia-global-color-gray));\n    padding: 1rem;\n    border: 1px solid rgb(var(--venia-global-color-border));\n}\n\n@media only screen and (min-width: 769px) {\n    .richContent-root-11l h1 {\n        font-size: 3rem;\n        margin-top: 0.75em;\n        line-height: 1.05em;\n    }\n    .richContent-root-11l h2 {\n        font-size: 2.25rem;\n        line-height: 1.25em;\n    }\n    .richContent-root-11l h3 {\n        font-size: 1.75rem;\n        line-height: 1.25em;\n    }\n    .richContent-root-11l h4 {\n        font-size: 1.375rem;\n        line-height: 1.25em;\n        font-weight: 400;\n    }\n    .richContent-root-11l h5 {\n        font-size: 1.125rem;\n        line-height: 1.22em;\n        margin-bottom: 0.75em;\n    }\n    .richContent-root-11l h6 {\n        font-size: 1rem;\n        line-height: 1.22em;\n        margin-bottom: 0.75em;\n    }\n    .richContent-root-11l p {\n        margin-bottom: 1rem;\n        line-height: 1.5em;\n    }\n}\n",""]),t.locals={root:"richContent-root-11l"}},fCSX:function(n,t,r){"use strict"
var o=r("q1tI"),e=r.n(o),i=r("17x9"),a=r("STDB"),l=function Block(n){var t=n.content
return e.a.createElement(a.a,{html:t})}
l.propTypes={content:i.string},t.a=l}}])
