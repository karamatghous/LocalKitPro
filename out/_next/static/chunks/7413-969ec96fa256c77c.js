"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7413],{13540:function(e,r,t){var n=t(64836);r.Z=void 0;var i=n(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");r.Z=a},70754:function(e,r,t){t.d(r,{Z:function(){return D}});var n=t(63366),i=t(87462),o=t(67294),a=t(86010),s=t(94780),l=t(70917),c=t(36622),u=t(78884),d=t(81719),p=t(34867),$=t(1588);function f(e){return(0,p.Z)("MuiCircularProgress",e)}(0,$.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=t(85893);let g=["className","color","disableShrink","size","style","thickness","value","variant"],v=e=>e,m,_,Z,x,y=(0,l.F4)(m||(m=v`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,l.F4)(_||(_=v`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=e=>{let{classes:r,variant:t,color:n,disableShrink:i}=e,o={root:["root",t,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,i&&"circleDisableShrink"]};return(0,s.Z)(o,f,r)},k=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(Z||(Z=v`
      animation: ${0} 1.4s linear infinite;
    `),y)),S=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),C=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver(e,r){let{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(x||(x=v`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)),P=o.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:s="primary",disableShrink:l=!1,size:c=40,style:d,thickness:p=3.6,value:$=0,variant:f="indeterminate"}=t,v=(0,n.Z)(t,g),m=(0,i.Z)({},t,{color:s,disableShrink:l,size:c,thickness:p,value:$,variant:f}),_=w(m),Z={},x={},y={};if("determinate"===f){let b=2*Math.PI*((44-p)/2);Z.strokeDasharray=b.toFixed(3),y["aria-valuenow"]=Math.round($),Z.strokeDashoffset=`${((100-$)/100*b).toFixed(3)}px`,x.transform="rotate(-90deg)"}return(0,h.jsx)(k,(0,i.Z)({className:(0,a.Z)(_.root,o),style:(0,i.Z)({width:c,height:c},x,d),ownerState:m,ref:r,role:"progressbar"},y,v,{children:(0,h.jsx)(S,{className:_.svg,ownerState:m,viewBox:"22 22 44 44",children:(0,h.jsx)(C,{className:_.circle,style:Z,ownerState:m,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})}))});var D=P},93481:function(e,r,t){t.d(r,{Z:function(){return k}});var n=t(63366),i=t(87462),o=t(67294),a=t(86010),s=t(98885),l=t(94780),c=t(81719),u=t(78884),d=t(53204),p=t(53566),$=t(62097),f=t(84771),h=t(34867),g=t(1588);function v(e){return(0,h.Z)("MuiCollapse",e)}(0,g.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var m=t(85893);let _=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Z=e=>{let{orientation:r,classes:t}=e,n={root:["root",`${r}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${r}`],wrapperInner:["wrapperInner",`${r}`]};return(0,l.Z)(n,v,t)},x=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,r[t.orientation],"entered"===t.state&&r.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&r.hidden]}})(({theme:e,ownerState:r})=>(0,i.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===r.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===r.state&&(0,i.Z)({height:"auto",overflow:"visible"},"horizontal"===r.orientation&&{width:"auto"}),"exited"===r.state&&!r.in&&"0px"===r.collapsedSize&&{visibility:"hidden"})),y=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,r)=>r.wrapper})(({ownerState:e})=>(0,i.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),b=(0,c.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,r)=>r.wrapperInner})(({ownerState:e})=>(0,i.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),w=o.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiCollapse"}),{addEndListener:l,children:c,className:h,collapsedSize:g="0px",component:v,easing:w,in:k,onEnter:S,onEntered:C,onEntering:P,onExit:D,onExited:W,onExiting:R,orientation:M="vertical",style:N,timeout:E=d.x9.standard,TransitionComponent:I=s.ZP}=t,z=(0,n.Z)(t,_),L=(0,i.Z)({},t,{orientation:M,collapsedSize:g}),j=Z(L),F=(0,$.Z)(),T=o.useRef(),B=o.useRef(null),O=o.useRef(),H="number"==typeof g?`${g}px`:g,A="horizontal"===M,Y=A?"width":"height";o.useEffect(()=>()=>{clearTimeout(T.current)},[]);let G=o.useRef(null),X=(0,f.Z)(r,G),J=e=>r=>{if(e){let t=G.current;void 0===r?e(t):e(t,r)}},K=()=>B.current?B.current[A?"clientWidth":"clientHeight"]:0,U=J((e,r)=>{B.current&&A&&(B.current.style.position="absolute"),e.style[Y]=H,S&&S(e,r)}),V=J((e,r)=>{let t=K();B.current&&A&&(B.current.style.position="");let{duration:n,easing:i}=(0,p.C)({style:N,timeout:E,easing:w},{mode:"enter"});if("auto"===E){let o=F.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${o}ms`,O.current=o}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[Y]=`${t}px`,e.style.transitionTimingFunction=i,P&&P(e,r)}),q=J((e,r)=>{e.style[Y]="auto",C&&C(e,r)}),Q=J(e=>{e.style[Y]=`${K()}px`,D&&D(e)}),ee=J(W),er=J(e=>{let r=K(),{duration:t,easing:n}=(0,p.C)({style:N,timeout:E,easing:w},{mode:"exit"});if("auto"===E){let i=F.transitions.getAutoHeightDuration(r);e.style.transitionDuration=`${i}ms`,O.current=i}else e.style.transitionDuration="string"==typeof t?t:`${t}ms`;e.style[Y]=H,e.style.transitionTimingFunction=n,R&&R(e)}),et=e=>{"auto"===E&&(T.current=setTimeout(e,O.current||0)),l&&l(G.current,e)};return(0,m.jsx)(I,(0,i.Z)({in:k,onEnter:U,onEntered:q,onEntering:V,onExit:Q,onExited:ee,onExiting:er,addEndListener:et,nodeRef:G,timeout:"auto"===E?null:E},z,{children:(e,r)=>(0,m.jsx)(x,(0,i.Z)({as:v,className:(0,a.Z)(j.root,h,{entered:j.entered,exited:!k&&"0px"===H&&j.hidden}[e]),style:(0,i.Z)({[A?"minWidth":"minHeight"]:H},N),ownerState:(0,i.Z)({},L,{state:e}),ref:X},r,{children:(0,m.jsx)(y,{ownerState:(0,i.Z)({},L,{state:e}),className:j.wrapper,ref:B,children:(0,m.jsx)(b,{ownerState:(0,i.Z)({},L,{state:e}),className:j.wrapperInner,children:c})})}))}))});w.muiSupportAuto=!0;var k=w},78944:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(63366),i=t(87462),o=t(67294),a=t(86010),s=t(94780),l=t(81719),c=t(78884),u=t(34867),d=t(1588);function p(e){return(0,u.Z)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);let $=(0,d.Z)("MuiDialogTitle",["root"]);var f=$,h=t(85893);let g=["className","dividers"],v=e=>{let{classes:r,dividers:t}=e;return(0,s.Z)({root:["root",t&&"dividers"]},p,r)},m=(0,l.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,t.dividers&&r.dividers]}})(({theme:e,ownerState:r})=>(0,i.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${f.root} + &`]:{paddingTop:0}})),_=o.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiDialogContent"}),{className:o,dividers:s=!1}=t,l=(0,n.Z)(t,g),u=(0,i.Z)({},t,{dividers:s}),d=v(u);return(0,h.jsx)(m,(0,i.Z)({className:(0,a.Z)(d.root,o),ownerState:u,ref:r},l))});var Z=_},2961:function(e,r,t){t.d(r,{Z:function(){return P}});var n=t(63366),i=t(87462),o=t(67294),a=t(86010),s=t(94780),l=t(57579),c=t(36622),u=t(92096),d=t(9942),p=t(70918),$=t(78884),f=t(81719),h=t(26069);let g=(0,o.createContext)({});var v=g,m=t(58735),_=t(62097),Z=t(85893);let x=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],y=(0,f.ZP)(m.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,r)=>r.backdrop})({zIndex:-1}),b=e=>{let{classes:r,scroll:t,maxWidth:n,fullWidth:i,fullScreen:o}=e,a={root:["root"],container:["container",`scroll${(0,c.Z)(t)}`],paper:["paper",`paperScroll${(0,c.Z)(t)}`,`paperWidth${(0,c.Z)(String(n))}`,i&&"paperFullWidth",o&&"paperFullScreen"]};return(0,s.Z)(a,h.D,r)},w=(0,f.ZP)(u.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,r)=>r.root})({"@media print":{position:"absolute !important"}}),k=(0,f.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver(e,r){let{ownerState:t}=e;return[r.container,r[`scroll${(0,c.Z)(t.scroll)}`]]}})(({ownerState:e})=>(0,i.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),S=(0,f.ZP)(p.Z,{name:"MuiDialog",slot:"Paper",overridesResolver(e,r){let{ownerState:t}=e;return[r.paper,r[`scrollPaper${(0,c.Z)(t.scroll)}`],r[`paperWidth${(0,c.Z)(String(t.maxWidth))}`],t.fullWidth&&r.paperFullWidth,t.fullScreen&&r.paperFullScreen]}})(({theme:e,ownerState:r})=>(0,i.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${h.Z.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`,[`&.${h.Z.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${h.Z.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),C=o.forwardRef(function(e,r){let t=(0,$.Z)({props:e,name:"MuiDialog"}),s=(0,_.Z)(),c={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":u,"aria-labelledby":f,BackdropComponent:h,BackdropProps:g,children:m,className:C,disableEscapeKeyDown:P=!1,fullScreen:D=!1,fullWidth:W=!1,maxWidth:R="sm",onBackdropClick:M,onClose:N,open:E,PaperComponent:I=p.Z,PaperProps:z={},scroll:L="paper",TransitionComponent:j=d.Z,transitionDuration:F=c,TransitionProps:T}=t,B=(0,n.Z)(t,x),O=(0,i.Z)({},t,{disableEscapeKeyDown:P,fullScreen:D,fullWidth:W,maxWidth:R,scroll:L}),H=b(O),A=o.useRef(),Y=e=>{A.current=e.target===e.currentTarget},G=e=>{A.current&&(A.current=null,M&&M(e),N&&N(e,"backdropClick"))},X=(0,l.Z)(f),J=o.useMemo(()=>({titleId:X}),[X]);return(0,Z.jsx)(w,(0,i.Z)({className:(0,a.Z)(H.root,C),closeAfterTransition:!0,components:{Backdrop:y},componentsProps:{backdrop:(0,i.Z)({transitionDuration:F,as:h},g)},disableEscapeKeyDown:P,onClose:N,open:E,ref:r,onClick:G,ownerState:O},B,{children:(0,Z.jsx)(j,(0,i.Z)({appear:!0,in:E,timeout:F,role:"presentation"},T,{children:(0,Z.jsx)(k,{className:(0,a.Z)(H.container),onMouseDown:Y,ownerState:O,children:(0,Z.jsx)(S,(0,i.Z)({as:I,elevation:24,role:"dialog","aria-describedby":u,"aria-labelledby":X},z,{className:(0,a.Z)(H.paper,z.className),ownerState:O,children:(0,Z.jsx)(v.Provider,{value:J,children:m})}))})}))}))});var P=C},26069:function(e,r,t){t.d(r,{D:function(){return o}});var n=t(34867),i=t(1588);function o(e){return(0,n.Z)("MuiDialog",e)}let a=(0,i.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);r.Z=a},20293:function(e,r,t){t.d(r,{Z:function(){return _}});var n=t(63366),i=t(87462),o=t(67294),a=t(86010),s=t(94780),l=t(81719),c=t(78884),u=t(36622),d=t(34867),p=t(1588);function $(e){return(0,d.Z)("MuiListSubheader",e)}(0,p.Z)("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);var f=t(85893);let h=["className","color","component","disableGutters","disableSticky","inset"],g=e=>{let{classes:r,color:t,disableGutters:n,inset:i,disableSticky:o}=e,a={root:["root","default"!==t&&`color${(0,u.Z)(t)}`,!n&&"gutters",i&&"inset",!o&&"sticky"]};return(0,s.Z)(a,$,r)},v=(0,l.ZP)("li",{name:"MuiListSubheader",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,"default"!==t.color&&r[`color${(0,u.Z)(t.color)}`],!t.disableGutters&&r.gutters,t.inset&&r.inset,!t.disableSticky&&r.sticky]}})(({theme:e,ownerState:r})=>(0,i.Z)({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},"primary"===r.color&&{color:(e.vars||e).palette.primary.main},"inherit"===r.color&&{color:"inherit"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.inset&&{paddingLeft:72},!r.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),m=o.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiListSubheader"}),{className:o,color:s="default",component:l="li",disableGutters:u=!1,disableSticky:d=!1,inset:p=!1}=t,$=(0,n.Z)(t,h),m=(0,i.Z)({},t,{color:s,component:l,disableGutters:u,disableSticky:d,inset:p}),_=g(m);return(0,f.jsx)(v,(0,i.Z)({as:l,className:(0,a.Z)(_.root,o),ref:r,ownerState:m},$))});var _=m},77058:function(e,r,t){t.d(r,{$:function(){return g}});var n=t(83878),i=t(40181),o=t(25267),a=t(4942),s=t(67294),l=t(57715);function c(){if(console&&console.warn){for(var e,r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var u={};function d(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];"string"==typeof r[0]&&u[r[0]]||("string"==typeof r[0]&&(u[r[0]]=new Date),c.apply(void 0,r))}function p(e,r,t){e.loadNamespaces(r,function(){if(e.isInitialized)t();else{var r=function r(){setTimeout(function(){e.off("initialized",r)},0),t()};e.on("initialized",r)}})}function $(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?$(Object(t),!0).forEach(function(r){(0,a.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h=function(e,r){var t=(0,s.useRef)();return(0,s.useEffect)(function(){t.current=r?t.current:e},[e,r]),t.current};function g(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.i18n,a=(0,s.useContext)(l.OO)||{},c=a.i18n,u=a.defaultNS,$=t||c||(0,l.nI)();if($&&!$.reportNamespaces&&($.reportNamespaces=new l.zv),!$){d("You will need to pass in an i18next instance by using initReactI18next");var g=function(e){return Array.isArray(e)?e[e.length-1]:e},v=[g,{},!1];return v.t=g,v.i18n={},v.ready=!1,v}$.options.react&&void 0!==$.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=f(f(f({},(0,l.JP)()),$.options.react),r),_=m.useSuspense,Z=m.keyPrefix,x=e||u||$.options&&$.options.defaultNS;x="string"==typeof x?[x]:x||["translation"],$.reportNamespaces.addUsedNamespaces&&$.reportNamespaces.addUsedNamespaces(x);var y=($.isInitialized||$.initializedStoreOnce)&&x.every(function(e){return function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.languages&&r.languages.length?void 0!==r.options.ignoreJSONStructure?r.hasLoadedNamespace(e,{precheck:function(r,n){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!n(r.isLanguageChangingTo,e))return!1}}):function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.languages[0],i=!!r.options&&r.options.fallbackLng,o=r.languages[r.languages.length-1];if("cimode"===n.toLowerCase())return!0;var a=function(e,t){var n=r.services.backendConnector.state["".concat(e,"|").concat(t)];return -1===n||2===n};return(!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1)||!r.services.backendConnector.backend||!r.isLanguageChangingTo||!!a(r.isLanguageChangingTo,e))&&!!(r.hasResourceBundle(n,e)||!r.services.backendConnector.backend||r.options.resources&&!r.options.partialBundledLanguages||a(n,e)&&(!i||a(o,e)))}(e,r,t):(d("i18n.languages were undefined or empty",r.languages),!0)}(e,$,m)});function b(){return $.getFixedT(null,"fallback"===m.nsMode?x:x[0],Z)}var w,k=(w=(0,s.useState)(b),(0,n.Z)(w)||function(e,r){var t,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(t=i.next()).done)&&(o.push(t.value),!r||o.length!==r);a=!0);}catch(l){s=!0,n=l}finally{try{a||null==i.return||i.return()}finally{if(s)throw n}}return o}}(w,2)||(0,i.Z)(w,2)||(0,o.Z)()),S=k[0],C=k[1],P=x.join(),D=h(P),W=(0,s.useRef)(!0);(0,s.useEffect)(function(){var e=m.bindI18n,r=m.bindI18nStore;function t(){W.current&&C(b)}return W.current=!0,y||_||p($,x,function(){W.current&&C(b)}),y&&D&&D!==P&&W.current&&C(b),e&&$&&$.on(e,t),r&&$&&$.store.on(r,t),function(){W.current=!1,e&&$&&e.split(" ").forEach(function(e){return $.off(e,t)}),r&&$&&r.split(" ").forEach(function(e){return $.store.off(e,t)})}},[$,P]);var R=(0,s.useRef)(!0);(0,s.useEffect)(function(){W.current&&!R.current&&C(b),R.current=!1},[$,Z]);var M=[S,$,y];if(M.t=S,M.i18n=$,M.ready=y,y||!y&&!_)return M;throw new Promise(function(e){p($,x,function(){e()})})}},82670:function(e,r,t){t.d(r,{Z:function(){return n}});function n(e,r){return null!=r&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?!!r[Symbol.hasInstance](e):e instanceof r}}}]);