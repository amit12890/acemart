/*!
 * @version 975deadf-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{LYVK:function(t,n,i){"use strict"
i.r(n),i.d(n,"default",function(){return k})
var r=i("q1tI"),o=i.n(r),e=i("Tils"),a=i("STEg"),g=i("y1Xp"),d=i("LboF"),s=i.n(d),c=i("djLQ"),m=i.n(c),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},l=(s()(m.a,b),m.a.locals||{}),p=i("17x9"),u=globalThis.matchMedia,h=function TabItem(t){var n=Object(g.a)(l,t.classes),i=t.minHeight,r=t.verticalAlignment,d=t.backgroundColor,s=t.desktopImage,c=t.mobileImage,m=t.backgroundSize,b=t.backgroundPosition,p=t.backgroundAttachment,h=t.backgroundRepeat,k=t.textAlign,f=t.border,T=t.borderColor,j=t.borderWidth,y=t.borderRadius,R=t.marginTop,v=t.marginRight,L=t.marginBottom,w=t.marginLeft,x=t.paddingTop,A=t.paddingRight,C=t.paddingBottom,I=t.paddingLeft,O=t.children,B=t.cssClasses,H=void 0===B?[]:B,S=s
c&&u&&u("(max-width: 768px)").matches&&(S=c)
var P={minHeight:i,verticalAlignment:r,backgroundColor:d,textAlign:k,border:f,borderColor:T,borderWidth:j,borderRadius:y,marginTop:R,marginRight:v,marginBottom:L,marginLeft:w,paddingTop:x,paddingRight:A,paddingBottom:C,paddingLeft:I}
if(S){var z=Object(a.a)(S,{type:"image-wysiwyg",quality:85})
P.backgroundImage="url(".concat(z,")"),P.backgroundSize=m,P.backgroundPosition=b,P.backgroundAttachment=p,P.backgroundRepeat=h?"repeat":"no-repeat"}return r&&(P.display="flex",P.justifyContent=Object(e.j)(r),P.flexDirection="column"),o.a.createElement("div",{style:P,className:[H,n.root].join(" ")},O)}
h.propTypes={classes:Object(p.shape)({root:p.string}),tabName:p.string,verticalAlignment:Object(p.oneOf)(["top","middle","bottom"]),minHeight:p.string,backgroundColor:p.string,desktopImage:p.string,mobileImage:p.string,backgroundSize:p.string,backgroundPosition:p.string,backgroundAttachment:p.string,backgroundRepeat:p.bool,textAlign:p.string,border:p.string,borderColor:p.string,borderWidth:p.string,borderRadius:p.string,marginTop:p.string,marginRight:p.string,marginBottom:p.string,marginLeft:p.string,paddingTop:p.string,paddingRight:p.string,paddingBottom:p.string,paddingLeft:p.string,cssClasses:Object(p.arrayOf)(p.string)}
var k=h},djLQ:function(t,n,i){(n=t.exports=i("JPst")(!1)).push([t.i,".tabItem-root-UHZ {\n    min-height: inherit;\n}\n",""]),n.locals={root:"tabItem-root-UHZ"}}}])
