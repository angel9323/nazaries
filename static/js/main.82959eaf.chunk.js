(this.webpackJsonpnazaries=this.webpackJsonpnazaries||[]).push([[0],{139:function(e){e.exports=JSON.parse('{"filters":"Filtros","received":"Recibido","printed":"Impreso","folded":"Doblado","sorted":"Ordenado","delivered":"Entregado","adress":"Direcci\xf3n","date":"Fecha","status":"Estado","team":"Equipo","group":"Grupo","dateRange":"Rango Fecha","documentBrowser":"Buscador de Documentos","docName":"Nombre Doc.:","addNew":"A\xf1adir","channel":"Canal","documentName":"Nombre Documento","dateModified":"Fecha modificaci\xf3n","type":"Tipo","dashboard":"Dashboard","reset":"Resetear"}')},140:function(e){e.exports=JSON.parse('{"filters":"Filters","received":"Received","printed":"Printed","folded":"Folded","sorted":"Sorted","delivered":"Delivered","adress":"Adress","date":"Date","status":"Status","team":"Team","group":"Group","dateRange":"Date Range","documentBrowser":"Document Browser","docName":"Doc. Name:","addNew":"Add New","channel":"Channel","documentName":"Document Name","dateModified":"Date modified","type":"Type","dashboard":"Dashboard","reset":"Reset"}')},156:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},242:function(e,t,n){},243:function(e,t){},244:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(31),s=n.n(r),d=(n(156),n(128)),i=n(129),l=n(147),o=n(143),u=(n(157),n(158),n(248)),j=n(46),b=(n(159),n(72)),O=n(38),m=n(81),h=n(47),f="ADD_DOCUMENT",x="SET_DATA_DB",p="FILTER_DOCUMENTS",y="FILTERS",g="RESET_FILTERS",v=n(6),D=Object(O.b)((function(e){return{filters:e.tableReducer.filters}}))((function(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),c=n[0],r=n[1],s=Object(O.c)();Object(a.useEffect)((function(){0==e.filters.length&&r(!1)}),[e.filters]);return Object(v.jsx)(m.a,{checked:c,onChange:function(t){var n,a;r(t.target.checked),s((n=e.nameFilter,a=t.target.checked,function(e,t){var c,r=t().tableReducer.filters;c=a?[].concat(Object(h.a)(r),[n]):r.filter((function(e){return e!=n})),e({type:y,payload:{filters:c}});var s,d=t().tableReducer.allDocuments;s=0==c.length?Object(h.a)(d):d.filter((function(e){return c.includes(e.status)})),e({type:p,payload:{filteredDocuments:s}})}))},children:e.label})})),N=n(253),R=u.a.Sider,F=j.a.SubMenu,S=j.a.Item,w=function(e){return Object(v.jsxs)(R,{className:"sider",collapsed:!1,children:[Object(v.jsx)("div",{className:"div-filters-text",children:"Filters"}),Object(v.jsxs)(j.a,{defaultSelectedKeys:["1"],mode:"inline",children:[Object(v.jsx)(S,{icon:null,children:Object(v.jsx)(N.a,{id:"adress"})},"1"),Object(v.jsx)(S,{icon:null,children:Object(v.jsx)(N.a,{id:"date"})},"2"),Object(v.jsxs)(F,{icon:null,title:"Status",children:[Object(v.jsx)(S,{children:Object(v.jsx)(D,{nameFilter:"Received",label:Object(v.jsx)(N.a,{id:"received"})})},"3"),Object(v.jsx)(S,{children:Object(v.jsx)(D,{nameFilter:"Printed",label:Object(v.jsx)(N.a,{id:"printed"})})},"4"),Object(v.jsx)(S,{children:Object(v.jsx)(D,{nameFilter:"Folded",label:Object(v.jsx)(N.a,{id:"folded"})})},"5"),Object(v.jsx)(S,{children:Object(v.jsx)(D,{nameFilter:"Sorted",label:Object(v.jsx)(N.a,{id:"sorted"})})},"6"),Object(v.jsx)(S,{children:Object(v.jsx)(D,{nameFilter:"Delivered",label:Object(v.jsx)(N.a,{id:"delivered"})})},"7")]},"sub1"),Object(v.jsx)(S,{icon:null,children:Object(v.jsx)(N.a,{id:"team"})},"8"),Object(v.jsx)(S,{icon:null,children:Object(v.jsx)(N.a,{id:"group"})},"9"),Object(v.jsx)(S,{icon:null,children:Object(v.jsx)(N.a,{id:"dateRange"})},"10")]})]})},k=n(252),E=(n(166),u.a.Header),I=k.a.Item,C=function(e){return Object(v.jsxs)(E,{className:"site-layout-background",style:{padding:0},children:[Object(v.jsxs)(k.a,{className:"breadcrumb-style",children:[Object(v.jsx)(I,{children:"Home"}),Object(v.jsx)(I,{children:"Documents"})]}),Object(v.jsx)("div",{className:"div-documentBrowser-text",children:Object(v.jsx)(N.a,{id:"documentBrowser"})})]})},M=(n(167),n(168),n(250)),T=n(51),A=n(254),B=function(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),c=n[0],r=n[1],s=Object(O.c)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{className:"span-docName",children:Object(v.jsx)(N.a,{id:"docName"})}),Object(v.jsx)(M.a,{className:"inputApp-style",value:c,onChange:function(e){r(e.target.value)}}),Object(v.jsx)(T.a,{className:"buttonAddNew-style",type:"primary",icon:Object(v.jsx)(A.a,{}),onClick:function(){s(function(e){return function(t,n){var a=n().tableReducer.allDocuments.length+1;t({type:f,payload:{document:{id:a,key:""+a,channel:"PDF",documentName:e,group:"Receipts",status:"Received",dateModified:"2021-02-05",type:"Prior",adress:"/localhost"}}});var c,r=n().tableReducer.filters,s=n().tableReducer.allDocuments;c=0==r.length?Object(h.a)(s):s.filter((function(e){return r.includes(e.status)})),t({type:p,payload:{filteredDocuments:c}})}}(c))},disabled:0==c.length,children:Object(v.jsx)(N.a,{id:"addNew"})})]})},K=(n(169),n(249)),H=n(73),_=Object(O.b)((function(e){return{allDocuments:e.tableReducer.allDocuments,filteredDocuments:e.tableReducer.filteredDocuments}}))((function(e){var t=Object(a.useState)({}),n=Object(b.a)(t,2),c=n[0],r=n[1],s=Object(O.c)();Object(a.useEffect)((function(){fetch("http://localhost:3004/documents").then((function(e){return e.json()})).then((function(e){var t;s((t=e,function(e,n){e({type:x,payload:{documents:t}})}))}))}),[]);var d=[{title:Object(v.jsx)(N.a,{id:"channel"}),dataIndex:"channel",key:"channel",sorter:function(e,t){return e.channel.length-t.channel.length},sortOrder:"channel"===c.columnKey&&c.order,ellipsis:!0,width:100},{title:Object(v.jsx)(N.a,{id:"documentName"}),dataIndex:"documentName",key:"documentName",sorter:function(e,t){return e.documentName-t.documentName},sortOrder:"documentName"===c.columnKey&&c.order,ellipsis:!0,render:function(e){return Object(v.jsx)("a",{children:e})}},{title:Object(v.jsx)(N.a,{id:"group"}),dataIndex:"group",key:"group",sorter:function(e,t){return e.group.length-t.group.length},sortOrder:"group"===c.columnKey&&c.order,ellipsis:!0,render:function(e){return Object(v.jsx)("a",{children:e})},width:200},{title:Object(v.jsx)(N.a,{id:"status"}),dataIndex:"status",key:"status",sorter:function(e,t){return e.status.length-t.status.length},sortOrder:"status"===c.columnKey&&c.order,ellipsis:!0,width:200},{title:Object(v.jsx)(N.a,{id:"dateModified"}),dataIndex:"dateModified",key:"dateModified",sorter:function(e,t){return e.dateModified.length-t.dateModified.length},sortOrder:"dateModified"===c.columnKey&&c.order,ellipsis:!0,width:200},{title:Object(v.jsx)(N.a,{id:"type"}),dataIndex:"type",key:"type",sorter:function(e,t){return e.type.length-t.type.length},sortOrder:"type"===c.columnKey&&c.order,ellipsis:!0,width:200},{title:Object(v.jsx)(N.a,{id:"adress"}),dataIndex:"adress",key:"adress",sorter:function(e,t){return e.adress.length-t.adress.length},sortOrder:"adress"===c.columnKey&&c.order,ellipsis:!0,render:function(e){return Object(v.jsx)("a",{children:e})},width:200}],i=e.filteredDocuments;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"div-title-button-table",children:[Object(v.jsx)("span",{className:"span-dashBoardText",children:Object(v.jsx)(N.a,{id:"dashboard"})}),Object(v.jsx)(T.a,{className:"buttonReset-style",onClick:function(){s((function(e,t){e({type:g})}))},children:Object(v.jsx)(N.a,{id:"reset"})}),Object(v.jsxs)(T.a,{className:"buttonDate-style",type:"text",children:[Object(v.jsx)(N.a,{id:"date"}),Object(v.jsx)(H.a,{})]})]}),Object(v.jsx)(K.a,{pagination:{pageSize:4},columns:d,dataSource:i,onChange:function(e,t,n){console.log("Various parameters",e,t,n),r(n)}})]})})),J=(u.a.Header,u.a.Content),P=(u.a.Footer,u.a.Sider,function(e){return Object(v.jsxs)(J,{className:"content-style",children:[Object(v.jsx)("div",{className:"div-inputApp",children:Object(v.jsx)(B,{})}),Object(v.jsx)("div",{className:"div-tableApp",children:Object(v.jsx)(_,{})})]})}),z=(u.a.Header,u.a.Content,u.a.Footer,u.a.Sider,function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(u.a,{style:{minHeight:"100vh"},children:[Object(v.jsx)(w,{}),Object(v.jsxs)(u.a,{className:"site-layout",children:[Object(v.jsx)(C,{}),Object(v.jsx)(P,{})]})]})}}]),n}(c.a.Component));n(242);var L,U=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(z,{})})},G=n(108),q=n(138),V=n(43),Q=(n(243),{allDocuments:[],filteredDocuments:[],filters:[]}),W=[q.a],X=Object(G.b)({tableReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(V.a)(Object(V.a)({},e),{},{allDocuments:[].concat(Object(h.a)(e.allDocuments),[t.payload.document])});case x:return Object(V.a)(Object(V.a)({},e),{},{allDocuments:Object(h.a)(t.payload.documents),filteredDocuments:Object(h.a)(t.payload.documents)});case p:return Object(V.a)(Object(V.a)({},e),{},{filteredDocuments:Object(h.a)(t.payload.filteredDocuments)});case y:return Object(V.a)(Object(V.a)({},e),{},{filters:t.payload.filters});case g:return Object(V.a)(Object(V.a)({},e),{},{filteredDocuments:Object(h.a)(e.allDocuments),filters:[]});default:return e}}}),Y=Object(G.c)(X,{},G.a.apply(void 0,W)),Z=n(251),$=n(139),ee=n(140),te=navigator.language;L="en-US"===te?ee:$,s.a.render(Object(v.jsx)(O.a,{store:Y,children:Object(v.jsx)(Z.a,{locale:te,messages:L,children:Object(v.jsx)(U,{})})}),document.getElementById("root"))}},[[244,1,2]]]);
//# sourceMappingURL=main.82959eaf.chunk.js.map