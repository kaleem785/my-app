(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container ",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},value:n,onChange:function(e){r(e.target.value)},id:"myBox",rows:"10"}),Object(o.jsx)("button",{className:"btn btn-primary  my-2 mx-1",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Convert of UpperCase","success")},children:"Convert to uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary  my-2 mx-1",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Convert of LowerCase","success")},children:"Convert to lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary  my-2 mx-1",onClick:function(){var t=n.replace(/\b(\w)/g,(function(e){return e.toUpperCase()}));r(t),e.showAlert("Convert of firstCapital of each","success")},children:"CapFirst"}),Object(o.jsx)("button",{className:"btn btn-primary  my-2 mx-1",onClick:function(){r(""),e.showAlert("Clear the text","success")},children:"ClearText"}),Object(o.jsx)("button",{className:"btn btn-primary  my-2 mx-1",onClick:function(){var t=function(e){var t="<none>",a=e.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);if(a){t="";for(var c=0;c<a.length;c++)0!==c&&(t+=", "),t+=a[c]}return t}(n);r(t),e.showAlert("Email Eetch","success")},children:"Fetch Email"})]})]}),Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your text summery"}),Object(o.jsxs)("p",{children:["your words are ",n.split(" ").length," and letters are ",n.length]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," minutes to read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter Something in the textBox above to preview here"})]})]})}function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Search"})]}),Object(o.jsxs)("div",{className:"form-check form-switch mx-2 text-".concat("light"===e.mode?"dark":"white"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function d(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})}var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),h=s[0],m=s[1],j=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"TextUtils",aboutTitle:"About us",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",j("dark mode has been enable","success"),document.title="TextUtils - DarkMode"):(n("light"),document.body.style.backgroundColor="white",j("light mode has been enable","success"),document.title="TextUtils - LightMode")}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(i,{heading:"Enter the text to analyze",mode:a,showAlert:j})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.ed060a55.chunk.js.map