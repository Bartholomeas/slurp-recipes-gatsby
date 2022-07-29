"use strict";(self.webpackChunkslurp_recipes=self.webpackChunkslurp_recipes||[]).push([[485],{7407:function(e,t,n){var i=n(7294),o=n(1074),r=n(1852),a=o.default.span.withConfig({displayName:"ErrorText__ErrorBox",componentId:"sc-1y2t8tp-0"})(['display:flex;align-items:center;font-family:"Poppins",sans-serif;font-size:1.4rem;padding:1.3rem 0.8rem;margin:2rem 0;border-radius:',";background-color:",";color:",";"],(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.colors.errorColor}),(function(e){return e.theme.colors.white})),c=(0,o.default)(r.o86).withConfig({displayName:"ErrorText__ErrorIcon",componentId:"sc-1y2t8tp-1"})(["color:",";margin-right:0.8rem;"],(function(e){return e.theme.colors.white}));t.Z=function(e){var t=e.children;return i.createElement(a,null,i.createElement(c,null),t)}},6241:function(e,t,n){var i=n(7294),o=n(1074),r=o.default.div.withConfig({displayName:"LoadingPopup__Wrapper",componentId:"sc-kgjyit-0"})(["display:flex;position:fixed;flex-direction:column;align-items:center;justify-content:center;gap:1rem;margin:0 auto;height:160px;width:160px;border-radius:",";background-color:rgba(0,0,0,0.5);color:",";box-shadow:",";z-index:99999;"],(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.otherStyles.shadow})),a=(0,o.keyframes)(["from{transform:translate3d(-50%,-50%,0) rotate(0deg);}to{transform:translate3d(-50%,-50%,0) rotate(360deg);}"]),c=o.default.span.withConfig({displayName:"LoadingPopup__Circle",componentId:"sc-kgjyit-1"})(['height:40px;&::before{content:"";position:fixed;height:60px;width:60px;border:solid 8px ',";border-bottom-color:",";border-radius:",";animation:1.5s linear infinite ",";transform:translate3d(-50%,-50%,0);}"],(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.otherStyles.bigRadius}),a),l=o.default.p.withConfig({displayName:"LoadingPopup__LoadingText",componentId:"sc-kgjyit-2"})(["font-size:2.4rem;"]);t.ZP=function(){return i.createElement(r,null,i.createElement(c,null),i.createElement(l,null,"Czekaj.."))}},4674:function(e,t,n){var i=n(7294),o=n(1074),r=n(9188),a=n(1279),c=o.default.div.withConfig({displayName:"NotificationPopup__Wrapper",componentId:"sc-10jlpxi-0"})(["position:fixed;height:auto;width:300px;max-height:230px;padding:2rem;left:50%;top:50%;transform:translateX(-50%) scale(",");transform-origin:bottom;background-color:",";color:",";box-shadow:3px 2px 10px -3px ",";border:1px solid green;border-radius:",";transition:transform 0.1s ease;"],(function(e){return e.isActive?"1":"0"}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.otherStyles.shadow}),(function(e){return e.theme.otherStyles.smallRadius})),l=o.default.p.withConfig({displayName:"NotificationPopup__Title",componentId:"sc-10jlpxi-1"})(["border-bottom:1px solid green;color:",";text-align:center;font-size:2rem;padding-bottom:1rem;"],(function(e){return e.theme.colors.accent})),d=o.default.div.withConfig({displayName:"NotificationPopup__TextContainer",componentId:"sc-10jlpxi-2"})(["padding-top:1.6rem;"]),s=o.default.p.withConfig({displayName:"NotificationPopup__Text",componentId:"sc-10jlpxi-3"})(['font-size:1.5rem;font-family:"Poppins",sans-serif;']),u=(0,o.default)(r.Z).withConfig({displayName:"NotificationPopup__PopupBtn",componentId:"sc-10jlpxi-4"})(["border:none;background-color:",";&:hover{background-color:",";}"],(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.accent}));t.ZP=function(e){var t=e.children,n=e.isActive,o=void 0!==n&&n,r=e.onClick;return i.createElement(c,{isActive:o},i.createElement(l,null,i.createElement(a.KP3,null)," Sukces!"),i.createElement(d,null,i.createElement(s,null,t)),i.createElement(u,{onClick:r,isLong:!0},"Ok"))}},9707:function(e,t,n){n.r(t);var i=n(2982),o=n(5861),r=n(4687),a=n.n(r),c=n(7294),l=n(6633),d=n.n(l),s=n(1074),u=n(3602),p=n(9188),m=n(943),f=n(6241),h=n(4674),g=n(7407),y=s.default.div.withConfig({displayName:"addRecipe__Wrapper",componentId:"sc-ioj3p0-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;height:100%;margin:0 auto;margin-top:10rem;max-width:900px;padding:7rem 2rem 2rem background-color:pink;"]),b=(s.default.div.withConfig({displayName:"addRecipe__Container",componentId:"sc-ioj3p0-1"})([""]),s.default.h2.withConfig({displayName:"addRecipe__AddRecipeHeader",componentId:"sc-ioj3p0-2"})(["align-self:flex-start;margin-left:2rem;font-weight:700;color:",";font-size:",";"],(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.fontSize.medium}))),w=s.default.div.withConfig({displayName:"addRecipe__FormContainer",componentId:"sc-ioj3p0-3"})(["display:flex;justify-content:space-between;align-items:center;gap:1rem;width:100%;"]),x=(s.default.div.withConfig({displayName:"addRecipe__ButtonWrapper",componentId:"sc-ioj3p0-4"})(["position:relative;display:flex;align-items:center;justify-content:center;gap:1rem;width:100%;height:6rem;"]),s.default.form.withConfig({displayName:"addRecipe__Form",componentId:"sc-ioj3p0-5"})(["width:100%;height:100%;padding:2rem;@media only screen and (max-width:320px){min-height:400px;overflow-y:scroll;}@media only screen and (min-width:768px){height:auto;overflow:auto;}"])),v={title:"",time:"",diets:"",difficulties:"",types:"",preparation:"",ingredients:""};t.default=function(){var e=(0,c.useState)(!0),t=e[0],n=e[1],r=(0,c.useState)(v),l=r[0],s=r[1],C=(0,c.useState)(),_=C[0],k=C[1],E=(0,c.useState)(!1),I=E[0],j=E[1],N=l.title,P=l.time,Z=l.diets,z=l.difficulties,S=l.types,R=l.preparation,A=l.ingredients,L=l.calories,T=(0,c.useState)(!1),B=T[0],D=T[1],O=function(){D(!B)},W="undefined"!=typeof window&&window,F=W?JSON.parse(W.localStorage.getItem("token")):null,q=function(){var e=(0,o.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),M()){e.next=3;break}return e.abrupt("return");case 3:return j(!0),e.next=6,d().post("https://slurp-website.herokuapp.com/recipes",{title:N,time:P,calories:L,preparation:R,ingredients:A,diets:[{_id:Z}],difficulties:[{_id:z}],types:[{_id:S}]},{headers:{Authorization:"Bearer "+F}}).then((function(e){G(e.data.id),j(!1),O()})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function G(e){return H.apply(this,arguments)}function H(){return(H=(0,o.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("files",_),n.append("refId",t),n.append("ref","recipes"),n.append("field","img"),e.next=7,d().post("https://slurp-website.herokuapp.com/upload",n,{headers:{Authorization:"Bearer "+F}}).then((function(e){j(!1)})).catch((function(e){return console.log(e)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J,K=function(e){var t;s(Object.assign({},l,((t={})[e.target.name]=e.target.value,t)))},X=function(e){var t,n=e.target,i=n.options[n.selectedIndex].value;s(Object.assign({},l,((t={})[n.id]=i,t)))};"undefined"!=typeof window&&(J=[].concat((0,i.Z)(document.querySelectorAll("textarea")),(0,i.Z)(document.querySelectorAll("input"))));var M=function(){J.forEach((function(e){if(""===e.value.trim())return e.classList.add("invalid"),n(!1),!1;e.classList.remove("invalid"),n(!0)}))};return c.createElement(y,null,c.createElement(b,null,"Dodaj Przepis"),c.createElement(x,{onSubmit:function(e){q(e)}},c.createElement(w,null,c.createElement(u.Z,{onChange:K,width:"70",nameId:"title",content:"tytuł"}),c.createElement(u.Z,{content:"czas",onChange:K,width:"25",nameId:"time",type:"number"}),c.createElement(u.Z,{content:"kalorie",onChange:K,width:"25",nameId:"calories",type:"number"})),c.createElement(w,null,c.createElement(m.ZP,{nameId:"diets",content:"dieta",onChange:X,valuesIds:["621d167b5959ad7a45d14bea","621bb7b5896c806c8af640a7","621bb7ad896c806c8af640a6","621bb7bd896c806c8af640a8"],values:["zbilansowana","wege","wegańska","bez-laktozy"]}),c.createElement(m.ZP,{nameId:"difficulties",content:"trudność",onChange:X,valuesIds:["621d079c896c806c8af640b5","621d07a8896c806c8af640b6","621d07b8896c806c8af640b7"],values:["łatwe","średnie","trudne"]}),c.createElement(m.ZP,{nameId:"types",content:"posiłek",onChange:X,valuesIds:["621d048d896c806c8af640aa","621bbd62896c806c8af640a9","621d0497896c806c8af640ab","621d04a4896c806c8af640ac","62364060b17a20ff6a917404"],values:["śniadanie","obiad","kolacja","deser","napój"]})),c.createElement(u.Z,{content:"przygotowanie",onChange:K,textarea:!0,nameId:"preparation",type:"textarea"}),c.createElement(u.Z,{content:"składniki",onChange:K,textarea:!0,nameId:"ingredients",type:"textarea"}),c.createElement(u.Z,{content:"zdjęcie",onChange:function(e){k(e.target.files[0])},nameId:"image",type:"file"}),t?null:c.createElement(g.Z,null,"Pola nie mogą być puste!"),c.createElement(p.Z,{isLong:!0,type:"submit"},"Dodaj przepis")),I?c.createElement(f.ZP,null):null,c.createElement(h.ZP,{onClick:function(){return O()},isActive:B},"Przepis został pomyślnie dodany."))}}}]);
//# sourceMappingURL=component---src-pages-add-recipe-js-63926540397175980087.js.map