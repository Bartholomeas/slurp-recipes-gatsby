/*! For license information please see component---src-components-templates-recipe-details-js-1c7d3d3d6015c9e1ff3e.js.LICENSE.txt */
(self.webpackChunkslurp_recipes=self.webpackChunkslurp_recipes||[]).push([[285],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},9824:function(e,t,n){"use strict";var r=n(7294),i=n(1074),o=n(1389),a=i.default.div.withConfig({displayName:"SearchBar__SearchWrapper",componentId:"sc-vnb5j2-0"})(["display:flex;align-items:center;width:100%;padding:0.4rem 1.2rem;color:",";background-color:",";border:1px solid ",";border-radius:",";box-shadow:",";@media only screen and (min-width:768px){max-width:300px;}& svg{font-size:1.6rem;color:",";}"],(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.otherStyles.bigRadius}),(function(e){return e.theme.otherStyles.shadow}),(function(e){return e.theme.colors.fontColor})),l=i.default.label.withConfig({displayName:"SearchBar__SearchLabel",componentId:"sc-vnb5j2-1"})(["position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;"]),c=i.default.input.withConfig({displayName:"SearchBar__SearchArea",componentId:"sc-vnb5j2-2"})(["padding:0.8rem;border:none;background:none;width:100%;border-radius:",";&:focus ","{border:none;background-color:",";background-color:pink;outline:1px solid lightgrey;}"],(function(e){return e.theme.otherStyles.bigRadius}),a,(function(e){return e.theme.colors.lightGrey}));t.Z=function(){return r.createElement(a,null,r.createElement(l,{htmlFor:"search-bar"},"Skopiuj adres strony"),r.createElement(o.adB,null),r.createElement(c,{placeholder:"Znajdź przepis..",name:"search-bar",id:"search-bar"}))}},4312:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return he}});var r,i=n(7294),o=n(6125),a=n(1074),l=n(1279),c=(0,a.css)(["max-width:900px;"]),s=(0,a.css)(["right:-5rem;top:50%;font-size:4rem;color:",";cursor:pointer;&:hover{color:",";}"],(function(e){return e.theme.colors.offWhite}),(function(e){return e.theme.colors.white})),d=a.default.div.withConfig({displayName:"recipe-details-styles__IconsContainer",componentId:"sc-7a7e2g-0"})(["display:flex;flex-direction:row;align-items:center;gap:3rem;width:100%;@media only screen and (min-width:768px){gap:1rem;width:auto;}@media print{display:none;}"]),u=((0,a.default)(l.s5I).withConfig({displayName:"recipe-details-styles__FacebookIcon",componentId:"sc-7a7e2g-1"})(["",""],s),(0,a.default)(l.x2q).withConfig({displayName:"recipe-details-styles__ShareIcon",componentId:"sc-7a7e2g-2"})(["",""],s)),p=(0,a.default)(l.s4T).withConfig({displayName:"recipe-details-styles__PrintIcon",componentId:"sc-7a7e2g-3"})(["",""],s),h=a.default.div.withConfig({displayName:"recipe-details-styles__Wrapper",componentId:"sc-7a7e2g-4"})(["position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:1rem;min-height:100vh;width:100%;padding:1rem;padding-top:7rem;@media only screen and (min-width:768px){",";margin-top:7rem;left:50%;transform:translateX(-50%);}@page{size:A4;}@media print{padding:0;margin-top:1rem;max-width:100%;height:auto;min-height:auto;}"],c),f=a.default.div.withConfig({displayName:"recipe-details-styles__GeneralContainer",componentId:"sc-7a7e2g-5"})(["display:flex;flex-direction:column;align-items:center;gap:1rem;height:auto;width:100%;"," border-radius:",";@media only screen and (min-width:768px){flex-direction:row;justify-content:space-between;height:500px;max-height:500px;padding:0;}@media print{flex-direction:row;justify-content:space-between;height:300px;max-height:300px;padding:0;}"],c,(function(e){return e.theme.otherStyles.smallRadius})),m=(0,a.default)(o.G).withConfig({displayName:"recipe-details-styles__RecipeImage",componentId:"sc-7a7e2g-6"})(["height:100%;width:100%;aspect-ratio:1/1;object-fit:cover;background-size:cover;background-position:fixed;border-radius:",";@media only screen and (min-width:768px){width:60%;}@media print{width:60%;height:300px;}"],(function(e){return e.theme.otherStyles.smallRadius})),w=a.default.div.withConfig({displayName:"recipe-details-styles__ContentContainer",componentId:"sc-7a7e2g-7"})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;height:100%;width:100%;padding:2.4rem;background-color:",";border-radius:",";box-shadow:",";@media only screen and (min-width:768px){width:40%;}@media print{width:40%;height:300px;}& h2,p{color:",";}"],(function(e){return e.theme.colors.darkBase}),(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.otherStyles.shadow}),(function(e){return e.theme.colors.offWhite})),g=a.default.h2.withConfig({displayName:"recipe-details-styles__RecipeHeader",componentId:"sc-7a7e2g-8"})(["font-size:3.2rem;color:",";@media only screen and (min-width:768px){font-size:3.2rem;}@media print{font-size:3rem;}"],(function(e){return e.theme.colors.fontColor})),y=a.default.div.withConfig({displayName:"recipe-details-styles__InfoBoxes",componentId:"sc-7a7e2g-9"})(["display:flex;flex-direction:column;padding:1rem 0;gap:1rem;padding-bottom:3rem;@media print{font-size:1.6rem;}"]),b=a.default.div.withConfig({displayName:"recipe-details-styles__InfoBox",componentId:"sc-7a7e2g-10"})(["display:flex;flex-direction:column;"]),v=a.default.p.withConfig({displayName:"recipe-details-styles__InfoCategory",componentId:"sc-7a7e2g-11"})(["font-size:1.6rem;"]),x=a.default.p.withConfig({displayName:"recipe-details-styles__InfoValue",componentId:"sc-7a7e2g-12"})(["font-size:",";font-weight:bold;@media print{font-size:1.6rem;}"],(function(e){return e.theme.fontSize.medium})),k=a.default.div.withConfig({displayName:"recipe-details-styles__RecipeWrapper",componentId:"sc-7a7e2g-13"})(["position:relative;display:flex;flex-direction:column-reverse;gap:1rem;@media only screen and (min-width:768px){flex-direction:row;}@media print{flex-direction:row;}"]),_=a.default.div.withConfig({displayName:"recipe-details-styles__PreparationContainer",componentId:"sc-7a7e2g-14"})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;align-self:flex-start;min-height:50vh;padding:2rem;border-radius:",";background-color:",";box-shadow:",";@media only screen and (min-width:768px){width:65%;}@media print{width:70%;}"],(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.otherStyles.shadow})),C=a.default.h3.withConfig({displayName:"recipe-details-styles__PrepHeader",componentId:"sc-7a7e2g-15"})(["font-size:4rem;font-weight:bold;margin:2.4rem 0;color:",";@media print{font-size:2.4rem;margin:0;}"],(function(e){return e.theme.colors.veryDarkBase})),S=a.default.ol.withConfig({displayName:"recipe-details-styles__StepList",componentId:"sc-7a7e2g-16"})(["width:100%;list-style:upper-roman inside;font-size:1.6rem;line-height:2.4rem;@media print{font-size:1.2rem;}"]),E=a.default.li.withConfig({displayName:"recipe-details-styles__StepListItem",componentId:"sc-7a7e2g-17"})(["color:",";padding:2.4rem 0;&::marker{font-size:4rem;list-style-type:none;line-height:1.2rem;color:",";@media print{font-size:2rem;}}"],(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.colors.darkBase})),I=a.default.div.withConfig({displayName:"recipe-details-styles__IngredientsContainer",componentId:"sc-7a7e2g-18"})(["display:flex;flex-direction:column;width:100%;height:100%;padding:0 2.4rem;font-size:1.4rem;border-radius:",";background-color:",";box-shadow:",";@media only screen and (min-width:768px){width:35%;height:auto;}@media print{position:static;width:30%;height:auto;max-height:100vh;font-size:1.2rem;overflow-y:auto;}"],(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.otherStyles.shadow})),j=a.default.h3.withConfig({displayName:"recipe-details-styles__IngredientsHeader",componentId:"sc-7a7e2g-19"})(["font-size:2.4rem;margin-top:2rem;font-weight:bold;color:",";"],(function(e){return e.theme.colors.veryDarkBase})),O=a.default.ul.withConfig({displayName:"recipe-details-styles__IngredientsList",componentId:"sc-7a7e2g-20"})(["width:100%;height:auto;padding:2rem 1.6rem;list-style:none;list-style-position:inside;"]),z=a.default.li.withConfig({displayName:"recipe-details-styles__IngredientsItem",componentId:"sc-7a7e2g-21"})(["position:relative;margin-bottom:1.6rem;font-size:1.6rem;list-style-type:circle;@media print{font-size:1.2rem;margin-bottom:1rem;}"]),N=a.default.div.withConfig({displayName:"recipe-details-styles__ShareBox",componentId:"sc-7a7e2g-22"})(["position:relative;"]),P=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),R=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return P(t,e),t}(Error);function B(e,t){if(!e)throw new R(t)}function L(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var H=n(5900),W=n.n(H),A=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),D=function(){return D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},D.apply(this,arguments)},F=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))},U=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(l){o=[6,l],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},V=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},T=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},q=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function G(e,t,n){var r=t.height,i=t.width,o=M(t,["height","width"]),a=D({height:r,width:i,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),l=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),n(l))}catch(e){console.error(e)}}),1e3);return l}var Z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,i=n.windowHeight,o=void 0===i?400:i,a=n.windowPosition,l=void 0===a?"windowCenter":a,c=n.windowWidth,s=void 0===c?550:c;G(e,D({height:o,width:s},"windowCenter"===l?T(s,o):q(s,o)),r)},t.handleClick=function(e){return F(t,void 0,void 0,(function(){var t,n,r,i,o,a,l,c,s,d;return U(this,(function(u){switch(u.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,i=t.networkLink,o=t.onClick,a=t.url,l=t.openShareDialogOnClick,c=t.opts,s=i(a,c),r?[2]:(e.preventDefault(),n?(d=n(),V(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return l&&this.openShareDialog(s),o&&o(e,s),[2]}}))}))},t}return A(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,o=e.disabledStyle,a=e.forwardedRef,l=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,M(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=W()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=D(D(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&o);return i.createElement("button",D({},d,{"aria-label":d["aria-label"]||l,className:u,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(i.Component),X=Z,Y=function(){return Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Y.apply(this,arguments)};var J=function(e,t,n,r){function o(o,a){var l=n(o),c=Y({},o);return Object.keys(l).forEach((function(e){delete c[e]})),i.createElement(X,Y({},r,c,{forwardedRef:a,networkName:e,networkLink:t,opts:n(o)}))}return o.displayName="ShareButton-"+e,(0,i.forwardRef)(o)};var K=J("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return B(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+L({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),Q=function(){return Q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Q.apply(this,arguments)},$=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function ee(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,o=t.iconFillColor,a=t.round,l=t.size,c=$(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return i.createElement("svg",Q({viewBox:"0 0 64 64",width:l,height:l},c),a?i.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):i.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),i.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var te=ee({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var ne=J("facebookmessenger",(function(e,t){var n=t.appId;return"https://www.facebook.com/dialog/send"+L({link:e,redirect_uri:t.redirectUri||e,app_id:n,to:t.to})}),(function(e){return{appId:e.appId,redirectUri:e.redirectUri,to:e.to}}),{windowWidth:1e3,windowHeight:820}),re=ee({color:"#2196F3",networkName:"facebookmessenger",path:"M 53.066406 21.871094 C 52.667969 21.339844 51.941406 21.179688 51.359375 21.496094 L 37.492188 29.058594 L 28.867188 21.660156 C 28.339844 21.207031 27.550781 21.238281 27.054688 21.730469 L 11.058594 37.726562 C 10.539062 38.25 10.542969 39.09375 11.0625 39.613281 C 11.480469 40.027344 12.121094 40.121094 12.640625 39.839844 L 26.503906 32.28125 L 35.136719 39.679688 C 35.667969 40.132812 36.457031 40.101562 36.949219 39.609375 L 52.949219 23.613281 C 53.414062 23.140625 53.464844 22.398438 53.066406 21.871094 Z M 53.066406 21.871094"});var ie=J("twitter",(function(e,t){var n=t.title,r=t.via,i=t.hashtags,o=void 0===i?[]:i,a=t.related,l=void 0===a?[]:a;return B(e,"twitter.url"),B(Array.isArray(o),"twitter.hashtags is not an array"),B(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+L({url:e,text:n,via:r,hashtags:o.length>0?o.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),oe=ee({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var ae=J("email",(function(e,t){var n=t.subject,r=t.body,i=t.separator;return"mailto:"+L({subject:n,body:r?r+i+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),le=ee({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"}),ce=n(9824),se=a.default.div.withConfig({displayName:"SharePanel__Wrapper",componentId:"sc-tk4rv0-0"})(["display:",";flex-direction:column;position:absolute;left:0;top:5rem;height:150px;width:250px;border-radius:",";padding:1.6rem;background-color:",";box-shadow:3px 2px 10px -3px ",";z-index:9999;"],(function(e){return e.isOpen?"flex":"none"}),(function(e){return e.theme.otherStyles.smallRadius}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.otherStyles.shadow})),de=a.default.div.withConfig({displayName:"SharePanel__ButtonsContainer",componentId:"sc-tk4rv0-1"})(["display:flex;align-items:flex-start;justify-content:space-between;height:100%;width:100%;padding:2rem 0;"]),ue=a.default.p.withConfig({displayName:"SharePanel__HeadingText",componentId:"sc-tk4rv0-2"})(["padding-bottom:1rem;"]),pe=(a.default.input.withConfig({displayName:"SharePanel__LinkInput",componentId:"sc-tk4rv0-3"})(["width:100%;height:2rem;"]),function(e){var t=Object.assign({},e),n=("undefined"!=typeof window&&window).location;return i.createElement(se,{onClick:t.onClick,isOpen:t.isOpen},i.createElement(ue,null,"Udostępnij:"),i.createElement(ce.Z,null),i.createElement(de,null,i.createElement(K,{"aria-label":"Udostępnij na Facebook",content:"To jest button",url:n},i.createElement(te,{size:40})),i.createElement(ne,{url:n,"aria-label":"Udostępnij na Messenger"},i.createElement(re,{size:40})),i.createElement(ie,{url:n,size:40,"aria-label":"Udostępnij na Twitter"},i.createElement(oe,{size:40})),i.createElement(ae,{subject:"Spróbuj naszego przepisu na "+t.title,"aria-label":"Udostępnij przez E-mail"},i.createElement(le,{size:40}))))}),he=function(e){var t=e.data,n=(0,i.useState)(!1),r=n[0],a=n[1],l=t.strapiRecipes,c=l.img?(0,o.d)(l.img.localFile.childImageSharp.gatsbyImageData):null;return i.createElement(i.Fragment,null,i.createElement(h,null,i.createElement(f,null,i.createElement(m,{image:c,alt:"Food header img"}),i.createElement(w,null,i.createElement(g,null,l.title),i.createElement(y,null,i.createElement(b,null,i.createElement(v,null,"dieta"),i.createElement(x,null,l.diets[0]?l.diets[0].diets:"balanced")),i.createElement(b,null,i.createElement(v,null,"trudność"),i.createElement(x,null,l.difficulties[0]?l.difficulties[0].difficulties:"?")),i.createElement(b,null,i.createElement(v,null,"czas przygotowania"),i.createElement(x,null,l.time,"min")),i.createElement(b,null,i.createElement(v,null,"kalorie"),i.createElement(x,null," ~",l.calories," kcal"))),i.createElement(d,null,i.createElement(N,null,i.createElement("button",{"aria-label":"Przycisk do udostępniania",onClick:function(){return a(!r)},style:{background:"none",border:"none"}},i.createElement(u,null)),i.createElement(pe,{onClick:function(){return a(!r)},isOpen:r,title:l.title})),i.createElement(p,{onClick:function(){return window.print()}})))),i.createElement(k,null,i.createElement(_,null,i.createElement(C,null,"Przygotowanie"),i.createElement(S,null,l.preparation.split("*/*").map((function(e,t){return i.createElement(E,{key:t},e.trim())})))),i.createElement(I,null,i.createElement(j,null,"Składniki"),i.createElement(O,null,l.ingredients.split("*/*").map((function(e,t){return i.createElement(z,{key:t},e.trim())})))))))}}}]);
//# sourceMappingURL=component---src-components-templates-recipe-details-js-1c7d3d3d6015c9e1ff3e.js.map