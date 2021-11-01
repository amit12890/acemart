/*!
<<<<<<< HEAD:dist/55.dc4df0e69eb7275300a9.js
 * @version f2442e6-dev
=======
 * @version f78ba83-dev
>>>>>>> origin/development:dist/54.c2c654418e46c615ff11.js
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{oK3t:function(e,a,t){(a=e.exports=t("JPst")(!1)).push([e.i,".authenticationPage-wrapper-3iI {\n    max-width: 670px;\n    margin: 50px auto;\n}",""]),a.locals={wrapper:"authenticationPage-wrapper-3iI"}},tVFI:function(e,a,t){"use strict"
t.r(a),t.d(a,"default",function(){return m})
var n=t("J4zp"),c=t.n(n),o=t("q1tI"),s=t.n(o),i=t("Ty5D"),r=t("FITH"),u=t("y1Xp"),l=t("h8kG"),p=t("rD+W"),b=t("vvB7"),d=t("LboF"),h=t.n(d),w=t("oK3t"),g=t.n(w),f={injectType:"singletonStyleTag",insert:"head",singleton:!0},j=(h()(g.a,f),g.a.locals||{}),k=t("ES2q"),m=function AuthenticationPage(e){var a,t=Object(i.i)().auth,n=Object(i.g)(),d=Object(r.b)(),h=c()(d,1)[0].isSignedIn,w=Object(u.a)(j,e.classes),g=Object(o.useCallback)(function(){n.push(k.b)},[]),f=Object(o.useCallback)(function(){n.push(k.c)},[]),m=Object(o.useCallback)(function(){n.push(k.d)},[]),C=Object(o.useCallback)(function(){n.push(k.a)},[])
if(h)a=s.a.createElement("div",null,"Your are already logged In")
else switch(t){case"forgotpassword":a=s.a.createElement(b.a,{onCancel:f})
break
case"create":a=s.a.createElement(p.a,{isCancelButtonHidden:!1,onSubmit:C,onCancel:f})
break
case"login":default:a=s.a.createElement(l.a,{isPopup:!1,showCreateAccount:m,showForgotPassword:g})}return s.a.createElement("div",{className:w.wrapper},a)}}}])
