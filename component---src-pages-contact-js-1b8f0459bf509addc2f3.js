"use strict";(self.webpackChunkslurp_recipes=self.webpackChunkslurp_recipes||[]).push([[501],{3717:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});n(5861),n(7757);var r=n(7294),o=n(9925),i=n(5186),a=n(6125),c={_origin:"https://api.emailjs.com"},l=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var d=m((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText})),u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,o){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var t=e.target,n=new d(t);200===n.status||"OK"===n.text?r(n):o(n)})),i.addEventListener("error",(function(e){var t=e.target;o(new d(t))})),i.open("POST",c._origin+e,!0),Object.keys(n).forEach((function(e){i.setRequestHeader(e,n[e])})),i.send(t)}))},f=function(e,t,n,r){var o=r||c._userID,i=function(e){var t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);l(o,e,t);var a=new FormData(i);return a.append("lib_version","3.2.0"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",o),u("/api/v1.0/email/send-form",a)},p=o.default.h1.withConfig({displayName:"Header__Heading",componentId:"sc-uu7lqf-0"})(["position:relative;align-self:center;justify-self:start;font-size:3rem;font-weight:bold;margin:4rem 0;color:",";color:",';&::after{content:"";position:absolute;height:2rem;width:100%;bottom:0;left:0;z-index:-100;background-color:',";}@media only screen and (min-width:768px){font-size:5rem;}"],(function(e){return e.theme.colors.darkerPrimary}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.lightGrey})),h=function(e){var t=e.children;return r.createElement(p,null,t)},g=n(6494),w=n(3602),y=n(3969),b=(0,o.keyframes)(["from{transform:rotate(-5deg)}to{transform:rotate(5deg)}"]),x=o.default.div.withConfig({displayName:"ContactForm__ContactWrapper",componentId:"sc-1q2l5gr-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:auto;background-color:",";box-shadow:3px 2px 10px -3px ",";border-radius:6px;"],(function(e){return e.theme.colors.secondaryColor}),(function(e){return e.theme.colors.shadow})),v=o.default.div.withConfig({displayName:"ContactForm__ContactFormBox",componentId:"sc-1q2l5gr-1"})(["display:flex;flex-direction:column;align-items:center;width:100%;height:100%;padding:3rem 0;@media only screen and (min-width:768px){flex-direction:row;justify-content:space-evenly;align-items:flex-start;}"]),_=o.default.form.withConfig({displayName:"ContactForm__ContactFormBody",componentId:"sc-1q2l5gr-2"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding:2rem 2rem 0 2rem;border-radius:6px;background-color:",";color:",";@media only screen and (min-width:768px){height:100%;max-width:500px;}"],(function(e){return e.theme.colors.darkerSecondary}),(function(e){return e.theme.colors.lightGrey})),E=(0,o.default)(y.XnZ).withConfig({displayName:"ContactForm__FastfoodIcon",componentId:"sc-1q2l5gr-3"})(["font-size:30rem;color:",";animation:1s "," infinite alternate-reverse;"],(function(e){return e.theme.colors.darkerSecondary}),b),j=o.default.p.withConfig({displayName:"ContactForm__Statement",componentId:"sc-1q2l5gr-4"})(["color:",";font-size:1.6rem;padding:2rem;"],(function(e){return e.theme.colors.secondaryColor})),C=(0,o.default)(g.Z).withConfig({displayName:"ContactForm__FormButton",componentId:"sc-1q2l5gr-5"})(["color:",";"],(function(e){return e.theme.colors.lightGrey})),k=function(){var e="";return r.createElement(x,null,r.createElement(h,null,"Send recipe to us"),r.createElement(v,null,r.createElement(_,{onSubmit:function(t){t.preventDefault(),f("gmail","template_13f70rg",t.target,"user_YtL1kdHkWKGLr0UtEhpBK").then((function(t){return console.log(t.text),e="Pomyślnie wysłano wiadomość"})).catch((function(e){return console.log(e)}))}},r.createElement(w.Z,{nameId:"from_name",content:"Twój email",type:"email"}),r.createElement(w.Z,{nameId:"title",content:"Tytuł"}),r.createElement(w.Z,{textarea:!0,nameId:"message",content:"Wiadomość"}),r.createElement(C,{isLong:!0,type:"submit",value:"send"},"Wyślij"),r.createElement(j,null,e)),r.createElement(E,null)))},I=(n(1070),n(4817)),q=o.default.div.withConfig({displayName:"contact__ContactPageWrapper",componentId:"sc-j3ejw6-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;max-width:1200px;gap:1rem;padding:2rem 2rem 1rem 2rem;margin:0 auto;margin-top:7rem;"]),N=o.default.section.withConfig({displayName:"contact__AboutUsSection",componentId:"sc-j3ejw6-1"})(["position:relative;display:flex;flex-direction:column;align-content:center;justify-content:flex-start;width:100%;min-height:50vh;border-radius:6px;overflow:hidden;background-color:",";@media only screen and (min-width:768px){flex-direction:row;justify-content:space-between;height:50vh;}"],(function(e){return e.theme.colors.lightGrey})),S=o.default.div.withConfig({displayName:"contact__AboutUsTextWrapper",componentId:"sc-j3ejw6-2"})(["display:flex;flex-direction:column;align-items:center;padding:2rem;width:100%;@media only screen and (min-width:768px){justify-content:flex-start;align-items:flex-end;width:60%;margin-right:3rem;text-align:right;}"]),F=o.default.h1.withConfig({displayName:"contact__AboutUsHeader",componentId:"sc-j3ejw6-3"})(["margin-bottom:2rem;font-weight:700;color:",";font-size:4rem;@media only screen and (min-width:768px){align-self:end;}"],(function(e){return e.theme.colors.secondaryColor})),T=o.default.p.withConfig({displayName:"contact__AboutUsText",componentId:"sc-j3ejw6-4"})(["width:100%;color:",";text-align:left;margin-bottom:4rem;font-size:2rem;@media only screen and (min-width:768px){width:100%;text-align:right;}"],(function(e){return e.theme.colors.fontColor})),z=o.default.section.withConfig({displayName:"contact__ContactFormSection",componentId:"sc-j3ejw6-5"})(["min-height:60vh;width:100%;"]),L=function(e){e.data,"undefined"!=typeof window&&window;return r.createElement(r.Fragment,null,r.createElement(i.q,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("html",{lang:"en"}),r.createElement("title",null,"Contact s:urp!"),r.createElement("meta",{name:"description",content:"Best recipes that will be loved by everyone of your family, friends, kids or animals!"}),r.createElement("link",{rel:"canonical",href:"http://localhost:8000/contact"}),r.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),r.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@400;700&display=swap",rel:"stylesheet"})),r.createElement(q,null,r.createElement(N,null,r.createElement(S,null,r.createElement(F,null,"Trochę o nas"),r.createElement(T,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem a a suspendisse egestas pharetra, nibh nisi sagittis. Magnis accumsan in neque, non a aliquet. Odio dignissim consectetur mattis dignissim augue velit a vitae. Suspendisse elementum ullamcorper lobortis mauris, purus sed morbi mattis aenean. Neque interdum pellentesque molestie amet ac."),r.createElement("div",{style:{height:"300px"}},r.createElement(I.Z,null))),r.createElement(a.S,{src:"../../static/contact.jpg",alt:"Phone that is making photo of food",__imageData:n(3308)})),r.createElement(z,null,r.createElement(k,null))))}},3308:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8d8","images":{"fallback":{"src":"/slurp-recipes-gatsby/static/43ba48852f33270fcede37cebfb7a4c5/ebc91/contact.jpg","srcSet":"/slurp-recipes-gatsby/static/43ba48852f33270fcede37cebfb7a4c5/64bf6/contact.jpg 127w,\\n/slurp-recipes-gatsby/static/43ba48852f33270fcede37cebfb7a4c5/37bea/contact.jpg 254w,\\n/slurp-recipes-gatsby/static/43ba48852f33270fcede37cebfb7a4c5/ebc91/contact.jpg 507w","sizes":"(min-width: 507px) 507px, 100vw"},"sources":[{"srcSet":"/slurp-recipes-gatsby/static/43ba48852f33270fcede37cebfb7a4c5/da02c/contact.webp 127w,\\n/slurp-recipes-gatsby/static/43ba48852f33270fcede37cebfb7a4c5/1f61e/contact.webp 254w,\\n/slurp-recipes-gatsby/static/43ba48852f33270fcede37cebfb7a4c5/ebd8b/contact.webp 507w","type":"image/webp","sizes":"(min-width: 507px) 507px, 100vw"}]},"width":507,"height":333}')}}]);
//# sourceMappingURL=component---src-pages-contact-js-1b8f0459bf509addc2f3.js.map