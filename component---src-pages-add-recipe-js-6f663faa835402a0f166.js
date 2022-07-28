"use strict";(self.webpackChunkslurp_recipes=self.webpackChunkslurp_recipes||[]).push([[485],{7407:function(e,t,n){var o=n(7294),r=n(1074),i=n(1852),a=r.default.span.withConfig({displayName:"ErrorText__ErrorBox",componentId:"sc-1y2t8tp-0"})(['display:flex;align-items:center;font-family:"Poppins",sans-serif;font-size:1.4rem;padding:1.3rem 0.8rem;margin:2rem 0;border-radius:',";background-color:",";color:",";"],(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.colors.errorColor}),(function(e){return e.theme.colors.white})),c=(0,r.default)(i.o86).withConfig({displayName:"ErrorText__ErrorIcon",componentId:"sc-1y2t8tp-1"})(["color:",";margin-right:0.8rem;"],(function(e){return e.theme.colors.white}));t.Z=function(e){var t=e.children;return o.createElement(a,null,o.createElement(c,null),t)}},6241:function(e,t,n){var o=n(7294),r=n(1074),i=r.default.div.withConfig({displayName:"LoadingPopup__Wrapper",componentId:"sc-kgjyit-0"})(["display:flex;position:fixed;flex-direction:column;align-items:center;justify-content:center;gap:1rem;margin:0 auto;height:160px;width:160px;border-radius:",";background-color:rgba(0,0,0,0.5);color:",";box-shadow:",";z-index:99999;"],(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.otherStyles.shadow})),a=(0,r.keyframes)(["from{transform:translate3d(-50%,-50%,0) rotate(0deg);}to{transform:translate3d(-50%,-50%,0) rotate(360deg);}"]),c=r.default.span.withConfig({displayName:"LoadingPopup__Circle",componentId:"sc-kgjyit-1"})(['height:40px;&::before{content:"";position:fixed;height:60px;width:60px;border:solid 8px ',";border-bottom-color:",";border-radius:",";animation:1.5s linear infinite ",";transform:translate3d(-50%,-50%,0);}"],(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.otherStyles.bigRadius}),a),l=r.default.p.withConfig({displayName:"LoadingPopup__LoadingText",componentId:"sc-kgjyit-2"})(["font-size:2.4rem;"]);t.ZP=function(){return o.createElement(i,null,o.createElement(c,null),o.createElement(l,null,"Czekaj.."))}},4674:function(e,t,n){var o=n(7294),r=n(1074),i=n(9188),a=n(1279),c=r.default.div.withConfig({displayName:"NotificationPopup__Wrapper",componentId:"sc-10jlpxi-0"})(["position:fixed;height:auto;width:300px;max-height:230px;padding:2rem;left:50%;top:50%;transform:translateX(-50%) scale(",");transform-origin:bottom;background-color:",";color:",";box-shadow:3px 2px 10px -3px ",";border:1px solid green;border-radius:",";transition:transform 0.1s ease;"],(function(e){return e.isActive?"1":"0"}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.otherStyles.shadow}),(function(e){return e.theme.otherStyles.smallRadius})),l=r.default.p.withConfig({displayName:"NotificationPopup__Title",componentId:"sc-10jlpxi-1"})(["border-bottom:1px solid green;color:",";text-align:center;font-size:2rem;padding-bottom:1rem;"],(function(e){return e.theme.colors.accent})),d=r.default.div.withConfig({displayName:"NotificationPopup__TextContainer",componentId:"sc-10jlpxi-2"})(["padding-top:1.6rem;"]),s=r.default.p.withConfig({displayName:"NotificationPopup__Text",componentId:"sc-10jlpxi-3"})(['font-size:1.5rem;font-family:"Poppins",sans-serif;']),u=(0,r.default)(i.Z).withConfig({displayName:"NotificationPopup__PopupBtn",componentId:"sc-10jlpxi-4"})(["border:none;background-color:",";&:hover{background-color:",";}"],(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.accent}));t.ZP=function(e){var t=e.children,n=e.isActive,r=void 0!==n&&n,i=e.onClick;return o.createElement(c,{isActive:r},o.createElement(l,null,o.createElement(a.KP3,null)," Sukces!"),o.createElement(d,null,o.createElement(s,null,t)),o.createElement(u,{onClick:i,isLong:!0},"Ok"))}},9707:function(e,t,n){n.r(t);var o=n(2982),r=n(5861),i=n(4687),a=n.n(i),c=n(7294),l=n(6633),d=n.n(l),s=n(1074),u=n(3602),p=n(943),m=n(6241),f=n(4674),h=n(7407),g=s.default.div.withConfig({displayName:"addRecipe__Wrapper",componentId:"sc-ioj3p0-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;height:100%;margin:0 auto;margin-top:10rem;max-width:900px;padding:7rem 2rem 2rem background-color:pink;"]),y=s.default.div.withConfig({displayName:"addRecipe__Container",componentId:"sc-ioj3p0-1"})([""]),b=s.default.h2.withConfig({displayName:"addRecipe__AddRecipeHeader",componentId:"sc-ioj3p0-2"})(["align-self:flex-start;margin-left:2rem;font-weight:700;color:",";font-size:",";"],(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.fontSize.medium})),w=s.default.div.withConfig({displayName:"addRecipe__FormContainer",componentId:"sc-ioj3p0-3"})(["display:flex;justify-content:space-between;align-items:center;gap:1rem;width:100%;"]),x=(s.default.div.withConfig({displayName:"addRecipe__ButtonWrapper",componentId:"sc-ioj3p0-4"})(["position:relative;display:flex;align-items:center;justify-content:center;gap:1rem;width:100%;height:6rem;"]),s.default.button.withConfig({displayName:"addRecipe__Button",componentId:"sc-ioj3p0-5"})(["padding:1rem 2rem;color:",";background-color:",";border:none;border-radius:",";transition:background-color 0.2s,transform 0.2s;cursor:pointer;&:hover{background-color:",";transform:scale(1.05);}"],(function(e){return e.theme.colors.lightFont}),(function(e){var t=e.closeBtn,n=e.theme;return t?n.colors.grey:n.colors.accent}),(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.colors.darkBase}))),v=s.default.form.withConfig({displayName:"addRecipe__Form",componentId:"sc-ioj3p0-6"})(["width:100%;height:100%;padding:2rem;@media only screen and (max-width:320px){min-height:400px;overflow-y:scroll;}@media only screen and (min-width:768px){height:auto;overflow:auto;}"]),k={title:"",time:"",diets:"",difficulties:"",types:"",preparation:"",ingredients:""};t.default=function(){var e=(0,c.useState)(!0),t=e[0],n=e[1],i=(0,c.useState)(k),l=i[0],s=i[1],C=(0,c.useState)(),_=C[0],E=C[1],I=(0,c.useState)(!1),j=I[0],N=I[1],P=l.title,z=l.time,Z=l.diets,S=l.difficulties,R=l.types,A=l.preparation,B=l.ingredients,L=l.calories,T=(0,c.useState)(!1),D=T[0],F=T[1],O=function(){F(!D)},W="undefined"!=typeof window&&window,q=W?JSON.parse(W.localStorage.getItem("token")):null,G=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),Q()){e.next=3;break}return e.abrupt("return");case 3:return N(!0),e.next=6,d().post("https://slurp-website.herokuapp.com/recipes",{title:P,time:z,calories:L,preparation:A,ingredients:B,diets:[{_id:Z}],difficulties:[{_id:S}],types:[{_id:R}]},{headers:{Authorization:"Bearer "+q}}).then((function(e){H(e.data.id),N(!1),O()})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function H(e){return J.apply(this,arguments)}function J(){return(J=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("files",_),n.append("refId",t),n.append("ref","recipes"),n.append("field","img"),e.next=7,d().post("https://slurp-website.herokuapp.com/upload",n,{headers:{Authorization:"Bearer "+q}}).then((function(e){N(!1)})).catch((function(e){return console.log(e)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K,X=function(e){var t;s(Object.assign({},l,((t={})[e.target.name]=e.target.value,t)))},M=function(e){var t,n=e.target,o=n.options[n.selectedIndex].value;s(Object.assign({},l,((t={})[n.id]=o,t)))};"undefined"!=typeof window&&(K=[].concat((0,o.Z)(document.querySelectorAll("textarea")),(0,o.Z)(document.querySelectorAll("input"))));var Q=function(){K.forEach((function(e){if(""===e.value.trim())return e.classList.add("invalid"),n(!1),!1;e.classList.remove("invalid"),n(!0)}))};return c.createElement(g,null,c.createElement(y,null,c.createElement(b,null,"Dodaj Przepis"),c.createElement(v,{onSubmit:function(e){G(e)}},c.createElement(w,null,c.createElement(u.Z,{onChange:X,width:"70",nameId:"title",content:"tytuł"}),c.createElement(u.Z,{content:"czas",onChange:X,width:"25",nameId:"time",type:"number"}),c.createElement(u.Z,{content:"kalorie",onChange:X,width:"25",nameId:"calories",type:"number"})),c.createElement(w,null,c.createElement(p.ZP,{nameId:"diets",content:"dieta",onChange:M,valuesIds:["621d167b5959ad7a45d14bea","621bb7b5896c806c8af640a7","621bb7ad896c806c8af640a6","621bb7bd896c806c8af640a8"],values:["zbilansowana","wege","wegańska","bez-laktozy"]}),c.createElement(p.ZP,{nameId:"difficulties",content:"trudność",onChange:M,valuesIds:["621d079c896c806c8af640b5","621d07a8896c806c8af640b6","621d07b8896c806c8af640b7"],values:["łatwe","średnie","trudne"]}),c.createElement(p.ZP,{nameId:"types",content:"posiłek",onChange:M,valuesIds:["621d048d896c806c8af640aa","621bbd62896c806c8af640a9","621d0497896c806c8af640ab","621d04a4896c806c8af640ac","62364060b17a20ff6a917404"],values:["śniadanie","obiad","kolacja","deser","napój"]})),c.createElement(u.Z,{content:"przygotowanie",onChange:X,textarea:!0,nameId:"preparation",type:"textarea"}),c.createElement(u.Z,{content:"składniki",onChange:X,textarea:!0,nameId:"ingredients",type:"textarea"}),c.createElement(u.Z,{content:"zdjęcie",onChange:function(e){E(e.target.files[0])},nameId:"image",type:"file"}),t?null:c.createElement(h.Z,null,"Pola nie mogą być puste!"),c.createElement(x,{isLong:!0,type:"submit"},"Dodaj przepis")),j?c.createElement(m.ZP,null):null,c.createElement(f.ZP,{onClick:function(){return O()},isActive:D},"Przepis został pomyślnie dodany.")))}}}]);
//# sourceMappingURL=component---src-pages-add-recipe-js-6f663faa835402a0f166.js.map