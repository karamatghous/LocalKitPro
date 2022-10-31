(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{91359:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(87462),o=r(63366),i=r(67294),n=r(86010),s=r(94780),l=r(81719),$=r(78884),d=r(34867),c=r(1588);function _(e){return(0,d.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var h=r(85893);let u=["className","component"],x=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},_,t)},p=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=i.forwardRef(function(e,t){let r=(0,$.Z)({props:e,name:"MuiCardContent"}),{className:i,component:s="div"}=r,l=(0,o.Z)(r,u),d=(0,a.Z)({},r,{component:s}),c=x(d);return(0,h.jsx)(p,(0,a.Z)({as:s,className:(0,n.Z)(c.root,i),ownerState:d,ref:t},l))});var m=f},44373:function(e,t,r){"use strict";var a=r(63366),o=r(87462),i=r(67294),n=r(86010),s=r(94780),l=r(41796),$=r(81719),d=r(78884),c=r(75741),_=r(85893);let h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],u=e=>{let{absolute:t,children:r,classes:a,flexItem:o,light:i,orientation:n,textAlign:l,variant:$}=e;return(0,s.Z)({root:["root",t&&"absolute",$,i&&"light","vertical"===n&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===n&&"withChildrenVertical","right"===l&&"vertical"!==n&&"textAlignRight","left"===l&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]},c.V,a)},x=(0,$.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),p=(0,$.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver(e,t){let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),f=i.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:l,component:$=s?"div":"hr",flexItem:c=!1,light:f=!1,orientation:m="horizontal",role:g="hr"!==$?"separator":void 0,textAlign:b="center",variant:v="fullWidth"}=r,Z=(0,a.Z)(r,h),j=(0,o.Z)({},r,{absolute:i,component:$,flexItem:c,light:f,orientation:m,role:g,textAlign:b,variant:v}),w=u(j);return(0,_.jsx)(x,(0,o.Z)({as:$,className:(0,n.Z)(w.root,l),role:g,ref:t,ownerState:j},Z,{children:s?(0,_.jsx)(p,{className:w.wrapper,ownerState:j,children:s}):null}))});t.Z=f},75741:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var a=r(34867),o=r(1588);function i(e){return(0,a.Z)("MuiDivider",e)}let n=(0,o.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=n},19594:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var a=r(63366),o=r(87462),i=r(67294),n=r(86010),s=r(94780),l=r(57742),$=r(81719),d=r(78884),c=r(34867),_=r(1588);function h(e){return(0,c.Z)("MuiListItemAvatar",e)}(0,_.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var u=r(85893);let x=["className"],p=e=>{let{alignItems:t,classes:r}=e;return(0,s.Z)({root:["root","flex-start"===t&&"alignItemsFlexStart"]},h,r)},f=(0,$.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})(({ownerState:e})=>(0,o.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})),m=i.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiListItemAvatar"}),{className:s}=r,$=(0,a.Z)(r,x),c=i.useContext(l.Z),_=(0,o.Z)({},r,{alignItems:c.alignItems}),h=p(_);return(0,u.jsx)(f,(0,o.Z)({className:(0,n.Z)(h.root,s),ownerState:_,ref:t},$))});var g=m},85214:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var a=r(63366),o=r(87462),i=r(67294),n=r(86010),s=r(94780),l=r(81719),$=r(78884),d=r(57742),c=r(34867),_=r(1588);function h(e){return(0,c.Z)("MuiList",e)}(0,_.Z)("MuiList",["root","padding","dense","subheader"]);var u=r(85893);let x=["children","className","component","dense","disablePadding","subheader"],p=e=>{let{classes:t,disablePadding:r,dense:a,subheader:o}=e;return(0,s.Z)({root:["root",!r&&"padding",a&&"dense",o&&"subheader"]},h,t)},f=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,!r.disablePadding&&t.padding,r.dense&&t.dense,r.subheader&&t.subheader]}})(({ownerState:e})=>(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),m=i.forwardRef(function(e,t){let r=(0,$.Z)({props:e,name:"MuiList"}),{children:s,className:l,component:c="ul",dense:_=!1,disablePadding:h=!1,subheader:m}=r,g=(0,a.Z)(r,x),b=i.useMemo(()=>({dense:_}),[_]),v=(0,o.Z)({},r,{component:c,dense:_,disablePadding:h}),Z=p(v);return(0,u.jsx)(d.Z.Provider,{value:b,children:(0,u.jsxs)(f,(0,o.Z)({as:c,className:(0,n.Z)(Z.root,l),ref:t,ownerState:v},g,{children:[m,s]}))})});var g=m},57742:function(e,t,r){"use strict";var a=r(67294);let o=a.createContext({});t.Z=o},7335:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(67294),o=function(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},8659:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/browse/charts",function(){return r(16636)}])},37846:function(e,t,r){"use strict";r.d(t,{k:function(){return o}});var a=r(5152),o=r.n(a)()(function(){return Promise.all([r.e(5279),r.e(7229)]).then(r.bind(r,47229))},{loadableGenerated:{webpack:function(){return[47229]}},ssr:!1,loading:function(){return null}})},34547:function(e,t,r){"use strict";r.d(t,{L:function(){return c}});var a=r(26042),o=r(7297),i=r(85893);r(3522);var n=r(67294),s=r(40077),l=r(81719);function $(){var e=(0,o.Z)([""]);return $=function(){return e},e}var d=(0,l.ZP)(s.Z)($()),c=(0,n.forwardRef)(function(e,t){return(0,i.jsx)(d,(0,a.Z)({ref:t},e))})},29961:function(e,t,r){"use strict";r.d(t,{h:function(){return b}});var a=r(26042),o=r(69396),i=r(99534),n=r(85893),s=r(67294),l=r(45697),$=r.n(l),d=r(49837),c=r(59742),_=r(80562),h=r(44373),u=r(71927),x=r(92268),p=r(54235),f=(0,p.Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),"Moon"),m=(0,p.Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),"Sun"),g=r(60538),b=function(e){var t=e.element,r=e.name,l=(0,i.Z)(e,["element","name"]),$=(0,x.r)().settings,p=(0,s.useState)($.theme),b=p[0],v=p[1];(0,s.useEffect)(function(){v($.theme)},[$.theme]);var Z=function(){v(function(e){return"light"===e?"dark":"light"})},j=(0,g.j)((0,o.Z)((0,a.Z)({},$),{mode:b}));return(0,n.jsxs)(d.Z,(0,o.Z)((0,a.Z)({variant:"outlined",sx:{mb:8}},l),{children:[(0,n.jsx)(c.Z,{action:(0,n.jsx)(_.Z,{onClick:Z,children:"light"===b?(0,n.jsx)(f,{fontSize:"small"}):(0,n.jsx)(m,{fontSize:"small"})}),title:r}),(0,n.jsx)(h.Z,{}),(0,n.jsx)(u.Z,{theme:j,children:t})]}))};b.propTypes={element:$().node.isRequired,name:$().string.isRequired}},46723:function(e,t,r){"use strict";r.d(t,{s:function(){return o}});var a=r(67294),o=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,a.useCallback)(function(){return e.current},[])}},18785:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var a=r(85893),o=(0,r(54235).Z)((0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight")},88608:function(e,t,r){"use strict";r.d(t,{B:function(){return o}});var a=r(85893),o=(0,r(54235).Z)((0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})}),"DotsHorizontal")},41880:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var a=r(85893),o=(0,r(54235).Z)((0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"InformationCircleOutlined")},16636:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return er}});var a=r(85893),o=r(67294),i=r(9008),n=r.n(i),s=r(61953),l=r(36336),$=r(45982),d=r(8316),c=r(29961),_=r(49837),h=r(59742),u=r(91359),x=r(62097),p=r(37846),f=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",toolbar:{show:!1}},colors:["#13affe","#fbab49"],dataLabels:{enabled:!1},fill:{opacity:1},grid:{borderColor:e.palette.divider,yaxis:{lines:{show:!1}}},legend:{labels:{colors:e.palette.text.secondary},show:!0},plotOptions:{bar:{columnWidth:"40%"}},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{show:!0,color:e.palette.divider},axisTicks:{show:!0,color:e.palette.divider},categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],labels:{style:{colors:e.palette.text.secondary}}},yaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},labels:{style:{colors:e.palette.text.secondary}}}};return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{title:"Sales"}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(p.k,{height:300,options:t,series:[{data:[30,40,25,50,49,21,70,51],name:"This week"},{data:[23,12,54,61,32,56,81,19],name:"Last week"}],type:"bar"})})]})})},m=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:["#1f87e6","#ff5c7c"],dataLabels:{enabled:!1},fill:{opacity:1},grid:{borderColor:e.palette.divider,yaxis:{lines:{show:!1}}},legend:{horizontalAlign:"right",labels:{colors:e.palette.text.secondary},position:"top",show:!0},markers:{hover:{size:void 0,sizeOffset:2},radius:2,shape:"circle",size:4,strokeColors:["#1f87e6","#27c6db"],strokeWidth:0},stroke:{curve:"smooth",dashArray:[0,3],lineCap:"butt",width:3},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider},axisTicks:{color:e.palette.divider,show:!0},categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"],labels:{style:{colors:e.palette.text.secondary}}},yaxis:[{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},labels:{style:{colors:e.palette.text.secondary}}},{axisTicks:{color:e.palette.divider,show:!0},axisBorder:{color:e.palette.divider,show:!0},labels:{style:{colors:e.palette.text.secondary}},opposite:!0}]};return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{title:"Widget25"}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(p.k,{height:300,options:t,series:[{data:[3350,1840,2254,5780,9349,5241,2770,2051,3764,2385,5912,8323],name:"Page Views"},{data:[35,41,62,42,13,18,29,37,36,51,32,35],name:"Session Duration"}],type:"line"})})]})})},g=r(29630),b=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:["#27c6db"],fill:{opacity:1},labels:["System Health"],plotOptions:{radialBar:{dataLabels:{name:{color:e.palette.text.primary,fontFamily:e.typography.fontFamily},value:{color:e.palette.text.secondary}},hollow:{size:"60%"},track:{background:e.palette.background.default}}},theme:{mode:e.palette.mode}};return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsx)(l.Z,{maxWidth:"sm",children:(0,a.jsx)(_.Z,{children:(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(p.k,{height:300,options:t,series:[83],type:"radialBar"}),(0,a.jsx)(g.Z,{align:"center",color:"textSecondary",component:"p",variant:"caption",children:"This shouldn't be bellow 80%"})]})})})})},v=r(80562),Z=r(44373),j=r(88608),w=r(34547),y={series:[{data:[10,5,11,20,13,28,18,4,13,12,13,5]}],categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},k=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:["#00ab57"],dataLabels:{enabled:!1},fill:{gradient:{opacityFrom:.4,opacityTo:.1,shadeIntensity:1,stops:[0,100],type:"vertical"},type:"gradient"},grid:{borderColor:e.palette.divider,strokeDashArray:2},markers:{size:6,strokeColors:e.palette.background.default,strokeWidth:3},stroke:{curve:"smooth"},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:y.categories,labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:function(e){return e>0?"".concat(e,"K"):"".concat(e)},offsetX:-10,style:{colors:e.palette.text.secondary}}}},r=y.series;return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{action:(0,a.jsx)(v.Z,{children:(0,a.jsx)(j.B,{fontSize:"small"})}),title:"Performance Over Time"}),(0,a.jsx)(Z.Z,{}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(w.L,{children:(0,a.jsx)(s.Z,{sx:{height:375,minWidth:500,position:"relative"},children:(0,a.jsx)(p.k,{height:350,options:t,series:r,type:"area"})})})})]})})},C=r(29815),S=r(85214),M=r(80748),B=r(61702),T=r(54225),z=r(46723),L=r(18785),R=function(){var e=(0,z.s)(),t=(0,x.Z)(),r=(0,o.useState)([163,166,161,159,99,163,173,166,167,183,176,172]),i=r[0],n=r[1],$=(0,o.useCallback)(function(){e()&&n(function(e){var t=(0,C.Z)(e);return t.shift(),t.push(0),t}),setTimeout(function(){e()&&n(function(e){var t=(0,C.Z)(e),r=100,a=200,o=(r=Math.ceil(r),Math.floor(Math.random()*((a=Math.floor(a))-r+1))+r);return t.pop(),t.push(o),t})},500)},[e]);(0,o.useEffect)(function(){setInterval(function(){return $()},2e3)},[$]);var d=i.map(function(e,t){return t}),c={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:["#688dff"],dataLabels:{enabled:!1},fill:{opacity:1},grid:{show:!1},legend:{show:!1},plotOptions:{bar:{columnWidth:"40"}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:t.palette.mode},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},categories:d,labels:{show:!1}},yaxis:{labels:{show:!1}}};return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsx)(l.Z,{maxWidth:"sm",children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{disableTypography:!0,title:(0,a.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(g.Z,{variant:"h6",children:"Active users"}),(0,a.jsx)(g.Z,{color:"textSecondary",variant:"body2",children:"Page views per second"})]}),(0,a.jsx)(g.Z,{variant:"h6",children:0===i[i.length-1]?i[i.length-2]:i[i.length-1]})]})}),(0,a.jsx)(p.k,{height:200,options:c,series:[{data:i}],type:"bar"}),(0,a.jsx)(S.Z,{children:[{pathname:"/projects",views:"24"},{pathname:"/chat",views:"21"},{pathname:"/cart",views:"15"},{pathname:"/checkout",views:"8"}].map(function(e){return(0,a.jsxs)(M.ZP,{divider:!0,children:[(0,a.jsx)(B.Z,{primary:e.pathname,primaryTypographyProps:{color:"textSecondary",variant:"body2"}}),(0,a.jsx)(g.Z,{variant:"subtitle2",children:e.views})]},e.pathname)})}),(0,a.jsx)(s.Z,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:(0,a.jsx)(T.Z,{endIcon:(0,a.jsx)(L.o,{fontSize:"small"}),size:"small",children:"See All"})})]})})})},A=r(41796),J={series:[{data:[18,16,5,8,3,14,14,16,17,19,18,20]},{data:[12,11,4,6,2,9,9,10,11,12,13,13]}],categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},I=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:["#00ab57",(0,A.Fq)("#00ab57",.25)],dataLabels:{enabled:!1},fill:{opacity:1},grid:{borderColor:e.palette.divider,strokeDashArray:2},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"20px"}},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:J.categories,labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:function(e){return e>0?"".concat(e,"K"):"".concat(e)},offsetX:-10,style:{colors:e.palette.text.secondary}}}},r=J.series;return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{action:(0,a.jsx)(v.Z,{children:(0,a.jsx)(j.B,{fontSize:"small"})}),title:"Financial Stats"}),(0,a.jsx)(w.L,{children:(0,a.jsx)(s.Z,{sx:{minWidth:700,px:2},children:(0,a.jsx)(p.k,{height:375,options:t,series:r,type:"bar"})})})]})})},W=r(72389),F=r(75158),N=r(41880),O={series:[{color:"#4CAF50",data:[3350,1840,2254,5780,9349,5241,2770,2051,3764,2385,5912,8323],name:"Organic"},{color:"#FF9800",data:[35,41,62,42,13,18,29,37,36,51,32,35],name:"Referral"},{color:"#F44336",data:[100,122,50,300,250,400,312,200,10,60,90,400],name:"Social Media"}],xaxis:{dataPoints:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]}},P=function(){var e=(0,x.Z)(),t=(0,o.useState)(["Organic","Referral","Social Media"]),r=t[0],i=t[1],n=function(e,t){e.target.checked?i((0,C.Z)(r).concat([t])):i(r.filter(function(e){return e!==t}))},l=O.series.filter(function(e){return r.includes(e.name)}),$={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:l.map(function(e){return e.color}),dataLabels:{enabled:!1},fill:{opacity:1},grid:{borderColor:e.palette.divider,yaxis:{lines:{show:!1}}},legend:{show:!1},markers:{hover:{size:void 0,sizeOffset:2},radius:2,shape:"circle",size:4,strokeWidth:0},stroke:{curve:"smooth",lineCap:"butt",width:3},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider},axisTicks:{color:e.palette.divider,show:!0},categories:O.xaxis.dataPoints,labels:{style:{colors:e.palette.text.secondary}}},yaxis:[{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},labels:{style:{colors:e.palette.text.secondary}}},{axisTicks:{color:e.palette.divider,show:!0},axisBorder:{color:e.palette.divider,show:!0},labels:{style:{colors:e.palette.text.secondary}},opposite:!0}]};return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{disableTypography:!0,title:(0,a.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(g.Z,{variant:"h6",children:"Traffic Sources"}),(0,a.jsx)(W.Z,{title:"Chart 7 Source by channel",children:(0,a.jsx)(N.C,{fontSize:"small"})})]})}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(s.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap"},children:O.series.map(function(e){return(0,a.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",mr:2},children:[(0,a.jsx)(F.Z,{checked:r.some(function(t){return t===e.name}),onChange:function(t){return n(t,e.name)}}),(0,a.jsx)(s.Z,{sx:{backgroundColor:e.color,borderRadius:"50%",height:8,ml:1,mr:2,width:8}}),(0,a.jsx)(g.Z,{variant:"subtitle2",children:e.name})]},e.name)})}),(0,a.jsx)(p.k,{height:350,options:$,series:l,type:"line"})]})]})})},D=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.light,e.palette.warning.light,e.palette.success.light,e.palette.info.light,"#455a64"],dataLabels:{enabled:!1},fill:{opacity:1},labels:["Linkedin","Facebook","Instagram","Twitter","Other"],legend:{labels:{colors:e.palette.text.secondary},show:!0},stroke:{width:0},theme:{mode:e.palette.mode}};return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsx)(l.Z,{maxWidth:"sm",children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{disableTypography:!0,title:(0,a.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(g.Z,{variant:"h6",children:"Social Media Sources"}),(0,a.jsx)(W.Z,{title:"Traffic by Social Media platforms",children:(0,a.jsx)(N.C,{fontSize:"small"})})]})}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(p.k,{height:300,options:t,series:[10,10,20,10,70],type:"donut"}),(0,a.jsx)(s.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,a.jsx)(T.Z,{endIcon:(0,a.jsx)(L.o,{fontSize:"small"}),children:"See all"})})]})]})})})},E=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:["#ffb547","#7783DB"],dataLabels:{enabled:!1},fill:{type:"solid",opacity:0},grid:{borderColor:e.palette.divider},markers:{strokeColors:e.palette.background.paper,size:6},stroke:{curve:"straight",width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}};return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{title:"Sales Revenue"}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(p.k,{height:360,options:t,series:[{name:"New Customers",data:[31,40,28,51,42,109,100,120,80,42,90,140]},{name:"Up/Cross-Selling",data:[11,32,45,32,34,52,41,80,96,140,30,100]}],type:"area"})})]})})},V=r(92077),G=r.n(V),X={series:[{color:"#FFB547",data:14859,label:"Strategy"},{color:"#7BC67E",data:35690,label:"Outsourcing"},{color:"#7783DB",data:45120,label:"Marketing"}]},H=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:X.series.map(function(e){return e.color}),dataLabels:{enabled:!1},fill:{opacity:1},labels:X.series.map(function(e){return e.label}),legend:{show:!1},stroke:{colors:[e.palette.background.paper],width:1},theme:{mode:e.palette.mode}},r=X.series.map(function(e){return e.data});return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsx)(l.Z,{maxWidth:"md",children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{title:"Cost Breakdown"}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(p.k,{height:260,options:t,series:r,type:"pie"}),X.series.map(function(e){return(0,a.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",p:1},children:[(0,a.jsx)(s.Z,{sx:{backgroundColor:e.color,borderRadius:"50%",height:8,width:8}}),(0,a.jsx)(g.Z,{sx:{ml:2},variant:"subtitle2",children:e.label}),(0,a.jsx)(s.Z,{sx:{flexGrow:1}}),(0,a.jsx)(g.Z,{color:"textSecondary",variant:"subtitle2",children:G()(e.data).format("$0,0.00")})]},e.label)})]})]})})})},q={series:[{color:"#7783DB",category:"Email",data:37530},{color:"#7BC67E",category:"GDN",data:52717},{color:"#FFB547",category:"Instagram",data:62935},{color:"#F06191",category:"Facebook",data:90590},{color:"#64B6F7",category:"Google Ads Search",data:13219}]},K=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:q.series.map(function(e){return e.color}),dataLabels:{enabled:!1},fill:{opacity:1},grid:{borderColor:e.palette.divider,yaxis:{lines:{show:!1}}},legend:{show:!1},plotOptions:{bar:{horizontal:!0,barHeight:"45",distributed:!0}},theme:{mode:e.palette.mode},tooltip:{y:{formatter:function(e){return G()(e).format("$0,0.00")}}},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:q.series.map(function(e){return e.category})},yaxis:{labels:{show:!1}}},r=[{data:q.series.map(function(e){return e.data}),name:"Sales"}];return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsx)(l.Z,{maxWidth:"md",children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{title:"Incremental Sales"}),(0,a.jsxs)(u.Z,{children:[q.series.map(function(e){return(0,a.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",p:1},children:[(0,a.jsx)(s.Z,{sx:{backgroundColor:e.color,borderRadius:"50%",height:8,width:8}}),(0,a.jsx)(g.Z,{sx:{ml:2},variant:"subtitle2",children:e.category})]},e.category)}),(0,a.jsx)(p.k,{height:350,options:t,series:r,type:"bar"})]})]})})})},Y=r(32912),U={series:[{data:[12,24,36,48,60,72,84]},{data:[12,24,36,48,60,72,84]},{data:[12,24,36,48,60,72,84]}],categories:["Capital One","Ally Bank","ING","Ridgewood","BT Transilvania","CEC","CBC"]},Q=function(){var e=(0,x.Z)(),t={chart:{background:"transparent",stacked:!0,toolbar:{show:!1}},colors:["#3C4693","#5664D2","#7783DB"],dataLabels:{enabled:!1},fill:{opacity:1},grid:{borderColor:e.palette.divider,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},legend:{show:!1},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},categories:U.categories,labels:{style:{colors:e.palette.text.secondary}}},yaxis:{labels:{offsetX:-12,style:{colors:e.palette.text.secondary}}}},r=U.series;return(0,a.jsx)(s.Z,{sx:{backgroundColor:"background.default",p:3},children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)(h.Z,{subheader:(0,a.jsx)(g.Z,{color:"textSecondary",variant:"body2",children:(0,Y.Z)(new Date,"MMM yyyy")}),title:"Total Transactions"}),(0,a.jsx)(w.L,{children:(0,a.jsx)(s.Z,{sx:{height:336,minWidth:500,px:2},children:(0,a.jsx)(p.k,{height:300,options:t,series:r,type:"bar"})})})]})})},ee=r(38682),et=function(){return(0,o.useEffect)(function(){ee.w.push({event:"page_view"})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n(),{children:(0,a.jsx)("title",{children:"Browse: Charts | Material Kit Pro"})}),(0,a.jsx)(s.Z,{component:"main",sx:{backgroundColor:"background.paper",flexGrow:1,py:8},children:(0,a.jsx)(l.Z,{maxWidth:"lg",children:(0,a.jsxs)(s.Z,{sx:{mt:3},children:[(0,a.jsx)(c.h,{element:(0,a.jsx)(f,{}),name:"Chart 1"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(m,{}),name:"Chart 2"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(b,{}),name:"Chart 3"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(k,{}),name:"Chart 4"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(R,{}),name:"Chart 5"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(I,{}),name:"Chart 6"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(P,{}),name:"Chart 7"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(D,{}),name:"Chart 8"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(E,{}),name:"Chart 9"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(H,{}),name:"Chart 10"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(K,{}),name:"Chart 11"}),(0,a.jsx)(c.h,{element:(0,a.jsx)(Q,{}),name:"Chart 12"})]})})})]})};et.getLayout=function(e){return(0,a.jsx)(d.Z,{children:(0,a.jsx)($.T,{children:e})})};var er=et}},function(e){e.O(0,[7760,4054,9072,2251,3837,2077,2248,3134,9774,2888,179],function(){return e(e.s=8659)}),_N_E=e.O()}]);