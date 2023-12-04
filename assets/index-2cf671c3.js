function Jm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function us(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qm={exports:{}},cs={},eg={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),Vy=Symbol.for("react.portal"),Yy=Symbol.for("react.fragment"),Gy=Symbol.for("react.strict_mode"),Ky=Symbol.for("react.profiler"),Qy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),Zy=Symbol.for("react.forward_ref"),Jy=Symbol.for("react.suspense"),qy=Symbol.for("react.memo"),ex=Symbol.for("react.lazy"),yp=Symbol.iterator;function tx(e){return e===null||typeof e!="object"?null:(e=yp&&e[yp]||e["@@iterator"],typeof e=="function"?e:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,rg={};function Yo(e,t,n){this.props=e,this.context=t,this.refs=rg,this.updater=n||tg}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function og(){}og.prototype=Yo.prototype;function jf(e,t,n){this.props=e,this.context=t,this.refs=rg,this.updater=n||tg}var Pf=jf.prototype=new og;Pf.constructor=jf;ng(Pf,Yo.prototype);Pf.isPureReactComponent=!0;var xp=Array.isArray,ig=Object.prototype.hasOwnProperty,Rf={current:null},ag={key:!0,ref:!0,__self:!0,__source:!0};function lg(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ig.call(t,r)&&!ag.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:fa,type:e,key:i,ref:a,props:o,_owner:Rf.current}}function nx(e,t){return{$$typeof:fa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nf(e){return typeof e=="object"&&e!==null&&e.$$typeof===fa}function rx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wp=/\/+/g;function qs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rx(""+e.key):t.toString(36)}function sl(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fa:case Vy:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+qs(a,0):r,xp(o)?(n="",e!=null&&(n=e.replace(wp,"$&/")+"/"),sl(o,t,n,"",function(c){return c})):o!=null&&(Nf(o)&&(o=nx(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(wp,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",xp(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+qs(i,l);a+=sl(i,t,n,s,o)}else if(s=tx(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+qs(i,l++),a+=sl(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ra(e,t,n){if(e==null)return e;var r=[],o=0;return sl(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ox(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},ul={transition:null},ix={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ul,ReactCurrentOwner:Rf};q.Children={map:Ra,forEach:function(e,t,n){Ra(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ra(e,function(){t++}),t},toArray:function(e){return Ra(e,function(t){return t})||[]},only:function(e){if(!Nf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Yo;q.Fragment=Yy;q.Profiler=Ky;q.PureComponent=jf;q.StrictMode=Gy;q.Suspense=Jy;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ng({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Rf.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ig.call(t,s)&&!ag.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:fa,type:e.type,key:o,ref:i,props:r,_owner:a}};q.createContext=function(e){return e={$$typeof:Xy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qy,_context:e},e.Consumer=e};q.createElement=lg;q.createFactory=function(e){var t=lg.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Zy,render:e}};q.isValidElement=Nf;q.lazy=function(e){return{$$typeof:ex,_payload:{_status:-1,_result:e},_init:ox}};q.memo=function(e,t){return{$$typeof:qy,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=ul.transition;ul.transition={};try{e()}finally{ul.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return ft.current.useCallback(e,t)};q.useContext=function(e){return ft.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};q.useEffect=function(e,t){return ft.current.useEffect(e,t)};q.useId=function(){return ft.current.useId()};q.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return ft.current.useMemo(e,t)};q.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};q.useRef=function(e){return ft.current.useRef(e)};q.useState=function(e){return ft.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return ft.current.useTransition()};q.version="18.2.0";eg.exports=q;var x=eg.exports;const De=us(x),ax=Jm({__proto__:null,default:De},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=x,sx=Symbol.for("react.element"),ux=Symbol.for("react.fragment"),cx=Object.prototype.hasOwnProperty,fx=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dx={key:!0,ref:!0,__self:!0,__source:!0};function sg(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)cx.call(t,r)&&!dx.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:sx,type:e,key:i,ref:a,props:o,_owner:fx.current}}cs.Fragment=ux;cs.jsx=sg;cs.jsxs=sg;qm.exports=cs;var u=qm.exports,Xu={},ug={exports:{}},Ct={},cg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var $=T.length;T.push(D);e:for(;0<$;){var Q=$-1>>>1,Y=T[Q];if(0<o(Y,D))T[Q]=D,T[$]=Y,$=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],$=T.pop();if($!==D){T[0]=$;e:for(var Q=0,Y=T.length,ae=Y>>>1;Q<ae;){var ue=2*(Q+1)-1,Ye=T[ue],$e=ue+1,Ge=T[$e];if(0>o(Ye,$))$e<Y&&0>o(Ge,Ye)?(T[Q]=Ge,T[$e]=$,Q=$e):(T[Q]=Ye,T[ue]=$,Q=ue);else if($e<Y&&0>o(Ge,$))T[Q]=Ge,T[$e]=$,Q=$e;else break e}}return D}function o(T,D){var $=T.sortIndex-D.sortIndex;return $!==0?$:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],f=1,d=null,p=3,k=!1,w=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=T)r(c),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(c)}}function g(T){if(S=!1,v(T),!w)if(n(s)!==null)w=!0,Oe(E);else{var D=n(c);D!==null&&he(g,D.startTime-T)}}function E(T,D){w=!1,S&&(S=!1,m(O),O=-1),k=!0;var $=p;try{for(v(D),d=n(s);d!==null&&(!(d.expirationTime>D)||T&&!Z());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,p=d.priorityLevel;var Y=Q(d.expirationTime<=D);D=e.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(s)&&r(s),v(D)}else r(s);d=n(s)}if(d!==null)var ae=!0;else{var ue=n(c);ue!==null&&he(g,ue.startTime-D),ae=!1}return ae}finally{d=null,p=$,k=!1}}var R=!1,C=null,O=-1,A=5,z=-1;function Z(){return!(e.unstable_now()-z<A)}function be(){if(C!==null){var T=e.unstable_now();z=T;var D=!0;try{D=C(!0,T)}finally{D?pe():(R=!1,C=null)}}else R=!1}var pe;if(typeof h=="function")pe=function(){h(be)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ie=at.port2;at.port1.onmessage=be,pe=function(){ie.postMessage(null)}}else pe=function(){P(be,0)};function Oe(T){C=T,R||(R=!0,pe())}function he(T,D){O=P(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,Oe(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var $=p;p=D;try{return T()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var $=p;p=T;try{return D()}finally{p=$}},e.unstable_scheduleCallback=function(T,D,$){var Q=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Q+$:Q):$=Q,T){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=$+Y,T={id:f++,callback:D,priorityLevel:T,startTime:$,expirationTime:Y,sortIndex:-1},$>Q?(T.sortIndex=$,t(c,T),n(s)===null&&T===n(c)&&(S?(m(O),O=-1):S=!0,he(g,$-Q))):(T.sortIndex=Y,t(s,T),w||k||(w=!0,Oe(E))),T},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(T){var D=p;return function(){var $=p;p=D;try{return T.apply(this,arguments)}finally{p=$}}}})(fg);cg.exports=fg;var px=cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=x,bt=px;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,zi={};function Vr(e,t){Oo(e,t),Oo(e+"Capture",t)}function Oo(e,t){for(zi[e]=t,e=0;e<t.length;e++)pg.add(t[e])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=Object.prototype.hasOwnProperty,hx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kp={},Sp={};function mx(e){return Zu.call(Sp,e)?!0:Zu.call(kp,e)?!1:hx.test(e)?Sp[e]=!0:(kp[e]=!0,!1)}function gx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vx(e,t,n,r){if(t===null||typeof t>"u"||gx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function _f(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tf,_f);et[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tf,_f);et[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tf,_f);et[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Of(e,t,n,r){var o=et.hasOwnProperty(t)?et[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vx(t,n,o,r)&&(n=null),r||o===null?mx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tn=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),oo=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),Lf=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),mg=Symbol.for("react.context"),Mf=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),gg=Symbol.for("react.offscreen"),bp=Symbol.iterator;function ri(e){return e===null||typeof e!="object"?null:(e=bp&&e[bp]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,eu;function vi(e){if(eu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);eu=t&&t[1]||""}return`
`+eu+e}var tu=!1;function nu(e,t){if(!e||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vi(e):""}function yx(e){switch(e.tag){case 5:return vi(e.type);case 16:return vi("Lazy");case 13:return vi("Suspense");case 19:return vi("SuspenseList");case 0:case 2:case 15:return e=nu(e.type,!1),e;case 11:return e=nu(e.type.render,!1),e;case 1:return e=nu(e.type,!0),e;default:return""}}function tc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case io:return"Fragment";case oo:return"Portal";case Ju:return"Profiler";case Lf:return"StrictMode";case qu:return"Suspense";case ec:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mg:return(e.displayName||"Context")+".Consumer";case hg:return(e._context.displayName||"Context")+".Provider";case Mf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Af:return t=e.displayName||null,t!==null?t:tc(e.type)||"Memo";case Un:t=e._payload,e=e._init;try{return tc(e(t))}catch{}}return null}function xx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tc(t);case 8:return t===Lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ir(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wx(e){var t=vg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ta(e){e._valueTracker||(e._valueTracker=wx(e))}function yg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nc(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ir(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xg(e,t){t=t.checked,t!=null&&Of(e,"checked",t,!1)}function rc(e,t){xg(e,t);var n=ir(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oc(e,t.type,n):t.hasOwnProperty("defaultValue")&&oc(e,t.type,ir(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ep(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oc(e,t,n){(t!=="number"||jl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yi=Array.isArray;function So(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ir(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ic(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(yi(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ir(n)}}function wg(e,t){var n=ir(t.value),r=ir(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ac(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _a,Sg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_a.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kx=["Webkit","ms","Moz","O"];Object.keys(Ci).forEach(function(e){kx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ci[t]=Ci[e]})});function bg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ci.hasOwnProperty(e)&&Ci[e]?(""+t).trim():t+"px"}function Cg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Sx=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lc(e,t){if(t){if(Sx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function sc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function If(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cc=null,bo=null,Co=null;function Rp(e){if(e=ha(e)){if(typeof cc!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ms(t),cc(e.stateNode,e.type,t))}}function Eg(e){bo?Co?Co.push(e):Co=[e]:bo=e}function jg(){if(bo){var e=bo,t=Co;if(Co=bo=null,Rp(e),t)for(e=0;e<t.length;e++)Rp(t[e])}}function Pg(e,t){return e(t)}function Rg(){}var ru=!1;function Ng(e,t,n){if(ru)return e(t,n);ru=!0;try{return Pg(e,t,n)}finally{ru=!1,(bo!==null||Co!==null)&&(Rg(),jg())}}function Bi(e,t){var n=e.stateNode;if(n===null)return null;var r=ms(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var fc=!1;if(Sn)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){fc=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{fc=!1}function bx(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Ei=!1,Pl=null,Rl=!1,dc=null,Cx={onError:function(e){Ei=!0,Pl=e}};function Ex(e,t,n,r,o,i,a,l,s){Ei=!1,Pl=null,bx.apply(Cx,arguments)}function jx(e,t,n,r,o,i,a,l,s){if(Ex.apply(this,arguments),Ei){if(Ei){var c=Pl;Ei=!1,Pl=null}else throw Error(_(198));Rl||(Rl=!0,dc=c)}}function Yr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Np(e){if(Yr(e)!==e)throw Error(_(188))}function Px(e){var t=e.alternate;if(!t){if(t=Yr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Np(o),e;if(i===r)return Np(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function _g(e){return e=Px(e),e!==null?Og(e):null}function Og(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Og(e);if(t!==null)return t;e=e.sibling}return null}var Lg=bt.unstable_scheduleCallback,Tp=bt.unstable_cancelCallback,Rx=bt.unstable_shouldYield,Nx=bt.unstable_requestPaint,Ie=bt.unstable_now,Tx=bt.unstable_getCurrentPriorityLevel,Df=bt.unstable_ImmediatePriority,Mg=bt.unstable_UserBlockingPriority,Nl=bt.unstable_NormalPriority,_x=bt.unstable_LowPriority,Ag=bt.unstable_IdlePriority,fs=null,ln=null;function Ox(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(fs,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Ax,Lx=Math.log,Mx=Math.LN2;function Ax(e){return e>>>=0,e===0?32:31-(Lx(e)/Mx|0)|0}var Oa=64,La=4194304;function xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=xi(l):(i&=a,i!==0&&(r=xi(i)))}else a=n&~o,a!==0?r=xi(a):i!==0&&(r=xi(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ix(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Gt(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=Ix(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function pc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ig(){var e=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),e}function ou(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function da(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function $x(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function $f(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function Dg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $g,Ff,Fg,zg,Ug,hc=!1,Ma=[],Xn=null,Zn=null,Jn=null,Wi=new Map,Hi=new Map,Hn=[],Fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _p(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(t.pointerId)}}function ii(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ha(t),t!==null&&Ff(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zx(e,t,n,r,o){switch(t){case"focusin":return Xn=ii(Xn,e,t,n,r,o),!0;case"dragenter":return Zn=ii(Zn,e,t,n,r,o),!0;case"mouseover":return Jn=ii(Jn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Wi.set(i,ii(Wi.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Hi.set(i,ii(Hi.get(i)||null,e,t,n,r,o)),!0}return!1}function Bg(e){var t=br(e.target);if(t!==null){var n=Yr(t);if(n!==null){if(t=n.tag,t===13){if(t=Tg(n),t!==null){e.blockedOn=t,Ug(e.priority,function(){Fg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return t=ha(n),t!==null&&Ff(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){cl(e)&&n.delete(t)}function Ux(){hc=!1,Xn!==null&&cl(Xn)&&(Xn=null),Zn!==null&&cl(Zn)&&(Zn=null),Jn!==null&&cl(Jn)&&(Jn=null),Wi.forEach(Op),Hi.forEach(Op)}function ai(e,t){e.blockedOn===t&&(e.blockedOn=null,hc||(hc=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,Ux)))}function Vi(e){function t(o){return ai(o,e)}if(0<Ma.length){ai(Ma[0],e);for(var n=1;n<Ma.length;n++){var r=Ma[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xn!==null&&ai(Xn,e),Zn!==null&&ai(Zn,e),Jn!==null&&ai(Jn,e),Wi.forEach(t),Hi.forEach(t),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Bg(n),n.blockedOn===null&&Hn.shift()}var Eo=Tn.ReactCurrentBatchConfig,_l=!0;function Bx(e,t,n,r){var o=oe,i=Eo.transition;Eo.transition=null;try{oe=1,zf(e,t,n,r)}finally{oe=o,Eo.transition=i}}function Wx(e,t,n,r){var o=oe,i=Eo.transition;Eo.transition=null;try{oe=4,zf(e,t,n,r)}finally{oe=o,Eo.transition=i}}function zf(e,t,n,r){if(_l){var o=mc(e,t,n,r);if(o===null)hu(e,t,r,Ol,n),_p(e,r);else if(zx(o,e,t,n,r))r.stopPropagation();else if(_p(e,r),t&4&&-1<Fx.indexOf(e)){for(;o!==null;){var i=ha(o);if(i!==null&&$g(i),i=mc(e,t,n,r),i===null&&hu(e,t,r,Ol,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else hu(e,t,r,null,n)}}var Ol=null;function mc(e,t,n,r){if(Ol=null,e=If(r),e=br(e),e!==null)if(t=Yr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ol=e,null}function Wg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tx()){case Df:return 1;case Mg:return 4;case Nl:case _x:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var Gn=null,Uf=null,fl=null;function Hg(){if(fl)return fl;var e,t=Uf,n=t.length,r,o="value"in Gn?Gn.value:Gn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return fl=o.slice(e,1<r?1-r:void 0)}function dl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Aa(){return!0}function Lp(){return!1}function Et(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Aa:Lp,this.isPropagationStopped=Lp,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),t}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=Et(Go),pa=Re({},Go,{view:0,detail:0}),Hx=Et(pa),iu,au,li,ds=Re({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(iu=e.screenX-li.screenX,au=e.screenY-li.screenY):au=iu=0,li=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:au}}),Mp=Et(ds),Vx=Re({},ds,{dataTransfer:0}),Yx=Et(Vx),Gx=Re({},pa,{relatedTarget:0}),lu=Et(Gx),Kx=Re({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=Et(Kx),Xx=Re({},Go,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zx=Et(Xx),Jx=Re({},Go,{data:0}),Ap=Et(Jx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ew={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tw[e])?!!t[e]:!1}function Wf(){return nw}var rw=Re({},pa,{key:function(e){if(e.key){var t=qx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ew[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wf,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ow=Et(rw),iw=Re({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=Et(iw),aw=Re({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wf}),lw=Et(aw),sw=Re({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),uw=Et(sw),cw=Re({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fw=Et(cw),dw=[9,13,27,32],Hf=Sn&&"CompositionEvent"in window,ji=null;Sn&&"documentMode"in document&&(ji=document.documentMode);var pw=Sn&&"TextEvent"in window&&!ji,Vg=Sn&&(!Hf||ji&&8<ji&&11>=ji),Dp=String.fromCharCode(32),$p=!1;function Yg(e,t){switch(e){case"keyup":return dw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ao=!1;function hw(e,t){switch(e){case"compositionend":return Gg(t);case"keypress":return t.which!==32?null:($p=!0,Dp);case"textInput":return e=t.data,e===Dp&&$p?null:e;default:return null}}function mw(e,t){if(ao)return e==="compositionend"||!Hf&&Yg(e,t)?(e=Hg(),fl=Uf=Gn=null,ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vg&&t.locale!=="ko"?null:t.data;default:return null}}var gw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gw[e.type]:t==="textarea"}function Kg(e,t,n,r){Eg(r),t=Ll(t,"onChange"),0<t.length&&(n=new Bf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pi=null,Yi=null;function vw(e){iv(e,0)}function ps(e){var t=uo(e);if(yg(t))return e}function yw(e,t){if(e==="change")return t}var Qg=!1;if(Sn){var su;if(Sn){var uu="oninput"in document;if(!uu){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),uu=typeof zp.oninput=="function"}su=uu}else su=!1;Qg=su&&(!document.documentMode||9<document.documentMode)}function Up(){Pi&&(Pi.detachEvent("onpropertychange",Xg),Yi=Pi=null)}function Xg(e){if(e.propertyName==="value"&&ps(Yi)){var t=[];Kg(t,Yi,e,If(e)),Ng(vw,t)}}function xw(e,t,n){e==="focusin"?(Up(),Pi=t,Yi=n,Pi.attachEvent("onpropertychange",Xg)):e==="focusout"&&Up()}function ww(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(Yi)}function kw(e,t){if(e==="click")return ps(t)}function Sw(e,t){if(e==="input"||e==="change")return ps(t)}function bw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:bw;function Gi(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Zu.call(t,o)||!Xt(e[o],t[o]))return!1}return!0}function Bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,t){var n=Bp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function Zg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jg(){for(var e=window,t=jl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jl(e.document)}return t}function Vf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cw(e){var t=Jg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zg(n.ownerDocument.documentElement,n)){if(r!==null&&Vf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Wp(n,i);var a=Wp(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ew=Sn&&"documentMode"in document&&11>=document.documentMode,lo=null,gc=null,Ri=null,vc=!1;function Hp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vc||lo==null||lo!==jl(r)||(r=lo,"selectionStart"in r&&Vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Gi(Ri,r)||(Ri=r,r=Ll(gc,"onSelect"),0<r.length&&(t=new Bf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lo)))}function Ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var so={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},cu={},qg={};Sn&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function hs(e){if(cu[e])return cu[e];if(!so[e])return e;var t=so[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qg)return cu[e]=t[n];return e}var ev=hs("animationend"),tv=hs("animationiteration"),nv=hs("animationstart"),rv=hs("transitionend"),ov=new Map,Vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(e,t){ov.set(e,t),Vr(t,[e])}for(var fu=0;fu<Vp.length;fu++){var du=Vp[fu],jw=du.toLowerCase(),Pw=du[0].toUpperCase()+du.slice(1);fr(jw,"on"+Pw)}fr(ev,"onAnimationEnd");fr(tv,"onAnimationIteration");fr(nv,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(rv,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rw=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Yp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jx(r,t,void 0,e),e.currentTarget=null}function iv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Yp(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Yp(o,l,c),i=s}}}if(Rl)throw e=dc,Rl=!1,dc=null,e}function ve(e,t){var n=t[Sc];n===void 0&&(n=t[Sc]=new Set);var r=e+"__bubble";n.has(r)||(av(t,e,2,!1),n.add(r))}function pu(e,t,n){var r=0;t&&(r|=4),av(n,e,r,t)}var Da="_reactListening"+Math.random().toString(36).slice(2);function Ki(e){if(!e[Da]){e[Da]=!0,pg.forEach(function(n){n!=="selectionchange"&&(Rw.has(n)||pu(n,!1,e),pu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Da]||(t[Da]=!0,pu("selectionchange",!1,t))}}function av(e,t,n,r){switch(Wg(t)){case 1:var o=Bx;break;case 4:o=Wx;break;default:o=zf}n=o.bind(null,t,n,e),o=void 0,!fc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hu(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=br(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Ng(function(){var c=i,f=If(n),d=[];e:{var p=ov.get(e);if(p!==void 0){var k=Bf,w=e;switch(e){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":k=ow;break;case"focusin":w="focus",k=lu;break;case"focusout":w="blur",k=lu;break;case"beforeblur":case"afterblur":k=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=lw;break;case ev:case tv:case nv:k=Qx;break;case rv:k=uw;break;case"scroll":k=Hx;break;case"wheel":k=fw;break;case"copy":case"cut":case"paste":k=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ip}var S=(t&4)!==0,P=!S&&e==="scroll",m=S?p!==null?p+"Capture":null:p;S=[];for(var h=c,v;h!==null;){v=h;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,m!==null&&(g=Bi(h,m),g!=null&&S.push(Qi(h,g,v)))),P)break;h=h.return}0<S.length&&(p=new k(p,w,null,n,f),d.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",p&&n!==uc&&(w=n.relatedTarget||n.fromElement)&&(br(w)||w[bn]))break e;if((k||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=c,w=w?br(w):null,w!==null&&(P=Yr(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=c),k!==w)){if(S=Mp,g="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ip,g="onPointerLeave",m="onPointerEnter",h="pointer"),P=k==null?p:uo(k),v=w==null?p:uo(w),p=new S(g,h+"leave",k,n,f),p.target=P,p.relatedTarget=v,g=null,br(f)===c&&(S=new S(m,h+"enter",w,n,f),S.target=v,S.relatedTarget=P,g=S),P=g,k&&w)t:{for(S=k,m=w,h=0,v=S;v;v=qr(v))h++;for(v=0,g=m;g;g=qr(g))v++;for(;0<h-v;)S=qr(S),h--;for(;0<v-h;)m=qr(m),v--;for(;h--;){if(S===m||m!==null&&S===m.alternate)break t;S=qr(S),m=qr(m)}S=null}else S=null;k!==null&&Gp(d,p,k,S,!1),w!==null&&P!==null&&Gp(d,P,w,S,!0)}}e:{if(p=c?uo(c):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var E=yw;else if(Fp(p))if(Qg)E=Sw;else{E=ww;var R=xw}else(k=p.nodeName)&&k.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=kw);if(E&&(E=E(e,c))){Kg(d,E,n,f);break e}R&&R(e,p,c),e==="focusout"&&(R=p._wrapperState)&&R.controlled&&p.type==="number"&&oc(p,"number",p.value)}switch(R=c?uo(c):window,e){case"focusin":(Fp(R)||R.contentEditable==="true")&&(lo=R,gc=c,Ri=null);break;case"focusout":Ri=gc=lo=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,Hp(d,n,f);break;case"selectionchange":if(Ew)break;case"keydown":case"keyup":Hp(d,n,f)}var C;if(Hf)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ao?Yg(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Vg&&n.locale!=="ko"&&(ao||O!=="onCompositionStart"?O==="onCompositionEnd"&&ao&&(C=Hg()):(Gn=f,Uf="value"in Gn?Gn.value:Gn.textContent,ao=!0)),R=Ll(c,O),0<R.length&&(O=new Ap(O,e,null,n,f),d.push({event:O,listeners:R}),C?O.data=C:(C=Gg(n),C!==null&&(O.data=C)))),(C=pw?hw(e,n):mw(e,n))&&(c=Ll(c,"onBeforeInput"),0<c.length&&(f=new Ap("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=C))}iv(d,t)})}function Qi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Bi(e,n),i!=null&&r.unshift(Qi(e,i,o)),i=Bi(e,t),i!=null&&r.push(Qi(e,i,o))),e=e.return}return r}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gp(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=Bi(n,i),s!=null&&a.unshift(Qi(n,s,l))):o||(s=Bi(n,i),s!=null&&a.push(Qi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Nw=/\r\n?/g,Tw=/\u0000|\uFFFD/g;function Kp(e){return(typeof e=="string"?e:""+e).replace(Nw,`
`).replace(Tw,"")}function $a(e,t,n){if(t=Kp(t),Kp(e)!==t&&n)throw Error(_(425))}function Ml(){}var yc=null,xc=null;function wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,_w=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,Ow=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(e){return Qp.resolve(null).then(e).catch(Lw)}:kc;function Lw(e){setTimeout(function(){throw e})}function mu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Vi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Vi(t)}function qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),rn="__reactFiber$"+Ko,Xi="__reactProps$"+Ko,bn="__reactContainer$"+Ko,Sc="__reactEvents$"+Ko,Mw="__reactListeners$"+Ko,Aw="__reactHandles$"+Ko;function br(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xp(e);e!==null;){if(n=e[rn])return n;e=Xp(e)}return t}e=n,n=e.parentNode}return null}function ha(e){return e=e[rn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function uo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ms(e){return e[Xi]||null}var bc=[],co=-1;function dr(e){return{current:e}}function we(e){0>co||(e.current=bc[co],bc[co]=null,co--)}function de(e,t){co++,bc[co]=e.current,e.current=t}var ar={},it=dr(ar),gt=dr(!1),Ar=ar;function Lo(e,t){var n=e.type.contextTypes;if(!n)return ar;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function vt(e){return e=e.childContextTypes,e!=null}function Al(){we(gt),we(it)}function Zp(e,t,n){if(it.current!==ar)throw Error(_(168));de(it,t),de(gt,n)}function lv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,xx(e)||"Unknown",o));return Re({},n,r)}function Il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ar,Ar=it.current,de(it,e),de(gt,gt.current),!0}function Jp(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=lv(e,t,Ar),r.__reactInternalMemoizedMergedChildContext=e,we(gt),we(it),de(it,e)):we(gt),de(gt,n)}var vn=null,gs=!1,gu=!1;function sv(e){vn===null?vn=[e]:vn.push(e)}function Iw(e){gs=!0,sv(e)}function pr(){if(!gu&&vn!==null){gu=!0;var e=0,t=oe;try{var n=vn;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vn=null,gs=!1}catch(o){throw vn!==null&&(vn=vn.slice(e+1)),Lg(Df,pr),o}finally{oe=t,gu=!1}}return null}var fo=[],po=0,Dl=null,$l=0,Tt=[],_t=0,Ir=null,yn=1,xn="";function xr(e,t){fo[po++]=$l,fo[po++]=Dl,Dl=e,$l=t}function uv(e,t,n){Tt[_t++]=yn,Tt[_t++]=xn,Tt[_t++]=Ir,Ir=e;var r=yn;e=xn;var o=32-Gt(r)-1;r&=~(1<<o),n+=1;var i=32-Gt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,yn=1<<32-Gt(t)+o|n<<o|r,xn=i+e}else yn=1<<i|n<<o|r,xn=e}function Yf(e){e.return!==null&&(xr(e,1),uv(e,1,0))}function Gf(e){for(;e===Dl;)Dl=fo[--po],fo[po]=null,$l=fo[--po],fo[po]=null;for(;e===Ir;)Ir=Tt[--_t],Tt[_t]=null,xn=Tt[--_t],Tt[_t]=null,yn=Tt[--_t],Tt[_t]=null}var St=null,kt=null,Ce=!1,Vt=null;function cv(e,t){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,kt=qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ir!==null?{id:yn,overflow:xn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,kt=null,!0):!1;default:return!1}}function Cc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ec(e){if(Ce){var t=kt;if(t){var n=t;if(!qp(e,t)){if(Cc(e))throw Error(_(418));t=qn(n.nextSibling);var r=St;t&&qp(e,t)?cv(r,n):(e.flags=e.flags&-4097|2,Ce=!1,St=e)}}else{if(Cc(e))throw Error(_(418));e.flags=e.flags&-4097|2,Ce=!1,St=e}}}function eh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function Fa(e){if(e!==St)return!1;if(!Ce)return eh(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wc(e.type,e.memoizedProps)),t&&(t=kt)){if(Cc(e))throw fv(),Error(_(418));for(;t;)cv(e,t),t=qn(t.nextSibling)}if(eh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){kt=qn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=St?qn(e.stateNode.nextSibling):null;return!0}function fv(){for(var e=kt;e;)e=qn(e.nextSibling)}function Mo(){kt=St=null,Ce=!1}function Kf(e){Vt===null?Vt=[e]:Vt.push(e)}var Dw=Tn.ReactCurrentBatchConfig;function Ut(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Fl=dr(null),zl=null,ho=null,Qf=null;function Xf(){Qf=ho=zl=null}function Zf(e){var t=Fl.current;we(Fl),e._currentValue=t}function jc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jo(e,t){zl=e,Qf=ho=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(mt=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(Qf!==e)if(e={context:e,memoizedValue:t,next:null},ho===null){if(zl===null)throw Error(_(308));ho=e,zl.dependencies={lanes:0,firstContext:e}}else ho=ho.next=e;return t}var Cr=null;function Jf(e){Cr===null?Cr=[e]:Cr.push(e)}function dv(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Jf(t)):(n.next=o.next,o.next=n),t.interleaved=n,Cn(e,r)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bn=!1;function qf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function er(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Cn(e,n)}return o=r.interleaved,o===null?(t.next=t,Jf(r)):(t.next=o.next,o.next=t),r.interleaved=t,Cn(e,n)}function pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$f(e,n)}}function th(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ul(e,t,n,r){var o=e.updateQueue;Bn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,f=c=s=null,l=i;do{var p=l.lane,k=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,S=l;switch(p=t,k=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){d=w.call(k,d,p);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,p=typeof w=="function"?w.call(k,d,p):w,p==null)break e;d=Re({},d,p);break e;case 2:Bn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else k={eventTime:k,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=k,s=d):f=f.next=k,a|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(f===null&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);$r|=a,e.lanes=a,e.memoizedState=d}}function nh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var hv=new dg.Component().refs;function Pc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vs={isMounted:function(e){return(e=e._reactInternals)?Yr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ct(),o=nr(e),i=wn(r,o);i.payload=t,n!=null&&(i.callback=n),t=er(e,i,o),t!==null&&(Kt(t,e,o,r),pl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ct(),o=nr(e),i=wn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=er(e,i,o),t!==null&&(Kt(t,e,o,r),pl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),r=nr(e),o=wn(n,r);o.tag=2,t!=null&&(o.callback=t),t=er(e,o,r),t!==null&&(Kt(t,e,r,n),pl(t,e,r))}};function rh(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Gi(n,r)||!Gi(o,i):!0}function mv(e,t,n){var r=!1,o=ar,i=t.contextType;return typeof i=="object"&&i!==null?i=At(i):(o=vt(t)?Ar:it.current,r=t.contextTypes,i=(r=r!=null)?Lo(e,o):ar),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function oh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function Rc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=hv,qf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=At(i):(i=vt(t)?Ar:it.current,o.context=Lo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&vs.enqueueReplaceState(o,o.state,null),Ul(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function si(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===hv&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function za(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ih(e){var t=e._init;return t(e._payload)}function gv(e){function t(m,h){if(e){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function o(m,h){return m=rr(m,h),m.index=0,m.sibling=null,m}function i(m,h,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,h,v,g){return h===null||h.tag!==6?(h=bu(v,m.mode,g),h.return=m,h):(h=o(h,v),h.return=m,h)}function s(m,h,v,g){var E=v.type;return E===io?f(m,h,v.props.children,g,v.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Un&&ih(E)===h.type)?(g=o(h,v.props),g.ref=si(m,h,v),g.return=m,g):(g=xl(v.type,v.key,v.props,null,m.mode,g),g.ref=si(m,h,v),g.return=m,g)}function c(m,h,v,g){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Cu(v,m.mode,g),h.return=m,h):(h=o(h,v.children||[]),h.return=m,h)}function f(m,h,v,g,E){return h===null||h.tag!==7?(h=Or(v,m.mode,g,E),h.return=m,h):(h=o(h,v),h.return=m,h)}function d(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=bu(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Na:return v=xl(h.type,h.key,h.props,null,m.mode,v),v.ref=si(m,null,h),v.return=m,v;case oo:return h=Cu(h,m.mode,v),h.return=m,h;case Un:var g=h._init;return d(m,g(h._payload),v)}if(yi(h)||ri(h))return h=Or(h,m.mode,v,null),h.return=m,h;za(m,h)}return null}function p(m,h,v,g){var E=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:l(m,h,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Na:return v.key===E?s(m,h,v,g):null;case oo:return v.key===E?c(m,h,v,g):null;case Un:return E=v._init,p(m,h,E(v._payload),g)}if(yi(v)||ri(v))return E!==null?null:f(m,h,v,g,null);za(m,v)}return null}function k(m,h,v,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(v)||null,l(h,m,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Na:return m=m.get(g.key===null?v:g.key)||null,s(h,m,g,E);case oo:return m=m.get(g.key===null?v:g.key)||null,c(h,m,g,E);case Un:var R=g._init;return k(m,h,v,R(g._payload),E)}if(yi(g)||ri(g))return m=m.get(v)||null,f(h,m,g,E,null);za(h,g)}return null}function w(m,h,v,g){for(var E=null,R=null,C=h,O=h=0,A=null;C!==null&&O<v.length;O++){C.index>O?(A=C,C=null):A=C.sibling;var z=p(m,C,v[O],g);if(z===null){C===null&&(C=A);break}e&&C&&z.alternate===null&&t(m,C),h=i(z,h,O),R===null?E=z:R.sibling=z,R=z,C=A}if(O===v.length)return n(m,C),Ce&&xr(m,O),E;if(C===null){for(;O<v.length;O++)C=d(m,v[O],g),C!==null&&(h=i(C,h,O),R===null?E=C:R.sibling=C,R=C);return Ce&&xr(m,O),E}for(C=r(m,C);O<v.length;O++)A=k(C,m,O,v[O],g),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?O:A.key),h=i(A,h,O),R===null?E=A:R.sibling=A,R=A);return e&&C.forEach(function(Z){return t(m,Z)}),Ce&&xr(m,O),E}function S(m,h,v,g){var E=ri(v);if(typeof E!="function")throw Error(_(150));if(v=E.call(v),v==null)throw Error(_(151));for(var R=E=null,C=h,O=h=0,A=null,z=v.next();C!==null&&!z.done;O++,z=v.next()){C.index>O?(A=C,C=null):A=C.sibling;var Z=p(m,C,z.value,g);if(Z===null){C===null&&(C=A);break}e&&C&&Z.alternate===null&&t(m,C),h=i(Z,h,O),R===null?E=Z:R.sibling=Z,R=Z,C=A}if(z.done)return n(m,C),Ce&&xr(m,O),E;if(C===null){for(;!z.done;O++,z=v.next())z=d(m,z.value,g),z!==null&&(h=i(z,h,O),R===null?E=z:R.sibling=z,R=z);return Ce&&xr(m,O),E}for(C=r(m,C);!z.done;O++,z=v.next())z=k(C,m,O,z.value,g),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?O:z.key),h=i(z,h,O),R===null?E=z:R.sibling=z,R=z);return e&&C.forEach(function(be){return t(m,be)}),Ce&&xr(m,O),E}function P(m,h,v,g){if(typeof v=="object"&&v!==null&&v.type===io&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Na:e:{for(var E=v.key,R=h;R!==null;){if(R.key===E){if(E=v.type,E===io){if(R.tag===7){n(m,R.sibling),h=o(R,v.props.children),h.return=m,m=h;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Un&&ih(E)===R.type){n(m,R.sibling),h=o(R,v.props),h.ref=si(m,R,v),h.return=m,m=h;break e}n(m,R);break}else t(m,R);R=R.sibling}v.type===io?(h=Or(v.props.children,m.mode,g,v.key),h.return=m,m=h):(g=xl(v.type,v.key,v.props,null,m.mode,g),g.ref=si(m,h,v),g.return=m,m=g)}return a(m);case oo:e:{for(R=v.key;h!==null;){if(h.key===R)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=o(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Cu(v,m.mode,g),h.return=m,m=h}return a(m);case Un:return R=v._init,P(m,h,R(v._payload),g)}if(yi(v))return w(m,h,v,g);if(ri(v))return S(m,h,v,g);za(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=o(h,v),h.return=m,m=h):(n(m,h),h=bu(v,m.mode,g),h.return=m,m=h),a(m)):n(m,h)}return P}var Ao=gv(!0),vv=gv(!1),ma={},sn=dr(ma),Zi=dr(ma),Ji=dr(ma);function Er(e){if(e===ma)throw Error(_(174));return e}function ed(e,t){switch(de(Ji,t),de(Zi,e),de(sn,ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ac(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ac(t,e)}we(sn),de(sn,t)}function Io(){we(sn),we(Zi),we(Ji)}function yv(e){Er(Ji.current);var t=Er(sn.current),n=ac(t,e.type);t!==n&&(de(Zi,e),de(sn,n))}function td(e){Zi.current===e&&(we(sn),we(Zi))}var je=dr(0);function Bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vu=[];function nd(){for(var e=0;e<vu.length;e++)vu[e]._workInProgressVersionPrimary=null;vu.length=0}var hl=Tn.ReactCurrentDispatcher,yu=Tn.ReactCurrentBatchConfig,Dr=0,Pe=null,We=null,Ke=null,Wl=!1,Ni=!1,qi=0,$w=0;function tt(){throw Error(_(321))}function rd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}function od(e,t,n,r,o,i){if(Dr=i,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?Bw:Ww,e=n(r,o),Ni){i=0;do{if(Ni=!1,qi=0,25<=i)throw Error(_(301));i+=1,Ke=We=null,t.updateQueue=null,hl.current=Hw,e=n(r,o)}while(Ni)}if(hl.current=Hl,t=We!==null&&We.next!==null,Dr=0,Ke=We=Pe=null,Wl=!1,t)throw Error(_(300));return e}function id(){var e=qi!==0;return qi=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Pe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function It(){if(We===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Ke===null?Pe.memoizedState:Ke.next;if(t!==null)Ke=t,We=e;else{if(e===null)throw Error(_(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ke===null?Pe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function ea(e,t){return typeof t=="function"?t(e):t}function xu(e){var t=It(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=We,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var f=c.lane;if((Dr&f)===f)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Pe.lanes|=f,$r|=f}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,Xt(r,t.memoizedState)||(mt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Pe.lanes|=i,$r|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wu(e){var t=It(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Xt(i,t.memoizedState)||(mt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xv(){}function wv(e,t){var n=Pe,r=It(),o=t(),i=!Xt(r.memoizedState,o);if(i&&(r.memoizedState=o,mt=!0),r=r.queue,ad(bv.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,ta(9,Sv.bind(null,n,r,o,t),void 0,null),Xe===null)throw Error(_(349));Dr&30||kv(n,t,o)}return o}function kv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sv(e,t,n,r){t.value=n,t.getSnapshot=r,Cv(t)&&Ev(e)}function bv(e,t,n){return n(function(){Cv(t)&&Ev(e)})}function Cv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xt(e,n)}catch{return!0}}function Ev(e){var t=Cn(e,1);t!==null&&Kt(t,e,1,-1)}function ah(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t.queue=e,e=e.dispatch=Uw.bind(null,Pe,e),[t.memoizedState,e]}function ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jv(){return It().memoizedState}function ml(e,t,n,r){var o=tn();Pe.flags|=e,o.memoizedState=ta(1|t,n,void 0,r===void 0?null:r)}function ys(e,t,n,r){var o=It();r=r===void 0?null:r;var i=void 0;if(We!==null){var a=We.memoizedState;if(i=a.destroy,r!==null&&rd(r,a.deps)){o.memoizedState=ta(t,n,i,r);return}}Pe.flags|=e,o.memoizedState=ta(1|t,n,i,r)}function lh(e,t){return ml(8390656,8,e,t)}function ad(e,t){return ys(2048,8,e,t)}function Pv(e,t){return ys(4,2,e,t)}function Rv(e,t){return ys(4,4,e,t)}function Nv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tv(e,t,n){return n=n!=null?n.concat([e]):null,ys(4,4,Nv.bind(null,t,e),n)}function ld(){}function _v(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ov(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lv(e,t,n){return Dr&21?(Xt(n,t)||(n=Ig(),Pe.lanes|=n,$r|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,mt=!0),e.memoizedState=n)}function Fw(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=yu.transition;yu.transition={};try{e(!1),t()}finally{oe=n,yu.transition=r}}function Mv(){return It().memoizedState}function zw(e,t,n){var r=nr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Av(e))Iv(t,n);else if(n=dv(e,t,n,r),n!==null){var o=ct();Kt(n,e,r,o),Dv(n,t,r)}}function Uw(e,t,n){var r=nr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(e))Iv(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Xt(l,a)){var s=t.interleaved;s===null?(o.next=o,Jf(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=dv(e,t,o,r),n!==null&&(o=ct(),Kt(n,e,r,o),Dv(n,t,r))}}function Av(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Iv(e,t){Ni=Wl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$f(e,n)}}var Hl={readContext:At,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Bw={readContext:At,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:lh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ml(4194308,4,Nv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ml(4194308,4,e,t)},useInsertionEffect:function(e,t){return ml(4,2,e,t)},useMemo:function(e,t){var n=tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zw.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:ah,useDebugValue:ld,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=ah(!1),t=e[0];return e=Fw.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,o=tn();if(Ce){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Xe===null)throw Error(_(349));Dr&30||kv(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,lh(bv.bind(null,r,i,e),[e]),r.flags|=2048,ta(9,Sv.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tn(),t=Xe.identifierPrefix;if(Ce){var n=xn,r=yn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$w++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ww={readContext:At,useCallback:_v,useContext:At,useEffect:ad,useImperativeHandle:Tv,useInsertionEffect:Pv,useLayoutEffect:Rv,useMemo:Ov,useReducer:xu,useRef:jv,useState:function(){return xu(ea)},useDebugValue:ld,useDeferredValue:function(e){var t=It();return Lv(t,We.memoizedState,e)},useTransition:function(){var e=xu(ea)[0],t=It().memoizedState;return[e,t]},useMutableSource:xv,useSyncExternalStore:wv,useId:Mv,unstable_isNewReconciler:!1},Hw={readContext:At,useCallback:_v,useContext:At,useEffect:ad,useImperativeHandle:Tv,useInsertionEffect:Pv,useLayoutEffect:Rv,useMemo:Ov,useReducer:wu,useRef:jv,useState:function(){return wu(ea)},useDebugValue:ld,useDeferredValue:function(e){var t=It();return We===null?t.memoizedState=e:Lv(t,We.memoizedState,e)},useTransition:function(){var e=wu(ea)[0],t=It().memoizedState;return[e,t]},useMutableSource:xv,useSyncExternalStore:wv,useId:Mv,unstable_isNewReconciler:!1};function Do(e,t){try{var n="",r=t;do n+=yx(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ku(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vw=typeof WeakMap=="function"?WeakMap:Map;function $v(e,t,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yl||(Yl=!0,Fc=r),Nc(e,t)},n}function Fv(e,t,n){n=wn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Nc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nc(e,t),typeof r!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vw;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=i2.bind(null,e,t,n),t.then(e,e))}function uh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ch(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wn(-1,1),t.tag=2,er(n,t,1))),n.lanes|=1),e)}var Yw=Tn.ReactCurrentOwner,mt=!1;function st(e,t,n,r){t.child=e===null?vv(t,null,n,r):Ao(t,e.child,n,r)}function fh(e,t,n,r,o){n=n.render;var i=t.ref;return jo(t,o),r=od(e,t,n,r,i,o),n=id(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,En(e,t,o)):(Ce&&n&&Yf(t),t.flags|=1,st(e,t,r,o),t.child)}function dh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!md(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,zv(e,t,i,r,o)):(e=xl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(a,r)&&e.ref===t.ref)return En(e,t,o)}return t.flags|=1,e=rr(i,r),e.ref=t.ref,e.return=t,t.child=e}function zv(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Gi(i,r)&&e.ref===t.ref)if(mt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(mt=!0);else return t.lanes=e.lanes,En(e,t,o)}return Tc(e,t,n,r,o)}function Uv(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(go,wt),wt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(go,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(go,wt),wt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,de(go,wt),wt|=r;return st(e,t,o,n),t.child}function Bv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tc(e,t,n,r,o){var i=vt(n)?Ar:it.current;return i=Lo(t,i),jo(t,o),n=od(e,t,n,r,i,o),r=id(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,En(e,t,o)):(Ce&&r&&Yf(t),t.flags|=1,st(e,t,n,o),t.child)}function ph(e,t,n,r,o){if(vt(n)){var i=!0;Il(t)}else i=!1;if(jo(t,o),t.stateNode===null)gl(e,t),mv(t,n,r),Rc(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=At(c):(c=vt(n)?Ar:it.current,c=Lo(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&oh(t,a,r,c),Bn=!1;var p=t.memoizedState;a.state=p,Ul(t,r,a,o),s=t.memoizedState,l!==r||p!==s||gt.current||Bn?(typeof f=="function"&&(Pc(t,n,f,r),s=t.memoizedState),(l=Bn||rh(t,n,l,r,p,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,pv(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ut(t.type,l),a.props=c,d=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=At(s):(s=vt(n)?Ar:it.current,s=Lo(t,s));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||p!==s)&&oh(t,a,r,s),Bn=!1,p=t.memoizedState,a.state=p,Ul(t,r,a,o);var w=t.memoizedState;l!==d||p!==w||gt.current||Bn?(typeof k=="function"&&(Pc(t,n,k,r),w=t.memoizedState),(c=Bn||rh(t,n,c,r,p,w,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _c(e,t,n,r,i,o)}function _c(e,t,n,r,o,i){Bv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Jp(t,n,!1),En(e,t,i);r=t.stateNode,Yw.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ao(t,e.child,null,i),t.child=Ao(t,null,l,i)):st(e,t,l,i),t.memoizedState=r.state,o&&Jp(t,n,!0),t.child}function Wv(e){var t=e.stateNode;t.pendingContext?Zp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zp(e,t.context,!1),ed(e,t.containerInfo)}function hh(e,t,n,r,o){return Mo(),Kf(o),t.flags|=256,st(e,t,n,r),t.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function Lc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hv(e,t,n){var r=t.pendingProps,o=je.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),de(je,o&1),e===null)return Ec(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ks(a,r,0,null),e=Or(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Lc(n),t.memoizedState=Oc,e):sd(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Gw(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=rr(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=rr(l,i):(i=Or(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Lc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Oc,r}return i=e.child,e=i.sibling,r=rr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sd(e,t){return t=ks({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ua(e,t,n,r){return r!==null&&Kf(r),Ao(t,e.child,null,n),e=sd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gw(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ku(Error(_(422))),Ua(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ks({mode:"visible",children:r.children},o,0,null),i=Or(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ao(t,e.child,null,a),t.child.memoizedState=Lc(a),t.memoizedState=Oc,i);if(!(t.mode&1))return Ua(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=ku(i,r,void 0),Ua(e,t,a,r)}if(l=(a&e.childLanes)!==0,mt||l){if(r=Xe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Cn(e,o),Kt(r,e,o,-1))}return hd(),r=ku(Error(_(421))),Ua(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=a2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,kt=qn(o.nextSibling),St=t,Ce=!0,Vt=null,e!==null&&(Tt[_t++]=yn,Tt[_t++]=xn,Tt[_t++]=Ir,yn=e.id,xn=e.overflow,Ir=t),t=sd(t,r.children),t.flags|=4096,t)}function mh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jc(e.return,t,n)}function Su(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Vv(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(st(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mh(e,n,t);else if(e.tag===19)mh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(je,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Bl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Su(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Bl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Su(t,!0,n,null,i);break;case"together":Su(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$r|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=rr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kw(e,t,n){switch(t.tag){case 3:Wv(t),Mo();break;case 5:yv(t);break;case 1:vt(t.type)&&Il(t);break;case 4:ed(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;de(Fl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?Hv(e,t,n):(de(je,je.current&1),e=En(e,t,n),e!==null?e.sibling:null);de(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vv(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),de(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,Uv(e,t,n)}return En(e,t,n)}var Yv,Mc,Gv,Kv;Yv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mc=function(){};Gv=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Er(sn.current);var i=null;switch(n){case"input":o=nc(e,o),r=nc(e,r),i=[];break;case"select":o=Re({},o,{value:void 0}),r=Re({},r,{value:void 0}),i=[];break;case"textarea":o=ic(e,o),r=ic(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ml)}lc(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ve("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Kv=function(e,t,n,r){n!==r&&(t.flags|=4)};function ui(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qw(e,t,n){var r=t.pendingProps;switch(Gf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return vt(t.type)&&Al(),nt(t),null;case 3:return r=t.stateNode,Io(),we(gt),we(it),nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(Bc(Vt),Vt=null))),Mc(e,t),nt(t),null;case 5:td(t);var o=Er(Ji.current);if(n=t.type,e!==null&&t.stateNode!=null)Gv(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return nt(t),null}if(e=Er(sn.current),Fa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[rn]=t,r[Xi]=i,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(o=0;o<wi.length;o++)ve(wi[o],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Cp(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":jp(r,i),ve("invalid",r)}lc(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&$a(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&$a(r.textContent,l,e),o=["children",""+l]):zi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ta(r),Ep(r,i,!0);break;case"textarea":Ta(r),Pp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ml)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[rn]=t,e[Xi]=r,Yv(e,t,!1,!1),t.stateNode=e;e:{switch(a=sc(n,r),n){case"dialog":ve("cancel",e),ve("close",e),o=r;break;case"iframe":case"object":case"embed":ve("load",e),o=r;break;case"video":case"audio":for(o=0;o<wi.length;o++)ve(wi[o],e);o=r;break;case"source":ve("error",e),o=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),o=r;break;case"details":ve("toggle",e),o=r;break;case"input":Cp(e,r),o=nc(e,r),ve("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Re({},r,{value:void 0}),ve("invalid",e);break;case"textarea":jp(e,r),o=ic(e,r),ve("invalid",e);break;default:o=r}lc(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Cg(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sg(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ui(e,s):typeof s=="number"&&Ui(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zi.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ve("scroll",e):s!=null&&Of(e,i,s,a))}switch(n){case"input":Ta(e),Ep(e,r,!1);break;case"textarea":Ta(e),Pp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ir(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?So(e,!!r.multiple,i,!1):r.defaultValue!=null&&So(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)Kv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Er(Ji.current),Er(sn.current),Fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[rn]=t,(i=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:$a(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$a(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=t,t.stateNode=r}return nt(t),null;case 13:if(we(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&kt!==null&&t.mode&1&&!(t.flags&128))fv(),Mo(),t.flags|=98560,i=!1;else if(i=Fa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[rn]=t}else Mo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),i=!1}else Vt!==null&&(Bc(Vt),Vt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?He===0&&(He=3):hd())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Io(),Mc(e,t),e===null&&Ki(t.stateNode.containerInfo),nt(t),null;case 10:return Zf(t.type._context),nt(t),null;case 17:return vt(t.type)&&Al(),nt(t),null;case 19:if(we(je),i=t.memoizedState,i===null)return nt(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)ui(i,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bl(e),a!==null){for(t.flags|=128,ui(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(je,je.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ie()>$o&&(t.flags|=128,r=!0,ui(i,!1),t.lanes=4194304)}else{if(!r)if(e=Bl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ui(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Ce)return nt(t),null}else 2*Ie()-i.renderingStartTime>$o&&n!==1073741824&&(t.flags|=128,r=!0,ui(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ie(),t.sibling=null,n=je.current,de(je,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return pd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?wt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Xw(e,t){switch(Gf(t),t.tag){case 1:return vt(t.type)&&Al(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Io(),we(gt),we(it),nd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return td(t),null;case 13:if(we(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Mo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(je),null;case 4:return Io(),null;case 10:return Zf(t.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var Ba=!1,rt=!1,Zw=typeof WeakSet=="function"?WeakSet:Set,I=null;function mo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Ac(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var gh=!1;function Jw(e,t){if(yc=_l,e=Jg(),Vf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,f=0,d=e,p=null;t:for(;;){for(var k;d!==n||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(k=d.firstChild)!==null;)p=d,d=k;for(;;){if(d===e)break t;if(p===n&&++c===o&&(l=a),p===i&&++f===r&&(s=a),(k=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=k}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(xc={focusedElem:e,selectionRange:n},_l=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,P=w.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ut(t.type,S),P);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(g){Ne(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return w=gh,gh=!1,w}function Ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ac(t,n,i)}o=o.next}while(o!==r)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ic(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qv(e){var t=e.alternate;t!==null&&(e.alternate=null,Qv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rn],delete t[Xi],delete t[Sc],delete t[Mw],delete t[Aw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xv(e){return e.tag===5||e.tag===3||e.tag===4}function vh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ml));else if(r!==4&&(e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}var Je=null,Wt=!1;function Dn(e,t,n){for(n=n.child;n!==null;)Zv(e,t,n),n=n.sibling}function Zv(e,t,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(fs,n)}catch{}switch(n.tag){case 5:rt||mo(n,t);case 6:var r=Je,o=Wt;Je=null,Dn(e,t,n),Je=r,Wt=o,Je!==null&&(Wt?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Wt?(e=Je,n=n.stateNode,e.nodeType===8?mu(e.parentNode,n):e.nodeType===1&&mu(e,n),Vi(e)):mu(Je,n.stateNode));break;case 4:r=Je,o=Wt,Je=n.stateNode.containerInfo,Wt=!0,Dn(e,t,n),Je=r,Wt=o;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ac(n,t,a),o=o.next}while(o!==r)}Dn(e,t,n);break;case 1:if(!rt&&(mo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,t,l)}Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Dn(e,t,n),rt=r):Dn(e,t,n);break;default:Dn(e,t,n)}}function yh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zw),t.forEach(function(r){var o=l2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,Wt=!1;break e;case 3:Je=l.stateNode.containerInfo,Wt=!0;break e;case 4:Je=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(Je===null)throw Error(_(160));Zv(i,a,o),Je=null,Wt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){Ne(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jv(t,e),t=t.sibling}function Jv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),en(e),r&4){try{Ti(3,e,e.return),xs(3,e)}catch(S){Ne(e,e.return,S)}try{Ti(5,e,e.return)}catch(S){Ne(e,e.return,S)}}break;case 1:zt(t,e),en(e),r&512&&n!==null&&mo(n,n.return);break;case 5:if(zt(t,e),en(e),r&512&&n!==null&&mo(n,n.return),e.flags&32){var o=e.stateNode;try{Ui(o,"")}catch(S){Ne(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&xg(o,i),sc(l,a);var c=sc(l,i);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Cg(o,d):f==="dangerouslySetInnerHTML"?Sg(o,d):f==="children"?Ui(o,d):Of(o,f,d,c)}switch(l){case"input":rc(o,i);break;case"textarea":wg(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?So(o,!!i.multiple,k,!1):p!==!!i.multiple&&(i.defaultValue!=null?So(o,!!i.multiple,i.defaultValue,!0):So(o,!!i.multiple,i.multiple?[]:"",!1))}o[Xi]=i}catch(S){Ne(e,e.return,S)}}break;case 6:if(zt(t,e),en(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){Ne(e,e.return,S)}}break;case 3:if(zt(t,e),en(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vi(t.containerInfo)}catch(S){Ne(e,e.return,S)}break;case 4:zt(t,e),en(e);break;case 13:zt(t,e),en(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(fd=Ie())),r&4&&yh(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(c=rt)||f,zt(t,e),rt=c):zt(t,e),en(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(d=I=f;I!==null;){switch(p=I,k=p.child,p.tag){case 0:case 11:case 14:case 15:Ti(4,p,p.return);break;case 1:mo(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){Ne(r,n,S)}}break;case 5:mo(p,p.return);break;case 22:if(p.memoizedState!==null){wh(d);continue}}k!==null?(k.return=p,I=k):wh(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=bg("display",a))}catch(S){Ne(e,e.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){Ne(e,e.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zt(t,e),en(e),r&4&&yh(e);break;case 21:break;default:zt(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xv(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ui(o,""),r.flags&=-33);var i=vh(e);$c(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=vh(e);Dc(e,l,a);break;default:throw Error(_(161))}}catch(s){Ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qw(e,t,n){I=e,qv(e)}function qv(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ba;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||rt;l=Ba;var c=rt;if(Ba=a,(rt=s)&&!c)for(I=o;I!==null;)a=I,s=a.child,a.tag===22&&a.memoizedState!==null?kh(o):s!==null?(s.return=a,I=s):kh(o);for(;i!==null;)I=i,qv(i),i=i.sibling;I=o,Ba=l,rt=c}xh(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):xh(e)}}function xh(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&nh(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nh(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Vi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}rt||t.flags&512&&Ic(t)}catch(p){Ne(t,t.return,p)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function wh(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function kh(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xs(4,t)}catch(s){Ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Ne(t,o,s)}}var i=t.return;try{Ic(t)}catch(s){Ne(t,i,s)}break;case 5:var a=t.return;try{Ic(t)}catch(s){Ne(t,a,s)}}}catch(s){Ne(t,t.return,s)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var e2=Math.ceil,Vl=Tn.ReactCurrentDispatcher,ud=Tn.ReactCurrentOwner,Lt=Tn.ReactCurrentBatchConfig,ne=0,Xe=null,Ue=null,qe=0,wt=0,go=dr(0),He=0,na=null,$r=0,ws=0,cd=0,_i=null,ht=null,fd=0,$o=1/0,mn=null,Yl=!1,Fc=null,tr=null,Wa=!1,Kn=null,Gl=0,Oi=0,zc=null,vl=-1,yl=0;function ct(){return ne&6?Ie():vl!==-1?vl:vl=Ie()}function nr(e){return e.mode&1?ne&2&&qe!==0?qe&-qe:Dw.transition!==null?(yl===0&&(yl=Ig()),yl):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Wg(e.type)),e):1}function Kt(e,t,n,r){if(50<Oi)throw Oi=0,zc=null,Error(_(185));da(e,n,r),(!(ne&2)||e!==Xe)&&(e===Xe&&(!(ne&2)&&(ws|=n),He===4&&Vn(e,qe)),yt(e,r),n===1&&ne===0&&!(t.mode&1)&&($o=Ie()+500,gs&&pr()))}function yt(e,t){var n=e.callbackNode;Dx(e,t);var r=Tl(e,e===Xe?qe:0);if(r===0)n!==null&&Tp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tp(n),t===1)e.tag===0?Iw(Sh.bind(null,e)):sv(Sh.bind(null,e)),Ow(function(){!(ne&6)&&pr()}),n=null;else{switch(Dg(r)){case 1:n=Df;break;case 4:n=Mg;break;case 16:n=Nl;break;case 536870912:n=Ag;break;default:n=Nl}n=l0(n,e0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function e0(e,t){if(vl=-1,yl=0,ne&6)throw Error(_(327));var n=e.callbackNode;if(Po()&&e.callbackNode!==n)return null;var r=Tl(e,e===Xe?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Kl(e,r);else{t=r;var o=ne;ne|=2;var i=n0();(Xe!==e||qe!==t)&&(mn=null,$o=Ie()+500,_r(e,t));do try{r2();break}catch(l){t0(e,l)}while(1);Xf(),Vl.current=i,ne=o,Ue!==null?t=0:(Xe=null,qe=0,t=He)}if(t!==0){if(t===2&&(o=pc(e),o!==0&&(r=o,t=Uc(e,o))),t===1)throw n=na,_r(e,0),Vn(e,r),yt(e,Ie()),n;if(t===6)Vn(e,r);else{if(o=e.current.alternate,!(r&30)&&!t2(o)&&(t=Kl(e,r),t===2&&(i=pc(e),i!==0&&(r=i,t=Uc(e,i))),t===1))throw n=na,_r(e,0),Vn(e,r),yt(e,Ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:wr(e,ht,mn);break;case 3:if(Vn(e,r),(r&130023424)===r&&(t=fd+500-Ie(),10<t)){if(Tl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ct(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=kc(wr.bind(null,e,ht,mn),t);break}wr(e,ht,mn);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Gt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e2(r/1960))-r,10<r){e.timeoutHandle=kc(wr.bind(null,e,ht,mn),r);break}wr(e,ht,mn);break;case 5:wr(e,ht,mn);break;default:throw Error(_(329))}}}return yt(e,Ie()),e.callbackNode===n?e0.bind(null,e):null}function Uc(e,t){var n=_i;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=Kl(e,t),e!==2&&(t=ht,ht=n,t!==null&&Bc(t)),e}function Bc(e){ht===null?ht=e:ht.push.apply(ht,e)}function t2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Xt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~cd,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function Sh(e){if(ne&6)throw Error(_(327));Po();var t=Tl(e,0);if(!(t&1))return yt(e,Ie()),null;var n=Kl(e,t);if(e.tag!==0&&n===2){var r=pc(e);r!==0&&(t=r,n=Uc(e,r))}if(n===1)throw n=na,_r(e,0),Vn(e,t),yt(e,Ie()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wr(e,ht,mn),yt(e,Ie()),null}function dd(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&($o=Ie()+500,gs&&pr())}}function Fr(e){Kn!==null&&Kn.tag===0&&!(ne&6)&&Po();var t=ne;ne|=1;var n=Lt.transition,r=oe;try{if(Lt.transition=null,oe=1,e)return e()}finally{oe=r,Lt.transition=n,ne=t,!(ne&6)&&pr()}}function pd(){wt=go.current,we(go)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_w(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Gf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Al();break;case 3:Io(),we(gt),we(it),nd();break;case 5:td(r);break;case 4:Io();break;case 13:we(je);break;case 19:we(je);break;case 10:Zf(r.type._context);break;case 22:case 23:pd()}n=n.return}if(Xe=e,Ue=e=rr(e.current,null),qe=wt=t,He=0,na=null,cd=ws=$r=0,ht=_i=null,Cr!==null){for(t=0;t<Cr.length;t++)if(n=Cr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Cr=null}return e}function t0(e,t){do{var n=Ue;try{if(Xf(),hl.current=Hl,Wl){for(var r=Pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Wl=!1}if(Dr=0,Ke=We=Pe=null,Ni=!1,qi=0,ud.current=null,n===null||n.return===null){He=1,na=t,Ue=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=qe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=uh(a);if(k!==null){k.flags&=-257,ch(k,a,l,i,t),k.mode&1&&sh(i,c,t),t=k,s=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if(!(t&1)){sh(i,c,t),hd();break e}s=Error(_(426))}}else if(Ce&&l.mode&1){var P=uh(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ch(P,a,l,i,t),Kf(Do(s,l));break e}}i=s=Do(s,l),He!==4&&(He=2),_i===null?_i=[i]:_i.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=$v(i,s,t);th(i,m);break e;case 1:l=s;var h=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(tr===null||!tr.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Fv(i,l,t);th(i,g);break e}}i=i.return}while(i!==null)}o0(n)}catch(E){t=E,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(1)}function n0(){var e=Vl.current;return Vl.current=Hl,e===null?Hl:e}function hd(){(He===0||He===3||He===2)&&(He=4),Xe===null||!($r&268435455)&&!(ws&268435455)||Vn(Xe,qe)}function Kl(e,t){var n=ne;ne|=2;var r=n0();(Xe!==e||qe!==t)&&(mn=null,_r(e,t));do try{n2();break}catch(o){t0(e,o)}while(1);if(Xf(),ne=n,Vl.current=r,Ue!==null)throw Error(_(261));return Xe=null,qe=0,He}function n2(){for(;Ue!==null;)r0(Ue)}function r2(){for(;Ue!==null&&!Rx();)r0(Ue)}function r0(e){var t=a0(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?o0(e):Ue=t,ud.current=null}function o0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xw(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Ue=null;return}}else if(n=Qw(n,t,wt),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);He===0&&(He=5)}function wr(e,t,n){var r=oe,o=Lt.transition;try{Lt.transition=null,oe=1,o2(e,t,n,r)}finally{Lt.transition=o,oe=r}return null}function o2(e,t,n,r){do Po();while(Kn!==null);if(ne&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($x(e,i),e===Xe&&(Ue=Xe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,l0(Nl,function(){return Po(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Lt.transition,Lt.transition=null;var a=oe;oe=1;var l=ne;ne|=4,ud.current=null,Jw(e,n),Jv(n,e),Cw(xc),_l=!!yc,xc=yc=null,e.current=n,qw(n),Nx(),ne=l,oe=a,Lt.transition=i}else e.current=n;if(Wa&&(Wa=!1,Kn=e,Gl=o),i=e.pendingLanes,i===0&&(tr=null),Ox(n.stateNode),yt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Yl)throw Yl=!1,e=Fc,Fc=null,e;return Gl&1&&e.tag!==0&&Po(),i=e.pendingLanes,i&1?e===zc?Oi++:(Oi=0,zc=e):Oi=0,pr(),null}function Po(){if(Kn!==null){var e=Dg(Gl),t=Lt.transition,n=oe;try{if(Lt.transition=null,oe=16>e?16:e,Kn===null)var r=!1;else{if(e=Kn,Kn=null,Gl=0,ne&6)throw Error(_(331));var o=ne;for(ne|=4,I=e.current;I!==null;){var i=I,a=i.child;if(I.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(I=c;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:Ti(8,f,i)}var d=f.child;if(d!==null)d.return=f,I=d;else for(;I!==null;){f=I;var p=f.sibling,k=f.return;if(Qv(f),f===c){I=null;break}if(p!==null){p.return=k,I=p;break}I=k}}}var w=i.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}I=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ti(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,I=m;break e}I=i.return}}var h=e.current;for(I=h;I!==null;){a=I;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,I=v;else e:for(a=h;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xs(9,l)}}catch(E){Ne(l,l.return,E)}if(l===a){I=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,I=g;break e}I=l.return}}if(ne=o,pr(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(fs,e)}catch{}r=!0}return r}finally{oe=n,Lt.transition=t}}return!1}function bh(e,t,n){t=Do(n,t),t=$v(e,t,1),e=er(e,t,1),t=ct(),e!==null&&(da(e,1,t),yt(e,t))}function Ne(e,t,n){if(e.tag===3)bh(e,e,n);else for(;t!==null;){if(t.tag===3){bh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){e=Do(n,e),e=Fv(t,e,1),t=er(t,e,1),e=ct(),t!==null&&(da(t,1,e),yt(t,e));break}}t=t.return}}function i2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(qe&n)===n&&(He===4||He===3&&(qe&130023424)===qe&&500>Ie()-fd?_r(e,0):cd|=n),yt(e,t)}function i0(e,t){t===0&&(e.mode&1?(t=La,La<<=1,!(La&130023424)&&(La=4194304)):t=1);var n=ct();e=Cn(e,t),e!==null&&(da(e,t,n),yt(e,n))}function a2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),i0(e,n)}function l2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),i0(e,n)}var a0;a0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)mt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return mt=!1,Kw(e,t,n);mt=!!(e.flags&131072)}else mt=!1,Ce&&t.flags&1048576&&uv(t,$l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gl(e,t),e=t.pendingProps;var o=Lo(t,it.current);jo(t,n),o=od(null,t,r,e,o,n);var i=id();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(r)?(i=!0,Il(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,qf(t),o.updater=vs,t.stateNode=o,o._reactInternals=t,Rc(t,r,e,n),t=_c(null,t,r,!0,i,n)):(t.tag=0,Ce&&i&&Yf(t),st(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=u2(r),e=Ut(r,e),o){case 0:t=Tc(null,t,r,e,n);break e;case 1:t=ph(null,t,r,e,n);break e;case 11:t=fh(null,t,r,e,n);break e;case 14:t=dh(null,t,r,Ut(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ut(r,o),Tc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ut(r,o),ph(e,t,r,o,n);case 3:e:{if(Wv(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,pv(e,t),Ul(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Do(Error(_(423)),t),t=hh(e,t,r,n,o);break e}else if(r!==o){o=Do(Error(_(424)),t),t=hh(e,t,r,n,o);break e}else for(kt=qn(t.stateNode.containerInfo.firstChild),St=t,Ce=!0,Vt=null,n=vv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),r===o){t=En(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 5:return yv(t),e===null&&Ec(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,wc(r,o)?a=null:i!==null&&wc(r,i)&&(t.flags|=32),Bv(e,t),st(e,t,a,n),t.child;case 6:return e===null&&Ec(t),null;case 13:return Hv(e,t,n);case 4:return ed(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ao(t,null,r,n):st(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ut(r,o),fh(e,t,r,o,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,de(Fl,r._currentValue),r._currentValue=a,i!==null)if(Xt(i.value,a)){if(i.children===o.children&&!gt.current){t=En(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=wn(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),jc(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),jc(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}st(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,jo(t,n),o=At(o),r=r(o),t.flags|=1,st(e,t,r,n),t.child;case 14:return r=t.type,o=Ut(r,t.pendingProps),o=Ut(r.type,o),dh(e,t,r,o,n);case 15:return zv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ut(r,o),gl(e,t),t.tag=1,vt(r)?(e=!0,Il(t)):e=!1,jo(t,n),mv(t,r,o),Rc(t,r,o,n),_c(null,t,r,!0,e,n);case 19:return Vv(e,t,n);case 22:return Uv(e,t,n)}throw Error(_(156,t.tag))};function l0(e,t){return Lg(e,t)}function s2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,r){return new s2(e,t,n,r)}function md(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u2(e){if(typeof e=="function")return md(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mf)return 11;if(e===Af)return 14}return 2}function rr(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xl(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")md(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case io:return Or(n.children,o,i,t);case Lf:a=8,o|=8;break;case Ju:return e=Ot(12,n,t,o|2),e.elementType=Ju,e.lanes=i,e;case qu:return e=Ot(13,n,t,o),e.elementType=qu,e.lanes=i,e;case ec:return e=Ot(19,n,t,o),e.elementType=ec,e.lanes=i,e;case gg:return ks(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hg:a=10;break e;case mg:a=9;break e;case Mf:a=11;break e;case Af:a=14;break e;case Un:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ot(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Or(e,t,n,r){return e=Ot(7,e,r,t),e.lanes=n,e}function ks(e,t,n,r){return e=Ot(22,e,r,t),e.elementType=gg,e.lanes=n,e.stateNode={isHidden:!1},e}function bu(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Cu(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function c2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ou(0),this.expirationTimes=ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function gd(e,t,n,r,o,i,a,l,s){return e=new c2(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(i),e}function f2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function s0(e){if(!e)return ar;e=e._reactInternals;e:{if(Yr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(vt(n))return lv(e,n,t)}return t}function u0(e,t,n,r,o,i,a,l,s){return e=gd(n,r,!0,e,o,i,a,l,s),e.context=s0(null),n=e.current,r=ct(),o=nr(n),i=wn(r,o),i.callback=t??null,er(n,i,o),e.current.lanes=o,da(e,o,r),yt(e,r),e}function Ss(e,t,n,r){var o=t.current,i=ct(),a=nr(o);return n=s0(n),t.context===null?t.context=n:t.pendingContext=n,t=wn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=er(o,t,a),e!==null&&(Kt(e,o,a,i),pl(e,o,a)),a}function Ql(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vd(e,t){Ch(e,t),(e=e.alternate)&&Ch(e,t)}function d2(){return null}var c0=typeof reportError=="function"?reportError:function(e){console.error(e)};function yd(e){this._internalRoot=e}bs.prototype.render=yd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ss(e,t,null,null)};bs.prototype.unmount=yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fr(function(){Ss(null,e,null,null)}),t[bn]=null}};function bs(e){this._internalRoot=e}bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=zg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&Bg(e)}};function xd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eh(){}function p2(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ql(a);i.call(c)}}var a=u0(t,r,e,0,null,!1,!1,"",Eh);return e._reactRootContainer=a,e[bn]=a.current,Ki(e.nodeType===8?e.parentNode:e),Fr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Ql(s);l.call(c)}}var s=gd(e,0,!1,null,null,!1,!1,"",Eh);return e._reactRootContainer=s,e[bn]=s.current,Ki(e.nodeType===8?e.parentNode:e),Fr(function(){Ss(t,s,n,r)}),s}function Es(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Ql(a);l.call(s)}}Ss(t,a,e,o)}else a=p2(n,t,e,o,r);return Ql(a)}$g=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xi(t.pendingLanes);n!==0&&($f(t,n|1),yt(t,Ie()),!(ne&6)&&($o=Ie()+500,pr()))}break;case 13:Fr(function(){var r=Cn(e,1);if(r!==null){var o=ct();Kt(r,e,1,o)}}),vd(e,1)}};Ff=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=ct();Kt(t,e,134217728,n)}vd(e,134217728)}};Fg=function(e){if(e.tag===13){var t=nr(e),n=Cn(e,t);if(n!==null){var r=ct();Kt(n,e,t,r)}vd(e,t)}};zg=function(){return oe};Ug=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};cc=function(e,t,n){switch(t){case"input":if(rc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ms(r);if(!o)throw Error(_(90));yg(r),rc(r,o)}}}break;case"textarea":wg(e,n);break;case"select":t=n.value,t!=null&&So(e,!!n.multiple,t,!1)}};Pg=dd;Rg=Fr;var h2={usingClientEntryPoint:!1,Events:[ha,uo,ms,Eg,jg,dd]},ci={findFiberByHostInstance:br,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},m2={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_g(e),e===null?null:e.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||d2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{fs=Ha.inject(m2),ln=Ha}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h2;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xd(t))throw Error(_(200));return f2(e,t,null,n)};Ct.createRoot=function(e,t){if(!xd(e))throw Error(_(299));var n=!1,r="",o=c0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=gd(e,1,!1,null,null,n,!1,r,o),e[bn]=t.current,Ki(e.nodeType===8?e.parentNode:e),new yd(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=_g(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return Fr(e)};Ct.hydrate=function(e,t,n){if(!Cs(t))throw Error(_(200));return Es(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!xd(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=c0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=u0(t,null,e,1,n??null,o,!1,i,a),e[bn]=t.current,Ki(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new bs(t)};Ct.render=function(e,t,n){if(!Cs(t))throw Error(_(200));return Es(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!Cs(e))throw Error(_(40));return e._reactRootContainer?(Fr(function(){Es(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};Ct.unstable_batchedUpdates=dd;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cs(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Es(e,t,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(e){console.error(e)}}f0(),ug.exports=Ct;var wd=ug.exports;const jr=us(wd),g2=Jm({__proto__:null,default:jr},[wd]);var jh=wd;Xu.createRoot=jh.createRoot,Xu.hydrateRoot=jh.hydrateRoot;/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}var Me;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Me||(Me={}));const Ph="popstate";function v2(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return ra("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ur(o)}return x2(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function y2(){return Math.random().toString(36).substr(2,8)}function Rh(e,t){return{usr:e.state,key:e.key,idx:t}}function ra(e,t,n,r){return n===void 0&&(n=null),Te({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_n(t):t,{state:n,key:t&&t.key||r||y2()})}function Ur(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _n(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function x2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Me.Pop,s=null,c=f();c==null&&(c=0,a.replaceState(Te({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function d(){l=Me.Pop;let P=f(),m=P==null?null:P-c;c=P,s&&s({action:l,location:S.location,delta:m})}function p(P,m){l=Me.Push;let h=ra(S.location,P,m);n&&n(h,P),c=f()+1;let v=Rh(h,c),g=S.createHref(h);try{a.pushState(v,"",g)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(g)}i&&s&&s({action:l,location:S.location,delta:1})}function k(P,m){l=Me.Replace;let h=ra(S.location,P,m);n&&n(h,P),c=f();let v=Rh(h,c),g=S.createHref(h);a.replaceState(v,"",g),i&&s&&s({action:l,location:S.location,delta:0})}function w(P){let m=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof P=="string"?P:Ur(P);return K(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let S={get action(){return l},get location(){return e(o,a)},listen(P){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Ph,d),s=P,()=>{o.removeEventListener(Ph,d),s=null}},createHref(P){return t(o,P)},createURL:w,encodeLocation(P){let m=w(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:k,go(P){return a.go(P)}};return S}var Ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ae||(Ae={}));const w2=new Set(["lazy","caseSensitive","path","id","index","children"]);function k2(e){return e.index===!0}function Wc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,i],l=typeof o.id=="string"?o.id:a.join("-");if(K(o.index!==!0||!o.children,"Cannot specify children on an index route"),K(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),k2(o)){let s=Te({},o,t(o),{id:l});return r[l]=s,s}else{let s=Te({},o,t(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=Wc(o.children,t,a,r)),s}})}function vo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?_n(t):t,o=lr(r.pathname||"/",n);if(o==null)return null;let i=d0(e);b2(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=O2(i[l],M2(o));return a}function S2(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function d0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(K(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=kn([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),d0(i.children,t,f,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:T2(c,i.index),routesMeta:f})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of p0(i.path))o(i,a,s)}),t}function p0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=p0(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function b2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const C2=/^:\w+$/,E2=3,j2=2,P2=1,R2=10,N2=-2,Nh=e=>e==="*";function T2(e,t){let n=e.split("/"),r=n.length;return n.some(Nh)&&(r+=N2),t&&(r+=j2),n.filter(o=>!Nh(o)).reduce((o,i)=>o+(C2.test(i)?E2:i===""?P2:R2),r)}function _2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function O2(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",f=Hc({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!f)return null;Object.assign(r,f.params);let d=l.route;i.push({params:r,pathname:kn([o,f.pathname]),pathnameBase:$2(kn([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=kn([o,f.pathnameBase]))}return i}function Hc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=L2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:p,isOptional:k}=f;if(p==="*"){let S=l[d]||"";a=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const w=l[d];return k&&!w?c[p]=void 0:c[p]=A2(w||"",p),c},{}),pathname:i,pathnameBase:a,pattern:e}}function L2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function M2(e){try{return decodeURI(e)}catch(t){return zr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function A2(e,t){try{return decodeURIComponent(e)}catch(n){return zr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function lr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function I2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?_n(e):e;return{pathname:n?n.startsWith("/")?n:D2(n,t):t,search:F2(r),hash:z2(o)}}function D2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Eu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kd(e){return h0(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function Sd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=_n(e):(o=Te({},e),K(!o.pathname||!o.pathname.includes("?"),Eu("?","pathname","search",o)),K(!o.pathname||!o.pathname.includes("#"),Eu("#","pathname","hash",o)),K(!o.search||!o.search.includes("#"),Eu("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else if(r){let d=t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d.pop();o.pathname=p.join("/")}l="/"+d.join("/")}else{let d=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}l=d>=0?t[d]:"/"}let s=I2(o,l),c=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||f)&&(s.pathname+="/"),s}const kn=e=>e.join("/").replace(/\/\/+/g,"/"),$2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,z2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class bd{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function m0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const g0=["post","put","patch","delete"],U2=new Set(g0),B2=["get",...g0],W2=new Set(B2),H2=new Set([301,302,303,307,308]),V2=new Set([307,308]),ju={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Y2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},fi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},v0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G2=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),y0="remix-router-transitions";function K2(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;K(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let b=e.detectErrorBoundary;o=j=>({hasErrorBoundary:b(j)})}else o=G2;let i={},a=Wc(e.routes,o,void 0,i),l,s=e.basename||"/",c=Te({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),f=null,d=new Set,p=null,k=null,w=null,S=e.hydrationData!=null,P=vo(a,e.history.location,s),m=null;if(P==null){let b=Nt(404,{pathname:e.history.location.pathname}),{matches:j,route:N}=Dh(a);P=j,m={[N.id]:b}}let h=!P.some(b=>b.route.lazy)&&(!P.some(b=>b.route.loader)||e.hydrationData!=null),v,g={historyAction:e.history.action,location:e.history.location,matches:P,initialized:h,navigation:ju,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map,blockers:new Map},E=Me.Pop,R=!1,C,O=!1,A=new Map,z=null,Z=!1,be=!1,pe=[],at=[],ie=new Map,Oe=0,he=-1,T=new Map,D=new Set,$=new Map,Q=new Map,Y=new Set,ae=new Map,ue=new Map,Ye=!1;function $e(){if(f=e.history.listen(b=>{let{action:j,location:N,delta:L}=b;if(Ye){Ye=!1;return}zr(ue.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let U=hp({currentLocation:g.location,nextLocation:N,historyAction:j});if(U&&L!=null){Ye=!0,e.history.go(L*-1),ja(U,{state:"blocked",location:N,proceed(){ja(U,{state:"proceeding",proceed:void 0,reset:void 0,location:N}),e.history.go(L)},reset(){let X=new Map(g.blockers);X.set(U,fi),me({blockers:X})}});return}return xt(j,N)}),n){ik(t,A);let b=()=>ak(t,A);t.addEventListener("pagehide",b),z=()=>t.removeEventListener("pagehide",b)}return g.initialized||xt(Me.Pop,g.location),v}function Ge(){f&&f(),z&&z(),d.clear(),C&&C.abort(),g.fetchers.forEach((b,j)=>ee(j)),g.blockers.forEach((b,j)=>pp(j))}function pn(b){return d.add(b),()=>d.delete(b)}function me(b,j){j===void 0&&(j={}),g=Te({},g,b);let N=[],L=[];c.v7_fetcherPersist&&g.fetchers.forEach((U,X)=>{U.state==="idle"&&(Y.has(X)?L.push(X):N.push(X))}),[...d].forEach(U=>U(g,{deletedFetchers:L,unstable_viewTransitionOpts:j.viewTransitionOpts,unstable_flushSync:j.flushSync===!0})),c.v7_fetcherPersist&&(N.forEach(U=>g.fetchers.delete(U)),L.forEach(U=>ee(U)))}function Le(b,j,N){var L,U;let{flushSync:X}=N===void 0?{}:N,V=g.actionData!=null&&g.navigation.formMethod!=null&&Ht(g.navigation.formMethod)&&g.navigation.state==="loading"&&((L=b.state)==null?void 0:L._isRedirect)!==!0,H;j.actionData?Object.keys(j.actionData).length>0?H=j.actionData:H=null:V?H=g.actionData:H=null;let B=j.loaderData?Ih(g.loaderData,j.loaderData,j.matches||[],j.errors):g.loaderData,te=g.blockers;te.size>0&&(te=new Map(te),te.forEach((ce,Ee)=>te.set(Ee,fi)));let Ze=R===!0||g.navigation.formMethod!=null&&Ht(g.navigation.formMethod)&&((U=b.state)==null?void 0:U._isRedirect)!==!0;l&&(a=l,l=void 0),Z||E===Me.Pop||(E===Me.Push?e.history.push(b,b.state):E===Me.Replace&&e.history.replace(b,b.state));let J;if(E===Me.Pop){let ce=A.get(g.location.pathname);ce&&ce.has(b.pathname)?J={currentLocation:g.location,nextLocation:b}:A.has(b.pathname)&&(J={currentLocation:b,nextLocation:g.location})}else if(O){let ce=A.get(g.location.pathname);ce?ce.add(b.pathname):(ce=new Set([b.pathname]),A.set(g.location.pathname,ce)),J={currentLocation:g.location,nextLocation:b}}me(Te({},j,{actionData:H,loaderData:B,historyAction:E,location:b,initialized:!0,navigation:ju,revalidation:"idle",restoreScrollPosition:gp(b,j.matches||g.matches),preventScrollReset:Ze,blockers:te}),{viewTransitionOpts:J,flushSync:X===!0}),E=Me.Pop,R=!1,O=!1,Z=!1,be=!1,pe=[],at=[]}async function Mn(b,j){if(typeof b=="number"){e.history.go(b);return}let N=Vc(g.location,g.matches,s,c.v7_prependBasename,b,j==null?void 0:j.fromRouteId,j==null?void 0:j.relative),{path:L,submission:U,error:X}=Th(c.v7_normalizeFormMethod,!1,N,j),V=g.location,H=ra(g.location,L,j&&j.state);H=Te({},H,e.history.encodeLocation(H));let B=j&&j.replace!=null?j.replace:void 0,te=Me.Push;B===!0?te=Me.Replace:B===!1||U!=null&&Ht(U.formMethod)&&U.formAction===g.location.pathname+g.location.search&&(te=Me.Replace);let Ze=j&&"preventScrollReset"in j?j.preventScrollReset===!0:void 0,J=(j&&j.unstable_flushSync)===!0,ce=hp({currentLocation:V,nextLocation:H,historyAction:te});if(ce){ja(ce,{state:"blocked",location:H,proceed(){ja(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),Mn(b,j)},reset(){let Ee=new Map(g.blockers);Ee.set(ce,fi),me({blockers:Ee})}});return}return await xt(te,H,{submission:U,pendingError:X,preventScrollReset:Ze,replace:j&&j.replace,enableViewTransition:j&&j.unstable_viewTransition,flushSync:J})}function Qr(){if(ti(),me({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){xt(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}xt(E||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function xt(b,j,N){C&&C.abort(),C=null,E=b,Z=(N&&N.startUninterruptedRevalidation)===!0,By(g.location,g.matches),R=(N&&N.preventScrollReset)===!0,O=(N&&N.enableViewTransition)===!0;let L=l||a,U=N&&N.overrideNavigation,X=vo(L,j,s),V=(N&&N.flushSync)===!0;if(!X){let Ee=Nt(404,{pathname:j.pathname}),{matches:lt,route:qt}=Dh(L);Ks(),Le(j,{matches:lt,loaderData:{},errors:{[qt.id]:Ee}},{flushSync:V});return}if(g.initialized&&!be&&q2(g.location,j)&&!(N&&N.submission&&Ht(N.submission.formMethod))){Le(j,{matches:X},{flushSync:V});return}C=new AbortController;let H=pi(e.history,j,C.signal,N&&N.submission),B,te;if(N&&N.pendingError)te={[Li(X).route.id]:N.pendingError};else if(N&&N.submission&&Ht(N.submission.formMethod)){let Ee=await hn(H,j,N.submission,X,{replace:N.replace,flushSync:V});if(Ee.shortCircuited)return;B=Ee.pendingActionData,te=Ee.pendingActionError,U=Pu(j,N.submission),V=!1,H=new Request(H.url,{signal:H.signal})}let{shortCircuited:Ze,loaderData:J,errors:ce}=await ge(H,j,X,U,N&&N.submission,N&&N.fetcherSubmission,N&&N.replace,V,B,te);Ze||(C=null,Le(j,Te({matches:X},B?{actionData:B}:{},{loaderData:J,errors:ce})))}async function hn(b,j,N,L,U){U===void 0&&(U={}),ti();let X=rk(j,N);me({navigation:X},{flushSync:U.flushSync===!0});let V,H=Gc(L,j);if(!H.route.action&&!H.route.lazy)V={type:Ae.error,error:Nt(405,{method:b.method,pathname:j.pathname,routeId:H.route.id})};else if(V=await di("action",b,H,L,i,o,s),b.signal.aborted)return{shortCircuited:!0};if(Ro(V)){let B;return U&&U.replace!=null?B=U.replace:B=V.location===g.location.pathname+g.location.search,await vr(g,V,{submission:N,replace:B}),{shortCircuited:!0}}if(Mi(V)){let B=Li(L,H.route.id);return(U&&U.replace)!==!0&&(E=Me.Push),{pendingActionData:{},pendingActionError:{[B.route.id]:V.error}}}if(Pr(V))throw Nt(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:V.data}}}async function ge(b,j,N,L,U,X,V,H,B,te){let Ze=L||Pu(j,U),J=U||X||zh(Ze),ce=l||a,[Ee,lt]=_h(e.history,g,N,J,j,be,pe,at,Y,$,D,ce,s,B,te);if(Ks(fe=>!(N&&N.some(Rt=>Rt.route.id===fe))||Ee&&Ee.some(Rt=>Rt.route.id===fe)),he=++Oe,Ee.length===0&&lt.length===0){let fe=fp();return Le(j,Te({matches:N,loaderData:{},errors:te||null},B?{actionData:B}:{},fe?{fetchers:new Map(g.fetchers)}:{}),{flushSync:H}),{shortCircuited:!0}}if(!Z){lt.forEach(Rt=>{let Fe=g.fetchers.get(Rt.key),yr=hi(void 0,Fe?Fe.data:void 0);g.fetchers.set(Rt.key,yr)});let fe=B||g.actionData;me(Te({navigation:Ze},fe?Object.keys(fe).length===0?{actionData:null}:{actionData:fe}:{},lt.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:H})}lt.forEach(fe=>{ie.has(fe.key)&&$t(fe.key),fe.controller&&ie.set(fe.key,fe.controller)});let qt=()=>lt.forEach(fe=>$t(fe.key));C&&C.signal.addEventListener("abort",qt);let{results:ni,loaderResults:Qs,fetcherResults:Zr}=await Ca(g.matches,N,Ee,lt,b);if(b.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",qt),lt.forEach(fe=>ie.delete(fe.key));let Ft=$h(ni);if(Ft){if(Ft.idx>=Ee.length){let fe=lt[Ft.idx-Ee.length].key;D.add(fe)}return await vr(g,Ft.result,{replace:V}),{shortCircuited:!0}}let{loaderData:Pa,errors:Xs}=Ah(g,N,Ee,Qs,te,lt,Zr,ae);ae.forEach((fe,Rt)=>{fe.subscribe(Fe=>{(Fe||fe.done)&&ae.delete(Rt)})});let Zs=fp(),Js=dp(he),Jr=Zs||Js||lt.length>0;return Te({loaderData:Pa,errors:Xs},Jr?{fetchers:new Map(g.fetchers)}:{})}function Xr(b,j,N,L){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ie.has(b)&&$t(b);let U=(L&&L.unstable_flushSync)===!0,X=l||a,V=Vc(g.location,g.matches,s,c.v7_prependBasename,N,j,L==null?void 0:L.relative),H=vo(X,V,s);if(!H){An(b,j,Nt(404,{pathname:V}),{flushSync:U});return}let{path:B,submission:te,error:Ze}=Th(c.v7_normalizeFormMethod,!0,V,L);if(Ze){An(b,j,Ze,{flushSync:U});return}let J=Gc(H,B);if(R=(L&&L.preventScrollReset)===!0,te&&Ht(te.formMethod)){gr(b,j,B,J,H,U,te);return}$.set(b,{routeId:j,path:B}),Gs(b,j,B,J,H,U,te)}async function gr(b,j,N,L,U,X,V){if(ti(),$.delete(b),!L.route.action&&!L.route.lazy){let Fe=Nt(405,{method:V.formMethod,pathname:N,routeId:j});An(b,j,Fe,{flushSync:X});return}let H=g.fetchers.get(b);Jt(b,ok(V,H),{flushSync:X});let B=new AbortController,te=pi(e.history,N,B.signal,V);ie.set(b,B);let Ze=Oe,J=await di("action",te,L,U,i,o,s);if(te.signal.aborted){ie.get(b)===B&&ie.delete(b);return}if(Y.has(b)){Jt(b,Fn(void 0));return}if(Ro(J))if(ie.delete(b),he>Ze){Jt(b,Fn(void 0));return}else return D.add(b),Jt(b,hi(V)),vr(g,J,{fetcherSubmission:V});if(Mi(J)){An(b,j,J.error);return}if(Pr(J))throw Nt(400,{type:"defer-action"});let ce=g.navigation.location||g.location,Ee=pi(e.history,ce,B.signal),lt=l||a,qt=g.navigation.state!=="idle"?vo(lt,g.navigation.location,s):g.matches;K(qt,"Didn't find any matches after fetcher action");let ni=++Oe;T.set(b,ni);let Qs=hi(V,J.data);g.fetchers.set(b,Qs);let[Zr,Ft]=_h(e.history,g,qt,V,ce,be,pe,at,Y,$,D,lt,s,{[L.route.id]:J.data},void 0);Ft.filter(Fe=>Fe.key!==b).forEach(Fe=>{let yr=Fe.key,vp=g.fetchers.get(yr),Hy=hi(void 0,vp?vp.data:void 0);g.fetchers.set(yr,Hy),ie.has(yr)&&$t(yr),Fe.controller&&ie.set(yr,Fe.controller)}),me({fetchers:new Map(g.fetchers)});let Pa=()=>Ft.forEach(Fe=>$t(Fe.key));B.signal.addEventListener("abort",Pa);let{results:Xs,loaderResults:Zs,fetcherResults:Js}=await Ca(g.matches,qt,Zr,Ft,Ee);if(B.signal.aborted)return;B.signal.removeEventListener("abort",Pa),T.delete(b),ie.delete(b),Ft.forEach(Fe=>ie.delete(Fe.key));let Jr=$h(Xs);if(Jr){if(Jr.idx>=Zr.length){let Fe=Ft[Jr.idx-Zr.length].key;D.add(Fe)}return vr(g,Jr.result)}let{loaderData:fe,errors:Rt}=Ah(g,g.matches,Zr,Zs,void 0,Ft,Js,ae);if(g.fetchers.has(b)){let Fe=Fn(J.data);g.fetchers.set(b,Fe)}dp(ni),g.navigation.state==="loading"&&ni>he?(K(E,"Expected pending action"),C&&C.abort(),Le(g.navigation.location,{matches:qt,loaderData:fe,errors:Rt,fetchers:new Map(g.fetchers)})):(me({errors:Rt,loaderData:Ih(g.loaderData,fe,qt,Rt),fetchers:new Map(g.fetchers)}),be=!1)}async function Gs(b,j,N,L,U,X,V){let H=g.fetchers.get(b);Jt(b,hi(V,H?H.data:void 0),{flushSync:X});let B=new AbortController,te=pi(e.history,N,B.signal);ie.set(b,B);let Ze=Oe,J=await di("loader",te,L,U,i,o,s);if(Pr(J)&&(J=await k0(J,te.signal,!0)||J),ie.get(b)===B&&ie.delete(b),!te.signal.aborted){if(Y.has(b)){Jt(b,Fn(void 0));return}if(Ro(J))if(he>Ze){Jt(b,Fn(void 0));return}else{D.add(b),await vr(g,J);return}if(Mi(J)){An(b,j,J.error);return}K(!Pr(J),"Unhandled fetcher deferred data"),Jt(b,Fn(J.data))}}async function vr(b,j,N){let{submission:L,fetcherSubmission:U,replace:X}=N===void 0?{}:N;j.revalidate&&(be=!0);let V=ra(b.location,j.location,{_isRedirect:!0});if(K(V,"Expected a location on the redirect navigation"),n){let ce=!1;if(j.reloadDocument)ce=!0;else if(v0.test(j.location)){const Ee=e.history.createURL(j.location);ce=Ee.origin!==t.location.origin||lr(Ee.pathname,s)==null}if(ce){X?t.location.replace(j.location):t.location.assign(j.location);return}}C=null;let H=X===!0?Me.Replace:Me.Push,{formMethod:B,formAction:te,formEncType:Ze}=b.navigation;!L&&!U&&B&&te&&Ze&&(L=zh(b.navigation));let J=L||U;if(V2.has(j.status)&&J&&Ht(J.formMethod))await xt(H,V,{submission:Te({},J,{formAction:j.location}),preventScrollReset:R});else{let ce=Pu(V,L);await xt(H,V,{overrideNavigation:ce,fetcherSubmission:U,preventScrollReset:R})}}async function Ca(b,j,N,L,U){let X=await Promise.all([...N.map(B=>di("loader",U,B,j,i,o,s)),...L.map(B=>B.matches&&B.match&&B.controller?di("loader",pi(e.history,B.path,B.controller.signal),B.match,B.matches,i,o,s):{type:Ae.error,error:Nt(404,{pathname:B.path})})]),V=X.slice(0,N.length),H=X.slice(N.length);return await Promise.all([Fh(b,N,V,V.map(()=>U.signal),!1,g.loaderData),Fh(b,L.map(B=>B.match),H,L.map(B=>B.controller?B.controller.signal:null),!0)]),{results:X,loaderResults:V,fetcherResults:H}}function ti(){be=!0,pe.push(...Ks()),$.forEach((b,j)=>{ie.has(j)&&(at.push(j),$t(j))})}function Jt(b,j,N){N===void 0&&(N={}),g.fetchers.set(b,j),me({fetchers:new Map(g.fetchers)},{flushSync:(N&&N.flushSync)===!0})}function An(b,j,N,L){L===void 0&&(L={});let U=Li(g.matches,j);ee(b),me({errors:{[U.route.id]:N},fetchers:new Map(g.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function Ea(b){return c.v7_fetcherPersist&&(Q.set(b,(Q.get(b)||0)+1),Y.has(b)&&Y.delete(b)),g.fetchers.get(b)||Y2}function ee(b){let j=g.fetchers.get(b);ie.has(b)&&!(j&&j.state==="loading"&&T.has(b))&&$t(b),$.delete(b),T.delete(b),D.delete(b),Y.delete(b),g.fetchers.delete(b)}function In(b){if(c.v7_fetcherPersist){let j=(Q.get(b)||0)-1;j<=0?(Q.delete(b),Y.add(b)):Q.set(b,j)}else ee(b);me({fetchers:new Map(g.fetchers)})}function $t(b){let j=ie.get(b);K(j,"Expected fetch controller: "+b),j.abort(),ie.delete(b)}function cp(b){for(let j of b){let N=Ea(j),L=Fn(N.data);g.fetchers.set(j,L)}}function fp(){let b=[],j=!1;for(let N of D){let L=g.fetchers.get(N);K(L,"Expected fetcher: "+N),L.state==="loading"&&(D.delete(N),b.push(N),j=!0)}return cp(b),j}function dp(b){let j=[];for(let[N,L]of T)if(L<b){let U=g.fetchers.get(N);K(U,"Expected fetcher: "+N),U.state==="loading"&&($t(N),T.delete(N),j.push(N))}return cp(j),j.length>0}function zy(b,j){let N=g.blockers.get(b)||fi;return ue.get(b)!==j&&ue.set(b,j),N}function pp(b){g.blockers.delete(b),ue.delete(b)}function ja(b,j){let N=g.blockers.get(b)||fi;K(N.state==="unblocked"&&j.state==="blocked"||N.state==="blocked"&&j.state==="blocked"||N.state==="blocked"&&j.state==="proceeding"||N.state==="blocked"&&j.state==="unblocked"||N.state==="proceeding"&&j.state==="unblocked","Invalid blocker state transition: "+N.state+" -> "+j.state);let L=new Map(g.blockers);L.set(b,j),me({blockers:L})}function hp(b){let{currentLocation:j,nextLocation:N,historyAction:L}=b;if(ue.size===0)return;ue.size>1&&zr(!1,"A router only supports one blocker at a time");let U=Array.from(ue.entries()),[X,V]=U[U.length-1],H=g.blockers.get(X);if(!(H&&H.state==="proceeding")&&V({currentLocation:j,nextLocation:N,historyAction:L}))return X}function Ks(b){let j=[];return ae.forEach((N,L)=>{(!b||b(L))&&(N.cancel(),j.push(L),ae.delete(L))}),j}function Uy(b,j,N){if(p=b,w=j,k=N||null,!S&&g.navigation===ju){S=!0;let L=gp(g.location,g.matches);L!=null&&me({restoreScrollPosition:L})}return()=>{p=null,w=null,k=null}}function mp(b,j){return k&&k(b,j.map(L=>S2(L,g.loaderData)))||b.key}function By(b,j){if(p&&w){let N=mp(b,j);p[N]=w()}}function gp(b,j){if(p){let N=mp(b,j),L=p[N];if(typeof L=="number")return L}return null}function Wy(b){i={},l=Wc(b,o,void 0,i)}return v={get basename(){return s},get state(){return g},get routes(){return a},get window(){return t},initialize:$e,subscribe:pn,enableScrollRestoration:Uy,navigate:Mn,fetch:Xr,revalidate:Qr,createHref:b=>e.history.createHref(b),encodeLocation:b=>e.history.encodeLocation(b),getFetcher:Ea,deleteFetcher:In,dispose:Ge,getBlocker:zy,deleteBlocker:pp,_internalFetchControllers:ie,_internalActiveDeferreds:ae,_internalSetRoutes:Wy},v}function Q2(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Vc(e,t,n,r,o,i,a){let l,s;if(i){l=[];for(let f of t)if(l.push(f),f.route.id===i){s=f;break}}else l=t,s=t[t.length-1];let c=Sd(o||".",kd(l),lr(e.pathname,n)||e.pathname,a==="path");return o==null&&(c.search=e.search,c.hash=e.hash),(o==null||o===""||o===".")&&s&&s.route.index&&!Cd(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:kn([n,c.pathname])),Ur(c)}function Th(e,t,n,r){if(!r||!Q2(r))return{path:n};if(r.formMethod&&!nk(r.formMethod))return{path:n,error:Nt(405,{method:r.formMethod})};let o=()=>({path:n,error:Nt(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),l=w0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ht(a))return o();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((k,w)=>{let[S,P]=w;return""+k+S+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Ht(a))return o();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return o()}}}K(typeof FormData=="function","FormData is not available in this environment");let s,c;if(r.formData)s=Yc(r.formData),c=r.formData;else if(r.body instanceof FormData)s=Yc(r.body),c=r.body;else if(r.body instanceof URLSearchParams)s=r.body,c=Mh(s);else if(r.body==null)s=new URLSearchParams,c=new FormData;else try{s=new URLSearchParams(r.body),c=Mh(s)}catch{return o()}let f={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Ht(f.formMethod))return{path:n,submission:f};let d=_n(n);return t&&d.search&&Cd(d.search)&&s.append("index",""),d.search="?"+s,{path:Ur(d),submission:f}}function X2(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function _h(e,t,n,r,o,i,a,l,s,c,f,d,p,k,w){let S=w?Object.values(w)[0]:k?Object.values(k)[0]:void 0,P=e.createURL(t.location),m=e.createURL(o),h=w?Object.keys(w)[0]:void 0,g=X2(n,h).filter((R,C)=>{if(R.route.lazy)return!0;if(R.route.loader==null)return!1;if(Z2(t.loaderData,t.matches[C],R)||a.some(z=>z===R.route.id))return!0;let O=t.matches[C],A=R;return Oh(R,Te({currentUrl:P,currentParams:O.params,nextUrl:m,nextParams:A.params},r,{actionResult:S,defaultShouldRevalidate:i||P.pathname+P.search===m.pathname+m.search||P.search!==m.search||x0(O,A)}))}),E=[];return c.forEach((R,C)=>{if(!n.some(be=>be.route.id===R.routeId)||s.has(C))return;let O=vo(d,R.path,p);if(!O){E.push({key:C,routeId:R.routeId,path:R.path,matches:null,match:null,controller:null});return}let A=t.fetchers.get(C),z=Gc(O,R.path),Z=!1;f.has(C)?Z=!1:l.includes(C)?Z=!0:A&&A.state!=="idle"&&A.data===void 0?Z=i:Z=Oh(z,Te({currentUrl:P,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params},r,{actionResult:S,defaultShouldRevalidate:i})),Z&&E.push({key:C,routeId:R.routeId,path:R.path,matches:O,match:z,controller:new AbortController})}),[g,E]}function Z2(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function x0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Oh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Lh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];K(o,"No route found in manifest");let i={};for(let a in r){let s=o[a]!==void 0&&a!=="hasErrorBoundary";zr(!s,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!w2.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,Te({},t(o),{lazy:void 0}))}async function di(e,t,n,r,o,i,a,l){l===void 0&&(l={});let s,c,f,d=w=>{let S,P=new Promise((m,h)=>S=h);return f=()=>S(),t.signal.addEventListener("abort",f),Promise.race([w({request:t,params:n.params,context:l.requestContext}),P])};try{let w=n.route[e];if(n.route.lazy)if(w){let S,P=await Promise.all([d(w).catch(m=>{S=m}),Lh(n.route,i,o)]);if(S)throw S;c=P[0]}else if(await Lh(n.route,i,o),w=n.route[e],w)c=await d(w);else if(e==="action"){let S=new URL(t.url),P=S.pathname+S.search;throw Nt(405,{method:t.method,pathname:P,routeId:n.route.id})}else return{type:Ae.data,data:void 0};else if(w)c=await d(w);else{let S=new URL(t.url),P=S.pathname+S.search;throw Nt(404,{pathname:P})}K(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(w){s=Ae.error,c=w}finally{f&&t.signal.removeEventListener("abort",f)}if(tk(c)){let w=c.status;if(H2.has(w)){let m=c.headers.get("Location");if(K(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!v0.test(m))m=Vc(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,m);else if(!l.isStaticRequest){let h=new URL(t.url),v=m.startsWith("//")?new URL(h.protocol+m):new URL(m),g=lr(v.pathname,a)!=null;v.origin===h.origin&&g&&(m=v.pathname+v.search+v.hash)}if(l.isStaticRequest)throw c.headers.set("Location",m),c;return{type:Ae.redirect,status:w,location:m,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:s===Ae.error?Ae.error:Ae.data,response:c};let S,P=c.headers.get("Content-Type");return P&&/\bapplication\/json\b/.test(P)?S=await c.json():S=await c.text(),s===Ae.error?{type:s,error:new bd(w,c.statusText,S),headers:c.headers}:{type:Ae.data,data:S,statusCode:c.status,headers:c.headers}}if(s===Ae.error)return{type:s,error:c};if(ek(c)){var p,k;return{type:Ae.deferred,deferredData:c,statusCode:(p=c.init)==null?void 0:p.status,headers:((k=c.init)==null?void 0:k.headers)&&new Headers(c.init.headers)}}return{type:Ae.data,data:c}}function pi(e,t,n,r){let o=e.createURL(w0(t)).toString(),i={signal:n};if(r&&Ht(r.formMethod)){let{formMethod:a,formEncType:l}=r;i.method=a.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=Yc(r.formData):i.body=r.formData}return new Request(o,i)}function Yc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Mh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function J2(e,t,n,r,o){let i={},a=null,l,s=!1,c={};return n.forEach((f,d)=>{let p=t[d].route.id;if(K(!Ro(f),"Cannot handle redirect results in processLoaderData"),Mi(f)){let k=Li(e,p),w=f.error;r&&(w=Object.values(r)[0],r=void 0),a=a||{},a[k.route.id]==null&&(a[k.route.id]=w),i[p]=void 0,s||(s=!0,l=m0(f.error)?f.error.status:500),f.headers&&(c[p]=f.headers)}else Pr(f)?(o.set(p,f.deferredData),i[p]=f.deferredData.data):i[p]=f.data,f.statusCode!=null&&f.statusCode!==200&&!s&&(l=f.statusCode),f.headers&&(c[p]=f.headers)}),r&&(a=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:c}}function Ah(e,t,n,r,o,i,a,l){let{loaderData:s,errors:c}=J2(t,n,r,o,l);for(let f=0;f<i.length;f++){let{key:d,match:p,controller:k}=i[f];K(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let w=a[f];if(!(k&&k.signal.aborted))if(Mi(w)){let S=Li(e.matches,p==null?void 0:p.route.id);c&&c[S.route.id]||(c=Te({},c,{[S.route.id]:w.error})),e.fetchers.delete(d)}else if(Ro(w))K(!1,"Unhandled fetcher revalidation redirect");else if(Pr(w))K(!1,"Unhandled fetcher deferred data");else{let S=Fn(w.data);e.fetchers.set(d,S)}}return{loaderData:s,errors:c}}function Ih(e,t,n,r){let o=Te({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function Li(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Dh(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Nt(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",o&&n&&r?l="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?l="defer() is not supported in actions":i==="invalid-body"&&(l="Unable to encode submission body")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",o&&n&&r?l="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(l='Invalid request method "'+o.toUpperCase()+'"')),new bd(e||500,a,new Error(l),!0)}function $h(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ro(n))return{result:n,idx:t}}}function w0(e){let t=typeof e=="string"?_n(e):e;return Ur(Te({},t,{hash:""}))}function q2(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Pr(e){return e.type===Ae.deferred}function Mi(e){return e.type===Ae.error}function Ro(e){return(e&&e.type)===Ae.redirect}function ek(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function tk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function nk(e){return W2.has(e.toLowerCase())}function Ht(e){return U2.has(e.toLowerCase())}async function Fh(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let c=e.find(d=>d.route.id===s.route.id),f=c!=null&&!x0(c,s)&&(i&&i[s.route.id])!==void 0;if(Pr(l)&&(o||f)){let d=r[a];K(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await k0(l,d,o).then(p=>{p&&(n[a]=p||n[a])})}}}async function k0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ae.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Ae.error,error:o}}return{type:Ae.data,data:e.deferredData.data}}}function Cd(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Gc(e,t){let n=typeof t=="string"?_n(t).search:t.search;if(e[e.length-1].route.index&&Cd(n||""))return e[e.length-1];let r=h0(e);return r[r.length-1]}function zh(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Pu(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function rk(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function hi(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ok(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Fn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ik(e,t){try{let n=e.sessionStorage.getItem(y0);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function ak(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(y0,JSON.stringify(n))}catch(r){zr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xl.apply(this,arguments)}const ga=x.createContext(null),Ed=x.createContext(null),Gr=x.createContext(null),js=x.createContext(null),hr=x.createContext({outlet:null,matches:[],isDataRoute:!1}),S0=x.createContext(null);function lk(e,t){let{relative:n}=t===void 0?{}:t;va()||K(!1);let{basename:r,navigator:o}=x.useContext(Gr),{hash:i,pathname:a,search:l}=Ps(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:kn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function va(){return x.useContext(js)!=null}function Qo(){return va()||K(!1),x.useContext(js).location}function b0(e){x.useContext(Gr).static||x.useLayoutEffect(e)}function Zt(){let{isDataRoute:e}=x.useContext(hr);return e?xk():sk()}function sk(){va()||K(!1);let e=x.useContext(ga),{basename:t,navigator:n}=x.useContext(Gr),{matches:r}=x.useContext(hr),{pathname:o}=Qo(),i=JSON.stringify(kd(r)),a=x.useRef(!1);return b0(()=>{a.current=!0}),x.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let f=Sd(s,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:kn([t,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[t,n,i,o,e])}function C0(){let{matches:e}=x.useContext(hr),t=e[e.length-1];return t?t.params:{}}function Ps(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(hr),{pathname:o}=Qo(),i=JSON.stringify(kd(r));return x.useMemo(()=>Sd(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function uk(e,t,n){va()||K(!1);let{navigator:r}=x.useContext(Gr),{matches:o}=x.useContext(hr),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=Qo(),c;if(t){var f;let S=typeof t=="string"?_n(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||K(!1),c=S}else c=s;let d=c.pathname||"/",p=l==="/"?d:d.slice(l.length)||"/",k=vo(e,{pathname:p}),w=hk(k&&k.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:kn([l,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:kn([l,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n);return t&&w?x.createElement(js.Provider,{value:{location:Xl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Me.Pop}},w):w}function ck(){let e=yk(),t=m0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,i)}const fk=x.createElement(ck,null);class dk extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(hr.Provider,{value:this.props.routeContext},x.createElement(S0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pk(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(ga);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(hr.Provider,{value:t},r)}function hk(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=i.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||K(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,s,c)=>{let f=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||fk);let p=t.concat(i.slice(0,c+1)),k=()=>{let w;return f?w=d:s.route.Component?w=x.createElement(s.route.Component,null):s.route.element?w=s.route.element:w=l,x.createElement(pk,{match:s,routeContext:{outlet:l,matches:p,isDataRoute:n!=null},children:w})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?x.createElement(dk,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:k(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):k()},null)}var E0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(E0||{}),Zl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zl||{});function mk(e){let t=x.useContext(ga);return t||K(!1),t}function gk(e){let t=x.useContext(Ed);return t||K(!1),t}function vk(e){let t=x.useContext(hr);return t||K(!1),t}function j0(e){let t=vk(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function yk(){var e;let t=x.useContext(S0),n=gk(Zl.UseRouteError),r=j0(Zl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function xk(){let{router:e}=mk(E0.UseNavigateStable),t=j0(Zl.UseNavigateStable),n=x.useRef(!1);return b0(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Xl({fromRouteId:t},i)))},[e,t])}function wk(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Me.Pop,navigator:i,static:a=!1}=e;va()&&K(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=_n(r));let{pathname:c="/",search:f="",hash:d="",state:p=null,key:k="default"}=r,w=x.useMemo(()=>{let S=lr(c,l);return S==null?null:{location:{pathname:S,search:f,hash:d,state:p,key:k},navigationType:o}},[l,c,f,d,p,k,o]);return w==null?null:x.createElement(Gr.Provider,{value:s},x.createElement(js.Provider,{children:n,value:w}))}new Promise(()=>{});function kk(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:x.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:x.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fo.apply(this,arguments)}function P0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Sk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bk(e,t){return e.button===0&&(!t||t==="_self")&&!Sk(e)}const Ck=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ek=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function jk(e,t){return K2({basename:t==null?void 0:t.basename,future:Fo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:v2({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Pk(),routes:e,mapRouteProperties:kk,window:t==null?void 0:t.window}).initialize()}function Pk(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Fo({},t,{errors:Rk(t.errors)})),t}function Rk(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new bd(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const R0=x.createContext({isTransitioning:!1}),Nk=x.createContext(new Map),Tk="startTransition",Uh=ax[Tk],_k="flushSync",Bh=g2[_k];function Ok(e){Uh?Uh(e):e()}function mi(e){Bh?Bh(e):e()}class Lk{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Mk(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=x.useState(n.state),[a,l]=x.useState(),[s,c]=x.useState({isTransitioning:!1}),[f,d]=x.useState(),[p,k]=x.useState(),[w,S]=x.useState(),P=x.useRef(new Map),{v7_startTransition:m}=r||{},h=x.useCallback(C=>{m?Ok(C):C()},[m]),v=x.useCallback((C,O)=>{let{deletedFetchers:A,unstable_flushSync:z,unstable_viewTransitionOpts:Z}=O;A.forEach(pe=>P.current.delete(pe)),C.fetchers.forEach((pe,at)=>{pe.data!==void 0&&P.current.set(at,pe.data)});let be=n.window==null||typeof n.window.document.startViewTransition!="function";if(!Z||be){z?mi(()=>i(C)):h(()=>i(C));return}if(z){mi(()=>{p&&(f&&f.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})});let pe=n.window.document.startViewTransition(()=>{mi(()=>i(C))});pe.finished.finally(()=>{mi(()=>{d(void 0),k(void 0),l(void 0),c({isTransitioning:!1})})}),mi(()=>k(pe));return}p?(f&&f.resolve(),p.skipTransition(),S({state:C,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})):(l(C),c({isTransitioning:!0,flushSync:!1,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation}))},[n.window,p,f,P,h]);x.useLayoutEffect(()=>n.subscribe(v),[n,v]),x.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new Lk)},[s]),x.useEffect(()=>{if(f&&a&&n.window){let C=a,O=f.promise,A=n.window.document.startViewTransition(async()=>{h(()=>i(C)),await O});A.finished.finally(()=>{d(void 0),k(void 0),l(void 0),c({isTransitioning:!1})}),k(A)}},[h,a,f,n.window]),x.useEffect(()=>{f&&a&&o.location.key===a.location.key&&f.resolve()},[f,p,o.location,a]),x.useEffect(()=>{!s.isTransitioning&&w&&(l(w.state),c({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),S(void 0))},[s.isTransitioning,w]);let g=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,O,A)=>n.navigate(C,{state:O,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(C,O,A)=>n.navigate(C,{replace:!0,state:O,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[n]),E=n.basename||"/",R=x.useMemo(()=>({router:n,navigator:g,static:!1,basename:E}),[n,g,E]);return x.createElement(x.Fragment,null,x.createElement(ga.Provider,{value:R},x.createElement(Ed.Provider,{value:o},x.createElement(Nk.Provider,{value:P.current},x.createElement(R0.Provider,{value:s},x.createElement(wk,{basename:E,location:o.location,navigationType:o.historyAction,navigator:g},o.initialized?x.createElement(Ak,{routes:n.routes,state:o}):t))))),null)}function Ak(e){let{routes:t,state:n}=e;return uk(t,void 0,n)}const Ik=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,un=x.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:c,preventScrollReset:f,unstable_viewTransition:d}=t,p=P0(t,Ck),{basename:k}=x.useContext(Gr),w,S=!1;if(typeof c=="string"&&Dk.test(c)&&(w=c,Ik))try{let v=new URL(window.location.href),g=c.startsWith("//")?new URL(v.protocol+c):new URL(c),E=lr(g.pathname,k);g.origin===v.origin&&E!=null?c=E+g.search+g.hash:S=!0}catch{}let P=lk(c,{relative:o}),m=Fk(c,{replace:a,state:l,target:s,preventScrollReset:f,relative:o,unstable_viewTransition:d});function h(v){r&&r(v),v.defaultPrevented||m(v)}return x.createElement("a",Fo({},p,{href:w||P,onClick:S||i?r:h,ref:n,target:s}))}),N0=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,unstable_viewTransition:c,children:f}=t,d=P0(t,Ek),p=Ps(s,{relative:d.relative}),k=Qo(),w=x.useContext(Ed),{navigator:S}=x.useContext(Gr),P=w!=null&&zk(p)&&c===!0,m=S.encodeLocation?S.encodeLocation(p).pathname:p.pathname,h=k.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(h=h.toLowerCase(),v=v?v.toLowerCase():null,m=m.toLowerCase());const g=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let E=h===m||!a&&h.startsWith(m)&&h.charAt(g)==="/",R=v!=null&&(v===m||!a&&v.startsWith(m)&&v.charAt(m.length)==="/"),C={isActive:E,isPending:R,isTransitioning:P},O=E?r:void 0,A;typeof i=="function"?A=i(C):A=[i,E?"active":null,R?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let z=typeof l=="function"?l(C):l;return x.createElement(un,Fo({},d,{"aria-current":O,className:A,ref:n,style:z,to:s,unstable_viewTransition:c}),typeof f=="function"?f(C):f)});var Kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kc||(Kc={}));var Wh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wh||(Wh={}));function $k(e){let t=x.useContext(ga);return t||K(!1),t}function Fk(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=Zt(),c=Qo(),f=Ps(e,{relative:a});return x.useCallback(d=>{if(bk(d,n)){d.preventDefault();let p=r!==void 0?r:Ur(c)===Ur(f);s(e,{replace:p,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[c,s,f,r,o,n,e,i,a,l])}function zk(e,t){t===void 0&&(t={});let n=x.useContext(R0);n==null&&K(!1);let{basename:r}=$k(Kc.useViewTransitionState),o=Ps(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=lr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=lr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Hc(o.pathname,a)!=null||Hc(o.pathname,i)!=null}var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ot.apply(this,arguments)};function oa(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ye="-ms-",Ai="-moz-",re="-webkit-",T0="comm",Rs="rule",jd="decl",Uk="@import",_0="@keyframes",Bk="@layer",Wk=Math.abs,Pd=String.fromCharCode,Qc=Object.assign;function Hk(e,t){return Qe(e,0)^45?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}function O0(e){return e.trim()}function gn(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function wl(e,t){return e.indexOf(t)}function Qe(e,t){return e.charCodeAt(t)|0}function zo(e,t,n){return e.slice(t,n)}function nn(e){return e.length}function L0(e){return e.length}function ki(e,t){return t.push(e),e}function Vk(e,t){return e.map(t).join("")}function Hh(e,t){return e.filter(function(n){return!gn(n,t)})}var Ns=1,Uo=1,M0=0,Dt=0,ze=0,Xo="";function Ts(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ns,column:Uo,length:a,return:"",siblings:l}}function zn(e,t){return Qc(Ts("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function eo(e){for(;e.root;)e=zn(e.root,{children:[e]});ki(e,e.siblings)}function Yk(){return ze}function Gk(){return ze=Dt>0?Qe(Xo,--Dt):0,Uo--,ze===10&&(Uo=1,Ns--),ze}function Qt(){return ze=Dt<M0?Qe(Xo,Dt++):0,Uo++,ze===10&&(Uo=1,Ns++),ze}function Lr(){return Qe(Xo,Dt)}function kl(){return Dt}function _s(e,t){return zo(Xo,e,t)}function Xc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kk(e){return Ns=Uo=1,M0=nn(Xo=e),Dt=0,[]}function Qk(e){return Xo="",e}function Ru(e){return O0(_s(Dt-1,Zc(e===91?e+2:e===40?e+1:e)))}function Xk(e){for(;(ze=Lr())&&ze<33;)Qt();return Xc(e)>2||Xc(ze)>3?"":" "}function Zk(e,t){for(;--t&&Qt()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return _s(e,kl()+(t<6&&Lr()==32&&Qt()==32))}function Zc(e){for(;Qt();)switch(ze){case e:return Dt;case 34:case 39:e!==34&&e!==39&&Zc(ze);break;case 40:e===41&&Zc(e);break;case 92:Qt();break}return Dt}function Jk(e,t){for(;Qt()&&e+ze!==47+10;)if(e+ze===42+42&&Lr()===47)break;return"/*"+_s(t,Dt-1)+"*"+Pd(e===47?e:Qt())}function qk(e){for(;!Xc(Lr());)Qt();return _s(e,Dt)}function eS(e){return Qk(Sl("",null,null,null,[""],e=Kk(e),0,[0],e))}function Sl(e,t,n,r,o,i,a,l,s){for(var c=0,f=0,d=a,p=0,k=0,w=0,S=1,P=1,m=1,h=0,v="",g=o,E=i,R=r,C=v;P;)switch(w=h,h=Qt()){case 40:if(w!=108&&Qe(C,d-1)==58){wl(C+=G(Ru(h),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:C+=Ru(h);break;case 9:case 10:case 13:case 32:C+=Xk(w);break;case 92:C+=Zk(kl()-1,7);continue;case 47:switch(Lr()){case 42:case 47:ki(tS(Jk(Qt(),kl()),t,n,s),s);break;default:C+="/"}break;case 123*S:l[c++]=nn(C)*m;case 125*S:case 59:case 0:switch(h){case 0:case 125:P=0;case 59+f:m==-1&&(C=G(C,/\f/g,"")),k>0&&nn(C)-d&&ki(k>32?Yh(C+";",r,n,d-1,s):Yh(G(C," ","")+";",r,n,d-2,s),s);break;case 59:C+=";";default:if(ki(R=Vh(C,t,n,c,f,o,l,v,g=[],E=[],d,i),i),h===123)if(f===0)Sl(C,t,R,R,g,i,d,l,E);else switch(p===99&&Qe(C,3)===110?100:p){case 100:case 108:case 109:case 115:Sl(e,R,R,r&&ki(Vh(e,R,R,0,0,o,l,v,o,g=[],d,E),E),o,E,d,l,r?g:E);break;default:Sl(C,R,R,R,[""],E,0,l,E)}}c=f=k=0,S=m=1,v=C="",d=a;break;case 58:d=1+nn(C),k=w;default:if(S<1){if(h==123)--S;else if(h==125&&S++==0&&Gk()==125)continue}switch(C+=Pd(h),h*S){case 38:m=f>0?1:(C+="\f",-1);break;case 44:l[c++]=(nn(C)-1)*m,m=1;break;case 64:Lr()===45&&(C+=Ru(Qt())),p=Lr(),f=d=nn(v=C+=qk(kl())),h++;break;case 45:w===45&&nn(C)==2&&(S=0)}}return i}function Vh(e,t,n,r,o,i,a,l,s,c,f,d){for(var p=o-1,k=o===0?i:[""],w=L0(k),S=0,P=0,m=0;S<r;++S)for(var h=0,v=zo(e,p+1,p=Wk(P=a[S])),g=e;h<w;++h)(g=O0(P>0?k[h]+" "+v:G(v,/&\f/g,k[h])))&&(s[m++]=g);return Ts(e,t,n,o===0?Rs:l,s,c,f,d)}function tS(e,t,n,r){return Ts(e,t,n,T0,Pd(Yk()),zo(e,2,-2),0,r)}function Yh(e,t,n,r,o){return Ts(e,t,n,jd,zo(e,0,r),zo(e,r+1,-1),r,o)}function A0(e,t,n){switch(Hk(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Ai+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Ai+e+ye+e+e;case 5936:switch(Qe(e,t+11)){case 114:return re+e+ye+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+ye+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+ye+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+ye+e+e;case 6165:return re+e+ye+"flex-"+e+e;case 5187:return re+e+G(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return re+e+ye+"flex-item-"+G(e,/flex-|-self/g,"")+(gn(e,/flex-|baseline/)?"":ye+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return re+e+ye+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+ye+G(e,"shrink","negative")+e;case 5292:return re+e+ye+G(e,"basis","preferred-size")+e;case 6060:return re+"box-"+G(e,"-grow","")+re+e+ye+G(e,"grow","positive")+e;case 4554:return re+G(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!gn(e,/flex-|baseline/))return ye+"grid-column-align"+zo(e,t)+e;break;case 2592:case 3360:return ye+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,gn(r.props,/grid-\w+-end/)})?~wl(e+(n=n[t].value),"span")?e:ye+G(e,"-start","")+e+ye+"grid-row-span:"+(~wl(n,"span")?gn(n,/\d+/):+gn(n,/\d+/)-+gn(e,/\d+/))+";":ye+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return gn(r.props,/grid-\w+-start/)})?e:ye+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(Qe(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Ai+(Qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wl(e,"stretch")?A0(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,s,c){return ye+o+":"+i+c+(a?ye+o+"-span:"+(l?s:+s-+i)+c:"")+e});case 4949:if(Qe(e,t+6)===121)return G(e,":",":"+re)+e;break;case 6444:switch(Qe(e,Qe(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Qe(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+ye+"$2box$3")+e;case 100:return G(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function Jl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nS(e,t,n,r){switch(e.type){case Bk:if(e.children.length)break;case Uk:case jd:return e.return=e.return||e.value;case T0:return"";case _0:return e.return=e.value+"{"+Jl(e.children,r)+"}";case Rs:if(!nn(e.value=e.props.join(",")))return""}return nn(n=Jl(e.children,r))?e.return=e.value+"{"+n+"}":""}function rS(e){var t=L0(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function oS(e){return function(t){t.root||(t=t.return)&&e(t)}}function iS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jd:e.return=A0(e.value,e.length,n);return;case _0:return Jl([zn(e,{value:G(e.value,"@","@"+re)})],r);case Rs:if(e.length)return Vk(n=e.props,function(o){switch(gn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":eo(zn(e,{props:[G(o,/:(read-\w+)/,":"+Ai+"$1")]})),eo(zn(e,{props:[o]})),Qc(e,{props:Hh(n,r)});break;case"::placeholder":eo(zn(e,{props:[G(o,/:(plac\w+)/,":"+re+"input-$1")]})),eo(zn(e,{props:[G(o,/:(plac\w+)/,":"+Ai+"$1")]})),eo(zn(e,{props:[G(o,/:(plac\w+)/,ye+"input-$1")]})),eo(zn(e,{props:[o]})),Qc(e,{props:Hh(n,r)});break}return""})}}var aS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Rd=typeof window<"u"&&"HTMLElement"in window,lS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),sS={},Os=Object.freeze([]),Wo=Object.freeze({});function I0(e,t,n){return n===void 0&&(n=Wo),e.theme!==n.theme&&e.theme||t||n.theme}var D0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cS=/(^-|-$)/g;function Gh(e){return e.replace(uS,"-").replace(cS,"")}var fS=/(a)(d)/gi,Kh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kh(t%52)+n;return(Kh(t%52)+n).replace(fS,"$1-$2")}var Nu,yo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$0=function(e){return yo(5381,e)};function F0(e){return Jc($0(e)>>>0)}function dS(e){return e.displayName||e.name||"Component"}function Tu(e){return typeof e=="string"&&!0}var z0=typeof Symbol=="function"&&Symbol.for,U0=z0?Symbol.for("react.memo"):60115,pS=z0?Symbol.for("react.forward_ref"):60112,hS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},B0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gS=((Nu={})[pS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nu[U0]=B0,Nu);function Qh(e){return("type"in(t=e)&&t.type.$$typeof)===U0?B0:"$$typeof"in e?gS[e.$$typeof]:hS;var t}var vS=Object.defineProperty,yS=Object.getOwnPropertyNames,Xh=Object.getOwnPropertySymbols,xS=Object.getOwnPropertyDescriptor,wS=Object.getPrototypeOf,Zh=Object.prototype;function W0(e,t,n){if(typeof t!="string"){if(Zh){var r=wS(t);r&&r!==Zh&&W0(e,r,n)}var o=yS(t);Xh&&(o=o.concat(Xh(t)));for(var i=Qh(e),a=Qh(t),l=0;l<o.length;++l){var s=o[l];if(!(s in mS||n&&n[s]||a&&s in a||i&&s in i)){var c=xS(t,s);try{vS(e,s,c)}catch{}}}}return e}function Ho(e){return typeof e=="function"}function Nd(e){return typeof e=="object"&&"styledComponentId"in e}function Rr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ia(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ef(e,t,n){if(n===void 0&&(n=!1),!n&&!ia(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ef(e[r],t[r]);else if(ia(t))for(var r in t)e[r]=ef(e[r],t[r]);return e}function Td(e,t){Object.defineProperty(e,"toString",{value:t})}function ya(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var kS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw ya(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),bl=new Map,ql=new Map,_u=1,Va=function(e){if(bl.has(e))return bl.get(e);for(;ql.has(_u);)_u++;var t=_u++;return bl.set(e,t),ql.set(t,e),t},SS=function(e,t){bl.set(e,t),ql.set(t,e)},bS="style[".concat(Bo,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),CS=new RegExp("^".concat(Bo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ES=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},jS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(CS);if(s){var c=0|parseInt(s[1],10),f=s[2];c!==0&&(SS(f,c),ES(e,f,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}};function PS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var H0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Bo,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Bo,"active"),r.setAttribute("data-styled-version","6.1.0");var a=PS();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},RS=function(){function e(t){this.element=H0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw ya(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),NS=function(){function e(t){this.element=H0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),TS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jh=Rd,_S={isServer:!Rd,useCSSOMInjection:!lS},es=function(){function e(t,n,r){t===void 0&&(t=Wo),n===void 0&&(n={});var o=this;this.options=ot(ot({},_S),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Rd&&Jh&&(Jh=!1,function(i){for(var a=document.querySelectorAll(bS),l=0,s=a.length;l<s;l++){var c=a[l];c&&c.getAttribute(Bo)!=="active"&&(jS(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Td(this,function(){return function(i){for(var a=i.getTag(),l=a.length,s="",c=function(d){var p=function(m){return ql.get(m)}(d);if(p===void 0)return"continue";var k=i.names.get(p),w=a.getGroup(d);if(k===void 0||w.length===0)return"continue";var S="".concat(Bo,".g").concat(d,'[id="').concat(p,'"]'),P="";k!==void 0&&k.forEach(function(m){m.length>0&&(P+="".concat(m,","))}),s+="".concat(w).concat(S,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},f=0;f<l;f++)c(f);return s}(o)})}return e.registerId=function(t){return Va(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new TS(o):r?new RS(o):new NS(o)}(this.options),new kS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Va(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Va(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Va(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),OS=/&/g,LS=/^\s*\/\/.*$/gm;function V0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=V0(n.children,t)),n})}function MS(e){var t,n,r,o=e===void 0?Wo:e,i=o.options,a=i===void 0?Wo:i,l=o.plugins,s=l===void 0?Os:l,c=function(p,k,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):p},f=s.slice();f.push(function(p){p.type===Rs&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(OS,n).replace(r,c))}),a.prefix&&f.push(iS),f.push(nS);var d=function(p,k,w,S){k===void 0&&(k=""),w===void 0&&(w=""),S===void 0&&(S="&"),t=S,n=k,r=new RegExp("\\".concat(n,"\\b"),"g");var P=p.replace(LS,""),m=eS(w||k?"".concat(w," ").concat(k," { ").concat(P," }"):P);a.namespace&&(m=V0(m,a.namespace));var h=[];return Jl(m,rS(f.concat(oS(function(v){return h.push(v)})))),h};return d.hash=s.length?s.reduce(function(p,k){return k.name||ya(15),yo(p,k.name)},5381).toString():"",d}var AS=new es,tf=MS(),Y0=De.createContext({shouldForwardProp:void 0,styleSheet:AS,stylis:tf});Y0.Consumer;De.createContext(void 0);function nf(){return x.useContext(Y0)}var IS=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=tf);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Td(this,function(){throw ya(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=tf),this.name+t.hash},e}(),DS=function(e){return e>="A"&&e<="Z"};function qh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;DS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var G0=function(e){return e==null||e===!1||e===""},K0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!G0(i)&&(Array.isArray(i)&&i.isCss||Ho(i)?r.push("".concat(qh(o),":"),i,";"):ia(i)?r.push.apply(r,oa(oa(["".concat(o," {")],K0(i),!1),["}"],!1)):r.push("".concat(qh(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in aS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function or(e,t,n,r){if(G0(e))return[];if(Nd(e))return[".".concat(e.styledComponentId)];if(Ho(e)){if(!Ho(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return or(o,t,n,r)}var i;return e instanceof IS?n?(e.inject(n,r),[e.getName(r)]):[e]:ia(e)?K0(e):Array.isArray(e)?Array.prototype.concat.apply(Os,e.map(function(a){return or(a,t,n,r)})):[e.toString()]}function Q0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ho(n)&&!Nd(n))return!1}return!0}var $S=$0("6.1.0"),FS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Q0(t),this.componentId=n,this.baseHash=yo($S,n),this.baseStyle=r,es.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Rr(o,this.staticRulesId);else{var i=qc(or(this.rules,t,n,r)),a=Jc(yo(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=Rr(o,a),this.staticRulesId=a}else{for(var s=yo(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var p=qc(or(d,t,n,r));s=yo(s,p+f),c+=p}}if(c){var k=Jc(s>>>0);n.hasNameForId(this.componentId,k)||n.insertRules(this.componentId,k,r(c,".".concat(k),void 0,this.componentId)),o=Rr(o,k)}}return o},e}(),_d=De.createContext(void 0);_d.Consumer;var Ou={};function zS(e,t,n){var r=Nd(e),o=e,i=!Tu(e),a=t.attrs,l=a===void 0?Os:a,s=t.componentId,c=s===void 0?function(v,g){var E=typeof v!="string"?"sc":Gh(v);Ou[E]=(Ou[E]||0)+1;var R="".concat(E,"-").concat(F0("6.1.0"+E+Ou[E]));return g?"".concat(g,"-").concat(R):R}(t.displayName,t.parentComponentId):s,f=t.displayName;f===void 0&&function(v){return Tu(v)?"styled.".concat(v):"Styled(".concat(dS(v),")")}(e);var d=t.displayName&&t.componentId?"".concat(Gh(t.displayName),"-").concat(t.componentId):t.componentId||c,p=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;k=function(v,g){return w(v,g)&&S(v,g)}}else k=w}var P=new FS(n,d,r?o.componentStyle:void 0);function m(v,g){return function(E,R,C){var O=E.attrs,A=E.componentStyle,z=E.defaultProps,Z=E.foldedComponentIds,be=E.styledComponentId,pe=E.target,at=De.useContext(_d),ie=nf(),Oe=E.shouldForwardProp||ie.shouldForwardProp,he=function(ae,ue,Ye){for(var $e,Ge=ot(ot({},ue),{className:void 0,theme:Ye}),pn=0;pn<ae.length;pn+=1){var me=Ho($e=ae[pn])?$e(Ge):$e;for(var Le in me)Ge[Le]=Le==="className"?Rr(Ge[Le],me[Le]):Le==="style"?ot(ot({},Ge[Le]),me[Le]):me[Le]}return ue.className&&(Ge.className=Rr(Ge.className,ue.className)),Ge}(O,R,I0(R,at,z)||Wo),T=he.as||pe,D={};for(var $ in he)he[$]===void 0||$[0]==="$"||$==="as"||$==="theme"||($==="forwardedAs"?D.as=he.forwardedAs:Oe&&!Oe($,T)||(D[$]=he[$]));var Q=function(ae,ue){var Ye=nf(),$e=ae.generateAndInjectStyles(ue,Ye.styleSheet,Ye.stylis);return $e}(A,he),Y=Rr(Z,be);return Q&&(Y+=" "+Q),he.className&&(Y+=" "+he.className),D[Tu(T)&&!D0.has(T)?"class":"className"]=Y,D.ref=C,x.createElement(T,D)}(h,v,g)}var h=De.forwardRef(m);return h.attrs=p,h.componentStyle=P,h.shouldForwardProp=k,h.foldedComponentIds=r?Rr(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=d,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(g){for(var E=[],R=1;R<arguments.length;R++)E[R-1]=arguments[R];for(var C=0,O=E;C<O.length;C++)ef(g,O[C],!0);return g}({},o.defaultProps,v):v}}),Td(h,function(){return".".concat(h.styledComponentId)}),i&&W0(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function em(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var tm=function(e){return Object.assign(e,{isCss:!0})};function X0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ho(e)||ia(e)){var r=e;return tm(or(em(Os,oa([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?or(o):tm(or(em(o,t)))}function rf(e,t,n){if(n===void 0&&(n=Wo),!t)throw ya(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,X0.apply(void 0,oa([o],i,!1)))};return r.attrs=function(o){return rf(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return rf(e,t,ot(ot({},n),o))},r}var Z0=function(e){return rf(zS,e)},y=Z0;D0.forEach(function(e){y[e]=Z0(e)});var US=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Q0(t),es.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(qc(or(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&es.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function BS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=X0.apply(void 0,oa([e],t,!1)),o="sc-global-".concat(F0(JSON.stringify(r))),i=new US(r,o),a=function(s){var c=nf(),f=De.useContext(_d),d=De.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&l(d,s,c.styleSheet,f,c.stylis),De.useLayoutEffect(function(){if(!c.styleSheet.server)return l(d,s,c.styleSheet,f,c.stylis),function(){return i.removeStyles(d,c.styleSheet)}},[d,s,c.styleSheet,f,c.stylis]),null};function l(s,c,f,d,p){if(i.isStatic)i.renderStyles(s,sS,f,p);else{var k=ot(ot({},c),{theme:I0(c,d,a.defaultProps)});i.renderStyles(s,k,f,p)}}return De.memo(a)}const WS=y.div`
margin-left: 29vw;
display: flex;
flex-direction: column;
justify-content: center;
//background-color: red;
align-items: center;
height: 100vh;
gap: 10px;
`,HS=y.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--blue-);
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
color: var(--white);
width: 70%;
`,nm=y.input`
width: 90%;
padding: 10px;
margin: 5px 0;
border: 1px solid var(--light-black);
border-radius: 50px;
align-items: center;
color: var(--white);
background-color:var(--light-black);
`,VS=y.button`
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
`,YS=y(un)`
font-size: 11px;
text-decoration: underline; 
padding: 10px;
color: var(--grey);
border: none;
border-radius: 3px;

cursor: pointer;
`,GS=y.div`
    display: flex
`,KS=y.div`
    font-weight: 800;
    font-size: 100px;
    color: var(--white);
`,QS=y.div`
    font-weight: 900;
    font-size: 100px;
  color: var(--blue);
`,rm=y.label`
    margin-right: 21vw;
    font-size: 17px;
    color: var(--white);
`,XS=y.div`
  position: fixed;
  bottom: 100px;
  background-color: var(--blue); 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`,jt=y.div`
    display: flex;
`;class Od{constructor(t,n){this.username=t,this.password=n,this.profilePicture=null,this.posts=[],this.biography="",this.education="",this.workStatus=""}setUsername(t){this.username=t}getUsername(){return this.username}setPassword(t){this.password=t}getPassword(){return this.password}setProfilePicture(t){this.profilePicture=t}getProfilePicture(){return this.profilePicture}addPost(t){this.posts.push(t)}getPosts(){return this.posts}setBiography(t){this.biography=t}getBiography(){return this.biography}setWorkStatus(t){this.workStatus=t}getWorkStatus(){return this.workStatus}}class Ld{constructor(t,n,r,o,i,a){this.author=t,this.title=n,this.content=r,this.topic=o,this.timeStamp=i,this.id=a,this.likes=0,this.comments=[],this.url="/CodeConnect/".concat(String(t.getUsername()),"/",String(a))}like(){this.likes++}unlike(){this.likes--}addComment(t){this.comments.push(t)}getAuthor(){return{author:this.author}}getPostInformation(){return{author:this.author,title:this.title,content:this.content,topic:this.topic,timeStamp:this.timeStamp,id:this.id,likes:this.likes,comments:this.comments}}getPostURL(){return{url:this.url}}}class cn{constructor(t,n,r,o){this.author=t,this.content=n,this.timeStamp=r,this.id=o,this.likes=0,this.comments=[]}like(){this.likes++}unlike(){this.likes--}addComment(t){this.comments.push(t)}getAuthor(){return{author:this.author}}getPostInformation(){return{author:this.author,title:this.title,content:this.content,topic:this.topic,timeStamp:this.timeStamp,id:this.id,likes:this.likes,comments:this.comments}}getPostURL(){return{url:this.url}}}const Ls="/CodeConnect/assets/MainUserPfp-1324bd9a.png",ZS="/CodeConnect/assets/profile3-65bbbce1.jpg",Kr="/CodeConnect/assets/userPfp3-ca280f4a.png",No=[],Se=[],fn=new Od("PixelPioneer","123");fn.setProfilePicture(Ls);const mr=new Od("madscientist","password");mr.setProfilePicture(ZS);const Ms=new Od("supasonic","password");Ms.setProfilePicture(Kr);No.push(fn);No.push(mr);No.push(Ms);const Md=new Ld(fn,"Learning React","I am learning React for a school project, what are the best resources to learn from?","React","12 minutes ago",Se.length);Se.push(Md);fn.addPost(Md);Md.likes=1;const Ad=new Ld(mr,"Growtopia - My new game!","I've been developing my farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!","Game Development","1 hour ago",Se.length);Se.push(Ad);mr.addPost(Ad);Ad.likes=93;const Id=new Ld(Ms,"Internship Help","I'm in my third year of university and I'm want to start applying to internships. I've never had an interview before and I was wondering what the process is normally like?","Career","2 hours ago",Se.length);Se.push(Id);Ms.addPost(Id);Id.likes=18;const Dd=new cn(fn,"no this is fake","1 second ago",Se.at(0).length),JS=new cn(mr,"This is actually real, I agree with this post","1 second ago",Dd.comments.length);Se.at(0).addComment(Dd);Dd.addComment(JS);const J0=new cn(fn,"hahahahahh well this makes sense","1 second ago",Se.at(0).length),$d=new cn(mr,"This is actually real, I agree with this post","1 second ago",0),qS=new cn(mr,"wow! im talking to myself","1 second ago",0),eb=new cn(mr,"blah blah blah","1 second ago",1);Se.at(0).addComment(J0);J0.addComment($d);$d.addComment(qS);$d.addComment(eb);const tb=new cn(fn,"no this is fake","1 second ago",Se.at(1).length);Se.at(1).addComment(tb);const nb=new cn(fn,"no this is fake","1 second ago",Se.at(1).length);Se.at(1).addComment(nb);const rb=new cn(fn,"no this is fake","1 second ago",Se.at(2).length);Se.at(2).addComment(rb);const ob=new cn(fn,"no this is fake","1 second ago",Se.at(2).length);Se.at(2).addComment(ob);function ib(e,t){for(let n=0;n<No.length;n++)if(No[n].getUsername()===e&&No[n].getPassword()===t)return!0;return!1}const ab={login:async(e,t)=>ib(e,t)?{success:!0,user:{username:e}}:{success:!1,error:"Invalid credentials"}};function lb(){const e=Zt(),[t,n]=x.useState(""),[r,o]=x.useState(""),[i,a]=x.useState(""),l=async()=>{try{const s=await ab.login(t,r);s.success?(console.log("Login successful:",s.user),e("/CodeConnect/home")):a(s.error)}catch(s){console.error("Login error:",s),a("Unknown error has occured. Please try again.")}};return u.jsx(jt,{children:u.jsxs(WS,{children:[u.jsxs(GS,{children:[u.jsx(KS,{children:"Code"}),u.jsx(QS,{children:"Connect"})]}),u.jsxs(HS,{children:[u.jsx(rm,{children:"Username:"}),u.jsx(nm,{type:"text",id:"username",placeholder:"Username",value:t,onChange:s=>n(s.target.value)}),u.jsx(rm,{children:"Password:"}),u.jsx(nm,{type:"password",id:"password",placeholder:"Password",value:r,onChange:s=>o(s.target.value)}),u.jsx(VS,{type:"button",onClick:l,children:"Login"}),i&&u.jsx("div",{style:{color:"red"},children:i}),u.jsx(YS,{to:"/CodeConnect/guest-home",children:"Continue As Guest"})]}),u.jsx(XS,{children:"Create Account"})]})})}function sb(){return u.jsx(lb,{})}function om(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?om(Object(n),!0).forEach(function(r){Ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):om(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ts(e){"@babel/helpers - typeof";return ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ts(e)}function ub(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function im(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cb(e,t,n){return t&&im(e.prototype,t),n&&im(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fd(e,t){return db(e)||hb(e,t)||q0(e,t)||gb()}function xa(e){return fb(e)||pb(e)||q0(e)||mb()}function fb(e){if(Array.isArray(e))return of(e)}function db(e){if(Array.isArray(e))return e}function pb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,a,l;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));o=!0);}catch(s){i=!0,l=s}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function q0(e,t){if(e){if(typeof e=="string")return of(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return of(e,t)}}function of(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function mb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var am=function(){},zd={},e1={},t1=null,n1={mark:am,measure:am};try{typeof window<"u"&&(zd=window),typeof document<"u"&&(e1=document),typeof MutationObserver<"u"&&(t1=MutationObserver),typeof performance<"u"&&(n1=performance)}catch{}var vb=zd.navigator||{},lm=vb.userAgent,sm=lm===void 0?"":lm,sr=zd,ke=e1,um=t1,Ya=n1;sr.document;var On=!!ke.documentElement&&!!ke.head&&typeof ke.addEventListener=="function"&&typeof ke.createElement=="function",r1=~sm.indexOf("MSIE")||~sm.indexOf("Trident/"),Ga,Ka,Qa,Xa,Za,jn="___FONT_AWESOME___",af=16,o1="fa",i1="svg-inline--fa",Br="data-fa-i2svg",lf="data-fa-pseudo-element",yb="data-fa-pseudo-element-pending",Ud="data-prefix",Bd="data-icon",cm="fontawesome-i2svg",xb="async",wb=["HTML","HEAD","STYLE","SCRIPT"],a1=function(){try{return!0}catch{return!1}}(),xe="classic",_e="sharp",Wd=[xe,_e];function wa(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[xe]}})}var aa=wa((Ga={},Ve(Ga,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ve(Ga,_e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ga)),la=wa((Ka={},Ve(Ka,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ve(Ka,_e,{solid:"fass",regular:"fasr",light:"fasl"}),Ka)),sa=wa((Qa={},Ve(Qa,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ve(Qa,_e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Qa)),kb=wa((Xa={},Ve(Xa,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ve(Xa,_e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Xa)),Sb=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,l1="fa-layers-text",bb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Cb=wa((Za={},Ve(Za,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ve(Za,_e,{900:"fass",400:"fasr",300:"fasl"}),Za)),s1=[1,2,3,4,5,6,7,8,9,10],Eb=s1.concat([11,12,13,14,15,16,17,18,19,20]),jb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Nr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ua=new Set;Object.keys(la[xe]).map(ua.add.bind(ua));Object.keys(la[_e]).map(ua.add.bind(ua));var Pb=[].concat(Wd,xa(ua),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nr.GROUP,Nr.SWAP_OPACITY,Nr.PRIMARY,Nr.SECONDARY]).concat(s1.map(function(e){return"".concat(e,"x")})).concat(Eb.map(function(e){return"w-".concat(e)})),Ii=sr.FontAwesomeConfig||{};function Rb(e){var t=ke.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Nb(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ke&&typeof ke.querySelector=="function"){var Tb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tb.forEach(function(e){var t=Fd(e,2),n=t[0],r=t[1],o=Nb(Rb(n));o!=null&&(Ii[r]=o)})}var u1={styleDefault:"solid",familyDefault:"classic",cssPrefix:o1,replacementClass:i1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ii.familyPrefix&&(Ii.cssPrefix=Ii.familyPrefix);var Vo=M(M({},u1),Ii);Vo.autoReplaceSvg||(Vo.observeMutations=!1);var F={};Object.keys(u1).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){Vo[e]=n,Di.forEach(function(r){return r(F)})},get:function(){return Vo[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){Vo.cssPrefix=t,Di.forEach(function(n){return n(F)})},get:function(){return Vo.cssPrefix}});sr.FontAwesomeConfig=F;var Di=[];function _b(e){return Di.push(e),function(){Di.splice(Di.indexOf(e),1)}}var $n=af,an={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ob(e){if(!(!e||!On)){var t=ke.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ke.head.childNodes,r=null,o=n.length-1;o>-1;o--){var i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return ke.head.insertBefore(t,r),e}}var Lb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ca(){for(var e=12,t="";e-- >0;)t+=Lb[Math.random()*62|0];return t}function Zo(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Hd(e){return e.classList?Zo(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function c1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mb(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(c1(e[n]),'" ')},"").trim()}function As(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Vd(e){return e.size!==an.size||e.x!==an.x||e.y!==an.y||e.rotate!==an.rotate||e.flipX||e.flipY}function Ab(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(a," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:s,path:c}}function Ib(e){var t=e.transform,n=e.width,r=n===void 0?af:n,o=e.height,i=o===void 0?af:o,a=e.startCentered,l=a===void 0?!1:a,s="";return l&&r1?s+="translate(".concat(t.x/$n-r/2,"em, ").concat(t.y/$n-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/$n,"em), calc(-50% + ").concat(t.y/$n,"em)) "):s+="translate(".concat(t.x/$n,"em, ").concat(t.y/$n,"em) "),s+="scale(".concat(t.size/$n*(t.flipX?-1:1),", ").concat(t.size/$n*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Db=`:root, :host {
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
}`;function f1(){var e=o1,t=i1,n=F.cssPrefix,r=F.replacementClass,o=Db;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return o}var fm=!1;function Lu(){F.autoAddCss&&!fm&&(Ob(f1()),fm=!0)}var $b={mixout:function(){return{dom:{css:f1,insertCss:Lu}}},hooks:function(){return{beforeDOMElementCreation:function(){Lu()},beforeI2svg:function(){Lu()}}}},Pn=sr||{};Pn[jn]||(Pn[jn]={});Pn[jn].styles||(Pn[jn].styles={});Pn[jn].hooks||(Pn[jn].hooks={});Pn[jn].shims||(Pn[jn].shims=[]);var Yt=Pn[jn],d1=[],Fb=function e(){ke.removeEventListener("DOMContentLoaded",e),ns=1,d1.map(function(t){return t()})},ns=!1;On&&(ns=(ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ke.readyState),ns||ke.addEventListener("DOMContentLoaded",Fb));function zb(e){On&&(ns?setTimeout(e,0):d1.push(e))}function ka(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,o=e.children,i=o===void 0?[]:o;return typeof e=="string"?c1(e):"<".concat(t," ").concat(Mb(r),">").concat(i.map(ka).join(""),"</").concat(t,">")}function dm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ub=function(t,n){return function(r,o,i,a){return t.call(n,r,o,i,a)}},Mu=function(t,n,r,o){var i=Object.keys(t),a=i.length,l=o!==void 0?Ub(n,o):n,s,c,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<a;s++)c=i[s],f=l(f,t[c],c,t);return f};function Bb(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((o&1023)<<10)+(i&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function sf(e){var t=Bb(e);return t.length===1?t[0].toString(16):null}function Wb(e,t){var n=e.length,r=e.charCodeAt(t),o;return r>=55296&&r<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function pm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],o=!!r.icon;return o?t[r.iconName]=r.icon:t[n]=r,t},{})}function uf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,i=pm(t);typeof Yt.hooks.addPack=="function"&&!o?Yt.hooks.addPack(e,pm(t)):Yt.styles[e]=M(M({},Yt.styles[e]||{}),i),e==="fas"&&uf("fa",t)}var Ja,qa,el,xo=Yt.styles,Hb=Yt.shims,Vb=(Ja={},Ve(Ja,xe,Object.values(sa[xe])),Ve(Ja,_e,Object.values(sa[_e])),Ja),Yd=null,p1={},h1={},m1={},g1={},v1={},Yb=(qa={},Ve(qa,xe,Object.keys(aa[xe])),Ve(qa,_e,Object.keys(aa[_e])),qa);function Gb(e){return~Pb.indexOf(e)}function Kb(e,t){var n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r===e&&o!==""&&!Gb(o)?o:null}var y1=function(){var t=function(i){return Mu(xo,function(a,l,s){return a[s]=Mu(l,i,{}),a},{})};p1=t(function(o,i,a){if(i[3]&&(o[i[3]]=a),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){o[s.toString(16)]=a})}return o}),h1=t(function(o,i,a){if(o[a]=a,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){o[s]=a})}return o}),v1=t(function(o,i,a){var l=i[2];return o[a]=a,l.forEach(function(s){o[s]=a}),o});var n="far"in xo||F.autoFetchSvg,r=Mu(Hb,function(o,i){var a=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(o.names[a]={prefix:l,iconName:s}),typeof a=="number"&&(o.unicodes[a.toString(16)]={prefix:l,iconName:s}),o},{names:{},unicodes:{}});m1=r.names,g1=r.unicodes,Yd=Is(F.styleDefault,{family:F.familyDefault})};_b(function(e){Yd=Is(e.styleDefault,{family:F.familyDefault})});y1();function Gd(e,t){return(p1[e]||{})[t]}function Qb(e,t){return(h1[e]||{})[t]}function Tr(e,t){return(v1[e]||{})[t]}function x1(e){return m1[e]||{prefix:null,iconName:null}}function Xb(e){var t=g1[e],n=Gd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ur(){return Yd}var Kd=function(){return{prefix:null,iconName:null,rest:[]}};function Is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?xe:n,o=aa[r][e],i=la[r][e]||la[r][o],a=e in Yt.styles?e:null;return i||a||null}var hm=(el={},Ve(el,xe,Object.keys(sa[xe])),Ve(el,_e,Object.keys(sa[_e])),el);function Ds(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,o=r===void 0?!1:r,i=(t={},Ve(t,xe,"".concat(F.cssPrefix,"-").concat(xe)),Ve(t,_e,"".concat(F.cssPrefix,"-").concat(_e)),t),a=null,l=xe;(e.includes(i[xe])||e.some(function(c){return hm[xe].includes(c)}))&&(l=xe),(e.includes(i[_e])||e.some(function(c){return hm[_e].includes(c)}))&&(l=_e);var s=e.reduce(function(c,f){var d=Kb(F.cssPrefix,f);if(xo[f]?(f=Vb[l].includes(f)?kb[l][f]:f,a=f,c.prefix=f):Yb[l].indexOf(f)>-1?(a=f,c.prefix=Is(f,{family:l})):d?c.iconName=d:f!==F.replacementClass&&f!==i[xe]&&f!==i[_e]&&c.rest.push(f),!o&&c.prefix&&c.iconName){var p=a==="fa"?x1(c.iconName):{},k=Tr(c.prefix,c.iconName);p.prefix&&(a=null),c.iconName=p.iconName||k||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!xo.far&&xo.fas&&!F.autoFetchSvg&&(c.prefix="fas")}return c},Kd());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===_e&&(xo.fass||F.autoFetchSvg)&&(s.prefix="fass",s.iconName=Tr(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=ur()||"fas"),s}var Zb=function(){function e(){ub(this,e),this.definitions={}}return cb(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=M(M({},n.definitions[l]||{}),a[l]),uf(l,a[l]);var s=sa[xe][l];s&&uf(s,a[l]),y1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(i){var a=o[i],l=a.prefix,s=a.iconName,c=a.icon,f=c[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=c)}),n[l][s]=c}),n}}]),e}(),mm=[],wo={},To={},Jb=Object.keys(To);function qb(e,t){var n=t.mixoutsTo;return mm=e,wo={},Object.keys(To).forEach(function(r){Jb.indexOf(r)===-1&&delete To[r]}),mm.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]=="function"&&(n[a]=o[a]),ts(o[a])==="object"&&Object.keys(o[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=o[a][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(a){wo[a]||(wo[a]=[]),wo[a].push(i[a])})}r.provides&&r.provides(To)}),n}function cf(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=wo[e]||[];return i.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Wr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=wo[e]||[];o.forEach(function(i){i.apply(null,n)})}function Rn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return To[e]?To[e].apply(null,t):void 0}function ff(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ur();if(t)return t=Tr(n,t)||t,dm(w1.definitions,n,t)||dm(Yt.styles,n,t)}var w1=new Zb,eC=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Wr("noAuto")},tC={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return On?(Wr("beforeI2svg",t),Rn("pseudoElements2svg",t),Rn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,zb(function(){rC({autoReplaceSvgRoot:n}),Wr("watch",t)})}},nC={icon:function(t){if(t===null)return null;if(ts(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Tr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Is(t[0]);return{prefix:r,iconName:Tr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(Sb))){var o=Ds(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||ur(),iconName:Tr(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var i=ur();return{prefix:i,iconName:Tr(i,t)||t}}}},Pt={noAuto:eC,config:F,dom:tC,parse:nC,library:w1,findIconDefinition:ff,toHtml:ka},rC=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ke:n;(Object.keys(Yt.styles).length>0||F.autoFetchSvg)&&On&&F.autoReplaceSvg&&Pt.dom.i2svg({node:r})};function $s(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ka(r)})}}),Object.defineProperty(e,"node",{get:function(){if(On){var r=ke.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function oC(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(Vd(a)&&n.found&&!r.found){var l=n.width,s=n.height,c={x:l/s/2,y:.5};o.style=As(M(M({},i),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function iC(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,i=e.symbol,a=i===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},o),{},{id:a}),children:r}]}]}function Qd(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,i=e.iconName,a=e.transform,l=e.symbol,s=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,k=p===void 0?!1:p,w=r.found?r:n,S=w.width,P=w.height,m=o==="fak",h=[F.replacementClass,i?"".concat(F.cssPrefix,"-").concat(i):""].filter(function(A){return d.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(d.classes).join(" "),v={children:[],attributes:M(M({},d.attributes),{},{"data-prefix":o,"data-icon":i,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(P)})},g=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/P*16*.0625,"em")}:{};k&&(v.attributes[Br]=""),s&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(f||ca())},children:[s]}),delete v.attributes.title);var E=M(M({},v),{},{prefix:o,iconName:i,main:n,mask:r,maskId:c,transform:a,symbol:l,styles:M(M({},g),d.styles)}),R=r.found&&n.found?Rn("generateAbstractMask",E)||{children:[],attributes:{}}:Rn("generateAbstractIcon",E)||{children:[],attributes:{}},C=R.children,O=R.attributes;return E.children=C,E.attributes=O,l?iC(E):oC(E)}function gm(e){var t=e.content,n=e.width,r=e.height,o=e.transform,i=e.title,a=e.extra,l=e.watchable,s=l===void 0?!1:l,c=M(M(M({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")});s&&(c[Br]="");var f=M({},a.styles);Vd(o)&&(f.transform=Ib({transform:o,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=As(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function aC(e){var t=e.content,n=e.title,r=e.extra,o=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=As(r.styles);i.length>0&&(o.style=i);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Au=Yt.styles;function df(e){var t=e[0],n=e[1],r=e.slice(4),o=Fd(r,1),i=o[0],a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Nr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Nr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Nr.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:a}}var lC={found:!1,width:512,height:512};function sC(e,t){!a1&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function pf(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=ur()),new Promise(function(r,o){if(Rn("missingIconAbstract"),n==="fa"){var i=x1(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Au[t]&&Au[t][e]){var a=Au[t][e];return r(df(a))}sC(e,t),r(M(M({},lC),{},{icon:F.showMissingIcons&&e?Rn("missingIconAbstract")||{}:{}}))})}var vm=function(){},hf=F.measurePerformance&&Ya&&Ya.mark&&Ya.measure?Ya:{mark:vm,measure:vm},Si='FA "6.4.2"',uC=function(t){return hf.mark("".concat(Si," ").concat(t," begins")),function(){return k1(t)}},k1=function(t){hf.mark("".concat(Si," ").concat(t," ends")),hf.measure("".concat(Si," ").concat(t),"".concat(Si," ").concat(t," begins"),"".concat(Si," ").concat(t," ends"))},Xd={begin:uC,end:k1},Cl=function(){};function ym(e){var t=e.getAttribute?e.getAttribute(Br):null;return typeof t=="string"}function cC(e){var t=e.getAttribute?e.getAttribute(Ud):null,n=e.getAttribute?e.getAttribute(Bd):null;return t&&n}function fC(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function dC(){if(F.autoReplaceSvg===!0)return El.replace;var e=El[F.autoReplaceSvg];return e||El.replace}function pC(e){return ke.createElementNS("http://www.w3.org/2000/svg",e)}function hC(e){return ke.createElement(e)}function S1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pC:hC:n;if(typeof e=="string")return ke.createTextNode(e);var o=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){o.setAttribute(a,e.attributes[a])});var i=e.children||[];return i.forEach(function(a){o.appendChild(S1(a,{ceFn:r}))}),o}function mC(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var El={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(o){n.parentNode.insertBefore(S1(o),n)}),n.getAttribute(Br)===null&&F.keepOriginalSource){var r=ke.createComment(mC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Hd(n).indexOf(F.replacementClass))return El.replace(t);var o=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===F.replacementClass||s.match(o)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var a=r.map(function(l){return ka(l)}).join(`
`);n.setAttribute(Br,""),n.innerHTML=a}};function xm(e){e()}function b1(e,t){var n=typeof t=="function"?t:Cl;if(e.length===0)n();else{var r=xm;F.mutateApproach===xb&&(r=sr.requestAnimationFrame||xm),r(function(){var o=dC(),i=Xd.begin("mutate");e.map(o),i(),n()})}}var Zd=!1;function C1(){Zd=!0}function mf(){Zd=!1}var rs=null;function wm(e){if(um&&F.observeMutations){var t=e.treeCallback,n=t===void 0?Cl:t,r=e.nodeCallback,o=r===void 0?Cl:r,i=e.pseudoElementsCallback,a=i===void 0?Cl:i,l=e.observeMutationsRoot,s=l===void 0?ke:l;rs=new um(function(c){if(!Zd){var f=ur();Zo(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ym(d.addedNodes[0])&&(F.searchPseudoElements&&a(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&F.searchPseudoElements&&a(d.target.parentNode),d.type==="attributes"&&ym(d.target)&&~jb.indexOf(d.attributeName))if(d.attributeName==="class"&&cC(d.target)){var p=Ds(Hd(d.target)),k=p.prefix,w=p.iconName;d.target.setAttribute(Ud,k||f),w&&d.target.setAttribute(Bd,w)}else fC(d.target)&&o(d.target)})}}),On&&rs.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gC(){rs&&rs.disconnect()}function vC(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,o){var i=o.split(":"),a=i[0],l=i.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function yC(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",o=Ds(Hd(e));return o.prefix||(o.prefix=ur()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=Qb(o.prefix,e.innerText)||Gd(o.prefix,sf(e.innerText))),!o.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function xC(e){var t=Zo(e.attributes).reduce(function(o,i){return o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||ca()):(t["aria-hidden"]="true",t.focusable="false")),t}function wC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:an,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function km(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yC(e),r=n.iconName,o=n.prefix,i=n.rest,a=xC(e),l=cf("parseNodeAttributes",{},e),s=t.styleParser?vC(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:an,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},l)}var kC=Yt.styles;function E1(e){var t=F.autoReplaceSvg==="nest"?km(e,{styleParser:!1}):km(e);return~t.extra.classes.indexOf(l1)?Rn("generateLayersText",e,t):Rn("generateSvgReplacementMutation",e,t)}var cr=new Set;Wd.map(function(e){cr.add("fa-".concat(e))});Object.keys(aa[xe]).map(cr.add.bind(cr));Object.keys(aa[_e]).map(cr.add.bind(cr));cr=xa(cr);function Sm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!On)return Promise.resolve();var n=ke.documentElement.classList,r=function(d){return n.add("".concat(cm,"-").concat(d))},o=function(d){return n.remove("".concat(cm,"-").concat(d))},i=F.autoFetchSvg?cr:Wd.map(function(f){return"fa-".concat(f)}).concat(Object.keys(kC));i.includes("fa")||i.push("fa");var a=[".".concat(l1,":not([").concat(Br,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Br,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=Zo(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),o("complete");else return Promise.resolve();var s=Xd.begin("onTree"),c=l.reduce(function(f,d){try{var p=E1(d);p&&f.push(p)}catch(k){a1||k.name==="MissingIcon"&&console.error(k)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){b1(p,function(){r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(p){s(),d(p)})})}function SC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;E1(e).then(function(n){n&&b1([n],t)})}function bC(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ff(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:ff(o||{})),e(r,M(M({},n),{},{mask:o}))}}var CC=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?an:r,i=n.symbol,a=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,k=n.titleId,w=k===void 0?null:k,S=n.classes,P=S===void 0?[]:S,m=n.attributes,h=m===void 0?{}:m,v=n.styles,g=v===void 0?{}:v;if(t){var E=t.prefix,R=t.iconName,C=t.icon;return $s(M({type:"icon"},t),function(){return Wr("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(p?h["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(w||ca()):(h["aria-hidden"]="true",h.focusable="false")),Qd({icons:{main:df(C),mask:s?df(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:R,transform:M(M({},an),o),symbol:a,title:p,maskId:f,titleId:w,extra:{attributes:h,styles:g,classes:P}})})}},EC={mixout:function(){return{icon:bC(CC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Sm,n.nodeCallback=SC,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,o=r===void 0?ke:r,i=n.callback,a=i===void 0?function(){}:i;return Sm(o,a)},t.generateSvgReplacementMutation=function(n,r){var o=r.iconName,i=r.title,a=r.titleId,l=r.prefix,s=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(k,w){Promise.all([pf(o,l),f.iconName?pf(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var P=Fd(S,2),m=P[0],h=P[1];k([n,Qd({icons:{main:m,mask:h},prefix:l,iconName:o,transform:s,symbol:c,maskId:d,title:i,titleId:a,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.transform,l=n.styles,s=As(l);s.length>0&&(o.style=s);var c;return Vd(a)&&(c=Rn("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:o}}}},jC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,i=o===void 0?[]:o;return $s({type:"layer"},function(){Wr("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(s){a=a.concat(s.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(xa(i)).join(" ")},children:a}]})}}}},PC={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.title,i=o===void 0?null:o,a=r.classes,l=a===void 0?[]:a,s=r.attributes,c=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return $s({type:"counter",content:n},function(){return Wr("beforeDOMElementCreation",{content:n,params:r}),aC({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(xa(l))}})})}}}},RC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,i=o===void 0?an:o,a=r.title,l=a===void 0?null:a,s=r.classes,c=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,p=r.styles,k=p===void 0?{}:p;return $s({type:"text",content:n},function(){return Wr("beforeDOMElementCreation",{content:n,params:r}),gm({content:n,transform:M(M({},an),i),title:l,extra:{attributes:d,styles:k,classes:["".concat(F.cssPrefix,"-layers-text")].concat(xa(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var o=r.title,i=r.transform,a=r.extra,l=null,s=null;if(r1){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/c,s=f.height/c}return F.autoA11y&&!o&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,gm({content:n.innerHTML,width:l,height:s,transform:i,title:o,extra:a,watchable:!0})])}}},NC=new RegExp('"',"ug"),bm=[1105920,1112319];function TC(e){var t=e.replace(NC,""),n=Wb(t,0),r=n>=bm[0]&&n<=bm[1],o=t.length===2?t[0]===t[1]:!1;return{value:sf(o?t[0]:t),isSecondary:r||o}}function Cm(e,t){var n="".concat(yb).concat(t.replace(":","-"));return new Promise(function(r,o){if(e.getAttribute(n)!==null)return r();var i=Zo(e.children),a=i.filter(function(C){return C.getAttribute(lf)===t})[0],l=sr.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(bb),c=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(a&&!s)return e.removeChild(a),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),p=~["Sharp"].indexOf(s[2])?_e:xe,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?la[p][s[2].toLowerCase()]:Cb[p][c],w=TC(d),S=w.value,P=w.isSecondary,m=s[0].startsWith("FontAwesome"),h=Gd(k,S),v=h;if(m){var g=Xb(S);g.iconName&&g.prefix&&(h=g.iconName,k=g.prefix)}if(h&&!P&&(!a||a.getAttribute(Ud)!==k||a.getAttribute(Bd)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var E=wC(),R=E.extra;R.attributes[lf]=t,pf(h,k).then(function(C){var O=Qd(M(M({},E),{},{icons:{main:C,mask:Kd()},prefix:k,iconName:v,extra:R,watchable:!0})),A=ke.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(A,e.firstChild):e.appendChild(A),A.outerHTML=O.map(function(z){return ka(z)}).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function _C(e){return Promise.all([Cm(e,"::before"),Cm(e,"::after")])}function OC(e){return e.parentNode!==document.head&&!~wb.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(lf)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Em(e){if(On)return new Promise(function(t,n){var r=Zo(e.querySelectorAll("*")).filter(OC).map(_C),o=Xd.begin("searchPseudoElements");C1(),Promise.all(r).then(function(){o(),mf(),t()}).catch(function(){o(),mf(),n()})})}var LC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Em,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?ke:r;F.searchPseudoElements&&Em(o)}}},jm=!1,MC={mixout:function(){return{dom:{unwatch:function(){C1(),jm=!0}}}},hooks:function(){return{bootstrap:function(){wm(cf("mutationObserverCallbacks",{}))},noAuto:function(){gC()},watch:function(n){var r=n.observeMutationsRoot;jm?mf():wm(cf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pm=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,o){var i=o.toLowerCase().split("-"),a=i[0],l=i.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},AC={mixout:function(){return{parse:{transform:function(n){return Pm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=Pm(o)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,i=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(o.x*32,", ").concat(o.y*32,") "),c="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),f="rotate(".concat(o.rotate," 0 0)"),d={transform:"".concat(s," ").concat(c," ").concat(f)},p={transform:"translate(".concat(a/2*-1," -256)")},k={outer:l,inner:d,path:p};return{tag:"g",attributes:M({},k.outer),children:[{tag:"g",attributes:M({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),k.path)}]}]}}}},Iu={x:0,y:0,width:"100%",height:"100%"};function Rm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function IC(e){return e.tag==="g"?e.children:[e]}var DC={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),i=o?Ds(o.split(" ").map(function(a){return a.trim()})):Kd();return i.prefix||(i.prefix=ur()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,o=n.attributes,i=n.main,a=n.mask,l=n.maskId,s=n.transform,c=i.width,f=i.icon,d=a.width,p=a.icon,k=Ab({transform:s,containerWidth:d,iconWidth:c}),w={tag:"rect",attributes:M(M({},Iu),{},{fill:"white"})},S=f.children?{children:f.children.map(Rm)}:{},P={tag:"g",attributes:M({},k.inner),children:[Rm(M({tag:f.tag,attributes:M(M({},f.attributes),k.path)},S))]},m={tag:"g",attributes:M({},k.outer),children:[P]},h="mask-".concat(l||ca()),v="clip-".concat(l||ca()),g={tag:"mask",attributes:M(M({},Iu),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,m]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:IC(p)},g]};return r.push(E,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Iu)}),{children:r,attributes:o}}}},$C={provides:function(t){var n=!1;sr.matchMedia&&(n=sr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=M(M({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:M(M({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:M(M({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:M(M({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},FC={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),i=o===null?!1:o===""?!0:o;return n.symbol=i,n}}}},zC=[$b,EC,jC,PC,RC,LC,MC,AC,DC,$C,FC];qb(zC,{mixoutsTo:Pt});Pt.noAuto;Pt.config;Pt.library;Pt.dom;var gf=Pt.parse;Pt.findIconDefinition;Pt.toHtml;var UC=Pt.icon;Pt.layer;Pt.text;Pt.counter;var j1={exports:{}},BC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",WC=BC,HC=WC;function P1(){}function R1(){}R1.resetWarningCache=P1;var VC=function(){function e(r,o,i,a,l,s){if(s!==HC){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:R1,resetWarningCache:P1};return n.PropTypes=n,n};j1.exports=VC();var YC=j1.exports;const W=us(YC);function Nm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Qn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nm(Object(n),!0).forEach(function(r){ko(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function os(e){"@babel/helpers - typeof";return os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},os(e)}function ko(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GC(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function KC(e,t){if(e==null)return{};var n=GC(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vf(e){return QC(e)||XC(e)||ZC(e)||JC()}function QC(e){if(Array.isArray(e))return yf(e)}function XC(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ZC(e,t){if(e){if(typeof e=="string")return yf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yf(e,t)}}function yf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function JC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qC(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,l=e.flash,s=e.spin,c=e.spinPulse,f=e.spinReverse,d=e.pulse,p=e.fixedWidth,k=e.inverse,w=e.border,S=e.listItem,P=e.flip,m=e.size,h=e.rotation,v=e.pull,g=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":k,"fa-border":w,"fa-li":S,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},ko(t,"fa-".concat(m),typeof m<"u"&&m!==null),ko(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ko(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),ko(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map(function(E){return g[E]?E:null}).filter(function(E){return E})}function eE(e){return e=e-0,e===e}function N1(e){return eE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var tE=["style"];function nE(e){return e.charAt(0).toUpperCase()+e.slice(1)}function rE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=N1(n.slice(0,r)),i=n.slice(r+1).trim();return o.startsWith("webkit")?t[nE(o)]=i:t[o]=i,t},{})}function T1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return T1(e,s)}),o=Object.keys(t.attributes||{}).reduce(function(s,c){var f=t.attributes[c];switch(c){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=rE(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?s.attrs[c.toLowerCase()]=f:s.attrs[N1(c)]=f}return s},{attrs:{}}),i=n.style,a=i===void 0?{}:i,l=KC(n,tE);return o.attrs.style=Qn(Qn({},o.attrs.style),a),e.apply(void 0,[t.tag,Qn(Qn({},o.attrs),l)].concat(vf(r)))}var _1=!1;try{_1=!0}catch{}function oE(){if(!_1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Tm(e){if(e&&os(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(gf.icon)return gf.icon(e);if(e===null)return null;if(e&&os(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Du(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ko({},e,t):{}}var pt=De.forwardRef(function(e,t){var n=e.icon,r=e.mask,o=e.symbol,i=e.className,a=e.title,l=e.titleId,s=e.maskId,c=Tm(n),f=Du("classes",[].concat(vf(qC(e)),vf(i.split(" ")))),d=Du("transform",typeof e.transform=="string"?gf.transform(e.transform):e.transform),p=Du("mask",Tm(r)),k=UC(c,Qn(Qn(Qn(Qn({},f),d),p),{},{symbol:o,title:a,titleId:l,maskId:s}));if(!k)return oE("Could not find icon",c),null;var w=k.abstract,S={ref:t};return Object.keys(e).forEach(function(P){pt.defaultProps.hasOwnProperty(P)||(S[P]=e[P])}),iE(w[0],S)});pt.displayName="FontAwesomeIcon";pt.propTypes={beat:W.bool,border:W.bool,beatFade:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};pt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var iE=T1.bind(null,De.createElement);const aE=y.div`
    padding-top: 11px;
    width: 120px;
    position: relative;
`,lE=y.div`
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
`,sE=y.span`
    font-size: 16px;
`,uE=y(pt)`
    font-size: 15px;
    transition: 0.4s;

    &:hover {
        color: var(--blue);
    }

    &.active {
        transform: rotate(180deg);
    }
`,cE=y.div`
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
`;var fE={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},O1={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},L1={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},dE={prefix:"fas",iconName:"house-chimney",icon:[576,512,[63499,"home-lg"],"e3af","M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"]},pE={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},hE={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},mE={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},gE={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},vE=gE;function Fs({setStatus:e}){const[t,n]=x.useState(!1),[r,o]=x.useState("Sort");return x.useEffect(()=>{e(r)}),u.jsxs(aE,{onClick:()=>{n(!t)},children:[u.jsxs(lE,{children:[u.jsx(sE,{children:r}),u.jsx(uE,{icon:hE,className:`${t?"active":"inactive"}`})]}),u.jsxs(cE,{className:`${t?"active":"inactive"}`,children:[u.jsx("div",{onClick:()=>{o("Top")},children:"Top"}),u.jsx("div",{onClick:()=>{o("Recent")},children:"Recent"})]})]})}Fs.propTypes={setStatus:W.func};const yE=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`,xE=y.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`,wE=y.div`
    font-size: 35px;
    font-weight: 600;
`,kE=y.div`
    color: var(--white);
`,SE=y.div`
    color: var(--blue);
    padding-left: 25px;
`,bE=y.div`
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
`,tl=y(pt)`
    font-size: 22px;
`,gi=y(N0)`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--grey);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    
    &:hover {
        color: var(--white);
    }
`,CE=y.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: var(--white);
`;var M1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var l=n.apply(null,i);l&&r.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var s in i)t.call(i,s)&&i[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(M1);var EE=M1.exports;const se=us(EE),jE=["as","disabled"];function PE(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function RE(e){return!e||e.trim()==="#"}function A1({tagName:e,disabled:t,href:n,target:r,rel:o,role:i,onClick:a,tabIndex:l=0,type:s}){e||(n!=null||r!=null||o!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:s||"button",disabled:t},c];const f=p=>{if((t||e==="a"&&RE(n))&&p.preventDefault(),t){p.stopPropagation();return}a==null||a(p)},d=p=>{p.key===" "&&(p.preventDefault(),f(p))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:l,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:f,onKeyDown:d},c]}const NE=x.forwardRef((e,t)=>{let{as:n,disabled:r}=e,o=PE(e,jE);const[i,{tagName:a}]=A1(Object.assign({tagName:n,disabled:r},o));return u.jsx(a,Object.assign({},o,i,{ref:t}))});NE.displayName="Button";const TE=["xxl","xl","lg","md","sm","xs"],_E="xs",zs=x.createContext({prefixes:{},breakpoints:TE,minBreakpoint:_E});function Be(e,t){const{prefixes:n}=x.useContext(zs);return e||n[t]||t}function I1(){const{breakpoints:e}=x.useContext(zs);return e}function D1(){const{minBreakpoint:e}=x.useContext(zs);return e}function OE(){const{dir:e}=x.useContext(zs);return e==="rtl"}const $1=x.forwardRef(({as:e,bsPrefix:t,variant:n="primary",size:r,active:o=!1,disabled:i=!1,className:a,...l},s)=>{const c=Be(t,"btn"),[f,{tagName:d}]=A1({tagName:e,disabled:i,...l}),p=d;return u.jsx(p,{...f,...l,ref:s,disabled:i,className:se(a,c,o&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,l.href&&i&&"disabled")})});$1.displayName="Button";const is=$1,Jo=!!(typeof window<"u"&&window.document&&window.document.createElement);var xf=!1,wf=!1;try{var $u={get passive(){return xf=!0},get once(){return wf=xf=!0}};Jo&&(window.addEventListener("test",$u,$u),window.removeEventListener("test",$u,!0))}catch{}function F1(e,t,n,r){if(r&&typeof r!="boolean"&&!wf){var o=r.once,i=r.capture,a=n;!wf&&o&&(a=n.__once||function l(s){this.removeEventListener(t,l,i),n.call(this,s)},n.__once=a),e.addEventListener(t,a,xf?r:i)}e.addEventListener(t,n,r)}function Us(e){return e&&e.ownerDocument||document}function kf(e,t,n,r){var o=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}var nl;function _m(e){if((!nl&&nl!==0||e)&&Jo){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),nl=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return nl}function LE(){return x.useState(null)}function ME(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e},[e]),t}function on(e){const t=ME(e);return x.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const Om=e=>!e||typeof e=="function"?e:t=>{e.current=t};function AE(e,t){const n=Om(e),r=Om(t);return o=>{n&&n(o),r&&r(o)}}function Bs(e,t){return x.useMemo(()=>AE(e,t),[e,t])}function IE(e){const t=x.useRef(e);return t.current=e,t}function z1(e){const t=IE(e);x.useEffect(()=>()=>t.current(),[])}function DE(e){var t=Us(e);return t&&t.defaultView||window}function $E(e,t){return DE(e).getComputedStyle(e,t)}var FE=/([A-Z])/g;function zE(e){return e.replace(FE,"-$1").toLowerCase()}var UE=/^ms-/;function rl(e){return zE(e).replace(UE,"-ms-")}var BE=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function WE(e){return!!(e&&BE.test(e))}function Mr(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(rl(t))||$E(e).getPropertyValue(rl(t));Object.keys(t).forEach(function(o){var i=t[o];!i&&i!==0?e.style.removeProperty(rl(o)):WE(o)?r+=o+"("+i+") ":n+=rl(o)+": "+i+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}function as(e,t,n,r){return F1(e,t,n,r),function(){kf(e,t,n,r)}}function HE(e,t,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}function VE(e){var t=Mr(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function YE(e,t,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||HE(e,"transitionend",!0)},t+n),i=as(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),i()}}function U1(e,t,n,r){n==null&&(n=VE(e)||0);var o=YE(e,n,r),i=as(e,"transitionend",t);return function(){o(),i()}}function Fu(e){e===void 0&&(e=Us());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Lm(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function GE(){const e=x.useRef(!0),t=x.useRef(()=>e.current);return x.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function KE(e){const t=x.useRef(null);return x.useEffect(()=>{t.current=e}),t.current}const QE="data-rr-ui-";function XE(e){return`${QE}${e}`}function ZE(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Mm=XE("modal-open");class JE{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return ZE(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(Mr(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(Mm,""),Mr(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Mm),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Jd=JE,B1=x.createContext(Jo?window:void 0);B1.Provider;function qd(){return x.useContext(B1)}const zu=(e,t)=>Jo?e==null?(t||Us()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function qE(e,t){const n=qd(),[r,o]=x.useState(()=>zu(e,n==null?void 0:n.document));if(!r){const i=zu(e);i&&o(i)}return x.useEffect(()=>{t&&r&&t(r)},[t,r]),x.useEffect(()=>{const i=zu(e);i!==r&&o(i)},[e,r]),r}const ej=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",tj=typeof document<"u",Am=tj||ej?x.useLayoutEffect:x.useEffect;function nj({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){const i=x.useRef(null),a=x.useRef(t),l=on(n);x.useEffect(()=>{t?a.current=!0:l(i.current)},[t,l]);const s=Bs(i,e.ref),c=x.cloneElement(e,{ref:s});return t?c:o||!a.current&&r?null:c}function rj({in:e,onTransition:t}){const n=x.useRef(null),r=x.useRef(!0),o=on(t);return Am(()=>{if(!n.current)return;let i=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>i}),()=>{i=!0}},[e,o]),Am(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function oj({children:e,in:t,onExited:n,onEntered:r,transition:o}){const[i,a]=x.useState(!t);t&&i&&a(!1);const l=rj({in:!!t,onTransition:c=>{const f=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(a(!0),n==null||n(c.element)))};Promise.resolve(o(c)).then(f,d=>{throw c.in||a(!0),d})}}),s=Bs(l,e.ref);return i&&!t?null:x.cloneElement(e,{ref:s})}function Im(e,t,n){return e?u.jsx(e,Object.assign({},n)):t?u.jsx(oj,Object.assign({},n,{transition:t})):u.jsx(nj,Object.assign({},n))}function ij(e){return e.code==="Escape"||e.keyCode===27}const aj=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function lj(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let Uu;function sj(e){return Uu||(Uu=new Jd({ownerDocument:e==null?void 0:e.document})),Uu}function uj(e){const t=qd(),n=e||sj(t),r=x.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:x.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:x.useCallback(o=>{r.current.backdrop=o},[])})}const W1=x.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:i,children:a,backdrop:l=!0,keyboard:s=!0,onBackdropClick:c,onEscapeKeyDown:f,transition:d,runTransition:p,backdropTransition:k,runBackdropTransition:w,autoFocus:S=!0,enforceFocus:P=!0,restoreFocus:m=!0,restoreFocusOptions:h,renderDialog:v,renderBackdrop:g=ge=>u.jsx("div",Object.assign({},ge)),manager:E,container:R,onShow:C,onHide:O=()=>{},onExit:A,onExited:z,onExiting:Z,onEnter:be,onEntering:pe,onEntered:at}=e,ie=lj(e,aj);const Oe=qd(),he=qE(R),T=uj(E),D=GE(),$=KE(n),[Q,Y]=x.useState(!n),ae=x.useRef(null);x.useImperativeHandle(t,()=>T,[T]),Jo&&!$&&n&&(ae.current=Fu(Oe==null?void 0:Oe.document)),n&&Q&&Y(!1);const ue=on(()=>{if(T.add(),Le.current=as(document,"keydown",pn),me.current=as(document,"focus",()=>setTimeout($e),!0),C&&C(),S){var ge,Xr;const gr=Fu((ge=(Xr=T.dialog)==null?void 0:Xr.ownerDocument)!=null?ge:Oe==null?void 0:Oe.document);T.dialog&&gr&&!Lm(T.dialog,gr)&&(ae.current=gr,T.dialog.focus())}}),Ye=on(()=>{if(T.remove(),Le.current==null||Le.current(),me.current==null||me.current(),m){var ge;(ge=ae.current)==null||ge.focus==null||ge.focus(h),ae.current=null}});x.useEffect(()=>{!n||!he||ue()},[n,he,ue]),x.useEffect(()=>{Q&&Ye()},[Q,Ye]),z1(()=>{Ye()});const $e=on(()=>{if(!P||!D()||!T.isTopModal())return;const ge=Fu(Oe==null?void 0:Oe.document);T.dialog&&ge&&!Lm(T.dialog,ge)&&T.dialog.focus()}),Ge=on(ge=>{ge.target===ge.currentTarget&&(c==null||c(ge),l===!0&&O())}),pn=on(ge=>{s&&ij(ge)&&T.isTopModal()&&(f==null||f(ge),ge.defaultPrevented||O())}),me=x.useRef(),Le=x.useRef(),Mn=(...ge)=>{Y(!0),z==null||z(...ge)};if(!he)return null;const Qr=Object.assign({role:r,ref:T.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ie,{style:i,className:o,tabIndex:-1});let xt=v?v(Qr):u.jsx("div",Object.assign({},Qr,{children:x.cloneElement(a,{role:"document"})}));xt=Im(d,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:A,onExiting:Z,onExited:Mn,onEnter:be,onEntering:pe,onEntered:at,children:xt});let hn=null;return l&&(hn=g({ref:T.setBackdropRef,onClick:Ge}),hn=Im(k,w,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:hn})),u.jsx(u.Fragment,{children:jr.createPortal(u.jsxs(u.Fragment,{children:[hn,xt]}),he)})});W1.displayName="Modal";const cj=Object.assign(W1,{Manager:Jd});function fj(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function dj(e,t){e.classList?e.classList.add(t):fj(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}var pj=Function.prototype.bind.call(Function.prototype.call,[].slice);function to(e,t){return pj(e.querySelectorAll(t))}function Dm(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function hj(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Dm(e.className,t):e.setAttribute("class",Dm(e.className&&e.className.baseVal||"",t))}const no={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class mj extends Jd{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,Mr(n,{[t]:`${parseFloat(Mr(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],Mr(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(dj(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";to(n,no.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,t.scrollBarWidth)),to(n,no.STICKY_CONTENT).forEach(i=>this.adjustAndStore(o,i,-t.scrollBarWidth)),to(n,no.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(o,i,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();hj(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";to(n,no.FIXED_CONTENT).forEach(i=>this.restore(r,i)),to(n,no.STICKY_CONTENT).forEach(i=>this.restore(o,i)),to(n,no.NAVBAR_TOGGLER).forEach(i=>this.restore(o,i))}}let Bu;function gj(e){return Bu||(Bu=new mj(e)),Bu}function vj(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Sf(e,t){return Sf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Sf(e,t)}function yj(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Sf(e,t)}const $m={disabled:!1},H1=De.createContext(null);var xj=function(t){return t.scrollTop},bi="unmounted",kr="exited",Wn="entering",Sr="entered",bf="exiting",Ln=function(e){yj(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,l=a&&!a.isMounting?r.enter:r.appear,s;return i.appearStatus=null,r.in?l?(s=kr,i.appearStatus=Wn):s=Sr:r.unmountOnExit||r.mountOnEnter?s=bi:s=kr,i.state={status:s},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===bi?{status:kr}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==Wn&&a!==Sr&&(i=Wn):(a===Wn||a===Sr)&&(i=bf)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,l;return i=a=l=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,l=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:l}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Wn){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:jr.findDOMNode(this);a&&xj(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===kr&&this.setState({status:bi})},n.performEnter=function(o){var i=this,a=this.props.enter,l=this.context?this.context.isMounting:o,s=this.props.nodeRef?[l]:[jr.findDOMNode(this),l],c=s[0],f=s[1],d=this.getTimeouts(),p=l?d.appear:d.enter;if(!o&&!a||$m.disabled){this.safeSetState({status:Sr},function(){i.props.onEntered(c)});return}this.props.onEnter(c,f),this.safeSetState({status:Wn},function(){i.props.onEntering(c,f),i.onTransitionEnd(p,function(){i.safeSetState({status:Sr},function(){i.props.onEntered(c,f)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),l=this.props.nodeRef?void 0:jr.findDOMNode(this);if(!i||$m.disabled){this.safeSetState({status:kr},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:bf},function(){o.props.onExiting(l),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:kr},function(){o.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(l){a&&(a=!1,i.nextCallback=null,o(l))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:jr.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!a||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],c=s[0],f=s[1];this.props.addEndListener(c,f)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===bi)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var l=vj(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return De.createElement(H1.Provider,{value:null},typeof a=="function"?a(o,l):De.cloneElement(De.Children.only(a),l))},t}(De.Component);Ln.contextType=H1;Ln.propTypes={};function ro(){}Ln.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ro,onEntering:ro,onEntered:ro,onExit:ro,onExiting:ro,onExited:ro};Ln.UNMOUNTED=bi;Ln.EXITED=kr;Ln.ENTERING=Wn;Ln.ENTERED=Sr;Ln.EXITING=bf;const wj=Ln;function Fm(e,t){const n=Mr(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function kj(e,t){const n=Fm(e,"transitionDuration"),r=Fm(e,"transitionDelay"),o=U1(e,i=>{i.target===e&&(o(),t(i))},n+r)}function Sj(e){e.offsetHeight}function bj(e){return e&&"setState"in e?jr.findDOMNode(e):e??null}const Cj=De.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:i,addEndListener:a,children:l,childRef:s,...c},f)=>{const d=x.useRef(null),p=Bs(d,s),k=R=>{p(bj(R))},w=R=>C=>{R&&d.current&&R(d.current,C)},S=x.useCallback(w(e),[e]),P=x.useCallback(w(t),[t]),m=x.useCallback(w(n),[n]),h=x.useCallback(w(r),[r]),v=x.useCallback(w(o),[o]),g=x.useCallback(w(i),[i]),E=x.useCallback(w(a),[a]);return u.jsx(wj,{ref:f,...c,onEnter:S,onEntered:m,onEntering:P,onExit:h,onExited:g,onExiting:v,addEndListener:E,nodeRef:d,children:typeof l=="function"?(R,C)=>l(R,{...C,ref:k}):De.cloneElement(l,{ref:k})})}),Ej=Cj,jj={[Wn]:"show",[Sr]:"show"},V1=x.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},i)=>{const a={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},l=x.useCallback((s,c)=>{Sj(s),r==null||r(s,c)},[r]);return u.jsx(Ej,{ref:i,addEndListener:kj,...a,onEnter:l,childRef:t.ref,children:(s,c)=>x.cloneElement(t,{...c,className:se("fade",e,t.props.className,jj[s],n[s])})})});V1.displayName="Fade";const Y1=V1,G1=x.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Be(t,"modal-body"),u.jsx(n,{ref:o,className:se(e,t),...r})));G1.displayName="ModalBody";const Pj=G1,Rj=x.createContext({onHide(){}}),K1=Rj,Q1=x.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:r,size:o,fullscreen:i,children:a,scrollable:l,...s},c)=>{e=Be(e,"modal");const f=`${e}-dialog`,d=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return u.jsx("div",{...s,ref:c,className:se(f,t,o&&`${e}-${o}`,r&&`${f}-centered`,l&&`${f}-scrollable`,i&&d),children:u.jsx("div",{className:se(`${e}-content`,n),children:a})})});Q1.displayName="ModalDialog";const X1=Q1,Z1=x.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Be(t,"modal-footer"),u.jsx(n,{ref:o,className:se(e,t),...r})));Z1.displayName="ModalFooter";const Nj=Z1,Tj={"aria-label":W.string,onClick:W.func,variant:W.oneOf(["white"])},ep=x.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},o)=>u.jsx("button",{ref:o,type:"button",className:se("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));ep.displayName="CloseButton";ep.propTypes=Tj;const _j=ep,Oj=x.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...i},a)=>{const l=x.useContext(K1),s=on(()=>{l==null||l.onHide(),r==null||r()});return u.jsxs("div",{ref:a,...i,children:[o,n&&u.jsx(_j,{"aria-label":e,variant:t,onClick:s})]})}),Lj=Oj,J1=x.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},i)=>(e=Be(e,"modal-header"),u.jsx(Lj,{ref:i,...o,className:se(t,e),closeLabel:n,closeButton:r})));J1.displayName="ModalHeader";const Mj=J1,Aj=e=>x.forwardRef((t,n)=>u.jsx("div",{...t,ref:n,className:se(t.className,e)})),Ij=Aj("h4"),q1=x.forwardRef(({className:e,bsPrefix:t,as:n=Ij,...r},o)=>(t=Be(t,"modal-title"),u.jsx(n,{ref:o,className:se(e,t),...r})));q1.displayName="ModalTitle";const Dj=q1;function $j(e){return u.jsx(Y1,{...e,timeout:null})}function Fj(e){return u.jsx(Y1,{...e,timeout:null})}const ey=x.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:o,children:i,dialogAs:a=X1,"aria-labelledby":l,"aria-describedby":s,"aria-label":c,show:f=!1,animation:d=!0,backdrop:p=!0,keyboard:k=!0,onEscapeKeyDown:w,onShow:S,onHide:P,container:m,autoFocus:h=!0,enforceFocus:v=!0,restoreFocus:g=!0,restoreFocusOptions:E,onEntered:R,onExit:C,onExiting:O,onEnter:A,onEntering:z,onExited:Z,backdropClassName:be,manager:pe,...at},ie)=>{const[Oe,he]=x.useState({}),[T,D]=x.useState(!1),$=x.useRef(!1),Q=x.useRef(!1),Y=x.useRef(null),[ae,ue]=LE(),Ye=Bs(ie,ue),$e=on(P),Ge=OE();e=Be(e,"modal");const pn=x.useMemo(()=>({onHide:$e}),[$e]);function me(){return pe||gj({isRTL:Ge})}function Le(ee){if(!Jo)return;const In=me().getScrollbarWidth()>0,$t=ee.scrollHeight>Us(ee).documentElement.clientHeight;he({paddingRight:In&&!$t?_m():void 0,paddingLeft:!In&&$t?_m():void 0})}const Mn=on(()=>{ae&&Le(ae.dialog)});z1(()=>{kf(window,"resize",Mn),Y.current==null||Y.current()});const Qr=()=>{$.current=!0},xt=ee=>{$.current&&ae&&ee.target===ae.dialog&&(Q.current=!0),$.current=!1},hn=()=>{D(!0),Y.current=U1(ae.dialog,()=>{D(!1)})},ge=ee=>{ee.target===ee.currentTarget&&hn()},Xr=ee=>{if(p==="static"){ge(ee);return}if(Q.current||ee.target!==ee.currentTarget){Q.current=!1;return}P==null||P()},gr=ee=>{k?w==null||w(ee):(ee.preventDefault(),p==="static"&&hn())},Gs=(ee,In)=>{ee&&Le(ee),A==null||A(ee,In)},vr=ee=>{Y.current==null||Y.current(),C==null||C(ee)},Ca=(ee,In)=>{z==null||z(ee,In),F1(window,"resize",Mn)},ti=ee=>{ee&&(ee.style.display=""),Z==null||Z(ee),kf(window,"resize",Mn)},Jt=x.useCallback(ee=>u.jsx("div",{...ee,className:se(`${e}-backdrop`,be,!d&&"show")}),[d,be,e]),An={...n,...Oe};An.display="block";const Ea=ee=>u.jsx("div",{role:"dialog",...ee,style:An,className:se(t,e,T&&`${e}-static`,!d&&"show"),onClick:p?Xr:void 0,onMouseUp:xt,"aria-label":c,"aria-labelledby":l,"aria-describedby":s,children:u.jsx(a,{...at,onMouseDown:Qr,className:r,contentClassName:o,children:i})});return u.jsx(K1.Provider,{value:pn,children:u.jsx(cj,{show:f,ref:Ye,backdrop:p,container:m,keyboard:!0,autoFocus:h,enforceFocus:v,restoreFocus:g,restoreFocusOptions:E,onEscapeKeyDown:gr,onShow:S,onHide:P,onEnter:Gs,onEntering:Ca,onEntered:R,onExit:vr,onExiting:O,onExited:ti,manager:me(),transition:d?$j:void 0,backdropTransition:d?Fj:void 0,renderBackdrop:Jt,renderDialog:Ea})})});ey.displayName="Modal";const $i=Object.assign(ey,{Body:Pj,Header:Mj,Title:Dj,Footer:Nj,Dialog:X1,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),zj={type:W.string,tooltip:W.bool,as:W.elementType},tp=x.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:r=!1,...o},i)=>u.jsx(e,{...o,ref:i,className:se(t,`${n}-${r?"tooltip":"feedback"}`)}));tp.displayName="Feedback";tp.propTypes=zj;const ty=tp,Uj=x.createContext({}),Nn=Uj,ny=x.forwardRef(({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:o=!1,isInvalid:i=!1,as:a="input",...l},s)=>{const{controlId:c}=x.useContext(Nn);return t=Be(t,"form-check-input"),u.jsx(a,{...l,ref:s,type:r,id:e||c,className:se(n,t,o&&"is-valid",i&&"is-invalid")})});ny.displayName="FormCheckInput";const ry=ny,oy=x.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...r},o)=>{const{controlId:i}=x.useContext(Nn);return e=Be(e,"form-check-label"),u.jsx("label",{...r,ref:o,htmlFor:n||i,className:se(t,e)})});oy.displayName="FormCheckLabel";const Cf=oy;function Bj(e,t){return x.Children.toArray(e).some(n=>x.isValidElement(n)&&n.type===t)}const iy=x.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:o=!1,disabled:i=!1,isValid:a=!1,isInvalid:l=!1,feedbackTooltip:s=!1,feedback:c,feedbackType:f,className:d,style:p,title:k="",type:w="checkbox",label:S,children:P,as:m="input",...h},v)=>{t=Be(t,"form-check"),n=Be(n,"form-switch");const{controlId:g}=x.useContext(Nn),E=x.useMemo(()=>({controlId:e||g}),[g,e]),R=!P&&S!=null&&S!==!1||Bj(P,Cf),C=u.jsx(ry,{...h,type:w==="switch"?"checkbox":w,ref:v,isValid:a,isInvalid:l,disabled:i,as:m});return u.jsx(Nn.Provider,{value:E,children:u.jsx("div",{style:p,className:se(d,R&&t,r&&`${t}-inline`,o&&`${t}-reverse`,w==="switch"&&n),children:P||u.jsxs(u.Fragment,{children:[C,R&&u.jsx(Cf,{title:k,children:S}),c&&u.jsx(ty,{type:f,tooltip:s,children:c})]})})})});iy.displayName="FormCheck";const ls=Object.assign(iy,{Input:ry,Label:Cf}),ay=x.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:r,id:o,className:i,isValid:a=!1,isInvalid:l=!1,plaintext:s,readOnly:c,as:f="input",...d},p)=>{const{controlId:k}=x.useContext(Nn);return e=Be(e,"form-control"),u.jsx(f,{...d,type:t,size:r,ref:p,readOnly:c,id:o||k,className:se(i,s?`${e}-plaintext`:e,n&&`${e}-${n}`,t==="color"&&`${e}-color`,a&&"is-valid",l&&"is-invalid")})});ay.displayName="FormControl";const Wj=Object.assign(ay,{Feedback:ty}),ly=x.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Be(t,"form-floating"),u.jsx(n,{ref:o,className:se(e,t),...r})));ly.displayName="FormFloating";const Hj=ly,sy=x.forwardRef(({controlId:e,as:t="div",...n},r)=>{const o=x.useMemo(()=>({controlId:e}),[e]);return u.jsx(Nn.Provider,{value:o,children:u.jsx(t,{...n,ref:r})})});sy.displayName="FormGroup";const uy=sy;function Vj({as:e,bsPrefix:t,className:n,...r}){t=Be(t,"col");const o=I1(),i=D1(),a=[],l=[];return o.forEach(s=>{const c=r[s];delete r[s];let f,d,p;typeof c=="object"&&c!=null?{span:f,offset:d,order:p}=c:f=c;const k=s!==i?`-${s}`:"";f&&a.push(f===!0?`${t}${k}`:`${t}${k}-${f}`),p!=null&&l.push(`order${k}-${p}`),d!=null&&l.push(`offset${k}-${d}`)}),[{...r,className:se(n,...a,...l)},{as:e,bsPrefix:t,spans:a}]}const cy=x.forwardRef((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:i,spans:a}]=Vj(e);return u.jsx(o,{...r,ref:t,className:se(n,!a.length&&i)})});cy.displayName="Col";const Yn=cy,fy=x.forwardRef(({as:e="label",bsPrefix:t,column:n=!1,visuallyHidden:r=!1,className:o,htmlFor:i,...a},l)=>{const{controlId:s}=x.useContext(Nn);t=Be(t,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const f=se(o,t,r&&"visually-hidden",n&&c);return i=i||s,n?u.jsx(Yn,{ref:l,as:"label",className:f,htmlFor:i,...a}):u.jsx(e,{ref:l,className:f,htmlFor:i,...a})});fy.displayName="FormLabel";const Yj=fy,dy=x.forwardRef(({bsPrefix:e,className:t,id:n,...r},o)=>{const{controlId:i}=x.useContext(Nn);return e=Be(e,"form-range"),u.jsx("input",{...r,type:"range",ref:o,className:se(t,e),id:n||i})});dy.displayName="FormRange";const Gj=dy,py=x.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:r,isValid:o=!1,isInvalid:i=!1,id:a,...l},s)=>{const{controlId:c}=x.useContext(Nn);return e=Be(e,"form-select"),u.jsx("select",{...l,size:n,ref:s,className:se(r,e,t&&`${e}-${t}`,o&&"is-valid",i&&"is-invalid"),id:a||c})});py.displayName="FormSelect";const Kj=py,hy=x.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:r,...o},i)=>(e=Be(e,"form-text"),u.jsx(n,{...o,ref:i,className:se(t,e,r&&"text-muted")})));hy.displayName="FormText";const Qj=hy,my=x.forwardRef((e,t)=>u.jsx(ls,{...e,ref:t,type:"switch"}));my.displayName="Switch";const Xj=Object.assign(my,{Input:ls.Input,Label:ls.Label}),gy=x.forwardRef(({bsPrefix:e,className:t,children:n,controlId:r,label:o,...i},a)=>(e=Be(e,"form-floating"),u.jsxs(uy,{ref:a,className:se(t,e),controlId:r,...i,children:[n,u.jsx("label",{htmlFor:r,children:o})]})));gy.displayName="FloatingLabel";const Zj=gy,Jj={_ref:W.any,validated:W.bool,as:W.elementType},np=x.forwardRef(({className:e,validated:t,as:n="form",...r},o)=>u.jsx(n,{...r,ref:o,className:se(e,t&&"was-validated")}));np.displayName="Form";np.propTypes=Jj;const Bt=Object.assign(np,{Group:uy,Control:Wj,Floating:Hj,Check:ls,Switch:Xj,Label:Yj,Text:Qj,Range:Gj,Select:Kj,FloatingLabel:Zj}),vy=x.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const i=Be(e,"row"),a=I1(),l=D1(),s=`${i}-cols`,c=[];return a.forEach(f=>{const d=r[f];delete r[f];let p;d!=null&&typeof d=="object"?{cols:p}=d:p=d;const k=f!==l?`-${f}`:"";p!=null&&c.push(`${s}${k}-${p}`)}),u.jsx(n,{ref:o,...r,className:se(t,i,...c)})});vy.displayName="Row";const Fi=vy;y(pt)`

`;y.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 30%;
    left: 40%;
    height: 12px;
    width: 12px;
`;const qj=y($i)`
    .modal-content {
        background-color: var(--light-black);
        color: var(--white);
        border-bottom: 20px var(--blue);
    }
`,e3=y($i.Header)`
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
    
`;const zm=y.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid var(--grey);
    border-radius: 5px;
    align-items: center;
    color: var(--white);
    background-color: var(--black);
`;y(pt)`
    font-size: 17px;
    color: var(--white);
`;function t3({showForm:e,closeForm:t}){const[n,r]=x.useState({post_title:"",post_topic:"",post_desc:""}),o=a=>{const{name:l,value:s}=a.target;r({...n,[l]:s})},i=()=>{};return u.jsxs(qj,{centered:!0,size:"lg",show:e,animation:!0,scrollable:!0,children:[u.jsxs(e3,{children:[u.jsx($i.Title,{children:"Create a New Post"}),u.jsx("button",{type:"button",className:"btn-close btn-close-white","aria-label":"Close",onClick:t})]}),u.jsxs(Bt,{onSubmit:i(),children:[u.jsxs($i.Body,{children:[u.jsxs(Fi,{children:[u.jsx(Yn,{xs:8,children:u.jsxs(Bt.Group,{className:"mb-3",controlId:"postForm.title",children:[u.jsx(Bt.Label,{children:"Title"}),u.jsx("br",{}),u.jsx(zm,{type:"textarea",placeholder:"So I've been thinking...",id:"post_title",name:"post_title",value:n.post_title,onChange:o})]})}),u.jsx(Yn,{xs:4,children:u.jsxs(Bt.Group,{className:"mb-3",controlId:"postForm.topic",children:[u.jsx(Bt.Label,{children:"Topic"}),u.jsxs(Bt.Select,{id:"post_topic",name:"post_topic",value:n.post_topic,onChange:o,children:[u.jsx("option",{value:"Web Dev",children:"Web Development"}),u.jsx("option",{value:"Game",children:"Embedded Development"}),u.jsx("option",{value:"Career",children:"Career"})]})]})})]}),u.jsxs(Bt.Group,{className:"mb-3",controlId:"postForm.desc",children:[u.jsx(Bt.Label,{children:"Description"}),u.jsx(zm,{as:"textarea",rows:5,id:"post_desc",name:"post_desc",value:n.post_desc,onChange:o})]})]}),u.jsx($i.Footer,{children:u.jsxs(Fi,{children:[u.jsx(Yn,{xs:6,children:u.jsx("input",{className:"form-control form-control",id:"formFile",type:"file"})}),u.jsx(Yn,{xs:4,children:u.jsx(is,{variant:"secondary",onClick:t,children:"Save Entered Text"})}),u.jsx(Yn,{xs:2,children:u.jsx(is,{type:"submit",variant:"primary",children:"Post"})})]})})]})]})}function dn(){const[e,t]=x.useState(!1),n=()=>{t(!0)},r=()=>{t(!1)};return u.jsx(yE,{children:u.jsxs(xE,{children:[u.jsx(gi,{to:"/CodeConnect/home",children:u.jsxs(wE,{children:[u.jsx(kE,{children:"Code"}),u.jsx(SE,{children:"Connect"})]})}),u.jsxs(bE,{children:[u.jsxs(gi,{to:"/CodeConnect/home",children:[u.jsx(tl,{icon:dE}),u.jsx("span",{children:"Home"})]}),u.jsxs(gi,{to:"/CodeConnect/explore",children:[u.jsx(tl,{icon:mE}),u.jsx("span",{children:"Explore"})]}),u.jsxs(gi,{to:"/CodeConnect/direct-messages",children:[u.jsx(tl,{icon:pE}),u.jsx("span",{children:"Messages"})]}),u.jsxs(gi,{to:"/CodeConnect/account",children:[u.jsx(tl,{icon:fE}),u.jsx("span",{children:"Profile"})]}),u.jsx(CE,{onClick:n,children:"Post"}),u.jsx(t3,{showForm:e,closeForm:r})]})]})})}const n3=y.div`
    display: flex;
    gap: 20px;
    align-items: center;
`,r3=y.input`
    width: 92%;
    height: 70px;
    border-radius: 50px; 
    border: 0px;
    outline: none;
    font-size: 20px;
    padding: 0 30px;
    background-color: var(--light-black);
    color: var(--white);
    box-shadow: 0 5px 10px var(--shadow);

    &::placeholder {
        color: var(--grey);
    }
`;y(pt)`
    color: var(--white);
`;const o3=y.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0px;
    background-color: var(--blue);
`,i3=y(pt)`
    font-size: 17px;
    color: var(--white);
`;function Ws({data:e}){const[t,n]=x.useState(""),r=Zt(),o=()=>{const i=e.filter(a=>a.title.toLowerCase().includes(t.toLowerCase()));r("/CodeConnect/explore-results",{state:{results:i,searchTerm:t}})};return u.jsxs(n3,{children:[u.jsx(r3,{input:"text",placeholder:"Search",value:t,onChange:i=>n(i.target.value)}),u.jsx(o3,{onClick:o,children:u.jsx(i3,{icon:L1})})]})}Ws.propTypes={data:W.object};const yy=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
    width: 80vw;
    background-color: var(--black);
`,a3=y.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    /* padding: 5vh 0; */
    width: 85%;
    height: 80%;
`;y.div`
    width: 88%;
    display: flex;
    justify-content: flex-end;
`;const l3=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 80%;
`,Um=y.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
`,s3=y.div`
    display: flex;
    gap: 10px;
    
    div {
        color: var(--grey);
    }
`,u3=y.input`

`,c3=y(pt)`

`,f3=y.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;
`,d3=y.div`
    display: flex;
    margin: 0 auto;
    overflow-x: auto;
    width: 950px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
`,Wu=y.div`
    width: 100%;
    position: relative;
    text-align: center;
    color: var(--white);
`,Hu=y.img`
    flex: 3;
    max-width: 950px;
    scroll-snap-align: start;
    filter: brightness(50%);
    border-radius: 10px;
`,Vu=y.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 600;
`,p3=y.div`
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
`,h3=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 950px;
    margin: 0 auto;
    padding-bottom: 10%;
`,Hr=y.div`
    font-size: 40px;
    font-weight: 500;
    color: var(--white);
`,m3=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 30px;
    padding: 0 15px;
    background-color: var(--blue-low);
    color: var(--white);
    font-size: 14px;
    box-shadow: 0 10px 10px var(--shadow);
`;function le({topicName:e}){return u.jsx(m3,{children:e})}le.propTypes={topicName:W.string};const xy="/CodeConnect/assets/web-dev-0661792e.png",wy="/CodeConnect/assets/game-dev-bd8da6b7.png",ky="/CodeConnect/assets/programming-d8860b21.png";console.log({postDatabase:Se});function g3(){return x.useState("Recent"),u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsx(yy,{children:u.jsxs(a3,{children:[u.jsx(Ws,{data:Se}),u.jsxs(l3,{children:[u.jsx(Um,{children:u.jsx(Hr,{children:u.jsxs("div",{children:[u.jsx(c3,{icon:O1})," Trending"]})})}),u.jsx(f3,{children:u.jsxs(d3,{children:[u.jsxs(Wu,{id:"slide-1",children:[u.jsx(Hu,{src:xy}),u.jsx(Vu,{children:"Web Development"})]}),u.jsxs(Wu,{id:"slide-2",children:[u.jsx(Hu,{src:wy}),u.jsx(Vu,{children:"Game Development"})]}),u.jsxs(Wu,{id:"slide-3",children:[u.jsx(Hu,{src:ky}),u.jsx(Vu,{children:"Python"})]}),u.jsxs(p3,{children:[u.jsx("a",{href:"#slide-1"}),u.jsx("a",{href:"#slide-2"}),u.jsx("a",{href:"#slide-3"})]})]})}),u.jsxs(Um,{children:[u.jsx(Hr,{children:"Topics"}),u.jsxs(s3,{children:[u.jsx("div",{children:"Select"}),u.jsx(u3,{type:"checkbox"})]})]}),u.jsxs(h3,{children:[u.jsx(le,{topicName:"Web Development"}),u.jsx(le,{topicName:"React"}),u.jsx(le,{topicName:"Python"}),u.jsx(le,{topicName:"Dynamic Programming"}),u.jsx(le,{topicName:"JavaScript"}),u.jsx(le,{topicName:"Full-Stack Development"}),u.jsx(le,{topicName:"Data Structures"}),u.jsx(le,{topicName:"Networks"}),u.jsx(le,{topicName:"Game Development"}),u.jsx(le,{topicName:"Cybersecurity"}),u.jsx(le,{topicName:"HTML"}),u.jsx(le,{topicName:"CSS"}),u.jsx(le,{topicName:"Data Science"})]})]})]})})]})}const v3=y.div`
    width: 80vw;
    height: 100vh;  
    margin-left: 20vw;
    background-color: #242424;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`,Bm=y.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
`,y3=y.div`
    display: flex;
    padding: 16px;
    align-self: stretch;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    gap: 10px;
`,x3=y.div`
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    overflow: hidden;
`;function w3({src:e,alt:t}){return u.jsx(x3,{children:u.jsx("img",{src:e,alt:t,style:{flex:1,width:"100%",height:"100%",resizeMode:"contain"}})})}const k3="/CodeConnect/assets/profile-pic-fc3f250c.jpg",Wm=y.div`
    display: flex;
    width: 420px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`,S3={fontSize:"17px",color:"white",textAlign:"center",fontWeight:"600",letterSpacing:"1.25px",lineHeigt:"normal"};function Ef({text:e}){return u.jsx("p",{style:S3,children:e})}const Hm=y.div`
    background-color: #9190A2;
    border-radius: 6px;
    display: inline-flex;
    padding: 12px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`,Vm=y.div`
    color: white;
`,b3=y.div`
align-self: stretch;
`,C3={fontSize:"16px",color:"white",textAlign:"center",fontWeight:"400",letterSpacing:"1.25px",lineHeigt:"normal"};function E3({text:e}){return u.jsx("p",{style:C3,children:e})}const j3=y.div`
    display: flex;
    padding: 14px 0px 14px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-bottom: 0.25px solid #FFF;
    background: #121212;
`;function P3(){return u.jsxs(y3,{children:[u.jsx(w3,{src:k3,alt:"User Profile Picture"}),u.jsxs(Wm,{children:[u.jsx(Ef,{text:"PixelPioneer"}),u.jsx(Ef,{text:"(She/Her)"})]}),u.jsxs(Wm,{children:[u.jsx(Hm,{children:u.jsx(Vm,{children:"Teacher"})}),u.jsx(Hm,{children:u.jsx(Vm,{children:"Web Development, Full-Stack, +1 More"})})]}),u.jsx(b3,{children:u.jsx(E3,{text:"Oh wow this is my bio!!!"})})]})}const R3=y.div`
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    background: #363636;
`;function N3(){return u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsxs(v3,{children:[u.jsx(Bm,{}),u.jsxs(R3,{children:[u.jsx(P3,{}),u.jsx(j3,{children:u.jsx(Ef,{text:"Posts"})})]}),u.jsx(Bm,{})]})]})}const T3=BS`
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
`,Sy=y.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,by=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,Cy=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,Ey=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,_3=y(un)`  
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
`,O3=y.div`
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
`;const L3=y.div`
    display: flex;
    justify-content: space-between;
`,jy=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,M3=y.div`
    font-size: 30px;
`,Py=y.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`,Ry=y.div`

`,A3=y.div`
    font-size: 12px;
`,Sa=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Ny=y.div`
    font-size: 30px;
    color: white;
`,ba=y.div`
    font-size: 15px;
    line-height: 20px;
    color: var(--grey);
`,Ty=y.div`
    display: flex;
`,_y=y.div`
    border-radius: 50px;
    background-color: var(--blue-low);
    height: 30px;
`,Oy=y.div`
    padding: 0 10px;
    font-size: 12px;
    line-height: 30px;
    color: var(--light-blue);
`,Ly=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    color: var(--tan);
    z-index: 1;
`,ss=y(pt)`

`,_o=y.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--grey);
`;var My={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]},Ay={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"]};function Hs({information:e}){Zt();const[t,n]=x.useState(e.likes);return u.jsx(_3,{to:"/CodeConnect/"+e.author.getUsername()+"/"+e.id,children:u.jsxs(O3,{children:[u.jsxs(L3,{children:[u.jsxs(jy,{children:[u.jsx(Py,{src:e.author.getProfilePicture()}),u.jsx(Ry,{children:e.author.getUsername()}),u.jsx(A3,{children:e.timestamp})]}),u.jsx(M3,{children:e.reaction})]}),u.jsxs(Sa,{children:[u.jsx(Ny,{children:e.title}),u.jsx(ba,{children:e.content})]}),u.jsx(Ty,{children:u.jsx(_y,{children:u.jsx(Oy,{children:e.topic})})}),u.jsxs(Ly,{children:[u.jsxs(_o,{children:[u.jsx("div",{onClick:()=>{e.like(),n(e.likes)},children:u.jsx(ss,{icon:My})}),u.jsxs("div",{children:[t," likes"]})]}),u.jsxs(_o,{children:[u.jsx(ss,{icon:Ay}),u.jsxs("div",{children:[e.comments.length," comments"]})]}),u.jsx(_o,{children:". . ."})]})]})})}Hs.propTypes={information:W.object};function I3(){const[e,t]=x.useState("Recent");return u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsx(Sy,{children:u.jsxs(by,{children:[u.jsxs(Cy,{children:[u.jsx(Hr,{children:"Home"}),u.jsx(Fs,{setStatus:t})]}),u.jsx(Ey,{children:Se.map((n,r)=>u.jsx(Hs,{information:n},r))})]})})]})}const D3=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    background-color: var(--black);
    height: 100vh;
`,$3=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`,F3=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50%;
    border-radius: 10px;
    box-shadow: 0 10px 20px var(--shadow);

`,z3=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,U3=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,B3=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 30%;
`,W3=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 27%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

`,H3=y.div`
    display: flex;
    align-items: center; 
    height: 77%;
    overflow-y: scroll;
    justify-content: center;
`,V3=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,Y3=y.textarea`
   width: 80%;   
   background-color: grey;
   color: white;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,G3=y.textarea`
   width: 90%;   
   height: 80%;
   color: white;
   background-color: grey;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,K3=y.div`
    display: flex;
    align-items: center; 
    height: 20%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,Q3=y.button`
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
`,X3=y(un)`

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

`;const Z3=y.div`
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
`,J3=y.div`
   display: flex;
   align-items: center;
   gap: 20px;
   color: var(--grey);
   margin-left: 2vw;
`,q3=y.img`
   width: 60px;
   border-radius: 100px;
`,e5=y.div`
   font-size: 25px;
   color: var(--white);
`;function Mt({user:e,url:t}){const n=Zt(),r=()=>{n(t)};return u.jsx(Z3,{children:u.jsxs(J3,{onClick:r,children:[u.jsx(q3,{src:e.profilePic}),u.jsx(e5,{children:e.userName})]})})}const t5=y.div`
    font-size: 35px;
    font-weight: 600;
    color: var(--white);

`,Vs=y.div`
    font-size: 30px;
    font-weight: 600;
    color: var(--white);

`,qo="/CodeConnect/assets/userPfp-3c07c570.png",ei="/CodeConnect/assets/userPfp2-778a6b44.png",n5={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:qo},r5={userName:"Boo",profilePic:ei},o5={userName:"Sonic",profilePic:Kr};function i5(){Zt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsxs(D3,{children:[u.jsx($3,{children:u.jsxs(F3,{children:[u.jsxs(W3,{children:[u.jsx(t5,{children:"New Direct Message"}),u.jsx(X3,{to:"/CodeConnect/direct-messages",children:"X"})]}),u.jsxs(B3,{children:[u.jsx(Y3,{rows:"2",cols:"30"}),u.jsx(V3,{children:"Search"})]}),u.jsx(H3,{children:u.jsx(G3,{rows:"2",cols:"30"})}),u.jsx(K3,{children:u.jsx(Q3,{children:"Send"})})]})}),u.jsxs(z3,{children:[u.jsx(U3,{children:u.jsx(Vs,{children:"Messages"})}),u.jsx(Mt,{user:r5,url:e}),u.jsx(Mt,{user:n5,url:t}),u.jsx(Mt,{user:o5,url:n})]})]})]})}const a5=y.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,l5=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,s5=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,u5=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,c5=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,f5=y.div`
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
`,d5=y.label`
    //margin-right: 21vw;
    font-size: 20px;
    color: black;
    text-align: center;
    color: white;
`,p5=y.div`
  position: fixed;
  background-color: var(--blue); 
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`,h5=y.div`
  background-color: var(--light-black); 
  color: white;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
`,m5=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`,g5=y.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`,v5=y.div`
    font-size: 35px;
    font-weight: 600;
`,y5=y.div`
    color: var(--white);
`,x5=y.div`
    color: var(--blue);
    padding-left: 25px;
`,w5=y.div`
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
`,ol=y(N0)`
    color: var(--grey);
    text-decoration: none;

    &:hover {
        color: var(--white);
    }
`,k5=y.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: var(--white);
`;function Iy({handleItemClick:e}){return u.jsx(m5,{children:u.jsxs(g5,{children:[u.jsxs(v5,{children:[u.jsx(y5,{children:"Code"}),u.jsx(x5,{children:"Connect"})]}),u.jsxs(w5,{children:[u.jsx(ol,{to:"/CodeConnect/guest-home",children:"Home"}),u.jsx(ol,{to:"/CodeConnect/guest-explore",children:"Explore"}),u.jsx(ol,{onClick:()=>e("Direct Messages"),children:"Direct Messages"}),u.jsx(ol,{onClick:()=>e("Profile"),children:"Profile"}),u.jsx(k5,{onClick:()=>e("Post"),children:"Post"})]})]})})}function S5(){const[e,t]=x.useState("Recent"),[n,r]=x.useState(!1),o=a=>{(a==="Direct Messages"||a==="Profile"||a==="Post")&&r(!0)},i=()=>{r(!1)};return u.jsxs(jt,{children:[u.jsx(Iy,{handleItemClick:o}),u.jsx(a5,{children:u.jsxs(l5,{children:[u.jsxs(s5,{children:[u.jsx(Hr,{children:"Home"}),u.jsx(Fs,{setStatus:t})]}),u.jsx(u5,{children:Se.map((a,l)=>u.jsx(Hs,{information:a},l))})]})}),n&&u.jsx(c5,{children:u.jsxs(f5,{children:[u.jsx(d5,{children:"Please create an account to access this feature "}),u.jsx("div",{}),u.jsx("div",{}),u.jsx(p5,{children:"Create Account"}),u.jsx(h5,{onClick:i,children:"Close"})]})})]})}const b5=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
    width: 80vw;
    height: 100vh;
    background-color: var(--black);
`,C5=y.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 5vh 0;
    width: 80%;
    height: 80%;
`;y.div`
    width: 88%;
    display: flex;
    justify-content: flex-end;
`;const E5=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 80%;
`,Ym=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
`,j5=y.div`
    display: flex;
    gap: 10px;
    
    div {
        color: var(--grey);
    }
`,P5=y.input`

`,R5=y(pt)`

`,N5=y.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;
`,T5=y.div`
    display: flex;
    margin: 0 auto;
    overflow-x: auto;
    width: 950px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
`,Yu=y.div`
    width: 100%;
    position: relative;
    text-align: center;
    color: var(--white);
`,Gu=y.img`
    flex: 3;
    max-width: 950px;
    scroll-snap-align: start;
    filter: brightness(50%);
    border-radius: 10px;
`,Ku=y.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 600;
`,_5=y.div`
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
`,O5=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 950px;
    margin: 0 auto;
    padding-bottom: 10%;
`,L5=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,M5=y.div`
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
`,A5=y.label`
    //margin-right: 21vw;
    font-size: 20px;
    color: black;
    text-align: center;
    color: white;
`,I5=y.div`
  position: fixed;
  background-color: var(--blue); 
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`,D5=y.div`
  background-color: var(--light-black); 
  color: white;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
`;function $5(){x.useState("Recent");const[e,t]=x.useState(!1),n=o=>{(o==="Direct Messages"||o==="Profile"||o==="Post")&&t(!0)},r=()=>{t(!1)};return u.jsxs(jt,{children:[u.jsx(Iy,{handleItemClick:n}),u.jsx(b5,{children:u.jsxs(C5,{children:[u.jsx(Ws,{}),u.jsxs(E5,{children:[u.jsx(Ym,{children:u.jsx(Hr,{children:u.jsxs("div",{children:[u.jsx(R5,{icon:O1})," Trending"]})})}),u.jsx(N5,{children:u.jsxs(T5,{children:[u.jsxs(Yu,{id:"slide-1",children:[u.jsx(Gu,{src:xy}),u.jsx(Ku,{children:"Web Development"})]}),u.jsxs(Yu,{id:"slide-2",children:[u.jsx(Gu,{src:wy}),u.jsx(Ku,{children:"Game Development"})]}),u.jsxs(Yu,{id:"slide-3",children:[u.jsx(Gu,{src:ky}),u.jsx(Ku,{children:"Python"})]}),u.jsxs(_5,{children:[u.jsx("a",{href:"#slide-1"}),u.jsx("a",{href:"#slide-2"}),u.jsx("a",{href:"#slide-3"})]})]})}),u.jsxs(Ym,{children:[u.jsx(Hr,{children:"Topics"}),u.jsxs(j5,{children:[u.jsx("div",{children:"Select"}),u.jsx(P5,{type:"checkbox"})]})]}),u.jsxs(O5,{children:[u.jsx(le,{topicName:"Web Development"}),u.jsx(le,{topicName:"React"}),u.jsx(le,{topicName:"Python"}),u.jsx(le,{topicName:"Dynamic Programming"}),u.jsx(le,{topicName:"JavaScript"}),u.jsx(le,{topicName:"Full-Stack Development"}),u.jsx(le,{topicName:"Data Structures"}),u.jsx(le,{topicName:"Networks"}),u.jsx(le,{topicName:"Game Development"}),u.jsx(le,{topicName:"Cybersecurity"}),u.jsx(le,{topicName:"HTML"}),u.jsx(le,{topicName:"CSS"}),u.jsx(le,{topicName:"Data Science"})]})]})]})}),e&&u.jsx(L5,{children:u.jsxs(M5,{children:[u.jsx(A5,{children:"Please create an account to access this feature "}),u.jsx("div",{}),u.jsx("div",{}),u.jsx(I5,{children:"Create Account"}),u.jsx(D5,{onClick:r,children:"Close"})]})})]})}const F5=y.div`

    margin-left: 20vw;
    display: flex;
    justify-content: center;
    width: 80vw;
    height: 100vh;
`,z5=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,U5=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
`,B5=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,W5=y.div`  
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
`,H5=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 90%;
    height: 80%;
`,V5=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,Y5=y.img`
    width: 60px;
    border-radius: 100px;
`,G5=y(un)`
    font-size: 25px;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`,K5=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Q5=y.div`
    font-size: 19px;
    color: var(--grey);
`;function Qu({user:e,targetUrl:t}){const n=Zt(),r=()=>{n(t)};return u.jsx(W5,{onClick:r,children:u.jsxs(H5,{children:[u.jsxs(V5,{children:[u.jsx(Y5,{src:e.profilePic}),u.jsx(G5,{children:e.userName})]}),u.jsx(K5,{children:u.jsx(Q5,{children:e.text})})]})})}const X5=y.div`
    font-size: 50px;
    font-weight: 700;
    color: var(--white);

`,Ys=y(un)`
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
`,Z5={userName:"Boo",text:"HAHAHHAHAHAH.",profilePic:ei},J5={userName:"Kirby",text:"Words words words words. Words words words.",profilePic:qo},q5={userName:"Sonic",text:"Gotta go fast bro",profilePic:Kr};function e4(){Zt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return x.useState("Recents"),u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsxs(F5,{children:[u.jsxs(z5,{children:[u.jsx(U5,{children:u.jsx(X5,{children:"Direct Messages"})}),u.jsxs(B5,{children:[u.jsx(Qu,{user:Z5,targetUrl:e}),u.jsx(Qu,{user:J5,targetUrl:t}),u.jsx(Qu,{user:q5,targetUrl:n})]})]}),u.jsx(Ys,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const t4=y.div`  
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
`,n4=y.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 90%;
    height: 80%;
`,r4=y.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    width: 100%;
    height: 100%;
`,Dy=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: 5% 95%;
`,$y=y.div`
    width: 100%;
    height: 50%;
    background-color: none;
    border-left: 5px solid;
    border-bottom: 5px solid;
    border-color: grey;
`,rp=y.div`
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
`,o4=y.div`
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
`;const Gm=y(pt)`
    color: var(--white);
`,i4=y.div`
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
`;y(pt)`

`;const op=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,ip=y.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`,ap=y.div`
    flex: 1;
`;function lp(e){const[t,n]=x.useState(!1),[r,o]=x.useState({reply_desc:""}),i=l=>{const{name:s,value:c}=l.target;o({...r,[s]:c})},a=()=>{};return u.jsxs(u.Fragment,{children:[u.jsx(i4,{variant:"outline-primary",className:"btn-sm",onClick:()=>n(!t),"aria-controls":"collapseOne","aria-expanded":t,children:"Reply"}),u.jsx("br",{}),t&&u.jsx(Bt,{children:u.jsxs(Fi,{children:[u.jsx(Yn,{xs:11,children:u.jsx(Bt.Group,{className:"mb-3",controlId:"replyForm.desc",children:u.jsx(Bt.Control,{as:"textarea",rows:5,id:"reply_desc",name:"reply_desc",value:r.reply_desc,onChange:i,placeholder:"I've got some thoughts on this..."})})}),u.jsxs(Yn,{xs:1,children:[u.jsx(Fi,{children:u.jsxs(is,{variant:"danger",className:"btn-sm",onClick:()=>n(!1),children:["Exit ",u.jsx(Gm,{icon:vE,size:"xl"})]})}),u.jsx("br",{}),u.jsx(Fi,{children:u.jsxs(is,{variant:"secondary",className:"btn-sm",onClick:a,children:["Reply ",u.jsx(Gm,{icon:L1,size:"xl"})]})})]})]})})]})}function a4(){const[e,t]=x.useState(!1),{id:n}=C0(),r=()=>{t(!1)},o=Se[n],i=o.author.getProfilePicture(),a=o.author.getUsername();return u.jsx(t4,{children:u.jsxs(n4,{children:[u.jsxs(jy,{children:[u.jsx(Py,{src:i}),u.jsx(Ry,{children:a})]}),u.jsxs(Sa,{children:[u.jsx(Ny,{children:o.title}),u.jsx(ba,{children:o.content})]}),u.jsx(Ty,{children:u.jsx(_y,{children:u.jsx(Oy,{children:o.topic})})}),u.jsxs(Ly,{children:[u.jsxs(_o,{children:[u.jsx(ss,{icon:My}),u.jsxs("div",{children:[o.likes," likes"]})]}),u.jsxs(_o,{children:[u.jsx(ss,{icon:Ay}),u.jsxs("div",{children:[o.comments.length," comments"]})]}),u.jsx(_o,{children:u.jsx("div",{children:o.reactions})})]}),u.jsx(lp,{show:e,close:r})]})})}function l4({user:e},t){const{author:n,content:r}=e,[o,i]=x.useState(!1),a=()=>{i(!1)};return u.jsx(u.Fragment,{children:u.jsxs(Dy,{children:[u.jsx($y,{}),u.jsxs(rp,{children:[u.jsxs(op,{children:[u.jsx(ip,{src:n.getProfilePicture()}),u.jsx(ap,{children:n.getUsername()})]}),u.jsx("br",{}),u.jsx(Sa,{children:u.jsx(ba,{children:r})}),u.jsx("br",{}),u.jsx(lp,{show:o,close:a})]})]})})}function Fy({user:e},t){const{author:n,content:r,id:o}=e,[i,a]=x.useState(!1),l=()=>{a(!1)};return u.jsx(u.Fragment,{children:u.jsxs(rp,{children:[u.jsxs(op,{children:[u.jsx(ip,{src:n.getProfilePicture()}),u.jsx(ap,{children:n.getUsername()})]}),u.jsx("br",{}),u.jsx(Sa,{children:u.jsx(ba,{children:r})}),u.jsx("br",{}),u.jsx(lp,{close:l})]})})}Fy.propTypes={user:W.object};function s4({user:e}){const{author:t,content:n}=e;return u.jsx(u.Fragment,{children:u.jsxs(Dy,{children:[u.jsx($y,{}),u.jsxs(rp,{children:[u.jsxs(op,{children:[u.jsx(ip,{src:t.getProfilePicture()}),u.jsx(ap,{children:t.getUsername()})]}),u.jsx("br",{}),u.jsx(Sa,{children:u.jsx(ba,{children:n})}),u.jsx("br",{})]})]})})}const u4=y.div`
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
`;function c4(){const e=()=>{window.history.go(-1)};return u.jsx(u4,{onClick:e,children:"Back"})}function f4(){const[e,t]=x.useState("Recent"),{id:n}=C0(),o=Se[n].getPostInformation().comments;return console.log(o),u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsx(Sy,{children:u.jsxs(by,{children:[u.jsxs(Cy,{children:[u.jsx(Hr,{}),u.jsx(c4,{}),u.jsx(Fs,{setStatus:t})]}),u.jsxs(r4,{children:[u.jsx(a4,{}),o.map((i,a)=>u.jsxs(De.Fragment,{children:[u.jsx(Fy,{user:i}),i.comments&&i.comments.length>0&&u.jsx("div",{children:i.comments.map((l,s)=>u.jsxs(De.Fragment,{children:[u.jsx(l4,{user:l}),l.comments&&l.comments.length>0&&u.jsx(o4,{children:l.comments.map((c,f)=>u.jsx(s4,{user:c},f))})]},s))})]},a))]})]})})]})}const d4=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,p4=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,h4=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,m4=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,g4=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,v4=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,y4=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,x4=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,w4=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,k4=y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,S4=y(un)`

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
`,sp=y(un)`
    font-size: 60px;
    font-weight: 500;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`,up=y.img`
    width: 60px;
    border-radius: 100px;
`,b4=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border: 1px solid black;
    height: 150px;
    transition: 0.1s ease-in-out;
`,C4=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    height: 80%;
`,E4=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,j4=y.img`
    width: 60px;
    border-radius: 100px;
`,P4=y.div`
    font-size: 22px;
    color: var(--white);
`,R4=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,N4=y.div`
    font-size: 17px;
    color: var(--white);
`;function ut({user:e,text:t}){return u.jsx(b4,{children:u.jsxs(C4,{children:[u.jsxs(E4,{children:[u.jsx(j4,{src:e.profilePic}),u.jsx(P4,{children:e.userName})]}),u.jsx(R4,{children:u.jsx(N4,{children:e.message})})]})})}const Km={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Ls},il={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:qo},T4={userName:"Boo",profilePic:ei},_4={userName:"Sonic",profilePic:Kr};function O4(){Zt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsxs(d4,{children:[u.jsx(p4,{children:u.jsxs(h4,{children:[u.jsxs(v4,{children:[u.jsx(up,{src:qo}),u.jsx(sp,{children:"Kirby"}),u.jsx(S4,{to:"/CodeConnect/direct-messages",children:"X"})]}),u.jsxs(y4,{children:[u.jsx(ut,{user:il}),u.jsx(ut,{user:Km}),u.jsx(ut,{user:il}),u.jsx(ut,{user:Km}),u.jsx(ut,{user:il})]}),u.jsxs(x4,{children:[u.jsx(k4,{rows:"2",cols:"20"}),u.jsx(w4,{children:"Send"})]})]})}),u.jsxs(g4,{children:[u.jsx(m4,{children:u.jsx(Vs,{children:"Messages"})}),u.jsx(Mt,{user:T4,url:e}),u.jsx(Mt,{user:il,url:t}),u.jsx(Mt,{user:_4,url:n})]}),u.jsx(Ys,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const L4=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;  
`,M4=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,A4=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,I4=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,D4=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,$4=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,F4=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,z4=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,U4=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,B4=y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,W4=y(un)`

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
`,Qm={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Ls},H4={userName:"Kirby",profilePic:qo},al={message:"HAHAHHAHAHAH.",userName:"Boo",profilePic:ei},V4={userName:"Sonic",profilePic:Kr};function Y4(){Zt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsxs(L4,{children:[u.jsx(M4,{children:u.jsxs(A4,{children:[u.jsxs($4,{children:[u.jsx(up,{src:ei}),u.jsx(sp,{children:"Boo"}),u.jsx(W4,{to:"/CodeConnect/direct-messages",children:"X"})]}),u.jsxs(F4,{children:[u.jsx(ut,{user:al}),u.jsx(ut,{user:Qm}),u.jsx(ut,{user:al}),u.jsx(ut,{user:Qm}),u.jsx(ut,{user:al})]}),u.jsxs(z4,{children:[u.jsx(B4,{rows:"2",cols:"20"}),u.jsx(U4,{children:"Send"})]})]})}),u.jsxs(D4,{children:[u.jsx(I4,{children:u.jsx(Vs,{children:"Messages"})}),u.jsx(Mt,{user:al,url:e}),u.jsx(Mt,{user:H4,url:t}),u.jsx(Mt,{user:V4,url:n})]}),u.jsx(Ys,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const G4=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,K4=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,Q4=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,X4=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,Z4=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,J4=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,q4=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,eP=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,tP=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,nP=y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,rP=y(un)`

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
`,Xm={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Ls},oP={userName:"Kirby",profilePic:qo},iP={userName:"Boo",profilePic:ei},ll={message:"Gotta go fast bro",userName:"Sonic",profilePic:Kr};function aP(){Zt();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsxs(G4,{children:[u.jsx(K4,{children:u.jsxs(Q4,{children:[u.jsxs(J4,{children:[u.jsx(up,{src:Kr}),u.jsx(sp,{children:"Sonic"}),u.jsx(rP,{to:"/CodeConnect/direct-messages",children:"X"})]}),u.jsxs(q4,{children:[u.jsx(ut,{user:ll}),u.jsx(ut,{user:Xm}),u.jsx(ut,{user:ll}),u.jsx(ut,{user:Xm}),u.jsx(ut,{user:ll})]}),u.jsxs(eP,{children:[u.jsx(nP,{rows:"2",cols:"20"}),u.jsx(tP,{children:"Send"})]})]})}),u.jsxs(Z4,{children:[u.jsx(X4,{children:u.jsx(Vs,{children:"Messages"})}),u.jsx(Mt,{user:iP,url:e}),u.jsx(Mt,{user:oP,url:t}),u.jsx(Mt,{user:ll,url:n})]}),u.jsx(Ys,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const Zm=y.div`
    color: var(--grey);
`,lP=y.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 5vh 0;
    width: 80%;
`,sP=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;function uP(){const{state:e}=Qo(),{results:t,searchTerm:n}=e;return console.log({results:t}),console.log({searchTerm:n}),u.jsxs(jt,{children:[u.jsx(dn,{}),u.jsx(yy,{children:u.jsxs(lP,{children:[u.jsx(Ws,{data:Se}),u.jsxs(sP,{children:[t.length>2||t.length==0?u.jsxs(Zm,{children:[t.length,' results found matching "',n,'"']}):u.jsxs(Zm,{children:[t.length,' result found matching "',n,'"']}),u.jsx(Ey,{children:t.map((r,o)=>u.jsx(Hs,{information:r},o))})]})]})})]})}const cP=jk([{path:"/CodeConnect/",element:u.jsx(sb,{})},{path:"/CodeConnect/home",element:u.jsx(I3,{})},{path:"/CodeConnect/explore",element:u.jsx(g3,{})},{path:"/CodeConnect/direct-messages",element:u.jsx(e4,{})},{path:"/CodeConnect/dm-kirby",element:u.jsx(O4,{})},{path:"/CodeConnect/dm-boo",element:u.jsx(Y4,{})},{path:"/CodeConnect/dm-sonic",element:u.jsx(aP,{})},{path:"/CodeConnect/new-direct-message",element:u.jsx(i5,{})},{path:"/CodeConnect/account",element:u.jsx(N3,{})},{path:"/CodeConnect/guest-home",element:u.jsx(S5,{})},{path:"/CodeConnect/:author/:id",element:u.jsx(f4,{})},{path:"/CodeConnect/guest-explore",element:u.jsx($5,{})},{path:"/CodeConnect/explore-results",element:u.jsx(uP,{})}]),fP=Xu.createRoot(document.getElementById("root"));fP.render(u.jsxs("div",{children:[u.jsx(T3,{}),u.jsx(Mk,{router:cP})]}));
