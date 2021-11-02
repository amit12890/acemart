/*!
 * @version 8c5ead2-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{oK3t:function(e,t,a){(t=e.exports=a("JPst")(!1)).push([e.i,".authenticationPage-wrapper-3iI {\n    max-width: 670px;\n    margin: 50px auto;\n}",""]),t.locals={wrapper:"authenticationPage-wrapper-3iI"}},tVFI:function(e,t,a){"use strict"
a.r(t),a.d(t,"default",function(){return m})
var n=a("J4zp"),c=a.n(n),o=a("q1tI"),s=a.n(o),i=a("Ty5D"),r=a("FITH"),u=a("y1Xp"),l=a("h8kG"),p=a("rD+W"),b=a("vvB7"),h=a("LboF"),w=a.n(h),j=a("oK3t"),d=a.n(j),g={injectType:"singletonStyleTag",insert:"head",singleton:!0},O=(w()(d.a,g),d.a.locals||{}),f=a("exCK"),m=function AuthenticationPage(e){var t,a=Object(i.i)().auth,n=Object(i.g)(),h=Object(r.b)(),w=c()(h,1)[0].isSignedIn,j=Object(u.a)(O,e.classes),d=Object(o.useCallback)(function(){n.push(Object(f.g)())},[]),g=Object(o.useCallback)(function(){n.push(Object(f.h)())},[]),m=Object(o.useCallback)(function(){n.push(Object(f.m)())},[]),k=Object(o.useCallback)(function(){n.push(Object(f.a)())},[])
if(w)return s.a.createElement(i.a,{to:Object(f.a)()})
switch(a){case"forgotpassword":t=s.a.createElement(b.a,{onCancel:g})
break
case"create":t=s.a.createElement(p.a,{isCancelButtonHidden:!1,onSubmit:k,onCancel:g})
break
case"login":default:t=s.a.createElement(l.a,{isPopup:!1,showCreateAccount:m,showForgotPassword:d})}return s.a.createElement("div",{className:j.wrapper},t)}}}])
