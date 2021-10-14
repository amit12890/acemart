/*!
 * @version 3f81286-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{oK3t:function(e,a,t){(a=e.exports=t("JPst")(!1)).push([e.i,".authenticationPage-wrapper-3iI {\n    max-width: 500px;\n    margin: 50px auto;\n}",""]),a.locals={wrapper:"authenticationPage-wrapper-3iI"}},tVFI:function(e,a,t){"use strict"
t.r(a),t.d(a,"default",function(){return j})
var n=t("J4zp"),c=t.n(n),o=t("q1tI"),s=t.n(o),r=t("Ty5D"),u=t("FITH"),i=t("y1Xp"),l=t("h8kG"),p=t("rD+W"),b=t("vvB7"),d=t("LboF"),w=t.n(d),g=t("oK3t"),h=t.n(g),f={injectType:"singletonStyleTag",insert:"head",singleton:!0},m=(w()(h.a,f),h.a.locals||{}),j=function AuthenticationPage(e){var a,t=Object(r.i)().auth,n=Object(r.g)(),d=Object(u.b)(),w=c()(d,1)[0].isSignedIn,g=Object(i.a)(m,e.classes),h=Object(o.useCallback)(function(){n.push("/customer/account/forgotpassword/")},[]),f=Object(o.useCallback)(function(){n.push("/customer/account/login/")},[]),j=Object(o.useCallback)(function(){n.push("/customer/account/create/")},[]),k=Object(o.useCallback)(function(){n.push("/customer/account/")},[])
if(w)a=s.a.createElement("div",null,"Your are already logged In")
else switch(t){case"forgotpassword":a=s.a.createElement(b.a,{onCancel:f})
break
case"create":a=s.a.createElement(p.a,{isCancelButtonHidden:!1,onSubmit:k,onCancel:f})
break
case"login":default:a=s.a.createElement(l.a,{showCreateAccount:j,showForgotPassword:h})}return s.a.createElement("div",{className:g.wrapper},a)}}}])
