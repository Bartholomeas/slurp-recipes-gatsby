/*! For license information please see 90f6bdda0ba17a41b8d96adba15ebad398887e8b-14656cb5cbec78f5a7ca.js.LICENSE.txt */
(self.webpackChunkslurp_recipes=self.webpackChunkslurp_recipes||[]).push([[288],{1829:function(e,t,n){var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}()},706:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(7294),l=m(a),s=m(n(3935)),i=m(n(5697)),u=m(n(1694)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1241)),d=n(4941),f=m(d),p=n(3639);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y=t.portalClassName="ReactModalPortal",b=t.bodyOpenClassName="ReactModal__Body--open",g=d.canUseDOM&&void 0!==s.default.createPortal,O=function(e){return document.createElement(e)},C=function(){return g?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function w(e){return e()}var E=function(e){function t(){var e,n,r;h(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=r=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.removePortal=function(){!g&&s.default.unmountComponentAtNode(r.node);var e=w(r.props.parentSelector);e&&e.contains(r.node)?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=C()(r,l.default.createElement(u.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},v(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(g||(this.node=O("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!g&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var l=n.prevParent,s=n.nextParent;s!==l&&(l.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&!g&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&g?(!this.node&&g&&(this.node=O("div")),C()(l.default.createElement(u.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(a.Component);E.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(f.default),i.default.instanceOf(d.SafeHTMLCollection),i.default.instanceOf(d.SafeNodeList),i.default.arrayOf(i.default.instanceOf(f.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func},E.defaultProps={isOpen:!1,portalClassName:y,bodyOpenClassName:b,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return l.default.createElement("div",e,t)},contentElement:function(e,t){return l.default.createElement("div",e,t)}},E.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(E),t.default=E},1694:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(7294),s=v(n(5697)),i=h(n(1195)),u=v(n(9204)),c=h(n(1241)),d=h(n(1598)),f=n(4941),p=v(f),m=v(n(3942));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function v(e){return e&&e.__esModule?e:{default:e}}n(9088);var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&d.remove(document.body,a),r&&d.remove(document.getElementsByTagName("html")[0],r),o&&b>0&&0===(b-=1)&&c.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(i.returnFocus(n.props.preventScroll),i.teardownScopedFocus()):i.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(i.setupScopedFocus(n.node),i.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,u.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":r(t))?t:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},a=o.base;return n.state.afterOpen&&(a=a+" "+o.afterOpen),n.state.beforeClose&&(a=a+" "+o.beforeClose),"string"==typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&d.add(document.body,r),o&&d.add(document.getElementsByTagName("html")[0],o),n&&(b+=1,c.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles,l=e.children,s=n?{}:a.content,i=r?{}:a.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=o({id:t,ref:this.setContentRef,style:o({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(c,l);return this.props.overlayElement(u,d)}}]),t}(l.Component);g.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},g.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(f.SafeHTMLCollection),s.default.instanceOf(f.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=g,e.exports=t.default},1241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s&&(s.removeAttribute?s.removeAttribute("aria-hidden"):null!=s.length?s.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(s).forEach((function(e){return e.removeAttribute("aria-hidden")})));s=null},t.log=function(){0},t.assertNodeList=i,t.setElement=function(e){var t=e;if("string"==typeof t&&l.canUseDOM){var n=document.querySelectorAll(t);i(n,t),t=n}return s=t||s},t.validateElement=u,t.hide=function(e){var t=!0,n=!1,o=void 0;try{for(var r,a=u(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.setAttribute("aria-hidden","true")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},t.show=function(e){var t=!0,n=!1,o=void 0;try{for(var r,a=u(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.removeAttribute("aria-hidden")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},t.documentNotReadyOrSSRTesting=function(){s=null};var o,r=n(2473),a=(o=r)&&o.__esModule?o:{default:o},l=n(4941);var s=null;function i(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function u(e){var t=e||s;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},9088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[l,s],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}l=s=null,i=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(i.length);for(var e=[l,s],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var o,r=n(3942),a=(o=r)&&o.__esModule?o:{default:o};var l=void 0,s=void 0,i=[];function u(){0!==i.length&&i[i.length-1].focusContent()}a.default.subscribe((function(e,t){l||s||((l=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),l.style.position="absolute",l.style.opacity="0",l.setAttribute("tabindex","0"),l.addEventListener("focus",u),(s=l.cloneNode()).addEventListener("focus",u)),(i=t).length>0?(document.body.firstChild!==l&&document.body.insertBefore(l,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(l.parentElement&&l.parentElement.removeChild(l),s.parentElement&&s.parentElement.removeChild(s))}))},1598:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in n)r(e,n[t]);var a=document.body;for(var l in o)r(a,o[l]);n={},o={}},t.log=function(){0};var n={},o={};function r(e,t){e.classList.remove(t)}t.add=function(e,t){return r=e.classList,a="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),r.add(e)}));var r,a},t.remove=function(e,t){return r=e.classList,a="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&r.remove(e)}));var r,a}},1195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){l=[]},t.log=function(){0},t.handleBlur=u,t.handleFocus=c,t.markForFocusLater=function(){l.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==l.length&&(t=l.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){l.length>0&&l.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",u,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",u),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",u),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",u),document.detachEvent("onFocus",c))};var o,r=n(2521),a=(o=r)&&o.__esModule?o:{default:o};var l=[],s=null,i=!1;function u(){i=!0}function c(){if(i){if(i=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,a.default)(s)[0]||s).focus()}),0)}}},3942:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(o.openInstances.length),o.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){o=new n};var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},o=new n;t.default=o},4941:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var o,r=n(1829);var a=((o=r)&&o.__esModule?o:{default:o}).default,l=a.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=a.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=a.canUseDOM?window.NodeList:{},t.canUseDOM=a.canUseDOM;t.default=l},9204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,r=t.shiftKey,s=n[0],i=n[n.length-1],u=l();if(e===u){if(!r)return;o=i}i!==u||r||(o=s);s===u&&r&&(o=i);if(o)return t.preventDefault(),void o.focus();var c=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==c||"Chrome"==c[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var d=n.indexOf(u);d>-1&&(d+=r?-1:1);if(void 0===(o=n[d]))return t.preventDefault(),void(o=r?i:s).focus();t.preventDefault(),o.focus()};var o,r=n(2521),a=(o=r)&&o.__esModule?o:{default:o};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?l(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},2521:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]);return n.filter(a)};var n=/input|select|textarea|button|object/;function o(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}catch(o){return console.warn("Failed to inspect element style"),!1}}function r(e,t){var r=e.nodeName.toLowerCase();return(n.test(r)&&!e.disabled||"a"===r&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),o(t))return!1;t=t.parentNode}return!0}(e)}function a(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&r(e,!n)}e.exports=t.default},5736:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(706),a=(o=r)&&o.__esModule?o:{default:o};t.default=a.default,e.exports=t.default},6338:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var o=n(5861),r=n(7757),a=n.n(r),l=n(7294),s=n(6633),i=n.n(s),u=n(2338),c=n(3602),d=n(9),f=n(5736),p=n.n(f),m=(0,d.default)(p()).withConfig({displayName:"AddRecipeModalstyles__ModalBody",componentId:"sc-2szc1y-0"})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;top:50%;left:50%;height:calc(100% - 7rem);padding:4rem 0;margin-top:3.4rem;transform:translate(-50%,-50%);background-color:",";color:",";box-shadow:3px 2px 10px -3px ",";border-radius:6px;overflow-y:scroll;z-index:1000;@media only screen and (min-width:768px){height:auto;padding:2rem 0;height:auto;width:600px;}"],(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.colors.shadow})),h=d.default.h2.withConfig({displayName:"AddRecipeModalstyles__ModalHeader",componentId:"sc-2szc1y-1"})(['position:relative;align-self:flex-start;margin-left:2rem;font-family:"Poppins",sans-serif;font-weight:500;color:',";padding:1rem 0;"],(function(e){return e.theme.colors.fontColor})),v=d.default.div.withConfig({displayName:"AddRecipeModalstyles__FormContainer",componentId:"sc-2szc1y-2"})(["display:flex;justify-content:space-between;align-items:center;gap:1rem;width:100%;"]),y=d.default.div.withConfig({displayName:"AddRecipeModalstyles__ButtonWrapper",componentId:"sc-2szc1y-3"})(["align-self:end;align-content:end;"]),b=d.default.button.withConfig({displayName:"AddRecipeModalstyles__Button",componentId:"sc-2szc1y-4"})(["padding:1rem 2rem;color:",";background-color:",";border:none;border-radius:6px;transition:background-color 0.2s,transform 0.2s;cursor:pointer;&:hover{background-color:",";transform:scale(1.05);}"],(function(e){return e.theme.colors.lightFont}),(function(e){var t=e.closeBtn,n=e.theme;return t?n.colors.grey:n.colors.secondaryColor}),(function(e){return e.theme.colors.darkerPrimary})),g=d.default.form.withConfig({displayName:"AddRecipeModalstyles__ModalForm",componentId:"sc-2szc1y-5"})(["width:100%;height:100%;padding:2rem;@media only screen and (max-width:320px){min-height:400px;overflow-y:scroll;}@media only screen and (min-width:768px){height:auto;overflow:auto;}"]),O=n(943),C={title:"",time:"",diet:"",difficulty:"",type:"",preparation:"",ingredients:""},w=function(){var e=(0,l.useContext)(u.s),t=e.isModalOpen,n=e.closeModal,r=(0,l.useState)(C),s=r[0],d=r[1],f=(0,l.useState)(),p=f[0],w=f[1],E=(0,l.useState)(),_=E[0],M=E[1],S=s.title,N=s.time,A=s.diet,R=s.difficulty,j=s.type,x=s.preparation,k=s.ingredients,T="undefined"!=typeof window&&window,P=T?JSON.parse(T.localStorage.getItem("token")):null,D=function(){var e=(0,o.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("files",p),n.append("refId",_),n.append("ref","recipes"),n.append("field","img"),console.log(n),e.next=9,i().post("https://slurp-website.herokuapp.com/upload",n).then((function(e){var t=e.data[0].id;console.log(t)})).catch((function(e){return console.log(e)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=(0,o.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i().post("https://slurp-website.herokuapp.com/recipes",{title:S,time:N,diet:A,difficulty:R,type:j,preparation:x,ingredients:k},{headers:{Authorization:"Bearer "+P}}).then((function(e){console.log(e),M(e.data.id),D(t)})).catch((function(e){return console.log(e)}));case 3:n(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t;d(Object.assign({},s,((t={})[e.target.name]=e.target.value,t))),console.log(s)},I=function(e){var t,n=e.target,o=n.options[n.selectedIndex].value;d(Object.assign({},s,((t={})[n.id]=o,t))),console.log(s)};return l.createElement(m,{appElement:"undefined"!=typeof window?document.getElementById("___gatsby"):null,isOpen:t,onRequestClose:n},l.createElement(h,null,"Add recipe"),l.createElement(g,{onSubmit:function(e){F(e)}},l.createElement(v,null,l.createElement(c.Z,{onChange:L,width:"70",nameId:"title",content:"tytuł"}),l.createElement(c.Z,{content:"czas",onChange:L,width:"25",nameId:"time",type:"number"})),l.createElement(v,null,l.createElement(O.ZP,{nameId:"diet",content:"dieta",onChange:I,values:["zbilansowana","wege","wegańska","bez-laktozy"]}),l.createElement(O.ZP,{nameId:"difficulty",content:"trudność",onChange:I,values:["łatwe","średnie","trudne"]}),l.createElement(O.ZP,{nameId:"diet",content:"dieta",onChange:I,values:["śniadanie","lunch","obiad","deser","napój"]})),l.createElement(c.Z,{content:"przygotowanie",onChange:L,textarea:!0,nameId:"preparation",type:"textarea"}),l.createElement(c.Z,{content:"składniki",onChange:L,textarea:!0,nameId:"ingredients",type:"textarea"}),l.createElement(c.Z,{content:"zdjęcie",onChange:function(e){w(e.target.files[0])},nameId:"image",type:"file"}),l.createElement(y,null,l.createElement(b,{type:"submit",style:{marginRight:"1rem"}},"Dodaj przepis"),l.createElement(b,{onClick:function(e){return n(e)},closeBtn:!0},"Anuluj"))))}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=90f6bdda0ba17a41b8d96adba15ebad398887e8b-14656cb5cbec78f5a7ca.js.map