(this.webpackJsonpportfoliofrontend=this.webpackJsonpportfoliofrontend||[]).push([[6],{242:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(74);var r=a(91);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},243:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,a){return(c=r()?Reflect.construct:function(e,t,a){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return a&&n(c,a.prototype),c}).apply(null,arguments)}a.d(t,"a",(function(){return c}))},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(1),r=a(2),c=a(4),o=(a(7),a(0)),i=a.n(o),s=a(15),l=a(75),u=a(76),d=a(3),p=a(112),f=a(103);function h(e){var t=e.children,a=e.className,r=e.content,o=e.textAlign,p=Object(c.a)(Object(s.c)(o),"description",a),f=Object(l.a)(h,e),b=Object(u.a)(h,e);return i.a.createElement(b,Object(n.a)({},f,{className:p}),d.a.isNil(t)?r:t)}h.handledProps=["as","children","className","content","textAlign"],h.propTypes={};var b=h;function v(e){var t=e.children,a=e.className,r=e.content,o=e.textAlign,p=Object(c.a)(Object(s.c)(o),"header",a),f=Object(l.a)(v,e),h=Object(u.a)(v,e);return i.a.createElement(h,Object(n.a)({},f,{className:p}),d.a.isNil(t)?r:t)}v.handledProps=["as","children","className","content","textAlign"],v.propTypes={};var m=v;function O(e){var t=e.children,a=e.className,r=e.content,o=e.textAlign,p=Object(c.a)(Object(s.c)(o),"meta",a),f=Object(l.a)(O,e),h=Object(u.a)(O,e);return i.a.createElement(h,Object(n.a)({},f,{className:p}),d.a.isNil(t)?r:t)}O.handledProps=["as","children","className","content","textAlign"],O.propTypes={};var j=O;function y(e){var t=e.children,a=e.className,r=e.content,o=e.description,p=e.extra,h=e.header,v=e.meta,O=e.textAlign,g=Object(c.a)(Object(s.a)(p,"extra"),Object(s.c)(O),"content",a),N=Object(l.a)(y,e),E=Object(u.a)(y,e);return d.a.isNil(t)?d.a.isNil(r)?i.a.createElement(E,Object(n.a)({},N,{className:g}),Object(f.a)(m,(function(e){return{content:e}}),h,{autoGenerateKey:!1}),Object(f.a)(j,(function(e){return{content:e}}),v,{autoGenerateKey:!1}),Object(f.a)(b,(function(e){return{content:e}}),o,{autoGenerateKey:!1})):i.a.createElement(E,Object(n.a)({},N,{className:g}),r):i.a.createElement(E,Object(n.a)({},N,{className:g}),t)}y.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],y.propTypes={};var g=y,N=a(226);function E(e){var t=e.centered,a=e.children,r=e.className,o=e.content,p=e.doubling,f=e.items,h=e.itemsPerRow,b=e.stackable,v=e.textAlign,m=Object(c.a)("ui",Object(s.a)(t,"centered"),Object(s.a)(p,"doubling"),Object(s.a)(b,"stackable"),Object(s.c)(v),Object(s.f)(h),"cards",r),O=Object(l.a)(E,e),j=Object(u.a)(E,e);if(!d.a.isNil(a))return i.a.createElement(j,Object(n.a)({},O,{className:m}),a);if(!d.a.isNil(o))return i.a.createElement(j,Object(n.a)({},O,{className:m}),o);var y=Object(N.a)(f,(function(e){var t,a=null!=(t=e.key)?t:[e.header,e.description].join("-");return i.a.createElement(x,Object(n.a)({key:a},e))}));return i.a.createElement(j,Object(n.a)({},O,{className:m}),y)}E.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],E.propTypes={};var k=E,x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){var a=t.props.onClick;a&&a(e,t.props)},t}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,a=e.centered,r=e.children,o=e.className,f=e.color,h=e.content,b=e.description,v=e.extra,m=e.fluid,O=e.header,j=e.href,y=e.image,N=e.link,E=e.meta,k=e.onClick,x=e.raised,S=Object(c.a)("ui",f,Object(s.a)(a,"centered"),Object(s.a)(m,"fluid"),Object(s.a)(N,"link"),Object(s.a)(x,"raised"),"card",o),w=Object(l.a)(t,this.props),C=Object(u.a)(t,this.props,(function(){if(k)return"a"}));return d.a.isNil(r)?d.a.isNil(h)?i.a.createElement(C,Object(n.a)({},w,{className:S,href:j,onClick:this.handleClick}),p.a.create(y,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(b||O||E)&&i.a.createElement(g,{description:b,header:O,meta:E}),v&&i.a.createElement(g,{extra:!0},v)):i.a.createElement(C,Object(n.a)({},w,{className:S,href:j,onClick:this.handleClick}),h):i.a.createElement(C,Object(n.a)({},w,{className:S,href:j,onClick:this.handleClick}),r)},t}(o.Component);x.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"],x.propTypes={},x.Content=g,x.Description=b,x.Group=k,x.Header=m,x.Meta=j},252:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var n=a(14),r=a(0),c=a(86),o=a(225),i=a(36),s=a(197),l=a(227),u=a(236),d=a(213),p=a(185),f=a(180),h=a(188);function b(){var e=Object(p.a)(1),t={lead:void 0,follow:void 0,crossfadeOpacity:!1,preserveFollowOpacity:!1},a=Object(n.a)({},t),r={},c={},o=!1,l=null,u=0;function b(a,r){var c=t.lead,s=t.follow;o=!0,l=null;var u=!1,d=function(){u=!0,c&&c.scheduleRender(),s&&s.scheduleRender()},b=function(){o=!1,l=Object(i.d)().timestamp};return r=r&&Object(h.a)(r,"crossfade"),function(e,t,a){void 0===a&&(a={});var n=Object(f.a)(e)?e:Object(p.a)(e);return Object(h.b)("",n,t,a),{stop:function(){return n.stop()}}}(e,a,Object(n.a)(Object(n.a)({},r),{onUpdate:d,onComplete:function(){u?b():(e.set(a),i.b.read(b)),d()}}))}function O(){var a,n,o=Object(i.d)().timestamp,l=t.lead,p=t.follow;if(o!==u&&l){u=o;var f=l.getLatestValues();Object.assign(r,f);var h=p?p.getLatestValues():t.prevValues;Object.assign(c,h);var b=e.get(),O=null!==(a=f.opacity)&&void 0!==a?a:1,N=null!==(n=null===h||void 0===h?void 0:h.opacity)&&void 0!==n?n:1;t.crossfadeOpacity&&p?(r.opacity=Object(s.a)(!1!==p.isVisible?0:N,O,v(b)),c.opacity=t.preserveFollowOpacity?N:Object(s.a)(N,0,m(b))):p||(r.opacity=Object(s.a)(N,O,b)),function(e,t,a,n,r,c){for(var o=0;o<y;o++){var i="border"+j[o]+"Radius",l=g(n,i),u=g(a,i);if((void 0!==l||void 0!==u)&&(l||(l=0),u||(u=0),"number"===typeof l&&"number"===typeof u)){var p=Math.max(Object(s.a)(l,u,c),0);e[i]=t[i]=p}}if(n.rotate||a.rotate){var f=Object(s.a)(n.rotate||0,a.rotate||0,c);e.rotate=t.rotate=f}!r&&a.backgroundColor&&n.backgroundColor&&(e.backgroundColor=t.backgroundColor=Object(d.a)(n.backgroundColor,a.backgroundColor)(c))}(r,c,f,h||{},Boolean(p),b)}}return{isActive:function(){return r&&(o||Object(i.d)().timestamp===l)},fromLead:function(e){return b(0,e)},toLead:function(n){var r=0;return t.prevValues||t.follow?a.lead===t.follow&&a.follow===t.lead&&(r=1-e.get()):r=1,e.set(r),b(1,n)},reset:function(){return e.set(1)},stop:function(){return e.stop()},getCrossfadeState:function(e){return O(),e===t.lead?r:e===t.follow?c:void 0},setOptions:function(e){a=t,t=e,r={},c={}},getLatestValues:function(){return r}}}var v=O(0,.5,l.j),m=O(.5,.95,l.n);function O(e,t,a){return function(n){return n<e?0:n>t?1:a(Object(u.a)(e,t,n))}}var j=["TopLeft","TopRight","BottomLeft","BottomRight"],y=j.length;function g(e,t){var a;return null!==(a=e[t])&&void 0!==a?a:e.borderRadius}function N(){var e,t,a,r=new Set,i={leadIsExiting:!1},s=Object(n.a)({},i),l=b(),u=!1;return{add:function(e){e.setCrossfader(l),r.add(e),a&&(e.prevDragCursor=a),i.lead||(i.lead=e)},remove:function(e){r.delete(e)},getLead:function(){return i.lead},updateSnapshot:function(){if(i.lead){e=l.isActive()?l.getLatestValues():i.lead.getLatestValues(),t=i.lead.prevViewportBox;var n=o.b.get(i.lead);n&&n.isDragging&&(a=n.cursorProgress)}},clearSnapshot:function(){a=t=void 0},updateLeadAndFollow:function(){var t,a,o;s=Object(n.a)({},i);for(var d=Array.from(r),p=d.length;p--;p>=0){var f=d[p];if(a&&(null!==o&&void 0!==o||(o=f)),null!==a&&void 0!==a||(a=f),a&&o)break}i.lead=a,i.follow=o,i.leadIsExiting=(null===(t=i.lead)||void 0===t?void 0:t.presence)===c.a.Exiting,l.setOptions({lead:a,follow:o,prevValues:e,crossfadeOpacity:(null===o||void 0===o?void 0:o.isPresenceRoot)||(null===a||void 0===a?void 0:a.isPresenceRoot)}),i.lead===s.follow||s.lead===i.lead&&s.leadIsExiting===i.leadIsExiting||(u=!0)},animate:function(e,a){var n;if(void 0===a&&(a=!1),e===i.lead){a?e.pointTo(i.lead):e.setVisibility(!0);var r={},o=null===(n=i.follow)||void 0===n?void 0:n.getProjectionParent();if(o&&(r.prevParent=o),e.presence===c.a.Entering?r.originBox=i.follow?i.follow.prevViewportBox:t:e.presence===c.a.Exiting&&(r.targetBox=function(){var e;return null===(e=i.follow)||void 0===e?void 0:e.getLayoutState().layout}()),u){u=!1;var s=e.getDefaultTransition();e.presence===c.a.Entering?l.toLead(s):l.fromLead(s)}e.notifyLayoutReady(r)}else a?i.lead&&e.pointTo(i.lead):e.setVisibility(!1)}}}var E=a(73),k=a(187),x=a(181);var S=a(77),w=a(69),C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.children=new Set,t.stacks=new Map,t.hasMounted=!1,t.updateScheduled=!1,t.renderScheduled=!1,t.syncContext=Object(n.a)(Object(n.a)({},Object(S.a)()),{syncUpdate:function(e){return t.scheduleUpdate(e)},forceUpdate:function(){t.syncContext=Object(n.a)({},t.syncContext),t.scheduleUpdate(!0)},register:function(e){return t.addChild(e)},remove:function(e){return t.removeChild(e)}}),t}return Object(n.b)(t,e),t.prototype.componentDidMount=function(){this.hasMounted=!0},t.prototype.componentDidUpdate=function(){this.startLayoutAnimation()},t.prototype.shouldComponentUpdate=function(){return this.renderScheduled=!0,!0},t.prototype.startLayoutAnimation=function(){var e=this;this.renderScheduled=this.updateScheduled=!1;var t=this.props.type;this.children.forEach((function(e){e.isPresent?e.presence!==c.a.Entering&&(e.presence=e.presence===c.a.Exiting?c.a.Entering:c.a.Present):e.presence=c.a.Exiting})),this.updateStacks();var a={layoutReady:function(a){void 0!==a.getLayoutId()?e.getStack(a).animate(a,"crossfade"===t):a.notifyLayoutReady()},parent:this.context.visualElement};this.children.forEach((function(t){return e.syncContext.add(t)})),this.syncContext.flush(a),this.stacks.forEach((function(e){return e.clearSnapshot()}))},t.prototype.updateStacks=function(){this.stacks.forEach((function(e){return e.updateLeadAndFollow()}))},t.prototype.scheduleUpdate=function(e){void 0===e&&(e=!1),!e&&this.updateScheduled||(this.updateScheduled=!0,this.children.forEach((function(e){!function(e){for(var t=!1,a={},n=0;n<x.d.length;n++){var r="rotate"+x.d[n];e.hasValue(r)&&0!==e.getStaticValue(r)&&(t=!0,a[r]=e.getStaticValue(r),e.setStaticValue(r,0))}if(t){for(var r in e.syncRender(),a)e.setStaticValue(r,a[r]);e.scheduleRender()}}(e),e.shouldResetTransform()&&e.resetTransform()})),this.children.forEach(w.c),this.stacks.forEach((function(e){return e.updateSnapshot()})),!e&&this.renderScheduled||(this.renderScheduled=!0,this.forceUpdate()))},t.prototype.addChild=function(e){this.children.add(e),this.addToStack(e),e.presence=this.hasMounted?c.a.Entering:c.a.Present},t.prototype.removeChild=function(e){this.scheduleUpdate(),this.children.delete(e),this.removeFromStack(e)},t.prototype.addToStack=function(e){var t=this.getStack(e);null===t||void 0===t||t.add(e)},t.prototype.removeFromStack=function(e){var t=this.getStack(e);null===t||void 0===t||t.remove(e)},t.prototype.getStack=function(e){var t=e.getLayoutId();if(void 0!==t)return!this.stacks.has(t)&&this.stacks.set(t,N()),this.stacks.get(t)},t.prototype.render=function(){return r.createElement(E.b.Provider,{value:this.syncContext},this.props.children)},t.contextType=k.a,t}(r.Component)},253:function(e,t,a){"use strict";var n=a(1),r=a(4),c=(a(7),a(0)),o=a.n(c),i=a(15),s=a(75),l=a(76),u=a(3);function d(e){var t=e.children,a=e.className,c=e.content,p=e.image,f=Object(r.a)(Object(i.a)(p,"image"),"header",a),h=Object(s.a)(d,e),b=Object(l.a)(d,e);return o.a.createElement(b,Object(n.a)({},h,{className:f}),u.a.isNil(t)?c:t)}d.handledProps=["as","children","className","content","image"],d.propTypes={};var p=d;function f(e){var t=e.className,a=e.square,c=e.rectangular,u=Object(r.a)(Object(i.a)(a,"square"),Object(i.a)(c,"rectangular"),"image",t),d=Object(s.a)(f,e),p=Object(l.a)(f,e);return o.a.createElement(p,Object(n.a)({},d,{className:u}))}f.handledProps=["as","className","rectangular","square"],f.propTypes={};var h=f;function b(e){var t=e.className,a=e.length,c=Object(r.a)("line",a,t),i=Object(s.a)(b,e),u=Object(l.a)(b,e);return o.a.createElement(u,Object(n.a)({},i,{className:c}))}b.handledProps=["as","className","length"],b.propTypes={};var v=b;function m(e){var t=e.children,a=e.className,c=e.content,i=Object(r.a)("paragraph",a),d=Object(s.a)(m,e),p=Object(l.a)(m,e);return o.a.createElement(p,Object(n.a)({},d,{className:i}),u.a.isNil(t)?c:t)}m.handledProps=["as","children","className","content"],m.propTypes={};var O=m;function j(e){var t=e.children,a=e.className,c=e.content,d=e.fluid,p=e.inverted,f=Object(r.a)("ui",Object(i.a)(d,"fluid"),Object(i.a)(p,"inverted"),"placeholder",a),h=Object(s.a)(j,e),b=Object(l.a)(j,e);return o.a.createElement(b,Object(n.a)({},h,{className:f}),u.a.isNil(t)?c:t)}j.handledProps=["as","children","className","content","fluid","inverted"],j.propTypes={},j.Header=p,j.Image=h,j.Line=v,j.Paragraph=O;t.a=j},257:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(14),r=a(178),c=a(209),o=a(206);function i(){var e=!1,t=[],a=new Set,i={subscribe:function(e){return a.add(e),function(){a.delete(e)}},start:function(n,r){if(e){var o=[];return a.forEach((function(e){o.push(Object(c.a)(e,n,{transitionOverride:r}))})),Promise.all(o)}return new Promise((function(e){t.push({animation:[n,r],resolve:e})}))},set:function(t){return Object(r.a)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),a.forEach((function(e){Object(o.d)(e,t)}))},stop:function(){a.forEach((function(e){Object(c.b)(e)}))},mount:function(){return e=!0,t.forEach((function(e){var t=e.animation,a=e.resolve;i.start.apply(i,Object(n.e)([],Object(n.c)(t))).then(a)})),function(){e=!1,i.stop()}}};return i}var s=a(0),l=a(68);function u(){var e=Object(l.a)(i);return Object(s.useEffect)(e.mount,[]),e}}}]);
//# sourceMappingURL=6.b87008be.chunk.js.map