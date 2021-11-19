/*!
 * @version 232fb27-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"29Sq":function(t,n,i){(n=t.exports=i("JPst")(!1)).push([t.i,".tabItem-root-2Ub {\n    min-height: inherit;\n}\n",""]),n.locals={root:"tabItem-root-2Ub"}},Q1e4:function(t,n,i){"use strict"
i.r(n),i.d(n,"default",function(){return k})
var r=i("q1tI"),o=i.n(r),e=i("R91P"),a=i("LnOV"),g=i("y1Xp"),d=i("LboF"),s=i.n(d),c=i("29Sq"),b=i.n(c),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},l=(s()(b.a,m),b.a.locals||{}),p=i("17x9"),u=globalThis.matchMedia,h=function TabItem(t){var n=Object(g.a)(l,t.classes),i=t.minHeight,r=t.verticalAlignment,d=t.backgroundColor,s=t.desktopImage,c=t.mobileImage,b=t.backgroundSize,m=t.backgroundPosition,p=t.backgroundAttachment,h=t.backgroundRepeat,k=t.textAlign,f=t.border,R=t.borderColor,y=t.borderWidth,T=t.borderRadius,j=t.marginTop,v=t.marginRight,w=t.marginBottom,x=t.marginLeft,A=t.paddingTop,C=t.paddingRight,I=t.paddingBottom,O=t.paddingLeft,L=t.children,B=t.cssClasses,S=void 0===B?[]:B,P=s
c&&u&&u("(max-width: 768px)").matches&&(P=c)
var q={minHeight:i,verticalAlignment:r,backgroundColor:d,textAlign:k,border:f,borderColor:R,borderWidth:y,borderRadius:T,marginTop:j,marginRight:v,marginBottom:w,marginLeft:x,paddingTop:A,paddingRight:C,paddingBottom:I,paddingLeft:O}
if(P){var z=Object(a.a)(P,{type:"image-wysiwyg",quality:85})
q.backgroundImage="url(".concat(z,")"),q.backgroundSize=b,q.backgroundPosition=m,q.backgroundAttachment=p,q.backgroundRepeat=h?"repeat":"no-repeat"}return r&&(q.display="flex",q.justifyContent=Object(e.j)(r),q.flexDirection="column"),o.a.createElement("div",{style:q,className:[S,n.root].join(" ")},L)}
h.propTypes={classes:Object(p.shape)({root:p.string}),tabName:p.string,verticalAlignment:Object(p.oneOf)(["top","middle","bottom"]),minHeight:p.string,backgroundColor:p.string,desktopImage:p.string,mobileImage:p.string,backgroundSize:p.string,backgroundPosition:p.string,backgroundAttachment:p.string,backgroundRepeat:p.bool,textAlign:p.string,border:p.string,borderColor:p.string,borderWidth:p.string,borderRadius:p.string,marginTop:p.string,marginRight:p.string,marginBottom:p.string,marginLeft:p.string,paddingTop:p.string,paddingRight:p.string,paddingBottom:p.string,paddingLeft:p.string,cssClasses:Object(p.arrayOf)(p.string)}
var k=h}}])
