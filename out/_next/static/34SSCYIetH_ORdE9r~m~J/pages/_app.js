(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),u=n("sLSF"),a=n("MI3g"),o=n("a7VT"),l=n("Tit0"),i=n("q1tI"),c=n.n(i),s=n("8Bbg"),f=n.n(s),p=n("PgRs"),d=n.n(p),h=n("p8yR"),v={background:"red"};n.d(t,"default",function(){return m});var m=function(e){function t(){return Object(r.default)(this,t),Object(a.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return c.a.createElement(s.Container,null,c.a.createElement(d.a,null,c.a.createElement("title",null,"My first next.js page")),c.a.createElement(h.ThemeProvider,{theme:v},c.a.createElement(t,n)))}}]),t}(f.a)},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),u=r(n("ln6h")),a=r(n("+oT+")),o=r(n("UXZV")),l=r(n("/HRN")),i=r(n("WaGi")),c=r(n("ZDA2")),s=r(n("/+P4")),f=r(n("N9n2")),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=p(n("q1tI")),v=d(n("lgD3")),m=n("Bu4q"),y=n("20a2"),b=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"getChildContext",value:function(){return{router:y.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,u=T(t);return h.default.createElement(g,null,h.default.createElement(n,(0,o.default)({},r,{url:u})))}}],[{key:"getInitialProps",value:function(){var e=(0,a.default)(u.default.mark(function e(t){var n,r,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,m.loadGetInitialProps(n,r);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);b.childContextTypes={router:v.default.object},t.default=b;var g=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=g;var w=m.execOnce(function(){0});function T(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,u=n||t;return e.push(r,u)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,u=n||t;return e.replace(r,u)}}}t.createUrl=T},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])}},[["GcxT",1,0]]]);