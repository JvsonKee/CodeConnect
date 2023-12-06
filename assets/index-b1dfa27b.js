function tg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function vl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ng={exports:{}},yl={},rg={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),nx=Symbol.for("react.portal"),rx=Symbol.for("react.fragment"),ox=Symbol.for("react.strict_mode"),ix=Symbol.for("react.profiler"),ax=Symbol.for("react.provider"),sx=Symbol.for("react.context"),lx=Symbol.for("react.forward_ref"),ux=Symbol.for("react.suspense"),cx=Symbol.for("react.memo"),dx=Symbol.for("react.lazy"),Cp=Symbol.iterator;function fx(e){return e===null||typeof e!="object"?null:(e=Cp&&e[Cp]||e["@@iterator"],typeof e=="function"?e:null)}var og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,ag={};function Ko(e,t,n){this.props=e,this.context=t,this.refs=ag,this.updater=n||og}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ko.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sg(){}sg.prototype=Ko.prototype;function Rd(e,t,n){this.props=e,this.context=t,this.refs=ag,this.updater=n||og}var Nd=Rd.prototype=new sg;Nd.constructor=Rd;ig(Nd,Ko.prototype);Nd.isPureReactComponent=!0;var Ep=Array.isArray,lg=Object.prototype.hasOwnProperty,Id={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function cg(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)lg.call(t,r)&&!ug.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ga,type:e,key:i,ref:a,props:o,_owner:Id.current}}function px(e,t){return{$$typeof:ga,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Od(e){return typeof e=="object"&&e!==null&&e.$$typeof===ga}function hx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jp=/\/+/g;function au(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hx(""+e.key):t.toString(36)}function vs(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ga:case nx:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+au(a,0):r,Ep(o)?(n="",e!=null&&(n=e.replace(jp,"$&/")+"/"),vs(o,t,n,"",function(c){return c})):o!=null&&(Od(o)&&(o=px(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(jp,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Ep(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+au(i,s);a+=vs(i,t,n,u,o)}else if(u=fx(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+au(i,s++),a+=vs(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ma(e,t,n){if(e==null)return e;var r=[],o=0;return vs(e,r,"","",function(i){return t.call(n,i,o++)}),r}function mx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},ys={transition:null},gx={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:ys,ReactCurrentOwner:Id};q.Children={map:Ma,forEach:function(e,t,n){Ma(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ma(e,function(){t++}),t},toArray:function(e){return Ma(e,function(t){return t})||[]},only:function(e){if(!Od(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Ko;q.Fragment=rx;q.Profiler=ix;q.PureComponent=Rd;q.StrictMode=ox;q.Suspense=ux;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ig({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Id.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)lg.call(t,u)&&!ug.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ga,type:e.type,key:o,ref:i,props:r,_owner:a}};q.createContext=function(e){return e={$$typeof:sx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ax,_context:e},e.Consumer=e};q.createElement=cg;q.createFactory=function(e){var t=cg.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:lx,render:e}};q.isValidElement=Od;q.lazy=function(e){return{$$typeof:dx,_payload:{_status:-1,_result:e},_init:mx}};q.memo=function(e,t){return{$$typeof:cx,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=ys.transition;ys.transition={};try{e()}finally{ys.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return pt.current.useCallback(e,t)};q.useContext=function(e){return pt.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};q.useEffect=function(e,t){return pt.current.useEffect(e,t)};q.useId=function(){return pt.current.useId()};q.useImperativeHandle=function(e,t,n){return pt.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return pt.current.useMemo(e,t)};q.useReducer=function(e,t,n){return pt.current.useReducer(e,t,n)};q.useRef=function(e){return pt.current.useRef(e)};q.useState=function(e){return pt.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return pt.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return pt.current.useTransition()};q.version="18.2.0";rg.exports=q;var x=rg.exports;const De=vl(x),vx=tg({__proto__:null,default:De},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=x,xx=Symbol.for("react.element"),wx=Symbol.for("react.fragment"),kx=Object.prototype.hasOwnProperty,Sx=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bx={key:!0,ref:!0,__self:!0,__source:!0};function dg(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)kx.call(t,r)&&!bx.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:xx,type:e,key:i,ref:a,props:o,_owner:Sx.current}}yl.Fragment=wx;yl.jsx=dg;yl.jsxs=dg;ng.exports=yl;var l=ng.exports,tc={},fg={exports:{}},Rt={},pg={exports:{}},hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,D){var F=N.length;N.push(D);e:for(;0<F;){var X=F-1>>>1,V=N[X];if(0<o(V,D))N[X]=D,N[F]=V,F=X;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var D=N[0],F=N.pop();if(F!==D){N[0]=F;e:for(var X=0,V=N.length,se=V>>>1;X<se;){var ue=2*(X+1)-1,Ve=N[ue],Fe=ue+1,Ge=N[Fe];if(0>o(Ve,F))Fe<V&&0>o(Ge,Ve)?(N[X]=Ge,N[Fe]=F,X=Fe):(N[X]=Ve,N[ue]=F,X=ue);else if(Fe<V&&0>o(Ge,F))N[X]=Ge,N[Fe]=F,X=Fe;else break e}}return D}function o(N,D){var F=N.sortIndex-D.sortIndex;return F!==0?F:N.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],d=1,f=null,h=3,k=!1,w=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=N)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function m(N){if(S=!1,v(N),!w)if(n(u)!==null)w=!0,Oe(C);else{var D=n(c);D!==null&&he(m,D.startTime-N)}}function C(N,D){w=!1,S&&(S=!1,g(O),O=-1),k=!0;var F=h;try{for(v(D),f=n(u);f!==null&&(!(f.expirationTime>D)||N&&!Z());){var X=f.callback;if(typeof X=="function"){f.callback=null,h=f.priorityLevel;var V=X(f.expirationTime<=D);D=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(u)&&r(u),v(D)}else r(u);f=n(u)}if(f!==null)var se=!0;else{var ue=n(c);ue!==null&&he(m,ue.startTime-D),se=!1}return se}finally{f=null,h=F,k=!1}}var T=!1,E=null,O=-1,M=5,z=-1;function Z(){return!(e.unstable_now()-z<M)}function Se(){if(E!==null){var N=e.unstable_now();z=N;var D=!0;try{D=E(!0,N)}finally{D?pe():(T=!1,E=null)}}else T=!1}var pe;if(typeof p=="function")pe=function(){p(Se)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ae=st.port2;st.port1.onmessage=Se,pe=function(){ae.postMessage(null)}}else pe=function(){P(Se,0)};function Oe(N){E=N,T||(T=!0,pe())}function he(N,D){O=P(function(){N(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,Oe(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var F=h;h=D;try{return N()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,D){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=h;h=N;try{return D()}finally{h=F}},e.unstable_scheduleCallback=function(N,D,F){var X=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?X+F:X):F=X,N){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=F+V,N={id:d++,callback:D,priorityLevel:N,startTime:F,expirationTime:V,sortIndex:-1},F>X?(N.sortIndex=F,t(c,N),n(u)===null&&N===n(c)&&(S?(g(O),O=-1):S=!0,he(m,F-X))):(N.sortIndex=V,t(u,N),w||k||(w=!0,Oe(C))),N},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(N){var D=h;return function(){var F=h;h=D;try{return N.apply(this,arguments)}finally{h=F}}}})(hg);pg.exports=hg;var Cx=pg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg=x,Tt=Cx;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gg=new Set,Hi={};function Kr(e,t){Lo(e,t),Lo(e+"Capture",t)}function Lo(e,t){for(Hi[e]=t,e=0;e<t.length;e++)gg.add(t[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=Object.prototype.hasOwnProperty,Ex=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},Tp={};function jx(e){return nc.call(Tp,e)?!0:nc.call(Pp,e)?!1:Ex.test(e)?Tp[e]=!0:(Pp[e]=!0,!1)}function Px(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tx(e,t,n,r){if(t===null||typeof t>"u"||Px(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ad=/[\-:]([a-z])/g;function Ld(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ad,Ld);et[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ad,Ld);et[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ad,Ld);et[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function Md(e,t,n,r){var o=et.hasOwnProperty(t)?et[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tx(t,n,o,r)&&(n=null),r||o===null?jx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ln=mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),so=Symbol.for("react.portal"),lo=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),rc=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),oc=Symbol.for("react.suspense"),ic=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),xg=Symbol.for("react.offscreen"),Rp=Symbol.iterator;function ai(e){return e===null||typeof e!="object"?null:(e=Rp&&e[Rp]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,su;function ki(e){if(su===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);su=t&&t[1]||""}return`
`+su+e}var lu=!1;function uu(e,t){if(!e||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ki(e):""}function Rx(e){switch(e.tag){case 5:return ki(e.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 2:case 15:return e=uu(e.type,!1),e;case 11:return e=uu(e.type.render,!1),e;case 1:return e=uu(e.type,!0),e;default:return""}}function ac(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lo:return"Fragment";case so:return"Portal";case rc:return"Profiler";case _d:return"StrictMode";case oc:return"Suspense";case ic:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yg:return(e.displayName||"Context")+".Consumer";case vg:return(e._context.displayName||"Context")+".Provider";case Dd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fd:return t=e.displayName||null,t!==null?t:ac(e.type)||"Memo";case Yn:t=e._payload,e=e._init;try{return ac(e(t))}catch{}}return null}function Nx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ac(t);case 8:return t===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ix(e){var t=wg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Da(e){e._valueTracker||(e._valueTracker=Ix(e))}function kg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sc(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Np(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ur(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sg(e,t){t=t.checked,t!=null&&Md(e,"checked",t,!1)}function lc(e,t){Sg(e,t);var n=ur(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?uc(e,t.type,n):t.hasOwnProperty("defaultValue")&&uc(e,t.type,ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ip(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function uc(e,t,n){(t!=="number"||Ms(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Si=Array.isArray;function Eo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ur(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function cc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Op(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Si(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ur(n)}}function bg(e,t){var n=ur(t.value),r=ur(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ap(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fa,Eg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ox=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(e){Ox.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ti[t]=Ti[e]})});function jg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ti.hasOwnProperty(e)&&Ti[e]?(""+t).trim():t+"px"}function Pg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=jg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ax=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(e,t){if(t){if(Ax[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function pc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hc=null;function $d(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mc=null,jo=null,Po=null;function Lp(e){if(e=xa(e)){if(typeof mc!="function")throw Error(I(280));var t=e.stateNode;t&&(t=bl(t),mc(e.stateNode,e.type,t))}}function Tg(e){jo?Po?Po.push(e):Po=[e]:jo=e}function Rg(){if(jo){var e=jo,t=Po;if(Po=jo=null,Lp(e),t)for(e=0;e<t.length;e++)Lp(t[e])}}function Ng(e,t){return e(t)}function Ig(){}var cu=!1;function Og(e,t,n){if(cu)return e(t,n);cu=!0;try{return Ng(e,t,n)}finally{cu=!1,(jo!==null||Po!==null)&&(Ig(),Rg())}}function Yi(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var gc=!1;if(jn)try{var si={};Object.defineProperty(si,"passive",{get:function(){gc=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{gc=!1}function Lx(e,t,n,r,o,i,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Ri=!1,_s=null,Ds=!1,vc=null,Mx={onError:function(e){Ri=!0,_s=e}};function _x(e,t,n,r,o,i,a,s,u){Ri=!1,_s=null,Lx.apply(Mx,arguments)}function Dx(e,t,n,r,o,i,a,s,u){if(_x.apply(this,arguments),Ri){if(Ri){var c=_s;Ri=!1,_s=null}else throw Error(I(198));Ds||(Ds=!0,vc=c)}}function Xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ag(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mp(e){if(Xr(e)!==e)throw Error(I(188))}function Fx(e){var t=e.alternate;if(!t){if(t=Xr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Mp(o),e;if(i===r)return Mp(o),t;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Lg(e){return e=Fx(e),e!==null?Mg(e):null}function Mg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mg(e);if(t!==null)return t;e=e.sibling}return null}var _g=Tt.unstable_scheduleCallback,_p=Tt.unstable_cancelCallback,$x=Tt.unstable_shouldYield,zx=Tt.unstable_requestPaint,_e=Tt.unstable_now,Ux=Tt.unstable_getCurrentPriorityLevel,zd=Tt.unstable_ImmediatePriority,Dg=Tt.unstable_UserBlockingPriority,Fs=Tt.unstable_NormalPriority,Bx=Tt.unstable_LowPriority,Fg=Tt.unstable_IdlePriority,xl=null,dn=null;function Hx(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:Vx,Wx=Math.log,Yx=Math.LN2;function Vx(e){return e>>>=0,e===0?32:31-(Wx(e)/Yx|0)|0}var $a=64,za=4194304;function bi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $s(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=bi(s):(i&=a,i!==0&&(r=bi(i)))}else a=n&~o,a!==0?r=bi(a):i!==0&&(r=bi(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Jt(t),o=1<<n,r|=e[n],t&=~o;return r}function Gx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Jt(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=Gx(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function yc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $g(){var e=$a;return $a<<=1,!($a&4194240)&&($a=64),e}function du(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function va(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Jt(t),e[t]=n}function Xx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Jt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ud(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Jt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function zg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ug,Bd,Bg,Hg,Wg,xc=!1,Ua=[],er=null,tr=null,nr=null,Vi=new Map,Gi=new Map,Kn=[],Qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dp(e,t){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(t.pointerId)}}function li(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=xa(t),t!==null&&Bd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zx(e,t,n,r,o){switch(t){case"focusin":return er=li(er,e,t,n,r,o),!0;case"dragenter":return tr=li(tr,e,t,n,r,o),!0;case"mouseover":return nr=li(nr,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vi.set(i,li(Vi.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Gi.set(i,li(Gi.get(i)||null,e,t,n,r,o)),!0}return!1}function Yg(e){var t=Pr(e.target);if(t!==null){var n=Xr(t);if(n!==null){if(t=n.tag,t===13){if(t=Ag(n),t!==null){e.blockedOn=t,Wg(e.priority,function(){Bg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hc=r,n.target.dispatchEvent(r),hc=null}else return t=xa(n),t!==null&&Bd(t),e.blockedOn=n,!1;t.shift()}return!0}function Fp(e,t,n){xs(e)&&n.delete(t)}function Jx(){xc=!1,er!==null&&xs(er)&&(er=null),tr!==null&&xs(tr)&&(tr=null),nr!==null&&xs(nr)&&(nr=null),Vi.forEach(Fp),Gi.forEach(Fp)}function ui(e,t){e.blockedOn===t&&(e.blockedOn=null,xc||(xc=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,Jx)))}function Ki(e){function t(o){return ui(o,e)}if(0<Ua.length){ui(Ua[0],e);for(var n=1;n<Ua.length;n++){var r=Ua[n];r.blockedOn===e&&(r.blockedOn=null)}}for(er!==null&&ui(er,e),tr!==null&&ui(tr,e),nr!==null&&ui(nr,e),Vi.forEach(t),Gi.forEach(t),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Yg(n),n.blockedOn===null&&Kn.shift()}var To=Ln.ReactCurrentBatchConfig,zs=!0;function qx(e,t,n,r){var o=ie,i=To.transition;To.transition=null;try{ie=1,Hd(e,t,n,r)}finally{ie=o,To.transition=i}}function ew(e,t,n,r){var o=ie,i=To.transition;To.transition=null;try{ie=4,Hd(e,t,n,r)}finally{ie=o,To.transition=i}}function Hd(e,t,n,r){if(zs){var o=wc(e,t,n,r);if(o===null)ku(e,t,r,Us,n),Dp(e,r);else if(Zx(o,e,t,n,r))r.stopPropagation();else if(Dp(e,r),t&4&&-1<Qx.indexOf(e)){for(;o!==null;){var i=xa(o);if(i!==null&&Ug(i),i=wc(e,t,n,r),i===null&&ku(e,t,r,Us,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ku(e,t,r,null,n)}}var Us=null;function wc(e,t,n,r){if(Us=null,e=$d(r),e=Pr(e),e!==null)if(t=Xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ag(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Us=e,null}function Vg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ux()){case zd:return 1;case Dg:return 4;case Fs:case Bx:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var Zn=null,Wd=null,ws=null;function Gg(){if(ws)return ws;var e,t=Wd,n=t.length,r,o="value"in Zn?Zn.value:Zn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ws=o.slice(e,1<r?1-r:void 0)}function ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ba(){return!0}function $p(){return!1}function Nt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ba:$p,this.isPropagationStopped=$p,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),t}var Xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=Nt(Xo),ya=Pe({},Xo,{view:0,detail:0}),tw=Nt(ya),fu,pu,ci,wl=Pe({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(fu=e.screenX-ci.screenX,pu=e.screenY-ci.screenY):pu=fu=0,ci=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),zp=Nt(wl),nw=Pe({},wl,{dataTransfer:0}),rw=Nt(nw),ow=Pe({},ya,{relatedTarget:0}),hu=Nt(ow),iw=Pe({},Xo,{animationName:0,elapsedTime:0,pseudoElement:0}),aw=Nt(iw),sw=Pe({},Xo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lw=Nt(sw),uw=Pe({},Xo,{data:0}),Up=Nt(uw),cw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fw[e])?!!t[e]:!1}function Vd(){return pw}var hw=Pe({},ya,{key:function(e){if(e.key){var t=cw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vd,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mw=Nt(hw),gw=Pe({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Nt(gw),vw=Pe({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vd}),yw=Nt(vw),xw=Pe({},Xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ww=Nt(xw),kw=Pe({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sw=Nt(kw),bw=[9,13,27,32],Gd=jn&&"CompositionEvent"in window,Ni=null;jn&&"documentMode"in document&&(Ni=document.documentMode);var Cw=jn&&"TextEvent"in window&&!Ni,Kg=jn&&(!Gd||Ni&&8<Ni&&11>=Ni),Hp=String.fromCharCode(32),Wp=!1;function Xg(e,t){switch(e){case"keyup":return bw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var uo=!1;function Ew(e,t){switch(e){case"compositionend":return Qg(t);case"keypress":return t.which!==32?null:(Wp=!0,Hp);case"textInput":return e=t.data,e===Hp&&Wp?null:e;default:return null}}function jw(e,t){if(uo)return e==="compositionend"||!Gd&&Xg(e,t)?(e=Gg(),ws=Wd=Zn=null,uo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kg&&t.locale!=="ko"?null:t.data;default:return null}}var Pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pw[e.type]:t==="textarea"}function Zg(e,t,n,r){Tg(r),t=Bs(t,"onChange"),0<t.length&&(n=new Yd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ii=null,Xi=null;function Tw(e){lv(e,0)}function kl(e){var t=po(e);if(kg(t))return e}function Rw(e,t){if(e==="change")return t}var Jg=!1;if(jn){var mu;if(jn){var gu="oninput"in document;if(!gu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),gu=typeof Vp.oninput=="function"}mu=gu}else mu=!1;Jg=mu&&(!document.documentMode||9<document.documentMode)}function Gp(){Ii&&(Ii.detachEvent("onpropertychange",qg),Xi=Ii=null)}function qg(e){if(e.propertyName==="value"&&kl(Xi)){var t=[];Zg(t,Xi,e,$d(e)),Og(Tw,t)}}function Nw(e,t,n){e==="focusin"?(Gp(),Ii=t,Xi=n,Ii.attachEvent("onpropertychange",qg)):e==="focusout"&&Gp()}function Iw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(Xi)}function Ow(e,t){if(e==="click")return kl(t)}function Aw(e,t){if(e==="input"||e==="change")return kl(t)}function Lw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tn=typeof Object.is=="function"?Object.is:Lw;function Qi(e,t){if(tn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!nc.call(t,o)||!tn(e[o],t[o]))return!1}return!0}function Kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xp(e,t){var n=Kp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kp(n)}}function ev(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ev(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tv(){for(var e=window,t=Ms();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ms(e.document)}return t}function Kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mw(e){var t=tv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ev(n.ownerDocument.documentElement,n)){if(r!==null&&Kd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Xp(n,i);var a=Xp(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _w=jn&&"documentMode"in document&&11>=document.documentMode,co=null,kc=null,Oi=null,Sc=!1;function Qp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sc||co==null||co!==Ms(r)||(r=co,"selectionStart"in r&&Kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oi&&Qi(Oi,r)||(Oi=r,r=Bs(kc,"onSelect"),0<r.length&&(t=new Yd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=co)))}function Ha(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fo={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},vu={},nv={};jn&&(nv=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function Sl(e){if(vu[e])return vu[e];if(!fo[e])return e;var t=fo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nv)return vu[e]=t[n];return e}var rv=Sl("animationend"),ov=Sl("animationiteration"),iv=Sl("animationstart"),av=Sl("transitionend"),sv=new Map,Zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(e,t){sv.set(e,t),Kr(t,[e])}for(var yu=0;yu<Zp.length;yu++){var xu=Zp[yu],Dw=xu.toLowerCase(),Fw=xu[0].toUpperCase()+xu.slice(1);mr(Dw,"on"+Fw)}mr(rv,"onAnimationEnd");mr(ov,"onAnimationIteration");mr(iv,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(av,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$w=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Jp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dx(r,t,void 0,e),e.currentTarget=null}function lv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Jp(o,s,c),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Jp(o,s,c),i=u}}}if(Ds)throw e=vc,Ds=!1,vc=null,e}function ve(e,t){var n=t[Pc];n===void 0&&(n=t[Pc]=new Set);var r=e+"__bubble";n.has(r)||(uv(t,e,2,!1),n.add(r))}function wu(e,t,n){var r=0;t&&(r|=4),uv(n,e,r,t)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[Wa]){e[Wa]=!0,gg.forEach(function(n){n!=="selectionchange"&&($w.has(n)||wu(n,!1,e),wu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wa]||(t[Wa]=!0,wu("selectionchange",!1,t))}}function uv(e,t,n,r){switch(Vg(t)){case 1:var o=qx;break;case 4:o=ew;break;default:o=Hd}n=o.bind(null,t,n,e),o=void 0,!gc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ku(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Pr(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Og(function(){var c=i,d=$d(n),f=[];e:{var h=sv.get(e);if(h!==void 0){var k=Yd,w=e;switch(e){case"keypress":if(ks(n)===0)break e;case"keydown":case"keyup":k=mw;break;case"focusin":w="focus",k=hu;break;case"focusout":w="blur",k=hu;break;case"beforeblur":case"afterblur":k=hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=yw;break;case rv:case ov:case iv:k=aw;break;case av:k=ww;break;case"scroll":k=tw;break;case"wheel":k=Sw;break;case"copy":case"cut":case"paste":k=lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Bp}var S=(t&4)!==0,P=!S&&e==="scroll",g=S?h!==null?h+"Capture":null:h;S=[];for(var p=c,v;p!==null;){v=p;var m=v.stateNode;if(v.tag===5&&m!==null&&(v=m,g!==null&&(m=Yi(p,g),m!=null&&S.push(Ji(p,m,v)))),P)break;p=p.return}0<S.length&&(h=new k(h,w,null,n,d),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==hc&&(w=n.relatedTarget||n.fromElement)&&(Pr(w)||w[Pn]))break e;if((k||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=c,w=w?Pr(w):null,w!==null&&(P=Xr(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=c),k!==w)){if(S=zp,m="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Bp,m="onPointerLeave",g="onPointerEnter",p="pointer"),P=k==null?h:po(k),v=w==null?h:po(w),h=new S(m,p+"leave",k,n,d),h.target=P,h.relatedTarget=v,m=null,Pr(d)===c&&(S=new S(g,p+"enter",w,n,d),S.target=v,S.relatedTarget=P,m=S),P=m,k&&w)t:{for(S=k,g=w,p=0,v=S;v;v=no(v))p++;for(v=0,m=g;m;m=no(m))v++;for(;0<p-v;)S=no(S),p--;for(;0<v-p;)g=no(g),v--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break t;S=no(S),g=no(g)}S=null}else S=null;k!==null&&qp(f,h,k,S,!1),w!==null&&P!==null&&qp(f,P,w,S,!0)}}e:{if(h=c?po(c):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var C=Rw;else if(Yp(h))if(Jg)C=Aw;else{C=Iw;var T=Nw}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Ow);if(C&&(C=C(e,c))){Zg(f,C,n,d);break e}T&&T(e,h,c),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&uc(h,"number",h.value)}switch(T=c?po(c):window,e){case"focusin":(Yp(T)||T.contentEditable==="true")&&(co=T,kc=c,Oi=null);break;case"focusout":Oi=kc=co=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Qp(f,n,d);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":Qp(f,n,d)}var E;if(Gd)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else uo?Xg(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Kg&&n.locale!=="ko"&&(uo||O!=="onCompositionStart"?O==="onCompositionEnd"&&uo&&(E=Gg()):(Zn=d,Wd="value"in Zn?Zn.value:Zn.textContent,uo=!0)),T=Bs(c,O),0<T.length&&(O=new Up(O,e,null,n,d),f.push({event:O,listeners:T}),E?O.data=E:(E=Qg(n),E!==null&&(O.data=E)))),(E=Cw?Ew(e,n):jw(e,n))&&(c=Bs(c,"onBeforeInput"),0<c.length&&(d=new Up("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}lv(f,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yi(e,n),i!=null&&r.unshift(Ji(e,i,o)),i=Yi(e,t),i!=null&&r.push(Ji(e,i,o))),e=e.return}return r}function no(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qp(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=Yi(n,i),u!=null&&a.unshift(Ji(n,u,s))):o||(u=Yi(n,i),u!=null&&a.push(Ji(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var zw=/\r\n?/g,Uw=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(zw,`
`).replace(Uw,"")}function Ya(e,t,n){if(t=eh(t),eh(e)!==t&&n)throw Error(I(425))}function Hs(){}var bc=null,Cc=null;function Ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,Bw=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,Hw=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(e){return th.resolve(null).then(e).catch(Ww)}:jc;function Ww(e){setTimeout(function(){throw e})}function Su(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ki(t)}function rr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),ln="__reactFiber$"+Qo,qi="__reactProps$"+Qo,Pn="__reactContainer$"+Qo,Pc="__reactEvents$"+Qo,Yw="__reactListeners$"+Qo,Vw="__reactHandles$"+Qo;function Pr(e){var t=e[ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pn]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nh(e);e!==null;){if(n=e[ln])return n;e=nh(e)}return t}e=n,n=e.parentNode}return null}function xa(e){return e=e[ln]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function po(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function bl(e){return e[qi]||null}var Tc=[],ho=-1;function gr(e){return{current:e}}function we(e){0>ho||(e.current=Tc[ho],Tc[ho]=null,ho--)}function fe(e,t){ho++,Tc[ho]=e.current,e.current=t}var cr={},at=gr(cr),yt=gr(!1),$r=cr;function Mo(e,t){var n=e.type.contextTypes;if(!n)return cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function xt(e){return e=e.childContextTypes,e!=null}function Ws(){we(yt),we(at)}function rh(e,t,n){if(at.current!==cr)throw Error(I(168));fe(at,t),fe(yt,n)}function cv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,Nx(e)||"Unknown",o));return Pe({},n,r)}function Ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,$r=at.current,fe(at,e),fe(yt,yt.current),!0}function oh(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=cv(e,t,$r),r.__reactInternalMemoizedMergedChildContext=e,we(yt),we(at),fe(at,e)):we(yt),fe(yt,n)}var xn=null,Cl=!1,bu=!1;function dv(e){xn===null?xn=[e]:xn.push(e)}function Gw(e){Cl=!0,dv(e)}function vr(){if(!bu&&xn!==null){bu=!0;var e=0,t=ie;try{var n=xn;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xn=null,Cl=!1}catch(o){throw xn!==null&&(xn=xn.slice(e+1)),_g(zd,vr),o}finally{ie=t,bu=!1}}return null}var mo=[],go=0,Vs=null,Gs=0,_t=[],Dt=0,zr=null,wn=1,kn="";function br(e,t){mo[go++]=Gs,mo[go++]=Vs,Vs=e,Gs=t}function fv(e,t,n){_t[Dt++]=wn,_t[Dt++]=kn,_t[Dt++]=zr,zr=e;var r=wn;e=kn;var o=32-Jt(r)-1;r&=~(1<<o),n+=1;var i=32-Jt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,wn=1<<32-Jt(t)+o|n<<o|r,kn=i+e}else wn=1<<i|n<<o|r,kn=e}function Xd(e){e.return!==null&&(br(e,1),fv(e,1,0))}function Qd(e){for(;e===Vs;)Vs=mo[--go],mo[go]=null,Gs=mo[--go],mo[go]=null;for(;e===zr;)zr=_t[--Dt],_t[Dt]=null,kn=_t[--Dt],_t[Dt]=null,wn=_t[--Dt],_t[Dt]=null}var jt=null,Et=null,be=!1,Qt=null;function pv(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ih(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Et=rr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zr!==null?{id:wn,overflow:kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,Et=null,!0):!1;default:return!1}}function Rc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nc(e){if(be){var t=Et;if(t){var n=t;if(!ih(e,t)){if(Rc(e))throw Error(I(418));t=rr(n.nextSibling);var r=jt;t&&ih(e,t)?pv(r,n):(e.flags=e.flags&-4097|2,be=!1,jt=e)}}else{if(Rc(e))throw Error(I(418));e.flags=e.flags&-4097|2,be=!1,jt=e}}}function ah(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function Va(e){if(e!==jt)return!1;if(!be)return ah(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ec(e.type,e.memoizedProps)),t&&(t=Et)){if(Rc(e))throw hv(),Error(I(418));for(;t;)pv(e,t),t=rr(t.nextSibling)}if(ah(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Et=rr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=jt?rr(e.stateNode.nextSibling):null;return!0}function hv(){for(var e=Et;e;)e=rr(e.nextSibling)}function _o(){Et=jt=null,be=!1}function Zd(e){Qt===null?Qt=[e]:Qt.push(e)}var Kw=Ln.ReactCurrentBatchConfig;function Gt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ks=gr(null),Xs=null,vo=null,Jd=null;function qd(){Jd=vo=Xs=null}function ef(e){var t=Ks.current;we(Ks),e._currentValue=t}function Ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ro(e,t){Xs=e,Jd=vo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(Jd!==e)if(e={context:e,memoizedValue:t,next:null},vo===null){if(Xs===null)throw Error(I(308));vo=e,Xs.dependencies={lanes:0,firstContext:e}}else vo=vo.next=e;return t}var Tr=null;function tf(e){Tr===null?Tr=[e]:Tr.push(e)}function mv(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,tf(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tn(e,r)}function Tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vn=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tn(e,n)}return o=r.interleaved,o===null?(t.next=t,tf(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tn(e,n)}function Ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ud(e,n)}}function sh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qs(e,t,n,r){var o=e.updateQueue;Vn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;a=0,d=c=u=null,s=i;do{var h=s.lane,k=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,S=s;switch(h=t,k=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(k,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,h=typeof w=="function"?w.call(k,f,h):w,h==null)break e;f=Pe({},f,h);break e;case 2:Vn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=k,u=f):d=d.next=k,a|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(d===null&&(u=f),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Br|=a,e.lanes=a,e.memoizedState=f}}function lh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var vv=new mg.Component().refs;function Oc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var El={isMounted:function(e){return(e=e._reactInternals)?Xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),o=ar(e),i=Sn(r,o);i.payload=t,n!=null&&(i.callback=n),t=or(e,i,o),t!==null&&(qt(t,e,o,r),Ss(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),o=ar(e),i=Sn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=or(e,i,o),t!==null&&(qt(t,e,o,r),Ss(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=ar(e),o=Sn(n,r);o.tag=2,t!=null&&(o.callback=t),t=or(e,o,r),t!==null&&(qt(t,e,r,n),Ss(t,e,r))}};function uh(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(o,i):!0}function yv(e,t,n){var r=!1,o=cr,i=t.contextType;return typeof i=="object"&&i!==null?i=Ut(i):(o=xt(t)?$r:at.current,r=t.contextTypes,i=(r=r!=null)?Mo(e,o):cr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=El,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ch(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&El.enqueueReplaceState(t,t.state,null)}function Ac(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=vv,nf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ut(i):(i=xt(t)?$r:at.current,o.context=Mo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&El.enqueueReplaceState(o,o.state,null),Qs(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function di(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===vv&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ga(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dh(e){var t=e._init;return t(e._payload)}function xv(e){function t(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=sr(g,p),g.index=0,g.sibling=null,g}function i(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,v,m){return p===null||p.tag!==6?(p=Nu(v,g.mode,m),p.return=g,p):(p=o(p,v),p.return=g,p)}function u(g,p,v,m){var C=v.type;return C===lo?d(g,p,v.props.children,m,v.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yn&&dh(C)===p.type)?(m=o(p,v.props),m.ref=di(g,p,v),m.return=g,m):(m=Ts(v.type,v.key,v.props,null,g.mode,m),m.ref=di(g,p,v),m.return=g,m)}function c(g,p,v,m){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Iu(v,g.mode,m),p.return=g,p):(p=o(p,v.children||[]),p.return=g,p)}function d(g,p,v,m,C){return p===null||p.tag!==7?(p=_r(v,g.mode,m,C),p.return=g,p):(p=o(p,v),p.return=g,p)}function f(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Nu(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _a:return v=Ts(p.type,p.key,p.props,null,g.mode,v),v.ref=di(g,null,p),v.return=g,v;case so:return p=Iu(p,g.mode,v),p.return=g,p;case Yn:var m=p._init;return f(g,m(p._payload),v)}if(Si(p)||ai(p))return p=_r(p,g.mode,v,null),p.return=g,p;Ga(g,p)}return null}function h(g,p,v,m){var C=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:s(g,p,""+v,m);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:return v.key===C?u(g,p,v,m):null;case so:return v.key===C?c(g,p,v,m):null;case Yn:return C=v._init,h(g,p,C(v._payload),m)}if(Si(v)||ai(v))return C!==null?null:d(g,p,v,m,null);Ga(g,v)}return null}function k(g,p,v,m,C){if(typeof m=="string"&&m!==""||typeof m=="number")return g=g.get(v)||null,s(p,g,""+m,C);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _a:return g=g.get(m.key===null?v:m.key)||null,u(p,g,m,C);case so:return g=g.get(m.key===null?v:m.key)||null,c(p,g,m,C);case Yn:var T=m._init;return k(g,p,v,T(m._payload),C)}if(Si(m)||ai(m))return g=g.get(v)||null,d(p,g,m,C,null);Ga(p,m)}return null}function w(g,p,v,m){for(var C=null,T=null,E=p,O=p=0,M=null;E!==null&&O<v.length;O++){E.index>O?(M=E,E=null):M=E.sibling;var z=h(g,E,v[O],m);if(z===null){E===null&&(E=M);break}e&&E&&z.alternate===null&&t(g,E),p=i(z,p,O),T===null?C=z:T.sibling=z,T=z,E=M}if(O===v.length)return n(g,E),be&&br(g,O),C;if(E===null){for(;O<v.length;O++)E=f(g,v[O],m),E!==null&&(p=i(E,p,O),T===null?C=E:T.sibling=E,T=E);return be&&br(g,O),C}for(E=r(g,E);O<v.length;O++)M=k(E,g,O,v[O],m),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?O:M.key),p=i(M,p,O),T===null?C=M:T.sibling=M,T=M);return e&&E.forEach(function(Z){return t(g,Z)}),be&&br(g,O),C}function S(g,p,v,m){var C=ai(v);if(typeof C!="function")throw Error(I(150));if(v=C.call(v),v==null)throw Error(I(151));for(var T=C=null,E=p,O=p=0,M=null,z=v.next();E!==null&&!z.done;O++,z=v.next()){E.index>O?(M=E,E=null):M=E.sibling;var Z=h(g,E,z.value,m);if(Z===null){E===null&&(E=M);break}e&&E&&Z.alternate===null&&t(g,E),p=i(Z,p,O),T===null?C=Z:T.sibling=Z,T=Z,E=M}if(z.done)return n(g,E),be&&br(g,O),C;if(E===null){for(;!z.done;O++,z=v.next())z=f(g,z.value,m),z!==null&&(p=i(z,p,O),T===null?C=z:T.sibling=z,T=z);return be&&br(g,O),C}for(E=r(g,E);!z.done;O++,z=v.next())z=k(E,g,O,z.value,m),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?O:z.key),p=i(z,p,O),T===null?C=z:T.sibling=z,T=z);return e&&E.forEach(function(Se){return t(g,Se)}),be&&br(g,O),C}function P(g,p,v,m){if(typeof v=="object"&&v!==null&&v.type===lo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:e:{for(var C=v.key,T=p;T!==null;){if(T.key===C){if(C=v.type,C===lo){if(T.tag===7){n(g,T.sibling),p=o(T,v.props.children),p.return=g,g=p;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yn&&dh(C)===T.type){n(g,T.sibling),p=o(T,v.props),p.ref=di(g,T,v),p.return=g,g=p;break e}n(g,T);break}else t(g,T);T=T.sibling}v.type===lo?(p=_r(v.props.children,g.mode,m,v.key),p.return=g,g=p):(m=Ts(v.type,v.key,v.props,null,g.mode,m),m.ref=di(g,p,v),m.return=g,g=m)}return a(g);case so:e:{for(T=v.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=o(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Iu(v,g.mode,m),p.return=g,g=p}return a(g);case Yn:return T=v._init,P(g,p,T(v._payload),m)}if(Si(v))return w(g,p,v,m);if(ai(v))return S(g,p,v,m);Ga(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=o(p,v),p.return=g,g=p):(n(g,p),p=Nu(v,g.mode,m),p.return=g,g=p),a(g)):n(g,p)}return P}var Do=xv(!0),wv=xv(!1),wa={},fn=gr(wa),ea=gr(wa),ta=gr(wa);function Rr(e){if(e===wa)throw Error(I(174));return e}function rf(e,t){switch(fe(ta,t),fe(ea,e),fe(fn,wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dc(t,e)}we(fn),fe(fn,t)}function Fo(){we(fn),we(ea),we(ta)}function kv(e){Rr(ta.current);var t=Rr(fn.current),n=dc(t,e.type);t!==n&&(fe(ea,e),fe(fn,n))}function of(e){ea.current===e&&(we(fn),we(ea))}var Ee=gr(0);function Zs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cu=[];function af(){for(var e=0;e<Cu.length;e++)Cu[e]._workInProgressVersionPrimary=null;Cu.length=0}var bs=Ln.ReactCurrentDispatcher,Eu=Ln.ReactCurrentBatchConfig,Ur=0,je=null,He=null,Ke=null,Js=!1,Ai=!1,na=0,Xw=0;function nt(){throw Error(I(321))}function sf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tn(e[n],t[n]))return!1;return!0}function lf(e,t,n,r,o,i){if(Ur=i,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bs.current=e===null||e.memoizedState===null?qw:e2,e=n(r,o),Ai){i=0;do{if(Ai=!1,na=0,25<=i)throw Error(I(301));i+=1,Ke=He=null,t.updateQueue=null,bs.current=t2,e=n(r,o)}while(Ai)}if(bs.current=qs,t=He!==null&&He.next!==null,Ur=0,Ke=He=je=null,Js=!1,t)throw Error(I(300));return e}function uf(){var e=na!==0;return na=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?je.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Bt(){if(He===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ke===null?je.memoizedState:Ke.next;if(t!==null)Ke=t,He=e;else{if(e===null)throw Error(I(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ke===null?je.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function ra(e,t){return typeof t=="function"?t(e):t}function ju(e){var t=Bt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=He,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,c=i;do{var d=c.lane;if((Ur&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=f,a=r):u=u.next=f,je.lanes|=d,Br|=d}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=s,tn(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,je.lanes|=i,Br|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pu(e){var t=Bt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);tn(i,t.memoizedState)||(vt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sv(){}function bv(e,t){var n=je,r=Bt(),o=t(),i=!tn(r.memoizedState,o);if(i&&(r.memoizedState=o,vt=!0),r=r.queue,cf(jv.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,oa(9,Ev.bind(null,n,r,o,t),void 0,null),Qe===null)throw Error(I(349));Ur&30||Cv(n,t,o)}return o}function Cv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ev(e,t,n,r){t.value=n,t.getSnapshot=r,Pv(t)&&Tv(e)}function jv(e,t,n){return n(function(){Pv(t)&&Tv(e)})}function Pv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tn(e,n)}catch{return!0}}function Tv(e){var t=Tn(e,1);t!==null&&qt(t,e,1,-1)}function fh(e){var t=an();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t.queue=e,e=e.dispatch=Jw.bind(null,je,e),[t.memoizedState,e]}function oa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rv(){return Bt().memoizedState}function Cs(e,t,n,r){var o=an();je.flags|=e,o.memoizedState=oa(1|t,n,void 0,r===void 0?null:r)}function jl(e,t,n,r){var o=Bt();r=r===void 0?null:r;var i=void 0;if(He!==null){var a=He.memoizedState;if(i=a.destroy,r!==null&&sf(r,a.deps)){o.memoizedState=oa(t,n,i,r);return}}je.flags|=e,o.memoizedState=oa(1|t,n,i,r)}function ph(e,t){return Cs(8390656,8,e,t)}function cf(e,t){return jl(2048,8,e,t)}function Nv(e,t){return jl(4,2,e,t)}function Iv(e,t){return jl(4,4,e,t)}function Ov(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Av(e,t,n){return n=n!=null?n.concat([e]):null,jl(4,4,Ov.bind(null,t,e),n)}function df(){}function Lv(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mv(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _v(e,t,n){return Ur&21?(tn(n,t)||(n=$g(),je.lanes|=n,Br|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n)}function Qw(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=Eu.transition;Eu.transition={};try{e(!1),t()}finally{ie=n,Eu.transition=r}}function Dv(){return Bt().memoizedState}function Zw(e,t,n){var r=ar(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fv(e))$v(t,n);else if(n=mv(e,t,n,r),n!==null){var o=dt();qt(n,e,r,o),zv(n,t,r)}}function Jw(e,t,n){var r=ar(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fv(e))$v(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,tn(s,a)){var u=t.interleaved;u===null?(o.next=o,tf(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=mv(e,t,o,r),n!==null&&(o=dt(),qt(n,e,r,o),zv(n,t,r))}}function Fv(e){var t=e.alternate;return e===je||t!==null&&t===je}function $v(e,t){Ai=Js=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ud(e,n)}}var qs={readContext:Ut,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},qw={readContext:Ut,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:ph,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cs(4194308,4,Ov.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cs(4,2,e,t)},useMemo:function(e,t){var n=an();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=an();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zw.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:fh,useDebugValue:df,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=fh(!1),t=e[0];return e=Qw.bind(null,e[1]),an().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,o=an();if(be){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Qe===null)throw Error(I(349));Ur&30||Cv(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ph(jv.bind(null,r,i,e),[e]),r.flags|=2048,oa(9,Ev.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=an(),t=Qe.identifierPrefix;if(be){var n=kn,r=wn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=na++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e2={readContext:Ut,useCallback:Lv,useContext:Ut,useEffect:cf,useImperativeHandle:Av,useInsertionEffect:Nv,useLayoutEffect:Iv,useMemo:Mv,useReducer:ju,useRef:Rv,useState:function(){return ju(ra)},useDebugValue:df,useDeferredValue:function(e){var t=Bt();return _v(t,He.memoizedState,e)},useTransition:function(){var e=ju(ra)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:Sv,useSyncExternalStore:bv,useId:Dv,unstable_isNewReconciler:!1},t2={readContext:Ut,useCallback:Lv,useContext:Ut,useEffect:cf,useImperativeHandle:Av,useInsertionEffect:Nv,useLayoutEffect:Iv,useMemo:Mv,useReducer:Pu,useRef:Rv,useState:function(){return Pu(ra)},useDebugValue:df,useDeferredValue:function(e){var t=Bt();return He===null?t.memoizedState=e:_v(t,He.memoizedState,e)},useTransition:function(){var e=Pu(ra)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:Sv,useSyncExternalStore:bv,useId:Dv,unstable_isNewReconciler:!1};function $o(e,t){try{var n="",r=t;do n+=Rx(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Tu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Lc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n2=typeof WeakMap=="function"?WeakMap:Map;function Uv(e,t,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Wc=r),Lc(e,t)},n}function Bv(e,t,n){n=Sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Lc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Lc(e,t),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function hh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n2;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=g2.bind(null,e,t,n),t.then(e,e))}function mh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gh(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Sn(-1,1),t.tag=2,or(n,t,1))),n.lanes|=1),e)}var r2=Ln.ReactCurrentOwner,vt=!1;function ut(e,t,n,r){t.child=e===null?wv(t,null,n,r):Do(t,e.child,n,r)}function vh(e,t,n,r,o){n=n.render;var i=t.ref;return Ro(t,o),r=lf(e,t,n,r,i,o),n=uf(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rn(e,t,o)):(be&&n&&Xd(t),t.flags|=1,ut(e,t,r,o),t.child)}function yh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!xf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Hv(e,t,i,r,o)):(e=Ts(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(a,r)&&e.ref===t.ref)return Rn(e,t,o)}return t.flags|=1,e=sr(i,r),e.ref=t.ref,e.return=t,t.child=e}function Hv(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Qi(i,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,Rn(e,t,o)}return Mc(e,t,n,r,o)}function Wv(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(xo,Ct),Ct|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(xo,Ct),Ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(xo,Ct),Ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,fe(xo,Ct),Ct|=r;return ut(e,t,o,n),t.child}function Yv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mc(e,t,n,r,o){var i=xt(n)?$r:at.current;return i=Mo(t,i),Ro(t,o),n=lf(e,t,n,r,i,o),r=uf(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rn(e,t,o)):(be&&r&&Xd(t),t.flags|=1,ut(e,t,n,o),t.child)}function xh(e,t,n,r,o){if(xt(n)){var i=!0;Ys(t)}else i=!1;if(Ro(t,o),t.stateNode===null)Es(e,t),yv(t,n,r),Ac(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ut(c):(c=xt(n)?$r:at.current,c=Mo(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&ch(t,a,r,c),Vn=!1;var h=t.memoizedState;a.state=h,Qs(t,r,a,o),u=t.memoizedState,s!==r||h!==u||yt.current||Vn?(typeof d=="function"&&(Oc(t,n,d,r),u=t.memoizedState),(s=Vn||uh(t,n,s,r,h,u,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,gv(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Gt(t.type,s),a.props=c,f=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=xt(n)?$r:at.current,u=Mo(t,u));var k=n.getDerivedStateFromProps;(d=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==u)&&ch(t,a,r,u),Vn=!1,h=t.memoizedState,a.state=h,Qs(t,r,a,o);var w=t.memoizedState;s!==f||h!==w||yt.current||Vn?(typeof k=="function"&&(Oc(t,n,k,r),w=t.memoizedState),(c=Vn||uh(t,n,c,r,h,w,u)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return _c(e,t,n,r,i,o)}function _c(e,t,n,r,o,i){Yv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&oh(t,n,!1),Rn(e,t,i);r=t.stateNode,r2.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Do(t,e.child,null,i),t.child=Do(t,null,s,i)):ut(e,t,s,i),t.memoizedState=r.state,o&&oh(t,n,!0),t.child}function Vv(e){var t=e.stateNode;t.pendingContext?rh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rh(e,t.context,!1),rf(e,t.containerInfo)}function wh(e,t,n,r,o){return _o(),Zd(o),t.flags|=256,ut(e,t,n,r),t.child}var Dc={dehydrated:null,treeContext:null,retryLane:0};function Fc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gv(e,t,n){var r=t.pendingProps,o=Ee.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),fe(Ee,o&1),e===null)return Nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Rl(a,r,0,null),e=_r(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fc(n),t.memoizedState=Dc,e):ff(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return o2(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=sr(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=sr(s,i):(i=_r(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Fc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Dc,r}return i=e.child,e=i.sibling,r=sr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ff(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ka(e,t,n,r){return r!==null&&Zd(r),Do(t,e.child,null,n),e=ff(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o2(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Tu(Error(I(422))),Ka(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Rl({mode:"visible",children:r.children},o,0,null),i=_r(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Do(t,e.child,null,a),t.child.memoizedState=Fc(a),t.memoizedState=Dc,i);if(!(t.mode&1))return Ka(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(I(419)),r=Tu(i,r,void 0),Ka(e,t,a,r)}if(s=(a&e.childLanes)!==0,vt||s){if(r=Qe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tn(e,o),qt(r,e,o,-1))}return yf(),r=Tu(Error(I(421))),Ka(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=v2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Et=rr(o.nextSibling),jt=t,be=!0,Qt=null,e!==null&&(_t[Dt++]=wn,_t[Dt++]=kn,_t[Dt++]=zr,wn=e.id,kn=e.overflow,zr=t),t=ff(t,r.children),t.flags|=4096,t)}function kh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ic(e.return,t,n)}function Ru(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Kv(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ut(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kh(e,n,t);else if(e.tag===19)kh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zs(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ru(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zs(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ru(t,!0,n,null,i);break;case"together":Ru(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Es(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Br|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=sr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function i2(e,t,n){switch(t.tag){case 3:Vv(t),_o();break;case 5:kv(t);break;case 1:xt(t.type)&&Ys(t);break;case 4:rf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;fe(Ks,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?Gv(e,t,n):(fe(Ee,Ee.current&1),e=Rn(e,t,n),e!==null?e.sibling:null);fe(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kv(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),fe(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Wv(e,t,n)}return Rn(e,t,n)}var Xv,$c,Qv,Zv;Xv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$c=function(){};Qv=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Rr(fn.current);var i=null;switch(n){case"input":o=sc(e,o),r=sc(e,r),i=[];break;case"select":o=Pe({},o,{value:void 0}),r=Pe({},r,{value:void 0}),i=[];break;case"textarea":o=cc(e,o),r=cc(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hs)}fc(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Zv=function(e,t,n,r){n!==r&&(t.flags|=4)};function fi(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function a2(e,t,n){var r=t.pendingProps;switch(Qd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return xt(t.type)&&Ws(),rt(t),null;case 3:return r=t.stateNode,Fo(),we(yt),we(at),af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qt!==null&&(Gc(Qt),Qt=null))),$c(e,t),rt(t),null;case 5:of(t);var o=Rr(ta.current);if(n=t.type,e!==null&&t.stateNode!=null)Qv(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return rt(t),null}if(e=Rr(fn.current),Va(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ln]=t,r[qi]=i,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(o=0;o<Ci.length;o++)ve(Ci[o],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Np(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":Op(r,i),ve("invalid",r)}fc(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ya(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ya(r.textContent,s,e),o=["children",""+s]):Hi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":Da(r),Ip(r,i,!0);break;case"textarea":Da(r),Ap(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Hs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ln]=t,e[qi]=r,Xv(e,t,!1,!1),t.stateNode=e;e:{switch(a=pc(n,r),n){case"dialog":ve("cancel",e),ve("close",e),o=r;break;case"iframe":case"object":case"embed":ve("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ci.length;o++)ve(Ci[o],e);o=r;break;case"source":ve("error",e),o=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),o=r;break;case"details":ve("toggle",e),o=r;break;case"input":Np(e,r),o=sc(e,r),ve("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Pe({},r,{value:void 0}),ve("invalid",e);break;case"textarea":Op(e,r),o=cc(e,r),ve("invalid",e);break;default:o=r}fc(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Pg(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Eg(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wi(e,u):typeof u=="number"&&Wi(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Hi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ve("scroll",e):u!=null&&Md(e,i,u,a))}switch(n){case"input":Da(e),Ip(e,r,!1);break;case"textarea":Da(e),Ap(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ur(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Eo(e,!!r.multiple,i,!1):r.defaultValue!=null&&Eo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Hs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Zv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Rr(ta.current),Rr(fn.current),Va(t)){if(r=t.stateNode,n=t.memoizedProps,r[ln]=t,(i=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:Ya(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=t,t.stateNode=r}return rt(t),null;case 13:if(we(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Et!==null&&t.mode&1&&!(t.flags&128))hv(),_o(),t.flags|=98560,i=!1;else if(i=Va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[ln]=t}else _o(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),i=!1}else Qt!==null&&(Gc(Qt),Qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?We===0&&(We=3):yf())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return Fo(),$c(e,t),e===null&&Zi(t.stateNode.containerInfo),rt(t),null;case 10:return ef(t.type._context),rt(t),null;case 17:return xt(t.type)&&Ws(),rt(t),null;case 19:if(we(Ee),i=t.memoizedState,i===null)return rt(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)fi(i,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Zs(e),a!==null){for(t.flags|=128,fi(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&_e()>zo&&(t.flags|=128,r=!0,fi(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!be)return rt(t),null}else 2*_e()-i.renderingStartTime>zo&&n!==1073741824&&(t.flags|=128,r=!0,fi(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=_e(),t.sibling=null,n=Ee.current,fe(Ee,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return vf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ct&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function s2(e,t){switch(Qd(t),t.tag){case 1:return xt(t.type)&&Ws(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fo(),we(yt),we(at),af(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return of(t),null;case 13:if(we(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));_o()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ee),null;case 4:return Fo(),null;case 10:return ef(t.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var Xa=!1,ot=!1,l2=typeof WeakSet=="function"?WeakSet:Set,_=null;function yo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function zc(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Sh=!1;function u2(e,t){if(bc=zs,e=tv(),Kd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var k;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(k=f.firstChild)!==null;)h=f,f=k;for(;;){if(f===e)break t;if(h===n&&++c===o&&(s=a),h===i&&++d===r&&(u=a),(k=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cc={focusedElem:e,selectionRange:n},zs=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,P=w.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:Gt(t.type,S),P);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(m){Te(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=Sh,Sh=!1,w}function Li(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&zc(t,n,i)}o=o.next}while(o!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Uc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jv(e){var t=e.alternate;t!==null&&(e.alternate=null,Jv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ln],delete t[qi],delete t[Pc],delete t[Yw],delete t[Vw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qv(e){return e.tag===5||e.tag===3||e.tag===4}function bh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hs));else if(r!==4&&(e=e.child,e!==null))for(Bc(e,t,n),e=e.sibling;e!==null;)Bc(e,t,n),e=e.sibling}function Hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}var Je=null,Kt=!1;function Un(e,t,n){for(n=n.child;n!==null;)e0(e,t,n),n=n.sibling}function e0(e,t,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:ot||yo(n,t);case 6:var r=Je,o=Kt;Je=null,Un(e,t,n),Je=r,Kt=o,Je!==null&&(Kt?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Kt?(e=Je,n=n.stateNode,e.nodeType===8?Su(e.parentNode,n):e.nodeType===1&&Su(e,n),Ki(e)):Su(Je,n.stateNode));break;case 4:r=Je,o=Kt,Je=n.stateNode.containerInfo,Kt=!0,Un(e,t,n),Je=r,Kt=o;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&zc(n,t,a),o=o.next}while(o!==r)}Un(e,t,n);break;case 1:if(!ot&&(yo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Te(n,t,s)}Un(e,t,n);break;case 21:Un(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Un(e,t,n),ot=r):Un(e,t,n);break;default:Un(e,t,n)}}function Ch(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l2),t.forEach(function(r){var o=y2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Je=s.stateNode,Kt=!1;break e;case 3:Je=s.stateNode.containerInfo,Kt=!0;break e;case 4:Je=s.stateNode.containerInfo,Kt=!0;break e}s=s.return}if(Je===null)throw Error(I(160));e0(i,a,o),Je=null,Kt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){Te(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)t0(t,e),t=t.sibling}function t0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(t,e),on(e),r&4){try{Li(3,e,e.return),Pl(3,e)}catch(S){Te(e,e.return,S)}try{Li(5,e,e.return)}catch(S){Te(e,e.return,S)}}break;case 1:Vt(t,e),on(e),r&512&&n!==null&&yo(n,n.return);break;case 5:if(Vt(t,e),on(e),r&512&&n!==null&&yo(n,n.return),e.flags&32){var o=e.stateNode;try{Wi(o,"")}catch(S){Te(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Sg(o,i),pc(s,a);var c=pc(s,i);for(a=0;a<u.length;a+=2){var d=u[a],f=u[a+1];d==="style"?Pg(o,f):d==="dangerouslySetInnerHTML"?Eg(o,f):d==="children"?Wi(o,f):Md(o,d,f,c)}switch(s){case"input":lc(o,i);break;case"textarea":bg(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Eo(o,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?Eo(o,!!i.multiple,i.defaultValue,!0):Eo(o,!!i.multiple,i.multiple?[]:"",!1))}o[qi]=i}catch(S){Te(e,e.return,S)}}break;case 6:if(Vt(t,e),on(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){Te(e,e.return,S)}}break;case 3:if(Vt(t,e),on(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ki(t.containerInfo)}catch(S){Te(e,e.return,S)}break;case 4:Vt(t,e),on(e);break;case 13:Vt(t,e),on(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(mf=_e())),r&4&&Ch(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(c=ot)||d,Vt(t,e),ot=c):Vt(t,e),on(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(f=_=d;_!==null;){switch(h=_,k=h.child,h.tag){case 0:case 11:case 14:case 15:Li(4,h,h.return);break;case 1:yo(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){Te(r,n,S)}}break;case 5:yo(h,h.return);break;case 22:if(h.memoizedState!==null){jh(f);continue}}k!==null?(k.return=h,_=k):jh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=jg("display",a))}catch(S){Te(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Te(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vt(t,e),on(e),r&4&&Ch(e);break;case 21:break;default:Vt(t,e),on(e)}}function on(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qv(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wi(o,""),r.flags&=-33);var i=bh(e);Hc(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=bh(e);Bc(e,s,a);break;default:throw Error(I(161))}}catch(u){Te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c2(e,t,n){_=e,n0(e)}function n0(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Xa;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ot;s=Xa;var c=ot;if(Xa=a,(ot=u)&&!c)for(_=o;_!==null;)a=_,u=a.child,a.tag===22&&a.memoizedState!==null?Ph(o):u!==null?(u.return=a,_=u):Ph(o);for(;i!==null;)_=i,n0(i),i=i.sibling;_=o,Xa=s,ot=c}Eh(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):Eh(e)}}function Eh(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Gt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&lh(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ki(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ot||t.flags&512&&Uc(t)}catch(h){Te(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function jh(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Ph(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(u){Te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Te(t,o,u)}}var i=t.return;try{Uc(t)}catch(u){Te(t,i,u)}break;case 5:var a=t.return;try{Uc(t)}catch(u){Te(t,a,u)}}}catch(u){Te(t,t.return,u)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var d2=Math.ceil,el=Ln.ReactCurrentDispatcher,pf=Ln.ReactCurrentOwner,$t=Ln.ReactCurrentBatchConfig,ne=0,Qe=null,Ue=null,qe=0,Ct=0,xo=gr(0),We=0,ia=null,Br=0,Tl=0,hf=0,Mi=null,gt=null,mf=0,zo=1/0,vn=null,tl=!1,Wc=null,ir=null,Qa=!1,Jn=null,nl=0,_i=0,Yc=null,js=-1,Ps=0;function dt(){return ne&6?_e():js!==-1?js:js=_e()}function ar(e){return e.mode&1?ne&2&&qe!==0?qe&-qe:Kw.transition!==null?(Ps===0&&(Ps=$g()),Ps):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Vg(e.type)),e):1}function qt(e,t,n,r){if(50<_i)throw _i=0,Yc=null,Error(I(185));va(e,n,r),(!(ne&2)||e!==Qe)&&(e===Qe&&(!(ne&2)&&(Tl|=n),We===4&&Xn(e,qe)),wt(e,r),n===1&&ne===0&&!(t.mode&1)&&(zo=_e()+500,Cl&&vr()))}function wt(e,t){var n=e.callbackNode;Kx(e,t);var r=$s(e,e===Qe?qe:0);if(r===0)n!==null&&_p(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_p(n),t===1)e.tag===0?Gw(Th.bind(null,e)):dv(Th.bind(null,e)),Hw(function(){!(ne&6)&&vr()}),n=null;else{switch(zg(r)){case 1:n=zd;break;case 4:n=Dg;break;case 16:n=Fs;break;case 536870912:n=Fg;break;default:n=Fs}n=c0(n,r0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function r0(e,t){if(js=-1,Ps=0,ne&6)throw Error(I(327));var n=e.callbackNode;if(No()&&e.callbackNode!==n)return null;var r=$s(e,e===Qe?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var o=ne;ne|=2;var i=i0();(Qe!==e||qe!==t)&&(vn=null,zo=_e()+500,Mr(e,t));do try{h2();break}catch(s){o0(e,s)}while(1);qd(),el.current=i,ne=o,Ue!==null?t=0:(Qe=null,qe=0,t=We)}if(t!==0){if(t===2&&(o=yc(e),o!==0&&(r=o,t=Vc(e,o))),t===1)throw n=ia,Mr(e,0),Xn(e,r),wt(e,_e()),n;if(t===6)Xn(e,r);else{if(o=e.current.alternate,!(r&30)&&!f2(o)&&(t=rl(e,r),t===2&&(i=yc(e),i!==0&&(r=i,t=Vc(e,i))),t===1))throw n=ia,Mr(e,0),Xn(e,r),wt(e,_e()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Cr(e,gt,vn);break;case 3:if(Xn(e,r),(r&130023424)===r&&(t=mf+500-_e(),10<t)){if($s(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=jc(Cr.bind(null,e,gt,vn),t);break}Cr(e,gt,vn);break;case 4:if(Xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Jt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d2(r/1960))-r,10<r){e.timeoutHandle=jc(Cr.bind(null,e,gt,vn),r);break}Cr(e,gt,vn);break;case 5:Cr(e,gt,vn);break;default:throw Error(I(329))}}}return wt(e,_e()),e.callbackNode===n?r0.bind(null,e):null}function Vc(e,t){var n=Mi;return e.current.memoizedState.isDehydrated&&(Mr(e,t).flags|=256),e=rl(e,t),e!==2&&(t=gt,gt=n,t!==null&&Gc(t)),e}function Gc(e){gt===null?gt=e:gt.push.apply(gt,e)}function f2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!tn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xn(e,t){for(t&=~hf,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Jt(t),r=1<<n;e[n]=-1,t&=~r}}function Th(e){if(ne&6)throw Error(I(327));No();var t=$s(e,0);if(!(t&1))return wt(e,_e()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=yc(e);r!==0&&(t=r,n=Vc(e,r))}if(n===1)throw n=ia,Mr(e,0),Xn(e,t),wt(e,_e()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,gt,vn),wt(e,_e()),null}function gf(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(zo=_e()+500,Cl&&vr())}}function Hr(e){Jn!==null&&Jn.tag===0&&!(ne&6)&&No();var t=ne;ne|=1;var n=$t.transition,r=ie;try{if($t.transition=null,ie=1,e)return e()}finally{ie=r,$t.transition=n,ne=t,!(ne&6)&&vr()}}function vf(){Ct=xo.current,we(xo)}function Mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bw(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ws();break;case 3:Fo(),we(yt),we(at),af();break;case 5:of(r);break;case 4:Fo();break;case 13:we(Ee);break;case 19:we(Ee);break;case 10:ef(r.type._context);break;case 22:case 23:vf()}n=n.return}if(Qe=e,Ue=e=sr(e.current,null),qe=Ct=t,We=0,ia=null,hf=Tl=Br=0,gt=Mi=null,Tr!==null){for(t=0;t<Tr.length;t++)if(n=Tr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Tr=null}return e}function o0(e,t){do{var n=Ue;try{if(qd(),bs.current=qs,Js){for(var r=je.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Js=!1}if(Ur=0,Ke=He=je=null,Ai=!1,na=0,pf.current=null,n===null||n.return===null){We=1,ia=t,Ue=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=qe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var k=mh(a);if(k!==null){k.flags&=-257,gh(k,a,s,i,t),k.mode&1&&hh(i,c,t),t=k,u=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(u),t.updateQueue=S}else w.add(u);break e}else{if(!(t&1)){hh(i,c,t),yf();break e}u=Error(I(426))}}else if(be&&s.mode&1){var P=mh(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),gh(P,a,s,i,t),Zd($o(u,s));break e}}i=u=$o(u,s),We!==4&&(We=2),Mi===null?Mi=[i]:Mi.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Uv(i,u,t);sh(i,g);break e;case 1:s=u;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var m=Bv(i,s,t);sh(i,m);break e}}i=i.return}while(i!==null)}s0(n)}catch(C){t=C,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(1)}function i0(){var e=el.current;return el.current=qs,e===null?qs:e}function yf(){(We===0||We===3||We===2)&&(We=4),Qe===null||!(Br&268435455)&&!(Tl&268435455)||Xn(Qe,qe)}function rl(e,t){var n=ne;ne|=2;var r=i0();(Qe!==e||qe!==t)&&(vn=null,Mr(e,t));do try{p2();break}catch(o){o0(e,o)}while(1);if(qd(),ne=n,el.current=r,Ue!==null)throw Error(I(261));return Qe=null,qe=0,We}function p2(){for(;Ue!==null;)a0(Ue)}function h2(){for(;Ue!==null&&!$x();)a0(Ue)}function a0(e){var t=u0(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,t===null?s0(e):Ue=t,pf.current=null}function s0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s2(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ue=null;return}}else if(n=a2(n,t,Ct),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);We===0&&(We=5)}function Cr(e,t,n){var r=ie,o=$t.transition;try{$t.transition=null,ie=1,m2(e,t,n,r)}finally{$t.transition=o,ie=r}return null}function m2(e,t,n,r){do No();while(Jn!==null);if(ne&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Xx(e,i),e===Qe&&(Ue=Qe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,c0(Fs,function(){return No(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=$t.transition,$t.transition=null;var a=ie;ie=1;var s=ne;ne|=4,pf.current=null,u2(e,n),t0(n,e),Mw(Cc),zs=!!bc,Cc=bc=null,e.current=n,c2(n),zx(),ne=s,ie=a,$t.transition=i}else e.current=n;if(Qa&&(Qa=!1,Jn=e,nl=o),i=e.pendingLanes,i===0&&(ir=null),Hx(n.stateNode),wt(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(tl)throw tl=!1,e=Wc,Wc=null,e;return nl&1&&e.tag!==0&&No(),i=e.pendingLanes,i&1?e===Yc?_i++:(_i=0,Yc=e):_i=0,vr(),null}function No(){if(Jn!==null){var e=zg(nl),t=$t.transition,n=ie;try{if($t.transition=null,ie=16>e?16:e,Jn===null)var r=!1;else{if(e=Jn,Jn=null,nl=0,ne&6)throw Error(I(331));var o=ne;for(ne|=4,_=e.current;_!==null;){var i=_,a=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(_=c;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:Li(8,d,i)}var f=d.child;if(f!==null)f.return=d,_=f;else for(;_!==null;){d=_;var h=d.sibling,k=d.return;if(Jv(d),d===c){_=null;break}if(h!==null){h.return=k,_=h;break}_=k}}}var w=i.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}_=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,_=a;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Li(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,_=g;break e}_=i.return}}var p=e.current;for(_=p;_!==null;){a=_;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,_=v;else e:for(a=p;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pl(9,s)}}catch(C){Te(s,s.return,C)}if(s===a){_=null;break e}var m=s.sibling;if(m!==null){m.return=s.return,_=m;break e}_=s.return}}if(ne=o,vr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{ie=n,$t.transition=t}}return!1}function Rh(e,t,n){t=$o(n,t),t=Uv(e,t,1),e=or(e,t,1),t=dt(),e!==null&&(va(e,1,t),wt(e,t))}function Te(e,t,n){if(e.tag===3)Rh(e,e,n);else for(;t!==null;){if(t.tag===3){Rh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){e=$o(n,e),e=Bv(t,e,1),t=or(t,e,1),e=dt(),t!==null&&(va(t,1,e),wt(t,e));break}}t=t.return}}function g2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(qe&n)===n&&(We===4||We===3&&(qe&130023424)===qe&&500>_e()-mf?Mr(e,0):hf|=n),wt(e,t)}function l0(e,t){t===0&&(e.mode&1?(t=za,za<<=1,!(za&130023424)&&(za=4194304)):t=1);var n=dt();e=Tn(e,t),e!==null&&(va(e,t,n),wt(e,n))}function v2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),l0(e,n)}function y2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),l0(e,n)}var u0;u0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return vt=!1,i2(e,t,n);vt=!!(e.flags&131072)}else vt=!1,be&&t.flags&1048576&&fv(t,Gs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Es(e,t),e=t.pendingProps;var o=Mo(t,at.current);Ro(t,n),o=lf(null,t,r,e,o,n);var i=uf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(r)?(i=!0,Ys(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,nf(t),o.updater=El,t.stateNode=o,o._reactInternals=t,Ac(t,r,e,n),t=_c(null,t,r,!0,i,n)):(t.tag=0,be&&i&&Xd(t),ut(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Es(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=w2(r),e=Gt(r,e),o){case 0:t=Mc(null,t,r,e,n);break e;case 1:t=xh(null,t,r,e,n);break e;case 11:t=vh(null,t,r,e,n);break e;case 14:t=yh(null,t,r,Gt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gt(r,o),Mc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gt(r,o),xh(e,t,r,o,n);case 3:e:{if(Vv(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,gv(e,t),Qs(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=$o(Error(I(423)),t),t=wh(e,t,r,n,o);break e}else if(r!==o){o=$o(Error(I(424)),t),t=wh(e,t,r,n,o);break e}else for(Et=rr(t.stateNode.containerInfo.firstChild),jt=t,be=!0,Qt=null,n=wv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_o(),r===o){t=Rn(e,t,n);break e}ut(e,t,r,n)}t=t.child}return t;case 5:return kv(t),e===null&&Nc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ec(r,o)?a=null:i!==null&&Ec(r,i)&&(t.flags|=32),Yv(e,t),ut(e,t,a,n),t.child;case 6:return e===null&&Nc(t),null;case 13:return Gv(e,t,n);case 4:return rf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Do(t,null,r,n):ut(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gt(r,o),vh(e,t,r,o,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,fe(Ks,r._currentValue),r._currentValue=a,i!==null)if(tn(i.value,a)){if(i.children===o.children&&!yt.current){t=Rn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ic(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(I(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ic(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ut(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ro(t,n),o=Ut(o),r=r(o),t.flags|=1,ut(e,t,r,n),t.child;case 14:return r=t.type,o=Gt(r,t.pendingProps),o=Gt(r.type,o),yh(e,t,r,o,n);case 15:return Hv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gt(r,o),Es(e,t),t.tag=1,xt(r)?(e=!0,Ys(t)):e=!1,Ro(t,n),yv(t,r,o),Ac(t,r,o,n),_c(null,t,r,!0,e,n);case 19:return Kv(e,t,n);case 22:return Wv(e,t,n)}throw Error(I(156,t.tag))};function c0(e,t){return _g(e,t)}function x2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new x2(e,t,n,r)}function xf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function w2(e){if(typeof e=="function")return xf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dd)return 11;if(e===Fd)return 14}return 2}function sr(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ts(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")xf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case lo:return _r(n.children,o,i,t);case _d:a=8,o|=8;break;case rc:return e=Ft(12,n,t,o|2),e.elementType=rc,e.lanes=i,e;case oc:return e=Ft(13,n,t,o),e.elementType=oc,e.lanes=i,e;case ic:return e=Ft(19,n,t,o),e.elementType=ic,e.lanes=i,e;case xg:return Rl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vg:a=10;break e;case yg:a=9;break e;case Dd:a=11;break e;case Fd:a=14;break e;case Yn:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Ft(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function _r(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function Rl(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=xg,e.lanes=n,e.stateNode={isHidden:!1},e}function Nu(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function Iu(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function k2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function wf(e,t,n,r,o,i,a,s,u){return e=new k2(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ft(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(i),e}function S2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:so,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function d0(e){if(!e)return cr;e=e._reactInternals;e:{if(Xr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(xt(n))return cv(e,n,t)}return t}function f0(e,t,n,r,o,i,a,s,u){return e=wf(n,r,!0,e,o,i,a,s,u),e.context=d0(null),n=e.current,r=dt(),o=ar(n),i=Sn(r,o),i.callback=t??null,or(n,i,o),e.current.lanes=o,va(e,o,r),wt(e,r),e}function Nl(e,t,n,r){var o=t.current,i=dt(),a=ar(o);return n=d0(n),t.context===null?t.context=n:t.pendingContext=n,t=Sn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=or(o,t,a),e!==null&&(qt(e,o,a,i),Ss(e,o,a)),a}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kf(e,t){Nh(e,t),(e=e.alternate)&&Nh(e,t)}function b2(){return null}var p0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sf(e){this._internalRoot=e}Il.prototype.render=Sf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Nl(e,t,null,null)};Il.prototype.unmount=Sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hr(function(){Nl(null,e,null,null)}),t[Pn]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&t!==0&&t<Kn[n].priority;n++);Kn.splice(n,0,e),n===0&&Yg(e)}};function bf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ih(){}function C2(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ol(a);i.call(c)}}var a=f0(t,r,e,0,null,!1,!1,"",Ih);return e._reactRootContainer=a,e[Pn]=a.current,Zi(e.nodeType===8?e.parentNode:e),Hr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=ol(u);s.call(c)}}var u=wf(e,0,!1,null,null,!1,!1,"",Ih);return e._reactRootContainer=u,e[Pn]=u.current,Zi(e.nodeType===8?e.parentNode:e),Hr(function(){Nl(t,u,n,r)}),u}function Al(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=ol(a);s.call(u)}}Nl(t,a,e,o)}else a=C2(n,t,e,o,r);return ol(a)}Ug=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bi(t.pendingLanes);n!==0&&(Ud(t,n|1),wt(t,_e()),!(ne&6)&&(zo=_e()+500,vr()))}break;case 13:Hr(function(){var r=Tn(e,1);if(r!==null){var o=dt();qt(r,e,1,o)}}),kf(e,1)}};Bd=function(e){if(e.tag===13){var t=Tn(e,134217728);if(t!==null){var n=dt();qt(t,e,134217728,n)}kf(e,134217728)}};Bg=function(e){if(e.tag===13){var t=ar(e),n=Tn(e,t);if(n!==null){var r=dt();qt(n,e,t,r)}kf(e,t)}};Hg=function(){return ie};Wg=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};mc=function(e,t,n){switch(t){case"input":if(lc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bl(r);if(!o)throw Error(I(90));kg(r),lc(r,o)}}}break;case"textarea":bg(e,n);break;case"select":t=n.value,t!=null&&Eo(e,!!n.multiple,t,!1)}};Ng=gf;Ig=Hr;var E2={usingClientEntryPoint:!1,Events:[xa,po,bl,Tg,Rg,gf]},pi={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j2={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lg(e),e===null?null:e.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||b2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{xl=Za.inject(j2),dn=Za}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E2;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(t))throw Error(I(200));return S2(e,t,null,n)};Rt.createRoot=function(e,t){if(!bf(e))throw Error(I(299));var n=!1,r="",o=p0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=wf(e,1,!1,null,null,n,!1,r,o),e[Pn]=t.current,Zi(e.nodeType===8?e.parentNode:e),new Sf(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Lg(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Hr(e)};Rt.hydrate=function(e,t,n){if(!Ol(t))throw Error(I(200));return Al(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!bf(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=p0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=f0(t,null,e,1,n??null,o,!1,i,a),e[Pn]=t.current,Zi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Il(t)};Rt.render=function(e,t,n){if(!Ol(t))throw Error(I(200));return Al(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(I(40));return e._reactRootContainer?(Hr(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1};Rt.unstable_batchedUpdates=gf;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Al(e,t,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function h0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)}catch(e){console.error(e)}}h0(),fg.exports=Rt;var Cf=fg.exports;const Nr=vl(Cf),P2=tg({__proto__:null,default:Nr},[Cf]);var Oh=Cf;tc.createRoot=Oh.createRoot,tc.hydrateRoot=Oh.hydrateRoot;/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}var Le;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Le||(Le={}));const Ah="popstate";function T2(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return aa("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Yr(o)}return N2(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R2(){return Math.random().toString(36).substr(2,8)}function Lh(e,t){return{usr:e.state,key:e.key,idx:t}}function aa(e,t,n,r){return n===void 0&&(n=null),Re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mn(t):t,{state:n,key:t&&t.key||r||R2()})}function Yr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function N2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Le.Pop,u=null,c=d();c==null&&(c=0,a.replaceState(Re({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){s=Le.Pop;let P=d(),g=P==null?null:P-c;c=P,u&&u({action:s,location:S.location,delta:g})}function h(P,g){s=Le.Push;let p=aa(S.location,P,g);n&&n(p,P),c=d()+1;let v=Lh(p,c),m=S.createHref(p);try{a.pushState(v,"",m)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(m)}i&&u&&u({action:s,location:S.location,delta:1})}function k(P,g){s=Le.Replace;let p=aa(S.location,P,g);n&&n(p,P),c=d();let v=Lh(p,c),m=S.createHref(p);a.replaceState(v,"",m),i&&u&&u({action:s,location:S.location,delta:0})}function w(P){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof P=="string"?P:Yr(P);return K(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return s},get location(){return e(o,a)},listen(P){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Ah,f),u=P,()=>{o.removeEventListener(Ah,f),u=null}},createHref(P){return t(o,P)},createURL:w,encodeLocation(P){let g=w(P);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:k,go(P){return a.go(P)}};return S}var Me;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Me||(Me={}));const I2=new Set(["lazy","caseSensitive","path","id","index","children"]);function O2(e){return e.index===!0}function Kc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,i],s=typeof o.id=="string"?o.id:a.join("-");if(K(o.index!==!0||!o.children,"Cannot specify children on an index route"),K(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),O2(o)){let u=Re({},o,t(o),{id:s});return r[s]=u,u}else{let u=Re({},o,t(o),{id:s,children:void 0});return r[s]=u,o.children&&(u.children=Kc(o.children,t,a,r)),u}})}function wo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Mn(t):t,o=dr(r.pathname||"/",n);if(o==null)return null;let i=m0(e);L2(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=H2(i[s],Y2(o));return a}function A2(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function m0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(K(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=bn([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),m0(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:U2(c,i.index),routesMeta:d})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let u of g0(i.path))o(i,a,u)}),t}function g0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=g0(r.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function L2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:B2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const M2=/^:\w+$/,_2=3,D2=2,F2=1,$2=10,z2=-2,Mh=e=>e==="*";function U2(e,t){let n=e.split("/"),r=n.length;return n.some(Mh)&&(r+=z2),t&&(r+=D2),n.filter(o=>!Mh(o)).reduce((o,i)=>o+(M2.test(i)?_2:i===""?F2:$2),r)}function B2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function H2(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],u=a===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=Xc({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let f=s.route;i.push({params:r,pathname:bn([o,d.pathname]),pathnameBase:X2(bn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=bn([o,d.pathnameBase]))}return i}function Xc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=W2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:k}=d;if(h==="*"){let S=s[f]||"";a=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const w=s[f];return k&&!w?c[h]=void 0:c[h]=V2(w||"",h),c},{}),pathname:i,pathnameBase:a,pattern:e}}function W2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Y2(e){try{return decodeURI(e)}catch(t){return Wr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function V2(e,t){try{return decodeURIComponent(e)}catch(n){return Wr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function dr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function G2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Mn(e):e;return{pathname:n?n.startsWith("/")?n:K2(n,t):t,search:Q2(r),hash:Z2(o)}}function K2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ou(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function v0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ef(e){return v0(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function jf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Mn(e):(o=Re({},e),K(!o.pathname||!o.pathname.includes("?"),Ou("?","pathname","search",o)),K(!o.pathname||!o.pathname.includes("#"),Ou("#","pathname","hash",o)),K(!o.search||!o.search.includes("#"),Ou("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else if(r){let f=t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f.pop();o.pathname=h.join("/")}s="/"+f.join("/")}else{let f=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}s=f>=0?t[f]:"/"}let u=G2(o,s),c=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const bn=e=>e.join("/").replace(/\/\/+/g,"/"),X2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Q2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Z2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Pf{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function y0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const x0=["post","put","patch","delete"],J2=new Set(x0),q2=["get",...x0],ek=new Set(q2),tk=new Set([301,302,303,307,308]),nk=new Set([307,308]),Au={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},w0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ok=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),k0="remix-router-transitions";function ik(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;K(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let b=e.detectErrorBoundary;o=j=>({hasErrorBoundary:b(j)})}else o=ok;let i={},a=Kc(e.routes,o,void 0,i),s,u=e.basename||"/",c=Re({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,f=new Set,h=null,k=null,w=null,S=e.hydrationData!=null,P=wo(a,e.history.location,u),g=null;if(P==null){let b=Mt(404,{pathname:e.history.location.pathname}),{matches:j,route:R}=Hh(a);P=j,g={[R.id]:b}}let p=!P.some(b=>b.route.lazy)&&(!P.some(b=>b.route.loader)||e.hydrationData!=null),v,m={historyAction:e.history.action,location:e.history.location,matches:P,initialized:p,navigation:Au,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},C=Le.Pop,T=!1,E,O=!1,M=new Map,z=null,Z=!1,Se=!1,pe=[],st=[],ae=new Map,Oe=0,he=-1,N=new Map,D=new Set,F=new Map,X=new Map,V=new Set,se=new Map,ue=new Map,Ve=!1;function Fe(){if(d=e.history.listen(b=>{let{action:j,location:R,delta:A}=b;if(Ve){Ve=!1;return}Wr(ue.size===0||A!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let U=wp({currentLocation:m.location,nextLocation:R,historyAction:j});if(U&&A!=null){Ve=!0,e.history.go(A*-1),Aa(U,{state:"blocked",location:R,proceed(){Aa(U,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(A)},reset(){let Q=new Map(m.blockers);Q.set(U,hi),me({blockers:Q})}});return}return bt(j,R)}),n){gk(t,M);let b=()=>vk(t,M);t.addEventListener("pagehide",b),z=()=>t.removeEventListener("pagehide",b)}return m.initialized||bt(Le.Pop,m.location),v}function Ge(){d&&d(),z&&z(),f.clear(),E&&E.abort(),m.fetchers.forEach((b,j)=>ee(j)),m.blockers.forEach((b,j)=>xp(j))}function mn(b){return f.add(b),()=>f.delete(b)}function me(b,j){j===void 0&&(j={}),m=Re({},m,b);let R=[],A=[];c.v7_fetcherPersist&&m.fetchers.forEach((U,Q)=>{U.state==="idle"&&(V.has(Q)?A.push(Q):R.push(Q))}),[...f].forEach(U=>U(m,{deletedFetchers:A,unstable_viewTransitionOpts:j.viewTransitionOpts,unstable_flushSync:j.flushSync===!0})),c.v7_fetcherPersist&&(R.forEach(U=>m.fetchers.delete(U)),A.forEach(U=>ee(U)))}function Ae(b,j,R){var A,U;let{flushSync:Q}=R===void 0?{}:R,Y=m.actionData!=null&&m.navigation.formMethod!=null&&Xt(m.navigation.formMethod)&&m.navigation.state==="loading"&&((A=b.state)==null?void 0:A._isRedirect)!==!0,W;j.actionData?Object.keys(j.actionData).length>0?W=j.actionData:W=null:Y?W=m.actionData:W=null;let B=j.loaderData?Bh(m.loaderData,j.loaderData,j.matches||[],j.errors):m.loaderData,te=m.blockers;te.size>0&&(te=new Map(te),te.forEach((ce,Ce)=>te.set(Ce,hi)));let Ze=T===!0||m.navigation.formMethod!=null&&Xt(m.navigation.formMethod)&&((U=b.state)==null?void 0:U._isRedirect)!==!0;s&&(a=s,s=void 0),Z||C===Le.Pop||(C===Le.Push?e.history.push(b,b.state):C===Le.Replace&&e.history.replace(b,b.state));let J;if(C===Le.Pop){let ce=M.get(m.location.pathname);ce&&ce.has(b.pathname)?J={currentLocation:m.location,nextLocation:b}:M.has(b.pathname)&&(J={currentLocation:b,nextLocation:m.location})}else if(O){let ce=M.get(m.location.pathname);ce?ce.add(b.pathname):(ce=new Set([b.pathname]),M.set(m.location.pathname,ce)),J={currentLocation:m.location,nextLocation:b}}me(Re({},j,{actionData:W,loaderData:B,historyAction:C,location:b,initialized:!0,navigation:Au,revalidation:"idle",restoreScrollPosition:Sp(b,j.matches||m.matches),preventScrollReset:Ze,blockers:te}),{viewTransitionOpts:J,flushSync:Q===!0}),C=Le.Pop,T=!1,O=!1,Z=!1,Se=!1,pe=[],st=[]}async function Fn(b,j){if(typeof b=="number"){e.history.go(b);return}let R=Qc(m.location,m.matches,u,c.v7_prependBasename,b,j==null?void 0:j.fromRouteId,j==null?void 0:j.relative),{path:A,submission:U,error:Q}=_h(c.v7_normalizeFormMethod,!1,R,j),Y=m.location,W=aa(m.location,A,j&&j.state);W=Re({},W,e.history.encodeLocation(W));let B=j&&j.replace!=null?j.replace:void 0,te=Le.Push;B===!0?te=Le.Replace:B===!1||U!=null&&Xt(U.formMethod)&&U.formAction===m.location.pathname+m.location.search&&(te=Le.Replace);let Ze=j&&"preventScrollReset"in j?j.preventScrollReset===!0:void 0,J=(j&&j.unstable_flushSync)===!0,ce=wp({currentLocation:Y,nextLocation:W,historyAction:te});if(ce){Aa(ce,{state:"blocked",location:W,proceed(){Aa(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),Fn(b,j)},reset(){let Ce=new Map(m.blockers);Ce.set(ce,hi),me({blockers:Ce})}});return}return await bt(te,W,{submission:U,pendingError:Q,preventScrollReset:Ze,replace:j&&j.replace,enableViewTransition:j&&j.unstable_viewTransition,flushSync:J})}function Jr(){if(oi(),me({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){bt(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}bt(C||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function bt(b,j,R){E&&E.abort(),E=null,C=b,Z=(R&&R.startUninterruptedRevalidation)===!0,qy(m.location,m.matches),T=(R&&R.preventScrollReset)===!0,O=(R&&R.enableViewTransition)===!0;let A=s||a,U=R&&R.overrideNavigation,Q=wo(A,j,u),Y=(R&&R.flushSync)===!0;if(!Q){let Ce=Mt(404,{pathname:j.pathname}),{matches:lt,route:rn}=Hh(A);tu(),Ae(j,{matches:lt,loaderData:{},errors:{[rn.id]:Ce}},{flushSync:Y});return}if(m.initialized&&!Se&&ck(m.location,j)&&!(R&&R.submission&&Xt(R.submission.formMethod))){Ae(j,{matches:Q},{flushSync:Y});return}E=new AbortController;let W=gi(e.history,j,E.signal,R&&R.submission),B,te;if(R&&R.pendingError)te={[Di(Q).route.id]:R.pendingError};else if(R&&R.submission&&Xt(R.submission.formMethod)){let Ce=await gn(W,j,R.submission,Q,{replace:R.replace,flushSync:Y});if(Ce.shortCircuited)return;B=Ce.pendingActionData,te=Ce.pendingActionError,U=Lu(j,R.submission),Y=!1,W=new Request(W.url,{signal:W.signal})}let{shortCircuited:Ze,loaderData:J,errors:ce}=await ge(W,j,Q,U,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,Y,B,te);Ze||(E=null,Ae(j,Re({matches:Q},B?{actionData:B}:{},{loaderData:J,errors:ce})))}async function gn(b,j,R,A,U){U===void 0&&(U={}),oi();let Q=hk(j,R);me({navigation:Q},{flushSync:U.flushSync===!0});let Y,W=Jc(A,j);if(!W.route.action&&!W.route.lazy)Y={type:Me.error,error:Mt(405,{method:b.method,pathname:j.pathname,routeId:W.route.id})};else if(Y=await mi("action",b,W,A,i,o,u),b.signal.aborted)return{shortCircuited:!0};if(Io(Y)){let B;return U&&U.replace!=null?B=U.replace:B=Y.location===m.location.pathname+m.location.search,await kr(m,Y,{submission:R,replace:B}),{shortCircuited:!0}}if(Fi(Y)){let B=Di(A,W.route.id);return(U&&U.replace)!==!0&&(C=Le.Push),{pendingActionData:{},pendingActionError:{[B.route.id]:Y.error}}}if(Ir(Y))throw Mt(400,{type:"defer-action"});return{pendingActionData:{[W.route.id]:Y.data}}}async function ge(b,j,R,A,U,Q,Y,W,B,te){let Ze=A||Lu(j,U),J=U||Q||Vh(Ze),ce=s||a,[Ce,lt]=Dh(e.history,m,R,J,j,Se,pe,st,V,F,D,ce,u,B,te);if(tu(de=>!(R&&R.some(Lt=>Lt.route.id===de))||Ce&&Ce.some(Lt=>Lt.route.id===de)),he=++Oe,Ce.length===0&&lt.length===0){let de=vp();return Ae(j,Re({matches:R,loaderData:{},errors:te||null},B?{actionData:B}:{},de?{fetchers:new Map(m.fetchers)}:{}),{flushSync:W}),{shortCircuited:!0}}if(!Z){lt.forEach(Lt=>{let $e=m.fetchers.get(Lt.key),Sr=vi(void 0,$e?$e.data:void 0);m.fetchers.set(Lt.key,Sr)});let de=B||m.actionData;me(Re({navigation:Ze},de?Object.keys(de).length===0?{actionData:null}:{actionData:de}:{},lt.length>0?{fetchers:new Map(m.fetchers)}:{}),{flushSync:W})}lt.forEach(de=>{ae.has(de.key)&&Wt(de.key),de.controller&&ae.set(de.key,de.controller)});let rn=()=>lt.forEach(de=>Wt(de.key));E&&E.signal.addEventListener("abort",rn);let{results:ii,loaderResults:nu,fetcherResults:eo}=await Ia(m.matches,R,Ce,lt,b);if(b.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",rn),lt.forEach(de=>ae.delete(de.key));let Yt=Wh(ii);if(Yt){if(Yt.idx>=Ce.length){let de=lt[Yt.idx-Ce.length].key;D.add(de)}return await kr(m,Yt.result,{replace:Y}),{shortCircuited:!0}}let{loaderData:La,errors:ru}=Uh(m,R,Ce,nu,te,lt,eo,se);se.forEach((de,Lt)=>{de.subscribe($e=>{($e||de.done)&&se.delete(Lt)})});let ou=vp(),iu=yp(he),to=ou||iu||lt.length>0;return Re({loaderData:La,errors:ru},to?{fetchers:new Map(m.fetchers)}:{})}function qr(b,j,R,A){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ae.has(b)&&Wt(b);let U=(A&&A.unstable_flushSync)===!0,Q=s||a,Y=Qc(m.location,m.matches,u,c.v7_prependBasename,R,j,A==null?void 0:A.relative),W=wo(Q,Y,u);if(!W){$n(b,j,Mt(404,{pathname:Y}),{flushSync:U});return}let{path:B,submission:te,error:Ze}=_h(c.v7_normalizeFormMethod,!0,Y,A);if(Ze){$n(b,j,Ze,{flushSync:U});return}let J=Jc(W,B);if(T=(A&&A.preventScrollReset)===!0,te&&Xt(te.formMethod)){wr(b,j,B,J,W,U,te);return}F.set(b,{routeId:j,path:B}),eu(b,j,B,J,W,U,te)}async function wr(b,j,R,A,U,Q,Y){if(oi(),F.delete(b),!A.route.action&&!A.route.lazy){let $e=Mt(405,{method:Y.formMethod,pathname:R,routeId:j});$n(b,j,$e,{flushSync:Q});return}let W=m.fetchers.get(b);nn(b,mk(Y,W),{flushSync:Q});let B=new AbortController,te=gi(e.history,R,B.signal,Y);ae.set(b,B);let Ze=Oe,J=await mi("action",te,A,U,i,o,u);if(te.signal.aborted){ae.get(b)===B&&ae.delete(b);return}if(V.has(b)){nn(b,Hn(void 0));return}if(Io(J))if(ae.delete(b),he>Ze){nn(b,Hn(void 0));return}else return D.add(b),nn(b,vi(Y)),kr(m,J,{fetcherSubmission:Y});if(Fi(J)){$n(b,j,J.error);return}if(Ir(J))throw Mt(400,{type:"defer-action"});let ce=m.navigation.location||m.location,Ce=gi(e.history,ce,B.signal),lt=s||a,rn=m.navigation.state!=="idle"?wo(lt,m.navigation.location,u):m.matches;K(rn,"Didn't find any matches after fetcher action");let ii=++Oe;N.set(b,ii);let nu=vi(Y,J.data);m.fetchers.set(b,nu);let[eo,Yt]=Dh(e.history,m,rn,Y,ce,Se,pe,st,V,F,D,lt,u,{[A.route.id]:J.data},void 0);Yt.filter($e=>$e.key!==b).forEach($e=>{let Sr=$e.key,bp=m.fetchers.get(Sr),tx=vi(void 0,bp?bp.data:void 0);m.fetchers.set(Sr,tx),ae.has(Sr)&&Wt(Sr),$e.controller&&ae.set(Sr,$e.controller)}),me({fetchers:new Map(m.fetchers)});let La=()=>Yt.forEach($e=>Wt($e.key));B.signal.addEventListener("abort",La);let{results:ru,loaderResults:ou,fetcherResults:iu}=await Ia(m.matches,rn,eo,Yt,Ce);if(B.signal.aborted)return;B.signal.removeEventListener("abort",La),N.delete(b),ae.delete(b),Yt.forEach($e=>ae.delete($e.key));let to=Wh(ru);if(to){if(to.idx>=eo.length){let $e=Yt[to.idx-eo.length].key;D.add($e)}return kr(m,to.result)}let{loaderData:de,errors:Lt}=Uh(m,m.matches,eo,ou,void 0,Yt,iu,se);if(m.fetchers.has(b)){let $e=Hn(J.data);m.fetchers.set(b,$e)}yp(ii),m.navigation.state==="loading"&&ii>he?(K(C,"Expected pending action"),E&&E.abort(),Ae(m.navigation.location,{matches:rn,loaderData:de,errors:Lt,fetchers:new Map(m.fetchers)})):(me({errors:Lt,loaderData:Bh(m.loaderData,de,rn,Lt),fetchers:new Map(m.fetchers)}),Se=!1)}async function eu(b,j,R,A,U,Q,Y){let W=m.fetchers.get(b);nn(b,vi(Y,W?W.data:void 0),{flushSync:Q});let B=new AbortController,te=gi(e.history,R,B.signal);ae.set(b,B);let Ze=Oe,J=await mi("loader",te,A,U,i,o,u);if(Ir(J)&&(J=await C0(J,te.signal,!0)||J),ae.get(b)===B&&ae.delete(b),!te.signal.aborted){if(V.has(b)){nn(b,Hn(void 0));return}if(Io(J))if(he>Ze){nn(b,Hn(void 0));return}else{D.add(b),await kr(m,J);return}if(Fi(J)){$n(b,j,J.error);return}K(!Ir(J),"Unhandled fetcher deferred data"),nn(b,Hn(J.data))}}async function kr(b,j,R){let{submission:A,fetcherSubmission:U,replace:Q}=R===void 0?{}:R;j.revalidate&&(Se=!0);let Y=aa(b.location,j.location,{_isRedirect:!0});if(K(Y,"Expected a location on the redirect navigation"),n){let ce=!1;if(j.reloadDocument)ce=!0;else if(w0.test(j.location)){const Ce=e.history.createURL(j.location);ce=Ce.origin!==t.location.origin||dr(Ce.pathname,u)==null}if(ce){Q?t.location.replace(j.location):t.location.assign(j.location);return}}E=null;let W=Q===!0?Le.Replace:Le.Push,{formMethod:B,formAction:te,formEncType:Ze}=b.navigation;!A&&!U&&B&&te&&Ze&&(A=Vh(b.navigation));let J=A||U;if(nk.has(j.status)&&J&&Xt(J.formMethod))await bt(W,Y,{submission:Re({},J,{formAction:j.location}),preventScrollReset:T});else{let ce=Lu(Y,A);await bt(W,Y,{overrideNavigation:ce,fetcherSubmission:U,preventScrollReset:T})}}async function Ia(b,j,R,A,U){let Q=await Promise.all([...R.map(B=>mi("loader",U,B,j,i,o,u)),...A.map(B=>B.matches&&B.match&&B.controller?mi("loader",gi(e.history,B.path,B.controller.signal),B.match,B.matches,i,o,u):{type:Me.error,error:Mt(404,{pathname:B.path})})]),Y=Q.slice(0,R.length),W=Q.slice(R.length);return await Promise.all([Yh(b,R,Y,Y.map(()=>U.signal),!1,m.loaderData),Yh(b,A.map(B=>B.match),W,A.map(B=>B.controller?B.controller.signal:null),!0)]),{results:Q,loaderResults:Y,fetcherResults:W}}function oi(){Se=!0,pe.push(...tu()),F.forEach((b,j)=>{ae.has(j)&&(st.push(j),Wt(j))})}function nn(b,j,R){R===void 0&&(R={}),m.fetchers.set(b,j),me({fetchers:new Map(m.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function $n(b,j,R,A){A===void 0&&(A={});let U=Di(m.matches,j);ee(b),me({errors:{[U.route.id]:R},fetchers:new Map(m.fetchers)},{flushSync:(A&&A.flushSync)===!0})}function Oa(b){return c.v7_fetcherPersist&&(X.set(b,(X.get(b)||0)+1),V.has(b)&&V.delete(b)),m.fetchers.get(b)||rk}function ee(b){let j=m.fetchers.get(b);ae.has(b)&&!(j&&j.state==="loading"&&N.has(b))&&Wt(b),F.delete(b),N.delete(b),D.delete(b),V.delete(b),m.fetchers.delete(b)}function zn(b){if(c.v7_fetcherPersist){let j=(X.get(b)||0)-1;j<=0?(X.delete(b),V.add(b)):X.set(b,j)}else ee(b);me({fetchers:new Map(m.fetchers)})}function Wt(b){let j=ae.get(b);K(j,"Expected fetch controller: "+b),j.abort(),ae.delete(b)}function gp(b){for(let j of b){let R=Oa(j),A=Hn(R.data);m.fetchers.set(j,A)}}function vp(){let b=[],j=!1;for(let R of D){let A=m.fetchers.get(R);K(A,"Expected fetcher: "+R),A.state==="loading"&&(D.delete(R),b.push(R),j=!0)}return gp(b),j}function yp(b){let j=[];for(let[R,A]of N)if(A<b){let U=m.fetchers.get(R);K(U,"Expected fetcher: "+R),U.state==="loading"&&(Wt(R),N.delete(R),j.push(R))}return gp(j),j.length>0}function Zy(b,j){let R=m.blockers.get(b)||hi;return ue.get(b)!==j&&ue.set(b,j),R}function xp(b){m.blockers.delete(b),ue.delete(b)}function Aa(b,j){let R=m.blockers.get(b)||hi;K(R.state==="unblocked"&&j.state==="blocked"||R.state==="blocked"&&j.state==="blocked"||R.state==="blocked"&&j.state==="proceeding"||R.state==="blocked"&&j.state==="unblocked"||R.state==="proceeding"&&j.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+j.state);let A=new Map(m.blockers);A.set(b,j),me({blockers:A})}function wp(b){let{currentLocation:j,nextLocation:R,historyAction:A}=b;if(ue.size===0)return;ue.size>1&&Wr(!1,"A router only supports one blocker at a time");let U=Array.from(ue.entries()),[Q,Y]=U[U.length-1],W=m.blockers.get(Q);if(!(W&&W.state==="proceeding")&&Y({currentLocation:j,nextLocation:R,historyAction:A}))return Q}function tu(b){let j=[];return se.forEach((R,A)=>{(!b||b(A))&&(R.cancel(),j.push(A),se.delete(A))}),j}function Jy(b,j,R){if(h=b,w=j,k=R||null,!S&&m.navigation===Au){S=!0;let A=Sp(m.location,m.matches);A!=null&&me({restoreScrollPosition:A})}return()=>{h=null,w=null,k=null}}function kp(b,j){return k&&k(b,j.map(A=>A2(A,m.loaderData)))||b.key}function qy(b,j){if(h&&w){let R=kp(b,j);h[R]=w()}}function Sp(b,j){if(h){let R=kp(b,j),A=h[R];if(typeof A=="number")return A}return null}function ex(b){i={},s=Kc(b,o,void 0,i)}return v={get basename(){return u},get state(){return m},get routes(){return a},get window(){return t},initialize:Fe,subscribe:mn,enableScrollRestoration:Jy,navigate:Fn,fetch:qr,revalidate:Jr,createHref:b=>e.history.createHref(b),encodeLocation:b=>e.history.encodeLocation(b),getFetcher:Oa,deleteFetcher:zn,dispose:Ge,getBlocker:Zy,deleteBlocker:xp,_internalFetchControllers:ae,_internalActiveDeferreds:se,_internalSetRoutes:ex},v}function ak(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Qc(e,t,n,r,o,i,a){let s,u;if(i){s=[];for(let d of t)if(s.push(d),d.route.id===i){u=d;break}}else s=t,u=t[t.length-1];let c=jf(o||".",Ef(s),dr(e.pathname,n)||e.pathname,a==="path");return o==null&&(c.search=e.search,c.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!Tf(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:bn([n,c.pathname])),Yr(c)}function _h(e,t,n,r){if(!r||!ak(r))return{path:n};if(r.formMethod&&!pk(r.formMethod))return{path:n,error:Mt(405,{method:r.formMethod})};let o=()=>({path:n,error:Mt(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),s=b0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Xt(a))return o();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((k,w)=>{let[S,P]=w;return""+k+S+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Xt(a))return o();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return o()}}}K(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Zc(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Zc(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=zh(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=zh(u)}catch{return o()}let d={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Xt(d.formMethod))return{path:n,submission:d};let f=Mn(n);return t&&f.search&&Tf(f.search)&&u.append("index",""),f.search="?"+u,{path:Yr(f),submission:d}}function sk(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Dh(e,t,n,r,o,i,a,s,u,c,d,f,h,k,w){let S=w?Object.values(w)[0]:k?Object.values(k)[0]:void 0,P=e.createURL(t.location),g=e.createURL(o),p=w?Object.keys(w)[0]:void 0,m=sk(n,p).filter((T,E)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(lk(t.loaderData,t.matches[E],T)||a.some(z=>z===T.route.id))return!0;let O=t.matches[E],M=T;return Fh(T,Re({currentUrl:P,currentParams:O.params,nextUrl:g,nextParams:M.params},r,{actionResult:S,defaultShouldRevalidate:i||P.pathname+P.search===g.pathname+g.search||P.search!==g.search||S0(O,M)}))}),C=[];return c.forEach((T,E)=>{if(!n.some(Se=>Se.route.id===T.routeId)||u.has(E))return;let O=wo(f,T.path,h);if(!O){C.push({key:E,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let M=t.fetchers.get(E),z=Jc(O,T.path),Z=!1;d.has(E)?Z=!1:s.includes(E)?Z=!0:M&&M.state!=="idle"&&M.data===void 0?Z=i:Z=Fh(z,Re({currentUrl:P,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:S,defaultShouldRevalidate:i})),Z&&C.push({key:E,routeId:T.routeId,path:T.path,matches:O,match:z,controller:new AbortController})}),[m,C]}function lk(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function S0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Fh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function $h(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];K(o,"No route found in manifest");let i={};for(let a in r){let u=o[a]!==void 0&&a!=="hasErrorBoundary";Wr(!u,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!u&&!I2.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,Re({},t(o),{lazy:void 0}))}async function mi(e,t,n,r,o,i,a,s){s===void 0&&(s={});let u,c,d,f=w=>{let S,P=new Promise((g,p)=>S=p);return d=()=>S(),t.signal.addEventListener("abort",d),Promise.race([w({request:t,params:n.params,context:s.requestContext}),P])};try{let w=n.route[e];if(n.route.lazy)if(w){let S,P=await Promise.all([f(w).catch(g=>{S=g}),$h(n.route,i,o)]);if(S)throw S;c=P[0]}else if(await $h(n.route,i,o),w=n.route[e],w)c=await f(w);else if(e==="action"){let S=new URL(t.url),P=S.pathname+S.search;throw Mt(405,{method:t.method,pathname:P,routeId:n.route.id})}else return{type:Me.data,data:void 0};else if(w)c=await f(w);else{let S=new URL(t.url),P=S.pathname+S.search;throw Mt(404,{pathname:P})}K(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(w){u=Me.error,c=w}finally{d&&t.signal.removeEventListener("abort",d)}if(fk(c)){let w=c.status;if(tk.has(w)){let g=c.headers.get("Location");if(K(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!w0.test(g))g=Qc(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,g);else if(!s.isStaticRequest){let p=new URL(t.url),v=g.startsWith("//")?new URL(p.protocol+g):new URL(g),m=dr(v.pathname,a)!=null;v.origin===p.origin&&m&&(g=v.pathname+v.search+v.hash)}if(s.isStaticRequest)throw c.headers.set("Location",g),c;return{type:Me.redirect,status:w,location:g,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:u===Me.error?Me.error:Me.data,response:c};let S,P=c.headers.get("Content-Type");return P&&/\bapplication\/json\b/.test(P)?S=await c.json():S=await c.text(),u===Me.error?{type:u,error:new Pf(w,c.statusText,S),headers:c.headers}:{type:Me.data,data:S,statusCode:c.status,headers:c.headers}}if(u===Me.error)return{type:u,error:c};if(dk(c)){var h,k;return{type:Me.deferred,deferredData:c,statusCode:(h=c.init)==null?void 0:h.status,headers:((k=c.init)==null?void 0:k.headers)&&new Headers(c.init.headers)}}return{type:Me.data,data:c}}function gi(e,t,n,r){let o=e.createURL(b0(t)).toString(),i={signal:n};if(r&&Xt(r.formMethod)){let{formMethod:a,formEncType:s}=r;i.method=a.toUpperCase(),s==="application/json"?(i.headers=new Headers({"Content-Type":s}),i.body=JSON.stringify(r.json)):s==="text/plain"?i.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?i.body=Zc(r.formData):i.body=r.formData}return new Request(o,i)}function Zc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function zh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function uk(e,t,n,r,o){let i={},a=null,s,u=!1,c={};return n.forEach((d,f)=>{let h=t[f].route.id;if(K(!Io(d),"Cannot handle redirect results in processLoaderData"),Fi(d)){let k=Di(e,h),w=d.error;r&&(w=Object.values(r)[0],r=void 0),a=a||{},a[k.route.id]==null&&(a[k.route.id]=w),i[h]=void 0,u||(u=!0,s=y0(d.error)?d.error.status:500),d.headers&&(c[h]=d.headers)}else Ir(d)?(o.set(h,d.deferredData),i[h]=d.deferredData.data):i[h]=d.data,d.statusCode!=null&&d.statusCode!==200&&!u&&(s=d.statusCode),d.headers&&(c[h]=d.headers)}),r&&(a=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:a,statusCode:s||200,loaderHeaders:c}}function Uh(e,t,n,r,o,i,a,s){let{loaderData:u,errors:c}=uk(t,n,r,o,s);for(let d=0;d<i.length;d++){let{key:f,match:h,controller:k}=i[d];K(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let w=a[d];if(!(k&&k.signal.aborted))if(Fi(w)){let S=Di(e.matches,h==null?void 0:h.route.id);c&&c[S.route.id]||(c=Re({},c,{[S.route.id]:w.error})),e.fetchers.delete(f)}else if(Io(w))K(!1,"Unhandled fetcher revalidation redirect");else if(Ir(w))K(!1,"Unhandled fetcher deferred data");else{let S=Hn(w.data);e.fetchers.set(f,S)}}return{loaderData:u,errors:c}}function Bh(e,t,n,r){let o=Re({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function Di(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Hh(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Mt(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new Pf(e||500,a,new Error(s),!0)}function Wh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Io(n))return{result:n,idx:t}}}function b0(e){let t=typeof e=="string"?Mn(e):e;return Yr(Re({},t,{hash:""}))}function ck(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Ir(e){return e.type===Me.deferred}function Fi(e){return e.type===Me.error}function Io(e){return(e&&e.type)===Me.redirect}function dk(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function fk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function pk(e){return ek.has(e.toLowerCase())}function Xt(e){return J2.has(e.toLowerCase())}async function Yh(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let s=n[a],u=t[a];if(!u)continue;let c=e.find(f=>f.route.id===u.route.id),d=c!=null&&!S0(c,u)&&(i&&i[u.route.id])!==void 0;if(Ir(s)&&(o||d)){let f=r[a];K(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await C0(s,f,o).then(h=>{h&&(n[a]=h||n[a])})}}}async function C0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Me.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Me.error,error:o}}return{type:Me.data,data:e.deferredData.data}}}function Tf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Jc(e,t){let n=typeof t=="string"?Mn(t).search:t.search;if(e[e.length-1].route.index&&Tf(n||""))return e[e.length-1];let r=v0(e);return r[r.length-1]}function Vh(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Lu(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function hk(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function vi(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function mk(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Hn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function gk(e,t){try{let n=e.sessionStorage.getItem(k0);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function vk(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(k0,JSON.stringify(n))}catch(r){Wr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},il.apply(this,arguments)}const ka=x.createContext(null),Rf=x.createContext(null),Qr=x.createContext(null),Ll=x.createContext(null),yr=x.createContext({outlet:null,matches:[],isDataRoute:!1}),E0=x.createContext(null);function yk(e,t){let{relative:n}=t===void 0?{}:t;Sa()||K(!1);let{basename:r,navigator:o}=x.useContext(Qr),{hash:i,pathname:a,search:s}=Ml(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:bn([r,a])),o.createHref({pathname:u,search:s,hash:i})}function Sa(){return x.useContext(Ll)!=null}function Zo(){return Sa()||K(!1),x.useContext(Ll).location}function j0(e){x.useContext(Qr).static||x.useLayoutEffect(e)}function kt(){let{isDataRoute:e}=x.useContext(yr);return e?Nk():xk()}function xk(){Sa()||K(!1);let e=x.useContext(ka),{basename:t,navigator:n}=x.useContext(Qr),{matches:r}=x.useContext(yr),{pathname:o}=Zo(),i=JSON.stringify(Ef(r)),a=x.useRef(!1);return j0(()=>{a.current=!0}),x.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){n.go(u);return}let d=jf(u,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:bn([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,i,o,e])}function ba(){let{matches:e}=x.useContext(yr),t=e[e.length-1];return t?t.params:{}}function Ml(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(yr),{pathname:o}=Zo(),i=JSON.stringify(Ef(r));return x.useMemo(()=>jf(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function wk(e,t,n){Sa()||K(!1);let{navigator:r}=x.useContext(Qr),{matches:o}=x.useContext(yr),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Zo(),c;if(t){var d;let S=typeof t=="string"?Mn(t):t;s==="/"||(d=S.pathname)!=null&&d.startsWith(s)||K(!1),c=S}else c=u;let f=c.pathname||"/",h=s==="/"?f:f.slice(s.length)||"/",k=wo(e,{pathname:h}),w=Ek(k&&k.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:bn([s,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:bn([s,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n);return t&&w?x.createElement(Ll.Provider,{value:{location:il({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Le.Pop}},w):w}function kk(){let e=Rk(),t=y0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,i)}const Sk=x.createElement(kk,null);class bk extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(yr.Provider,{value:this.props.routeContext},x.createElement(E0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ck(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(ka);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(yr.Provider,{value:t},r)}function Ek(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=i.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));s>=0||K(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,u,c)=>{let d=u.route.id?a==null?void 0:a[u.route.id]:null,f=null;n&&(f=u.route.errorElement||Sk);let h=t.concat(i.slice(0,c+1)),k=()=>{let w;return d?w=f:u.route.Component?w=x.createElement(u.route.Component,null):u.route.element?w=u.route.element:w=s,x.createElement(Ck,{match:u,routeContext:{outlet:s,matches:h,isDataRoute:n!=null},children:w})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?x.createElement(bk,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:k(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):k()},null)}var P0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(P0||{}),al=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(al||{});function jk(e){let t=x.useContext(ka);return t||K(!1),t}function Pk(e){let t=x.useContext(Rf);return t||K(!1),t}function Tk(e){let t=x.useContext(yr);return t||K(!1),t}function T0(e){let t=Tk(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function Rk(){var e;let t=x.useContext(E0),n=Pk(al.UseRouteError),r=T0(al.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Nk(){let{router:e}=jk(P0.UseNavigateStable),t=T0(al.UseNavigateStable),n=x.useRef(!1);return j0(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,il({fromRouteId:t},i)))},[e,t])}function Ik(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Le.Pop,navigator:i,static:a=!1}=e;Sa()&&K(!1);let s=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=Mn(r));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:k="default"}=r,w=x.useMemo(()=>{let S=dr(c,s);return S==null?null:{location:{pathname:S,search:d,hash:f,state:h,key:k},navigationType:o}},[s,c,d,f,h,k,o]);return w==null?null:x.createElement(Qr.Provider,{value:u},x.createElement(Ll.Provider,{children:n,value:w}))}new Promise(()=>{});function Ok(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:x.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:x.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(this,arguments)}function R0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ak(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lk(e,t){return e.button===0&&(!t||t==="_self")&&!Ak(e)}const Mk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],_k=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function Dk(e,t){return ik({basename:t==null?void 0:t.basename,future:Uo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:T2({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Fk(),routes:e,mapRouteProperties:Ok,window:t==null?void 0:t.window}).initialize()}function Fk(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Uo({},t,{errors:$k(t.errors)})),t}function $k(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Pf(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const N0=x.createContext({isTransitioning:!1}),zk=x.createContext(new Map),Uk="startTransition",Gh=vx[Uk],Bk="flushSync",Kh=P2[Bk];function Hk(e){Gh?Gh(e):e()}function yi(e){Kh?Kh(e):e()}class Wk{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Yk(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=x.useState(n.state),[a,s]=x.useState(),[u,c]=x.useState({isTransitioning:!1}),[d,f]=x.useState(),[h,k]=x.useState(),[w,S]=x.useState(),P=x.useRef(new Map),{v7_startTransition:g}=r||{},p=x.useCallback(E=>{g?Hk(E):E()},[g]),v=x.useCallback((E,O)=>{let{deletedFetchers:M,unstable_flushSync:z,unstable_viewTransitionOpts:Z}=O;M.forEach(pe=>P.current.delete(pe)),E.fetchers.forEach((pe,st)=>{pe.data!==void 0&&P.current.set(st,pe.data)});let Se=n.window==null||typeof n.window.document.startViewTransition!="function";if(!Z||Se){z?yi(()=>i(E)):p(()=>i(E));return}if(z){yi(()=>{h&&(d&&d.resolve(),h.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})});let pe=n.window.document.startViewTransition(()=>{yi(()=>i(E))});pe.finished.finally(()=>{yi(()=>{f(void 0),k(void 0),s(void 0),c({isTransitioning:!1})})}),yi(()=>k(pe));return}h?(d&&d.resolve(),h.skipTransition(),S({state:E,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})):(s(E),c({isTransitioning:!0,flushSync:!1,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation}))},[n.window,h,d,P,p]);x.useLayoutEffect(()=>n.subscribe(v),[n,v]),x.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new Wk)},[u]),x.useEffect(()=>{if(d&&a&&n.window){let E=a,O=d.promise,M=n.window.document.startViewTransition(async()=>{p(()=>i(E)),await O});M.finished.finally(()=>{f(void 0),k(void 0),s(void 0),c({isTransitioning:!1})}),k(M)}},[p,a,d,n.window]),x.useEffect(()=>{d&&a&&o.location.key===a.location.key&&d.resolve()},[d,h,o.location,a]),x.useEffect(()=>{!u.isTransitioning&&w&&(s(w.state),c({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),S(void 0))},[u.isTransitioning,w]);let m=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:E=>n.navigate(E),push:(E,O,M)=>n.navigate(E,{state:O,preventScrollReset:M==null?void 0:M.preventScrollReset}),replace:(E,O,M)=>n.navigate(E,{replace:!0,state:O,preventScrollReset:M==null?void 0:M.preventScrollReset})}),[n]),C=n.basename||"/",T=x.useMemo(()=>({router:n,navigator:m,static:!1,basename:C}),[n,m,C]);return x.createElement(x.Fragment,null,x.createElement(ka.Provider,{value:T},x.createElement(Rf.Provider,{value:o},x.createElement(zk.Provider,{value:P.current},x.createElement(N0.Provider,{value:u},x.createElement(Ik,{basename:C,location:o.location,navigationType:o.historyAction,navigator:m},o.initialized?x.createElement(Vk,{routes:n.routes,state:o}):t))))),null)}function Vk(e){let{routes:t,state:n}=e;return wk(t,void 0,n)}const Gk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,St=x.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=t,h=R0(t,Mk),{basename:k}=x.useContext(Qr),w,S=!1;if(typeof c=="string"&&Kk.test(c)&&(w=c,Gk))try{let v=new URL(window.location.href),m=c.startsWith("//")?new URL(v.protocol+c):new URL(c),C=dr(m.pathname,k);m.origin===v.origin&&C!=null?c=C+m.search+m.hash:S=!0}catch{}let P=yk(c,{relative:o}),g=Qk(c,{replace:a,state:s,target:u,preventScrollReset:d,relative:o,unstable_viewTransition:f});function p(v){r&&r(v),v.defaultPrevented||g(v)}return x.createElement("a",Uo({},h,{href:w||P,onClick:S||i?r:p,ref:n,target:u}))}),I0=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:u,unstable_viewTransition:c,children:d}=t,f=R0(t,_k),h=Ml(u,{relative:f.relative}),k=Zo(),w=x.useContext(Rf),{navigator:S}=x.useContext(Qr),P=w!=null&&Zk(h)&&c===!0,g=S.encodeLocation?S.encodeLocation(h).pathname:h.pathname,p=k.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(p=p.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase());const m=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=p===g||!a&&p.startsWith(g)&&p.charAt(m)==="/",T=v!=null&&(v===g||!a&&v.startsWith(g)&&v.charAt(g.length)==="/"),E={isActive:C,isPending:T,isTransitioning:P},O=C?r:void 0,M;typeof i=="function"?M=i(E):M=[i,C?"active":null,T?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let z=typeof s=="function"?s(E):s;return x.createElement(St,Uo({},f,{"aria-current":O,className:M,ref:n,style:z,to:u,unstable_viewTransition:c}),typeof d=="function"?d(E):d)});var qc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(qc||(qc={}));var Xh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xh||(Xh={}));function Xk(e){let t=x.useContext(ka);return t||K(!1),t}function Qk(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,u=kt(),c=Zo(),d=Ml(e,{relative:a});return x.useCallback(f=>{if(Lk(f,n)){f.preventDefault();let h=r!==void 0?r:Yr(c)===Yr(d);u(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[c,u,d,r,o,n,e,i,a,s])}function Zk(e,t){t===void 0&&(t={});let n=x.useContext(N0);n==null&&K(!1);let{basename:r}=Xk(qc.useViewTransitionState),o=Ml(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=dr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=dr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Xc(o.pathname,a)!=null||Xc(o.pathname,i)!=null}var it=function(){return it=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},it.apply(this,arguments)};function sa(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ye="-ms-",$i="-moz-",oe="-webkit-",O0="comm",_l="rule",Nf="decl",Jk="@import",A0="@keyframes",qk="@layer",eS=Math.abs,If=String.fromCharCode,ed=Object.assign;function tS(e,t){return Xe(e,0)^45?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}function L0(e){return e.trim()}function yn(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function Rs(e,t){return e.indexOf(t)}function Xe(e,t){return e.charCodeAt(t)|0}function Bo(e,t,n){return e.slice(t,n)}function sn(e){return e.length}function M0(e){return e.length}function Ei(e,t){return t.push(e),e}function nS(e,t){return e.map(t).join("")}function Qh(e,t){return e.filter(function(n){return!yn(n,t)})}var Dl=1,Ho=1,_0=0,Ht=0,ze=0,Jo="";function Fl(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Dl,column:Ho,length:a,return:"",siblings:s}}function Wn(e,t){return ed(Fl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ro(e){for(;e.root;)e=Wn(e.root,{children:[e]});Ei(e,e.siblings)}function rS(){return ze}function oS(){return ze=Ht>0?Xe(Jo,--Ht):0,Ho--,ze===10&&(Ho=1,Dl--),ze}function en(){return ze=Ht<_0?Xe(Jo,Ht++):0,Ho++,ze===10&&(Ho=1,Dl++),ze}function Dr(){return Xe(Jo,Ht)}function Ns(){return Ht}function $l(e,t){return Bo(Jo,e,t)}function td(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function iS(e){return Dl=Ho=1,_0=sn(Jo=e),Ht=0,[]}function aS(e){return Jo="",e}function Mu(e){return L0($l(Ht-1,nd(e===91?e+2:e===40?e+1:e)))}function sS(e){for(;(ze=Dr())&&ze<33;)en();return td(e)>2||td(ze)>3?"":" "}function lS(e,t){for(;--t&&en()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return $l(e,Ns()+(t<6&&Dr()==32&&en()==32))}function nd(e){for(;en();)switch(ze){case e:return Ht;case 34:case 39:e!==34&&e!==39&&nd(ze);break;case 40:e===41&&nd(e);break;case 92:en();break}return Ht}function uS(e,t){for(;en()&&e+ze!==47+10;)if(e+ze===42+42&&Dr()===47)break;return"/*"+$l(t,Ht-1)+"*"+If(e===47?e:en())}function cS(e){for(;!td(Dr());)en();return $l(e,Ht)}function dS(e){return aS(Is("",null,null,null,[""],e=iS(e),0,[0],e))}function Is(e,t,n,r,o,i,a,s,u){for(var c=0,d=0,f=a,h=0,k=0,w=0,S=1,P=1,g=1,p=0,v="",m=o,C=i,T=r,E=v;P;)switch(w=p,p=en()){case 40:if(w!=108&&Xe(E,f-1)==58){Rs(E+=G(Mu(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:E+=Mu(p);break;case 9:case 10:case 13:case 32:E+=sS(w);break;case 92:E+=lS(Ns()-1,7);continue;case 47:switch(Dr()){case 42:case 47:Ei(fS(uS(en(),Ns()),t,n,u),u);break;default:E+="/"}break;case 123*S:s[c++]=sn(E)*g;case 125*S:case 59:case 0:switch(p){case 0:case 125:P=0;case 59+d:g==-1&&(E=G(E,/\f/g,"")),k>0&&sn(E)-f&&Ei(k>32?Jh(E+";",r,n,f-1,u):Jh(G(E," ","")+";",r,n,f-2,u),u);break;case 59:E+=";";default:if(Ei(T=Zh(E,t,n,c,d,o,s,v,m=[],C=[],f,i),i),p===123)if(d===0)Is(E,t,T,T,m,i,f,s,C);else switch(h===99&&Xe(E,3)===110?100:h){case 100:case 108:case 109:case 115:Is(e,T,T,r&&Ei(Zh(e,T,T,0,0,o,s,v,o,m=[],f,C),C),o,C,f,s,r?m:C);break;default:Is(E,T,T,T,[""],C,0,s,C)}}c=d=k=0,S=g=1,v=E="",f=a;break;case 58:f=1+sn(E),k=w;default:if(S<1){if(p==123)--S;else if(p==125&&S++==0&&oS()==125)continue}switch(E+=If(p),p*S){case 38:g=d>0?1:(E+="\f",-1);break;case 44:s[c++]=(sn(E)-1)*g,g=1;break;case 64:Dr()===45&&(E+=Mu(en())),h=Dr(),d=f=sn(v=E+=cS(Ns())),p++;break;case 45:w===45&&sn(E)==2&&(S=0)}}return i}function Zh(e,t,n,r,o,i,a,s,u,c,d,f){for(var h=o-1,k=o===0?i:[""],w=M0(k),S=0,P=0,g=0;S<r;++S)for(var p=0,v=Bo(e,h+1,h=eS(P=a[S])),m=e;p<w;++p)(m=L0(P>0?k[p]+" "+v:G(v,/&\f/g,k[p])))&&(u[g++]=m);return Fl(e,t,n,o===0?_l:s,u,c,d,f)}function fS(e,t,n,r){return Fl(e,t,n,O0,If(rS()),Bo(e,2,-2),0,r)}function Jh(e,t,n,r,o){return Fl(e,t,n,Nf,Bo(e,0,r),Bo(e,r+1,-1),r,o)}function D0(e,t,n){switch(tS(e,t)){case 5103:return oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oe+e+e;case 4789:return $i+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return oe+e+$i+e+ye+e+e;case 5936:switch(Xe(e,t+11)){case 114:return oe+e+ye+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return oe+e+ye+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return oe+e+ye+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return oe+e+ye+e+e;case 6165:return oe+e+ye+"flex-"+e+e;case 5187:return oe+e+G(e,/(\w+).+(:[^]+)/,oe+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return oe+e+ye+"flex-item-"+G(e,/flex-|-self/g,"")+(yn(e,/flex-|baseline/)?"":ye+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return oe+e+ye+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return oe+e+ye+G(e,"shrink","negative")+e;case 5292:return oe+e+ye+G(e,"basis","preferred-size")+e;case 6060:return oe+"box-"+G(e,"-grow","")+oe+e+ye+G(e,"grow","positive")+e;case 4554:return oe+G(e,/([^-])(transform)/g,"$1"+oe+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,oe+"$1"),/(image-set)/,oe+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,oe+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,oe+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oe+e+e;case 4200:if(!yn(e,/flex-|baseline/))return ye+"grid-column-align"+Bo(e,t)+e;break;case 2592:case 3360:return ye+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,yn(r.props,/grid-\w+-end/)})?~Rs(e+(n=n[t].value),"span")?e:ye+G(e,"-start","")+e+ye+"grid-row-span:"+(~Rs(n,"span")?yn(n,/\d+/):+yn(n,/\d+/)-+yn(e,/\d+/))+";":ye+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return yn(r.props,/grid-\w+-start/)})?e:ye+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(Xe(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+oe+"$2-$3$1"+$i+(Xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Rs(e,"stretch")?D0(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,u,c){return ye+o+":"+i+c+(a?ye+o+"-span:"+(s?u:+u-+i)+c:"")+e});case 4949:if(Xe(e,t+6)===121)return G(e,":",":"+oe)+e;break;case 6444:switch(Xe(e,Xe(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oe+(Xe(e,14)===45?"inline-":"")+"box$3$1"+oe+"$2$3$1"+ye+"$2box$3")+e;case 100:return G(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function sl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pS(e,t,n,r){switch(e.type){case qk:if(e.children.length)break;case Jk:case Nf:return e.return=e.return||e.value;case O0:return"";case A0:return e.return=e.value+"{"+sl(e.children,r)+"}";case _l:if(!sn(e.value=e.props.join(",")))return""}return sn(n=sl(e.children,r))?e.return=e.value+"{"+n+"}":""}function hS(e){var t=M0(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function mS(e){return function(t){t.root||(t=t.return)&&e(t)}}function gS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Nf:e.return=D0(e.value,e.length,n);return;case A0:return sl([Wn(e,{value:G(e.value,"@","@"+oe)})],r);case _l:if(e.length)return nS(n=e.props,function(o){switch(yn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ro(Wn(e,{props:[G(o,/:(read-\w+)/,":"+$i+"$1")]})),ro(Wn(e,{props:[o]})),ed(e,{props:Qh(n,r)});break;case"::placeholder":ro(Wn(e,{props:[G(o,/:(plac\w+)/,":"+oe+"input-$1")]})),ro(Wn(e,{props:[G(o,/:(plac\w+)/,":"+$i+"$1")]})),ro(Wn(e,{props:[G(o,/:(plac\w+)/,ye+"input-$1")]})),ro(Wn(e,{props:[o]})),ed(e,{props:Qh(n,r)});break}return""})}}var vS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Of=typeof window<"u"&&"HTMLElement"in window,yS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),xS={},zl=Object.freeze([]),Yo=Object.freeze({});function F0(e,t,n){return n===void 0&&(n=Yo),e.theme!==n.theme&&e.theme||t||n.theme}var $0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kS=/(^-|-$)/g;function qh(e){return e.replace(wS,"-").replace(kS,"")}var SS=/(a)(d)/gi,em=function(e){return String.fromCharCode(e+(e>25?39:97))};function rd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=em(t%52)+n;return(em(t%52)+n).replace(SS,"$1-$2")}var _u,ko=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},z0=function(e){return ko(5381,e)};function U0(e){return rd(z0(e)>>>0)}function bS(e){return e.displayName||e.name||"Component"}function Du(e){return typeof e=="string"&&!0}var B0=typeof Symbol=="function"&&Symbol.for,H0=B0?Symbol.for("react.memo"):60115,CS=B0?Symbol.for("react.forward_ref"):60112,ES={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},PS=((_u={})[CS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_u[H0]=W0,_u);function tm(e){return("type"in(t=e)&&t.type.$$typeof)===H0?W0:"$$typeof"in e?PS[e.$$typeof]:ES;var t}var TS=Object.defineProperty,RS=Object.getOwnPropertyNames,nm=Object.getOwnPropertySymbols,NS=Object.getOwnPropertyDescriptor,IS=Object.getPrototypeOf,rm=Object.prototype;function Y0(e,t,n){if(typeof t!="string"){if(rm){var r=IS(t);r&&r!==rm&&Y0(e,r,n)}var o=RS(t);nm&&(o=o.concat(nm(t)));for(var i=tm(e),a=tm(t),s=0;s<o.length;++s){var u=o[s];if(!(u in jS||n&&n[u]||a&&u in a||i&&u in i)){var c=NS(t,u);try{TS(e,u,c)}catch{}}}}return e}function Vo(e){return typeof e=="function"}function Af(e){return typeof e=="object"&&"styledComponentId"in e}function Or(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function od(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function la(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function id(e,t,n){if(n===void 0&&(n=!1),!n&&!la(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=id(e[r],t[r]);else if(la(t))for(var r in t)e[r]=id(e[r],t[r]);return e}function Lf(e,t){Object.defineProperty(e,"toString",{value:t})}function Ca(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var OS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ca(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),u=(a=0,n.length);a<u;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Os=new Map,ll=new Map,Fu=1,Ja=function(e){if(Os.has(e))return Os.get(e);for(;ll.has(Fu);)Fu++;var t=Fu++;return Os.set(e,t),ll.set(t,e),t},AS=function(e,t){Os.set(e,t),ll.set(t,e)},LS="style[".concat(Wo,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),MS=new RegExp("^".concat(Wo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_S=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},DS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var u=s.match(MS);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(AS(d,c),_S(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}};function FS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var V0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var u=Array.from(s.querySelectorAll("style[".concat(Wo,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Wo,"active"),r.setAttribute("data-styled-version","6.1.0");var a=FS();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},$S=function(){function e(t){this.element=V0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw Ca(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),zS=function(){function e(t){this.element=V0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),US=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),om=Of,BS={isServer:!Of,useCSSOMInjection:!yS},ul=function(){function e(t,n,r){t===void 0&&(t=Yo),n===void 0&&(n={});var o=this;this.options=it(it({},BS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Of&&om&&(om=!1,function(i){for(var a=document.querySelectorAll(LS),s=0,u=a.length;s<u;s++){var c=a[s];c&&c.getAttribute(Wo)!=="active"&&(DS(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Lf(this,function(){return function(i){for(var a=i.getTag(),s=a.length,u="",c=function(f){var h=function(g){return ll.get(g)}(f);if(h===void 0)return"continue";var k=i.names.get(h),w=a.getGroup(f);if(k===void 0||w.length===0)return"continue";var S="".concat(Wo,".g").concat(f,'[id="').concat(h,'"]'),P="";k!==void 0&&k.forEach(function(g){g.length>0&&(P+="".concat(g,","))}),u+="".concat(w).concat(S,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)c(d);return u}(o)})}return e.registerId=function(t){return Ja(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(it(it({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new US(o):r?new $S(o):new zS(o)}(this.options),new OS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ja(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ja(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ja(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),HS=/&/g,WS=/^\s*\/\/.*$/gm;function G0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=G0(n.children,t)),n})}function YS(e){var t,n,r,o=e===void 0?Yo:e,i=o.options,a=i===void 0?Yo:i,s=o.plugins,u=s===void 0?zl:s,c=function(h,k,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},d=u.slice();d.push(function(h){h.type===_l&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(HS,n).replace(r,c))}),a.prefix&&d.push(gS),d.push(pS);var f=function(h,k,w,S){k===void 0&&(k=""),w===void 0&&(w=""),S===void 0&&(S="&"),t=S,n=k,r=new RegExp("\\".concat(n,"\\b"),"g");var P=h.replace(WS,""),g=dS(w||k?"".concat(w," ").concat(k," { ").concat(P," }"):P);a.namespace&&(g=G0(g,a.namespace));var p=[];return sl(g,hS(d.concat(mS(function(v){return p.push(v)})))),p};return f.hash=u.length?u.reduce(function(h,k){return k.name||Ca(15),ko(h,k.name)},5381).toString():"",f}var VS=new ul,ad=YS(),K0=De.createContext({shouldForwardProp:void 0,styleSheet:VS,stylis:ad});K0.Consumer;De.createContext(void 0);function sd(){return x.useContext(K0)}var GS=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ad);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Lf(this,function(){throw Ca(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ad),this.name+t.hash},e}(),KS=function(e){return e>="A"&&e<="Z"};function im(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;KS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var X0=function(e){return e==null||e===!1||e===""},Q0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!X0(i)&&(Array.isArray(i)&&i.isCss||Vo(i)?r.push("".concat(im(o),":"),i,";"):la(i)?r.push.apply(r,sa(sa(["".concat(o," {")],Q0(i),!1),["}"],!1)):r.push("".concat(im(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in vS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function lr(e,t,n,r){if(X0(e))return[];if(Af(e))return[".".concat(e.styledComponentId)];if(Vo(e)){if(!Vo(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return lr(o,t,n,r)}var i;return e instanceof GS?n?(e.inject(n,r),[e.getName(r)]):[e]:la(e)?Q0(e):Array.isArray(e)?Array.prototype.concat.apply(zl,e.map(function(a){return lr(a,t,n,r)})):[e.toString()]}function Z0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vo(n)&&!Af(n))return!1}return!0}var XS=z0("6.1.0"),QS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Z0(t),this.componentId=n,this.baseHash=ko(XS,n),this.baseStyle=r,ul.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Or(o,this.staticRulesId);else{var i=od(lr(this.rules,t,n,r)),a=rd(ko(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=Or(o,a),this.staticRulesId=a}else{for(var u=ko(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var h=od(lr(f,t,n,r));u=ko(u,h+d),c+=h}}if(c){var k=rd(u>>>0);n.hasNameForId(this.componentId,k)||n.insertRules(this.componentId,k,r(c,".".concat(k),void 0,this.componentId)),o=Or(o,k)}}return o},e}(),Mf=De.createContext(void 0);Mf.Consumer;var $u={};function ZS(e,t,n){var r=Af(e),o=e,i=!Du(e),a=t.attrs,s=a===void 0?zl:a,u=t.componentId,c=u===void 0?function(v,m){var C=typeof v!="string"?"sc":qh(v);$u[C]=($u[C]||0)+1;var T="".concat(C,"-").concat(U0("6.1.0"+C+$u[C]));return m?"".concat(m,"-").concat(T):T}(t.displayName,t.parentComponentId):u,d=t.displayName;d===void 0&&function(v){return Du(v)?"styled.".concat(v):"Styled(".concat(bS(v),")")}(e);var f=t.displayName&&t.componentId?"".concat(qh(t.displayName),"-").concat(t.componentId):t.componentId||c,h=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;k=function(v,m){return w(v,m)&&S(v,m)}}else k=w}var P=new QS(n,f,r?o.componentStyle:void 0);function g(v,m){return function(C,T,E){var O=C.attrs,M=C.componentStyle,z=C.defaultProps,Z=C.foldedComponentIds,Se=C.styledComponentId,pe=C.target,st=De.useContext(Mf),ae=sd(),Oe=C.shouldForwardProp||ae.shouldForwardProp,he=function(se,ue,Ve){for(var Fe,Ge=it(it({},ue),{className:void 0,theme:Ve}),mn=0;mn<se.length;mn+=1){var me=Vo(Fe=se[mn])?Fe(Ge):Fe;for(var Ae in me)Ge[Ae]=Ae==="className"?Or(Ge[Ae],me[Ae]):Ae==="style"?it(it({},Ge[Ae]),me[Ae]):me[Ae]}return ue.className&&(Ge.className=Or(Ge.className,ue.className)),Ge}(O,T,F0(T,st,z)||Yo),N=he.as||pe,D={};for(var F in he)he[F]===void 0||F[0]==="$"||F==="as"||F==="theme"||(F==="forwardedAs"?D.as=he.forwardedAs:Oe&&!Oe(F,N)||(D[F]=he[F]));var X=function(se,ue){var Ve=sd(),Fe=se.generateAndInjectStyles(ue,Ve.styleSheet,Ve.stylis);return Fe}(M,he),V=Or(Z,Se);return X&&(V+=" "+X),he.className&&(V+=" "+he.className),D[Du(N)&&!$0.has(N)?"class":"className"]=V,D.ref=E,x.createElement(N,D)}(p,v,m)}var p=De.forwardRef(g);return p.attrs=h,p.componentStyle=P,p.shouldForwardProp=k,p.foldedComponentIds=r?Or(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=f,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(m){for(var C=[],T=1;T<arguments.length;T++)C[T-1]=arguments[T];for(var E=0,O=C;E<O.length;E++)id(m,O[E],!0);return m}({},o.defaultProps,v):v}}),Lf(p,function(){return".".concat(p.styledComponentId)}),i&&Y0(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function am(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var sm=function(e){return Object.assign(e,{isCss:!0})};function J0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Vo(e)||la(e)){var r=e;return sm(lr(am(zl,sa([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?lr(o):sm(lr(am(o,t)))}function ld(e,t,n){if(n===void 0&&(n=Yo),!t)throw Ca(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,J0.apply(void 0,sa([o],i,!1)))};return r.attrs=function(o){return ld(e,t,it(it({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ld(e,t,it(it({},n),o))},r}var q0=function(e){return ld(ZS,e)},y=q0;$0.forEach(function(e){y[e]=q0(e)});var JS=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Z0(t),ul.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(od(lr(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&ul.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function qS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=J0.apply(void 0,sa([e],t,!1)),o="sc-global-".concat(U0(JSON.stringify(r))),i=new JS(r,o),a=function(u){var c=sd(),d=De.useContext(Mf),f=De.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&s(f,u,c.styleSheet,d,c.stylis),De.useLayoutEffect(function(){if(!c.styleSheet.server)return s(f,u,c.styleSheet,d,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,f,h){if(i.isStatic)i.renderStyles(u,xS,d,h);else{var k=it(it({},c),{theme:F0(c,f,a.defaultProps)});i.renderStyles(u,k,d,h)}}return De.memo(a)}const It=y.div`
    display: flex;
`,eb=y(It)`
  align-items: center;
  justify-content: center;
`,tb=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;
`,nb=y.form`
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
`,zu=y.input`
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
`,rb=y.button`
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
`,ob=y(St)`
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
`,ib=y.div`
    display: flex
`,ab=y.div`
    font-weight: 800;
    font-size: 100px;
    color: var(--white);
`,sb=y.div`
    font-weight: 900;
    font-size: 100px;
    color: var(--blue);
`,lm=y.label`
    margin-right: 21vw;
    padding-left: 10px;
    font-size: 17px;
    color: var(--white);
`,lb=y(St)`
  font-size: 11px;
  color: var(--blue);
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`,ub=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,cb=y.div`
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
`,db=y.label`
    font-size: 20px;
    color: black;
    text-align: center;
    color: white;
`,fb=y.div`
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

`,pb=y.button`
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
`,hb=y(St)`
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
`;class _f{constructor(t,n){this.username=t,this.password=n,this.profilePicture=null,this.posts=[],this.biography="",this.education="",this.workStatus="",this.socialMedia=[],this.interests=[],this.role=""}setUsername(t){this.username=t}getUsername(){return this.username}setPassword(t){this.password=t}getPassword(){return this.password}setProfilePicture(t){this.profilePicture=t}getProfilePicture(){return this.profilePicture}addPost(t){this.posts.push(t)}getPosts(){return this.posts}setBiography(t){this.biography=t}getBiography(){return this.biography}setWorkStatus(t){this.workStatus=t}getWorkStatus(){return this.workStatus}setSocialMedia(t){this.socialMedia=t}getSocialMedia(){return this.socialMedia}}class qo{constructor(t,n,r,o,i,a){this.author=t,this.title=n,this.content=r,this.topic=o,this.timeStamp=i,this.id=a,this.likes=0,this.comments=[],this.url="/".concat(String(t.getUsername()),"/",String(a))}like(){this.likes++}dislike(){this.likes--}addComment(t){this.comments.push(t)}getCommentsTotal(){let t=0;for(const n of this.comments){t++;for(const r of n.comments){t++;for(const o of r.comments)t++}}return t}getAuthor(){return{author:this.author}}getPostInformation(){return{author:this.author,title:this.title,content:this.content,topic:this.topic,timeStamp:this.timeStamp,id:this.id,likes:this.likes,comments:this.comments}}getPostURL(){return{url:this.url}}}class Pt{constructor(t,n,r,o){this.author=t,this.content=n,this.timeStamp=r,this.id=o,this.likes=0,this.comments=[]}like(){this.likes++}unlike(){this.likes--}addComment(t){this.comments.push(t)}getAuthor(){return{author:this.author}}getPostInformation(){return{author:this.author,title:this.title,content:this.content,topic:this.topic,timeStamp:this.timeStamp,id:this.id,likes:this.likes,comments:this.comments}}getPostURL(){return{url:this.url}}}const Ul="/CodeConnect/assets/MainUserPfp-1324bd9a.png",mb="/CodeConnect/assets/profile3-65bbbce1.jpg",Zr="/CodeConnect/assets/userPfp3-ca280f4a.png";class Bl{constructor(t,n,r){this.socialMedia=t,this.username=n,this.link=r}setSocialMedia(t){this.socialMedia=t}getSocialMedia(){return this.socialMedia}setUsername(t){this.username=t}getUsername(){return this.username}setLink(t){this.link=t}getLink(){return this.link}}let pn=class{constructor(t){this.name=t,this.posts=[]}getName(){return this.name}addPost(t){this.posts.push(t)}getPosts(){return this.posts}};const Cn=[],re=[],ft=[];function gb(e,t,n,r){let o=re.length;const i=localStorage.getItem("userDatabaseKey"),a=Cn[i],s=new qo(a,e,n,t,r,o);re.push(s)}function vb(e,t,n,r){const o=localStorage.getItem("userDatabaseKey"),i=Cn[o];if(t==-1&&n==-1){const a=new Pt(i,r,"1 second ago",e.comments.length);e.addComment(a)}else if(t>=0&&n==-1){const a=new Pt(i,r,"1 second ago",e.comments.at(t).comments.length);e.comments.at(t).addComment(a)}else{const a=new Pt(i,r,"1 second ago",e.comments.at(t).comments.at(n).comments.length);e.comments.at(t).comments.at(n).addComment(a)}}const mt=new _f("PixelPioneer","123");mt.setProfilePicture(Ul);mt.setBiography("OMG this is my bio!!");const yb=new Bl("github","PixelPioneer"),xb=new Bl("twitter","PixelPioneer");mt.setSocialMedia([xb,yb]);mt.role="Teacher";mt.interests=["Web Development","React","UX Design"];const Ot=new _f("madscientist","password");Ot.setProfilePicture(mb);const wb=new Bl("twitter","madscientist123");Ot.setSocialMedia([wb]);Ot.role="Student";Ot.interests=["Game Development","C++"];const xr=new _f("supasonic","password");xr.setProfilePicture(Zr);const kb=new Bl("github","supasupasonicc");xr.setSocialMedia([kb]);xr.role="Student";xr.interests=["Machine Learning","C++","Mobile Dev"];Cn.push(mt);Cn.push(Ot);Cn.push(xr);const Df=new qo(mt,"Learning React","I am learning React for a school project, what are the best resources to learn from?","React","3 months ago",re.length);re.push(Df);mt.addPost(Df);Df.likes=1;const Ff=new qo(Ot,"Growtopia - My new game!","I've been developing my farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!","Game Development","1 month ago",re.length);re.push(Ff);Ot.addPost(Ff);Ff.likes=93;const $f=new qo(xr,"Internship Help","I'm in my third year of university and I'm want to start applying to internships. I've never had an interview before and I was wondering what the process is normally like?","Career","2 hours ago",re.length);re.push($f);xr.addPost($f);$f.likes=18;const zf=new qo(mt,"IDE for python","What are the best IDE's for learning python?","Python","3 hours ago",re.length);re.push(zf);mt.addPost(zf);zf.likes=30;const Uf=new qo(Ot,"New project","Checkout my project. Done in all python","Python","4 hours ago",re.length);re.push(Uf);Ot.addPost(Uf);Uf.likes=136;const Bf=new Pt(mt,"Update: I started watching a youtube tutorial, but I'm finding it hard to follow... maybe after all this struggle I'll start my own channel","3 months ago",re.at(0).length),Sb=new Pt(Ot,"This is actually such a big problem in the community! So many 'flashy' tutorials out there with bad content","2 months ago",Bf.comments.length);re.at(0).addComment(Bf);Bf.addComment(Sb);const e1=new Pt(mt,"Update 2: Yep! I am definitely starting my own channel after I learn the basics, UGHh!","2 months ago",re.at(0).length),Hf=new Pt(Ot,"Hey any update on this? Did you end up making a youtube channel?","1 month ago",0),bb=new Pt(Ot,"I would love to hear how you got started with react","1 month ago",0),Cb=new Pt(Ot,"wow! i'm talking to myself :(","2 weeks ago",1);re.at(0).addComment(e1);e1.addComment(Hf);Hf.addComment(bb);Hf.addComment(Cb);const Eb=new Pt(xr,"Uhhhh hey you should update this post haha","1 month ago",re.at(1).length);re.at(1).addComment(Eb);const jb=new Pt(mt,"Cool name! What does this app do? where can I access it? you forgot to link the beta I think :)","1 month ago",re.at(1).length);re.at(1).addComment(jb);const Pb=new Pt(mt,"I totally felt confused and overwhelmed when trying to find an internship too! You're not alone in this. It gets better :)","1 day ago",re.at(2).length);re.at(2).addComment(Pb);const Tb=new Pt(mt,"Interview processes depend on the company! They usually start with some coding test or a screening interview, and then they focus more on your specific skills. DM me for more info?","1 day ago",re.at(2).length);re.at(2).addComment(Tb);const Rb=new pn("Web Development"),Nb=new pn("React"),Ib=new pn("Python"),Ob=new pn("JavaScript"),Ab=new pn("Data Structures"),Lb=new pn("Networks"),Mb=new pn("Game Development"),_b=new pn("HTML"),Db=new pn("CSS"),Fb=new pn("Career");ft.push(Rb);ft.push(Nb);ft.push(Ib);ft.push(Ob);ft.push(Ab);ft.push(Lb);ft.push(Mb);ft.push(_b);ft.push(Db);ft.push(Fb);re.forEach(e=>{ft.forEach(t=>{e.topic===t.name&&t.posts.push(e)})});function $b(e,t){for(let n=0;n<Cn.length;n++)if(Cn[n].getUsername()===e&&Cn[n].getPassword()===t)return localStorage.setItem("userDatabaseKey",n),!0;return!1}const zb={login:async(e,t)=>$b(e,t)?{success:!0,user:{username:e}}:{success:!1,error:"Invalid credentials"}};function Ub(){const e=kt(),[t,n]=x.useState(""),[r,o]=x.useState(""),[i,a]=x.useState(""),[s,u]=x.useState(!1),[c,d]=x.useState(!1),f=async()=>{try{const S=await zb.login(t,r);S.success?(console.log("Login successful:",S.user),e("/CodeConnect/home")):a(S.error)}catch(S){console.error("Login error:",S),a("Unknown error has occured. Please try again.")}},h=()=>{event.preventDefault(),d(!0)},k=()=>{event.preventDefault(),u(!0)},w=()=>{u(!1)};return l.jsx(eb,{children:l.jsxs(tb,{children:[l.jsxs(ib,{children:[l.jsx(ab,{children:"Code"}),l.jsx(sb,{children:"Connect"})]}),l.jsxs(nb,{children:[l.jsxs("div",{children:[l.jsx(lm,{}),l.jsx(zu,{type:"text",id:"username",placeholder:"Username",value:t,onChange:S=>n(S.target.value)})]}),l.jsxs("div",{children:[l.jsx(lm,{}),l.jsx(zu,{type:"password",id:"password",placeholder:"Password",value:r,onChange:S=>o(S.target.value)})]}),l.jsx(rb,{type:"button",onClick:f,children:"Login"}),i&&l.jsx("div",{style:{color:"red"},children:i}),l.jsx(lb,{onClick:S=>k(),children:"Forgot Password?"}),s&&l.jsx(ub,{children:l.jsxs(cb,{children:[l.jsx(db,{children:"Enter your email to reset your password: "}),l.jsx(zu,{type:"text",placeholder:"Email"}),l.jsx(pb,{onClick:h,children:"Submit"}),l.jsx(fb,{onClick:w,children:"Close"})]})}),l.jsx(ob,{to:"/CodeConnect/guest-home",children:"Continue As Guest"})]}),l.jsx(hb,{children:"Not a user? Create an account"})]})})}function Bb(){return l.jsx(Ub,{})}function um(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?um(Object(n),!0).forEach(function(r){Ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):um(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cl(e){"@babel/helpers - typeof";return cl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cl(e)}function Hb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wb(e,t,n){return t&&cm(e.prototype,t),n&&cm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wf(e,t){return Vb(e)||Kb(e,t)||t1(e,t)||Qb()}function Ea(e){return Yb(e)||Gb(e)||t1(e)||Xb()}function Yb(e){if(Array.isArray(e))return ud(e)}function Vb(e){if(Array.isArray(e))return e}function Gb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,a,s;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));o=!0);}catch(u){i=!0,s=u}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function t1(e,t){if(e){if(typeof e=="string")return ud(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ud(e,t)}}function ud(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dm=function(){},Yf={},n1={},r1=null,o1={mark:dm,measure:dm};try{typeof window<"u"&&(Yf=window),typeof document<"u"&&(n1=document),typeof MutationObserver<"u"&&(r1=MutationObserver),typeof performance<"u"&&(o1=performance)}catch{}var Zb=Yf.navigator||{},fm=Zb.userAgent,pm=fm===void 0?"":fm,fr=Yf,ke=n1,hm=r1,qa=o1;fr.document;var _n=!!ke.documentElement&&!!ke.head&&typeof ke.addEventListener=="function"&&typeof ke.createElement=="function",i1=~pm.indexOf("MSIE")||~pm.indexOf("Trident/"),es,ts,ns,rs,os,Nn="___FONT_AWESOME___",cd=16,a1="fa",s1="svg-inline--fa",Vr="data-fa-i2svg",dd="data-fa-pseudo-element",Jb="data-fa-pseudo-element-pending",Vf="data-prefix",Gf="data-icon",mm="fontawesome-i2svg",qb="async",eC=["HTML","HEAD","STYLE","SCRIPT"],l1=function(){try{return!0}catch{return!1}}(),xe="classic",Ie="sharp",Kf=[xe,Ie];function ja(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[xe]}})}var ua=ja((es={},Ye(es,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ye(es,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),es)),ca=ja((ts={},Ye(ts,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ye(ts,Ie,{solid:"fass",regular:"fasr",light:"fasl"}),ts)),da=ja((ns={},Ye(ns,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ye(ns,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ns)),tC=ja((rs={},Ye(rs,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ye(rs,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),rs)),nC=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,u1="fa-layers-text",rC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,oC=ja((os={},Ye(os,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ye(os,Ie,{900:"fass",400:"fasr",300:"fasl"}),os)),c1=[1,2,3,4,5,6,7,8,9,10],iC=c1.concat([11,12,13,14,15,16,17,18,19,20]),aC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ar={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fa=new Set;Object.keys(ca[xe]).map(fa.add.bind(fa));Object.keys(ca[Ie]).map(fa.add.bind(fa));var sC=[].concat(Kf,Ea(fa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ar.GROUP,Ar.SWAP_OPACITY,Ar.PRIMARY,Ar.SECONDARY]).concat(c1.map(function(e){return"".concat(e,"x")})).concat(iC.map(function(e){return"w-".concat(e)})),zi=fr.FontAwesomeConfig||{};function lC(e){var t=ke.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function uC(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ke&&typeof ke.querySelector=="function"){var cC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cC.forEach(function(e){var t=Wf(e,2),n=t[0],r=t[1],o=uC(lC(n));o!=null&&(zi[r]=o)})}var d1={styleDefault:"solid",familyDefault:"classic",cssPrefix:a1,replacementClass:s1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zi.familyPrefix&&(zi.cssPrefix=zi.familyPrefix);var Go=L(L({},d1),zi);Go.autoReplaceSvg||(Go.observeMutations=!1);var $={};Object.keys(d1).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){Go[e]=n,Ui.forEach(function(r){return r($)})},get:function(){return Go[e]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(t){Go.cssPrefix=t,Ui.forEach(function(n){return n($)})},get:function(){return Go.cssPrefix}});fr.FontAwesomeConfig=$;var Ui=[];function dC(e){return Ui.push(e),function(){Ui.splice(Ui.indexOf(e),1)}}var Bn=cd,cn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fC(e){if(!(!e||!_n)){var t=ke.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ke.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return ke.head.insertBefore(t,r),e}}var pC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pa(){for(var e=12,t="";e-- >0;)t+=pC[Math.random()*62|0];return t}function ei(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xf(e){return e.classList?ei(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function f1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hC(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(f1(e[n]),'" ')},"").trim()}function Hl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Qf(e){return e.size!==cn.size||e.x!==cn.x||e.y!==cn.y||e.rotate!==cn.rotate||e.flipX||e.flipY}function mC(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(i," ").concat(a," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:u,path:c}}function gC(e){var t=e.transform,n=e.width,r=n===void 0?cd:n,o=e.height,i=o===void 0?cd:o,a=e.startCentered,s=a===void 0?!1:a,u="";return s&&i1?u+="translate(".concat(t.x/Bn-r/2,"em, ").concat(t.y/Bn-i/2,"em) "):s?u+="translate(calc(-50% + ".concat(t.x/Bn,"em), calc(-50% + ").concat(t.y/Bn,"em)) "):u+="translate(".concat(t.x/Bn,"em, ").concat(t.y/Bn,"em) "),u+="scale(".concat(t.size/Bn*(t.flipX?-1:1),", ").concat(t.size/Bn*(t.flipY?-1:1),") "),u+="rotate(".concat(t.rotate,"deg) "),u}var vC=`:root, :host {
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
}`;function p1(){var e=a1,t=s1,n=$.cssPrefix,r=$.replacementClass,o=vC;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return o}var gm=!1;function Uu(){$.autoAddCss&&!gm&&(fC(p1()),gm=!0)}var yC={mixout:function(){return{dom:{css:p1,insertCss:Uu}}},hooks:function(){return{beforeDOMElementCreation:function(){Uu()},beforeI2svg:function(){Uu()}}}},In=fr||{};In[Nn]||(In[Nn]={});In[Nn].styles||(In[Nn].styles={});In[Nn].hooks||(In[Nn].hooks={});In[Nn].shims||(In[Nn].shims=[]);var Zt=In[Nn],h1=[],xC=function e(){ke.removeEventListener("DOMContentLoaded",e),dl=1,h1.map(function(t){return t()})},dl=!1;_n&&(dl=(ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ke.readyState),dl||ke.addEventListener("DOMContentLoaded",xC));function wC(e){_n&&(dl?setTimeout(e,0):h1.push(e))}function Pa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,i=o===void 0?[]:o;return typeof e=="string"?f1(e):"<".concat(t," ").concat(hC(r),">").concat(i.map(Pa).join(""),"</").concat(t,">")}function vm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var kC=function(t,n){return function(r,o,i,a){return t.call(n,r,o,i,a)}},Bu=function(t,n,r,o){var i=Object.keys(t),a=i.length,s=o!==void 0?kC(n,o):n,u,c,d;for(r===void 0?(u=1,d=t[i[0]]):(u=0,d=r);u<a;u++)c=i[u],d=s(d,t[c],c,t);return d};function SC(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((o&1023)<<10)+(i&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function fd(e){var t=SC(e);return t.length===1?t[0].toString(16):null}function bC(e,t){var n=e.length,r=e.charCodeAt(t),o;return r>=55296&&r<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function ym(e){return Object.keys(e).reduce(function(t,n){var r=e[n],o=!!r.icon;return o?t[r.iconName]=r.icon:t[n]=r,t},{})}function pd(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,i=ym(t);typeof Zt.hooks.addPack=="function"&&!o?Zt.hooks.addPack(e,ym(t)):Zt.styles[e]=L(L({},Zt.styles[e]||{}),i),e==="fas"&&pd("fa",t)}var is,as,ss,So=Zt.styles,CC=Zt.shims,EC=(is={},Ye(is,xe,Object.values(da[xe])),Ye(is,Ie,Object.values(da[Ie])),is),Zf=null,m1={},g1={},v1={},y1={},x1={},jC=(as={},Ye(as,xe,Object.keys(ua[xe])),Ye(as,Ie,Object.keys(ua[Ie])),as);function PC(e){return~sC.indexOf(e)}function TC(e,t){var n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r===e&&o!==""&&!PC(o)?o:null}var w1=function(){var t=function(i){return Bu(So,function(a,s,u){return a[u]=Bu(s,i,{}),a},{})};m1=t(function(o,i,a){if(i[3]&&(o[i[3]]=a),i[2]){var s=i[2].filter(function(u){return typeof u=="number"});s.forEach(function(u){o[u.toString(16)]=a})}return o}),g1=t(function(o,i,a){if(o[a]=a,i[2]){var s=i[2].filter(function(u){return typeof u=="string"});s.forEach(function(u){o[u]=a})}return o}),x1=t(function(o,i,a){var s=i[2];return o[a]=a,s.forEach(function(u){o[u]=a}),o});var n="far"in So||$.autoFetchSvg,r=Bu(CC,function(o,i){var a=i[0],s=i[1],u=i[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(o.names[a]={prefix:s,iconName:u}),typeof a=="number"&&(o.unicodes[a.toString(16)]={prefix:s,iconName:u}),o},{names:{},unicodes:{}});v1=r.names,y1=r.unicodes,Zf=Wl($.styleDefault,{family:$.familyDefault})};dC(function(e){Zf=Wl(e.styleDefault,{family:$.familyDefault})});w1();function Jf(e,t){return(m1[e]||{})[t]}function RC(e,t){return(g1[e]||{})[t]}function Lr(e,t){return(x1[e]||{})[t]}function k1(e){return v1[e]||{prefix:null,iconName:null}}function NC(e){var t=y1[e],n=Jf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pr(){return Zf}var qf=function(){return{prefix:null,iconName:null,rest:[]}};function Wl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?xe:n,o=ua[r][e],i=ca[r][e]||ca[r][o],a=e in Zt.styles?e:null;return i||a||null}var xm=(ss={},Ye(ss,xe,Object.keys(da[xe])),Ye(ss,Ie,Object.keys(da[Ie])),ss);function Yl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,o=r===void 0?!1:r,i=(t={},Ye(t,xe,"".concat($.cssPrefix,"-").concat(xe)),Ye(t,Ie,"".concat($.cssPrefix,"-").concat(Ie)),t),a=null,s=xe;(e.includes(i[xe])||e.some(function(c){return xm[xe].includes(c)}))&&(s=xe),(e.includes(i[Ie])||e.some(function(c){return xm[Ie].includes(c)}))&&(s=Ie);var u=e.reduce(function(c,d){var f=TC($.cssPrefix,d);if(So[d]?(d=EC[s].includes(d)?tC[s][d]:d,a=d,c.prefix=d):jC[s].indexOf(d)>-1?(a=d,c.prefix=Wl(d,{family:s})):f?c.iconName=f:d!==$.replacementClass&&d!==i[xe]&&d!==i[Ie]&&c.rest.push(d),!o&&c.prefix&&c.iconName){var h=a==="fa"?k1(c.iconName):{},k=Lr(c.prefix,c.iconName);h.prefix&&(a=null),c.iconName=h.iconName||k||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!So.far&&So.fas&&!$.autoFetchSvg&&(c.prefix="fas")}return c},qf());return(e.includes("fa-brands")||e.includes("fab"))&&(u.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(u.prefix="fad"),!u.prefix&&s===Ie&&(So.fass||$.autoFetchSvg)&&(u.prefix="fass",u.iconName=Lr(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||a==="fa")&&(u.prefix=pr()||"fas"),u}var IC=function(){function e(){Hb(this,e),this.definitions={}}return Wb(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=L(L({},n.definitions[s]||{}),a[s]),pd(s,a[s]);var u=da[xe][s];u&&pd(u,a[s]),w1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(i){var a=o[i],s=a.prefix,u=a.iconName,c=a.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(n[s][f]=c)}),n[s][u]=c}),n}}]),e}(),wm=[],bo={},Oo={},OC=Object.keys(Oo);function AC(e,t){var n=t.mixoutsTo;return wm=e,bo={},Object.keys(Oo).forEach(function(r){OC.indexOf(r)===-1&&delete Oo[r]}),wm.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]=="function"&&(n[a]=o[a]),cl(o[a])==="object"&&Object.keys(o[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=o[a][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(a){bo[a]||(bo[a]=[]),bo[a].push(i[a])})}r.provides&&r.provides(Oo)}),n}function hd(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=bo[e]||[];return i.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Gr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=bo[e]||[];o.forEach(function(i){i.apply(null,n)})}function On(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Oo[e]?Oo[e].apply(null,t):void 0}function md(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||pr();if(t)return t=Lr(n,t)||t,vm(S1.definitions,n,t)||vm(Zt.styles,n,t)}var S1=new IC,LC=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Gr("noAuto")},MC={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _n?(Gr("beforeI2svg",t),On("pseudoElements2svg",t),On("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,wC(function(){DC({autoReplaceSvgRoot:n}),Gr("watch",t)})}},_C={icon:function(t){if(t===null)return null;if(cl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Lr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Wl(t[0]);return{prefix:r,iconName:Lr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.cssPrefix,"-"))>-1||t.match(nC))){var o=Yl(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||pr(),iconName:Lr(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var i=pr();return{prefix:i,iconName:Lr(i,t)||t}}}},At={noAuto:LC,config:$,dom:MC,parse:_C,library:S1,findIconDefinition:md,toHtml:Pa},DC=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ke:n;(Object.keys(Zt.styles).length>0||$.autoFetchSvg)&&_n&&$.autoReplaceSvg&&At.dom.i2svg({node:r})};function Vl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Pa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(_n){var r=ke.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function FC(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(Qf(a)&&n.found&&!r.found){var s=n.width,u=n.height,c={x:s/u/2,y:.5};o.style=Hl(L(L({},i),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function $C(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,i=e.symbol,a=i===!0?"".concat(t,"-").concat($.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},o),{},{id:a}),children:r}]}]}function ep(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,u=e.title,c=e.maskId,d=e.titleId,f=e.extra,h=e.watchable,k=h===void 0?!1:h,w=r.found?r:n,S=w.width,P=w.height,g=o==="fak",p=[$.replacementClass,i?"".concat($.cssPrefix,"-").concat(i):""].filter(function(M){return f.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(f.classes).join(" "),v={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":o,"data-icon":i,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(P)})},m=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(S/P*16*.0625,"em")}:{};k&&(v.attributes[Vr]=""),u&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(d||pa())},children:[u]}),delete v.attributes.title);var C=L(L({},v),{},{prefix:o,iconName:i,main:n,mask:r,maskId:c,transform:a,symbol:s,styles:L(L({},m),f.styles)}),T=r.found&&n.found?On("generateAbstractMask",C)||{children:[],attributes:{}}:On("generateAbstractIcon",C)||{children:[],attributes:{}},E=T.children,O=T.attributes;return C.children=E,C.attributes=O,s?$C(C):FC(C)}function km(e){var t=e.content,n=e.width,r=e.height,o=e.transform,i=e.title,a=e.extra,s=e.watchable,u=s===void 0?!1:s,c=L(L(L({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")});u&&(c[Vr]="");var d=L({},a.styles);Qf(o)&&(d.transform=gC({transform:o,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var f=Hl(d);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function zC(e){var t=e.content,n=e.title,r=e.extra,o=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Hl(r.styles);i.length>0&&(o.style=i);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Hu=Zt.styles;function gd(e){var t=e[0],n=e[1],r=e.slice(4),o=Wf(r,1),i=o[0],a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(Ar.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Ar.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Ar.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:a}}var UC={found:!1,width:512,height:512};function BC(e,t){!l1&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function vd(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=pr()),new Promise(function(r,o){if(On("missingIconAbstract"),n==="fa"){var i=k1(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Hu[t]&&Hu[t][e]){var a=Hu[t][e];return r(gd(a))}BC(e,t),r(L(L({},UC),{},{icon:$.showMissingIcons&&e?On("missingIconAbstract")||{}:{}}))})}var Sm=function(){},yd=$.measurePerformance&&qa&&qa.mark&&qa.measure?qa:{mark:Sm,measure:Sm},ji='FA "6.4.2"',HC=function(t){return yd.mark("".concat(ji," ").concat(t," begins")),function(){return b1(t)}},b1=function(t){yd.mark("".concat(ji," ").concat(t," ends")),yd.measure("".concat(ji," ").concat(t),"".concat(ji," ").concat(t," begins"),"".concat(ji," ").concat(t," ends"))},tp={begin:HC,end:b1},As=function(){};function bm(e){var t=e.getAttribute?e.getAttribute(Vr):null;return typeof t=="string"}function WC(e){var t=e.getAttribute?e.getAttribute(Vf):null,n=e.getAttribute?e.getAttribute(Gf):null;return t&&n}function YC(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function VC(){if($.autoReplaceSvg===!0)return Ls.replace;var e=Ls[$.autoReplaceSvg];return e||Ls.replace}function GC(e){return ke.createElementNS("http://www.w3.org/2000/svg",e)}function KC(e){return ke.createElement(e)}function C1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?GC:KC:n;if(typeof e=="string")return ke.createTextNode(e);var o=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){o.setAttribute(a,e.attributes[a])});var i=e.children||[];return i.forEach(function(a){o.appendChild(C1(a,{ceFn:r}))}),o}function XC(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ls={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(o){n.parentNode.insertBefore(C1(o),n)}),n.getAttribute(Vr)===null&&$.keepOriginalSource){var r=ke.createComment(XC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Xf(n).indexOf($.replacementClass))return Ls.replace(t);var o=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,u){return u===$.replacementClass||u.match(o)?s.toSvg.push(u):s.toNode.push(u),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var a=r.map(function(s){return Pa(s)}).join(`
`);n.setAttribute(Vr,""),n.innerHTML=a}};function Cm(e){e()}function E1(e,t){var n=typeof t=="function"?t:As;if(e.length===0)n();else{var r=Cm;$.mutateApproach===qb&&(r=fr.requestAnimationFrame||Cm),r(function(){var o=VC(),i=tp.begin("mutate");e.map(o),i(),n()})}}var np=!1;function j1(){np=!0}function xd(){np=!1}var fl=null;function Em(e){if(hm&&$.observeMutations){var t=e.treeCallback,n=t===void 0?As:t,r=e.nodeCallback,o=r===void 0?As:r,i=e.pseudoElementsCallback,a=i===void 0?As:i,s=e.observeMutationsRoot,u=s===void 0?ke:s;fl=new hm(function(c){if(!np){var d=pr();ei(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!bm(f.addedNodes[0])&&($.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&$.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&bm(f.target)&&~aC.indexOf(f.attributeName))if(f.attributeName==="class"&&WC(f.target)){var h=Yl(Xf(f.target)),k=h.prefix,w=h.iconName;f.target.setAttribute(Vf,k||d),w&&f.target.setAttribute(Gf,w)}else YC(f.target)&&o(f.target)})}}),_n&&fl.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function QC(){fl&&fl.disconnect()}function ZC(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,o){var i=o.split(":"),a=i[0],s=i.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function JC(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",o=Yl(Xf(e));return o.prefix||(o.prefix=pr()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=RC(o.prefix,e.innerText)||Jf(o.prefix,fd(e.innerText))),!o.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function qC(e){var t=ei(e.attributes).reduce(function(o,i){return o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||pa()):(t["aria-hidden"]="true",t.focusable="false")),t}function eE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:cn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=JC(e),r=n.iconName,o=n.prefix,i=n.rest,a=qC(e),s=hd("parseNodeAttributes",{},e),u=t.styleParser?ZC(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:cn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:u,attributes:a}},s)}var tE=Zt.styles;function P1(e){var t=$.autoReplaceSvg==="nest"?jm(e,{styleParser:!1}):jm(e);return~t.extra.classes.indexOf(u1)?On("generateLayersText",e,t):On("generateSvgReplacementMutation",e,t)}var hr=new Set;Kf.map(function(e){hr.add("fa-".concat(e))});Object.keys(ua[xe]).map(hr.add.bind(hr));Object.keys(ua[Ie]).map(hr.add.bind(hr));hr=Ea(hr);function Pm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_n)return Promise.resolve();var n=ke.documentElement.classList,r=function(f){return n.add("".concat(mm,"-").concat(f))},o=function(f){return n.remove("".concat(mm,"-").concat(f))},i=$.autoFetchSvg?hr:Kf.map(function(d){return"fa-".concat(d)}).concat(Object.keys(tE));i.includes("fa")||i.push("fa");var a=[".".concat(u1,":not([").concat(Vr,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(Vr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=ei(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),o("complete");else return Promise.resolve();var u=tp.begin("onTree"),c=s.reduce(function(d,f){try{var h=P1(f);h&&d.push(h)}catch(k){l1||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,f){Promise.all(c).then(function(h){E1(h,function(){r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),u(),d()})}).catch(function(h){u(),f(h)})})}function nE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P1(e).then(function(n){n&&E1([n],t)})}function rE(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:md(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:md(o||{})),e(r,L(L({},n),{},{mask:o}))}}var oE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?cn:r,i=n.symbol,a=i===void 0?!1:i,s=n.mask,u=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,f=n.title,h=f===void 0?null:f,k=n.titleId,w=k===void 0?null:k,S=n.classes,P=S===void 0?[]:S,g=n.attributes,p=g===void 0?{}:g,v=n.styles,m=v===void 0?{}:v;if(t){var C=t.prefix,T=t.iconName,E=t.icon;return Vl(L({type:"icon"},t),function(){return Gr("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(h?p["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(w||pa()):(p["aria-hidden"]="true",p.focusable="false")),ep({icons:{main:gd(E),mask:u?gd(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:T,transform:L(L({},cn),o),symbol:a,title:h,maskId:d,titleId:w,extra:{attributes:p,styles:m,classes:P}})})}},iE={mixout:function(){return{icon:rE(oE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Pm,n.nodeCallback=nE,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,o=r===void 0?ke:r,i=n.callback,a=i===void 0?function(){}:i;return Pm(o,a)},t.generateSvgReplacementMutation=function(n,r){var o=r.iconName,i=r.title,a=r.titleId,s=r.prefix,u=r.transform,c=r.symbol,d=r.mask,f=r.maskId,h=r.extra;return new Promise(function(k,w){Promise.all([vd(o,s),d.iconName?vd(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var P=Wf(S,2),g=P[0],p=P[1];k([n,ep({icons:{main:g,mask:p},prefix:s,iconName:o,transform:u,symbol:c,maskId:f,title:i,titleId:a,extra:h,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.transform,s=n.styles,u=Hl(s);u.length>0&&(o.style=u);var c;return Qf(a)&&(c=On("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:o}}}},aE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,i=o===void 0?[]:o;return Vl({type:"layer"},function(){Gr("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(u){a=a.concat(u.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Ea(i)).join(" ")},children:a}]})}}}},sE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.title,i=o===void 0?null:o,a=r.classes,s=a===void 0?[]:a,u=r.attributes,c=u===void 0?{}:u,d=r.styles,f=d===void 0?{}:d;return Vl({type:"counter",content:n},function(){return Gr("beforeDOMElementCreation",{content:n,params:r}),zC({content:n.toString(),title:i,extra:{attributes:c,styles:f,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Ea(s))}})})}}}},lE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,i=o===void 0?cn:o,a=r.title,s=a===void 0?null:a,u=r.classes,c=u===void 0?[]:u,d=r.attributes,f=d===void 0?{}:d,h=r.styles,k=h===void 0?{}:h;return Vl({type:"text",content:n},function(){return Gr("beforeDOMElementCreation",{content:n,params:r}),km({content:n,transform:L(L({},cn),i),title:s,extra:{attributes:f,styles:k,classes:["".concat($.cssPrefix,"-layers-text")].concat(Ea(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var o=r.title,i=r.transform,a=r.extra,s=null,u=null;if(i1){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,u=d.height/c}return $.autoA11y&&!o&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,km({content:n.innerHTML,width:s,height:u,transform:i,title:o,extra:a,watchable:!0})])}}},uE=new RegExp('"',"ug"),Tm=[1105920,1112319];function cE(e){var t=e.replace(uE,""),n=bC(t,0),r=n>=Tm[0]&&n<=Tm[1],o=t.length===2?t[0]===t[1]:!1;return{value:fd(o?t[0]:t),isSecondary:r||o}}function Rm(e,t){var n="".concat(Jb).concat(t.replace(":","-"));return new Promise(function(r,o){if(e.getAttribute(n)!==null)return r();var i=ei(e.children),a=i.filter(function(E){return E.getAttribute(dd)===t})[0],s=fr.getComputedStyle(e,t),u=s.getPropertyValue("font-family").match(rC),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(a&&!u)return e.removeChild(a),r();if(u&&d!=="none"&&d!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(u[2])?Ie:xe,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?ca[h][u[2].toLowerCase()]:oC[h][c],w=cE(f),S=w.value,P=w.isSecondary,g=u[0].startsWith("FontAwesome"),p=Jf(k,S),v=p;if(g){var m=NC(S);m.iconName&&m.prefix&&(p=m.iconName,k=m.prefix)}if(p&&!P&&(!a||a.getAttribute(Vf)!==k||a.getAttribute(Gf)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var C=eE(),T=C.extra;T.attributes[dd]=t,vd(p,k).then(function(E){var O=ep(L(L({},C),{},{icons:{main:E,mask:qf()},prefix:k,iconName:v,extra:T,watchable:!0})),M=ke.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=O.map(function(z){return Pa(z)}).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function dE(e){return Promise.all([Rm(e,"::before"),Rm(e,"::after")])}function fE(e){return e.parentNode!==document.head&&!~eC.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(dd)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Nm(e){if(_n)return new Promise(function(t,n){var r=ei(e.querySelectorAll("*")).filter(fE).map(dE),o=tp.begin("searchPseudoElements");j1(),Promise.all(r).then(function(){o(),xd(),t()}).catch(function(){o(),xd(),n()})})}var pE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Nm,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?ke:r;$.searchPseudoElements&&Nm(o)}}},Im=!1,hE={mixout:function(){return{dom:{unwatch:function(){j1(),Im=!0}}}},hooks:function(){return{bootstrap:function(){Em(hd("mutationObserverCallbacks",{}))},noAuto:function(){QC()},watch:function(n){var r=n.observeMutationsRoot;Im?xd():Em(hd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Om=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,o){var i=o.toLowerCase().split("-"),a=i[0],s=i.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},mE={mixout:function(){return{parse:{transform:function(n){return Om(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=Om(o)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,i=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},u="translate(".concat(o.x*32,", ").concat(o.y*32,") "),c="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),d="rotate(".concat(o.rotate," 0 0)"),f={transform:"".concat(u," ").concat(c," ").concat(d)},h={transform:"translate(".concat(a/2*-1," -256)")},k={outer:s,inner:f,path:h};return{tag:"g",attributes:L({},k.outer),children:[{tag:"g",attributes:L({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),k.path)}]}]}}}},Wu={x:0,y:0,width:"100%",height:"100%"};function Am(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gE(e){return e.tag==="g"?e.children:[e]}var vE={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),i=o?Yl(o.split(" ").map(function(a){return a.trim()})):qf();return i.prefix||(i.prefix=pr()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.mask,s=n.maskId,u=n.transform,c=i.width,d=i.icon,f=a.width,h=a.icon,k=mC({transform:u,containerWidth:f,iconWidth:c}),w={tag:"rect",attributes:L(L({},Wu),{},{fill:"white"})},S=d.children?{children:d.children.map(Am)}:{},P={tag:"g",attributes:L({},k.inner),children:[Am(L({tag:d.tag,attributes:L(L({},d.attributes),k.path)},S))]},g={tag:"g",attributes:L({},k.outer),children:[P]},p="mask-".concat(s||pa()),v="clip-".concat(s||pa()),m={tag:"mask",attributes:L(L({},Wu),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,g]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:gE(h)},m]};return r.push(C,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Wu)}),{children:r,attributes:o}}}},yE={provides:function(t){var n=!1;fr.matchMedia&&(n=fr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=L(L({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:L(L({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:L(L({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:L(L({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},xE={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),i=o===null?!1:o===""?!0:o;return n.symbol=i,n}}}},wE=[yC,iE,aE,sE,lE,pE,hE,mE,vE,yE,xE];AC(wE,{mixoutsTo:At});At.noAuto;At.config;At.library;At.dom;var wd=At.parse;At.findIconDefinition;At.toHtml;var kE=At.icon;At.layer;At.text;At.counter;var T1={exports:{}},SE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bE=SE,CE=bE;function R1(){}function N1(){}N1.resetWarningCache=R1;var EE=function(){function e(r,o,i,a,s,u){if(u!==CE){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:N1,resetWarningCache:R1};return n.PropTypes=n,n};T1.exports=EE();var jE=T1.exports;const H=vl(jE);function Lm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function qn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lm(Object(n),!0).forEach(function(r){Co(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pl(e){"@babel/helpers - typeof";return pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pl(e)}function Co(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function PE(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function TE(e,t){if(e==null)return{};var n=PE(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kd(e){return RE(e)||NE(e)||IE(e)||OE()}function RE(e){if(Array.isArray(e))return Sd(e)}function NE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function IE(e,t){if(e){if(typeof e=="string")return Sd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sd(e,t)}}function Sd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function OE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AE(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,u=e.spin,c=e.spinPulse,d=e.spinReverse,f=e.pulse,h=e.fixedWidth,k=e.inverse,w=e.border,S=e.listItem,P=e.flip,g=e.size,p=e.rotation,v=e.pull,m=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":h,"fa-inverse":k,"fa-border":w,"fa-li":S,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},Co(t,"fa-".concat(g),typeof g<"u"&&g!==null),Co(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Co(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Co(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map(function(C){return m[C]?C:null}).filter(function(C){return C})}function LE(e){return e=e-0,e===e}function I1(e){return LE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ME=["style"];function _E(e){return e.charAt(0).toUpperCase()+e.slice(1)}function DE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=I1(n.slice(0,r)),i=n.slice(r+1).trim();return o.startsWith("webkit")?t[_E(o)]=i:t[o]=i,t},{})}function O1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return O1(e,u)}),o=Object.keys(t.attributes||{}).reduce(function(u,c){var d=t.attributes[c];switch(c){case"class":u.attrs.className=d,delete t.attributes.class;break;case"style":u.attrs.style=DE(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[I1(c)]=d}return u},{attrs:{}}),i=n.style,a=i===void 0?{}:i,s=TE(n,ME);return o.attrs.style=qn(qn({},o.attrs.style),a),e.apply(void 0,[t.tag,qn(qn({},o.attrs),s)].concat(kd(r)))}var A1=!1;try{A1=!0}catch{}function FE(){if(!A1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Mm(e){if(e&&pl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wd.icon)return wd.icon(e);if(e===null)return null;if(e&&pl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Yu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Co({},e,t):{}}var tt=De.forwardRef(function(e,t){var n=e.icon,r=e.mask,o=e.symbol,i=e.className,a=e.title,s=e.titleId,u=e.maskId,c=Mm(n),d=Yu("classes",[].concat(kd(AE(e)),kd(i.split(" ")))),f=Yu("transform",typeof e.transform=="string"?wd.transform(e.transform):e.transform),h=Yu("mask",Mm(r)),k=kE(c,qn(qn(qn(qn({},d),f),h),{},{symbol:o,title:a,titleId:s,maskId:u}));if(!k)return FE("Could not find icon",c),null;var w=k.abstract,S={ref:t};return Object.keys(e).forEach(function(P){tt.defaultProps.hasOwnProperty(P)||(S[P]=e[P])}),$E(w[0],S)});tt.displayName="FontAwesomeIcon";tt.propTypes={beat:H.bool,border:H.bool,beatFade:H.bool,bounce:H.bool,className:H.string,fade:H.bool,flash:H.bool,mask:H.oneOfType([H.object,H.array,H.string]),maskId:H.string,fixedWidth:H.bool,inverse:H.bool,flip:H.oneOf([!0,!1,"horizontal","vertical","both"]),icon:H.oneOfType([H.object,H.array,H.string]),listItem:H.bool,pull:H.oneOf(["right","left"]),pulse:H.bool,rotation:H.oneOf([0,90,180,270]),shake:H.bool,size:H.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:H.bool,spinPulse:H.bool,spinReverse:H.bool,symbol:H.oneOfType([H.bool,H.string]),title:H.string,titleId:H.string,transform:H.oneOfType([H.string,H.object]),swapOpacity:H.bool};tt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var $E=O1.bind(null,De.createElement);const zE=y.div`
    padding-top: 11px;
    width: 120px;
    position: relative;
`,UE=y.div`
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
`,BE=y.span`
    font-size: 16px;
`,HE=y(tt)`
    font-size: 15px;
    transition: 0.4s;

    &:hover {
        color: var(--blue);
    }

    &.active {
        transform: rotate(180deg);
    }
`,WE=y.div`
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
`;var L1={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},YE={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},VE={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},GE={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},M1={prefix:"fas",iconName:"house-chimney",icon:[576,512,[63499,"home-lg"],"e3af","M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"]},_1={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},D1={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},KE={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},F1={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},XE={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},QE=XE;function Gl({setStatus:e}){const[t,n]=x.useState(!1),[r,o]=x.useState("Sort");return x.useEffect(()=>{e(r)}),l.jsxs(zE,{onClick:()=>{n(!t)},children:[l.jsxs(UE,{children:[l.jsx(BE,{children:r}),l.jsx(HE,{icon:KE,className:`${t?"active":"inactive"}`})]}),l.jsxs(WE,{className:`${t?"active":"inactive"}`,children:[l.jsx("div",{onClick:()=>{o("Top")},children:"Top"}),l.jsx("div",{onClick:()=>{o("Recent")},children:"Recent"})]})]})}Gl.propTypes={setStatus:H.func};const ZE=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`,JE=y.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`,qE=y.div`
    font-size: 35px;
    font-weight: 600;
`,e3=y.div`
    color: var(--white);
`,t3=y.div`
    color: var(--blue);
    padding-left: 25px;
`,n3=y.div`
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
`,ls=y(tt)`
    font-size: 22px;
`,xi=y(I0)`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--grey);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    
    &:hover {
        color: var(--white);
    }
`,r3=y.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: var(--white);
`;var $1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var u in i)t.call(i,u)&&i[u]&&r.push(u)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})($1);var o3=$1.exports;const le=vl(o3),i3=["as","disabled"];function a3(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function s3(e){return!e||e.trim()==="#"}function z1({tagName:e,disabled:t,href:n,target:r,rel:o,role:i,onClick:a,tabIndex:s=0,type:u}){e||(n!=null||r!=null||o!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:u||"button",disabled:t},c];const d=h=>{if((t||e==="a"&&s3(n))&&h.preventDefault(),t){h.stopPropagation();return}a==null||a(h)},f=h=>{h.key===" "&&(h.preventDefault(),d(h))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:d,onKeyDown:f},c]}const l3=x.forwardRef((e,t)=>{let{as:n,disabled:r}=e,o=a3(e,i3);const[i,{tagName:a}]=z1(Object.assign({tagName:n,disabled:r},o));return l.jsx(a,Object.assign({},o,i,{ref:t}))});l3.displayName="Button";const u3=["xxl","xl","lg","md","sm","xs"],c3="xs",Kl=x.createContext({prefixes:{},breakpoints:u3,minBreakpoint:c3});function Be(e,t){const{prefixes:n}=x.useContext(Kl);return e||n[t]||t}function U1(){const{breakpoints:e}=x.useContext(Kl);return e}function B1(){const{minBreakpoint:e}=x.useContext(Kl);return e}function d3(){const{dir:e}=x.useContext(Kl);return e==="rtl"}const H1=x.forwardRef(({as:e,bsPrefix:t,variant:n="primary",size:r,active:o=!1,disabled:i=!1,className:a,...s},u)=>{const c=Be(t,"btn"),[d,{tagName:f}]=z1({tagName:e,disabled:i,...s}),h=f;return l.jsx(h,{...d,...s,ref:u,disabled:i,className:le(a,c,o&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,s.href&&i&&"disabled")})});H1.displayName="Button";const ha=H1,ti=!!(typeof window<"u"&&window.document&&window.document.createElement);var bd=!1,Cd=!1;try{var Vu={get passive(){return bd=!0},get once(){return Cd=bd=!0}};ti&&(window.addEventListener("test",Vu,Vu),window.removeEventListener("test",Vu,!0))}catch{}function W1(e,t,n,r){if(r&&typeof r!="boolean"&&!Cd){var o=r.once,i=r.capture,a=n;!Cd&&o&&(a=n.__once||function s(u){this.removeEventListener(t,s,i),n.call(this,u)},n.__once=a),e.addEventListener(t,a,bd?r:i)}e.addEventListener(t,n,r)}function Xl(e){return e&&e.ownerDocument||document}function Ed(e,t,n,r){var o=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}var us;function _m(e){if((!us&&us!==0||e)&&ti){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),us=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return us}function f3(){return x.useState(null)}function p3(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e},[e]),t}function un(e){const t=p3(e);return x.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const Dm=e=>!e||typeof e=="function"?e:t=>{e.current=t};function h3(e,t){const n=Dm(e),r=Dm(t);return o=>{n&&n(o),r&&r(o)}}function Ql(e,t){return x.useMemo(()=>h3(e,t),[e,t])}function m3(e){const t=x.useRef(e);return t.current=e,t}function Y1(e){const t=m3(e);x.useEffect(()=>()=>t.current(),[])}function g3(e){var t=Xl(e);return t&&t.defaultView||window}function v3(e,t){return g3(e).getComputedStyle(e,t)}var y3=/([A-Z])/g;function x3(e){return e.replace(y3,"-$1").toLowerCase()}var w3=/^ms-/;function cs(e){return x3(e).replace(w3,"-ms-")}var k3=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function S3(e){return!!(e&&k3.test(e))}function Fr(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(cs(t))||v3(e).getPropertyValue(cs(t));Object.keys(t).forEach(function(o){var i=t[o];!i&&i!==0?e.style.removeProperty(cs(o)):S3(o)?r+=o+"("+i+") ":n+=cs(o)+": "+i+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}function hl(e,t,n,r){return W1(e,t,n,r),function(){Ed(e,t,n,r)}}function b3(e,t,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}function C3(e){var t=Fr(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function E3(e,t,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||b3(e,"transitionend",!0)},t+n),i=hl(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),i()}}function V1(e,t,n,r){n==null&&(n=C3(e)||0);var o=E3(e,n,r),i=hl(e,"transitionend",t);return function(){o(),i()}}function Gu(e){e===void 0&&(e=Xl());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Fm(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function j3(){const e=x.useRef(!0),t=x.useRef(()=>e.current);return x.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function P3(e){const t=x.useRef(null);return x.useEffect(()=>{t.current=e}),t.current}const T3="data-rr-ui-";function R3(e){return`${T3}${e}`}function N3(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const $m=R3("modal-open");class I3{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return N3(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(Fr(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute($m,""),Fr(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute($m),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const rp=I3,G1=x.createContext(ti?window:void 0);G1.Provider;function op(){return x.useContext(G1)}const Ku=(e,t)=>ti?e==null?(t||Xl()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function O3(e,t){const n=op(),[r,o]=x.useState(()=>Ku(e,n==null?void 0:n.document));if(!r){const i=Ku(e);i&&o(i)}return x.useEffect(()=>{t&&r&&t(r)},[t,r]),x.useEffect(()=>{const i=Ku(e);i!==r&&o(i)},[e,r]),r}const A3=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",L3=typeof document<"u",zm=L3||A3?x.useLayoutEffect:x.useEffect;function M3({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){const i=x.useRef(null),a=x.useRef(t),s=un(n);x.useEffect(()=>{t?a.current=!0:s(i.current)},[t,s]);const u=Ql(i,e.ref),c=x.cloneElement(e,{ref:u});return t?c:o||!a.current&&r?null:c}function _3({in:e,onTransition:t}){const n=x.useRef(null),r=x.useRef(!0),o=un(t);return zm(()=>{if(!n.current)return;let i=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>i}),()=>{i=!0}},[e,o]),zm(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function D3({children:e,in:t,onExited:n,onEntered:r,transition:o}){const[i,a]=x.useState(!t);t&&i&&a(!1);const s=_3({in:!!t,onTransition:c=>{const d=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(a(!0),n==null||n(c.element)))};Promise.resolve(o(c)).then(d,f=>{throw c.in||a(!0),f})}}),u=Ql(s,e.ref);return i&&!t?null:x.cloneElement(e,{ref:u})}function Um(e,t,n){return e?l.jsx(e,Object.assign({},n)):t?l.jsx(D3,Object.assign({},n,{transition:t})):l.jsx(M3,Object.assign({},n))}function F3(e){return e.code==="Escape"||e.keyCode===27}const $3=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function z3(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let Xu;function U3(e){return Xu||(Xu=new rp({ownerDocument:e==null?void 0:e.document})),Xu}function B3(e){const t=op(),n=e||U3(t),r=x.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:x.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:x.useCallback(o=>{r.current.backdrop=o},[])})}const K1=x.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:i,children:a,backdrop:s=!0,keyboard:u=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:f,runTransition:h,backdropTransition:k,runBackdropTransition:w,autoFocus:S=!0,enforceFocus:P=!0,restoreFocus:g=!0,restoreFocusOptions:p,renderDialog:v,renderBackdrop:m=ge=>l.jsx("div",Object.assign({},ge)),manager:C,container:T,onShow:E,onHide:O=()=>{},onExit:M,onExited:z,onExiting:Z,onEnter:Se,onEntering:pe,onEntered:st}=e,ae=z3(e,$3);const Oe=op(),he=O3(T),N=B3(C),D=j3(),F=P3(n),[X,V]=x.useState(!n),se=x.useRef(null);x.useImperativeHandle(t,()=>N,[N]),ti&&!F&&n&&(se.current=Gu(Oe==null?void 0:Oe.document)),n&&X&&V(!1);const ue=un(()=>{if(N.add(),Ae.current=hl(document,"keydown",mn),me.current=hl(document,"focus",()=>setTimeout(Fe),!0),E&&E(),S){var ge,qr;const wr=Gu((ge=(qr=N.dialog)==null?void 0:qr.ownerDocument)!=null?ge:Oe==null?void 0:Oe.document);N.dialog&&wr&&!Fm(N.dialog,wr)&&(se.current=wr,N.dialog.focus())}}),Ve=un(()=>{if(N.remove(),Ae.current==null||Ae.current(),me.current==null||me.current(),g){var ge;(ge=se.current)==null||ge.focus==null||ge.focus(p),se.current=null}});x.useEffect(()=>{!n||!he||ue()},[n,he,ue]),x.useEffect(()=>{X&&Ve()},[X,Ve]),Y1(()=>{Ve()});const Fe=un(()=>{if(!P||!D()||!N.isTopModal())return;const ge=Gu(Oe==null?void 0:Oe.document);N.dialog&&ge&&!Fm(N.dialog,ge)&&N.dialog.focus()}),Ge=un(ge=>{ge.target===ge.currentTarget&&(c==null||c(ge),s===!0&&O())}),mn=un(ge=>{u&&F3(ge)&&N.isTopModal()&&(d==null||d(ge),ge.defaultPrevented||O())}),me=x.useRef(),Ae=x.useRef(),Fn=(...ge)=>{V(!0),z==null||z(...ge)};if(!he)return null;const Jr=Object.assign({role:r,ref:N.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ae,{style:i,className:o,tabIndex:-1});let bt=v?v(Jr):l.jsx("div",Object.assign({},Jr,{children:x.cloneElement(a,{role:"document"})}));bt=Um(f,h,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:M,onExiting:Z,onExited:Fn,onEnter:Se,onEntering:pe,onEntered:st,children:bt});let gn=null;return s&&(gn=m({ref:N.setBackdropRef,onClick:Ge}),gn=Um(k,w,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:gn})),l.jsx(l.Fragment,{children:Nr.createPortal(l.jsxs(l.Fragment,{children:[gn,bt]}),he)})});K1.displayName="Modal";const H3=Object.assign(K1,{Manager:rp});function W3(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Y3(e,t){e.classList?e.classList.add(t):W3(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}var V3=Function.prototype.bind.call(Function.prototype.call,[].slice);function oo(e,t){return V3(e.querySelectorAll(t))}function Bm(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function G3(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Bm(e.className,t):e.setAttribute("class",Bm(e.className&&e.className.baseVal||"",t))}const io={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class K3 extends rp{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,Fr(n,{[t]:`${parseFloat(Fr(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],Fr(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Y3(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";oo(n,io.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,t.scrollBarWidth)),oo(n,io.STICKY_CONTENT).forEach(i=>this.adjustAndStore(o,i,-t.scrollBarWidth)),oo(n,io.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(o,i,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();G3(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";oo(n,io.FIXED_CONTENT).forEach(i=>this.restore(r,i)),oo(n,io.STICKY_CONTENT).forEach(i=>this.restore(o,i)),oo(n,io.NAVBAR_TOGGLER).forEach(i=>this.restore(o,i))}}let Qu;function X3(e){return Qu||(Qu=new K3(e)),Qu}function Q3(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function jd(e,t){return jd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},jd(e,t)}function Z3(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,jd(e,t)}const Hm={disabled:!1},X1=De.createContext(null);var J3=function(t){return t.scrollTop},Pi="unmounted",Er="exited",Gn="entering",jr="entered",Pd="exiting",Dn=function(e){Z3(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,u;return i.appearStatus=null,r.in?s?(u=Er,i.appearStatus=Gn):u=jr:r.unmountOnExit||r.mountOnEnter?u=Pi:u=Er,i.state={status:u},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===Pi?{status:Er}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==Gn&&a!==jr&&(i=Gn):(a===Gn||a===jr)&&(i=Pd)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Gn){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:Nr.findDOMNode(this);a&&J3(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Er&&this.setState({status:Pi})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,u=this.props.nodeRef?[s]:[Nr.findDOMNode(this),s],c=u[0],d=u[1],f=this.getTimeouts(),h=s?f.appear:f.enter;if(!o&&!a||Hm.disabled){this.safeSetState({status:jr},function(){i.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:Gn},function(){i.props.onEntering(c,d),i.onTransitionEnd(h,function(){i.safeSetState({status:jr},function(){i.props.onEntered(c,d)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:Nr.findDOMNode(this);if(!i||Hm.disabled){this.safeSetState({status:Er},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Pd},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:Er},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:Nr.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],c=u[0],d=u[1];this.props.addEndListener(c,d)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Pi)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=Q3(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return De.createElement(X1.Provider,{value:null},typeof a=="function"?a(o,s):De.cloneElement(De.Children.only(a),s))},t}(De.Component);Dn.contextType=X1;Dn.propTypes={};function ao(){}Dn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ao,onEntering:ao,onEntered:ao,onExit:ao,onExiting:ao,onExited:ao};Dn.UNMOUNTED=Pi;Dn.EXITED=Er;Dn.ENTERING=Gn;Dn.ENTERED=jr;Dn.EXITING=Pd;const q3=Dn;function Wm(e,t){const n=Fr(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function ej(e,t){const n=Wm(e,"transitionDuration"),r=Wm(e,"transitionDelay"),o=V1(e,i=>{i.target===e&&(o(),t(i))},n+r)}function tj(e){e.offsetHeight}function nj(e){return e&&"setState"in e?Nr.findDOMNode(e):e??null}const rj=De.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:i,addEndListener:a,children:s,childRef:u,...c},d)=>{const f=x.useRef(null),h=Ql(f,u),k=T=>{h(nj(T))},w=T=>E=>{T&&f.current&&T(f.current,E)},S=x.useCallback(w(e),[e]),P=x.useCallback(w(t),[t]),g=x.useCallback(w(n),[n]),p=x.useCallback(w(r),[r]),v=x.useCallback(w(o),[o]),m=x.useCallback(w(i),[i]),C=x.useCallback(w(a),[a]);return l.jsx(q3,{ref:d,...c,onEnter:S,onEntered:g,onEntering:P,onExit:p,onExited:m,onExiting:v,addEndListener:C,nodeRef:f,children:typeof s=="function"?(T,E)=>s(T,{...E,ref:k}):De.cloneElement(s,{ref:k})})}),oj=rj,ij={[Gn]:"show",[jr]:"show"},Q1=x.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},i)=>{const a={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},s=x.useCallback((u,c)=>{tj(u),r==null||r(u,c)},[r]);return l.jsx(oj,{ref:i,addEndListener:ej,...a,onEnter:s,childRef:t.ref,children:(u,c)=>x.cloneElement(t,{...c,className:le("fade",e,t.props.className,ij[u],n[u])})})});Q1.displayName="Fade";const Z1=Q1,J1=x.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Be(t,"modal-body"),l.jsx(n,{ref:o,className:le(e,t),...r})));J1.displayName="ModalBody";const aj=J1,sj=x.createContext({onHide(){}}),q1=sj,ey=x.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:r,size:o,fullscreen:i,children:a,scrollable:s,...u},c)=>{e=Be(e,"modal");const d=`${e}-dialog`,f=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return l.jsx("div",{...u,ref:c,className:le(d,t,o&&`${e}-${o}`,r&&`${d}-centered`,s&&`${d}-scrollable`,i&&f),children:l.jsx("div",{className:le(`${e}-content`,n),children:a})})});ey.displayName="ModalDialog";const ty=ey,ny=x.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Be(t,"modal-footer"),l.jsx(n,{ref:o,className:le(e,t),...r})));ny.displayName="ModalFooter";const lj=ny,uj={"aria-label":H.string,onClick:H.func,variant:H.oneOf(["white"])},ip=x.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},o)=>l.jsx("button",{ref:o,type:"button",className:le("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));ip.displayName="CloseButton";ip.propTypes=uj;const cj=ip,dj=x.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...i},a)=>{const s=x.useContext(q1),u=un(()=>{s==null||s.onHide(),r==null||r()});return l.jsxs("div",{ref:a,...i,children:[o,n&&l.jsx(cj,{"aria-label":e,variant:t,onClick:u})]})}),fj=dj,ry=x.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},i)=>(e=Be(e,"modal-header"),l.jsx(fj,{ref:i,...o,className:le(t,e),closeLabel:n,closeButton:r})));ry.displayName="ModalHeader";const pj=ry,hj=e=>x.forwardRef((t,n)=>l.jsx("div",{...t,ref:n,className:le(t.className,e)})),mj=hj("h4"),oy=x.forwardRef(({className:e,bsPrefix:t,as:n=mj,...r},o)=>(t=Be(t,"modal-title"),l.jsx(n,{ref:o,className:le(e,t),...r})));oy.displayName="ModalTitle";const gj=oy;function vj(e){return l.jsx(Z1,{...e,timeout:null})}function yj(e){return l.jsx(Z1,{...e,timeout:null})}const iy=x.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:o,children:i,dialogAs:a=ty,"aria-labelledby":s,"aria-describedby":u,"aria-label":c,show:d=!1,animation:f=!0,backdrop:h=!0,keyboard:k=!0,onEscapeKeyDown:w,onShow:S,onHide:P,container:g,autoFocus:p=!0,enforceFocus:v=!0,restoreFocus:m=!0,restoreFocusOptions:C,onEntered:T,onExit:E,onExiting:O,onEnter:M,onEntering:z,onExited:Z,backdropClassName:Se,manager:pe,...st},ae)=>{const[Oe,he]=x.useState({}),[N,D]=x.useState(!1),F=x.useRef(!1),X=x.useRef(!1),V=x.useRef(null),[se,ue]=f3(),Ve=Ql(ae,ue),Fe=un(P),Ge=d3();e=Be(e,"modal");const mn=x.useMemo(()=>({onHide:Fe}),[Fe]);function me(){return pe||X3({isRTL:Ge})}function Ae(ee){if(!ti)return;const zn=me().getScrollbarWidth()>0,Wt=ee.scrollHeight>Xl(ee).documentElement.clientHeight;he({paddingRight:zn&&!Wt?_m():void 0,paddingLeft:!zn&&Wt?_m():void 0})}const Fn=un(()=>{se&&Ae(se.dialog)});Y1(()=>{Ed(window,"resize",Fn),V.current==null||V.current()});const Jr=()=>{F.current=!0},bt=ee=>{F.current&&se&&ee.target===se.dialog&&(X.current=!0),F.current=!1},gn=()=>{D(!0),V.current=V1(se.dialog,()=>{D(!1)})},ge=ee=>{ee.target===ee.currentTarget&&gn()},qr=ee=>{if(h==="static"){ge(ee);return}if(X.current||ee.target!==ee.currentTarget){X.current=!1;return}P==null||P()},wr=ee=>{k?w==null||w(ee):(ee.preventDefault(),h==="static"&&gn())},eu=(ee,zn)=>{ee&&Ae(ee),M==null||M(ee,zn)},kr=ee=>{V.current==null||V.current(),E==null||E(ee)},Ia=(ee,zn)=>{z==null||z(ee,zn),W1(window,"resize",Fn)},oi=ee=>{ee&&(ee.style.display=""),Z==null||Z(ee),Ed(window,"resize",Fn)},nn=x.useCallback(ee=>l.jsx("div",{...ee,className:le(`${e}-backdrop`,Se,!f&&"show")}),[f,Se,e]),$n={...n,...Oe};$n.display="block";const Oa=ee=>l.jsx("div",{role:"dialog",...ee,style:$n,className:le(t,e,N&&`${e}-static`,!f&&"show"),onClick:h?qr:void 0,onMouseUp:bt,"aria-label":c,"aria-labelledby":s,"aria-describedby":u,children:l.jsx(a,{...st,onMouseDown:Jr,className:r,contentClassName:o,children:i})});return l.jsx(q1.Provider,{value:mn,children:l.jsx(H3,{show:d,ref:Ve,backdrop:h,container:g,keyboard:!0,autoFocus:p,enforceFocus:v,restoreFocus:m,restoreFocusOptions:C,onEscapeKeyDown:wr,onShow:S,onHide:P,onEnter:eu,onEntering:Ia,onEntered:T,onExit:kr,onExiting:O,onExited:oi,manager:me(),transition:f?vj:void 0,backdropTransition:f?yj:void 0,renderBackdrop:nn,renderDialog:Oa})})});iy.displayName="Modal";const En=Object.assign(iy,{Body:aj,Header:pj,Title:gj,Footer:lj,Dialog:ty,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),xj={type:H.string,tooltip:H.bool,as:H.elementType},ap=x.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:r=!1,...o},i)=>l.jsx(e,{...o,ref:i,className:le(t,`${n}-${r?"tooltip":"feedback"}`)}));ap.displayName="Feedback";ap.propTypes=xj;const ay=ap,wj=x.createContext({}),An=wj,sy=x.forwardRef(({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:o=!1,isInvalid:i=!1,as:a="input",...s},u)=>{const{controlId:c}=x.useContext(An);return t=Be(t,"form-check-input"),l.jsx(a,{...s,ref:u,type:r,id:e||c,className:le(n,t,o&&"is-valid",i&&"is-invalid")})});sy.displayName="FormCheckInput";const ly=sy,uy=x.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...r},o)=>{const{controlId:i}=x.useContext(An);return e=Be(e,"form-check-label"),l.jsx("label",{...r,ref:o,htmlFor:n||i,className:le(t,e)})});uy.displayName="FormCheckLabel";const Td=uy;function kj(e,t){return x.Children.toArray(e).some(n=>x.isValidElement(n)&&n.type===t)}const cy=x.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:o=!1,disabled:i=!1,isValid:a=!1,isInvalid:s=!1,feedbackTooltip:u=!1,feedback:c,feedbackType:d,className:f,style:h,title:k="",type:w="checkbox",label:S,children:P,as:g="input",...p},v)=>{t=Be(t,"form-check"),n=Be(n,"form-switch");const{controlId:m}=x.useContext(An),C=x.useMemo(()=>({controlId:e||m}),[m,e]),T=!P&&S!=null&&S!==!1||kj(P,Td),E=l.jsx(ly,{...p,type:w==="switch"?"checkbox":w,ref:v,isValid:a,isInvalid:s,disabled:i,as:g});return l.jsx(An.Provider,{value:C,children:l.jsx("div",{style:h,className:le(f,T&&t,r&&`${t}-inline`,o&&`${t}-reverse`,w==="switch"&&n),children:P||l.jsxs(l.Fragment,{children:[E,T&&l.jsx(Td,{title:k,children:S}),c&&l.jsx(ay,{type:d,tooltip:u,children:c})]})})})});cy.displayName="FormCheck";const ml=Object.assign(cy,{Input:ly,Label:Td}),dy=x.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:r,id:o,className:i,isValid:a=!1,isInvalid:s=!1,plaintext:u,readOnly:c,as:d="input",...f},h)=>{const{controlId:k}=x.useContext(An);return e=Be(e,"form-control"),l.jsx(d,{...f,type:t,size:r,ref:h,readOnly:c,id:o||k,className:le(i,u?`${e}-plaintext`:e,n&&`${e}-${n}`,t==="color"&&`${e}-color`,a&&"is-valid",s&&"is-invalid")})});dy.displayName="FormControl";const Sj=Object.assign(dy,{Feedback:ay}),fy=x.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Be(t,"form-floating"),l.jsx(n,{ref:o,className:le(e,t),...r})));fy.displayName="FormFloating";const bj=fy,py=x.forwardRef(({controlId:e,as:t="div",...n},r)=>{const o=x.useMemo(()=>({controlId:e}),[e]);return l.jsx(An.Provider,{value:o,children:l.jsx(t,{...n,ref:r})})});py.displayName="FormGroup";const hy=py;function Cj({as:e,bsPrefix:t,className:n,...r}){t=Be(t,"col");const o=U1(),i=B1(),a=[],s=[];return o.forEach(u=>{const c=r[u];delete r[u];let d,f,h;typeof c=="object"&&c!=null?{span:d,offset:f,order:h}=c:d=c;const k=u!==i?`-${u}`:"";d&&a.push(d===!0?`${t}${k}`:`${t}${k}-${d}`),h!=null&&s.push(`order${k}-${h}`),f!=null&&s.push(`offset${k}-${f}`)}),[{...r,className:le(n,...a,...s)},{as:e,bsPrefix:t,spans:a}]}const my=x.forwardRef((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:i,spans:a}]=Cj(e);return l.jsx(o,{...r,ref:t,className:le(n,!a.length&&i)})});my.displayName="Col";const Qn=my,gy=x.forwardRef(({as:e="label",bsPrefix:t,column:n=!1,visuallyHidden:r=!1,className:o,htmlFor:i,...a},s)=>{const{controlId:u}=x.useContext(An);t=Be(t,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const d=le(o,t,r&&"visually-hidden",n&&c);return i=i||u,n?l.jsx(Qn,{ref:s,as:"label",className:d,htmlFor:i,...a}):l.jsx(e,{ref:s,className:d,htmlFor:i,...a})});gy.displayName="FormLabel";const Ej=gy,vy=x.forwardRef(({bsPrefix:e,className:t,id:n,...r},o)=>{const{controlId:i}=x.useContext(An);return e=Be(e,"form-range"),l.jsx("input",{...r,type:"range",ref:o,className:le(t,e),id:n||i})});vy.displayName="FormRange";const jj=vy,yy=x.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:r,isValid:o=!1,isInvalid:i=!1,id:a,...s},u)=>{const{controlId:c}=x.useContext(An);return e=Be(e,"form-select"),l.jsx("select",{...s,size:n,ref:u,className:le(r,e,t&&`${e}-${t}`,o&&"is-valid",i&&"is-invalid"),id:a||c})});yy.displayName="FormSelect";const Pj=yy,xy=x.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:r,...o},i)=>(e=Be(e,"form-text"),l.jsx(n,{...o,ref:i,className:le(t,e,r&&"text-muted")})));xy.displayName="FormText";const Tj=xy,wy=x.forwardRef((e,t)=>l.jsx(ml,{...e,ref:t,type:"switch"}));wy.displayName="Switch";const Rj=Object.assign(wy,{Input:ml.Input,Label:ml.Label}),ky=x.forwardRef(({bsPrefix:e,className:t,children:n,controlId:r,label:o,...i},a)=>(e=Be(e,"form-floating"),l.jsxs(hy,{ref:a,className:le(t,e),controlId:r,...i,children:[n,l.jsx("label",{htmlFor:r,children:o})]})));ky.displayName="FloatingLabel";const Nj=ky,Ij={_ref:H.any,validated:H.bool,as:H.elementType},sp=x.forwardRef(({className:e,validated:t,as:n="form",...r},o)=>l.jsx(n,{...r,ref:o,className:le(e,t&&"was-validated")}));sp.displayName="Form";sp.propTypes=Ij;const Ne=Object.assign(sp,{Group:hy,Control:Sj,Floating:bj,Check:ml,Switch:Rj,Label:Ej,Text:Tj,Range:jj,Select:Pj,FloatingLabel:Nj}),Sy=x.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const i=Be(e,"row"),a=U1(),s=B1(),u=`${i}-cols`,c=[];return a.forEach(d=>{const f=r[d];delete r[d];let h;f!=null&&typeof f=="object"?{cols:h}=f:h=f;const k=d!==s?`-${d}`:"";h!=null&&c.push(`${u}${k}-${h}`)}),l.jsx(n,{ref:o,...r,className:le(t,i,...c)})});Sy.displayName="Row";const Bi=Sy;y(tt)`

`;y.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 30%;
    left: 40%;
    height: 12px;
    width: 12px;
`;const Oj=y(En)`
    .modal-content {
        background-color: var(--light-black);
        color: var(--white);
        border-bottom: 20px var(--blue);
    }
`,Aj=y(En.Header)`
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
    
`;const Ym=y.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid var(--grey);
    border-radius: 5px;
    align-items: center;
    color: var(--white);
    background-color: var(--black);
`;y(tt)`
    font-size: 17px;
    color: var(--white);
`;function Lj({showForm:e,closeForm:t,onPostSuccess:n}){const[r,o]=x.useState({post_title:"",post_topic:"",post_desc:""}),[i,a]=x.useState(""),[s,u]=x.useState(""),[c,d]=x.useState(""),[f,h]=x.useState(!1),k="Please enter a title, topic, and description before posting!",w=p=>{const{name:v,value:m}=p.target;o({...r,[v]:m})},S=()=>{const{post_title:p,post_topic:v,post_desc:m}=r;if(p.trim()==""||v.trim()==""||m.trim()==""){h(!0);return}gb(p,v,m,"1 second ago"),localStorage.setItem("savedTitle",""),localStorage.setItem("savedDesc",""),localStorage.setItem("savedTopic","Web Development"),h(!1),t(),n()},P=()=>{const{post_title:p,post_topic:v,post_desc:m}=r;localStorage.setItem("savedTitle",p),localStorage.setItem("savedTopic",v),localStorage.setItem("savedDesc",m),alert("Saved draft for later! Come back to this screen when you're ready to continue")},g=()=>{const p=localStorage.getItem("savedTitle");p!=""&&(a(p),o(C=>({...C,post_title:p})));const v=localStorage.getItem("savedTopic");v!=""&&(u(v),o(C=>({...C,post_topic:v})));const m=localStorage.getItem("savedDesc");m!=""&&(d(m),o(C=>({...C,post_desc:m})))};return x.useEffect(()=>{g()},[]),l.jsxs(Oj,{centered:!0,size:"lg",show:e,animation:!0,scrollable:!0,children:[l.jsxs(Aj,{children:[l.jsx(En.Title,{children:"Create a New Post"}),l.jsx("button",{type:"button",className:"btn-close btn-close-white","aria-label":"Close",onClick:t})]}),l.jsxs(Ne,{children:[l.jsxs(En.Body,{children:[l.jsxs(Bi,{children:[l.jsx(Qn,{xs:8,children:l.jsxs(Ne.Group,{className:"mb-3",controlId:"postForm.title",children:[l.jsx(Ne.Label,{children:"Title"}),l.jsx("br",{}),l.jsx(Ym,{as:"textarea",rows:1,id:"post_title",name:"post_title",value:r.post_title,defaultValue:i,onChange:w})]})}),l.jsx(Qn,{xs:4,children:l.jsxs(Ne.Group,{className:"mb-3",controlId:"postForm.topic",children:[l.jsx(Ne.Label,{children:"Topic"}),l.jsx(Ne.Select,{id:"post_topic",name:"post_topic",value:r.post_topic,defaultValue:s,onChange:w,children:ft.map((p,v)=>l.jsx("option",{value:p.getName(),children:p.getName()},v))})]})})]}),l.jsxs(Ne.Group,{className:"mb-3",controlId:"postForm.desc",children:[l.jsx(Ne.Label,{children:"Description"}),l.jsx(Ym,{as:"textarea",rows:5,id:"post_desc",name:"post_desc",value:r.post_desc,defaultValue:c,onChange:w})]})]}),l.jsxs(En.Footer,{children:[l.jsxs(Bi,{children:[l.jsx(Qn,{xs:6,children:l.jsx("input",{className:"form-control form-control",id:"formFile",type:"file"})}),l.jsx(Qn,{xs:4,children:l.jsx(ha,{variant:"secondary",onClick:P,children:"Save Form for Later"})}),l.jsx(Qn,{xs:2,children:l.jsx(ha,{variant:"primary",onClick:S,children:"Post"})})]}),f&&l.jsx("div",{style:{color:"red"},children:k})]})]})]})}function hn({onPost:e}){const[t,n]=x.useState(!1),r=()=>{n(!0)},o=()=>{n(!1)};return l.jsx(ZE,{children:l.jsxs(JE,{children:[l.jsx(xi,{to:"/CodeConnect/home",children:l.jsxs(qE,{children:[l.jsx(e3,{children:"Code"}),l.jsx(t3,{children:"Connect"})]})}),l.jsxs(n3,{children:[l.jsxs(xi,{to:"/CodeConnect/home",children:[l.jsx(ls,{icon:M1}),l.jsx("span",{children:"Home"})]}),l.jsxs(xi,{to:"/CodeConnect/explore",children:[l.jsx(ls,{icon:F1}),l.jsx("span",{children:"Explore"})]}),l.jsxs(xi,{to:"/CodeConnect/direct-messages",children:[l.jsx(ls,{icon:D1}),l.jsx("span",{children:"Messages"})]}),l.jsxs(xi,{to:"/CodeConnect/profile/PixelPioneer",children:[l.jsx(ls,{icon:L1}),l.jsx("span",{children:"Profile"})]}),l.jsx(r3,{onClick:r,children:"Post"}),t&&l.jsx(Lj,{showForm:t,closeForm:o,onPostSuccess:e})]})]})})}const Mj=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`,_j=y.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`,Dj=y.div`
    font-size: 35px;
    font-weight: 600;
`,Fj=y.div`
    color: var(--white);
`,$j=y.div`
    color: var(--blue);
    padding-left: 25px;
`,zj=y.div`
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
`,ds=y(tt)`
    font-size: 22px;
`,fs=y(I0)`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--grey);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    
    &:hover {
        color: var(--white);
    }
`,Uj=y.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: var(--white);
`,Bj=y.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,Hj=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,Wj=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,Yj=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,by=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,Cy=y.div`
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
`,Ey=y.label`
    //margin-right: 21vw;
    font-size: 20px;
    color: black;
    text-align: center;
    color: white;
`,jy=y.div`
  position: fixed;
  background-color: var(--blue); 
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`,Py=y.div`
  background-color: var(--light-black); 
  color: white;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
`;function Zl(){const[e,t]=x.useState(!1),n=o=>{(o==="Direct Messages"||o==="Profile"||o==="Post")&&t(!0)},r=()=>{t(!1)};return l.jsxs(Mj,{children:[l.jsxs(_j,{children:[l.jsxs(Dj,{children:[l.jsx(Fj,{children:"Code"}),l.jsx($j,{children:"Connect"})]}),l.jsxs(zj,{children:[l.jsxs(fs,{to:"/CodeConnect/guest-home",children:[l.jsx(ds,{icon:M1}),l.jsx("span",{children:"Home"})]}),l.jsxs(fs,{to:"/CodeConnect/guest-explore",children:[l.jsx(ds,{icon:F1}),l.jsx("span",{children:"Explore"})]}),l.jsxs(fs,{onClick:()=>n("Direct Messages"),children:[l.jsx(ds,{icon:D1}),l.jsx("span",{children:"Messages"})]}),l.jsxs(fs,{onClick:()=>n("Profile"),children:[l.jsx(ds,{icon:L1}),l.jsx("span",{children:"Profile"})]}),l.jsx(Uj,{onClick:()=>n("Post"),children:"Post"})]})]}),e&&l.jsx(by,{children:l.jsxs(Cy,{children:[l.jsx(Ey,{children:"Please create an account to access this feature "}),l.jsx("div",{}),l.jsx("div",{}),l.jsx(jy,{children:"Create Account"}),l.jsx(Py,{onClick:r,children:"Close"})]})})]})}const Ty=y.div`
    display: flex;
    justify-content: center;
    width: clamp(500px, 100%, 1000px);
    display: flex;
    gap: 20px;
    align-items: center;
`,Vj=y.input`
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
        transform: translateX(3px);
    }

    &::placeholder {
        color: var(--grey);
    }
`;y(tt)`
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
`;y(tt)`
    font-size: 17px;
    color: var(--white);
`;function lp({data:e}){const[t,n]=x.useState(""),r=kt(),o=()=>{const a=e.filter(s=>s.title.toLowerCase().includes(t.toLowerCase()));r("/CodeConnect/explore-results",{state:{results:a,searchTerm:t}})},i=a=>{a.key==="Enter"&&o()};return l.jsx(Ty,{children:l.jsx(Vj,{input:"text",placeholder:"Search",value:t,onChange:a=>n(a.target.value),onKeyDown:i})})}lp.propTypes={data:H.object};const Ry=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
    /* width: clamp(500px, 90%, 900px); */
    width: 80vw;
    background-color: var(--black);
`,Gj=y.div`
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
`;const Kj=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 80%;
`,Vm=y.div`
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

`;const Xj=y(tt)`

`,Qj=y.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;
`,Zj=y.div`
    display: flex;
    margin: 0 auto;
    overflow-x: auto;
    width: 950px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
`,Zu=y.div`
    width: 100%;
    position: relative;
    text-align: center;
    color: var(--white);
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`,Ju=y.img`
    flex: 3;
    max-width: 950px;
    scroll-snap-align: start;
    filter: brightness(50%);
    border-radius: 10px;
`,qu=y.div`
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
`,Jj=y.div`
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
`,qj=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 950px;
    margin: 0 auto;
    padding-bottom: 10%;
`,ma=y.div`
    font-size: 40px;
    font-weight: 500;
    color: var(--white);
`,e5=y.button`
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
`;function Ny({topicName:e}){const t=kt(),n=()=>{let r=[];ft.forEach(o=>{o.name===e&&o.posts.forEach(i=>{r.push(i)})}),t("/CodeConnect/explore-results",{state:{results:r,searchTerm:e}})};return l.jsx(e5,{onClick:n,children:e})}Ny.propTypes={topicName:H.string};const t5="/CodeConnect/assets/web-dev-0661792e.png",n5="/CodeConnect/assets/game-dev-bd8da6b7.png",r5="/CodeConnect/assets/programming-d8860b21.png";console.log({postDatabase:re});function Gm({isGuestView:e}){x.useState("Recent");const t=kt(),n=r=>{let o=[];ft.forEach(i=>{i.name===r&&i.posts.forEach(a=>{o.push(a)})}),t("/CodeConnect/explore-results",{isGuestView:e,state:{results:o,searchTerm:r}})};return l.jsxs(It,{children:[e?l.jsx(Zl,{}):l.jsx(hn,{}),l.jsx(Ry,{children:l.jsxs(Gj,{children:[l.jsx(lp,{data:re}),l.jsxs(Kj,{children:[l.jsx(Vm,{children:l.jsx(ma,{children:l.jsxs("div",{children:[l.jsx(Xj,{icon:YE})," Trending"]})})}),l.jsx(Qj,{children:l.jsxs(Zj,{children:[l.jsxs(Zu,{id:"slide-1",children:[l.jsx(Ju,{src:r5}),l.jsx(qu,{onClick:()=>n("Python"),children:"Python"})]}),l.jsxs(Zu,{id:"slide-2",children:[l.jsx(Ju,{src:n5}),l.jsx(qu,{onClick:()=>n("Game Development"),children:"Game Development"})]}),l.jsxs(Zu,{id:"slide-3",children:[l.jsx(Ju,{src:t5}),l.jsx(qu,{onClick:()=>n("React"),children:"React"})]}),l.jsxs(Jj,{children:[l.jsx("a",{href:"#slide-1"}),l.jsx("a",{href:"#slide-2"}),l.jsx("a",{href:"#slide-3"})]})]})}),l.jsx(Vm,{children:l.jsx(ma,{children:"Topics"})}),l.jsx(qj,{children:ft.map((r,o)=>l.jsx(Ny,{topicName:r.name},o))})]})]})})]})}const o5=y.p`
color: #FFF;
background-color: #353845;
font-family: Inter;
font-size: 60px;
font-style: normal;
font-weight: 300;
line-height: normal;
`,i5=({children:e})=>l.jsx(o5,{children:e}),a5=y.p`
color: #8F8F8F;
font-family: Inter;
background-color: #353845;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`,s5=({children:e})=>l.jsx(a5,{children:e}),l5=y.p`
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: underline;
background: #3a3d4b
`,u5=({children:e})=>l.jsx(l5,{children:e}),c5=y.div`
    display: flex;
    width: 287px;
    padding: 4px 8px;
    align-items: center;
    gap: 20px;
`,d5=e=>l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:25,height:24,fill:"none",...e,children:[l.jsx("g",{clipPath:"url(#a)",children:l.jsx("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.5 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75A5.07 5.07 0 0 0 20.41 1S19.23.65 16.5 2.48a13.38 13.38 0 0 0-7 0C6.77.65 5.59 1 5.59 1a5.07 5.07 0 0 0-.09 3.77A5.44 5.44 0 0 0 4 8.55c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"})}),l.jsx("defs",{children:l.jsx("clipPath",{id:"a",children:l.jsx("path",{fill:"#fff",d:"M.5 0h24v24H.5z"})})})]}),f5=e=>l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:25,height:24,fill:"none",...e,children:[l.jsx("g",{clipPath:"url(#a)",children:l.jsx("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M23.5 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3.5 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.279-.028-.556-.08-.83A7.72 7.72 0 0 0 23.5 3Z"})}),l.jsx("defs",{children:l.jsx("clipPath",{id:"a",children:l.jsx("path",{fill:"#fff",d:"M.5 0h24v24H.5z"})})})]});function p5({network:e,username:t}){const n=()=>{switch(e){case"twitter":return l.jsx(f5,{});case"github":return l.jsx(d5,{})}};return l.jsxs(c5,{children:[n(),l.jsx(u5,{children:t})]})}const h5=y.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`;function m5({username:e,biography:t,socialLinks:n}){return l.jsxs(h5,{children:[l.jsx(i5,{children:e}),l.jsx(s5,{children:t}),n.map((r,o)=>l.jsx(p5,{network:r.getSocialMedia(),username:r.getUsername()},o))]})}const g5=y.img`
  width:200px;
  height:200px;
  align-self: stretch;
  object-fit: cover;
  border-radius: 300px;
`;function v5({imageUrl:e}){return l.jsx(g5,{src:e,alt:"Profile"})}const y5=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;function x5({user:e}){return l.jsxs(y5,{children:[l.jsx(v5,{imageUrl:e.getProfilePicture()}),l.jsx(m5,{username:e.getUsername(),biography:e.getBiography(),socialLinks:e.getSocialMedia()})]})}const w5=y.div`
    display: flex;
    padding: 6px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 4px;
    background: #558FFF;
`,k5=y.p`
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
background: #558FFF;
font-weight: 400;
line-height: normal;
`;function S5({role:e}){return l.jsx(w5,{children:l.jsx(k5,{children:e})})}const b5=y.div`
    display: flex;
    padding: 10px 10px 10px 0px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`,C5=y.div`
    display: flex;
    padding: 4px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: #314B7E;
`,E5=y.p`
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #8CAFF4;
    align-self: stretch;
    background: #314B7E;
`;function j5({topicName:e}){return l.jsx(C5,{children:l.jsx(E5,{children:e})})}function P5({interests:e}){return l.jsx(b5,{children:e.map((t,n)=>l.jsx(j5,{topicName:t},n))})}const T5=y.div`
    display: flex;
    padding: 10px 4px;;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`,Iy=y.p`
    color: #FFF;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #3a3d4b;
`,Oy=y.div`
    display: flex;
    padding: 4px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 4px;
    background: #558FFF;
`,R5=y.div`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1.5px solid #35383E;
    background: #252527;
`,N5=e=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...e,children:l.jsx("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM12.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM3.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"})});function I5(){const e={backgroundColor:"#3A3D4B",borderRadius:"8px",border:"1.5px solid #45484F"};return l.jsx(Oy,{style:e,children:l.jsx(Iy,{children:"Edit Profile"})})}function O5(){const e={backgroundColor:"#558FFF",borderRadius:"8px"},t={backgroundColor:"#558FFF"};return l.jsx(Oy,{style:e,children:l.jsx(Iy,{style:t,children:"Message"})})}function A5({loggedInUser:e}){const t=()=>{switch(e){case!0:return l.jsx(I5,{});case!1:return l.jsx(O5,{})}};return l.jsxs(T5,{children:[t(),e?null:l.jsxs(R5,{children:[" ",l.jsx(N5,{})," "]})]})}const L5=y.div`
    display: flex;
    padding: 35px 22px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    
`;function M5({user:e}){return l.jsxs(L5,{children:[l.jsx(S5,{role:e.role}),l.jsx(P5,{interests:e.interests}),l.jsx(A5,{loggedInUser:e.username==="PixelPioneer"})]})}const _5=y.div`
    display: flex;
    padding: 32px 32px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    align-self: stretch;
    background-color: #353845;
`;function D5({user:e}){return l.jsxs(_5,{children:[l.jsx(x5,{user:e}),l.jsx(M5,{user:e})]})}const F5=y.div`
    width: 150px;
    align-self: stretch;
    background: #2B2D37;
`;function Km(){return l.jsx(F5,{})}const $5=y.div`  
    display: flex;
    padding: 32px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`,z5=y.p`
    align-self: stretch;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background:#353845;
`,U5=e=>l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:182,height:127,fill:"none",...e,children:[l.jsx("g",{clipPath:"url(#a)",children:l.jsx("path",{fill:"#fff",d:"M52.183 106.583a9.038 9.038 0 0 1-6.018-2.284L.288 63.517l48.427-43.05a9.066 9.066 0 0 1 12.042 13.555L27.584 63.517l30.628 27.217a9.072 9.072 0 0 1-6.018 15.85l-.011-.001Zm81.1-.017 48.427-43.05-45.876-40.782a9.065 9.065 0 0 0-12.038 13.554l30.628 27.228L121.248 93a9.065 9.065 0 0 0-.723 12.763 9.067 9.067 0 0 0 12.759.803h-.001Zm-42.408 12.846 18.133-108.8a9.061 9.061 0 0 0-14.218-8.91 9.063 9.063 0 0 0-3.66 5.924l-18.134 108.8a9.065 9.065 0 0 0 7.452 10.438 9.66 9.66 0 0 0 1.5.119 9.068 9.068 0 0 0 8.931-7.571h-.004Z"})}),l.jsx("defs",{children:l.jsx("clipPath",{id:"a",children:l.jsx("path",{fill:"#fff",d:"M.288 0h181.424v126.936H.288z"})})})]});function B5(){return l.jsxs($5,{children:[l.jsx(U5,{}),l.jsx(z5,{children:"There are currently no posts"})]})}const H5=y(St)`  
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
`,W5=y.div`
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
`;const Y5=y.div`
    display: flex;
    justify-content: space-between;
`,Ay=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,V5=y.div`
    font-size: 30px;
`,G5=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
`,Ly=y.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`,My=y.div`
    &:hover {
        color: var(--white);
    }
`,K5=y.div`
    font-size: 12px;
`,Ta=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,_y=y.div`
    font-size: 30px;
    color: white;
`,Ra=y.div`
    font-size: 15px;
    line-height: 20px;
    color: var(--grey);
`,Dy=y.div`
    display: flex;
`,Fy=y.div`
    border-radius: 50px;
    background-color: var(--blue-low);
    height: 30px;
`,$y=y.div`
    padding: 0 10px;
    font-size: 12px;
    line-height: 30px;
    color: var(--light-blue);
`,zy=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    color: var(--tan);
`,gl=y(tt)`
    &:hover {
        color: var(--white);
    }
`,X5=y(tt)`
    color: #F45151;
`,Ao=y.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--grey);
`;var Uy={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]},By={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"]};function Na({information:e}){const t=kt(),[n,r]=x.useState(!1),o=()=>{let s=e.getPostURL().url;localStorage.getItem("userDatabaseKey")!=null?t("/CodeConnect".concat(s)):t("/CodeConnect/guest-view".concat(s))},i=s=>{s.stopPropagation(),s.preventDefault(),n?(e.dislike(),r(!1)):(e.like(),r(!0))},a=s=>{s.stopPropagation(),s.preventDefault(),t("/CodeConnect/profile/"+e.author.getUsername())};return l.jsx(H5,{onClick:o,children:l.jsxs(W5,{children:[l.jsxs(Y5,{children:[l.jsxs(Ay,{children:[l.jsxs(G5,{onClick:a,children:[l.jsx(Ly,{src:e.author.getProfilePicture()}),l.jsx(My,{children:e.author.getUsername()})]}),l.jsx(K5,{children:e.timestamp})]}),l.jsx(V5,{children:e.reaction})]}),l.jsxs(Ta,{children:[l.jsx(_y,{children:e.title}),l.jsx(Ra,{children:e.content})]}),l.jsx(Dy,{children:l.jsx(Fy,{children:l.jsx($y,{children:e.topic})})}),l.jsxs(zy,{children:[l.jsxs(Ao,{children:[l.jsx("div",{onClick:i,children:n?l.jsx(X5,{icon:GE}):l.jsx(gl,{icon:Uy})}),l.jsxs("div",{children:[e.likes," likes"]})]}),l.jsxs(Ao,{children:[l.jsx(gl,{icon:By}),l.jsxs("div",{children:[e.getCommentsTotal()," comments"]})]}),l.jsx(Ao,{children:". . ."})]})]})})}Na.propTypes={information:H.object};const Q5=y.div`
    display: flex;
    padding: 16px 18px 16px 18px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    background: #2a2d37;
`,Z5=y.p`
    color: #FFF;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
`;function J5(){return l.jsx(Z5,{children:"Posts"})}function q5({posts:e}){return l.jsxs(Q5,{children:[l.jsx(J5,{}),e.length>0?e.map((t,n)=>l.jsx(Na,{information:t},n)):l.jsx(B5,{})]})}const e4=y.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
    background: #161314;
`;function t4({posts:e}){return l.jsxs(e4,{children:[l.jsx(Km,{}),l.jsx(q5,{posts:e}),l.jsx(Km,{})]})}const n4=y.div`
    width: 80vw;
    margin-left: 20vw;
    background-color: #2B2D37;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;function r4(){const{userName:e}=ba(),t=Cn.find(n=>n.username==e);return l.jsxs(It,{children:[l.jsx(hn,{}),l.jsxs(n4,{children:[l.jsx(D5,{user:t}),l.jsx(t4,{posts:t.getPosts()})]})]})}const o4=qS`
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
`,Hy=y.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,Wy=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: clamp(500px, 90%, 900px);
`,Yy=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,Vy=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`;function i4(){const[e,t]=x.useState("Recent"),[n,r]=x.useState(!1),o=()=>{r(a=>!a)},i=re.slice().reverse();return l.jsxs(It,{children:[l.jsx(hn,{onPost:o}),l.jsx(Hy,{children:l.jsxs(Wy,{children:[l.jsxs(Yy,{children:[l.jsx(ma,{children:"Home"}),l.jsx(Gl,{setStatus:t})]}),l.jsx(Vy,{children:i.map((a,s)=>l.jsx(Na,{information:a},s))})]})})]})}const a4=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    background-color: var(--black);
    height: 100vh;
`,s4=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`,l4=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50%;
    border-radius: 10px;
    box-shadow: 0 10px 20px var(--shadow);

`,u4=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,c4=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,d4=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 30%;
`,f4=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 27%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

`,p4=y.div`
    display: flex;
    align-items: center; 
    height: 77%;
    overflow-y: scroll;
    justify-content: center;
`,h4=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,m4=y.textarea`
   width: 80%;   
   background-color: grey;
   color: white;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,g4=y.textarea`
   width: 90%;   
   height: 80%;
   color: white;
   background-color: grey;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,v4=y.div`
    display: flex;
    align-items: center; 
    height: 20%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,y4=y.button`
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
`,x4=y(St)`

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

`;const w4=y.div`
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
`,k4=y.div`
   display: flex;
   align-items: center;
   gap: 20px;
   color: var(--grey);
   margin-left: 2vw;
`,S4=y.img`
   width: 60px;
   border-radius: 100px;
`,b4=y.div`
   font-size: 25px;
   color: var(--white);
`;function zt({user:e,url:t}){const n=kt(),r=()=>{n(t)};return l.jsx(w4,{children:l.jsxs(k4,{onClick:r,children:[l.jsx(S4,{src:e.profilePic}),l.jsx(b4,{children:e.userName})]})})}const C4=y.div`
    font-size: 35px;
    font-weight: 600;
    color: var(--white);

`,Jl=y.div`
    font-size: 30px;
    font-weight: 600;
    color: var(--white);

`,ni="/CodeConnect/assets/userPfp-3c07c570.png",ri="/CodeConnect/assets/userPfp2-778a6b44.png",E4={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:ni},j4={userName:"Boo",profilePic:ri},P4={userName:"Sonic",profilePic:Zr};function T4(){kt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return l.jsxs(It,{children:[l.jsx(hn,{}),l.jsxs(a4,{children:[l.jsx(s4,{children:l.jsxs(l4,{children:[l.jsxs(f4,{children:[l.jsx(C4,{children:"New Direct Message"}),l.jsx(x4,{to:"/CodeConnect/direct-messages",children:"X"})]}),l.jsxs(d4,{children:[l.jsx(m4,{rows:"2",cols:"30"}),l.jsx(h4,{children:"Search"})]}),l.jsx(p4,{children:l.jsx(g4,{rows:"2",cols:"30"})}),l.jsx(v4,{children:l.jsx(y4,{children:"Send"})})]})}),l.jsxs(u4,{children:[l.jsx(c4,{children:l.jsx(Jl,{children:"Messages"})}),l.jsx(zt,{user:j4,url:e}),l.jsx(zt,{user:E4,url:t}),l.jsx(zt,{user:P4,url:n})]})]})]})}function R4(){localStorage.removeItem("userDatabaseKey");const[e,t]=x.useState("Recent"),n=re.slice().reverse();return l.jsxs(It,{children:[l.jsx(Zl,{}),l.jsx(Bj,{children:l.jsxs(Hj,{children:[l.jsxs(Wj,{children:[l.jsx(ma,{children:"Home"}),l.jsx(Gl,{setStatus:t})]}),l.jsx(Yj,{children:n.map((r,o)=>l.jsx(Na,{information:r},o))})]})})]})}const N4=y.div`

    margin-left: 20vw;
    display: flex;
    justify-content: center;
    width: 80vw;
    height: 100vh;
`,I4=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,O4=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
`,A4=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,L4=y.div`  
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
`,M4=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 90%;
    height: 80%;
`,_4=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,D4=y.img`
    width: 60px;
    border-radius: 100px;
`,F4=y(St)`
    font-size: 25px;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`,$4=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,z4=y.div`
    font-size: 19px;
    color: var(--grey);
`;function ec({user:e,targetUrl:t}){const n=kt(),r=()=>{n(t)};return l.jsx(L4,{onClick:r,children:l.jsxs(M4,{children:[l.jsxs(_4,{children:[l.jsx(D4,{src:e.profilePic}),l.jsx(F4,{children:e.userName})]}),l.jsx($4,{children:l.jsx(z4,{children:e.text})})]})})}const U4=y.div`
    font-size: 50px;
    font-weight: 700;
    color: var(--white);

`,ql=y(St)`
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
`,B4={userName:"Boo",text:"HAHAHHAHAHAH.",profilePic:ri},H4={userName:"Kirby",text:"Words words words words. Words words words.",profilePic:ni},W4={userName:"Sonic",text:"Gotta go fast bro",profilePic:Zr};function Y4(){kt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return x.useState("Recents"),l.jsxs(It,{children:[l.jsx(hn,{}),l.jsxs(N4,{children:[l.jsxs(I4,{children:[l.jsx(O4,{children:l.jsx(U4,{children:"Direct Messages"})}),l.jsxs(A4,{children:[l.jsx(ec,{user:B4,targetUrl:e}),l.jsx(ec,{user:H4,targetUrl:t}),l.jsx(ec,{user:W4,targetUrl:n})]})]}),l.jsx(ql,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const V4=y(It)`
    height: 100vh;
    justify-content: center;
    align-items: center;
`,G4=y.div`
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
`;const K4=y.div`
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
`,wi=y(Ne)`

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
`,X4=y.p`
    background-color: var(--light-black);
`,Q4=y.a`
    color: white;
    background-color: var(--light-black);
`,ps=y(Ne.Control)`
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
`,Z4=y(En)`
    .modal-content {
        background-color: var(--light-black);
        color: var(--white);
    }
    
`,J4=y.h1`
    margin: 0 auto;
    color: var(--white);
`,q4=y(ha)`
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
`,eP=y(St)`
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
`;const tP={createAccount:async(e,t,n,r,o)=>{let i=e.includes("@")&&e.includes(".com"),a=/[!@#$&]/;return console.log(i),i?t==="PixelPioneer"?{success:!1,error:"Username is already taken."}:a.test(n)?n.length<8?{success:!1,error:"Password must contain 8 or more characters"}:n!==r?{success:!1,error:"Passwords must match"}:o?{success:!0}:{success:!1,error:"Please read and agree to the terms of service before proceeding."}:{success:!1,error:"Password must contain at least one special character (!, @, #, $, &)"}:{success:!1,error:"Invalid email. An example of a proper email is 'user@email.com'"}}},Xm=y.div`
    color: var(--grey);
`,nP=y.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 5vh 0;
    width: clamp(500px, 90%, 900px);
`,rP=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,oP=y(St)`
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
`,Gy=y(tt)`
    color: white;
`,iP=y.div`
    width: 98%;
`;function aP(){const e=kt(),[t,n]=x.useState(""),[r,o]=x.useState(""),[i,a]=x.useState(""),[s,u]=x.useState(""),[c,d]=x.useState(""),[f,h]=x.useState(""),[k,w]=x.useState(!1),S=()=>w(!1),P=()=>w(!0),g=async()=>{try{const p=await tP.createAccount(t,r,i,s,f);p.success?(console.log("Login successful:",p.user),e("/CodeConnect/home")):p.success||(d(p.error),console.log("failed."))}catch(p){console.error("Login error:",p),d("Unknown error has occured. Please try again.")}};return l.jsx(V4,{children:l.jsxs(G4,{children:[l.jsx(J4,{children:"Create Account"}),l.jsxs(K4,{children:[l.jsx(eP,{to:"/CodeConnect/",children:l.jsx(Gy,{icon:_1})}),l.jsx(wi,{children:l.jsxs(Ne.Group,{className:"createAcct",controlId:"email",children:[l.jsx(Ne.Label,{children:" Email address "}),l.jsx("br",{}),l.jsx(ps,{type:"email",placeholder:"Enter email",size:"md",value:t,onChange:p=>n(p.target.value)})]})}),l.jsx(wi,{class:!0,children:l.jsxs(Ne.Group,{className:"createAcct",controlId:"username",children:[l.jsx(Ne.Label,{children:" Username "}),l.jsx("br",{}),l.jsx(ps,{type:"text",placeholder:"Enter username",size:"md",value:r,onChange:p=>o(p.target.value)})]})}),l.jsx(wi,{class:!0,children:l.jsxs(Ne.Group,{className:"createAcct",controlId:"password",children:[l.jsx(Ne.Label,{children:" Password "}),l.jsx("br",{}),l.jsx(ps,{type:"password",placeholder:"Enter password",size:"md",value:i,onChange:p=>a(p.target.value)})]})}),l.jsx(wi,{children:l.jsxs(Ne.Group,{className:"createAcct",controlId:"confirmPassword",children:[l.jsx(Ne.Label,{children:" Confirm Password "}),l.jsx("br",{}),l.jsx(ps,{type:"password",placeholder:"Confirm password",size:"md",value:s,onChange:p=>u(p.target.value)})]})}),l.jsxs(wi,{children:[l.jsx("span",{class:"spanCheckbox",children:l.jsx(Ne.Check,{type:"checkbox",id:"terms",value:f,onChange:p=>h(p.target.checked)})}),l.jsx("span",{class:"spanLabel",children:l.jsxs(X4,{children:[l.jsx(Q4,{onClick:P,children:"Agree to Terms and Conditions"})," "]})})]}),l.jsxs(Z4,{show:k,onHide:S,animation:!1,scrollable:!0,children:[l.jsx(En.Header,{closeButton:!0,children:l.jsx(En.Title,{children:"Terms and Conditions"})}),l.jsxs(En.Body,{children:["1. YOUR AGREEMENT By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.",l.jsx("br",{}),l.jsx("br",{}),"PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions. 2. PRIVACY Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.",l.jsx("br",{}),l.jsx("br",{}),'3. LINKED SITES This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.',l.jsx("br",{}),l.jsx("br",{}),"4. FORWARD LOOKING STATEMENTS All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.",l.jsx("br",{}),l.jsx("br",{}),'5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY A. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE, INCLUDING ANY RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT, MEMORANDUM, OR INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE RISK; (ii) THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE AND NON-INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH RESPECT TO THE RESULTS THAT MAY BE OBTAINED FROM THIS SITE, THE PRODUCTS OR SERVICES ADVERTISED OR OFFERED OR MERCHANTS INVOLVED; (v) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR FOR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.',l.jsx("br",{}),l.jsx("br",{}),"B. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.",l.jsx("br",{}),l.jsx("br",{}),"6. EXCLUSIONS AND LIMITATIONS SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.",l.jsx("br",{}),l.jsx("br",{}),`7. OUR PROPRIETARY RIGHTS This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third party's intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively "Trademarks") or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services.`,l.jsx("br",{}),l.jsx("br",{}),"The framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited.",l.jsx("br",{}),l.jsx("br",{}),`8. INDEMNITY By using the Site web sites you agree to indemnify us and affiliated entities (collectively "Indemnities") and hold them harmless from any and all claims and expenses, including (without limitation) attorney's fees, arising from your use of the Site web sites, your use of the Products and Services, or your submission of ideas and/or related materials to us or from any person's use of any ID, membership or password you maintain with any portion of the Site, regardless of whether such use is authorized by you.`,l.jsx("br",{}),l.jsx("br",{}),"9. COPYRIGHT AND TRADEMARK NOTICE Except our generated dummy copy, which is free to use for private and commercial use, all other text is copyrighted. generator.lorem-ipsum.info © 2013, all rights reserved",l.jsx("br",{}),l.jsx("br",{}),'10. INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS It is our policy to respond expeditiously to claims of intellectual property infringement. We will promptly process and investigate notices of alleged infringement and will take appropriate actions under the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws. Notices of claimed infringement should be directed to:',l.jsx("br",{}),l.jsx("br",{}),"11. PLACE OF PERFORMANCE This Site is controlled, operated and administered by us from our office in Kiev, Ukraine. We make no representation that materials at this site are appropriate or available for use at other locations outside of the Ukraine and access to them from territories where their contents are illegal is prohibited. If you access this Site from a location outside of the Ukraine, you are responsible for compliance with all local laws.",l.jsx("br",{}),l.jsx("br",{}),"12. GENERAL",l.jsx("br",{}),l.jsx("br",{}),"A. If any provision of these Terms and Conditions is held to be invalid or unenforceable, the provision shall be removed (or interpreted, if possible, in a manner as to be enforceable), and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. These Terms and Conditions set forth the entire understanding and agreement between us with respect to the subject matter contained herein and supersede any other agreement, proposals and communications, written or oral, between our representatives and you with respect to the subject matter hereof, including any terms and conditions on any of customer's documents or purchase orders.",l.jsx("br",{}),l.jsx("br",{}),"B. No Joint Venture, No Derogation of Rights. You agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of these Terms and Conditions or your use of the Site. Our performance of these Terms and Conditions is subject to existing laws and legal process, and nothing contained herein is in derogation of our right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by us with respect to such use."]})]}),c&&l.jsx("div",{style:{color:"red"},children:c}),l.jsx(q4,{onClick:g,children:"Create Account"})]})]})})}const sP=y.div`  
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
`,lP=y.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 90%;
    height: 80%;
`,uP=y.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    width: 100%;
    height: 100%;
`,Ky=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: 5% 95%;
`,Xy=y.div`
    width: 100%;
    height: 50%;
    background-color: none;
    border-left: 5px solid;
    border-bottom: 5px solid;
    border-color: grey;
`,up=y.div`
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
`,cP=y.div`
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
`;const Qm=y(tt)`
    color: var(--white);
`,dP=y.div`
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
`;y.div`
    width: 30px;
    height: 30px;
    float: right;
    flex: 0;
    display: flex;
    align-items: center;
    padding: 7px;
    border-radius: 50%;
    background-color: white;
    color: var(--blue);
`;y(tt)`

`;const cp=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,dp=y.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`,fp=y.div`
    flex: 1;
`;function pp({id:e,level1:t,level2:n,closeForm:r,onReplySuccess:o,isGuestView:i},a){const[s,u]=x.useState(!1),[c,d]=x.useState(!1),[f,h]=x.useState({reply_desc:""}),[k,w]=x.useState(!1),S="Please enter a description before replying!",P=m=>{const{name:C,value:T}=m.target;h({...f,[C]:T})},g=()=>{i?d(!0):u(!s)},p=()=>{const{reply_desc:m}=f;if(m.trim()==""){w(!0);return}const C=re[e];vb(C,t,n,m),w(!1),o(),g()},v=()=>{d(!1)};return l.jsxs(l.Fragment,{children:[l.jsx(dP,{variant:"outline-primary",className:"btn-sm",onClick:()=>g(),"aria-controls":"collapseOne","aria-expanded":s,children:"Reply"}),l.jsx("br",{}),c&&l.jsx(by,{children:l.jsxs(Cy,{children:[l.jsx(Ey,{children:"Please create an account to access this feature "}),l.jsx("div",{}),l.jsx("div",{}),l.jsx(jy,{children:"Create Account"}),l.jsx(Py,{onClick:v,children:"Close"})]})}),s&&l.jsxs(Ne,{children:[l.jsxs(Bi,{children:[l.jsx(Qn,{xs:11,children:l.jsx(Ne.Group,{className:"mb-3",controlId:"replyForm.desc",children:l.jsx(Ne.Control,{as:"textarea",rows:5,id:"reply_desc",name:"reply_desc",value:f.reply_desc,onChange:P,placeholder:"I've got some thoughts on this..."})})}),l.jsxs(Qn,{xs:1,children:[l.jsx(Bi,{children:l.jsxs(ha,{variant:"danger",className:"btn-sm",onClick:()=>u(!1),children:["Exit ",l.jsx(Qm,{icon:QE,size:"xl"})]})}),l.jsx("br",{}),l.jsx(Bi,{children:l.jsxs(ha,{variant:"secondary",className:"btn-sm",onClick:p,children:["Reply ",l.jsx(Qm,{icon:VE,size:"xl"})]})})]})]}),k&&l.jsx("div",{style:{color:"red"},children:S})]})]})}function fP({handleRerenderThread:e,isGuestView:t}){const[n,r]=x.useState(!1),{id:o}=ba(),i=()=>{r(!1)},a=re[o],s=a.author.getProfilePicture(),u=a.author.getUsername();return l.jsx(sP,{children:l.jsxs(lP,{children:[l.jsxs(Ay,{children:[l.jsx(Ly,{src:s}),l.jsx(My,{children:u})]}),l.jsxs(Ta,{children:[l.jsx(_y,{children:a.title}),l.jsx(Ra,{children:a.content})]}),l.jsx(Dy,{children:l.jsx(Fy,{children:l.jsx($y,{children:a.topic})})}),l.jsxs(zy,{children:[l.jsxs(Ao,{children:[l.jsx(gl,{icon:Uy}),l.jsxs("div",{children:[a.likes," likes"]})]}),l.jsxs(Ao,{children:[l.jsx(gl,{icon:By}),l.jsxs("div",{children:[a.getCommentsTotal()," comments"]})]}),l.jsx(Ao,{children:l.jsx("div",{children:a.reactions})})]}),l.jsx(pp,{id:o,level1:-1,level2:-1,onReplySuccess:e,closeForm:i,isGuestView:t})]})})}function pP({user:e,level1:t,level2:n,handleRerenderThread:r,isGuestView:o},i){const{author:a,content:s}=e,[u,c]=x.useState(!1),{id:d}=ba(),f=()=>{c(!1)};return l.jsx(l.Fragment,{children:l.jsxs(Ky,{children:[l.jsx(Xy,{}),l.jsxs(up,{children:[l.jsxs(cp,{children:[l.jsx(dp,{src:a.getProfilePicture()}),l.jsx(fp,{children:a.getUsername()})]}),l.jsx("br",{}),l.jsx(Ta,{children:l.jsx(Ra,{children:s})}),l.jsx("br",{}),l.jsx(pp,{id:d,level1:t,level2:0,closeForm:f,onReplySuccess:r,isGuestView:o})]})]})})}function Qy({user:e,level1:t,handleRerenderThread:n,isGuestView:r},o){const{author:i,content:a}=e,[s,u]=x.useState(!1),{id:c}=ba(),d=()=>{u(!1)};return l.jsx(l.Fragment,{children:l.jsxs(up,{children:[l.jsxs(cp,{children:[l.jsx(dp,{src:i.getProfilePicture()}),l.jsx(fp,{children:i.getUsername()})]}),l.jsx("br",{}),l.jsx(Ta,{children:l.jsx(Ra,{children:a})}),l.jsx("br",{}),l.jsx(pp,{id:c,level1:t,level2:-1,closeForm:d,onReplySuccess:n,isGuestView:r})]})})}Qy.propTypes={user:H.object};function hP({user:e}){const{author:t,content:n}=e;return l.jsx(l.Fragment,{children:l.jsxs(Ky,{children:[l.jsx(Xy,{}),l.jsxs(up,{children:[l.jsxs(cp,{children:[l.jsx(dp,{src:t.getProfilePicture()}),l.jsx(fp,{children:t.getUsername()})]}),l.jsx("br",{}),l.jsx(Ta,{children:l.jsx(Ra,{children:n})}),l.jsx("br",{})]})]})})}const mP=y.div`
    display: flex;
    padding: 5px 0px;
    width: 120px;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
    background-color: var(--grey);
    color: var(--black);
    border-radius: 50px;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        color: var(--blue);
        background-color: var(--white);
        box-shadow: 0 5px 10px var(--shadow);
    }
`;function gP(){const e=()=>{window.history.go(-1)};return l.jsx(mP,{onClick:e,children:"Back"})}function Zm({isGuestView:e}){const[t,n]=x.useState("Recent"),{id:r}=ba(),i=re[r].getPostInformation().comments,[a,s]=x.useState(!1),u=()=>{s(c=>!c)};return l.jsxs(It,{children:[e?l.jsx(Zl,{}):l.jsx(hn,{}),l.jsx(Hy,{children:l.jsxs(Wy,{children:[l.jsxs(Yy,{children:[l.jsx(ma,{}),l.jsx(gP,{}),l.jsx(Gl,{setStatus:n})]}),l.jsxs(uP,{children:[l.jsx(fP,{handleRerenderThread:u,isGuestView:e}),i.map((c,d)=>l.jsxs(De.Fragment,{children:[l.jsx(Qy,{level1:d,user:c,handleRerenderThread:u,isGuestView:e}),c.comments&&c.comments.length>0&&l.jsx("div",{children:c.comments.map((f,h)=>l.jsxs(De.Fragment,{children:[l.jsx(pP,{level1:d,level2:h,user:f,handleRerenderThread:u,isGuestView:e}),f.comments&&f.comments.length>0&&l.jsx(cP,{children:f.comments.map((k,w)=>l.jsx(hP,{user:k}))})]},h))})]},d))]})]})})]})}const vP=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,yP=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,xP=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,wP=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,kP=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,SP=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,bP=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,CP=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,EP=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,jP=y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,PP=y(St)`

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
`,hp=y(St)`
    font-size: 60px;
    font-weight: 500;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`,mp=y.img`
    width: 60px;
    border-radius: 100px;
`,TP=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border: 1px solid black;
    height: 150px;
    transition: 0.1s ease-in-out;
`,RP=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    height: 80%;
`,NP=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,IP=y.img`
    width: 60px;
    border-radius: 100px;
`,OP=y.div`
    font-size: 22px;
    color: var(--white);
`,AP=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,LP=y.div`
    font-size: 17px;
    color: var(--white);
`;function ct({user:e,text:t}){return l.jsx(TP,{children:l.jsxs(RP,{children:[l.jsxs(NP,{children:[l.jsx(IP,{src:e.profilePic}),l.jsx(OP,{children:e.userName})]}),l.jsx(AP,{children:l.jsx(LP,{children:e.message})})]})})}const Jm={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Ul},hs={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:ni},MP={userName:"Boo",profilePic:ri},_P={userName:"Sonic",profilePic:Zr};function DP(){kt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return l.jsxs(It,{children:[l.jsx(hn,{}),l.jsxs(vP,{children:[l.jsx(yP,{children:l.jsxs(xP,{children:[l.jsxs(SP,{children:[l.jsx(mp,{src:ni}),l.jsx(hp,{children:"Kirby"}),l.jsx(PP,{to:"/CodeConnect/direct-messages",children:"X"})]}),l.jsxs(bP,{children:[l.jsx(ct,{user:hs}),l.jsx(ct,{user:Jm}),l.jsx(ct,{user:hs}),l.jsx(ct,{user:Jm}),l.jsx(ct,{user:hs})]}),l.jsxs(CP,{children:[l.jsx(jP,{rows:"2",cols:"20"}),l.jsx(EP,{children:"Send"})]})]})}),l.jsxs(kP,{children:[l.jsx(wP,{children:l.jsx(Jl,{children:"Messages"})}),l.jsx(zt,{user:MP,url:e}),l.jsx(zt,{user:hs,url:t}),l.jsx(zt,{user:_P,url:n})]}),l.jsx(ql,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const FP=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;  
`,$P=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,zP=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,UP=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,BP=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,HP=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,WP=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,YP=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,VP=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,GP=y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,KP=y(St)`

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
`,qm={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Ul},XP={userName:"Kirby",profilePic:ni},ms={message:"HAHAHHAHAHAH.",userName:"Boo",profilePic:ri},QP={userName:"Sonic",profilePic:Zr};function ZP(){kt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return l.jsxs(It,{children:[l.jsx(hn,{}),l.jsxs(FP,{children:[l.jsx($P,{children:l.jsxs(zP,{children:[l.jsxs(HP,{children:[l.jsx(mp,{src:ri}),l.jsx(hp,{children:"Boo"}),l.jsx(KP,{to:"/CodeConnect/direct-messages",children:"X"})]}),l.jsxs(WP,{children:[l.jsx(ct,{user:ms}),l.jsx(ct,{user:qm}),l.jsx(ct,{user:ms}),l.jsx(ct,{user:qm}),l.jsx(ct,{user:ms})]}),l.jsxs(YP,{children:[l.jsx(GP,{rows:"2",cols:"20"}),l.jsx(VP,{children:"Send"})]})]})}),l.jsxs(BP,{children:[l.jsx(UP,{children:l.jsx(Jl,{children:"Messages"})}),l.jsx(zt,{user:ms,url:e}),l.jsx(zt,{user:XP,url:t}),l.jsx(zt,{user:QP,url:n})]}),l.jsx(ql,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const JP=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,qP=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,eT=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,tT=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,nT=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,rT=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,oT=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,iT=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,aT=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,sT=y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,lT=y(St)`

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
`,eg={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Ul},uT={userName:"Kirby",profilePic:ni},cT={userName:"Boo",profilePic:ri},gs={message:"Gotta go fast bro",userName:"Sonic",profilePic:Zr};function dT(){kt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return l.jsxs(It,{children:[l.jsx(hn,{}),l.jsxs(JP,{children:[l.jsx(qP,{children:l.jsxs(eT,{children:[l.jsxs(rT,{children:[l.jsx(mp,{src:Zr}),l.jsx(hp,{children:"Sonic"}),l.jsx(lT,{to:"/CodeConnect/direct-messages",children:"X"})]}),l.jsxs(oT,{children:[l.jsx(ct,{user:gs}),l.jsx(ct,{user:eg}),l.jsx(ct,{user:gs}),l.jsx(ct,{user:eg}),l.jsx(ct,{user:gs})]}),l.jsxs(iT,{children:[l.jsx(sT,{rows:"2",cols:"20"}),l.jsx(aT,{children:"Send"})]})]})}),l.jsxs(nT,{children:[l.jsx(tT,{children:l.jsx(Jl,{children:"Messages"})}),l.jsx(zt,{user:cT,url:e}),l.jsx(zt,{user:uT,url:t}),l.jsx(zt,{user:gs,url:n})]}),l.jsx(ql,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}function fT({isGuestView:e}){const{state:t}=Zo(),{results:n,searchTerm:r}=t,o=()=>{window.history.go(-1)};return console.log({results:n}),console.log({searchTerm:r}),l.jsxs(It,{children:[e?l.jsx(Zl,{}):l.jsx(hn,{}),l.jsx(Ry,{children:l.jsxs(nP,{children:[l.jsxs(Ty,{children:[l.jsx(oP,{onClick:o,children:l.jsx(Gy,{icon:_1})}),l.jsx(iP,{children:l.jsx(lp,{data:re})})]}),l.jsxs(rP,{children:[n.length>2||n.length==0?l.jsxs(Xm,{children:[n.length,' results found matching "',r,'"']}):l.jsxs(Xm,{children:[n.length,' result found matching "',r,'"']}),l.jsx(Vy,{children:n.map((i,a)=>l.jsx(Na,{information:i},a))})]})]})})]})}const pT=Dk([{path:"/CodeConnect/",element:l.jsx(Bb,{})},{path:"/CodeConnect/home",element:l.jsx(i4,{})},{path:"/CodeConnect/explore",element:l.jsx(Gm,{isGuestView:0})},{path:"/CodeConnect/guest-explore",element:l.jsx(Gm,{isGuestView:1})},{path:"/CodeConnect/direct-messages",element:l.jsx(Y4,{})},{path:"/CodeConnect/dm-kirby",element:l.jsx(DP,{})},{path:"/CodeConnect/dm-boo",element:l.jsx(ZP,{})},{path:"/CodeConnect/dm-sonic",element:l.jsx(dT,{})},{path:"/CodeConnect/new-direct-message",element:l.jsx(T4,{})},{path:"/CodeConnect/profile/:userName",element:l.jsx(r4,{})},{path:"/CodeConnect/guest-home",element:l.jsx(R4,{})},{path:"/CodeConnect/create-account",element:l.jsx(aP,{})},{path:"/CodeConnect/:author/:id",element:l.jsx(Zm,{isGuestView:0})},{path:"/CodeConnect/guest-view/:author/:id",element:l.jsx(Zm,{isGuestView:1})},{path:"/CodeConnect/explore-results",element:l.jsx(fT,{})}]),hT=tc.createRoot(document.getElementById("root"));hT.render(l.jsxs("div",{children:[l.jsx(o4,{}),l.jsx(Yk,{router:pT})]}));
