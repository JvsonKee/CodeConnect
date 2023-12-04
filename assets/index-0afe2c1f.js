function Oh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ah={exports:{}},Sl={},Ih={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),T0=Symbol.for("react.portal"),_0=Symbol.for("react.fragment"),R0=Symbol.for("react.strict_mode"),L0=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),M0=Symbol.for("react.suspense"),z0=Symbol.for("react.memo"),D0=Symbol.for("react.lazy"),cd=Symbol.iterator;function $0(e){return e===null||typeof e!="object"?null:(e=cd&&e[cd]||e["@@iterator"],typeof e=="function"?e:null)}var Mh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zh=Object.assign,Dh={};function mi(e,t,n){this.props=e,this.context=t,this.refs=Dh,this.updater=n||Mh}mi.prototype.isReactComponent={};mi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $h(){}$h.prototype=mi.prototype;function Pc(e,t,n){this.props=e,this.context=t,this.refs=Dh,this.updater=n||Mh}var Ec=Pc.prototype=new $h;Ec.constructor=Pc;zh(Ec,mi.prototype);Ec.isPureReactComponent=!0;var fd=Array.isArray,Fh=Object.prototype.hasOwnProperty,jc={current:null},Uh={key:!0,ref:!0,__self:!0,__source:!0};function Bh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Fh.call(t,r)&&!Uh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Lo,type:e,key:o,ref:a,props:i,_owner:jc.current}}function F0(e,t){return{$$typeof:Lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lo}function U0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dd=/\/+/g;function ss(e,t){return typeof e=="object"&&e!==null&&e.key!=null?U0(""+e.key):t.toString(36)}function Pa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Lo:case T0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ss(a,0):r,fd(i)?(n="",e!=null&&(n=e.replace(dd,"$&/")+"/"),Pa(i,t,n,"",function(u){return u})):i!=null&&(Nc(i)&&(i=F0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(dd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",fd(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+ss(o,l);a+=Pa(o,t,n,s,i)}else if(s=$0(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+ss(o,l++),a+=Pa(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Go(e,t,n){if(e==null)return e;var r=[],i=0;return Pa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function B0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},Ea={transition:null},H0={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:jc};X.Children={map:Go,forEach:function(e,t,n){Go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Go(e,function(){t++}),t},toArray:function(e){return Go(e,function(t){return t})||[]},only:function(e){if(!Nc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=mi;X.Fragment=_0;X.Profiler=L0;X.PureComponent=Pc;X.StrictMode=R0;X.Suspense=M0;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=jc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Fh.call(t,s)&&!Uh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Lo,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:A0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:O0,_context:e},e.Consumer=e};X.createElement=Bh;X.createFactory=function(e){var t=Bh.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:I0,render:e}};X.isValidElement=Nc;X.lazy=function(e){return{$$typeof:D0,_payload:{_status:-1,_result:e},_init:B0}};X.memo=function(e,t){return{$$typeof:z0,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Ea.transition;Ea.transition={};try{e()}finally{Ea.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return et.current.useCallback(e,t)};X.useContext=function(e){return et.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return et.current.useDeferredValue(e)};X.useEffect=function(e,t){return et.current.useEffect(e,t)};X.useId=function(){return et.current.useId()};X.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return et.current.useMemo(e,t)};X.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};X.useRef=function(e){return et.current.useRef(e)};X.useState=function(e){return et.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return et.current.useTransition()};X.version="18.2.0";Ih.exports=X;var T=Ih.exports;const St=Cc(T),W0=Oh({__proto__:null,default:St},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0=T,Y0=Symbol.for("react.element"),G0=Symbol.for("react.fragment"),K0=Object.prototype.hasOwnProperty,Q0=V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X0={key:!0,ref:!0,__self:!0,__source:!0};function Hh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)K0.call(t,r)&&!X0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Y0,type:e,key:o,ref:a,props:i,_owner:Q0.current}}Sl.Fragment=G0;Sl.jsx=Hh;Sl.jsxs=Hh;Ah.exports=Sl;var c=Ah.exports,tu={},Wh={exports:{}},pt={},Vh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,$){var U=L.length;L.push($);e:for(;0<U;){var te=U-1>>>1,ee=L[te];if(0<i(ee,$))L[te]=$,L[U]=ee,U=te;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var $=L[0],U=L.pop();if(U!==$){L[0]=U;e:for(var te=0,ee=L.length,$e=ee>>>1;te<$e;){var Se=2*(te+1)-1,gt=L[Se],Qe=Se+1,nt=L[Qe];if(0>i(gt,U))Qe<ee&&0>i(nt,gt)?(L[te]=nt,L[Qe]=U,te=Qe):(L[te]=gt,L[Se]=U,te=Se);else if(Qe<ee&&0>i(nt,U))L[te]=nt,L[Qe]=U,te=Qe;else break e}}return $}function i(L,$){var U=L.sortIndex-$.sortIndex;return U!==0?U:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,p=null,h=3,w=!1,x=!1,k=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=L)r(u),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(u)}}function v(L){if(k=!1,g(L),!x)if(n(s)!==null)x=!0,vt(P);else{var $=n(u);$!==null&&Ae(v,$.startTime-L)}}function P(L,$){x=!1,k&&(k=!1,m(R),R=-1),w=!0;var U=h;try{for(g($),p=n(s);p!==null&&(!(p.expirationTime>$)||L&&!q());){var te=p.callback;if(typeof te=="function"){p.callback=null,h=p.priorityLevel;var ee=te(p.expirationTime<=$);$=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(s)&&r(s),g($)}else r(s);p=n(s)}if(p!==null)var $e=!0;else{var Se=n(u);Se!==null&&Ae(v,Se.startTime-$),$e=!1}return $e}finally{p=null,h=U,w=!1}}var j=!1,b=null,R=-1,M=5,B=-1;function q(){return!(e.unstable_now()-B<M)}function _e(){if(b!==null){var L=e.unstable_now();B=L;var $=!0;try{$=b(!0,L)}finally{$?Ee():(j=!1,b=null)}}else j=!1}var Ee;if(typeof d=="function")Ee=function(){d(_e)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,pe=Tt.port2;Tt.port1.onmessage=_e,Ee=function(){pe.postMessage(null)}}else Ee=function(){E(_e,0)};function vt(L){b=L,j||(j=!0,Ee())}function Ae(L,$){R=E(function(){L(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,vt(P))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var U=h;h=$;try{return L()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=h;h=L;try{return $()}finally{h=U}},e.unstable_scheduleCallback=function(L,$,U){var te=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=U+ee,L={id:f++,callback:$,priorityLevel:L,startTime:U,expirationTime:ee,sortIndex:-1},U>te?(L.sortIndex=U,t(u,L),n(s)===null&&L===n(u)&&(k?(m(R),R=-1):k=!0,Ae(v,U-te))):(L.sortIndex=ee,t(s,L),x||w||(x=!0,vt(P))),L},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(L){var $=h;return function(){var U=h;h=$;try{return L.apply(this,arguments)}finally{h=U}}}})(Yh);Vh.exports=Yh;var J0=Vh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh=T,dt=J0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kh=new Set,ao={};function xr(e,t){ei(e,t),ei(e+"Capture",t)}function ei(e,t){for(ao[e]=t,e=0;e<t.length;e++)Kh.add(t[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=Object.prototype.hasOwnProperty,Z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pd={},hd={};function q0(e){return nu.call(hd,e)?!0:nu.call(pd,e)?!1:Z0.test(e)?hd[e]=!0:(pd[e]=!0,!1)}function e1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function t1(e,t,n,r){if(t===null||typeof t>"u"||e1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tc=/[\-:]([a-z])/g;function _c(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tc,_c);He[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tc,_c);He[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tc,_c);He[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rc(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t1(t,n,i,r)&&(n=null),r||i===null?q0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=Gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),Qh=Symbol.for("react.provider"),Xh=Symbol.for("react.context"),Oc=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),Ac=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Jh=Symbol.for("react.offscreen"),md=Symbol.iterator;function Ei(e){return e===null||typeof e!="object"?null:(e=md&&e[md]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,us;function Fi(e){if(us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);us=t&&t[1]||""}return`
`+us+e}var cs=!1;function fs(e,t){if(!e||cs)return"";cs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{cs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fi(e):""}function n1(e){switch(e.tag){case 5:return Fi(e.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return e=fs(e.type,!1),e;case 11:return e=fs(e.type.render,!1),e;case 1:return e=fs(e.type,!0),e;default:return""}}function au(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case Nr:return"Portal";case ru:return"Profiler";case Lc:return"StrictMode";case iu:return"Suspense";case ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xh:return(e.displayName||"Context")+".Consumer";case Qh:return(e._context.displayName||"Context")+".Provider";case Oc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ac:return t=e.displayName||null,t!==null?t:au(e.type)||"Memo";case bn:t=e._payload,e=e._init;try{return au(e(t))}catch{}}return null}function r1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return au(t);case 8:return t===Lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function i1(e){var t=Zh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qo(e){e._valueTracker||(e._valueTracker=i1(e))}function qh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lu(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function em(e,t){t=t.checked,t!=null&&Rc(e,"checked",t,!1)}function su(e,t){em(e,t);var n=$n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?uu(e,t.type,n):t.hasOwnProperty("defaultValue")&&uu(e,t.type,$n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function uu(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ui=Array.isArray;function Vr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function cu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Ui(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$n(n)}}function tm(e,t){var n=$n(t.value),r=$n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xo,rm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o1=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){o1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function im(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function om(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=im(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var a1=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function du(e,t){if(t){if(a1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function pu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hu=null;function Ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mu=null,Yr=null,Gr=null;function wd(e){if(e=Io(e)){if(typeof mu!="function")throw Error(_(280));var t=e.stateNode;t&&(t=jl(t),mu(e.stateNode,e.type,t))}}function am(e){Yr?Gr?Gr.push(e):Gr=[e]:Yr=e}function lm(){if(Yr){var e=Yr,t=Gr;if(Gr=Yr=null,wd(e),t)for(e=0;e<t.length;e++)wd(t[e])}}function sm(e,t){return e(t)}function um(){}var ds=!1;function cm(e,t,n){if(ds)return e(t,n);ds=!0;try{return sm(e,t,n)}finally{ds=!1,(Yr!==null||Gr!==null)&&(um(),lm())}}function so(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var vu=!1;if(on)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){vu=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{vu=!1}function l1(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Gi=!1,Wa=null,Va=!1,gu=null,s1={onError:function(e){Gi=!0,Wa=e}};function u1(e,t,n,r,i,o,a,l,s){Gi=!1,Wa=null,l1.apply(s1,arguments)}function c1(e,t,n,r,i,o,a,l,s){if(u1.apply(this,arguments),Gi){if(Gi){var u=Wa;Gi=!1,Wa=null}else throw Error(_(198));Va||(Va=!0,gu=u)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kd(e){if(wr(e)!==e)throw Error(_(188))}function f1(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return kd(i),e;if(o===r)return kd(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function dm(e){return e=f1(e),e!==null?pm(e):null}function pm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pm(e);if(t!==null)return t;e=e.sibling}return null}var hm=dt.unstable_scheduleCallback,Sd=dt.unstable_cancelCallback,d1=dt.unstable_shouldYield,p1=dt.unstable_requestPaint,Pe=dt.unstable_now,h1=dt.unstable_getCurrentPriorityLevel,Mc=dt.unstable_ImmediatePriority,mm=dt.unstable_UserBlockingPriority,Ya=dt.unstable_NormalPriority,m1=dt.unstable_LowPriority,vm=dt.unstable_IdlePriority,bl=null,Qt=null;function v1(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:x1,g1=Math.log,y1=Math.LN2;function x1(e){return e>>>=0,e===0?32:31-(g1(e)/y1|0)|0}var Jo=64,Zo=4194304;function Bi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ga(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Bi(l):(o&=a,o!==0&&(r=Bi(o)))}else a=n&~i,a!==0?r=Bi(a):o!==0&&(r=Bi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),i=1<<n,r|=e[n],t&=~i;return r}function w1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-zt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=w1(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gm(){var e=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),e}function ps(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function S1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-zt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function zc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function ym(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xm,Dc,wm,km,Sm,xu=!1,qo=[],_n=null,Rn=null,Ln=null,uo=new Map,co=new Map,Pn=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bd(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":uo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(t.pointerId)}}function Ni(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Io(t),t!==null&&Dc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function C1(e,t,n,r,i){switch(t){case"focusin":return _n=Ni(_n,e,t,n,r,i),!0;case"dragenter":return Rn=Ni(Rn,e,t,n,r,i),!0;case"mouseover":return Ln=Ni(Ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return uo.set(o,Ni(uo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,co.set(o,Ni(co.get(o)||null,e,t,n,r,i)),!0}return!1}function bm(e){var t=er(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=fm(n),t!==null){e.blockedOn=t,Sm(e.priority,function(){wm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ja(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hu=r,n.target.dispatchEvent(r),hu=null}else return t=Io(n),t!==null&&Dc(t),e.blockedOn=n,!1;t.shift()}return!0}function Cd(e,t,n){ja(e)&&n.delete(t)}function P1(){xu=!1,_n!==null&&ja(_n)&&(_n=null),Rn!==null&&ja(Rn)&&(Rn=null),Ln!==null&&ja(Ln)&&(Ln=null),uo.forEach(Cd),co.forEach(Cd)}function Ti(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,P1)))}function fo(e){function t(i){return Ti(i,e)}if(0<qo.length){Ti(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Ti(_n,e),Rn!==null&&Ti(Rn,e),Ln!==null&&Ti(Ln,e),uo.forEach(t),co.forEach(t),n=0;n<Pn.length;n++)r=Pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)bm(n),n.blockedOn===null&&Pn.shift()}var Kr=dn.ReactCurrentBatchConfig,Ka=!0;function E1(e,t,n,r){var i=re,o=Kr.transition;Kr.transition=null;try{re=1,$c(e,t,n,r)}finally{re=i,Kr.transition=o}}function j1(e,t,n,r){var i=re,o=Kr.transition;Kr.transition=null;try{re=4,$c(e,t,n,r)}finally{re=i,Kr.transition=o}}function $c(e,t,n,r){if(Ka){var i=wu(e,t,n,r);if(i===null)bs(e,t,r,Qa,n),bd(e,r);else if(C1(i,e,t,n,r))r.stopPropagation();else if(bd(e,r),t&4&&-1<b1.indexOf(e)){for(;i!==null;){var o=Io(i);if(o!==null&&xm(o),o=wu(e,t,n,r),o===null&&bs(e,t,r,Qa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else bs(e,t,r,null,n)}}var Qa=null;function wu(e,t,n,r){if(Qa=null,e=Ic(r),e=er(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qa=e,null}function Cm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h1()){case Mc:return 1;case mm:return 4;case Ya:case m1:return 16;case vm:return 536870912;default:return 16}default:return 16}}var jn=null,Fc=null,Na=null;function Pm(){if(Na)return Na;var e,t=Fc,n=t.length,r,i="value"in jn?jn.value:jn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Na=i.slice(e,1<r?1-r:void 0)}function Ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ea(){return!0}function Pd(){return!1}function ht(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ea:Pd,this.isPropagationStopped=Pd,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),t}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uc=ht(vi),Ao=ye({},vi,{view:0,detail:0}),N1=ht(Ao),hs,ms,_i,Cl=ye({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(hs=e.screenX-_i.screenX,ms=e.screenY-_i.screenY):ms=hs=0,_i=e),hs)},movementY:function(e){return"movementY"in e?e.movementY:ms}}),Ed=ht(Cl),T1=ye({},Cl,{dataTransfer:0}),_1=ht(T1),R1=ye({},Ao,{relatedTarget:0}),vs=ht(R1),L1=ye({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=ht(L1),A1=ye({},vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I1=ht(A1),M1=ye({},vi,{data:0}),jd=ht(M1),z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$1[e])?!!t[e]:!1}function Bc(){return F1}var U1=ye({},Ao,{key:function(e){if(e.key){var t=z1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B1=ht(U1),H1=ye({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=ht(H1),W1=ye({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),V1=ht(W1),Y1=ye({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),G1=ht(Y1),K1=ye({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q1=ht(K1),X1=[9,13,27,32],Hc=on&&"CompositionEvent"in window,Ki=null;on&&"documentMode"in document&&(Ki=document.documentMode);var J1=on&&"TextEvent"in window&&!Ki,Em=on&&(!Hc||Ki&&8<Ki&&11>=Ki),Td=String.fromCharCode(32),_d=!1;function jm(e,t){switch(e){case"keyup":return X1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _r=!1;function Z1(e,t){switch(e){case"compositionend":return Nm(t);case"keypress":return t.which!==32?null:(_d=!0,Td);case"textInput":return e=t.data,e===Td&&_d?null:e;default:return null}}function q1(e,t){if(_r)return e==="compositionend"||!Hc&&jm(e,t)?(e=Pm(),Na=Fc=jn=null,_r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Em&&t.locale!=="ko"?null:t.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ey[e.type]:t==="textarea"}function Tm(e,t,n,r){am(r),t=Xa(t,"onChange"),0<t.length&&(n=new Uc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qi=null,po=null;function ty(e){Fm(e,0)}function Pl(e){var t=Or(e);if(qh(t))return e}function ny(e,t){if(e==="change")return t}var _m=!1;if(on){var gs;if(on){var ys="oninput"in document;if(!ys){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),ys=typeof Ld.oninput=="function"}gs=ys}else gs=!1;_m=gs&&(!document.documentMode||9<document.documentMode)}function Od(){Qi&&(Qi.detachEvent("onpropertychange",Rm),po=Qi=null)}function Rm(e){if(e.propertyName==="value"&&Pl(po)){var t=[];Tm(t,po,e,Ic(e)),cm(ty,t)}}function ry(e,t,n){e==="focusin"?(Od(),Qi=t,po=n,Qi.attachEvent("onpropertychange",Rm)):e==="focusout"&&Od()}function iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(po)}function oy(e,t){if(e==="click")return Pl(t)}function ay(e,t){if(e==="input"||e==="change")return Pl(t)}function ly(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:ly;function ho(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nu.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Id(e,t){var n=Ad(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function Lm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Om(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ha(e.document)}return t}function Wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sy(e){var t=Om(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lm(n.ownerDocument.documentElement,n)){if(r!==null&&Wc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Id(n,o);var a=Id(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uy=on&&"documentMode"in document&&11>=document.documentMode,Rr=null,ku=null,Xi=null,Su=!1;function Md(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||Rr==null||Rr!==Ha(r)||(r=Rr,"selectionStart"in r&&Wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&ho(Xi,r)||(Xi=r,r=Xa(ku,"onSelect"),0<r.length&&(t=new Uc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},xs={},Am={};on&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function El(e){if(xs[e])return xs[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Am)return xs[e]=t[n];return e}var Im=El("animationend"),Mm=El("animationiteration"),zm=El("animationstart"),Dm=El("transitionend"),$m=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){$m.set(e,t),xr(t,[e])}for(var ws=0;ws<zd.length;ws++){var ks=zd[ws],cy=ks.toLowerCase(),fy=ks[0].toUpperCase()+ks.slice(1);Vn(cy,"on"+fy)}Vn(Im,"onAnimationEnd");Vn(Mm,"onAnimationIteration");Vn(zm,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Dm,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function Dd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,c1(r,t,void 0,e),e.currentTarget=null}function Fm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Dd(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Dd(i,l,u),o=s}}}if(Va)throw e=gu,Va=!1,gu=null,e}function se(e,t){var n=t[ju];n===void 0&&(n=t[ju]=new Set);var r=e+"__bubble";n.has(r)||(Um(t,e,2,!1),n.add(r))}function Ss(e,t,n){var r=0;t&&(r|=4),Um(n,e,r,t)}var na="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[na]){e[na]=!0,Kh.forEach(function(n){n!=="selectionchange"&&(dy.has(n)||Ss(n,!1,e),Ss(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[na]||(t[na]=!0,Ss("selectionchange",!1,t))}}function Um(e,t,n,r){switch(Cm(t)){case 1:var i=E1;break;case 4:i=j1;break;default:i=$c}n=i.bind(null,t,n,e),i=void 0,!vu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function bs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=er(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}cm(function(){var u=o,f=Ic(n),p=[];e:{var h=$m.get(e);if(h!==void 0){var w=Uc,x=e;switch(e){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":w=B1;break;case"focusin":x="focus",w=vs;break;case"focusout":x="blur",w=vs;break;case"beforeblur":case"afterblur":w=vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=_1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=V1;break;case Im:case Mm:case zm:w=O1;break;case Dm:w=G1;break;case"scroll":w=N1;break;case"wheel":w=Q1;break;case"copy":case"cut":case"paste":w=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Nd}var k=(t&4)!==0,E=!k&&e==="scroll",m=k?h!==null?h+"Capture":null:h;k=[];for(var d=u,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,m!==null&&(v=so(d,m),v!=null&&k.push(vo(d,v,g)))),E)break;d=d.return}0<k.length&&(h=new w(h,x,null,n,f),p.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==hu&&(x=n.relatedTarget||n.fromElement)&&(er(x)||x[an]))break e;if((w||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?er(x):null,x!==null&&(E=wr(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(k=Ed,v="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Nd,v="onPointerLeave",m="onPointerEnter",d="pointer"),E=w==null?h:Or(w),g=x==null?h:Or(x),h=new k(v,d+"leave",w,n,f),h.target=E,h.relatedTarget=g,v=null,er(f)===u&&(k=new k(m,d+"enter",x,n,f),k.target=g,k.relatedTarget=E,v=k),E=v,w&&x)t:{for(k=w,m=x,d=0,g=k;g;g=Er(g))d++;for(g=0,v=m;v;v=Er(v))g++;for(;0<d-g;)k=Er(k),d--;for(;0<g-d;)m=Er(m),g--;for(;d--;){if(k===m||m!==null&&k===m.alternate)break t;k=Er(k),m=Er(m)}k=null}else k=null;w!==null&&$d(p,h,w,k,!1),x!==null&&E!==null&&$d(p,E,x,k,!0)}}e:{if(h=u?Or(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var P=ny;else if(Rd(h))if(_m)P=ay;else{P=iy;var j=ry}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=oy);if(P&&(P=P(e,u))){Tm(p,P,n,f);break e}j&&j(e,h,u),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&uu(h,"number",h.value)}switch(j=u?Or(u):window,e){case"focusin":(Rd(j)||j.contentEditable==="true")&&(Rr=j,ku=u,Xi=null);break;case"focusout":Xi=ku=Rr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Md(p,n,f);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":Md(p,n,f)}var b;if(Hc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _r?jm(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Em&&n.locale!=="ko"&&(_r||R!=="onCompositionStart"?R==="onCompositionEnd"&&_r&&(b=Pm()):(jn=f,Fc="value"in jn?jn.value:jn.textContent,_r=!0)),j=Xa(u,R),0<j.length&&(R=new jd(R,e,null,n,f),p.push({event:R,listeners:j}),b?R.data=b:(b=Nm(n),b!==null&&(R.data=b)))),(b=J1?Z1(e,n):q1(e,n))&&(u=Xa(u,"onBeforeInput"),0<u.length&&(f=new jd("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=b))}Fm(p,t)})}function vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=so(e,n),o!=null&&r.unshift(vo(e,o,i)),o=so(e,t),o!=null&&r.push(vo(e,o,i))),e=e.return}return r}function Er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $d(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=so(n,o),s!=null&&a.unshift(vo(n,s,l))):i||(s=so(n,o),s!=null&&a.push(vo(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var py=/\r\n?/g,hy=/\u0000|\uFFFD/g;function Fd(e){return(typeof e=="string"?e:""+e).replace(py,`
`).replace(hy,"")}function ra(e,t,n){if(t=Fd(t),Fd(e)!==t&&n)throw Error(_(425))}function Ja(){}var bu=null,Cu=null;function Pu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(e){return Ud.resolve(null).then(e).catch(gy)}:Eu;function gy(e){setTimeout(function(){throw e})}function Cs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fo(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gi=Math.random().toString(36).slice(2),Gt="__reactFiber$"+gi,go="__reactProps$"+gi,an="__reactContainer$"+gi,ju="__reactEvents$"+gi,yy="__reactListeners$"+gi,xy="__reactHandles$"+gi;function er(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[an]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bd(e);e!==null;){if(n=e[Gt])return n;e=Bd(e)}return t}e=n,n=e.parentNode}return null}function Io(e){return e=e[Gt]||e[an],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function jl(e){return e[go]||null}var Nu=[],Ar=-1;function Yn(e){return{current:e}}function fe(e){0>Ar||(e.current=Nu[Ar],Nu[Ar]=null,Ar--)}function le(e,t){Ar++,Nu[Ar]=e.current,e.current=t}var Fn={},Ke=Yn(Fn),at=Yn(!1),cr=Fn;function ti(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function Za(){fe(at),fe(Ke)}function Hd(e,t,n){if(Ke.current!==Fn)throw Error(_(168));le(Ke,t),le(at,n)}function Bm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,r1(e)||"Unknown",i));return ye({},n,r)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,cr=Ke.current,le(Ke,e),le(at,at.current),!0}function Wd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Bm(e,t,cr),r.__reactInternalMemoizedMergedChildContext=e,fe(at),fe(Ke),le(Ke,e)):fe(at),le(at,n)}var qt=null,Nl=!1,Ps=!1;function Hm(e){qt===null?qt=[e]:qt.push(e)}function wy(e){Nl=!0,Hm(e)}function Gn(){if(!Ps&&qt!==null){Ps=!0;var e=0,t=re;try{var n=qt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,Nl=!1}catch(i){throw qt!==null&&(qt=qt.slice(e+1)),hm(Mc,Gn),i}finally{re=t,Ps=!1}}return null}var Ir=[],Mr=0,el=null,tl=0,wt=[],kt=0,fr=null,en=1,tn="";function Zn(e,t){Ir[Mr++]=tl,Ir[Mr++]=el,el=e,tl=t}function Wm(e,t,n){wt[kt++]=en,wt[kt++]=tn,wt[kt++]=fr,fr=e;var r=en;e=tn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var o=32-zt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,en=1<<32-zt(t)+i|n<<i|r,tn=o+e}else en=1<<o|n<<i|r,tn=e}function Vc(e){e.return!==null&&(Zn(e,1),Wm(e,1,0))}function Yc(e){for(;e===el;)el=Ir[--Mr],Ir[Mr]=null,tl=Ir[--Mr],Ir[Mr]=null;for(;e===fr;)fr=wt[--kt],wt[kt]=null,tn=wt[--kt],wt[kt]=null,en=wt[--kt],wt[kt]=null}var ft=null,ct=null,he=!1,It=null;function Vm(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,ct=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fr!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,ct=null,!0):!1;default:return!1}}function Tu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(he){var t=ct;if(t){var n=t;if(!Vd(e,t)){if(Tu(e))throw Error(_(418));t=On(n.nextSibling);var r=ft;t&&Vd(e,t)?Vm(r,n):(e.flags=e.flags&-4097|2,he=!1,ft=e)}}else{if(Tu(e))throw Error(_(418));e.flags=e.flags&-4097|2,he=!1,ft=e}}}function Yd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function ia(e){if(e!==ft)return!1;if(!he)return Yd(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pu(e.type,e.memoizedProps)),t&&(t=ct)){if(Tu(e))throw Ym(),Error(_(418));for(;t;)Vm(e,t),t=On(t.nextSibling)}if(Yd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ft?On(e.stateNode.nextSibling):null;return!0}function Ym(){for(var e=ct;e;)e=On(e.nextSibling)}function ni(){ct=ft=null,he=!1}function Gc(e){It===null?It=[e]:It.push(e)}var ky=dn.ReactCurrentBatchConfig;function Lt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var nl=Yn(null),rl=null,zr=null,Kc=null;function Qc(){Kc=zr=rl=null}function Xc(e){var t=nl.current;fe(nl),e._currentValue=t}function Ru(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qr(e,t){rl=e,Kc=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ot=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(Kc!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(rl===null)throw Error(_(308));zr=e,rl.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var tr=null;function Jc(e){tr===null?tr=[e]:tr.push(e)}function Gm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Jc(t)):(n.next=i.next,i.next=n),t.interleaved=n,ln(e,r)}function ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function Zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Km(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ln(e,n)}return i=r.interleaved,i===null?(t.next=t,Jc(r)):(t.next=i.next,i.next=t),r.interleaved=t,ln(e,n)}function _a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zc(e,n)}}function Gd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function il(e,t,n,r){var i=e.updateQueue;Cn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(o!==null){var p=i.baseState;a=0,f=u=s=null,l=o;do{var h=l.lane,w=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,k=l;switch(h=t,w=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){p=x.call(w,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,h=typeof x=="function"?x.call(w,p,h):x,h==null)break e;p=ye({},p,h);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=w,s=p):f=f.next=w,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(f===null&&(s=p),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=a,e.lanes=a,e.memoizedState=p}}function Kd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Qm=new Gh.Component().refs;function Lu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tl={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Mn(e),o=nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(Dt(t,e,i,r),_a(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Mn(e),o=nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(Dt(t,e,i,r),_a(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=Mn(e),i=nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(Dt(t,e,r,n),_a(t,e,r))}};function Qd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ho(n,r)||!ho(i,o):!0}function Xm(e,t,n){var r=!1,i=Fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Et(o):(i=lt(t)?cr:Ke.current,r=t.contextTypes,o=(r=r!=null)?ti(e,i):Fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function Ou(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Qm,Zc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Et(o):(o=lt(t)?cr:Ke.current,i.context=ti(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Lu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Tl.enqueueReplaceState(i,i.state,null),il(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Qm&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function oa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jd(e){var t=e._init;return t(e._payload)}function Jm(e){function t(m,d){if(e){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=zn(m,d),m.index=0,m.sibling=null,m}function o(m,d,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,g,v){return d===null||d.tag!==6?(d=Ls(g,m.mode,v),d.return=m,d):(d=i(d,g),d.return=m,d)}function s(m,d,g,v){var P=g.type;return P===Tr?f(m,d,g.props.children,v,g.key):d!==null&&(d.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===bn&&Jd(P)===d.type)?(v=i(d,g.props),v.ref=Ri(m,d,g),v.return=m,v):(v=Ma(g.type,g.key,g.props,null,m.mode,v),v.ref=Ri(m,d,g),v.return=m,v)}function u(m,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Os(g,m.mode,v),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function f(m,d,g,v,P){return d===null||d.tag!==7?(d=sr(g,m.mode,v,P),d.return=m,d):(d=i(d,g),d.return=m,d)}function p(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ls(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ko:return g=Ma(d.type,d.key,d.props,null,m.mode,g),g.ref=Ri(m,null,d),g.return=m,g;case Nr:return d=Os(d,m.mode,g),d.return=m,d;case bn:var v=d._init;return p(m,v(d._payload),g)}if(Ui(d)||Ei(d))return d=sr(d,m.mode,g,null),d.return=m,d;oa(m,d)}return null}function h(m,d,g,v){var P=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:l(m,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:return g.key===P?s(m,d,g,v):null;case Nr:return g.key===P?u(m,d,g,v):null;case bn:return P=g._init,h(m,d,P(g._payload),v)}if(Ui(g)||Ei(g))return P!==null?null:f(m,d,g,v,null);oa(m,g)}return null}function w(m,d,g,v,P){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(g)||null,l(d,m,""+v,P);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:return m=m.get(v.key===null?g:v.key)||null,s(d,m,v,P);case Nr:return m=m.get(v.key===null?g:v.key)||null,u(d,m,v,P);case bn:var j=v._init;return w(m,d,g,j(v._payload),P)}if(Ui(v)||Ei(v))return m=m.get(g)||null,f(d,m,v,P,null);oa(d,v)}return null}function x(m,d,g,v){for(var P=null,j=null,b=d,R=d=0,M=null;b!==null&&R<g.length;R++){b.index>R?(M=b,b=null):M=b.sibling;var B=h(m,b,g[R],v);if(B===null){b===null&&(b=M);break}e&&b&&B.alternate===null&&t(m,b),d=o(B,d,R),j===null?P=B:j.sibling=B,j=B,b=M}if(R===g.length)return n(m,b),he&&Zn(m,R),P;if(b===null){for(;R<g.length;R++)b=p(m,g[R],v),b!==null&&(d=o(b,d,R),j===null?P=b:j.sibling=b,j=b);return he&&Zn(m,R),P}for(b=r(m,b);R<g.length;R++)M=w(b,m,R,g[R],v),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?R:M.key),d=o(M,d,R),j===null?P=M:j.sibling=M,j=M);return e&&b.forEach(function(q){return t(m,q)}),he&&Zn(m,R),P}function k(m,d,g,v){var P=Ei(g);if(typeof P!="function")throw Error(_(150));if(g=P.call(g),g==null)throw Error(_(151));for(var j=P=null,b=d,R=d=0,M=null,B=g.next();b!==null&&!B.done;R++,B=g.next()){b.index>R?(M=b,b=null):M=b.sibling;var q=h(m,b,B.value,v);if(q===null){b===null&&(b=M);break}e&&b&&q.alternate===null&&t(m,b),d=o(q,d,R),j===null?P=q:j.sibling=q,j=q,b=M}if(B.done)return n(m,b),he&&Zn(m,R),P;if(b===null){for(;!B.done;R++,B=g.next())B=p(m,B.value,v),B!==null&&(d=o(B,d,R),j===null?P=B:j.sibling=B,j=B);return he&&Zn(m,R),P}for(b=r(m,b);!B.done;R++,B=g.next())B=w(b,m,R,B.value,v),B!==null&&(e&&B.alternate!==null&&b.delete(B.key===null?R:B.key),d=o(B,d,R),j===null?P=B:j.sibling=B,j=B);return e&&b.forEach(function(_e){return t(m,_e)}),he&&Zn(m,R),P}function E(m,d,g,v){if(typeof g=="object"&&g!==null&&g.type===Tr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:e:{for(var P=g.key,j=d;j!==null;){if(j.key===P){if(P=g.type,P===Tr){if(j.tag===7){n(m,j.sibling),d=i(j,g.props.children),d.return=m,m=d;break e}}else if(j.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===bn&&Jd(P)===j.type){n(m,j.sibling),d=i(j,g.props),d.ref=Ri(m,j,g),d.return=m,m=d;break e}n(m,j);break}else t(m,j);j=j.sibling}g.type===Tr?(d=sr(g.props.children,m.mode,v,g.key),d.return=m,m=d):(v=Ma(g.type,g.key,g.props,null,m.mode,v),v.ref=Ri(m,d,g),v.return=m,m=v)}return a(m);case Nr:e:{for(j=g.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Os(g,m.mode,v),d.return=m,m=d}return a(m);case bn:return j=g._init,E(m,d,j(g._payload),v)}if(Ui(g))return x(m,d,g,v);if(Ei(g))return k(m,d,g,v);oa(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=Ls(g,m.mode,v),d.return=m,m=d),a(m)):n(m,d)}return E}var ri=Jm(!0),Zm=Jm(!1),Mo={},Xt=Yn(Mo),yo=Yn(Mo),xo=Yn(Mo);function nr(e){if(e===Mo)throw Error(_(174));return e}function qc(e,t){switch(le(xo,t),le(yo,e),le(Xt,Mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fu(t,e)}fe(Xt),le(Xt,t)}function ii(){fe(Xt),fe(yo),fe(xo)}function qm(e){nr(xo.current);var t=nr(Xt.current),n=fu(t,e.type);t!==n&&(le(yo,e),le(Xt,n))}function ef(e){yo.current===e&&(fe(Xt),fe(yo))}var ve=Yn(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=[];function tf(){for(var e=0;e<Es.length;e++)Es[e]._workInProgressVersionPrimary=null;Es.length=0}var Ra=dn.ReactCurrentDispatcher,js=dn.ReactCurrentBatchConfig,dr=0,ge=null,Re=null,Me=null,al=!1,Ji=!1,wo=0,Sy=0;function We(){throw Error(_(321))}function nf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function rf(e,t,n,r,i,o){if(dr=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ra.current=e===null||e.memoizedState===null?Ey:jy,e=n(r,i),Ji){o=0;do{if(Ji=!1,wo=0,25<=o)throw Error(_(301));o+=1,Me=Re=null,t.updateQueue=null,Ra.current=Ny,e=n(r,i)}while(Ji)}if(Ra.current=ll,t=Re!==null&&Re.next!==null,dr=0,Me=Re=ge=null,al=!1,t)throw Error(_(300));return e}function of(){var e=wo!==0;return wo=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ge.memoizedState=Me=e:Me=Me.next=e,Me}function jt(){if(Re===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Me===null?ge.memoizedState:Me.next;if(t!==null)Me=t,Re=e;else{if(e===null)throw Error(_(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Me===null?ge.memoizedState=Me=e:Me=Me.next=e}return Me}function ko(e,t){return typeof t=="function"?t(e):t}function Ns(e){var t=jt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var f=u.lane;if((dr&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,ge.lanes|=f,pr|=f}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Ft(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ts(e){var t=jt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ft(o,t.memoizedState)||(ot=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ev(){}function tv(e,t){var n=ge,r=jt(),i=t(),o=!Ft(r.memoizedState,i);if(o&&(r.memoizedState=i,ot=!0),r=r.queue,af(iv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,So(9,rv.bind(null,n,r,i,t),void 0,null),De===null)throw Error(_(349));dr&30||nv(n,t,i)}return i}function nv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rv(e,t,n,r){t.value=n,t.getSnapshot=r,ov(t)&&av(e)}function iv(e,t,n){return n(function(){ov(t)&&av(e)})}function ov(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function av(e){var t=ln(e,1);t!==null&&Dt(t,e,1,-1)}function Zd(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t.queue=e,e=e.dispatch=Py.bind(null,ge,e),[t.memoizedState,e]}function So(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lv(){return jt().memoizedState}function La(e,t,n,r){var i=Vt();ge.flags|=e,i.memoizedState=So(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var i=jt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var a=Re.memoizedState;if(o=a.destroy,r!==null&&nf(r,a.deps)){i.memoizedState=So(t,n,o,r);return}}ge.flags|=e,i.memoizedState=So(1|t,n,o,r)}function qd(e,t){return La(8390656,8,e,t)}function af(e,t){return _l(2048,8,e,t)}function sv(e,t){return _l(4,2,e,t)}function uv(e,t){return _l(4,4,e,t)}function cv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fv(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,cv.bind(null,t,e),n)}function lf(){}function dv(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pv(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hv(e,t,n){return dr&21?(Ft(n,t)||(n=gm(),ge.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n)}function by(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=js.transition;js.transition={};try{e(!1),t()}finally{re=n,js.transition=r}}function mv(){return jt().memoizedState}function Cy(e,t,n){var r=Mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vv(e))gv(t,n);else if(n=Gm(e,t,n,r),n!==null){var i=qe();Dt(n,e,r,i),yv(n,t,r)}}function Py(e,t,n){var r=Mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vv(e))gv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,a)){var s=t.interleaved;s===null?(i.next=i,Jc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Gm(e,t,i,r),n!==null&&(i=qe(),Dt(n,e,r,i),yv(n,t,r))}}function vv(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function gv(e,t){Ji=al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zc(e,n)}}var ll={readContext:Et,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Ey={readContext:Et,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:qd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,La(4194308,4,cv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return La(4194308,4,e,t)},useInsertionEffect:function(e,t){return La(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cy.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:Zd,useDebugValue:lf,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=Zd(!1),t=e[0];return e=by.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=Vt();if(he){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),De===null)throw Error(_(349));dr&30||nv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,qd(iv.bind(null,r,o,e),[e]),r.flags|=2048,So(9,rv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Vt(),t=De.identifierPrefix;if(he){var n=tn,r=en;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jy={readContext:Et,useCallback:dv,useContext:Et,useEffect:af,useImperativeHandle:fv,useInsertionEffect:sv,useLayoutEffect:uv,useMemo:pv,useReducer:Ns,useRef:lv,useState:function(){return Ns(ko)},useDebugValue:lf,useDeferredValue:function(e){var t=jt();return hv(t,Re.memoizedState,e)},useTransition:function(){var e=Ns(ko)[0],t=jt().memoizedState;return[e,t]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},Ny={readContext:Et,useCallback:dv,useContext:Et,useEffect:af,useImperativeHandle:fv,useInsertionEffect:sv,useLayoutEffect:uv,useMemo:pv,useReducer:Ts,useRef:lv,useState:function(){return Ts(ko)},useDebugValue:lf,useDeferredValue:function(e){var t=jt();return Re===null?t.memoizedState=e:hv(t,Re.memoizedState,e)},useTransition:function(){var e=Ts(ko)[0],t=jt().memoizedState;return[e,t]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function oi(e,t){try{var n="",r=t;do n+=n1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _s(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Au(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ty=typeof WeakMap=="function"?WeakMap:Map;function xv(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Wu=r),Au(e,t)},n}function wv(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Au(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Au(e,t),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ep(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ty;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Hy.bind(null,e,t,n),t.then(e,e))}function tp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function np(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var _y=dn.ReactCurrentOwner,ot=!1;function Je(e,t,n,r){t.child=e===null?Zm(t,null,n,r):ri(t,e.child,n,r)}function rp(e,t,n,r,i){n=n.render;var o=t.ref;return Qr(t,i),r=rf(e,t,n,r,o,i),n=of(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(he&&n&&Vc(t),t.flags|=1,Je(e,t,r,i),t.child)}function ip(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!mf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,kv(e,t,o,r,i)):(e=Ma(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(a,r)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=zn(o,r),e.ref=t.ref,e.return=t,t.child=e}function kv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ho(o,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ot=!0);else return t.lanes=e.lanes,sn(e,t,i)}return Iu(e,t,n,r,i)}function Sv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le($r,ut),ut|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le($r,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le($r,ut),ut|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le($r,ut),ut|=r;return Je(e,t,i,n),t.child}function bv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Iu(e,t,n,r,i){var o=lt(n)?cr:Ke.current;return o=ti(t,o),Qr(t,i),n=rf(e,t,n,r,o,i),r=of(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(he&&r&&Vc(t),t.flags|=1,Je(e,t,n,i),t.child)}function op(e,t,n,r,i){if(lt(n)){var o=!0;qa(t)}else o=!1;if(Qr(t,i),t.stateNode===null)Oa(e,t),Xm(t,n,r),Ou(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=lt(n)?cr:Ke.current,u=ti(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Xd(t,a,r,u),Cn=!1;var h=t.memoizedState;a.state=h,il(t,r,a,i),s=t.memoizedState,l!==r||h!==s||at.current||Cn?(typeof f=="function"&&(Lu(t,n,f,r),s=t.memoizedState),(l=Cn||Qd(t,n,l,r,h,s,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Km(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Lt(t.type,l),a.props=u,p=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Et(s):(s=lt(n)?cr:Ke.current,s=ti(t,s));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==s)&&Xd(t,a,r,s),Cn=!1,h=t.memoizedState,a.state=h,il(t,r,a,i);var x=t.memoizedState;l!==p||h!==x||at.current||Cn?(typeof w=="function"&&(Lu(t,n,w,r),x=t.memoizedState),(u=Cn||Qd(t,n,u,r,h,x,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Mu(e,t,n,r,o,i)}function Mu(e,t,n,r,i,o){bv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Wd(t,n,!1),sn(e,t,o);r=t.stateNode,_y.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ri(t,e.child,null,o),t.child=ri(t,null,l,o)):Je(e,t,l,o),t.memoizedState=r.state,i&&Wd(t,n,!0),t.child}function Cv(e){var t=e.stateNode;t.pendingContext?Hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hd(e,t.context,!1),qc(e,t.containerInfo)}function ap(e,t,n,r,i){return ni(),Gc(i),t.flags|=256,Je(e,t,n,r),t.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Du(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pv(e,t,n){var r=t.pendingProps,i=ve.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(ve,i&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ol(a,r,0,null),e=sr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Du(n),t.memoizedState=zu,e):sf(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ry(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=zn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=zn(l,o):(o=sr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Du(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=zu,r}return o=e.child,e=o.sibling,r=zn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sf(e,t){return t=Ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function aa(e,t,n,r){return r!==null&&Gc(r),ri(t,e.child,null,n),e=sf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ry(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=_s(Error(_(422))),aa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ol({mode:"visible",children:r.children},i,0,null),o=sr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ri(t,e.child,null,a),t.child.memoizedState=Du(a),t.memoizedState=zu,o);if(!(t.mode&1))return aa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(_(419)),r=_s(o,r,void 0),aa(e,t,a,r)}if(l=(a&e.childLanes)!==0,ot||l){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ln(e,i),Dt(r,e,i,-1))}return hf(),r=_s(Error(_(421))),aa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Wy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ct=On(i.nextSibling),ft=t,he=!0,It=null,e!==null&&(wt[kt++]=en,wt[kt++]=tn,wt[kt++]=fr,en=e.id,tn=e.overflow,fr=t),t=sf(t,r.children),t.flags|=4096,t)}function lp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ru(e.return,t,n)}function Rs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ev(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Je(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lp(e,n,t);else if(e.tag===19)lp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ol(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ol(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rs(t,!0,n,null,o);break;case"together":Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ly(e,t,n){switch(t.tag){case 3:Cv(t),ni();break;case 5:qm(t);break;case 1:lt(t.type)&&qa(t);break;case 4:qc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?Pv(e,t,n):(le(ve,ve.current&1),e=sn(e,t,n),e!==null?e.sibling:null);le(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ev(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Sv(e,t,n)}return sn(e,t,n)}var jv,$u,Nv,Tv;jv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};Nv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nr(Xt.current);var o=null;switch(n){case"input":i=lu(e,i),r=lu(e,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=cu(e,i),r=cu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ja)}du(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ao.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ao.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&se("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Tv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Li(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Oy(e,t,n){var r=t.pendingProps;switch(Yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return lt(t.type)&&Za(),Ve(t),null;case 3:return r=t.stateNode,ii(),fe(at),fe(Ke),tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,It!==null&&(Gu(It),It=null))),$u(e,t),Ve(t),null;case 5:ef(t);var i=nr(xo.current);if(n=t.type,e!==null&&t.stateNode!=null)Nv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ve(t),null}if(e=nr(Xt.current),ia(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Gt]=t,r[go]=o,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Hi.length;i++)se(Hi[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":vd(r,o),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},se("invalid",r);break;case"textarea":yd(r,o),se("invalid",r)}du(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ra(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ra(r.textContent,l,e),i=["children",""+l]):ao.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&se("scroll",r)}switch(n){case"input":Qo(r),gd(r,o,!0);break;case"textarea":Qo(r),xd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ja)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Gt]=t,e[go]=r,jv(e,t,!1,!1),t.stateNode=e;e:{switch(a=pu(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hi.length;i++)se(Hi[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":vd(e,r),i=lu(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),se("invalid",e);break;case"textarea":yd(e,r),i=cu(e,r),se("invalid",e);break;default:i=r}du(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?om(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&rm(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&lo(e,s):typeof s=="number"&&lo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ao.hasOwnProperty(o)?s!=null&&o==="onScroll"&&se("scroll",e):s!=null&&Rc(e,o,s,a))}switch(n){case"input":Qo(e),gd(e,r,!1);break;case"textarea":Qo(e),xd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ja)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)Tv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=nr(xo.current),nr(Xt.current),ia(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gt]=t,(o=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:ra(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ra(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=t,t.stateNode=r}return Ve(t),null;case 13:if(fe(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&ct!==null&&t.mode&1&&!(t.flags&128))Ym(),ni(),t.flags|=98560,o=!1;else if(o=ia(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[Gt]=t}else ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else It!==null&&(Gu(It),It=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Le===0&&(Le=3):hf())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return ii(),$u(e,t),e===null&&mo(t.stateNode.containerInfo),Ve(t),null;case 10:return Xc(t.type._context),Ve(t),null;case 17:return lt(t.type)&&Za(),Ve(t),null;case 19:if(fe(ve),o=t.memoizedState,o===null)return Ve(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Li(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ol(e),a!==null){for(t.flags|=128,Li(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(ve,ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>ai&&(t.flags|=128,r=!0,Li(o,!1),t.lanes=4194304)}else{if(!r)if(e=ol(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Li(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!he)return Ve(t),null}else 2*Pe()-o.renderingStartTime>ai&&n!==1073741824&&(t.flags|=128,r=!0,Li(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,n=ve.current,le(ve,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return pf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Ay(e,t){switch(Yc(t),t.tag){case 1:return lt(t.type)&&Za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ii(),fe(at),fe(Ke),tf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ef(t),null;case 13:if(fe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ve),null;case 4:return ii(),null;case 10:return Xc(t.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var la=!1,Ye=!1,Iy=typeof WeakSet=="function"?WeakSet:Set,I=null;function Dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function Fu(e,t,n){try{n()}catch(r){xe(e,t,r)}}var sp=!1;function My(e,t){if(bu=Ka,e=Om(),Wc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,p=e,h=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(w=p.firstChild)!==null;)h=p,p=w;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++f===r&&(s=a),(w=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cu={focusedElem:e,selectionRange:n},Ka=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,E=x.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?k:Lt(t.type,k),E);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){xe(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return x=sp,sp=!1,x}function Zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fu(t,n,o)}i=i.next}while(i!==r)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Uu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _v(e){var t=e.alternate;t!==null&&(e.alternate=null,_v(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[go],delete t[ju],delete t[yy],delete t[xy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rv(e){return e.tag===5||e.tag===3||e.tag===4}function up(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ja));else if(r!==4&&(e=e.child,e!==null))for(Bu(e,t,n),e=e.sibling;e!==null;)Bu(e,t,n),e=e.sibling}function Hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}var Ue=null,Ot=!1;function xn(e,t,n){for(n=n.child;n!==null;)Lv(e,t,n),n=n.sibling}function Lv(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Ye||Dr(n,t);case 6:var r=Ue,i=Ot;Ue=null,xn(e,t,n),Ue=r,Ot=i,Ue!==null&&(Ot?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ot?(e=Ue,n=n.stateNode,e.nodeType===8?Cs(e.parentNode,n):e.nodeType===1&&Cs(e,n),fo(e)):Cs(Ue,n.stateNode));break;case 4:r=Ue,i=Ot,Ue=n.stateNode.containerInfo,Ot=!0,xn(e,t,n),Ue=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Fu(n,t,a),i=i.next}while(i!==r)}xn(e,t,n);break;case 1:if(!Ye&&(Dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,t,l)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,xn(e,t,n),Ye=r):xn(e,t,n);break;default:xn(e,t,n)}}function cp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Iy),t.forEach(function(r){var i=Vy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Ot=!1;break e;case 3:Ue=l.stateNode.containerInfo,Ot=!0;break e;case 4:Ue=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(Ue===null)throw Error(_(160));Lv(o,a,i),Ue=null,Ot=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ov(t,e),t=t.sibling}function Ov(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Wt(e),r&4){try{Zi(3,e,e.return),Rl(3,e)}catch(k){xe(e,e.return,k)}try{Zi(5,e,e.return)}catch(k){xe(e,e.return,k)}}break;case 1:Rt(t,e),Wt(e),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(Rt(t,e),Wt(e),r&512&&n!==null&&Dr(n,n.return),e.flags&32){var i=e.stateNode;try{lo(i,"")}catch(k){xe(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&em(i,o),pu(l,a);var u=pu(l,o);for(a=0;a<s.length;a+=2){var f=s[a],p=s[a+1];f==="style"?om(i,p):f==="dangerouslySetInnerHTML"?rm(i,p):f==="children"?lo(i,p):Rc(i,f,p,u)}switch(l){case"input":su(i,o);break;case"textarea":tm(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Vr(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?Vr(i,!!o.multiple,o.defaultValue,!0):Vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[go]=o}catch(k){xe(e,e.return,k)}}break;case 6:if(Rt(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){xe(e,e.return,k)}}break;case 3:if(Rt(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(t.containerInfo)}catch(k){xe(e,e.return,k)}break;case 4:Rt(t,e),Wt(e);break;case 13:Rt(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ff=Pe())),r&4&&cp(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||f,Rt(t,e),Ye=u):Rt(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(p=I=f;I!==null;){switch(h=I,w=h.child,h.tag){case 0:case 11:case 14:case 15:Zi(4,h,h.return);break;case 1:Dr(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){xe(r,n,k)}}break;case 5:Dr(h,h.return);break;case 22:if(h.memoizedState!==null){dp(p);continue}}w!==null?(w.return=h,I=w):dp(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=im("display",a))}catch(k){xe(e,e.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(k){xe(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Rt(t,e),Wt(e),r&4&&cp(e);break;case 21:break;default:Rt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rv(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var o=up(e);Hu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=up(e);Bu(e,l,a);break;default:throw Error(_(161))}}catch(s){xe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zy(e,t,n){I=e,Av(e)}function Av(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||la;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Ye;l=la;var u=Ye;if(la=a,(Ye=s)&&!u)for(I=i;I!==null;)a=I,s=a.child,a.tag===22&&a.memoizedState!==null?pp(i):s!==null?(s.return=a,I=s):pp(i);for(;o!==null;)I=o,Av(o),o=o.sibling;I=i,la=l,Ye=u}fp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):fp(e)}}function fp(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&fo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ye||t.flags&512&&Uu(t)}catch(h){xe(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function dp(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function pp(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rl(4,t)}catch(s){xe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){xe(t,i,s)}}var o=t.return;try{Uu(t)}catch(s){xe(t,o,s)}break;case 5:var a=t.return;try{Uu(t)}catch(s){xe(t,a,s)}}}catch(s){xe(t,t.return,s)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Dy=Math.ceil,sl=dn.ReactCurrentDispatcher,uf=dn.ReactCurrentOwner,Ct=dn.ReactCurrentBatchConfig,Z=0,De=null,Te=null,Be=0,ut=0,$r=Yn(0),Le=0,bo=null,pr=0,Ll=0,cf=0,qi=null,it=null,ff=0,ai=1/0,Jt=null,ul=!1,Wu=null,In=null,sa=!1,Nn=null,cl=0,eo=0,Vu=null,Aa=-1,Ia=0;function qe(){return Z&6?Pe():Aa!==-1?Aa:Aa=Pe()}function Mn(e){return e.mode&1?Z&2&&Be!==0?Be&-Be:ky.transition!==null?(Ia===0&&(Ia=gm()),Ia):(e=re,e!==0||(e=window.event,e=e===void 0?16:Cm(e.type)),e):1}function Dt(e,t,n,r){if(50<eo)throw eo=0,Vu=null,Error(_(185));Oo(e,n,r),(!(Z&2)||e!==De)&&(e===De&&(!(Z&2)&&(Ll|=n),Le===4&&En(e,Be)),st(e,r),n===1&&Z===0&&!(t.mode&1)&&(ai=Pe()+500,Nl&&Gn()))}function st(e,t){var n=e.callbackNode;k1(e,t);var r=Ga(e,e===De?Be:0);if(r===0)n!==null&&Sd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sd(n),t===1)e.tag===0?wy(hp.bind(null,e)):Hm(hp.bind(null,e)),vy(function(){!(Z&6)&&Gn()}),n=null;else{switch(ym(r)){case 1:n=Mc;break;case 4:n=mm;break;case 16:n=Ya;break;case 536870912:n=vm;break;default:n=Ya}n=Bv(n,Iv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Iv(e,t){if(Aa=-1,Ia=0,Z&6)throw Error(_(327));var n=e.callbackNode;if(Xr()&&e.callbackNode!==n)return null;var r=Ga(e,e===De?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fl(e,r);else{t=r;var i=Z;Z|=2;var o=zv();(De!==e||Be!==t)&&(Jt=null,ai=Pe()+500,lr(e,t));do try{Uy();break}catch(l){Mv(e,l)}while(1);Qc(),sl.current=o,Z=i,Te!==null?t=0:(De=null,Be=0,t=Le)}if(t!==0){if(t===2&&(i=yu(e),i!==0&&(r=i,t=Yu(e,i))),t===1)throw n=bo,lr(e,0),En(e,r),st(e,Pe()),n;if(t===6)En(e,r);else{if(i=e.current.alternate,!(r&30)&&!$y(i)&&(t=fl(e,r),t===2&&(o=yu(e),o!==0&&(r=o,t=Yu(e,o))),t===1))throw n=bo,lr(e,0),En(e,r),st(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:qn(e,it,Jt);break;case 3:if(En(e,r),(r&130023424)===r&&(t=ff+500-Pe(),10<t)){if(Ga(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Eu(qn.bind(null,e,it,Jt),t);break}qn(e,it,Jt);break;case 4:if(En(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-zt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dy(r/1960))-r,10<r){e.timeoutHandle=Eu(qn.bind(null,e,it,Jt),r);break}qn(e,it,Jt);break;case 5:qn(e,it,Jt);break;default:throw Error(_(329))}}}return st(e,Pe()),e.callbackNode===n?Iv.bind(null,e):null}function Yu(e,t){var n=qi;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=fl(e,t),e!==2&&(t=it,it=n,t!==null&&Gu(t)),e}function Gu(e){it===null?it=e:it.push.apply(it,e)}function $y(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~cf,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function hp(e){if(Z&6)throw Error(_(327));Xr();var t=Ga(e,0);if(!(t&1))return st(e,Pe()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var r=yu(e);r!==0&&(t=r,n=Yu(e,r))}if(n===1)throw n=bo,lr(e,0),En(e,t),st(e,Pe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qn(e,it,Jt),st(e,Pe()),null}function df(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(ai=Pe()+500,Nl&&Gn())}}function hr(e){Nn!==null&&Nn.tag===0&&!(Z&6)&&Xr();var t=Z;Z|=1;var n=Ct.transition,r=re;try{if(Ct.transition=null,re=1,e)return e()}finally{re=r,Ct.transition=n,Z=t,!(Z&6)&&Gn()}}function pf(){ut=$r.current,fe($r)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,my(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Za();break;case 3:ii(),fe(at),fe(Ke),tf();break;case 5:ef(r);break;case 4:ii();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:Xc(r.type._context);break;case 22:case 23:pf()}n=n.return}if(De=e,Te=e=zn(e.current,null),Be=ut=t,Le=0,bo=null,cf=Ll=pr=0,it=qi=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}tr=null}return e}function Mv(e,t){do{var n=Te;try{if(Qc(),Ra.current=ll,al){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}al=!1}if(dr=0,Me=Re=ge=null,Ji=!1,wo=0,uf.current=null,n===null||n.return===null){Le=1,bo=t,Te=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=tp(a);if(w!==null){w.flags&=-257,np(w,a,l,o,t),w.mode&1&&ep(o,u,t),t=w,s=u;var x=t.updateQueue;if(x===null){var k=new Set;k.add(s),t.updateQueue=k}else x.add(s);break e}else{if(!(t&1)){ep(o,u,t),hf();break e}s=Error(_(426))}}else if(he&&l.mode&1){var E=tp(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),np(E,a,l,o,t),Gc(oi(s,l));break e}}o=s=oi(s,l),Le!==4&&(Le=2),qi===null?qi=[o]:qi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=xv(o,s,t);Gd(o,m);break e;case 1:l=s;var d=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(In===null||!In.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=wv(o,l,t);Gd(o,v);break e}}o=o.return}while(o!==null)}$v(n)}catch(P){t=P,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function zv(){var e=sl.current;return sl.current=ll,e===null?ll:e}function hf(){(Le===0||Le===3||Le===2)&&(Le=4),De===null||!(pr&268435455)&&!(Ll&268435455)||En(De,Be)}function fl(e,t){var n=Z;Z|=2;var r=zv();(De!==e||Be!==t)&&(Jt=null,lr(e,t));do try{Fy();break}catch(i){Mv(e,i)}while(1);if(Qc(),Z=n,sl.current=r,Te!==null)throw Error(_(261));return De=null,Be=0,Le}function Fy(){for(;Te!==null;)Dv(Te)}function Uy(){for(;Te!==null&&!d1();)Dv(Te)}function Dv(e){var t=Uv(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?$v(e):Te=t,uf.current=null}function $v(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ay(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Te=null;return}}else if(n=Oy(n,t,ut),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Le===0&&(Le=5)}function qn(e,t,n){var r=re,i=Ct.transition;try{Ct.transition=null,re=1,By(e,t,n,r)}finally{Ct.transition=i,re=r}return null}function By(e,t,n,r){do Xr();while(Nn!==null);if(Z&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(S1(e,o),e===De&&(Te=De=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sa||(sa=!0,Bv(Ya,function(){return Xr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var a=re;re=1;var l=Z;Z|=4,uf.current=null,My(e,n),Ov(n,e),sy(Cu),Ka=!!bu,Cu=bu=null,e.current=n,zy(n),p1(),Z=l,re=a,Ct.transition=o}else e.current=n;if(sa&&(sa=!1,Nn=e,cl=i),o=e.pendingLanes,o===0&&(In=null),v1(n.stateNode),st(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ul)throw ul=!1,e=Wu,Wu=null,e;return cl&1&&e.tag!==0&&Xr(),o=e.pendingLanes,o&1?e===Vu?eo++:(eo=0,Vu=e):eo=0,Gn(),null}function Xr(){if(Nn!==null){var e=ym(cl),t=Ct.transition,n=re;try{if(Ct.transition=null,re=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,cl=0,Z&6)throw Error(_(331));var i=Z;for(Z|=4,I=e.current;I!==null;){var o=I,a=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(I=u;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:Zi(8,f,o)}var p=f.child;if(p!==null)p.return=f,I=p;else for(;I!==null;){f=I;var h=f.sibling,w=f.return;if(_v(f),f===u){I=null;break}if(h!==null){h.return=w,I=h;break}I=w}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var E=k.sibling;k.sibling=null,k=E}while(k!==null)}}I=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,I=a;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,I=m;break e}I=o.return}}var d=e.current;for(I=d;I!==null;){a=I;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,I=g;else e:for(a=d;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Rl(9,l)}}catch(P){xe(l,l.return,P)}if(l===a){I=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,I=v;break e}I=l.return}}if(Z=i,Gn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(bl,e)}catch{}r=!0}return r}finally{re=n,Ct.transition=t}}return!1}function mp(e,t,n){t=oi(n,t),t=xv(e,t,1),e=An(e,t,1),t=qe(),e!==null&&(Oo(e,1,t),st(e,t))}function xe(e,t,n){if(e.tag===3)mp(e,e,n);else for(;t!==null;){if(t.tag===3){mp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){e=oi(n,e),e=wv(t,e,1),t=An(t,e,1),e=qe(),t!==null&&(Oo(t,1,e),st(t,e));break}}t=t.return}}function Hy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Be&n)===n&&(Le===4||Le===3&&(Be&130023424)===Be&&500>Pe()-ff?lr(e,0):cf|=n),st(e,t)}function Fv(e,t){t===0&&(e.mode&1?(t=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):t=1);var n=qe();e=ln(e,t),e!==null&&(Oo(e,t,n),st(e,n))}function Wy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fv(e,n)}function Vy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Fv(e,n)}var Uv;Uv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ot=!1,Ly(e,t,n);ot=!!(e.flags&131072)}else ot=!1,he&&t.flags&1048576&&Wm(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oa(e,t),e=t.pendingProps;var i=ti(t,Ke.current);Qr(t,n),i=rf(null,t,r,e,i,n);var o=of();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(o=!0,qa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zc(t),i.updater=Tl,t.stateNode=i,i._reactInternals=t,Ou(t,r,e,n),t=Mu(null,t,r,!0,o,n)):(t.tag=0,he&&o&&Vc(t),Je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Gy(r),e=Lt(r,e),i){case 0:t=Iu(null,t,r,e,n);break e;case 1:t=op(null,t,r,e,n);break e;case 11:t=rp(null,t,r,e,n);break e;case 14:t=ip(null,t,r,Lt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Iu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),op(e,t,r,i,n);case 3:e:{if(Cv(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Km(e,t),il(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=oi(Error(_(423)),t),t=ap(e,t,r,n,i);break e}else if(r!==i){i=oi(Error(_(424)),t),t=ap(e,t,r,n,i);break e}else for(ct=On(t.stateNode.containerInfo.firstChild),ft=t,he=!0,It=null,n=Zm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===i){t=sn(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return qm(t),e===null&&_u(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Pu(r,i)?a=null:o!==null&&Pu(r,o)&&(t.flags|=32),bv(e,t),Je(e,t,a,n),t.child;case 6:return e===null&&_u(t),null;case 13:return Pv(e,t,n);case 4:return qc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ri(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),rp(e,t,r,i,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,le(nl,r._currentValue),r._currentValue=a,o!==null)if(Ft(o.value,a)){if(o.children===i.children&&!at.current){t=sn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=nn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ru(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ru(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qr(t,n),i=Et(i),r=r(i),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,i=Lt(r,t.pendingProps),i=Lt(r.type,i),ip(e,t,r,i,n);case 15:return kv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Oa(e,t),t.tag=1,lt(r)?(e=!0,qa(t)):e=!1,Qr(t,n),Xm(t,r,i),Ou(t,r,i,n),Mu(null,t,r,!0,e,n);case 19:return Ev(e,t,n);case 22:return Sv(e,t,n)}throw Error(_(156,t.tag))};function Bv(e,t){return hm(e,t)}function Yy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,r){return new Yy(e,t,n,r)}function mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gy(e){if(typeof e=="function")return mf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oc)return 11;if(e===Ac)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ma(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")mf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Tr:return sr(n.children,i,o,t);case Lc:a=8,i|=8;break;case ru:return e=bt(12,n,t,i|2),e.elementType=ru,e.lanes=o,e;case iu:return e=bt(13,n,t,i),e.elementType=iu,e.lanes=o,e;case ou:return e=bt(19,n,t,i),e.elementType=ou,e.lanes=o,e;case Jh:return Ol(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qh:a=10;break e;case Xh:a=9;break e;case Oc:a=11;break e;case Ac:a=14;break e;case bn:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=bt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sr(e,t,n,r){return e=bt(7,e,r,t),e.lanes=n,e}function Ol(e,t,n,r){return e=bt(22,e,r,t),e.elementType=Jh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ls(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function Os(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ky(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ps(0),this.expirationTimes=ps(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vf(e,t,n,r,i,o,a,l,s){return e=new Ky(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=bt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(o),e}function Qy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hv(e){if(!e)return Fn;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(lt(n))return Bm(e,n,t)}return t}function Wv(e,t,n,r,i,o,a,l,s){return e=vf(n,r,!0,e,i,o,a,l,s),e.context=Hv(null),n=e.current,r=qe(),i=Mn(n),o=nn(r,i),o.callback=t??null,An(n,o,i),e.current.lanes=i,Oo(e,i,r),st(e,r),e}function Al(e,t,n,r){var i=t.current,o=qe(),a=Mn(i);return n=Hv(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,a),e!==null&&(Dt(e,i,a,o),_a(e,i,a)),a}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gf(e,t){vp(e,t),(e=e.alternate)&&vp(e,t)}function Xy(){return null}var Vv=typeof reportError=="function"?reportError:function(e){console.error(e)};function yf(e){this._internalRoot=e}Il.prototype.render=yf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Al(e,t,null,null)};Il.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){Al(null,e,null,null)}),t[an]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var t=km();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&bm(e)}};function xf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gp(){}function Jy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=dl(a);o.call(u)}}var a=Wv(t,r,e,0,null,!1,!1,"",gp);return e._reactRootContainer=a,e[an]=a.current,mo(e.nodeType===8?e.parentNode:e),hr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=dl(s);l.call(u)}}var s=vf(e,0,!1,null,null,!1,!1,"",gp);return e._reactRootContainer=s,e[an]=s.current,mo(e.nodeType===8?e.parentNode:e),hr(function(){Al(t,s,n,r)}),s}function zl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=dl(a);l.call(s)}}Al(t,a,e,i)}else a=Jy(n,t,e,i,r);return dl(a)}xm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bi(t.pendingLanes);n!==0&&(zc(t,n|1),st(t,Pe()),!(Z&6)&&(ai=Pe()+500,Gn()))}break;case 13:hr(function(){var r=ln(e,1);if(r!==null){var i=qe();Dt(r,e,1,i)}}),gf(e,1)}};Dc=function(e){if(e.tag===13){var t=ln(e,134217728);if(t!==null){var n=qe();Dt(t,e,134217728,n)}gf(e,134217728)}};wm=function(e){if(e.tag===13){var t=Mn(e),n=ln(e,t);if(n!==null){var r=qe();Dt(n,e,t,r)}gf(e,t)}};km=function(){return re};Sm=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};mu=function(e,t,n){switch(t){case"input":if(su(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jl(r);if(!i)throw Error(_(90));qh(r),su(r,i)}}}break;case"textarea":tm(e,n);break;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}};sm=df;um=hr;var Zy={usingClientEntryPoint:!1,Events:[Io,Or,jl,am,lm,df]},Oi={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qy={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dm(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||Xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{bl=ua.inject(qy),Qt=ua}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(t))throw Error(_(200));return Qy(e,t,null,n)};pt.createRoot=function(e,t){if(!xf(e))throw Error(_(299));var n=!1,r="",i=Vv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vf(e,1,!1,null,null,n,!1,r,i),e[an]=t.current,mo(e.nodeType===8?e.parentNode:e),new yf(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=dm(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return hr(e)};pt.hydrate=function(e,t,n){if(!Ml(t))throw Error(_(200));return zl(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!xf(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Vv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Wv(t,null,e,1,n??null,i,!1,o,a),e[an]=t.current,mo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Il(t)};pt.render=function(e,t,n){if(!Ml(t))throw Error(_(200));return zl(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(_(40));return e._reactRootContainer?(hr(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[an]=null})}),!0):!1};pt.unstable_batchedUpdates=df;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return zl(e,t,n,!1,r)};pt.version="18.2.0-next-9e3b772b8-20220608";function Yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv)}catch(e){console.error(e)}}Yv(),Wh.exports=pt;var wf=Wh.exports;const ex=Cc(wf),tx=Oh({__proto__:null,default:ex},[wf]);var yp=wf;tu.createRoot=yp.createRoot,tu.hydrateRoot=yp.hydrateRoot;/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}var be;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(be||(be={}));const xp="popstate";function nx(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Co("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vr(i)}return ix(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rx(){return Math.random().toString(36).substr(2,8)}function wp(e,t){return{usr:e.state,key:e.key,idx:t}}function Co(e,t,n,r){return n===void 0&&(n=null),we({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pn(t):t,{state:n,key:t&&t.key||r||rx()})}function vr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ix(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=be.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(we({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function p(){l=be.Pop;let E=f(),m=E==null?null:E-u;u=E,s&&s({action:l,location:k.location,delta:m})}function h(E,m){l=be.Push;let d=Co(k.location,E,m);n&&n(d,E),u=f()+1;let g=wp(d,u),v=k.createHref(d);try{a.pushState(g,"",v)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(v)}o&&s&&s({action:l,location:k.location,delta:1})}function w(E,m){l=be.Replace;let d=Co(k.location,E,m);n&&n(d,E),u=f();let g=wp(d,u),v=k.createHref(d);a.replaceState(g,"",v),o&&s&&s({action:l,location:k.location,delta:0})}function x(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:vr(E);return G(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let k={get action(){return l},get location(){return e(i,a)},listen(E){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(xp,p),s=E,()=>{i.removeEventListener(xp,p),s=null}},createHref(E){return t(i,E)},createURL:x,encodeLocation(E){let m=x(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:w,go(E){return a.go(E)}};return k}var Ce;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ce||(Ce={}));const ox=new Set(["lazy","caseSensitive","path","id","index","children"]);function ax(e){return e.index===!0}function Ku(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),ax(i)){let s=we({},i,t(i),{id:l});return r[l]=s,s}else{let s=we({},i,t(i),{id:l,children:void 0});return r[l]=s,i.children&&(s.children=Ku(i.children,t,a,r)),s}})}function Fr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?pn(t):t,i=Un(r.pathname||"/",n);if(i==null)return null;let o=Gv(e);sx(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=gx(o[l],xx(i));return a}function lx(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Gv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(G(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=rn([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(G(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gv(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:mx(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Kv(o.path))i(o,a,s)}),t}function Kv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Kv(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function sx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ux=/^:\w+$/,cx=3,fx=2,dx=1,px=10,hx=-2,kp=e=>e==="*";function mx(e,t){let n=e.split("/"),r=n.length;return n.some(kp)&&(r+=hx),t&&(r+=fx),n.filter(i=>!kp(i)).reduce((i,o)=>i+(ux.test(o)?cx:o===""?dx:px),r)}function vx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function gx(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Qu({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let p=l.route;o.push({params:r,pathname:rn([i,f.pathname]),pathnameBase:bx(rn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=rn([i,f.pathnameBase]))}return o}function Qu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,p)=>{let{paramName:h,isOptional:w}=f;if(h==="*"){let k=l[p]||"";a=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const x=l[p];return w&&!x?u[h]=void 0:u[h]=wx(x||"",h),u},{}),pathname:o,pathnameBase:a,pattern:e}}function yx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function xx(e){try{return decodeURI(e)}catch(t){return mr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wx(e,t){try{return decodeURIComponent(e)}catch(n){return mr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Un(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function kx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?pn(e):e;return{pathname:n?n.startsWith("/")?n:Sx(n,t):t,search:Cx(r),hash:Px(i)}}function Sx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function As(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kf(e){return Qv(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function Sf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=pn(e):(i=we({},e),G(!i.pathname||!i.pathname.includes("?"),As("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),As("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),As("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else if(r){let p=t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p.pop();i.pathname=h.join("/")}l="/"+p.join("/")}else{let p=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}l=p>=0?t[p]:"/"}let s=kx(i,l),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),bx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Px=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class bf{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Xv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jv=["post","put","patch","delete"],Ex=new Set(Jv),jx=["get",...Jv],Nx=new Set(jx),Tx=new Set([301,302,303,307,308]),_x=new Set([307,308]),Is={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Rx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ai={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lx=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),qv="remix-router-transitions";function Ox(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let S=e.detectErrorBoundary;i=C=>({hasErrorBoundary:S(C)})}else i=Lx;let o={},a=Ku(e.routes,i,void 0,o),l,s=e.basename||"/",u=we({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),f=null,p=new Set,h=null,w=null,x=null,k=e.hydrationData!=null,E=Fr(a,e.history.location,s),m=null;if(E==null){let S=xt(404,{pathname:e.history.location.pathname}),{matches:C,route:N}=Tp(a);E=C,m={[N.id]:S}}let d=!E.some(S=>S.route.lazy)&&(!E.some(S=>S.route.loader)||e.hydrationData!=null),g,v={historyAction:e.history.action,location:e.history.location,matches:E,initialized:d,navigation:Is,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map,blockers:new Map},P=be.Pop,j=!1,b,R=!1,M=new Map,B=null,q=!1,_e=!1,Ee=[],Tt=[],pe=new Map,vt=0,Ae=-1,L=new Map,$=new Set,U=new Map,te=new Map,ee=new Set,$e=new Map,Se=new Map,gt=!1;function Qe(){if(f=e.history.listen(S=>{let{action:C,location:N,delta:O}=S;if(gt){gt=!1;return}mr(Se.size===0||O!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let D=ad({currentLocation:v.location,nextLocation:N,historyAction:C});if(D&&O!=null){gt=!0,e.history.go(O*-1),Vo(D,{state:"blocked",location:N,proceed(){Vo(D,{state:"proceeding",proceed:void 0,reset:void 0,location:N}),e.history.go(O)},reset(){let K=new Map(v.blockers);K.set(D,Ai),Ie({blockers:K})}});return}return Xn(C,N)}),n){Wx(t,M);let S=()=>Vx(t,M);t.addEventListener("pagehide",S),B=()=>t.removeEventListener("pagehide",S)}return v.initialized||Xn(be.Pop,v.location),g}function nt(){f&&f(),B&&B(),p.clear(),b&&b.abort(),v.fetchers.forEach((S,C)=>Wo(C)),v.blockers.forEach((S,C)=>od(C))}function Si(S){return p.add(S),()=>p.delete(S)}function Ie(S,C){C===void 0&&(C={}),v=we({},v,S);let N=[],O=[];u.v7_fetcherPersist&&v.fetchers.forEach((D,K)=>{D.state==="idle"&&(ee.has(K)?O.push(K):N.push(K))}),[...p].forEach(D=>D(v,{deletedFetchers:O,unstable_viewTransitionOpts:C.viewTransitionOpts,unstable_flushSync:C.flushSync===!0})),u.v7_fetcherPersist&&(N.forEach(D=>v.fetchers.delete(D)),O.forEach(D=>Wo(D)))}function rt(S,C,N){var O,D;let{flushSync:K}=N===void 0?{}:N,W=v.actionData!=null&&v.navigation.formMethod!=null&&At(v.navigation.formMethod)&&v.navigation.state==="loading"&&((O=S.state)==null?void 0:O._isRedirect)!==!0,H;C.actionData?Object.keys(C.actionData).length>0?H=C.actionData:H=null:W?H=v.actionData:H=null;let F=C.loaderData?Np(v.loaderData,C.loaderData,C.matches||[],C.errors):v.loaderData,J=v.blockers;J.size>0&&(J=new Map(J),J.forEach((oe,me)=>J.set(me,Ai)));let Fe=j===!0||v.navigation.formMethod!=null&&At(v.navigation.formMethod)&&((D=S.state)==null?void 0:D._isRedirect)!==!0;l&&(a=l,l=void 0),q||P===be.Pop||(P===be.Push?e.history.push(S,S.state):P===be.Replace&&e.history.replace(S,S.state));let Q;if(P===be.Pop){let oe=M.get(v.location.pathname);oe&&oe.has(S.pathname)?Q={currentLocation:v.location,nextLocation:S}:M.has(S.pathname)&&(Q={currentLocation:S,nextLocation:v.location})}else if(R){let oe=M.get(v.location.pathname);oe?oe.add(S.pathname):(oe=new Set([S.pathname]),M.set(v.location.pathname,oe)),Q={currentLocation:v.location,nextLocation:S}}Ie(we({},C,{actionData:H,loaderData:F,historyAction:P,location:S,initialized:!0,navigation:Is,revalidation:"idle",restoreScrollPosition:sd(S,C.matches||v.matches),preventScrollReset:Fe,blockers:J}),{viewTransitionOpts:Q,flushSync:K===!0}),P=be.Pop,j=!1,R=!1,q=!1,_e=!1,Ee=[],Tt=[]}async function qf(S,C){if(typeof S=="number"){e.history.go(S);return}let N=Xu(v.location,v.matches,s,u.v7_prependBasename,S,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:O,submission:D,error:K}=Sp(u.v7_normalizeFormMethod,!1,N,C),W=v.location,H=Co(v.location,O,C&&C.state);H=we({},H,e.history.encodeLocation(H));let F=C&&C.replace!=null?C.replace:void 0,J=be.Push;F===!0?J=be.Replace:F===!1||D!=null&&At(D.formMethod)&&D.formAction===v.location.pathname+v.location.search&&(J=be.Replace);let Fe=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,Q=(C&&C.unstable_flushSync)===!0,oe=ad({currentLocation:W,nextLocation:H,historyAction:J});if(oe){Vo(oe,{state:"blocked",location:H,proceed(){Vo(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),qf(S,C)},reset(){let me=new Map(v.blockers);me.set(oe,Ai),Ie({blockers:me})}});return}return await Xn(J,H,{submission:D,pendingError:K,preventScrollReset:Fe,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition,flushSync:Q})}function g0(){if(ns(),Ie({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Xn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Xn(P||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Xn(S,C,N){b&&b.abort(),b=null,P=S,q=(N&&N.startUninterruptedRevalidation)===!0,E0(v.location,v.matches),j=(N&&N.preventScrollReset)===!0,R=(N&&N.enableViewTransition)===!0;let O=l||a,D=N&&N.overrideNavigation,K=Fr(O,C,s),W=(N&&N.flushSync)===!0;if(!K){let me=xt(404,{pathname:C.pathname}),{matches:Xe,route:Ht}=Tp(O);rs(),rt(C,{matches:Xe,loaderData:{},errors:{[Ht.id]:me}},{flushSync:W});return}if(v.initialized&&!_e&&Dx(v.location,C)&&!(N&&N.submission&&At(N.submission.formMethod))){rt(C,{matches:K},{flushSync:W});return}b=new AbortController;let H=Mi(e.history,C,b.signal,N&&N.submission),F,J;if(N&&N.pendingError)J={[to(K).route.id]:N.pendingError};else if(N&&N.submission&&At(N.submission.formMethod)){let me=await y0(H,C,N.submission,K,{replace:N.replace,flushSync:W});if(me.shortCircuited)return;F=me.pendingActionData,J=me.pendingActionError,D=Ms(C,N.submission),W=!1,H=new Request(H.url,{signal:H.signal})}let{shortCircuited:Fe,loaderData:Q,errors:oe}=await x0(H,C,K,D,N&&N.submission,N&&N.fetcherSubmission,N&&N.replace,W,F,J);Fe||(b=null,rt(C,we({matches:K},F?{actionData:F}:{},{loaderData:Q,errors:oe})))}async function y0(S,C,N,O,D){D===void 0&&(D={}),ns();let K=Bx(C,N);Ie({navigation:K},{flushSync:D.flushSync===!0});let W,H=Zu(O,C);if(!H.route.action&&!H.route.lazy)W={type:Ce.error,error:xt(405,{method:S.method,pathname:C.pathname,routeId:H.route.id})};else if(W=await Ii("action",S,H,O,o,i,s),S.signal.aborted)return{shortCircuited:!0};if(Jr(W)){let F;return D&&D.replace!=null?F=D.replace:F=W.location===v.location.pathname+v.location.search,await bi(v,W,{submission:N,replace:F}),{shortCircuited:!0}}if(no(W)){let F=to(O,H.route.id);return(D&&D.replace)!==!0&&(P=be.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:W.error}}}if(rr(W))throw xt(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:W.data}}}async function x0(S,C,N,O,D,K,W,H,F,J){let Fe=O||Ms(C,D),Q=D||K||Lp(Fe),oe=l||a,[me,Xe]=bp(e.history,v,N,Q,C,_e,Ee,Tt,ee,U,$,oe,s,F,J);if(rs(ae=>!(N&&N.some(yt=>yt.route.id===ae))||me&&me.some(yt=>yt.route.id===ae)),Ae=++vt,me.length===0&&Xe.length===0){let ae=rd();return rt(C,we({matches:N,loaderData:{},errors:J||null},F?{actionData:F}:{},ae?{fetchers:new Map(v.fetchers)}:{}),{flushSync:H}),{shortCircuited:!0}}if(!q){Xe.forEach(yt=>{let je=v.fetchers.get(yt.key),Jn=zi(void 0,je?je.data:void 0);v.fetchers.set(yt.key,Jn)});let ae=F||v.actionData;Ie(we({navigation:Fe},ae?Object.keys(ae).length===0?{actionData:null}:{actionData:ae}:{},Xe.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:H})}Xe.forEach(ae=>{pe.has(ae.key)&&yn(ae.key),ae.controller&&pe.set(ae.key,ae.controller)});let Ht=()=>Xe.forEach(ae=>yn(ae.key));b&&b.signal.addEventListener("abort",Ht);let{results:Pi,loaderResults:is,fetcherResults:Cr}=await ed(v.matches,N,me,Xe,S);if(S.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",Ht),Xe.forEach(ae=>pe.delete(ae.key));let _t=_p(Pi);if(_t){if(_t.idx>=me.length){let ae=Xe[_t.idx-me.length].key;$.add(ae)}return await bi(v,_t.result,{replace:W}),{shortCircuited:!0}}let{loaderData:Yo,errors:os}=jp(v,N,me,is,J,Xe,Cr,$e);$e.forEach((ae,yt)=>{ae.subscribe(je=>{(je||ae.done)&&$e.delete(yt)})});let as=rd(),ls=id(Ae),Pr=as||ls||Xe.length>0;return we({loaderData:Yo,errors:os},Pr?{fetchers:new Map(v.fetchers)}:{})}function w0(S,C,N,O){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");pe.has(S)&&yn(S);let D=(O&&O.unstable_flushSync)===!0,K=l||a,W=Xu(v.location,v.matches,s,u.v7_prependBasename,N,C,O==null?void 0:O.relative),H=Fr(K,W,s);if(!H){Ci(S,C,xt(404,{pathname:W}),{flushSync:D});return}let{path:F,submission:J,error:Fe}=Sp(u.v7_normalizeFormMethod,!0,W,O);if(Fe){Ci(S,C,Fe,{flushSync:D});return}let Q=Zu(H,F);if(j=(O&&O.preventScrollReset)===!0,J&&At(J.formMethod)){k0(S,C,F,Q,H,D,J);return}U.set(S,{routeId:C,path:F}),S0(S,C,F,Q,H,D,J)}async function k0(S,C,N,O,D,K,W){if(ns(),U.delete(S),!O.route.action&&!O.route.lazy){let je=xt(405,{method:W.formMethod,pathname:N,routeId:C});Ci(S,C,je,{flushSync:K});return}let H=v.fetchers.get(S);gn(S,Hx(W,H),{flushSync:K});let F=new AbortController,J=Mi(e.history,N,F.signal,W);pe.set(S,F);let Fe=vt,Q=await Ii("action",J,O,D,o,i,s);if(J.signal.aborted){pe.get(S)===F&&pe.delete(S);return}if(ee.has(S)){gn(S,kn(void 0));return}if(Jr(Q))if(pe.delete(S),Ae>Fe){gn(S,kn(void 0));return}else return $.add(S),gn(S,zi(W)),bi(v,Q,{fetcherSubmission:W});if(no(Q)){Ci(S,C,Q.error);return}if(rr(Q))throw xt(400,{type:"defer-action"});let oe=v.navigation.location||v.location,me=Mi(e.history,oe,F.signal),Xe=l||a,Ht=v.navigation.state!=="idle"?Fr(Xe,v.navigation.location,s):v.matches;G(Ht,"Didn't find any matches after fetcher action");let Pi=++vt;L.set(S,Pi);let is=zi(W,Q.data);v.fetchers.set(S,is);let[Cr,_t]=bp(e.history,v,Ht,W,oe,_e,Ee,Tt,ee,U,$,Xe,s,{[O.route.id]:Q.data},void 0);_t.filter(je=>je.key!==S).forEach(je=>{let Jn=je.key,ud=v.fetchers.get(Jn),N0=zi(void 0,ud?ud.data:void 0);v.fetchers.set(Jn,N0),pe.has(Jn)&&yn(Jn),je.controller&&pe.set(Jn,je.controller)}),Ie({fetchers:new Map(v.fetchers)});let Yo=()=>_t.forEach(je=>yn(je.key));F.signal.addEventListener("abort",Yo);let{results:os,loaderResults:as,fetcherResults:ls}=await ed(v.matches,Ht,Cr,_t,me);if(F.signal.aborted)return;F.signal.removeEventListener("abort",Yo),L.delete(S),pe.delete(S),_t.forEach(je=>pe.delete(je.key));let Pr=_p(os);if(Pr){if(Pr.idx>=Cr.length){let je=_t[Pr.idx-Cr.length].key;$.add(je)}return bi(v,Pr.result)}let{loaderData:ae,errors:yt}=jp(v,v.matches,Cr,as,void 0,_t,ls,$e);if(v.fetchers.has(S)){let je=kn(Q.data);v.fetchers.set(S,je)}id(Pi),v.navigation.state==="loading"&&Pi>Ae?(G(P,"Expected pending action"),b&&b.abort(),rt(v.navigation.location,{matches:Ht,loaderData:ae,errors:yt,fetchers:new Map(v.fetchers)})):(Ie({errors:yt,loaderData:Np(v.loaderData,ae,Ht,yt),fetchers:new Map(v.fetchers)}),_e=!1)}async function S0(S,C,N,O,D,K,W){let H=v.fetchers.get(S);gn(S,zi(W,H?H.data:void 0),{flushSync:K});let F=new AbortController,J=Mi(e.history,N,F.signal);pe.set(S,F);let Fe=vt,Q=await Ii("loader",J,O,D,o,i,s);if(rr(Q)&&(Q=await ng(Q,J.signal,!0)||Q),pe.get(S)===F&&pe.delete(S),!J.signal.aborted){if(ee.has(S)){gn(S,kn(void 0));return}if(Jr(Q))if(Ae>Fe){gn(S,kn(void 0));return}else{$.add(S),await bi(v,Q);return}if(no(Q)){Ci(S,C,Q.error);return}G(!rr(Q),"Unhandled fetcher deferred data"),gn(S,kn(Q.data))}}async function bi(S,C,N){let{submission:O,fetcherSubmission:D,replace:K}=N===void 0?{}:N;C.revalidate&&(_e=!0);let W=Co(S.location,C.location,{_isRedirect:!0});if(G(W,"Expected a location on the redirect navigation"),n){let oe=!1;if(C.reloadDocument)oe=!0;else if(Zv.test(C.location)){const me=e.history.createURL(C.location);oe=me.origin!==t.location.origin||Un(me.pathname,s)==null}if(oe){K?t.location.replace(C.location):t.location.assign(C.location);return}}b=null;let H=K===!0?be.Replace:be.Push,{formMethod:F,formAction:J,formEncType:Fe}=S.navigation;!O&&!D&&F&&J&&Fe&&(O=Lp(S.navigation));let Q=O||D;if(_x.has(C.status)&&Q&&At(Q.formMethod))await Xn(H,W,{submission:we({},Q,{formAction:C.location}),preventScrollReset:j});else{let oe=Ms(W,O);await Xn(H,W,{overrideNavigation:oe,fetcherSubmission:D,preventScrollReset:j})}}async function ed(S,C,N,O,D){let K=await Promise.all([...N.map(F=>Ii("loader",D,F,C,o,i,s)),...O.map(F=>F.matches&&F.match&&F.controller?Ii("loader",Mi(e.history,F.path,F.controller.signal),F.match,F.matches,o,i,s):{type:Ce.error,error:xt(404,{pathname:F.path})})]),W=K.slice(0,N.length),H=K.slice(N.length);return await Promise.all([Rp(S,N,W,W.map(()=>D.signal),!1,v.loaderData),Rp(S,O.map(F=>F.match),H,O.map(F=>F.controller?F.controller.signal:null),!0)]),{results:K,loaderResults:W,fetcherResults:H}}function ns(){_e=!0,Ee.push(...rs()),U.forEach((S,C)=>{pe.has(C)&&(Tt.push(C),yn(C))})}function gn(S,C,N){N===void 0&&(N={}),v.fetchers.set(S,C),Ie({fetchers:new Map(v.fetchers)},{flushSync:(N&&N.flushSync)===!0})}function Ci(S,C,N,O){O===void 0&&(O={});let D=to(v.matches,C);Wo(S),Ie({errors:{[D.route.id]:N},fetchers:new Map(v.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function td(S){return u.v7_fetcherPersist&&(te.set(S,(te.get(S)||0)+1),ee.has(S)&&ee.delete(S)),v.fetchers.get(S)||Rx}function Wo(S){let C=v.fetchers.get(S);pe.has(S)&&!(C&&C.state==="loading"&&L.has(S))&&yn(S),U.delete(S),L.delete(S),$.delete(S),ee.delete(S),v.fetchers.delete(S)}function b0(S){if(u.v7_fetcherPersist){let C=(te.get(S)||0)-1;C<=0?(te.delete(S),ee.add(S)):te.set(S,C)}else Wo(S);Ie({fetchers:new Map(v.fetchers)})}function yn(S){let C=pe.get(S);G(C,"Expected fetch controller: "+S),C.abort(),pe.delete(S)}function nd(S){for(let C of S){let N=td(C),O=kn(N.data);v.fetchers.set(C,O)}}function rd(){let S=[],C=!1;for(let N of $){let O=v.fetchers.get(N);G(O,"Expected fetcher: "+N),O.state==="loading"&&($.delete(N),S.push(N),C=!0)}return nd(S),C}function id(S){let C=[];for(let[N,O]of L)if(O<S){let D=v.fetchers.get(N);G(D,"Expected fetcher: "+N),D.state==="loading"&&(yn(N),L.delete(N),C.push(N))}return nd(C),C.length>0}function C0(S,C){let N=v.blockers.get(S)||Ai;return Se.get(S)!==C&&Se.set(S,C),N}function od(S){v.blockers.delete(S),Se.delete(S)}function Vo(S,C){let N=v.blockers.get(S)||Ai;G(N.state==="unblocked"&&C.state==="blocked"||N.state==="blocked"&&C.state==="blocked"||N.state==="blocked"&&C.state==="proceeding"||N.state==="blocked"&&C.state==="unblocked"||N.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+N.state+" -> "+C.state);let O=new Map(v.blockers);O.set(S,C),Ie({blockers:O})}function ad(S){let{currentLocation:C,nextLocation:N,historyAction:O}=S;if(Se.size===0)return;Se.size>1&&mr(!1,"A router only supports one blocker at a time");let D=Array.from(Se.entries()),[K,W]=D[D.length-1],H=v.blockers.get(K);if(!(H&&H.state==="proceeding")&&W({currentLocation:C,nextLocation:N,historyAction:O}))return K}function rs(S){let C=[];return $e.forEach((N,O)=>{(!S||S(O))&&(N.cancel(),C.push(O),$e.delete(O))}),C}function P0(S,C,N){if(h=S,x=C,w=N||null,!k&&v.navigation===Is){k=!0;let O=sd(v.location,v.matches);O!=null&&Ie({restoreScrollPosition:O})}return()=>{h=null,x=null,w=null}}function ld(S,C){return w&&w(S,C.map(O=>lx(O,v.loaderData)))||S.key}function E0(S,C){if(h&&x){let N=ld(S,C);h[N]=x()}}function sd(S,C){if(h){let N=ld(S,C),O=h[N];if(typeof O=="number")return O}return null}function j0(S){o={},l=Ku(S,i,void 0,o)}return g={get basename(){return s},get state(){return v},get routes(){return a},get window(){return t},initialize:Qe,subscribe:Si,enableScrollRestoration:P0,navigate:qf,fetch:w0,revalidate:g0,createHref:S=>e.history.createHref(S),encodeLocation:S=>e.history.encodeLocation(S),getFetcher:td,deleteFetcher:b0,dispose:nt,getBlocker:C0,deleteBlocker:od,_internalFetchControllers:pe,_internalActiveDeferreds:$e,_internalSetRoutes:j0},g}function Ax(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Xu(e,t,n,r,i,o,a){let l,s;if(o){l=[];for(let f of t)if(l.push(f),f.route.id===o){s=f;break}}else l=t,s=t[t.length-1];let u=Sf(i||".",kf(l),Un(e.pathname,n)||e.pathname,a==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&s&&s.route.index&&!Cf(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:rn([n,u.pathname])),vr(u)}function Sp(e,t,n,r){if(!r||!Ax(r))return{path:n};if(r.formMethod&&!Ux(r.formMethod))return{path:n,error:xt(405,{method:r.formMethod})};let i=()=>({path:n,error:xt(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),l=tg(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!At(a))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,x)=>{let[k,E]=x;return""+w+k+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!At(a))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}G(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Ju(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Ju(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=Ep(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=Ep(s)}catch{return i()}let f={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(At(f.formMethod))return{path:n,submission:f};let p=pn(n);return t&&p.search&&Cf(p.search)&&s.append("index",""),p.search="?"+s,{path:vr(p),submission:f}}function Ix(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function bp(e,t,n,r,i,o,a,l,s,u,f,p,h,w,x){let k=x?Object.values(x)[0]:w?Object.values(w)[0]:void 0,E=e.createURL(t.location),m=e.createURL(i),d=x?Object.keys(x)[0]:void 0,v=Ix(n,d).filter((j,b)=>{if(j.route.lazy)return!0;if(j.route.loader==null)return!1;if(Mx(t.loaderData,t.matches[b],j)||a.some(B=>B===j.route.id))return!0;let R=t.matches[b],M=j;return Cp(j,we({currentUrl:E,currentParams:R.params,nextUrl:m,nextParams:M.params},r,{actionResult:k,defaultShouldRevalidate:o||E.pathname+E.search===m.pathname+m.search||E.search!==m.search||eg(R,M)}))}),P=[];return u.forEach((j,b)=>{if(!n.some(_e=>_e.route.id===j.routeId)||s.has(b))return;let R=Fr(p,j.path,h);if(!R){P.push({key:b,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let M=t.fetchers.get(b),B=Zu(R,j.path),q=!1;f.has(b)?q=!1:l.includes(b)?q=!0:M&&M.state!=="idle"&&M.data===void 0?q=o:q=Cp(B,we({currentUrl:E,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params},r,{actionResult:k,defaultShouldRevalidate:o})),q&&P.push({key:b,routeId:j.routeId,path:j.path,matches:R,match:B,controller:new AbortController})}),[v,P]}function Mx(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function eg(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Cp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Pp(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];G(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";mr(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!ox.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,we({},t(i),{lazy:void 0}))}async function Ii(e,t,n,r,i,o,a,l){l===void 0&&(l={});let s,u,f,p=x=>{let k,E=new Promise((m,d)=>k=d);return f=()=>k(),t.signal.addEventListener("abort",f),Promise.race([x({request:t,params:n.params,context:l.requestContext}),E])};try{let x=n.route[e];if(n.route.lazy)if(x){let k,E=await Promise.all([p(x).catch(m=>{k=m}),Pp(n.route,o,i)]);if(k)throw k;u=E[0]}else if(await Pp(n.route,o,i),x=n.route[e],x)u=await p(x);else if(e==="action"){let k=new URL(t.url),E=k.pathname+k.search;throw xt(405,{method:t.method,pathname:E,routeId:n.route.id})}else return{type:Ce.data,data:void 0};else if(x)u=await p(x);else{let k=new URL(t.url),E=k.pathname+k.search;throw xt(404,{pathname:E})}G(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(x){s=Ce.error,u=x}finally{f&&t.signal.removeEventListener("abort",f)}if(Fx(u)){let x=u.status;if(Tx.has(x)){let m=u.headers.get("Location");if(G(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Zv.test(m))m=Xu(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,m);else if(!l.isStaticRequest){let d=new URL(t.url),g=m.startsWith("//")?new URL(d.protocol+m):new URL(m),v=Un(g.pathname,a)!=null;g.origin===d.origin&&v&&(m=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Ce.redirect,status:x,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:s===Ce.error?Ce.error:Ce.data,response:u};let k,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?k=await u.json():k=await u.text(),s===Ce.error?{type:s,error:new bf(x,u.statusText,k),headers:u.headers}:{type:Ce.data,data:k,statusCode:u.status,headers:u.headers}}if(s===Ce.error)return{type:s,error:u};if($x(u)){var h,w;return{type:Ce.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((w=u.init)==null?void 0:w.headers)&&new Headers(u.init.headers)}}return{type:Ce.data,data:u}}function Mi(e,t,n,r){let i=e.createURL(tg(t)).toString(),o={signal:n};if(r&&At(r.formMethod)){let{formMethod:a,formEncType:l}=r;o.method=a.toUpperCase(),l==="application/json"?(o.headers=new Headers({"Content-Type":l}),o.body=JSON.stringify(r.json)):l==="text/plain"?o.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?o.body=Ju(r.formData):o.body=r.formData}return new Request(i,o)}function Ju(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Ep(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function zx(e,t,n,r,i){let o={},a=null,l,s=!1,u={};return n.forEach((f,p)=>{let h=t[p].route.id;if(G(!Jr(f),"Cannot handle redirect results in processLoaderData"),no(f)){let w=to(e,h),x=f.error;r&&(x=Object.values(r)[0],r=void 0),a=a||{},a[w.route.id]==null&&(a[w.route.id]=x),o[h]=void 0,s||(s=!0,l=Xv(f.error)?f.error.status:500),f.headers&&(u[h]=f.headers)}else rr(f)?(i.set(h,f.deferredData),o[h]=f.deferredData.data):o[h]=f.data,f.statusCode!=null&&f.statusCode!==200&&!s&&(l=f.statusCode),f.headers&&(u[h]=f.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:u}}function jp(e,t,n,r,i,o,a,l){let{loaderData:s,errors:u}=zx(t,n,r,i,l);for(let f=0;f<o.length;f++){let{key:p,match:h,controller:w}=o[f];G(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let x=a[f];if(!(w&&w.signal.aborted))if(no(x)){let k=to(e.matches,h==null?void 0:h.route.id);u&&u[k.route.id]||(u=we({},u,{[k.route.id]:x.error})),e.fetchers.delete(p)}else if(Jr(x))G(!1,"Unhandled fetcher revalidation redirect");else if(rr(x))G(!1,"Unhandled fetcher deferred data");else{let k=kn(x.data);e.fetchers.set(p,k)}}return{loaderData:s,errors:u}}function Np(e,t,n,r){let i=we({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function to(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Tp(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function xt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new bf(e||500,a,new Error(l),!0)}function _p(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Jr(n))return{result:n,idx:t}}}function tg(e){let t=typeof e=="string"?pn(e):e;return vr(we({},t,{hash:""}))}function Dx(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function rr(e){return e.type===Ce.deferred}function no(e){return e.type===Ce.error}function Jr(e){return(e&&e.type)===Ce.redirect}function $x(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Fx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ux(e){return Nx.has(e.toLowerCase())}function At(e){return Ex.has(e.toLowerCase())}async function Rp(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let u=e.find(p=>p.route.id===s.route.id),f=u!=null&&!eg(u,s)&&(o&&o[s.route.id])!==void 0;if(rr(l)&&(i||f)){let p=r[a];G(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await ng(l,p,i).then(h=>{h&&(n[a]=h||n[a])})}}}async function ng(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ce.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Ce.error,error:i}}return{type:Ce.data,data:e.deferredData.data}}}function Cf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Zu(e,t){let n=typeof t=="string"?pn(t).search:t.search;if(e[e.length-1].route.index&&Cf(n||""))return e[e.length-1];let r=Qv(e);return r[r.length-1]}function Lp(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Ms(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Bx(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function zi(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Hx(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function kn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Wx(e,t){try{let n=e.sessionStorage.getItem(qv);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function Vx(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(qv,JSON.stringify(n))}catch(r){mr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pl.apply(this,arguments)}const zo=T.createContext(null),Pf=T.createContext(null),kr=T.createContext(null),Dl=T.createContext(null),Sr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),rg=T.createContext(null);function Yx(e,t){let{relative:n}=t===void 0?{}:t;Do()||G(!1);let{basename:r,navigator:i}=T.useContext(kr),{hash:o,pathname:a,search:l}=$l(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:rn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Do(){return T.useContext(Dl)!=null}function $o(){return Do()||G(!1),T.useContext(Dl).location}function ig(e){T.useContext(kr).static||T.useLayoutEffect(e)}function hn(){let{isDataRoute:e}=T.useContext(Sr);return e?iw():Gx()}function Gx(){Do()||G(!1);let e=T.useContext(zo),{basename:t,navigator:n}=T.useContext(kr),{matches:r}=T.useContext(Sr),{pathname:i}=$o(),o=JSON.stringify(kf(r)),a=T.useRef(!1);return ig(()=>{a.current=!0}),T.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let f=Sf(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:rn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,o,i,e])}function $l(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Sr),{pathname:i}=$o(),o=JSON.stringify(kf(r));return T.useMemo(()=>Sf(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Kx(e,t,n){Do()||G(!1);let{navigator:r}=T.useContext(kr),{matches:i}=T.useContext(Sr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=$o(),u;if(t){var f;let k=typeof t=="string"?pn(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||G(!1),u=k}else u=s;let p=u.pathname||"/",h=l==="/"?p:p.slice(l.length)||"/",w=Fr(e,{pathname:h}),x=qx(w&&w.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:rn([l,r.encodeLocation?r.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:rn([l,r.encodeLocation?r.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n);return t&&x?T.createElement(Dl.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:be.Pop}},x):x}function Qx(){let e=rw(),t=Xv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,o)}const Xx=T.createElement(Qx,null);class Jx extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Sr.Provider,{value:this.props.routeContext},T.createElement(rg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zx(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(zo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Sr.Provider,{value:t},r)}function qx(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||G(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let f=s.route.id?a==null?void 0:a[s.route.id]:null,p=null;n&&(p=s.route.errorElement||Xx);let h=t.concat(o.slice(0,u+1)),w=()=>{let x;return f?x=p:s.route.Component?x=T.createElement(s.route.Component,null):s.route.element?x=s.route.element:x=l,T.createElement(Zx,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:x})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?T.createElement(Jx,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:w(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):w()},null)}var og=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(og||{}),hl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hl||{});function ew(e){let t=T.useContext(zo);return t||G(!1),t}function tw(e){let t=T.useContext(Pf);return t||G(!1),t}function nw(e){let t=T.useContext(Sr);return t||G(!1),t}function ag(e){let t=nw(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function rw(){var e;let t=T.useContext(rg),n=tw(hl.UseRouteError),r=ag(hl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function iw(){let{router:e}=ew(og.UseNavigateStable),t=ag(hl.UseNavigateStable),n=T.useRef(!1);return ig(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,pl({fromRouteId:t},o)))},[e,t])}function ow(e){let{basename:t="/",children:n=null,location:r,navigationType:i=be.Pop,navigator:o,static:a=!1}=e;Do()&&G(!1);let l=t.replace(/^\/*/,"/"),s=T.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=pn(r));let{pathname:u="/",search:f="",hash:p="",state:h=null,key:w="default"}=r,x=T.useMemo(()=>{let k=Un(u,l);return k==null?null:{location:{pathname:k,search:f,hash:p,state:h,key:w},navigationType:i}},[l,u,f,p,h,w,i]);return x==null?null:T.createElement(kr.Provider,{value:s},T.createElement(Dl.Provider,{children:n,value:x}))}new Promise(()=>{});function aw(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:T.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:T.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(this,arguments)}function lg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sw(e,t){return e.button===0&&(!t||t==="_self")&&!lw(e)}const uw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],cw=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function fw(e,t){return Ox({basename:t==null?void 0:t.basename,future:li({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:nx({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||dw(),routes:e,mapRouteProperties:aw,window:t==null?void 0:t.window}).initialize()}function dw(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=li({},t,{errors:pw(t.errors)})),t}function pw(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new bf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const sg=T.createContext({isTransitioning:!1}),hw=T.createContext(new Map),mw="startTransition",Op=W0[mw],vw="flushSync",Ap=tx[vw];function gw(e){Op?Op(e):e()}function Di(e){Ap?Ap(e):e()}class yw{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function xw(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=T.useState(n.state),[a,l]=T.useState(),[s,u]=T.useState({isTransitioning:!1}),[f,p]=T.useState(),[h,w]=T.useState(),[x,k]=T.useState(),E=T.useRef(new Map),{v7_startTransition:m}=r||{},d=T.useCallback(b=>{m?gw(b):b()},[m]),g=T.useCallback((b,R)=>{let{deletedFetchers:M,unstable_flushSync:B,unstable_viewTransitionOpts:q}=R;M.forEach(Ee=>E.current.delete(Ee)),b.fetchers.forEach((Ee,Tt)=>{Ee.data!==void 0&&E.current.set(Tt,Ee.data)});let _e=n.window==null||typeof n.window.document.startViewTransition!="function";if(!q||_e){B?Di(()=>o(b)):d(()=>o(b));return}if(B){Di(()=>{h&&(f&&f.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:q.currentLocation,nextLocation:q.nextLocation})});let Ee=n.window.document.startViewTransition(()=>{Di(()=>o(b))});Ee.finished.finally(()=>{Di(()=>{p(void 0),w(void 0),l(void 0),u({isTransitioning:!1})})}),Di(()=>w(Ee));return}h?(f&&f.resolve(),h.skipTransition(),k({state:b,currentLocation:q.currentLocation,nextLocation:q.nextLocation})):(l(b),u({isTransitioning:!0,flushSync:!1,currentLocation:q.currentLocation,nextLocation:q.nextLocation}))},[n.window,h,f,E,d]);T.useLayoutEffect(()=>n.subscribe(g),[n,g]),T.useEffect(()=>{s.isTransitioning&&!s.flushSync&&p(new yw)},[s]),T.useEffect(()=>{if(f&&a&&n.window){let b=a,R=f.promise,M=n.window.document.startViewTransition(async()=>{d(()=>o(b)),await R});M.finished.finally(()=>{p(void 0),w(void 0),l(void 0),u({isTransitioning:!1})}),w(M)}},[d,a,f,n.window]),T.useEffect(()=>{f&&a&&i.location.key===a.location.key&&f.resolve()},[f,h,i.location,a]),T.useEffect(()=>{!s.isTransitioning&&x&&(l(x.state),u({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),k(void 0))},[s.isTransitioning,x]);let v=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,R,M)=>n.navigate(b,{state:R,preventScrollReset:M==null?void 0:M.preventScrollReset}),replace:(b,R,M)=>n.navigate(b,{replace:!0,state:R,preventScrollReset:M==null?void 0:M.preventScrollReset})}),[n]),P=n.basename||"/",j=T.useMemo(()=>({router:n,navigator:v,static:!1,basename:P}),[n,v,P]);return T.createElement(T.Fragment,null,T.createElement(zo.Provider,{value:j},T.createElement(Pf.Provider,{value:i},T.createElement(hw.Provider,{value:E.current},T.createElement(sg.Provider,{value:s},T.createElement(ow,{basename:P,location:i.location,navigationType:i.historyAction,navigator:v},i.initialized?T.createElement(ww,{routes:n.routes,state:i}):t))))),null)}function ww(e){let{routes:t,state:n}=e;return Kx(t,void 0,n)}const kw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mn=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:p}=t,h=lg(t,uw),{basename:w}=T.useContext(kr),x,k=!1;if(typeof u=="string"&&Sw.test(u)&&(x=u,kw))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=Un(v.pathname,w);v.origin===g.origin&&P!=null?u=P+v.search+v.hash:k=!0}catch{}let E=Yx(u,{relative:i}),m=Cw(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:i,unstable_viewTransition:p});function d(g){r&&r(g),g.defaultPrevented||m(g)}return T.createElement("a",li({},h,{href:x||E,onClick:k||o?r:d,ref:n,target:s}))}),ug=T.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,unstable_viewTransition:u,children:f}=t,p=lg(t,cw),h=$l(s,{relative:p.relative}),w=$o(),x=T.useContext(Pf),{navigator:k}=T.useContext(kr),E=x!=null&&Pw(h)&&u===!0,m=k.encodeLocation?k.encodeLocation(h).pathname:h.pathname,d=w.pathname,g=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(d=d.toLowerCase(),g=g?g.toLowerCase():null,m=m.toLowerCase());const v=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let P=d===m||!a&&d.startsWith(m)&&d.charAt(v)==="/",j=g!=null&&(g===m||!a&&g.startsWith(m)&&g.charAt(m.length)==="/"),b={isActive:P,isPending:j,isTransitioning:E},R=P?r:void 0,M;typeof o=="function"?M=o(b):M=[o,P?"active":null,j?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let B=typeof l=="function"?l(b):l;return T.createElement(mn,li({},p,{"aria-current":R,className:M,ref:n,style:B,to:s,unstable_viewTransition:u}),typeof f=="function"?f(b):f)});var qu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(qu||(qu={}));var Ip;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ip||(Ip={}));function bw(e){let t=T.useContext(zo);return t||G(!1),t}function Cw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=hn(),u=$o(),f=$l(e,{relative:a});return T.useCallback(p=>{if(sw(p,n)){p.preventDefault();let h=r!==void 0?r:vr(u)===vr(f);s(e,{replace:h,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l})}},[u,s,f,r,i,n,e,o,a,l])}function Pw(e,t){t===void 0&&(t={});let n=T.useContext(sg);n==null&&G(!1);let{basename:r}=bw(qu.useViewTransitionState),i=$l(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Un(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Un(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Qu(i.pathname,a)!=null||Qu(i.pathname,o)!=null}var Ge=function(){return Ge=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ge.apply(this,arguments)};function Po(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ue="-ms-",ro="-moz-",ne="-webkit-",cg="comm",Fl="rule",Ef="decl",Ew="@import",fg="@keyframes",jw="@layer",Nw=Math.abs,jf=String.fromCharCode,ec=Object.assign;function Tw(e,t){return ze(e,0)^45?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}function dg(e){return e.trim()}function Zt(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function za(e,t){return e.indexOf(t)}function ze(e,t){return e.charCodeAt(t)|0}function si(e,t,n){return e.slice(t,n)}function Yt(e){return e.length}function pg(e){return e.length}function Wi(e,t){return t.push(e),e}function _w(e,t){return e.map(t).join("")}function Mp(e,t){return e.filter(function(n){return!Zt(n,t)})}var Ul=1,ui=1,hg=0,Nt=0,Ne=0,yi="";function Bl(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ul,column:ui,length:a,return:"",siblings:l}}function Sn(e,t){return ec(Bl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jr(e){for(;e.root;)e=Sn(e.root,{children:[e]});Wi(e,e.siblings)}function Rw(){return Ne}function Lw(){return Ne=Nt>0?ze(yi,--Nt):0,ui--,Ne===10&&(ui=1,Ul--),Ne}function $t(){return Ne=Nt<hg?ze(yi,Nt++):0,ui++,Ne===10&&(ui=1,Ul++),Ne}function ur(){return ze(yi,Nt)}function Da(){return Nt}function Hl(e,t){return si(yi,e,t)}function tc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ow(e){return Ul=ui=1,hg=Yt(yi=e),Nt=0,[]}function Aw(e){return yi="",e}function zs(e){return dg(Hl(Nt-1,nc(e===91?e+2:e===40?e+1:e)))}function Iw(e){for(;(Ne=ur())&&Ne<33;)$t();return tc(e)>2||tc(Ne)>3?"":" "}function Mw(e,t){for(;--t&&$t()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return Hl(e,Da()+(t<6&&ur()==32&&$t()==32))}function nc(e){for(;$t();)switch(Ne){case e:return Nt;case 34:case 39:e!==34&&e!==39&&nc(Ne);break;case 40:e===41&&nc(e);break;case 92:$t();break}return Nt}function zw(e,t){for(;$t()&&e+Ne!==47+10;)if(e+Ne===42+42&&ur()===47)break;return"/*"+Hl(t,Nt-1)+"*"+jf(e===47?e:$t())}function Dw(e){for(;!tc(ur());)$t();return Hl(e,Nt)}function $w(e){return Aw($a("",null,null,null,[""],e=Ow(e),0,[0],e))}function $a(e,t,n,r,i,o,a,l,s){for(var u=0,f=0,p=a,h=0,w=0,x=0,k=1,E=1,m=1,d=0,g="",v=i,P=o,j=r,b=g;E;)switch(x=d,d=$t()){case 40:if(x!=108&&ze(b,p-1)==58){za(b+=Y(zs(d),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:b+=zs(d);break;case 9:case 10:case 13:case 32:b+=Iw(x);break;case 92:b+=Mw(Da()-1,7);continue;case 47:switch(ur()){case 42:case 47:Wi(Fw(zw($t(),Da()),t,n,s),s);break;default:b+="/"}break;case 123*k:l[u++]=Yt(b)*m;case 125*k:case 59:case 0:switch(d){case 0:case 125:E=0;case 59+f:m==-1&&(b=Y(b,/\f/g,"")),w>0&&Yt(b)-p&&Wi(w>32?Dp(b+";",r,n,p-1,s):Dp(Y(b," ","")+";",r,n,p-2,s),s);break;case 59:b+=";";default:if(Wi(j=zp(b,t,n,u,f,i,l,g,v=[],P=[],p,o),o),d===123)if(f===0)$a(b,t,j,j,v,o,p,l,P);else switch(h===99&&ze(b,3)===110?100:h){case 100:case 108:case 109:case 115:$a(e,j,j,r&&Wi(zp(e,j,j,0,0,i,l,g,i,v=[],p,P),P),i,P,p,l,r?v:P);break;default:$a(b,j,j,j,[""],P,0,l,P)}}u=f=w=0,k=m=1,g=b="",p=a;break;case 58:p=1+Yt(b),w=x;default:if(k<1){if(d==123)--k;else if(d==125&&k++==0&&Lw()==125)continue}switch(b+=jf(d),d*k){case 38:m=f>0?1:(b+="\f",-1);break;case 44:l[u++]=(Yt(b)-1)*m,m=1;break;case 64:ur()===45&&(b+=zs($t())),h=ur(),f=p=Yt(g=b+=Dw(Da())),d++;break;case 45:x===45&&Yt(b)==2&&(k=0)}}return o}function zp(e,t,n,r,i,o,a,l,s,u,f,p){for(var h=i-1,w=i===0?o:[""],x=pg(w),k=0,E=0,m=0;k<r;++k)for(var d=0,g=si(e,h+1,h=Nw(E=a[k])),v=e;d<x;++d)(v=dg(E>0?w[d]+" "+g:Y(g,/&\f/g,w[d])))&&(s[m++]=v);return Bl(e,t,n,i===0?Fl:l,s,u,f,p)}function Fw(e,t,n,r){return Bl(e,t,n,cg,jf(Rw()),si(e,2,-2),0,r)}function Dp(e,t,n,r,i){return Bl(e,t,n,Ef,si(e,0,r),si(e,r+1,-1),r,i)}function mg(e,t,n){switch(Tw(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+ro+e+ue+e+e;case 5936:switch(ze(e,t+11)){case 114:return ne+e+ue+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+ue+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+ue+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+ue+e+e;case 6165:return ne+e+ue+"flex-"+e+e;case 5187:return ne+e+Y(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+ue+"flex-$1$2")+e;case 5443:return ne+e+ue+"flex-item-"+Y(e,/flex-|-self/g,"")+(Zt(e,/flex-|baseline/)?"":ue+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return ne+e+ue+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+ue+Y(e,"shrink","negative")+e;case 5292:return ne+e+ue+Y(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+Y(e,"-grow","")+ne+e+ue+Y(e,"grow","positive")+e;case 4554:return ne+Y(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!Zt(e,/flex-|baseline/))return ue+"grid-column-align"+si(e,t)+e;break;case 2592:case 3360:return ue+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Zt(r.props,/grid-\w+-end/)})?~za(e+(n=n[t].value),"span")?e:ue+Y(e,"-start","")+e+ue+"grid-row-span:"+(~za(n,"span")?Zt(n,/\d+/):+Zt(n,/\d+/)-+Zt(e,/\d+/))+";":ue+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Zt(r.props,/grid-\w+-start/)})?e:ue+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(e)-1-t>6)switch(ze(e,t+1)){case 109:if(ze(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+ro+(ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~za(e,"stretch")?mg(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ue+i+":"+o+u+(a?ue+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(ze(e,t+6)===121)return Y(e,":",":"+ne)+e;break;case 6444:switch(ze(e,ze(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+(ze(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+ue+"$2box$3")+e;case 100:return Y(e,":",":"+ue)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function ml(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Uw(e,t,n,r){switch(e.type){case jw:if(e.children.length)break;case Ew:case Ef:return e.return=e.return||e.value;case cg:return"";case fg:return e.return=e.value+"{"+ml(e.children,r)+"}";case Fl:if(!Yt(e.value=e.props.join(",")))return""}return Yt(n=ml(e.children,r))?e.return=e.value+"{"+n+"}":""}function Bw(e){var t=pg(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Hw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ww(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ef:e.return=mg(e.value,e.length,n);return;case fg:return ml([Sn(e,{value:Y(e.value,"@","@"+ne)})],r);case Fl:if(e.length)return _w(n=e.props,function(i){switch(Zt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jr(Sn(e,{props:[Y(i,/:(read-\w+)/,":"+ro+"$1")]})),jr(Sn(e,{props:[i]})),ec(e,{props:Mp(n,r)});break;case"::placeholder":jr(Sn(e,{props:[Y(i,/:(plac\w+)/,":"+ne+"input-$1")]})),jr(Sn(e,{props:[Y(i,/:(plac\w+)/,":"+ro+"$1")]})),jr(Sn(e,{props:[Y(i,/:(plac\w+)/,ue+"input-$1")]})),jr(Sn(e,{props:[i]})),ec(e,{props:Mp(n,r)});break}return""})}}var Vw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ci=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Nf=typeof window<"u"&&"HTMLElement"in window,Yw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Gw={},Wl=Object.freeze([]),fi=Object.freeze({});function vg(e,t,n){return n===void 0&&(n=fi),e.theme!==n.theme&&e.theme||t||n.theme}var gg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Kw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qw=/(^-|-$)/g;function $p(e){return e.replace(Kw,"-").replace(Qw,"")}var Xw=/(a)(d)/gi,Fp=function(e){return String.fromCharCode(e+(e>25?39:97))};function rc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fp(t%52)+n;return(Fp(t%52)+n).replace(Xw,"$1-$2")}var Ds,Ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},yg=function(e){return Ur(5381,e)};function xg(e){return rc(yg(e)>>>0)}function Jw(e){return e.displayName||e.name||"Component"}function $s(e){return typeof e=="string"&&!0}var wg=typeof Symbol=="function"&&Symbol.for,kg=wg?Symbol.for("react.memo"):60115,Zw=wg?Symbol.for("react.forward_ref"):60112,qw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t2=((Ds={})[Zw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ds[kg]=Sg,Ds);function Up(e){return("type"in(t=e)&&t.type.$$typeof)===kg?Sg:"$$typeof"in e?t2[e.$$typeof]:qw;var t}var n2=Object.defineProperty,r2=Object.getOwnPropertyNames,Bp=Object.getOwnPropertySymbols,i2=Object.getOwnPropertyDescriptor,o2=Object.getPrototypeOf,Hp=Object.prototype;function bg(e,t,n){if(typeof t!="string"){if(Hp){var r=o2(t);r&&r!==Hp&&bg(e,r,n)}var i=r2(t);Bp&&(i=i.concat(Bp(t)));for(var o=Up(e),a=Up(t),l=0;l<i.length;++l){var s=i[l];if(!(s in e2||n&&n[s]||a&&s in a||o&&s in o)){var u=i2(t,s);try{n2(e,s,u)}catch{}}}}return e}function di(e){return typeof e=="function"}function Tf(e){return typeof e=="object"&&"styledComponentId"in e}function ir(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ic(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Eo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function oc(e,t,n){if(n===void 0&&(n=!1),!n&&!Eo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=oc(e[r],t[r]);else if(Eo(t))for(var r in t)e[r]=oc(e[r],t[r]);return e}function _f(e,t){Object.defineProperty(e,"toString",{value:t})}function Fo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var a2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Fo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Fa=new Map,vl=new Map,Fs=1,ca=function(e){if(Fa.has(e))return Fa.get(e);for(;vl.has(Fs);)Fs++;var t=Fs++;return Fa.set(e,t),vl.set(t,e),t},l2=function(e,t){Fa.set(e,t),vl.set(t,e)},s2="style[".concat(ci,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),u2=new RegExp("^".concat(ci,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),c2=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},f2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(u2);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(l2(f,u),c2(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function d2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Cg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ci,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ci,"active"),r.setAttribute("data-styled-version","6.1.0");var a=d2();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},p2=function(){function e(t){this.element=Cg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Fo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),h2=function(){function e(t){this.element=Cg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),m2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wp=Nf,v2={isServer:!Nf,useCSSOMInjection:!Yw},gl=function(){function e(t,n,r){t===void 0&&(t=fi),n===void 0&&(n={});var i=this;this.options=Ge(Ge({},v2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Nf&&Wp&&(Wp=!1,function(o){for(var a=document.querySelectorAll(s2),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(ci)!=="active"&&(f2(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),_f(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(p){var h=function(m){return vl.get(m)}(p);if(h===void 0)return"continue";var w=o.names.get(h),x=a.getGroup(p);if(w===void 0||x.length===0)return"continue";var k="".concat(ci,".g").concat(p,'[id="').concat(h,'"]'),E="";w!==void 0&&w.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),s+="".concat(x).concat(k,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},f=0;f<l;f++)u(f);return s}(i)})}return e.registerId=function(t){return ca(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ge(Ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new m2(i):r?new p2(i):new h2(i)}(this.options),new a2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ca(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ca(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ca(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),g2=/&/g,y2=/^\s*\/\/.*$/gm;function Pg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Pg(n.children,t)),n})}function x2(e){var t,n,r,i=e===void 0?fi:e,o=i.options,a=o===void 0?fi:o,l=i.plugins,s=l===void 0?Wl:l,u=function(h,w,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):h},f=s.slice();f.push(function(h){h.type===Fl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(g2,n).replace(r,u))}),a.prefix&&f.push(Ww),f.push(Uw);var p=function(h,w,x,k){w===void 0&&(w=""),x===void 0&&(x=""),k===void 0&&(k="&"),t=k,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var E=h.replace(y2,""),m=$w(x||w?"".concat(x," ").concat(w," { ").concat(E," }"):E);a.namespace&&(m=Pg(m,a.namespace));var d=[];return ml(m,Bw(f.concat(Hw(function(g){return d.push(g)})))),d};return p.hash=s.length?s.reduce(function(h,w){return w.name||Fo(15),Ur(h,w.name)},5381).toString():"",p}var w2=new gl,ac=x2(),Eg=St.createContext({shouldForwardProp:void 0,styleSheet:w2,stylis:ac});Eg.Consumer;St.createContext(void 0);function lc(){return T.useContext(Eg)}var k2=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ac);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,_f(this,function(){throw Fo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ac),this.name+t.hash},e}(),S2=function(e){return e>="A"&&e<="Z"};function Vp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;S2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var jg=function(e){return e==null||e===!1||e===""},Ng=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!jg(o)&&(Array.isArray(o)&&o.isCss||di(o)?r.push("".concat(Vp(i),":"),o,";"):Eo(o)?r.push.apply(r,Po(Po(["".concat(i," {")],Ng(o),!1),["}"],!1)):r.push("".concat(Vp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Vw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dn(e,t,n,r){if(jg(e))return[];if(Tf(e))return[".".concat(e.styledComponentId)];if(di(e)){if(!di(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Dn(i,t,n,r)}var o;return e instanceof k2?n?(e.inject(n,r),[e.getName(r)]):[e]:Eo(e)?Ng(e):Array.isArray(e)?Array.prototype.concat.apply(Wl,e.map(function(a){return Dn(a,t,n,r)})):[e.toString()]}function Tg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(di(n)&&!Tf(n))return!1}return!0}var b2=yg("6.1.0"),C2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Tg(t),this.componentId=n,this.baseHash=Ur(b2,n),this.baseStyle=r,gl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ir(i,this.staticRulesId);else{var o=ic(Dn(this.rules,t,n,r)),a=rc(Ur(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=ir(i,a),this.staticRulesId=a}else{for(var s=Ur(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var h=ic(Dn(p,t,n,r));s=Ur(s,h+f),u+=h}}if(u){var w=rc(s>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=ir(i,w)}}return i},e}(),Rf=St.createContext(void 0);Rf.Consumer;var Us={};function P2(e,t,n){var r=Tf(e),i=e,o=!$s(e),a=t.attrs,l=a===void 0?Wl:a,s=t.componentId,u=s===void 0?function(g,v){var P=typeof g!="string"?"sc":$p(g);Us[P]=(Us[P]||0)+1;var j="".concat(P,"-").concat(xg("6.1.0"+P+Us[P]));return v?"".concat(v,"-").concat(j):j}(t.displayName,t.parentComponentId):s,f=t.displayName;f===void 0&&function(g){return $s(g)?"styled.".concat(g):"Styled(".concat(Jw(g),")")}(e);var p=t.displayName&&t.componentId?"".concat($p(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;w=function(g,v){return x(g,v)&&k(g,v)}}else w=x}var E=new C2(n,p,r?i.componentStyle:void 0);function m(g,v){return function(P,j,b){var R=P.attrs,M=P.componentStyle,B=P.defaultProps,q=P.foldedComponentIds,_e=P.styledComponentId,Ee=P.target,Tt=St.useContext(Rf),pe=lc(),vt=P.shouldForwardProp||pe.shouldForwardProp,Ae=function($e,Se,gt){for(var Qe,nt=Ge(Ge({},Se),{className:void 0,theme:gt}),Si=0;Si<$e.length;Si+=1){var Ie=di(Qe=$e[Si])?Qe(nt):Qe;for(var rt in Ie)nt[rt]=rt==="className"?ir(nt[rt],Ie[rt]):rt==="style"?Ge(Ge({},nt[rt]),Ie[rt]):Ie[rt]}return Se.className&&(nt.className=ir(nt.className,Se.className)),nt}(R,j,vg(j,Tt,B)||fi),L=Ae.as||Ee,$={};for(var U in Ae)Ae[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?$.as=Ae.forwardedAs:vt&&!vt(U,L)||($[U]=Ae[U]));var te=function($e,Se){var gt=lc(),Qe=$e.generateAndInjectStyles(Se,gt.styleSheet,gt.stylis);return Qe}(M,Ae),ee=ir(q,_e);return te&&(ee+=" "+te),Ae.className&&(ee+=" "+Ae.className),$[$s(L)&&!gg.has(L)?"class":"className"]=ee,$.ref=b,T.createElement(L,$)}(d,g,v)}var d=St.forwardRef(m);return d.attrs=h,d.componentStyle=E,d.shouldForwardProp=w,d.foldedComponentIds=r?ir(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=p,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(v){for(var P=[],j=1;j<arguments.length;j++)P[j-1]=arguments[j];for(var b=0,R=P;b<R.length;b++)oc(v,R[b],!0);return v}({},i.defaultProps,g):g}}),_f(d,function(){return".".concat(d.styledComponentId)}),o&&bg(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Yp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gp=function(e){return Object.assign(e,{isCss:!0})};function _g(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(di(e)||Eo(e)){var r=e;return Gp(Dn(Yp(Wl,Po([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Dn(i):Gp(Dn(Yp(i,t)))}function sc(e,t,n){if(n===void 0&&(n=fi),!t)throw Fo(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,_g.apply(void 0,Po([i],o,!1)))};return r.attrs=function(i){return sc(e,t,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return sc(e,t,Ge(Ge({},n),i))},r}var Rg=function(e){return sc(P2,e)},y=Rg;gg.forEach(function(e){y[e]=Rg(e)});var E2=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Tg(t),gl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ic(Dn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&gl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function j2(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=_g.apply(void 0,Po([e],t,!1)),i="sc-global-".concat(xg(JSON.stringify(r))),o=new E2(r,i),a=function(s){var u=lc(),f=St.useContext(Rf),p=St.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(p,s,u.styleSheet,f,u.stylis),St.useLayoutEffect(function(){if(!u.styleSheet.server)return l(p,s,u.styleSheet,f,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,s,u.styleSheet,f,u.stylis]),null};function l(s,u,f,p,h){if(o.isStatic)o.renderStyles(s,Gw,f,h);else{var w=Ge(Ge({},u),{theme:vg(u,p,a.defaultProps)});o.renderStyles(s,w,f,h)}}return St.memo(a)}const N2=y.div`
margin-left: 29vw;
display: flex;
flex-direction: column;
justify-content: center;
//background-color: red;
align-items: center;
height: 100vh;
gap: 10px;
`,T2=y.form`
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
`,Kp=y.input`
width: 90%;
padding: 10px;
margin: 5px 0;
border: 1px solid var(--light-black);
border-radius: 50px;
align-items: center;
color: var(--white);
background-color:var(--light-black);
`,_2=y.button`
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
`,R2=y(mn)`
font-size: 11px;
text-decoration: underline; 
padding: 10px;
color: var(--grey);
border: none;
border-radius: 3px;

cursor: pointer;
`,L2=y.div`
    display: flex
`,O2=y.div`
    font-weight: 800;
    font-size: 100px;
    color: var(--white);
`,A2=y.div`
    font-weight: 900;
    font-size: 100px;
  color: var(--blue);
`,Qp=y.label`
    margin-right: 21vw;
    font-size: 17px;
    color: var(--white);
`,I2=y.div`
  position: fixed;
  bottom: 100px;
  background-color: var(--blue); 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`,Ut=y.div`
    display: flex;
`;class Lf{constructor(t,n){this.username=t,this.password=n,this.profilePicture=null,this.posts=[],this.biography="",this.education="",this.workStatus=""}setUsername(t){this.username=t}getUsername(){return this.username}setPassword(t){this.password=t}getPassword(){return this.password}setProfilePicture(t){this.profilePicture=t}getProfilePicture(){return this.profilePicture}addPost(t){this.posts.push(t)}getPosts(){return this.posts}setBiography(t){this.biography=t}getBiography(){return this.biography}setWorkStatus(t){this.workStatus=t}getWorkStatus(){return this.workStatus}}const Vl="/CodeConnect/assets/MainUserPfp-1324bd9a.png",M2="/CodeConnect/assets/profile3-65bbbce1.jpg",br="/CodeConnect/assets/userPfp3-ca280f4a.png";class Of{constructor(t,n,r,i,o,a){this.author=t,this.title=n,this.content=r,this.topic=i,this.timeStamp=o,this.id=a,this.likes=0,this.comments=[]}like(){this.likes++}unlike(){this.likes--}addComment(t){this.comments.push(t)}getPostInformation(){return{author:this.author,title:this.title,content:this.content,topic:this.topic,timeStamp:this.timeStamp,id:this.id,likes:this.likes,comments:this.comments}}}const Zr=[],Yl=new Lf("PixelPioneer","123");Yl.setProfilePicture(Vl);const Gl=new Lf("madscientist","password");Gl.setProfilePicture(M2);const Kl=new Lf("supasonic","password");Kl.setProfilePicture(br);Zr.push(Yl);Zr.push(Gl);Zr.push(Kl);const Kn=[],Af=new Of(Yl,"Learning React","I am learning React for a school project, what are the best resources to learn from?","React","12 minutes ago",Kn.length);Kn.push(Af);Yl.addPost(Af);Af.likes=1;const If=new Of(Gl,"Growtopia - My new game!","I've been developing my farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!","Game Development","1 hour ago",Kn.length);Kn.push(If);Gl.addPost(If);If.likes=93;const Mf=new Of(Kl,"Internship Help","I'm in my third year of university and I'm want to start applying to internships. I've never had an interview before and I was wondering what the process is normally like?","Career","2 hours ago",Kn.length);Kn.push(Mf);Kl.addPost(Mf);Mf.likes=18;function z2(e,t){for(let n=0;n<Zr.length;n++)if(Zr[n].getUsername()===e&&Zr[n].getPassword()===t)return!0;return!1}const D2={login:async(e,t)=>z2(e,t)?{success:!0,user:{username:e}}:{success:!1,error:"Invalid credentials"}};function $2(){const e=hn(),[t,n]=T.useState(""),[r,i]=T.useState(""),[o,a]=T.useState(""),l=async()=>{try{const s=await D2.login(t,r);s.success?(console.log("Login successful:",s.user),e("/CodeConnect/home")):a(s.error)}catch(s){console.error("Login error:",s),a("Unknown error has occured. Please try again.")}};return c.jsx(Ut,{children:c.jsxs(N2,{children:[c.jsxs(L2,{children:[c.jsx(O2,{children:"Code"}),c.jsx(A2,{children:"Connect"})]}),c.jsxs(T2,{children:[c.jsx(Qp,{children:"Username:"}),c.jsx(Kp,{type:"text",id:"username",placeholder:"Username",value:t,onChange:s=>n(s.target.value)}),c.jsx(Qp,{children:"Password:"}),c.jsx(Kp,{type:"password",id:"password",placeholder:"Password",value:r,onChange:s=>i(s.target.value)}),c.jsx(_2,{type:"button",onClick:l,children:"Login"}),o&&c.jsx("div",{style:{color:"red"},children:o}),c.jsx(R2,{to:"/CodeConnect/guest-home",children:"Continue As Guest"})]}),c.jsx(I2,{children:"Create Account"})]})})}function F2(){return c.jsx($2,{})}function Xp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xp(Object(n),!0).forEach(function(r){Oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yl(e){"@babel/helpers - typeof";return yl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yl(e)}function U2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B2(e,t,n){return t&&Jp(e.prototype,t),n&&Jp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zf(e,t){return W2(e)||Y2(e,t)||Lg(e,t)||K2()}function Uo(e){return H2(e)||V2(e)||Lg(e)||G2()}function H2(e){if(Array.isArray(e))return uc(e)}function W2(e){if(Array.isArray(e))return e}function V2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Y2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(s){o=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Lg(e,t){if(e){if(typeof e=="string")return uc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uc(e,t)}}function uc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zp=function(){},Df={},Og={},Ag=null,Ig={mark:Zp,measure:Zp};try{typeof window<"u"&&(Df=window),typeof document<"u"&&(Og=document),typeof MutationObserver<"u"&&(Ag=MutationObserver),typeof performance<"u"&&(Ig=performance)}catch{}var Q2=Df.navigator||{},qp=Q2.userAgent,eh=qp===void 0?"":qp,Bn=Df,de=Og,th=Ag,fa=Ig;Bn.document;var vn=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",Mg=~eh.indexOf("MSIE")||~eh.indexOf("Trident/"),da,pa,ha,ma,va,un="___FONT_AWESOME___",cc=16,zg="fa",Dg="svg-inline--fa",gr="data-fa-i2svg",fc="data-fa-pseudo-element",X2="data-fa-pseudo-element-pending",$f="data-prefix",Ff="data-icon",nh="fontawesome-i2svg",J2="async",Z2=["HTML","HEAD","STYLE","SCRIPT"],$g=function(){try{return!0}catch{return!1}}(),ce="classic",ke="sharp",Uf=[ce,ke];function Bo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ce]}})}var jo=Bo((da={},Oe(da,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Oe(da,ke,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),da)),No=Bo((pa={},Oe(pa,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Oe(pa,ke,{solid:"fass",regular:"fasr",light:"fasl"}),pa)),To=Bo((ha={},Oe(ha,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Oe(ha,ke,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ha)),q2=Bo((ma={},Oe(ma,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Oe(ma,ke,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ma)),ek=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Fg="fa-layers-text",tk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nk=Bo((va={},Oe(va,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Oe(va,ke,{900:"fass",400:"fasr",300:"fasl"}),va)),Ug=[1,2,3,4,5,6,7,8,9,10],rk=Ug.concat([11,12,13,14,15,16,17,18,19,20]),ik=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],or={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_o=new Set;Object.keys(No[ce]).map(_o.add.bind(_o));Object.keys(No[ke]).map(_o.add.bind(_o));var ok=[].concat(Uf,Uo(_o),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",or.GROUP,or.SWAP_OPACITY,or.PRIMARY,or.SECONDARY]).concat(Ug.map(function(e){return"".concat(e,"x")})).concat(rk.map(function(e){return"w-".concat(e)})),io=Bn.FontAwesomeConfig||{};function ak(e){var t=de.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function lk(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(de&&typeof de.querySelector=="function"){var sk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sk.forEach(function(e){var t=zf(e,2),n=t[0],r=t[1],i=lk(ak(n));i!=null&&(io[r]=i)})}var Bg={styleDefault:"solid",familyDefault:"classic",cssPrefix:zg,replacementClass:Dg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};io.familyPrefix&&(io.cssPrefix=io.familyPrefix);var pi=A(A({},Bg),io);pi.autoReplaceSvg||(pi.observeMutations=!1);var z={};Object.keys(Bg).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){pi[e]=n,oo.forEach(function(r){return r(z)})},get:function(){return pi[e]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){pi.cssPrefix=t,oo.forEach(function(n){return n(z)})},get:function(){return pi.cssPrefix}});Bn.FontAwesomeConfig=z;var oo=[];function uk(e){return oo.push(e),function(){oo.splice(oo.indexOf(e),1)}}var wn=cc,Kt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ck(e){if(!(!e||!vn)){var t=de.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=de.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return de.head.insertBefore(t,r),e}}var fk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ro(){for(var e=12,t="";e-- >0;)t+=fk[Math.random()*62|0];return t}function xi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Bf(e){return e.classList?xi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Hg(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dk(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Hg(e[n]),'" ')},"").trim()}function Ql(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Hf(e){return e.size!==Kt.size||e.x!==Kt.x||e.y!==Kt.y||e.rotate!==Kt.rotate||e.flipX||e.flipY}function pk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(a," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function hk(e){var t=e.transform,n=e.width,r=n===void 0?cc:n,i=e.height,o=i===void 0?cc:i,a=e.startCentered,l=a===void 0?!1:a,s="";return l&&Mg?s+="translate(".concat(t.x/wn-r/2,"em, ").concat(t.y/wn-o/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/wn,"em), calc(-50% + ").concat(t.y/wn,"em)) "):s+="translate(".concat(t.x/wn,"em, ").concat(t.y/wn,"em) "),s+="scale(".concat(t.size/wn*(t.flipX?-1:1),", ").concat(t.size/wn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var mk=`:root, :host {
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
}`;function Wg(){var e=zg,t=Dg,n=z.cssPrefix,r=z.replacementClass,i=mk;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var rh=!1;function Bs(){z.autoAddCss&&!rh&&(ck(Wg()),rh=!0)}var vk={mixout:function(){return{dom:{css:Wg,insertCss:Bs}}},hooks:function(){return{beforeDOMElementCreation:function(){Bs()},beforeI2svg:function(){Bs()}}}},cn=Bn||{};cn[un]||(cn[un]={});cn[un].styles||(cn[un].styles={});cn[un].hooks||(cn[un].hooks={});cn[un].shims||(cn[un].shims=[]);var Mt=cn[un],Vg=[],gk=function e(){de.removeEventListener("DOMContentLoaded",e),xl=1,Vg.map(function(t){return t()})},xl=!1;vn&&(xl=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),xl||de.addEventListener("DOMContentLoaded",gk));function yk(e){vn&&(xl?setTimeout(e,0):Vg.push(e))}function Ho(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Hg(e):"<".concat(t," ").concat(dk(r),">").concat(o.map(Ho).join(""),"</").concat(t,">")}function ih(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xk=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},Hs=function(t,n,r,i){var o=Object.keys(t),a=o.length,l=i!==void 0?xk(n,i):n,s,u,f;for(r===void 0?(s=1,f=t[o[0]]):(s=0,f=r);s<a;s++)u=o[s],f=l(f,t[u],u,t);return f};function wk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function dc(e){var t=wk(e);return t.length===1?t[0].toString(16):null}function kk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function oh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function pc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=oh(t);typeof Mt.hooks.addPack=="function"&&!i?Mt.hooks.addPack(e,oh(t)):Mt.styles[e]=A(A({},Mt.styles[e]||{}),o),e==="fas"&&pc("fa",t)}var ga,ya,xa,Br=Mt.styles,Sk=Mt.shims,bk=(ga={},Oe(ga,ce,Object.values(To[ce])),Oe(ga,ke,Object.values(To[ke])),ga),Wf=null,Yg={},Gg={},Kg={},Qg={},Xg={},Ck=(ya={},Oe(ya,ce,Object.keys(jo[ce])),Oe(ya,ke,Object.keys(jo[ke])),ya);function Pk(e){return~ok.indexOf(e)}function Ek(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Pk(i)?i:null}var Jg=function(){var t=function(o){return Hs(Br,function(a,l,s){return a[s]=Hs(l,o,{}),a},{})};Yg=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var l=o[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=a})}return i}),Gg=t(function(i,o,a){if(i[a]=a,o[2]){var l=o[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=a})}return i}),Xg=t(function(i,o,a){var l=o[2];return i[a]=a,l.forEach(function(s){i[s]=a}),i});var n="far"in Br||z.autoFetchSvg,r=Hs(Sk,function(i,o){var a=o[0],l=o[1],s=o[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(i.names[a]={prefix:l,iconName:s}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Kg=r.names,Qg=r.unicodes,Wf=Xl(z.styleDefault,{family:z.familyDefault})};uk(function(e){Wf=Xl(e.styleDefault,{family:z.familyDefault})});Jg();function Vf(e,t){return(Yg[e]||{})[t]}function jk(e,t){return(Gg[e]||{})[t]}function ar(e,t){return(Xg[e]||{})[t]}function Zg(e){return Kg[e]||{prefix:null,iconName:null}}function Nk(e){var t=Qg[e],n=Vf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Hn(){return Wf}var Yf=function(){return{prefix:null,iconName:null,rest:[]}};function Xl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ce:n,i=jo[r][e],o=No[r][e]||No[r][i],a=e in Mt.styles?e:null;return o||a||null}var ah=(xa={},Oe(xa,ce,Object.keys(To[ce])),Oe(xa,ke,Object.keys(To[ke])),xa);function Jl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},Oe(t,ce,"".concat(z.cssPrefix,"-").concat(ce)),Oe(t,ke,"".concat(z.cssPrefix,"-").concat(ke)),t),a=null,l=ce;(e.includes(o[ce])||e.some(function(u){return ah[ce].includes(u)}))&&(l=ce),(e.includes(o[ke])||e.some(function(u){return ah[ke].includes(u)}))&&(l=ke);var s=e.reduce(function(u,f){var p=Ek(z.cssPrefix,f);if(Br[f]?(f=bk[l].includes(f)?q2[l][f]:f,a=f,u.prefix=f):Ck[l].indexOf(f)>-1?(a=f,u.prefix=Xl(f,{family:l})):p?u.iconName=p:f!==z.replacementClass&&f!==o[ce]&&f!==o[ke]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var h=a==="fa"?Zg(u.iconName):{},w=ar(u.prefix,u.iconName);h.prefix&&(a=null),u.iconName=h.iconName||w||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Br.far&&Br.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},Yf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ke&&(Br.fass||z.autoFetchSvg)&&(s.prefix="fass",s.iconName=ar(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=Hn()||"fas"),s}var Tk=function(){function e(){U2(this,e),this.definitions={}}return B2(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=A(A({},n.definitions[l]||{}),a[l]),pc(l,a[l]);var s=To[ce][l];s&&pc(s,a[l]),Jg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],l=a.prefix,s=a.iconName,u=a.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[l][p]=u)}),n[l][s]=u}),n}}]),e}(),lh=[],Hr={},qr={},_k=Object.keys(qr);function Rk(e,t){var n=t.mixoutsTo;return lh=e,Hr={},Object.keys(qr).forEach(function(r){_k.indexOf(r)===-1&&delete qr[r]}),lh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),yl(i[a])==="object"&&Object.keys(i[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=i[a][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){Hr[a]||(Hr[a]=[]),Hr[a].push(o[a])})}r.provides&&r.provides(qr)}),n}function hc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Hr[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function yr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Hr[e]||[];i.forEach(function(o){o.apply(null,n)})}function fn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qr[e]?qr[e].apply(null,t):void 0}function mc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Hn();if(t)return t=ar(n,t)||t,ih(qg.definitions,n,t)||ih(Mt.styles,n,t)}var qg=new Tk,Lk=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,yr("noAuto")},Ok={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return vn?(yr("beforeI2svg",t),fn("pseudoElements2svg",t),fn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,yk(function(){Ik({autoReplaceSvgRoot:n}),yr("watch",t)})}},Ak={icon:function(t){if(t===null)return null;if(yl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ar(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Xl(t[0]);return{prefix:r,iconName:ar(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(ek))){var i=Jl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Hn(),iconName:ar(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Hn();return{prefix:o,iconName:ar(o,t)||t}}}},mt={noAuto:Lk,config:z,dom:Ok,parse:Ak,library:qg,findIconDefinition:mc,toHtml:Ho},Ik=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?de:n;(Object.keys(Mt.styles).length>0||z.autoFetchSvg)&&vn&&z.autoReplaceSvg&&mt.dom.i2svg({node:r})};function Zl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ho(r)})}}),Object.defineProperty(e,"node",{get:function(){if(vn){var r=de.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Mk(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(Hf(a)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=Ql(A(A({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function zk(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(z.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:a}),children:r}]}]}function Gf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,p=e.extra,h=e.watchable,w=h===void 0?!1:h,x=r.found?r:n,k=x.width,E=x.height,m=i==="fak",d=[z.replacementClass,o?"".concat(z.cssPrefix,"-").concat(o):""].filter(function(M){return p.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(p.classes).join(" "),g={children:[],attributes:A(A({},p.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(E)})},v=m&&!~p.classes.indexOf("fa-fw")?{width:"".concat(k/E*16*.0625,"em")}:{};w&&(g.attributes[gr]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(f||Ro())},children:[s]}),delete g.attributes.title);var P=A(A({},g),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:l,styles:A(A({},v),p.styles)}),j=r.found&&n.found?fn("generateAbstractMask",P)||{children:[],attributes:{}}:fn("generateAbstractIcon",P)||{children:[],attributes:{}},b=j.children,R=j.attributes;return P.children=b,P.attributes=R,l?zk(P):Mk(P)}function sh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,l=e.watchable,s=l===void 0?!1:l,u=A(A(A({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});s&&(u[gr]="");var f=A({},a.styles);Hf(i)&&(f.transform=hk({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var p=Ql(f);p.length>0&&(u.style=p);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function Dk(e){var t=e.content,n=e.title,r=e.extra,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Ql(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Ws=Mt.styles;function vc(e){var t=e[0],n=e[1],r=e.slice(4),i=zf(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(or.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(or.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(or.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var $k={found:!1,width:512,height:512};function Fk(e,t){!$g&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function gc(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=Hn()),new Promise(function(r,i){if(fn("missingIconAbstract"),n==="fa"){var o=Zg(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ws[t]&&Ws[t][e]){var a=Ws[t][e];return r(vc(a))}Fk(e,t),r(A(A({},$k),{},{icon:z.showMissingIcons&&e?fn("missingIconAbstract")||{}:{}}))})}var uh=function(){},yc=z.measurePerformance&&fa&&fa.mark&&fa.measure?fa:{mark:uh,measure:uh},Vi='FA "6.4.2"',Uk=function(t){return yc.mark("".concat(Vi," ").concat(t," begins")),function(){return e0(t)}},e0=function(t){yc.mark("".concat(Vi," ").concat(t," ends")),yc.measure("".concat(Vi," ").concat(t),"".concat(Vi," ").concat(t," begins"),"".concat(Vi," ").concat(t," ends"))},Kf={begin:Uk,end:e0},Ua=function(){};function ch(e){var t=e.getAttribute?e.getAttribute(gr):null;return typeof t=="string"}function Bk(e){var t=e.getAttribute?e.getAttribute($f):null,n=e.getAttribute?e.getAttribute(Ff):null;return t&&n}function Hk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function Wk(){if(z.autoReplaceSvg===!0)return Ba.replace;var e=Ba[z.autoReplaceSvg];return e||Ba.replace}function Vk(e){return de.createElementNS("http://www.w3.org/2000/svg",e)}function Yk(e){return de.createElement(e)}function t0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Vk:Yk:n;if(typeof e=="string")return de.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(t0(a,{ceFn:r}))}),i}function Gk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ba={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(t0(i),n)}),n.getAttribute(gr)===null&&z.keepOriginalSource){var r=de.createComment(Gk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Bf(n).indexOf(z.replacementClass))return Ba.replace(t);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,s){return s===z.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(l){return Ho(l)}).join(`
`);n.setAttribute(gr,""),n.innerHTML=a}};function fh(e){e()}function n0(e,t){var n=typeof t=="function"?t:Ua;if(e.length===0)n();else{var r=fh;z.mutateApproach===J2&&(r=Bn.requestAnimationFrame||fh),r(function(){var i=Wk(),o=Kf.begin("mutate");e.map(i),o(),n()})}}var Qf=!1;function r0(){Qf=!0}function xc(){Qf=!1}var wl=null;function dh(e){if(th&&z.observeMutations){var t=e.treeCallback,n=t===void 0?Ua:t,r=e.nodeCallback,i=r===void 0?Ua:r,o=e.pseudoElementsCallback,a=o===void 0?Ua:o,l=e.observeMutationsRoot,s=l===void 0?de:l;wl=new th(function(u){if(!Qf){var f=Hn();xi(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!ch(p.addedNodes[0])&&(z.searchPseudoElements&&a(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&z.searchPseudoElements&&a(p.target.parentNode),p.type==="attributes"&&ch(p.target)&&~ik.indexOf(p.attributeName))if(p.attributeName==="class"&&Bk(p.target)){var h=Jl(Bf(p.target)),w=h.prefix,x=h.iconName;p.target.setAttribute($f,w||f),x&&p.target.setAttribute(Ff,x)}else Hk(p.target)&&i(p.target)})}}),vn&&wl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kk(){wl&&wl.disconnect()}function Qk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function Xk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Jl(Bf(e));return i.prefix||(i.prefix=Hn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=jk(i.prefix,e.innerText)||Vf(i.prefix,dc(e.innerText))),!i.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Jk(e){var t=xi(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Ro()):(t["aria-hidden"]="true",t.focusable="false")),t}function Zk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Kt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ph(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xk(e),r=n.iconName,i=n.prefix,o=n.rest,a=Jk(e),l=hc("parseNodeAttributes",{},e),s=t.styleParser?Qk(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Kt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:a}},l)}var qk=Mt.styles;function i0(e){var t=z.autoReplaceSvg==="nest"?ph(e,{styleParser:!1}):ph(e);return~t.extra.classes.indexOf(Fg)?fn("generateLayersText",e,t):fn("generateSvgReplacementMutation",e,t)}var Wn=new Set;Uf.map(function(e){Wn.add("fa-".concat(e))});Object.keys(jo[ce]).map(Wn.add.bind(Wn));Object.keys(jo[ke]).map(Wn.add.bind(Wn));Wn=Uo(Wn);function hh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!vn)return Promise.resolve();var n=de.documentElement.classList,r=function(p){return n.add("".concat(nh,"-").concat(p))},i=function(p){return n.remove("".concat(nh,"-").concat(p))},o=z.autoFetchSvg?Wn:Uf.map(function(f){return"fa-".concat(f)}).concat(Object.keys(qk));o.includes("fa")||o.push("fa");var a=[".".concat(Fg,":not([").concat(gr,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(gr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=xi(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Kf.begin("onTree"),u=l.reduce(function(f,p){try{var h=i0(p);h&&f.push(h)}catch(w){$g||w.name==="MissingIcon"&&console.error(w)}return f},[]);return new Promise(function(f,p){Promise.all(u).then(function(h){n0(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),p(h)})})}function eS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;i0(e).then(function(n){n&&n0([n],t)})}function tS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:mc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:mc(i||{})),e(r,A(A({},n),{},{mask:i}))}}var nS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Kt:r,o=n.symbol,a=o===void 0?!1:o,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,p=n.title,h=p===void 0?null:p,w=n.titleId,x=w===void 0?null:w,k=n.classes,E=k===void 0?[]:k,m=n.attributes,d=m===void 0?{}:m,g=n.styles,v=g===void 0?{}:g;if(t){var P=t.prefix,j=t.iconName,b=t.icon;return Zl(A({type:"icon"},t),function(){return yr("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(h?d["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(x||Ro()):(d["aria-hidden"]="true",d.focusable="false")),Gf({icons:{main:vc(b),mask:s?vc(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:j,transform:A(A({},Kt),i),symbol:a,title:h,maskId:f,titleId:x,extra:{attributes:d,styles:v,classes:E}})})}},rS={mixout:function(){return{icon:tS(nS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=hh,n.nodeCallback=eS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?de:r,o=n.callback,a=o===void 0?function(){}:o;return hh(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,p=r.maskId,h=r.extra;return new Promise(function(w,x){Promise.all([gc(i,l),f.iconName?gc(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var E=zf(k,2),m=E[0],d=E[1];w([n,Gf({icons:{main:m,mask:d},prefix:l,iconName:i,transform:s,symbol:u,maskId:p,title:o,titleId:a,extra:h,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,l=n.styles,s=Ql(l);s.length>0&&(i.style=s);var u;return Hf(a)&&(u=fn("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},iS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Zl({type:"layer"},function(){yr("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(s){a=a.concat(s.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Uo(o)).join(" ")},children:a}]})}}}},oS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,l=a===void 0?[]:a,s=r.attributes,u=s===void 0?{}:s,f=r.styles,p=f===void 0?{}:f;return Zl({type:"counter",content:n},function(){return yr("beforeDOMElementCreation",{content:n,params:r}),Dk({content:n.toString(),title:o,extra:{attributes:u,styles:p,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Uo(l))}})})}}}},aS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Kt:i,a=r.title,l=a===void 0?null:a,s=r.classes,u=s===void 0?[]:s,f=r.attributes,p=f===void 0?{}:f,h=r.styles,w=h===void 0?{}:h;return Zl({type:"text",content:n},function(){return yr("beforeDOMElementCreation",{content:n,params:r}),sh({content:n,transform:A(A({},Kt),o),title:l,extra:{attributes:p,styles:w,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Uo(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,l=null,s=null;if(Mg){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return z.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,sh({content:n.innerHTML,width:l,height:s,transform:o,title:i,extra:a,watchable:!0})])}}},lS=new RegExp('"',"ug"),mh=[1105920,1112319];function sS(e){var t=e.replace(lS,""),n=kk(t,0),r=n>=mh[0]&&n<=mh[1],i=t.length===2?t[0]===t[1]:!1;return{value:dc(i?t[0]:t),isSecondary:r||i}}function vh(e,t){var n="".concat(X2).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=xi(e.children),a=o.filter(function(b){return b.getAttribute(fc)===t})[0],l=Bn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(tk),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(a&&!s)return e.removeChild(a),r();if(s&&f!=="none"&&f!==""){var p=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?ke:ce,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?No[h][s[2].toLowerCase()]:nk[h][u],x=sS(p),k=x.value,E=x.isSecondary,m=s[0].startsWith("FontAwesome"),d=Vf(w,k),g=d;if(m){var v=Nk(k);v.iconName&&v.prefix&&(d=v.iconName,w=v.prefix)}if(d&&!E&&(!a||a.getAttribute($f)!==w||a.getAttribute(Ff)!==g)){e.setAttribute(n,g),a&&e.removeChild(a);var P=Zk(),j=P.extra;j.attributes[fc]=t,gc(d,w).then(function(b){var R=Gf(A(A({},P),{},{icons:{main:b,mask:Yf()},prefix:w,iconName:g,extra:j,watchable:!0})),M=de.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=R.map(function(B){return Ho(B)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function uS(e){return Promise.all([vh(e,"::before"),vh(e,"::after")])}function cS(e){return e.parentNode!==document.head&&!~Z2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gh(e){if(vn)return new Promise(function(t,n){var r=xi(e.querySelectorAll("*")).filter(cS).map(uS),i=Kf.begin("searchPseudoElements");r0(),Promise.all(r).then(function(){i(),xc(),t()}).catch(function(){i(),xc(),n()})})}var fS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?de:r;z.searchPseudoElements&&gh(i)}}},yh=!1,dS={mixout:function(){return{dom:{unwatch:function(){r0(),yh=!0}}}},hooks:function(){return{bootstrap:function(){dh(hc("mutationObserverCallbacks",{}))},noAuto:function(){Kk()},watch:function(n){var r=n.observeMutationsRoot;yh?xc():dh(hc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],l=o.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},pS={mixout:function(){return{parse:{transform:function(n){return xh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=xh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(a/2*-1," -256)")},w={outer:l,inner:p,path:h};return{tag:"g",attributes:A({},w.outer),children:[{tag:"g",attributes:A({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),w.path)}]}]}}}},Vs={x:0,y:0,width:"100%",height:"100%"};function wh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function hS(e){return e.tag==="g"?e.children:[e]}var mS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Jl(i.split(" ").map(function(a){return a.trim()})):Yf();return o.prefix||(o.prefix=Hn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,l=n.maskId,s=n.transform,u=o.width,f=o.icon,p=a.width,h=a.icon,w=pk({transform:s,containerWidth:p,iconWidth:u}),x={tag:"rect",attributes:A(A({},Vs),{},{fill:"white"})},k=f.children?{children:f.children.map(wh)}:{},E={tag:"g",attributes:A({},w.inner),children:[wh(A({tag:f.tag,attributes:A(A({},f.attributes),w.path)},k))]},m={tag:"g",attributes:A({},w.outer),children:[E]},d="mask-".concat(l||Ro()),g="clip-".concat(l||Ro()),v={tag:"mask",attributes:A(A({},Vs),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,m]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:hS(h)},v]};return r.push(P,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},Vs)}),{children:r,attributes:i}}}},vS={provides:function(t){var n=!1;Bn.matchMedia&&(n=Bn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=A(A({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:A(A({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:A(A({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:A(A({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},gS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},yS=[vk,rS,iS,oS,aS,fS,dS,pS,mS,vS,gS];Rk(yS,{mixoutsTo:mt});mt.noAuto;mt.config;mt.library;mt.dom;var wc=mt.parse;mt.findIconDefinition;mt.toHtml;var xS=mt.icon;mt.layer;mt.text;mt.counter;var o0={exports:{}},wS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kS=wS,SS=kS;function a0(){}function l0(){}l0.resetWarningCache=a0;var bS=function(){function e(r,i,o,a,l,s){if(s!==SS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l0,resetWarningCache:a0};return n.PropTypes=n,n};o0.exports=bS();var CS=o0.exports;const V=Cc(CS);function kh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kh(Object(n),!0).forEach(function(r){Wr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kl(e){"@babel/helpers - typeof";return kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kl(e)}function Wr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function PS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ES(e,t){if(e==null)return{};var n=PS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kc(e){return jS(e)||NS(e)||TS(e)||_S()}function jS(e){if(Array.isArray(e))return Sc(e)}function NS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function TS(e,t){if(e){if(typeof e=="string")return Sc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sc(e,t)}}function Sc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _S(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RS(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,p=e.pulse,h=e.fixedWidth,w=e.inverse,x=e.border,k=e.listItem,E=e.flip,m=e.size,d=e.rotation,g=e.pull,v=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":h,"fa-inverse":w,"fa-border":x,"fa-li":k,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Wr(t,"fa-".concat(m),typeof m<"u"&&m!==null),Wr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Wr(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Wr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map(function(P){return v[P]?P:null}).filter(function(P){return P})}function LS(e){return e=e-0,e===e}function s0(e){return LS(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var OS=["style"];function AS(e){return e.charAt(0).toUpperCase()+e.slice(1)}function IS(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=s0(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[AS(i)]=o:t[i]=o,t},{})}function u0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return u0(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=IS(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[s0(u)]=f}return s},{attrs:{}}),o=n.style,a=o===void 0?{}:o,l=ES(n,OS);return i.attrs.style=Tn(Tn({},i.attrs.style),a),e.apply(void 0,[t.tag,Tn(Tn({},i.attrs),l)].concat(kc(r)))}var c0=!1;try{c0=!0}catch{}function MS(){if(!c0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Sh(e){if(e&&kl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wc.icon)return wc.icon(e);if(e===null)return null;if(e&&kl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ys(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Wr({},e,t):{}}var Bt=St.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,l=e.titleId,s=e.maskId,u=Sh(n),f=Ys("classes",[].concat(kc(RS(e)),kc(o.split(" ")))),p=Ys("transform",typeof e.transform=="string"?wc.transform(e.transform):e.transform),h=Ys("mask",Sh(r)),w=xS(u,Tn(Tn(Tn(Tn({},f),p),h),{},{symbol:i,title:a,titleId:l,maskId:s}));if(!w)return MS("Could not find icon",u),null;var x=w.abstract,k={ref:t};return Object.keys(e).forEach(function(E){Bt.defaultProps.hasOwnProperty(E)||(k[E]=e[E])}),zS(x[0],k)});Bt.displayName="FontAwesomeIcon";Bt.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};Bt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var zS=u0.bind(null,St.createElement);const DS=y.div`
    padding-top: 11px;
    width: 120px;
    position: relative;
`,$S=y.div`
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
`,FS=y.span`
    font-size: 16px;
`,US=y(Bt)`
    font-size: 15px;
    transition: 0.4s;

    &:hover {
        color: var(--blue);
    }

    &.active {
        transform: rotate(180deg);
    }
`,BS=y.div`
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
`;var HS={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},f0={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},WS={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},VS={prefix:"fas",iconName:"house-chimney",icon:[576,512,[63499,"home-lg"],"e3af","M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"]},YS={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},GS={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},KS={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};function ql({setStatus:e}){const[t,n]=T.useState(!1),[r,i]=T.useState("Sort");return T.useEffect(()=>{e(r)}),c.jsxs(DS,{onClick:()=>{n(!t)},children:[c.jsxs($S,{children:[c.jsx(FS,{children:r}),c.jsx(US,{icon:GS,className:`${t?"active":"inactive"}`})]}),c.jsxs(BS,{className:`${t?"active":"inactive"}`,children:[c.jsx("div",{onClick:()=>{i("Top")},children:"Top"}),c.jsx("div",{onClick:()=>{i("Recent")},children:"Recent"})]})]})}ql.propTypes={setStatus:V.func};const QS=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`,XS=y.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`,JS=y.div`
    font-size: 35px;
    font-weight: 600;
`,ZS=y.div`
    color: var(--white);
`,qS=y.div`
    color: var(--blue);
    padding-left: 25px;
`,eb=y.div`
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
`,wa=y(Bt)`
    font-size: 22px;
`,$i=y(ug)`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--grey);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    
    &:hover {
        color: var(--white);
    }
`,tb=y.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: var(--white);
`;function Qn(){return c.jsx(QS,{children:c.jsxs(XS,{children:[c.jsx($i,{to:"/CodeConnect/home",children:c.jsxs(JS,{children:[c.jsx(ZS,{children:"Code"}),c.jsx(qS,{children:"Connect"})]})}),c.jsxs(eb,{children:[c.jsxs($i,{to:"/CodeConnect/home",children:[c.jsx(wa,{icon:VS}),c.jsx("span",{children:"Home"})]}),c.jsxs($i,{to:"/CodeConnect/explore",children:[c.jsx(wa,{icon:KS}),c.jsx("span",{children:"Explore"})]}),c.jsxs($i,{to:"/CodeConnect/direct-messages",children:[c.jsx(wa,{icon:YS}),c.jsx("span",{children:"Messages"})]}),c.jsxs($i,{to:"/CodeConnect/account",children:[c.jsx(wa,{icon:HS}),c.jsx("span",{children:"Profile"})]}),c.jsx(tb,{children:"Post"})]})]})})}const nb=y.div`
    display: flex;
    gap: 20px;
    align-items: center;
`,rb=y.input`
    width: 75%;
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
`;y(Bt)`
    color: var(--white);
`;const ib=y.button`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0px;
    background-color: var(--blue);
`,ob=y(Bt)`
    font-size: 17px;
    color: var(--white);
`;function d0(){const[e,t]=T.useState("Recents");return c.jsxs(nb,{children:[c.jsx(ql,{setStatus:t}),c.jsx(rb,{input:"text",placeholder:"Search"}),c.jsx(ib,{children:c.jsx(ob,{icon:WS})})]})}const ab=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
    width: 80vw;
    height: 100vh;
    background-color: var(--black);
`,lb=y.div`
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
`;const sb=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 80%;
`,bh=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
`,ub=y.div`
    display: flex;
    gap: 10px;
    
    div {
        color: var(--grey);
    }
`,cb=y.input`

`,fb=y(Bt)`

`,db=y.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;
`,pb=y.div`
    display: flex;
    margin: 0 auto;
    overflow-x: auto;
    width: 950px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
`,Gs=y.div`
    width: 100%;
    position: relative;
    text-align: center;
    color: var(--white);
`,Ks=y.img`
    flex: 3;
    max-width: 950px;
    scroll-snap-align: start;
    filter: brightness(50%);
    border-radius: 10px;
`,Qs=y.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 600;
`,hb=y.div`
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
`,mb=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 950px;
    margin: 0 auto;
    padding-bottom: 10%;
`,hi=y.div`
    font-size: 40px;
    font-weight: 500;
    color: var(--white);
`,vb=y.div`
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
`;function ie({topicName:e}){return c.jsx(vb,{children:e})}ie.propTypes={topicName:V.string};const p0="/CodeConnect/assets/web-dev-0661792e.png",h0="/CodeConnect/assets/game-dev-bd8da6b7.png",m0="/CodeConnect/assets/programming-d8860b21.png";function gb(){return T.useState("Recent"),c.jsxs(Ut,{children:[c.jsx(Qn,{}),c.jsx(ab,{children:c.jsxs(lb,{children:[c.jsx(d0,{}),c.jsxs(sb,{children:[c.jsx(bh,{children:c.jsx(hi,{children:c.jsxs("div",{children:[c.jsx(fb,{icon:f0})," Trending"]})})}),c.jsx(db,{children:c.jsxs(pb,{children:[c.jsxs(Gs,{id:"slide-1",children:[c.jsx(Ks,{src:p0}),c.jsx(Qs,{children:"Web Development"})]}),c.jsxs(Gs,{id:"slide-2",children:[c.jsx(Ks,{src:h0}),c.jsx(Qs,{children:"Game Development"})]}),c.jsxs(Gs,{id:"slide-3",children:[c.jsx(Ks,{src:m0}),c.jsx(Qs,{children:"Python"})]}),c.jsxs(hb,{children:[c.jsx("a",{href:"#slide-1"}),c.jsx("a",{href:"#slide-2"}),c.jsx("a",{href:"#slide-3"})]})]})}),c.jsxs(bh,{children:[c.jsx(hi,{children:"Topics"}),c.jsxs(ub,{children:[c.jsx("div",{children:"Select"}),c.jsx(cb,{type:"checkbox"})]})]}),c.jsxs(mb,{children:[c.jsx(ie,{topicName:"Web Development"}),c.jsx(ie,{topicName:"React"}),c.jsx(ie,{topicName:"Python"}),c.jsx(ie,{topicName:"Dynamic Programming"}),c.jsx(ie,{topicName:"JavaScript"}),c.jsx(ie,{topicName:"Full-Stack Development"}),c.jsx(ie,{topicName:"Data Structures"}),c.jsx(ie,{topicName:"Networks"}),c.jsx(ie,{topicName:"Game Development"}),c.jsx(ie,{topicName:"Cybersecurity"}),c.jsx(ie,{topicName:"HTML"}),c.jsx(ie,{topicName:"CSS"}),c.jsx(ie,{topicName:"Data Science"})]})]})]})})]})}const yb=y.div`
    width: 80vw;
    height: 100vh;  
    margin-left: 20vw;
    background-color: #242424;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`,Ch=y.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
`,xb=y.div`
    display: flex;
    padding: 16px;
    align-self: stretch;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    gap: 10px;
`,wb=y.div`
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    overflow: hidden;
`;function kb({src:e,alt:t}){return c.jsx(wb,{children:c.jsx("img",{src:e,alt:t,style:{flex:1,width:"100%",height:"100%",resizeMode:"contain"}})})}const Sb="/CodeConnect/assets/profile-pic-fc3f250c.jpg",Ph=y.div`
    display: flex;
    width: 420px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`,bb={fontSize:"17px",color:"white",textAlign:"center",fontWeight:"600",letterSpacing:"1.25px",lineHeigt:"normal"};function bc({text:e}){return c.jsx("p",{style:bb,children:e})}const Eh=y.div`
    background-color: #9190A2;
    border-radius: 6px;
    display: inline-flex;
    padding: 12px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`,jh=y.div`
    color: white;
`,Cb=y.div`
align-self: stretch;
`,Pb={fontSize:"16px",color:"white",textAlign:"center",fontWeight:"400",letterSpacing:"1.25px",lineHeigt:"normal"};function Eb({text:e}){return c.jsx("p",{style:Pb,children:e})}const jb=y.div`
    display: flex;
    padding: 14px 0px 14px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-bottom: 0.25px solid #FFF;
    background: #121212;
`;function Nb(){return c.jsxs(xb,{children:[c.jsx(kb,{src:Sb,alt:"User Profile Picture"}),c.jsxs(Ph,{children:[c.jsx(bc,{text:"PixelPioneer"}),c.jsx(bc,{text:"(She/Her)"})]}),c.jsxs(Ph,{children:[c.jsx(Eh,{children:c.jsx(jh,{children:"Teacher"})}),c.jsx(Eh,{children:c.jsx(jh,{children:"Web Development, Full-Stack, +1 More"})})]}),c.jsx(Cb,{children:c.jsx(Eb,{text:"Oh wow this is my bio!!!"})})]})}const Tb=y.div`
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    background: #363636;
`;function _b(){return c.jsxs(Ut,{children:[c.jsx(Qn,{}),c.jsxs(yb,{children:[c.jsx(Ch,{}),c.jsxs(Tb,{children:[c.jsx(Nb,{}),c.jsx(jb,{children:c.jsx(bc,{text:"Posts"})})]}),c.jsx(Ch,{})]})]})}const Rb=j2`
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
`,Lb=y.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,Ob=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,Ab=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,Ib=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,Mb=y.div`  
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
`,zb=y.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 90%;
    height: 80%;
`;y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;const Db=y.div`
    display: flex;
    justify-content: space-between;
`,$b=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,Fb=y.div`
    font-size: 30px;
`,Ub=y.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`,Bb=y.div`

`,Hb=y.div`
    font-size: 12px;
`,Wb=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Vb=y.div`
    font-size: 30px;
`,Yb=y.div`
    font-size: 15px;
    line-height: 20px;
    color: var(--grey);
`,Gb=y.div`
    display: flex;
`,Kb=y.div`
    border-radius: 50px;
    background-color: var(--blue-low);
    height: 30px;
`,Qb=y.div`
    padding: 0 10px;
    font-size: 12px;
    line-height: 30px;
    color: var(--light-blue);
`,Xb=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    color: var(--tan);
`,Nh=y(Bt)`

`,Xs=y.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--grey);
`;var Jb={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]},Zb={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"]};function Xf({information:e}){const[t,n]=T.useState(e.likes);return c.jsx(Mb,{children:c.jsxs(zb,{children:[c.jsxs(Db,{children:[c.jsxs($b,{children:[c.jsx(Ub,{src:e.author.getProfilePicture()}),c.jsx(Bb,{children:e.author.getUsername()}),c.jsx(Hb,{children:e.timestamp})]}),c.jsx(Fb,{children:e.reaction})]}),c.jsxs(Wb,{children:[c.jsx(Vb,{children:e.title}),c.jsx(Yb,{children:e.content})]}),c.jsx(Gb,{children:c.jsx(Kb,{children:c.jsx(Qb,{children:e.topic})})}),c.jsxs(Xb,{children:[c.jsxs(Xs,{children:[c.jsx("div",{onClick:()=>{e.like(),n(e.likes)},children:c.jsx(Nh,{icon:Jb})}),c.jsxs("div",{children:[t," likes"]})]}),c.jsxs(Xs,{children:[c.jsx(Nh,{icon:Zb}),c.jsxs("div",{children:[e.comments.length," comments"]})]}),c.jsx(Xs,{children:". . ."})]})]})})}Xf.propTypes={information:V.object};function qb(){const[e,t]=T.useState("Recent");return c.jsxs(Ut,{children:[c.jsx(Qn,{}),c.jsx(Lb,{children:c.jsxs(Ob,{children:[c.jsxs(Ab,{children:[c.jsx(hi,{children:"Home"}),c.jsx(ql,{setStatus:t})]}),c.jsx(Ib,{children:Kn.map((n,r)=>c.jsx(Xf,{information:n},r))})]})})]})}const eC=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    background-color: var(--black);
    height: 100vh;
`,tC=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`,nC=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50%;
    border-radius: 10px;
    box-shadow: 0 10px 20px var(--shadow);

`,rC=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,iC=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,oC=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 30%;
`,aC=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 27%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

`,lC=y.div`
    display: flex;
    align-items: center; 
    height: 77%;
    overflow-y: scroll;
    justify-content: center;
`,sC=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,uC=y.textarea`
   width: 80%;   
   background-color: grey;
   color: white;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,cC=y.textarea`
   width: 90%;   
   height: 80%;
   color: white;
   background-color: grey;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,fC=y.div`
    display: flex;
    align-items: center; 
    height: 20%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,dC=y.button`
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
`,pC=y(mn)`

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

`;const hC=y.div`
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
`,mC=y.div`
   display: flex;
   align-items: center;
   gap: 20px;
   color: var(--grey);
   margin-left: 2vw;
`,vC=y.img`
   width: 60px;
   border-radius: 100px;
`,gC=y.div`
   font-size: 25px;
   color: var(--white);
`;function Pt({user:e,url:t}){const n=hn(),r=()=>{n(t)};return c.jsx(hC,{children:c.jsxs(mC,{onClick:r,children:[c.jsx(vC,{src:e.profilePic}),c.jsx(gC,{children:e.userName})]})})}const yC=y.div`
    font-size: 35px;
    font-weight: 600;
    color: var(--white);

`,es=y.div`
    font-size: 30px;
    font-weight: 600;
    color: var(--white);

`,wi="/CodeConnect/assets/userPfp-3c07c570.png",ki="/CodeConnect/assets/userPfp2-778a6b44.png",xC={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:wi},wC={userName:"Boo",profilePic:ki},kC={userName:"Sonic",profilePic:br};function SC(){hn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return c.jsxs(Ut,{children:[c.jsx(Qn,{}),c.jsxs(eC,{children:[c.jsx(tC,{children:c.jsxs(nC,{children:[c.jsxs(aC,{children:[c.jsx(yC,{children:"New Direct Message"}),c.jsx(pC,{to:"/CodeConnect/direct-messages",children:"X"})]}),c.jsxs(oC,{children:[c.jsx(uC,{rows:"2",cols:"30"}),c.jsx(sC,{children:"Search"})]}),c.jsx(lC,{children:c.jsx(cC,{rows:"2",cols:"30"})}),c.jsx(fC,{children:c.jsx(dC,{children:"Send"})})]})}),c.jsxs(rC,{children:[c.jsx(iC,{children:c.jsx(es,{children:"Messages"})}),c.jsx(Pt,{user:wC,url:e}),c.jsx(Pt,{user:xC,url:t}),c.jsx(Pt,{user:kC,url:n})]})]})]})}const bC=y.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,CC=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,PC=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,EC=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,jC=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,NC=y.div`
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
`,TC=y.label`
    //margin-right: 21vw;
    font-size: 20px;
    color: black;
    text-align: center;
    color: white;
`,_C=y.div`
  position: fixed;
  background-color: var(--blue); 
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`,RC=y.div`
  background-color: var(--light-black); 
  color: white;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
`,LC=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`,OC=y.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`,AC=y.div`
    font-size: 35px;
    font-weight: 600;
`,IC=y.div`
    color: var(--white);
`,MC=y.div`
    color: var(--blue);
    padding-left: 25px;
`,zC=y.div`
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
`,ka=y(ug)`
    color: var(--grey);
    text-decoration: none;

    &:hover {
        color: var(--white);
    }
`,DC=y.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: var(--white);
`;function v0({handleItemClick:e}){return c.jsx(LC,{children:c.jsxs(OC,{children:[c.jsxs(AC,{children:[c.jsx(IC,{children:"Code"}),c.jsx(MC,{children:"Connect"})]}),c.jsxs(zC,{children:[c.jsx(ka,{to:"/CodeConnect/guest-home",children:"Home"}),c.jsx(ka,{to:"/CodeConnect/guest-explore",children:"Explore"}),c.jsx(ka,{onClick:()=>e("Direct Messages"),children:"Direct Messages"}),c.jsx(ka,{onClick:()=>e("Profile"),children:"Profile"}),c.jsx(DC,{onClick:()=>e("Post"),children:"Post"})]})]})})}function $C(){const[e,t]=T.useState("Recent"),[n,r]=T.useState(!1),i=a=>{(a==="Direct Messages"||a==="Profile"||a==="Post")&&r(!0)},o=()=>{r(!1)};return c.jsxs(Ut,{children:[c.jsx(v0,{handleItemClick:i}),c.jsx(bC,{children:c.jsxs(CC,{children:[c.jsxs(PC,{children:[c.jsx(hi,{children:"Home"}),c.jsx(ql,{setStatus:t})]}),c.jsx(EC,{children:Kn.map((a,l)=>c.jsx(Xf,{information:a},l))})]})}),n&&c.jsx(jC,{children:c.jsxs(NC,{children:[c.jsx(TC,{children:"Please create an account to access this feature "}),c.jsx("div",{}),c.jsx("div",{}),c.jsx(_C,{children:"Create Account"}),c.jsx(RC,{onClick:o,children:"Close"})]})})]})}const FC=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
    width: 80vw;
    height: 100vh;
    background-color: var(--black);
`,UC=y.div`
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
`;const BC=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 80%;
`,Th=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
`,HC=y.div`
    display: flex;
    gap: 10px;
    
    div {
        color: var(--grey);
    }
`,WC=y.input`

`,VC=y(Bt)`

`,YC=y.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;
`,GC=y.div`
    display: flex;
    margin: 0 auto;
    overflow-x: auto;
    width: 950px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
`,Js=y.div`
    width: 100%;
    position: relative;
    text-align: center;
    color: var(--white);
`,Zs=y.img`
    flex: 3;
    max-width: 950px;
    scroll-snap-align: start;
    filter: brightness(50%);
    border-radius: 10px;
`,qs=y.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 600;
`,KC=y.div`
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
`,QC=y.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 950px;
    margin: 0 auto;
    padding-bottom: 10%;
`,XC=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,JC=y.div`
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
`,ZC=y.label`
    //margin-right: 21vw;
    font-size: 20px;
    color: black;
    text-align: center;
    color: white;
`,qC=y.div`
  position: fixed;
  background-color: var(--blue); 
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`,e3=y.div`
  background-color: var(--light-black); 
  color: white;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
`;function t3(){T.useState("Recent");const[e,t]=T.useState(!1),n=i=>{(i==="Direct Messages"||i==="Profile"||i==="Post")&&t(!0)},r=()=>{t(!1)};return c.jsxs(Ut,{children:[c.jsx(v0,{handleItemClick:n}),c.jsx(FC,{children:c.jsxs(UC,{children:[c.jsx(d0,{}),c.jsxs(BC,{children:[c.jsx(Th,{children:c.jsx(hi,{children:c.jsxs("div",{children:[c.jsx(VC,{icon:f0})," Trending"]})})}),c.jsx(YC,{children:c.jsxs(GC,{children:[c.jsxs(Js,{id:"slide-1",children:[c.jsx(Zs,{src:p0}),c.jsx(qs,{children:"Web Development"})]}),c.jsxs(Js,{id:"slide-2",children:[c.jsx(Zs,{src:h0}),c.jsx(qs,{children:"Game Development"})]}),c.jsxs(Js,{id:"slide-3",children:[c.jsx(Zs,{src:m0}),c.jsx(qs,{children:"Python"})]}),c.jsxs(KC,{children:[c.jsx("a",{href:"#slide-1"}),c.jsx("a",{href:"#slide-2"}),c.jsx("a",{href:"#slide-3"})]})]})}),c.jsxs(Th,{children:[c.jsx(hi,{children:"Topics"}),c.jsxs(HC,{children:[c.jsx("div",{children:"Select"}),c.jsx(WC,{type:"checkbox"})]})]}),c.jsxs(QC,{children:[c.jsx(ie,{topicName:"Web Development"}),c.jsx(ie,{topicName:"React"}),c.jsx(ie,{topicName:"Python"}),c.jsx(ie,{topicName:"Dynamic Programming"}),c.jsx(ie,{topicName:"JavaScript"}),c.jsx(ie,{topicName:"Full-Stack Development"}),c.jsx(ie,{topicName:"Data Structures"}),c.jsx(ie,{topicName:"Networks"}),c.jsx(ie,{topicName:"Game Development"}),c.jsx(ie,{topicName:"Cybersecurity"}),c.jsx(ie,{topicName:"HTML"}),c.jsx(ie,{topicName:"CSS"}),c.jsx(ie,{topicName:"Data Science"})]})]})]})}),e&&c.jsx(XC,{children:c.jsxs(JC,{children:[c.jsx(ZC,{children:"Please create an account to access this feature "}),c.jsx("div",{}),c.jsx("div",{}),c.jsx(qC,{children:"Create Account"}),c.jsx(e3,{onClick:r,children:"Close"})]})})]})}const n3=y.div`

    margin-left: 20vw;
    display: flex;
    justify-content: center;
    width: 80vw;
    height: 100vh;
`,r3=y.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,i3=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
`,o3=y.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,a3=y.div`  
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
`,l3=y.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 90%;
    height: 80%;
`,s3=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,u3=y.img`
    width: 60px;
    border-radius: 100px;
`,c3=y(mn)`
    font-size: 25px;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`,f3=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,d3=y.div`
    font-size: 19px;
    color: var(--grey);
`;function eu({user:e,targetUrl:t}){const n=hn(),r=()=>{n(t)};return c.jsx(a3,{onClick:r,children:c.jsxs(l3,{children:[c.jsxs(s3,{children:[c.jsx(u3,{src:e.profilePic}),c.jsx(c3,{children:e.userName})]}),c.jsx(f3,{children:c.jsx(d3,{children:e.text})})]})})}const p3=y.div`
    font-size: 50px;
    font-weight: 700;
    color: var(--white);

`,ts=y(mn)`
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
`,h3={userName:"Boo",text:"HAHAHHAHAHAH.",profilePic:ki},m3={userName:"Kirby",text:"Words words words words. Words words words.",profilePic:wi},v3={userName:"Sonic",text:"Gotta go fast bro",profilePic:br};function g3(){hn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return T.useState("Recents"),c.jsxs(Ut,{children:[c.jsx(Qn,{}),c.jsxs(n3,{children:[c.jsxs(r3,{children:[c.jsx(i3,{children:c.jsx(p3,{children:"Direct Messages"})}),c.jsxs(o3,{children:[c.jsx(eu,{user:h3,targetUrl:e}),c.jsx(eu,{user:m3,targetUrl:t}),c.jsx(eu,{user:v3,targetUrl:n})]})]}),c.jsx(ts,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const y3=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,x3=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,w3=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,k3=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,S3=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,b3=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,C3=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,P3=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,E3=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,j3=y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,N3=y(mn)`

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
`,Jf=y(mn)`
    font-size: 60px;
    font-weight: 500;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`,Zf=y.img`
    width: 60px;
    border-radius: 100px;
`,T3=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border: 1px solid black;
    height: 150px;
    transition: 0.1s ease-in-out;
`,_3=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    height: 80%;
`,R3=y.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,L3=y.img`
    width: 60px;
    border-radius: 100px;
`,O3=y.div`
    font-size: 22px;
    color: var(--white);
`,A3=y.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,I3=y.div`
    font-size: 17px;
    color: var(--white);
`;function Ze({user:e,text:t}){return c.jsx(T3,{children:c.jsxs(_3,{children:[c.jsxs(R3,{children:[c.jsx(L3,{src:e.profilePic}),c.jsx(O3,{children:e.userName})]}),c.jsx(A3,{children:c.jsx(I3,{children:e.message})})]})})}const _h={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Vl},Sa={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:wi},M3={userName:"Boo",profilePic:ki},z3={userName:"Sonic",profilePic:br};function D3(){hn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return c.jsxs(Ut,{children:[c.jsx(Qn,{}),c.jsxs(y3,{children:[c.jsx(x3,{children:c.jsxs(w3,{children:[c.jsxs(b3,{children:[c.jsx(Zf,{src:wi}),c.jsx(Jf,{children:"Kirby"}),c.jsx(N3,{to:"/CodeConnect/direct-messages",children:"X"})]}),c.jsxs(C3,{children:[c.jsx(Ze,{user:Sa}),c.jsx(Ze,{user:_h}),c.jsx(Ze,{user:Sa}),c.jsx(Ze,{user:_h}),c.jsx(Ze,{user:Sa})]}),c.jsxs(P3,{children:[c.jsx(j3,{rows:"2",cols:"20"}),c.jsx(E3,{children:"Send"})]})]})}),c.jsxs(S3,{children:[c.jsx(k3,{children:c.jsx(es,{children:"Messages"})}),c.jsx(Pt,{user:M3,url:e}),c.jsx(Pt,{user:Sa,url:t}),c.jsx(Pt,{user:z3,url:n})]}),c.jsx(ts,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const $3=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;  
`,F3=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,U3=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,B3=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,H3=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,W3=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,V3=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,Y3=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,G3=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,K3=y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,Q3=y(mn)`

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
`,Rh={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Vl},X3={userName:"Kirby",profilePic:wi},ba={message:"HAHAHHAHAHAH.",userName:"Boo",profilePic:ki},J3={userName:"Sonic",profilePic:br};function Z3(){hn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return c.jsxs(Ut,{children:[c.jsx(Qn,{}),c.jsxs($3,{children:[c.jsx(F3,{children:c.jsxs(U3,{children:[c.jsxs(W3,{children:[c.jsx(Zf,{src:ki}),c.jsx(Jf,{children:"Boo"}),c.jsx(Q3,{to:"/CodeConnect/direct-messages",children:"X"})]}),c.jsxs(V3,{children:[c.jsx(Ze,{user:ba}),c.jsx(Ze,{user:Rh}),c.jsx(Ze,{user:ba}),c.jsx(Ze,{user:Rh}),c.jsx(Ze,{user:ba})]}),c.jsxs(Y3,{children:[c.jsx(K3,{rows:"2",cols:"20"}),c.jsx(G3,{children:"Send"})]})]})}),c.jsxs(H3,{children:[c.jsx(B3,{children:c.jsx(es,{children:"Messages"})}),c.jsx(Pt,{user:ba,url:e}),c.jsx(Pt,{user:X3,url:t}),c.jsx(Pt,{user:J3,url:n})]}),c.jsx(ts,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const q3=y.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,e4=y.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,t4=y.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,n4=y.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,r4=y.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,i4=y.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`,o4=y.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,a4=y.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,l4=y.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`,s4=y.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,u4=y(mn)`

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
`,Lh={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Vl},c4={userName:"Kirby",profilePic:wi},f4={userName:"Boo",profilePic:ki},Ca={message:"Gotta go fast bro",userName:"Sonic",profilePic:br};function d4(){hn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return c.jsxs(Ut,{children:[c.jsx(Qn,{}),c.jsxs(q3,{children:[c.jsx(e4,{children:c.jsxs(t4,{children:[c.jsxs(i4,{children:[c.jsx(Zf,{src:br}),c.jsx(Jf,{children:"Sonic"}),c.jsx(u4,{to:"/CodeConnect/direct-messages",children:"X"})]}),c.jsxs(o4,{children:[c.jsx(Ze,{user:Ca}),c.jsx(Ze,{user:Lh}),c.jsx(Ze,{user:Ca}),c.jsx(Ze,{user:Lh}),c.jsx(Ze,{user:Ca})]}),c.jsxs(a4,{children:[c.jsx(s4,{rows:"2",cols:"20"}),c.jsx(l4,{children:"Send"})]})]})}),c.jsxs(r4,{children:[c.jsx(n4,{children:c.jsx(es,{children:"Messages"})}),c.jsx(Pt,{user:f4,url:e}),c.jsx(Pt,{user:c4,url:t}),c.jsx(Pt,{user:Ca,url:n})]}),c.jsx(ts,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const p4=fw([{path:"/CodeConnect/",element:c.jsx(F2,{})},{path:"/CodeConnect/home",element:c.jsx(qb,{})},{path:"/CodeConnect/explore",element:c.jsx(gb,{})},{path:"/CodeConnect/direct-messages",element:c.jsx(g3,{})},{path:"/CodeConnect/dm-kirby",element:c.jsx(D3,{})},{path:"/CodeConnect/dm-boo",element:c.jsx(Z3,{})},{path:"/CodeConnect/dm-sonic",element:c.jsx(d4,{})},{path:"/CodeConnect/new-direct-message",element:c.jsx(SC,{})},{path:"/CodeConnect/account",element:c.jsx(_b,{})},{path:"/CodeConnect/guest-home",element:c.jsx($C,{})},{path:"/CodeConnect/guest-explore",element:c.jsx(t3,{})}]),h4=tu.createRoot(document.getElementById("root"));h4.render(c.jsxs("div",{children:[c.jsx(Rb,{}),c.jsx(xw,{router:p4})]}));
