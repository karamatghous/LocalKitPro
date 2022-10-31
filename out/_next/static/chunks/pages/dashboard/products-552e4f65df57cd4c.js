(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9558],{91359:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var a=r(87462),n=r(63366),i=r(67294),o=r(86010),l=r(94780),s=r(81719),c=r(78884),$=r(34867),u=r(1588);function d(e){return(0,$.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var h=r(85893);let f=["className","component"],p=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},d,t)},_=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),m=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:i,component:l="div"}=r,s=(0,n.Z)(r,f),$=(0,a.Z)({},r,{component:l}),u=p($);return(0,h.jsx)(_,(0,a.Z)({as:l,className:(0,o.Z)(u.root,i),ownerState:$,ref:t},s))});var v=m},86070:function(e,t,r){"use strict";r.d(t,{Z:function(){return T}});var a=r(63366),n=r(87462),i=r(67294),o=r(86010),l=r(94780),s=r(70917),c=r(41796),$=r(36622),u=r(62097),d=r(81719),h=r(78884),f=r(34867),p=r(1588);function _(e){return(0,f.Z)("MuiLinearProgress",e)}(0,p.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var m=r(85893);let v=["className","color","value","valueBuffer","variant"],g=e=>e,b,x,Z,j,y,k,w=(0,s.F4)(b||(b=g`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),S=(0,s.F4)(x||(x=g`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),C=(0,s.F4)(Z||(Z=g`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),P=e=>{let{classes:t,variant:r,color:a}=e,n={root:["root",`color${(0,$.Z)(a)}`,r],dashed:["dashed",`dashedColor${(0,$.Z)(a)}`],bar1:["bar",`barColor${(0,$.Z)(a)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,$.Z)(a)}`,"buffer"===r&&`color${(0,$.Z)(a)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,l.Z)(n,_,t)},R=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:"light"===e.palette.mode?(0,c.$n)(e.palette[t].main,.62):(0,c._j)(e.palette[t].main,.5),z=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[`color${(0,$.Z)(r.color)}`],t[r.variant]]}})(({ownerState:e,theme:t})=>(0,n.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:R(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),M=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(e,t){let{ownerState:r}=e;return[t.dashed,t[`dashedColor${(0,$.Z)(r.color)}`]]}})(({ownerState:e,theme:t})=>{let r=R(t,e.color);return(0,n.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,s.iv)(j||(j=g`
    animation: ${0} 3s infinite linear;
  `),C)),A=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(e,t){let{ownerState:r}=e;return[t.bar,t[`barColor${(0,$.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})(({ownerState:e,theme:t})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)(y||(y=g`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),w)),I=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(e,t){let{ownerState:r}=e;return[t.bar,t[`barColor${(0,$.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})(({ownerState:e,theme:t})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:R(t,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)(k||(k=g`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),S)),B=i.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiLinearProgress"}),{className:i,color:l="primary",value:s,valueBuffer:c,variant:$="indeterminate"}=r,d=(0,a.Z)(r,v),f=(0,n.Z)({},r,{color:l,variant:$}),p=P(f),_=(0,u.Z)(),g={},b={bar1:{},bar2:{}};if(("determinate"===$||"buffer"===$)&&void 0!==s){g["aria-valuenow"]=Math.round(s),g["aria-valuemin"]=0,g["aria-valuemax"]=100;let x=s-100;"rtl"===_.direction&&(x=-x),b.bar1.transform=`translateX(${x}%)`}if("buffer"===$&&void 0!==c){let Z=(c||0)-100;"rtl"===_.direction&&(Z=-Z),b.bar2.transform=`translateX(${Z}%)`}return(0,m.jsxs)(z,(0,n.Z)({className:(0,o.Z)(p.root,i),ownerState:f,role:"progressbar"},g,{ref:t},d,{children:["buffer"===$?(0,m.jsx)(M,{className:p.dashed,ownerState:f}):null,(0,m.jsx)(A,{className:p.bar1,ownerState:f,style:b.bar1}),"determinate"===$?null:(0,m.jsx)(I,{className:p.bar2,ownerState:f,style:b.bar2})]}))});var T=B},54181:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var a=r(63366),n=r(87462),i=r(67294),o=r(86010),l=r(94780),s=r(41796),c=r(36622),$=r(37743),u=r(78884),d=r(81719),h=r(34867),f=r(1588);function p(e){return(0,h.Z)("MuiSwitch",e)}let _=(0,f.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var m=_,v=r(85893);let g=["className","color","edge","size","sx"],b=e=>{let{classes:t,edge:r,size:a,color:i,checked:o,disabled:s}=e,$={root:["root",r&&`edge${(0,c.Z)(r)}`,`size${(0,c.Z)(a)}`],switchBase:["switchBase",`color${(0,c.Z)(i)}`,o&&"checked",s&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,l.Z)($,p,t);return(0,n.Z)({},t,u)},x=(0,d.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.edge&&t[`edge${(0,c.Z)(r.edge)}`],t[`size${(0,c.Z)(r.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${m.thumb}`]:{width:16,height:16},[`& .${m.switchBase}`]:{padding:4,[`&.${m.checked}`]:{transform:"translateX(16px)"}}})),Z=(0,d.ZP)($.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver(e,t){let{ownerState:r}=e;return[t.switchBase,{[`& .${m.input}`]:t.input},"default"!==r.color&&t[`color${(0,c.Z)(r.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${m.checked}`]:{transform:"translateX(20px)"},[`&.${m.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${m.checked} + .${m.track}`]:{opacity:.5},[`&.${m.disabled} + .${m.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${"light"===e.palette.mode?.12:.2}`},[`& .${m.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>(0,n.Z)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${m.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,s.$n)(e.palette[t.color].main,.62):(0,s._j)(e.palette[t.color].main,.55)}`}},[`&.${m.checked} + .${m.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),j=(0,d.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${"light"===e.palette.mode?.38:.3}`})),y=(0,d.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),k=i.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiSwitch"}),{className:i,color:l="primary",edge:s=!1,size:c="medium",sx:$}=r,d=(0,a.Z)(r,g),h=(0,n.Z)({},r,{color:l,edge:s,size:c}),f=b(h),p=(0,v.jsx)(y,{className:f.thumb,ownerState:h});return(0,v.jsxs)(x,{className:(0,o.Z)(f.root,i),sx:$,ownerState:h,children:[(0,v.jsx)(Z,(0,n.Z)({type:"checkbox",icon:p,checkedIcon:p,ref:t,ownerState:h},d,{classes:(0,n.Z)({},f,{root:f.switchBase})})),(0,v.jsx)(j,{className:f.track,ownerState:h})]})});var w=k},60376:function(e,t,r){"use strict";r(67294);var a=r(54235),n=r(85893);t.Z=(0,a.Z)((0,n.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},79476:function(e,t,r){"use strict";r(67294);var a=r(54235),n=r(85893);t.Z=(0,a.Z)((0,n.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},57598:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/products",function(){return r(90181)}])},46716:function(e,t,r){"use strict";r.d(t,{N:function(){return m}});var a=r(26042),n=r(69396),i=r(99534),o=r(29815),l=r(85893),s=r(67294),c=r(45697),$=r.n(c),u=r(54225),d=r(19117),h=r(31538),f=r(22841),p=r(75158),_=r(5365),m=function(e){var t=e.label,r=e.onChange,c=e.options,$=e.value,m=void 0===$?[]:$,v=(0,i.Z)(e,["label","onChange","options","value"]),g=(0,s.useRef)(null),b=(0,s.useState)(!1),x=b[0],Z=b[1],j=function(){Z(!0)},y=function(){Z(!1)},k=function(e){var t=(0,o.Z)(m);e.target.checked?t.push(e.target.value):t=t.filter(function(t){return t!==e.target.value}),null==r||r(t)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,(0,n.Z)((0,a.Z)({color:"inherit",endIcon:(0,l.jsx)(_._,{fontSize:"small"}),onClick:j,ref:g},v),{children:t})),(0,l.jsx)(d.Z,{anchorEl:g.current,onClose:y,open:x,PaperProps:{style:{width:250}},children:c.map(function(e){return(0,l.jsx)(h.Z,{children:(0,l.jsx)(f.Z,{control:(0,l.jsx)(p.Z,{checked:m.includes(e.value),onChange:k,value:e.value}),label:e.label,sx:{flexGrow:1,mr:0}})},e.label)})})]})};m.propTypes={label:$().string.isRequired,onChange:$().func,options:$().array.isRequired,value:$().array.isRequired}},49208:function(e,t,r){"use strict";r.d(t,{I:function(){return $}});var a=r(26042),n=r(69396),i=r(99534),o=r(85893),l=r(45697),s=r.n(l),c=(0,r(81719).ZP)("span")(function(e){var t,r=e.theme,a=e.ownerState;return{alignItems:"center",backgroundColor:r.palette[a.color].main,borderRadius:12,color:r.palette[a.color].contrastText,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(12),lineHeight:2,fontWeight:600,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingLeft:r.spacing(1),paddingRight:r.spacing(1),textTransform:"uppercase",whiteSpace:"nowrap"}}),$=function(e){var t=e.color,r=e.children,l=(0,i.Z)(e,["color","children"]);return(0,o.jsx)(c,(0,n.Z)((0,a.Z)({ownerState:{color:void 0===t?"primary":t}},l),{children:r}))};$.propTypes={children:s().node,color:s().oneOf(["primary","secondary","error","info","warning","success"])}},46723:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var a=r(67294),n=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,a.useCallback)(function(){return e.current},[])}},88608:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});var a=r(85893),n=(0,r(54235).Z)((0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})}),"DotsHorizontal")},84747:function(e,t,r){"use strict";r.d(t,{U:function(){return n}});var a=r(85893),n=(0,r(54235).Z)((0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},27043:function(e,t,r){"use strict";r.d(t,{E:function(){return n}});var a=r(85893),n=(0,r(54235).Z)((0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})}),"Image")},21392:function(e,t,r){"use strict";r.d(t,{v:function(){return n}});var a=r(85893),n=(0,r(54235).Z)((0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus")},2248:function(e,t,r){"use strict";r.d(t,{g:function(){return n}});var a=r(85893),n=(0,r(54235).Z)((0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")},90181:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return em}});var a=r(47568),n=r(70655),i=r(85893),o=r(67294),l=r(9008),s=r.n(l),c=r(41664),$=r.n(c),u=r(61953),d=r(36336),h=r(79072),f=r(29630),p=r(54225),_=r(49837),m=r(51438),v=r(52951),g=r(7069),b=r(88330),x=new Date,Z=new(function(){function e(){(0,m.Z)(this,e)}return(0,v.Z)(e,[{key:"getProducts",value:function(e){return Promise.resolve([{id:"5ece2c077e39da27658aa8a9",attributes:["Healthcare"],category:"healthcare",createdAt:(0,g.Z)(x,1).getTime(),currency:"$",image:"/static/mock-images/products/product_1.png",inStock:!0,isAvailable:!0,isShippable:!1,name:"Healthcare Erbology",price:23.99,quantity:85,sku:"401_1BBXBK",status:"published",updatedAt:(0,b.Z)(x,6).getTime(),variants:2},{id:"5ece2c0d16f70bff2cf86cd8",attributes:["Makeup"],category:"makeup",createdAt:(0,g.Z)(x,3).getTime(),currency:"$",image:"/static/mock-images/products/product_2.png",inStock:!1,isAvailable:!1,isShippable:!0,name:"Makeup Lancome Rouge",price:95,quantity:0,sku:"978_UBFGJC",status:"published",updatedAt:(0,g.Z)((0,b.Z)(x,8),2).getTime(),variants:1},{id:"5ece2c123fad30cbbff8d060",attributes:["Variety of styles"],category:"jewelry",createdAt:(0,g.Z)(x,6).getTime(),currency:"$",image:null,inStock:!0,isAvailable:!0,isShippable:!1,name:"Layering Bracelets Collection",price:155,quantity:48,sku:"211_QFEXJO",status:"draft",updatedAt:(0,g.Z)((0,b.Z)(x,2),1).getTime(),variants:5},{id:"5ece2c1be7996d1549d94e34",attributes:["Skincare"],category:"skincare",createdAt:(0,g.Z)(x,12).getTime(),currency:"$",image:"/static/mock-images/products/product_4.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Skincare Necessaire",price:17.99,quantity:5,sku:"321_UWEAJT",status:"published",updatedAt:(0,g.Z)((0,b.Z)(x,7),1).getTime(),variants:1},{id:"b393ce1b09c1254c3a92c827",attributes:["Skincare"],category:"skincare",createdAt:(0,g.Z)(x,4).getTime(),currency:"$",image:"/static/mock-images/products/product_5.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Skincare Soja CO",price:65.99,quantity:10,sku:"592_LDKDI",status:"draft",updatedAt:(0,g.Z)((0,b.Z)(x,1),1).getTime(),variants:1},{id:"a6ede15670da63f49f752c89",attributes:["Makeup"],category:"makeup",createdAt:(0,g.Z)(x,6).getTime(),currency:"$",image:"/static/mock-images/products/product_6.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Makeup Lipstick",price:76.99,quantity:22,sku:"324_DKSEKD",status:"draft",updatedAt:(0,g.Z)((0,b.Z)(x,3),3).getTime(),variants:1},{id:"bcad5524fe3a2f8f8620ceda",attributes:["Healthcare"],category:"healthcare",createdAt:(0,g.Z)(x,7).getTime(),currency:"$",image:"/static/mock-images/products/product_7.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Healthcare Ritual",price:115.2,quantity:15,sku:"598_DOKEII",status:"published",updatedAt:(0,g.Z)((0,b.Z)(x,5),6).getTime(),variants:1}])}}]),e}()),j=r(98875),y=r(64527),k=r(26042),w=r(69396),S=r(99534),C=r(29815),P=r(45697),R=r.n(P),z=r(76866),M=r(44373),A=r(21448),I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=(0,o.useRef)(!0);(0,o.useEffect)(function(){if(!r.current)return e();r.current=!1},t)},B=r(97169),T=r(46716),q=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],L=[{label:"Published",value:"published"},{label:"Draft",value:"draft"}],N=[{label:"All",value:"all"},{label:"Available",value:"available"},{label:"Out of Stock",value:"outOfStock"}],E=function(e){var t=e.onChange,r=(0,S.Z)(e,["onChange"]),a=(0,o.useState)(""),n=a[0],l=a[1],s=(0,o.useState)([]),c=s[0],$=s[1];I(function(){var e={name:void 0,category:[],status:[],inStock:void 0};c.forEach(function(t){switch(t.field){case"name":e.name=t.value;break;case"category":e.category.push(t.value);break;case"status":e.status.push(t.value);break;case"inStock":e.inStock="available"===t.value}}),null==t||t(e)},[c]);var d=function(e){$(function(t){return t.filter(function(t){return!(e.field===t.field&&e.value===t.value)})})},h=function(e){l(e.target.value)},p=function(e){"Enter"===e.code&&n&&(c.find(function(e){return"name"===e.field})?$(function(e){return e.map(function(e){return"name"===e.field?(0,w.Z)((0,k.Z)({},e),{value:n}):e})}):$(function(e){return(0,C.Z)(e).concat([{label:"Name",field:"name",value:n}])}),l(""))},_=function(e){$(function(t){var r=[],a=t.filter(function(t){if("category"!==t.field)return!0;var a=e.includes(t.value);return a&&r.push(t.value),a});return e.length===r.length||e.forEach(function(e){if(!r.includes(e)){var t=q.find(function(t){return t.value===e});a.push({label:"Category",field:"category",value:e,displayValue:t.label})}}),a})},m=function(e){$(function(t){var r=[],a=t.filter(function(t){if("status"!==t.field)return!0;var a=e.includes(t.value);return a&&r.push(t.value),a});return e.length===r.length||e.forEach(function(e){if(!r.includes(e)){var t=L.find(function(t){return t.value===e});a.push({label:"Status",field:"status",value:e,displayValue:t.label})}}),a})},v=function(e){$(function(t){var r=t.filter(function(e){return"inStock"!==e.field}),a=e[e.length-1];switch(a){case"available":r.push({label:"Stock",field:"inStock",value:"available",displayValue:"Available"});break;case"outOfStock":r.push({label:"Stock",field:"inStock",value:"outOfStock",displayValue:"Out of Stock"})}return r})},g=(0,o.useMemo)(function(){return c.filter(function(e){return"category"===e.field}).map(function(e){return e.value})},[c]),b=(0,o.useMemo)(function(){return c.filter(function(e){return"status"===e.field}).map(function(e){return e.value})},[c]),x=(0,o.useMemo)(function(){var e=c.filter(function(e){return"inStock"===e.field}).map(function(e){return e.value});return 0===e.length&&e.unshift("all"),e},[c]);return(0,i.jsxs)("div",(0,w.Z)((0,k.Z)({},r),{children:[(0,i.jsxs)(u.Z,{sx:{alignItems:"center",display:"flex",p:2},children:[(0,i.jsx)(B.o,{fontSize:"small"}),(0,i.jsx)(u.Z,{sx:{flexGrow:1,ml:3},children:(0,i.jsx)(z.Z,{disableUnderline:!0,fullWidth:!0,onChange:h,onKeyUp:p,placeholder:"Search by product name",value:n})})]}),(0,i.jsx)(M.Z,{}),c.length>0?(0,i.jsx)(u.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",p:2},children:c.map(function(e,t){return(0,i.jsx)(A.Z,{label:(0,i.jsx)(u.Z,{sx:{alignItems:"center",display:"flex","& span":{fontWeight:600}},children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:e.label}),":"," ",e.displayValue||e.value]})}),onDelete:function(){return d(e)},sx:{m:1},variant:"outlined"},t)})}):(0,i.jsx)(u.Z,{sx:{p:3},children:(0,i.jsx)(f.Z,{color:"textSecondary",variant:"subtitle2",children:"No filters applied"})}),(0,i.jsx)(M.Z,{}),(0,i.jsxs)(u.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",p:1},children:[(0,i.jsx)(T.N,{label:"Category",onChange:_,options:q,value:g}),(0,i.jsx)(T.N,{label:"Status",onChange:m,options:L,value:b}),(0,i.jsx)(T.N,{label:"Stock",onChange:v,options:N,value:x})]})]}))};E.propTypes={onChange:R().func};var D=r(92077),O=r.n(D),V=r(86501),W=r(90244),H=r(93978),F=r(69417),K=r(5605),U=r(39807),X=r(80562),G=r(86070),J=r(91359),Q=r(67836),Y=r(31538),ee=r(9041),et=r(54181),er=r(25650),ea=r(5365),en=r(9952),ei=r(88608),eo=r(27043),el=r(34547),es=r(49208),ec=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],e$=function(e){var t=e.onPageChange,r=e.onRowsPerPageChange,a=e.page,n=e.products,l=e.productsCount,s=e.rowsPerPage,c=(0,S.Z)(e,["onPageChange","onRowsPerPageChange","page","products","productsCount","rowsPerPage"]),$=(0,o.useState)(null),d=$[0],_=$[1],m=function(e){_(function(t){return t===e?null:e})},v=function(){_(null),V.Am.success("Product updated")},g=function(){_(null)},b=function(){V.Am.error("Product cannot be deleted")};return(0,i.jsxs)("div",(0,w.Z)((0,k.Z)({},c),{children:[(0,i.jsx)(el.L,{children:(0,i.jsxs)(W.Z,{sx:{minWidth:1200},children:[(0,i.jsx)(H.Z,{children:(0,i.jsxs)(F.Z,{children:[(0,i.jsx)(K.Z,{}),(0,i.jsx)(K.Z,{width:"25%",children:"Name"}),(0,i.jsx)(K.Z,{width:"25%",children:"Stock"}),(0,i.jsx)(K.Z,{children:"Price"}),(0,i.jsx)(K.Z,{children:"sku"}),(0,i.jsx)(K.Z,{children:"Status"}),(0,i.jsx)(K.Z,{align:"right",children:"Actions"})]})}),(0,i.jsx)(U.Z,{children:n.map(function(e){var t=e.id===d;return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsxs)(F.Z,{hover:!0,children:[(0,i.jsx)(K.Z,{padding:"checkbox",sx:(0,k.Z)({},t&&{position:"relative","&:after":{position:"absolute",content:'" "',top:0,left:0,backgroundColor:"primary.main",width:3,height:"calc(100% + 1px)"}}),width:"25%",children:(0,i.jsx)(X.Z,{onClick:function(){return m(e.id)},children:t?(0,i.jsx)(ea._,{fontSize:"small"}):(0,i.jsx)(en._,{fontSize:"small"})})}),(0,i.jsx)(K.Z,{width:"25%",children:(0,i.jsxs)(u.Z,{sx:{alignItems:"center",display:"flex"},children:[e.image?(0,i.jsx)(u.Z,{sx:{alignItems:"center",backgroundColor:"background.default",backgroundImage:"url(".concat(e.image,")"),backgroundPosition:"center",backgroundSize:"cover",borderRadius:1,display:"flex",height:80,justifyContent:"center",overflow:"hidden",width:80}}):(0,i.jsx)(u.Z,{sx:{alignItems:"center",backgroundColor:"background.default",borderRadius:1,display:"flex",height:80,justifyContent:"center",width:80},children:(0,i.jsx)(eo.E,{fontSize:"small"})}),(0,i.jsxs)(u.Z,{sx:{cursor:"pointer",ml:2},children:[(0,i.jsx)(f.Z,{variant:"subtitle2",children:e.name}),(0,i.jsxs)(f.Z,{color:"textSecondary",variant:"body2",children:["in ",e.category]})]})]})}),(0,i.jsxs)(K.Z,{width:"25%",children:[(0,i.jsx)(G.Z,{value:e.quantity,variant:"determinate",color:e.quantity>=10?"success":"error",sx:{height:8,width:36}}),(0,i.jsxs)(f.Z,{color:"textSecondary",variant:"body2",children:[e.quantity," ","in stock",e.variants>1&&" in ".concat(e.variants," variants")]})]}),(0,i.jsx)(K.Z,{children:O()(e.price).format("".concat(e.currency,"0,0.00"))}),(0,i.jsx)(K.Z,{children:e.sku}),(0,i.jsx)(K.Z,{children:(0,i.jsx)(es.I,{color:"published"===e.status?"success":"info",children:e.status})}),(0,i.jsx)(K.Z,{align:"right",children:(0,i.jsx)(X.Z,{children:(0,i.jsx)(ei.B,{fontSize:"small"})})})]},e.id),t&&(0,i.jsx)(F.Z,{children:(0,i.jsxs)(K.Z,{colSpan:7,sx:{p:0,position:"relative","&:after":{position:"absolute",content:'" "',top:0,left:0,backgroundColor:"primary.main",width:3,height:"calc(100% + 1px)"}},children:[(0,i.jsx)(J.Z,{children:(0,i.jsxs)(h.ZP,{container:!0,spacing:3,children:[(0,i.jsxs)(h.ZP,{item:!0,md:6,xs:12,children:[(0,i.jsx)(f.Z,{variant:"h6",children:"Basic details"}),(0,i.jsx)(M.Z,{sx:{my:2}}),(0,i.jsxs)(h.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(h.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(Q.Z,{defaultValue:e.name,fullWidth:!0,label:"Product name",name:"name"})}),(0,i.jsx)(h.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(Q.Z,{defaultValue:e.sku,disabled:!0,fullWidth:!0,label:"SKU",name:"sku"})}),(0,i.jsx)(h.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(Q.Z,{defaultValue:e.category,fullWidth:!0,label:"Category",select:!0,children:ec.map(function(e){return(0,i.jsx)(Y.Z,{value:e.value,children:e.label},e.value)})})}),(0,i.jsx)(h.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(Q.Z,{defaultValue:e.id,disabled:!0,fullWidth:!0,label:"Barcode",name:"barcode"})})]})]}),(0,i.jsxs)(h.ZP,{item:!0,md:6,xs:12,children:[(0,i.jsx)(f.Z,{variant:"h6",children:"Pricing and stocks"}),(0,i.jsx)(M.Z,{sx:{my:2}}),(0,i.jsxs)(h.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(h.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(Q.Z,{defaultValue:e.price,fullWidth:!0,label:"Old price",name:"old-price",InputProps:{startAdornment:(0,i.jsx)(ee.Z,{position:"start",children:e.currency})},type:"number"})}),(0,i.jsx)(h.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(Q.Z,{defaultValue:e.price,fullWidth:!0,label:"New price",name:"new-price",InputProps:{startAdornment:(0,i.jsx)(ee.Z,{position:"start",children:"$"})},type:"number"})}),(0,i.jsxs)(h.ZP,{item:!0,md:6,xs:12,sx:{alignItems:"center",display:"flex"},children:[(0,i.jsx)(et.Z,{}),(0,i.jsx)(f.Z,{variant:"subtitle2",children:"Keep selling when stock is empty"})]})]})]})]})}),(0,i.jsx)(M.Z,{}),(0,i.jsxs)(u.Z,{sx:{display:"flex",flexWrap:"wrap",px:2,py:1},children:[(0,i.jsx)(p.Z,{onClick:v,sx:{m:1},type:"submit",variant:"contained",children:"Update"}),(0,i.jsx)(p.Z,{onClick:g,sx:{m:1},variant:"outlined",children:"Cancel"}),(0,i.jsx)(p.Z,{onClick:b,color:"error",sx:{m:1,ml:"auto"},children:"Delete product"})]})]})})]},e.id)})})]})}),(0,i.jsx)(er.Z,{component:"div",count:l,onPageChange:t,onRowsPerPageChange:r,page:a,rowsPerPage:s,rowsPerPageOptions:[5,10,25]})]}))};e$.propTypes={products:R().array.isRequired,productsCount:R().number.isRequired,onPageChange:R().func.isRequired,onRowsPerPageChange:R().func,page:R().number.isRequired,rowsPerPage:R().number.isRequired};var eu=r(46723),ed=r(84747),eh=r(2248),ef=r(21392),ep=r(38682),e_=function(){var e=(0,eu.s)(),t=(0,o.useState)([]),r=t[0],l=t[1],c=(0,o.useState)(0),m=c[0],v=c[1],g=(0,o.useState)(5),b=g[0],x=g[1],j=(0,o.useState)({name:void 0,category:[],status:[],inStock:void 0}),y=j[0],k=j[1];(0,o.useEffect)(function(){ep.w.push({event:"page_view"})},[]);var w=(0,o.useCallback)((0,a.Z)(function(){var t,r;return(0,n.__generator)(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,Z.getProducts()];case 1:return t=a.sent(),e()&&l(t),[3,3];case 2:return r=a.sent(),console.error(r),[3,3];case 3:return[2]}})}),[e]);(0,o.useEffect)(function(){w()},[]);var S,C,P,R,z,M=function(e){k(e)},A=function(e,t){v(t)},I=function(e){x(parseInt(e.target.value,10))},B=(S=r,C=y,S.filter(function(e){var t,r;return(!C.name||!!e.name.toLowerCase().includes(C.name.toLowerCase()))&&(!((null===(t=C.category)||void 0===t?void 0:t.length)>0)||!!C.category.includes(e.category))&&(!((null===(r=C.status)||void 0===r?void 0:r.length)>0)||!!C.status.includes(e.status))&&(void 0===C.inStock||e.inStock===C.inStock)})),T=(P=B,R=m,z=b,P.slice(R*z,R*z+z));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{children:(0,i.jsx)("title",{children:"Dashboard: Product List | Material Kit Pro"})}),(0,i.jsx)(u.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,i.jsxs)(d.Z,{maxWidth:"xl",children:[(0,i.jsxs)(u.Z,{sx:{mb:4},children:[(0,i.jsxs)(h.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,i.jsx)(h.ZP,{item:!0,children:(0,i.jsx)(f.Z,{variant:"h4",children:"Products"})}),(0,i.jsx)(h.ZP,{item:!0,children:(0,i.jsx)($(),{href:"/dashboard/products/new",passHref:!0,children:(0,i.jsx)(p.Z,{component:"a",startIcon:(0,i.jsx)(ef.v,{fontSize:"small"}),variant:"contained",children:"Add"})})})]}),(0,i.jsxs)(u.Z,{sx:{m:-1,mt:3},children:[(0,i.jsx)(p.Z,{startIcon:(0,i.jsx)(eh.g,{fontSize:"small"}),sx:{m:1},children:"Import"}),(0,i.jsx)(p.Z,{startIcon:(0,i.jsx)(ed.U,{fontSize:"small"}),sx:{m:1},children:"Export"})]})]}),(0,i.jsxs)(_.Z,{children:[(0,i.jsx)(E,{onChange:M}),(0,i.jsx)(e$,{onPageChange:A,onRowsPerPageChange:I,page:m,products:T,productsCount:B.length,rowsPerPage:b})]})]})})]})};e_.getLayout=function(e){return(0,i.jsx)(j.a,{children:(0,i.jsx)(y.c,{children:e})})};var em=e_}},function(e){e.O(0,[7760,8576,7836,4054,9072,2251,3837,7998,5720,5354,7413,2077,3418,4298,8848,9774,2888,179],function(){return e(e.s=57598)}),_N_E=e.O()}]);