(this.webpackJsonprodrigoportfolio=this.webpackJsonprodrigoportfolio||[]).push([[0],{27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a(6),s=a(1),i=a(0),r=Object(s.createContext)(),l=function(e){var t=e.children,a=Object(s.useState)("light"),c=Object(n.a)(a,2),l=c[0],o=c[1];Object(s.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(i.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rodrigoguzman83.github.io/my-portfolio",j="RG.",m="Luis Rodrigo Guzman",h="Full Stack Engineer",d="I am a developer with +6 years of experience in BACKEND, as well as FRONTEND, DATA BASES & QA. I have a positive mindset, good communication skills and a very proactive and versatile approach. I love working with multi-disciplinary teams, and I am focused on results. With my experience and my background, we will be able to achieve the corporate goals to improve the company performance and to optimize the companys systems",u="https://drive.google.com/file/d/17J0qM6UI3UcH-LCvKaLiA3k_HaDH9uyM/view?usp=sharing",b={linkedin:"https://www.linkedin.com/in/rodrigoluisguzman/",github:"https://github.com/rodrigoguzman83",whatsapp:"https://api.whatsapp.com/send?phone=+5491140365765"},p=[{name:"CRUD with Laravel",description:"It\xb4s a simple app to manage your articles and to have an advanced interaction controls",stack:["Laravel","MySql","Bootstrap","DataTable"],sourceCode:"https://github.com/rodrigoguzman83/CRUD_Laravel_Bootstrap_Datatable"},{name:"Travels APP",description:"It\xb4s a simple App to manage your travels",stack:["Laravel","MySql","Bootstrap"],sourceCode:"https://github.com/rodrigoguzman83/agencia-app"},{name:"Products APP",description:"It\xb4s a simple App to manage your products",stack:["Laravel","MySql","Bootstrap"],sourceCode:"https://github.com/rodrigoguzman83/catalogo-app"},{name:"My Portfolio",description:"It\xb4s my personal portfolio made with REACT",stack:["Html","CSS","JavaScript","React","Material UI"],sourceCode:"https://github.com/rodrigoguzman83/my-portfolio",livePreview:"https://rodrigoguzman83.github.io/my-portfolio/"},{name:"To Do List",description:"It\xb4s a simple To-Do-List App made with REACT",stack:["Html","CSS","JavaScript","React","React-Bootstrap"],sourceCode:"https://github.com/rodrigoguzman83/toDoListFirstVersion",livePreview:"https://elegant-wright-5ea92f.netlify.app/"},{name:"Tweets List App",description:"It\xb4s a simple Tweets-List App made with Javascript using Local Storage",stack:["Html","CSS","JavaScript"],sourceCode:"https://github.com/rodrigoguzman83/project-local-storage",livePreview:"https://project-local-storage-m8w1m4ahr.vercel.app/"}],g=["HTML","CSS","JavaScript","Bootstrap","React","Vue","PHP","Python","Node","Laravel","Slim","Express","Nest","Flask","SQL Server","MySQL","Oracle","MongoDB","Git","Docker","AWS"],O="rodrigoluisguzman@mail.com",x=a(14),f=a.n(x),v=a(12),k=a.n(v),N=a(16),_=a.n(N),w=a(15),y=a.n(w),S=(a(27),function(){var e=Object(s.useContext)(r),t=Object(n.a)(e,1)[0],a=t.themeName,c=t.toggleTheme,l=Object(s.useState)(!1),o=Object(n.a)(l,2),j=o[0],m=o[1],h=function(){return m(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,g.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,O?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===a?Object(i.jsx)(k.a,{}):Object(i.jsx)(f.a,{})}),Object(i.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(y.a,{}):Object(i.jsx)(_.a,{})})]})}),C=(a(33),a.p+"static/media/yo.ccd13427.jpg"),L=function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:Object(i.jsx)("img",{src:C,alt:"yo",className:"imgRedonda"})}):t}),Object(i.jsx)(S,{})]})},A=a(10),P=a.n(A),I=a(17),z=a.n(I),R=a(18),D=a.n(R),E=(a(34),function(){var e=m,t=h,a=d,c=u,n=b;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:a&&a}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),n&&Object(i.jsxs)(i.Fragment,{children:[n.github&&Object(i.jsx)("a",{target:"_blank",href:n.github,"aria-label":"github",className:"link link--icon",rel:"noreferrer",children:Object(i.jsx)(P.a,{})}),n.linkedin&&Object(i.jsx)("a",{target:"_blank",href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",rel:"noreferrer",children:Object(i.jsx)(z.a,{})}),n.whatsapp&&Object(i.jsx)("a",{target:"_blank",href:n.whatsapp,"aria-label":"whatsapp",className:"link link--icon",rel:"noreferrer",children:Object(i.jsx)(D.a,{})})]})]})]})}),T=a(7),B=a.n(T),M=a(19),H=a.n(M),J=(a(36),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},B()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(P.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,target:"_blank","aria-label":"live preview",className:"link link--icon link--nav",rel:"noreferrer",children:Object(i.jsx)(H.a,{})})]})}),F=(a(37),function(){return p.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(i.jsx)(J,{project:e},B()())}))})]}):null}),U=(a(38),function(){return g.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:g.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},B()())}))})]}):null}),q=a(20),G=a.n(q),Q=(a(39),function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(G.a,{fontSize:"large"})})}):null}),K=(a(40),function(){return O?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(O),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),V=(a(41),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Luis Rodrigo Guzman"})})}),W=(a(42),function(){var e=Object(s.useContext)(r),t=Object(n.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(L,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(E,{}),Object(i.jsx)(F,{}),Object(i.jsx)(U,{}),Object(i.jsx)(K,{})]}),Object(i.jsx)(Q,{}),Object(i.jsx)(V,{})]})});a(43);Object(c.render)(Object(i.jsx)(l,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.0ce30b21.chunk.js.map