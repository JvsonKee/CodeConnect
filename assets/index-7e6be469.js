function jh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _h={exports:{}},yl={},Nh={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),g0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),w0=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),b0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),P0=Symbol.for("react.lazy"),od=Symbol.iterator;function j0(e){return e===null||typeof e!="object"?null:(e=od&&e[od]||e["@@iterator"],typeof e=="function"?e:null)}var Rh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Th=Object.assign,Oh={};function pi(e,t,n){this.props=e,this.context=t,this.refs=Oh,this.updater=n||Rh}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ah(){}Ah.prototype=pi.prototype;function kc(e,t,n){this.props=e,this.context=t,this.refs=Oh,this.updater=n||Rh}var Sc=kc.prototype=new Ah;Sc.constructor=kc;Th(Sc,pi.prototype);Sc.isPureReactComponent=!0;var ad=Array.isArray,Lh=Object.prototype.hasOwnProperty,bc={current:null},Ih={key:!0,ref:!0,__self:!0,__source:!0};function Mh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Lh.call(t,r)&&!Ih.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ro,type:e,key:o,ref:a,props:i,_owner:bc.current}}function _0(e,t){return{$$typeof:Ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ro}function N0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ld=/\/+/g;function is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?N0(""+e.key):t.toString(36)}function wa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ro:case g0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+is(a,0):r,ad(i)?(n="",e!=null&&(n=e.replace(ld,"$&/")+"/"),wa(i,t,n,"",function(u){return u})):i!=null&&(Cc(i)&&(i=_0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ld,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ad(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+is(o,l);a+=wa(o,t,n,s,i)}else if(s=j0(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+is(o,l++),a+=wa(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Yo(e,t,n){if(e==null)return e;var r=[],i=0;return wa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function R0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},ka={transition:null},T0={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:ka,ReactCurrentOwner:bc};X.Children={map:Yo,forEach:function(e,t,n){Yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yo(e,function(){t++}),t},toArray:function(e){return Yo(e,function(t){return t})||[]},only:function(e){if(!Cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=pi;X.Fragment=y0;X.Profiler=w0;X.PureComponent=kc;X.StrictMode=x0;X.Suspense=C0;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T0;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Th({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=bc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Lh.call(t,s)&&!Ih.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ro,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:S0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k0,_context:e},e.Consumer=e};X.createElement=Mh;X.createFactory=function(e){var t=Mh.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:b0,render:e}};X.isValidElement=Cc;X.lazy=function(e){return{$$typeof:P0,_payload:{_status:-1,_result:e},_init:R0}};X.memo=function(e,t){return{$$typeof:E0,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=ka.transition;ka.transition={};try{e()}finally{ka.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return Ze.current.useCallback(e,t)};X.useContext=function(e){return Ze.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ze.current.useEffect(e,t)};X.useId=function(){return Ze.current.useId()};X.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ze.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};X.useRef=function(e){return Ze.current.useRef(e)};X.useState=function(e){return Ze.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ze.current.useTransition()};X.version="18.2.0";Nh.exports=X;var N=Nh.exports;const kt=wc(N),O0=jh({__proto__:null,default:kt},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=N,L0=Symbol.for("react.element"),I0=Symbol.for("react.fragment"),M0=Object.prototype.hasOwnProperty,D0=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z0={key:!0,ref:!0,__self:!0,__source:!0};function Dh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)M0.call(t,r)&&!z0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:L0,type:e,key:o,ref:a,props:i,_owner:D0.current}}yl.Fragment=I0;yl.jsx=Dh;yl.jsxs=Dh;_h.exports=yl;var d=_h.exports,Js={},zh={exports:{}},dt={},Fh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,F){var U=O.length;O.push(F);e:for(;0<U;){var te=U-1>>>1,ee=O[te];if(0<i(ee,F))O[te]=F,O[U]=ee,U=te;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],U=O.pop();if(U!==F){O[0]=U;e:for(var te=0,ee=O.length,ze=ee>>>1;te<ze;){var ke=2*(te+1)-1,vt=O[ke],Ge=ke+1,et=O[Ge];if(0>i(vt,U))Ge<ee&&0>i(et,vt)?(O[te]=et,O[Ge]=U,te=Ge):(O[te]=vt,O[ke]=U,te=ke);else if(Ge<ee&&0>i(et,U))O[te]=et,O[Ge]=U,te=Ge;else break e}}return F}function i(O,F){var U=O.sortIndex-F.sortIndex;return U!==0?U:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,p=null,h=3,x=!1,y=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=O)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function v(O){if(w=!1,g(O),!y)if(n(s)!==null)y=!0,mt(E);else{var F=n(u);F!==null&&Ae(v,F.startTime-O)}}function E(O,F){y=!1,w&&(w=!1,m(T),T=-1),x=!0;var U=h;try{for(g(F),p=n(s);p!==null&&(!(p.expirationTime>F)||O&&!q());){var te=p.callback;if(typeof te=="function"){p.callback=null,h=p.priorityLevel;var ee=te(p.expirationTime<=F);F=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(s)&&r(s),g(F)}else r(s);p=n(s)}if(p!==null)var ze=!0;else{var ke=n(u);ke!==null&&Ae(v,ke.startTime-F),ze=!1}return ze}finally{p=null,h=U,x=!1}}var j=!1,b=null,T=-1,M=5,B=-1;function q(){return!(e.unstable_now()-B<M)}function Ne(){if(b!==null){var O=e.unstable_now();B=O;var F=!0;try{F=b(!0,O)}finally{F?Ee():(j=!1,b=null)}}else j=!1}var Ee;if(typeof f=="function")Ee=function(){f(Ne)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,de=Nt.port2;Nt.port1.onmessage=Ne,Ee=function(){de.postMessage(null)}}else Ee=function(){P(Ne,0)};function mt(O){b=O,j||(j=!0,Ee())}function Ae(O,F){T=P(function(){O(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,mt(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var U=h;h=F;try{return O()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=h;h=O;try{return F()}finally{h=U}},e.unstable_scheduleCallback=function(O,F,U){var te=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,O){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=U+ee,O={id:c++,callback:F,priorityLevel:O,startTime:U,expirationTime:ee,sortIndex:-1},U>te?(O.sortIndex=U,t(u,O),n(s)===null&&O===n(u)&&(w?(m(T),T=-1):w=!0,Ae(v,U-te))):(O.sortIndex=ee,t(s,O),y||x||(y=!0,mt(E))),O},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(O){var F=h;return function(){var U=h;h=F;try{return O.apply(this,arguments)}finally{h=U}}}})($h);Fh.exports=$h;var F0=Fh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh=N,ft=F0;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bh=new Set,io={};function gr(e,t){qr(e,t),qr(e+"Capture",t)}function qr(e,t){for(io[e]=t,e=0;e<t.length;e++)Bh.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zs=Object.prototype.hasOwnProperty,$0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sd={},ud={};function U0(e){return Zs.call(ud,e)?!0:Zs.call(sd,e)?!1:$0.test(e)?ud[e]=!0:(sd[e]=!0,!1)}function B0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H0(e,t,n,r){if(t===null||typeof t>"u"||B0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ec=/[\-:]([a-z])/g;function Pc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ec,Pc);Be[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ec,Pc);Be[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ec,Pc);Be[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function jc(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H0(t,n,i,r)&&(n=null),r||i===null?U0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=Uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),jr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),_c=Symbol.for("react.strict_mode"),qs=Symbol.for("react.profiler"),Hh=Symbol.for("react.provider"),Wh=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),eu=Symbol.for("react.suspense"),tu=Symbol.for("react.suspense_list"),Rc=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Vh=Symbol.for("react.offscreen"),cd=Symbol.iterator;function Ci(e){return e===null||typeof e!="object"?null:(e=cd&&e[cd]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,os;function Di(e){if(os===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);os=t&&t[1]||""}return`
`+os+e}var as=!1;function ls(e,t){if(!e||as)return"";as=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{as=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Di(e):""}function W0(e){switch(e.tag){case 5:return Di(e.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return e=ls(e.type,!1),e;case 11:return e=ls(e.type.render,!1),e;case 1:return e=ls(e.type,!0),e;default:return""}}function nu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case jr:return"Portal";case qs:return"Profiler";case _c:return"StrictMode";case eu:return"Suspense";case tu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wh:return(e.displayName||"Context")+".Consumer";case Hh:return(e._context.displayName||"Context")+".Provider";case Nc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rc:return t=e.displayName||null,t!==null?t:nu(e.type)||"Memo";case bn:t=e._payload,e=e._init;try{return nu(e(t))}catch{}}return null}function V0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nu(t);case 8:return t===_c?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y0(e){var t=Yh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=Y0(e))}function Kh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ru(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gh(e,t){t=t.checked,t!=null&&jc(e,"checked",t,!1)}function iu(e,t){Gh(e,t);var n=Fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ou(e,t.type,n):t.hasOwnProperty("defaultValue")&&ou(e,t.type,Fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ou(e,t,n){(t!=="number"||za(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zi=Array.isArray;function Wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function au(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(zi(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Fn(n)}}function Qh(e,t){var n=Fn(t.value),r=Fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,Jh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K0=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(e){K0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hi[t]=Hi[e]})});function Zh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hi.hasOwnProperty(e)&&Hi[e]?(""+t).trim():t+"px"}function qh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var G0=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function su(e,t){if(t){if(G0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function uu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cu=null;function Tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fu=null,Vr=null,Yr=null;function md(e){if(e=Ao(e)){if(typeof fu!="function")throw Error(R(280));var t=e.stateNode;t&&(t=bl(t),fu(e.stateNode,e.type,t))}}function em(e){Vr?Yr?Yr.push(e):Yr=[e]:Vr=e}function tm(){if(Vr){var e=Vr,t=Yr;if(Yr=Vr=null,md(e),t)for(e=0;e<t.length;e++)md(t[e])}}function nm(e,t){return e(t)}function rm(){}var ss=!1;function im(e,t,n){if(ss)return e(t,n);ss=!0;try{return nm(e,t,n)}finally{ss=!1,(Vr!==null||Yr!==null)&&(rm(),tm())}}function ao(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var du=!1;if(rn)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){du=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{du=!1}function Q0(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Wi=!1,Fa=null,$a=!1,pu=null,X0={onError:function(e){Wi=!0,Fa=e}};function J0(e,t,n,r,i,o,a,l,s){Wi=!1,Fa=null,Q0.apply(X0,arguments)}function Z0(e,t,n,r,i,o,a,l,s){if(J0.apply(this,arguments),Wi){if(Wi){var u=Fa;Wi=!1,Fa=null}else throw Error(R(198));$a||($a=!0,pu=u)}}function yr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function om(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vd(e){if(yr(e)!==e)throw Error(R(188))}function q0(e){var t=e.alternate;if(!t){if(t=yr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vd(i),e;if(o===r)return vd(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function am(e){return e=q0(e),e!==null?lm(e):null}function lm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lm(e);if(t!==null)return t;e=e.sibling}return null}var sm=ft.unstable_scheduleCallback,gd=ft.unstable_cancelCallback,e1=ft.unstable_shouldYield,t1=ft.unstable_requestPaint,Ce=ft.unstable_now,n1=ft.unstable_getCurrentPriorityLevel,Oc=ft.unstable_ImmediatePriority,um=ft.unstable_UserBlockingPriority,Ua=ft.unstable_NormalPriority,r1=ft.unstable_LowPriority,cm=ft.unstable_IdlePriority,xl=null,Kt=null;function i1(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:l1,o1=Math.log,a1=Math.LN2;function l1(e){return e>>>=0,e===0?32:31-(o1(e)/a1|0)|0}var Xo=64,Jo=4194304;function Fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Fi(l):(o&=a,o!==0&&(r=Fi(o)))}else a=n&~i,a!==0?r=Fi(a):o!==0&&(r=Fi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dt(t),i=1<<n,r|=e[n],t&=~i;return r}function s1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Dt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=s1(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function hu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fm(){var e=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),e}function us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function To(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=n}function c1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ac(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function dm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pm,Lc,hm,mm,vm,mu=!1,Zo=[],Rn=null,Tn=null,On=null,lo=new Map,so=new Map,En=[],f1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function Pi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ao(t),t!==null&&Lc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function d1(e,t,n,r,i){switch(t){case"focusin":return Rn=Pi(Rn,e,t,n,r,i),!0;case"dragenter":return Tn=Pi(Tn,e,t,n,r,i),!0;case"mouseover":return On=Pi(On,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return lo.set(o,Pi(lo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,so.set(o,Pi(so.get(o)||null,e,t,n,r,i)),!0}return!1}function gm(e){var t=Zn(e.target);if(t!==null){var n=yr(t);if(n!==null){if(t=n.tag,t===13){if(t=om(n),t!==null){e.blockedOn=t,vm(e.priority,function(){hm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cu=r,n.target.dispatchEvent(r),cu=null}else return t=Ao(n),t!==null&&Lc(t),e.blockedOn=n,!1;t.shift()}return!0}function xd(e,t,n){Sa(e)&&n.delete(t)}function p1(){mu=!1,Rn!==null&&Sa(Rn)&&(Rn=null),Tn!==null&&Sa(Tn)&&(Tn=null),On!==null&&Sa(On)&&(On=null),lo.forEach(xd),so.forEach(xd)}function ji(e,t){e.blockedOn===t&&(e.blockedOn=null,mu||(mu=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,p1)))}function uo(e){function t(i){return ji(i,e)}if(0<Zo.length){ji(Zo[0],e);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&ji(Rn,e),Tn!==null&&ji(Tn,e),On!==null&&ji(On,e),lo.forEach(t),so.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)gm(n),n.blockedOn===null&&En.shift()}var Kr=fn.ReactCurrentBatchConfig,Ha=!0;function h1(e,t,n,r){var i=re,o=Kr.transition;Kr.transition=null;try{re=1,Ic(e,t,n,r)}finally{re=i,Kr.transition=o}}function m1(e,t,n,r){var i=re,o=Kr.transition;Kr.transition=null;try{re=4,Ic(e,t,n,r)}finally{re=i,Kr.transition=o}}function Ic(e,t,n,r){if(Ha){var i=vu(e,t,n,r);if(i===null)xs(e,t,r,Wa,n),yd(e,r);else if(d1(i,e,t,n,r))r.stopPropagation();else if(yd(e,r),t&4&&-1<f1.indexOf(e)){for(;i!==null;){var o=Ao(i);if(o!==null&&pm(o),o=vu(e,t,n,r),o===null&&xs(e,t,r,Wa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else xs(e,t,r,null,n)}}var Wa=null;function vu(e,t,n,r){if(Wa=null,e=Tc(r),e=Zn(e),e!==null)if(t=yr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=om(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wa=e,null}function ym(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n1()){case Oc:return 1;case um:return 4;case Ua:case r1:return 16;case cm:return 536870912;default:return 16}default:return 16}}var jn=null,Mc=null,ba=null;function xm(){if(ba)return ba;var e,t=Mc,n=t.length,r,i="value"in jn?jn.value:jn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ba=i.slice(e,1<r?1-r:void 0)}function Ca(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function wd(){return!1}function pt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qo:wd,this.isPropagationStopped=wd,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),t}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=pt(hi),Oo=ge({},hi,{view:0,detail:0}),v1=pt(Oo),cs,fs,_i,wl=ge({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(cs=e.screenX-_i.screenX,fs=e.screenY-_i.screenY):fs=cs=0,_i=e),cs)},movementY:function(e){return"movementY"in e?e.movementY:fs}}),kd=pt(wl),g1=ge({},wl,{dataTransfer:0}),y1=pt(g1),x1=ge({},Oo,{relatedTarget:0}),ds=pt(x1),w1=ge({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=pt(w1),S1=ge({},hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b1=pt(S1),C1=ge({},hi,{data:0}),Sd=pt(C1),E1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=j1[e])?!!t[e]:!1}function zc(){return _1}var N1=ge({},Oo,{key:function(e){if(e.key){var t=E1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(e){return e.type==="keypress"?Ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R1=pt(N1),T1=ge({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=pt(T1),O1=ge({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),A1=pt(O1),L1=ge({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),I1=pt(L1),M1=ge({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),D1=pt(M1),z1=[9,13,27,32],Fc=rn&&"CompositionEvent"in window,Vi=null;rn&&"documentMode"in document&&(Vi=document.documentMode);var F1=rn&&"TextEvent"in window&&!Vi,wm=rn&&(!Fc||Vi&&8<Vi&&11>=Vi),Cd=String.fromCharCode(32),Ed=!1;function km(e,t){switch(e){case"keyup":return z1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function $1(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(Ed=!0,Cd);case"textInput":return e=t.data,e===Cd&&Ed?null:e;default:return null}}function U1(e,t){if(Nr)return e==="compositionend"||!Fc&&km(e,t)?(e=xm(),ba=Mc=jn=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wm&&t.locale!=="ko"?null:t.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B1[e.type]:t==="textarea"}function bm(e,t,n,r){em(r),t=Va(t,"onChange"),0<t.length&&(n=new Dc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yi=null,co=null;function H1(e){Lm(e,0)}function kl(e){var t=Or(e);if(Kh(t))return e}function W1(e,t){if(e==="change")return t}var Cm=!1;if(rn){var ps;if(rn){var hs="oninput"in document;if(!hs){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),hs=typeof jd.oninput=="function"}ps=hs}else ps=!1;Cm=ps&&(!document.documentMode||9<document.documentMode)}function _d(){Yi&&(Yi.detachEvent("onpropertychange",Em),co=Yi=null)}function Em(e){if(e.propertyName==="value"&&kl(co)){var t=[];bm(t,co,e,Tc(e)),im(H1,t)}}function V1(e,t,n){e==="focusin"?(_d(),Yi=t,co=n,Yi.attachEvent("onpropertychange",Em)):e==="focusout"&&_d()}function Y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(co)}function K1(e,t){if(e==="click")return kl(t)}function G1(e,t){if(e==="input"||e==="change")return kl(t)}function Q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $t=typeof Object.is=="function"?Object.is:Q1;function fo(e,t){if($t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zs.call(t,i)||!$t(e[i],t[i]))return!1}return!0}function Nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rd(e,t){var n=Nd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nd(n)}}function Pm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jm(){for(var e=window,t=za();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=za(e.document)}return t}function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function X1(e){var t=jm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pm(n.ownerDocument.documentElement,n)){if(r!==null&&$c(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Rd(n,o);var a=Rd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var J1=rn&&"documentMode"in document&&11>=document.documentMode,Rr=null,gu=null,Ki=null,yu=!1;function Td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yu||Rr==null||Rr!==za(r)||(r=Rr,"selectionStart"in r&&$c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ki&&fo(Ki,r)||(Ki=r,r=Va(gu,"onSelect"),0<r.length&&(t=new Dc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},ms={},_m={};rn&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Sl(e){if(ms[e])return ms[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _m)return ms[e]=t[n];return e}var Nm=Sl("animationend"),Rm=Sl("animationiteration"),Tm=Sl("animationstart"),Om=Sl("transitionend"),Am=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){Am.set(e,t),gr(t,[e])}for(var vs=0;vs<Od.length;vs++){var gs=Od[vs],Z1=gs.toLowerCase(),q1=gs[0].toUpperCase()+gs.slice(1);Vn(Z1,"on"+q1)}Vn(Nm,"onAnimationEnd");Vn(Rm,"onAnimationIteration");Vn(Tm,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Om,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function Ad(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Z0(r,t,void 0,e),e.currentTarget=null}function Lm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Ad(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Ad(i,l,u),o=s}}}if($a)throw e=pu,$a=!1,pu=null,e}function le(e,t){var n=t[bu];n===void 0&&(n=t[bu]=new Set);var r=e+"__bubble";n.has(r)||(Im(t,e,2,!1),n.add(r))}function ys(e,t,n){var r=0;t&&(r|=4),Im(n,e,r,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function po(e){if(!e[ta]){e[ta]=!0,Bh.forEach(function(n){n!=="selectionchange"&&(ey.has(n)||ys(n,!1,e),ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,ys("selectionchange",!1,t))}}function Im(e,t,n,r){switch(ym(t)){case 1:var i=h1;break;case 4:i=m1;break;default:i=Ic}n=i.bind(null,t,n,e),i=void 0,!du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Zn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}im(function(){var u=o,c=Tc(n),p=[];e:{var h=Am.get(e);if(h!==void 0){var x=Dc,y=e;switch(e){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":x=R1;break;case"focusin":y="focus",x=ds;break;case"focusout":y="blur",x=ds;break;case"beforeblur":case"afterblur":x=ds;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=A1;break;case Nm:case Rm:case Tm:x=k1;break;case Om:x=I1;break;case"scroll":x=v1;break;case"wheel":x=D1;break;case"copy":case"cut":case"paste":x=b1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=bd}var w=(t&4)!==0,P=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,g;f!==null;){g=f;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,m!==null&&(v=ao(f,m),v!=null&&w.push(ho(f,v,g)))),P)break;f=f.return}0<w.length&&(h=new x(h,y,null,n,c),p.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==cu&&(y=n.relatedTarget||n.fromElement)&&(Zn(y)||y[on]))break e;if((x||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?Zn(y):null,y!==null&&(P=yr(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=kd,v="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=bd,v="onPointerLeave",m="onPointerEnter",f="pointer"),P=x==null?h:Or(x),g=y==null?h:Or(y),h=new w(v,f+"leave",x,n,c),h.target=P,h.relatedTarget=g,v=null,Zn(c)===u&&(w=new w(m,f+"enter",y,n,c),w.target=g,w.relatedTarget=P,v=w),P=v,x&&y)t:{for(w=x,m=y,f=0,g=w;g;g=Er(g))f++;for(g=0,v=m;v;v=Er(v))g++;for(;0<f-g;)w=Er(w),f--;for(;0<g-f;)m=Er(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Er(w),m=Er(m)}w=null}else w=null;x!==null&&Ld(p,h,x,w,!1),y!==null&&P!==null&&Ld(p,P,y,w,!0)}}e:{if(h=u?Or(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var E=W1;else if(Pd(h))if(Cm)E=G1;else{E=Y1;var j=V1}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=K1);if(E&&(E=E(e,u))){bm(p,E,n,c);break e}j&&j(e,h,u),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&ou(h,"number",h.value)}switch(j=u?Or(u):window,e){case"focusin":(Pd(j)||j.contentEditable==="true")&&(Rr=j,gu=u,Ki=null);break;case"focusout":Ki=gu=Rr=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Td(p,n,c);break;case"selectionchange":if(J1)break;case"keydown":case"keyup":Td(p,n,c)}var b;if(Fc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Nr?km(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(wm&&n.locale!=="ko"&&(Nr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Nr&&(b=xm()):(jn=c,Mc="value"in jn?jn.value:jn.textContent,Nr=!0)),j=Va(u,T),0<j.length&&(T=new Sd(T,e,null,n,c),p.push({event:T,listeners:j}),b?T.data=b:(b=Sm(n),b!==null&&(T.data=b)))),(b=F1?$1(e,n):U1(e,n))&&(u=Va(u,"onBeforeInput"),0<u.length&&(c=new Sd("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=b))}Lm(p,t)})}function ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Va(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ao(e,n),o!=null&&r.unshift(ho(e,o,i)),o=ao(e,t),o!=null&&r.push(ho(e,o,i))),e=e.return}return r}function Er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ld(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ao(n,o),s!=null&&a.unshift(ho(n,s,l))):i||(s=ao(n,o),s!=null&&a.push(ho(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function Id(e){return(typeof e=="string"?e:""+e).replace(ty,`
`).replace(ny,"")}function na(e,t,n){if(t=Id(t),Id(e)!==t&&n)throw Error(R(425))}function Ya(){}var xu=null,wu=null;function ku(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(e){return Md.resolve(null).then(e).catch(oy)}:Su;function oy(e){setTimeout(function(){throw e})}function ws(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),uo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);uo(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mi=Math.random().toString(36).slice(2),Vt="__reactFiber$"+mi,mo="__reactProps$"+mi,on="__reactContainer$"+mi,bu="__reactEvents$"+mi,ay="__reactListeners$"+mi,ly="__reactHandles$"+mi;function Zn(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[on]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dd(e);e!==null;){if(n=e[Vt])return n;e=Dd(e)}return t}e=n,n=e.parentNode}return null}function Ao(e){return e=e[Vt]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function bl(e){return e[mo]||null}var Cu=[],Ar=-1;function Yn(e){return{current:e}}function ce(e){0>Ar||(e.current=Cu[Ar],Cu[Ar]=null,Ar--)}function ae(e,t){Ar++,Cu[Ar]=e.current,e.current=t}var $n={},Ke=Yn($n),ot=Yn(!1),sr=$n;function ei(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function at(e){return e=e.childContextTypes,e!=null}function Ka(){ce(ot),ce(Ke)}function zd(e,t,n){if(Ke.current!==$n)throw Error(R(168));ae(Ke,t),ae(ot,n)}function Mm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,V0(e)||"Unknown",i));return ge({},n,r)}function Ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,sr=Ke.current,ae(Ke,e),ae(ot,ot.current),!0}function Fd(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Mm(e,t,sr),r.__reactInternalMemoizedMergedChildContext=e,ce(ot),ce(Ke),ae(Ke,e)):ce(ot),ae(ot,n)}var Zt=null,Cl=!1,ks=!1;function Dm(e){Zt===null?Zt=[e]:Zt.push(e)}function sy(e){Cl=!0,Dm(e)}function Kn(){if(!ks&&Zt!==null){ks=!0;var e=0,t=re;try{var n=Zt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zt=null,Cl=!1}catch(i){throw Zt!==null&&(Zt=Zt.slice(e+1)),sm(Oc,Kn),i}finally{re=t,ks=!1}}return null}var Lr=[],Ir=0,Qa=null,Xa=0,xt=[],wt=0,ur=null,qt=1,en="";function Xn(e,t){Lr[Ir++]=Xa,Lr[Ir++]=Qa,Qa=e,Xa=t}function zm(e,t,n){xt[wt++]=qt,xt[wt++]=en,xt[wt++]=ur,ur=e;var r=qt;e=en;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var o=32-Dt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,qt=1<<32-Dt(t)+i|n<<i|r,en=o+e}else qt=1<<o|n<<i|r,en=e}function Uc(e){e.return!==null&&(Xn(e,1),zm(e,1,0))}function Bc(e){for(;e===Qa;)Qa=Lr[--Ir],Lr[Ir]=null,Xa=Lr[--Ir],Lr[Ir]=null;for(;e===ur;)ur=xt[--wt],xt[wt]=null,en=xt[--wt],xt[wt]=null,qt=xt[--wt],xt[wt]=null}var ct=null,ut=null,pe=!1,It=null;function Fm(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $d(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ut=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ur!==null?{id:qt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ut=null,!0):!1;default:return!1}}function Eu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pu(e){if(pe){var t=ut;if(t){var n=t;if(!$d(e,t)){if(Eu(e))throw Error(R(418));t=An(n.nextSibling);var r=ct;t&&$d(e,t)?Fm(r,n):(e.flags=e.flags&-4097|2,pe=!1,ct=e)}}else{if(Eu(e))throw Error(R(418));e.flags=e.flags&-4097|2,pe=!1,ct=e}}}function Ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function ra(e){if(e!==ct)return!1;if(!pe)return Ud(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ku(e.type,e.memoizedProps)),t&&(t=ut)){if(Eu(e))throw $m(),Error(R(418));for(;t;)Fm(e,t),t=An(t.nextSibling)}if(Ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ct?An(e.stateNode.nextSibling):null;return!0}function $m(){for(var e=ut;e;)e=An(e.nextSibling)}function ti(){ut=ct=null,pe=!1}function Hc(e){It===null?It=[e]:It.push(e)}var uy=fn.ReactCurrentBatchConfig;function Ot(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ja=Yn(null),Za=null,Mr=null,Wc=null;function Vc(){Wc=Mr=Za=null}function Yc(e){var t=Ja.current;ce(Ja),e._currentValue=t}function ju(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gr(e,t){Za=e,Wc=Mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(Wc!==e)if(e={context:e,memoizedValue:t,next:null},Mr===null){if(Za===null)throw Error(R(308));Mr=e,Za.dependencies={lanes:0,firstContext:e}}else Mr=Mr.next=e;return t}var qn=null;function Kc(e){qn===null?qn=[e]:qn.push(e)}function Um(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Kc(t)):(n.next=i.next,i.next=n),t.interleaved=n,an(e,r)}function an(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function Gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,an(e,n)}return i=r.interleaved,i===null?(t.next=t,Kc(r)):(t.next=i.next,i.next=t),r.interleaved=t,an(e,n)}function Ea(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ac(e,n)}}function Bd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qa(e,t,n,r){var i=e.updateQueue;Cn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var p=i.baseState;a=0,c=u=s=null,l=o;do{var h=l.lane,x=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(h=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(x,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(x,p,h):y,h==null)break e;p=ge({},p,h);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=x,s=p):c=c.next=x,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(s=p),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fr|=a,e.lanes=a,e.memoizedState=p}}function Hd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Hm=new Uh.Component().refs;function _u(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var El={isMounted:function(e){return(e=e._reactInternals)?yr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Mn(e),o=tn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ln(e,o,i),t!==null&&(zt(t,e,i,r),Ea(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Mn(e),o=tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ln(e,o,i),t!==null&&(zt(t,e,i,r),Ea(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Mn(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ln(e,i,r),t!==null&&(zt(t,e,r,n),Ea(t,e,r))}};function Wd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!fo(n,r)||!fo(i,o):!0}function Wm(e,t,n){var r=!1,i=$n,o=t.contextType;return typeof o=="object"&&o!==null?o=Pt(o):(i=at(t)?sr:Ke.current,r=t.contextTypes,o=(r=r!=null)?ei(e,i):$n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=El,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&El.enqueueReplaceState(t,t.state,null)}function Nu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Hm,Gc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Pt(o):(o=at(t)?sr:Ke.current,i.context=ei(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_u(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&El.enqueueReplaceState(i,i.state,null),qa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Hm&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function ia(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yd(e){var t=e._init;return t(e._payload)}function Vm(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Dn(m,f),m.index=0,m.sibling=null,m}function o(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,v){return f===null||f.tag!==6?(f=_s(g,m.mode,v),f.return=m,f):(f=i(f,g),f.return=m,f)}function s(m,f,g,v){var E=g.type;return E===_r?c(m,f,g.props.children,v,g.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===bn&&Yd(E)===f.type)?(v=i(f,g.props),v.ref=Ni(m,f,g),v.return=m,v):(v=Ta(g.type,g.key,g.props,null,m.mode,v),v.ref=Ni(m,f,g),v.return=m,v)}function u(m,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ns(g,m.mode,v),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,v,E){return f===null||f.tag!==7?(f=ar(g,m.mode,v,E),f.return=m,f):(f=i(f,g),f.return=m,f)}function p(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=_s(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ko:return g=Ta(f.type,f.key,f.props,null,m.mode,g),g.ref=Ni(m,null,f),g.return=m,g;case jr:return f=Ns(f,m.mode,g),f.return=m,f;case bn:var v=f._init;return p(m,v(f._payload),g)}if(zi(f)||Ci(f))return f=ar(f,m.mode,g,null),f.return=m,f;ia(m,f)}return null}function h(m,f,g,v){var E=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:l(m,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:return g.key===E?s(m,f,g,v):null;case jr:return g.key===E?u(m,f,g,v):null;case bn:return E=g._init,h(m,f,E(g._payload),v)}if(zi(g)||Ci(g))return E!==null?null:c(m,f,g,v,null);ia(m,g)}return null}function x(m,f,g,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(g)||null,l(f,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:return m=m.get(v.key===null?g:v.key)||null,s(f,m,v,E);case jr:return m=m.get(v.key===null?g:v.key)||null,u(f,m,v,E);case bn:var j=v._init;return x(m,f,g,j(v._payload),E)}if(zi(v)||Ci(v))return m=m.get(g)||null,c(f,m,v,E,null);ia(f,v)}return null}function y(m,f,g,v){for(var E=null,j=null,b=f,T=f=0,M=null;b!==null&&T<g.length;T++){b.index>T?(M=b,b=null):M=b.sibling;var B=h(m,b,g[T],v);if(B===null){b===null&&(b=M);break}e&&b&&B.alternate===null&&t(m,b),f=o(B,f,T),j===null?E=B:j.sibling=B,j=B,b=M}if(T===g.length)return n(m,b),pe&&Xn(m,T),E;if(b===null){for(;T<g.length;T++)b=p(m,g[T],v),b!==null&&(f=o(b,f,T),j===null?E=b:j.sibling=b,j=b);return pe&&Xn(m,T),E}for(b=r(m,b);T<g.length;T++)M=x(b,m,T,g[T],v),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?T:M.key),f=o(M,f,T),j===null?E=M:j.sibling=M,j=M);return e&&b.forEach(function(q){return t(m,q)}),pe&&Xn(m,T),E}function w(m,f,g,v){var E=Ci(g);if(typeof E!="function")throw Error(R(150));if(g=E.call(g),g==null)throw Error(R(151));for(var j=E=null,b=f,T=f=0,M=null,B=g.next();b!==null&&!B.done;T++,B=g.next()){b.index>T?(M=b,b=null):M=b.sibling;var q=h(m,b,B.value,v);if(q===null){b===null&&(b=M);break}e&&b&&q.alternate===null&&t(m,b),f=o(q,f,T),j===null?E=q:j.sibling=q,j=q,b=M}if(B.done)return n(m,b),pe&&Xn(m,T),E;if(b===null){for(;!B.done;T++,B=g.next())B=p(m,B.value,v),B!==null&&(f=o(B,f,T),j===null?E=B:j.sibling=B,j=B);return pe&&Xn(m,T),E}for(b=r(m,b);!B.done;T++,B=g.next())B=x(b,m,T,B.value,v),B!==null&&(e&&B.alternate!==null&&b.delete(B.key===null?T:B.key),f=o(B,f,T),j===null?E=B:j.sibling=B,j=B);return e&&b.forEach(function(Ne){return t(m,Ne)}),pe&&Xn(m,T),E}function P(m,f,g,v){if(typeof g=="object"&&g!==null&&g.type===_r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:e:{for(var E=g.key,j=f;j!==null;){if(j.key===E){if(E=g.type,E===_r){if(j.tag===7){n(m,j.sibling),f=i(j,g.props.children),f.return=m,m=f;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===bn&&Yd(E)===j.type){n(m,j.sibling),f=i(j,g.props),f.ref=Ni(m,j,g),f.return=m,m=f;break e}n(m,j);break}else t(m,j);j=j.sibling}g.type===_r?(f=ar(g.props.children,m.mode,v,g.key),f.return=m,m=f):(v=Ta(g.type,g.key,g.props,null,m.mode,v),v.ref=Ni(m,f,g),v.return=m,m=v)}return a(m);case jr:e:{for(j=g.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Ns(g,m.mode,v),f.return=m,m=f}return a(m);case bn:return j=g._init,P(m,f,j(g._payload),v)}if(zi(g))return y(m,f,g,v);if(Ci(g))return w(m,f,g,v);ia(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=_s(g,m.mode,v),f.return=m,m=f),a(m)):n(m,f)}return P}var ni=Vm(!0),Ym=Vm(!1),Lo={},Gt=Yn(Lo),vo=Yn(Lo),go=Yn(Lo);function er(e){if(e===Lo)throw Error(R(174));return e}function Qc(e,t){switch(ae(go,t),ae(vo,e),ae(Gt,Lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lu(t,e)}ce(Gt),ae(Gt,t)}function ri(){ce(Gt),ce(vo),ce(go)}function Km(e){er(go.current);var t=er(Gt.current),n=lu(t,e.type);t!==n&&(ae(vo,e),ae(Gt,n))}function Xc(e){vo.current===e&&(ce(Gt),ce(vo))}var me=Yn(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ss=[];function Jc(){for(var e=0;e<Ss.length;e++)Ss[e]._workInProgressVersionPrimary=null;Ss.length=0}var Pa=fn.ReactCurrentDispatcher,bs=fn.ReactCurrentBatchConfig,cr=0,ve=null,Re=null,Ie=null,tl=!1,Gi=!1,yo=0,cy=0;function He(){throw Error(R(321))}function Zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$t(e[n],t[n]))return!1;return!0}function qc(e,t,n,r,i,o){if(cr=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pa.current=e===null||e.memoizedState===null?hy:my,e=n(r,i),Gi){o=0;do{if(Gi=!1,yo=0,25<=o)throw Error(R(301));o+=1,Ie=Re=null,t.updateQueue=null,Pa.current=vy,e=n(r,i)}while(Gi)}if(Pa.current=nl,t=Re!==null&&Re.next!==null,cr=0,Ie=Re=ve=null,tl=!1,t)throw Error(R(300));return e}function ef(){var e=yo!==0;return yo=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function jt(){if(Re===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ie===null?ve.memoizedState:Ie.next;if(t!==null)Ie=t,Re=e;else{if(e===null)throw Error(R(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function xo(e,t){return typeof t=="function"?t(e):t}function Cs(e){var t=jt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((cr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,ve.lanes|=c,fr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,$t(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,fr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Es(e){var t=jt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);$t(o,t.memoizedState)||(it=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gm(){}function Qm(e,t){var n=ve,r=jt(),i=t(),o=!$t(r.memoizedState,i);if(o&&(r.memoizedState=i,it=!0),r=r.queue,tf(Zm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,wo(9,Jm.bind(null,n,r,i,t),void 0,null),De===null)throw Error(R(349));cr&30||Xm(n,t,i)}return i}function Xm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jm(e,t,n,r){t.value=n,t.getSnapshot=r,qm(t)&&ev(e)}function Zm(e,t,n){return n(function(){qm(t)&&ev(e)})}function qm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$t(e,n)}catch{return!0}}function ev(e){var t=an(e,1);t!==null&&zt(t,e,1,-1)}function Kd(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=py.bind(null,ve,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tv(){return jt().memoizedState}function ja(e,t,n,r){var i=Ht();ve.flags|=e,i.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function Pl(e,t,n,r){var i=jt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var a=Re.memoizedState;if(o=a.destroy,r!==null&&Zc(r,a.deps)){i.memoizedState=wo(t,n,o,r);return}}ve.flags|=e,i.memoizedState=wo(1|t,n,o,r)}function Gd(e,t){return ja(8390656,8,e,t)}function tf(e,t){return Pl(2048,8,e,t)}function nv(e,t){return Pl(4,2,e,t)}function rv(e,t){return Pl(4,4,e,t)}function iv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ov(e,t,n){return n=n!=null?n.concat([e]):null,Pl(4,4,iv.bind(null,t,e),n)}function nf(){}function av(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lv(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sv(e,t,n){return cr&21?($t(n,t)||(n=fm(),ve.lanes|=n,fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function fy(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=bs.transition;bs.transition={};try{e(!1),t()}finally{re=n,bs.transition=r}}function uv(){return jt().memoizedState}function dy(e,t,n){var r=Mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cv(e))fv(t,n);else if(n=Um(e,t,n,r),n!==null){var i=Je();zt(n,e,r,i),dv(n,t,r)}}function py(e,t,n){var r=Mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cv(e))fv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,a)){var s=t.interleaved;s===null?(i.next=i,Kc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Um(e,t,i,r),n!==null&&(i=Je(),zt(n,e,r,i),dv(n,t,r))}}function cv(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function fv(e,t){Gi=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ac(e,n)}}var nl={readContext:Pt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},hy={readContext:Pt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Gd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ja(4194308,4,iv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ja(4194308,4,e,t)},useInsertionEffect:function(e,t){return ja(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dy.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:Kd,useDebugValue:nf,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=Kd(!1),t=e[0];return e=fy.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=Ht();if(pe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),De===null)throw Error(R(349));cr&30||Xm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gd(Zm.bind(null,r,o,e),[e]),r.flags|=2048,wo(9,Jm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ht(),t=De.identifierPrefix;if(pe){var n=en,r=qt;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},my={readContext:Pt,useCallback:av,useContext:Pt,useEffect:tf,useImperativeHandle:ov,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:lv,useReducer:Cs,useRef:tv,useState:function(){return Cs(xo)},useDebugValue:nf,useDeferredValue:function(e){var t=jt();return sv(t,Re.memoizedState,e)},useTransition:function(){var e=Cs(xo)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Qm,useId:uv,unstable_isNewReconciler:!1},vy={readContext:Pt,useCallback:av,useContext:Pt,useEffect:tf,useImperativeHandle:ov,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:lv,useReducer:Es,useRef:tv,useState:function(){return Es(xo)},useDebugValue:nf,useDeferredValue:function(e){var t=jt();return Re===null?t.memoizedState=e:sv(t,Re.memoizedState,e)},useTransition:function(){var e=Es(xo)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Qm,useId:uv,unstable_isNewReconciler:!1};function ii(e,t){try{var n="",r=t;do n+=W0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ps(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gy=typeof WeakMap=="function"?WeakMap:Map;function pv(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,$u=r),Ru(e,t)},n}function hv(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ru(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ru(e,t),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Qd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ty.bind(null,e,t,n),t.then(e,e))}function Xd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,Ln(n,t,1))),n.lanes|=1),e)}var yy=fn.ReactCurrentOwner,it=!1;function Xe(e,t,n,r){t.child=e===null?Ym(t,null,n,r):ni(t,e.child,n,r)}function Zd(e,t,n,r,i){n=n.render;var o=t.ref;return Gr(t,i),r=qc(e,t,n,r,o,i),n=ef(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(pe&&n&&Uc(t),t.flags|=1,Xe(e,t,r,i),t.child)}function qd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ff(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,mv(e,t,o,r,i)):(e=Ta(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(a,r)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Dn(o,r),e.ref=t.ref,e.return=t,t.child=e}function mv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(fo(o,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,ln(e,t,i)}return Tu(e,t,n,r,i)}function vv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(zr,st),st|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(zr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ae(zr,st),st|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ae(zr,st),st|=r;return Xe(e,t,i,n),t.child}function gv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tu(e,t,n,r,i){var o=at(n)?sr:Ke.current;return o=ei(t,o),Gr(t,i),n=qc(e,t,n,r,o,i),r=ef(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(pe&&r&&Uc(t),t.flags|=1,Xe(e,t,n,i),t.child)}function ep(e,t,n,r,i){if(at(n)){var o=!0;Ga(t)}else o=!1;if(Gr(t,i),t.stateNode===null)_a(e,t),Wm(t,n,r),Nu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=at(n)?sr:Ke.current,u=ei(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Vd(t,a,r,u),Cn=!1;var h=t.memoizedState;a.state=h,qa(t,r,a,i),s=t.memoizedState,l!==r||h!==s||ot.current||Cn?(typeof c=="function"&&(_u(t,n,c,r),s=t.memoizedState),(l=Cn||Wd(t,n,l,r,h,s,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Bm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ot(t.type,l),a.props=u,p=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Pt(s):(s=at(n)?sr:Ke.current,s=ei(t,s));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==s)&&Vd(t,a,r,s),Cn=!1,h=t.memoizedState,a.state=h,qa(t,r,a,i);var y=t.memoizedState;l!==p||h!==y||ot.current||Cn?(typeof x=="function"&&(_u(t,n,x,r),y=t.memoizedState),(u=Cn||Wd(t,n,u,r,h,y,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ou(e,t,n,r,o,i)}function Ou(e,t,n,r,i,o){gv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Fd(t,n,!1),ln(e,t,o);r=t.stateNode,yy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ni(t,e.child,null,o),t.child=ni(t,null,l,o)):Xe(e,t,l,o),t.memoizedState=r.state,i&&Fd(t,n,!0),t.child}function yv(e){var t=e.stateNode;t.pendingContext?zd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zd(e,t.context,!1),Qc(e,t.containerInfo)}function tp(e,t,n,r,i){return ti(),Hc(i),t.flags|=256,Xe(e,t,n,r),t.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function xv(e,t,n){var r=t.pendingProps,i=me.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(me,i&1),e===null)return Pu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Nl(a,r,0,null),e=ar(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Lu(n),t.memoizedState=Au,e):rf(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xy(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Dn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Dn(l,o):(o=ar(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Lu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Au,r}return o=e.child,e=o.sibling,r=Dn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rf(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oa(e,t,n,r){return r!==null&&Hc(r),ni(t,e.child,null,n),e=rf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ps(Error(R(422))),oa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Nl({mode:"visible",children:r.children},i,0,null),o=ar(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ni(t,e.child,null,a),t.child.memoizedState=Lu(a),t.memoizedState=Au,o);if(!(t.mode&1))return oa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(R(419)),r=Ps(o,r,void 0),oa(e,t,a,r)}if(l=(a&e.childLanes)!==0,it||l){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,an(e,i),zt(r,e,i,-1))}return cf(),r=Ps(Error(R(421))),oa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Oy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ut=An(i.nextSibling),ct=t,pe=!0,It=null,e!==null&&(xt[wt++]=qt,xt[wt++]=en,xt[wt++]=ur,qt=e.id,en=e.overflow,ur=t),t=rf(t,r.children),t.flags|=4096,t)}function np(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ju(e.return,t,n)}function js(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Xe(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&np(e,n,t);else if(e.tag===19)np(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),js(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&el(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}js(t,!0,n,null,o);break;case"together":js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _a(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wy(e,t,n){switch(t.tag){case 3:yv(t),ti();break;case 5:Km(t);break;case 1:at(t.type)&&Ga(t);break;case 4:Qc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(Ja,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?xv(e,t,n):(ae(me,me.current&1),e=ln(e,t,n),e!==null?e.sibling:null);ae(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,vv(e,t,n)}return ln(e,t,n)}var kv,Iu,Sv,bv;kv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Iu=function(){};Sv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,er(Gt.current);var o=null;switch(n){case"input":i=ru(e,i),r=ru(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=au(e,i),r=au(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ya)}su(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(io.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(io.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&le("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};bv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ri(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ky(e,t,n){var r=t.pendingProps;switch(Bc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return at(t.type)&&Ka(),We(t),null;case 3:return r=t.stateNode,ri(),ce(ot),ce(Ke),Jc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ra(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,It!==null&&(Hu(It),It=null))),Iu(e,t),We(t),null;case 5:Xc(t);var i=er(go.current);if(n=t.type,e!==null&&t.stateNode!=null)Sv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return We(t),null}if(e=er(Gt.current),ra(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Vt]=t,r[mo]=o,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<$i.length;i++)le($i[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":fd(r,o),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},le("invalid",r);break;case"textarea":pd(r,o),le("invalid",r)}su(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&na(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&na(r.textContent,l,e),i=["children",""+l]):io.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&le("scroll",r)}switch(n){case"input":Go(r),dd(r,o,!0);break;case"textarea":Go(r),hd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ya)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vt]=t,e[mo]=r,kv(e,t,!1,!1),t.stateNode=e;e:{switch(a=uu(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<$i.length;i++)le($i[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":fd(e,r),i=ru(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),le("invalid",e);break;case"textarea":pd(e,r),i=au(e,r),le("invalid",e);break;default:i=r}su(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?qh(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Jh(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&oo(e,s):typeof s=="number"&&oo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(io.hasOwnProperty(o)?s!=null&&o==="onScroll"&&le("scroll",e):s!=null&&jc(e,o,s,a))}switch(n){case"input":Go(e),dd(e,r,!1);break;case"textarea":Go(e),hd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)bv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=er(go.current),er(Gt.current),ra(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(o=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return We(t),null;case 13:if(ce(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&ut!==null&&t.mode&1&&!(t.flags&128))$m(),ti(),t.flags|=98560,o=!1;else if(o=ra(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Vt]=t}else ti(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else It!==null&&(Hu(It),It=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Te===0&&(Te=3):cf())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return ri(),Iu(e,t),e===null&&po(t.stateNode.containerInfo),We(t),null;case 10:return Yc(t.type._context),We(t),null;case 17:return at(t.type)&&Ka(),We(t),null;case 19:if(ce(me),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ri(o,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=el(e),a!==null){for(t.flags|=128,Ri(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>oi&&(t.flags|=128,r=!0,Ri(o,!1),t.lanes=4194304)}else{if(!r)if(e=el(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ri(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!pe)return We(t),null}else 2*Ce()-o.renderingStartTime>oi&&n!==1073741824&&(t.flags|=128,r=!0,Ri(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=me.current,ae(me,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return uf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Sy(e,t){switch(Bc(t),t.tag){case 1:return at(t.type)&&Ka(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ri(),ce(ot),ce(Ke),Jc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xc(t),null;case 13:if(ce(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(me),null;case 4:return ri(),null;case 10:return Yc(t.type._context),null;case 22:case 23:return uf(),null;case 24:return null;default:return null}}var aa=!1,Ve=!1,by=typeof WeakSet=="function"?WeakSet:Set,I=null;function Dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Mu(e,t,n){try{n()}catch(r){ye(e,t,r)}}var rp=!1;function Cy(e,t){if(xu=Ha,e=jm(),$c(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,p=e,h=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)h=p,p=x;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++c===r&&(s=a),(x=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:e,selectionRange:n},Ha=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,P=y.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ot(t.type,w),P);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(v){ye(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=rp,rp=!1,y}function Qi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Mu(t,n,o)}i=i.next}while(i!==r)}}function jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Du(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cv(e){var t=e.alternate;t!==null&&(e.alternate=null,Cv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[mo],delete t[bu],delete t[ay],delete t[ly])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ev(e){return e.tag===5||e.tag===3||e.tag===4}function ip(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ev(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ya));else if(r!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}function Fu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fu(e,t,n),e=e.sibling;e!==null;)Fu(e,t,n),e=e.sibling}var $e=null,At=!1;function xn(e,t,n){for(n=n.child;n!==null;)Pv(e,t,n),n=n.sibling}function Pv(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:Ve||Dr(n,t);case 6:var r=$e,i=At;$e=null,xn(e,t,n),$e=r,At=i,$e!==null&&(At?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(At?(e=$e,n=n.stateNode,e.nodeType===8?ws(e.parentNode,n):e.nodeType===1&&ws(e,n),uo(e)):ws($e,n.stateNode));break;case 4:r=$e,i=At,$e=n.stateNode.containerInfo,At=!0,xn(e,t,n),$e=r,At=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Mu(n,t,a),i=i.next}while(i!==r)}xn(e,t,n);break;case 1:if(!Ve&&(Dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,xn(e,t,n),Ve=r):xn(e,t,n);break;default:xn(e,t,n)}}function op(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new by),t.forEach(function(r){var i=Ay.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,At=!1;break e;case 3:$e=l.stateNode.containerInfo,At=!0;break e;case 4:$e=l.stateNode.containerInfo,At=!0;break e}l=l.return}if($e===null)throw Error(R(160));Pv(o,a,i),$e=null,At=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jv(t,e),t=t.sibling}function jv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Bt(e),r&4){try{Qi(3,e,e.return),jl(3,e)}catch(w){ye(e,e.return,w)}try{Qi(5,e,e.return)}catch(w){ye(e,e.return,w)}}break;case 1:Tt(t,e),Bt(e),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(Tt(t,e),Bt(e),r&512&&n!==null&&Dr(n,n.return),e.flags&32){var i=e.stateNode;try{oo(i,"")}catch(w){ye(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Gh(i,o),uu(l,a);var u=uu(l,o);for(a=0;a<s.length;a+=2){var c=s[a],p=s[a+1];c==="style"?qh(i,p):c==="dangerouslySetInnerHTML"?Jh(i,p):c==="children"?oo(i,p):jc(i,c,p,u)}switch(l){case"input":iu(i,o);break;case"textarea":Qh(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Wr(i,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?Wr(i,!!o.multiple,o.defaultValue,!0):Wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[mo]=o}catch(w){ye(e,e.return,w)}}break;case 6:if(Tt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ye(e,e.return,w)}}break;case 3:if(Tt(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uo(t.containerInfo)}catch(w){ye(e,e.return,w)}break;case 4:Tt(t,e),Bt(e);break;case 13:Tt(t,e),Bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(lf=Ce())),r&4&&op(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||c,Tt(t,e),Ve=u):Tt(t,e),Bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(I=e,c=e.child;c!==null;){for(p=I=c;I!==null;){switch(h=I,x=h.child,h.tag){case 0:case 11:case 14:case 15:Qi(4,h,h.return);break;case 1:Dr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ye(r,n,w)}}break;case 5:Dr(h,h.return);break;case 22:if(h.memoizedState!==null){lp(p);continue}}x!==null?(x.return=h,I=x):lp(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Zh("display",a))}catch(w){ye(e,e.return,w)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){ye(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Tt(t,e),Bt(e),r&4&&op(e);break;case 21:break;default:Tt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ev(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oo(i,""),r.flags&=-33);var o=ip(e);Fu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ip(e);zu(e,l,a);break;default:throw Error(R(161))}}catch(s){ye(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ey(e,t,n){I=e,_v(e)}function _v(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||aa;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Ve;l=aa;var u=Ve;if(aa=a,(Ve=s)&&!u)for(I=i;I!==null;)a=I,s=a.child,a.tag===22&&a.memoizedState!==null?sp(i):s!==null?(s.return=a,I=s):sp(i);for(;o!==null;)I=o,_v(o),o=o.sibling;I=i,aa=l,Ve=u}ap(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):ap(e)}}function ap(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Hd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&uo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ve||t.flags&512&&Du(t)}catch(h){ye(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function lp(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function sp(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jl(4,t)}catch(s){ye(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ye(t,i,s)}}var o=t.return;try{Du(t)}catch(s){ye(t,o,s)}break;case 5:var a=t.return;try{Du(t)}catch(s){ye(t,a,s)}}}catch(s){ye(t,t.return,s)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Py=Math.ceil,rl=fn.ReactCurrentDispatcher,of=fn.ReactCurrentOwner,Ct=fn.ReactCurrentBatchConfig,Z=0,De=null,_e=null,Ue=0,st=0,zr=Yn(0),Te=0,ko=null,fr=0,_l=0,af=0,Xi=null,rt=null,lf=0,oi=1/0,Xt=null,il=!1,$u=null,In=null,la=!1,_n=null,ol=0,Ji=0,Uu=null,Na=-1,Ra=0;function Je(){return Z&6?Ce():Na!==-1?Na:Na=Ce()}function Mn(e){return e.mode&1?Z&2&&Ue!==0?Ue&-Ue:uy.transition!==null?(Ra===0&&(Ra=fm()),Ra):(e=re,e!==0||(e=window.event,e=e===void 0?16:ym(e.type)),e):1}function zt(e,t,n,r){if(50<Ji)throw Ji=0,Uu=null,Error(R(185));To(e,n,r),(!(Z&2)||e!==De)&&(e===De&&(!(Z&2)&&(_l|=n),Te===4&&Pn(e,Ue)),lt(e,r),n===1&&Z===0&&!(t.mode&1)&&(oi=Ce()+500,Cl&&Kn()))}function lt(e,t){var n=e.callbackNode;u1(e,t);var r=Ba(e,e===De?Ue:0);if(r===0)n!==null&&gd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gd(n),t===1)e.tag===0?sy(up.bind(null,e)):Dm(up.bind(null,e)),iy(function(){!(Z&6)&&Kn()}),n=null;else{switch(dm(r)){case 1:n=Oc;break;case 4:n=um;break;case 16:n=Ua;break;case 536870912:n=cm;break;default:n=Ua}n=Mv(n,Nv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nv(e,t){if(Na=-1,Ra=0,Z&6)throw Error(R(327));var n=e.callbackNode;if(Qr()&&e.callbackNode!==n)return null;var r=Ba(e,e===De?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var i=Z;Z|=2;var o=Tv();(De!==e||Ue!==t)&&(Xt=null,oi=Ce()+500,or(e,t));do try{Ny();break}catch(l){Rv(e,l)}while(1);Vc(),rl.current=o,Z=i,_e!==null?t=0:(De=null,Ue=0,t=Te)}if(t!==0){if(t===2&&(i=hu(e),i!==0&&(r=i,t=Bu(e,i))),t===1)throw n=ko,or(e,0),Pn(e,r),lt(e,Ce()),n;if(t===6)Pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!jy(i)&&(t=al(e,r),t===2&&(o=hu(e),o!==0&&(r=o,t=Bu(e,o))),t===1))throw n=ko,or(e,0),Pn(e,r),lt(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Jn(e,rt,Xt);break;case 3:if(Pn(e,r),(r&130023424)===r&&(t=lf+500-Ce(),10<t)){if(Ba(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Su(Jn.bind(null,e,rt,Xt),t);break}Jn(e,rt,Xt);break;case 4:if(Pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Dt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Py(r/1960))-r,10<r){e.timeoutHandle=Su(Jn.bind(null,e,rt,Xt),r);break}Jn(e,rt,Xt);break;case 5:Jn(e,rt,Xt);break;default:throw Error(R(329))}}}return lt(e,Ce()),e.callbackNode===n?Nv.bind(null,e):null}function Bu(e,t){var n=Xi;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=al(e,t),e!==2&&(t=rt,rt=n,t!==null&&Hu(t)),e}function Hu(e){rt===null?rt=e:rt.push.apply(rt,e)}function jy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$t(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t){for(t&=~af,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dt(t),r=1<<n;e[n]=-1,t&=~r}}function up(e){if(Z&6)throw Error(R(327));Qr();var t=Ba(e,0);if(!(t&1))return lt(e,Ce()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=hu(e);r!==0&&(t=r,n=Bu(e,r))}if(n===1)throw n=ko,or(e,0),Pn(e,t),lt(e,Ce()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,rt,Xt),lt(e,Ce()),null}function sf(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(oi=Ce()+500,Cl&&Kn())}}function dr(e){_n!==null&&_n.tag===0&&!(Z&6)&&Qr();var t=Z;Z|=1;var n=Ct.transition,r=re;try{if(Ct.transition=null,re=1,e)return e()}finally{re=r,Ct.transition=n,Z=t,!(Z&6)&&Kn()}}function uf(){st=zr.current,ce(zr)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ry(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Bc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ka();break;case 3:ri(),ce(ot),ce(Ke),Jc();break;case 5:Xc(r);break;case 4:ri();break;case 13:ce(me);break;case 19:ce(me);break;case 10:Yc(r.type._context);break;case 22:case 23:uf()}n=n.return}if(De=e,_e=e=Dn(e.current,null),Ue=st=t,Te=0,ko=null,af=_l=fr=0,rt=Xi=null,qn!==null){for(t=0;t<qn.length;t++)if(n=qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}qn=null}return e}function Rv(e,t){do{var n=_e;try{if(Vc(),Pa.current=nl,tl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tl=!1}if(cr=0,Ie=Re=ve=null,Gi=!1,yo=0,of.current=null,n===null||n.return===null){Te=1,ko=t,_e=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ue,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=Xd(a);if(x!==null){x.flags&=-257,Jd(x,a,l,o,t),x.mode&1&&Qd(o,u,t),t=x,s=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if(!(t&1)){Qd(o,u,t),cf();break e}s=Error(R(426))}}else if(pe&&l.mode&1){var P=Xd(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Jd(P,a,l,o,t),Hc(ii(s,l));break e}}o=s=ii(s,l),Te!==4&&(Te=2),Xi===null?Xi=[o]:Xi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=pv(o,s,t);Bd(o,m);break e;case 1:l=s;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(In===null||!In.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=hv(o,l,t);Bd(o,v);break e}}o=o.return}while(o!==null)}Av(n)}catch(E){t=E,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(1)}function Tv(){var e=rl.current;return rl.current=nl,e===null?nl:e}function cf(){(Te===0||Te===3||Te===2)&&(Te=4),De===null||!(fr&268435455)&&!(_l&268435455)||Pn(De,Ue)}function al(e,t){var n=Z;Z|=2;var r=Tv();(De!==e||Ue!==t)&&(Xt=null,or(e,t));do try{_y();break}catch(i){Rv(e,i)}while(1);if(Vc(),Z=n,rl.current=r,_e!==null)throw Error(R(261));return De=null,Ue=0,Te}function _y(){for(;_e!==null;)Ov(_e)}function Ny(){for(;_e!==null&&!e1();)Ov(_e)}function Ov(e){var t=Iv(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Av(e):_e=t,of.current=null}function Av(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sy(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,_e=null;return}}else if(n=ky(n,t,st),n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Te===0&&(Te=5)}function Jn(e,t,n){var r=re,i=Ct.transition;try{Ct.transition=null,re=1,Ry(e,t,n,r)}finally{Ct.transition=i,re=r}return null}function Ry(e,t,n,r){do Qr();while(_n!==null);if(Z&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(c1(e,o),e===De&&(_e=De=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||la||(la=!0,Mv(Ua,function(){return Qr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var a=re;re=1;var l=Z;Z|=4,of.current=null,Cy(e,n),jv(n,e),X1(wu),Ha=!!xu,wu=xu=null,e.current=n,Ey(n),t1(),Z=l,re=a,Ct.transition=o}else e.current=n;if(la&&(la=!1,_n=e,ol=i),o=e.pendingLanes,o===0&&(In=null),i1(n.stateNode),lt(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(il)throw il=!1,e=$u,$u=null,e;return ol&1&&e.tag!==0&&Qr(),o=e.pendingLanes,o&1?e===Uu?Ji++:(Ji=0,Uu=e):Ji=0,Kn(),null}function Qr(){if(_n!==null){var e=dm(ol),t=Ct.transition,n=re;try{if(Ct.transition=null,re=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,ol=0,Z&6)throw Error(R(331));var i=Z;for(Z|=4,I=e.current;I!==null;){var o=I,a=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:Qi(8,c,o)}var p=c.child;if(p!==null)p.return=c,I=p;else for(;I!==null;){c=I;var h=c.sibling,x=c.return;if(Cv(c),c===u){I=null;break}if(h!==null){h.return=x,I=h;break}I=x}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,I=a;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,I=m;break e}I=o.return}}var f=e.current;for(I=f;I!==null;){a=I;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,I=g;else e:for(a=f;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:jl(9,l)}}catch(E){ye(l,l.return,E)}if(l===a){I=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,I=v;break e}I=l.return}}if(Z=i,Kn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{re=n,Ct.transition=t}}return!1}function cp(e,t,n){t=ii(n,t),t=pv(e,t,1),e=Ln(e,t,1),t=Je(),e!==null&&(To(e,1,t),lt(e,t))}function ye(e,t,n){if(e.tag===3)cp(e,e,n);else for(;t!==null;){if(t.tag===3){cp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){e=ii(n,e),e=hv(t,e,1),t=Ln(t,e,1),e=Je(),t!==null&&(To(t,1,e),lt(t,e));break}}t=t.return}}function Ty(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Ue&n)===n&&(Te===4||Te===3&&(Ue&130023424)===Ue&&500>Ce()-lf?or(e,0):af|=n),lt(e,t)}function Lv(e,t){t===0&&(e.mode&1?(t=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):t=1);var n=Je();e=an(e,t),e!==null&&(To(e,t,n),lt(e,n))}function Oy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lv(e,n)}function Ay(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Lv(e,n)}var Iv;Iv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,wy(e,t,n);it=!!(e.flags&131072)}else it=!1,pe&&t.flags&1048576&&zm(t,Xa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_a(e,t),e=t.pendingProps;var i=ei(t,Ke.current);Gr(t,n),i=qc(null,t,r,e,i,n);var o=ef();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(o=!0,Ga(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gc(t),i.updater=El,t.stateNode=i,i._reactInternals=t,Nu(t,r,e,n),t=Ou(null,t,r,!0,o,n)):(t.tag=0,pe&&o&&Uc(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_a(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Iy(r),e=Ot(r,e),i){case 0:t=Tu(null,t,r,e,n);break e;case 1:t=ep(null,t,r,e,n);break e;case 11:t=Zd(null,t,r,e,n);break e;case 14:t=qd(null,t,r,Ot(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Tu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ep(e,t,r,i,n);case 3:e:{if(yv(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Bm(e,t),qa(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ii(Error(R(423)),t),t=tp(e,t,r,n,i);break e}else if(r!==i){i=ii(Error(R(424)),t),t=tp(e,t,r,n,i);break e}else for(ut=An(t.stateNode.containerInfo.firstChild),ct=t,pe=!0,It=null,n=Ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ti(),r===i){t=ln(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Km(t),e===null&&Pu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ku(r,i)?a=null:o!==null&&ku(r,o)&&(t.flags|=32),gv(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&Pu(t),null;case 13:return xv(e,t,n);case 4:return Qc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ni(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Zd(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ae(Ja,r._currentValue),r._currentValue=a,o!==null)if($t(o.value,a)){if(o.children===i.children&&!ot.current){t=ln(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=tn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ju(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(R(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ju(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gr(t,n),i=Pt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),qd(e,t,r,i,n);case 15:return mv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),_a(e,t),t.tag=1,at(r)?(e=!0,Ga(t)):e=!1,Gr(t,n),Wm(t,r,i),Nu(t,r,i,n),Ou(null,t,r,!0,e,n);case 19:return wv(e,t,n);case 22:return vv(e,t,n)}throw Error(R(156,t.tag))};function Mv(e,t){return sm(e,t)}function Ly(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Ly(e,t,n,r)}function ff(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Iy(e){if(typeof e=="function")return ff(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nc)return 11;if(e===Rc)return 14}return 2}function Dn(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ta(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")ff(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _r:return ar(n.children,i,o,t);case _c:a=8,i|=8;break;case qs:return e=St(12,n,t,i|2),e.elementType=qs,e.lanes=o,e;case eu:return e=St(13,n,t,i),e.elementType=eu,e.lanes=o,e;case tu:return e=St(19,n,t,i),e.elementType=tu,e.lanes=o,e;case Vh:return Nl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hh:a=10;break e;case Wh:a=9;break e;case Nc:a=11;break e;case Rc:a=14;break e;case bn:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=St(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ar(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=St(22,e,r,t),e.elementType=Vh,e.lanes=n,e.stateNode={isHidden:!1},e}function _s(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function Ns(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function My(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=us(0),this.expirationTimes=us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function df(e,t,n,r,i,o,a,l,s){return e=new My(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(o),e}function Dy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dv(e){if(!e)return $n;e=e._reactInternals;e:{if(yr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(at(n))return Mm(e,n,t)}return t}function zv(e,t,n,r,i,o,a,l,s){return e=df(n,r,!0,e,i,o,a,l,s),e.context=Dv(null),n=e.current,r=Je(),i=Mn(n),o=tn(r,i),o.callback=t??null,Ln(n,o,i),e.current.lanes=i,To(e,i,r),lt(e,r),e}function Rl(e,t,n,r){var i=t.current,o=Je(),a=Mn(i);return n=Dv(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ln(i,t,a),e!==null&&(zt(e,i,a,o),Ea(e,i,a)),a}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pf(e,t){fp(e,t),(e=e.alternate)&&fp(e,t)}function zy(){return null}var Fv=typeof reportError=="function"?reportError:function(e){console.error(e)};function hf(e){this._internalRoot=e}Tl.prototype.render=hf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Rl(e,t,null,null)};Tl.prototype.unmount=hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){Rl(null,e,null,null)}),t[on]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=mm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&gm(e)}};function mf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dp(){}function Fy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ll(a);o.call(u)}}var a=zv(t,r,e,0,null,!1,!1,"",dp);return e._reactRootContainer=a,e[on]=a.current,po(e.nodeType===8?e.parentNode:e),dr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ll(s);l.call(u)}}var s=df(e,0,!1,null,null,!1,!1,"",dp);return e._reactRootContainer=s,e[on]=s.current,po(e.nodeType===8?e.parentNode:e),dr(function(){Rl(t,s,n,r)}),s}function Al(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=ll(a);l.call(s)}}Rl(t,a,e,i)}else a=Fy(n,t,e,i,r);return ll(a)}pm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fi(t.pendingLanes);n!==0&&(Ac(t,n|1),lt(t,Ce()),!(Z&6)&&(oi=Ce()+500,Kn()))}break;case 13:dr(function(){var r=an(e,1);if(r!==null){var i=Je();zt(r,e,1,i)}}),pf(e,1)}};Lc=function(e){if(e.tag===13){var t=an(e,134217728);if(t!==null){var n=Je();zt(t,e,134217728,n)}pf(e,134217728)}};hm=function(e){if(e.tag===13){var t=Mn(e),n=an(e,t);if(n!==null){var r=Je();zt(n,e,t,r)}pf(e,t)}};mm=function(){return re};vm=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};fu=function(e,t,n){switch(t){case"input":if(iu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bl(r);if(!i)throw Error(R(90));Kh(r),iu(r,i)}}}break;case"textarea":Qh(e,n);break;case"select":t=n.value,t!=null&&Wr(e,!!n.multiple,t,!1)}};nm=sf;rm=dr;var $y={usingClientEntryPoint:!1,Events:[Ao,Or,bl,em,tm,sf]},Ti={findFiberByHostInstance:Zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Uy={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=am(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{xl=sa.inject(Uy),Kt=sa}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(t))throw Error(R(200));return Dy(e,t,null,n)};dt.createRoot=function(e,t){if(!mf(e))throw Error(R(299));var n=!1,r="",i=Fv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=df(e,1,!1,null,null,n,!1,r,i),e[on]=t.current,po(e.nodeType===8?e.parentNode:e),new hf(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=am(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return dr(e)};dt.hydrate=function(e,t,n){if(!Ol(t))throw Error(R(200));return Al(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!mf(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Fv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zv(t,null,e,1,n??null,i,!1,o,a),e[on]=t.current,po(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Tl(t)};dt.render=function(e,t,n){if(!Ol(t))throw Error(R(200));return Al(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(R(40));return e._reactRootContainer?(dr(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};dt.unstable_batchedUpdates=sf;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Al(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";function $v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($v)}catch(e){console.error(e)}}$v(),zh.exports=dt;var vf=zh.exports;const By=wc(vf),Hy=jh({__proto__:null,default:By},[vf]);var pp=vf;Js.createRoot=pp.createRoot,Js.hydrateRoot=pp.hydrateRoot;/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}var Se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Se||(Se={}));const hp="popstate";function Wy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return So("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hr(i)}return Yy(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function pr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vy(){return Math.random().toString(36).substr(2,8)}function mp(e,t){return{usr:e.state,key:e.key,idx:t}}function So(e,t,n,r){return n===void 0&&(n=null),xe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dn(t):t,{state:n,key:t&&t.key||r||Vy()})}function hr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Yy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Se.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(xe({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function p(){l=Se.Pop;let P=c(),m=P==null?null:P-u;u=P,s&&s({action:l,location:w.location,delta:m})}function h(P,m){l=Se.Push;let f=So(w.location,P,m);n&&n(f,P),u=c()+1;let g=mp(f,u),v=w.createHref(f);try{a.pushState(g,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}o&&s&&s({action:l,location:w.location,delta:1})}function x(P,m){l=Se.Replace;let f=So(w.location,P,m);n&&n(f,P),u=c();let g=mp(f,u),v=w.createHref(f);a.replaceState(g,"",v),o&&s&&s({action:l,location:w.location,delta:0})}function y(P){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof P=="string"?P:hr(P);return K(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return l},get location(){return e(i,a)},listen(P){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(hp,p),s=P,()=>{i.removeEventListener(hp,p),s=null}},createHref(P){return t(i,P)},createURL:y,encodeLocation(P){let m=y(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:x,go(P){return a.go(P)}};return w}var be;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(be||(be={}));const Ky=new Set(["lazy","caseSensitive","path","id","index","children"]);function Gy(e){return e.index===!0}function Wu(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(K(i.index!==!0||!i.children,"Cannot specify children on an index route"),K(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Gy(i)){let s=xe({},i,t(i),{id:l});return r[l]=s,s}else{let s=xe({},i,t(i),{id:l,children:void 0});return r[l]=s,i.children&&(s.children=Wu(i.children,t,a,r)),s}})}function Fr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?dn(t):t,i=Un(r.pathname||"/",n);if(i==null)return null;let o=Uv(e);Xy(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=ox(o[l],lx(i));return a}function Qy(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Uv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(K(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=nn([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(K(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Uv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:rx(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Bv(o.path))i(o,a,s)}),t}function Bv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Bv(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Xy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ix(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jy=/^:\w+$/,Zy=3,qy=2,ex=1,tx=10,nx=-2,vp=e=>e==="*";function rx(e,t){let n=e.split("/"),r=n.length;return n.some(vp)&&(r+=nx),t&&(r+=qy),n.filter(i=>!vp(i)).reduce((i,o)=>i+(Jy.test(o)?Zy:o===""?ex:tx),r)}function ix(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ox(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Vu({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let p=l.route;o.push({params:r,pathname:nn([i,c.pathname]),pathnameBase:fx(nn([i,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(i=nn([i,c.pathnameBase]))}return o}function Vu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ax(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,p)=>{let{paramName:h,isOptional:x}=c;if(h==="*"){let w=l[p]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[p];return x&&!y?u[h]=void 0:u[h]=sx(y||"",h),u},{}),pathname:o,pathnameBase:a,pattern:e}}function ax(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),pr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function lx(e){try{return decodeURI(e)}catch(t){return pr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sx(e,t){try{return decodeURIComponent(e)}catch(n){return pr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Un(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ux(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?dn(e):e;return{pathname:n?n.startsWith("/")?n:cx(n,t):t,search:dx(r),hash:px(i)}}function cx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gf(e){return Hv(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function yf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=dn(e):(i=xe({},e),K(!i.pathname||!i.pathname.includes("?"),Rs("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),Rs("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),Rs("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else if(r){let p=t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p.pop();i.pathname=h.join("/")}l="/"+p.join("/")}else{let p=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}l=p>=0?t[p]:"/"}let s=ux(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const nn=e=>e.join("/").replace(/\/\/+/g,"/"),fx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,px=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class xf{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Wv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vv=["post","put","patch","delete"],hx=new Set(Vv),mx=["get",...Vv],vx=new Set(mx),gx=new Set([301,302,303,307,308]),yx=new Set([307,308]),Ts={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Oi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wx=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Kv="remix-router-transitions";function kx(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;K(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;i=C=>({hasErrorBoundary:k(C)})}else i=wx;let o={},a=Wu(e.routes,i,void 0,o),l,s=e.basename||"/",u=xe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),c=null,p=new Set,h=null,x=null,y=null,w=e.hydrationData!=null,P=Fr(a,e.history.location,s),m=null;if(P==null){let k=yt(404,{pathname:e.history.location.pathname}),{matches:C,route:_}=Cp(a);P=C,m={[_.id]:k}}let f=!P.some(k=>k.route.lazy)&&(!P.some(k=>k.route.loader)||e.hydrationData!=null),g,v={historyAction:e.history.action,location:e.history.location,matches:P,initialized:f,navigation:Ts,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map,blockers:new Map},E=Se.Pop,j=!1,b,T=!1,M=new Map,B=null,q=!1,Ne=!1,Ee=[],Nt=[],de=new Map,mt=0,Ae=-1,O=new Map,F=new Set,U=new Map,te=new Map,ee=new Set,ze=new Map,ke=new Map,vt=!1;function Ge(){if(c=e.history.listen(k=>{let{action:C,location:_,delta:A}=k;if(vt){vt=!1;return}pr(ke.size===0||A!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=td({currentLocation:v.location,nextLocation:_,historyAction:C});if(z&&A!=null){vt=!0,e.history.go(A*-1),Wo(z,{state:"blocked",location:_,proceed(){Wo(z,{state:"proceeding",proceed:void 0,reset:void 0,location:_}),e.history.go(A)},reset(){let G=new Map(v.blockers);G.set(z,Oi),Le({blockers:G})}});return}return Gn(C,_)}),n){Ox(t,M);let k=()=>Ax(t,M);t.addEventListener("pagehide",k),B=()=>t.removeEventListener("pagehide",k)}return v.initialized||Gn(Se.Pop,v.location),g}function et(){c&&c(),B&&B(),p.clear(),b&&b.abort(),v.fetchers.forEach((k,C)=>Ho(C)),v.blockers.forEach((k,C)=>ed(C))}function wi(k){return p.add(k),()=>p.delete(k)}function Le(k,C){C===void 0&&(C={}),v=xe({},v,k);let _=[],A=[];u.v7_fetcherPersist&&v.fetchers.forEach((z,G)=>{z.state==="idle"&&(ee.has(G)?A.push(G):_.push(G))}),[...p].forEach(z=>z(v,{deletedFetchers:A,unstable_viewTransitionOpts:C.viewTransitionOpts,unstable_flushSync:C.flushSync===!0})),u.v7_fetcherPersist&&(_.forEach(z=>v.fetchers.delete(z)),A.forEach(z=>Ho(z)))}function tt(k,C,_){var A,z;let{flushSync:G}=_===void 0?{}:_,W=v.actionData!=null&&v.navigation.formMethod!=null&&Lt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((A=k.state)==null?void 0:A._isRedirect)!==!0,H;C.actionData?Object.keys(C.actionData).length>0?H=C.actionData:H=null:W?H=v.actionData:H=null;let $=C.loaderData?bp(v.loaderData,C.loaderData,C.matches||[],C.errors):v.loaderData,J=v.blockers;J.size>0&&(J=new Map(J),J.forEach((ie,he)=>J.set(he,Oi)));let Fe=j===!0||v.navigation.formMethod!=null&&Lt(v.navigation.formMethod)&&((z=k.state)==null?void 0:z._isRedirect)!==!0;l&&(a=l,l=void 0),q||E===Se.Pop||(E===Se.Push?e.history.push(k,k.state):E===Se.Replace&&e.history.replace(k,k.state));let Q;if(E===Se.Pop){let ie=M.get(v.location.pathname);ie&&ie.has(k.pathname)?Q={currentLocation:v.location,nextLocation:k}:M.has(k.pathname)&&(Q={currentLocation:k,nextLocation:v.location})}else if(T){let ie=M.get(v.location.pathname);ie?ie.add(k.pathname):(ie=new Set([k.pathname]),M.set(v.location.pathname,ie)),Q={currentLocation:v.location,nextLocation:k}}Le(xe({},C,{actionData:H,loaderData:$,historyAction:E,location:k,initialized:!0,navigation:Ts,revalidation:"idle",restoreScrollPosition:rd(k,C.matches||v.matches),preventScrollReset:Fe,blockers:J}),{viewTransitionOpts:Q,flushSync:G===!0}),E=Se.Pop,j=!1,T=!1,q=!1,Ne=!1,Ee=[],Nt=[]}async function Gf(k,C){if(typeof k=="number"){e.history.go(k);return}let _=Yu(v.location,v.matches,s,u.v7_prependBasename,k,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:A,submission:z,error:G}=gp(u.v7_normalizeFormMethod,!1,_,C),W=v.location,H=So(v.location,A,C&&C.state);H=xe({},H,e.history.encodeLocation(H));let $=C&&C.replace!=null?C.replace:void 0,J=Se.Push;$===!0?J=Se.Replace:$===!1||z!=null&&Lt(z.formMethod)&&z.formAction===v.location.pathname+v.location.search&&(J=Se.Replace);let Fe=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,Q=(C&&C.unstable_flushSync)===!0,ie=td({currentLocation:W,nextLocation:H,historyAction:J});if(ie){Wo(ie,{state:"blocked",location:H,proceed(){Wo(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),Gf(k,C)},reset(){let he=new Map(v.blockers);he.set(ie,Oi),Le({blockers:he})}});return}return await Gn(J,H,{submission:z,pendingError:G,preventScrollReset:Fe,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition,flushSync:Q})}function o0(){if(Zl(),Le({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Gn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Gn(E||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Gn(k,C,_){b&&b.abort(),b=null,E=k,q=(_&&_.startUninterruptedRevalidation)===!0,h0(v.location,v.matches),j=(_&&_.preventScrollReset)===!0,T=(_&&_.enableViewTransition)===!0;let A=l||a,z=_&&_.overrideNavigation,G=Fr(A,C,s),W=(_&&_.flushSync)===!0;if(!G){let he=yt(404,{pathname:C.pathname}),{matches:Qe,route:Ut}=Cp(A);ql(),tt(C,{matches:Qe,loaderData:{},errors:{[Ut.id]:he}},{flushSync:W});return}if(v.initialized&&!Ne&&Px(v.location,C)&&!(_&&_.submission&&Lt(_.submission.formMethod))){tt(C,{matches:G},{flushSync:W});return}b=new AbortController;let H=Li(e.history,C,b.signal,_&&_.submission),$,J;if(_&&_.pendingError)J={[Zi(G).route.id]:_.pendingError};else if(_&&_.submission&&Lt(_.submission.formMethod)){let he=await a0(H,C,_.submission,G,{replace:_.replace,flushSync:W});if(he.shortCircuited)return;$=he.pendingActionData,J=he.pendingActionError,z=Os(C,_.submission),W=!1,H=new Request(H.url,{signal:H.signal})}let{shortCircuited:Fe,loaderData:Q,errors:ie}=await l0(H,C,G,z,_&&_.submission,_&&_.fetcherSubmission,_&&_.replace,W,$,J);Fe||(b=null,tt(C,xe({matches:G},$?{actionData:$}:{},{loaderData:Q,errors:ie})))}async function a0(k,C,_,A,z){z===void 0&&(z={}),Zl();let G=Rx(C,_);Le({navigation:G},{flushSync:z.flushSync===!0});let W,H=Gu(A,C);if(!H.route.action&&!H.route.lazy)W={type:be.error,error:yt(405,{method:k.method,pathname:C.pathname,routeId:H.route.id})};else if(W=await Ai("action",k,H,A,o,i,s),k.signal.aborted)return{shortCircuited:!0};if(Xr(W)){let $;return z&&z.replace!=null?$=z.replace:$=W.location===v.location.pathname+v.location.search,await ki(v,W,{submission:_,replace:$}),{shortCircuited:!0}}if(qi(W)){let $=Zi(A,H.route.id);return(z&&z.replace)!==!0&&(E=Se.Push),{pendingActionData:{},pendingActionError:{[$.route.id]:W.error}}}if(tr(W))throw yt(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:W.data}}}async function l0(k,C,_,A,z,G,W,H,$,J){let Fe=A||Os(C,z),Q=z||G||jp(Fe),ie=l||a,[he,Qe]=yp(e.history,v,_,Q,C,Ne,Ee,Nt,ee,U,F,ie,s,$,J);if(ql(oe=>!(_&&_.some(gt=>gt.route.id===oe))||he&&he.some(gt=>gt.route.id===oe)),Ae=++mt,he.length===0&&Qe.length===0){let oe=Zf();return tt(C,xe({matches:_,loaderData:{},errors:J||null},$?{actionData:$}:{},oe?{fetchers:new Map(v.fetchers)}:{}),{flushSync:H}),{shortCircuited:!0}}if(!q){Qe.forEach(gt=>{let Pe=v.fetchers.get(gt.key),Qn=Ii(void 0,Pe?Pe.data:void 0);v.fetchers.set(gt.key,Qn)});let oe=$||v.actionData;Le(xe({navigation:Fe},oe?Object.keys(oe).length===0?{actionData:null}:{actionData:oe}:{},Qe.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:H})}Qe.forEach(oe=>{de.has(oe.key)&&yn(oe.key),oe.controller&&de.set(oe.key,oe.controller)});let Ut=()=>Qe.forEach(oe=>yn(oe.key));b&&b.signal.addEventListener("abort",Ut);let{results:bi,loaderResults:es,fetcherResults:br}=await Qf(v.matches,_,he,Qe,k);if(k.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",Ut),Qe.forEach(oe=>de.delete(oe.key));let Rt=Ep(bi);if(Rt){if(Rt.idx>=he.length){let oe=Qe[Rt.idx-he.length].key;F.add(oe)}return await ki(v,Rt.result,{replace:W}),{shortCircuited:!0}}let{loaderData:Vo,errors:ts}=Sp(v,_,he,es,J,Qe,br,ze);ze.forEach((oe,gt)=>{oe.subscribe(Pe=>{(Pe||oe.done)&&ze.delete(gt)})});let ns=Zf(),rs=qf(Ae),Cr=ns||rs||Qe.length>0;return xe({loaderData:Vo,errors:ts},Cr?{fetchers:new Map(v.fetchers)}:{})}function s0(k,C,_,A){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");de.has(k)&&yn(k);let z=(A&&A.unstable_flushSync)===!0,G=l||a,W=Yu(v.location,v.matches,s,u.v7_prependBasename,_,C,A==null?void 0:A.relative),H=Fr(G,W,s);if(!H){Si(k,C,yt(404,{pathname:W}),{flushSync:z});return}let{path:$,submission:J,error:Fe}=gp(u.v7_normalizeFormMethod,!0,W,A);if(Fe){Si(k,C,Fe,{flushSync:z});return}let Q=Gu(H,$);if(j=(A&&A.preventScrollReset)===!0,J&&Lt(J.formMethod)){u0(k,C,$,Q,H,z,J);return}U.set(k,{routeId:C,path:$}),c0(k,C,$,Q,H,z,J)}async function u0(k,C,_,A,z,G,W){if(Zl(),U.delete(k),!A.route.action&&!A.route.lazy){let Pe=yt(405,{method:W.formMethod,pathname:_,routeId:C});Si(k,C,Pe,{flushSync:G});return}let H=v.fetchers.get(k);gn(k,Tx(W,H),{flushSync:G});let $=new AbortController,J=Li(e.history,_,$.signal,W);de.set(k,$);let Fe=mt,Q=await Ai("action",J,A,z,o,i,s);if(J.signal.aborted){de.get(k)===$&&de.delete(k);return}if(ee.has(k)){gn(k,kn(void 0));return}if(Xr(Q))if(de.delete(k),Ae>Fe){gn(k,kn(void 0));return}else return F.add(k),gn(k,Ii(W)),ki(v,Q,{fetcherSubmission:W});if(qi(Q)){Si(k,C,Q.error);return}if(tr(Q))throw yt(400,{type:"defer-action"});let ie=v.navigation.location||v.location,he=Li(e.history,ie,$.signal),Qe=l||a,Ut=v.navigation.state!=="idle"?Fr(Qe,v.navigation.location,s):v.matches;K(Ut,"Didn't find any matches after fetcher action");let bi=++mt;O.set(k,bi);let es=Ii(W,Q.data);v.fetchers.set(k,es);let[br,Rt]=yp(e.history,v,Ut,W,ie,Ne,Ee,Nt,ee,U,F,Qe,s,{[A.route.id]:Q.data},void 0);Rt.filter(Pe=>Pe.key!==k).forEach(Pe=>{let Qn=Pe.key,id=v.fetchers.get(Qn),v0=Ii(void 0,id?id.data:void 0);v.fetchers.set(Qn,v0),de.has(Qn)&&yn(Qn),Pe.controller&&de.set(Qn,Pe.controller)}),Le({fetchers:new Map(v.fetchers)});let Vo=()=>Rt.forEach(Pe=>yn(Pe.key));$.signal.addEventListener("abort",Vo);let{results:ts,loaderResults:ns,fetcherResults:rs}=await Qf(v.matches,Ut,br,Rt,he);if($.signal.aborted)return;$.signal.removeEventListener("abort",Vo),O.delete(k),de.delete(k),Rt.forEach(Pe=>de.delete(Pe.key));let Cr=Ep(ts);if(Cr){if(Cr.idx>=br.length){let Pe=Rt[Cr.idx-br.length].key;F.add(Pe)}return ki(v,Cr.result)}let{loaderData:oe,errors:gt}=Sp(v,v.matches,br,ns,void 0,Rt,rs,ze);if(v.fetchers.has(k)){let Pe=kn(Q.data);v.fetchers.set(k,Pe)}qf(bi),v.navigation.state==="loading"&&bi>Ae?(K(E,"Expected pending action"),b&&b.abort(),tt(v.navigation.location,{matches:Ut,loaderData:oe,errors:gt,fetchers:new Map(v.fetchers)})):(Le({errors:gt,loaderData:bp(v.loaderData,oe,Ut,gt),fetchers:new Map(v.fetchers)}),Ne=!1)}async function c0(k,C,_,A,z,G,W){let H=v.fetchers.get(k);gn(k,Ii(W,H?H.data:void 0),{flushSync:G});let $=new AbortController,J=Li(e.history,_,$.signal);de.set(k,$);let Fe=mt,Q=await Ai("loader",J,A,z,o,i,s);if(tr(Q)&&(Q=await Xv(Q,J.signal,!0)||Q),de.get(k)===$&&de.delete(k),!J.signal.aborted){if(ee.has(k)){gn(k,kn(void 0));return}if(Xr(Q))if(Ae>Fe){gn(k,kn(void 0));return}else{F.add(k),await ki(v,Q);return}if(qi(Q)){Si(k,C,Q.error);return}K(!tr(Q),"Unhandled fetcher deferred data"),gn(k,kn(Q.data))}}async function ki(k,C,_){let{submission:A,fetcherSubmission:z,replace:G}=_===void 0?{}:_;C.revalidate&&(Ne=!0);let W=So(k.location,C.location,{_isRedirect:!0});if(K(W,"Expected a location on the redirect navigation"),n){let ie=!1;if(C.reloadDocument)ie=!0;else if(Yv.test(C.location)){const he=e.history.createURL(C.location);ie=he.origin!==t.location.origin||Un(he.pathname,s)==null}if(ie){G?t.location.replace(C.location):t.location.assign(C.location);return}}b=null;let H=G===!0?Se.Replace:Se.Push,{formMethod:$,formAction:J,formEncType:Fe}=k.navigation;!A&&!z&&$&&J&&Fe&&(A=jp(k.navigation));let Q=A||z;if(yx.has(C.status)&&Q&&Lt(Q.formMethod))await Gn(H,W,{submission:xe({},Q,{formAction:C.location}),preventScrollReset:j});else{let ie=Os(W,A);await Gn(H,W,{overrideNavigation:ie,fetcherSubmission:z,preventScrollReset:j})}}async function Qf(k,C,_,A,z){let G=await Promise.all([..._.map($=>Ai("loader",z,$,C,o,i,s)),...A.map($=>$.matches&&$.match&&$.controller?Ai("loader",Li(e.history,$.path,$.controller.signal),$.match,$.matches,o,i,s):{type:be.error,error:yt(404,{pathname:$.path})})]),W=G.slice(0,_.length),H=G.slice(_.length);return await Promise.all([Pp(k,_,W,W.map(()=>z.signal),!1,v.loaderData),Pp(k,A.map($=>$.match),H,A.map($=>$.controller?$.controller.signal:null),!0)]),{results:G,loaderResults:W,fetcherResults:H}}function Zl(){Ne=!0,Ee.push(...ql()),U.forEach((k,C)=>{de.has(C)&&(Nt.push(C),yn(C))})}function gn(k,C,_){_===void 0&&(_={}),v.fetchers.set(k,C),Le({fetchers:new Map(v.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function Si(k,C,_,A){A===void 0&&(A={});let z=Zi(v.matches,C);Ho(k),Le({errors:{[z.route.id]:_},fetchers:new Map(v.fetchers)},{flushSync:(A&&A.flushSync)===!0})}function Xf(k){return u.v7_fetcherPersist&&(te.set(k,(te.get(k)||0)+1),ee.has(k)&&ee.delete(k)),v.fetchers.get(k)||xx}function Ho(k){let C=v.fetchers.get(k);de.has(k)&&!(C&&C.state==="loading"&&O.has(k))&&yn(k),U.delete(k),O.delete(k),F.delete(k),ee.delete(k),v.fetchers.delete(k)}function f0(k){if(u.v7_fetcherPersist){let C=(te.get(k)||0)-1;C<=0?(te.delete(k),ee.add(k)):te.set(k,C)}else Ho(k);Le({fetchers:new Map(v.fetchers)})}function yn(k){let C=de.get(k);K(C,"Expected fetch controller: "+k),C.abort(),de.delete(k)}function Jf(k){for(let C of k){let _=Xf(C),A=kn(_.data);v.fetchers.set(C,A)}}function Zf(){let k=[],C=!1;for(let _ of F){let A=v.fetchers.get(_);K(A,"Expected fetcher: "+_),A.state==="loading"&&(F.delete(_),k.push(_),C=!0)}return Jf(k),C}function qf(k){let C=[];for(let[_,A]of O)if(A<k){let z=v.fetchers.get(_);K(z,"Expected fetcher: "+_),z.state==="loading"&&(yn(_),O.delete(_),C.push(_))}return Jf(C),C.length>0}function d0(k,C){let _=v.blockers.get(k)||Oi;return ke.get(k)!==C&&ke.set(k,C),_}function ed(k){v.blockers.delete(k),ke.delete(k)}function Wo(k,C){let _=v.blockers.get(k)||Oi;K(_.state==="unblocked"&&C.state==="blocked"||_.state==="blocked"&&C.state==="blocked"||_.state==="blocked"&&C.state==="proceeding"||_.state==="blocked"&&C.state==="unblocked"||_.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+_.state+" -> "+C.state);let A=new Map(v.blockers);A.set(k,C),Le({blockers:A})}function td(k){let{currentLocation:C,nextLocation:_,historyAction:A}=k;if(ke.size===0)return;ke.size>1&&pr(!1,"A router only supports one blocker at a time");let z=Array.from(ke.entries()),[G,W]=z[z.length-1],H=v.blockers.get(G);if(!(H&&H.state==="proceeding")&&W({currentLocation:C,nextLocation:_,historyAction:A}))return G}function ql(k){let C=[];return ze.forEach((_,A)=>{(!k||k(A))&&(_.cancel(),C.push(A),ze.delete(A))}),C}function p0(k,C,_){if(h=k,y=C,x=_||null,!w&&v.navigation===Ts){w=!0;let A=rd(v.location,v.matches);A!=null&&Le({restoreScrollPosition:A})}return()=>{h=null,y=null,x=null}}function nd(k,C){return x&&x(k,C.map(A=>Qy(A,v.loaderData)))||k.key}function h0(k,C){if(h&&y){let _=nd(k,C);h[_]=y()}}function rd(k,C){if(h){let _=nd(k,C),A=h[_];if(typeof A=="number")return A}return null}function m0(k){o={},l=Wu(k,i,void 0,o)}return g={get basename(){return s},get state(){return v},get routes(){return a},get window(){return t},initialize:Ge,subscribe:wi,enableScrollRestoration:p0,navigate:Gf,fetch:s0,revalidate:o0,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:Xf,deleteFetcher:f0,dispose:et,getBlocker:d0,deleteBlocker:ed,_internalFetchControllers:de,_internalActiveDeferreds:ze,_internalSetRoutes:m0},g}function Sx(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Yu(e,t,n,r,i,o,a){let l,s;if(o){l=[];for(let c of t)if(l.push(c),c.route.id===o){s=c;break}}else l=t,s=t[t.length-1];let u=yf(i||".",gf(l),Un(e.pathname,n)||e.pathname,a==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&s&&s.route.index&&!wf(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:nn([n,u.pathname])),hr(u)}function gp(e,t,n,r){if(!r||!Sx(r))return{path:n};if(r.formMethod&&!Nx(r.formMethod))return{path:n,error:yt(405,{method:r.formMethod})};let i=()=>({path:n,error:yt(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),l=Qv(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Lt(a))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,y)=>{let[w,P]=y;return""+x+w+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Lt(a))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}K(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Ku(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Ku(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=kp(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=kp(s)}catch{return i()}let c={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Lt(c.formMethod))return{path:n,submission:c};let p=dn(n);return t&&p.search&&wf(p.search)&&s.append("index",""),p.search="?"+s,{path:hr(p),submission:c}}function bx(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function yp(e,t,n,r,i,o,a,l,s,u,c,p,h,x,y){let w=y?Object.values(y)[0]:x?Object.values(x)[0]:void 0,P=e.createURL(t.location),m=e.createURL(i),f=y?Object.keys(y)[0]:void 0,v=bx(n,f).filter((j,b)=>{if(j.route.lazy)return!0;if(j.route.loader==null)return!1;if(Cx(t.loaderData,t.matches[b],j)||a.some(B=>B===j.route.id))return!0;let T=t.matches[b],M=j;return xp(j,xe({currentUrl:P,currentParams:T.params,nextUrl:m,nextParams:M.params},r,{actionResult:w,defaultShouldRevalidate:o||P.pathname+P.search===m.pathname+m.search||P.search!==m.search||Gv(T,M)}))}),E=[];return u.forEach((j,b)=>{if(!n.some(Ne=>Ne.route.id===j.routeId)||s.has(b))return;let T=Fr(p,j.path,h);if(!T){E.push({key:b,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let M=t.fetchers.get(b),B=Gu(T,j.path),q=!1;c.has(b)?q=!1:l.includes(b)?q=!0:M&&M.state!=="idle"&&M.data===void 0?q=o:q=xp(B,xe({currentUrl:P,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:o})),q&&E.push({key:b,routeId:j.routeId,path:j.path,matches:T,match:B,controller:new AbortController})}),[v,E]}function Cx(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Gv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function xp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function wp(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];K(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";pr(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!Ky.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,xe({},t(i),{lazy:void 0}))}async function Ai(e,t,n,r,i,o,a,l){l===void 0&&(l={});let s,u,c,p=y=>{let w,P=new Promise((m,f)=>w=f);return c=()=>w(),t.signal.addEventListener("abort",c),Promise.race([y({request:t,params:n.params,context:l.requestContext}),P])};try{let y=n.route[e];if(n.route.lazy)if(y){let w,P=await Promise.all([p(y).catch(m=>{w=m}),wp(n.route,o,i)]);if(w)throw w;u=P[0]}else if(await wp(n.route,o,i),y=n.route[e],y)u=await p(y);else if(e==="action"){let w=new URL(t.url),P=w.pathname+w.search;throw yt(405,{method:t.method,pathname:P,routeId:n.route.id})}else return{type:be.data,data:void 0};else if(y)u=await p(y);else{let w=new URL(t.url),P=w.pathname+w.search;throw yt(404,{pathname:P})}K(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){s=be.error,u=y}finally{c&&t.signal.removeEventListener("abort",c)}if(_x(u)){let y=u.status;if(gx.has(y)){let m=u.headers.get("Location");if(K(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Yv.test(m))m=Yu(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,m);else if(!l.isStaticRequest){let f=new URL(t.url),g=m.startsWith("//")?new URL(f.protocol+m):new URL(m),v=Un(g.pathname,a)!=null;g.origin===f.origin&&v&&(m=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw u.headers.set("Location",m),u;return{type:be.redirect,status:y,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:s===be.error?be.error:be.data,response:u};let w,P=u.headers.get("Content-Type");return P&&/\bapplication\/json\b/.test(P)?w=await u.json():w=await u.text(),s===be.error?{type:s,error:new xf(y,u.statusText,w),headers:u.headers}:{type:be.data,data:w,statusCode:u.status,headers:u.headers}}if(s===be.error)return{type:s,error:u};if(jx(u)){var h,x;return{type:be.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((x=u.init)==null?void 0:x.headers)&&new Headers(u.init.headers)}}return{type:be.data,data:u}}function Li(e,t,n,r){let i=e.createURL(Qv(t)).toString(),o={signal:n};if(r&&Lt(r.formMethod)){let{formMethod:a,formEncType:l}=r;o.method=a.toUpperCase(),l==="application/json"?(o.headers=new Headers({"Content-Type":l}),o.body=JSON.stringify(r.json)):l==="text/plain"?o.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?o.body=Ku(r.formData):o.body=r.formData}return new Request(i,o)}function Ku(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function kp(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Ex(e,t,n,r,i){let o={},a=null,l,s=!1,u={};return n.forEach((c,p)=>{let h=t[p].route.id;if(K(!Xr(c),"Cannot handle redirect results in processLoaderData"),qi(c)){let x=Zi(e,h),y=c.error;r&&(y=Object.values(r)[0],r=void 0),a=a||{},a[x.route.id]==null&&(a[x.route.id]=y),o[h]=void 0,s||(s=!0,l=Wv(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else tr(c)?(i.set(h,c.deferredData),o[h]=c.deferredData.data):o[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!s&&(l=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:u}}function Sp(e,t,n,r,i,o,a,l){let{loaderData:s,errors:u}=Ex(t,n,r,i,l);for(let c=0;c<o.length;c++){let{key:p,match:h,controller:x}=o[c];K(a!==void 0&&a[c]!==void 0,"Did not find corresponding fetcher result");let y=a[c];if(!(x&&x.signal.aborted))if(qi(y)){let w=Zi(e.matches,h==null?void 0:h.route.id);u&&u[w.route.id]||(u=xe({},u,{[w.route.id]:y.error})),e.fetchers.delete(p)}else if(Xr(y))K(!1,"Unhandled fetcher revalidation redirect");else if(tr(y))K(!1,"Unhandled fetcher deferred data");else{let w=kn(y.data);e.fetchers.set(p,w)}}return{loaderData:s,errors:u}}function bp(e,t,n,r){let i=xe({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function Zi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Cp(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function yt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new xf(e||500,a,new Error(l),!0)}function Ep(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Xr(n))return{result:n,idx:t}}}function Qv(e){let t=typeof e=="string"?dn(e):e;return hr(xe({},t,{hash:""}))}function Px(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function tr(e){return e.type===be.deferred}function qi(e){return e.type===be.error}function Xr(e){return(e&&e.type)===be.redirect}function jx(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function _x(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Nx(e){return vx.has(e.toLowerCase())}function Lt(e){return hx.has(e.toLowerCase())}async function Pp(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let u=e.find(p=>p.route.id===s.route.id),c=u!=null&&!Gv(u,s)&&(o&&o[s.route.id])!==void 0;if(tr(l)&&(i||c)){let p=r[a];K(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await Xv(l,p,i).then(h=>{h&&(n[a]=h||n[a])})}}}async function Xv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:be.data,data:e.deferredData.unwrappedData}}catch(i){return{type:be.error,error:i}}return{type:be.data,data:e.deferredData.data}}}function wf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Gu(e,t){let n=typeof t=="string"?dn(t).search:t.search;if(e[e.length-1].route.index&&wf(n||""))return e[e.length-1];let r=Hv(e);return r[r.length-1]}function jp(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Os(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Rx(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ii(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Tx(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function kn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Ox(e,t){try{let n=e.sessionStorage.getItem(Kv);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function Ax(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(Kv,JSON.stringify(n))}catch(r){pr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}const Io=N.createContext(null),kf=N.createContext(null),xr=N.createContext(null),Ll=N.createContext(null),wr=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Jv=N.createContext(null);function Lx(e,t){let{relative:n}=t===void 0?{}:t;Mo()||K(!1);let{basename:r,navigator:i}=N.useContext(xr),{hash:o,pathname:a,search:l}=Il(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:nn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Mo(){return N.useContext(Ll)!=null}function Do(){return Mo()||K(!1),N.useContext(Ll).location}function Zv(e){N.useContext(xr).static||N.useLayoutEffect(e)}function pn(){let{isDataRoute:e}=N.useContext(wr);return e?Yx():Ix()}function Ix(){Mo()||K(!1);let e=N.useContext(Io),{basename:t,navigator:n}=N.useContext(xr),{matches:r}=N.useContext(wr),{pathname:i}=Do(),o=JSON.stringify(gf(r)),a=N.useRef(!1);return Zv(()=>{a.current=!0}),N.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=yf(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:nn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function Il(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=N.useContext(wr),{pathname:i}=Do(),o=JSON.stringify(gf(r));return N.useMemo(()=>yf(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Mx(e,t,n){Mo()||K(!1);let{navigator:r}=N.useContext(xr),{matches:i}=N.useContext(wr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Do(),u;if(t){var c;let w=typeof t=="string"?dn(t):t;l==="/"||(c=w.pathname)!=null&&c.startsWith(l)||K(!1),u=w}else u=s;let p=u.pathname||"/",h=l==="/"?p:p.slice(l.length)||"/",x=Fr(e,{pathname:h}),y=Ux(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:nn([l,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:nn([l,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&y?N.createElement(Ll.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Se.Pop}},y):y}function Dx(){let e=Vx(),t=Wv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,o)}const zx=N.createElement(Dx,null);class Fx extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?N.createElement(wr.Provider,{value:this.props.routeContext},N.createElement(Jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $x(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(Io);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(wr.Provider,{value:t},r)}function Ux(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||K(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,p=null;n&&(p=s.route.errorElement||zx);let h=t.concat(o.slice(0,u+1)),x=()=>{let y;return c?y=p:s.route.Component?y=N.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=l,N.createElement($x,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?N.createElement(Fx,{location:n.location,revalidation:n.revalidation,component:p,error:c,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var qv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qv||{}),ul=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ul||{});function Bx(e){let t=N.useContext(Io);return t||K(!1),t}function Hx(e){let t=N.useContext(kf);return t||K(!1),t}function Wx(e){let t=N.useContext(wr);return t||K(!1),t}function eg(e){let t=Wx(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function Vx(){var e;let t=N.useContext(Jv),n=Hx(ul.UseRouteError),r=eg(ul.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Yx(){let{router:e}=Bx(qv.UseNavigateStable),t=eg(ul.UseNavigateStable),n=N.useRef(!1);return Zv(()=>{n.current=!0}),N.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,sl({fromRouteId:t},o)))},[e,t])}function Kx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Se.Pop,navigator:o,static:a=!1}=e;Mo()&&K(!1);let l=t.replace(/^\/*/,"/"),s=N.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=dn(r));let{pathname:u="/",search:c="",hash:p="",state:h=null,key:x="default"}=r,y=N.useMemo(()=>{let w=Un(u,l);return w==null?null:{location:{pathname:w,search:c,hash:p,state:h,key:x},navigationType:i}},[l,u,c,p,h,x,i]);return y==null?null:N.createElement(xr.Provider,{value:s},N.createElement(Ll.Provider,{children:n,value:y}))}new Promise(()=>{});function Gx(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:N.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:N.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(this,arguments)}function tg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Qx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xx(e,t){return e.button===0&&(!t||t==="_self")&&!Qx(e)}const Jx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Zx=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function qx(e,t){return kx({basename:t==null?void 0:t.basename,future:ai({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Wy({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||ew(),routes:e,mapRouteProperties:Gx,window:t==null?void 0:t.window}).initialize()}function ew(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ai({},t,{errors:tw(t.errors)})),t}function tw(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new xf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const ng=N.createContext({isTransitioning:!1}),nw=N.createContext(new Map),rw="startTransition",_p=O0[rw],iw="flushSync",Np=Hy[iw];function ow(e){_p?_p(e):e()}function Mi(e){Np?Np(e):e()}class aw{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function lw(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=N.useState(n.state),[a,l]=N.useState(),[s,u]=N.useState({isTransitioning:!1}),[c,p]=N.useState(),[h,x]=N.useState(),[y,w]=N.useState(),P=N.useRef(new Map),{v7_startTransition:m}=r||{},f=N.useCallback(b=>{m?ow(b):b()},[m]),g=N.useCallback((b,T)=>{let{deletedFetchers:M,unstable_flushSync:B,unstable_viewTransitionOpts:q}=T;M.forEach(Ee=>P.current.delete(Ee)),b.fetchers.forEach((Ee,Nt)=>{Ee.data!==void 0&&P.current.set(Nt,Ee.data)});let Ne=n.window==null||typeof n.window.document.startViewTransition!="function";if(!q||Ne){B?Mi(()=>o(b)):f(()=>o(b));return}if(B){Mi(()=>{h&&(c&&c.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:q.currentLocation,nextLocation:q.nextLocation})});let Ee=n.window.document.startViewTransition(()=>{Mi(()=>o(b))});Ee.finished.finally(()=>{Mi(()=>{p(void 0),x(void 0),l(void 0),u({isTransitioning:!1})})}),Mi(()=>x(Ee));return}h?(c&&c.resolve(),h.skipTransition(),w({state:b,currentLocation:q.currentLocation,nextLocation:q.nextLocation})):(l(b),u({isTransitioning:!0,flushSync:!1,currentLocation:q.currentLocation,nextLocation:q.nextLocation}))},[n.window,h,c,P,f]);N.useLayoutEffect(()=>n.subscribe(g),[n,g]),N.useEffect(()=>{s.isTransitioning&&!s.flushSync&&p(new aw)},[s]),N.useEffect(()=>{if(c&&a&&n.window){let b=a,T=c.promise,M=n.window.document.startViewTransition(async()=>{f(()=>o(b)),await T});M.finished.finally(()=>{p(void 0),x(void 0),l(void 0),u({isTransitioning:!1})}),x(M)}},[f,a,c,n.window]),N.useEffect(()=>{c&&a&&i.location.key===a.location.key&&c.resolve()},[c,h,i.location,a]),N.useEffect(()=>{!s.isTransitioning&&y&&(l(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),w(void 0))},[s.isTransitioning,y]);let v=N.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,T,M)=>n.navigate(b,{state:T,preventScrollReset:M==null?void 0:M.preventScrollReset}),replace:(b,T,M)=>n.navigate(b,{replace:!0,state:T,preventScrollReset:M==null?void 0:M.preventScrollReset})}),[n]),E=n.basename||"/",j=N.useMemo(()=>({router:n,navigator:v,static:!1,basename:E}),[n,v,E]);return N.createElement(N.Fragment,null,N.createElement(Io.Provider,{value:j},N.createElement(kf.Provider,{value:i},N.createElement(nw.Provider,{value:P.current},N.createElement(ng.Provider,{value:s},N.createElement(Kx,{basename:E,location:i.location,navigationType:i.historyAction,navigator:v},i.initialized?N.createElement(sw,{routes:n.routes,state:i}):t))))),null)}function sw(e){let{routes:t,state:n}=e;return Mx(t,void 0,n)}const uw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ml=N.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c,unstable_viewTransition:p}=t,h=tg(t,Jx),{basename:x}=N.useContext(xr),y,w=!1;if(typeof u=="string"&&cw.test(u)&&(y=u,uw))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),E=Un(v.pathname,x);v.origin===g.origin&&E!=null?u=E+v.search+v.hash:w=!0}catch{}let P=Lx(u,{relative:i}),m=pw(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i,unstable_viewTransition:p});function f(g){r&&r(g),g.defaultPrevented||m(g)}return N.createElement("a",ai({},h,{href:y||P,onClick:w||o?r:f,ref:n,target:s}))}),fw=N.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,unstable_viewTransition:u,children:c}=t,p=tg(t,Zx),h=Il(s,{relative:p.relative}),x=Do(),y=N.useContext(kf),{navigator:w}=N.useContext(xr),P=y!=null&&hw(h)&&u===!0,m=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,f=x.pathname,g=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(f=f.toLowerCase(),g=g?g.toLowerCase():null,m=m.toLowerCase());const v=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let E=f===m||!a&&f.startsWith(m)&&f.charAt(v)==="/",j=g!=null&&(g===m||!a&&g.startsWith(m)&&g.charAt(m.length)==="/"),b={isActive:E,isPending:j,isTransitioning:P},T=E?r:void 0,M;typeof o=="function"?M=o(b):M=[o,E?"active":null,j?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let B=typeof l=="function"?l(b):l;return N.createElement(Ml,ai({},p,{"aria-current":T,className:M,ref:n,style:B,to:s,unstable_viewTransition:u}),typeof c=="function"?c(b):c)});var Qu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Qu||(Qu={}));var Rp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rp||(Rp={}));function dw(e){let t=N.useContext(Io);return t||K(!1),t}function pw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=pn(),u=Do(),c=Il(e,{relative:a});return N.useCallback(p=>{if(Xx(p,n)){p.preventDefault();let h=r!==void 0?r:hr(u)===hr(c);s(e,{replace:h,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l})}},[u,s,c,r,i,n,e,o,a,l])}function hw(e,t){t===void 0&&(t={});let n=N.useContext(ng);n==null&&K(!1);let{basename:r}=dw(Qu.useViewTransitionState),i=Il(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Un(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Un(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Vu(i.pathname,a)!=null||Vu(i.pathname,o)!=null}var Ye=function(){return Ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ye.apply(this,arguments)};function bo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var se="-ms-",eo="-moz-",ne="-webkit-",rg="comm",Dl="rule",Sf="decl",mw="@import",ig="@keyframes",vw="@layer",gw=Math.abs,bf=String.fromCharCode,Xu=Object.assign;function yw(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function og(e){return e.trim()}function Jt(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Oa(e,t){return e.indexOf(t)}function Me(e,t){return e.charCodeAt(t)|0}function li(e,t,n){return e.slice(t,n)}function Wt(e){return e.length}function ag(e){return e.length}function Ui(e,t){return t.push(e),e}function xw(e,t){return e.map(t).join("")}function Tp(e,t){return e.filter(function(n){return!Jt(n,t)})}var zl=1,si=1,lg=0,_t=0,je=0,vi="";function Fl(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:zl,column:si,length:a,return:"",siblings:l}}function Sn(e,t){return Xu(Fl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Pr(e){for(;e.root;)e=Sn(e.root,{children:[e]});Ui(e,e.siblings)}function ww(){return je}function kw(){return je=_t>0?Me(vi,--_t):0,si--,je===10&&(si=1,zl--),je}function Ft(){return je=_t<lg?Me(vi,_t++):0,si++,je===10&&(si=1,zl++),je}function lr(){return Me(vi,_t)}function Aa(){return _t}function $l(e,t){return li(vi,e,t)}function Ju(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sw(e){return zl=si=1,lg=Wt(vi=e),_t=0,[]}function bw(e){return vi="",e}function As(e){return og($l(_t-1,Zu(e===91?e+2:e===40?e+1:e)))}function Cw(e){for(;(je=lr())&&je<33;)Ft();return Ju(e)>2||Ju(je)>3?"":" "}function Ew(e,t){for(;--t&&Ft()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return $l(e,Aa()+(t<6&&lr()==32&&Ft()==32))}function Zu(e){for(;Ft();)switch(je){case e:return _t;case 34:case 39:e!==34&&e!==39&&Zu(je);break;case 40:e===41&&Zu(e);break;case 92:Ft();break}return _t}function Pw(e,t){for(;Ft()&&e+je!==47+10;)if(e+je===42+42&&lr()===47)break;return"/*"+$l(t,_t-1)+"*"+bf(e===47?e:Ft())}function jw(e){for(;!Ju(lr());)Ft();return $l(e,_t)}function _w(e){return bw(La("",null,null,null,[""],e=Sw(e),0,[0],e))}function La(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,p=a,h=0,x=0,y=0,w=1,P=1,m=1,f=0,g="",v=i,E=o,j=r,b=g;P;)switch(y=f,f=Ft()){case 40:if(y!=108&&Me(b,p-1)==58){Oa(b+=Y(As(f),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:b+=As(f);break;case 9:case 10:case 13:case 32:b+=Cw(y);break;case 92:b+=Ew(Aa()-1,7);continue;case 47:switch(lr()){case 42:case 47:Ui(Nw(Pw(Ft(),Aa()),t,n,s),s);break;default:b+="/"}break;case 123*w:l[u++]=Wt(b)*m;case 125*w:case 59:case 0:switch(f){case 0:case 125:P=0;case 59+c:m==-1&&(b=Y(b,/\f/g,"")),x>0&&Wt(b)-p&&Ui(x>32?Ap(b+";",r,n,p-1,s):Ap(Y(b," ","")+";",r,n,p-2,s),s);break;case 59:b+=";";default:if(Ui(j=Op(b,t,n,u,c,i,l,g,v=[],E=[],p,o),o),f===123)if(c===0)La(b,t,j,j,v,o,p,l,E);else switch(h===99&&Me(b,3)===110?100:h){case 100:case 108:case 109:case 115:La(e,j,j,r&&Ui(Op(e,j,j,0,0,i,l,g,i,v=[],p,E),E),i,E,p,l,r?v:E);break;default:La(b,j,j,j,[""],E,0,l,E)}}u=c=x=0,w=m=1,g=b="",p=a;break;case 58:p=1+Wt(b),x=y;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&kw()==125)continue}switch(b+=bf(f),f*w){case 38:m=c>0?1:(b+="\f",-1);break;case 44:l[u++]=(Wt(b)-1)*m,m=1;break;case 64:lr()===45&&(b+=As(Ft())),h=lr(),c=p=Wt(g=b+=jw(Aa())),f++;break;case 45:y===45&&Wt(b)==2&&(w=0)}}return o}function Op(e,t,n,r,i,o,a,l,s,u,c,p){for(var h=i-1,x=i===0?o:[""],y=ag(x),w=0,P=0,m=0;w<r;++w)for(var f=0,g=li(e,h+1,h=gw(P=a[w])),v=e;f<y;++f)(v=og(P>0?x[f]+" "+g:Y(g,/&\f/g,x[f])))&&(s[m++]=v);return Fl(e,t,n,i===0?Dl:l,s,u,c,p)}function Nw(e,t,n,r){return Fl(e,t,n,rg,bf(ww()),li(e,2,-2),0,r)}function Ap(e,t,n,r,i){return Fl(e,t,n,Sf,li(e,0,r),li(e,r+1,-1),r,i)}function sg(e,t,n){switch(yw(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return eo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+eo+e+se+e+e;case 5936:switch(Me(e,t+11)){case 114:return ne+e+se+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+se+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+se+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+se+e+e;case 6165:return ne+e+se+"flex-"+e+e;case 5187:return ne+e+Y(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+se+"flex-$1$2")+e;case 5443:return ne+e+se+"flex-item-"+Y(e,/flex-|-self/g,"")+(Jt(e,/flex-|baseline/)?"":se+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return ne+e+se+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+se+Y(e,"shrink","negative")+e;case 5292:return ne+e+se+Y(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+Y(e,"-grow","")+ne+e+se+Y(e,"grow","positive")+e;case 4554:return ne+Y(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!Jt(e,/flex-|baseline/))return se+"grid-column-align"+li(e,t)+e;break;case 2592:case 3360:return se+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Jt(r.props,/grid-\w+-end/)})?~Oa(e+(n=n[t].value),"span")?e:se+Y(e,"-start","")+e+se+"grid-row-span:"+(~Oa(n,"span")?Jt(n,/\d+/):+Jt(n,/\d+/)-+Jt(e,/\d+/))+";":se+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Jt(r.props,/grid-\w+-start/)})?e:se+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+eo+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Oa(e,"stretch")?sg(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return se+i+":"+o+u+(a?se+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Me(e,t+6)===121)return Y(e,":",":"+ne)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+(Me(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+se+"$2box$3")+e;case 100:return Y(e,":",":"+se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function cl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Rw(e,t,n,r){switch(e.type){case vw:if(e.children.length)break;case mw:case Sf:return e.return=e.return||e.value;case rg:return"";case ig:return e.return=e.value+"{"+cl(e.children,r)+"}";case Dl:if(!Wt(e.value=e.props.join(",")))return""}return Wt(n=cl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Tw(e){var t=ag(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Ow(e){return function(t){t.root||(t=t.return)&&e(t)}}function Aw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Sf:e.return=sg(e.value,e.length,n);return;case ig:return cl([Sn(e,{value:Y(e.value,"@","@"+ne)})],r);case Dl:if(e.length)return xw(n=e.props,function(i){switch(Jt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pr(Sn(e,{props:[Y(i,/:(read-\w+)/,":"+eo+"$1")]})),Pr(Sn(e,{props:[i]})),Xu(e,{props:Tp(n,r)});break;case"::placeholder":Pr(Sn(e,{props:[Y(i,/:(plac\w+)/,":"+ne+"input-$1")]})),Pr(Sn(e,{props:[Y(i,/:(plac\w+)/,":"+eo+"$1")]})),Pr(Sn(e,{props:[Y(i,/:(plac\w+)/,se+"input-$1")]})),Pr(Sn(e,{props:[i]})),Xu(e,{props:Tp(n,r)});break}return""})}}var Lw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ui=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Cf=typeof window<"u"&&"HTMLElement"in window,Iw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Mw={},Ul=Object.freeze([]),ci=Object.freeze({});function ug(e,t,n){return n===void 0&&(n=ci),e.theme!==n.theme&&e.theme||t||n.theme}var cg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Dw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zw=/(^-|-$)/g;function Lp(e){return e.replace(Dw,"-").replace(zw,"")}var Fw=/(a)(d)/gi,Ip=function(e){return String.fromCharCode(e+(e>25?39:97))};function qu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ip(t%52)+n;return(Ip(t%52)+n).replace(Fw,"$1-$2")}var Ls,$r=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fg=function(e){return $r(5381,e)};function dg(e){return qu(fg(e)>>>0)}function $w(e){return e.displayName||e.name||"Component"}function Is(e){return typeof e=="string"&&!0}var pg=typeof Symbol=="function"&&Symbol.for,hg=pg?Symbol.for("react.memo"):60115,Uw=pg?Symbol.for("react.forward_ref"):60112,Bw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ww=((Ls={})[Uw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ls[hg]=mg,Ls);function Mp(e){return("type"in(t=e)&&t.type.$$typeof)===hg?mg:"$$typeof"in e?Ww[e.$$typeof]:Bw;var t}var Vw=Object.defineProperty,Yw=Object.getOwnPropertyNames,Dp=Object.getOwnPropertySymbols,Kw=Object.getOwnPropertyDescriptor,Gw=Object.getPrototypeOf,zp=Object.prototype;function vg(e,t,n){if(typeof t!="string"){if(zp){var r=Gw(t);r&&r!==zp&&vg(e,r,n)}var i=Yw(t);Dp&&(i=i.concat(Dp(t)));for(var o=Mp(e),a=Mp(t),l=0;l<i.length;++l){var s=i[l];if(!(s in Hw||n&&n[s]||a&&s in a||o&&s in o)){var u=Kw(t,s);try{Vw(e,s,u)}catch{}}}}return e}function fi(e){return typeof e=="function"}function Ef(e){return typeof e=="object"&&"styledComponentId"in e}function nr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ec(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Co(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function tc(e,t,n){if(n===void 0&&(n=!1),!n&&!Co(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=tc(e[r],t[r]);else if(Co(t))for(var r in t)e[r]=tc(e[r],t[r]);return e}function Pf(e,t){Object.defineProperty(e,"toString",{value:t})}function zo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw zo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Ia=new Map,fl=new Map,Ms=1,ua=function(e){if(Ia.has(e))return Ia.get(e);for(;fl.has(Ms);)Ms++;var t=Ms++;return Ia.set(e,t),fl.set(t,e),t},Xw=function(e,t){Ia.set(e,t),fl.set(t,e)},Jw="style[".concat(ui,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),Zw=new RegExp("^".concat(ui,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qw=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},e2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(Zw);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Xw(c,u),qw(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function t2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ui,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ui,"active"),r.setAttribute("data-styled-version","6.1.0");var a=t2();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},n2=function(){function e(t){this.element=gg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw zo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),r2=function(){function e(t){this.element=gg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),i2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Fp=Cf,o2={isServer:!Cf,useCSSOMInjection:!Iw},dl=function(){function e(t,n,r){t===void 0&&(t=ci),n===void 0&&(n={});var i=this;this.options=Ye(Ye({},o2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Cf&&Fp&&(Fp=!1,function(o){for(var a=document.querySelectorAll(Jw),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(ui)!=="active"&&(e2(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Pf(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(p){var h=function(m){return fl.get(m)}(p);if(h===void 0)return"continue";var x=o.names.get(h),y=a.getGroup(p);if(x===void 0||y.length===0)return"continue";var w="".concat(ui,".g").concat(p,'[id="').concat(h,'"]'),P="";x!==void 0&&x.forEach(function(m){m.length>0&&(P+="".concat(m,","))}),s+="".concat(y).concat(w,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return ua(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ye(Ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new i2(i):r?new n2(i):new r2(i)}(this.options),new Qw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ua(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ua(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ua(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),a2=/&/g,l2=/^\s*\/\/.*$/gm;function yg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yg(n.children,t)),n})}function s2(e){var t,n,r,i=e===void 0?ci:e,o=i.options,a=o===void 0?ci:o,l=i.plugins,s=l===void 0?Ul:l,u=function(h,x,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},c=s.slice();c.push(function(h){h.type===Dl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(a2,n).replace(r,u))}),a.prefix&&c.push(Aw),c.push(Rw);var p=function(h,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var P=h.replace(l2,""),m=_w(y||x?"".concat(y," ").concat(x," { ").concat(P," }"):P);a.namespace&&(m=yg(m,a.namespace));var f=[];return cl(m,Tw(c.concat(Ow(function(g){return f.push(g)})))),f};return p.hash=s.length?s.reduce(function(h,x){return x.name||zo(15),$r(h,x.name)},5381).toString():"",p}var u2=new dl,nc=s2(),xg=kt.createContext({shouldForwardProp:void 0,styleSheet:u2,stylis:nc});xg.Consumer;kt.createContext(void 0);function rc(){return N.useContext(xg)}var c2=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=nc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Pf(this,function(){throw zo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=nc),this.name+t.hash},e}(),f2=function(e){return e>="A"&&e<="Z"};function $p(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;f2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var wg=function(e){return e==null||e===!1||e===""},kg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!wg(o)&&(Array.isArray(o)&&o.isCss||fi(o)?r.push("".concat($p(i),":"),o,";"):Co(o)?r.push.apply(r,bo(bo(["".concat(i," {")],kg(o),!1),["}"],!1)):r.push("".concat($p(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Lw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zn(e,t,n,r){if(wg(e))return[];if(Ef(e))return[".".concat(e.styledComponentId)];if(fi(e)){if(!fi(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return zn(i,t,n,r)}var o;return e instanceof c2?n?(e.inject(n,r),[e.getName(r)]):[e]:Co(e)?kg(e):Array.isArray(e)?Array.prototype.concat.apply(Ul,e.map(function(a){return zn(a,t,n,r)})):[e.toString()]}function Sg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(fi(n)&&!Ef(n))return!1}return!0}var d2=fg("6.1.0"),p2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sg(t),this.componentId=n,this.baseHash=$r(d2,n),this.baseStyle=r,dl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=nr(i,this.staticRulesId);else{var o=ec(zn(this.rules,t,n,r)),a=qu($r(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=nr(i,a),this.staticRulesId=a}else{for(var s=$r(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var p=this.rules[c];if(typeof p=="string")u+=p;else if(p){var h=ec(zn(p,t,n,r));s=$r(s,h+c),u+=h}}if(u){var x=qu(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),i=nr(i,x)}}return i},e}(),jf=kt.createContext(void 0);jf.Consumer;var Ds={};function h2(e,t,n){var r=Ef(e),i=e,o=!Is(e),a=t.attrs,l=a===void 0?Ul:a,s=t.componentId,u=s===void 0?function(g,v){var E=typeof g!="string"?"sc":Lp(g);Ds[E]=(Ds[E]||0)+1;var j="".concat(E,"-").concat(dg("6.1.0"+E+Ds[E]));return v?"".concat(v,"-").concat(j):j}(t.displayName,t.parentComponentId):s,c=t.displayName;c===void 0&&function(g){return Is(g)?"styled.".concat(g):"Styled(".concat($w(g),")")}(e);var p=t.displayName&&t.componentId?"".concat(Lp(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;x=function(g,v){return y(g,v)&&w(g,v)}}else x=y}var P=new p2(n,p,r?i.componentStyle:void 0);function m(g,v){return function(E,j,b){var T=E.attrs,M=E.componentStyle,B=E.defaultProps,q=E.foldedComponentIds,Ne=E.styledComponentId,Ee=E.target,Nt=kt.useContext(jf),de=rc(),mt=E.shouldForwardProp||de.shouldForwardProp,Ae=function(ze,ke,vt){for(var Ge,et=Ye(Ye({},ke),{className:void 0,theme:vt}),wi=0;wi<ze.length;wi+=1){var Le=fi(Ge=ze[wi])?Ge(et):Ge;for(var tt in Le)et[tt]=tt==="className"?nr(et[tt],Le[tt]):tt==="style"?Ye(Ye({},et[tt]),Le[tt]):Le[tt]}return ke.className&&(et.className=nr(et.className,ke.className)),et}(T,j,ug(j,Nt,B)||ci),O=Ae.as||Ee,F={};for(var U in Ae)Ae[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?F.as=Ae.forwardedAs:mt&&!mt(U,O)||(F[U]=Ae[U]));var te=function(ze,ke){var vt=rc(),Ge=ze.generateAndInjectStyles(ke,vt.styleSheet,vt.stylis);return Ge}(M,Ae),ee=nr(q,Ne);return te&&(ee+=" "+te),Ae.className&&(ee+=" "+Ae.className),F[Is(O)&&!cg.has(O)?"class":"className"]=ee,F.ref=b,N.createElement(O,F)}(f,g,v)}var f=kt.forwardRef(m);return f.attrs=h,f.componentStyle=P,f.shouldForwardProp=x,f.foldedComponentIds=r?nr(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=p,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(v){for(var E=[],j=1;j<arguments.length;j++)E[j-1]=arguments[j];for(var b=0,T=E;b<T.length;b++)tc(v,T[b],!0);return v}({},i.defaultProps,g):g}}),Pf(f,function(){return".".concat(f.styledComponentId)}),o&&vg(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Up(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Bp=function(e){return Object.assign(e,{isCss:!0})};function bg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(fi(e)||Co(e)){var r=e;return Bp(zn(Up(Ul,bo([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?zn(i):Bp(zn(Up(i,t)))}function ic(e,t,n){if(n===void 0&&(n=ci),!t)throw zo(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,bg.apply(void 0,bo([i],o,!1)))};return r.attrs=function(i){return ic(e,t,Ye(Ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ic(e,t,Ye(Ye({},n),i))},r}var Cg=function(e){return ic(h2,e)},S=Cg;cg.forEach(function(e){S[e]=Cg(e)});var m2=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Sg(t),dl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ec(zn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&dl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function v2(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=bg.apply(void 0,bo([e],t,!1)),i="sc-global-".concat(dg(JSON.stringify(r))),o=new m2(r,i),a=function(s){var u=rc(),c=kt.useContext(jf),p=kt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(p,s,u.styleSheet,c,u.stylis),kt.useLayoutEffect(function(){if(!u.styleSheet.server)return l(p,s,u.styleSheet,c,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,s,u.styleSheet,c,u.stylis]),null};function l(s,u,c,p,h){if(o.isStatic)o.renderStyles(s,Mw,c,h);else{var x=Ye(Ye({},u),{theme:ug(u,p,a.defaultProps)});o.renderStyles(s,x,c,h)}}return kt.memo(a)}const g2=S.div`
margin-left: 29vw;
display: flex;
flex-direction: column;
justify-content: center;
//background-color: red;
align-items: center;
height: 100vh;
gap: 10px;
`,y2=S.form`
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
`,Hp=S.input`
width: 90%;
padding: 10px;
margin: 5px 0;
border: 1px solid var(--light-black);
border-radius: 50px;
align-items: center;
color: var(--white);
background-color:var(--light-black);
`,x2=S.button`
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
`,w2=S(Ml)`
font-size: 11px;
text-decoration: underline; 
padding: 10px;
color: var(--grey);
border: none;
border-radius: 3px;

cursor: pointer;
`,k2=S.div`
    display: flex
`,S2=S.div`
    font-weight: 800;
    font-size: 100px;
    color: var(--white);
`,b2=S.div`
    font-weight: 900;
    font-size: 100px;
  color: var(--blue);
`,Wp=S.label`
    margin-right: 21vw;
    font-size: 17px;
    color: var(--white);
`,C2=S.div`
  position: fixed;
  bottom: 100px;
  background-color: var(--blue); 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`,Qt=S.div`
    display: flex;
`;class _f{constructor(t,n){this.username=t,this.password=n,this.profilePicture=null,this.posts=[],this.biography="",this.education="",this.workStatus=""}setUsername(t){this.username=t}getUsername(){return this.username}setPassword(t){this.password=t}getPassword(){return this.password}setProfilePicture(t){this.profilePicture=t}getProfilePicture(){return this.profilePicture}addPost(t){this.posts.push(t)}getPosts(){return this.posts}setBiography(t){this.biography=t}getBiography(){return this.biography}setWorkStatus(t){this.workStatus=t}getWorkStatus(){return this.workStatus}}const Bl="/CodeConnect/assets/MainUserPfp-1324bd9a.png",Eg="/CodeConnect/assets/profile3-65bbbce1.jpg",kr="/CodeConnect/assets/userPfp3-ca280f4a.png";class Nf{constructor(t,n,r,i,o,a){this.author=t,this.title=n,this.content=r,this.topic=i,this.timeStamp=o,this.id=a,this.likes=0,this.comments=[]}like(){this.likes++}unlike(){this.likes--}addComment(t){this.comments.push(t)}getPostInformation(){return{author:this.author,title:this.title,content:this.content,topic:this.topic,timeStamp:this.timeStamp,id:this.id,likes:this.likes,comments:this.comments}}}const Jr=[],Hl=new _f("PixelPioneer","123");Hl.setProfilePicture(Bl);const Wl=new _f("madscientist","password");Wl.setProfilePicture(Eg);const Vl=new _f("supasonic","password");Vl.setProfilePicture(kr);Jr.push(Hl);Jr.push(Wl);Jr.push(Vl);const Sr=[],Rf=new Nf(Hl,"Learning React","I am learning React for a school project, what are the best resources to learn from?","React","12 minutes ago",Sr.length);Sr.push(Rf);Hl.addPost(Rf);Rf.likes=1;const Tf=new Nf(Wl,"Growtopia - My new game!","I've been developing my farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!","Game Development","1 hour ago",Sr.length);Sr.push(Tf);Wl.addPost(Tf);Tf.likes=93;const Of=new Nf(Vl,"Internship Help","I'm in my third year of university and I'm want to start applying to internships. I've never had an interview before and I was wondering what the process is normally like?","Career","2 hours ago",Sr.length);Sr.push(Of);Vl.addPost(Of);Of.likes=18;function E2(e,t){for(let n=0;n<Jr.length;n++)if(Jr[n].getUsername()===e&&Jr[n].getPassword()===t)return!0;return!1}const P2={login:async(e,t)=>E2(e,t)?{success:!0,user:{username:e}}:{success:!1,error:"Invalid credentials"}};function j2(){const e=pn(),[t,n]=N.useState(""),[r,i]=N.useState(""),[o,a]=N.useState(""),l=async()=>{try{const s=await P2.login(t,r);s.success?(console.log("Login successful:",s.user),e("/CodeConnect/home")):a(s.error)}catch(s){console.error("Login error:",s),a("Unknown error has occured. Please try again.")}};return d.jsx(Qt,{children:d.jsxs(g2,{children:[d.jsxs(k2,{children:[d.jsx(S2,{children:"Code"}),d.jsx(b2,{children:"Connect"})]}),d.jsxs(y2,{children:[d.jsx(Wp,{children:"Username:"}),d.jsx(Hp,{type:"text",id:"username",placeholder:"Username",value:t,onChange:s=>n(s.target.value)}),d.jsx(Wp,{children:"Password:"}),d.jsx(Hp,{type:"password",id:"password",placeholder:"Password",value:r,onChange:s=>i(s.target.value)}),d.jsx(x2,{type:"button",onClick:l,children:"Login"}),o&&d.jsx("div",{style:{color:"red"},children:o}),d.jsx(w2,{to:"/CodeConnect/guest-home",children:"Continue As Guest"})]}),d.jsx(C2,{children:"Create Account"})]})})}function _2(){return d.jsx(j2,{})}function Vp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vp(Object(n),!0).forEach(function(r){Oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pl(e){"@babel/helpers - typeof";return pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pl(e)}function N2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R2(e,t,n){return t&&Yp(e.prototype,t),n&&Yp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Af(e,t){return O2(e)||L2(e,t)||Pg(e,t)||M2()}function Fo(e){return T2(e)||A2(e)||Pg(e)||I2()}function T2(e){if(Array.isArray(e))return oc(e)}function O2(e){if(Array.isArray(e))return e}function A2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(s){o=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Pg(e,t){if(e){if(typeof e=="string")return oc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oc(e,t)}}function oc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Kp=function(){},Lf={},jg={},_g=null,Ng={mark:Kp,measure:Kp};try{typeof window<"u"&&(Lf=window),typeof document<"u"&&(jg=document),typeof MutationObserver<"u"&&(_g=MutationObserver),typeof performance<"u"&&(Ng=performance)}catch{}var D2=Lf.navigator||{},Gp=D2.userAgent,Qp=Gp===void 0?"":Gp,Bn=Lf,fe=jg,Xp=_g,ca=Ng;Bn.document;var hn=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",Rg=~Qp.indexOf("MSIE")||~Qp.indexOf("Trident/"),fa,da,pa,ha,ma,sn="___FONT_AWESOME___",ac=16,Tg="fa",Og="svg-inline--fa",mr="data-fa-i2svg",lc="data-fa-pseudo-element",z2="data-fa-pseudo-element-pending",If="data-prefix",Mf="data-icon",Jp="fontawesome-i2svg",F2="async",$2=["HTML","HEAD","STYLE","SCRIPT"],Ag=function(){try{return!0}catch{return!1}}(),ue="classic",we="sharp",Df=[ue,we];function $o(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ue]}})}var Eo=$o((fa={},Oe(fa,ue,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Oe(fa,we,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),fa)),Po=$o((da={},Oe(da,ue,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Oe(da,we,{solid:"fass",regular:"fasr",light:"fasl"}),da)),jo=$o((pa={},Oe(pa,ue,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Oe(pa,we,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),pa)),U2=$o((ha={},Oe(ha,ue,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Oe(ha,we,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ha)),B2=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Lg="fa-layers-text",H2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,W2=$o((ma={},Oe(ma,ue,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Oe(ma,we,{900:"fass",400:"fasr",300:"fasl"}),ma)),Ig=[1,2,3,4,5,6,7,8,9,10],V2=Ig.concat([11,12,13,14,15,16,17,18,19,20]),Y2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_o=new Set;Object.keys(Po[ue]).map(_o.add.bind(_o));Object.keys(Po[we]).map(_o.add.bind(_o));var K2=[].concat(Df,Fo(_o),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rr.GROUP,rr.SWAP_OPACITY,rr.PRIMARY,rr.SECONDARY]).concat(Ig.map(function(e){return"".concat(e,"x")})).concat(V2.map(function(e){return"w-".concat(e)})),to=Bn.FontAwesomeConfig||{};function G2(e){var t=fe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Q2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(fe&&typeof fe.querySelector=="function"){var X2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];X2.forEach(function(e){var t=Af(e,2),n=t[0],r=t[1],i=Q2(G2(n));i!=null&&(to[r]=i)})}var Mg={styleDefault:"solid",familyDefault:"classic",cssPrefix:Tg,replacementClass:Og,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};to.familyPrefix&&(to.cssPrefix=to.familyPrefix);var di=L(L({},Mg),to);di.autoReplaceSvg||(di.observeMutations=!1);var D={};Object.keys(Mg).forEach(function(e){Object.defineProperty(D,e,{enumerable:!0,set:function(n){di[e]=n,no.forEach(function(r){return r(D)})},get:function(){return di[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){di.cssPrefix=t,no.forEach(function(n){return n(D)})},get:function(){return di.cssPrefix}});Bn.FontAwesomeConfig=D;var no=[];function J2(e){return no.push(e),function(){no.splice(no.indexOf(e),1)}}var wn=ac,Yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Z2(e){if(!(!e||!hn)){var t=fe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return fe.head.insertBefore(t,r),e}}var q2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function No(){for(var e=12,t="";e-- >0;)t+=q2[Math.random()*62|0];return t}function gi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function zf(e){return e.classList?gi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Dg(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ek(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Dg(e[n]),'" ')},"").trim()}function Yl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ff(e){return e.size!==Yt.size||e.x!==Yt.x||e.y!==Yt.y||e.rotate!==Yt.rotate||e.flipX||e.flipY}function tk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(a," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function nk(e){var t=e.transform,n=e.width,r=n===void 0?ac:n,i=e.height,o=i===void 0?ac:i,a=e.startCentered,l=a===void 0?!1:a,s="";return l&&Rg?s+="translate(".concat(t.x/wn-r/2,"em, ").concat(t.y/wn-o/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/wn,"em), calc(-50% + ").concat(t.y/wn,"em)) "):s+="translate(".concat(t.x/wn,"em, ").concat(t.y/wn,"em) "),s+="scale(".concat(t.size/wn*(t.flipX?-1:1),", ").concat(t.size/wn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var rk=`:root, :host {
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
}`;function zg(){var e=Tg,t=Og,n=D.cssPrefix,r=D.replacementClass,i=rk;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var Zp=!1;function zs(){D.autoAddCss&&!Zp&&(Z2(zg()),Zp=!0)}var ik={mixout:function(){return{dom:{css:zg,insertCss:zs}}},hooks:function(){return{beforeDOMElementCreation:function(){zs()},beforeI2svg:function(){zs()}}}},un=Bn||{};un[sn]||(un[sn]={});un[sn].styles||(un[sn].styles={});un[sn].hooks||(un[sn].hooks={});un[sn].shims||(un[sn].shims=[]);var Mt=un[sn],Fg=[],ok=function e(){fe.removeEventListener("DOMContentLoaded",e),hl=1,Fg.map(function(t){return t()})},hl=!1;hn&&(hl=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),hl||fe.addEventListener("DOMContentLoaded",ok));function ak(e){hn&&(hl?setTimeout(e,0):Fg.push(e))}function Uo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Dg(e):"<".concat(t," ").concat(ek(r),">").concat(o.map(Uo).join(""),"</").concat(t,">")}function qp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var lk=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},Fs=function(t,n,r,i){var o=Object.keys(t),a=o.length,l=i!==void 0?lk(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[o[0]]):(s=0,c=r);s<a;s++)u=o[s],c=l(c,t[u],u,t);return c};function sk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function sc(e){var t=sk(e);return t.length===1?t[0].toString(16):null}function uk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function eh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function uc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=eh(t);typeof Mt.hooks.addPack=="function"&&!i?Mt.hooks.addPack(e,eh(t)):Mt.styles[e]=L(L({},Mt.styles[e]||{}),o),e==="fas"&&uc("fa",t)}var va,ga,ya,Ur=Mt.styles,ck=Mt.shims,fk=(va={},Oe(va,ue,Object.values(jo[ue])),Oe(va,we,Object.values(jo[we])),va),$f=null,$g={},Ug={},Bg={},Hg={},Wg={},dk=(ga={},Oe(ga,ue,Object.keys(Eo[ue])),Oe(ga,we,Object.keys(Eo[we])),ga);function pk(e){return~K2.indexOf(e)}function hk(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!pk(i)?i:null}var Vg=function(){var t=function(o){return Fs(Ur,function(a,l,s){return a[s]=Fs(l,o,{}),a},{})};$g=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var l=o[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=a})}return i}),Ug=t(function(i,o,a){if(i[a]=a,o[2]){var l=o[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=a})}return i}),Wg=t(function(i,o,a){var l=o[2];return i[a]=a,l.forEach(function(s){i[s]=a}),i});var n="far"in Ur||D.autoFetchSvg,r=Fs(ck,function(i,o){var a=o[0],l=o[1],s=o[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(i.names[a]={prefix:l,iconName:s}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Bg=r.names,Hg=r.unicodes,$f=Kl(D.styleDefault,{family:D.familyDefault})};J2(function(e){$f=Kl(e.styleDefault,{family:D.familyDefault})});Vg();function Uf(e,t){return($g[e]||{})[t]}function mk(e,t){return(Ug[e]||{})[t]}function ir(e,t){return(Wg[e]||{})[t]}function Yg(e){return Bg[e]||{prefix:null,iconName:null}}function vk(e){var t=Hg[e],n=Uf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Hn(){return $f}var Bf=function(){return{prefix:null,iconName:null,rest:[]}};function Kl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ue:n,i=Eo[r][e],o=Po[r][e]||Po[r][i],a=e in Mt.styles?e:null;return o||a||null}var th=(ya={},Oe(ya,ue,Object.keys(jo[ue])),Oe(ya,we,Object.keys(jo[we])),ya);function Gl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},Oe(t,ue,"".concat(D.cssPrefix,"-").concat(ue)),Oe(t,we,"".concat(D.cssPrefix,"-").concat(we)),t),a=null,l=ue;(e.includes(o[ue])||e.some(function(u){return th[ue].includes(u)}))&&(l=ue),(e.includes(o[we])||e.some(function(u){return th[we].includes(u)}))&&(l=we);var s=e.reduce(function(u,c){var p=hk(D.cssPrefix,c);if(Ur[c]?(c=fk[l].includes(c)?U2[l][c]:c,a=c,u.prefix=c):dk[l].indexOf(c)>-1?(a=c,u.prefix=Kl(c,{family:l})):p?u.iconName=p:c!==D.replacementClass&&c!==o[ue]&&c!==o[we]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=a==="fa"?Yg(u.iconName):{},x=ir(u.prefix,u.iconName);h.prefix&&(a=null),u.iconName=h.iconName||x||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Ur.far&&Ur.fas&&!D.autoFetchSvg&&(u.prefix="fas")}return u},Bf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===we&&(Ur.fass||D.autoFetchSvg)&&(s.prefix="fass",s.iconName=ir(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=Hn()||"fas"),s}var gk=function(){function e(){N2(this,e),this.definitions={}}return R2(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=L(L({},n.definitions[l]||{}),a[l]),uc(l,a[l]);var s=jo[ue][l];s&&uc(s,a[l]),Vg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],l=a.prefix,s=a.iconName,u=a.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(p){typeof p=="string"&&(n[l][p]=u)}),n[l][s]=u}),n}}]),e}(),nh=[],Br={},Zr={},yk=Object.keys(Zr);function xk(e,t){var n=t.mixoutsTo;return nh=e,Br={},Object.keys(Zr).forEach(function(r){yk.indexOf(r)===-1&&delete Zr[r]}),nh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),pl(i[a])==="object"&&Object.keys(i[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=i[a][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){Br[a]||(Br[a]=[]),Br[a].push(o[a])})}r.provides&&r.provides(Zr)}),n}function cc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Br[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Br[e]||[];i.forEach(function(o){o.apply(null,n)})}function cn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Zr[e]?Zr[e].apply(null,t):void 0}function fc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Hn();if(t)return t=ir(n,t)||t,qp(Kg.definitions,n,t)||qp(Mt.styles,n,t)}var Kg=new gk,wk=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,vr("noAuto")},kk={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return hn?(vr("beforeI2svg",t),cn("pseudoElements2svg",t),cn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,ak(function(){bk({autoReplaceSvgRoot:n}),vr("watch",t)})}},Sk={icon:function(t){if(t===null)return null;if(pl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ir(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Kl(t[0]);return{prefix:r,iconName:ir(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(B2))){var i=Gl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Hn(),iconName:ir(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Hn();return{prefix:o,iconName:ir(o,t)||t}}}},ht={noAuto:wk,config:D,dom:kk,parse:Sk,library:Kg,findIconDefinition:fc,toHtml:Uo},bk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(Mt.styles).length>0||D.autoFetchSvg)&&hn&&D.autoReplaceSvg&&ht.dom.i2svg({node:r})};function Ql(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Uo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(hn){var r=fe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ck(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(Ff(a)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=Yl(L(L({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Ek(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:a}),children:r}]}]}function Hf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,p=e.extra,h=e.watchable,x=h===void 0?!1:h,y=r.found?r:n,w=y.width,P=y.height,m=i==="fak",f=[D.replacementClass,o?"".concat(D.cssPrefix,"-").concat(o):""].filter(function(M){return p.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(p.classes).join(" "),g={children:[],attributes:L(L({},p.attributes),{},{"data-prefix":i,"data-icon":o,class:f,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(P)})},v=m&&!~p.classes.indexOf("fa-fw")?{width:"".concat(w/P*16*.0625,"em")}:{};x&&(g.attributes[mr]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||No())},children:[s]}),delete g.attributes.title);var E=L(L({},g),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:l,styles:L(L({},v),p.styles)}),j=r.found&&n.found?cn("generateAbstractMask",E)||{children:[],attributes:{}}:cn("generateAbstractIcon",E)||{children:[],attributes:{}},b=j.children,T=j.attributes;return E.children=b,E.attributes=T,l?Ek(E):Ck(E)}function rh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,l=e.watchable,s=l===void 0?!1:l,u=L(L(L({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});s&&(u[mr]="");var c=L({},a.styles);Ff(i)&&(c.transform=nk({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var p=Yl(c);p.length>0&&(u.style=p);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function Pk(e){var t=e.content,n=e.title,r=e.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Yl(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var $s=Mt.styles;function dc(e){var t=e[0],n=e[1],r=e.slice(4),i=Af(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(rr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(rr.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(rr.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var jk={found:!1,width:512,height:512};function _k(e,t){!Ag&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function pc(e,t){var n=t;return t==="fa"&&D.styleDefault!==null&&(t=Hn()),new Promise(function(r,i){if(cn("missingIconAbstract"),n==="fa"){var o=Yg(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&$s[t]&&$s[t][e]){var a=$s[t][e];return r(dc(a))}_k(e,t),r(L(L({},jk),{},{icon:D.showMissingIcons&&e?cn("missingIconAbstract")||{}:{}}))})}var ih=function(){},hc=D.measurePerformance&&ca&&ca.mark&&ca.measure?ca:{mark:ih,measure:ih},Bi='FA "6.4.2"',Nk=function(t){return hc.mark("".concat(Bi," ").concat(t," begins")),function(){return Gg(t)}},Gg=function(t){hc.mark("".concat(Bi," ").concat(t," ends")),hc.measure("".concat(Bi," ").concat(t),"".concat(Bi," ").concat(t," begins"),"".concat(Bi," ").concat(t," ends"))},Wf={begin:Nk,end:Gg},Ma=function(){};function oh(e){var t=e.getAttribute?e.getAttribute(mr):null;return typeof t=="string"}function Rk(e){var t=e.getAttribute?e.getAttribute(If):null,n=e.getAttribute?e.getAttribute(Mf):null;return t&&n}function Tk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function Ok(){if(D.autoReplaceSvg===!0)return Da.replace;var e=Da[D.autoReplaceSvg];return e||Da.replace}function Ak(e){return fe.createElementNS("http://www.w3.org/2000/svg",e)}function Lk(e){return fe.createElement(e)}function Qg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ak:Lk:n;if(typeof e=="string")return fe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(Qg(a,{ceFn:r}))}),i}function Ik(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Da={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Qg(i),n)}),n.getAttribute(mr)===null&&D.keepOriginalSource){var r=fe.createComment(Ik(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~zf(n).indexOf(D.replacementClass))return Da.replace(t);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,s){return s===D.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(l){return Uo(l)}).join(`
`);n.setAttribute(mr,""),n.innerHTML=a}};function ah(e){e()}function Xg(e,t){var n=typeof t=="function"?t:Ma;if(e.length===0)n();else{var r=ah;D.mutateApproach===F2&&(r=Bn.requestAnimationFrame||ah),r(function(){var i=Ok(),o=Wf.begin("mutate");e.map(i),o(),n()})}}var Vf=!1;function Jg(){Vf=!0}function mc(){Vf=!1}var ml=null;function lh(e){if(Xp&&D.observeMutations){var t=e.treeCallback,n=t===void 0?Ma:t,r=e.nodeCallback,i=r===void 0?Ma:r,o=e.pseudoElementsCallback,a=o===void 0?Ma:o,l=e.observeMutationsRoot,s=l===void 0?fe:l;ml=new Xp(function(u){if(!Vf){var c=Hn();gi(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!oh(p.addedNodes[0])&&(D.searchPseudoElements&&a(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&D.searchPseudoElements&&a(p.target.parentNode),p.type==="attributes"&&oh(p.target)&&~Y2.indexOf(p.attributeName))if(p.attributeName==="class"&&Rk(p.target)){var h=Gl(zf(p.target)),x=h.prefix,y=h.iconName;p.target.setAttribute(If,x||c),y&&p.target.setAttribute(Mf,y)}else Tk(p.target)&&i(p.target)})}}),hn&&ml.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Mk(){ml&&ml.disconnect()}function Dk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function zk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Gl(zf(e));return i.prefix||(i.prefix=Hn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=mk(i.prefix,e.innerText)||Uf(i.prefix,sc(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Fk(e){var t=gi(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||No()):(t["aria-hidden"]="true",t.focusable="false")),t}function $k(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zk(e),r=n.iconName,i=n.prefix,o=n.rest,a=Fk(e),l=cc("parseNodeAttributes",{},e),s=t.styleParser?Dk(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:a}},l)}var Uk=Mt.styles;function Zg(e){var t=D.autoReplaceSvg==="nest"?sh(e,{styleParser:!1}):sh(e);return~t.extra.classes.indexOf(Lg)?cn("generateLayersText",e,t):cn("generateSvgReplacementMutation",e,t)}var Wn=new Set;Df.map(function(e){Wn.add("fa-".concat(e))});Object.keys(Eo[ue]).map(Wn.add.bind(Wn));Object.keys(Eo[we]).map(Wn.add.bind(Wn));Wn=Fo(Wn);function uh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!hn)return Promise.resolve();var n=fe.documentElement.classList,r=function(p){return n.add("".concat(Jp,"-").concat(p))},i=function(p){return n.remove("".concat(Jp,"-").concat(p))},o=D.autoFetchSvg?Wn:Df.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Uk));o.includes("fa")||o.push("fa");var a=[".".concat(Lg,":not([").concat(mr,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(mr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=gi(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Wf.begin("onTree"),u=l.reduce(function(c,p){try{var h=Zg(p);h&&c.push(h)}catch(x){Ag||x.name==="MissingIcon"&&console.error(x)}return c},[]);return new Promise(function(c,p){Promise.all(u).then(function(h){Xg(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(h){s(),p(h)})})}function Bk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zg(e).then(function(n){n&&Xg([n],t)})}function Hk(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:fc(i||{})),e(r,L(L({},n),{},{mask:i}))}}var Wk=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Yt:r,o=n.symbol,a=o===void 0?!1:o,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,p=n.title,h=p===void 0?null:p,x=n.titleId,y=x===void 0?null:x,w=n.classes,P=w===void 0?[]:w,m=n.attributes,f=m===void 0?{}:m,g=n.styles,v=g===void 0?{}:g;if(t){var E=t.prefix,j=t.iconName,b=t.icon;return Ql(L({type:"icon"},t),function(){return vr("beforeDOMElementCreation",{iconDefinition:t,params:n}),D.autoA11y&&(h?f["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(y||No()):(f["aria-hidden"]="true",f.focusable="false")),Hf({icons:{main:dc(b),mask:s?dc(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:j,transform:L(L({},Yt),i),symbol:a,title:h,maskId:c,titleId:y,extra:{attributes:f,styles:v,classes:P}})})}},Vk={mixout:function(){return{icon:Hk(Wk)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=uh,n.nodeCallback=Bk,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,o=n.callback,a=o===void 0?function(){}:o;return uh(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,p=r.maskId,h=r.extra;return new Promise(function(x,y){Promise.all([pc(i,l),c.iconName?pc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var P=Af(w,2),m=P[0],f=P[1];x([n,Hf({icons:{main:m,mask:f},prefix:l,iconName:i,transform:s,symbol:u,maskId:p,title:o,titleId:a,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,l=n.styles,s=Yl(l);s.length>0&&(i.style=s);var u;return Ff(a)&&(u=cn("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},Yk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Ql({type:"layer"},function(){vr("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(s){a=a.concat(s.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(Fo(o)).join(" ")},children:a}]})}}}},Kk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,l=a===void 0?[]:a,s=r.attributes,u=s===void 0?{}:s,c=r.styles,p=c===void 0?{}:c;return Ql({type:"counter",content:n},function(){return vr("beforeDOMElementCreation",{content:n,params:r}),Pk({content:n.toString(),title:o,extra:{attributes:u,styles:p,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(Fo(l))}})})}}}},Gk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Yt:i,a=r.title,l=a===void 0?null:a,s=r.classes,u=s===void 0?[]:s,c=r.attributes,p=c===void 0?{}:c,h=r.styles,x=h===void 0?{}:h;return Ql({type:"text",content:n},function(){return vr("beforeDOMElementCreation",{content:n,params:r}),rh({content:n,transform:L(L({},Yt),o),title:l,extra:{attributes:p,styles:x,classes:["".concat(D.cssPrefix,"-layers-text")].concat(Fo(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,l=null,s=null;if(Rg){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return D.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,rh({content:n.innerHTML,width:l,height:s,transform:o,title:i,extra:a,watchable:!0})])}}},Qk=new RegExp('"',"ug"),ch=[1105920,1112319];function Xk(e){var t=e.replace(Qk,""),n=uk(t,0),r=n>=ch[0]&&n<=ch[1],i=t.length===2?t[0]===t[1]:!1;return{value:sc(i?t[0]:t),isSecondary:r||i}}function fh(e,t){var n="".concat(z2).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=gi(e.children),a=o.filter(function(b){return b.getAttribute(lc)===t})[0],l=Bn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(H2),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(a&&!s)return e.removeChild(a),r();if(s&&c!=="none"&&c!==""){var p=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?we:ue,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Po[h][s[2].toLowerCase()]:W2[h][u],y=Xk(p),w=y.value,P=y.isSecondary,m=s[0].startsWith("FontAwesome"),f=Uf(x,w),g=f;if(m){var v=vk(w);v.iconName&&v.prefix&&(f=v.iconName,x=v.prefix)}if(f&&!P&&(!a||a.getAttribute(If)!==x||a.getAttribute(Mf)!==g)){e.setAttribute(n,g),a&&e.removeChild(a);var E=$k(),j=E.extra;j.attributes[lc]=t,pc(f,x).then(function(b){var T=Hf(L(L({},E),{},{icons:{main:b,mask:Bf()},prefix:x,iconName:g,extra:j,watchable:!0})),M=fe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=T.map(function(B){return Uo(B)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Jk(e){return Promise.all([fh(e,"::before"),fh(e,"::after")])}function Zk(e){return e.parentNode!==document.head&&!~$2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(lc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function dh(e){if(hn)return new Promise(function(t,n){var r=gi(e.querySelectorAll("*")).filter(Zk).map(Jk),i=Wf.begin("searchPseudoElements");Jg(),Promise.all(r).then(function(){i(),mc(),t()}).catch(function(){i(),mc(),n()})})}var qk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=dh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;D.searchPseudoElements&&dh(i)}}},ph=!1,eS={mixout:function(){return{dom:{unwatch:function(){Jg(),ph=!0}}}},hooks:function(){return{bootstrap:function(){lh(cc("mutationObserverCallbacks",{}))},noAuto:function(){Mk()},watch:function(n){var r=n.observeMutationsRoot;ph?mc():lh(cc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},hh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],l=o.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},tS={mixout:function(){return{parse:{transform:function(n){return hh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=hh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(s," ").concat(u," ").concat(c)},h={transform:"translate(".concat(a/2*-1," -256)")},x={outer:l,inner:p,path:h};return{tag:"g",attributes:L({},x.outer),children:[{tag:"g",attributes:L({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),x.path)}]}]}}}},Us={x:0,y:0,width:"100%",height:"100%"};function mh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nS(e){return e.tag==="g"?e.children:[e]}var rS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Gl(i.split(" ").map(function(a){return a.trim()})):Bf();return o.prefix||(o.prefix=Hn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,l=n.maskId,s=n.transform,u=o.width,c=o.icon,p=a.width,h=a.icon,x=tk({transform:s,containerWidth:p,iconWidth:u}),y={tag:"rect",attributes:L(L({},Us),{},{fill:"white"})},w=c.children?{children:c.children.map(mh)}:{},P={tag:"g",attributes:L({},x.inner),children:[mh(L({tag:c.tag,attributes:L(L({},c.attributes),x.path)},w))]},m={tag:"g",attributes:L({},x.outer),children:[P]},f="mask-".concat(l||No()),g="clip-".concat(l||No()),v={tag:"mask",attributes:L(L({},Us),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:nS(h)},v]};return r.push(E,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(f,")")},Us)}),{children:r,attributes:i}}}},iS={provides:function(t){var n=!1;Bn.matchMedia&&(n=Bn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=L(L({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:L(L({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},oS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},aS=[ik,Vk,Yk,Kk,Gk,qk,eS,tS,rS,iS,oS];xk(aS,{mixoutsTo:ht});ht.noAuto;ht.config;ht.library;ht.dom;var vc=ht.parse;ht.findIconDefinition;ht.toHtml;var lS=ht.icon;ht.layer;ht.text;ht.counter;var qg={exports:{}},sS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",uS=sS,cS=uS;function e0(){}function t0(){}t0.resetWarningCache=e0;var fS=function(){function e(r,i,o,a,l,s){if(s!==cS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:t0,resetWarningCache:e0};return n.PropTypes=n,n};qg.exports=fS();var dS=qg.exports;const V=wc(dS);function vh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Nn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vh(Object(n),!0).forEach(function(r){Hr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vl(e){"@babel/helpers - typeof";return vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vl(e)}function Hr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hS(e,t){if(e==null)return{};var n=pS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gc(e){return mS(e)||vS(e)||gS(e)||yS()}function mS(e){if(Array.isArray(e))return yc(e)}function vS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gS(e,t){if(e){if(typeof e=="string")return yc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yc(e,t)}}function yc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xS(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,p=e.pulse,h=e.fixedWidth,x=e.inverse,y=e.border,w=e.listItem,P=e.flip,m=e.size,f=e.rotation,g=e.pull,v=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":h,"fa-inverse":x,"fa-border":y,"fa-li":w,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},Hr(t,"fa-".concat(m),typeof m<"u"&&m!==null),Hr(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Hr(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Hr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map(function(E){return v[E]?E:null}).filter(function(E){return E})}function wS(e){return e=e-0,e===e}function n0(e){return wS(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var kS=["style"];function SS(e){return e.charAt(0).toUpperCase()+e.slice(1)}function bS(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=n0(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[SS(i)]=o:t[i]=o,t},{})}function r0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return r0(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=bS(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[n0(u)]=c}return s},{attrs:{}}),o=n.style,a=o===void 0?{}:o,l=hS(n,kS);return i.attrs.style=Nn(Nn({},i.attrs.style),a),e.apply(void 0,[t.tag,Nn(Nn({},i.attrs),l)].concat(gc(r)))}var i0=!1;try{i0=!0}catch{}function CS(){if(!i0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function gh(e){if(e&&vl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(vc.icon)return vc.icon(e);if(e===null)return null;if(e&&vl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Bs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Hr({},e,t):{}}var mn=kt.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,l=e.titleId,s=e.maskId,u=gh(n),c=Bs("classes",[].concat(gc(xS(e)),gc(o.split(" ")))),p=Bs("transform",typeof e.transform=="string"?vc.transform(e.transform):e.transform),h=Bs("mask",gh(r)),x=lS(u,Nn(Nn(Nn(Nn({},c),p),h),{},{symbol:i,title:a,titleId:l,maskId:s}));if(!x)return CS("Could not find icon",u),null;var y=x.abstract,w={ref:t};return Object.keys(e).forEach(function(P){mn.defaultProps.hasOwnProperty(P)||(w[P]=e[P])}),ES(y[0],w)});mn.displayName="FontAwesomeIcon";mn.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};mn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ES=r0.bind(null,kt.createElement);const PS=S.div`
    padding-top: 11px;
    width: 120px;
    position: relative;
`,jS=S.div`
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
`,_S=S.span`
    font-size: 16px;
`,NS=S(mn)`
    font-size: 15px;
    transition: 0.4s;

    &:hover {
        color: var(--blue);
    }

    &.active {
        transform: rotate(180deg);
    }
`,RS=S.div`
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
`;var TS={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},OS={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},AS={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]};function Bo({setStatus:e}){const[t,n]=N.useState(!1),[r,i]=N.useState("Sort");return N.useEffect(()=>{e(r)}),d.jsxs(PS,{onClick:()=>{n(!t)},children:[d.jsxs(jS,{children:[d.jsx(_S,{children:r}),d.jsx(NS,{icon:AS,className:`${t?"active":"inactive"}`})]}),d.jsxs(RS,{className:`${t?"active":"inactive"}`,children:[d.jsx("div",{onClick:()=>{i("Top")},children:"Top"}),d.jsx("div",{onClick:()=>{i("Recent")},children:"Recent"})]})]})}Bo.propTypes={setStatus:V.func};const LS=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 100vh;
    position: fixed;
    color: var(--grey);
    background-color: var(--black);
    box-shadow: 1px 0 15px 2px var(--shadow);
`,IS=S.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    width: 70%;
    height: 80%;
    /* background-color: green; */
`,MS=S.div`
    font-size: 35px;
    font-weight: 600;
`,DS=S.div`
    color: var(--white);
`,zS=S.div`
    color: var(--blue);
    padding-left: 25px;
`,FS=S.div`
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
`,xa=S(fw)`
    color: var(--grey);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    
    &:hover {
        color: var(--white);
    }
`,$S=S.div`
    background-color: var(--blue);
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: var(--white);
`;function vn(){return d.jsx(LS,{children:d.jsxs(IS,{children:[d.jsxs(MS,{children:[d.jsx(DS,{children:"Code"}),d.jsx(zS,{children:"Connect"})]}),d.jsxs(FS,{children:[d.jsx(xa,{to:"/CodeConnect/home",children:"Home"}),d.jsx(xa,{to:"/CodeConnect/explore",children:"Explore"}),d.jsx(xa,{to:"/CodeConnect/direct-messages",children:"Direct Messages"}),d.jsx(xa,{to:"/CodeConnect/account",children:"Profile"}),d.jsx($S,{children:"Post"})]})]})})}const US=S.div`
    display: flex;
    gap: 20px;
    align-items: center;
`,BS=S.input`
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
`;S(mn)`
    color: var(--white);
`;const HS=S.button`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0px;
    background-color: var(--blue);
`,WS=S(mn)`
    font-size: 17px;
    color: var(--white);
`;function VS(){const[e,t]=N.useState("Recents");return d.jsxs(US,{children:[d.jsx(Bo,{setStatus:t}),d.jsx(BS,{input:"text",placeholder:"Search"}),d.jsx(HS,{children:d.jsx(WS,{icon:OS})})]})}const YS=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
    width: 80vw;
    height: 100vh;
    background-color: var(--black);
`,KS=S.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 5vh 0;
    width: 80%;
    height: 80%;
`;S.div`
    width: 88%;
    display: flex;
    justify-content: flex-end;
`;const GS=S.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 80%;
`,yh=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
`,QS=S.div`
    display: flex;
    gap: 10px;
    
    div {
        color: var(--grey);
    }
`,XS=S.input`

`,JS=S(mn)`

`,ZS=S.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;
`,qS=S.div`
    display: flex;
    margin: 0 auto;
    overflow-x: auto;
    width: 950px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
`,Hs=S.div`
    width: 100%;
    position: relative;
    text-align: center;
    color: var(--white);
`,Ws=S.img`
    flex: 3;
    max-width: 950px;
    scroll-snap-align: start;
    filter: brightness(50%);
    border-radius: 10px;
`,Vs=S.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 600;
`,eb=S.div`
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
`,tb=S.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 950px;
    margin: 0 auto;
    padding-bottom: 10%;
`,gl=S.div`
    font-size: 40px;
    font-weight: 500;
    color: var(--white);
`,nb=S.div`
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
`;function nt({topicName:e}){return d.jsx(nb,{children:e})}nt.propTypes={topicName:V.string};const rb="/CodeConnect/assets/web-dev-0661792e.png",ib="/CodeConnect/assets/game-dev-bd8da6b7.png",ob="/CodeConnect/assets/programming-d8860b21.png";function ab(){return N.useState("Recent"),d.jsxs(Qt,{children:[d.jsx(vn,{}),d.jsx(YS,{children:d.jsxs(KS,{children:[d.jsx(VS,{}),d.jsxs(GS,{children:[d.jsx(yh,{children:d.jsx(gl,{children:d.jsxs("div",{children:[d.jsx(JS,{icon:TS})," Trending"]})})}),d.jsx(ZS,{children:d.jsxs(qS,{children:[d.jsxs(Hs,{id:"slide-1",children:[d.jsx(Ws,{src:rb}),d.jsx(Vs,{children:"Web Development"})]}),d.jsxs(Hs,{id:"slide-2",children:[d.jsx(Ws,{src:ib}),d.jsx(Vs,{children:"Game Development"})]}),d.jsxs(Hs,{id:"slide-3",children:[d.jsx(Ws,{src:ob}),d.jsx(Vs,{children:"Python"})]}),d.jsxs(eb,{children:[d.jsx("a",{href:"#slide-1"}),d.jsx("a",{href:"#slide-2"}),d.jsx("a",{href:"#slide-3"})]})]})}),d.jsxs(yh,{children:[d.jsx(gl,{children:"Topics"}),d.jsxs(QS,{children:[d.jsx("div",{children:"Select"}),d.jsx(XS,{type:"checkbox"})]})]}),d.jsxs(tb,{children:[d.jsx(nt,{topicName:"Web Development"}),d.jsx(nt,{topicName:"React"}),d.jsx(nt,{topicName:"Python"}),d.jsx(nt,{topicName:"Dynamic Programming"}),d.jsx(nt,{topicName:"JavaScript"}),d.jsx(nt,{topicName:"Full-Stack Development"}),d.jsx(nt,{topicName:"Data Structures"}),d.jsx(nt,{topicName:"Networks"}),d.jsx(nt,{topicName:"Game Development"}),d.jsx(nt,{topicName:"Cybersecurity"}),d.jsx(nt,{topicName:"HTML"}),d.jsx(nt,{topicName:"CSS"}),d.jsx(nt,{topicName:"Data Science"})]})]})]})})]})}const lb=S.div`
    width: 80vw;
    height: 100vh;  
    margin-left: 20vw;
    background-color: #242424;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`,xh=S.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
`,sb=S.div`
    display: flex;
    padding: 16px;
    align-self: stretch;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    gap: 10px;
`,ub=S.div`
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    overflow: hidden;
`;function cb({src:e,alt:t}){return d.jsx(ub,{children:d.jsx("img",{src:e,alt:t,style:{flex:1,width:"100%",height:"100%",resizeMode:"contain"}})})}const fb="/CodeConnect/assets/profile-pic-fc3f250c.jpg",wh=S.div`
    display: flex;
    width: 420px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`,db={fontSize:"17px",color:"white",textAlign:"center",fontWeight:"600",letterSpacing:"1.25px",lineHeigt:"normal"};function xc({text:e}){return d.jsx("p",{style:db,children:e})}const kh=S.div`
    background-color: #9190A2;
    border-radius: 6px;
    display: inline-flex;
    padding: 12px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`,Sh=S.div`
    color: white;
`,pb=S.div`
align-self: stretch;
`,hb={fontSize:"16px",color:"white",textAlign:"center",fontWeight:"400",letterSpacing:"1.25px",lineHeigt:"normal"};function mb({text:e}){return d.jsx("p",{style:hb,children:e})}const vb=S.div`
    display: flex;
    padding: 14px 0px 14px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-bottom: 0.25px solid #FFF;
    background: #121212;
`;function gb(){return d.jsxs(sb,{children:[d.jsx(cb,{src:fb,alt:"User Profile Picture"}),d.jsxs(wh,{children:[d.jsx(xc,{text:"PixelPioneer"}),d.jsx(xc,{text:"(She/Her)"})]}),d.jsxs(wh,{children:[d.jsx(kh,{children:d.jsx(Sh,{children:"Teacher"})}),d.jsx(kh,{children:d.jsx(Sh,{children:"Web Development, Full-Stack, +1 More"})})]}),d.jsx(pb,{children:d.jsx(mb,{text:"Oh wow this is my bio!!!"})})]})}const yb=S.div`
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    background: #363636;
`;function xb(){return d.jsxs(Qt,{children:[d.jsx(vn,{}),d.jsxs(lb,{children:[d.jsx(xh,{}),d.jsxs(yb,{children:[d.jsx(gb,{}),d.jsx(vb,{children:d.jsx(xc,{text:"Posts"})})]}),d.jsx(xh,{})]})]})}const wb=v2`
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
        --black: #121212;
        --light-black: #161616;
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
`,kb=S.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,Sb=S.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,bb=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,Cb=S.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,Eb=S.div`  
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
`,Pb=S.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 90%;
    height: 80%;
`;S.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;const jb=S.div`
    display: flex;
    justify-content: space-between;
`,_b=S.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,Nb=S.div`
    font-size: 30px;
`,Rb=S.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`,Tb=S.div`

`,Ob=S.div`
    font-size: 12px;
`,Ab=S.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Lb=S.div`
    font-size: 30px;
`,Ib=S.div`
    font-size: 15px;
    line-height: 20px;
    color: var(--grey);
`,Mb=S.div`
    display: flex;
`,Db=S.div`
    border-radius: 50px;
    background-color: var(--blue-low);
    height: 30px;
`,zb=S.div`
    padding: 0 10px;
    font-size: 12px;
    line-height: 30px;
    color: var(--light-blue);
`,Fb=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    color: var(--tan);
`,bh=S(mn)`

`,Ys=S.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--grey);
`;var $b={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]},Ub={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"]};function ro({information:e}){const[t,n]=N.useState(e.likes);return d.jsx(Eb,{children:d.jsxs(Pb,{children:[d.jsxs(jb,{children:[d.jsxs(_b,{children:[d.jsx(Rb,{src:e.author.getProfilePicture()}),d.jsx(Tb,{children:e.author.getUsername()}),d.jsx(Ob,{children:e.timestamp})]}),d.jsx(Nb,{children:e.reaction})]}),d.jsxs(Ab,{children:[d.jsx(Lb,{children:e.title}),d.jsx(Ib,{children:e.content})]}),d.jsx(Mb,{children:d.jsx(Db,{children:d.jsx(zb,{children:e.topic})})}),d.jsxs(Fb,{children:[d.jsxs(Ys,{children:[d.jsx("div",{onClick:()=>{e.like(),n(e.likes)},children:d.jsx(bh,{icon:$b})}),d.jsxs("div",{children:[t," likes"]})]}),d.jsxs(Ys,{children:[d.jsx(bh,{icon:Ub}),d.jsxs("div",{children:[e.comments.length," comments"]})]}),d.jsx(Ys,{children:". . ."})]})]})})}ro.propTypes={information:V.object};function Bb(){const[e,t]=N.useState("Recent");return d.jsxs(Qt,{children:[d.jsx(vn,{}),d.jsx(kb,{children:d.jsxs(Sb,{children:[d.jsxs(bb,{children:[d.jsx(gl,{children:"Home"}),d.jsx(Bo,{setStatus:t})]}),d.jsx(Cb,{children:Sr.map((n,r)=>d.jsx(ro,{information:n},r))})]})})]})}const Hb=S.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    background-color: var(--black);
    height: 100vh;
`,Wb=S.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`,Vb=S.div`
    display: flex;
    flex-direction: column;
    //background-color: grey;
    width: 90%;
    height: 50%;
    border-radius: 10px;
    box-shadow: 0 10px 20px var(--shadow);
    //border: 1px solid black;
`,Yb=S.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,Kb=S.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,Gb=S.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 30%;
`,Qb=S.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 27%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

`,Xb=S.div`
    display: flex;
    align-items: center; 
    height: 77%;
    overflow-y: scroll;
    justify-content: center;
`,Jb=S.button`
    background-color: var(--blue-low); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--light-blue);
    }
    cursor: pointer;
`,Zb=S.textarea`
   width: 80%;   
   background-color: grey;
   color: white;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,qb=S.textarea`
   width: 90%;   
   height: 80%;
   color: white;
   background-color: grey;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`,eC=S.div`
    display: flex;
    align-items: center; 
    height: 20%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,tC=S.button`
    background-color: var(--blue-low); 
    color: white;
    padding: 7px 15px;
    border: none;
    border-radius: 50px;
    align-items: center; 
    &:hover{
        background-color: var(--light-blue);
    }
    cursor: pointer;
`,nC=S(Ml)`
    //position: absolute;
        //top: 10px;
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
`;S.div`
   font-size: 30px;
   font-weight: 500;
   color: var(--white);

`;const rC=S.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background-color: var(--black);
   border-radius: 10px;
   //border: 0.5px solid grey;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
   height: 73px;
   transition: 0.1s ease-in-out;
   &:hover{
       background-color: grey;
   }
   cursor: pointer;
`,iC=S.div`
   display: flex;
   align-items: center;
   gap: 20px;
   color: var(--grey);
   margin-left: 2vw;
`,oC=S.img`
   width: 60px;
   border-radius: 100px;
`,aC=S.div`
   font-size: 25px;
   color: var(--white);
`;function Et({user:e,url:t}){const n=pn(),r=()=>{n(t)};return d.jsx(rC,{children:d.jsxs(iC,{onClick:r,children:[d.jsx(oC,{src:e.profilePic}),d.jsx(aC,{children:e.userName})]})})}const lC=S.div`
    font-size: 35px;
    font-weight: 600;
    color: var(--white);

`,Xl=S.div`
    font-size: 30px;
    font-weight: 600;
    color: var(--blue);

`,yi="/CodeConnect/assets/userPfp-3c07c570.png",xi="/CodeConnect/assets/userPfp2-778a6b44.png",sC={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:yi},uC={userName:"Boo",profilePic:xi},cC={userName:"Sonic",profilePic:kr};function fC(){pn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return d.jsxs(Qt,{children:[d.jsx(vn,{}),d.jsxs(Hb,{children:[d.jsx(Wb,{children:d.jsxs(Vb,{children:[d.jsxs(Qb,{children:[d.jsx(lC,{children:"New Direct Message"}),d.jsx(nC,{to:"/CodeConnect/direct-messages",children:"X"})]}),d.jsxs(Gb,{children:[d.jsx(Zb,{rows:"2",cols:"30"}),d.jsx(Jb,{children:"Search"})]}),d.jsx(Xb,{children:d.jsx(qb,{rows:"2",cols:"30"})}),d.jsx(eC,{children:d.jsx(tC,{children:"Send"})})]})}),d.jsxs(Yb,{children:[d.jsx(Kb,{children:d.jsx(Xl,{children:"Messages"})}),d.jsx(Et,{user:uC,url:e}),d.jsx(Et,{user:sC,url:t}),d.jsx(Et,{user:cC,url:n})]})]})]})}const dC=S.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`,pC=S.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,hC=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,mC=S.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,vC="/CodeConnect/assets/placeholder-profile-pic-f5f126af.png",gC="/CodeConnect/assets/profile2-8c27ae59.jpg",yC={profilePicture:vC,userName:"JasonSucksAtCoding69",title:"Learning React",time:"19 minutes ago",reaction:"🔥",description:"I am learning React for a school project, what are the best resources to learn from?",topic:"React",likes:"43",comments:"59"},xC={profilePicture:gC,userName:"RealEyesRealizeRealLies",title:"Growtopia - My new game!",time:"1 hour ago",reaction:"🌟",description:"I've been developing my farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!",topic:"Game Development",likes:"203",comments:"122"},wC={profilePicture:Eg,userName:"I<3Coding",title:"Internship Help",time:"4 hours ago",reaction:"",description:"I'm in my third year of university and I'm want to start applying to internships. I've never had an interview before and I was wondering what the process is normally like?",topic:"Career",likes:"94",comments:"73"};function kC(){const[e,t]=N.useState("Recent");return d.jsxs(Qt,{children:[d.jsx(vn,{}),d.jsx(dC,{children:d.jsxs(pC,{children:[d.jsxs(hC,{children:[d.jsx(gl,{children:"Home"}),d.jsx(Bo,{setStatus:t})]}),d.jsxs(mC,{children:[d.jsx(ro,{user:yC}),d.jsx(ro,{user:xC}),d.jsx(ro,{user:wC})]})]})})]})}const SC=S.div`

    margin-left: 20vw;
    display: flex;
    justify-content: center;
    width: 80vw;
    height: 100vh;
`,bC=S.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`,CC=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
`,EC=S.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`,PC=S.div`  
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
        background-color: black;
    }
    cursor: pointer;
`,jC=S.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 90%;
    height: 80%;
`,_C=S.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,NC=S.img`
    width: 60px;
    border-radius: 100px;
`,RC=S.div`
    font-size: 25px;
    color: var(--white);
`,TC=S.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,OC=S.div`
    font-size: 23px;
    color: var(--grey);
`;function Ks({user:e,targetUrl:t}){const n=pn(),r=()=>{n(t)};return d.jsx(PC,{onClick:r,children:d.jsxs(jC,{children:[d.jsxs(_C,{children:[d.jsx(NC,{src:e.profilePic}),d.jsx(RC,{children:e.userName})]}),d.jsx(TC,{children:d.jsx(OC,{children:e.text})})]})})}const AC=S.div`
    font-size: 50px;
    font-weight: 700;
    color: var(--white);

`,Jl=S(Ml)`
  position: fixed;
  text-decoration: none;
  bottom: 20px;
  right: 50px;
  background-color: #558FFF; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  transition: 0.2s ease-in-out;
    &:hover{
        background-color: blue;
    }
  cursor: pointer;
`,LC={userName:"Boo",text:"HAAHAHAHHAHHAHAHAHAHHAHHAHHAHHAHHAHA",profilePic:xi},IC={userName:"Kirby",text:"Words words words words. Words words words.",profilePic:yi},MC={userName:"Sonic",text:"You just gotta go fast bro",profilePic:kr};function DC(){pn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic",[r,i]=N.useState("Recents");return d.jsxs(Qt,{children:[d.jsx(vn,{}),d.jsxs(SC,{children:[d.jsxs(bC,{children:[d.jsxs(CC,{children:[d.jsx(AC,{children:"Direct Messages"}),d.jsx(Bo,{setStatus:i})]}),d.jsxs(EC,{children:[d.jsx(Ks,{user:LC,targetUrl:e}),d.jsx(Ks,{user:IC,targetUrl:t}),d.jsx(Ks,{user:MC,targetUrl:n})]})]}),d.jsx(Jl,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const zC=S.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,FC=S.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,$C=S.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,UC=S.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,BC=S.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,HC=S.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: #1B1B1B;
    }
    cursor: pointer;
`,WC=S.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,VC=S.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,YC=S.button`
    background-color: var(--blue-low); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: blue;
    }
    cursor: pointer;
`,KC=S.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,Yf=S.div`
    font-size: 60px;
    font-weight: 500;
    color: var(--white);

`,Kf=S.img`
    width: 60px;
    border-radius: 100px;
`,GC=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border: 1px solid black;
    height: 150px;
    transition: 0.1s ease-in-out;
    &:hover{
        background-color: grey;
    }
`,QC=S.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    height: 80%;
`,XC=S.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`,JC=S.img`
    width: 60px;
    border-radius: 100px;
`,ZC=S.div`
    font-size: 25px;
    color: var(--white);
`,qC=S.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,e3=S.div`
    font-size: 23px;
    color: var(--white);
`;function bt({user:e,text:t}){return d.jsx(GC,{children:d.jsxs(QC,{children:[d.jsxs(XC,{children:[d.jsx(JC,{src:e.profilePic}),d.jsx(ZC,{children:e.userName})]}),d.jsx(qC,{children:d.jsx(e3,{children:e.message})})]})})}const Ch={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Bl},Gs={message:"Words words words words. Words words words.",userName:"Kirby",profilePic:yi},t3={userName:"Boo",profilePic:xi},n3={userName:"Sonic",profilePic:kr};function r3(){pn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return d.jsxs(Qt,{children:[d.jsx(vn,{}),d.jsxs(zC,{children:[d.jsx(FC,{children:d.jsxs($C,{children:[d.jsxs(HC,{children:[d.jsx(Kf,{src:yi}),d.jsx(Yf,{children:"Kirby"})]}),d.jsxs(WC,{children:[d.jsx(bt,{user:Gs}),d.jsx(bt,{user:Ch}),d.jsx(bt,{user:Gs}),d.jsx(bt,{user:Ch})]}),d.jsxs(VC,{children:[d.jsx(KC,{rows:"2",cols:"20"}),d.jsx(YC,{children:"Send"})]})]})}),d.jsxs(BC,{children:[d.jsx(UC,{children:d.jsx(Xl,{children:"Messages"})}),d.jsx(Et,{user:t3,url:e}),d.jsx(Et,{user:Gs,url:t}),d.jsx(Et,{user:n3,url:n})]}),d.jsx(Jl,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const i3=S.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,o3=S.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,a3=S.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,l3=S.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,s3=S.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,u3=S.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: #1B1B1B;
    }
    cursor: pointer;
`,c3=S.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,f3=S.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,d3=S.button`
    background-color: var(--blue-low); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: blue;
    }
    cursor: pointer;
`,p3=S.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,Eh={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Bl},h3={userName:"Kirby",profilePic:yi},Qs={message:"HAHAHHAHAHAH.",userName:"Boo",profilePic:xi},m3={userName:"Sonic",profilePic:kr};function v3(){pn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return d.jsxs(Qt,{children:[d.jsx(vn,{}),d.jsxs(i3,{children:[d.jsx(o3,{children:d.jsxs(a3,{children:[d.jsxs(u3,{children:[d.jsx(Kf,{src:xi}),d.jsx(Yf,{children:"Boo"})]}),d.jsxs(c3,{children:[d.jsx(bt,{user:Qs}),d.jsx(bt,{user:Eh}),d.jsx(bt,{user:Qs}),d.jsx(bt,{user:Eh})]}),d.jsxs(f3,{children:[d.jsx(p3,{rows:"2",cols:"20"}),d.jsx(d3,{children:"Send"})]})]})}),d.jsxs(s3,{children:[d.jsx(l3,{children:d.jsx(Xl,{children:"Messages"})}),d.jsx(Et,{user:Qs,url:e}),d.jsx(Et,{user:h3,url:t}),d.jsx(Et,{user:m3,url:n})]}),d.jsx(Jl,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const g3=S.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
`,y3=S.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,x3=S.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
`,w3=S.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`,k3=S.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`,S3=S.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: #1B1B1B;
    }
    cursor: pointer;
`,b3=S.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`,C3=S.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`,E3=S.button`
    background-color: var(--blue-low); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: blue;
    }
    cursor: pointer;
`,P3=S.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`,Ph={message:"Words words words words. Words words words.",userName:"PixelPioneer",profilePic:Bl},j3={userName:"Kirby",profilePic:yi},_3={userName:"Boo",profilePic:xi},Xs={message:"Gotta go fast bro",userName:"Sonic",profilePic:kr};function N3(){pn();const e="/CodeConnect/dm-boo",t="/CodeConnect/dm-kirby",n="/CodeConnect/dm-sonic";return d.jsxs(Qt,{children:[d.jsx(vn,{}),d.jsxs(g3,{children:[d.jsx(y3,{children:d.jsxs(x3,{children:[d.jsxs(S3,{children:[d.jsx(Kf,{src:kr}),d.jsx(Yf,{children:"Sonic"})]}),d.jsxs(b3,{children:[d.jsx(bt,{user:Xs}),d.jsx(bt,{user:Ph}),d.jsx(bt,{user:Xs}),d.jsx(bt,{user:Ph})]}),d.jsxs(C3,{children:[d.jsx(P3,{rows:"2",cols:"20"}),d.jsx(E3,{children:"Send"})]})]})}),d.jsxs(k3,{children:[d.jsx(w3,{children:d.jsx(Xl,{children:"Messages"})}),d.jsx(Et,{user:_3,url:e}),d.jsx(Et,{user:j3,url:t}),d.jsx(Et,{user:Xs,url:n})]}),d.jsx(Jl,{to:"/CodeConnect/new-direct-message",children:"New +"})]})]})}const R3=qx([{path:"/CodeConnect/",element:d.jsx(_2,{})},{path:"/CodeConnect/home",element:d.jsx(Bb,{})},{path:"/CodeConnect/explore",element:d.jsx(ab,{})},{path:"/CodeConnect/direct-messages",element:d.jsx(DC,{})},{path:"/CodeConnect/dm-kirby",element:d.jsx(r3,{})},{path:"/CodeConnect/dm-boo",element:d.jsx(v3,{})},{path:"/CodeConnect/dm-sonic",element:d.jsx(N3,{})},{path:"/CodeConnect/new-direct-message",element:d.jsx(fC,{})},{path:"/CodeConnect/account",element:d.jsx(xb,{})},{path:"/CodeConnect/guest-home",element:d.jsx(kC,{})}]),T3=Js.createRoot(document.getElementById("root"));T3.render(d.jsxs("div",{children:[d.jsx(wb,{}),d.jsx(lw,{router:R3})]}));
