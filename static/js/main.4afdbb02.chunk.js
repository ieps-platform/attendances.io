(this["webpackJsonpplataforma-atendimentos-desistencias"]=this["webpackJsonpplataforma-atendimentos-desistencias"]||[]).push([[0],{34:function(e,t,a){e.exports=a(68)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),o=a.n(s),c=a(7),l=a(2),i=a(30),u=a.n(i).a.create({baseURL:"https://ieps-api.herokuapp.com"}),m=a(1),d=a.n(m);a(55);var p=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),c=Object(l.a)(o,2),i=c[0],m=c[1],p=Object(n.useState)("Sim"),f=Object(l.a)(p,2),b=f[0],E=f[1],g=Object(n.useState)(""),v=Object(l.a)(g,2),h=v[0],j=v[1],O=Object(n.useState)(""),S=Object(l.a)(O,2),C=S[0],x=S[1],y=Object(n.useState)("failed"),w=Object(l.a)(y,2),N=w[0],I=w[1],A=d.a.get("fullname");return r.a.createElement("div",{id:"form-atendimentos"},r.a.createElement("h2",null,"Formul\xe1rio de Atendimento"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.get("x-acess-token")),user_id:d.a.get("userId")};u.post("/attendances",{profissional:A,data:a.split("-").reverse().join("/"),paciente:i,isCrianca:b,observacoes:h},{headers:t}).then((function(e){x(e.data),200===e.status&&(I("sucess"),s(""),m(""),j(""))})).catch((function(e){console.log(e.response.data),x(e.response.data)}))}},r.a.createElement("label",null,"Nome do Profissional:",r.a.createElement("input",{type:"text",value:A,readOnly:!0})),r.a.createElement("label",null,"Data do Atendimento:",r.a.createElement("input",{type:"date",value:a,onChange:function(e){return s(e.target.value)}})),r.a.createElement("label",null,"Nome do Paciente:",r.a.createElement("input",{type:"text",value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement("label",null,"Paciente \xe9 crian\xe7a ?",r.a.createElement("select",{onChange:function(e){return E(e.target.value)},value:b},r.a.createElement("option",{value:"sim"},"Sim"),r.a.createElement("option",{value:"N\xe3o"},"N\xe3o"))),r.a.createElement("label",null,"Observa\xe7\xf5es:",r.a.createElement("textarea",{value:h,onChange:function(e){return j(e.target.value)},rows:"3",placeholder:"Apenas preencha esse campo se tiver alguma observa\xe7\xe3o sobre o atendimento"})),r.a.createElement("input",{type:"submit",value:"Enviar"}),r.a.createElement("p",{className:N},function(){if(C)return C}())))};a(56);var f=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),c=Object(l.a)(o,2),i=c[0],m=c[1],p=Object(n.useState)("Sim"),f=Object(l.a)(p,2),b=f[0],E=f[1],g=Object(n.useState)(""),v=Object(l.a)(g,2),h=v[0],j=v[1],O=Object(n.useState)(""),S=Object(l.a)(O,2),C=S[0],x=S[1],y=Object(n.useState)("failed"),w=Object(l.a)(y,2),N=w[0],I=w[1],A=d.a.get("fullname");return r.a.createElement("div",{id:"form-desistencias"},r.a.createElement("h2",null,"Formul\xe1rio de Desist\xeancia"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.get("x-acess-token")),user_id:d.a.get("userId")};u.post("/surrenders",{profissional:A,data:a,paciente:i,isCrianca:b,observacoes:h},{headers:t}).then((function(e){x(e.data),200===e.status&&(I("sucess"),s(""),m(""),j(""))})).catch((function(e){console.log(e.response.data),x(e.response.data)}))}},r.a.createElement("label",null,"Nome do Profissional:",r.a.createElement("input",{type:"text",value:A,readOnly:!0})),r.a.createElement("label",null,"Data da Tentativa de Contato:",r.a.createElement("input",{type:"date",value:a,onChange:function(e){return s(e.target.value)}})),r.a.createElement("label",null,"Nome do Paciente:",r.a.createElement("input",{type:"text",value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement("label",null,"Paciente \xe9 crian\xe7a ?",r.a.createElement("select",{onChange:function(e){return E(e.target.value)},value:b},r.a.createElement("option",{value:"sim"},"Sim"),r.a.createElement("option",{value:"N\xe3o"},"N\xe3o"))),r.a.createElement("label",null,"Observa\xe7\xf5es:",r.a.createElement("textarea",{value:h,onChange:function(e){return j(e.target.value)},rows:"3",placeholder:"Apenas preencha esse campo se tiver alguma observa\xe7\xe3o sobre a desist\xeancia"})),r.a.createElement("input",{type:"submit",value:"Enviar"}),r.a.createElement("p",{className:N},function(){if(C)return C}())))};var b=function(){d.a.remove("x-acess-token"),d.a.remove("userId"),d.a.remove("fullname"),d.a.remove("isAdmin"),d.a.remove("username"),window.location="/login"};a(57);var E=function(){var e=Object(n.useState)(d.a.get("isAdmin")),t=Object(l.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"navbar"},r.a.createElement(c.b,{to:"/atendimentos"},"Atendimentos"),r.a.createElement(c.b,{to:"/desistencias"},"Desist\xeancias"),r.a.createElement(c.b,{to:"/registros/atendimentos"},"Registros Atendimentos"),r.a.createElement(c.b,{to:"/registros/desistencias"},"Registros Desist\xeancias"),function(){if("true"===t)return r.a.createElement(c.b,{to:"/usuarios/criar"},"Cadastrar Profissional")}(),r.a.createElement("a",{href:"/login",onClick:b},"Sair")))},g=a(12),v=a(3),h=function(){var e=d.a.get("x-acess-token"),t=d.a.get("userId");return!(!e||!t)},j=function(e){var t=e.component,a=Object(g.a)(e,["component"]);return r.a.createElement(v.b,Object.assign({},a,{render:function(e){return h()?r.a.createElement(t,e):r.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},O=function(e){var t=e.component,a=Object(g.a)(e,["component"]);return r.a.createElement(v.b,Object.assign({},a,{render:function(e){return"/login"===window.location.pathname?r.a.createElement(t,e):r.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};a(62);var S=function(){Object(n.useEffect)((function(){var e=d.a.get("x-acess-token"),t=d.a.get("userId");e&&t&&(window.location="/home")}),[]);var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),c=Object(l.a)(o,2),i=c[0],m=c[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),b=f[0],E=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper fadeInDown"},r.a.createElement("div",{id:"formContent"},r.a.createElement("div",{className:"fadeIn first"},r.a.createElement("h1",null,"Login")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new Date((new Date).getTime()+36e5);u.post("/sessions",{username:a,password:i}).then((function(e){d.a.set("x-acess-token",e.data.token,{expires:t}),d.a.set("userId",e.data.user._id,{expires:t}),d.a.set("fullname",e.data.user.fullname),d.a.set("username",e.data.user.username),d.a.set("userId",e.data.user._id),d.a.set("isAdmin",e.data.user.isAdministrator),window.location="/atendimentos"})).catch((function(e){E(e.response.data.message)}))}},r.a.createElement("input",{type:"text",onChange:function(e){s(e.target.value)},id:"login",className:"fadeIn second",name:"login",placeholder:"Usu\xe1rio"}),r.a.createElement("input",{type:"password",onChange:function(e){m(e.target.value)},id:"password",className:"fadeIn third",name:"login",placeholder:"Senha"}),r.a.createElement("input",{type:"submit",className:"fadeIn fourth",value:"Entrar"}),r.a.createElement("p",null,b)))))},C=a(11),x=a.n(C);a(64);var y=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(d.a.get("isAdmin")),c=Object(l.a)(o,1)[0];return Object(n.useEffect)((function(){var e={"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.get("x-acess-token")),user_id:d.a.get("userId")};u.get("true"===c?"/attendances":"/attendancesId",{headers:e}).then((function(e){s(e.data)})).catch((function(e){s(e.response.data.message)}))}),[c]),r.a.createElement("div",{id:"tableWrap"},r.a.createElement(x.a,{columns:[{name:"Profissional",selector:"profissional",sortable:!1},{name:"Data",selector:"data",sortable:!1},{name:"Paciente",selector:"paciente",sortable:!1},{name:"Paciente Crian\xe7a ?",selector:"isCrianca",sortable:!1},{name:"Observa\xe7\xf5es",selector:"observacoes",sortable:!1,wrap:!0}],data:a||[],customStyles:{rows:{style:{minHeight:"48px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px"}}},striped:!0,pagination:!0,paginationPerPage:30}))};a(65);var w=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(d.a.get("isAdmin")),c=Object(l.a)(o,1)[0];return Object(n.useEffect)((function(){var e={"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.get("x-acess-token")),user_id:d.a.get("userId")};u.get("true"===c?"/surrenders":"/surrendersId",{headers:e}).then((function(e){s(e.data)})).catch((function(e){s(e.response.data.message)}))}),[c]),r.a.createElement("div",{id:"tableWrap"},r.a.createElement(x.a,{columns:[{name:"Profissional",selector:"profissional",sortable:!1},{name:"Data",selector:"data",sortable:!1},{name:"Paciente",selector:"paciente",sortable:!1},{name:"Paciente Crian\xe7a ?",selector:"isCrianca",sortable:!1},{name:"Observa\xe7\xf5es",selector:"observacoes",sortable:!1,wrap:!0}],data:a||[],customStyles:{rows:{style:{minHeight:"48px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px"}}},striped:!0,pagination:!0,paginationPerPage:30}))};a(66);var N=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),c=Object(l.a)(o,2),i=c[0],m=c[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),b=f[0],E=f[1],g=Object(n.useState)(!1),v=Object(l.a)(g,2),h=v[0],j=v[1],O=Object(n.useState)(""),S=Object(l.a)(O,2),C=S[0],x=S[1],y=Object(n.useState)("failed"),w=Object(l.a)(y,2),N=w[0],I=w[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper fadeInDown"},r.a.createElement("div",{id:"formContent"},r.a.createElement("div",{className:"fadeIn first"},r.a.createElement("h1",null,"Cadastro de Profissional")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.get("x-acess-token"))};u.post("/users",{fullname:a,username:i,password:b,isAdministrator:h},{headers:t}).then((function(e){x(e.data),200===e.status&&(I("sucess"),s(""),m(""),E(""),j(!1))})).catch((function(e){console.log(e.response.data),x(e.response.data)}))}},r.a.createElement("input",{type:"text",onChange:function(e){s(e.target.value)},id:"fullname",className:"fadeIn second",name:"fullname",placeholder:"Nome Completo"}),r.a.createElement("input",{type:"text",onChange:function(e){m(e.target.value)},id:"username",className:"fadeIn second",name:"username",placeholder:"Nome de Usu\xe1rio (login)"}),r.a.createElement("input",{type:"text",onChange:function(e){E(e.target.value)},id:"password",className:"fadeIn third",name:"password",placeholder:"Senha"}),r.a.createElement("label",{className:"fadeIn third"},"Profissional \xe9 administrador?",r.a.createElement("select",{className:"isAdmin",onChange:function(e){return j(e.target.value)},value:h},r.a.createElement("option",{value:!1},"N\xe3o"),r.a.createElement("option",{value:!0},"Sim"))),r.a.createElement("input",{type:"submit",className:"fadeIn fourth",value:"Cadastrar"}),r.a.createElement("p",{className:N},function(){if(C)return C}())))))};var I=function(){return h()?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(E,null),r.a.createElement(n.Suspense,{fallback:""},r.a.createElement(j,{path:"/atendimentos",component:function(){return r.a.createElement(p,null)}}),r.a.createElement(j,{path:"/desistencias",component:function(){return r.a.createElement(f,null)}}),r.a.createElement(j,{path:"/registros/atendimentos",component:function(){return r.a.createElement(y,null)}}),r.a.createElement(j,{path:"/registros/desistencias",component:function(){return r.a.createElement(w,null)}}),r.a.createElement(j,{path:"/usuarios/criar",component:function(){return r.a.createElement(N,null)}})))):r.a.createElement(c.a,null,r.a.createElement(n.Suspense,{fallback:""},r.a.createElement(O,{path:"*",component:function(){return r.a.createElement(S,null)}})))};a(67);var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4afdbb02.chunk.js.map