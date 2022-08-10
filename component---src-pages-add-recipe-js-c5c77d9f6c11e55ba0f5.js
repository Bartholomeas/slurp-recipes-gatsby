"use strict";(self.webpackChunkslurp_recipes=self.webpackChunkslurp_recipes||[]).push([[485],{4674:function(e,t,n){var i=n(7294),a=n(3494),o=n(9188),r=n(1279),c=a.default.div.withConfig({displayName:"NotificationPopup__Wrapper",componentId:"sc-10jlpxi-0"})(["position:fixed;flex-direction:column;display:flex;align-items:center;justify-content:center;height:auto;max-height:230px;padding:2rem;left:50%;width:100%;bottom:0;transform:translateX(-50%) scale(",");transform-origin:bottom;background-color:",";color:",";border-radius:",";transition:transform 0.1s ease;box-shadow:",";z-index:10000;"],(function(e){return e.isActive?"1":"0"}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.otherStyles.shadow})),l=a.default.p.withConfig({displayName:"NotificationPopup__Title",componentId:"sc-10jlpxi-1"})(["border-bottom:1px solid green;color:",";text-align:center;font-size:2rem;padding-bottom:1rem;"],(function(e){return e.theme.colors.accent})),d=a.default.div.withConfig({displayName:"NotificationPopup__TextContainer",componentId:"sc-10jlpxi-2"})(["padding-top:1.6rem;max-width:300px;text-align:center;"]),s=a.default.p.withConfig({displayName:"NotificationPopup__Text",componentId:"sc-10jlpxi-3"})(['font-size:1.5rem;font-family:"Poppins",sans-serif;']),u=(0,a.default)(o.Z).withConfig({displayName:"NotificationPopup__PopupBtn",componentId:"sc-10jlpxi-4"})(["border:none;width:150px;padding:1rem .8rem;margin-top:1.6rem;background-color:",";&:hover{background-color:",";}"],(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.accent}));t.ZP=function(e){var t=e.children,n=e.isActive,a=void 0!==n&&n,o=e.onClick;return i.createElement(c,{isActive:a},i.createElement(l,null,i.createElement(r.KP3,null)," Sukces!"),i.createElement(d,null,i.createElement(s,null,t)),i.createElement(u,{onClick:o,isLong:!0},"Przejdź"))}},9707:function(e,t,n){n.r(t);var i=n(2982),a=n(5861),o=n(4687),r=n.n(o),c=n(7294),l=n(6633),d=n.n(l),s=n(3494),u=n(3602),p=n(9188),m=n(1911),f=n(6241),h=n(4674),g=n(7407),w=s.default.div.withConfig({displayName:"addRecipe__Wrapper",componentId:"sc-ioj3p0-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100vh;margin:0 auto;margin-top:10rem;padding:2rem 2rem;"]),b=s.default.div.withConfig({displayName:"addRecipe__Container",componentId:"sc-ioj3p0-1"})(["width:100%;height:100%;max-width:600px;"]),y=s.default.h2.withConfig({displayName:"addRecipe__AddRecipeHeader",componentId:"sc-ioj3p0-2"})(["align-self:flex-start;margin-left:2rem;font-weight:700;color:",";font-size:",";"],(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.fontSize.medium})),x=s.default.div.withConfig({displayName:"addRecipe__FormContainer",componentId:"sc-ioj3p0-3"})(["display:flex;justify-content:space-between;align-items:center;gap:1rem;width:100%;"]),v=s.default.form.withConfig({displayName:"addRecipe__Form",componentId:"sc-ioj3p0-4"})(["width:100%;height:100%;padding:2rem;@media only screen and (max-width:320px){min-height:400px;overflow-y:scroll;}@media only screen and (min-width:768px){height:auto;overflow:auto;}"]),C={title:"",time:"",diets:"",difficulties:"",types:"",preparation:"",ingredients:""};t.default=function(){var e=(0,c.useState)(!0),t=e[0],n=e[1],o=(0,c.useState)(C),l=o[0],s=o[1],E=(0,c.useState)(),I=E[0],_=E[1],k=(0,c.useState)(!1),j=k[0],Z=k[1],z=l.title,P=l.time,N=l.diets,S=l.difficulties,A=l.types,R=l.preparation,D=l.ingredients,L=l.calories,B=(0,c.useState)(!1),F=B[0],O=B[1],T=function(){O(!F)},q="undefined"!=typeof window&&window,W=q?JSON.parse(q.localStorage.getItem("token")):null,H=function(){var e=(0,a.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),Q()){e.next=3;break}return e.abrupt("return");case 3:return Z(!0),e.next=6,d().post("https://slurp-website.herokuapp.com/recipes",{title:z,time:P,calories:L,preparation:R,ingredients:D,diets:[{_id:N}],difficulties:[{_id:S}],types:[{_id:A}]},{headers:{Authorization:"Bearer "+W}}).then((function(e){J(e.data.id),Z(!1),T()})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function J(e){return K.apply(this,arguments)}function K(){return(K=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("files",I),n.append("refId",t),n.append("ref","recipes"),n.append("field","img"),e.next=7,d().post("https://slurp-website.herokuapp.com/upload",n,{headers:{Authorization:"Bearer "+W}}).then((function(e){Z(!1)})).catch((function(e){return console.log(e)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X,G=function(e){var t;s(Object.assign({},l,((t={})[e.target.name]=e.target.value,t)))},M=function(e){var t,n=e.target,i=n.options[n.selectedIndex].value;s(Object.assign({},l,((t={})[n.id]=i,t)))};"undefined"!=typeof window&&(X=[].concat((0,i.Z)(document.querySelectorAll("textarea")),(0,i.Z)(document.querySelectorAll("input"))));var Q=function(){X.forEach((function(e){if(""===e.value.trim())return e.classList.add("invalid"),n(!1),!1;e.classList.remove("invalid"),n(!0)}))};return c.createElement(w,null,c.createElement(b,null,c.createElement(y,null,"Dodaj Przepis"),c.createElement(v,{onSubmit:function(e){H(e)}},c.createElement(x,null,c.createElement(u.Z,{onChange:G,width:"70",nameId:"title",content:"tytuł"}),c.createElement(u.Z,{content:"czas",onChange:G,width:"25",nameId:"time",type:"number"}),c.createElement(u.Z,{content:"kalorie",onChange:G,width:"25",nameId:"calories",type:"number"})),c.createElement(x,null,c.createElement(m.ZP,{nameId:"diets",content:"dieta",onChange:M,valuesIds:["621d167b5959ad7a45d14bea","621bb7b5896c806c8af640a7","621bb7ad896c806c8af640a6","621bb7bd896c806c8af640a8"],values:["zbilansowana","wege","wegańska","bez-laktozy"]}),c.createElement(m.ZP,{nameId:"difficulties",content:"trudność",onChange:M,valuesIds:["621d079c896c806c8af640b5","621d07a8896c806c8af640b6","621d07b8896c806c8af640b7"],values:["łatwe","średnie","trudne"]}),c.createElement(m.ZP,{nameId:"types",content:"posiłek",onChange:M,valuesIds:["621d048d896c806c8af640aa","621bbd62896c806c8af640a9","621d0497896c806c8af640ab","621d04a4896c806c8af640ac","62364060b17a20ff6a917404"],values:["śniadanie","obiad","kolacja","deser","napój"]})),c.createElement(u.Z,{content:"przygotowanie",onChange:G,textarea:!0,nameId:"preparation",type:"textarea"}),c.createElement(u.Z,{content:"składniki",onChange:G,textarea:!0,nameId:"ingredients",type:"textarea"}),c.createElement(u.Z,{content:"zdjęcie",onChange:function(e){_(e.target.files[0])},nameId:"image",type:"file"}),t?null:c.createElement(g.Z,null,"Pola nie mogą być puste!"),c.createElement(p.Z,{isLong:!0,type:"submit"},"Dodaj przepis")),j?c.createElement(f.ZP,null):null,c.createElement(h.ZP,{onClick:function(){return T()},isActive:F},"Przepis został pomyślnie dodany.")))}}}]);
//# sourceMappingURL=component---src-pages-add-recipe-js-c5c77d9f6c11e55ba0f5.js.map