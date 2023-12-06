function fg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function wl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pg={exports:{}},kl={},hg={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),fx=Symbol.for("react.portal"),px=Symbol.for("react.fragment"),hx=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),yx=Symbol.for("react.forward_ref"),xx=Symbol.for("react.suspense"),wx=Symbol.for("react.memo"),kx=Symbol.for("react.lazy"),Op=Symbol.iterator;function bx(e){return e===null||typeof e!="object"?null:(e=Op&&e[Op]||e["@@iterator"],typeof e=="function"?e:null)}var mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gg=Object.assign,vg={};function ni(e,t,n){this.props=e,this.context=t,this.refs=vg,this.updater=n||mg}ni.prototype.isReactComponent={};ni.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ni.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yg(){}yg.prototype=ni.prototype;function Ad(e,t,n){this.props=e,this.context=t,this.refs=vg,this.updater=n||mg}var Md=Ad.prototype=new yg;Md.constructor=Ad;gg(Md,ni.prototype);Md.isPureReactComponent=!0;var Lp=Array.isArray,xg=Object.prototype.hasOwnProperty,Dd={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function kg(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)xg.call(t,r)&&!wg.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ba,type:e,key:i,ref:a,props:o,_owner:Dd.current}}function Sx(e,t){return{$$typeof:ba,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _d(e){return typeof e=="object"&&e!==null&&e.$$typeof===ba}function Cx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ap=/\/+/g;function dc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cx(""+e.key):t.toString(36)}function xs(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ba:case fx:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+dc(a,0):r,Lp(o)?(n="",e!=null&&(n=e.replace(Ap,"$&/")+"/"),xs(o,t,n,"",function(u){return u})):o!=null&&(_d(o)&&(o=Sx(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ap,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Lp(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+dc(i,s);a+=xs(i,t,n,c,o)}else if(c=bx(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+dc(i,s++),a+=xs(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ba(e,t,n){if(e==null)return e;var r=[],o=0;return xs(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ex(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},ws={transition:null},jx={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:ws,ReactCurrentOwner:Dd};q.Children={map:Ba,forEach:function(e,t,n){Ba(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ba(e,function(){t++}),t},toArray:function(e){return Ba(e,function(t){return t})||[]},only:function(e){if(!_d(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ni;q.Fragment=px;q.Profiler=mx;q.PureComponent=Ad;q.StrictMode=hx;q.Suspense=xx;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gg({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Dd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)xg.call(t,c)&&!wg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ba,type:e.type,key:o,ref:i,props:r,_owner:a}};q.createContext=function(e){return e={$$typeof:vx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gx,_context:e},e.Consumer=e};q.createElement=kg;q.createFactory=function(e){var t=kg.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:yx,render:e}};q.isValidElement=_d;q.lazy=function(e){return{$$typeof:kx,_payload:{_status:-1,_result:e},_init:Ex}};q.memo=function(e,t){return{$$typeof:wx,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=ws.transition;ws.transition={};try{e()}finally{ws.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return mt.current.useCallback(e,t)};q.useContext=function(e){return mt.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};q.useEffect=function(e,t){return mt.current.useEffect(e,t)};q.useId=function(){return mt.current.useId()};q.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return mt.current.useMemo(e,t)};q.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};q.useRef=function(e){return mt.current.useRef(e)};q.useState=function(e){return mt.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return mt.current.useTransition()};q.version="18.2.0";hg.exports=q;var x=hg.exports;const _e=wl(x),Px=fg({__proto__:null,default:_e},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx=x,Rx=Symbol.for("react.element"),Nx=Symbol.for("react.fragment"),Ix=Object.prototype.hasOwnProperty,Ox=Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lx={key:!0,ref:!0,__self:!0,__source:!0};function bg(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ix.call(t,r)&&!Lx.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Rx,type:e,key:i,ref:a,props:o,_owner:Ox.current}}kl.Fragment=Nx;kl.jsx=bg;kl.jsxs=bg;pg.exports=kl;var l=pg.exports,au={},Sg={exports:{}},It={},Cg={exports:{}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,_){var F=N.length;N.push(_);e:for(;0<F;){var X=F-1>>>1,V=N[X];if(0<o(V,_))N[X]=_,N[F]=V,F=X;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var _=N[0],F=N.pop();if(F!==_){N[0]=F;e:for(var X=0,V=N.length,le=V>>>1;X<le;){var ue=2*(X+1)-1,Xe=N[ue],$e=ue+1,Qe=N[$e];if(0>o(Xe,F))$e<V&&0>o(Qe,Xe)?(N[X]=Qe,N[$e]=F,X=$e):(N[X]=Xe,N[ue]=F,X=ue);else if($e<V&&0>o(Qe,F))N[X]=Qe,N[$e]=F,X=$e;else break e}}return _}function o(N,_){var F=N.sortIndex-_.sortIndex;return F!==0?F:N.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],d=1,f=null,p=3,w=!1,k=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=N)r(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(u)}}function m(N){if(b=!1,v(N),!k)if(n(c)!==null)k=!0,Oe(E);else{var _=n(u);_!==null&&me(m,_.startTime-N)}}function E(N,_){k=!1,b&&(b=!1,g(O),O=-1),w=!0;var F=p;try{for(v(_),f=n(c);f!==null&&(!(f.expirationTime>_)||N&&!Z());){var X=f.callback;if(typeof X=="function"){f.callback=null,p=f.priorityLevel;var V=X(f.expirationTime<=_);_=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(c)&&r(c),v(_)}else r(c);f=n(c)}if(f!==null)var le=!0;else{var ue=n(u);ue!==null&&me(m,ue.startTime-_),le=!1}return le}finally{f=null,p=F,w=!1}}var T=!1,j=null,O=-1,M=5,z=-1;function Z(){return!(e.unstable_now()-z<M)}function Se(){if(j!==null){var N=e.unstable_now();z=N;var _=!0;try{_=j(!0,N)}finally{_?he():(T=!1,j=null)}}else T=!1}var he;if(typeof h=="function")he=function(){h(Se)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,se=dt.port2;dt.port1.onmessage=Se,he=function(){se.postMessage(null)}}else he=function(){C(Se,0)};function Oe(N){j=N,T||(T=!0,he())}function me(N,_){O=C(function(){N(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Oe(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var _=3;break;default:_=p}var F=p;p=_;try{return N()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,_){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=p;p=N;try{return _()}finally{p=F}},e.unstable_scheduleCallback=function(N,_,F){var X=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?X+F:X):F=X,N){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=F+V,N={id:d++,callback:_,priorityLevel:N,startTime:F,expirationTime:V,sortIndex:-1},F>X?(N.sortIndex=F,t(u,N),n(c)===null&&N===n(u)&&(b?(g(O),O=-1):b=!0,me(m,F-X))):(N.sortIndex=V,t(c,N),k||w||(k=!0,Oe(E))),N},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(N){var _=p;return function(){var F=p;p=_;try{return N.apply(this,arguments)}finally{p=F}}}})(Eg);Cg.exports=Eg;var Ax=Cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg=x,Nt=Ax;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,Zi={};function ro(e,t){Bo(e,t),Bo(e+"Capture",t)}function Bo(e,t){for(Zi[e]=t,e=0;e<t.length;e++)Pg.add(t[e])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=Object.prototype.hasOwnProperty,Mx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},Dp={};function Dx(e){return su.call(Dp,e)?!0:su.call(Mp,e)?!1:Mx.test(e)?Dp[e]=!0:(Mp[e]=!0,!1)}function _x(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fx(e,t,n,r){if(t===null||typeof t>"u"||_x(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fd=/[\-:]([a-z])/g;function $d(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fd,$d);ot[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fd,$d);ot[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fd,$d);ot[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function zd(e,t,n,r){var o=ot.hasOwnProperty(t)?ot[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fx(t,n,o,r)&&(n=null),r||o===null?Dx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Fn=jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),go=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Rg=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),Ng=Symbol.for("react.offscreen"),_p=Symbol.iterator;function mi(e){return e===null||typeof e!="object"?null:(e=_p&&e[_p]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,fc;function Ni(e){if(fc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fc=t&&t[1]||""}return`
`+fc+e}var pc=!1;function hc(e,t){if(!e||pc)return"";pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{pc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ni(e):""}function $x(e){switch(e.tag){case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return e=hc(e.type,!1),e;case 11:return e=hc(e.type.render,!1),e;case 1:return e=hc(e.type,!0),e;default:return""}}function du(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vo:return"Fragment";case go:return"Portal";case lu:return"Profiler";case Ud:return"StrictMode";case cu:return"Suspense";case uu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rg:return(e.displayName||"Context")+".Consumer";case Tg:return(e._context.displayName||"Context")+".Provider";case Bd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hd:return t=e.displayName||null,t!==null?t:du(e.type)||"Memo";case Qn:t=e._payload,e=e._init;try{return du(e(t))}catch{}}return null}function zx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return du(t);case 8:return t===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ig(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ux(e){var t=Ig(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wa(e){e._valueTracker||(e._valueTracker=Ux(e))}function Og(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ig(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fu(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lg(e,t){t=t.checked,t!=null&&zd(e,"checked",t,!1)}function pu(e,t){Lg(e,t);var n=hr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hu(e,t.type,n):t.hasOwnProperty("defaultValue")&&hu(e,t.type,hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $p(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hu(e,t,n){(t!=="number"||_s(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ii=Array.isArray;function Lo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function mu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Ii(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hr(n)}}function Ag(e,t){var n=hr(t.value),r=hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Up(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ya,Dg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bx=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(e){Bx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_i[t]=_i[e]})});function _g(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_i.hasOwnProperty(e)&&_i[e]?(""+t).trim():t+"px"}function Fg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=_g(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hx=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vu(e,t){if(t){if(Hx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function yu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xu=null;function Wd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wu=null,Ao=null,Mo=null;function Bp(e){if(e=Ea(e)){if(typeof wu!="function")throw Error(I(280));var t=e.stateNode;t&&(t=jl(t),wu(e.stateNode,e.type,t))}}function $g(e){Ao?Mo?Mo.push(e):Mo=[e]:Ao=e}function zg(){if(Ao){var e=Ao,t=Mo;if(Mo=Ao=null,Bp(e),t)for(e=0;e<t.length;e++)Bp(t[e])}}function Ug(e,t){return e(t)}function Bg(){}var mc=!1;function Hg(e,t,n){if(mc)return e(t,n);mc=!0;try{return Ug(e,t,n)}finally{mc=!1,(Ao!==null||Mo!==null)&&(Bg(),zg())}}function qi(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var ku=!1;if(Nn)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){ku=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{ku=!1}function Wx(e,t,n,r,o,i,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Fi=!1,Fs=null,$s=!1,bu=null,Yx={onError:function(e){Fi=!0,Fs=e}};function Vx(e,t,n,r,o,i,a,s,c){Fi=!1,Fs=null,Wx.apply(Yx,arguments)}function Gx(e,t,n,r,o,i,a,s,c){if(Vx.apply(this,arguments),Fi){if(Fi){var u=Fs;Fi=!1,Fs=null}else throw Error(I(198));$s||($s=!0,bu=u)}}function oo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hp(e){if(oo(e)!==e)throw Error(I(188))}function Kx(e){var t=e.alternate;if(!t){if(t=oo(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Hp(o),e;if(i===r)return Hp(o),t;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Yg(e){return e=Kx(e),e!==null?Vg(e):null}function Vg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vg(e);if(t!==null)return t;e=e.sibling}return null}var Gg=Nt.unstable_scheduleCallback,Wp=Nt.unstable_cancelCallback,Xx=Nt.unstable_shouldYield,Qx=Nt.unstable_requestPaint,De=Nt.unstable_now,Zx=Nt.unstable_getCurrentPriorityLevel,Yd=Nt.unstable_ImmediatePriority,Kg=Nt.unstable_UserBlockingPriority,zs=Nt.unstable_NormalPriority,Jx=Nt.unstable_LowPriority,Xg=Nt.unstable_IdlePriority,bl=null,mn=null;function qx(e){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:nw,ew=Math.log,tw=Math.LN2;function nw(e){return e>>>=0,e===0?32:31-(ew(e)/tw|0)|0}var Va=64,Ga=4194304;function Oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Us(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Oi(s):(i&=a,i!==0&&(r=Oi(i)))}else a=n&~o,a!==0?r=Oi(a):i!==0&&(r=Oi(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tn(t),o=1<<n,r|=e[n],t&=~o;return r}function rw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ow(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-tn(i),s=1<<a,c=o[a];c===-1?(!(s&n)||s&r)&&(o[a]=rw(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function Su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qg(){var e=Va;return Va<<=1,!(Va&4194240)&&(Va=64),e}function gc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tn(t),e[t]=n}function iw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Vd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ae=0;function Zg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jg,Gd,qg,ev,tv,Cu=!1,Ka=[],or=null,ir=null,ar=null,ea=new Map,ta=new Map,qn=[],aw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ea.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(t.pointerId)}}function vi(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ea(t),t!==null&&Gd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function sw(e,t,n,r,o){switch(t){case"focusin":return or=vi(or,e,t,n,r,o),!0;case"dragenter":return ir=vi(ir,e,t,n,r,o),!0;case"mouseover":return ar=vi(ar,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ea.set(i,vi(ea.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ta.set(i,vi(ta.get(i)||null,e,t,n,r,o)),!0}return!1}function nv(e){var t=Ar(e.target);if(t!==null){var n=oo(t);if(n!==null){if(t=n.tag,t===13){if(t=Wg(n),t!==null){e.blockedOn=t,tv(e.priority,function(){qg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xu=r,n.target.dispatchEvent(r),xu=null}else return t=Ea(n),t!==null&&Gd(t),e.blockedOn=n,!1;t.shift()}return!0}function Vp(e,t,n){ks(e)&&n.delete(t)}function lw(){Cu=!1,or!==null&&ks(or)&&(or=null),ir!==null&&ks(ir)&&(ir=null),ar!==null&&ks(ar)&&(ar=null),ea.forEach(Vp),ta.forEach(Vp)}function yi(e,t){e.blockedOn===t&&(e.blockedOn=null,Cu||(Cu=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,lw)))}function na(e){function t(o){return yi(o,e)}if(0<Ka.length){yi(Ka[0],e);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===e&&(r.blockedOn=null)}}for(or!==null&&yi(or,e),ir!==null&&yi(ir,e),ar!==null&&yi(ar,e),ea.forEach(t),ta.forEach(t),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)nv(n),n.blockedOn===null&&qn.shift()}var Do=Fn.ReactCurrentBatchConfig,Bs=!0;function cw(e,t,n,r){var o=ae,i=Do.transition;Do.transition=null;try{ae=1,Kd(e,t,n,r)}finally{ae=o,Do.transition=i}}function uw(e,t,n,r){var o=ae,i=Do.transition;Do.transition=null;try{ae=4,Kd(e,t,n,r)}finally{ae=o,Do.transition=i}}function Kd(e,t,n,r){if(Bs){var o=Eu(e,t,n,r);if(o===null)jc(e,t,r,Hs,n),Yp(e,r);else if(sw(o,e,t,n,r))r.stopPropagation();else if(Yp(e,r),t&4&&-1<aw.indexOf(e)){for(;o!==null;){var i=Ea(o);if(i!==null&&Jg(i),i=Eu(e,t,n,r),i===null&&jc(e,t,r,Hs,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else jc(e,t,r,null,n)}}var Hs=null;function Eu(e,t,n,r){if(Hs=null,e=Wd(r),e=Ar(e),e!==null)if(t=oo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hs=e,null}function rv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zx()){case Yd:return 1;case Kg:return 4;case zs:case Jx:return 16;case Xg:return 536870912;default:return 16}default:return 16}}var tr=null,Xd=null,bs=null;function ov(){if(bs)return bs;var e,t=Xd,n=t.length,r,o="value"in tr?tr.value:tr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return bs=o.slice(e,1<r?1-r:void 0)}function Ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xa(){return!0}function Gp(){return!1}function Ot(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xa:Gp,this.isPropagationStopped=Gp,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),t}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=Ot(ri),Ca=Te({},ri,{view:0,detail:0}),dw=Ot(Ca),vc,yc,xi,Sl=Te({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(vc=e.screenX-xi.screenX,yc=e.screenY-xi.screenY):yc=vc=0,xi=e),vc)},movementY:function(e){return"movementY"in e?e.movementY:yc}}),Kp=Ot(Sl),fw=Te({},Sl,{dataTransfer:0}),pw=Ot(fw),hw=Te({},Ca,{relatedTarget:0}),xc=Ot(hw),mw=Te({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),gw=Ot(mw),vw=Te({},ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yw=Ot(vw),xw=Te({},ri,{data:0}),Xp=Ot(xw),ww={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bw[e])?!!t[e]:!1}function Zd(){return Sw}var Cw=Te({},Ca,{key:function(e){if(e.key){var t=ww[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ew=Ot(Cw),jw=Te({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=Ot(jw),Pw=Te({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),Tw=Ot(Pw),Rw=Te({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nw=Ot(Rw),Iw=Te({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ow=Ot(Iw),Lw=[9,13,27,32],Jd=Nn&&"CompositionEvent"in window,$i=null;Nn&&"documentMode"in document&&($i=document.documentMode);var Aw=Nn&&"TextEvent"in window&&!$i,iv=Nn&&(!Jd||$i&&8<$i&&11>=$i),Zp=String.fromCharCode(32),Jp=!1;function av(e,t){switch(e){case"keyup":return Lw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yo=!1;function Mw(e,t){switch(e){case"compositionend":return sv(t);case"keypress":return t.which!==32?null:(Jp=!0,Zp);case"textInput":return e=t.data,e===Zp&&Jp?null:e;default:return null}}function Dw(e,t){if(yo)return e==="compositionend"||!Jd&&av(e,t)?(e=ov(),bs=Xd=tr=null,yo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return iv&&t.locale!=="ko"?null:t.data;default:return null}}var _w={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_w[e.type]:t==="textarea"}function lv(e,t,n,r){$g(r),t=Ws(t,"onChange"),0<t.length&&(n=new Qd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zi=null,ra=null;function Fw(e){xv(e,0)}function Cl(e){var t=ko(e);if(Og(t))return e}function $w(e,t){if(e==="change")return t}var cv=!1;if(Nn){var wc;if(Nn){var kc="oninput"in document;if(!kc){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),kc=typeof eh.oninput=="function"}wc=kc}else wc=!1;cv=wc&&(!document.documentMode||9<document.documentMode)}function th(){zi&&(zi.detachEvent("onpropertychange",uv),ra=zi=null)}function uv(e){if(e.propertyName==="value"&&Cl(ra)){var t=[];lv(t,ra,e,Wd(e)),Hg(Fw,t)}}function zw(e,t,n){e==="focusin"?(th(),zi=t,ra=n,zi.attachEvent("onpropertychange",uv)):e==="focusout"&&th()}function Uw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(ra)}function Bw(e,t){if(e==="click")return Cl(t)}function Hw(e,t){if(e==="input"||e==="change")return Cl(t)}function Ww(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var on=typeof Object.is=="function"?Object.is:Ww;function oa(e,t){if(on(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!su.call(t,o)||!on(e[o],t[o]))return!1}return!0}function nh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rh(e,t){var n=nh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nh(n)}}function dv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fv(){for(var e=window,t=_s();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_s(e.document)}return t}function qd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yw(e){var t=fv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dv(n.ownerDocument.documentElement,n)){if(r!==null&&qd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=rh(n,i);var a=rh(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vw=Nn&&"documentMode"in document&&11>=document.documentMode,xo=null,ju=null,Ui=null,Pu=!1;function oh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pu||xo==null||xo!==_s(r)||(r=xo,"selectionStart"in r&&qd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ui&&oa(Ui,r)||(Ui=r,r=Ws(ju,"onSelect"),0<r.length&&(t=new Qd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xo)))}function Qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wo={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},bc={},pv={};Nn&&(pv=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function El(e){if(bc[e])return bc[e];if(!wo[e])return e;var t=wo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pv)return bc[e]=t[n];return e}var hv=El("animationend"),mv=El("animationiteration"),gv=El("animationstart"),vv=El("transitionend"),yv=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(e,t){yv.set(e,t),ro(t,[e])}for(var Sc=0;Sc<ih.length;Sc++){var Cc=ih[Sc],Gw=Cc.toLowerCase(),Kw=Cc[0].toUpperCase()+Cc.slice(1);br(Gw,"on"+Kw)}br(hv,"onAnimationEnd");br(mv,"onAnimationIteration");br(gv,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(vv,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function ah(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gx(r,t,void 0,e),e.currentTarget=null}function xv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;ah(o,s,u),i=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;ah(o,s,u),i=c}}}if($s)throw e=bu,$s=!1,bu=null,e}function ye(e,t){var n=t[Ou];n===void 0&&(n=t[Ou]=new Set);var r=e+"__bubble";n.has(r)||(wv(t,e,2,!1),n.add(r))}function Ec(e,t,n){var r=0;t&&(r|=4),wv(n,e,r,t)}var Za="_reactListening"+Math.random().toString(36).slice(2);function ia(e){if(!e[Za]){e[Za]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(Xw.has(n)||Ec(n,!1,e),Ec(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Za]||(t[Za]=!0,Ec("selectionchange",!1,t))}}function wv(e,t,n,r){switch(rv(t)){case 1:var o=cw;break;case 4:o=uw;break;default:o=Kd}n=o.bind(null,t,n,e),o=void 0,!ku||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function jc(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ar(s),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Hg(function(){var u=i,d=Wd(n),f=[];e:{var p=yv.get(e);if(p!==void 0){var w=Qd,k=e;switch(e){case"keypress":if(Ss(n)===0)break e;case"keydown":case"keyup":w=Ew;break;case"focusin":k="focus",w=xc;break;case"focusout":k="blur",w=xc;break;case"beforeblur":case"afterblur":w=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=pw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Tw;break;case hv:case mv:case gv:w=gw;break;case vv:w=Nw;break;case"scroll":w=dw;break;case"wheel":w=Ow;break;case"copy":case"cut":case"paste":w=yw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Qp}var b=(t&4)!==0,C=!b&&e==="scroll",g=b?p!==null?p+"Capture":null:p;b=[];for(var h=u,v;h!==null;){v=h;var m=v.stateNode;if(v.tag===5&&m!==null&&(v=m,g!==null&&(m=qi(h,g),m!=null&&b.push(aa(h,m,v)))),C)break;h=h.return}0<b.length&&(p=new w(p,k,null,n,d),f.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==xu&&(k=n.relatedTarget||n.fromElement)&&(Ar(k)||k[In]))break e;if((w||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=u,k=k?Ar(k):null,k!==null&&(C=oo(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=u),w!==k)){if(b=Kp,m="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=Qp,m="onPointerLeave",g="onPointerEnter",h="pointer"),C=w==null?p:ko(w),v=k==null?p:ko(k),p=new b(m,h+"leave",w,n,d),p.target=C,p.relatedTarget=v,m=null,Ar(d)===u&&(b=new b(g,h+"enter",k,n,d),b.target=v,b.relatedTarget=C,m=b),C=m,w&&k)t:{for(b=w,g=k,h=0,v=b;v;v=uo(v))h++;for(v=0,m=g;m;m=uo(m))v++;for(;0<h-v;)b=uo(b),h--;for(;0<v-h;)g=uo(g),v--;for(;h--;){if(b===g||g!==null&&b===g.alternate)break t;b=uo(b),g=uo(g)}b=null}else b=null;w!==null&&sh(f,p,w,b,!1),k!==null&&C!==null&&sh(f,C,k,b,!0)}}e:{if(p=u?ko(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var E=$w;else if(qp(p))if(cv)E=Hw;else{E=Uw;var T=zw}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Bw);if(E&&(E=E(e,u))){lv(f,E,n,d);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&hu(p,"number",p.value)}switch(T=u?ko(u):window,e){case"focusin":(qp(T)||T.contentEditable==="true")&&(xo=T,ju=u,Ui=null);break;case"focusout":Ui=ju=xo=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,oh(f,n,d);break;case"selectionchange":if(Vw)break;case"keydown":case"keyup":oh(f,n,d)}var j;if(Jd)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else yo?av(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(iv&&n.locale!=="ko"&&(yo||O!=="onCompositionStart"?O==="onCompositionEnd"&&yo&&(j=ov()):(tr=d,Xd="value"in tr?tr.value:tr.textContent,yo=!0)),T=Ws(u,O),0<T.length&&(O=new Xp(O,e,null,n,d),f.push({event:O,listeners:T}),j?O.data=j:(j=sv(n),j!==null&&(O.data=j)))),(j=Aw?Mw(e,n):Dw(e,n))&&(u=Ws(u,"onBeforeInput"),0<u.length&&(d=new Xp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=j))}xv(f,t)})}function aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ws(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=qi(e,n),i!=null&&r.unshift(aa(e,i,o)),i=qi(e,t),i!=null&&r.push(aa(e,i,o))),e=e.return}return r}function uo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sh(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,o?(c=qi(n,i),c!=null&&a.unshift(aa(n,c,s))):o||(c=qi(n,i),c!=null&&a.push(aa(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Qw=/\r\n?/g,Zw=/\u0000|\uFFFD/g;function lh(e){return(typeof e=="string"?e:""+e).replace(Qw,`
`).replace(Zw,"")}function Ja(e,t,n){if(t=lh(t),lh(e)!==t&&n)throw Error(I(425))}function Ys(){}var Tu=null,Ru=null;function Nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Iu=typeof setTimeout=="function"?setTimeout:void 0,Jw=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(e){return ch.resolve(null).then(e).catch(e2)}:Iu;function e2(e){setTimeout(function(){throw e})}function Pc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);na(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var oi=Math.random().toString(36).slice(2),fn="__reactFiber$"+oi,sa="__reactProps$"+oi,In="__reactContainer$"+oi,Ou="__reactEvents$"+oi,t2="__reactListeners$"+oi,n2="__reactHandles$"+oi;function Ar(e){var t=e[fn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[In]||n[fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uh(e);e!==null;){if(n=e[fn])return n;e=uh(e)}return t}e=n,n=e.parentNode}return null}function Ea(e){return e=e[fn]||e[In],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ko(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function jl(e){return e[sa]||null}var Lu=[],bo=-1;function Sr(e){return{current:e}}function ke(e){0>bo||(e.current=Lu[bo],Lu[bo]=null,bo--)}function pe(e,t){bo++,Lu[bo]=e.current,e.current=t}var mr={},ct=Sr(mr),bt=Sr(!1),Vr=mr;function Ho(e,t){var n=e.type.contextTypes;if(!n)return mr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function St(e){return e=e.childContextTypes,e!=null}function Vs(){ke(bt),ke(ct)}function dh(e,t,n){if(ct.current!==mr)throw Error(I(168));pe(ct,t),pe(bt,n)}function kv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,zx(e)||"Unknown",o));return Te({},n,r)}function Gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Vr=ct.current,pe(ct,e),pe(bt,bt.current),!0}function fh(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=kv(e,t,Vr),r.__reactInternalMemoizedMergedChildContext=e,ke(bt),ke(ct),pe(ct,e)):ke(bt),pe(bt,n)}var Cn=null,Pl=!1,Tc=!1;function bv(e){Cn===null?Cn=[e]:Cn.push(e)}function r2(e){Pl=!0,bv(e)}function Cr(){if(!Tc&&Cn!==null){Tc=!0;var e=0,t=ae;try{var n=Cn;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Cn=null,Pl=!1}catch(o){throw Cn!==null&&(Cn=Cn.slice(e+1)),Gg(Yd,Cr),o}finally{ae=t,Tc=!1}}return null}var So=[],Co=0,Ks=null,Xs=0,Ft=[],$t=0,Gr=null,En=1,jn="";function Nr(e,t){So[Co++]=Xs,So[Co++]=Ks,Ks=e,Xs=t}function Sv(e,t,n){Ft[$t++]=En,Ft[$t++]=jn,Ft[$t++]=Gr,Gr=e;var r=En;e=jn;var o=32-tn(r)-1;r&=~(1<<o),n+=1;var i=32-tn(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,En=1<<32-tn(t)+o|n<<o|r,jn=i+e}else En=1<<i|n<<o|r,jn=e}function ef(e){e.return!==null&&(Nr(e,1),Sv(e,1,0))}function tf(e){for(;e===Ks;)Ks=So[--Co],So[Co]=null,Xs=So[--Co],So[Co]=null;for(;e===Gr;)Gr=Ft[--$t],Ft[$t]=null,jn=Ft[--$t],Ft[$t]=null,En=Ft[--$t],Ft[$t]=null}var Tt=null,Pt=null,Ce=!1,qt=null;function Cv(e,t){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ph(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Pt=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gr!==null?{id:En,overflow:jn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Pt=null,!0):!1;default:return!1}}function Au(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mu(e){if(Ce){var t=Pt;if(t){var n=t;if(!ph(e,t)){if(Au(e))throw Error(I(418));t=sr(n.nextSibling);var r=Tt;t&&ph(e,t)?Cv(r,n):(e.flags=e.flags&-4097|2,Ce=!1,Tt=e)}}else{if(Au(e))throw Error(I(418));e.flags=e.flags&-4097|2,Ce=!1,Tt=e}}}function hh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function qa(e){if(e!==Tt)return!1;if(!Ce)return hh(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nu(e.type,e.memoizedProps)),t&&(t=Pt)){if(Au(e))throw Ev(),Error(I(418));for(;t;)Cv(e,t),t=sr(t.nextSibling)}if(hh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=sr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=Tt?sr(e.stateNode.nextSibling):null;return!0}function Ev(){for(var e=Pt;e;)e=sr(e.nextSibling)}function Wo(){Pt=Tt=null,Ce=!1}function nf(e){qt===null?qt=[e]:qt.push(e)}var o2=Fn.ReactCurrentBatchConfig;function Qt(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Qs=Sr(null),Zs=null,Eo=null,rf=null;function of(){rf=Eo=Zs=null}function af(e){var t=Qs.current;ke(Qs),e._currentValue=t}function Du(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _o(e,t){Zs=e,rf=Eo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(kt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(rf!==e)if(e={context:e,memoizedValue:t,next:null},Eo===null){if(Zs===null)throw Error(I(308));Eo=e,Zs.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var Mr=null;function sf(e){Mr===null?Mr=[e]:Mr.push(e)}function jv(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,sf(t)):(n.next=o.next,o.next=n),t.interleaved=n,On(e,r)}function On(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zn=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,On(e,n)}return o=r.interleaved,o===null?(t.next=t,sf(r)):(t.next=o.next,o.next=t),r.interleaved=t,On(e,n)}function Cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vd(e,n)}}function mh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Js(e,t,n,r){var o=e.updateQueue;Zn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=o.baseState;a=0,d=u=c=null,s=i;do{var p=s.lane,w=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,b=s;switch(p=t,w=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){f=k.call(w,f,p);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,p=typeof k=="function"?k.call(w,f,p):k,p==null)break e;f=Te({},f,p);break e;case 2:Zn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=w,c=f):d=d.next=w,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(d===null&&(c=f),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xr|=a,e.lanes=a,e.memoizedState=f}}function gh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var Tv=new jg.Component().refs;function _u(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tl={isMounted:function(e){return(e=e._reactInternals)?oo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ht(),o=ur(e),i=Pn(r,o);i.payload=t,n!=null&&(i.callback=n),t=lr(e,i,o),t!==null&&(nn(t,e,o,r),Cs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ht(),o=ur(e),i=Pn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=lr(e,i,o),t!==null&&(nn(t,e,o,r),Cs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ht(),r=ur(e),o=Pn(n,r);o.tag=2,t!=null&&(o.callback=t),t=lr(e,o,r),t!==null&&(nn(t,e,r,n),Cs(t,e,r))}};function vh(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!oa(n,r)||!oa(o,i):!0}function Rv(e,t,n){var r=!1,o=mr,i=t.contextType;return typeof i=="object"&&i!==null?i=Ht(i):(o=St(t)?Vr:ct.current,r=t.contextTypes,i=(r=r!=null)?Ho(e,o):mr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function yh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function Fu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Tv,lf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ht(i):(i=St(t)?Vr:ct.current,o.context=Ho(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_u(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Tl.enqueueReplaceState(o,o.state,null),Js(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===Tv&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function es(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xh(e){var t=e._init;return t(e._payload)}function Nv(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function o(g,h){return g=dr(g,h),g.index=0,g.sibling=null,g}function i(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,v,m){return h===null||h.tag!==6?(h=Mc(v,g.mode,m),h.return=g,h):(h=o(h,v),h.return=g,h)}function c(g,h,v,m){var E=v.type;return E===vo?d(g,h,v.props.children,m,v.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qn&&xh(E)===h.type)?(m=o(h,v.props),m.ref=wi(g,h,v),m.return=g,m):(m=Ns(v.type,v.key,v.props,null,g.mode,m),m.ref=wi(g,h,v),m.return=g,m)}function u(g,h,v,m){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Dc(v,g.mode,m),h.return=g,h):(h=o(h,v.children||[]),h.return=g,h)}function d(g,h,v,m,E){return h===null||h.tag!==7?(h=Hr(v,g.mode,m,E),h.return=g,h):(h=o(h,v),h.return=g,h)}function f(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Mc(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ha:return v=Ns(h.type,h.key,h.props,null,g.mode,v),v.ref=wi(g,null,h),v.return=g,v;case go:return h=Dc(h,g.mode,v),h.return=g,h;case Qn:var m=h._init;return f(g,m(h._payload),v)}if(Ii(h)||mi(h))return h=Hr(h,g.mode,v,null),h.return=g,h;es(g,h)}return null}function p(g,h,v,m){var E=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:s(g,h,""+v,m);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:return v.key===E?c(g,h,v,m):null;case go:return v.key===E?u(g,h,v,m):null;case Qn:return E=v._init,p(g,h,E(v._payload),m)}if(Ii(v)||mi(v))return E!==null?null:d(g,h,v,m,null);es(g,v)}return null}function w(g,h,v,m,E){if(typeof m=="string"&&m!==""||typeof m=="number")return g=g.get(v)||null,s(h,g,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ha:return g=g.get(m.key===null?v:m.key)||null,c(h,g,m,E);case go:return g=g.get(m.key===null?v:m.key)||null,u(h,g,m,E);case Qn:var T=m._init;return w(g,h,v,T(m._payload),E)}if(Ii(m)||mi(m))return g=g.get(v)||null,d(h,g,m,E,null);es(h,m)}return null}function k(g,h,v,m){for(var E=null,T=null,j=h,O=h=0,M=null;j!==null&&O<v.length;O++){j.index>O?(M=j,j=null):M=j.sibling;var z=p(g,j,v[O],m);if(z===null){j===null&&(j=M);break}e&&j&&z.alternate===null&&t(g,j),h=i(z,h,O),T===null?E=z:T.sibling=z,T=z,j=M}if(O===v.length)return n(g,j),Ce&&Nr(g,O),E;if(j===null){for(;O<v.length;O++)j=f(g,v[O],m),j!==null&&(h=i(j,h,O),T===null?E=j:T.sibling=j,T=j);return Ce&&Nr(g,O),E}for(j=r(g,j);O<v.length;O++)M=w(j,g,O,v[O],m),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?O:M.key),h=i(M,h,O),T===null?E=M:T.sibling=M,T=M);return e&&j.forEach(function(Z){return t(g,Z)}),Ce&&Nr(g,O),E}function b(g,h,v,m){var E=mi(v);if(typeof E!="function")throw Error(I(150));if(v=E.call(v),v==null)throw Error(I(151));for(var T=E=null,j=h,O=h=0,M=null,z=v.next();j!==null&&!z.done;O++,z=v.next()){j.index>O?(M=j,j=null):M=j.sibling;var Z=p(g,j,z.value,m);if(Z===null){j===null&&(j=M);break}e&&j&&Z.alternate===null&&t(g,j),h=i(Z,h,O),T===null?E=Z:T.sibling=Z,T=Z,j=M}if(z.done)return n(g,j),Ce&&Nr(g,O),E;if(j===null){for(;!z.done;O++,z=v.next())z=f(g,z.value,m),z!==null&&(h=i(z,h,O),T===null?E=z:T.sibling=z,T=z);return Ce&&Nr(g,O),E}for(j=r(g,j);!z.done;O++,z=v.next())z=w(j,g,O,z.value,m),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?O:z.key),h=i(z,h,O),T===null?E=z:T.sibling=z,T=z);return e&&j.forEach(function(Se){return t(g,Se)}),Ce&&Nr(g,O),E}function C(g,h,v,m){if(typeof v=="object"&&v!==null&&v.type===vo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:e:{for(var E=v.key,T=h;T!==null;){if(T.key===E){if(E=v.type,E===vo){if(T.tag===7){n(g,T.sibling),h=o(T,v.props.children),h.return=g,g=h;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qn&&xh(E)===T.type){n(g,T.sibling),h=o(T,v.props),h.ref=wi(g,T,v),h.return=g,g=h;break e}n(g,T);break}else t(g,T);T=T.sibling}v.type===vo?(h=Hr(v.props.children,g.mode,m,v.key),h.return=g,g=h):(m=Ns(v.type,v.key,v.props,null,g.mode,m),m.ref=wi(g,h,v),m.return=g,g=m)}return a(g);case go:e:{for(T=v.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=o(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Dc(v,g.mode,m),h.return=g,g=h}return a(g);case Qn:return T=v._init,C(g,h,T(v._payload),m)}if(Ii(v))return k(g,h,v,m);if(mi(v))return b(g,h,v,m);es(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=o(h,v),h.return=g,g=h):(n(g,h),h=Mc(v,g.mode,m),h.return=g,g=h),a(g)):n(g,h)}return C}var Yo=Nv(!0),Iv=Nv(!1),ja={},gn=Sr(ja),la=Sr(ja),ca=Sr(ja);function Dr(e){if(e===ja)throw Error(I(174));return e}function cf(e,t){switch(pe(ca,t),pe(la,e),pe(gn,ja),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gu(t,e)}ke(gn),pe(gn,t)}function Vo(){ke(gn),ke(la),ke(ca)}function Ov(e){Dr(ca.current);var t=Dr(gn.current),n=gu(t,e.type);t!==n&&(pe(la,e),pe(gn,n))}function uf(e){la.current===e&&(ke(gn),ke(la))}var je=Sr(0);function qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rc=[];function df(){for(var e=0;e<Rc.length;e++)Rc[e]._workInProgressVersionPrimary=null;Rc.length=0}var Es=Fn.ReactCurrentDispatcher,Nc=Fn.ReactCurrentBatchConfig,Kr=0,Pe=null,Ye=null,Ze=null,el=!1,Bi=!1,ua=0,i2=0;function it(){throw Error(I(321))}function ff(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!on(e[n],t[n]))return!1;return!0}function pf(e,t,n,r,o,i){if(Kr=i,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Es.current=e===null||e.memoizedState===null?c2:u2,e=n(r,o),Bi){i=0;do{if(Bi=!1,ua=0,25<=i)throw Error(I(301));i+=1,Ze=Ye=null,t.updateQueue=null,Es.current=d2,e=n(r,o)}while(Bi)}if(Es.current=tl,t=Ye!==null&&Ye.next!==null,Kr=0,Ze=Ye=Pe=null,el=!1,t)throw Error(I(300));return e}function hf(){var e=ua!==0;return ua=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Pe.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Wt(){if(Ye===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=Ze===null?Pe.memoizedState:Ze.next;if(t!==null)Ze=t,Ye=e;else{if(e===null)throw Error(I(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Ze===null?Pe.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function da(e,t){return typeof t=="function"?t(e):t}function Ic(e){var t=Wt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Ye,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,c=null,u=i;do{var d=u.lane;if((Kr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=f,a=r):c=c.next=f,Pe.lanes|=d,Xr|=d}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=s,on(r,t.memoizedState)||(kt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Pe.lanes|=i,Xr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);on(i,t.memoizedState)||(kt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Lv(){}function Av(e,t){var n=Pe,r=Wt(),o=t(),i=!on(r.memoizedState,o);if(i&&(r.memoizedState=o,kt=!0),r=r.queue,mf(_v.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,fa(9,Dv.bind(null,n,r,o,t),void 0,null),qe===null)throw Error(I(349));Kr&30||Mv(n,t,o)}return o}function Mv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dv(e,t,n,r){t.value=n,t.getSnapshot=r,Fv(t)&&$v(e)}function _v(e,t,n){return n(function(){Fv(t)&&$v(e)})}function Fv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!on(e,n)}catch{return!0}}function $v(e){var t=On(e,1);t!==null&&nn(t,e,1,-1)}function wh(e){var t=un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=l2.bind(null,Pe,e),[t.memoizedState,e]}function fa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zv(){return Wt().memoizedState}function js(e,t,n,r){var o=un();Pe.flags|=e,o.memoizedState=fa(1|t,n,void 0,r===void 0?null:r)}function Rl(e,t,n,r){var o=Wt();r=r===void 0?null:r;var i=void 0;if(Ye!==null){var a=Ye.memoizedState;if(i=a.destroy,r!==null&&ff(r,a.deps)){o.memoizedState=fa(t,n,i,r);return}}Pe.flags|=e,o.memoizedState=fa(1|t,n,i,r)}function kh(e,t){return js(8390656,8,e,t)}function mf(e,t){return Rl(2048,8,e,t)}function Uv(e,t){return Rl(4,2,e,t)}function Bv(e,t){return Rl(4,4,e,t)}function Hv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wv(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4,4,Hv.bind(null,t,e),n)}function gf(){}function Yv(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ff(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vv(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ff(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gv(e,t,n){return Kr&21?(on(n,t)||(n=Qg(),Pe.lanes|=n,Xr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=n)}function a2(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=Nc.transition;Nc.transition={};try{e(!1),t()}finally{ae=n,Nc.transition=r}}function Kv(){return Wt().memoizedState}function s2(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xv(e))Qv(t,n);else if(n=jv(e,t,n,r),n!==null){var o=ht();nn(n,e,r,o),Zv(n,t,r)}}function l2(e,t,n){var r=ur(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xv(e))Qv(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,on(s,a)){var c=t.interleaved;c===null?(o.next=o,sf(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=jv(e,t,o,r),n!==null&&(o=ht(),nn(n,e,r,o),Zv(n,t,r))}}function Xv(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Qv(e,t){Bi=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vd(e,n)}}var tl={readContext:Ht,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},c2={readContext:Ht,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:kh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,js(4194308,4,Hv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return js(4194308,4,e,t)},useInsertionEffect:function(e,t){return js(4,2,e,t)},useMemo:function(e,t){var n=un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s2.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:wh,useDebugValue:gf,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=wh(!1),t=e[0];return e=a2.bind(null,e[1]),un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,o=un();if(Ce){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),qe===null)throw Error(I(349));Kr&30||Mv(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,kh(_v.bind(null,r,i,e),[e]),r.flags|=2048,fa(9,Dv.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=un(),t=qe.identifierPrefix;if(Ce){var n=jn,r=En;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=i2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},u2={readContext:Ht,useCallback:Yv,useContext:Ht,useEffect:mf,useImperativeHandle:Wv,useInsertionEffect:Uv,useLayoutEffect:Bv,useMemo:Vv,useReducer:Ic,useRef:zv,useState:function(){return Ic(da)},useDebugValue:gf,useDeferredValue:function(e){var t=Wt();return Gv(t,Ye.memoizedState,e)},useTransition:function(){var e=Ic(da)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:Av,useId:Kv,unstable_isNewReconciler:!1},d2={readContext:Ht,useCallback:Yv,useContext:Ht,useEffect:mf,useImperativeHandle:Wv,useInsertionEffect:Uv,useLayoutEffect:Bv,useMemo:Vv,useReducer:Oc,useRef:zv,useState:function(){return Oc(da)},useDebugValue:gf,useDeferredValue:function(e){var t=Wt();return Ye===null?t.memoizedState=e:Gv(t,Ye.memoizedState,e)},useTransition:function(){var e=Oc(da)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:Av,useId:Kv,unstable_isNewReconciler:!1};function Go(e,t){try{var n="",r=t;do n+=$x(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Lc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $u(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var f2=typeof WeakMap=="function"?WeakMap:Map;function Jv(e,t,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,Xu=r),$u(e,t)},n}function qv(e,t,n){n=Pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$u(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$u(e,t),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function bh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new f2;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=j2.bind(null,e,t,n),t.then(e,e))}function Sh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ch(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pn(-1,1),t.tag=2,lr(n,t,1))),n.lanes|=1),e)}var p2=Fn.ReactCurrentOwner,kt=!1;function pt(e,t,n,r){t.child=e===null?Iv(t,null,n,r):Yo(t,e.child,n,r)}function Eh(e,t,n,r,o){n=n.render;var i=t.ref;return _o(t,o),r=pf(e,t,n,r,i,o),n=hf(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ln(e,t,o)):(Ce&&n&&ef(t),t.flags|=1,pt(e,t,r,o),t.child)}function jh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Cf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,e0(e,t,i,r,o)):(e=Ns(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(a,r)&&e.ref===t.ref)return Ln(e,t,o)}return t.flags|=1,e=dr(i,r),e.ref=t.ref,e.return=t,t.child=e}function e0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(oa(i,r)&&e.ref===t.ref)if(kt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(kt=!0);else return t.lanes=e.lanes,Ln(e,t,o)}return zu(e,t,n,r,o)}function t0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Po,jt),jt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(Po,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(Po,jt),jt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,pe(Po,jt),jt|=r;return pt(e,t,o,n),t.child}function n0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zu(e,t,n,r,o){var i=St(n)?Vr:ct.current;return i=Ho(t,i),_o(t,o),n=pf(e,t,n,r,i,o),r=hf(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ln(e,t,o)):(Ce&&r&&ef(t),t.flags|=1,pt(e,t,n,o),t.child)}function Ph(e,t,n,r,o){if(St(n)){var i=!0;Gs(t)}else i=!1;if(_o(t,o),t.stateNode===null)Ps(e,t),Rv(t,n,r),Fu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=St(n)?Vr:ct.current,u=Ho(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==u)&&yh(t,a,r,u),Zn=!1;var p=t.memoizedState;a.state=p,Js(t,r,a,o),c=t.memoizedState,s!==r||p!==c||bt.current||Zn?(typeof d=="function"&&(_u(t,n,d,r),c=t.memoizedState),(s=Zn||vh(t,n,s,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Pv(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Qt(t.type,s),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ht(c):(c=St(n)?Vr:ct.current,c=Ho(t,c));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==c)&&yh(t,a,r,c),Zn=!1,p=t.memoizedState,a.state=p,Js(t,r,a,o);var k=t.memoizedState;s!==f||p!==k||bt.current||Zn?(typeof w=="function"&&(_u(t,n,w,r),k=t.memoizedState),(u=Zn||vh(t,n,u,r,p,k,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Uu(e,t,n,r,i,o)}function Uu(e,t,n,r,o,i){n0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&fh(t,n,!1),Ln(e,t,i);r=t.stateNode,p2.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Yo(t,e.child,null,i),t.child=Yo(t,null,s,i)):pt(e,t,s,i),t.memoizedState=r.state,o&&fh(t,n,!0),t.child}function r0(e){var t=e.stateNode;t.pendingContext?dh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dh(e,t.context,!1),cf(e,t.containerInfo)}function Th(e,t,n,r,o){return Wo(),nf(o),t.flags|=256,pt(e,t,n,r),t.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function Hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function o0(e,t,n){var r=t.pendingProps,o=je.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),pe(je,o&1),e===null)return Mu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ol(a,r,0,null),e=Hr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hu(n),t.memoizedState=Bu,e):vf(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return h2(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=dr(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=dr(s,i):(i=Hr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Hu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Bu,r}return i=e.child,e=i.sibling,r=dr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vf(e,t){return t=Ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ts(e,t,n,r){return r!==null&&nf(r),Yo(t,e.child,null,n),e=vf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function h2(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Lc(Error(I(422))),ts(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ol({mode:"visible",children:r.children},o,0,null),i=Hr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Yo(t,e.child,null,a),t.child.memoizedState=Hu(a),t.memoizedState=Bu,i);if(!(t.mode&1))return ts(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(I(419)),r=Lc(i,r,void 0),ts(e,t,a,r)}if(s=(a&e.childLanes)!==0,kt||s){if(r=qe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,On(e,o),nn(r,e,o,-1))}return Sf(),r=Lc(Error(I(421))),ts(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=P2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pt=sr(o.nextSibling),Tt=t,Ce=!0,qt=null,e!==null&&(Ft[$t++]=En,Ft[$t++]=jn,Ft[$t++]=Gr,En=e.id,jn=e.overflow,Gr=t),t=vf(t,r.children),t.flags|=4096,t)}function Rh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Du(e.return,t,n)}function Ac(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function i0(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(pt(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rh(e,n,t);else if(e.tag===19)Rh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(je,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&qs(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ac(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&qs(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ac(t,!0,n,null,i);break;case"together":Ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function m2(e,t,n){switch(t.tag){case 3:r0(t),Wo();break;case 5:Ov(t);break;case 1:St(t.type)&&Gs(t);break;case 4:cf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;pe(Qs,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?o0(e,t,n):(pe(je,je.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);pe(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return i0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,t0(e,t,n)}return Ln(e,t,n)}var a0,Wu,s0,l0;a0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wu=function(){};s0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dr(gn.current);var i=null;switch(n){case"input":o=fu(e,o),r=fu(e,r),i=[];break;case"select":o=Te({},o,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":o=mu(e,o),r=mu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ys)}vu(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zi.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ye("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};l0=function(e,t,n,r){n!==r&&(t.flags|=4)};function ki(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function g2(e,t,n){var r=t.pendingProps;switch(tf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return St(t.type)&&Vs(),at(t),null;case 3:return r=t.stateNode,Vo(),ke(bt),ke(ct),df(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(Ju(qt),qt=null))),Wu(e,t),at(t),null;case 5:uf(t);var o=Dr(ca.current);if(n=t.type,e!==null&&t.stateNode!=null)s0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return at(t),null}if(e=Dr(gn.current),qa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fn]=t,r[sa]=i,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(o=0;o<Li.length;o++)ye(Li[o],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Fp(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":zp(r,i),ye("invalid",r)}vu(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ja(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ja(r.textContent,s,e),o=["children",""+s]):Zi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":Wa(r),$p(r,i,!0);break;case"textarea":Wa(r),Up(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ys)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[fn]=t,e[sa]=r,a0(e,t,!1,!1),t.stateNode=e;e:{switch(a=yu(n,r),n){case"dialog":ye("cancel",e),ye("close",e),o=r;break;case"iframe":case"object":case"embed":ye("load",e),o=r;break;case"video":case"audio":for(o=0;o<Li.length;o++)ye(Li[o],e);o=r;break;case"source":ye("error",e),o=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),o=r;break;case"details":ye("toggle",e),o=r;break;case"input":Fp(e,r),o=fu(e,r),ye("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Te({},r,{value:void 0}),ye("invalid",e);break;case"textarea":zp(e,r),o=mu(e,r),ye("invalid",e);break;default:o=r}vu(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?Fg(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Dg(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ji(e,c):typeof c=="number"&&Ji(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zi.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ye("scroll",e):c!=null&&zd(e,i,c,a))}switch(n){case"input":Wa(e),$p(e,r,!1);break;case"textarea":Wa(e),Up(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Lo(e,!!r.multiple,i,!1):r.defaultValue!=null&&Lo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ys)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)l0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Dr(ca.current),Dr(gn.current),qa(t)){if(r=t.stateNode,n=t.memoizedProps,r[fn]=t,(i=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:Ja(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ja(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=t,t.stateNode=r}return at(t),null;case 13:if(ke(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Pt!==null&&t.mode&1&&!(t.flags&128))Ev(),Wo(),t.flags|=98560,i=!1;else if(i=qa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[fn]=t}else Wo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),i=!1}else qt!==null&&(Ju(qt),qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?Ve===0&&(Ve=3):Sf())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return Vo(),Wu(e,t),e===null&&ia(t.stateNode.containerInfo),at(t),null;case 10:return af(t.type._context),at(t),null;case 17:return St(t.type)&&Vs(),at(t),null;case 19:if(ke(je),i=t.memoizedState,i===null)return at(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)ki(i,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=qs(e),a!==null){for(t.flags|=128,ki(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(je,je.current&1|2),t.child}e=e.sibling}i.tail!==null&&De()>Ko&&(t.flags|=128,r=!0,ki(i,!1),t.lanes=4194304)}else{if(!r)if(e=qs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ki(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Ce)return at(t),null}else 2*De()-i.renderingStartTime>Ko&&n!==1073741824&&(t.flags|=128,r=!0,ki(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=De(),t.sibling=null,n=je.current,pe(je,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return bf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function v2(e,t){switch(tf(t),t.tag){case 1:return St(t.type)&&Vs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vo(),ke(bt),ke(ct),df(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uf(t),null;case 13:if(ke(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Wo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(je),null;case 4:return Vo(),null;case 10:return af(t.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var ns=!1,st=!1,y2=typeof WeakSet=="function"?WeakSet:Set,D=null;function jo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function Yu(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Nh=!1;function x2(e,t){if(Tu=Bs,e=fv(),qd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var w;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(w=f.firstChild)!==null;)p=f,f=w;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=a),p===i&&++d===r&&(c=a),(w=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=w}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ru={focusedElem:e,selectionRange:n},Bs=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,C=k.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:Qt(t.type,b),C);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(m){Re(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return k=Nh,Nh=!1,k}function Hi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Yu(t,n,i)}o=o.next}while(o!==r)}}function Nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function c0(e){var t=e.alternate;t!==null&&(e.alternate=null,c0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[fn],delete t[sa],delete t[Ou],delete t[t2],delete t[n2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function u0(e){return e.tag===5||e.tag===3||e.tag===4}function Ih(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||u0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ys));else if(r!==4&&(e=e.child,e!==null))for(Gu(e,t,n),e=e.sibling;e!==null;)Gu(e,t,n),e=e.sibling}function Ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ku(e,t,n),e=e.sibling;e!==null;)Ku(e,t,n),e=e.sibling}var nt=null,Zt=!1;function Vn(e,t,n){for(n=n.child;n!==null;)d0(e,t,n),n=n.sibling}function d0(e,t,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:st||jo(n,t);case 6:var r=nt,o=Zt;nt=null,Vn(e,t,n),nt=r,Zt=o,nt!==null&&(Zt?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Zt?(e=nt,n=n.stateNode,e.nodeType===8?Pc(e.parentNode,n):e.nodeType===1&&Pc(e,n),na(e)):Pc(nt,n.stateNode));break;case 4:r=nt,o=Zt,nt=n.stateNode.containerInfo,Zt=!0,Vn(e,t,n),nt=r,Zt=o;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Yu(n,t,a),o=o.next}while(o!==r)}Vn(e,t,n);break;case 1:if(!st&&(jo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Re(n,t,s)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Vn(e,t,n),st=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function Oh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new y2),t.forEach(function(r){var o=T2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:nt=s.stateNode,Zt=!1;break e;case 3:nt=s.stateNode.containerInfo,Zt=!0;break e;case 4:nt=s.stateNode.containerInfo,Zt=!0;break e}s=s.return}if(nt===null)throw Error(I(160));d0(i,a,o),nt=null,Zt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){Re(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)f0(t,e),t=t.sibling}function f0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),cn(e),r&4){try{Hi(3,e,e.return),Nl(3,e)}catch(b){Re(e,e.return,b)}try{Hi(5,e,e.return)}catch(b){Re(e,e.return,b)}}break;case 1:Xt(t,e),cn(e),r&512&&n!==null&&jo(n,n.return);break;case 5:if(Xt(t,e),cn(e),r&512&&n!==null&&jo(n,n.return),e.flags&32){var o=e.stateNode;try{Ji(o,"")}catch(b){Re(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Lg(o,i),yu(s,a);var u=yu(s,i);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?Fg(o,f):d==="dangerouslySetInnerHTML"?Dg(o,f):d==="children"?Ji(o,f):zd(o,d,f,u)}switch(s){case"input":pu(o,i);break;case"textarea":Ag(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Lo(o,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?Lo(o,!!i.multiple,i.defaultValue,!0):Lo(o,!!i.multiple,i.multiple?[]:"",!1))}o[sa]=i}catch(b){Re(e,e.return,b)}}break;case 6:if(Xt(t,e),cn(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){Re(e,e.return,b)}}break;case 3:if(Xt(t,e),cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(t.containerInfo)}catch(b){Re(e,e.return,b)}break;case 4:Xt(t,e),cn(e);break;case 13:Xt(t,e),cn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(wf=De())),r&4&&Oh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(st=(u=st)||d,Xt(t,e),st=u):Xt(t,e),cn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(f=D=d;D!==null;){switch(p=D,w=p.child,p.tag){case 0:case 11:case 14:case 15:Hi(4,p,p.return);break;case 1:jo(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(b){Re(r,n,b)}}break;case 5:jo(p,p.return);break;case 22:if(p.memoizedState!==null){Ah(f);continue}}w!==null?(w.return=p,D=w):Ah(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=_g("display",a))}catch(b){Re(e,e.return,b)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){Re(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Xt(t,e),cn(e),r&4&&Oh(e);break;case 21:break;default:Xt(t,e),cn(e)}}function cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(u0(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ji(o,""),r.flags&=-33);var i=Ih(e);Ku(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ih(e);Gu(e,s,a);break;default:throw Error(I(161))}}catch(c){Re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function w2(e,t,n){D=e,p0(e)}function p0(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ns;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||st;s=ns;var u=st;if(ns=a,(st=c)&&!u)for(D=o;D!==null;)a=D,c=a.child,a.tag===22&&a.memoizedState!==null?Mh(o):c!==null?(c.return=a,D=c):Mh(o);for(;i!==null;)D=i,p0(i),i=i.sibling;D=o,ns=s,st=u}Lh(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,D=i):Lh(e)}}function Lh(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||Nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&gh(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}st||t.flags&512&&Vu(t)}catch(p){Re(t,t.return,p)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Ah(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Mh(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nl(4,t)}catch(c){Re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Re(t,o,c)}}var i=t.return;try{Vu(t)}catch(c){Re(t,i,c)}break;case 5:var a=t.return;try{Vu(t)}catch(c){Re(t,a,c)}}}catch(c){Re(t,t.return,c)}if(t===e){D=null;break}var s=t.sibling;if(s!==null){s.return=t.return,D=s;break}D=t.return}}var k2=Math.ceil,nl=Fn.ReactCurrentDispatcher,yf=Fn.ReactCurrentOwner,Ut=Fn.ReactCurrentBatchConfig,re=0,qe=null,Be=null,rt=0,jt=0,Po=Sr(0),Ve=0,pa=null,Xr=0,Il=0,xf=0,Wi=null,xt=null,wf=0,Ko=1/0,bn=null,rl=!1,Xu=null,cr=null,rs=!1,nr=null,ol=0,Yi=0,Qu=null,Ts=-1,Rs=0;function ht(){return re&6?De():Ts!==-1?Ts:Ts=De()}function ur(e){return e.mode&1?re&2&&rt!==0?rt&-rt:o2.transition!==null?(Rs===0&&(Rs=Qg()),Rs):(e=ae,e!==0||(e=window.event,e=e===void 0?16:rv(e.type)),e):1}function nn(e,t,n,r){if(50<Yi)throw Yi=0,Qu=null,Error(I(185));Sa(e,n,r),(!(re&2)||e!==qe)&&(e===qe&&(!(re&2)&&(Il|=n),Ve===4&&er(e,rt)),Ct(e,r),n===1&&re===0&&!(t.mode&1)&&(Ko=De()+500,Pl&&Cr()))}function Ct(e,t){var n=e.callbackNode;ow(e,t);var r=Us(e,e===qe?rt:0);if(r===0)n!==null&&Wp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wp(n),t===1)e.tag===0?r2(Dh.bind(null,e)):bv(Dh.bind(null,e)),qw(function(){!(re&6)&&Cr()}),n=null;else{switch(Zg(r)){case 1:n=Yd;break;case 4:n=Kg;break;case 16:n=zs;break;case 536870912:n=Xg;break;default:n=zs}n=k0(n,h0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function h0(e,t){if(Ts=-1,Rs=0,re&6)throw Error(I(327));var n=e.callbackNode;if(Fo()&&e.callbackNode!==n)return null;var r=Us(e,e===qe?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=il(e,r);else{t=r;var o=re;re|=2;var i=g0();(qe!==e||rt!==t)&&(bn=null,Ko=De()+500,Br(e,t));do try{C2();break}catch(s){m0(e,s)}while(1);of(),nl.current=i,re=o,Be!==null?t=0:(qe=null,rt=0,t=Ve)}if(t!==0){if(t===2&&(o=Su(e),o!==0&&(r=o,t=Zu(e,o))),t===1)throw n=pa,Br(e,0),er(e,r),Ct(e,De()),n;if(t===6)er(e,r);else{if(o=e.current.alternate,!(r&30)&&!b2(o)&&(t=il(e,r),t===2&&(i=Su(e),i!==0&&(r=i,t=Zu(e,i))),t===1))throw n=pa,Br(e,0),er(e,r),Ct(e,De()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Ir(e,xt,bn);break;case 3:if(er(e,r),(r&130023424)===r&&(t=wf+500-De(),10<t)){if(Us(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ht(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Iu(Ir.bind(null,e,xt,bn),t);break}Ir(e,xt,bn);break;case 4:if(er(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-tn(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k2(r/1960))-r,10<r){e.timeoutHandle=Iu(Ir.bind(null,e,xt,bn),r);break}Ir(e,xt,bn);break;case 5:Ir(e,xt,bn);break;default:throw Error(I(329))}}}return Ct(e,De()),e.callbackNode===n?h0.bind(null,e):null}function Zu(e,t){var n=Wi;return e.current.memoizedState.isDehydrated&&(Br(e,t).flags|=256),e=il(e,t),e!==2&&(t=xt,xt=n,t!==null&&Ju(t)),e}function Ju(e){xt===null?xt=e:xt.push.apply(xt,e)}function b2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!on(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t){for(t&=~xf,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tn(t),r=1<<n;e[n]=-1,t&=~r}}function Dh(e){if(re&6)throw Error(I(327));Fo();var t=Us(e,0);if(!(t&1))return Ct(e,De()),null;var n=il(e,t);if(e.tag!==0&&n===2){var r=Su(e);r!==0&&(t=r,n=Zu(e,r))}if(n===1)throw n=pa,Br(e,0),er(e,t),Ct(e,De()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,xt,bn),Ct(e,De()),null}function kf(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Ko=De()+500,Pl&&Cr())}}function Qr(e){nr!==null&&nr.tag===0&&!(re&6)&&Fo();var t=re;re|=1;var n=Ut.transition,r=ae;try{if(Ut.transition=null,ae=1,e)return e()}finally{ae=r,Ut.transition=n,re=t,!(re&6)&&Cr()}}function bf(){jt=Po.current,ke(Po)}function Br(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jw(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(tf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vs();break;case 3:Vo(),ke(bt),ke(ct),df();break;case 5:uf(r);break;case 4:Vo();break;case 13:ke(je);break;case 19:ke(je);break;case 10:af(r.type._context);break;case 22:case 23:bf()}n=n.return}if(qe=e,Be=e=dr(e.current,null),rt=jt=t,Ve=0,pa=null,xf=Il=Xr=0,xt=Wi=null,Mr!==null){for(t=0;t<Mr.length;t++)if(n=Mr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Mr=null}return e}function m0(e,t){do{var n=Be;try{if(of(),Es.current=tl,el){for(var r=Pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}el=!1}if(Kr=0,Ze=Ye=Pe=null,Bi=!1,ua=0,yf.current=null,n===null||n.return===null){Ve=1,pa=t,Be=null;break}e:{var i=e,a=n.return,s=n,c=t;if(t=rt,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Sh(a);if(w!==null){w.flags&=-257,Ch(w,a,s,i,t),w.mode&1&&bh(i,u,t),t=w,c=u;var k=t.updateQueue;if(k===null){var b=new Set;b.add(c),t.updateQueue=b}else k.add(c);break e}else{if(!(t&1)){bh(i,u,t),Sf();break e}c=Error(I(426))}}else if(Ce&&s.mode&1){var C=Sh(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ch(C,a,s,i,t),nf(Go(c,s));break e}}i=c=Go(c,s),Ve!==4&&(Ve=2),Wi===null?Wi=[i]:Wi.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Jv(i,c,t);mh(i,g);break e;case 1:s=c;var h=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var m=qv(i,s,t);mh(i,m);break e}}i=i.return}while(i!==null)}y0(n)}catch(E){t=E,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(1)}function g0(){var e=nl.current;return nl.current=tl,e===null?tl:e}function Sf(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),qe===null||!(Xr&268435455)&&!(Il&268435455)||er(qe,rt)}function il(e,t){var n=re;re|=2;var r=g0();(qe!==e||rt!==t)&&(bn=null,Br(e,t));do try{S2();break}catch(o){m0(e,o)}while(1);if(of(),re=n,nl.current=r,Be!==null)throw Error(I(261));return qe=null,rt=0,Ve}function S2(){for(;Be!==null;)v0(Be)}function C2(){for(;Be!==null&&!Xx();)v0(Be)}function v0(e){var t=w0(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?y0(e):Be=t,yf.current=null}function y0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=v2(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Be=null;return}}else if(n=g2(n,t,jt),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ve===0&&(Ve=5)}function Ir(e,t,n){var r=ae,o=Ut.transition;try{Ut.transition=null,ae=1,E2(e,t,n,r)}finally{Ut.transition=o,ae=r}return null}function E2(e,t,n,r){do Fo();while(nr!==null);if(re&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(iw(e,i),e===qe&&(Be=qe=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rs||(rs=!0,k0(zs,function(){return Fo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ut.transition,Ut.transition=null;var a=ae;ae=1;var s=re;re|=4,yf.current=null,x2(e,n),f0(n,e),Yw(Ru),Bs=!!Tu,Ru=Tu=null,e.current=n,w2(n),Qx(),re=s,ae=a,Ut.transition=i}else e.current=n;if(rs&&(rs=!1,nr=e,ol=o),i=e.pendingLanes,i===0&&(cr=null),qx(n.stateNode),Ct(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(rl)throw rl=!1,e=Xu,Xu=null,e;return ol&1&&e.tag!==0&&Fo(),i=e.pendingLanes,i&1?e===Qu?Yi++:(Yi=0,Qu=e):Yi=0,Cr(),null}function Fo(){if(nr!==null){var e=Zg(ol),t=Ut.transition,n=ae;try{if(Ut.transition=null,ae=16>e?16:e,nr===null)var r=!1;else{if(e=nr,nr=null,ol=0,re&6)throw Error(I(331));var o=re;for(re|=4,D=e.current;D!==null;){var i=D,a=i.child;if(D.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Hi(8,d,i)}var f=d.child;if(f!==null)f.return=d,D=f;else for(;D!==null;){d=D;var p=d.sibling,w=d.return;if(c0(d),d===u){D=null;break}if(p!==null){p.return=w,D=p;break}D=w}}}var k=i.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}D=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,D=a;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hi(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,D=g;break e}D=i.return}}var h=e.current;for(D=h;D!==null;){a=D;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,D=v;else e:for(a=h;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Nl(9,s)}}catch(E){Re(s,s.return,E)}if(s===a){D=null;break e}var m=s.sibling;if(m!==null){m.return=s.return,D=m;break e}D=s.return}}if(re=o,Cr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(bl,e)}catch{}r=!0}return r}finally{ae=n,Ut.transition=t}}return!1}function _h(e,t,n){t=Go(n,t),t=Jv(e,t,1),e=lr(e,t,1),t=ht(),e!==null&&(Sa(e,1,t),Ct(e,t))}function Re(e,t,n){if(e.tag===3)_h(e,e,n);else for(;t!==null;){if(t.tag===3){_h(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=Go(n,e),e=qv(t,e,1),t=lr(t,e,1),e=ht(),t!==null&&(Sa(t,1,e),Ct(t,e));break}}t=t.return}}function j2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(rt&n)===n&&(Ve===4||Ve===3&&(rt&130023424)===rt&&500>De()-wf?Br(e,0):xf|=n),Ct(e,t)}function x0(e,t){t===0&&(e.mode&1?(t=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):t=1);var n=ht();e=On(e,t),e!==null&&(Sa(e,t,n),Ct(e,n))}function P2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),x0(e,n)}function T2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),x0(e,n)}var w0;w0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return kt=!1,m2(e,t,n);kt=!!(e.flags&131072)}else kt=!1,Ce&&t.flags&1048576&&Sv(t,Xs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ps(e,t),e=t.pendingProps;var o=Ho(t,ct.current);_o(t,n),o=pf(null,t,r,e,o,n);var i=hf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(i=!0,Gs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,lf(t),o.updater=Tl,t.stateNode=o,o._reactInternals=t,Fu(t,r,e,n),t=Uu(null,t,r,!0,i,n)):(t.tag=0,Ce&&i&&ef(t),pt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ps(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=N2(r),e=Qt(r,e),o){case 0:t=zu(null,t,r,e,n);break e;case 1:t=Ph(null,t,r,e,n);break e;case 11:t=Eh(null,t,r,e,n);break e;case 14:t=jh(null,t,r,Qt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qt(r,o),zu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qt(r,o),Ph(e,t,r,o,n);case 3:e:{if(r0(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Pv(e,t),Js(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Go(Error(I(423)),t),t=Th(e,t,r,n,o);break e}else if(r!==o){o=Go(Error(I(424)),t),t=Th(e,t,r,n,o);break e}else for(Pt=sr(t.stateNode.containerInfo.firstChild),Tt=t,Ce=!0,qt=null,n=Iv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wo(),r===o){t=Ln(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return Ov(t),e===null&&Mu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Nu(r,o)?a=null:i!==null&&Nu(r,i)&&(t.flags|=32),n0(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&Mu(t),null;case 13:return o0(e,t,n);case 4:return cf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yo(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qt(r,o),Eh(e,t,r,o,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,pe(Qs,r._currentValue),r._currentValue=a,i!==null)if(on(i.value,a)){if(i.children===o.children&&!bt.current){t=Ln(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Pn(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Du(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(I(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Du(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}pt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_o(t,n),o=Ht(o),r=r(o),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,o=Qt(r,t.pendingProps),o=Qt(r.type,o),jh(e,t,r,o,n);case 15:return e0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qt(r,o),Ps(e,t),t.tag=1,St(r)?(e=!0,Gs(t)):e=!1,_o(t,n),Rv(t,r,o),Fu(t,r,o,n),Uu(null,t,r,!0,e,n);case 19:return i0(e,t,n);case 22:return t0(e,t,n)}throw Error(I(156,t.tag))};function k0(e,t){return Gg(e,t)}function R2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,r){return new R2(e,t,n,r)}function Cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N2(e){if(typeof e=="function")return Cf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bd)return 11;if(e===Hd)return 14}return 2}function dr(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ns(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Cf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vo:return Hr(n.children,o,i,t);case Ud:a=8,o|=8;break;case lu:return e=zt(12,n,t,o|2),e.elementType=lu,e.lanes=i,e;case cu:return e=zt(13,n,t,o),e.elementType=cu,e.lanes=i,e;case uu:return e=zt(19,n,t,o),e.elementType=uu,e.lanes=i,e;case Ng:return Ol(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tg:a=10;break e;case Rg:a=9;break e;case Bd:a=11;break e;case Hd:a=14;break e;case Qn:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=zt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Hr(e,t,n,r){return e=zt(7,e,r,t),e.lanes=n,e}function Ol(e,t,n,r){return e=zt(22,e,r,t),e.elementType=Ng,e.lanes=n,e.stateNode={isHidden:!1},e}function Mc(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Dc(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gc(0),this.expirationTimes=gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ef(e,t,n,r,o,i,a,s,c){return e=new I2(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=zt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lf(i),e}function O2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function b0(e){if(!e)return mr;e=e._reactInternals;e:{if(oo(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(St(n))return kv(e,n,t)}return t}function S0(e,t,n,r,o,i,a,s,c){return e=Ef(n,r,!0,e,o,i,a,s,c),e.context=b0(null),n=e.current,r=ht(),o=ur(n),i=Pn(r,o),i.callback=t??null,lr(n,i,o),e.current.lanes=o,Sa(e,o,r),Ct(e,r),e}function Ll(e,t,n,r){var o=t.current,i=ht(),a=ur(o);return n=b0(n),t.context===null?t.context=n:t.pendingContext=n,t=Pn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=lr(o,t,a),e!==null&&(nn(e,o,a,i),Cs(e,o,a)),a}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jf(e,t){Fh(e,t),(e=e.alternate)&&Fh(e,t)}function L2(){return null}var C0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pf(e){this._internalRoot=e}Al.prototype.render=Pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Ll(e,t,null,null)};Al.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qr(function(){Ll(null,e,null,null)}),t[In]=null}};function Al(e){this._internalRoot=e}Al.prototype.unstable_scheduleHydration=function(e){if(e){var t=ev();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qn.length&&t!==0&&t<qn[n].priority;n++);qn.splice(n,0,e),n===0&&nv(e)}};function Tf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $h(){}function A2(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=al(a);i.call(u)}}var a=S0(t,r,e,0,null,!1,!1,"",$h);return e._reactRootContainer=a,e[In]=a.current,ia(e.nodeType===8?e.parentNode:e),Qr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=al(c);s.call(u)}}var c=Ef(e,0,!1,null,null,!1,!1,"",$h);return e._reactRootContainer=c,e[In]=c.current,ia(e.nodeType===8?e.parentNode:e),Qr(function(){Ll(t,c,n,r)}),c}function Dl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var c=al(a);s.call(c)}}Ll(t,a,e,o)}else a=A2(n,t,e,o,r);return al(a)}Jg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Oi(t.pendingLanes);n!==0&&(Vd(t,n|1),Ct(t,De()),!(re&6)&&(Ko=De()+500,Cr()))}break;case 13:Qr(function(){var r=On(e,1);if(r!==null){var o=ht();nn(r,e,1,o)}}),jf(e,1)}};Gd=function(e){if(e.tag===13){var t=On(e,134217728);if(t!==null){var n=ht();nn(t,e,134217728,n)}jf(e,134217728)}};qg=function(e){if(e.tag===13){var t=ur(e),n=On(e,t);if(n!==null){var r=ht();nn(n,e,t,r)}jf(e,t)}};ev=function(){return ae};tv=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};wu=function(e,t,n){switch(t){case"input":if(pu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=jl(r);if(!o)throw Error(I(90));Og(r),pu(r,o)}}}break;case"textarea":Ag(e,n);break;case"select":t=n.value,t!=null&&Lo(e,!!n.multiple,t,!1)}};Ug=kf;Bg=Qr;var M2={usingClientEntryPoint:!1,Events:[Ea,ko,jl,$g,zg,kf]},bi={findFiberByHostInstance:Ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},D2={bundleType:bi.bundleType,version:bi.version,rendererPackageName:bi.rendererPackageName,rendererConfig:bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yg(e),e===null?null:e.stateNode},findFiberByHostInstance:bi.findFiberByHostInstance||L2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{bl=os.inject(D2),mn=os}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M2;It.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(t))throw Error(I(200));return O2(e,t,null,n)};It.createRoot=function(e,t){if(!Tf(e))throw Error(I(299));var n=!1,r="",o=C0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ef(e,1,!1,null,null,n,!1,r,o),e[In]=t.current,ia(e.nodeType===8?e.parentNode:e),new Pf(t)};It.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Yg(t),e=e===null?null:e.stateNode,e};It.flushSync=function(e){return Qr(e)};It.hydrate=function(e,t,n){if(!Ml(t))throw Error(I(200));return Dl(null,e,t,!0,n)};It.hydrateRoot=function(e,t,n){if(!Tf(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=C0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=S0(t,null,e,1,n??null,o,!1,i,a),e[In]=t.current,ia(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Al(t)};It.render=function(e,t,n){if(!Ml(t))throw Error(I(200));return Dl(null,e,t,!1,n)};It.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(I(40));return e._reactRootContainer?(Qr(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[In]=null})}),!0):!1};It.unstable_batchedUpdates=kf;It.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Dl(e,t,n,!1,r)};It.version="18.2.0-next-9e3b772b8-20220608";function E0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E0)}catch(e){console.error(e)}}E0(),Sg.exports=It;var Rf=Sg.exports;const _r=wl(Rf),_2=fg({__proto__:null,default:_r},[Rf]);var zh=Rf;au.createRoot=zh.createRoot,au.hydrateRoot=zh.hydrateRoot;/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ne.apply(this,arguments)}var Ae;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ae||(Ae={}));const Uh="popstate";function F2(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return ha("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Jr(o)}return z2(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $2(){return Math.random().toString(36).substr(2,8)}function Bh(e,t){return{usr:e.state,key:e.key,idx:t}}function ha(e,t,n,r){return n===void 0&&(n=null),Ne({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$n(t):t,{state:n,key:t&&t.key||r||$2()})}function Jr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $n(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function z2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Ae.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Ne({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){s=Ae.Pop;let C=d(),g=C==null?null:C-u;u=C,c&&c({action:s,location:b.location,delta:g})}function p(C,g){s=Ae.Push;let h=ha(b.location,C,g);n&&n(h,C),u=d()+1;let v=Bh(h,u),m=b.createHref(h);try{a.pushState(v,"",m)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(m)}i&&c&&c({action:s,location:b.location,delta:1})}function w(C,g){s=Ae.Replace;let h=ha(b.location,C,g);n&&n(h,C),u=d();let v=Bh(h,u),m=b.createHref(h);a.replaceState(v,"",m),i&&c&&c({action:s,location:b.location,delta:0})}function k(C){let g=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof C=="string"?C:Jr(C);return K(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let b={get action(){return s},get location(){return e(o,a)},listen(C){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Uh,f),c=C,()=>{o.removeEventListener(Uh,f),c=null}},createHref(C){return t(o,C)},createURL:k,encodeLocation(C){let g=k(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:w,go(C){return a.go(C)}};return b}var Me;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Me||(Me={}));const U2=new Set(["lazy","caseSensitive","path","id","index","children"]);function B2(e){return e.index===!0}function qu(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,i],s=typeof o.id=="string"?o.id:a.join("-");if(K(o.index!==!0||!o.children,"Cannot specify children on an index route"),K(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),B2(o)){let c=Ne({},o,t(o),{id:s});return r[s]=c,c}else{let c=Ne({},o,t(o),{id:s,children:void 0});return r[s]=c,o.children&&(c.children=qu(o.children,t,a,r)),c}})}function To(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?$n(t):t,o=gr(r.pathname||"/",n);if(o==null)return null;let i=j0(e);W2(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=q2(i[s],tk(o));return a}function H2(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function j0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(K(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Tn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),j0(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Z2(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let c of P0(i.path))o(i,a,c)}),t}function P0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=P0(r.join("/")),s=[];return s.push(...a.map(c=>c===""?i:[i,c].join("/"))),o&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function W2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:J2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Y2=/^:\w+$/,V2=3,G2=2,K2=1,X2=10,Q2=-2,Hh=e=>e==="*";function Z2(e,t){let n=e.split("/"),r=n.length;return n.some(Hh)&&(r+=Q2),t&&(r+=G2),n.filter(o=>!Hh(o)).reduce((o,i)=>o+(Y2.test(i)?V2:i===""?K2:X2),r)}function J2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function q2(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],c=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=ed({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let f=s.route;i.push({params:r,pathname:Tn([o,d.pathname]),pathnameBase:ik(Tn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=Tn([o,d.pathnameBase]))}return i}function ed(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ek(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:w}=d;if(p==="*"){let b=s[f]||"";a=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const k=s[f];return w&&!k?u[p]=void 0:u[p]=nk(k||"",p),u},{}),pathname:i,pathnameBase:a,pattern:e}}function ek(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function tk(e){try{return decodeURI(e)}catch(t){return Zr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nk(e,t){try{return decodeURIComponent(e)}catch(n){return Zr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function rk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?$n(e):e;return{pathname:n?n.startsWith("/")?n:ok(n,t):t,search:ak(r),hash:sk(o)}}function ok(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function _c(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Nf(e){return T0(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function If(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=$n(e):(o=Ne({},e),K(!o.pathname||!o.pathname.includes("?"),_c("?","pathname","search",o)),K(!o.pathname||!o.pathname.includes("#"),_c("#","pathname","hash",o)),K(!o.search||!o.search.includes("#"),_c("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else if(r){let f=t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f.pop();o.pathname=p.join("/")}s="/"+f.join("/")}else{let f=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}s=f>=0?t[f]:"/"}let c=rk(o,s),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Tn=e=>e.join("/").replace(/\/\/+/g,"/"),ik=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ak=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Of{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function R0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const N0=["post","put","patch","delete"],lk=new Set(N0),ck=["get",...N0],uk=new Set(ck),dk=new Set([301,302,303,307,308]),fk=new Set([307,308]),Fc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},pk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Si={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hk=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),O0="remix-router-transitions";function mk(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;K(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let S=e.detectErrorBoundary;o=P=>({hasErrorBoundary:S(P)})}else o=hk;let i={},a=qu(e.routes,o,void 0,i),s,c=e.basename||"/",u=Ne({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,f=new Set,p=null,w=null,k=null,b=e.hydrationData!=null,C=To(a,e.history.location,c),g=null;if(C==null){let S=_t(404,{pathname:e.history.location.pathname}),{matches:P,route:R}=Zh(a);C=P,g={[R.id]:S}}let h=!C.some(S=>S.route.lazy)&&(!C.some(S=>S.route.loader)||e.hydrationData!=null),v,m={historyAction:e.history.action,location:e.history.location,matches:C,initialized:h,navigation:Fc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},E=Ae.Pop,T=!1,j,O=!1,M=new Map,z=null,Z=!1,Se=!1,he=[],dt=[],se=new Map,Oe=0,me=-1,N=new Map,_=new Set,F=new Map,X=new Map,V=new Set,le=new Map,ue=new Map,Xe=!1;function $e(){if(d=e.history.listen(S=>{let{action:P,location:R,delta:L}=S;if(Xe){Xe=!1;return}Zr(ue.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let U=Tp({currentLocation:m.location,nextLocation:R,historyAction:P});if(U&&L!=null){Xe=!0,e.history.go(L*-1),za(U,{state:"blocked",location:R,proceed(){za(U,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(L)},reset(){let Q=new Map(m.blockers);Q.set(U,Si),ge({blockers:Q})}});return}return Et(P,R)}),n){jk(t,M);let S=()=>Pk(t,M);t.addEventListener("pagehide",S),z=()=>t.removeEventListener("pagehide",S)}return m.initialized||Et(Ae.Pop,m.location),v}function Qe(){d&&d(),z&&z(),f.clear(),j&&j.abort(),m.fetchers.forEach((S,P)=>ee(P)),m.blockers.forEach((S,P)=>Pp(P))}function wn(S){return f.add(S),()=>f.delete(S)}function ge(S,P){P===void 0&&(P={}),m=Ne({},m,S);let R=[],L=[];u.v7_fetcherPersist&&m.fetchers.forEach((U,Q)=>{U.state==="idle"&&(V.has(Q)?L.push(Q):R.push(Q))}),[...f].forEach(U=>U(m,{deletedFetchers:L,unstable_viewTransitionOpts:P.viewTransitionOpts,unstable_flushSync:P.flushSync===!0})),u.v7_fetcherPersist&&(R.forEach(U=>m.fetchers.delete(U)),L.forEach(U=>ee(U)))}function Le(S,P,R){var L,U;let{flushSync:Q}=R===void 0?{}:R,Y=m.actionData!=null&&m.navigation.formMethod!=null&&Jt(m.navigation.formMethod)&&m.navigation.state==="loading"&&((L=S.state)==null?void 0:L._isRedirect)!==!0,W;P.actionData?Object.keys(P.actionData).length>0?W=P.actionData:W=null:Y?W=m.actionData:W=null;let B=P.loaderData?Qh(m.loaderData,P.loaderData,P.matches||[],P.errors):m.loaderData,ne=m.blockers;ne.size>0&&(ne=new Map(ne),ne.forEach((de,Ee)=>ne.set(Ee,Si)));let tt=T===!0||m.navigation.formMethod!=null&&Jt(m.navigation.formMethod)&&((U=S.state)==null?void 0:U._isRedirect)!==!0;s&&(a=s,s=void 0),Z||E===Ae.Pop||(E===Ae.Push?e.history.push(S,S.state):E===Ae.Replace&&e.history.replace(S,S.state));let J;if(E===Ae.Pop){let de=M.get(m.location.pathname);de&&de.has(S.pathname)?J={currentLocation:m.location,nextLocation:S}:M.has(S.pathname)&&(J={currentLocation:S,nextLocation:m.location})}else if(O){let de=M.get(m.location.pathname);de?de.add(S.pathname):(de=new Set([S.pathname]),M.set(m.location.pathname,de)),J={currentLocation:m.location,nextLocation:S}}ge(Ne({},P,{actionData:W,loaderData:B,historyAction:E,location:S,initialized:!0,navigation:Fc,revalidation:"idle",restoreScrollPosition:Np(S,P.matches||m.matches),preventScrollReset:tt,blockers:ne}),{viewTransitionOpts:J,flushSync:Q===!0}),E=Ae.Pop,T=!1,O=!1,Z=!1,Se=!1,he=[],dt=[]}async function Hn(S,P){if(typeof S=="number"){e.history.go(S);return}let R=td(m.location,m.matches,c,u.v7_prependBasename,S,P==null?void 0:P.fromRouteId,P==null?void 0:P.relative),{path:L,submission:U,error:Q}=Wh(u.v7_normalizeFormMethod,!1,R,P),Y=m.location,W=ha(m.location,L,P&&P.state);W=Ne({},W,e.history.encodeLocation(W));let B=P&&P.replace!=null?P.replace:void 0,ne=Ae.Push;B===!0?ne=Ae.Replace:B===!1||U!=null&&Jt(U.formMethod)&&U.formAction===m.location.pathname+m.location.search&&(ne=Ae.Replace);let tt=P&&"preventScrollReset"in P?P.preventScrollReset===!0:void 0,J=(P&&P.unstable_flushSync)===!0,de=Tp({currentLocation:Y,nextLocation:W,historyAction:ne});if(de){za(de,{state:"blocked",location:W,proceed(){za(de,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),Hn(S,P)},reset(){let Ee=new Map(m.blockers);Ee.set(de,Si),ge({blockers:Ee})}});return}return await Et(ne,W,{submission:U,pendingError:Q,preventScrollReset:tt,replace:P&&P.replace,enableViewTransition:P&&P.unstable_viewTransition,flushSync:J})}function ao(){if(pi(),ge({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){Et(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}Et(E||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function Et(S,P,R){j&&j.abort(),j=null,E=S,Z=(R&&R.startUninterruptedRevalidation)===!0,cx(m.location,m.matches),T=(R&&R.preventScrollReset)===!0,O=(R&&R.enableViewTransition)===!0;let L=s||a,U=R&&R.overrideNavigation,Q=To(L,P,c),Y=(R&&R.flushSync)===!0;if(!Q){let Ee=_t(404,{pathname:P.pathname}),{matches:ft,route:ln}=Zh(L);ac(),Le(P,{matches:ft,loaderData:{},errors:{[ln.id]:Ee}},{flushSync:Y});return}if(m.initialized&&!Se&&wk(m.location,P)&&!(R&&R.submission&&Jt(R.submission.formMethod))){Le(P,{matches:Q},{flushSync:Y});return}j=new AbortController;let W=Ei(e.history,P,j.signal,R&&R.submission),B,ne;if(R&&R.pendingError)ne={[Vi(Q).route.id]:R.pendingError};else if(R&&R.submission&&Jt(R.submission.formMethod)){let Ee=await kn(W,P,R.submission,Q,{replace:R.replace,flushSync:Y});if(Ee.shortCircuited)return;B=Ee.pendingActionData,ne=Ee.pendingActionError,U=$c(P,R.submission),Y=!1,W=new Request(W.url,{signal:W.signal})}let{shortCircuited:tt,loaderData:J,errors:de}=await ve(W,P,Q,U,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,Y,B,ne);tt||(j=null,Le(P,Ne({matches:Q},B?{actionData:B}:{},{loaderData:J,errors:de})))}async function kn(S,P,R,L,U){U===void 0&&(U={}),pi();let Q=Ck(P,R);ge({navigation:Q},{flushSync:U.flushSync===!0});let Y,W=rd(L,P);if(!W.route.action&&!W.route.lazy)Y={type:Me.error,error:_t(405,{method:S.method,pathname:P.pathname,routeId:W.route.id})};else if(Y=await Ci("action",S,W,L,i,o,c),S.signal.aborted)return{shortCircuited:!0};if($o(Y)){let B;return U&&U.replace!=null?B=U.replace:B=Y.location===m.location.pathname+m.location.search,await Tr(m,Y,{submission:R,replace:B}),{shortCircuited:!0}}if(Gi(Y)){let B=Vi(L,W.route.id);return(U&&U.replace)!==!0&&(E=Ae.Push),{pendingActionData:{},pendingActionError:{[B.route.id]:Y.error}}}if(Fr(Y))throw _t(400,{type:"defer-action"});return{pendingActionData:{[W.route.id]:Y.data}}}async function ve(S,P,R,L,U,Q,Y,W,B,ne){let tt=L||$c(P,U),J=U||Q||em(tt),de=s||a,[Ee,ft]=Yh(e.history,m,R,J,P,Se,he,dt,V,F,_,de,c,B,ne);if(ac(fe=>!(R&&R.some(Dt=>Dt.route.id===fe))||Ee&&Ee.some(Dt=>Dt.route.id===fe)),me=++Oe,Ee.length===0&&ft.length===0){let fe=Ep();return Le(P,Ne({matches:R,loaderData:{},errors:ne||null},B?{actionData:B}:{},fe?{fetchers:new Map(m.fetchers)}:{}),{flushSync:W}),{shortCircuited:!0}}if(!Z){ft.forEach(Dt=>{let ze=m.fetchers.get(Dt.key),Rr=ji(void 0,ze?ze.data:void 0);m.fetchers.set(Dt.key,Rr)});let fe=B||m.actionData;ge(Ne({navigation:tt},fe?Object.keys(fe).length===0?{actionData:null}:{actionData:fe}:{},ft.length>0?{fetchers:new Map(m.fetchers)}:{}),{flushSync:W})}ft.forEach(fe=>{se.has(fe.key)&&Gt(fe.key),fe.controller&&se.set(fe.key,fe.controller)});let ln=()=>ft.forEach(fe=>Gt(fe.key));j&&j.signal.addEventListener("abort",ln);let{results:hi,loaderResults:sc,fetcherResults:lo}=await Fa(m.matches,R,Ee,ft,S);if(S.signal.aborted)return{shortCircuited:!0};j&&j.signal.removeEventListener("abort",ln),ft.forEach(fe=>se.delete(fe.key));let Kt=Jh(hi);if(Kt){if(Kt.idx>=Ee.length){let fe=ft[Kt.idx-Ee.length].key;_.add(fe)}return await Tr(m,Kt.result,{replace:Y}),{shortCircuited:!0}}let{loaderData:Ua,errors:lc}=Xh(m,R,Ee,sc,ne,ft,lo,le);le.forEach((fe,Dt)=>{fe.subscribe(ze=>{(ze||fe.done)&&le.delete(Dt)})});let cc=Ep(),uc=jp(me),co=cc||uc||ft.length>0;return Ne({loaderData:Ua,errors:lc},co?{fetchers:new Map(m.fetchers)}:{})}function so(S,P,R,L){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");se.has(S)&&Gt(S);let U=(L&&L.unstable_flushSync)===!0,Q=s||a,Y=td(m.location,m.matches,c,u.v7_prependBasename,R,P,L==null?void 0:L.relative),W=To(Q,Y,c);if(!W){Wn(S,P,_t(404,{pathname:Y}),{flushSync:U});return}let{path:B,submission:ne,error:tt}=Wh(u.v7_normalizeFormMethod,!0,Y,L);if(tt){Wn(S,P,tt,{flushSync:U});return}let J=rd(W,B);if(T=(L&&L.preventScrollReset)===!0,ne&&Jt(ne.formMethod)){Pr(S,P,B,J,W,U,ne);return}F.set(S,{routeId:P,path:B}),ic(S,P,B,J,W,U,ne)}async function Pr(S,P,R,L,U,Q,Y){if(pi(),F.delete(S),!L.route.action&&!L.route.lazy){let ze=_t(405,{method:Y.formMethod,pathname:R,routeId:P});Wn(S,P,ze,{flushSync:Q});return}let W=m.fetchers.get(S);sn(S,Ek(Y,W),{flushSync:Q});let B=new AbortController,ne=Ei(e.history,R,B.signal,Y);se.set(S,B);let tt=Oe,J=await Ci("action",ne,L,U,i,o,c);if(ne.signal.aborted){se.get(S)===B&&se.delete(S);return}if(V.has(S)){sn(S,Kn(void 0));return}if($o(J))if(se.delete(S),me>tt){sn(S,Kn(void 0));return}else return _.add(S),sn(S,ji(Y)),Tr(m,J,{fetcherSubmission:Y});if(Gi(J)){Wn(S,P,J.error);return}if(Fr(J))throw _t(400,{type:"defer-action"});let de=m.navigation.location||m.location,Ee=Ei(e.history,de,B.signal),ft=s||a,ln=m.navigation.state!=="idle"?To(ft,m.navigation.location,c):m.matches;K(ln,"Didn't find any matches after fetcher action");let hi=++Oe;N.set(S,hi);let sc=ji(Y,J.data);m.fetchers.set(S,sc);let[lo,Kt]=Yh(e.history,m,ln,Y,de,Se,he,dt,V,F,_,ft,c,{[L.route.id]:J.data},void 0);Kt.filter(ze=>ze.key!==S).forEach(ze=>{let Rr=ze.key,Ip=m.fetchers.get(Rr),dx=ji(void 0,Ip?Ip.data:void 0);m.fetchers.set(Rr,dx),se.has(Rr)&&Gt(Rr),ze.controller&&se.set(Rr,ze.controller)}),ge({fetchers:new Map(m.fetchers)});let Ua=()=>Kt.forEach(ze=>Gt(ze.key));B.signal.addEventListener("abort",Ua);let{results:lc,loaderResults:cc,fetcherResults:uc}=await Fa(m.matches,ln,lo,Kt,Ee);if(B.signal.aborted)return;B.signal.removeEventListener("abort",Ua),N.delete(S),se.delete(S),Kt.forEach(ze=>se.delete(ze.key));let co=Jh(lc);if(co){if(co.idx>=lo.length){let ze=Kt[co.idx-lo.length].key;_.add(ze)}return Tr(m,co.result)}let{loaderData:fe,errors:Dt}=Xh(m,m.matches,lo,cc,void 0,Kt,uc,le);if(m.fetchers.has(S)){let ze=Kn(J.data);m.fetchers.set(S,ze)}jp(hi),m.navigation.state==="loading"&&hi>me?(K(E,"Expected pending action"),j&&j.abort(),Le(m.navigation.location,{matches:ln,loaderData:fe,errors:Dt,fetchers:new Map(m.fetchers)})):(ge({errors:Dt,loaderData:Qh(m.loaderData,fe,ln,Dt),fetchers:new Map(m.fetchers)}),Se=!1)}async function ic(S,P,R,L,U,Q,Y){let W=m.fetchers.get(S);sn(S,ji(Y,W?W.data:void 0),{flushSync:Q});let B=new AbortController,ne=Ei(e.history,R,B.signal);se.set(S,B);let tt=Oe,J=await Ci("loader",ne,L,U,i,o,c);if(Fr(J)&&(J=await M0(J,ne.signal,!0)||J),se.get(S)===B&&se.delete(S),!ne.signal.aborted){if(V.has(S)){sn(S,Kn(void 0));return}if($o(J))if(me>tt){sn(S,Kn(void 0));return}else{_.add(S),await Tr(m,J);return}if(Gi(J)){Wn(S,P,J.error);return}K(!Fr(J),"Unhandled fetcher deferred data"),sn(S,Kn(J.data))}}async function Tr(S,P,R){let{submission:L,fetcherSubmission:U,replace:Q}=R===void 0?{}:R;P.revalidate&&(Se=!0);let Y=ha(S.location,P.location,{_isRedirect:!0});if(K(Y,"Expected a location on the redirect navigation"),n){let de=!1;if(P.reloadDocument)de=!0;else if(I0.test(P.location)){const Ee=e.history.createURL(P.location);de=Ee.origin!==t.location.origin||gr(Ee.pathname,c)==null}if(de){Q?t.location.replace(P.location):t.location.assign(P.location);return}}j=null;let W=Q===!0?Ae.Replace:Ae.Push,{formMethod:B,formAction:ne,formEncType:tt}=S.navigation;!L&&!U&&B&&ne&&tt&&(L=em(S.navigation));let J=L||U;if(fk.has(P.status)&&J&&Jt(J.formMethod))await Et(W,Y,{submission:Ne({},J,{formAction:P.location}),preventScrollReset:T});else{let de=$c(Y,L);await Et(W,Y,{overrideNavigation:de,fetcherSubmission:U,preventScrollReset:T})}}async function Fa(S,P,R,L,U){let Q=await Promise.all([...R.map(B=>Ci("loader",U,B,P,i,o,c)),...L.map(B=>B.matches&&B.match&&B.controller?Ci("loader",Ei(e.history,B.path,B.controller.signal),B.match,B.matches,i,o,c):{type:Me.error,error:_t(404,{pathname:B.path})})]),Y=Q.slice(0,R.length),W=Q.slice(R.length);return await Promise.all([qh(S,R,Y,Y.map(()=>U.signal),!1,m.loaderData),qh(S,L.map(B=>B.match),W,L.map(B=>B.controller?B.controller.signal:null),!0)]),{results:Q,loaderResults:Y,fetcherResults:W}}function pi(){Se=!0,he.push(...ac()),F.forEach((S,P)=>{se.has(P)&&(dt.push(P),Gt(P))})}function sn(S,P,R){R===void 0&&(R={}),m.fetchers.set(S,P),ge({fetchers:new Map(m.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function Wn(S,P,R,L){L===void 0&&(L={});let U=Vi(m.matches,P);ee(S),ge({errors:{[U.route.id]:R},fetchers:new Map(m.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function $a(S){return u.v7_fetcherPersist&&(X.set(S,(X.get(S)||0)+1),V.has(S)&&V.delete(S)),m.fetchers.get(S)||pk}function ee(S){let P=m.fetchers.get(S);se.has(S)&&!(P&&P.state==="loading"&&N.has(S))&&Gt(S),F.delete(S),N.delete(S),_.delete(S),V.delete(S),m.fetchers.delete(S)}function Yn(S){if(u.v7_fetcherPersist){let P=(X.get(S)||0)-1;P<=0?(X.delete(S),V.add(S)):X.set(S,P)}else ee(S);ge({fetchers:new Map(m.fetchers)})}function Gt(S){let P=se.get(S);K(P,"Expected fetch controller: "+S),P.abort(),se.delete(S)}function Cp(S){for(let P of S){let R=$a(P),L=Kn(R.data);m.fetchers.set(P,L)}}function Ep(){let S=[],P=!1;for(let R of _){let L=m.fetchers.get(R);K(L,"Expected fetcher: "+R),L.state==="loading"&&(_.delete(R),S.push(R),P=!0)}return Cp(S),P}function jp(S){let P=[];for(let[R,L]of N)if(L<S){let U=m.fetchers.get(R);K(U,"Expected fetcher: "+R),U.state==="loading"&&(Gt(R),N.delete(R),P.push(R))}return Cp(P),P.length>0}function sx(S,P){let R=m.blockers.get(S)||Si;return ue.get(S)!==P&&ue.set(S,P),R}function Pp(S){m.blockers.delete(S),ue.delete(S)}function za(S,P){let R=m.blockers.get(S)||Si;K(R.state==="unblocked"&&P.state==="blocked"||R.state==="blocked"&&P.state==="blocked"||R.state==="blocked"&&P.state==="proceeding"||R.state==="blocked"&&P.state==="unblocked"||R.state==="proceeding"&&P.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+P.state);let L=new Map(m.blockers);L.set(S,P),ge({blockers:L})}function Tp(S){let{currentLocation:P,nextLocation:R,historyAction:L}=S;if(ue.size===0)return;ue.size>1&&Zr(!1,"A router only supports one blocker at a time");let U=Array.from(ue.entries()),[Q,Y]=U[U.length-1],W=m.blockers.get(Q);if(!(W&&W.state==="proceeding")&&Y({currentLocation:P,nextLocation:R,historyAction:L}))return Q}function ac(S){let P=[];return le.forEach((R,L)=>{(!S||S(L))&&(R.cancel(),P.push(L),le.delete(L))}),P}function lx(S,P,R){if(p=S,k=P,w=R||null,!b&&m.navigation===Fc){b=!0;let L=Np(m.location,m.matches);L!=null&&ge({restoreScrollPosition:L})}return()=>{p=null,k=null,w=null}}function Rp(S,P){return w&&w(S,P.map(L=>H2(L,m.loaderData)))||S.key}function cx(S,P){if(p&&k){let R=Rp(S,P);p[R]=k()}}function Np(S,P){if(p){let R=Rp(S,P),L=p[R];if(typeof L=="number")return L}return null}function ux(S){i={},s=qu(S,o,void 0,i)}return v={get basename(){return c},get state(){return m},get routes(){return a},get window(){return t},initialize:$e,subscribe:wn,enableScrollRestoration:lx,navigate:Hn,fetch:so,revalidate:ao,createHref:S=>e.history.createHref(S),encodeLocation:S=>e.history.encodeLocation(S),getFetcher:$a,deleteFetcher:Yn,dispose:Qe,getBlocker:sx,deleteBlocker:Pp,_internalFetchControllers:se,_internalActiveDeferreds:le,_internalSetRoutes:ux},v}function gk(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function td(e,t,n,r,o,i,a){let s,c;if(i){s=[];for(let d of t)if(s.push(d),d.route.id===i){c=d;break}}else s=t,c=t[t.length-1];let u=If(o||".",Nf(s),gr(e.pathname,n)||e.pathname,a==="path");return o==null&&(u.search=e.search,u.hash=e.hash),(o==null||o===""||o===".")&&c&&c.route.index&&!Lf(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Tn([n,u.pathname])),Jr(u)}function Wh(e,t,n,r){if(!r||!gk(r))return{path:n};if(r.formMethod&&!Sk(r.formMethod))return{path:n,error:_t(405,{method:r.formMethod})};let o=()=>({path:n,error:_t(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),s=A0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Jt(a))return o();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,k)=>{let[b,C]=k;return""+w+b+"="+C+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Jt(a))return o();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return o()}}}K(typeof FormData=="function","FormData is not available in this environment");let c,u;if(r.formData)c=nd(r.formData),u=r.formData;else if(r.body instanceof FormData)c=nd(r.body),u=r.body;else if(r.body instanceof URLSearchParams)c=r.body,u=Kh(c);else if(r.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(r.body),u=Kh(c)}catch{return o()}let d={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Jt(d.formMethod))return{path:n,submission:d};let f=$n(n);return t&&f.search&&Lf(f.search)&&c.append("index",""),f.search="?"+c,{path:Jr(f),submission:d}}function vk(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Yh(e,t,n,r,o,i,a,s,c,u,d,f,p,w,k){let b=k?Object.values(k)[0]:w?Object.values(w)[0]:void 0,C=e.createURL(t.location),g=e.createURL(o),h=k?Object.keys(k)[0]:void 0,m=vk(n,h).filter((T,j)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(yk(t.loaderData,t.matches[j],T)||a.some(z=>z===T.route.id))return!0;let O=t.matches[j],M=T;return Vh(T,Ne({currentUrl:C,currentParams:O.params,nextUrl:g,nextParams:M.params},r,{actionResult:b,defaultShouldRevalidate:i||C.pathname+C.search===g.pathname+g.search||C.search!==g.search||L0(O,M)}))}),E=[];return u.forEach((T,j)=>{if(!n.some(Se=>Se.route.id===T.routeId)||c.has(j))return;let O=To(f,T.path,p);if(!O){E.push({key:j,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let M=t.fetchers.get(j),z=rd(O,T.path),Z=!1;d.has(j)?Z=!1:s.includes(j)?Z=!0:M&&M.state!=="idle"&&M.data===void 0?Z=i:Z=Vh(z,Ne({currentUrl:C,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:b,defaultShouldRevalidate:i})),Z&&E.push({key:j,routeId:T.routeId,path:T.path,matches:O,match:z,controller:new AbortController})}),[m,E]}function yk(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function L0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Vh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Gh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];K(o,"No route found in manifest");let i={};for(let a in r){let c=o[a]!==void 0&&a!=="hasErrorBoundary";Zr(!c,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!c&&!U2.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,Ne({},t(o),{lazy:void 0}))}async function Ci(e,t,n,r,o,i,a,s){s===void 0&&(s={});let c,u,d,f=k=>{let b,C=new Promise((g,h)=>b=h);return d=()=>b(),t.signal.addEventListener("abort",d),Promise.race([k({request:t,params:n.params,context:s.requestContext}),C])};try{let k=n.route[e];if(n.route.lazy)if(k){let b,C=await Promise.all([f(k).catch(g=>{b=g}),Gh(n.route,i,o)]);if(b)throw b;u=C[0]}else if(await Gh(n.route,i,o),k=n.route[e],k)u=await f(k);else if(e==="action"){let b=new URL(t.url),C=b.pathname+b.search;throw _t(405,{method:t.method,pathname:C,routeId:n.route.id})}else return{type:Me.data,data:void 0};else if(k)u=await f(k);else{let b=new URL(t.url),C=b.pathname+b.search;throw _t(404,{pathname:C})}K(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(k){c=Me.error,u=k}finally{d&&t.signal.removeEventListener("abort",d)}if(bk(u)){let k=u.status;if(dk.has(k)){let g=u.headers.get("Location");if(K(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!I0.test(g))g=td(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,g);else if(!s.isStaticRequest){let h=new URL(t.url),v=g.startsWith("//")?new URL(h.protocol+g):new URL(g),m=gr(v.pathname,a)!=null;v.origin===h.origin&&m&&(g=v.pathname+v.search+v.hash)}if(s.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Me.redirect,status:k,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:c===Me.error?Me.error:Me.data,response:u};let b,C=u.headers.get("Content-Type");return C&&/\bapplication\/json\b/.test(C)?b=await u.json():b=await u.text(),c===Me.error?{type:c,error:new Of(k,u.statusText,b),headers:u.headers}:{type:Me.data,data:b,statusCode:u.status,headers:u.headers}}if(c===Me.error)return{type:c,error:u};if(kk(u)){var p,w;return{type:Me.deferred,deferredData:u,statusCode:(p=u.init)==null?void 0:p.status,headers:((w=u.init)==null?void 0:w.headers)&&new Headers(u.init.headers)}}return{type:Me.data,data:u}}function Ei(e,t,n,r){let o=e.createURL(A0(t)).toString(),i={signal:n};if(r&&Jt(r.formMethod)){let{formMethod:a,formEncType:s}=r;i.method=a.toUpperCase(),s==="application/json"?(i.headers=new Headers({"Content-Type":s}),i.body=JSON.stringify(r.json)):s==="text/plain"?i.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?i.body=nd(r.formData):i.body=r.formData}return new Request(o,i)}function nd(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Kh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function xk(e,t,n,r,o){let i={},a=null,s,c=!1,u={};return n.forEach((d,f)=>{let p=t[f].route.id;if(K(!$o(d),"Cannot handle redirect results in processLoaderData"),Gi(d)){let w=Vi(e,p),k=d.error;r&&(k=Object.values(r)[0],r=void 0),a=a||{},a[w.route.id]==null&&(a[w.route.id]=k),i[p]=void 0,c||(c=!0,s=R0(d.error)?d.error.status:500),d.headers&&(u[p]=d.headers)}else Fr(d)?(o.set(p,d.deferredData),i[p]=d.deferredData.data):i[p]=d.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(s=d.statusCode),d.headers&&(u[p]=d.headers)}),r&&(a=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:a,statusCode:s||200,loaderHeaders:u}}function Xh(e,t,n,r,o,i,a,s){let{loaderData:c,errors:u}=xk(t,n,r,o,s);for(let d=0;d<i.length;d++){let{key:f,match:p,controller:w}=i[d];K(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let k=a[d];if(!(w&&w.signal.aborted))if(Gi(k)){let b=Vi(e.matches,p==null?void 0:p.route.id);u&&u[b.route.id]||(u=Ne({},u,{[b.route.id]:k.error})),e.fetchers.delete(f)}else if($o(k))K(!1,"Unhandled fetcher revalidation redirect");else if(Fr(k))K(!1,"Unhandled fetcher deferred data");else{let b=Kn(k.data);e.fetchers.set(f,b)}}return{loaderData:c,errors:u}}function Qh(e,t,n,r){let o=Ne({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function Vi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Zh(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function _t(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new Of(e||500,a,new Error(s),!0)}function Jh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if($o(n))return{result:n,idx:t}}}function A0(e){let t=typeof e=="string"?$n(e):e;return Jr(Ne({},t,{hash:""}))}function wk(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Fr(e){return e.type===Me.deferred}function Gi(e){return e.type===Me.error}function $o(e){return(e&&e.type)===Me.redirect}function kk(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function bk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Sk(e){return uk.has(e.toLowerCase())}function Jt(e){return lk.has(e.toLowerCase())}async function qh(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let s=n[a],c=t[a];if(!c)continue;let u=e.find(f=>f.route.id===c.route.id),d=u!=null&&!L0(u,c)&&(i&&i[c.route.id])!==void 0;if(Fr(s)&&(o||d)){let f=r[a];K(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await M0(s,f,o).then(p=>{p&&(n[a]=p||n[a])})}}}async function M0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Me.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Me.error,error:o}}return{type:Me.data,data:e.deferredData.data}}}function Lf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function rd(e,t){let n=typeof t=="string"?$n(t).search:t.search;if(e[e.length-1].route.index&&Lf(n||""))return e[e.length-1];let r=T0(e);return r[r.length-1]}function em(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function $c(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Ck(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ji(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Ek(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Kn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function jk(e,t){try{let n=e.sessionStorage.getItem(O0);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function Pk(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(O0,JSON.stringify(n))}catch(r){Zr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}const Pa=x.createContext(null),Af=x.createContext(null),io=x.createContext(null),_l=x.createContext(null),Er=x.createContext({outlet:null,matches:[],isDataRoute:!1}),D0=x.createContext(null);function Tk(e,t){let{relative:n}=t===void 0?{}:t;Ta()||K(!1);let{basename:r,navigator:o}=x.useContext(io),{hash:i,pathname:a,search:s}=Fl(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Tn([r,a])),o.createHref({pathname:c,search:s,hash:i})}function Ta(){return x.useContext(_l)!=null}function ii(){return Ta()||K(!1),x.useContext(_l).location}function _0(e){x.useContext(io).static||x.useLayoutEffect(e)}function We(){let{isDataRoute:e}=x.useContext(Er);return e?zk():Rk()}function Rk(){Ta()||K(!1);let e=x.useContext(Pa),{basename:t,navigator:n}=x.useContext(io),{matches:r}=x.useContext(Er),{pathname:o}=ii(),i=JSON.stringify(Nf(r)),a=x.useRef(!1);return _0(()=>{a.current=!0}),x.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){n.go(c);return}let d=If(c,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Tn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,i,o,e])}function ai(){let{matches:e}=x.useContext(Er),t=e[e.length-1];return t?t.params:{}}function Fl(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(Er),{pathname:o}=ii(),i=JSON.stringify(Nf(r));return x.useMemo(()=>If(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function Nk(e,t,n){Ta()||K(!1);let{navigator:r}=x.useContext(io),{matches:o}=x.useContext(Er),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let c=ii(),u;if(t){var d;let b=typeof t=="string"?$n(t):t;s==="/"||(d=b.pathname)!=null&&d.startsWith(s)||K(!1),u=b}else u=c;let f=u.pathname||"/",p=s==="/"?f:f.slice(s.length)||"/",w=To(e,{pathname:p}),k=Mk(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Tn([s,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?s:Tn([s,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n);return t&&k?x.createElement(_l.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ae.Pop}},k):k}function Ik(){let e=$k(),t=R0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,i)}const Ok=x.createElement(Ik,null);class Lk extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(Er.Provider,{value:this.props.routeContext},x.createElement(D0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ak(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(Pa);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Er.Provider,{value:t},r)}function Mk(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));s>=0||K(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,c,u)=>{let d=c.route.id?a==null?void 0:a[c.route.id]:null,f=null;n&&(f=c.route.errorElement||Ok);let p=t.concat(i.slice(0,u+1)),w=()=>{let k;return d?k=f:c.route.Component?k=x.createElement(c.route.Component,null):c.route.element?k=c.route.element:k=s,x.createElement(Ak,{match:c,routeContext:{outlet:s,matches:p,isDataRoute:n!=null},children:k})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?x.createElement(Lk,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:w(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):w()},null)}var F0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(F0||{}),ll=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ll||{});function Dk(e){let t=x.useContext(Pa);return t||K(!1),t}function _k(e){let t=x.useContext(Af);return t||K(!1),t}function Fk(e){let t=x.useContext(Er);return t||K(!1),t}function $0(e){let t=Fk(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function $k(){var e;let t=x.useContext(D0),n=_k(ll.UseRouteError),r=$0(ll.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function zk(){let{router:e}=Dk(F0.UseNavigateStable),t=$0(ll.UseNavigateStable),n=x.useRef(!1);return _0(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,sl({fromRouteId:t},i)))},[e,t])}function Uk(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ae.Pop,navigator:i,static:a=!1}=e;Ta()&&K(!1);let s=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=$n(r));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:w="default"}=r,k=x.useMemo(()=>{let b=gr(u,s);return b==null?null:{location:{pathname:b,search:d,hash:f,state:p,key:w},navigationType:o}},[s,u,d,f,p,w,o]);return k==null?null:x.createElement(io.Provider,{value:c},x.createElement(_l.Provider,{children:n,value:k}))}new Promise(()=>{});function Bk(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:x.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:x.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}function z0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Hk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wk(e,t){return e.button===0&&(!t||t==="_self")&&!Hk(e)}const Yk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Vk=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function Gk(e,t){return mk({basename:t==null?void 0:t.basename,future:Xo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:F2({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Kk(),routes:e,mapRouteProperties:Bk,window:t==null?void 0:t.window}).initialize()}function Kk(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Xo({},t,{errors:Xk(t.errors)})),t}function Xk(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Of(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const U0=x.createContext({isTransitioning:!1}),Qk=x.createContext(new Map),Zk="startTransition",tm=Px[Zk],Jk="flushSync",nm=_2[Jk];function qk(e){tm?tm(e):e()}function Pi(e){nm?nm(e):e()}class eb{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function tb(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=x.useState(n.state),[a,s]=x.useState(),[c,u]=x.useState({isTransitioning:!1}),[d,f]=x.useState(),[p,w]=x.useState(),[k,b]=x.useState(),C=x.useRef(new Map),{v7_startTransition:g}=r||{},h=x.useCallback(j=>{g?qk(j):j()},[g]),v=x.useCallback((j,O)=>{let{deletedFetchers:M,unstable_flushSync:z,unstable_viewTransitionOpts:Z}=O;M.forEach(he=>C.current.delete(he)),j.fetchers.forEach((he,dt)=>{he.data!==void 0&&C.current.set(dt,he.data)});let Se=n.window==null||typeof n.window.document.startViewTransition!="function";if(!Z||Se){z?Pi(()=>i(j)):h(()=>i(j));return}if(z){Pi(()=>{p&&(d&&d.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})});let he=n.window.document.startViewTransition(()=>{Pi(()=>i(j))});he.finished.finally(()=>{Pi(()=>{f(void 0),w(void 0),s(void 0),u({isTransitioning:!1})})}),Pi(()=>w(he));return}p?(d&&d.resolve(),p.skipTransition(),b({state:j,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})):(s(j),u({isTransitioning:!0,flushSync:!1,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation}))},[n.window,p,d,C,h]);x.useLayoutEffect(()=>n.subscribe(v),[n,v]),x.useEffect(()=>{c.isTransitioning&&!c.flushSync&&f(new eb)},[c]),x.useEffect(()=>{if(d&&a&&n.window){let j=a,O=d.promise,M=n.window.document.startViewTransition(async()=>{h(()=>i(j)),await O});M.finished.finally(()=>{f(void 0),w(void 0),s(void 0),u({isTransitioning:!1})}),w(M)}},[h,a,d,n.window]),x.useEffect(()=>{d&&a&&o.location.key===a.location.key&&d.resolve()},[d,p,o.location,a]),x.useEffect(()=>{!c.isTransitioning&&k&&(s(k.state),u({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}),b(void 0))},[c.isTransitioning,k]);let m=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:j=>n.navigate(j),push:(j,O,M)=>n.navigate(j,{state:O,preventScrollReset:M==null?void 0:M.preventScrollReset}),replace:(j,O,M)=>n.navigate(j,{replace:!0,state:O,preventScrollReset:M==null?void 0:M.preventScrollReset})}),[n]),E=n.basename||"/",T=x.useMemo(()=>({router:n,navigator:m,static:!1,basename:E}),[n,m,E]);return x.createElement(x.Fragment,null,x.createElement(Pa.Provider,{value:T},x.createElement(Af.Provider,{value:o},x.createElement(Qk.Provider,{value:C.current},x.createElement(U0.Provider,{value:c},x.createElement(Uk,{basename:E,location:o.location,navigationType:o.historyAction,navigator:m},o.initialized?x.createElement(nb,{routes:n.routes,state:o}):t))))),null)}function nb(e){let{routes:t,state:n}=e;return Nk(t,void 0,n)}const rb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ob=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vt=x.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:c,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,p=z0(t,Yk),{basename:w}=x.useContext(io),k,b=!1;if(typeof u=="string"&&ob.test(u)&&(k=u,rb))try{let v=new URL(window.location.href),m=u.startsWith("//")?new URL(v.protocol+u):new URL(u),E=gr(m.pathname,w);m.origin===v.origin&&E!=null?u=E+m.search+m.hash:b=!0}catch{}let C=Tk(u,{relative:o}),g=ab(u,{replace:a,state:s,target:c,preventScrollReset:d,relative:o,unstable_viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||g(v)}return x.createElement("a",Xo({},p,{href:k||C,onClick:b||i?r:h,ref:n,target:c}))}),Mf=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:c,unstable_viewTransition:u,children:d}=t,f=z0(t,Vk),p=Fl(c,{relative:f.relative}),w=ii(),k=x.useContext(Af),{navigator:b}=x.useContext(io),C=k!=null&&sb(p)&&u===!0,g=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,h=w.pathname,v=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||(h=h.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase());const m=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let E=h===g||!a&&h.startsWith(g)&&h.charAt(m)==="/",T=v!=null&&(v===g||!a&&v.startsWith(g)&&v.charAt(g.length)==="/"),j={isActive:E,isPending:T,isTransitioning:C},O=E?r:void 0,M;typeof i=="function"?M=i(j):M=[i,E?"active":null,T?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let z=typeof s=="function"?s(j):s;return x.createElement(vt,Xo({},f,{"aria-current":O,className:M,ref:n,style:z,to:c,unstable_viewTransition:u}),typeof d=="function"?d(j):d)});var od;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(od||(od={}));var rm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rm||(rm={}));function ib(e){let t=x.useContext(Pa);return t||K(!1),t}function ab(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,c=We(),u=ii(),d=Fl(e,{relative:a});return x.useCallback(f=>{if(Wk(f,n)){f.preventDefault();let p=r!==void 0?r:Jr(u)===Jr(d);c(e,{replace:p,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[u,c,d,r,o,n,e,i,a,s])}function sb(e,t){t===void 0&&(t={});let n=x.useContext(U0);n==null&&K(!1);let{basename:r}=ib(od.useViewTransitionState),o=Fl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=gr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=gr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ed(o.pathname,a)!=null||ed(o.pathname,i)!=null}var lt=function(){return lt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},lt.apply(this,arguments)};function ma(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var xe="-ms-",Ki="-moz-",ie="-webkit-",B0="comm",$l="rule",Df="decl",lb="@import",H0="@keyframes",cb="@layer",ub=Math.abs,_f=String.fromCharCode,id=Object.assign;function db(e,t){return Je(e,0)^45?(((t<<2^Je(e,0))<<2^Je(e,1))<<2^Je(e,2))<<2^Je(e,3):0}function W0(e){return e.trim()}function Sn(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function Is(e,t){return e.indexOf(t)}function Je(e,t){return e.charCodeAt(t)|0}function Qo(e,t,n){return e.slice(t,n)}function dn(e){return e.length}function Y0(e){return e.length}function Ai(e,t){return t.push(e),e}function fb(e,t){return e.map(t).join("")}function om(e,t){return e.filter(function(n){return!Sn(n,t)})}var zl=1,Zo=1,V0=0,Yt=0,Ue=0,si="";function Ul(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:zl,column:Zo,length:a,return:"",siblings:s}}function Xn(e,t){return id(Ul("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function fo(e){for(;e.root;)e=Xn(e.root,{children:[e]});Ai(e,e.siblings)}function pb(){return Ue}function hb(){return Ue=Yt>0?Je(si,--Yt):0,Zo--,Ue===10&&(Zo=1,zl--),Ue}function rn(){return Ue=Yt<V0?Je(si,Yt++):0,Zo++,Ue===10&&(Zo=1,zl++),Ue}function Wr(){return Je(si,Yt)}function Os(){return Yt}function Bl(e,t){return Qo(si,e,t)}function ad(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mb(e){return zl=Zo=1,V0=dn(si=e),Yt=0,[]}function gb(e){return si="",e}function zc(e){return W0(Bl(Yt-1,sd(e===91?e+2:e===40?e+1:e)))}function vb(e){for(;(Ue=Wr())&&Ue<33;)rn();return ad(e)>2||ad(Ue)>3?"":" "}function yb(e,t){for(;--t&&rn()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return Bl(e,Os()+(t<6&&Wr()==32&&rn()==32))}function sd(e){for(;rn();)switch(Ue){case e:return Yt;case 34:case 39:e!==34&&e!==39&&sd(Ue);break;case 40:e===41&&sd(e);break;case 92:rn();break}return Yt}function xb(e,t){for(;rn()&&e+Ue!==47+10;)if(e+Ue===42+42&&Wr()===47)break;return"/*"+Bl(t,Yt-1)+"*"+_f(e===47?e:rn())}function wb(e){for(;!ad(Wr());)rn();return Bl(e,Yt)}function kb(e){return gb(Ls("",null,null,null,[""],e=mb(e),0,[0],e))}function Ls(e,t,n,r,o,i,a,s,c){for(var u=0,d=0,f=a,p=0,w=0,k=0,b=1,C=1,g=1,h=0,v="",m=o,E=i,T=r,j=v;C;)switch(k=h,h=rn()){case 40:if(k!=108&&Je(j,f-1)==58){Is(j+=G(zc(h),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:j+=zc(h);break;case 9:case 10:case 13:case 32:j+=vb(k);break;case 92:j+=yb(Os()-1,7);continue;case 47:switch(Wr()){case 42:case 47:Ai(bb(xb(rn(),Os()),t,n,c),c);break;default:j+="/"}break;case 123*b:s[u++]=dn(j)*g;case 125*b:case 59:case 0:switch(h){case 0:case 125:C=0;case 59+d:g==-1&&(j=G(j,/\f/g,"")),w>0&&dn(j)-f&&Ai(w>32?am(j+";",r,n,f-1,c):am(G(j," ","")+";",r,n,f-2,c),c);break;case 59:j+=";";default:if(Ai(T=im(j,t,n,u,d,o,s,v,m=[],E=[],f,i),i),h===123)if(d===0)Ls(j,t,T,T,m,i,f,s,E);else switch(p===99&&Je(j,3)===110?100:p){case 100:case 108:case 109:case 115:Ls(e,T,T,r&&Ai(im(e,T,T,0,0,o,s,v,o,m=[],f,E),E),o,E,f,s,r?m:E);break;default:Ls(j,T,T,T,[""],E,0,s,E)}}u=d=w=0,b=g=1,v=j="",f=a;break;case 58:f=1+dn(j),w=k;default:if(b<1){if(h==123)--b;else if(h==125&&b++==0&&hb()==125)continue}switch(j+=_f(h),h*b){case 38:g=d>0?1:(j+="\f",-1);break;case 44:s[u++]=(dn(j)-1)*g,g=1;break;case 64:Wr()===45&&(j+=zc(rn())),p=Wr(),d=f=dn(v=j+=wb(Os())),h++;break;case 45:k===45&&dn(j)==2&&(b=0)}}return i}function im(e,t,n,r,o,i,a,s,c,u,d,f){for(var p=o-1,w=o===0?i:[""],k=Y0(w),b=0,C=0,g=0;b<r;++b)for(var h=0,v=Qo(e,p+1,p=ub(C=a[b])),m=e;h<k;++h)(m=W0(C>0?w[h]+" "+v:G(v,/&\f/g,w[h])))&&(c[g++]=m);return Ul(e,t,n,o===0?$l:s,c,u,d,f)}function bb(e,t,n,r){return Ul(e,t,n,B0,_f(pb()),Qo(e,2,-2),0,r)}function am(e,t,n,r,o){return Ul(e,t,n,Df,Qo(e,0,r),Qo(e,r+1,-1),r,o)}function G0(e,t,n){switch(db(e,t)){case 5103:return ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+e+e;case 4789:return Ki+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+e+Ki+e+xe+e+e;case 5936:switch(Je(e,t+11)){case 114:return ie+e+xe+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ie+e+xe+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ie+e+xe+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ie+e+xe+e+e;case 6165:return ie+e+xe+"flex-"+e+e;case 5187:return ie+e+G(e,/(\w+).+(:[^]+)/,ie+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ie+e+xe+"flex-item-"+G(e,/flex-|-self/g,"")+(Sn(e,/flex-|baseline/)?"":xe+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return ie+e+xe+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return ie+e+xe+G(e,"shrink","negative")+e;case 5292:return ie+e+xe+G(e,"basis","preferred-size")+e;case 6060:return ie+"box-"+G(e,"-grow","")+ie+e+xe+G(e,"grow","positive")+e;case 4554:return ie+G(e,/([^-])(transform)/g,"$1"+ie+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+e+e;case 4200:if(!Sn(e,/flex-|baseline/))return xe+"grid-column-align"+Qo(e,t)+e;break;case 2592:case 3360:return xe+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Sn(r.props,/grid-\w+-end/)})?~Is(e+(n=n[t].value),"span")?e:xe+G(e,"-start","")+e+xe+"grid-row-span:"+(~Is(n,"span")?Sn(n,/\d+/):+Sn(n,/\d+/)-+Sn(e,/\d+/))+";":xe+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Sn(r.props,/grid-\w+-start/)})?e:xe+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(e)-1-t>6)switch(Je(e,t+1)){case 109:if(Je(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+Ki+(Je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Is(e,"stretch")?G0(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,c,u){return xe+o+":"+i+u+(a?xe+o+"-span:"+(s?c:+c-+i)+u:"")+e});case 4949:if(Je(e,t+6)===121)return G(e,":",":"+ie)+e;break;case 6444:switch(Je(e,Je(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ie+(Je(e,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+xe+"$2box$3")+e;case 100:return G(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function cl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Sb(e,t,n,r){switch(e.type){case cb:if(e.children.length)break;case lb:case Df:return e.return=e.return||e.value;case B0:return"";case H0:return e.return=e.value+"{"+cl(e.children,r)+"}";case $l:if(!dn(e.value=e.props.join(",")))return""}return dn(n=cl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Cb(e){var t=Y0(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function Eb(e){return function(t){t.root||(t=t.return)&&e(t)}}function jb(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Df:e.return=G0(e.value,e.length,n);return;case H0:return cl([Xn(e,{value:G(e.value,"@","@"+ie)})],r);case $l:if(e.length)return fb(n=e.props,function(o){switch(Sn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fo(Xn(e,{props:[G(o,/:(read-\w+)/,":"+Ki+"$1")]})),fo(Xn(e,{props:[o]})),id(e,{props:om(n,r)});break;case"::placeholder":fo(Xn(e,{props:[G(o,/:(plac\w+)/,":"+ie+"input-$1")]})),fo(Xn(e,{props:[G(o,/:(plac\w+)/,":"+Ki+"$1")]})),fo(Xn(e,{props:[G(o,/:(plac\w+)/,xe+"input-$1")]})),fo(Xn(e,{props:[o]})),id(e,{props:om(n,r)});break}return""})}}var Pb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ff=typeof window<"u"&&"HTMLElement"in window,Tb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Rb={},Hl=Object.freeze([]),qo=Object.freeze({});function K0(e,t,n){return n===void 0&&(n=qo),e.theme!==n.theme&&e.theme||t||n.theme}var X0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ib=/(^-|-$)/g;function sm(e){return e.replace(Nb,"-").replace(Ib,"")}var Ob=/(a)(d)/gi,lm=function(e){return String.fromCharCode(e+(e>25?39:97))};function ld(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=lm(t%52)+n;return(lm(t%52)+n).replace(Ob,"$1-$2")}var Uc,Ro=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Q0=function(e){return Ro(5381,e)};function Z0(e){return ld(Q0(e)>>>0)}function Lb(e){return e.displayName||e.name||"Component"}function Bc(e){return typeof e=="string"&&!0}var J0=typeof Symbol=="function"&&Symbol.for,q0=J0?Symbol.for("react.memo"):60115,Ab=J0?Symbol.for("react.forward_ref"):60112,Mb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Db={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},e1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_b=((Uc={})[Ab]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uc[q0]=e1,Uc);function cm(e){return("type"in(t=e)&&t.type.$$typeof)===q0?e1:"$$typeof"in e?_b[e.$$typeof]:Mb;var t}var Fb=Object.defineProperty,$b=Object.getOwnPropertyNames,um=Object.getOwnPropertySymbols,zb=Object.getOwnPropertyDescriptor,Ub=Object.getPrototypeOf,dm=Object.prototype;function t1(e,t,n){if(typeof t!="string"){if(dm){var r=Ub(t);r&&r!==dm&&t1(e,r,n)}var o=$b(t);um&&(o=o.concat(um(t)));for(var i=cm(e),a=cm(t),s=0;s<o.length;++s){var c=o[s];if(!(c in Db||n&&n[c]||a&&c in a||i&&c in i)){var u=zb(t,c);try{Fb(e,c,u)}catch{}}}}return e}function ei(e){return typeof e=="function"}function $f(e){return typeof e=="object"&&"styledComponentId"in e}function $r(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function cd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ga(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ud(e,t,n){if(n===void 0&&(n=!1),!n&&!ga(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ud(e[r],t[r]);else if(ga(t))for(var r in t)e[r]=ud(e[r],t[r]);return e}function zf(e,t){Object.defineProperty(e,"toString",{value:t})}function Ra(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Bb=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ra(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),c=(a=0,n.length);a<c;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),As=new Map,ul=new Map,Hc=1,is=function(e){if(As.has(e))return As.get(e);for(;ul.has(Hc);)Hc++;var t=Hc++;return As.set(e,t),ul.set(t,e),t},Hb=function(e,t){As.set(e,t),ul.set(t,e)},Wb="style[".concat(Jo,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),Yb=new RegExp("^".concat(Jo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vb=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Gb=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var c=s.match(Yb);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(Hb(d,u),Vb(e,d,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function Kb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var n1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Jo,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Jo,"active"),r.setAttribute("data-styled-version","6.1.0");var a=Kb();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Xb=function(){function e(t){this.element=n1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw Ra(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Qb=function(){function e(t){this.element=n1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Zb=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),fm=Ff,Jb={isServer:!Ff,useCSSOMInjection:!Tb},dl=function(){function e(t,n,r){t===void 0&&(t=qo),n===void 0&&(n={});var o=this;this.options=lt(lt({},Jb),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ff&&fm&&(fm=!1,function(i){for(var a=document.querySelectorAll(Wb),s=0,c=a.length;s<c;s++){var u=a[s];u&&u.getAttribute(Jo)!=="active"&&(Gb(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),zf(this,function(){return function(i){for(var a=i.getTag(),s=a.length,c="",u=function(f){var p=function(g){return ul.get(g)}(f);if(p===void 0)return"continue";var w=i.names.get(p),k=a.getGroup(f);if(w===void 0||k.length===0)return"continue";var b="".concat(Jo,".g").concat(f,'[id="').concat(p,'"]'),C="";w!==void 0&&w.forEach(function(g){g.length>0&&(C+="".concat(g,","))}),c+="".concat(k).concat(b,'{content:"').concat(C,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)u(d);return c}(o)})}return e.registerId=function(t){return is(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(lt(lt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Zb(o):r?new Xb(o):new Qb(o)}(this.options),new Bb(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(is(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(is(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(is(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),qb=/&/g,eS=/^\s*\/\/.*$/gm;function r1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=r1(n.children,t)),n})}function tS(e){var t,n,r,o=e===void 0?qo:e,i=o.options,a=i===void 0?qo:i,s=o.plugins,c=s===void 0?Hl:s,u=function(p,w,k){return k===n||k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===$l&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(qb,n).replace(r,u))}),a.prefix&&d.push(jb),d.push(Sb);var f=function(p,w,k,b){w===void 0&&(w=""),k===void 0&&(k=""),b===void 0&&(b="&"),t=b,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var C=p.replace(eS,""),g=kb(k||w?"".concat(k," ").concat(w," { ").concat(C," }"):C);a.namespace&&(g=r1(g,a.namespace));var h=[];return cl(g,Cb(d.concat(Eb(function(v){return h.push(v)})))),h};return f.hash=c.length?c.reduce(function(p,w){return w.name||Ra(15),Ro(p,w.name)},5381).toString():"",f}var nS=new dl,dd=tS(),o1=_e.createContext({shouldForwardProp:void 0,styleSheet:nS,stylis:dd});o1.Consumer;_e.createContext(void 0);function fd(){return x.useContext(o1)}var rS=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=dd);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,zf(this,function(){throw Ra(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=dd),this.name+t.hash},e}(),oS=function(e){return e>="A"&&e<="Z"};function pm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;oS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var i1=function(e){return e==null||e===!1||e===""},a1=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!i1(i)&&(Array.isArray(i)&&i.isCss||ei(i)?r.push("".concat(pm(o),":"),i,";"):ga(i)?r.push.apply(r,ma(ma(["".concat(o," {")],a1(i),!1),["}"],!1)):r.push("".concat(pm(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Pb||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function fr(e,t,n,r){if(i1(e))return[];if($f(e))return[".".concat(e.styledComponentId)];if(ei(e)){if(!ei(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return fr(o,t,n,r)}var i;return e instanceof rS?n?(e.inject(n,r),[e.getName(r)]):[e]:ga(e)?a1(e):Array.isArray(e)?Array.prototype.concat.apply(Hl,e.map(function(a){return fr(a,t,n,r)})):[e.toString()]}function s1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ei(n)&&!$f(n))return!1}return!0}var iS=Q0("6.1.0"),aS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&s1(t),this.componentId=n,this.baseHash=Ro(iS,n),this.baseStyle=r,dl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=$r(o,this.staticRulesId);else{var i=cd(fr(this.rules,t,n,r)),a=ld(Ro(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=$r(o,a),this.staticRulesId=a}else{for(var c=Ro(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=cd(fr(f,t,n,r));c=Ro(c,p+d),u+=p}}if(u){var w=ld(c>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),o=$r(o,w)}}return o},e}(),Uf=_e.createContext(void 0);Uf.Consumer;var Wc={};function sS(e,t,n){var r=$f(e),o=e,i=!Bc(e),a=t.attrs,s=a===void 0?Hl:a,c=t.componentId,u=c===void 0?function(v,m){var E=typeof v!="string"?"sc":sm(v);Wc[E]=(Wc[E]||0)+1;var T="".concat(E,"-").concat(Z0("6.1.0"+E+Wc[E]));return m?"".concat(m,"-").concat(T):T}(t.displayName,t.parentComponentId):c,d=t.displayName;d===void 0&&function(v){return Bc(v)?"styled.".concat(v):"Styled(".concat(Lb(v),")")}(e);var f=t.displayName&&t.componentId?"".concat(sm(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;w=function(v,m){return k(v,m)&&b(v,m)}}else w=k}var C=new aS(n,f,r?o.componentStyle:void 0);function g(v,m){return function(E,T,j){var O=E.attrs,M=E.componentStyle,z=E.defaultProps,Z=E.foldedComponentIds,Se=E.styledComponentId,he=E.target,dt=_e.useContext(Uf),se=fd(),Oe=E.shouldForwardProp||se.shouldForwardProp,me=function(le,ue,Xe){for(var $e,Qe=lt(lt({},ue),{className:void 0,theme:Xe}),wn=0;wn<le.length;wn+=1){var ge=ei($e=le[wn])?$e(Qe):$e;for(var Le in ge)Qe[Le]=Le==="className"?$r(Qe[Le],ge[Le]):Le==="style"?lt(lt({},Qe[Le]),ge[Le]):ge[Le]}return ue.className&&(Qe.className=$r(Qe.className,ue.className)),Qe}(O,T,K0(T,dt,z)||qo),N=me.as||he,_={};for(var F in me)me[F]===void 0||F[0]==="$"||F==="as"||F==="theme"||(F==="forwardedAs"?_.as=me.forwardedAs:Oe&&!Oe(F,N)||(_[F]=me[F]));var X=function(le,ue){var Xe=fd(),$e=le.generateAndInjectStyles(ue,Xe.styleSheet,Xe.stylis);return $e}(M,me),V=$r(Z,Se);return X&&(V+=" "+X),me.className&&(V+=" "+me.className),_[Bc(N)&&!X0.has(N)?"class":"className"]=V,_.ref=j,x.createElement(N,_)}(h,v,m)}var h=_e.forwardRef(g);return h.attrs=p,h.componentStyle=C,h.shouldForwardProp=w,h.foldedComponentIds=r?$r(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=f,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(m){for(var E=[],T=1;T<arguments.length;T++)E[T-1]=arguments[T];for(var j=0,O=E;j<O.length;j++)ud(m,O[j],!0);return m}({},o.defaultProps,v):v}}),zf(h,function(){return".".concat(h.styledComponentId)}),i&&t1(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function hm(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var mm=function(e){return Object.assign(e,{isCss:!0})};function l1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ei(e)||ga(e)){var r=e;return mm(fr(hm(Hl,ma([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?fr(o):mm(fr(hm(o,t)))}function pd(e,t,n){if(n===void 0&&(n=qo),!t)throw Ra(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,l1.apply(void 0,ma([o],i,!1)))};return r.attrs=function(o){return pd(e,t,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return pd(e,t,lt(lt({},n),o))},r}var c1=function(e){return pd(sS,e)},y=c1;X0.forEach(function(e){y[e]=c1(e)});var lS=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=s1(t),dl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(cd(fr(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&dl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function cS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=l1.apply(void 0,ma([e],t,!1)),o="sc-global-".concat(Z0(JSON.stringify(r))),i=new lS(r,o),a=function(c){var u=fd(),d=_e.useContext(Uf),f=_e.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&s(f,c,u.styleSheet,d,u.stylis),_e.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,c,u.styleSheet,d,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function s(c,u,d,f,p){if(i.isStatic)i.renderStyles(c,Rb,d,p);else{var w=lt(lt({},u),{theme:K0(u,f,a.defaultProps)});i.renderStyles(c,w,d,p)}}return _e.memo(a)}const Lt=y.div`
    display: flex;
`,uS=y(Lt)`
  align-items: center;
  justify-content: center;
`,dS=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;
`,fS=y.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--light-black);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 20px var(--shadow);
  color: var(--white);
  width: 70%;
  //gap: 5px;
`,Yc=y.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 0;
  /* border: 1px solid var(--light-black); */
  border-radius: 50px;
  align-items: center;
  color: var(--white);
  background-color: var(--black);

  &:focus {
    outline: none;
  }
`,pS=y.button`
  font-size: 15px;
  width: 150px;
  height: 40px;
  padding: 10px;
  background-color: var(--blue);
  color: #fff;
  border: none;
  border-radius: 50px;
  align-items: center;
  margin-top: 2px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`,hS=y(vt)`
  font-size: 11px;
  text-decoration: underline; 
  padding: 10px;
  color: var(--grey);
  border: none;
  border-radius: 3px;
  background-color: var(--light-black);

  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`,mS=y.div`
    display: flex
`,gS=y.div`
    font-weight: 800;
    font-size: 100px;
    color: var(--white);
`,vS=y.div`
    font-weight: 900;
    font-size: 100px;
    color: var(--blue);
`,gm=y.label`
    margin-right: 21vw;
    padding-left: 10px;
    font-size: 17px;
    color: var(--white);
`,yS=y(vt)`
  font-size: 11px;
  color: var(--blue);
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`,vm=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,ym=y.div`
  background: var(--light-black);
  width: 400px;
  height: 300px; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,xm=y.label`
    font-size: 20px;
    color: black;
    text-align: center;
    color: white;
`,wm=y.div`
  background-color: var(--light-black); 
  color: var(--grey);
  padding: 5px 20px;
  /* border: 1px solid black; */
  border-radius: 50px;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;

  &:hover {
    color: var(--white)
  }

`,xS=y.button`
  font-size: 15px;
  width: 22%;
  height: 17%;
  padding: 10px;
  background-color: var(--blue);
  color: #fff;
  border: none;
  border-radius: 50px;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`,wS=y(vt)`
  margin-top: 50px;
  color: var(--grey);
  background-color: var(--black);
  border: none;
  cursor: pointer;
  font-size: 14px;

  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--white);
    transform: translateY(-3px);
  }
`;class li{constructor(t,n){this.username=t,this.password=n,this.profilePicture=null,this.posts=[],this.biography="",this.education="",this.workStatus="",this.socialMedia=[],this.interests=[],this.role=""}setUsername(t){this.username=t}getUsername(){return this.username}setPassword(t){this.password=t}getPassword(){return this.password}setProfilePicture(t){this.profilePicture=t}getProfilePicture(){return this.profilePicture}addPost(t){this.posts.push(t)}getPosts(){return this.posts}setBiography(t){this.biography=t}getBiography(){return this.biography}setWorkStatus(t){this.workStatus=t}getWorkStatus(){return this.workStatus}setSocialMedia(t){this.socialMedia=t}getSocialMedia(){return this.socialMedia}}class ci{constructor(t,n,r,o,i,a){this.author=t,this.title=n,this.content=r,this.topic=o,this.timeStamp=i,this.id=a,this.likes=0,this.comments=[],this.url="/".concat(String(t.getUsername()),"/",String(a))}like(){this.likes++}dislike(){this.likes--}addComment(t){this.comments.push(t)}getCommentsTotal(){let t=0;for(const n of this.comments){t++;for(const r of n.comments){t++;for(const o of r.comments)t++}}return t}getAuthor(){return{author:this.author}}getPostInformation(){return{author:this.author,title:this.title,content:this.content,topic:this.topic,timeStamp:this.timeStamp,id:this.id,likes:this.likes,comments:this.comments}}getPostURL(){return{url:this.url}}}class Rt{constructor(t,n,r,o){this.author=t,this.content=n,this.timeStamp=r,this.id=o,this.likes=0,this.comments=[]}like(){this.likes++}unlike(){this.likes--}addComment(t){this.comments.push(t)}getAuthor(){return{author:this.author}}getPostInformation(){return{author:this.author,title:this.title,content:this.content,topic:this.topic,timeStamp:this.timeStamp,id:this.id,likes:this.likes,comments:this.comments}}getPostURL(){return{url:this.url}}}const zn="/CodeConnect/assets/MainUserPfp-1324bd9a.png",kS="/CodeConnect/assets/profile3-65bbbce1.jpg",vn="/CodeConnect/assets/userPfp3-ca280f4a.png",Vt="/CodeConnect/assets/userPfp-3c07c570.png",an="/CodeConnect/assets/userPfp2-778a6b44.png";class ui{constructor(t,n,r){this.socialMedia=t,this.username=n,this.link=r}setSocialMedia(t){this.socialMedia=t}getSocialMedia(){return this.socialMedia}setUsername(t){this.username=t}getUsername(){return this.username}setLink(t){this.link=t}getLink(){return this.link}}let yn=class{constructor(t){this.name=t,this.posts=[]}getName(){return this.name}addPost(t){this.posts.push(t)}getPosts(){return this.posts}};const et=[],te=[],ut=[];function bS(e,t,n,r){let o=te.length;const i=localStorage.getItem("userDatabaseKey"),a=et[i];console.log(a);const s=new ci(a,e,n,t,r,o);te.push(s)}function SS(e,t,n,r){const o=localStorage.getItem("userDatabaseKey"),i=et[o];if(t==-1&&n==-1){const a=new Rt(i,r,"1 second ago",e.comments.length);e.addComment(a)}else if(t>=0&&n==-1){const a=new Rt(i,r,"1 second ago",e.comments.at(t).comments.length);e.comments.at(t).addComment(a)}else{const a=new Rt(i,r,"1 second ago",e.comments.at(t).comments.at(n).comments.length);e.comments.at(t).comments.at(n).addComment(a)}}function CS(e,t){const n=new li(e,t);n.setProfilePicture(Vt),n.role="Student",n.interests=["Default"],et.push(n),console.log(et)}const yt=new li("PixelPioneer","123");yt.setProfilePicture(zn);yt.setBiography("OMG this is my bio!!");const ES=new ui("github","PixelPioneer"),jS=new ui("twitter","PixelPioneer");yt.setSocialMedia([jS,ES]);yt.role="Mentor";yt.interests=["Web Development","React","UX Design"];const At=new li("madscientist","password");At.setProfilePicture(kS);const PS=new ui("twitter","madscientist123");At.setSocialMedia([PS]);At.role="Student";At.interests=["Game Development","C++"];const jr=new li("supasonic","password");jr.setProfilePicture(vn);const TS=new ui("github","supasupasonicc");jr.setSocialMedia([TS]);jr.role="Student";jr.interests=["Machine Learning","C++","Mobile Dev"];const Na=new li("Kirby","password");Na.setProfilePicture(Vt);const RS=new ui("twitter","bottomLessStomach1");Na.setSocialMedia([RS]);Na.role="Student";Na.interests=["Desktop Development","C++","Embedded Devices"];const Ia=new li("Boo","password");Ia.setProfilePicture(an);const NS=new ui("twitter","hahaScaredYou");Ia.setSocialMedia([NS]);Ia.role="Mentor";Ia.interests=["Assembly","Binary"];et.push(yt);et.push(At);et.push(jr);et.push(Na);et.push(Ia);const Bf=new ci(yt,"Learning React","I am learning React for a school project, what are the best resources to learn from?","React","3 months ago",te.length);te.push(Bf);yt.addPost(Bf);Bf.likes=1;const Hf=new ci(At,"Growtopia - My new game!","I've been developing my farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!","Game Development","1 month ago",te.length);te.push(Hf);At.addPost(Hf);Hf.likes=93;const Wf=new ci(jr,"Internship Help","I'm in my third year of university and I'm want to start applying to internships. I've never had an interview before and I was wondering what the process is normally like?","Career","2 hours ago",te.length);te.push(Wf);jr.addPost(Wf);Wf.likes=18;const Yf=new ci(yt,"IDE for python","What are the best IDE's for learning python?","Python","3 hours ago",te.length);te.push(Yf);yt.addPost(Yf);Yf.likes=30;const Vf=new ci(At,"New project","Checkout my project. Done in all python","Python","4 hours ago",te.length);te.push(Vf);At.addPost(Vf);Vf.likes=136;const Gf=new Rt(yt,"Update: I started watching a youtube tutorial, but I'm finding it hard to follow... maybe after all this struggle I'll start my own channel","3 months ago",te.at(0).length),IS=new Rt(At,"This is actually such a big problem in the community! So many 'flashy' tutorials out there with bad content","2 months ago",Gf.comments.length);te.at(0).addComment(Gf);Gf.addComment(IS);const u1=new Rt(yt,"Update 2: Yep! I am definitely starting my own channel after I learn the basics, UGHh!","2 months ago",te.at(0).length),Kf=new Rt(At,"Hey any update on this? Did you end up making a youtube channel?","1 month ago",0),OS=new Rt(At,"I would love to hear how you got started with react","1 month ago",0),LS=new Rt(At,"wow! i'm talking to myself :(","2 weeks ago",1);te.at(0).addComment(u1);u1.addComment(Kf);Kf.addComment(OS);Kf.addComment(LS);const AS=new Rt(jr,"Uhhhh hey you should update this post haha","1 month ago",te.at(1).length);te.at(1).addComment(AS);const MS=new Rt(yt,"Cool name! What does this app do? where can I access it? you forgot to link the beta I think :)","1 month ago",te.at(1).length);te.at(1).addComment(MS);const DS=new Rt(yt,"I totally felt confused and overwhelmed when trying to find an internship too! You're not alone in this. It gets better :)","1 day ago",te.at(2).length);te.at(2).addComment(DS);const _S=new Rt(yt,"Interview processes depend on the company! They usually start with some coding test or a screening interview, and then they focus more on your specific skills. DM me for more info?","1 day ago",te.at(2).length);te.at(2).addComment(_S);const FS=new yn("Web Development"),$S=new yn("React"),zS=new yn("Python"),US=new yn("JavaScript"),BS=new yn("Data Structures"),HS=new yn("Networks"),WS=new yn("Game Development"),YS=new yn("HTML"),VS=new yn("CSS"),GS=new yn("Career");ut.push(FS);ut.push($S);ut.push(zS);ut.push(US);ut.push(BS);ut.push(HS);ut.push(WS);ut.push(YS);ut.push(VS);ut.push(GS);te.forEach(e=>{ut.forEach(t=>{e.topic===t.name&&t.posts.push(e)})});function d1(e,t){for(let n=0;n<et.length;n++)if(et[n].getUsername()===e&&et[n].getPassword()===t)return localStorage.setItem("userDatabaseKey",n),!0;return!1}const KS={login:async(e,t)=>d1(e,t)?{success:!0,user:{username:e}}:{success:!1,error:"Invalid credentials"}};function XS(){const e=We(),[t,n]=x.useState(""),[r,o]=x.useState(""),[i,a]=x.useState(""),[s,c]=x.useState(!1),[u,d]=x.useState(!1),f=async()=>{try{const C=await KS.login(t,r);C.success?(console.log("Login successful:",C.user),e("/CodeConnect/home")):a(C.error)}catch(C){console.error("Login error:",C),a("Unknown error has occured. Please try again.")}},p=()=>{event.preventDefault(),d(!0)},w=()=>{d(!1)},k=()=>{event.preventDefault(),c(!0)},b=()=>{c(!1)};return l.jsx(uS,{children:l.jsxs(dS,{children:[l.jsxs(mS,{children:[l.jsx(gS,{children:"Code"}),l.jsx(vS,{children:"Connect"})]}),l.jsxs(fS,{children:[l.jsxs("div",{children:[l.jsx(gm,{}),l.jsx(Yc,{type:"text",id:"username",placeholder:"Username",value:t,onChange:C=>n(C.target.value)})]}),l.jsxs("div",{children:[l.jsx(gm,{}),l.jsx(Yc,{type:"password",id:"password",placeholder:"Password",value:r,onChange:C=>o(C.target.value)})]}),l.jsx(pS,{type:"button",onClick:f,children:"Login"}),i&&l.jsx("div",{style:{color:"red"},children:i}),l.jsx(yS,{onClick:C=>k(),children:"Forgot Password?"}),s&&l.jsx(vm,{children:l.jsxs(ym,{children:[l.jsx(xm,{children:"Enter your email to reset your password: "}),l.jsx(Yc,{type:"text",placeholder:"Email"}),l.jsx(xS,{onClick:p,children:"Submit"}),l.jsx(wm,{onClick:b,children:"Close"})]})}),l.jsx(hS,{to:"/CodeConnect/guest-home",children:"Continue As Guest"})]}),u&&l.jsx(vm,{children:l.jsxs(ym,{children:[l.jsx(xm,{children:"Email successfully sent!"}),l.jsx(wm,{onClick:w,children:"Close"})]})}),l.jsx(wS,{to:"/CodeConnect/create-account",children:"Not a user? Create an account"})]})})}function QS(){return l.jsx(XS,{})}function km(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?km(Object(n),!0).forEach(function(r){Ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):km(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fl(e){"@babel/helpers - typeof";return fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fl(e)}function ZS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function JS(e,t,n){return t&&bm(e.prototype,t),n&&bm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xf(e,t){return eC(e)||nC(e,t)||f1(e,t)||oC()}function Oa(e){return qS(e)||tC(e)||f1(e)||rC()}function qS(e){if(Array.isArray(e))return hd(e)}function eC(e){if(Array.isArray(e))return e}function tC(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nC(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,a,s;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));o=!0);}catch(c){i=!0,s=c}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function f1(e,t){if(e){if(typeof e=="string")return hd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hd(e,t)}}function hd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sm=function(){},Qf={},p1={},h1=null,m1={mark:Sm,measure:Sm};try{typeof window<"u"&&(Qf=window),typeof document<"u"&&(p1=document),typeof MutationObserver<"u"&&(h1=MutationObserver),typeof performance<"u"&&(m1=performance)}catch{}var iC=Qf.navigator||{},Cm=iC.userAgent,Em=Cm===void 0?"":Cm,vr=Qf,be=p1,jm=h1,as=m1;vr.document;var Un=!!be.documentElement&&!!be.head&&typeof be.addEventListener=="function"&&typeof be.createElement=="function",g1=~Em.indexOf("MSIE")||~Em.indexOf("Trident/"),ss,ls,cs,us,ds,An="___FONT_AWESOME___",md=16,v1="fa",y1="svg-inline--fa",qr="data-fa-i2svg",gd="data-fa-pseudo-element",aC="data-fa-pseudo-element-pending",Zf="data-prefix",Jf="data-icon",Pm="fontawesome-i2svg",sC="async",lC=["HTML","HEAD","STYLE","SCRIPT"],x1=function(){try{return!0}catch{return!1}}(),we="classic",Ie="sharp",qf=[we,Ie];function La(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[we]}})}var va=La((ss={},Ge(ss,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ge(ss,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ss)),ya=La((ls={},Ge(ls,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ge(ls,Ie,{solid:"fass",regular:"fasr",light:"fasl"}),ls)),xa=La((cs={},Ge(cs,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ge(cs,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),cs)),cC=La((us={},Ge(us,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ge(us,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),us)),uC=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,w1="fa-layers-text",dC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fC=La((ds={},Ge(ds,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ge(ds,Ie,{900:"fass",400:"fasr",300:"fasl"}),ds)),k1=[1,2,3,4,5,6,7,8,9,10],pC=k1.concat([11,12,13,14,15,16,17,18,19,20]),hC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wa=new Set;Object.keys(ya[we]).map(wa.add.bind(wa));Object.keys(ya[Ie]).map(wa.add.bind(wa));var mC=[].concat(qf,Oa(wa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zr.GROUP,zr.SWAP_OPACITY,zr.PRIMARY,zr.SECONDARY]).concat(k1.map(function(e){return"".concat(e,"x")})).concat(pC.map(function(e){return"w-".concat(e)})),Xi=vr.FontAwesomeConfig||{};function gC(e){var t=be.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vC(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(be&&typeof be.querySelector=="function"){var yC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yC.forEach(function(e){var t=Xf(e,2),n=t[0],r=t[1],o=vC(gC(n));o!=null&&(Xi[r]=o)})}var b1={styleDefault:"solid",familyDefault:"classic",cssPrefix:v1,replacementClass:y1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xi.familyPrefix&&(Xi.cssPrefix=Xi.familyPrefix);var ti=A(A({},b1),Xi);ti.autoReplaceSvg||(ti.observeMutations=!1);var $={};Object.keys(b1).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){ti[e]=n,Qi.forEach(function(r){return r($)})},get:function(){return ti[e]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(t){ti.cssPrefix=t,Qi.forEach(function(n){return n($)})},get:function(){return ti.cssPrefix}});vr.FontAwesomeConfig=$;var Qi=[];function xC(e){return Qi.push(e),function(){Qi.splice(Qi.indexOf(e),1)}}var Gn=md,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wC(e){if(!(!e||!Un)){var t=be.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=be.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return be.head.insertBefore(t,r),e}}var kC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ka(){for(var e=12,t="";e-- >0;)t+=kC[Math.random()*62|0];return t}function di(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ep(e){return e.classList?di(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function S1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bC(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(S1(e[n]),'" ')},"").trim()}function Wl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function tp(e){return e.size!==hn.size||e.x!==hn.x||e.y!==hn.y||e.rotate!==hn.rotate||e.flipX||e.flipY}function SC(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:c,path:u}}function CC(e){var t=e.transform,n=e.width,r=n===void 0?md:n,o=e.height,i=o===void 0?md:o,a=e.startCentered,s=a===void 0?!1:a,c="";return s&&g1?c+="translate(".concat(t.x/Gn-r/2,"em, ").concat(t.y/Gn-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/Gn,"em), calc(-50% + ").concat(t.y/Gn,"em)) "):c+="translate(".concat(t.x/Gn,"em, ").concat(t.y/Gn,"em) "),c+="scale(".concat(t.size/Gn*(t.flipX?-1:1),", ").concat(t.size/Gn*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var EC=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function C1(){var e=v1,t=y1,n=$.cssPrefix,r=$.replacementClass,o=EC;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return o}var Tm=!1;function Vc(){$.autoAddCss&&!Tm&&(wC(C1()),Tm=!0)}var jC={mixout:function(){return{dom:{css:C1,insertCss:Vc}}},hooks:function(){return{beforeDOMElementCreation:function(){Vc()},beforeI2svg:function(){Vc()}}}},Mn=vr||{};Mn[An]||(Mn[An]={});Mn[An].styles||(Mn[An].styles={});Mn[An].hooks||(Mn[An].hooks={});Mn[An].shims||(Mn[An].shims=[]);var en=Mn[An],E1=[],PC=function e(){be.removeEventListener("DOMContentLoaded",e),pl=1,E1.map(function(t){return t()})},pl=!1;Un&&(pl=(be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(be.readyState),pl||be.addEventListener("DOMContentLoaded",PC));function TC(e){Un&&(pl?setTimeout(e,0):E1.push(e))}function Aa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,i=o===void 0?[]:o;return typeof e=="string"?S1(e):"<".concat(t," ").concat(bC(r),">").concat(i.map(Aa).join(""),"</").concat(t,">")}function Rm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var RC=function(t,n){return function(r,o,i,a){return t.call(n,r,o,i,a)}},Gc=function(t,n,r,o){var i=Object.keys(t),a=i.length,s=o!==void 0?RC(n,o):n,c,u,d;for(r===void 0?(c=1,d=t[i[0]]):(c=0,d=r);c<a;c++)u=i[c],d=s(d,t[u],u,t);return d};function NC(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((o&1023)<<10)+(i&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function vd(e){var t=NC(e);return t.length===1?t[0].toString(16):null}function IC(e,t){var n=e.length,r=e.charCodeAt(t),o;return r>=55296&&r<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function Nm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],o=!!r.icon;return o?t[r.iconName]=r.icon:t[n]=r,t},{})}function yd(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,i=Nm(t);typeof en.hooks.addPack=="function"&&!o?en.hooks.addPack(e,Nm(t)):en.styles[e]=A(A({},en.styles[e]||{}),i),e==="fas"&&yd("fa",t)}var fs,ps,hs,No=en.styles,OC=en.shims,LC=(fs={},Ge(fs,we,Object.values(xa[we])),Ge(fs,Ie,Object.values(xa[Ie])),fs),np=null,j1={},P1={},T1={},R1={},N1={},AC=(ps={},Ge(ps,we,Object.keys(va[we])),Ge(ps,Ie,Object.keys(va[Ie])),ps);function MC(e){return~mC.indexOf(e)}function DC(e,t){var n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r===e&&o!==""&&!MC(o)?o:null}var I1=function(){var t=function(i){return Gc(No,function(a,s,c){return a[c]=Gc(s,i,{}),a},{})};j1=t(function(o,i,a){if(i[3]&&(o[i[3]]=a),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){o[c.toString(16)]=a})}return o}),P1=t(function(o,i,a){if(o[a]=a,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){o[c]=a})}return o}),N1=t(function(o,i,a){var s=i[2];return o[a]=a,s.forEach(function(c){o[c]=a}),o});var n="far"in No||$.autoFetchSvg,r=Gc(OC,function(o,i){var a=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(o.names[a]={prefix:s,iconName:c}),typeof a=="number"&&(o.unicodes[a.toString(16)]={prefix:s,iconName:c}),o},{names:{},unicodes:{}});T1=r.names,R1=r.unicodes,np=Yl($.styleDefault,{family:$.familyDefault})};xC(function(e){np=Yl(e.styleDefault,{family:$.familyDefault})});I1();function rp(e,t){return(j1[e]||{})[t]}function _C(e,t){return(P1[e]||{})[t]}function Ur(e,t){return(N1[e]||{})[t]}function O1(e){return T1[e]||{prefix:null,iconName:null}}function FC(e){var t=R1[e],n=rp("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yr(){return np}var op=function(){return{prefix:null,iconName:null,rest:[]}};function Yl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?we:n,o=va[r][e],i=ya[r][e]||ya[r][o],a=e in en.styles?e:null;return i||a||null}var Im=(hs={},Ge(hs,we,Object.keys(xa[we])),Ge(hs,Ie,Object.keys(xa[Ie])),hs);function Vl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,o=r===void 0?!1:r,i=(t={},Ge(t,we,"".concat($.cssPrefix,"-").concat(we)),Ge(t,Ie,"".concat($.cssPrefix,"-").concat(Ie)),t),a=null,s=we;(e.includes(i[we])||e.some(function(u){return Im[we].includes(u)}))&&(s=we),(e.includes(i[Ie])||e.some(function(u){return Im[Ie].includes(u)}))&&(s=Ie);var c=e.reduce(function(u,d){var f=DC($.cssPrefix,d);if(No[d]?(d=LC[s].includes(d)?cC[s][d]:d,a=d,u.prefix=d):AC[s].indexOf(d)>-1?(a=d,u.prefix=Yl(d,{family:s})):f?u.iconName=f:d!==$.replacementClass&&d!==i[we]&&d!==i[Ie]&&u.rest.push(d),!o&&u.prefix&&u.iconName){var p=a==="fa"?O1(u.iconName):{},w=Ur(u.prefix,u.iconName);p.prefix&&(a=null),u.iconName=p.iconName||w||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!No.far&&No.fas&&!$.autoFetchSvg&&(u.prefix="fas")}return u},op());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===Ie&&(No.fass||$.autoFetchSvg)&&(c.prefix="fass",c.iconName=Ur(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=yr()||"fas"),c}var $C=function(){function e(){ZS(this,e),this.definitions={}}return JS(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),a[s]),yd(s,a[s]);var c=xa[we][s];c&&yd(c,a[s]),I1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(i){var a=o[i],s=a.prefix,c=a.iconName,u=a.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][c]=u}),n}}]),e}(),Om=[],Io={},zo={},zC=Object.keys(zo);function UC(e,t){var n=t.mixoutsTo;return Om=e,Io={},Object.keys(zo).forEach(function(r){zC.indexOf(r)===-1&&delete zo[r]}),Om.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]=="function"&&(n[a]=o[a]),fl(o[a])==="object"&&Object.keys(o[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=o[a][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(a){Io[a]||(Io[a]=[]),Io[a].push(i[a])})}r.provides&&r.provides(zo)}),n}function xd(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=Io[e]||[];return i.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function eo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Io[e]||[];o.forEach(function(i){i.apply(null,n)})}function Dn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return zo[e]?zo[e].apply(null,t):void 0}function wd(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||yr();if(t)return t=Ur(n,t)||t,Rm(L1.definitions,n,t)||Rm(en.styles,n,t)}var L1=new $C,BC=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,eo("noAuto")},HC={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Un?(eo("beforeI2svg",t),Dn("pseudoElements2svg",t),Dn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,TC(function(){YC({autoReplaceSvgRoot:n}),eo("watch",t)})}},WC={icon:function(t){if(t===null)return null;if(fl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ur(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Yl(t[0]);return{prefix:r,iconName:Ur(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.cssPrefix,"-"))>-1||t.match(uC))){var o=Vl(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||yr(),iconName:Ur(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var i=yr();return{prefix:i,iconName:Ur(i,t)||t}}}},Mt={noAuto:BC,config:$,dom:HC,parse:WC,library:L1,findIconDefinition:wd,toHtml:Aa},YC=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?be:n;(Object.keys(en.styles).length>0||$.autoFetchSvg)&&Un&&$.autoReplaceSvg&&Mt.dom.i2svg({node:r})};function Gl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Aa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Un){var r=be.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function VC(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(tp(a)&&n.found&&!r.found){var s=n.width,c=n.height,u={x:s/c/2,y:.5};o.style=Wl(A(A({},i),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function GC(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,i=e.symbol,a=i===!0?"".concat(t,"-").concat($.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},o),{},{id:a}),children:r}]}]}function ip(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,c=e.title,u=e.maskId,d=e.titleId,f=e.extra,p=e.watchable,w=p===void 0?!1:p,k=r.found?r:n,b=k.width,C=k.height,g=o==="fak",h=[$.replacementClass,i?"".concat($.cssPrefix,"-").concat(i):""].filter(function(M){return f.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(f.classes).join(" "),v={children:[],attributes:A(A({},f.attributes),{},{"data-prefix":o,"data-icon":i,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(C)})},m=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(b/C*16*.0625,"em")}:{};w&&(v.attributes[qr]=""),c&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(d||ka())},children:[c]}),delete v.attributes.title);var E=A(A({},v),{},{prefix:o,iconName:i,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:A(A({},m),f.styles)}),T=r.found&&n.found?Dn("generateAbstractMask",E)||{children:[],attributes:{}}:Dn("generateAbstractIcon",E)||{children:[],attributes:{}},j=T.children,O=T.attributes;return E.children=j,E.attributes=O,s?GC(E):VC(E)}function Lm(e){var t=e.content,n=e.width,r=e.height,o=e.transform,i=e.title,a=e.extra,s=e.watchable,c=s===void 0?!1:s,u=A(A(A({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")});c&&(u[qr]="");var d=A({},a.styles);tp(o)&&(d.transform=CC({transform:o,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var f=Wl(d);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function KC(e){var t=e.content,n=e.title,r=e.extra,o=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Wl(r.styles);i.length>0&&(o.style=i);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Kc=en.styles;function kd(e){var t=e[0],n=e[1],r=e.slice(4),o=Xf(r,1),i=o[0],a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(zr.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(zr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(zr.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:a}}var XC={found:!1,width:512,height:512};function QC(e,t){!x1&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function bd(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=yr()),new Promise(function(r,o){if(Dn("missingIconAbstract"),n==="fa"){var i=O1(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Kc[t]&&Kc[t][e]){var a=Kc[t][e];return r(kd(a))}QC(e,t),r(A(A({},XC),{},{icon:$.showMissingIcons&&e?Dn("missingIconAbstract")||{}:{}}))})}var Am=function(){},Sd=$.measurePerformance&&as&&as.mark&&as.measure?as:{mark:Am,measure:Am},Mi='FA "6.4.2"',ZC=function(t){return Sd.mark("".concat(Mi," ").concat(t," begins")),function(){return A1(t)}},A1=function(t){Sd.mark("".concat(Mi," ").concat(t," ends")),Sd.measure("".concat(Mi," ").concat(t),"".concat(Mi," ").concat(t," begins"),"".concat(Mi," ").concat(t," ends"))},ap={begin:ZC,end:A1},Ms=function(){};function Mm(e){var t=e.getAttribute?e.getAttribute(qr):null;return typeof t=="string"}function JC(e){var t=e.getAttribute?e.getAttribute(Zf):null,n=e.getAttribute?e.getAttribute(Jf):null;return t&&n}function qC(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function eE(){if($.autoReplaceSvg===!0)return Ds.replace;var e=Ds[$.autoReplaceSvg];return e||Ds.replace}function tE(e){return be.createElementNS("http://www.w3.org/2000/svg",e)}function nE(e){return be.createElement(e)}function M1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?tE:nE:n;if(typeof e=="string")return be.createTextNode(e);var o=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){o.setAttribute(a,e.attributes[a])});var i=e.children||[];return i.forEach(function(a){o.appendChild(M1(a,{ceFn:r}))}),o}function rE(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ds={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(o){n.parentNode.insertBefore(M1(o),n)}),n.getAttribute(qr)===null&&$.keepOriginalSource){var r=be.createComment(rE(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ep(n).indexOf($.replacementClass))return Ds.replace(t);var o=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===$.replacementClass||c.match(o)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var a=r.map(function(s){return Aa(s)}).join(`
`);n.setAttribute(qr,""),n.innerHTML=a}};function Dm(e){e()}function D1(e,t){var n=typeof t=="function"?t:Ms;if(e.length===0)n();else{var r=Dm;$.mutateApproach===sC&&(r=vr.requestAnimationFrame||Dm),r(function(){var o=eE(),i=ap.begin("mutate");e.map(o),i(),n()})}}var sp=!1;function _1(){sp=!0}function Cd(){sp=!1}var hl=null;function _m(e){if(jm&&$.observeMutations){var t=e.treeCallback,n=t===void 0?Ms:t,r=e.nodeCallback,o=r===void 0?Ms:r,i=e.pseudoElementsCallback,a=i===void 0?Ms:i,s=e.observeMutationsRoot,c=s===void 0?be:s;hl=new jm(function(u){if(!sp){var d=yr();di(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Mm(f.addedNodes[0])&&($.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&$.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Mm(f.target)&&~hC.indexOf(f.attributeName))if(f.attributeName==="class"&&JC(f.target)){var p=Vl(ep(f.target)),w=p.prefix,k=p.iconName;f.target.setAttribute(Zf,w||d),k&&f.target.setAttribute(Jf,k)}else qC(f.target)&&o(f.target)})}}),Un&&hl.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function oE(){hl&&hl.disconnect()}function iE(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,o){var i=o.split(":"),a=i[0],s=i.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function aE(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",o=Vl(ep(e));return o.prefix||(o.prefix=yr()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=_C(o.prefix,e.innerText)||rp(o.prefix,vd(e.innerText))),!o.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function sE(e){var t=di(e.attributes).reduce(function(o,i){return o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||ka()):(t["aria-hidden"]="true",t.focusable="false")),t}function lE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=aE(e),r=n.iconName,o=n.prefix,i=n.rest,a=sE(e),s=xd("parseNodeAttributes",{},e),c=t.styleParser?iE(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:a}},s)}var cE=en.styles;function F1(e){var t=$.autoReplaceSvg==="nest"?Fm(e,{styleParser:!1}):Fm(e);return~t.extra.classes.indexOf(w1)?Dn("generateLayersText",e,t):Dn("generateSvgReplacementMutation",e,t)}var xr=new Set;qf.map(function(e){xr.add("fa-".concat(e))});Object.keys(va[we]).map(xr.add.bind(xr));Object.keys(va[Ie]).map(xr.add.bind(xr));xr=Oa(xr);function $m(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Un)return Promise.resolve();var n=be.documentElement.classList,r=function(f){return n.add("".concat(Pm,"-").concat(f))},o=function(f){return n.remove("".concat(Pm,"-").concat(f))},i=$.autoFetchSvg?xr:qf.map(function(d){return"fa-".concat(d)}).concat(Object.keys(cE));i.includes("fa")||i.push("fa");var a=[".".concat(w1,":not([").concat(qr,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(qr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=di(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),o("complete");else return Promise.resolve();var c=ap.begin("onTree"),u=s.reduce(function(d,f){try{var p=F1(f);p&&d.push(p)}catch(w){x1||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,f){Promise.all(u).then(function(p){D1(p,function(){r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),c(),d()})}).catch(function(p){c(),f(p)})})}function uE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F1(e).then(function(n){n&&D1([n],t)})}function dE(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wd(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:wd(o||{})),e(r,A(A({},n),{},{mask:o}))}}var fE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?hn:r,i=n.symbol,a=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,f=n.title,p=f===void 0?null:f,w=n.titleId,k=w===void 0?null:w,b=n.classes,C=b===void 0?[]:b,g=n.attributes,h=g===void 0?{}:g,v=n.styles,m=v===void 0?{}:v;if(t){var E=t.prefix,T=t.iconName,j=t.icon;return Gl(A({type:"icon"},t),function(){return eo("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(p?h["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(k||ka()):(h["aria-hidden"]="true",h.focusable="false")),ip({icons:{main:kd(j),mask:c?kd(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:T,transform:A(A({},hn),o),symbol:a,title:p,maskId:d,titleId:k,extra:{attributes:h,styles:m,classes:C}})})}},pE={mixout:function(){return{icon:dE(fE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$m,n.nodeCallback=uE,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,o=r===void 0?be:r,i=n.callback,a=i===void 0?function(){}:i;return $m(o,a)},t.generateSvgReplacementMutation=function(n,r){var o=r.iconName,i=r.title,a=r.titleId,s=r.prefix,c=r.transform,u=r.symbol,d=r.mask,f=r.maskId,p=r.extra;return new Promise(function(w,k){Promise.all([bd(o,s),d.iconName?bd(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var C=Xf(b,2),g=C[0],h=C[1];w([n,ip({icons:{main:g,mask:h},prefix:s,iconName:o,transform:c,symbol:u,maskId:f,title:i,titleId:a,extra:p,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.transform,s=n.styles,c=Wl(s);c.length>0&&(o.style=c);var u;return tp(a)&&(u=Dn("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:o}}}},hE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,i=o===void 0?[]:o;return Gl({type:"layer"},function(){eo("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(c){a=a.concat(c.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Oa(i)).join(" ")},children:a}]})}}}},mE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.title,i=o===void 0?null:o,a=r.classes,s=a===void 0?[]:a,c=r.attributes,u=c===void 0?{}:c,d=r.styles,f=d===void 0?{}:d;return Gl({type:"counter",content:n},function(){return eo("beforeDOMElementCreation",{content:n,params:r}),KC({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Oa(s))}})})}}}},gE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,i=o===void 0?hn:o,a=r.title,s=a===void 0?null:a,c=r.classes,u=c===void 0?[]:c,d=r.attributes,f=d===void 0?{}:d,p=r.styles,w=p===void 0?{}:p;return Gl({type:"text",content:n},function(){return eo("beforeDOMElementCreation",{content:n,params:r}),Lm({content:n,transform:A(A({},hn),i),title:s,extra:{attributes:f,styles:w,classes:["".concat($.cssPrefix,"-layers-text")].concat(Oa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var o=r.title,i=r.transform,a=r.extra,s=null,c=null;if(g1){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,c=d.height/u}return $.autoA11y&&!o&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Lm({content:n.innerHTML,width:s,height:c,transform:i,title:o,extra:a,watchable:!0})])}}},vE=new RegExp('"',"ug"),zm=[1105920,1112319];function yE(e){var t=e.replace(vE,""),n=IC(t,0),r=n>=zm[0]&&n<=zm[1],o=t.length===2?t[0]===t[1]:!1;return{value:vd(o?t[0]:t),isSecondary:r||o}}function Um(e,t){var n="".concat(aC).concat(t.replace(":","-"));return new Promise(function(r,o){if(e.getAttribute(n)!==null)return r();var i=di(e.children),a=i.filter(function(j){return j.getAttribute(gd)===t})[0],s=vr.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(dC),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&d!=="none"&&d!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(c[2])?Ie:we,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ya[p][c[2].toLowerCase()]:fC[p][u],k=yE(f),b=k.value,C=k.isSecondary,g=c[0].startsWith("FontAwesome"),h=rp(w,b),v=h;if(g){var m=FC(b);m.iconName&&m.prefix&&(h=m.iconName,w=m.prefix)}if(h&&!C&&(!a||a.getAttribute(Zf)!==w||a.getAttribute(Jf)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var E=lE(),T=E.extra;T.attributes[gd]=t,bd(h,w).then(function(j){var O=ip(A(A({},E),{},{icons:{main:j,mask:op()},prefix:w,iconName:v,extra:T,watchable:!0})),M=be.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=O.map(function(z){return Aa(z)}).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function xE(e){return Promise.all([Um(e,"::before"),Um(e,"::after")])}function wE(e){return e.parentNode!==document.head&&!~lC.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(gd)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Bm(e){if(Un)return new Promise(function(t,n){var r=di(e.querySelectorAll("*")).filter(wE).map(xE),o=ap.begin("searchPseudoElements");_1(),Promise.all(r).then(function(){o(),Cd(),t()}).catch(function(){o(),Cd(),n()})})}var kE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bm,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?be:r;$.searchPseudoElements&&Bm(o)}}},Hm=!1,bE={mixout:function(){return{dom:{unwatch:function(){_1(),Hm=!0}}}},hooks:function(){return{bootstrap:function(){_m(xd("mutationObserverCallbacks",{}))},noAuto:function(){oE()},watch:function(n){var r=n.observeMutationsRoot;Hm?Cd():_m(xd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Wm=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,o){var i=o.toLowerCase().split("-"),a=i[0],s=i.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},SE={mixout:function(){return{parse:{transform:function(n){return Wm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=Wm(o)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,i=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(o.x*32,", ").concat(o.y*32,") "),u="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),d="rotate(".concat(o.rotate," 0 0)"),f={transform:"".concat(c," ").concat(u," ").concat(d)},p={transform:"translate(".concat(a/2*-1," -256)")},w={outer:s,inner:f,path:p};return{tag:"g",attributes:A({},w.outer),children:[{tag:"g",attributes:A({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),w.path)}]}]}}}},Xc={x:0,y:0,width:"100%",height:"100%"};function Ym(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function CE(e){return e.tag==="g"?e.children:[e]}var EE={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),i=o?Vl(o.split(" ").map(function(a){return a.trim()})):op();return i.prefix||(i.prefix=yr()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.mask,s=n.maskId,c=n.transform,u=i.width,d=i.icon,f=a.width,p=a.icon,w=SC({transform:c,containerWidth:f,iconWidth:u}),k={tag:"rect",attributes:A(A({},Xc),{},{fill:"white"})},b=d.children?{children:d.children.map(Ym)}:{},C={tag:"g",attributes:A({},w.inner),children:[Ym(A({tag:d.tag,attributes:A(A({},d.attributes),w.path)},b))]},g={tag:"g",attributes:A({},w.outer),children:[C]},h="mask-".concat(s||ka()),v="clip-".concat(s||ka()),m={tag:"mask",attributes:A(A({},Xc),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,g]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:CE(p)},m]};return r.push(E,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Xc)}),{children:r,attributes:o}}}},jE={provides:function(t){var n=!1;vr.matchMedia&&(n=vr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},PE={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),i=o===null?!1:o===""?!0:o;return n.symbol=i,n}}}},TE=[jC,pE,hE,mE,gE,kE,bE,SE,EE,jE,PE];UC(TE,{mixoutsTo:Mt});Mt.noAuto;Mt.config;Mt.library;Mt.dom;var Ed=Mt.parse;Mt.findIconDefinition;Mt.toHtml;var RE=Mt.icon;Mt.layer;Mt.text;Mt.counter;var $1={exports:{}},NE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",IE=NE,OE=IE;function z1(){}function U1(){}U1.resetWarningCache=z1;var LE=function(){function e(r,o,i,a,s,c){if(c!==OE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:U1,resetWarningCache:z1};return n.PropTypes=n,n};$1.exports=LE();var AE=$1.exports;const H=wl(AE);function Vm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vm(Object(n),!0).forEach(function(r){Oo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ml(e){"@babel/helpers - typeof";return ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ml(e)}function Oo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ME(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function DE(e,t){if(e==null)return{};var n=ME(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jd(e){return _E(e)||FE(e)||$E(e)||zE()}function _E(e){if(Array.isArray(e))return Pd(e)}function FE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $E(e,t){if(e){if(typeof e=="string")return Pd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pd(e,t)}}function Pd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UE(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,c=e.spin,u=e.spinPulse,d=e.spinReverse,f=e.pulse,p=e.fixedWidth,w=e.inverse,k=e.border,b=e.listItem,C=e.flip,g=e.size,h=e.rotation,v=e.pull,m=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":w,"fa-border":k,"fa-li":b,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},Oo(t,"fa-".concat(g),typeof g<"u"&&g!==null),Oo(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Oo(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Oo(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map(function(E){return m[E]?E:null}).filter(function(E){return E})}function BE(e){return e=e-0,e===e}function B1(e){return BE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var HE=["style"];function WE(e){return e.charAt(0).toUpperCase()+e.slice(1)}function YE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=B1(n.slice(0,r)),i=n.slice(r+1).trim();return o.startsWith("webkit")?t[WE(o)]=i:t[o]=i,t},{})}function H1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return H1(e,c)}),o=Object.keys(t.attributes||{}).reduce(function(c,u){var d=t.attributes[u];switch(u){case"class":c.attrs.className=d,delete t.attributes.class;break;case"style":c.attrs.style=YE(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=d:c.attrs[B1(u)]=d}return c},{attrs:{}}),i=n.style,a=i===void 0?{}:i,s=DE(n,HE);return o.attrs.style=rr(rr({},o.attrs.style),a),e.apply(void 0,[t.tag,rr(rr({},o.attrs),s)].concat(jd(r)))}var W1=!1;try{W1=!0}catch{}function VE(){if(!W1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gm(e){if(e&&ml(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ed.icon)return Ed.icon(e);if(e===null)return null;if(e&&ml(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Qc(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Oo({},e,t):{}}var Fe=_e.forwardRef(function(e,t){var n=e.icon,r=e.mask,o=e.symbol,i=e.className,a=e.title,s=e.titleId,c=e.maskId,u=Gm(n),d=Qc("classes",[].concat(jd(UE(e)),jd(i.split(" ")))),f=Qc("transform",typeof e.transform=="string"?Ed.transform(e.transform):e.transform),p=Qc("mask",Gm(r)),w=RE(u,rr(rr(rr(rr({},d),f),p),{},{symbol:o,title:a,titleId:s,maskId:c}));if(!w)return VE("Could not find icon",u),null;var k=w.abstract,b={ref:t};return Object.keys(e).forEach(function(C){Fe.defaultProps.hasOwnProperty(C)||(b[C]=e[C])}),GE(k[0],b)});Fe.displayName="FontAwesomeIcon";Fe.propTypes={beat:H.bool,border:H.bool,beatFade:H.bool,bounce:H.bool,className:H.string,fade:H.bool,flash:H.bool,mask:H.oneOfType([H.object,H.array,H.string]),maskId:H.string,fixedWidth:H.bool,inverse:H.bool,flip:H.oneOf([!0,!1,"horizontal","vertical","both"]),icon:H.oneOfType([H.object,H.array,H.string]),listItem:H.bool,pull:H.oneOf(["right","left"]),pulse:H.bool,rotation:H.oneOf([0,90,180,270]),shake:H.bool,size:H.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:H.bool,spinPulse:H.bool,spinReverse:H.bool,symbol:H.oneOfType([H.bool,H.string]),title:H.string,titleId:H.string,transform:H.oneOfType([H.string,H.object]),swapOpacity:H.bool};Fe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var GE=H1.bind(null,_e.createElement);const KE=y.div`
    padding-top: 11px;
    width: 120px;
    position: relative;
`,XE=y.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
    padding: 5px 0;
    color: var(--grey);
    border-radius: 50px;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        color: var(--white);
        background-color: var(--light-black);
        box-shadow: 0 5px 10px var(--shadow);
    }
`,QE=y.span`
    font-size: 16px;
`,ZE=y(Fe)`
    font-size: 15px;
    transition: 0.4s;

    &:hover {
        color: var(--blue);
    }

    &.active {
        transform: rotate(180deg);
    }
`,JE=y.div`
    background-color: var(--light-black); 
    position: absolute;
    opacity: 0;
    display: none;
    transition: 0.2s;
    z-index: 1;
    width: 120px;
    height: 100px;
    border-radius: 10px;
    font-size: 15px;
    box-shadow: 0 5px 10px var(--shadow);
    cursor: pointer;

    div {
        width: 100px;
        font-size: 14px;
        color: var(--grey);

        &:hover {
            color: var(--white);
        }
    }

    &.active {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        opacity: 1;
    }
`;var qE={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},e3={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},Kl={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Y1={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},Xl={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},V1={prefix:"fas",iconName:"house-chimney",icon:[576,512,[63499,"home-lg"],"e3af","M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"]},lp={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},t3={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},n3={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},G1={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},r3={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},o3=r3;function Ql({setStatus:e}){const[t,n]=x.useState(!1),[r,o]=x.useState("Sort");return x.useEffect(()=>{e(r)}),l.jsxs(KE,{onClick:()=>{n(!t)},children:[l.jsxs(XE,{children:[l.jsx(QE,{children:r}),l.jsx(ZE,{icon:n3,className:`${t?"active":"inactive"}`})]}),l.jsxs(JE,{className:`${t?"active":"inactive"}`,children:[l.jsx("div",{onClick:()=>{o("Top")},children:"Top"}),l.jsx("div",{onClick:()=>{o("Recent")},children:"Recent"})]})]})}Ql.propTypes={setStatus:H.func};const i3=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`,a3=y.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`,s3=y.div`
    font-size: 35px;
    font-weight: 600;
`,l3=y.div`
    color: var(--white);
`,c3=y.div`
    color: var(--blue);
    padding-left: 25px;
`,u3=y.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    font-size: 26px;
    
    div {
        height: 50px;
    }

    & a.active {
        color: var(--white);
    }
`,ms=y(Fe)`
    font-size: 22px;
`,Ti=y(Mf)`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--grey);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    
    &:hover {
        color: var(--white);
    }
`,d3=y.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: var(--white);
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: translateY(-3px);
    }
`;var K1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(K1);var f3=K1.exports;const ce=wl(f3),p3=["as","disabled"];function h3(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function m3(e){return!e||e.trim()==="#"}function X1({tagName:e,disabled:t,href:n,target:r,rel:o,role:i,onClick:a,tabIndex:s=0,type:c}){e||(n!=null||r!=null||o!=null?e="a":e="button");const u={tagName:e};if(e==="button")return[{type:c||"button",disabled:t},u];const d=p=>{if((t||e==="a"&&m3(n))&&p.preventDefault(),t){p.stopPropagation();return}a==null||a(p)},f=p=>{p.key===" "&&(p.preventDefault(),d(p))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:d,onKeyDown:f},u]}const g3=x.forwardRef((e,t)=>{let{as:n,disabled:r}=e,o=h3(e,p3);const[i,{tagName:a}]=X1(Object.assign({tagName:n,disabled:r},o));return l.jsx(a,Object.assign({},o,i,{ref:t}))});g3.displayName="Button";const v3=["xxl","xl","lg","md","sm","xs"],y3="xs",Zl=x.createContext({prefixes:{},breakpoints:v3,minBreakpoint:y3});function He(e,t){const{prefixes:n}=x.useContext(Zl);return e||n[t]||t}function Q1(){const{breakpoints:e}=x.useContext(Zl);return e}function Z1(){const{minBreakpoint:e}=x.useContext(Zl);return e}function x3(){const{dir:e}=x.useContext(Zl);return e==="rtl"}const J1=x.forwardRef(({as:e,bsPrefix:t,variant:n="primary",size:r,active:o=!1,disabled:i=!1,className:a,...s},c)=>{const u=He(t,"btn"),[d,{tagName:f}]=X1({tagName:e,disabled:i,...s}),p=f;return l.jsx(p,{...d,...s,ref:c,disabled:i,className:ce(a,u,o&&"active",n&&`${u}-${n}`,r&&`${u}-${r}`,s.href&&i&&"disabled")})});J1.displayName="Button";const wr=J1,fi=!!(typeof window<"u"&&window.document&&window.document.createElement);var Td=!1,Rd=!1;try{var Zc={get passive(){return Td=!0},get once(){return Rd=Td=!0}};fi&&(window.addEventListener("test",Zc,Zc),window.removeEventListener("test",Zc,!0))}catch{}function q1(e,t,n,r){if(r&&typeof r!="boolean"&&!Rd){var o=r.once,i=r.capture,a=n;!Rd&&o&&(a=n.__once||function s(c){this.removeEventListener(t,s,i),n.call(this,c)},n.__once=a),e.addEventListener(t,a,Td?r:i)}e.addEventListener(t,n,r)}function Jl(e){return e&&e.ownerDocument||document}function Nd(e,t,n,r){var o=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}var gs;function Km(e){if((!gs&&gs!==0||e)&&fi){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),gs=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return gs}function w3(){return x.useState(null)}function k3(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e},[e]),t}function pn(e){const t=k3(e);return x.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const Xm=e=>!e||typeof e=="function"?e:t=>{e.current=t};function b3(e,t){const n=Xm(e),r=Xm(t);return o=>{n&&n(o),r&&r(o)}}function ql(e,t){return x.useMemo(()=>b3(e,t),[e,t])}function S3(e){const t=x.useRef(e);return t.current=e,t}function ey(e){const t=S3(e);x.useEffect(()=>()=>t.current(),[])}function C3(e){var t=Jl(e);return t&&t.defaultView||window}function E3(e,t){return C3(e).getComputedStyle(e,t)}var j3=/([A-Z])/g;function P3(e){return e.replace(j3,"-$1").toLowerCase()}var T3=/^ms-/;function vs(e){return P3(e).replace(T3,"-ms-")}var R3=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function N3(e){return!!(e&&R3.test(e))}function Yr(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(vs(t))||E3(e).getPropertyValue(vs(t));Object.keys(t).forEach(function(o){var i=t[o];!i&&i!==0?e.style.removeProperty(vs(o)):N3(o)?r+=o+"("+i+") ":n+=vs(o)+": "+i+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}function gl(e,t,n,r){return q1(e,t,n,r),function(){Nd(e,t,n,r)}}function I3(e,t,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}function O3(e){var t=Yr(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function L3(e,t,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||I3(e,"transitionend",!0)},t+n),i=gl(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),i()}}function ty(e,t,n,r){n==null&&(n=O3(e)||0);var o=L3(e,n,r),i=gl(e,"transitionend",t);return function(){o(),i()}}function Jc(e){e===void 0&&(e=Jl());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Qm(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function A3(){const e=x.useRef(!0),t=x.useRef(()=>e.current);return x.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function M3(e){const t=x.useRef(null);return x.useEffect(()=>{t.current=e}),t.current}const D3="data-rr-ui-";function _3(e){return`${D3}${e}`}function F3(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Zm=_3("modal-open");class $3{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return F3(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(Yr(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(Zm,""),Yr(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Zm),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const cp=$3,ny=x.createContext(fi?window:void 0);ny.Provider;function up(){return x.useContext(ny)}const qc=(e,t)=>fi?e==null?(t||Jl()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function z3(e,t){const n=up(),[r,o]=x.useState(()=>qc(e,n==null?void 0:n.document));if(!r){const i=qc(e);i&&o(i)}return x.useEffect(()=>{t&&r&&t(r)},[t,r]),x.useEffect(()=>{const i=qc(e);i!==r&&o(i)},[e,r]),r}const U3=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",B3=typeof document<"u",Jm=B3||U3?x.useLayoutEffect:x.useEffect;function H3({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){const i=x.useRef(null),a=x.useRef(t),s=pn(n);x.useEffect(()=>{t?a.current=!0:s(i.current)},[t,s]);const c=ql(i,e.ref),u=x.cloneElement(e,{ref:c});return t?u:o||!a.current&&r?null:u}function W3({in:e,onTransition:t}){const n=x.useRef(null),r=x.useRef(!0),o=pn(t);return Jm(()=>{if(!n.current)return;let i=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>i}),()=>{i=!0}},[e,o]),Jm(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function Y3({children:e,in:t,onExited:n,onEntered:r,transition:o}){const[i,a]=x.useState(!t);t&&i&&a(!1);const s=W3({in:!!t,onTransition:u=>{const d=()=>{u.isStale()||(u.in?r==null||r(u.element,u.initial):(a(!0),n==null||n(u.element)))};Promise.resolve(o(u)).then(d,f=>{throw u.in||a(!0),f})}}),c=ql(s,e.ref);return i&&!t?null:x.cloneElement(e,{ref:c})}function qm(e,t,n){return e?l.jsx(e,Object.assign({},n)):t?l.jsx(Y3,Object.assign({},n,{transition:t})):l.jsx(H3,Object.assign({},n))}function V3(e){return e.code==="Escape"||e.keyCode===27}const G3=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function K3(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let eu;function X3(e){return eu||(eu=new cp({ownerDocument:e==null?void 0:e.document})),eu}function Q3(e){const t=up(),n=e||X3(t),r=x.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:x.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:x.useCallback(o=>{r.current.backdrop=o},[])})}const ry=x.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:i,children:a,backdrop:s=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,runTransition:p,backdropTransition:w,runBackdropTransition:k,autoFocus:b=!0,enforceFocus:C=!0,restoreFocus:g=!0,restoreFocusOptions:h,renderDialog:v,renderBackdrop:m=ve=>l.jsx("div",Object.assign({},ve)),manager:E,container:T,onShow:j,onHide:O=()=>{},onExit:M,onExited:z,onExiting:Z,onEnter:Se,onEntering:he,onEntered:dt}=e,se=K3(e,G3);const Oe=up(),me=z3(T),N=Q3(E),_=A3(),F=M3(n),[X,V]=x.useState(!n),le=x.useRef(null);x.useImperativeHandle(t,()=>N,[N]),fi&&!F&&n&&(le.current=Jc(Oe==null?void 0:Oe.document)),n&&X&&V(!1);const ue=pn(()=>{if(N.add(),Le.current=gl(document,"keydown",wn),ge.current=gl(document,"focus",()=>setTimeout($e),!0),j&&j(),b){var ve,so;const Pr=Jc((ve=(so=N.dialog)==null?void 0:so.ownerDocument)!=null?ve:Oe==null?void 0:Oe.document);N.dialog&&Pr&&!Qm(N.dialog,Pr)&&(le.current=Pr,N.dialog.focus())}}),Xe=pn(()=>{if(N.remove(),Le.current==null||Le.current(),ge.current==null||ge.current(),g){var ve;(ve=le.current)==null||ve.focus==null||ve.focus(h),le.current=null}});x.useEffect(()=>{!n||!me||ue()},[n,me,ue]),x.useEffect(()=>{X&&Xe()},[X,Xe]),ey(()=>{Xe()});const $e=pn(()=>{if(!C||!_()||!N.isTopModal())return;const ve=Jc(Oe==null?void 0:Oe.document);N.dialog&&ve&&!Qm(N.dialog,ve)&&N.dialog.focus()}),Qe=pn(ve=>{ve.target===ve.currentTarget&&(u==null||u(ve),s===!0&&O())}),wn=pn(ve=>{c&&V3(ve)&&N.isTopModal()&&(d==null||d(ve),ve.defaultPrevented||O())}),ge=x.useRef(),Le=x.useRef(),Hn=(...ve)=>{V(!0),z==null||z(...ve)};if(!me)return null;const ao=Object.assign({role:r,ref:N.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},se,{style:i,className:o,tabIndex:-1});let Et=v?v(ao):l.jsx("div",Object.assign({},ao,{children:x.cloneElement(a,{role:"document"})}));Et=qm(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:M,onExiting:Z,onExited:Hn,onEnter:Se,onEntering:he,onEntered:dt,children:Et});let kn=null;return s&&(kn=m({ref:N.setBackdropRef,onClick:Qe}),kn=qm(w,k,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:kn})),l.jsx(l.Fragment,{children:_r.createPortal(l.jsxs(l.Fragment,{children:[kn,Et]}),me)})});ry.displayName="Modal";const Z3=Object.assign(ry,{Manager:cp});function J3(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function q3(e,t){e.classList?e.classList.add(t):J3(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}var ej=Function.prototype.bind.call(Function.prototype.call,[].slice);function po(e,t){return ej(e.querySelectorAll(t))}function eg(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function tj(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=eg(e.className,t):e.setAttribute("class",eg(e.className&&e.className.baseVal||"",t))}const ho={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class nj extends cp{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,Yr(n,{[t]:`${parseFloat(Yr(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],Yr(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(q3(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";po(n,ho.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,t.scrollBarWidth)),po(n,ho.STICKY_CONTENT).forEach(i=>this.adjustAndStore(o,i,-t.scrollBarWidth)),po(n,ho.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(o,i,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();tj(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";po(n,ho.FIXED_CONTENT).forEach(i=>this.restore(r,i)),po(n,ho.STICKY_CONTENT).forEach(i=>this.restore(o,i)),po(n,ho.NAVBAR_TOGGLER).forEach(i=>this.restore(o,i))}}let tu;function rj(e){return tu||(tu=new nj(e)),tu}function oj(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Id(e,t){return Id=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Id(e,t)}function ij(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Id(e,t)}const tg={disabled:!1},oy=_e.createContext(null);var aj=function(t){return t.scrollTop},Di="unmounted",Or="exited",Jn="entering",Lr="entered",Od="exiting",Bn=function(e){ij(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,c;return i.appearStatus=null,r.in?s?(c=Or,i.appearStatus=Jn):c=Lr:r.unmountOnExit||r.mountOnEnter?c=Di:c=Or,i.state={status:c},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===Di?{status:Or}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==Jn&&a!==Lr&&(i=Jn):(a===Jn||a===Lr)&&(i=Od)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Jn){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:_r.findDOMNode(this);a&&aj(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Or&&this.setState({status:Di})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,c=this.props.nodeRef?[s]:[_r.findDOMNode(this),s],u=c[0],d=c[1],f=this.getTimeouts(),p=s?f.appear:f.enter;if(!o&&!a||tg.disabled){this.safeSetState({status:Lr},function(){i.props.onEntered(u)});return}this.props.onEnter(u,d),this.safeSetState({status:Jn},function(){i.props.onEntering(u,d),i.onTransitionEnd(p,function(){i.safeSetState({status:Lr},function(){i.props.onEntered(u,d)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:_r.findDOMNode(this);if(!i||tg.disabled){this.safeSetState({status:Or},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Od},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:Or},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:_r.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=c[0],d=c[1];this.props.addEndListener(u,d)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Di)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=oj(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return _e.createElement(oy.Provider,{value:null},typeof a=="function"?a(o,s):_e.cloneElement(_e.Children.only(a),s))},t}(_e.Component);Bn.contextType=oy;Bn.propTypes={};function mo(){}Bn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:mo,onEntering:mo,onEntered:mo,onExit:mo,onExiting:mo,onExited:mo};Bn.UNMOUNTED=Di;Bn.EXITED=Or;Bn.ENTERING=Jn;Bn.ENTERED=Lr;Bn.EXITING=Od;const sj=Bn;function ng(e,t){const n=Yr(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function lj(e,t){const n=ng(e,"transitionDuration"),r=ng(e,"transitionDelay"),o=ty(e,i=>{i.target===e&&(o(),t(i))},n+r)}function cj(e){e.offsetHeight}function uj(e){return e&&"setState"in e?_r.findDOMNode(e):e??null}const dj=_e.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:i,addEndListener:a,children:s,childRef:c,...u},d)=>{const f=x.useRef(null),p=ql(f,c),w=T=>{p(uj(T))},k=T=>j=>{T&&f.current&&T(f.current,j)},b=x.useCallback(k(e),[e]),C=x.useCallback(k(t),[t]),g=x.useCallback(k(n),[n]),h=x.useCallback(k(r),[r]),v=x.useCallback(k(o),[o]),m=x.useCallback(k(i),[i]),E=x.useCallback(k(a),[a]);return l.jsx(sj,{ref:d,...u,onEnter:b,onEntered:g,onEntering:C,onExit:h,onExited:m,onExiting:v,addEndListener:E,nodeRef:f,children:typeof s=="function"?(T,j)=>s(T,{...j,ref:w}):_e.cloneElement(s,{ref:w})})}),fj=dj,pj={[Jn]:"show",[Lr]:"show"},iy=x.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},i)=>{const a={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},s=x.useCallback((c,u)=>{cj(c),r==null||r(c,u)},[r]);return l.jsx(fj,{ref:i,addEndListener:lj,...a,onEnter:s,childRef:t.ref,children:(c,u)=>x.cloneElement(t,{...u,className:ce("fade",e,t.props.className,pj[c],n[c])})})});iy.displayName="Fade";const ay=iy,sy=x.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=He(t,"modal-body"),l.jsx(n,{ref:o,className:ce(e,t),...r})));sy.displayName="ModalBody";const hj=sy,mj=x.createContext({onHide(){}}),ly=mj,cy=x.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:r,size:o,fullscreen:i,children:a,scrollable:s,...c},u)=>{e=He(e,"modal");const d=`${e}-dialog`,f=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return l.jsx("div",{...c,ref:u,className:ce(d,t,o&&`${e}-${o}`,r&&`${d}-centered`,s&&`${d}-scrollable`,i&&f),children:l.jsx("div",{className:ce(`${e}-content`,n),children:a})})});cy.displayName="ModalDialog";const uy=cy,dy=x.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=He(t,"modal-footer"),l.jsx(n,{ref:o,className:ce(e,t),...r})));dy.displayName="ModalFooter";const gj=dy,vj={"aria-label":H.string,onClick:H.func,variant:H.oneOf(["white"])},dp=x.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},o)=>l.jsx("button",{ref:o,type:"button",className:ce("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));dp.displayName="CloseButton";dp.propTypes=vj;const yj=dp,xj=x.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...i},a)=>{const s=x.useContext(ly),c=pn(()=>{s==null||s.onHide(),r==null||r()});return l.jsxs("div",{ref:a,...i,children:[o,n&&l.jsx(yj,{"aria-label":e,variant:t,onClick:c})]})}),wj=xj,fy=x.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},i)=>(e=He(e,"modal-header"),l.jsx(wj,{ref:i,...o,className:ce(t,e),closeLabel:n,closeButton:r})));fy.displayName="ModalHeader";const kj=fy,bj=e=>x.forwardRef((t,n)=>l.jsx("div",{...t,ref:n,className:ce(t.className,e)})),Sj=bj("h4"),py=x.forwardRef(({className:e,bsPrefix:t,as:n=Sj,...r},o)=>(t=He(t,"modal-title"),l.jsx(n,{ref:o,className:ce(e,t),...r})));py.displayName="ModalTitle";const Cj=py;function Ej(e){return l.jsx(ay,{...e,timeout:null})}function jj(e){return l.jsx(ay,{...e,timeout:null})}const hy=x.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:o,children:i,dialogAs:a=uy,"aria-labelledby":s,"aria-describedby":c,"aria-label":u,show:d=!1,animation:f=!0,backdrop:p=!0,keyboard:w=!0,onEscapeKeyDown:k,onShow:b,onHide:C,container:g,autoFocus:h=!0,enforceFocus:v=!0,restoreFocus:m=!0,restoreFocusOptions:E,onEntered:T,onExit:j,onExiting:O,onEnter:M,onEntering:z,onExited:Z,backdropClassName:Se,manager:he,...dt},se)=>{const[Oe,me]=x.useState({}),[N,_]=x.useState(!1),F=x.useRef(!1),X=x.useRef(!1),V=x.useRef(null),[le,ue]=w3(),Xe=ql(se,ue),$e=pn(C),Qe=x3();e=He(e,"modal");const wn=x.useMemo(()=>({onHide:$e}),[$e]);function ge(){return he||rj({isRTL:Qe})}function Le(ee){if(!fi)return;const Yn=ge().getScrollbarWidth()>0,Gt=ee.scrollHeight>Jl(ee).documentElement.clientHeight;me({paddingRight:Yn&&!Gt?Km():void 0,paddingLeft:!Yn&&Gt?Km():void 0})}const Hn=pn(()=>{le&&Le(le.dialog)});ey(()=>{Nd(window,"resize",Hn),V.current==null||V.current()});const ao=()=>{F.current=!0},Et=ee=>{F.current&&le&&ee.target===le.dialog&&(X.current=!0),F.current=!1},kn=()=>{_(!0),V.current=ty(le.dialog,()=>{_(!1)})},ve=ee=>{ee.target===ee.currentTarget&&kn()},so=ee=>{if(p==="static"){ve(ee);return}if(X.current||ee.target!==ee.currentTarget){X.current=!1;return}C==null||C()},Pr=ee=>{w?k==null||k(ee):(ee.preventDefault(),p==="static"&&kn())},ic=(ee,Yn)=>{ee&&Le(ee),M==null||M(ee,Yn)},Tr=ee=>{V.current==null||V.current(),j==null||j(ee)},Fa=(ee,Yn)=>{z==null||z(ee,Yn),q1(window,"resize",Hn)},pi=ee=>{ee&&(ee.style.display=""),Z==null||Z(ee),Nd(window,"resize",Hn)},sn=x.useCallback(ee=>l.jsx("div",{...ee,className:ce(`${e}-backdrop`,Se,!f&&"show")}),[f,Se,e]),Wn={...n,...Oe};Wn.display="block";const $a=ee=>l.jsx("div",{role:"dialog",...ee,style:Wn,className:ce(t,e,N&&`${e}-static`,!f&&"show"),onClick:p?so:void 0,onMouseUp:Et,"aria-label":u,"aria-labelledby":s,"aria-describedby":c,children:l.jsx(a,{...dt,onMouseDown:ao,className:r,contentClassName:o,children:i})});return l.jsx(ly.Provider,{value:wn,children:l.jsx(Z3,{show:d,ref:Xe,backdrop:p,container:g,keyboard:!0,autoFocus:h,enforceFocus:v,restoreFocus:m,restoreFocusOptions:E,onEscapeKeyDown:Pr,onShow:b,onHide:C,onEnter:ic,onEntering:Fa,onEntered:T,onExit:Tr,onExiting:O,onExited:pi,manager:ge(),transition:f?Ej:void 0,backdropTransition:f?jj:void 0,renderBackdrop:sn,renderDialog:$a})})});hy.displayName="Modal";const Rn=Object.assign(hy,{Body:hj,Header:kj,Title:Cj,Footer:gj,Dialog:uy,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Pj={type:H.string,tooltip:H.bool,as:H.elementType},fp=x.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:r=!1,...o},i)=>l.jsx(e,{...o,ref:i,className:ce(t,`${n}-${r?"tooltip":"feedback"}`)}));fp.displayName="Feedback";fp.propTypes=Pj;const my=fp,Tj=x.createContext({}),_n=Tj,gy=x.forwardRef(({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:o=!1,isInvalid:i=!1,as:a="input",...s},c)=>{const{controlId:u}=x.useContext(_n);return t=He(t,"form-check-input"),l.jsx(a,{...s,ref:c,type:r,id:e||u,className:ce(n,t,o&&"is-valid",i&&"is-invalid")})});gy.displayName="FormCheckInput";const vy=gy,yy=x.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...r},o)=>{const{controlId:i}=x.useContext(_n);return e=He(e,"form-check-label"),l.jsx("label",{...r,ref:o,htmlFor:n||i,className:ce(t,e)})});yy.displayName="FormCheckLabel";const Ld=yy;function Rj(e,t){return x.Children.toArray(e).some(n=>x.isValidElement(n)&&n.type===t)}const xy=x.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:o=!1,disabled:i=!1,isValid:a=!1,isInvalid:s=!1,feedbackTooltip:c=!1,feedback:u,feedbackType:d,className:f,style:p,title:w="",type:k="checkbox",label:b,children:C,as:g="input",...h},v)=>{t=He(t,"form-check"),n=He(n,"form-switch");const{controlId:m}=x.useContext(_n),E=x.useMemo(()=>({controlId:e||m}),[m,e]),T=!C&&b!=null&&b!==!1||Rj(C,Ld),j=l.jsx(vy,{...h,type:k==="switch"?"checkbox":k,ref:v,isValid:a,isInvalid:s,disabled:i,as:g});return l.jsx(_n.Provider,{value:E,children:l.jsx("div",{style:p,className:ce(f,T&&t,r&&`${t}-inline`,o&&`${t}-reverse`,k==="switch"&&n),children:C||l.jsxs(l.Fragment,{children:[j,T&&l.jsx(Ld,{title:w,children:b}),u&&l.jsx(my,{type:d,tooltip:c,children:u})]})})})});xy.displayName="FormCheck";const vl=Object.assign(xy,{Input:vy,Label:Ld}),wy=x.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:r,id:o,className:i,isValid:a=!1,isInvalid:s=!1,plaintext:c,readOnly:u,as:d="input",...f},p)=>{const{controlId:w}=x.useContext(_n);return e=He(e,"form-control"),l.jsx(d,{...f,type:t,size:r,ref:p,readOnly:u,id:o||w,className:ce(i,c?`${e}-plaintext`:e,n&&`${e}-${n}`,t==="color"&&`${e}-color`,a&&"is-valid",s&&"is-invalid")})});wy.displayName="FormControl";const Nj=Object.assign(wy,{Feedback:my}),ky=x.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=He(t,"form-floating"),l.jsx(n,{ref:o,className:ce(e,t),...r})));ky.displayName="FormFloating";const Ij=ky,by=x.forwardRef(({controlId:e,as:t="div",...n},r)=>{const o=x.useMemo(()=>({controlId:e}),[e]);return l.jsx(_n.Provider,{value:o,children:l.jsx(t,{...n,ref:r})})});by.displayName="FormGroup";const Sy=by;function Oj({as:e,bsPrefix:t,className:n,...r}){t=He(t,"col");const o=Q1(),i=Z1(),a=[],s=[];return o.forEach(c=>{const u=r[c];delete r[c];let d,f,p;typeof u=="object"&&u!=null?{span:d,offset:f,order:p}=u:d=u;const w=c!==i?`-${c}`:"";d&&a.push(d===!0?`${t}${w}`:`${t}${w}-${d}`),p!=null&&s.push(`order${w}-${p}`),f!=null&&s.push(`offset${w}-${f}`)}),[{...r,className:ce(n,...a,...s)},{as:e,bsPrefix:t,spans:a}]}const Cy=x.forwardRef((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:i,spans:a}]=Oj(e);return l.jsx(o,{...r,ref:t,className:ce(n,!a.length&&i)})});Cy.displayName="Col";const wt=Cy,Ey=x.forwardRef(({as:e="label",bsPrefix:t,column:n=!1,visuallyHidden:r=!1,className:o,htmlFor:i,...a},s)=>{const{controlId:c}=x.useContext(_n);t=He(t,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const d=ce(o,t,r&&"visually-hidden",n&&u);return i=i||c,n?l.jsx(wt,{ref:s,as:"label",className:d,htmlFor:i,...a}):l.jsx(e,{ref:s,className:d,htmlFor:i,...a})});Ey.displayName="FormLabel";const Lj=Ey,jy=x.forwardRef(({bsPrefix:e,className:t,id:n,...r},o)=>{const{controlId:i}=x.useContext(_n);return e=He(e,"form-range"),l.jsx("input",{...r,type:"range",ref:o,className:ce(t,e),id:n||i})});jy.displayName="FormRange";const Aj=jy,Py=x.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:r,isValid:o=!1,isInvalid:i=!1,id:a,...s},c)=>{const{controlId:u}=x.useContext(_n);return e=He(e,"form-select"),l.jsx("select",{...s,size:n,ref:c,className:ce(r,e,t&&`${e}-${t}`,o&&"is-valid",i&&"is-invalid"),id:a||u})});Py.displayName="FormSelect";const Mj=Py,Ty=x.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:r,...o},i)=>(e=He(e,"form-text"),l.jsx(n,{...o,ref:i,className:ce(t,e,r&&"text-muted")})));Ty.displayName="FormText";const Dj=Ty,Ry=x.forwardRef((e,t)=>l.jsx(vl,{...e,ref:t,type:"switch"}));Ry.displayName="Switch";const _j=Object.assign(Ry,{Input:vl.Input,Label:vl.Label}),Ny=x.forwardRef(({bsPrefix:e,className:t,children:n,controlId:r,label:o,...i},a)=>(e=He(e,"form-floating"),l.jsxs(Sy,{ref:a,className:ce(t,e),controlId:r,...i,children:[n,l.jsx("label",{htmlFor:r,children:o})]})));Ny.displayName="FloatingLabel";const Fj=Ny,$j={_ref:H.any,validated:H.bool,as:H.elementType},pp=x.forwardRef(({className:e,validated:t,as:n="form",...r},o)=>l.jsx(n,{...r,ref:o,className:ce(e,t&&"was-validated")}));pp.displayName="Form";pp.propTypes=$j;const oe=Object.assign(pp,{Group:Sy,Control:Nj,Floating:Ij,Check:vl,Switch:_j,Label:Lj,Text:Dj,Range:Aj,Select:Mj,FloatingLabel:Fj}),Iy=x.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const i=He(e,"row"),a=Q1(),s=Z1(),c=`${i}-cols`,u=[];return a.forEach(d=>{const f=r[d];delete r[d];let p;f!=null&&typeof f=="object"?{cols:p}=f:p=f;const w=d!==s?`-${d}`:"";p!=null&&u.push(`${c}${w}-${p}`)}),l.jsx(n,{ref:o,...r,className:ce(t,i,...u)})});Iy.displayName="Row";const pr=Iy;y(Fe)`

`;y.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 30%;
    left: 40%;
    height: 12px;
    width: 12px;
`;const zj=y(Rn)`
    .modal-content {
        background-color: var(--light-black);
        color: var(--white);
        border-bottom: 20px var(--blue);
    }
`,Uj=y(Rn.Header)`
    .close {
        color: #ff0000 !important;
    }
`;y.form`
    background-color: var(--blue);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
    color: var(--white);
    width: 70%;
    
`;const rg=y.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid var(--grey);
    border-radius: 5px;
    align-items: center;
    color: var(--white);
    background-color: var(--black);
`;y(Fe)`
    font-size: 17px;
    color: var(--white);
`;function Bj({showForm:e,closeForm:t,onPostSuccess:n}){const[r,o]=x.useState({post_title:"",post_topic:"",post_desc:""}),[i,a]=x.useState(""),[s,c]=x.useState(""),[u,d]=x.useState(""),[f,p]=x.useState(!1),w="Please enter a title, topic, and description before posting!",k=h=>{const{name:v,value:m}=h.target;o({...r,[v]:m})},b=()=>{const{post_title:h,post_topic:v,post_desc:m}=r;if(h.trim()==""||v.trim()==""||m.trim()==""){p(!0);return}bS(h,v,m,"1 second ago"),localStorage.setItem("savedTitle",""),localStorage.setItem("savedDesc",""),localStorage.setItem("savedTopic","Web Development"),p(!1),t(),n()},C=()=>{const{post_title:h,post_topic:v,post_desc:m}=r;localStorage.setItem("savedTitle",h),localStorage.setItem("savedTopic",v),localStorage.setItem("savedDesc",m),alert("Saved draft for later! Come back to this screen when you're ready to continue")},g=()=>{const h=localStorage.getItem("savedTitle");h!=""&&(a(h),o(E=>({...E,post_title:h})));const v=localStorage.getItem("savedTopic");v!=""&&(c(v),o(E=>({...E,post_topic:v})));const m=localStorage.getItem("savedDesc");m!=""&&(d(m),o(E=>({...E,post_desc:m})))};return x.useEffect(()=>{g()},[]),l.jsxs(zj,{centered:!0,size:"lg",show:e,animation:!0,scrollable:!0,children:[l.jsxs(Uj,{children:[l.jsx(Rn.Title,{children:"Create a New Post"}),l.jsx("button",{type:"button",className:"btn-close btn-close-white","aria-label":"Close",onClick:t})]}),l.jsxs(oe,{children:[l.jsxs(Rn.Body,{children:[l.jsxs(pr,{children:[l.jsx(wt,{xs:8,children:l.jsxs(oe.Group,{className:"mb-3",controlId:"postForm.title",children:[l.jsx(oe.Label,{children:"Title"}),l.jsx("br",{}),l.jsx(rg,{as:"textarea",rows:1,id:"post_title",name:"post_title",value:r.post_title,defaultValue:i,onChange:k})]})}),l.jsx(wt,{xs:4,children:l.jsxs(oe.Group,{className:"mb-3",controlId:"postForm.topic",children:[l.jsx(oe.Label,{children:"Topic"}),l.jsx(oe.Select,{id:"post_topic",name:"post_topic",value:r.post_topic,defaultValue:s,onChange:k,children:ut.map((h,v)=>l.jsx("option",{value:h.getName(),children:h.getName()},v))})]})})]}),l.jsxs(oe.Group,{className:"mb-3",controlId:"postForm.desc",children:[l.jsx(oe.Label,{children:"Description"}),l.jsx(rg,{as:"textarea",rows:5,id:"post_desc",name:"post_desc",value:r.post_desc,defaultValue:u,onChange:k})]})]}),l.jsxs(Rn.Footer,{children:[l.jsxs(pr,{children:[l.jsx(wt,{xs:6,children:l.jsx("input",{className:"form-control form-control",id:"formFile",type:"file"})}),l.jsx(wt,{xs:4,children:l.jsx(wr,{variant:"secondary",onClick:C,children:"Save Form for Later"})}),l.jsx(wt,{xs:2,children:l.jsx(wr,{variant:"primary",onClick:b,children:"Post"})})]}),f&&l.jsx("div",{style:{color:"red"},children:w})]})]})]})}function xn({onPost:e}){const[t,n]=x.useState(!1),r=localStorage.getItem("userDatabaseKey");let o="/CodeConnect/profile/PixelPioneer";if(r>=100){const c=et[r].username;o="/CodeConnect/profile/".concat(c)}const i=()=>{n(!0)},a=()=>{n(!1)};return l.jsx(i3,{children:l.jsxs(a3,{children:[l.jsx(Ti,{to:"/CodeConnect/home",children:l.jsxs(s3,{children:[l.jsx(l3,{children:"Code"}),l.jsx(c3,{children:"Connect"})]})}),l.jsxs(u3,{children:[l.jsxs(Ti,{to:"/CodeConnect/home",children:[l.jsx(ms,{icon:V1}),l.jsx("span",{children:"Home"})]}),l.jsxs(Ti,{to:"/CodeConnect/explore",children:[l.jsx(ms,{icon:G1}),l.jsx("span",{children:"Explore"})]}),l.jsxs(Ti,{to:"/CodeConnect/direct-messages",children:[l.jsx(ms,{icon:t3}),l.jsx("span",{children:"Messages"})]}),l.jsxs(Ti,{to:o,children:[l.jsx(ms,{icon:qE}),l.jsx("span",{children:"Profile"})]}),l.jsx(d3,{onClick:i,children:"Post"}),t&&l.jsx(Bj,{showForm:t,closeForm:a,onPostSuccess:e})]})]})})}const Hj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`,Wj=y.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`,Yj=y(vt)`
    font-size: 35px;
    font-weight: 600;
    text-decoration: none;
`,Vj=y.div`
    color: var(--white);
`,Gj=y.div`
    color: var(--blue);
    padding-left: 25px;
`,Kj=y.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    font-size: 26px;
    
    div {
        height: 50px;
    }

    & a.active {
        color: var(--white);
    }
`,og=y(Fe)`
    font-size: 22px;
`,ig=y(Mf)`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--grey);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    
    &:hover {
        color: var(--white);
    }
`;y(Mf)`
    display: flex;
    align-items: center;
    gap: 15px;
    color
`;const Xj=y.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    width: 150px;
    height: 50px;
    color: var(--white);
    font-size: 16px;
    transition: 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        transform: translateY(-3px);
    }
`,Qj=y.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,Zj=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,Jj=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,qj=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,Oy=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,Ly=y.div`
  background: var(--black);
  width: 400px;
  height: 250px; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`,Ay=y.label`
    //margin-right: 21vw;
    font-size: 20px;
    color: black;
    text-align: center;
    color: white;
`,My=y.div`
  position: fixed;
  background-color: var(--blue); 
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`,Dy=y.div`
  background-color: var(--light-black); 
  color: white;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
`;function ec(){const[e,t]=x.useState(!1),n=We(),r=()=>{n("/CodeConnect/create-account")},o=()=>{t(!1)};return l.jsxs(Hj,{children:[l.jsxs(Wj,{children:[l.jsxs(Yj,{to:"/CodeConnect/home",children:[l.jsx(Vj,{children:"Code"}),l.jsx(Gj,{children:"Connect"})]}),l.jsxs(Kj,{children:[l.jsxs(ig,{to:"/CodeConnect/guest-home",children:[l.jsx(og,{icon:V1}),l.jsx("span",{children:"Home"})]}),l.jsxs(ig,{to:"/CodeConnect/guest-explore",children:[l.jsx(og,{icon:G1}),l.jsx("span",{children:"Explore"})]}),l.jsx(Xj,{onClick:r,children:"Create Account"})]})]}),e&&l.jsx(Oy,{children:l.jsxs(Ly,{children:[l.jsx(Ay,{children:"Please create an account to access this feature "}),l.jsx("div",{}),l.jsx("div",{}),l.jsx(My,{children:"Create Account"}),l.jsx(Dy,{onClick:o,children:"Close"})]})})]})}const _y=y.div`
    display: flex;
    justify-content: center;
    width: clamp(500px, 100%, 1000px);
    display: flex;
    gap: 20px;
    align-items: center;
`,e5=y.input`
    width: 100%;
    height: 70px;
    border-radius: 50px; 
    border: 0px;
    outline: none;
    font-size: 20px;
    padding: 0 30px;
    background-color: var(--light-black);
    color: var(--white);
    box-shadow: 0 5px 10px var(--shadow);
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateY(-3px);
    }

    &::placeholder {
        color: var(--grey);
    }
`;y(Fe)`
    color: var(--white);
`;y.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0px;
    background-color: var(--blue);
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(3px);
    }
`;y(Fe)`
    font-size: 17px;
    color: var(--white);
`;function hp({data:e}){const[t,n]=x.useState(""),r=We(),o=()=>{const a=e.filter(s=>s.title.toLowerCase().includes(t.toLowerCase()));r(`/CodeConnect/explore-results/${t}`,{state:{results:a,searchTerm:t}})},i=a=>{a.key==="Enter"&&o()};return l.jsx(_y,{children:l.jsx(e5,{input:"text",placeholder:"Search",value:t,onChange:a=>n(a.target.value),onKeyDown:i})})}hp.propTypes={data:H.object};const Fy=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
    /* width: clamp(500px, 90%, 900px); */
    width: 80vw;
    background-color: var(--black);
`,t5=y.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    /* padding: 5vh 0; */
    width: clamp(500px, 90% 900px);
    height: 80%;
`;y.div`
    width: 88%;
    display: flex;
    justify-content: flex-end;
`;const n5=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 80%;
`,ag=y.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
`;y.div`
    display: flex;
    gap: 10px;
    
    div {
        color: var(--grey);
    }
`;y.input`

`;const r5=y(Fe)`

`,o5=y.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;
`,i5=y.div`
    display: flex;
    margin: 0 auto;
    overflow-x: auto;
    width: 950px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
`,nu=y.div`
    width: 100%;
    position: relative;
    text-align: center;
    color: var(--white);
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`,ru=y.img`
    flex: 3;
    max-width: 950px;
    scroll-snap-align: start;
    filter: brightness(50%);
    border-radius: 10px;
`,ou=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 600;
    width: 100%;
    height: 100%;
`,a5=y.div`
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    a {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--white);
        opacity: 0.75;
        transition: opacity ease 250ms;

        &:hover {
            opacity: 100%;
        }
    }
`,s5=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 950px;
    margin: 0 auto;
    padding-bottom: 10%;
`,yl=y.div`
    font-size: 40px;
    font-weight: 500;
    color: var(--white);
`,l5=y.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 30px;
    padding: 0 15px;
    background-color: var(--blue-low);
    color: var(--light-blue);
    font-size: 14px;
    box-shadow: 0 7px 10px var(--shadow);
    text-decoration: none;
    border: none;
    transition: 0.3s ease-in-out;

    &:hover {
        color: white;
        transform: translateY(-2px);
    }
`;function $y({topicName:e,isGuestView:t}){const n=We(),r=()=>{let o=[];ut.forEach(i=>{i.name===e&&i.posts.forEach(a=>{o.push(a)})}),n(`/CodeConnect/explore-results/${e}`,{state:{results:o,searchTerm:e,isGuestView:t}})};return l.jsx(l5,{onClick:r,children:e})}$y.propTypes={topicName:H.string};const c5="/CodeConnect/assets/web-dev-0661792e.png",u5="/CodeConnect/assets/game-dev-bd8da6b7.png",d5="/CodeConnect/assets/programming-d8860b21.png";console.log({postDatabase:te});function sg({isGuestView:e}){x.useState("Recent"),x.useState("");const t=We(),n=r=>{let o=[];ut.forEach(i=>{i.name===r&&i.posts.forEach(a=>{o.push(a)})}),t(`/CodeConnect/explore-results/${r}`,{state:{results:o,searchTerm:r,isGuestView:e}})};return l.jsxs(Lt,{children:[e?l.jsx(ec,{}):l.jsx(xn,{}),l.jsx(Fy,{children:l.jsxs(t5,{children:[l.jsx(hp,{data:te}),l.jsxs(n5,{children:[l.jsx(ag,{children:l.jsx(yl,{children:l.jsxs("div",{children:[l.jsx(r5,{icon:e3})," Trending"]})})}),l.jsx(o5,{children:l.jsxs(i5,{children:[l.jsxs(nu,{id:"slide-1",children:[l.jsx(ru,{src:d5}),l.jsx(ou,{onClick:()=>n("Python"),children:"Python"})]}),l.jsxs(nu,{id:"slide-2",children:[l.jsx(ru,{src:u5}),l.jsx(ou,{onClick:()=>n("Game Development"),children:"Game Development"})]}),l.jsxs(nu,{id:"slide-3",children:[l.jsx(ru,{src:c5}),l.jsx(ou,{onClick:()=>n("React"),children:"React"})]}),l.jsxs(a5,{children:[l.jsx("a",{href:"#slide-1"}),l.jsx("a",{href:"#slide-2"}),l.jsx("a",{href:"#slide-3"})]})]})}),l.jsx(ag,{children:l.jsx(yl,{children:"Topics"})}),l.jsx(s5,{children:ut.map((r,o)=>l.jsx($y,{topicName:r.name,isGuestView:e},o))})]})]})})]})}const f5=y.p`
color: #FFF;
background-color: var(--black);
font-size: 60px;
font-style: normal;
font-weight: 300;
line-height: normal;
`,p5=({children:e})=>l.jsx(f5,{children:e}),h5=y.p`
color: #8F8F8F;
background-color: var(--black);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`,m5=({children:e})=>l.jsx(h5,{children:e}),g5=y.p`
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: underline;
background: var(--black)
`,v5=({children:e})=>l.jsx(g5,{children:e}),y5=y.div`
    display: flex;
    width: 287px;
    padding: 4px 8px;
    align-items: center;
    gap: 20px;
`,x5=e=>l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:25,height:24,fill:"none",...e,children:[l.jsx("g",{clipPath:"url(#a)",children:l.jsx("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.5 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75A5.07 5.07 0 0 0 20.41 1S19.23.65 16.5 2.48a13.38 13.38 0 0 0-7 0C6.77.65 5.59 1 5.59 1a5.07 5.07 0 0 0-.09 3.77A5.44 5.44 0 0 0 4 8.55c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"})}),l.jsx("defs",{children:l.jsx("clipPath",{id:"a",children:l.jsx("path",{fill:"#fff",d:"M.5 0h24v24H.5z"})})})]}),w5=e=>l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:25,height:24,fill:"none",...e,children:[l.jsx("g",{clipPath:"url(#a)",children:l.jsx("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M23.5 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3.5 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.279-.028-.556-.08-.83A7.72 7.72 0 0 0 23.5 3Z"})}),l.jsx("defs",{children:l.jsx("clipPath",{id:"a",children:l.jsx("path",{fill:"#fff",d:"M.5 0h24v24H.5z"})})})]});function k5({network:e,username:t}){const n=()=>{switch(e){case"twitter":return l.jsx(w5,{});case"github":return l.jsx(x5,{})}};return l.jsxs(y5,{children:[n(),l.jsx(v5,{children:t})]})}const b5=y.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`;function S5({username:e,biography:t,socialLinks:n}){return l.jsxs(b5,{children:[l.jsx(p5,{children:e}),l.jsx(m5,{children:t}),n.map((r,o)=>l.jsx(k5,{network:r.getSocialMedia(),username:r.getUsername()},o))]})}const C5=y.img`
  width:200px;
  height:200px;
  align-self: stretch;
  object-fit: cover;
  border-radius: 300px;
`;function E5({imageUrl:e}){return l.jsx(C5,{src:e,alt:"Profile"})}const j5=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;function P5({user:e}){return l.jsxs(j5,{children:[l.jsx(E5,{imageUrl:e.getProfilePicture()}),l.jsx(S5,{username:e.getUsername(),biography:e.getBiography(),socialLinks:e.getSocialMedia()})]})}const T5=y.div`
    display: flex;
    padding: 6px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 4px;
    background: #558FFF;
`,R5=y.p`
color: #FFF;
font-size: 14px;
font-style: normal;
background: #558FFF;
font-weight: 400;
line-height: normal;
`;function N5({role:e}){return l.jsx(T5,{children:l.jsx(R5,{children:e})})}const I5=y.div`
    display: flex;
    padding: 10px 10px 10px 0px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`,O5=y.div`
    display: flex;
    padding: 4px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: #314B7E;
`,L5=y.p`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #8CAFF4;
    align-self: stretch;
    background: #314B7E;
`;function A5({topicName:e}){return l.jsx(O5,{children:l.jsx(L5,{children:e})})}function M5({interests:e}){return l.jsx(I5,{children:e.map((t,n)=>l.jsx(A5,{topicName:t},n))})}const D5=y.div`
    display: flex;
    padding: 10px 4px;;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`,zy=y.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #3a3d4b;
`,Uy=y.div`
    display: flex;
    padding: 4px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 4px;
    background: #558FFF;
`,_5=y.div`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1.5px solid #35383E;
    background: #252527;
`,F5=e=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...e,children:l.jsx("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM12.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM3.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"})});function $5(){const e={backgroundColor:"#3A3D4B",borderRadius:"8px",border:"1.5px solid #45484F"};return l.jsx(Uy,{style:e,children:l.jsx(zy,{children:"Settings"})})}function z5(){const e={backgroundColor:"#558FFF",borderRadius:"8px"},t={backgroundColor:"#558FFF"},n=We(),r=()=>{n("/CodeConnect/dm-boo")};return l.jsx(Uy,{onClick:r,style:e,children:l.jsx(zy,{style:t,children:"Message"})})}function U5({loggedInUser:e}){const t=()=>{switch(e){case!0:return l.jsx($5,{});case!1:return l.jsx(z5,{})}};return l.jsxs(D5,{children:[t(),e?null:l.jsxs(_5,{children:[" ",l.jsx(F5,{})," "]})]})}const B5=y.div`
    display: flex;
    padding: 35px 22px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    
`;function H5({user:e}){return l.jsxs(B5,{children:[l.jsx(N5,{role:e.role}),l.jsx(M5,{interests:e.interests}),l.jsx(U5,{loggedInUser:e.username==="PixelPioneer"})]})}const W5=y.div`
    display: flex;
    padding: 32px 32px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    align-self: stretch;
    background-color: var(--black);
`;function Y5({user:e}){return l.jsxs(W5,{children:[l.jsx(P5,{user:e}),l.jsx(H5,{user:e})]})}const V5=y.div`
    width: 150px;
    align-self: stretch;
    background: #2B2D37;
`;function lg(){return l.jsx(V5,{})}const G5=y.div`  
    display: flex;
    padding: 32px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`,K5=y.p`
    align-self: stretch;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: var(--black);
`,X5=e=>l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:182,height:127,fill:"none",...e,children:[l.jsx("g",{clipPath:"url(#a)",children:l.jsx("path",{fill:"#fff",d:"M52.183 106.583a9.038 9.038 0 0 1-6.018-2.284L.288 63.517l48.427-43.05a9.066 9.066 0 0 1 12.042 13.555L27.584 63.517l30.628 27.217a9.072 9.072 0 0 1-6.018 15.85l-.011-.001Zm81.1-.017 48.427-43.05-45.876-40.782a9.065 9.065 0 0 0-12.038 13.554l30.628 27.228L121.248 93a9.065 9.065 0 0 0-.723 12.763 9.067 9.067 0 0 0 12.759.803h-.001Zm-42.408 12.846 18.133-108.8a9.061 9.061 0 0 0-14.218-8.91 9.063 9.063 0 0 0-3.66 5.924l-18.134 108.8a9.065 9.065 0 0 0 7.452 10.438 9.66 9.66 0 0 0 1.5.119 9.068 9.068 0 0 0 8.931-7.571h-.004Z"})}),l.jsx("defs",{children:l.jsx("clipPath",{id:"a",children:l.jsx("path",{fill:"#fff",d:"M.288 0h181.424v126.936H.288z"})})})]});function Q5(){return l.jsxs(G5,{children:[l.jsx(X5,{}),l.jsx(K5,{children:"There are currently no posts"})]})}const Z5=y(vt)`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border-radius: 10px;
    width: 100%;
    height: auto;
    color: var(--white);
    padding: 30px 0;
    box-shadow: 0 10px 20px var(--shadow);
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover{
        transform: translateY(-4px);
        color: var(--black);
    }
`,J5=y.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 90%;
    height: 80%;
    cursor: pointer;
`;y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;const q5=y.div`
    display: flex;
    justify-content: space-between;
`,By=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    color: var(--grey);
`,e4=y.div`
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
`,t4=y.div`
    font-size: 30px;
`,n4=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
`,Hy=y.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`,Wy=y.div`
    &:hover {
        color: var(--white);
    }
`,r4=y.div`
    font-size: 12px;
`,Ma=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Yy=y.div`
    font-size: 30px;
    color: white;
`,Da=y.div`
    font-size: 15px;
    line-height: 20px;
    color: var(--grey);
`,Vy=y.div`
    display: flex;
`,Gy=y.div`
    border-radius: 50px;
    background-color: var(--blue-low);
    height: 30px;
`,Ky=y.div`
    padding: 0 10px;
    font-size: 12px;
    line-height: 30px;
    color: var(--light-blue);
`,Xy=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    color: var(--tan);
`,xl=y(Fe)`
    &:hover {
        color: var(--white);
        &:hover {
            cursor: pointer;
        }
    }
`,Qy=y(Fe)`
    color: #F45151;

    &:hover {
        cursor: pointer;
    }
`,Uo=y.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--grey);
`;var Zy={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]},Jy={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"]};function _a({information:e}){const t=We(),[n,r]=x.useState(!1),o=()=>{let s=e.getPostURL().url;localStorage.getItem("userDatabaseKey")!=null?t("/CodeConnect".concat(s)):t("/CodeConnect/guest-view".concat(s))},i=s=>{s.stopPropagation(),s.preventDefault(),n?(e.dislike(),r(!1)):(e.like(),r(!0))},a=s=>{s.stopPropagation(),s.preventDefault(),t("/CodeConnect/profile/"+e.author.getUsername())};return l.jsx(Z5,{onClick:o,children:l.jsxs(J5,{children:[l.jsxs(q5,{children:[l.jsxs(By,{children:[l.jsxs(n4,{onClick:a,children:[l.jsx(Hy,{src:e.author.getProfilePicture()}),l.jsx(Wy,{children:e.author.getUsername()})]}),l.jsx(r4,{children:e.timestamp})]}),l.jsx(t4,{children:e.reaction})]}),l.jsxs(Ma,{children:[l.jsx(Yy,{children:e.title}),l.jsx(Da,{children:e.content})]}),l.jsx(Vy,{children:l.jsx(Gy,{children:l.jsx(Ky,{children:e.topic})})}),l.jsxs(Xy,{children:[l.jsxs(Uo,{children:[l.jsx("div",{onClick:i,children:n?l.jsx(Qy,{icon:Y1}):l.jsx(xl,{icon:Zy})}),l.jsxs("div",{children:[e.likes," likes"]})]}),l.jsxs(Uo,{children:[l.jsx(xl,{icon:Jy}),l.jsxs("div",{children:[e.getCommentsTotal()," comments"]})]}),l.jsx(Uo,{children:". . ."})]})]})})}_a.propTypes={information:H.object};const o4=y.div`
    display: flex;
    padding: 16px 18px 16px 18px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    background: var(--black);
`,i4=y.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
`;function a4(){return l.jsx(i4,{children:"Posts"})}function s4({posts:e}){return l.jsxs(o4,{children:[l.jsx(a4,{}),e.length>0?e.map((t,n)=>l.jsx(_a,{information:t},n)):l.jsx(Q5,{})]})}const l4=y.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
    background: #161314;
`;function c4({posts:e}){return l.jsxs(l4,{children:[l.jsx(lg,{}),l.jsx(s4,{posts:e}),l.jsx(lg,{})]})}const u4=y.div`
    width: 80vw;
    margin-left: 20vw;
    background-color: #2B2D37;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;function d4(){const{userName:e}=ai(),t=et.find(n=>n.username==e);return l.jsxs(Lt,{children:[l.jsx(xn,{}),l.jsxs(u4,{children:[l.jsx(Y5,{user:t}),l.jsx(c4,{posts:t.getPosts()})]})]})}const f4=cS`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Reggae+One&display=swap');

    :root {
        // brown/brown theme
        /* --white: #FFFFFF;
        --off-white: #FFE9CE;
        --tan: #AF997F;
        --green: #2DA062;
        --green-low: rgba(47, 91, 81, 0.5);
        --brown: #282521;
        --light-brown: #2B2824;
        --shadow: rgba(0, 0, 0, 0.25); */

        // black/blue theme
        --white: #FFFFFF;
        --grey: #9F9F9F;
        --black: #2B2D37;
        --light-black: #31333E;
        --blue: #558FFF;
        --light-blue: #94B8FF;
        --blue-low: rgba(85, 143, 255, 0.4);
        --shadow: rgba(0, 0, 0, 0.25);
    }

    body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: var(--black);
    }
`,qy=y.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,ex=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: clamp(500px, 90%, 900px);
`,tx=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,nx=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`;function p4(){const[e,t]=x.useState("Recent"),[n,r]=x.useState(!1),o=()=>{r(a=>!a)},i=te.slice().reverse();return l.jsxs(Lt,{children:[l.jsx(xn,{onPost:o}),l.jsx(qy,{children:l.jsxs(ex,{children:[l.jsxs(tx,{children:[l.jsx(yl,{children:"Home"}),l.jsx(Ql,{setStatus:t})]}),l.jsx(nx,{children:i.map((a,s)=>l.jsx(_a,{information:a},s))})]})})]})}const h4=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    background-color: var(--black);
    height: 100vh;
`,m4=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`,g4=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50%;
    border-radius: 10px;
    box-shadow: 0 10px 20px var(--shadow);

`,v4=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,y4=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,x4=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 30%;
`,w4=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 27%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

`,k4=y.div`
    display: flex;
    align-items: center; 
    height: 77%;
    overflow-y: scroll;
    justify-content: center;
`,b4=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,S4=y.textarea`
   width: 80%;   
   background-color: grey;
   color: white;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,C4=y.textarea`
   width: 90%;   
   height: 80%;
   color: white;
   background-color: grey;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,E4=y.div`
    display: flex;
    align-items: center; 
    height: 20%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,j4=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 7px 15px;
    border: none;
    border-radius: 50px;
    align-items: center; 
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,P4=y(vt)`

    margin-left: 35vw;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
    color: grey;
    &:hover{
        color: var(--white);
    }
`;y.div`
   font-size: 30px;
   font-weight: 500;
   color: var(--white);

`;const T4=y.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background-color: var(--black);
   border-radius: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
   height: 73px;
   transition: 0.1s ease-in-out;
   &:hover{
       background-color: var(--shadow);
   }
   cursor: pointer;
`,R4=y.div`
   display: flex;
   align-items: center;
   gap: 20px;
   color: var(--grey);
   margin-left: 2vw;
`,N4=y.img`
   width: 60px;
   border-radius: 100px;
`,I4=y.div`
   font-size: 25px;
   color: var(--white);
`;function Bt({user:e,url:t}){const n=We(),r=()=>{n(t)};return l.jsx(T4,{children:l.jsxs(R4,{onClick:r,children:[l.jsx(N4,{src:e.profilePic}),l.jsx(I4,{children:e.userName})]})})}const O4=y.div`
    font-size: 35px;
    font-weight: 600;
    color: var(--white);

`,tc=y.div`
    font-size: 30px;
    font-weight: 600;
    color: var(--white);

`,L4={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:Vt},A4={userName:"Boo",profilePic:an},M4={userName:"Sonic",profilePic:vn};function D4(){We();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return l.jsxs(Lt,{children:[l.jsx(xn,{}),l.jsxs(h4,{children:[l.jsx(m4,{children:l.jsxs(g4,{children:[l.jsxs(w4,{children:[l.jsx(O4,{children:"New Direct Message"}),l.jsx(P4,{to:"/CodeConnect/direct-messages",children:"X"})]}),l.jsxs(x4,{children:[l.jsx(S4,{rows:"2",cols:"30"}),l.jsx(b4,{children:"Search"})]}),l.jsx(k4,{children:l.jsx(C4,{rows:"2",cols:"30"})}),l.jsx(E4,{children:l.jsx(j4,{children:"Send"})})]})}),l.jsxs(v4,{children:[l.jsx(y4,{children:l.jsx(tc,{children:"Messages"})}),l.jsx(Bt,{user:A4,url:e}),l.jsx(Bt,{user:L4,url:t}),l.jsx(Bt,{user:M4,url:n})]})]})]})}function _4(){localStorage.removeItem("userDatabaseKey");const[e,t]=x.useState("Recent"),n=te.slice().reverse();return l.jsxs(Lt,{children:[l.jsx(ec,{}),l.jsx(Qj,{children:l.jsxs(Zj,{children:[l.jsxs(Jj,{children:[l.jsx(yl,{children:"Home"}),l.jsx(Ql,{setStatus:t})]}),l.jsx(qj,{children:n.map((r,o)=>l.jsx(_a,{information:r},o))})]})})]})}const F4=y.div`

    margin-left: 20vw;
    display: flex;
    justify-content: center;
    width: 80vw;
    height: 100vh;
`,$4=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,z4=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
`,U4=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,B4=y.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    border-radius: 10px;
    width: 90%;
    height: 200px;
    box-shadow: 0 10px 20px var(--shadow);
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: var(--shadow);
    }
    cursor: pointer;
`,H4=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 90%;
    height: 80%;
`,W4=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,Y4=y.img`
    width: 60px;
    border-radius: 100px;
`,V4=y(vt)`
    font-size: 25px;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`,G4=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,K4=y.div`
    font-size: 19px;
    color: var(--grey);
`;function iu({user:e,targetUrl:t}){const n=We(),r=()=>{n(t)};return l.jsx(B4,{onClick:r,children:l.jsxs(H4,{children:[l.jsxs(W4,{children:[l.jsx(Y4,{src:e.profilePic}),l.jsx(V4,{children:e.userName})]}),l.jsx(G4,{children:l.jsx(K4,{children:e.text})})]})})}const X4=y.div`
    font-size: 50px;
    font-weight: 700;
    color: var(--white);

`,nc=y(vt)`
  position: fixed;
  text-decoration: none;
  bottom: 20px;
  right: 50px;
  background-color: var(--blue); 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  transition: 0.2s ease-in-out;
    &:hover{
        background-color: var(--blue-low);
    }
  cursor: pointer;
`,Q4={userName:"Boo",text:"well it's been 2 weeks and i've heard nothing. should i follow up?",profilePic:an},Z4={userName:"Kirby",text:"Thanks! I'll experiment with sleep modes. Have you worked on any embedded projects recently?",profilePic:Vt},J4={userName:"Sonic",text:"Ah no wayyyyy? I thought cover letters were obsolete",profilePic:vn};function q4(){We();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return x.useState("Recents"),l.jsxs(Lt,{children:[l.jsx(xn,{}),l.jsxs(F4,{children:[l.jsxs($4,{children:[l.jsx(z4,{children:l.jsx(X4,{children:"Direct Messages"})}),l.jsxs(U4,{children:[l.jsx(iu,{user:Q4,targetUrl:e}),l.jsx(iu,{user:Z4,targetUrl:t}),l.jsx(iu,{user:J4,targetUrl:n})]})]}),l.jsx(nc,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const eP=y(Lt)`
    height: 100vh;
    justify-content: center;
    align-items: center;
`,tP=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--black);
    width: 40%;
`;y.div`
    color: white;
    text-align: center;
    padding-top: 15vh;
`;y.div`
    color: white;
    padding-left: 45vw;
    margin-top: 5vh;
`;const nP=y.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-bottom: 5vh;
    border: 1px solid var(--black);
    background-color: var(--light-black);
    border-radius: 20px;
    box-shadow: 0px 10px 15px 2px var(--shadow);
`,Ri=y(oe)`

    padding-top: 3vh;

    label {
        color: white;
    }

    p {
        color: white;
    }

    .spanLabel {
        display: inline-block;
        padding-left: 10px;
        cursor: pointer;
    }

    .spanLabel:hover {
        text-decoration: underline;
        text-decoration-color: var(--white);
    }

    .spanCheckbox {
        display: inline-block;
    }
`,rP=y.p`
    background-color: var(--light-black);
`,oP=y.a`
    color: white;
    background-color: var(--light-black);
`,ys=y(oe.Control)`
    border-radius: 20px;
    background-color: var(--black);
    border: 0px;
    color: var(--white);

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0 none;
        color: var(--white);
        background-color: var(--black);
    }
    
    &::placeholder {
        color: var(--grey);
    }
`,iP=y(Rn)`
    .modal-content {
        background-color: var(--light-black);
        color: var(--white);
    }
    
`,aP=y.h1`
    margin: 0 auto;
    color: var(--white);
`,sP=y(wr)`
    margin-top: 20px;
    align-self: center;
    width: 10vw;
    border-radius: 20px;
    background-color: var(--blue);
    border: 0px;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: var(--blue);
        transform: translateY(-3px);
    }
`,lP=y(vt)`
    margin-top: 10px;
    width: 30px;
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 40px;
    font-size: 20px;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(-3px);
    }
`;const cP={createAccount:async(e,t,n,r,o)=>{let i=e.includes("@")&&e.includes(".com"),a=/[!@#$&]/;return console.log(i),i?t==="PixelPioneer"?{success:!1,error:"Username is already taken."}:a.test(n)?n.length<8?{success:!1,error:"Password must contain 8 or more characters"}:n!==r?{success:!1,error:"Passwords must match"}:o?(CS(t,n),d1(t,n),{success:!0}):{success:!1,error:"Please read and agree to the terms of service before proceeding."}:{success:!1,error:"Password must contain at least one special character (!, @, #, $, &)"}:{success:!1,error:"Invalid email. An example of a proper email is 'user@email.com'"}}},cg=y.div`
    color: var(--grey);
`,uP=y.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 5vh 0;
    width: clamp(500px, 90%, 900px);
`,dP=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,fP=y(vt)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0px;
    /* background-color: var(--blue); */
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(-3px);
        background-color: var(--blue);
    }
`,rx=y(Fe)`
    color: white;
`,pP=y.div`
    width: 98%;
`;function hP(){const e=We(),[t,n]=x.useState(""),[r,o]=x.useState(""),[i,a]=x.useState(""),[s,c]=x.useState(""),[u,d]=x.useState(""),[f,p]=x.useState(""),[w,k]=x.useState(!1),b=()=>k(!1),C=()=>k(!0),g=async()=>{try{const h=await cP.createAccount(t,r,i,s,f);h.success?(console.log("Login successful:",h.user),e("/CodeConnect/home")):h.success||(d(h.error),console.log("failed."))}catch(h){console.error("Login error:",h),d("Unknown error has occured. Please try again.")}};return l.jsx(eP,{children:l.jsxs(tP,{children:[l.jsx(aP,{children:"Create Account"}),l.jsxs(nP,{children:[l.jsx(lP,{to:"/CodeConnect/",children:l.jsx(rx,{icon:lp})}),l.jsx(Ri,{children:l.jsxs(oe.Group,{className:"createAcct",controlId:"email",children:[l.jsx(oe.Label,{children:" Email address "}),l.jsx("br",{}),l.jsx(ys,{type:"email",placeholder:"Enter email",size:"md",value:t,onChange:h=>n(h.target.value)})]})}),l.jsx(Ri,{class:!0,children:l.jsxs(oe.Group,{className:"createAcct",controlId:"username",children:[l.jsx(oe.Label,{children:" Username "}),l.jsx("br",{}),l.jsx(ys,{type:"text",placeholder:"Enter username",size:"md",value:r,onChange:h=>o(h.target.value)})]})}),l.jsx(Ri,{class:!0,children:l.jsxs(oe.Group,{className:"createAcct",controlId:"password",children:[l.jsx(oe.Label,{children:" Password "}),l.jsx("br",{}),l.jsx(ys,{type:"password",placeholder:"Enter password",size:"md",value:i,onChange:h=>a(h.target.value)})]})}),l.jsx(Ri,{children:l.jsxs(oe.Group,{className:"createAcct",controlId:"confirmPassword",children:[l.jsx(oe.Label,{children:" Confirm Password "}),l.jsx("br",{}),l.jsx(ys,{type:"password",placeholder:"Confirm password",size:"md",value:s,onChange:h=>c(h.target.value)})]})}),l.jsxs(Ri,{children:[l.jsx("span",{class:"spanCheckbox",children:l.jsx(oe.Check,{type:"checkbox",id:"terms",value:f,onChange:h=>p(h.target.checked)})}),l.jsx("span",{class:"spanLabel",children:l.jsxs(rP,{children:[l.jsx(oP,{onClick:C,children:"Agree to Terms and Conditions"})," "]})})]}),l.jsxs(iP,{show:w,onHide:b,animation:!1,scrollable:!0,children:[l.jsx(Rn.Header,{closeButton:!0,children:l.jsx(Rn.Title,{children:"Terms and Conditions"})}),l.jsxs(Rn.Body,{children:["1. YOUR AGREEMENT By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.",l.jsx("br",{}),l.jsx("br",{}),"PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions. 2. PRIVACY Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.",l.jsx("br",{}),l.jsx("br",{}),'3. LINKED SITES This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.',l.jsx("br",{}),l.jsx("br",{}),"4. FORWARD LOOKING STATEMENTS All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.",l.jsx("br",{}),l.jsx("br",{}),'5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY A. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE, INCLUDING ANY RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT, MEMORANDUM, OR INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE RISK; (ii) THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE AND NON-INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH RESPECT TO THE RESULTS THAT MAY BE OBTAINED FROM THIS SITE, THE PRODUCTS OR SERVICES ADVERTISED OR OFFERED OR MERCHANTS INVOLVED; (v) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR FOR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.',l.jsx("br",{}),l.jsx("br",{}),"B. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.",l.jsx("br",{}),l.jsx("br",{}),"6. EXCLUSIONS AND LIMITATIONS SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.",l.jsx("br",{}),l.jsx("br",{}),`7. OUR PROPRIETARY RIGHTS This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third party's intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively "Trademarks") or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services.`,l.jsx("br",{}),l.jsx("br",{}),"The framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited.",l.jsx("br",{}),l.jsx("br",{}),`8. INDEMNITY By using the Site web sites you agree to indemnify us and affiliated entities (collectively "Indemnities") and hold them harmless from any and all claims and expenses, including (without limitation) attorney's fees, arising from your use of the Site web sites, your use of the Products and Services, or your submission of ideas and/or related materials to us or from any person's use of any ID, membership or password you maintain with any portion of the Site, regardless of whether such use is authorized by you.`,l.jsx("br",{}),l.jsx("br",{}),"9. COPYRIGHT AND TRADEMARK NOTICE Except our generated dummy copy, which is free to use for private and commercial use, all other text is copyrighted. generator.lorem-ipsum.info © 2013, all rights reserved",l.jsx("br",{}),l.jsx("br",{}),'10. INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS It is our policy to respond expeditiously to claims of intellectual property infringement. We will promptly process and investigate notices of alleged infringement and will take appropriate actions under the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws. Notices of claimed infringement should be directed to:',l.jsx("br",{}),l.jsx("br",{}),"11. PLACE OF PERFORMANCE This Site is controlled, operated and administered by us from our office in Kiev, Ukraine. We make no representation that materials at this site are appropriate or available for use at other locations outside of the Ukraine and access to them from territories where their contents are illegal is prohibited. If you access this Site from a location outside of the Ukraine, you are responsible for compliance with all local laws.",l.jsx("br",{}),l.jsx("br",{}),"12. GENERAL",l.jsx("br",{}),l.jsx("br",{}),"A. If any provision of these Terms and Conditions is held to be invalid or unenforceable, the provision shall be removed (or interpreted, if possible, in a manner as to be enforceable), and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. These Terms and Conditions set forth the entire understanding and agreement between us with respect to the subject matter contained herein and supersede any other agreement, proposals and communications, written or oral, between our representatives and you with respect to the subject matter hereof, including any terms and conditions on any of customer's documents or purchase orders.",l.jsx("br",{}),l.jsx("br",{}),"B. No Joint Venture, No Derogation of Rights. You agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of these Terms and Conditions or your use of the Site. Our performance of these Terms and Conditions is subject to existing laws and legal process, and nothing contained herein is in derogation of our right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by us with respect to such use."]})]}),u&&l.jsx("div",{style:{color:"red"},children:u}),l.jsx(sP,{onClick:g,children:"Create Account"})]})]})})}const mP=y.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border-radius: 10px;
    width: 100%;
    height: auto;
    color: var(--white);
    padding: 30px 0;
    box-shadow: 0 10px 20px var(--shadow);
`,gP=y.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 90%;
    height: 80%;
`,vP=y.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    width: 100%;
    height: 100%;
`,ox=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: 5% 95%;
`,ix=y.div`
    width: 100%;
    height: 50%;
    background-color: none;
    border-left: 5px solid;
    border-bottom: 5px solid;
    border-color: grey;
`,mp=y.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--light-black);
    border-radius: 0px 10px 10px 0px;
    width: 100%;
    border-left: 5px solid;
    border-color: grey;
    padding: 30px 30px;
    margin: 1.5% 0 0 0;
`,yP=y.div`
    margin-left: 5%;
`;y.div`
    background-color: var(--light-black) !important;
    border-radius: 10px;
    gap: 20px;
`;y.div`
    border-radius: 10px;
`;y.div`
    color: white;
    border-radius: 10px;
    gap: 20px;
`;y.button`

`;y.div`
`;const ug=y(Fe)`
    color: var(--white);
`,xP=y.div`
    display: flex;
    justify-content: center;
    background-color: var(--blue);
    color: white;
    border-radius: 10px;
    text-align: center center;
    padding: 7px;
    height: 35px;
    width: 100px;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: var(--blue-low);
        box-shadow: 0 5px 10px var(--shadow);
    }
`,rc=y.div`
    width: 30px;
    height: 30px;
    float: right;
    flex: 0;
    display: flex;
    align-items: center;
    padding: 7px;
    border-radius: 50%;
    background-color: --var(black);
    color: var(--light-grey);
`,oc=y(Fe)`

`,gp=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,vp=y.div`
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
`,yp=y.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`,xp=y.div`
    flex: 1;
`;function wp({id:e,level1:t,level2:n,closeForm:r,onReplySuccess:o,isGuestView:i},a){const[s,c]=x.useState(!1),[u,d]=x.useState(!1),[f,p]=x.useState({reply_desc:""}),[w,k]=x.useState(!1),b="Please enter a description before replying!",C=m=>{const{name:E,value:T}=m.target;p({...f,[E]:T})},g=()=>{i?d(!0):c(!s)},h=()=>{const{reply_desc:m}=f;if(m.trim()==""){k(!0);return}const E=te[e];SS(E,t,n,m),k(!1),o(),g()},v=()=>{d(!1)};return l.jsxs(l.Fragment,{children:[l.jsx(xP,{variant:"outline-primary",className:"btn-sm",onClick:()=>g(),"aria-controls":"collapseOne","aria-expanded":s,children:"Reply"}),l.jsx("br",{}),u&&l.jsx(Oy,{children:l.jsxs(Ly,{children:[l.jsx(Ay,{children:"Please create an account to access this feature "}),l.jsx("div",{}),l.jsx("div",{}),l.jsx(My,{children:"Create Account"}),l.jsx(Dy,{onClick:v,children:"Close"})]})}),s&&l.jsxs(oe,{children:[l.jsxs(pr,{children:[l.jsx(wt,{xs:11,children:l.jsx(oe.Group,{className:"mb-3",controlId:"replyForm.desc",children:l.jsx(oe.Control,{as:"textarea",rows:5,id:"reply_desc",name:"reply_desc",value:f.reply_desc,onChange:C,placeholder:"I've got some thoughts on this..."})})}),l.jsxs(wt,{xs:1,children:[l.jsx(pr,{children:l.jsxs(wr,{variant:"danger",className:"btn-sm",onClick:()=>c(!1),children:["Exit ",l.jsx(ug,{icon:o3,size:"xl"})]})}),l.jsx("br",{}),l.jsx(pr,{children:l.jsxs(wr,{variant:"secondary",className:"btn-sm",onClick:h,children:["Reply ",l.jsx(ug,{icon:Kl,size:"xl"})]})})]})]}),w&&l.jsx("div",{style:{color:"red"},children:b})]})]})}function wP({handleRerenderThread:e,isGuestView:t}){const[n,r]=x.useState(!1),[o,i]=x.useState(!1),{id:a}=ai(),s=We(),c=te[a],u=c.author.getProfilePicture(),d=c.author.getUsername();let f=0;const p=localStorage.getItem("userDatabaseKey");p&&(f=et[p].username==d);const w=()=>{r(!1)},k=C=>{C.stopPropagation(),C.preventDefault(),o?(c.dislike(),i(!1)):(c.like(),i(!0))},b=C=>{C.stopPropagation(),C.preventDefault(),s("/CodeConnect/profile/"+c.author.getUsername())};return l.jsx(mP,{children:l.jsxs(gP,{children:[l.jsxs(By,{children:[l.jsxs(e4,{onClick:b,children:[l.jsx(Hy,{src:u}),l.jsx(Wy,{children:d})]}),f!=0&&l.jsx(rc,{children:l.jsx(oc,{icon:Xl})})]}),l.jsxs(Ma,{children:[l.jsx(Yy,{children:c.title}),l.jsx(Da,{children:c.content})]}),l.jsx(Vy,{children:l.jsx(Gy,{children:l.jsx(Ky,{children:c.topic})})}),l.jsxs(Xy,{children:[l.jsxs(Uo,{children:[l.jsx("div",{onClick:k,children:o?l.jsx(Qy,{icon:Y1}):l.jsx(xl,{icon:Zy})}),l.jsxs("div",{children:[c.likes," likes"]})]}),l.jsxs(Uo,{children:[l.jsx(xl,{icon:Jy}),l.jsxs("div",{children:[c.getCommentsTotal()," comments"]})]}),l.jsx(Uo,{children:l.jsx("div",{children:c.reactions})})]}),l.jsx(wp,{id:a,level1:-1,level2:-1,onReplySuccess:e,closeForm:w,isGuestView:t})]})})}function kP({user:e,level1:t,level2:n,handleRerenderThread:r,isGuestView:o},i){const{author:a,content:s}=e,[c,u]=x.useState(!1),{id:d}=ai();let f=0;const p=localStorage.getItem("userDatabaseKey");p&&(f=et[p].username==a.username);const w=We(),k=()=>{u(!1)},b=C=>{C.stopPropagation(),C.preventDefault(),w("/CodeConnect/profile/"+a.getUsername())};return l.jsx(l.Fragment,{children:l.jsxs(ox,{children:[l.jsx(ix,{}),l.jsxs(mp,{children:[l.jsxs(gp,{children:[l.jsxs(vp,{onClick:b,children:[l.jsx(yp,{src:a.getProfilePicture()}),l.jsx(xp,{children:a.getUsername()})]}),f!=0&&l.jsx(rc,{children:l.jsx(oc,{icon:Xl})})]}),l.jsx("br",{}),l.jsx(Ma,{children:l.jsx(Da,{children:s})}),l.jsx("br",{}),l.jsx(wp,{id:d,level1:t,level2:0,closeForm:k,onReplySuccess:r,isGuestView:o})]})]})})}function ax({user:e,level1:t,handleRerenderThread:n,isGuestView:r},o){const{author:i,content:a}=e,[s,c]=x.useState(!1),{id:u}=ai();let d=0;const f=localStorage.getItem("userDatabaseKey");f&&(d=et[f].username==i.username);const p=We(),w=()=>{c(!1)},k=b=>{b.stopPropagation(),b.preventDefault(),p("/CodeConnect/profile/"+i.getUsername())};return l.jsx(l.Fragment,{children:l.jsxs(mp,{children:[l.jsxs(gp,{children:[l.jsxs(vp,{onClick:k,children:[l.jsx(yp,{src:i.getProfilePicture()}),l.jsx(xp,{children:i.getUsername()})]}),d!=0&&l.jsx(rc,{children:l.jsx(oc,{icon:Xl})})]}),l.jsx("br",{}),l.jsx(Ma,{children:l.jsx(Da,{children:a})}),l.jsx("br",{}),l.jsx(wp,{id:u,level1:t,level2:-1,closeForm:w,onReplySuccess:n,isGuestView:r})]})})}ax.propTypes={user:H.object};function bP({user:e}){const{author:t,content:n}=e;let r=0;const o=localStorage.getItem("userDatabaseKey");o&&(r=et[o].username==t.username);const i=We(),a=s=>{s.stopPropagation(),s.preventDefault(),i("/CodeConnect/profile/"+t.getUsername())};return l.jsx(l.Fragment,{children:l.jsxs(ox,{children:[l.jsx(ix,{}),l.jsxs(mp,{children:[l.jsxs(gp,{children:[l.jsxs(vp,{onClick:a,children:[l.jsx(yp,{src:t.getProfilePicture()}),l.jsx(xp,{children:t.getUsername()})]}),r!=0&&l.jsx(rc,{children:l.jsx(oc,{icon:Xl})})]}),l.jsx("br",{}),l.jsx(Ma,{children:l.jsx(Da,{children:n})}),l.jsx("br",{})]})]})})}const SP=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0px;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(-3px);
        background-color: var(--blue);
        cursor: pointer;
    }
`,CP=y(Fe)`
    color: white;
`;function EP(){const e=()=>{window.history.go(-1)};return l.jsx(SP,{onClick:e,children:l.jsx(CP,{icon:lp})})}function dg({isGuestView:e}){const[t,n]=x.useState("Recent"),{id:r}=ai(),i=te[r].getPostInformation().comments,[a,s]=x.useState(!1),c=()=>{s(u=>!u)};return l.jsxs(Lt,{children:[e?l.jsx(ec,{}):l.jsx(xn,{}),l.jsx(qy,{children:l.jsxs(ex,{children:[l.jsxs(tx,{children:[l.jsx(EP,{}),l.jsx(Ql,{setStatus:n})]}),l.jsxs(vP,{children:[l.jsx(wP,{handleRerenderThread:c,isGuestView:e}),i.map((u,d)=>l.jsxs(_e.Fragment,{children:[l.jsx(ax,{level1:d,user:u,handleRerenderThread:c,isGuestView:e}),u.comments&&u.comments.length>0&&l.jsx("div",{children:u.comments.map((f,p)=>l.jsxs(_e.Fragment,{children:[l.jsx(kP,{level1:d,level2:p,user:f,handleRerenderThread:c,isGuestView:e}),f.comments&&f.comments.length>0&&l.jsx(yP,{children:f.comments.map((w,k)=>l.jsx(bP,{user:w}))})]},p))})]},d))]})]})})]})}const jP=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,PP=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,TP=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,RP=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,NP=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,IP=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,OP=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,LP=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`;y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`;y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`;const AP=y(vt)`

    margin-left: 40.7vw;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
    color: grey;
    &:hover{
        color: var(--white);
    }
`,MP=y(Fe)`
    color: var(--white);
`;y.div`
    display: flex;
    justify-content: center;
    background-color: var(--blue);
    color: white;
    border-radius: 10px;
    text-align: center center;
    padding: 7px;
    height: 35px;
    width: 100px;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: var(--blue-low);
        box-shadow: 0 5px 10px var(--shadow);
    }
`;const kp=y(vt)`
    font-size: 60px;
    font-weight: 500;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`,bp=y.img`
    width: 60px;
    border-radius: 100px;
`,DP=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border: 5px solid var(--black);
    height: 150px;
    transition: 0.1s ease-in-out;
`,_P=y.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    gap: 10px;
    width: 90%;
    height: 150px;
`,FP=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,$P=y.img`
    width: 60px;
    border-radius: 100px;
`,zP=y.div`
    font-size: 22px;
    color: var(--white);
`,UP=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,BP=y.div`
    font-size: 17px;
    color: var(--white);
`;function Sp({message:e}){const{author:t,profilepic:n,content:r}=e;return l.jsx(DP,{children:l.jsxs(_P,{children:[l.jsxs(FP,{children:[l.jsx($P,{src:n}),l.jsx(zP,{children:t})]}),l.jsx(UP,{children:l.jsx(BP,{children:r})})]})})}class Ke{constructor(t,n,r){this.author=t,this.profilepic=n,this.content=r}getUsername(){return this.author}getProfilePic(){return this.profilepic}getContent(){return this.content}getMessageInformation(){return{author:this.author,profilepic:this.profilepic,content:this.content}}}const kr=[],HP=new Ke("Kirby",Vt,"Hey, just finished my embedded project using Arduino. It's a temperature monitoring system. Excited to share!");kr.push(HP);const WP=new Ke("PixelPioneer",zn,"That sounds interesting! What sensors did you use for the temperature monitoring, and how did you implement it?");kr.push(WP);const YP=new Ke("Kirby",Vt,"I used a DS18B20 temperature sensor. The Arduino reads the data and displays it on an OLED screen.");kr.push(YP);const VP=new Ke("Kirby",Vt,"I'm facing some power consumption issues, though. Any advice on optimizing power usage in embedded projects?");kr.push(VP);const GP=new Ke("PixelPioneer",zn,"Absolutely. For power optimization, consider putting the Arduino to sleep between readings and using low-power components. Also, explore different sleep modes.");kr.push(GP);const KP=new Ke("Kirby",Vt,"Thanks! I'll experiment with sleep modes. Have you worked on any embedded projects recently?");kr.push(KP);const XP={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:Vt},QP={userName:"Boo",profilePic:an},ZP={userName:"Sonic",profilePic:vn};function JP(){const[e,t]=x.useState(!1),[n,r]=x.useState({content:""}),o=We(),i="/CodeConnect/dm-boo",a="/CodeConnect/dm-kirby",s="/CodeConnect/dm-sonic",c=f=>{const{name:p,value:w}=f.target;r({...n,[p]:w})},u=()=>{const{content:f}=n,p=new Ke("PixelPioneer",zn,f);kr.push(p),t(!e),r({...n,content:""})},d=()=>{o("/CodeConnect/profile/Kirby")};return l.jsxs(Lt,{children:[l.jsx(xn,{}),l.jsxs(jP,{children:[l.jsx(PP,{children:l.jsxs(TP,{children:[l.jsxs(IP,{children:[l.jsx(bp,{src:Vt}),l.jsx(kp,{onClick:d,children:"Kirby"}),l.jsx(AP,{to:"/CodeConnect/direct-messages",children:"X"})]}),l.jsx(OP,{children:kr.map((f,p)=>l.jsx(Sp,{message:f},p))}),l.jsx(LP,{children:l.jsx("div",{style:{width:"90%"},children:l.jsx(oe,{children:l.jsxs(pr,{children:[l.jsx(wt,{xs:11,children:l.jsx(oe.Group,{children:l.jsx(oe.Control,{as:"textarea",rows:2,cols:20,id:"content",name:"content",value:n.content,onChange:c,placeholder:"message..."})})}),l.jsx(wt,{xs:1,children:l.jsxs(wr,{className:"SendButton",onClick:u,children:["Send ",l.jsx(MP,{icon:Kl,size:"xl"})]})})]})})})})]})}),l.jsxs(NP,{children:[l.jsx(RP,{children:l.jsx(tc,{children:"Messages"})}),l.jsx(Bt,{user:QP,url:i}),l.jsx(Bt,{user:XP,url:a}),l.jsx(Bt,{user:ZP,url:s})]}),l.jsx(nc,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const qP=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;  
`,eT=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,tT=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,nT=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,rT=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,oT=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,iT=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,aT=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`;y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`;y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`;const sT=y(vt)`

    margin-left: 43vw;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
    color: grey;
    &:hover{
        color: var(--white);
    }
`,lT=y(Fe)`
    color: var(--white);
`;y.div`
    display: flex;
    justify-content: center;
    background-color: var(--blue);
    color: white;
    border-radius: 10px;
    text-align: center center;
    padding: 7px;
    height: 35px;
    width: 100px;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: var(--blue-low);
        box-shadow: 0 5px 10px var(--shadow);
    }
`;const to=[],cT=new Ke("Boo",an,"hey what is up! long time no talk");to.push(cT);const uT=new Ke("Boo",an,"i wanted to let you know that I got through my big interview");to.push(uT);const dT=new Ke("Boo",an,"haha i'm mainly reaching out about what to expect after. honestly, i think it went pretty okay");to.push(dT);const fT=new Ke("PixelPioneer",zn,"That's awesome! Congrats on finishing the interview cycle. When do you hear back?");to.push(fT);const pT=new Ke("Boo",an,"well it's been 2 weeks and i've heard nothing. should i follow up?");to.push(pT);const hT={userName:"Kirby",profilePic:Vt},mT={message:"HAHAHHAHAHAH.",userName:"Boo",profilePic:an},gT={userName:"Sonic",profilePic:vn};function vT(){const[e,t]=x.useState(!1),[n,r]=x.useState({content:""}),o=We(),i="/CodeConnect/dm-boo",a="/CodeConnect/dm-kirby",s="/CodeConnect/dm-sonic",c=f=>{const{name:p,value:w}=f.target;r({...n,[p]:w})},u=()=>{const{content:f}=n,p=new Ke("PixelPioneer",zn,f);to.push(p),t(!e),r({...n,content:""})},d=()=>{o("/CodeConnect/profile/Boo")};return l.jsxs(Lt,{children:[l.jsx(xn,{}),l.jsxs(qP,{children:[l.jsx(eT,{children:l.jsxs(tT,{children:[l.jsxs(oT,{children:[l.jsx(bp,{src:an}),l.jsx(kp,{onClick:d,children:"Boo"}),l.jsx(sT,{to:"/CodeConnect/direct-messages",children:"X"})]}),l.jsx(iT,{children:to.map((f,p)=>l.jsx(Sp,{message:f},p))}),l.jsx(aT,{children:l.jsx("div",{style:{width:"90%"},children:l.jsx(oe,{children:l.jsxs(pr,{children:[l.jsx(wt,{xs:11,children:l.jsx(oe.Group,{children:l.jsx(oe.Control,{as:"textarea",rows:2,cols:20,id:"content",name:"content",value:n.content,onChange:c,placeholder:"message..."})})}),l.jsx(wt,{xs:1,children:l.jsxs(wr,{className:"SendButton",onClick:u,children:["Send ",l.jsx(lT,{icon:Kl,size:"xl"})]})})]})})})})]})}),l.jsxs(rT,{children:[l.jsx(nT,{children:l.jsx(tc,{children:"Messages"})}),l.jsx(Bt,{user:mT,url:i}),l.jsx(Bt,{user:hT,url:a}),l.jsx(Bt,{user:gT,url:s})]}),l.jsx(nc,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const yT=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,xT=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,wT=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,kT=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,bT=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,ST=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,CT=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,ET=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`;y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`;y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`;const jT=y(vt)`

    margin-left: 40.15vw;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
    color: grey;
    &:hover{
        color: var(--white);
    }
`,PT=y(Fe)`
    color: var(--white);
`;y.div`
    display: flex;
    justify-content: center;
    background-color: var(--blue);
    color: white;
    border-radius: 10px;
    text-align: center center;
    padding: 7px;
    height: 35px;
    width: 100px;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: var(--blue-low);
        box-shadow: 0 5px 10px var(--shadow);
    }
`;const no=[],TT=new Ke("Sonic",vn,"ya that project was wild! I'm happy I can talk about it during my internship hunt");no.push(TT);const RT=new Ke("PixelPioneer",zn,"Haha, absolutely! A lot of learning comes from struggling through projects. Let me know if you want tips on how to best showcase your hardwork!");no.push(RT);const NT=new Ke("Sonic",vn,"actally that would be kinda awesome ^^");no.push(NT);const IT=new Ke("PixelPioneer",zn,"Oh cool! Well.. First, I would start with highlighting your skills on a cover letter. You can really convey a story there.");no.push(IT);const OT=new Ke("Sonic",vn,"Ah no wayyyyy? I thought cover letters were obsolete");no.push(OT);const LT={userName:"Kirby",profilePic:Vt},AT={userName:"Boo",profilePic:an},MT={message:"Gotta go fast bro",userName:"Sonic",profilePic:vn};function DT(){const[e,t]=x.useState(!1),[n,r]=x.useState({content:""});We();const o="/CodeConnect/dm-boo",i="/CodeConnect/dm-kirby",a="/CodeConnect/dm-sonic",s=u=>{const{name:d,value:f}=u.target;r({...n,[d]:f})},c=()=>{const{content:u}=n,d=new Ke("PixelPioneer",zn,u);no.push(d),t(!e),r({...n,content:""})};return l.jsxs(Lt,{children:[l.jsx(xn,{}),l.jsxs(yT,{children:[l.jsx(xT,{children:l.jsxs(wT,{children:[l.jsxs(ST,{children:[l.jsx(bp,{src:vn}),l.jsx(kp,{children:"Sonic"}),l.jsx(jT,{to:"/CodeConnect/direct-messages",children:"X"})]}),l.jsx(CT,{children:no.map((u,d)=>l.jsx(Sp,{message:u},d))}),l.jsx(ET,{children:l.jsx("div",{style:{width:"90%"},children:l.jsx(oe,{children:l.jsxs(pr,{children:[l.jsx(wt,{xs:11,children:l.jsx(oe.Group,{children:l.jsx(oe.Control,{as:"textarea",rows:2,cols:20,id:"content",name:"content",value:n.content,onChange:s,placeholder:"message..."})})}),l.jsx(wt,{xs:1,children:l.jsxs(wr,{className:"SendButton",onClick:c,children:["Send ",l.jsx(PT,{icon:Kl,size:"xl"})]})})]})})})})]})}),l.jsxs(bT,{children:[l.jsx(kT,{children:l.jsx(tc,{children:"Messages"})}),l.jsx(Bt,{user:AT,url:o}),l.jsx(Bt,{user:LT,url:i}),l.jsx(Bt,{user:MT,url:a})]}),l.jsx(nc,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}function _T(){const{id:e}=ai(),{state:t}=ii(),{results:n,searchTerm:r,isGuestView:o}=t,i=()=>{window.history.go(-1)};let a=[];ut.forEach(c=>{c.name.toLowerCase()===e.toLowerCase()&&c.posts.forEach(u=>{a.push(u)})}),console.log({postDatabase:te});let s=te.filter(c=>c.title.toLowerCase().includes(e.toLocaleLowerCase()));return a=a.concat(s),a=a.filter((c,u)=>a.indexOf(c)===u),console.log({posts:a}),l.jsxs(Lt,{children:[o?l.jsx(ec,{}):l.jsx(xn,{}),l.jsx(Fy,{children:l.jsxs(uP,{children:[l.jsxs(_y,{children:[l.jsx(fP,{onClick:i,children:l.jsx(rx,{icon:lp})}),l.jsx(pP,{children:l.jsx(hp,{data:te})})]}),l.jsxs(dP,{children:[a.length>2||a.length==0?l.jsxs(cg,{children:[a.length,' results found matching "',r,'"']}):l.jsxs(cg,{children:[a.length,' result found matching "',r,'"']}),l.jsx(nx,{children:a.map((c,u)=>l.jsx(_a,{information:c},u))})]})]})})]})}const FT=Gk([{path:"/CodeConnect/",element:l.jsx(QS,{})},{path:"/CodeConnect/home",element:l.jsx(p4,{})},{path:"/CodeConnect/explore",element:l.jsx(sg,{isGuestView:0})},{path:"/CodeConnect/guest-explore",element:l.jsx(sg,{isGuestView:1})},{path:"/CodeConnect/direct-messages",element:l.jsx(q4,{})},{path:"/CodeConnect/dm-kirby",element:l.jsx(JP,{})},{path:"/CodeConnect/dm-boo",element:l.jsx(vT,{})},{path:"/CodeConnect/dm-sonic",element:l.jsx(DT,{})},{path:"/CodeConnect/new-direct-message",element:l.jsx(D4,{})},{path:"/CodeConnect/profile/:userName",element:l.jsx(d4,{})},{path:"/CodeConnect/guest-home",element:l.jsx(_4,{})},{path:"/CodeConnect/create-account",element:l.jsx(hP,{})},{path:"/CodeConnect/:author/:id",element:l.jsx(dg,{isGuestView:0})},{path:"/CodeConnect/guest-view/:author/:id",element:l.jsx(dg,{isGuestView:1})},{path:"/CodeConnect/explore-results/:id",element:l.jsx(_T,{})}]),$T=au.createRoot(document.getElementById("root"));$T.render(l.jsxs("div",{children:[l.jsx(f4,{}),l.jsx(tb,{router:FT})]}));
