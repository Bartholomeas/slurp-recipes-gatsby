"use strict";(self.webpackChunkslurp_recipes=self.webpackChunkslurp_recipes||[]).push([[875],{8070:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var o=t(7294),r=t(3494),i=t(5861),a=t(4687),l=t.n(a),c=t(6633),s=t.n(c),u=t(5444),d=t(9188),p=t(2908),m=t(3602),f=t(7407),g=t(6241),h=function(){var e,n=(0,o.useState)(!1),t=n[0],r=n[1],a=(0,o.useState)(!0),c=a[0],h=a[1],y=o.createRef({}),w=o.createRef({}),x=function(){var e=(0,i.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r(!0),e.prev=2,e.next=5,s().post("https://slurp-website.herokuapp.com/auth/local",{identifier:y.current.value,password:w.current.value});case 5:t=e.sent,console.log("Real function, not mocked"),localStorage.setItem("token",JSON.stringify(t.data.jwt)),localStorage.setItem("user",JSON.stringify(t.data.user.username)),r(!1),(0,u.c4)("/"),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(2),r(!1),v("login"),v("password"),h(!1);case 19:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n){return e.apply(this,arguments)}}(),v=function(n,t){void 0===t&&(t=!1),"undefined"!=typeof window&&(!0===t?document.querySelector("input[id='"+n+"']").classList.remove("invalid"):((e=document.querySelector("input[id='"+n+"']")).classList.add("invalid"),e.setAttribute("className","invalid")))};return o.createElement(o.Fragment,null,o.createElement(p.JG,{"data-testid":"login-body"},o.createElement(p.EL,null,"Zaloguj się."),o.createElement(p.yN,null,o.createElement(m.Z,{nameId:"login",content:"Login",ref:y}),o.createElement(m.Z,{nameId:"password",type:"password",content:"Hasło",ref:w}),!c&&o.createElement(f.Z,null,"Niepoprawny login lub hasło"),o.createElement(d.Z,{isLong:!0,type:"submit",onClick:function(e){return x(e)}},"Zaloguj się")),o.createElement(p.ap,{to:"/register"},"Nie masz konta? ",o.createElement(p.Np,null,"Zarejestruj się."))),t&&o.createElement(g.ZP,null))},y=r.default.div.withConfig({displayName:"login__LoginWrapper",componentId:"sc-t1uti5-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;height:90vh;margin-top:7rem;background-color:",";@media only screen and (min-width:768px){padding:3rem;}"],(function(e){return e.theme.colors.base})),w=function(){return o.createElement(y,null,o.createElement(h,null))}},2908:function(e,n,t){t.d(n,{EL:function(){return a},Ff:function(){return u},JG:function(){return i},Np:function(){return s},ap:function(){return c},yN:function(){return l}});var o=t(5444),r=t(3494),i=r.default.div.withConfig({displayName:"joinPanelstyles__JoinPanelWrapper",componentId:"sc-bgpuzp-0"})(["position:relative;display:flex;flex-direction:column;align-content:center;justify-content:center;height:auto;width:100%;padding:3rem;border-radius:",";box-shadow:3px 2px 10px -3px ",";background-color:",";overflow:hidden;@media only screen and (min-width:768px){height:auto;max-width:600px;}"],(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.otherStyles.shadow}),(function(e){return e.theme.colors.white})),a=r.default.p.withConfig({displayName:"joinPanelstyles__JoinHeader",componentId:"sc-bgpuzp-1"})(["font-weight:300;font-size:3.2rem;color:",";"],(function(e){return e.theme.colors.fontColor})),l=r.default.form.withConfig({displayName:"joinPanelstyles__JoinForm",componentId:"sc-bgpuzp-2"})(["display:flex;flex-direction:column;padding-top:2rem;@media only screen and (min-width:768px){}"]),c=(0,r.default)(o.rU).withConfig({displayName:"joinPanelstyles__JoinLink",componentId:"sc-bgpuzp-3"})(["text-decoration:none;font-size:1.2rem;margin:1rem 0;color:",";"],(function(e){return e.theme.colors.darkGrey})),s=r.default.span.withConfig({displayName:"joinPanelstyles__ColoredText",componentId:"sc-bgpuzp-4"})(["color:",";"],(function(e){return e.theme.colors.accent})),u=r.default.p.withConfig({displayName:"joinPanelstyles__PasswordInfoText",componentId:"sc-bgpuzp-5"})(["display:flex;align-items:flex-start;color:",";font-size:1.6rem;margin-bottom:1.6rem;"],(function(e){return e.theme.colors.darkGrey}))}}]);
//# sourceMappingURL=component---src-pages-login-js-9efe56144c70088271e4.js.map