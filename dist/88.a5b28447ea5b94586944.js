/*!
 * @version cdaf1da-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{oK3t:function(e,t,a){(t=e.exports=a("JPst")(!1)).push([e.i,".authenticationPage-wrapper-3iI {\n    max-width: 670px;\n    margin: 50px auto;\n}",""]),t.locals={wrapper:"authenticationPage-wrapper-3iI"}},tVFI:function(e,t,a){"use strict"
a.r(t),a.d(t,"default",function(){return k})
var n=a("J4zp"),c=a.n(n),o=a("q1tI"),s=a.n(o),i=a("Ty5D"),r=a("FITH"),u=a("y1Xp"),l=a("h8kG"),p=a("rD+W"),b=a("vvB7"),h=a("LboF"),w=a.n(h),g=a("oK3t"),j=a.n(g),d={injectType:"singletonStyleTag",insert:"head",singleton:!0},O=(w()(j.a,d),j.a.locals||{}),f=a("exCK"),k=function AuthenticationPage(e){var t,a=Object(i.i)().auth,n=Object(i.g)(),h=Object(r.b)(),w=c()(h,1)[0].isSignedIn,g=Object(u.a)(O,e.classes),j=Object(o.useCallback)(function(){n.push(Object(f.E)())},[]),d=Object(o.useCallback)(function(){n.push(Object(f.H)())},[]),k=Object(o.useCallback)(function(){n.push(Object(f.U)())},[]),m=Object(o.useCallback)(function(){n.push(Object(f.g)())},[])
if(w)return s.a.createElement(i.a,{to:Object(f.g)()})
switch(a){case"forgotpassword":t=s.a.createElement(b.a,{onCancel:d})
break
case"create":t=s.a.createElement(p.a,{isCancelButtonHidden:!1,onSubmit:m,onCancel:d})
break
case"login":default:t=s.a.createElement(l.a,{isPopup:!1,showCreateAccount:k,showForgotPassword:j})}return s.a.createElement("div",{className:g.wrapper},t)}}}])
