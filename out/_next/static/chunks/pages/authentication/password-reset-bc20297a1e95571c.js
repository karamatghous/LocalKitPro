(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7462],{44373:function(e,r,t){"use strict";var i=t(63366),n=t(87462),a=t(67294),s=t(86010),o=t(94780),l=t(41796),c=t(81719),d=t(78884),u=t(75741),h=t(85893);let $=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=e=>{let{absolute:r,children:t,classes:i,flexItem:n,light:a,orientation:s,textAlign:l,variant:c}=e;return(0,o.Z)({root:["root",r&&"absolute",c,a&&"light","vertical"===s&&"vertical",n&&"flexItem",t&&"withChildren",t&&"vertical"===s&&"withChildrenVertical","right"===l&&"vertical"!==s&&"textAlignRight","left"===l&&"vertical"!==s&&"textAlignLeft"],wrapper:["wrapper","vertical"===s&&"wrapperVertical"]},u.V,i)},p=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,t.absolute&&r.absolute,r[t.variant],t.light&&r.light,"vertical"===t.orientation&&r.vertical,t.flexItem&&r.flexItem,t.children&&r.withChildren,t.children&&"vertical"===t.orientation&&r.withChildrenVertical,"right"===t.textAlign&&"vertical"!==t.orientation&&r.textAlignRight,"left"===t.textAlign&&"vertical"!==t.orientation&&r.textAlignLeft]}})(({theme:e,ownerState:r})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(e.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:r})=>(0,n.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:r})=>(0,n.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),m=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver(e,r){let{ownerState:t}=e;return[r.wrapper,"vertical"===t.orientation&&r.wrapperVertical]}})(({theme:e,ownerState:r})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===r.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),x=a.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:o,className:l,component:c=o?"div":"hr",flexItem:u=!1,light:x=!1,orientation:g="horizontal",role:v="hr"!==c?"separator":void 0,textAlign:b="center",variant:_="fullWidth"}=t,w=(0,i.Z)(t,$),j=(0,n.Z)({},t,{absolute:a,component:c,flexItem:u,light:x,orientation:g,role:v,textAlign:b,variant:_}),y=f(j);return(0,h.jsx)(p,(0,n.Z)({as:c,className:(0,s.Z)(y.root,l),role:v,ref:r,ownerState:j},w,{children:o?(0,h.jsx)(m,{className:y.wrapper,ownerState:j,children:o}):null}))});r.Z=x},75741:function(e,r,t){"use strict";t.d(r,{V:function(){return a}});var i=t(34867),n=t(1588);function a(e){return(0,i.Z)("MuiDivider",e)}let s=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);r.Z=s},17247:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/password-reset",function(){return t(77042)}])},88986:function(e,r,t){"use strict";t.d(r,{U:function(){return $}});var i=t(85893),n=t(41664),a=t.n(n),s=t(61953),o=t(36336),l=t(21448),c=t(29630),d=t(68346),u=t(72389),h={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"},$=function(){return(0,i.jsx)(s.Z,{sx:{backgroundColor:"background.paper",borderBottom:1,borderColor:"divider",py:1},children:(0,i.jsx)(o.Z,{maxWidth:"md",children:(0,i.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,i.jsx)(l.Z,{color:"primary",label:"NEW",sx:{mr:2},size:"small"}),(0,i.jsxs)(c.Z,{variant:"subtitle2",children:["Visit our"," ",(0,i.jsx)(a(),{href:"/docs/welcome",passHref:!0,children:(0,i.jsx)(d.Z,{variant:"subtitle2",children:"docs"})})," ","and find out how to switch between"]}),(0,i.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex","& img":{height:30,m:1}},children:[(0,i.jsx)(u.Z,{title:"Amplify",children:(0,i.jsx)("img",{alt:"Amplify",src:h.Amplify})}),(0,i.jsx)(u.Z,{title:"Auth0",children:(0,i.jsx)("img",{alt:"Auth0",src:h.Auth0})}),(0,i.jsx)(u.Z,{title:"Firebase",children:(0,i.jsx)("img",{alt:"Firebase",src:h.Firebase})}),(0,i.jsx)(u.Z,{title:"JSON Web Token",children:(0,i.jsx)("img",{alt:"JWT",src:h.JWT})})]})]})})})}},33149:function(e,r,t){"use strict";t.d(r,{A:function(){return c}});var i=t(85893),n=t(67294),a=t(11163),s=t(45697),o=t.n(s),l=t(89731),c=function(e){var r=e.children,t=(0,l.a)(),s=(0,a.useRouter)(),o=(0,n.useState)(!1),c=o[0],d=o[1],u=s.query.disableGuard;return((0,n.useEffect)(function(){s.isReady&&(t.isAuthenticated&&"true"!==u?s.push("/dashboard").catch(console.error):d(!0))},[s.isReady]),c)?(0,i.jsx)(i.Fragment,{children:r}):null};c.propTypes={children:o().node}},89731:function(e,r,t){"use strict";t.d(r,{a:function(){return a}});var i=t(67294),n=t(37411),a=function(){return(0,i.useContext)(n.Vo)}},46723:function(e,r,t){"use strict";t.d(r,{s:function(){return n}});var i=t(67294),n=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,i.useCallback)(function(){return e.current},[])}},77042:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return I}});var i=t(85893),n=t(67294),a=t(9008),s=t.n(a),o=t(41664),l=t.n(o),c=t(11163),d=t(61953),u=t(36336),h=t(29630),$=t(49837),f=t(44373),p=t(68346),m=t(33149),x=t(88986),g=t(47568),v=t(26042),b=t(69396),_=t(70655),w=t(74231),j=t(82175),y=t(67836),Z=t(32631),C=t(54225),A=t(89731),R=t(46723),W=function(e){var r,t=(0,R.s)(),a=(0,A.a)().passwordReset,s=(0,c.useRouter)(),o=(0,n.useRef)([]),l=(0,n.useState)(""),u=l[0],$=l[1],f=(0,j.TA)({enableReinitialize:!0,initialValues:{code:["","","","","",""],email:u,password:"",passwordConfirm:"",submit:null},validationSchema:w.Ry({code:w.IX().of(w.Z_().required("Code is required")),email:w.Z_().email("Must be a valid email").max(255).required("Email is required"),password:w.Z_().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:w.Z_().oneOf([w.iH("password"),null],"Passwords must match").required("Required")}),onSubmit:(r=(0,g.Z)(function(e,r){var i,n,o;return(0,_.__generator)(this,function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,a(e.email,e.code.join(""),e.password)];case 1:return l.sent(),t()&&s.push("/authentication/login").catch(console.error),[3,3];case 2:return i=l.sent(),console.error(i),n={},o={},t()&&(r.setStatus((n.success=!1,n)),r.setErrors((o.submit=i.message,o)),r.setSubmitting(!1)),[3,3];case 3:return[2]}})}),function(e,t){return r.apply(this,arguments)})});(0,n.useEffect)(function(){o.current=o.current.slice(0,6);var e=sessionStorage.getItem("username");e&&$(e)},[]);var p=function(e,r){if("Enter"===e.code){if(f.values.code[r]){f.setFieldValue("code[".concat(r,"]"),"");return}if(r>0){f.setFieldValue("code[".concat(r,"]"),""),o.current[r-1].focus();return}}Number.isInteger(parseInt(e.key,10))&&(f.setFieldValue("code[".concat(r,"]"),e.key),r<5&&o.current[r+1].focus())},m=function(e){var r=e.clipboardData.getData("text").split("");if(6===r.length){var t=!0;r.forEach(function(e){Number.isInteger(parseInt(e,10))||(t=!1)}),t&&(f.setFieldValue("code",r),o.current[5].focus())}};return(0,i.jsxs)("form",(0,b.Z)((0,v.Z)({noValidate:!0,onSubmit:f.handleSubmit},e),{children:[u?(0,i.jsx)(y.Z,{disabled:!0,fullWidth:!0,margin:"normal",value:u}):(0,i.jsx)(y.Z,{autoFocus:!0,error:Boolean(f.touched.email&&f.errors.email),fullWidth:!0,helperText:f.touched.email&&f.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:f.handleBlur,onChange:f.handleChange,type:"email",value:f.values.email}),(0,i.jsx)(h.Z,{color:"textSecondary",sx:{mb:2,mt:3},variant:"subtitle2",children:"Verification code"}),(0,i.jsx)(d.Z,{sx:{columnGap:"16px",display:"grid",gridTemplateColumns:"repeat(7, 1fr)",py:1},children:[1,2,3,4,5,6].map(function(e,r){return(0,i.jsx)(y.Z,{error:Boolean(Array.isArray(f.touched.code)&&6===f.touched.code.length&&f.errors.code),fullWidth:!0,inputRef:function(e){return o.current[r]=e},name:"code[".concat(r,"]"),onBlur:f.handleBlur,onKeyDown:function(e){return p(e,r)},onPaste:m,value:f.values.code[r],sx:{display:"inline-block",textAlign:"center","& .MuiInputBase-input":{textAlign:"center"}}},"code-".concat(r))})}),Boolean(Array.isArray(f.touched.code)&&6===f.touched.code.length&&f.errors.code)&&(0,i.jsx)(Z.Z,{error:!0,sx:{mx:"14px"},children:Array.isArray(f.errors.code)&&f.errors.code.find(function(e){return void 0!==e})}),(0,i.jsx)(y.Z,{error:Boolean(f.touched.password&&f.errors.password),fullWidth:!0,helperText:f.touched.password&&f.errors.password,label:"Password",margin:"normal",name:"password",onBlur:f.handleBlur,onChange:f.handleChange,type:"password",value:f.values.password}),(0,i.jsx)(y.Z,{error:Boolean(f.touched.passwordConfirm&&f.errors.passwordConfirm),fullWidth:!0,helperText:f.touched.passwordConfirm&&f.errors.passwordConfirm,label:"Password Confirmation",margin:"normal",name:"passwordConfirm",onBlur:f.handleBlur,onChange:f.handleChange,type:"password",value:f.values.passwordConfirm}),f.errors.submit&&(0,i.jsx)(d.Z,{sx:{mt:3},children:(0,i.jsx)(Z.Z,{error:!0,children:f.errors.submit})}),(0,i.jsx)(d.Z,{sx:{mt:3},children:(0,i.jsx)(C.Z,{disabled:f.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Reset Password"})})]}))},S=t(36788),T=t(38682),k={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"},V=function(){var e=(0,c.useRouter)(),r=(0,A.a)().platform,t=e.query.disableGuard;return(0,n.useEffect)(function(){T.w.push({event:"page_view"})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{children:(0,i.jsx)("title",{children:"Password Reset | Material Kit Pro"})}),(0,i.jsxs)(d.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,i.jsx)(x.U,{}),(0,i.jsxs)(u.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:[(0,i.jsxs)(d.Z,{sx:{alignItems:"center",backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.900":"neutral.100"},borderColor:"divider",borderRadius:1,borderStyle:"solid",borderWidth:1,display:"flex",flexWrap:"wrap",justifyContent:"space-between",mb:4,p:2,"& > img":{height:32,width:"auto",flexGrow:0,flexShrink:0}},children:[(0,i.jsxs)(h.Z,{color:"textSecondary",variant:"caption",children:["The app authenticates via ",r]}),(0,i.jsx)("img",{alt:"Auth platform",src:k[r]})]}),(0,i.jsxs)($.Z,{elevation:16,sx:{p:4},children:[(0,i.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,i.jsx)(l(),{href:"/",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(S.T,{sx:{height:40,width:40}})})}),(0,i.jsx)(h.Z,{variant:"h4",children:"Password Reset"}),(0,i.jsx)(h.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Reset your account password using your code"})]}),(0,i.jsx)(d.Z,{sx:{flexGrow:1,mt:3},children:"Amplify"===r&&(0,i.jsx)(W,{})}),(0,i.jsx)(f.Z,{sx:{my:3}}),"Amplify"===r&&(0,i.jsx)("div",{children:(0,i.jsx)(l(),{href:t?"/authentication/password-recovery?disableGuard=".concat(t):"/authentication/password-recovery",passHref:!0,children:(0,i.jsx)(p.Z,{color:"textSecondary",variant:"body2",children:"Did you not receive the code?"})})})]})]})]})]})};V.getLayout=function(e){return(0,i.jsx)(m.A,{children:e})};var I=V}},function(e){e.O(0,[7760,8576,7836,939,1141,6749,9774,2888,179],function(){return e(e.s=17247)}),_N_E=e.O()}]);