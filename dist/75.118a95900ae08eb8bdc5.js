/*!
 * @version a5b8651-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"+sVj":function(e,t,r){"use strict"
function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,l=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return u=e.done,e},e:function e(t){l=!0,c=t},f:function f(){try{u||null==a.return||a.return()}finally{if(l)throw c}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}r.d(t,"a",function(){return a})
var n=function toString(e){var t=e.graphQLErrors,r=e.message
return t&&t.length?t.map(function(e){return e.message}).join(", "):r},a=function deriveErrorMessage(e){var t,r=[],a=_createForOfIteratorHelper(e)
try{for(a.s();!(t=a.n()).done;){var o=t.value
o&&r.push(n(o))}}catch(e){a.e(e)}finally{a.f()}return r.join(", ")}},oK3t:function(e,t,r){(t=e.exports=r("JPst")(!1)).push([e.i,".authenticationPage-wrapper-3iI {\n    max-width: 670px;\n    margin: 50px auto;\n}",""]),t.locals={wrapper:"authenticationPage-wrapper-3iI"}},tVFI:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return j})
var n=r("J4zp"),a=r.n(n),o=r("q1tI"),i=r.n(o),c=r("Ty5D"),u=r("FITH"),s=r("y1Xp"),l=r("h8kG"),f=r("rD+W"),p=r("vvB7"),b=r("LboF"),h=r.n(b),y=r("oK3t"),d=r.n(y),g={injectType:"singletonStyleTag",insert:"head",singleton:!0},m=(h()(d.a,g),d.a.locals||{}),w=r("exCK"),j=function AuthenticationPage(e){var t,r=Object(c.i)().auth,n=Object(c.g)(),b=Object(u.b)(),h=a()(b,1)[0].isSignedIn,y=Object(s.a)(m,e.classes),d=Object(o.useCallback)(function(){n.push(Object(w.x)())},[]),g=Object(o.useCallback)(function(){n.push(Object(w.z)())},[]),j=Object(o.useCallback)(function(){n.push(Object(w.L)())},[]),v=Object(o.useCallback)(function(){n.push(Object(w.e)())},[])
if(h)return i.a.createElement(c.a,{to:Object(w.e)()})
switch(r){case"forgotpassword":t=i.a.createElement(p.a,{onCancel:g})
break
case"create":t=i.a.createElement(f.a,{isCancelButtonHidden:!1,onSubmit:v,onCancel:g})
break
case"login":default:t=i.a.createElement(l.a,{isPopup:!1,showCreateAccount:j,showForgotPassword:d})}return i.a.createElement("div",{className:y.wrapper},t)}}}])
