(this.webpackJsonpgrossr=this.webpackJsonpgrossr||[]).push([[0],{40:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(20),r=n.n(i),s=(n(40),n(9)),d=n(6),l=n(14),o=n(5),j=n(1),b=Object(d.a)({button:{border:"1px solid #2b4fd6",padding:"5px 10px",background:"transparent",borderRadius:"4px",fontSize:"12px",fontFamily:"inherit",textTransform:"uppercase",fontWeight:"800",letterSpacing:"1px",color:"#2b4fd6",transition:"background 300ms, color 100ms",position:"relative",marginTop:"5px",marginBottom:"5px","&:hover":{background:"#2b4fd6",color:"#ffffff"},"&:active, &$active":{background:"#5472de",borderColor:"#5472de",color:"#ffffff"},"& + &":{marginLeft:"10px"}},active:{}});function u(e){var t=e.children,n=e.onClick,a=e.active,c=b();return Object(j.jsx)("button",{className:c.button+" ".concat(a?c.active:""),onClick:n,children:t})}var h=Object(d.a)({card:{boxShadow:"0 0 4px #d3d3d3",borderRadius:"3px",padding:"10px",background:"#ffffff"}});function x(e){var t=e.children,n=h();return Object(j.jsx)("div",{className:n.card,children:t})}var p=Object(d.a)({elementRow:{display:"flex",flexFlow:"row wrap"},labelWrapper:{padding:"10px",width:"150px","& label":{verticalAlign:"middle"}},inputWrapper:{padding:"10px",flex:"1 0 0"}});function f(e){var t=e.label,n=e.children,a=p();return Object(j.jsxs)("div",{className:a.elementRow,children:[Object(j.jsx)("div",{className:a.labelWrapper,children:t&&Object(j.jsx)("label",{children:t})}),Object(j.jsx)("div",{className:a.inputWrapper,children:n})]})}var O=Object(d.a)({icon:{verticalAlign:"middle"}});function m(e){var t=e.name,n=e.className,a=O().icon;return Object(j.jsx)("span",{className:"material-icons-round "+(n?"".concat(n," "):" ")+a,children:t})}var v=Object(d.a)({heading:{marginBottom:"15px",color:"#144fd6",letterSpacing:"4px"}});function g(e){var t=e.children,n=v();return Object(j.jsx)("h1",{className:n.heading,children:t})}var C,E=n(19),D=function(){return Object(E.b)()},N=E.c,T=function(){var e=Number(Object(o.h)().id),t=Object(o.g)(),n=N((function(t){return t.cases.cases.find((function(t){return t.id===e}))}));if(n)return n;t.push("/")};!function(e){e[e.CREATED=0]="CREATED",e[e.SUBMITTED=1]="SUBMITTED",e[e.RESUBMITTED=2]="RESUBMITTED",e[e.APPROVED=3]="APPROVED",e[e.REJECTED=4]="REJECTED"}(C||(C={}));var S=n(17),k=n(22),R=Object(k.b)({name:"counter",initialState:{cases:[]},reducers:{addCase:function(e,t){e.cases.push(Object(S.a)(Object(S.a)({},t.payload),{},{id:e.cases.length+100001}))},deleteCase:function(e,t){e.cases=e.cases.filter((function(e){return e.id!==t.payload}))},submitCase:function(e,t){e.cases.find((function(e){return e.id===t.payload})).status=C.SUBMITTED},acceptCase:function(e,t){e.cases.find((function(e){return e.id===t.payload})).status=C.APPROVED},rejectCase:function(e,t){e.cases.find((function(e){return e.id===t.payload})).status=C.REJECTED},resubmitCase:function(e,t){e.cases.find((function(e){return e.id===t.payload})).status=C.RESUBMITTED},updateCase:function(e,t){e.cases=e.cases.map((function(e){return e.id===t.payload.id?t.payload:e}))}}}),w=R.actions,y=w.addCase,A=w.deleteCase,B=w.submitCase,I=w.acceptCase,L=w.rejectCase,U=w.resubmitCase,W=w.updateCase,F=R.reducer;function M(e){var t,n=e.whichCase,a=D(),c=Object(o.g)(),i=n.id;switch(n.status){case C.CREATED:t=[{label:"submit",handler:function(){return a(B(i))}},{label:"edit",handler:function(){return c.push("/case/".concat(i,"/edit"))}}];break;case C.SUBMITTED:case C.RESUBMITTED:t=[{label:"approve",handler:function(){return a(I(i))}},{label:"reject",handler:function(){return a(L(i))}}];break;case C.REJECTED:t=[{label:"resubmit",handler:function(){return a(U(i))}},{label:"edit",handler:function(){return c.push("/case/".concat(i,"/edit"))}}];break;default:t=[]}return t.push({label:"delete",handler:function(){return a(A(i))}}),Object(j.jsx)(j.Fragment,{children:t.map((function(e,t){var n=e.handler,a=e.label;return Object(j.jsx)(u,{onClick:n,children:a.toUpperCase()},t)}))})}var P=n(11),J=n(35),V=Object(d.a)({annotationWrapper:{marginBottom:"0px",transition:"margin 300ms",background:"#dddddd",borderRadius:"3px",border:"1px solid #ddd","&:hover":{marginBottom:"150px"}},annotationWrapperActive:{marginBottom:"150px"}});function z(e){var t=e.image,n=e.onSubmit,c=Object(a.useState)({}),i=Object(P.a)(c,2),r=i[0],s=i[1],d=V();return Object(j.jsx)("div",{className:"".concat(d.annotationWrapper," ").concat(r.geometry?d.annotationWrapperActive:""),children:Object(j.jsx)(J.a,{src:t.src,alt:t.alt,annotations:t.annotations||[],value:r,allowTouch:!0,onChange:s,onSubmit:n?function(e){n(e),s({})}:void 0,disableAnnotation:!n,disableOverlay:!n})})}var H=Object(d.a)({specimenWrapper:{width:"100%",maxWidth:"600px",marginTop:"10px",marginRight:"10px",position:"relative"},note:{background:"#f0f8ff",padding:"5px 25px 5px 5px",marginBottom:"5px",borderRadius:"3px",position:"relative"},meta:{textAlign:"center",fontStyle:"italic",fontSize:"12px",marginTop:"10px"}});function $(){var e=T(),t=H();if(e){var n=e.firstName,a=e.lastName,c=e.images,i=e.notes,r=e.dob,s=e.status,d=e.meta;return Object(j.jsxs)("div",{children:[Object(j.jsxs)(g,{children:[n," ",a]}),Object(j.jsxs)(x,{children:[Object(j.jsx)(f,{label:"First Name",children:n}),Object(j.jsx)(f,{label:"Last Name",children:a}),Object(j.jsx)(f,{label:"Date of Birth",children:r}),Object(j.jsx)(f,{label:"Specimen",children:c.map((function(e,n){return Object(j.jsx)("div",{className:t.specimenWrapper,children:Object(j.jsx)(z,{image:e})},n)}))}),Object(j.jsx)(f,{label:"Notes",children:i.map((function(e,n){return Object(j.jsx)("p",{className:t.note,children:e.text.split("\n").map((function(e,t){return Object(j.jsxs)("span",{children:[e,Object(j.jsx)("br",{})]},t)}))},n)}))}),Object(j.jsx)(f,{label:"Status",children:C[s]}),Object(j.jsx)(f,{children:Object(j.jsx)(M,{whichCase:e})})]}),Object(j.jsxs)("p",{className:t.meta,children:["Created at ",new Date(d.created).toLocaleDateString(),". ",d.lastUpdated&&"Last edited ".concat(new Date(d.lastUpdated).toLocaleDateString())]})]})}return null}var _=n(23),G=Object(d.a)({entryField:{padding:"10px",borderRadius:"3px",border:"1px solid #ddd",width:"100%",fontSize:"16px",fontFamily:"inherit"},delete:{position:"absolute",right:"10px",top:"5px",border:"none",background:"transparent",font:"inherit",color:"inherit",cursor:"pointer"},note:{background:"#f0f8ff",padding:"5px 25px 5px 5px",marginBottom:"5px",borderRadius:"3px",position:"relative"},specimenWrapper:{width:"100%",maxWidth:"600px",marginTop:"10px",marginRight:"10px",position:"relative"}});function q(e){var t=e.initialCaseData,n=e.setCaseData,c=Object(a.useState)((null===t||void 0===t?void 0:t.firstName)||""),i=Object(P.a)(c,2),r=i[0],s=i[1],d=Object(a.useState)((null===t||void 0===t?void 0:t.lastName)||""),l=Object(P.a)(d,2),o=l[0],b=l[1],h=Object(a.useState)((null===t||void 0===t?void 0:t.notes)||[]),x=Object(P.a)(h,2),p=x[0],O=x[1],m=Object(a.useState)((null===t||void 0===t?void 0:t.images)||[]),v=Object(P.a)(m,2),g=v[0],E=v[1],D=Object(a.useState)((null===t||void 0===t?void 0:t.dob)||""),N=Object(P.a)(D,2),T=N[0],k=N[1],R=Object(a.useRef)(null),w=Object(a.useRef)(null),y=G(),A=function(e){var t=new FileReader;t.onload=function(){if(t.result){var e={src:t.result,alt:"Image for specimen ".concat(g.length+1),id:g.length+1,annotations:[]};E((function(t){return[].concat(Object(_.a)(t),[e])}))}},t.readAsDataURL(e)};return Object(a.useEffect)((function(){n({firstName:r,lastName:o,dob:T,images:g,notes:p,id:(null===t||void 0===t?void 0:t.id)||0,status:C.CREATED,meta:{created:(null===t||void 0===t?void 0:t.meta.created)||Date.now(),lastUpdated:(null===t||void 0===t?void 0:t.id)?Date.now():void 0}})}),[r,o,p,g,T,null===t||void 0===t?void 0:t.id,null===t||void 0===t?void 0:t.meta.created,n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{label:"First Name",children:Object(j.jsx)("input",{className:y.entryField,type:"text",value:r,onChange:function(e){return s(e.target.value)}})}),Object(j.jsx)(f,{label:"Last Name",children:Object(j.jsx)("input",{className:y.entryField,type:"text",value:o,onChange:function(e){return b(e.target.value)}})}),Object(j.jsx)(f,{label:"Date of Birth",children:Object(j.jsx)("input",{className:y.entryField,type:"date",value:T,onChange:function(e){return k(e.target.value)}})}),Object(j.jsxs)(f,{label:"Specimen",children:[Object(j.jsx)("input",{className:y.entryField,type:"file",accept:"image/*",name:"addImages",id:"addImages",onChange:function(){var e;Array.prototype.map.call(null===(e=R.current)||void 0===e?void 0:e.files,A)},ref:R,multiple:!0}),g.map((function(e,t){return Object(j.jsxs)("div",{className:y.specimenWrapper,children:[Object(j.jsx)(z,{image:e,onSubmit:function(e){return function(e,t){var n=g[e].annotations||[];E(g.map((function(a,c){return c!==e?a:Object(S.a)(Object(S.a)({},a),{},{annotations:[].concat(Object(_.a)(n),[t])})})))}(t,e)}}),Object(j.jsx)("button",{className:y.delete,onClick:function(){return e=t,void E(g.filter((function(t,n){return n!==e})));var e},children:"\xd7"})]},t)}))]}),Object(j.jsxs)(f,{label:"Notes",children:[p.map((function(e,t){return Object(j.jsxs)("p",{className:y.note,children:[e.text.split("\n").map((function(e,t){return Object(j.jsxs)("span",{children:[e,Object(j.jsx)("br",{})]},t)})),Object(j.jsx)("button",{className:y.delete,onClick:function(){return e=t,void O(p.filter((function(t,n){return n!==e})));var e},children:"\xd7"})]},t)})),Object(j.jsx)("textarea",{className:y.entryField,ref:w}),Object(j.jsx)(u,{onClick:function(){O([].concat(Object(_.a)(p),[{text:w.current.value}])),w.current.value=""},children:"Add Note"})]})]})}var K,Q=615,X=Object(d.a)({table:Object(s.a)({width:"calc(100% + 20px)",textAlign:"left",marginLeft:"-10px",marginRight:"-10px",borderCollapse:"collapse","& td, & th":{padding:"5px",borderBottom:"1px solid #dddddd"},"& td:first-child, th:first-child":{paddingLeft:"20px",textAlign:"left"},"& td:last-child, th:last-child":{paddingRight:"20px",textAlign:"right"},"& tr:hover":{background:"#efefef"}},"& td:nth-child(3),\n    & td:nth-child(4),\n    & td:nth-child(5),\n    & td:nth-child(6),\n    & td:nth-child(7),\n    & td:nth-child(9),\n    & th:nth-child(3),\n    & th:nth-child(4),\n    & th:nth-child(5),\n    & th:nth-child(6),\n    & th:nth-child(7),\n    & th:nth-child(9)",Object(s.a)({},"@media screen and (max-width: ".concat(1024,"px)"),{display:"none"})),actionColumn:{textAlign:"right"},filters:{marginBottom:"10px"}}),Y=(K={},Object(s.a)(K,C.CREATED,(function(e){return e.status===C.CREATED})),Object(s.a)(K,C.SUBMITTED,(function(e){return e.status===C.SUBMITTED||e.status===C.RESUBMITTED})),Object(s.a)(K,C.RESUBMITTED,(function(e){return e.status===C.SUBMITTED||e.status===C.RESUBMITTED})),Object(s.a)(K,C.REJECTED,(function(e){return e.status===C.REJECTED})),Object(s.a)(K,C.APPROVED,(function(e){return e.status===C.APPROVED})),K);function Z(){var e=Object(o.g)(),t=N((function(e){return e.cases.cases})),n=Object(a.useState)(),c=Object(P.a)(n,2),i=c[0],r=c[1],s=X(),d=i?t.filter(Y[i]):t;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{children:"Cases"}),Object(j.jsxs)("div",{className:s.filters,children:[Object(j.jsx)(u,{active:void 0===i,onClick:function(){return r(void 0)},children:"All"}),Object(j.jsx)(u,{active:i===C.CREATED,onClick:function(){return r(C.CREATED)},children:"Active"}),Object(j.jsx)(u,{active:i===C.SUBMITTED,onClick:function(){return r(C.SUBMITTED)},children:"Submitted"}),Object(j.jsx)(u,{active:i===C.REJECTED,onClick:function(){return r(C.REJECTED)},children:"Rejected"}),Object(j.jsx)(u,{active:i===C.APPROVED,onClick:function(){return r(C.APPROVED)},children:"Approved"})]}),Object(j.jsx)(x,{children:Object(j.jsx)(j.Fragment,{children:d.length?Object(j.jsxs)("table",{className:s.table,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{}),Object(j.jsx)("th",{children:"ID"}),Object(j.jsx)("th",{children:"First Name"}),Object(j.jsx)("th",{children:"Last Name"}),Object(j.jsx)("th",{children:"Date of Birth"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Specimen"}),Object(j.jsx)("th",{className:s.actionColumn,children:"Actions"}),Object(j.jsx)("th",{children:"Last Updated"})]})}),Object(j.jsx)("tbody",{children:d.map((function(t,n){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(u,{onClick:function(){return n="/case/".concat(t.id),void e.push(n);var n},children:"View"})}),Object(j.jsx)("td",{children:t.id}),Object(j.jsx)("td",{children:t.firstName}),Object(j.jsx)("td",{children:t.lastName}),Object(j.jsx)("td",{children:t.dob}),Object(j.jsx)("td",{children:C[t.status]}),Object(j.jsx)("td",{children:t.images.length}),Object(j.jsx)("td",{className:s.actionColumn,children:Object(j.jsx)(M,{whichCase:t})}),Object(j.jsx)("td",{children:new Date(t.meta.lastUpdated||t.meta.created).toLocaleDateString()})]},n)}))})]}):Object(j.jsx)("p",{children:"No cases to display."})})})]})}function ee(){var e=D(),t=T(),n=Object(o.g)(),c=Object(a.useState)(t),i=Object(P.a)(c,2),r=i[0],s=i[1];return t?Object(j.jsxs)("div",{children:[Object(j.jsxs)(g,{children:["Edit Case (ID: ",t.id,")"]}),Object(j.jsxs)(x,{children:[Object(j.jsx)(q,{initialCaseData:t,setCaseData:s}),Object(j.jsxs)(f,{children:[Object(j.jsx)(u,{onClick:function(){return n.goBack()},children:"Cancel"}),Object(j.jsx)(u,{onClick:function(){e(W(r)),n.push("/case/".concat(t.id))},children:"Save"})]})]})]}):null}function te(){var e=D(),t=Object(o.g)(),n=Object(a.useState)(),c=Object(P.a)(n,2),i=c[0],r=c[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{children:"Create Case"}),Object(j.jsxs)(x,{children:[Object(j.jsx)(q,{setCaseData:r}),Object(j.jsxs)(f,{children:[Object(j.jsx)(u,{onClick:function(){t.goBack()},children:"Cancel"}),Object(j.jsx)(u,{onClick:function(){i&&e(y(i)),t.push("/cases")},children:"Save"})]})]})]})}var ne=Object(d.a)({header:{height:"50px",boxShadow:"0 0 4px #d3d3d3",display:"flex",justifyContent:"space-between",background:"#ffffff"},logo:{color:"#144fd6",fontWeight:"800",minWidth:"200px",textAlign:"center",height:"100%",fontFamily:"Josefin Sans",textTransform:"uppercase",fontSize:"30px",lineHeight:"1.8",textShadow:"2px 2px #a9b8ef"},accountInfo:{fontSize:"14px",padding:"12px",fontWeight:"800",borderLeft:"1px solid #d3d3d3",background:"#ffffff"},userName:Object(s.a)({display:"inline-block",verticalAlign:"middle",marginLeft:"5px"},"@media screen and (max-width: ".concat(Q,"px)"),{display:"none !important"}),main:Object(s.a)({display:"flex",alignItems:"stretch",minHeight:"calc(100vh - 50px)"},"@media screen and (max-width: ".concat(Q,"px)"),{flexFlow:"column"}),sidebar:Object(s.a)({flex:"0 0 200px",color:"#ffffff",background:"#144fd6",paddingTop:"35px"},"@media screen and (max-width: ".concat(Q,"px)"),{padding:0,flexBasis:0}),navIcon:{display:"inline-block",marginRight:"15px"},navLink:Object(s.a)({color:"#ffffff",textTransform:"uppercase",fontWeight:"800",letterSpacing:"2px",fontSize:"14px",textDecoration:"none",display:"inline-block",padding:"20px",width:"100%",borderLeft:"4px solid #144fd6"},"@media screen and (max-width: ".concat(Q,"px)"),{borderLeftWidth:0}),navLinkActive:{background:"#5472de",borderLeftColor:"#ffffff"},page:{padding:"30px",flex:"1 0 0"}});function ae(){var e=ne();return Object(j.jsxs)(l.a,{children:[Object(j.jsxs)("header",{className:e.header,children:[Object(j.jsx)("div",{className:e.logo,children:"Grossr"}),Object(j.jsxs)("div",{className:e.accountInfo,children:[Object(j.jsx)(m,{name:"person"}),Object(j.jsx)("span",{className:e.userName,children:"Tessie Technician"})]})]}),Object(j.jsxs)("main",{className:e.main,children:[Object(j.jsx)("aside",{className:e.sidebar,children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)(l.b,{exact:!0,className:e.navLink,activeClassName:e.navLinkActive,to:"/cases",children:[Object(j.jsx)(m,{className:e.navIcon,name:"list_alt"}),"Cases"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(l.b,{exact:!0,className:e.navLink,activeClassName:e.navLinkActive,to:"/cases/create",children:[Object(j.jsx)(m,{className:e.navIcon,name:"playlist_add"}),"Add Case"]})})]})})}),Object(j.jsx)("section",{className:e.page,children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/cases",children:Object(j.jsx)(Z,{})}),Object(j.jsx)(o.b,{path:"/cases/create",children:Object(j.jsx)(te,{})}),Object(j.jsx)(o.b,{path:"/case/:id",children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/case/:id",children:Object(j.jsx)($,{})}),Object(j.jsx)(o.b,{path:"/case/:id/edit",children:Object(j.jsx)(ee,{})})]})}),Object(j.jsx)(o.b,{path:["*"],children:Object(j.jsx)(o.a,{to:"/cases"})})]})})]})]})}var ce=Object(k.a)({reducer:{cases:F}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(E.a,{store:ce,children:Object(j.jsx)(ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.d162c5cd.chunk.js.map