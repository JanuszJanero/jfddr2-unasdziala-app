(this.webpackJsonpskillshop=this.webpackJsonpskillshop||[]).push([[0],{43:function(e,t,s){},490:function(e,t,s){},491:function(e,t,s){},492:function(e,t,s){},493:function(e,t,s){},494:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(3),i=s.n(a),n=s(44),r=s.n(n),l=s(16),o=s(10),j=(s(53),s(8)),d=s(45),b=(s(54),s(495),s(496),d.a.initializeApp({apiKey:"AIzaSyBOFaeQBfY2T24vXPyZd8uSD3Ja_4fNO-M",authDomain:"skillshop-cd94a.firebaseapp.com",projectId:"skillshop-cd94a",storageBucket:"skillshop-cd94a.appspot.com",messagingSenderId:"321565544929",appId:"1:321565544929:web:43f71f16373424848342a0"}));s(57),s(58);function u(e){var t=e.serviceList,s=e.setSearchedServices,i=Object(a.useState)(""),n=Object(o.a)(i,2),r=n[0],l=n[1];return Object(c.jsxs)("div",{className:"search-bar",children:[Object(c.jsx)("input",{className:"nav-input",type:"text",placeholder:"Znajd\u017a us\u0142ug\u0119...",onChange:function(e){return t=e.target.value,void l(t);var t}}),Object(c.jsx)(j.b,{className:"custom-link",to:"/searched-services",children:Object(c.jsx)("button",{className:"search-btn",onClick:function(){var e=r,c=t.filter((function(t){return t.description.toLowerCase().trim().includes(e.toLowerCase().trim())||t.city.toLowerCase().trim().includes(e.toLowerCase().trim())||t.category.toLowerCase().trim().includes(e.toLowerCase().trim())||t.title.toLowerCase().trim().includes(e.toLowerCase().trim())||t.price.toLowerCase().trim().includes(e.toLowerCase().trim())}));s(c)},children:"\ud83c\udf73"})})]})}var O=function(e){var t=e.serviceList,s=e.userLogInState,a=e.setUserLogInState,i=e.setSearchedServices,n=function(){b.auth().signOut(),a(!1),alert("Pomy\u015blnie wylogowano")};return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)(j.b,{className:"logo-link",to:"/",children:Object(c.jsx)("div",{className:"nav-logo",children:"SkillShop"})}),Object(c.jsx)(u,{serviceList:t,setSearchedServices:i}),s?s?Object(c.jsxs)("div",{className:"registered-user",children:[Object(c.jsx)(j.b,{className:"custom-link",to:"/addTask",children:Object(c.jsxs)("button",{className:"nav-button",children:["DODAJ",Object(c.jsx)("br",{}),"US\u0141UG\u0118"]})}),Object(c.jsx)(j.b,{className:"custom-link",to:"/user-panel",children:Object(c.jsxs)("button",{class:"nav-button",children:["PANEL",Object(c.jsx)("br",{}),"U\u017bYTKOWNIKA"]})}),Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsxs)("button",{className:"nav-button",onClick:n,children:["WYLOGUJ",Object(c.jsx)("br",{}),"U\u017bYTKOWNIKA"]})})]}):void 0:Object(c.jsxs)("div",{className:"unregistered-user",children:[Object(c.jsx)(j.b,{className:"custom-link",to:"/sign-up-user",children:Object(c.jsx)("button",{className:"nav-button",children:"REJESTRACJA"})}),Object(c.jsx)(j.b,{className:"custom-link",to:"/sign-in-user",children:Object(c.jsx)("button",{className:"nav-button",children:"LOGOWANIE"})})]})]})},h=(s(63),s(11)),m=(s(64),s(65),function(e){var t=e.service,s=Object(h.g)().url;return Object(c.jsxs)("div",{className:"service",children:[Object(c.jsxs)("div",{className:"informations",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("h1",{children:t.title}),Object(c.jsx)("div",{children:t.description})]}),Object(c.jsxs)("div",{className:"data",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Kategoria us\u0142ug: "}),t.category]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Miasto: "}),t.city]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Cena: "}),t.price]})]})]}),Object(c.jsx)(j.b,{className:"details",to:"".concat(s,"/").concat(t.title),children:Object(c.jsx)("button",{className:"service-button",children:"SZCZEG\xd3\u0141Y"})})]})});s(66);var x=function(e){var t=e.services,s=e.userLogInState,a=Object(h.f)().serviceTitle,i=t.find((function(e){return e.title===a}));return Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)("div",{className:"title",children:null===i||void 0===i?void 0:i.title}),Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("div",{className:"info-box",children:[Object(c.jsxs)("div",{className:"first-info",children:[Object(c.jsxs)("p",{className:"location",children:[Object(c.jsx)("i",{class:"lni lni-home"}),null===i||void 0===i?void 0:i.city]}),Object(c.jsxs)("p",{className:"price",children:[Object(c.jsx)("i",{class:"lni lni-wallet"}),null===i||void 0===i?void 0:i.price]})]}),s?s?Object(c.jsxs)("div",{className:"second-info",children:[Object(c.jsxs)("p",{className:"contact",children:[Object(c.jsx)("i",{class:"lni lni-phone"}),null===i||void 0===i?void 0:i.phoneNumber,",\xa0\xa0",null===i||void 0===i?void 0:i.fullName]}),Object(c.jsxs)("p",{className:"email",children:[Object(c.jsx)("i",{class:"lni lni-envelope"}),null===i||void 0===i?void 0:i.email]})]}):void 0:Object(c.jsxs)("div",{className:"second-info",children:[Object(c.jsx)("p",{className:"contact",children:"\xa0 Musisz by\u0107 zalogowany aby widzie\u0107 dane kontaktowe"}),Object(c.jsxs)("p",{className:"email",style:{color:"blue"},children:[Object(c.jsx)(j.b,{className:"custom-link",to:"/sign-in-user",children:"Logowanie"})," \xa0 ",Object(c.jsx)(j.b,{className:"custom-link",to:"/sign-up-user",children:"Rejestracja"})]})]})]}),Object(c.jsxs)("p",{className:"description",children:["Opis:\xa0\xa0",null===i||void 0===i?void 0:i.detailDescription]}),Object(c.jsxs)("p",{className:"date",children:["dodane:\xa0\xa0",null===i||void 0===i?void 0:i.date]})]}),Object(c.jsx)(j.b,{to:"/all-services",children:Object(c.jsx)("button",{className:"button-back",children:"Powr\xf3t"})})]})},p=function(e){var t=e.serviceList,s=e.userLogInState,a=Object(h.g)().path;return Object(c.jsx)("div",{className:"service-list",children:Object(c.jsxs)(h.c,{children:[Object(c.jsxs)(h.a,{exact:!0,path:a,children:[Object(c.jsx)("h1",{children:"LISTA DOST\u0118PNYCH OFERT: "}),t.map((function(e){return Object(c.jsx)(m,{service:e},e.id)})),Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)("button",{className:"list-button",children:"POWR\xd3T \u21e6"})})]}),Object(c.jsx)(h.a,{path:"".concat(a,"/:serviceTitle"),children:Object(c.jsx)(x,{services:t,userLogInState:s})})]})})},v=s(14),f=s(497),g=s(30),N=(s(67),[{name:"Budownictwo",path:"/construction-services",filter:"Us\u0142ugi budowlane"},{name:"Hydraulika",path:"/hydraulic-services",filter:"Us\u0142ugi hydrauliczne"},{name:"Elektryka",path:"/electrical-services",filter:"Us\u0142ugi elektryczne"},{name:"Wyko\u0144czenia",path:"/finishing-services",filter:"Us\u0142ugi wyko\u0144czeniowe"},{name:"Stolarstwo",path:"/carpentry-services",filter:"Us\u0142ugi stolarskie"},{name:"Architektura",path:"/architecture-services",filter:"Us\u0142ugi architektoniczne"},{name:"Sprz\u0105tanie",path:"/cleaning-services",filter:"Us\u0142ugi sprz\u0105taj\u0105ce"},{name:"Malowanie",path:"/painting-services",filter:"Us\u0142ugi malarskie"},{name:"Transport",path:"/transport-services",filter:"Us\u0142ugi transportowe"},{name:"IT",path:"/it-services",filter:"Us\u0142ugi informatyczne"},{name:"Inne",path:"/other-services",filter:"Us\u0142ugi r\xf3\u017cne"}]),y=function(e){var t=e.setDummyVariable,s=e.serviceList,i=e.userLogInState,n=Object(a.useState)([]),r=Object(o.a)(n,2),d=r[0],u=r[1];Object(a.useEffect)((function(){var e=[];N.forEach((function(t){e.push(t.filter)})),u(e)}),[]);var O=Object(a.useState)("Us\u0142ugi budowlane"),h=Object(o.a)(O,2),m=h[0],x=h[1],p=Object(a.useState)({id:s.length,title:"",category:"",fullName:"",email:"",phoneNumber:"",city:"",address:"",description:"",detailDescription:"",price:""}),y=Object(o.a)(p,2),S=y[0],L=y[1],k=function(e){var t;L(Object(l.a)(Object(l.a)({},S),{},(t={},Object(v.a)(t,e.target.name,e.target.value),Object(v.a)(t,"category",m),Object(v.a)(t,"date",Object(f.a)(Date.parse(new Date),"dd MMMM yyyy HH:mm:ss",{locale:g.pl})),Object(v.a)(t,"user",i),t)))};return Object(c.jsxs)("div",{className:"add-service",children:[Object(c.jsxs)("form",{className:"frame-addservice",children:[Object(c.jsxs)("label",{className:"label-addservice",children:["Wybierz typ us\u0142ugi:\xa0\xa0",Object(c.jsx)("select",{value:m,onChange:function(e){return x(e.target.value)},children:d.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))})]}),Object(c.jsxs)("div",{className:"service-container-input",children:[Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Tytu\u0142 us\u0142ugi",id:"title",name:"title",onChange:k})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Imi\u0119 i nazwisko",id:"fullName",name:"fullName",onChange:k})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"email",placeholder:"Adres email",id:"email",name:"email",onChange:k})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"tel",placeholder:"Numer telefonu",id:"phoneNumber",name:"phoneNumber",onChange:k})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Adres",id:"address",name:"address",onChange:k})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Miasto",id:"city",name:"city",onChange:k})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Opis us\u0142ugi",id:"description",name:"description",onChange:k})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Cena",id:"price",name:"price",onChange:k})}),Object(c.jsx)("textarea",{placeholder:"Szczeg\xf3\u0142owy opis Twojego og\u0142oszenia",id:"detailDescription",name:"detailDescription",className:"textarea",onChange:k})]})]}),Object(c.jsxs)("div",{className:"btn-container",children:[Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsx)("button",{className:"add-button green",onClick:function(){b.firestore().collection("services").add(S),t(s.length),alert("Pomy\u015blnie dodano og\u0142oszenie")},required:!0,children:"DODAJ"})}),"\xa0",Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsx)("button",{className:"add-button red",children:"ANULUJ"})})]})]})},S=(s(490),function(e){var t=e.serviceList,s=e.setServicesFilteredByCategory;return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"container-wrap",children:[N.map((function(e){return Object(c.jsx)(j.b,{className:"link",exact:!0,activeClassName:"active",to:e.path,children:Object(c.jsx)("div",{className:"box",onClick:function(c){return function(e,c){var a;a=t.filter((function(e){return e.category===c})),s(a)}(0,e.filter)},children:e.name})})})),Object(c.jsx)(j.b,{className:"link",exact:!0,activeClassName:"active",to:"/all-services",children:Object(c.jsx)("div",{className:"box1",children:"Wszystkie"})})]})})}),L=(s(43),function(){var e=Object(a.useState)({email:"",password:""}),t=Object(o.a)(e,2),s=t[0],i=t[1],n=function(e){i(Object(l.a)(Object(l.a)({},s),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("div",{className:"sign-up-user",children:[Object(c.jsx)("h1",{children:"Rejestracja"}),Object(c.jsx)("br",{}),Object(c.jsxs)("form",{className:"credentials",children:[Object(c.jsxs)("label",{children:["Email:\xa0\xa0",Object(c.jsx)("input",{type:"email",id:"email",name:"email",onChange:n,required:!0})]}),"\xa0",Object(c.jsxs)("label",{children:["Has\u0142o:\xa0\xa0",Object(c.jsx)("input",{type:"password",id:"password",name:"password",onChange:n,required:!0})]})]}),"\xa0",Object(c.jsxs)("div",{className:"btn-container",children:[Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsx)("button",{className:"add-button green",onClick:function(){b.auth().createUserWithEmailAndPassword(s.email,s.password).then((function(e){console.log(e),b.auth().signOut(),alert("Rejestracja zako\u0144czona sukcesem")})).catch((function(e){alert(e.message)}))},children:"REJESTRACJA"})}),Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsx)("button",{className:"add-button red",children:"ANULUJ"})})]})]})}),k=function(e){var t=e.setUserLogInState,s=Object(a.useState)({email:"",password:""}),i=Object(o.a)(s,2),n=i[0],r=i[1],d=function(e){r(Object(l.a)(Object(l.a)({},n),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("div",{className:"sign-up-user",children:[Object(c.jsx)("h1",{children:"Logowanie"}),Object(c.jsx)("br",{}),Object(c.jsxs)("form",{className:"credentials",children:[Object(c.jsxs)("label",{children:["Email:\xa0\xa0",Object(c.jsx)("input",{type:"email",id:"email",name:"email",onChange:d,required:!0})]}),"\xa0",Object(c.jsxs)("label",{children:["Has\u0142o:\xa0\xa0",Object(c.jsx)("input",{type:"password",id:"password",name:"password",onChange:d,required:!0})]})]}),"\xa0",Object(c.jsxs)("div",{className:"btn-container",children:[Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsx)("button",{className:"add-button green",onClick:function(){b.auth().signInWithEmailAndPassword(n.email,n.password).then((function(e){console.log(e),t(n.email)})).catch((function(e){alert(e.message)}))},children:"LOGOWANIE"})}),Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsx)("button",{className:"add-button red",children:"ANULUJ"})})]})]})};s(491),s(492);var w=function(e){var t=e.userService,s=e.setDummyVariable,a=Object(h.g)().url;return Object(c.jsxs)("div",{className:"user-service",children:[Object(c.jsxs)("div",{className:"data",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Tytu\u0142: "}),t.title]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Kategoria: "}),t.category]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Data dodania: "}),t.date]})]}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)(j.b,{className:"custom-link",to:"".concat(a,"/").concat(t.title),children:Object(c.jsx)("button",{className:"btn blue",children:"MODYFIKUJ"})}),Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsx)("button",{className:"btn red",onClick:function(){console.log(t.id),b.firestore().collection("services").doc(t.id).delete().then((function(){s(t.id),alert("Dokument zosta\u0142 pomy\u015blnie usuni\u0119ty")})).catch((function(e){alert("B\u0142\u0105d podczas usuwania dokumentu: ",e)}))},children:"USU\u0143"})})]})]})};var C=function(e){var t=e.userServiceList,s=e.userLogInState,i=e.setDummyVariable,n=Object(a.useState)([]),r=Object(o.a)(n,2),d=r[0],u=r[1];Object(a.useEffect)((function(){var e=[];N.forEach((function(t){e.push(t.filter)})),u(e)}),[]);var O=Object(a.useState)("Us\u0142ugi budowlane"),m=Object(o.a)(O,2),x=m[0],p=m[1],y=Object(h.f)().userServiceTitle,S=t.find((function(e){return e.title===y})),L=Object(a.useState)({id:S.id,title:S.title,category:S.category,fullName:S.fullName,email:S.email,phoneNumber:S.phoneNumber,city:S.city,address:S.address,description:S.description,detailDescription:S.detailDescription,price:S.price}),k=Object(o.a)(L,2),w=k[0],C=k[1],I=function(e){var t;C(Object(l.a)(Object(l.a)({},w),{},(t={},Object(v.a)(t,e.target.name,e.target.value),Object(v.a)(t,"category",x),Object(v.a)(t,"date",S.date),Object(v.a)(t,"user",s),t)))};return Object(c.jsxs)("div",{className:"add-service",children:[Object(c.jsxs)("form",{className:"frame-addservice",children:[Object(c.jsxs)("label",{className:"label-addservice",children:["Wybierz typ us\u0142ugi:\xa0\xa0",Object(c.jsx)("select",{defaultValue:S.category,onChange:function(e){return p(e.target.value)},children:d.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))})]}),Object(c.jsxs)("div",{className:"service-container-input",children:[Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Tytu\u0142 us\u0142ugi",id:"title",name:"title",defaultValue:S.title,onChange:I})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Imi\u0119 i nazwisko",id:"fullName",name:"fullName",defaultValue:S.fullName,onChange:I})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"email",placeholder:"Adres email",id:"email",name:"email",defaultValue:S.email,onChange:I})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"tel",placeholder:"Numer telefonu",id:"phoneNumber",name:"phoneNumber",defaultValue:S.phoneNumber,onChange:I})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Adres",id:"address",name:"address",defaultValue:S.address,onChange:I})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Miasto",id:"city",name:"city",defaultValue:S.city,onChange:I})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Opis us\u0142ugi",id:"description",name:"description",defaultValue:S.description,onChange:I})}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",placeholder:"Cena",id:"price",name:"price",defaultValue:S.price,onChange:I})}),Object(c.jsx)("textarea",{placeholder:"Szczeg\xf3\u0142owy opis Twojego og\u0142oszenia",id:"detailDescription",name:"detailDescription",className:"textarea",defaultValue:S.detailDescription,onChange:I})]})]}),Object(c.jsxs)("div",{className:"btn-container",children:[Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsx)("button",{className:"add-button green",onClick:function(){var e=Object(f.a)(Date.parse(new Date),"dd MMMM yyyy HH:mm:ss",{locale:g.pl});b.firestore().collection("services").doc(S.id).update(w),i(e),setTimeout((function(){alert("Pomy\u015blnie zmodyfikowano og\u0142oszenie. Prosimy o ponowne zalogowanie do systemu."),window.location.reload(!0)}),500)},children:"MODYFIKUJ"})}),"\xa0",Object(c.jsx)(j.b,{className:"custom-link",to:"/",children:Object(c.jsx)("button",{className:"add-button red",children:"ANULUJ"})})]})]})};var I=function(e){var t=e.serviceList,s=e.userLogInState,a=e.setDummyVariable,i=Object(h.g)().path,n=t.filter((function(e){return e.user===s}));return Object(c.jsx)("div",{className:"user-panel",children:Object(c.jsxs)(h.c,{children:[Object(c.jsxs)(h.a,{exact:!0,path:i,children:[Object(c.jsx)("h1",{children:"LISTA DODANYCH PRZEZ CIEBIE OG\u0141OSZE\u0143: "}),n.map((function(e){return Object(c.jsx)(w,{userService:e,setDummyVariable:a},e.id)})),Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)("button",{className:"panel-button",children:"POWR\xd3T \u21e6"})})]}),Object(c.jsx)(h.a,{path:"".concat(i,"/:userServiceTitle"),children:Object(c.jsx)(C,{setDummyVariable:a,userLogInState:s,userServiceList:n})})]})})},U=function(e){var t=e.setDummyVariable,s=e.serviceList,i=e.userLogInState,n=e.setUserLogInState,r=e.searchedServices,l=Object(a.useState)([]),j=Object(o.a)(l,2),d=j[0],b=j[1];return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("div",{className:"main-left"}),Object(c.jsx)("div",{className:"main-center",children:Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/addTask",children:Object(c.jsx)(y,{setDummyVariable:t,serviceList:d,userLogInState:i})}),Object(c.jsx)(h.a,{path:"/sign-up-user",children:Object(c.jsx)(L,{serviceList:s})}),Object(c.jsx)(h.a,{path:"/sign-in-user",children:Object(c.jsx)(k,{setUserLogInState:n})}),Object(c.jsx)(h.a,{path:"/user-panel",children:Object(c.jsx)(I,{serviceList:s,userLogInState:i,setDummyVariable:t})}),N.map((function(e){return Object(c.jsx)(h.a,{path:e.path,children:Object(c.jsx)(p,{serviceList:d,userLogInState:i})})})),Object(c.jsx)(h.a,{path:"/searched-services",children:Object(c.jsx)(p,{serviceList:r,userLogInState:i})}),Object(c.jsx)(h.a,{path:"/all-services",children:Object(c.jsx)(p,{serviceList:s,userLogInState:i})}),Object(c.jsx)(h.a,{path:"/",children:Object(c.jsx)(S,{serviceList:s,setServicesFilteredByCategory:b})})]})}),Object(c.jsx)("div",{className:"main-right"})]})},D=(s(493),function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("p",{children:"2021 \xa9 U nas dzia\u0142a Inc."})})});var z=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),s=t[0],i=t[1],n=Object(a.useState)([]),r=Object(o.a)(n,2),d=r[0],u=r[1],h=Object(a.useState)([]),m=Object(o.a)(h,2),x=m[0],p=m[1],v=Object(a.useState)([]),f=Object(o.a)(v,2),g=f[0],N=f[1],y=Object(a.useState)(""),S=Object(o.a)(y,2),L=S[0],k=S[1];return Object(a.useEffect)((function(){p(d)}),[d]),Object(a.useEffect)((function(){b.firestore().collection("services").get().then((function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id})}));u(t)}))}),[s]),Object(c.jsx)("div",{class:"main-container",children:Object(c.jsxs)(j.a,{basename:"/jfddr2-unasdziala-app",children:[Object(c.jsx)(O,{serviceList:d,userLogInState:L,setUserLogInState:k,setSearchedServices:N}),Object(c.jsx)(U,{serviceList:x,setServiceList:u,setDummyVariable:i,setUserLogInState:k,userLogInState:L,searchedServices:g}),Object(c.jsx)(D,{})]})})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root"))},53:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){}},[[494,1,2]]]);
//# sourceMappingURL=main.19937b71.chunk.js.map